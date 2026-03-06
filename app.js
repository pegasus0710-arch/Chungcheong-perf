/* ═══════════════════════════════════════════════
   충청영업팀 실적관리 v10  —  app.js
   ─────────────────────────────────────────────
   핵심 수정:
   - Firestore 월키 문자열/숫자 혼용 → 항상 문자열 "0"~"11"
   - 판매/매출 전역 모드 분리
   - 반응형 레이아웃
   - 입력 시 행 합계 실시간 표시
   ═══════════════════════════════════════════════ */

const { useState, useEffect, useCallback, useMemo } = React;
const APP_VER = "v12";

// ─── 상수 ───────────────────────────────────────
const MONTHS    = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
const INP_KEYS  = ["CE","혼수","입주","이사","SAC","거주중","SMB","농협","휴대폰"];
const MODES     = ["매출","판매"];

// ─── 파생값 계산 ────────────────────────────────
const g = (obj, k) => parseFloat(obj?.[k]) || 0;
const derived = obj => ({
  뉴홈:    g(obj,"입주") + g(obj,"이사"),
  대외영업: g(obj,"혼수") + g(obj,"입주") + g(obj,"이사") + g(obj,"SMB") + g(obj,"농협") + g(obj,"거주중") + g(obj,"휴대폰"),
  B2B:     g(obj,"SMB") + g(obj,"농협") + g(obj,"휴대폰"),
});
const fullRow = obj => ({ ...(obj||{}), ...derived(obj) });
const gNum    = v => parseFloat(v) || 0;

// ─── 월 키: 항상 문자열 "0"~"11" ────────────────
const mk = i => String(i);

// ─── 빈 데이터 구조 ──────────────────────────────
const emptyMonths = () =>
  Object.fromEntries(Array.from({length:12},(_,i) =>
    [mk(i), Object.fromEntries(INP_KEYS.map(k=>[k,""]))]
  ));

const emptyYear = hasTgt => hasTgt
  ? { perf: emptyMonths(), target: emptyMonths() }
  : { perf: emptyMonths() };

const initData = () => ({
  "24": { 매출: emptyYear(false), 판매: emptyYear(false) },
  "25": { 매출: emptyYear(true),  판매: emptyYear(true)  },
  "26": { 매출: emptyYear(true),  판매: emptyYear(true)  },
});

// ─── 구버전 데이터 마이그레이션 ─────────────────
// ─── 데이터 정규화 (Firestore 키 형식 무관하게 처리) ─
const normalizeMonths = src => {
  const result = {};
  for (let i=0; i<12; i++) {
    // Firestore에서 숫자키(0)/문자키("0") 모두 시도
    const v = src?.[i] || src?.[String(i)] || {};
    result[String(i)] = {};
    INP_KEYS.forEach(k => { result[String(i)][k] = v[k] ?? ""; });
  }
  return result;
};

const migrate = raw => {
  if (!raw) return initData();
  const result = initData();
  ["24","25","26"].forEach(yr => {
    if (!raw[yr]) return;
    MODES.forEach(mode => {
      // 구버전(판매/매출 분리 전) 데이터는 매출로 이동
      const src = raw[yr]?.[mode]
        || (mode==="매출" && !raw[yr]?.["매출"] ? raw[yr] : null);
      if (!src) return;
      ["perf","target"].forEach(type => {
        if (!src[type]) return;
        result[yr][mode][type] = normalizeMonths(src[type]);
      });
    });
  });
  return result;
};

// ─── 숫자 포맷 ───────────────────────────────────
const fmt  = v => { const n=gNum(v); return n>0 ? Math.round(n).toLocaleString() : "-"; };
const fmtD = v => { const n=gNum(v); return n>0 ? n.toFixed(1)+"억" : ""; };
const sumM = (d, key) => Array.from({length:12},(_,i)=>gNum(fullRow(d?.[mk(i)])[key])).reduce((a,b)=>a+b,0);
const sumR = (d, key, from, to) => Array.from({length:to-from+1},(_,i)=>gNum(fullRow(d?.[mk(from+i)])[key])).reduce((a,b)=>a+b,0);
const rate = (a,b) => b ? (a/b*100).toFixed(1) : null;
const grow = (c,p) => p ? ((c-p)/p*100).toFixed(1) : null;

// ─── 색상 ───────────────────────────────────────
const C = {
  bg:"#07101f", surf:"#0b1929", card:"#0f2035", card2:"#132843",
  b1:"#1b3353", b2:"#213d63", text:"#cce4f7", muted:"#4a6a88", muted2:"#7a9ab8",
  accent:"#7c83f5", blue:"#38b6f5", green:"#2dd488", orange:"#f5b942",
  red:"#f07070", purple:"#d97af5", teal:"#2dd4c0",
  매출:"#38b6f5", 판매:"#2dd488",
};
const KC = {
  CE:"#7c83f5", 대외영업:"#38b6f5", 혼수:"#f5b942", 뉴홈:"#2dd488",
  입주:"#5ee8b0", 이사:"#80f0de", SAC:"#d97af5", 거주중:"#b87af5",
  B2B:"#f58f42", SMB:"#f5c090", 농협:"#f5e090", 휴대폰:"#90a8c0",
};

// ─── 행 정의 ────────────────────────────────────
const ROWS = [
  {key:"CE",      lv:0, inp:true,  bold:true},
  {key:"대외영업", lv:0, inp:false, bold:true},
  {key:"혼수",    lv:1, inp:true,  bold:false},
  {key:"뉴홈",    lv:1, inp:false, bold:false},
  {key:"입주",    lv:2, inp:true,  bold:false},
  {key:"이사",    lv:2, inp:true,  bold:false},
  {key:"SAC",     lv:1, inp:true,  bold:false},
  {key:"거주중",  lv:2, inp:true,  bold:false},
  {key:"B2B",     lv:1, inp:false, bold:false},
  {key:"SMB",     lv:2, inp:true,  bold:false},
  {key:"농협",    lv:2, inp:true,  bold:false},
  {key:"휴대폰",  lv:1, inp:true,  bold:false},
];

// ─── 공통 UI ────────────────────────────────────
const Chip = ({c=C.accent,children}) => (
  <span style={{background:c+"22",color:c,border:`1px solid ${c}44`,
    borderRadius:5,padding:"2px 8px",fontSize:10,fontWeight:700,whiteSpace:"nowrap"}}>
    {children}
  </span>
);

const pctColor = v => { const n=gNum(v); return n>=100?C.green:n>=80?C.orange:C.red; };
const growColor = v => { const n=gNum(v); return n>0?C.green:n<0?C.red:C.muted2; };
const growText  = v => { const n=gNum(v); return n>0?`▲${v}%`:n<0?`▼${Math.abs(n)}%`:"─0%"; };

// ═══════════════════════════════════════════════
//  실적 입력 탭
// ═══════════════════════════════════════════════
function InputTab({data, setData, mode, onSave, saveState, hasUnsaved}) {
  const [yr, setYr]         = useState("26");
  const [mi, setMi]         = useState(0);
  const [inputMode, setInputMode] = useState("single"); // single | bulk

  const hasTgt = yr !== "24";
  const mColor = C[mode];
  const mD = data[yr]?.[mode] || emptyYear(hasTgt);
  const pD = mD.perf   || emptyMonths();
  const tD = mD.target || emptyMonths();

  // 데이터 있는 마지막 월로 자동 이동 (Firebase 로드 후에도 재실행)
  useEffect(() => {
    for (let i=11; i>=0; i--) {
      if (INP_KEYS.some(k => gNum(pD[mk(i)]?.[k]) > 0)) { setMi(i); return; }
    }
  }, [yr, mode, data]); // data 포함 → Firebase 로드 완료 후 재실행

  const setVal = useCallback((type, monthIdx, key, val) => {
    setData(prev => {
      const mKey = mk(monthIdx);
      const yr_ = prev[yr] || {};
      const mode_ = yr_[mode] || emptyYear(hasTgt);
      const type_ = mode_[type] || emptyMonths();
      return {
        ...prev,
        [yr]: { ...yr_, [mode]: { ...mode_,
          [type]: { ...type_, [mKey]: { ...(type_[mKey]||{}), [key]: val } }
        }}
      };
    });
  }, [yr, mode, hasTgt, setData]);

  const pRow = fullRow(pD[mk(mi)]);
  const tRow = hasTgt ? fullRow(tD[mk(mi)]) : {};
  const pYear = key => sumM(pD, key);
  const tYear = key => sumM(tD, key);

  return (
    <div style={{display:"flex",flexDirection:"column",gap:12}}>

      {/* 컨트롤 바 */}
      <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,
        padding:"12px 16px",display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>

        {/* 연도 */}
        <div style={{display:"flex",gap:4}}>
          {[["24","실적"],["25","실적+목표"],["26","실적+목표"]].map(([y,d])=>(
            <button key={y} onClick={()=>setYr(y)} style={{
              padding:"6px 12px",borderRadius:7,cursor:"pointer",fontSize:12,fontWeight:700,
              fontFamily:"inherit",border:`1px solid ${yr===y?C.accent:C.b2}`,
              background:yr===y?C.accent+"22":"transparent",color:yr===y?C.accent:C.muted}}>
              {y}년<span style={{fontSize:9,opacity:.7,marginLeft:3}}>({d})</span>
            </button>
          ))}
        </div>

        {/* 입력방식 */}
        <div style={{display:"flex",gap:3}}>
          {[["single","월별입력"],["bulk","전체일괄"]].map(([v,l])=>(
            <button key={v} onClick={()=>setInputMode(v)} style={{
              padding:"5px 11px",borderRadius:6,cursor:"pointer",fontSize:11,fontWeight:700,
              fontFamily:"inherit",border:`1px solid ${inputMode===v?C.blue:C.b1}`,
              background:inputMode===v?C.blue+"22":"transparent",
              color:inputMode===v?C.blue:C.muted}}>{l}</button>
          ))}
        </div>

        {/* 월 탭 (월별 모드) */}
        {inputMode==="single" && (
          <div style={{display:"flex",gap:2,flexWrap:"wrap",flex:1}}>
            {MONTHS.map((m,i)=>{
              const has = INP_KEYS.some(k=>gNum(pD[mk(i)]?.[k])>0);
              return (
                <button key={m} onClick={()=>setMi(i)} style={{
                  padding:"4px 8px",borderRadius:5,cursor:"pointer",fontSize:11,fontWeight:600,
                  fontFamily:"inherit",border:`1px solid ${mi===i?mColor:has?C.green+"60":C.b1}`,
                  background:mi===i?mColor+"22":"transparent",
                  color:mi===i?mColor:has?C.green:C.muted}}>
                  {m.replace("월","")}
                </button>
              );
            })}
          </div>
        )}
        {inputMode==="bulk" && <div style={{flex:1}}/>}

        {/* 저장 버튼 */}
        <button onClick={onSave} disabled={saveState==="saving"} style={{
          padding:"8px 20px",borderRadius:8,border:"none",cursor:"pointer",
          fontFamily:"inherit",fontWeight:800,fontSize:12,flexShrink:0,
          background:saveState==="saved"?C.green:hasUnsaved?`linear-gradient(135deg,${C.accent},${C.blue})`:C.b2,
          color:"#fff",boxShadow:hasUnsaved&&saveState==="idle"?`0 0 14px ${C.accent}50`:"none",
          transition:"all .2s"}}>
          {saveState==="saving"?"저장중...":saveState==="saved"?"✓ 완료":"💾 저장"}
        </button>
      </div>

      {/* 전체 일괄 입력 */}
      {inputMode==="bulk" && (
        <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:16,overflowX:"auto"}}>
          <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:4}}>
            {yr}년 · {mode} · 전체 일괄 입력
            <span style={{color:C.muted,fontSize:11,fontWeight:400,marginLeft:8}}>억원 (소수점 가능)</span>
          </div>
          {hasTgt && (
            <div style={{display:"flex",gap:8,marginBottom:10,fontSize:11}}>
              <Chip c={mColor}>실적 (상단)</Chip>
              <Chip c={C.blue}>목표 (하단)</Chip>
            </div>
          )}
          <table style={{borderCollapse:"collapse",fontSize:11}}>
            <thead>
              <tr style={{borderBottom:`1px solid ${C.b1}`}}>
                <th style={{padding:"5px 12px",textAlign:"left",color:C.muted,fontWeight:600,
                  minWidth:72,position:"sticky",left:0,background:C.card2,zIndex:2}}>항목</th>
                {MONTHS.map(m=>(
                  <th key={m} style={{padding:"5px 4px",textAlign:"center",color:C.muted,
                    fontWeight:600,minWidth:hasTgt?98:60}}>{m}</th>
                ))}
                <th style={{padding:"5px 10px",textAlign:"right",color:C.accent,fontWeight:700,minWidth:56}}>합계</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.filter(r=>r.inp).map(r=>(
                <tr key={r.key} style={{borderBottom:`1px solid ${C.b1}18`}}>
                  <td style={{padding:"4px 12px",paddingLeft:12+r.lv*12,
                    color:KC[r.key]||C.muted2,fontWeight:r.lv===0?700:500,fontSize:11,
                    position:"sticky",left:0,background:C.card2,zIndex:1,whiteSpace:"nowrap"}}>
                    {r.lv>0?"└ ":""}{r.key}
                  </td>
                  {MONTHS.map((_,mi2)=>{
                    const pv = pD[mk(mi2)]?.[r.key]??"";
                    const tv = hasTgt?(tD[mk(mi2)]?.[r.key]??""):null;
                    const p=gNum(pv), t=gNum(tv??0);
                    const a=hasTgt&&t>0?rate(p,t):null;
                    return (
                      <td key={mi2} style={{padding:"2px 4px",textAlign:"center"}}>
                        <div style={{display:"flex",flexDirection:"column",gap:1,alignItems:"center"}}>
                          <input type="number" step="any" min="0" placeholder="0" value={pv}
                            onChange={e=>setVal("perf",mi2,r.key,e.target.value)}
                            style={{width:hasTgt?42:54,background:C.bg,border:`1px solid ${C.b1}`,
                              borderRadius:4,padding:"3px 5px",color:C.text,fontSize:10,
                              outline:"none",textAlign:"right",fontFamily:"inherit"}}
                            onFocus={e=>e.target.style.borderColor=KC[r.key]||C.accent}
                            onBlur={e=>e.target.style.borderColor=C.b1}
                          />
                          {hasTgt&&(
                            <input type="number" step="any" min="0" placeholder="0" value={tv??""}
                              onChange={e=>setVal("target",mi2,r.key,e.target.value)}
                              style={{width:42,background:C.bg,border:`1px solid ${C.b1}`,
                                borderRadius:4,padding:"3px 5px",color:C.blue,fontSize:10,
                                outline:"none",textAlign:"right",fontFamily:"inherit"}}
                              onFocus={e=>e.target.style.borderColor=C.blue}
                              onBlur={e=>e.target.style.borderColor=C.b1}
                            />
                          )}
                          {a&&<span style={{color:pctColor(a),fontSize:9,fontWeight:700}}>{a}%</span>}
                        </div>
                      </td>
                    );
                  })}
                  <td style={{padding:"4px 10px",textAlign:"right"}}>
                    <span title={fmtD(sumM(pD,r.key))}
                      style={{color:KC[r.key]||C.accent,fontWeight:700,fontSize:11,cursor:"default"}}>
                      {fmt(sumM(pD,r.key))}억
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 월별 입력 영역 */}
      {inputMode==="single" && (
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:12}}>

        {/* 실적 입력 */}
        <div style={{background:C.card2,border:`1px solid ${mColor}44`,borderRadius:12,
          padding:16,borderTop:`3px solid ${mColor}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{color:C.text,fontWeight:800,fontSize:13}}>
              실적 입력 <span style={{color:C.muted,fontSize:11,fontWeight:400}}>
                · {yr}년 {MONTHS[mi]} · {mode}
              </span>
            </div>
            <Chip c={mColor}>{mode}</Chip>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            {ROWS.map(r=>{
              if (!r.inp) return (
                <div key={r.key} style={{display:"flex",alignItems:"center",gap:6,
                  paddingLeft:r.lv*16,margin:"3px 0 1px"}}>
                  <div style={{height:1,width:8,background:C.b2,flexShrink:0}}/>
                  <span style={{color:KC[r.key]||C.muted2,fontSize:10,fontWeight:700}}>{r.key}</span>
                  <span style={{color:C.muted,fontSize:9}}>(자동계산)</span>
                  <div style={{flex:1,height:1,background:C.b2}}/>
                  <span title={fmtD(pRow[r.key])}
                    style={{color:KC[r.key]||C.muted2,fontSize:11,fontWeight:700,minWidth:40,textAlign:"right",cursor:"default"}}>
                    {fmt(pRow[r.key])}
                  </span>
                </div>
              );
              return (
                <div key={r.key} style={{display:"flex",alignItems:"center",gap:6,
                  paddingLeft:r.lv*16+(r.lv>0?8:0)}}>
                  {r.lv>0&&<span style={{color:C.b2,fontSize:10,flexShrink:0}}>└</span>}
                  <span style={{width:48,fontSize:11,flexShrink:0,fontWeight:r.bold?800:400,
                    color:r.bold?(KC[r.key]||C.text):C.muted2}}>{r.key}</span>
                  <input type="number" step="any" min="0" placeholder="0"
                    value={pD[mk(mi)]?.[r.key]??""}
                    onChange={e=>setVal("perf",mi,r.key,e.target.value)}
                    style={{flex:1,background:C.bg,border:`1px solid ${C.b2}`,borderRadius:6,
                      padding:"5px 8px",color:KC[r.key]||C.text,fontSize:12,outline:"none",
                      fontFamily:"inherit",textAlign:"right",WebkitAppearance:"none",MozAppearance:"textfield"}}
                    onFocus={e=>{e.target.style.borderColor=KC[r.key]||C.accent;e.target.style.boxShadow=`0 0 0 2px ${KC[r.key]||C.accent}22`}}
                    onBlur={e=>{e.target.style.borderColor=C.b2;e.target.style.boxShadow="none"}}
                  />
                  <span style={{color:C.muted,fontSize:10,width:14,flexShrink:0}}>억</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 목표 입력 */}
        {hasTgt ? (
          <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{color:C.text,fontWeight:800,fontSize:13}}>
                목표 입력 <span style={{color:C.muted,fontSize:11,fontWeight:400}}>
                  · {yr}년 {MONTHS[mi]} · {mode}
                </span>
              </div>
              <Chip c={C.blue}>목표</Chip>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:5}}>
              {ROWS.map(r=>{
                if (!r.inp) return (
                  <div key={r.key} style={{display:"flex",alignItems:"center",gap:6,
                    paddingLeft:r.lv*16,margin:"3px 0 1px"}}>
                    <div style={{height:1,width:8,background:C.b2,flexShrink:0}}/>
                    <span style={{color:KC[r.key]||C.muted2,fontSize:10,fontWeight:700}}>{r.key}</span>
                    <span style={{color:C.muted,fontSize:9}}>(자동)</span>
                    <div style={{flex:1,height:1,background:C.b2}}/>
                    <span title={fmtD(tRow[r.key])}
                      style={{color:KC[r.key]||C.muted2,fontSize:11,fontWeight:700,minWidth:40,textAlign:"right",cursor:"default"}}>
                      {fmt(tRow[r.key])}
                    </span>
                  </div>
                );
                const p=gNum(pRow[r.key]), t=gNum(tD[mk(mi)]?.[r.key]);
                const a=t>0?rate(p,t):null;
                return (
                  <div key={r.key} style={{display:"flex",alignItems:"center",gap:6,
                    paddingLeft:r.lv*16+(r.lv>0?8:0)}}>
                    {r.lv>0&&<span style={{color:C.b2,fontSize:10,flexShrink:0}}>└</span>}
                    <span style={{width:48,fontSize:11,flexShrink:0,fontWeight:r.bold?800:400,
                      color:r.bold?(KC[r.key]||C.text):C.muted2}}>{r.key}</span>
                    <input type="number" step="any" min="0" placeholder="0"
                      value={tD[mk(mi)]?.[r.key]??""}
                      onChange={e=>setVal("target",mi,r.key,e.target.value)}
                      style={{flex:1,background:C.bg,border:`1px solid ${C.b2}`,borderRadius:6,
                        padding:"5px 8px",color:C.blue,fontSize:12,outline:"none",
                        fontFamily:"inherit",textAlign:"right",WebkitAppearance:"none",MozAppearance:"textfield"}}
                      onFocus={e=>{e.target.style.borderColor=C.blue;e.target.style.boxShadow=`0 0 0 2px ${C.blue}22`}}
                      onBlur={e=>{e.target.style.borderColor=C.b2;e.target.style.boxShadow="none"}}
                    />
                    {a!==null&&(
                      <span style={{color:pctColor(a),fontSize:10,width:36,textAlign:"right",
                        fontWeight:700,flexShrink:0}}>{a}%</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:16,
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{color:C.muted,fontSize:12}}>24년은 실적 데이터만 입력합니다</span>
          </div>
        )}

        {/* 우측 합계 패널 */}
        <div style={{width:180,display:"flex",flexDirection:"column",gap:10}}>

          {/* 월 합계 */}
          <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:14}}>
            <div style={{color:C.text,fontWeight:800,fontSize:12,marginBottom:10}}>
              {MONTHS[mi]} 합계
            </div>
            {["CE","대외영업","뉴홈","SAC","B2B"].map(key=>{
              const pv=pRow[key], tv=hasTgt?tRow[key]:0;
              const a=hasTgt&&tv>0?rate(pv,tv):null;
              return (
                <div key={key} style={{marginBottom:8,paddingBottom:8,borderBottom:`1px solid ${C.b1}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                    <span style={{color:KC[key]||C.muted2,fontSize:11,fontWeight:700}}>{key}</span>
                    <span title={fmtD(pv)} style={{color:C.text,fontSize:12,fontWeight:800,cursor:"default"}}>
                      {fmt(pv)}
                    </span>
                  </div>
                  {a!==null&&(
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <span style={{color:C.muted,fontSize:10}}>목표달성</span>
                      <span style={{color:pctColor(a),fontSize:10,fontWeight:700}}>{a}%</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 연간 누계 */}
          <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:14}}>
            <div style={{color:C.text,fontWeight:800,fontSize:12,marginBottom:10}}>
              {yr}년 누계
            </div>
            {["CE","대외영업","뉴홈","SAC","B2B"].map(key=>{
              const pv=pYear(key), tv=hasTgt?tYear(key):0;
              const a=hasTgt&&tv>0?rate(pv,tv):null;
              return (
                <div key={key} style={{marginBottom:7}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                    <span style={{color:KC[key]||C.muted2,fontSize:10}}>{key}</span>
                    <span title={fmtD(pv)} style={{color:KC[key]||C.text,fontSize:11,fontWeight:700,cursor:"default"}}>
                      {fmt(pv)}억
                    </span>
                  </div>
                  {a!==null&&tv>0&&(
                    <div style={{height:2,background:C.b1,borderRadius:1,overflow:"hidden"}}>
                      <div style={{height:"100%",width:`${Math.min(gNum(a),100)}%`,
                        background:pctColor(a),borderRadius:1,transition:"width .3s"}}/>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CE 비중 */}
          <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:14}}>
            <div style={{color:C.text,fontWeight:700,fontSize:12,marginBottom:8}}>CE 비중</div>
            {(()=>{
              const ce=pRow.CE, hp=pRow.휴대폰, dw=pRow.대외영업;
              if(!ce) return <div style={{color:C.muted,fontSize:11}}>CE 입력 후 표시</div>;
              return ["대외영업","혼수","뉴홈","SAC","B2B"].map(key=>{
                const v=key==="대외영업"?(dw-hp):pRow[key];
                const s=(v/ce*100).toFixed(1);
                return (
                  <div key={key} style={{marginBottom:5}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}>
                      <span style={{color:C.muted2,fontSize:10}}>{key}</span>
                      <span style={{color:KC[key]||C.text,fontSize:10,fontWeight:700}}>{s}%</span>
                    </div>
                    <div style={{height:2,background:C.b1,borderRadius:1,overflow:"hidden"}}>
                      <div style={{height:"100%",width:`${Math.min(parseFloat(s),100)}%`,
                        background:KC[key]||C.accent}}/>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════
//  대시보드 탭
// ═══════════════════════════════════════════════
function Dashboard({data, mode}) {
  const p26 = data["26"]?.[mode]?.perf   || emptyMonths();
  const t26 = data["26"]?.[mode]?.target || emptyMonths();
  const p25 = data["25"]?.[mode]?.perf   || emptyMonths();

  // 마지막 입력월
  let lastMi = -1;
  for(let i=11;i>=0;i--) if(INP_KEYS.some(k=>gNum(p26[mk(i)]?.[k])>0)){lastMi=i;break;}
  const emi = lastMi>=0 ? lastMi : new Date().getMonth();

  const yp26 = key => sumR(p26,key,0,emi);
  const yt26 = key => sumR(t26,key,0,emi);
  const yp25 = key => sumR(p25,key,0,emi);

  const mColor = C[mode];

  const KPIs = ["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"];

  return (
    <div style={{display:"flex",flexDirection:"column",gap:14}}>

      {/* 안내 바 */}
      <div style={{background:C.card2,border:`1px solid ${mColor}44`,borderRadius:8,
        padding:"8px 14px",display:"flex",alignItems:"center",gap:8}}>
        <span style={{color:mColor,fontWeight:800,fontSize:12}}>{mode}</span>
        <span style={{color:C.muted2,fontSize:11}}>
          26년 {MONTHS[emi]} 누계 기준 · 전년(25년) 동기 비교 ·
          숫자에 마우스 올리면 소수점 1자리 표시
        </span>
      </div>

      {/* KPI 카드 */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:10}}>
        {["CE","대외영업","혼수","뉴홈","SAC","B2B"].map(key=>{
          const v26=yp26(key), v25=yp25(key), vt=yt26(key);
          const gr=grow(v26,v25), ar=rate(v26,vt);
          return (
            <div key={key} style={{background:C.card2,border:`1px solid ${C.b1}`,
              borderRadius:12,padding:"14px 16px",borderTop:`3px solid ${KC[key]||C.accent}`}}>
              <div style={{color:C.muted,fontSize:11,marginBottom:4}}>{key}</div>
              <div title={fmtD(v26)} style={{color:C.text,fontSize:20,fontWeight:900,
                marginBottom:4,cursor:"default"}}>
                {v26>0?Math.round(v26).toLocaleString()+"억":<span style={{color:C.muted}}>-</span>}
              </div>
              <div style={{display:"flex",gap:8,marginBottom:4}}>
                {gr&&<span style={{color:growColor(gr),fontSize:10,fontWeight:700}}>{growText(gr)}</span>}
                {ar&&<span style={{color:pctColor(ar),fontSize:10,fontWeight:600}}>달성 {ar}%</span>}
              </div>
              {vt>0&&(
                <div style={{height:3,background:C.b1,borderRadius:2,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${Math.min(gNum(ar),100)}%`,
                    background:pctColor(ar),borderRadius:2}}/>
                </div>
              )}
              {v25>0&&(
                <div style={{color:C.muted,fontSize:10,marginTop:4}}>
                  <span title={fmtD(v25)}>전년 {Math.round(v25).toLocaleString()}</span>억
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 2열 그리드 */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>

        {/* 전년비 성장률 */}
        <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:16}}>
          <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
            전년비 성장률 <span style={{color:C.muted,fontWeight:400,fontSize:11}}>26년 vs 25년</span>
          </div>
          {KPIs.map(key=>{
            const v26=yp26(key),v25=yp25(key);
            const gr=grow(v26,v25);
            return (
              <div key={key} style={{display:"flex",justifyContent:"space-between",
                alignItems:"center",padding:"5px 0",borderBottom:`1px solid ${C.b1}22`}}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:KC[key]||C.muted}}/>
                  <span style={{color:C.muted2,fontSize:12}}>{key}</span>
                </div>
                <div style={{display:"flex",gap:10,alignItems:"center"}}>
                  <span style={{color:C.muted,fontSize:10}}>
                    <span title={fmtD(v25)}>{v25>0?Math.round(v25).toLocaleString():"-"}</span>
                    →<span title={fmtD(v26)}>{v26>0?Math.round(v26).toLocaleString():"-"}</span>
                  </span>
                  <span style={{color:gr?growColor(gr):C.muted,fontWeight:700,fontSize:11,
                    minWidth:60,textAlign:"right"}}>{gr?growText(gr):"-"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 목표 달성률 */}
        <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:16}}>
          <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
            목표 달성률 <span style={{color:C.muted,fontWeight:400,fontSize:11}}>{MONTHS[emi]} 누계</span>
          </div>
          {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key=>{
            const pv=yp26(key),tv=yt26(key);
            const a=rate(pv,tv);
            return (
              <div key={key} style={{marginBottom:8}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{color:C.muted2,fontSize:12}}>{key}</span>
                  <span style={{color:a?pctColor(a):C.muted,fontWeight:700,fontSize:12}}>{a?a+"%":"-"}</span>
                </div>
                {tv>0&&(
                  <>
                    <div style={{height:3,background:C.b1,borderRadius:2,overflow:"hidden",marginBottom:2}}>
                      <div style={{height:"100%",width:`${Math.min(gNum(a),100)}%`,
                        background:pctColor(a),borderRadius:2}}/>
                    </div>
                    <div style={{color:C.muted,fontSize:10}}>
                      <span title={fmtD(pv)}>{pv>0?Math.round(pv).toLocaleString():"-"}</span>억
                      / 목표 <span title={fmtD(tv)}>{Math.round(tv).toLocaleString()}</span>억
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 월별 막대 차트 */}
      <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,padding:16}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={{color:C.text,fontWeight:800,fontSize:13}}>
            CE 월별 추이 · {mode}
          </div>
          <div style={{display:"flex",gap:6}}>
            {[["25년실","#4a5a80"],["26년실",mColor],["26년목",C.orange]].map(([l,c])=>(
              <span key={l} style={{display:"flex",alignItems:"center",gap:4}}>
                <span style={{width:8,height:8,borderRadius:2,background:c,display:"inline-block"}}/>
                <span style={{color:C.muted,fontSize:10}}>{l}</span>
              </span>
            ))}
          </div>
        </div>
        {(()=>{
          const bars = MONTHS.map((_,i)=>({
            p25:gNum(fullRow(p25[mk(i)]).CE),
            p26:gNum(fullRow(p26[mk(i)]).CE),
            t26:gNum(fullRow(t26[mk(i)]).CE),
          }));
          const maxV = Math.max(...bars.flatMap(b=>[b.p25,b.p26,b.t26]),1);
          return (
            <>
              <div style={{display:"flex",gap:3,alignItems:"flex-end",height:90}}>
                {bars.map((b,i)=>(
                  <div key={i} style={{flex:1,display:"flex",gap:1,alignItems:"flex-end"}}>
                    {[{v:b.p25,c:"#4a5a80"},{v:b.p26,c:mColor},{v:b.t26,c:C.orange,op:.4}].map((bar,bi)=>(
                      <div key={bi}
                        title={`${MONTHS[i]} ${["25실","26실","26목"][bi]}: ${bar.v.toFixed(1)}억`}
                        style={{flex:1,height:Math.max((bar.v/maxV)*86,bar.v>0?2:0),
                          background:bar.c,borderRadius:"2px 2px 0 0",opacity:bar.op||.85}}/>
                    ))}
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:3,marginTop:4}}>
                {MONTHS.map((m,i)=>(
                  <div key={i} style={{flex:1,textAlign:"center",color:C.muted,fontSize:9}}>
                    {m.replace("월","")}
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  실적분석 탭
// ═══════════════════════════════════════════════
function Analysis({data, mode}) {
  const [yr, setYr]   = useState("26");
  const [view, setView] = useState("table");

  const pD   = data[yr]?.[mode]?.perf   || emptyMonths();
  const tD   = data[yr]?.[mode]?.target || emptyMonths();
  const prevYr = yr==="26"?"25":yr==="25"?"24":null;
  const prevP  = prevYr ? (data[prevYr]?.[mode]?.perf || emptyMonths()) : null;

  let lastMi=-1;
  for(let i=11;i>=0;i--) if(INP_KEYS.some(k=>gNum(pD[mk(i)]?.[k])>0)){lastMi=i;break;}
  const emi = lastMi>=0?lastMi:new Date().getMonth();

  const mRows  = MONTHS.map((_,i)=>fullRow(pD[mk(i)]));
  const tRows  = MONTHS.map((_,i)=>fullRow(tD[mk(i)]));
  const pRows  = prevP?MONTHS.map((_,i)=>fullRow(prevP[mk(i)])):null;

  const VIEWS = ["table","achieve","growth","share","trend"];
  const VLABELS = {table:"실적현황",achieve:"목표달성률",growth:"전년비성장",share:"CE비중",trend:"트렌드"};

  const TH = ({c,right,children}) => (
    <th style={{padding:"6px 8px",textAlign:right?"right":"left",
      color:c||C.muted,fontWeight:600,fontSize:10,whiteSpace:"nowrap"}}>{children}</th>
  );

  return (
    <div style={{display:"flex",flexDirection:"column",gap:12}}>

      {/* 컨트롤 */}
      <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
        <div style={{display:"flex",gap:4,flex:1,flexWrap:"wrap"}}>
          {VIEWS.map(v=>(
            <button key={v} onClick={()=>setView(v)} style={{
              padding:"7px 14px",borderRadius:7,cursor:"pointer",fontWeight:700,
              fontSize:12,fontFamily:"inherit",
              border:`1px solid ${view===v?C.accent:C.b2}`,
              background:view===v?C.accent+"22":"transparent",
              color:view===v?C.accent:C.muted}}>
              {VLABELS[v]}
            </button>
          ))}
        </div>
        <div style={{display:"flex",gap:4}}>
          {["24","25","26"].map(y=>(
            <button key={y} onClick={()=>setYr(y)} style={{
              padding:"6px 12px",borderRadius:7,cursor:"pointer",fontSize:12,fontWeight:700,
              fontFamily:"inherit",border:`1px solid ${yr===y?C.blue:C.b2}`,
              background:yr===y?C.blue+"22":"transparent",color:yr===y?C.blue:C.muted}}>
              {y}년
            </button>
          ))}
        </div>
      </div>

      <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:12,
        padding:16,overflowX:"auto"}}>

        {/* 실적현황 */}
        {view==="table"&&(
          <>
            <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
              실적 현황 · {yr}년 · {mode}
              <span style={{color:C.muted,fontSize:11,fontWeight:400,marginLeft:8}}>
                억원 · hover→소수점 1자리
              </span>
            </div>
            <table style={{borderCollapse:"collapse",minWidth:900,width:"100%"}}>
              <thead>
                <tr style={{borderBottom:`1px solid ${C.b1}`}}>
                  <TH>항목</TH>
                  {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                  <TH right c={C.accent}>합계</TH>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(r=>(
                  <tr key={r.key} style={{borderBottom:`1px solid ${C.b1}18`}}>
                    <td style={{padding:"5px 10px",paddingLeft:10+r.lv*16,
                      color:r.bold?(KC[r.key]||C.text):C.muted2,fontWeight:r.bold?700:400,
                      fontSize:11,whiteSpace:"nowrap",position:"sticky",left:0,background:C.card2}}>
                      {r.lv>0?"└ ":""}{r.key}
                      {!r.inp&&<span style={{color:C.accent,fontSize:9,marginLeft:4}}>AUTO</span>}
                    </td>
                    {mRows.map((row,i)=>(
                      <td key={i} style={{padding:"5px 8px",textAlign:"right"}}>
                        <span title={fmtD(row[r.key])} style={{color:C.text,fontSize:11,cursor:"default"}}>
                          {fmt(row[r.key])}
                        </span>
                      </td>
                    ))}
                    <td style={{padding:"5px 10px",textAlign:"right"}}>
                      <span title={fmtD(sumM(pD,r.key))}
                        style={{color:KC[r.key]||C.accent,fontWeight:700,fontSize:11,cursor:"default"}}>
                        {fmt(sumM(pD,r.key))}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* 목표달성률 */}
        {view==="achieve"&&yr!=="24"&&(
          <>
            <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
              목표 달성률 · {yr}년 · {mode}
            </div>
            <table style={{borderCollapse:"collapse",minWidth:900,width:"100%"}}>
              <thead>
                <tr style={{borderBottom:`1px solid ${C.b1}`}}>
                  <TH>항목</TH>
                  {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                  <TH right c={C.accent}>누계달성</TH>
                </tr>
              </thead>
              <tbody>
                {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key=>(
                  <tr key={key} style={{borderBottom:`1px solid ${C.b1}18`}}>
                    <td style={{padding:"5px 10px",color:KC[key]||C.muted2,fontWeight:600,
                      fontSize:11,position:"sticky",left:0,background:C.card2}}>{key}</td>
                    {MONTHS.map((_,i)=>{
                      const p=gNum(mRows[i][key]),t=gNum(tRows[i][key]);
                      const a=t>0?rate(p,t):null;
                      return (
                        <td key={i} style={{padding:"5px 8px",textAlign:"right"}}>
                          {a?(
                            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1}}>
                              <span style={{color:pctColor(a),fontSize:10,fontWeight:700}}>{a}%</span>
                              <span style={{color:C.muted,fontSize:9}}>
                                <span title={fmtD(p)}>{p>0?Math.round(p):"-"}</span>/
                                <span title={fmtD(t)}>{Math.round(t)}</span>
                              </span>
                            </div>
                          ):<span style={{color:C.muted}}>-</span>}
                        </td>
                      );
                    })}
                    <td style={{padding:"5px 10px",textAlign:"right"}}>
                      {(()=>{
                        const yp=sumR(pD,key,0,emi), yt=sumR(tD,key,0,emi);
                        const a=rate(yp,yt);
                        return a?(
                          <span style={{color:pctColor(a),fontWeight:700,fontSize:11}}>{a}%</span>
                        ):<span style={{color:C.muted}}>-</span>;
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {view==="achieve"&&yr==="24"&&(
          <div style={{padding:30,textAlign:"center",color:C.muted}}>24년은 목표 데이터가 없습니다</div>
        )}

        {/* 전년비성장 */}
        {view==="growth"&&(
          <>
            <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
              전년비 성장률 · {yr}년 vs {prevYr?"20"+prevYr+"년":"기준없음"} · {mode}
            </div>
            {pRows?(
              <table style={{borderCollapse:"collapse",minWidth:900,width:"100%"}}>
                <thead>
                  <tr style={{borderBottom:`1px solid ${C.b1}`}}>
                    <TH>항목</TH>
                    {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                    <TH right c={C.accent}>누계성장</TH>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(r=>(
                    <tr key={r.key} style={{borderBottom:`1px solid ${C.b1}18`}}>
                      <td style={{padding:"5px 10px",paddingLeft:10+r.lv*16,
                        color:r.bold?(KC[r.key]||C.text):C.muted2,fontWeight:r.bold?700:400,
                        fontSize:11,position:"sticky",left:0,background:C.card2}}>
                        {r.lv>0?"└ ":""}{r.key}
                      </td>
                      {MONTHS.map((_,i)=>{
                        const cv=mRows[i][r.key], pv=pRows[i][r.key];
                        const gr=grow(cv,pv);
                        return (
                          <td key={i} style={{padding:"5px 8px",textAlign:"right"}}>
                            {gr?(
                              <span style={{color:growColor(gr),fontSize:10,fontWeight:600}}>
                                {growText(gr)}
                              </span>
                            ):<span style={{color:C.muted}}>-</span>}
                          </td>
                        );
                      })}
                      <td style={{padding:"5px 10px",textAlign:"right"}}>
                        {(()=>{
                          const g=grow(sumM(pD,r.key),sumM(prevP,r.key));
                          return g?<span style={{color:growColor(g),fontWeight:700,fontSize:11}}>{growText(g)}</span>
                            :<span style={{color:C.muted}}>-</span>;
                        })()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ):<div style={{color:C.muted,padding:20,textAlign:"center"}}>전년 비교 기준 없음</div>}
          </>
        )}

        {/* CE비중 */}
        {view==="share"&&(
          <>
            <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
              CE 비중 · {yr}년 · {mode}
            </div>
            <table style={{borderCollapse:"collapse",minWidth:900,width:"100%"}}>
              <thead>
                <tr style={{borderBottom:`1px solid ${C.b1}`}}>
                  <TH>항목</TH>
                  {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                  <TH right c={C.accent}>전체비중</TH>
                </tr>
              </thead>
              <tbody>
                {["대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key=>(
                  <tr key={key} style={{borderBottom:`1px solid ${C.b1}18`}}>
                    <td style={{padding:"5px 10px",color:KC[key]||C.muted2,fontWeight:600,
                      fontSize:11,position:"sticky",left:0,background:C.card2}}>{key}</td>
                    {mRows.map((row,i)=>{
                      const ce=row.CE, hp=row.휴대폰, v=key==="대외영업"?row.대외영업-hp:row[key];
                      const s=ce?(v/ce*100).toFixed(1):null;
                      return (
                        <td key={i} style={{padding:"5px 8px",textAlign:"right"}}>
                          {s?<span style={{color:KC[key]||C.text,fontSize:10,fontWeight:600}}>{s}%</span>
                            :<span style={{color:C.muted}}>-</span>}
                        </td>
                      );
                    })}
                    <td style={{padding:"5px 10px",textAlign:"right"}}>
                      {(()=>{
                        const ce=sumM(pD,"CE"),hp=sumM(pD,"휴대폰");
                        const v=key==="대외영업"?sumM(pD,"대외영업")-hp:sumM(pD,key);
                        const s=ce?(v/ce*100).toFixed(1):null;
                        return s?<span style={{color:KC[key]||C.accent,fontWeight:700,fontSize:11}}>{s}%</span>
                          :<span style={{color:C.muted}}>-</span>;
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* 트렌드 히트맵 */}
        {view==="trend"&&(
          <>
            <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:12}}>
              전년동월비 성장률 히트맵 · {yr}년 · {mode}
            </div>
            {pRows?(
              <table style={{borderCollapse:"collapse",width:"100%"}}>
                <thead>
                  <tr>
                    <th style={{padding:"5px 10px",textAlign:"left",color:C.muted,fontWeight:600,fontSize:10,width:80}}>항목</th>
                    {MONTHS.map(m=><th key={m} style={{padding:"5px 6px",textAlign:"center",
                      color:C.muted,fontWeight:600,fontSize:10,minWidth:44}}>{m}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key=>(
                    <tr key={key} style={{borderBottom:`1px solid ${C.b1}18`}}>
                      <td style={{padding:"5px 10px",color:KC[key]||C.muted2,fontWeight:600,fontSize:11}}>{key}</td>
                      {MONTHS.map((_,i)=>{
                        const cv=mRows[i][key],pv=pRows[i][key];
                        if(!cv&&!pv) return <td key={i} style={{padding:"5px 6px",textAlign:"center"}}>
                          <span style={{color:C.muted,fontSize:10}}>-</span></td>;
                        const gr=pv?((cv-pv)/pv*100):null;
                        const inten=gr!==null?Math.min(Math.abs(gr)/25,1):0;
                        const bg=gr===null?"transparent":gr>0?`rgba(45,212,136,${inten*.35})`:`rgba(240,112,112,${inten*.35})`;
                        return (
                          <td key={i} style={{padding:"5px 6px",textAlign:"center",background:bg,borderRadius:3}}>
                            <span style={{color:gr===null?C.muted:gr>0?C.green:C.red,fontSize:10,fontWeight:600}}>
                              {gr!==null?(gr>0?"+":"")+gr.toFixed(1)+"%":"-"}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ):<div style={{color:C.muted,padding:20,textAlign:"center"}}>전년 비교 기준 없음</div>}
          </>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  앱 루트
// ═══════════════════════════════════════════════
function App() {
  const [tab,        setTab]        = useState("input");
  const [mode,       setMode]       = useState("매출");
  const [data,       setData]       = useState(initData);
  const [saveState,  setSaveState]  = useState("idle");
  const [hasUnsaved, setHasUnsaved] = useState(false);
  const [dbStatus,   setDbStatus]   = useState("연결중...");

  const DOC_REF = () => window.db.collection("perf").doc("main");

  // Firestore 로드
  useEffect(()=>{
    (async()=>{
      try {
        const snap = await DOC_REF().get();
        if (snap.exists) {                          // ← 속성 (함수 아님)
          const raw = snap.data().perfData;
          const loaded = migrate(raw);
          // 로딩 확인용 — CE 값이 있으면 표시
          const testCE = loaded?.["24"]?.["매출"]?.perf?.["0"]?.CE;
          setDbStatus(testCE ? `✅ 로드됨 (CE:${parseFloat(testCE).toFixed(0)}억)` : "✅ 연결됨(데이터확인중)");
          setData(loaded);
          localStorage.setItem("cst_v10", JSON.stringify(loaded));
          setDbStatus("✅ 연결됨");
        } else {
          setDbStatus("⚠ 문서없음");
        }
      } catch(e) {
        setDbStatus("❌ "+e.message.slice(0,20));
        try {
          const loc = localStorage.getItem("cst_v10") || localStorage.getItem("perf_data_v3");
          if (loc) setData(migrate(JSON.parse(loc)));
        } catch {}
      } finally {
        window.__appReady = true;
      }
    })();
  }, []);

  const handleSetData = useCallback(updater=>{
    setData(prev=>{
      const next = typeof updater==="function"?updater(prev):updater;
      setHasUnsaved(true);
      return next;
    });
  }, []);

  const handleSave = useCallback(async()=>{
    setSaveState("saving");
    try {
      await DOC_REF().set({perfData:data, updatedAt:new Date().toISOString()});
      localStorage.setItem("cst_v10", JSON.stringify(data));
      setSaveState("saved");
      setHasUnsaved(false);
      setTimeout(()=>setSaveState("idle"), 2500);
    } catch(e) {
      try { localStorage.setItem("cst_v10", JSON.stringify(data)); } catch {}
      setSaveState("error");
      setTimeout(()=>setSaveState("idle"), 3000);
    }
  }, [data]);

  const mColor = C[mode];
  const TABS = [{k:"dashboard",l:"대시보드",i:"◈"},{k:"analysis",l:"실적분석",i:"◉"},{k:"input",l:"실적입력",i:"◎"}];

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.text,
      fontFamily:"'Noto Sans KR','Apple SD Gothic Neo',sans-serif"}}>

      {/* ── 판매/매출 선택 바 ── */}
      <div style={{background:"#040c17",borderBottom:`1px solid ${C.b1}`,padding:"0 20px"}}>
        <div style={{maxWidth:1320,margin:"0 auto",display:"flex",alignItems:"center",
          height:40,gap:8,flexWrap:"wrap"}}>
          <span style={{color:C.muted,fontSize:11,fontWeight:700,marginRight:4}}>구분</span>
          {MODES.map(m=>(
            <button key={m} onClick={()=>setMode(m)} style={{
              padding:"5px 20px",borderRadius:7,cursor:"pointer",fontFamily:"inherit",
              fontWeight:800,fontSize:12,border:`1px solid ${mode===m?C[m]:C.b1}`,
              background:mode===m?C[m]+"22":"transparent",color:mode===m?C[m]:C.muted,
              boxShadow:mode===m?`0 0 10px ${C[m]}40`:"none",transition:"all .15s"}}>
              {m==="매출"?"💰 매출":"📦 판매"}
            </button>
          ))}
          <div style={{marginLeft:"auto",display:"flex",gap:10,alignItems:"center"}}>
            <span style={{color:C.muted,fontSize:10}}>{APP_VER}</span>
            <span style={{fontSize:10,fontWeight:600,
              color:dbStatus.startsWith("✅")?C.green:dbStatus.startsWith("❌")?C.red:C.orange}}>
              {dbStatus}
            </span>
            {hasUnsaved&&saveState==="idle"&&
              <span style={{color:C.orange,fontSize:10,fontWeight:600}}>● 미저장</span>}
            {saveState==="saved"&&
              <span style={{color:C.green,fontSize:10,fontWeight:600}}>✓ 저장완료</span>}
          </div>
        </div>
      </div>

      {/* ── 메인 헤더 ── */}
      <div style={{background:C.surf,borderBottom:`1px solid ${C.b1}`,
        padding:"0 20px",position:"sticky",top:40,zIndex:200}}>
        <div style={{maxWidth:1320,margin:"0 auto",display:"flex",alignItems:"center",
          height:48,gap:20}}>

          {/* 로고 */}
          <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
            <div style={{width:26,height:26,background:`linear-gradient(135deg,${mColor},${C.accent})`,
              borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:12,fontWeight:900,color:"#fff",boxShadow:`0 0 10px ${mColor}50`,
              transition:"all .3s"}}>C</div>
            <div>
              <div style={{color:C.text,fontWeight:900,fontSize:12,letterSpacing:"-0.03em"}}>
                Chungcheong Sales
              </div>
              <div style={{color:mColor,fontSize:9,fontWeight:700}}>
                충청영업팀 · {mode}
              </div>
            </div>
          </div>

          {/* 탭 */}
          <nav style={{display:"flex",gap:2}}>
            {TABS.map(t=>(
              <button key={t.k} onClick={()=>setTab(t.k)} style={{
                padding:"6px 14px",borderRadius:7,border:"none",cursor:"pointer",
                background:tab===t.k?mColor+"22":"transparent",
                color:tab===t.k?mColor:C.muted,fontWeight:tab===t.k?800:500,
                fontSize:12,fontFamily:"inherit",
                borderBottom:tab===t.k?`2px solid ${mColor}`:"2px solid transparent",
                transition:"all .2s"}}>
                {t.i} {t.l}
              </button>
            ))}
          </nav>

          <div style={{marginLeft:"auto",display:"flex",gap:6,alignItems:"center"}}>
            <Chip c={C.muted2}>24년</Chip>
            <Chip c={C.accent}>25년</Chip>
            <Chip c={mColor}>26년</Chip>
          </div>
        </div>
      </div>

      {/* ── 콘텐츠 ── */}
      <div style={{maxWidth:1320,margin:"0 auto",padding:"20px 20px"}}>
        <div style={{marginBottom:16}}>
          <h1 style={{margin:0,color:C.text,fontSize:17,fontWeight:900,letterSpacing:"-0.04em"}}>
            {tab==="dashboard"?"실적 대시보드":tab==="analysis"?"실적 분석":"실적 입력"}
            <span style={{color:mColor,fontSize:13,fontWeight:700,marginLeft:8}}>· {mode}</span>
          </h1>
          <p style={{margin:"3px 0 0",color:C.muted,fontSize:11}}>
            {tab==="input"&&"억원 단위 입력 (소수점 가능) · 표시는 억단위 정수 · hover→소수점 1자리"}
            {tab==="dashboard"&&"26년 YTD 기준 · 전년동기 비교 · 목표달성률"}
            {tab==="analysis"&&"연도별 상세분석 · 달성률 · 성장률 · CE비중 · 히트맵"}
          </p>
        </div>

        {tab==="dashboard"&&<Dashboard data={data} mode={mode}/>}
        {tab==="analysis" &&<Analysis  data={data} mode={mode}/>}
        {tab==="input"    &&<InputTab  data={data} setData={handleSetData} mode={mode}
          onSave={handleSave} saveState={saveState} hasUnsaved={hasUnsaved}/>}
      </div>

      {/* ── 푸터 ── */}
      <div style={{borderTop:`1px solid ${C.b1}`,padding:"10px 20px",background:C.surf,marginTop:20}}>
        <div style={{maxWidth:1320,margin:"0 auto",display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
          <span style={{color:C.muted,fontSize:10,fontWeight:700}}>산출기준</span>
          {[["대외영업","혼수+입주+이사+SMB+농협+거주중+휴대폰",C.blue],
            ["뉴홈","입주+이사",C.green],["B2B","SMB+농협+휴대폰",C.orange],
            ["CE비중","각항목÷CE",C.accent],["달성률","실적누계÷목표누계×100",C.teal],
          ].map(([k,v,c])=>(
            <span key={k} style={{color:C.muted,fontSize:10}}>
              <span style={{color:c,fontWeight:700}}>{k}</span>={v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
