/* ═══════════════════════════════════════════════════
   Chungcheong Sales Team 실적관리 시스템 — 앱 로직
   ─────────────────────────────────────────────────
   산출 기준:
   ✓ CE        = 전체 실적 수기입력 (휴대폰 제외)
   ✓ 대외영업  = 혼수+입주+이사+SMB+농협+거주중+휴대폰
   ✓ 뉴홈      = 입주+이사
   ✓ SAC       = 수기입력 (거주중 포함)
   ✓ B2B       = SMB+농협+휴대폰
   ✓ CE비중 대외영업 = (대외영업-휴대폰)/CE
   ✓ 달성률    = 실적누계 ÷ 목표누계
   ─────────────────────────────────────────────────
   판매/매출 구조:
   data[연도][판매|매출][perf|target][월][항목]
   ═══════════════════════════════════════════════════ */

const { useState, useEffect, useCallback, useRef } = React;

// ═══════════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════════
const MONTHS    = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
const INPUT_KEYS = ["CE","혼수","입주","이사","SAC","거주중","SMB","농협","휴대폰"];
const MODES     = ["매출","판매"];

// ═══════════════════════════════════════════════════
//  BUSINESS LOGIC
// ═══════════════════════════════════════════════════
function derive(obj) {
  const g = k => Number(obj?.[k] || 0);
  return {
    뉴홈:    g("입주") + g("이사"),
    대외영업: g("혼수") + g("입주") + g("이사") + g("SMB") + g("농협") + g("거주중") + g("휴대폰"),
    B2B:     g("SMB")  + g("농협") + g("휴대폰"),
  };
}

const fullRow  = obj => ({ ...(obj||{}), ...derive(obj) });
const gNum     = v   => Number(v) || 0;
const sumRange = (d, key, from, to) => {
  let s = 0;
  for (let i = from; i <= to; i++) s += gNum(fullRow(d?.[i])[key]);
  return s;
};
const lastMi = d => {
  for (let mi = 11; mi >= 0; mi--)
    if (d?.[mi] && INPUT_KEYS.some(k => gNum(d[mi][k]) > 0)) return mi;
  return -1;
};
const gRate = (c, p) => p ? ((c - p) / p * 100).toFixed(1) : null;
const aRate = (p, t) => t ? (p / t * 100).toFixed(1) : null;

// ═══════════════════════════════════════════════════
//  ROW DEFINITIONS
// ═══════════════════════════════════════════════════
const ALL_ROWS = [
  { key:"CE",      label:"CE",      lv:0, inp:true,  bold:true,  note:"수기입력 · 휴대폰 제외" },
  { key:"대외영업", label:"대외영업", lv:0, inp:false, bold:true,  note:"혼수+입주+이사+SMB+농협+거주중+휴대폰" },
  { key:"혼수",    label:"혼수",     lv:1, inp:true,  bold:false },
  { key:"뉴홈",    label:"뉴홈",     lv:1, inp:false, bold:false, note:"입주+이사" },
  { key:"입주",    label:"입주",     lv:2, inp:true,  bold:false },
  { key:"이사",    label:"이사",     lv:2, inp:true,  bold:false },
  { key:"SAC",     label:"SAC",      lv:1, inp:true,  bold:false, note:"수기입력 · 거주중 포함" },
  { key:"거주중",  label:"거주중",   lv:2, inp:true,  bold:false },
  { key:"B2B",     label:"B2B",      lv:1, inp:false, bold:false, note:"SMB+농협+휴대폰" },
  { key:"SMB",     label:"SMB",      lv:2, inp:true,  bold:false },
  { key:"농협",    label:"농협",     lv:2, inp:true,  bold:false },
  { key:"휴대폰",  label:"휴대폰",   lv:1, inp:true,  bold:false, note:"CE 제외 항목" },
];

const KC = {
  CE:"#818cf8", 대외영업:"#38bdf8", 혼수:"#fbbf24", 뉴홈:"#34d399",
  입주:"#6ee7b7", 이사:"#99f6e4", SAC:"#e879f9", 거주중:"#c084fc",
  B2B:"#fb923c", SMB:"#fed7aa", 농협:"#fef08a", 휴대폰:"#94a3b8",
};

// ═══════════════════════════════════════════════════
//  COLORS
// ═══════════════════════════════════════════════════
const C = {
  bg:"#060e1c", surface:"#0a1628", card:"#0e1e32",
  card2:"#122438", border:"#1a2f47", border2:"#1f3652",
  text:"#d8eaf8", muted:"#3d5f7e", muted2:"#6b8fa8",
  accent:"#818cf8", blue:"#38bdf8", green:"#34d399",
  orange:"#fbbf24", red:"#f87171", purple:"#e879f9",
  teal:"#2dd4bf",
  매출:"#38bdf8", 판매:"#34d399",
};

// ═══════════════════════════════════════════════════
//  DATA INIT  (구조: data[yr][mode][perf|target][월][항목])
// ═══════════════════════════════════════════════════
const emptyM = () =>
  Object.fromEntries(Array.from({ length:12 }, (_,i) =>
    [i, Object.fromEntries(INPUT_KEYS.map(k => [k, ""]))]
  ));

const emptyMode = (hasTgt) => hasTgt
  ? { perf: emptyM(), target: emptyM() }
  : { perf: emptyM() };

const initData = () => ({
  "24": { 매출: emptyMode(false), 판매: emptyMode(false) },
  "25": { 매출: emptyMode(true),  판매: emptyMode(true)  },
  "26": { 매출: emptyMode(true),  판매: emptyMode(true)  },
});

// ═══════════════════════════════════════════════════
//  NUMBER FORMATTERS
//  - 입력: 소수점 무제한
//  - 표시: 억 단위 정수 (반올림)
//  - hover 툴팁: 소수점 1자리
// ═══════════════════════════════════════════════════
const dispV = v => {         // 표시용: 정수 억
  const n = gNum(v);
  return n > 0 ? Math.round(n).toLocaleString() : "-";
};
const tipV = v => {          // 툴팁용: 소수점 1자리
  const n = gNum(v);
  return n > 0 ? n.toFixed(1) + "억" : "";
};

// 툴팁 포함 숫자 셀
function Val({ v, color, bold = false, right = false }) {
  const n = gNum(v);
  return (
    <span
      title={tipV(v)}
      style={{
        color: n > 0 ? (color || C.text) : C.muted,
        fontWeight: bold ? 700 : 400,
        cursor: n > 0 ? "default" : undefined,
        textAlign: right ? "right" : undefined,
      }}>
      {dispV(v)}
    </span>
  );
}

const gStyle = v => {
  if (v === null || v === undefined) return { t:"-", c:C.muted };
  const n = Number(v);
  return n > 0 ? { t:`▲ ${v}%`, c:C.green }
       : n < 0 ? { t:`▼ ${Math.abs(n)}%`, c:C.red }
       : { t:"─ 0%", c:C.muted2 };
};
const aStyle = v => {
  if (v === null || v === undefined) return { t:"-", c:C.muted };
  const n = Number(v);
  return n >= 100 ? { t:`${v}%`, c:C.green }
       : n >= 80  ? { t:`${v}%`, c:C.orange }
       : { t:`${v}%`, c:C.red };
};

// ═══════════════════════════════════════════════════
//  UI PRIMITIVES
// ═══════════════════════════════════════════════════
const Chip = ({ children, color = C.accent }) => (
  <span style={{ background:color+"1a", color, border:`1px solid ${color}40`,
    borderRadius:4, padding:"1px 7px", fontSize:10, fontWeight:700, whiteSpace:"nowrap" }}>
    {children}
  </span>
);

const GBadge = ({ v }) => { const s = gStyle(v); return <span style={{ color:s.c, fontSize:11, fontWeight:700 }}>{s.t}</span>; };
const ABadge = ({ v }) => { const s = aStyle(v); return <span style={{ color:s.c, fontSize:11, fontWeight:700 }}>{s.t}</span>; };

function MiniBar({ pct, color }) {
  const n = Math.min(Math.max(gNum(pct), 0), 100);
  return (
    <div style={{ height:3, background:C.border, borderRadius:2, overflow:"hidden", marginTop:4 }}>
      <div style={{ height:"100%", width:`${n}%`, background:color, borderRadius:2,
        boxShadow:`0 0 6px ${color}80` }} />
    </div>
  );
}

// ── 소수점 입력 허용 NumInput ──────────────────────
function NumInput({ value, onChange, color, placeholder = "0", small = false }) {
  return (
    <input
      type="number"
      step="any"
      min="0"
      placeholder={placeholder}
      value={value ?? ""}
      onChange={e => onChange(e.target.value)}
      style={{
        flex:1, background:C.bg, border:`1px solid ${C.border2}`,
        borderRadius:small?5:7, padding:small?"4px 6px":"7px 10px",
        color, fontSize:small?10:13, outline:"none", fontFamily:"inherit",
        textAlign:"right", WebkitAppearance:"none", MozAppearance:"textfield",
        width:"100%",
      }}
      onFocus={e => { e.target.style.borderColor = color; e.target.style.boxShadow = `0 0 0 2px ${color}20`; }}
      onBlur={e => { e.target.style.borderColor = C.border2; e.target.style.boxShadow = "none"; }}
    />
  );
}

// ═══════════════════════════════════════════════════
//  INPUT TAB
// ═══════════════════════════════════════════════════
function InputTab({ data, setData, mode, onSave, saveState, hasUnsaved }) {
  const [yr, setYr]   = useState("26");
  const [inputMode, setInputMode] = useState("single");
  const [mi, setMi]   = useState(0);

  const hasTgt = yr !== "24";
  const mD  = data[yr]?.[mode]  || emptyMode(hasTgt);
  const pD  = mD.perf   || emptyM();
  const tD  = mD.target || emptyM();

  const setP = useCallback((month, key, val) => {
    setData(prev => ({
      ...prev,
      [yr]: {
        ...prev[yr],
        [mode]: {
          ...prev[yr]?.[mode],
          perf: {
            ...prev[yr]?.[mode]?.perf,
            [month]: { ...(prev[yr]?.[mode]?.perf?.[month]||{}), [key]: val }
          }
        }
      }
    }));
  }, [setData, yr, mode]);

  const setT = useCallback((month, key, val) => {
    if (!hasTgt) return;
    setData(prev => ({
      ...prev,
      [yr]: {
        ...prev[yr],
        [mode]: {
          ...prev[yr]?.[mode],
          target: {
            ...prev[yr]?.[mode]?.target,
            [month]: { ...(prev[yr]?.[mode]?.target?.[month]||{}), [key]: val }
          }
        }
      }
    }));
  }, [setData, yr, mode, hasTgt]);

  const pRow = fullRow(pD[mi]);
  const tRow = hasTgt ? fullRow(tD[mi]) : {};
  const CE = gNum(pRow.CE), HP = gNum(pRow.휴대폰), DW = gNum(pRow.대외영업);

  const ceSharePct = key => {
    if (!CE) return null;
    const v = key === "대외영업" ? (DW - HP) : gNum(pRow[key]);
    return (v / CE * 100).toFixed(1);
  };

  const derivedItems = [
    { key:"대외영업", formula:"혼수+입주+이사+SMB+농협+거주중+휴대폰", c:C.blue },
    { key:"뉴홈",    formula:"입주+이사",              c:C.green },
    { key:"B2B",    formula:"SMB+농협+휴대폰",        c:C.orange },
  ];

  const modeColor = C[mode];

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

      {/* ── Controls Bar ── */}
      <div style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:12,
        padding:"14px 20px", display:"flex", gap:20, alignItems:"flex-start", flexWrap:"wrap" }}>

        <div>
          <div style={{ color:C.muted, fontSize:10, marginBottom:6, letterSpacing:"0.08em" }}>연도 선택</div>
          <div style={{ display:"flex", gap:4 }}>
            {[["24","실적만"],["25","실적+목표"],["26","실적+목표"]].map(([y,desc]) => (
              <button key={y} onClick={() => setYr(y)} style={{
                padding:"7px 14px", borderRadius:8, cursor:"pointer", fontWeight:700,
                fontSize:12, fontFamily:"inherit",
                border:`1px solid ${yr===y ? C.accent : C.border}`,
                background: yr===y ? C.accent : "transparent",
                color: yr===y ? "#fff" : C.muted,
              }}>
                20{y}년&nbsp;<span style={{ fontSize:9, opacity:.7 }}>({desc})</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ color:C.muted, fontSize:10, marginBottom:6, letterSpacing:"0.08em" }}>입력 방식</div>
          <div style={{ display:"flex", gap:4 }}>
            {[["single","월별 입력"],["bulk","전체 일괄"]].map(([v,l]) => (
              <button key={v} onClick={() => setInputMode(v)} style={{
                padding:"7px 13px", borderRadius:8, cursor:"pointer", fontSize:12,
                fontWeight:600, fontFamily:"inherit",
                border:`1px solid ${inputMode===v ? C.blue : C.border}`,
                background: inputMode===v ? C.blue+"18" : "transparent",
                color: inputMode===v ? C.blue : C.muted,
              }}>{l}</button>
            ))}
          </div>
        </div>

        {inputMode === "single" && (
          <div style={{ flex:1 }}>
            <div style={{ color:C.muted, fontSize:10, marginBottom:6, letterSpacing:"0.08em" }}>월 선택</div>
            <div style={{ display:"flex", gap:3, flexWrap:"wrap" }}>
              {MONTHS.map((m, i) => {
                const hasP = INPUT_KEYS.some(k => gNum(pD[i]?.[k]) > 0);
                return (
                  <button key={m} onClick={() => setMi(i)} style={{
                    padding:"5px 10px", borderRadius:6, cursor:"pointer", fontSize:11,
                    fontWeight:600, fontFamily:"inherit",
                    border:`1px solid ${mi===i ? C.orange : hasP ? C.green+"60" : C.border}`,
                    background: mi===i ? C.orange+"18" : "transparent",
                    color: mi===i ? C.orange : hasP ? C.green : C.muted,
                  }}>{m}</button>
                );
              })}
            </div>
            <div style={{ color:C.muted, fontSize:10, marginTop:4 }}>
              <span style={{ color:C.green }}>●</span> 데이터 입력됨
            </div>
          </div>
        )}

        {/* ── 저장 버튼 ── */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", justifyContent:"center", gap:6 }}>
          <button
            onClick={onSave}
            disabled={saveState === "saving"}
            style={{
              padding:"10px 24px", borderRadius:9, border:"none",
              cursor: saveState==="saving" ? "default" : "pointer",
              fontFamily:"inherit", fontWeight:800, fontSize:13,
              background: saveState==="saving" ? C.border
                        : saveState==="saved"   ? C.green
                        : hasUnsaved            ? `linear-gradient(135deg, ${C.accent}, ${C.blue})`
                        :                        C.border2,
              color: (saveState==="saving") ? C.muted : "#fff",
              boxShadow: hasUnsaved && saveState==="idle" ? `0 0 16px ${C.accent}60` : "none",
              transition:"all .2s",
            }}>
            {saveState==="saving" ? "저장 중..." : saveState==="saved" ? "✓ 저장완료" : "💾 저장하기"}
          </button>
          {hasUnsaved && saveState==="idle" && (
            <span style={{ color:C.orange, fontSize:10, fontWeight:600 }}>● 저장하지 않은 변경사항이 있습니다</span>
          )}
          {saveState==="error" && (
            <span style={{ color:C.red, fontSize:10, fontWeight:600 }}>⚠ 서버 저장 실패 · 로컬 백업됨</span>
          )}
        </div>
      </div>

      {inputMode === "single" ? (
        <div style={{ display:"flex", gap:12 }}>

          {/* ── 실적 입력 ── */}
          <div style={{ flex:1, background:C.card2, border:`1px solid ${modeColor}30`,
            borderRadius:12, padding:18, borderTop:`3px solid ${modeColor}` }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
              <div>
                <div style={{ color:C.text, fontWeight:800, fontSize:14 }}>📊 실적 입력</div>
                <div style={{ color:C.muted, fontSize:11, marginTop:2 }}>
                  20{yr}년 {MONTHS[mi]} · {mode} · 단위: 억원 (소수점 입력 가능)
                </div>
              </div>
              <Chip color={modeColor}>{mode}</Chip>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {ALL_ROWS.map(r => {
                if (!r.inp) {
                  return (
                    <div key={r.key} style={{
                      display:"flex", alignItems:"center", gap:6,
                      paddingLeft: r.lv * 14,
                      marginTop: r.lv===0 ? 6 : 2,
                    }}>
                      <div style={{ height:1, width:10, background:C.border2, flexShrink:0 }} />
                      <span style={{ color:KC[r.key]||C.muted2, fontSize:10, fontWeight:700 }}>{r.label}</span>
                      <span style={{ color:C.muted, fontSize:9 }}>(자동)</span>
                      <div style={{ flex:1, height:1, background:C.border2 }} />
                    </div>
                  );
                }
                return (
                  <div key={r.key} style={{ display:"flex", alignItems:"center", gap:8,
                    paddingLeft: r.lv*14 + (r.lv>0?12:0) }}>
                    {r.lv > 0 && <span style={{ color:C.border2, fontSize:11, flexShrink:0 }}>└</span>}
                    <div style={{ width:52, fontSize:12, flexShrink:0,
                      fontWeight:r.lv===0?800:400,
                      color:r.lv===0?(KC[r.key]||C.text):C.muted2 }}>{r.label}</div>
                    <NumInput value={pD[mi]?.[r.key]} onChange={v => setP(mi, r.key, v)}
                      color={KC[r.key]||C.text} />
                    <span style={{ color:C.muted, fontSize:10, width:16, flexShrink:0 }}>억</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 목표 입력 ── */}
          {hasTgt && (
            <div style={{ flex:1, background:C.card2, border:`1px solid ${C.border}`,
              borderRadius:12, padding:18 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                <div>
                  <div style={{ color:C.text, fontWeight:800, fontSize:14 }}>🎯 목표 입력</div>
                  <div style={{ color:C.muted, fontSize:11, marginTop:2 }}>
                    20{yr}년 {MONTHS[mi]} · {mode} · 단위: 억원
                  </div>
                </div>
                <Chip color={C.blue}>목표</Chip>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {ALL_ROWS.map(r => {
                  if (!r.inp) {
                    return (
                      <div key={r.key} style={{
                        display:"flex", alignItems:"center", gap:6,
                        paddingLeft: r.lv*14, marginTop: r.lv===0?6:2,
                      }}>
                        <div style={{ height:1, width:10, background:C.border2, flexShrink:0 }} />
                        <span style={{ color:KC[r.key]||C.muted2, fontSize:10, fontWeight:700 }}>{r.label}</span>
                        <span style={{ color:C.muted, fontSize:9 }}>(자동)</span>
                        <div style={{ flex:1, height:1, background:C.border2 }} />
                      </div>
                    );
                  }
                  const p = gNum(pD[mi]?.[r.key]), t = gNum(tD[mi]?.[r.key]);
                  const a = aRate(p, t); const as = aStyle(a);
                  return (
                    <div key={r.key} style={{ display:"flex", alignItems:"center", gap:8,
                      paddingLeft: r.lv*14+(r.lv>0?12:0) }}>
                      {r.lv > 0 && <span style={{ color:C.border2, fontSize:11, flexShrink:0 }}>└</span>}
                      <div style={{ width:52, fontSize:12, flexShrink:0,
                        fontWeight:r.lv===0?800:400,
                        color:r.lv===0?(KC[r.key]||C.text):C.muted2 }}>{r.label}</div>
                      <NumInput value={tD[mi]?.[r.key]} onChange={v => setT(mi, r.key, v)}
                        color={C.blue} />
                      {t > 0 && (
                        <span style={{ color:as.c, fontSize:10, width:38, textAlign:"right",
                          fontWeight:700, flexShrink:0 }}>{as.t}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── 자동계산 + CE비중 ── */}
          <div style={{ width:224, display:"flex", flexDirection:"column", gap:12 }}>
            <div style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:16 }}>
              <div style={{ color:C.text, fontWeight:800, fontSize:13, marginBottom:12 }}>⚙ 자동 계산</div>
              {derivedItems.map(dr => {
                const pv = gNum(pRow[dr.key]), tv = hasTgt ? gNum(tRow[dr.key]) : 0;
                const a = hasTgt ? aRate(pv, tv) : null; const as = aStyle(a);
                return (
                  <div key={dr.key} style={{ background:C.bg, border:`1px solid ${dr.c}28`,
                    borderRadius:9, padding:"10px 13px", marginBottom:8, borderLeft:`3px solid ${dr.c}` }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <span style={{ color:dr.c, fontWeight:700, fontSize:13 }}>{dr.key}</span>
                      <span title={tipV(pv)} style={{ color:dr.c, fontSize:17, fontWeight:900, cursor:"default" }}>
                        {pv>0 ? Math.round(pv).toLocaleString() : "-"}
                        <span style={{ fontSize:9, marginLeft:2 }}>억</span>
                      </span>
                    </div>
                    <div style={{ color:C.muted, fontSize:10, marginTop:2 }}>= {dr.formula}</div>
                    {a !== null && tv > 0 && (
                      <div style={{ color:as.c, fontSize:10, fontWeight:700, marginTop:3 }}>
                        달성률 {as.t} · 목표 {Math.round(tv).toLocaleString()}억
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:16 }}>
              <div style={{ color:C.text, fontWeight:700, fontSize:13, marginBottom:3 }}>📐 CE 비중</div>
              <div style={{ color:C.muted, fontSize:10, marginBottom:10 }}>
                CE {CE>0?Math.round(CE).toLocaleString():"-"}억 기준 (휴대폰 제외)
              </div>
              {["대외영업","혼수","뉴홈","SAC","B2B","휴대폰"].map(key => {
                const s = ceSharePct(key);
                return (
                  <div key={key} style={{ marginBottom:6 }}>
                    <div style={{ display:"flex", justifyContent:"space-between" }}>
                      <span style={{ color:C.muted2, fontSize:11 }}>
                        {key}{key==="대외영업"&&<span style={{ fontSize:9 }}>(폰제외)</span>}
                      </span>
                      <span style={{ color:KC[key]||C.text, fontWeight:700, fontSize:12 }}>
                        {s?s+"%":"-"}
                      </span>
                    </div>
                    {s && <MiniBar pct={Number(s)} color={KC[key]||C.accent} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <BulkInput yr={yr} mode={mode} hasTgt={hasTgt} pD={pD} tD={tD} setP={setP} setT={setT} />
      )}
    </div>
  );
}

// ── 전체 일괄 입력 ─────────────────────────────────
function BulkInput({ yr, mode, hasTgt, pD, tD, setP, setT }) {
  const inpRows = ALL_ROWS.filter(r => r.inp);
  return (
    <div style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:12,
      padding:18, overflowX:"auto" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:4 }}>
        <div style={{ color:C.text, fontWeight:800, fontSize:14 }}>
          20{yr}년 · {mode} · 전체 일괄 입력
          <span style={{ color:C.muted, fontSize:11, fontWeight:400, marginLeft:8 }}>억원 (소수점 입력 가능)</span>
        </div>
        {hasTgt && (
          <div style={{ display:"flex", gap:6, fontSize:11 }}>
            <Chip color={C[mode]}>실적 (상단)</Chip>
            <Chip color={C.blue}>목표 (하단)</Chip>
          </div>
        )}
      </div>
      <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>직접 입력 항목 · 대외영업/뉴홈/B2B는 자동계산 · 표시는 억단위 정수 (hover시 소수점)</div>
      <table style={{ borderCollapse:"collapse", fontSize:11 }}>
        <thead>
          <tr style={{ borderBottom:`1px solid ${C.border}` }}>
            <th style={{ padding:"6px 14px", textAlign:"left", color:C.muted, fontWeight:600,
              minWidth:76, position:"sticky", left:0, background:C.card2, zIndex:2 }}>항목</th>
            {MONTHS.map(m => (
              <th key={m} style={{ padding:"6px 4px", textAlign:"center", color:C.muted,
                fontWeight:600, minWidth:hasTgt?106:64 }}>{m}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inpRows.map(r => (
            <tr key={r.key} style={{ borderBottom:`1px solid ${C.border}18` }}>
              <td style={{ padding:"5px 14px", paddingLeft:14+r.lv*12,
                color:KC[r.key]||C.muted2, fontWeight:r.lv===0?700:500, fontSize:11,
                position:"sticky", left:0, background:C.card2, zIndex:1, whiteSpace:"nowrap" }}>
                {r.lv>0?"└ ":""}{r.label}
              </td>
              {MONTHS.map((_,monthIdx) => {
                const pv = pD[monthIdx]?.[r.key]??"";
                const tv = hasTgt ? (tD[monthIdx]?.[r.key]??"") : null;
                const p = gNum(pv), t = gNum(tv);
                const a = hasTgt && t>0 ? aRate(p,t) : null;
                const as = aStyle(a);
                return (
                  <td key={monthIdx} style={{ padding:"3px 4px", textAlign:"center", verticalAlign:"middle" }}>
                    <div style={{ display:"flex", flexDirection:"column", gap:2, alignItems:"center" }}>
                      <input type="number" step="any" min="0" placeholder="0" value={pv}
                        onChange={e => setP(monthIdx, r.key, e.target.value)}
                        style={{ width:hasTgt?46:58, background:C.bg, border:`1px solid ${C.border}`,
                          borderRadius:5, padding:"4px 5px", color:C.text, fontSize:10,
                          outline:"none", textAlign:"right", fontFamily:"inherit" }}
                        onFocus={e => e.target.style.borderColor=KC[r.key]||C.accent}
                        onBlur={e => e.target.style.borderColor=C.border}
                      />
                      {hasTgt && (
                        <input type="number" step="any" min="0" placeholder="0" value={tv??""}
                          onChange={e => setT(monthIdx, r.key, e.target.value)}
                          style={{ width:46, background:C.bg, border:`1px solid ${C.border}`,
                            borderRadius:5, padding:"4px 5px", color:C.blue, fontSize:10,
                            outline:"none", textAlign:"right", fontFamily:"inherit" }}
                          onFocus={e => e.target.style.borderColor=C.blue}
                          onBlur={e => e.target.style.borderColor=C.border}
                        />
                      )}
                      {a!==null && <span style={{ color:as.c, fontSize:9, fontWeight:700 }}>{as.t}</span>}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ═══════════════════════════════════════════════════
//  DASHBOARD TAB
// ═══════════════════════════════════════════════════
function Dashboard({ data, mode }) {
  const p26 = data["26"]?.[mode]?.perf   || emptyM();
  const p25 = data["25"]?.[mode]?.perf   || emptyM();
  const p24 = data["24"]?.[mode]?.perf   || emptyM();
  const t26 = data["26"]?.[mode]?.target || emptyM();
  const t25 = data["25"]?.[mode]?.target || emptyM();

  const lm26 = lastMi(p26);
  const emi  = lm26 >= 0 ? lm26 : 11;

  const yp26 = key => sumRange(p26, key, 0, emi);
  const yp25 = key => sumRange(p25, key, 0, emi);
  const yt26 = key => sumRange(t26, key, 0, emi);
  const yt25 = key => sumRange(t25, key, 0, emi);

  const hp26ytd = sumRange(p26,"휴대폰",0,emi);
  const ceShare26 = key => {
    const ce = yp26("CE"); if(!ce) return null;
    const v = key==="대외영업" ? (yp26("대외영업")-hp26ytd) : yp26(key);
    return (v/ce*100).toFixed(1);
  };

  const modeColor = C[mode];

  const monthlyBars = MONTHS.map((_,mi) => ({
    p24: gNum(fullRow(p24[mi]).CE),
    p25: gNum(fullRow(p25[mi]).CE),
    p26: gNum(fullRow(p26[mi]).CE),
    t26: gNum(fullRow(t26[mi]).CE),
  }));
  const maxBarV = Math.max(...monthlyBars.flatMap(d=>[d.p24,d.p25,d.p26,d.t26]),1);

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

      {/* ── 기준 안내 ── */}
      {lm26>=0 ? (
        <div style={{ background:C.card2, border:`1px solid ${modeColor}40`,
          borderRadius:8, padding:"9px 16px", display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ color:modeColor, fontSize:14 }}>◉</span>
          <span style={{ color:C.muted2, fontSize:12 }}>
            <strong style={{ color:modeColor }}>{mode}</strong> 기준 ·
            26년 <strong style={{ color:C.text }}>{MONTHS[emi]} 누계 (YTD)</strong> ·
            전년동기(25년 {MONTHS[emi]}) 비교 · 달성률 = 실적누계 / 목표누계
          </span>
        </div>
      ) : (
        <div style={{ background:C.card2, border:`1px solid ${C.orange}40`,
          borderRadius:8, padding:"9px 16px" }}>
          <span style={{ color:C.orange, fontSize:12 }}>⚠ 실적입력 탭에서 데이터를 입력하면 대시보드가 자동으로 업데이트됩니다.</span>
        </div>
      )}

      {/* ── KPI Cards ── */}
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        {["CE","대외영업","혼수","뉴홈","SAC","B2B"].map(key => {
          const v26=yp26(key), v25=yp25(key), vt=yt26(key);
          const gr=gRate(v26,v25); const ar=aRate(v26,vt);
          const gs=gStyle(gr); const as_=aStyle(ar);
          return (
            <div key={key} style={{ flex:"1 1 140px", background:C.card2,
              border:`1px solid ${C.border}`, borderRadius:12, padding:"15px 18px",
              borderTop:`3px solid ${KC[key]||C.accent}` }}>
              <div style={{ color:C.muted, fontSize:11, marginBottom:6 }}>{key}</div>
              <div title={tipV(v26)} style={{ color:C.text, fontSize:22, fontWeight:900, marginBottom:5,
                letterSpacing:"-0.03em", cursor:"default" }}>
                {v26>0 ? Math.round(v26).toLocaleString()+"억" : <span style={{ color:C.muted }}>-</span>}
              </div>
              <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:4 }}>
                <span style={{ color:gs.c, fontSize:11, fontWeight:700 }}>{gs.t}</span>
                {ar!==null && <span style={{ color:as_.c, fontSize:11, fontWeight:600 }}>달성 {as_.t}</span>}
              </div>
              {vt>0 && <MiniBar pct={gNum(ar)} color={KC[key]||C.accent} />}
              {v25>0 && (
                <div style={{ color:C.muted, fontSize:10, marginTop:5 }}>
                  <span title={tipV(v25)}>전년 {Math.round(v25).toLocaleString()}억</span>
                  {" → "}
                  <span title={tipV(v26)}>{v26>0?Math.round(v26).toLocaleString():"-"}억</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── 3열 중간 ── */}
      <div style={{ display:"flex", gap:13 }}>

        {/* CE 비중 */}
        <div style={{ flex:1, background:C.card2, border:`1px solid ${C.border}`,
          borderRadius:12, padding:18 }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:3 }}>
            CE 비중 <Chip>26년 YTD</Chip>
          </div>
          <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>
            CE(휴대폰제외) 기준 · 대외영업=(대외영업-휴대폰)÷CE
          </div>
          {["대외영업","혼수","뉴홈","SAC","B2B","휴대폰"].map(key => {
            const s = ceShare26(key);
            return (
              <div key={key} style={{ marginBottom:9 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ color:C.muted2, fontSize:12 }}>
                    {key}{key==="대외영업"&&<span style={{ color:C.muted, fontSize:9 }}> (폰제외)</span>}
                  </span>
                  <span style={{ color:KC[key]||C.text, fontWeight:700, fontSize:13 }}>
                    {s?s+"%":"-"}
                  </span>
                </div>
                <MiniBar pct={Number(s||0)} color={KC[key]||C.accent} />
              </div>
            );
          })}
        </div>

        {/* 전년비 성장률 */}
        <div style={{ flex:1, background:C.card2, border:`1px solid ${C.border}`,
          borderRadius:12, padding:18 }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:3 }}>전년비 성장률</div>
          <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>26년 vs 25년 동기 누계</div>
          {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key => {
            const v26=yp26(key), v25=yp25(key);
            const gr=gRate(v26,v25); const gs=gStyle(gr);
            return (
              <div key={key} style={{ display:"flex", justifyContent:"space-between",
                alignItems:"center", padding:"6px 0", borderBottom:`1px solid ${C.border}20` }}>
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div style={{ width:7, height:7, borderRadius:"50%",
                    background:KC[key]||C.muted, flexShrink:0 }} />
                  <span style={{ color:C.muted2, fontSize:12 }}>{key}</span>
                </div>
                <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                  <span style={{ color:C.muted, fontSize:10 }}>
                    <span title={tipV(v25)}>{v25>0?Math.round(v25).toLocaleString():"-"}</span>
                    {" → "}
                    <span title={tipV(v26)}>{v26>0?Math.round(v26).toLocaleString():"-"}</span>
                  </span>
                  <span style={{ color:gs.c, fontWeight:700, fontSize:11, minWidth:68, textAlign:"right" }}>
                    {gs.t}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 목표 달성률 */}
        <div style={{ flex:1, background:C.card2, border:`1px solid ${C.border}`,
          borderRadius:12, padding:18 }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:3 }}>
            목표 달성률 <Chip color={C.blue}>26년 YTD</Chip>
          </div>
          <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>
            실적누계 ÷ 목표누계 ({MONTHS[emi]} 기준)
          </div>
          {["CE","대외영업","혼수","뉴홈","SAC","B2B"].map(key => {
            const pv=yp26(key), tv=yt26(key);
            const a=aRate(pv,tv); const as_=aStyle(a);
            return (
              <div key={key} style={{ marginBottom:9 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ color:C.muted2, fontSize:12 }}>{key}</span>
                  <span style={{ color:as_.c, fontWeight:700, fontSize:13 }}>{as_.t}</span>
                </div>
                <div style={{ height:3, background:C.border, borderRadius:2, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${Math.min(gNum(a),100)}%`,
                    background:gNum(a)>=100?C.green:gNum(a)>=80?C.orange:C.red,
                    borderRadius:2 }} />
                </div>
                {tv>0 && (
                  <div style={{ color:C.muted, fontSize:10, marginTop:2 }}>
                    <span title={tipV(pv)}>{pv>0?Math.round(pv).toLocaleString():"-"}</span>억
                    {" / 목표 "}
                    <span title={tipV(tv)}>{Math.round(tv).toLocaleString()}</span>억
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ marginTop:12, paddingTop:12, borderTop:`1px solid ${C.border}` }}>
            <div style={{ color:C.muted, fontSize:11, marginBottom:8 }}>25년 달성률 비교</div>
            {["CE","대외영업"].map(key => {
              const pv=yp25(key), tv=yt25(key);
              const a=aRate(pv,tv); const as_=aStyle(a);
              return (
                <div key={key} style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                  <span style={{ color:C.muted, fontSize:11 }}>{key}</span>
                  <span style={{ color:as_.c, fontSize:11, fontWeight:700 }}>{as_.t}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 월별 막대 차트 ── */}
      <div style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:20 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
          <div>
            <div style={{ color:C.text, fontWeight:800, fontSize:14 }}>CE 월별 실적 추이 · {mode}</div>
            <div style={{ color:C.muted, fontSize:11, marginTop:2 }}>24년 / 25년 / 26년 실적 · 26년 목표 (단위: 억원)</div>
          </div>
          <div style={{ display:"flex", gap:6 }}>
            <Chip color={C.muted2}>24년실</Chip>
            <Chip color={C.accent}>25년실</Chip>
            <Chip color={modeColor}>26년실</Chip>
            <Chip color={C.orange}>26년목</Chip>
          </div>
        </div>
        <div style={{ display:"flex", gap:3, alignItems:"flex-end", height:110 }}>
          {monthlyBars.map((d,i) => (
            <div key={i} style={{ flex:1, display:"flex", gap:1, alignItems:"flex-end" }}>
              {[
                {v:d.p24, c:"#4a5580"},
                {v:d.p25, c:C.accent},
                {v:d.p26, c:modeColor},
                {v:d.t26, c:C.orange, op:0.4},
              ].map((b,bi) => {
                const h=Math.max((b.v/maxBarV)*100, b.v>0?2:0);
                return (
                  <div key={bi}
                    title={`${MONTHS[i]} ${["24실","25실","26실","26목"][bi]}: ${b.v.toFixed(1)}억`}
                    style={{ flex:1, height:h, background:b.c, borderRadius:"2px 2px 0 0",
                      opacity:b.op||0.85, transition:"height .3s" }} />
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:3, marginTop:5 }}>
          {MONTHS.map((m,i) => (
            <div key={i} style={{ flex:1, textAlign:"center", color:C.muted, fontSize:9 }}>
              {m.replace("월","")}
            </div>
          ))}
        </div>
      </div>

      {/* ── 스파크라인 ── */}
      <div style={{ background:C.card2, border:`1px solid ${C.border}`, borderRadius:12, padding:18 }}>
        <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:14 }}>
          항목별 월별 트렌드 · {mode}
          <span style={{ color:C.muted, fontSize:11, fontWeight:400, marginLeft:8 }}>25년 회색 / 26년 컬러</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:10 }}>
          {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key => {
            const v25s=MONTHS.map((_,mi)=>gNum(fullRow(p25[mi])[key]));
            const v26s=MONTHS.map((_,mi)=>gNum(fullRow(p26[mi])[key]));
            const tot25=v25s.reduce((a,b)=>a+b,0), tot26=v26s.reduce((a,b)=>a+b,0);
            const gr=gRate(tot26,tot25); const gs=gStyle(gr);
            const maxV=Math.max(...v25s,...v26s,1);
            return (
              <div key={key} style={{ background:C.card, borderRadius:9, padding:"12px 14px",
                borderTop:`2px solid ${KC[key]||C.muted}` }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                  <span style={{ color:KC[key]||C.text, fontWeight:700, fontSize:13 }}>{key}</span>
                  <span style={{ color:gs.c, fontSize:10, fontWeight:700 }}>{gs.t}</span>
                </div>
                <div style={{ display:"flex", gap:8, marginBottom:4 }}>
                  <span title={tipV(tot25)} style={{ color:C.muted, fontSize:10, cursor:"default" }}>
                    25년 {tot25>0?Math.round(tot25).toLocaleString():"-"}억
                  </span>
                  <span title={tipV(tot26)} style={{ color:C.text, fontSize:10, fontWeight:600, cursor:"default" }}>
                    26년 {tot26>0?Math.round(tot26).toLocaleString():"-"}억
                  </span>
                </div>
                <svg viewBox="0 0 200 36" style={{ width:"100%", height:36 }} preserveAspectRatio="none">
                  {(() => {
                    const mkPts = vals => vals.map((v,i)=>`${(i/11)*200},${36-(v/maxV)*32-2}`).join(" ");
                    return (
                      <>
                        <polyline points={mkPts(v25s)} fill="none" stroke={C.muted}
                          strokeWidth={1.2} strokeLinejoin="round" opacity={0.5}/>
                        <polyline points={mkPts(v26s)} fill="none" stroke={KC[key]||C.accent}
                          strokeWidth={2} strokeLinejoin="round"/>
                      </>
                    );
                  })()}
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════
//  ANALYSIS TAB
// ═══════════════════════════════════════════════════
function Analysis({ data, mode }) {
  const [view, setView]   = useState("table");
  const [selYr, setSelYr] = useState("26");

  const pD     = data[selYr]?.[mode]?.perf   || emptyM();
  const tD     = data[selYr]?.[mode]?.target || emptyM();
  const prevYr = selYr==="26"?"25": selYr==="25"?"24":null;
  const prevP  = prevYr ? (data[prevYr]?.[mode]?.perf||emptyM()) : null;

  const lm  = lastMi(pD);
  const emi = lm>=0?lm:11;

  const views = [
    {k:"table",   l:"실적 현황"},
    {k:"achieve", l:"목표 달성률"},
    {k:"growth",  l:"전년비 성장률"},
    {k:"share",   l:"CE 비중"},
    {k:"trend",   l:"트렌드/히트맵"},
  ];

  const monthRows  = MONTHS.map((_,mi)=>fullRow(pD[mi]));
  const tMonthRows = MONTHS.map((_,mi)=>fullRow(tD[mi]));
  const prevRows   = prevP?MONTHS.map((_,mi)=>fullRow(prevP[mi])):null;

  const rowTotal  = (key,d)   => sumRange(d||pD,key,0,11);
  const ytdTotal  = (key,d,m) => sumRange(d||pD,key,0,m);

  const modeColor = C[mode];

  const TH = ({children,right=false,accent=false}) => (
    <th style={{ padding:"7px 8px", textAlign:right?"right":"left",
      color:accent?C.accent:C.muted, fontWeight:600, fontSize:11, whiteSpace:"nowrap" }}>
      {children}
    </th>
  );
  const RowLabel = ({row}) => (
    <td style={{ padding:"6px 12px", paddingLeft:12+row.lv*14,
      color:row.bold?(KC[row.key]||C.text):C.muted2, fontWeight:row.bold?700:400, fontSize:12,
      position:"sticky", left:0, background:C.card, zIndex:1, whiteSpace:"nowrap" }}>
      {row.lv>0?"└ ":""}{row.label}
      {!row.inp&&<span style={{color:C.accent,fontSize:9,marginLeft:4}}>AUTO</span>}
    </td>
  );

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

      {/* 뷰 선택 + 연도 */}
      <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
        <div style={{ display:"flex", gap:4, flex:1, flexWrap:"wrap" }}>
          {views.map(v => (
            <button key={v.k} onClick={()=>setView(v.k)} style={{
              padding:"8px 16px", borderRadius:8, cursor:"pointer", fontWeight:700,
              fontSize:12, fontFamily:"inherit",
              border:`1px solid ${view===v.k?C.accent:C.border}`,
              background: view===v.k?C.accent+"22":"transparent",
              color: view===v.k?C.accent:C.muted,
            }}>{v.l}</button>
          ))}
        </div>
        <div style={{ display:"flex", gap:4 }}>
          {(view==="achieve"?["25","26"]:["24","25","26"]).map(y => (
            <button key={y} onClick={()=>setSelYr(y)} style={{
              padding:"7px 13px", borderRadius:8, cursor:"pointer", fontSize:12,
              fontWeight:700, fontFamily:"inherit",
              border:`1px solid ${selYr===y?C.blue:C.border}`,
              background: selYr===y?C.blue+"18":"transparent",
              color: selYr===y?C.blue:C.muted,
            }}>20{y}년</button>
          ))}
        </div>
      </div>

      {lm>=0 && (
        <div style={{ background:C.card, border:`1px solid ${modeColor}40`, borderRadius:8,
          padding:"7px 14px", fontSize:11, color:C.muted2 }}>
          ◉ <strong style={{ color:modeColor }}>{mode}</strong> 기준 ·
          20{selYr}년 <strong style={{ color:C.text }}>{MONTHS[emi]}</strong> 누계
          {prevYr&&<span> · 전년 20{prevYr}년 동기 비교</span>}
          &nbsp;· 숫자에 마우스를 올리면 소수점 값이 표시됩니다
        </div>
      )}

      {/* ════ TABLE ════ */}
      {view==="table" && (
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12,
          padding:20, overflowX:"auto" }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:14 }}>
            실적 현황 <span style={{ color:C.muted, fontSize:12, fontWeight:400 }}>(단위: 억 · hover → 소수점 1자리)</span>
          </div>
          <table style={{ borderCollapse:"collapse", minWidth:900 }}>
            <thead>
              <tr style={{ borderBottom:`1px solid ${C.border}` }}>
                <TH>항목</TH>
                {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                <TH right accent>합계</TH>
              </tr>
            </thead>
            <tbody>
              {ALL_ROWS.map(row => (
                <tr key={row.key} style={{ borderBottom:`1px solid ${C.border}18`,
                  background:row.bold?C.bg+"88":"transparent" }}>
                  <RowLabel row={row} />
                  {monthRows.map((r,mi) => (
                    <td key={mi} style={{ padding:"6px 8px", textAlign:"right" }}>
                      <Val v={r[row.key]} color={C.text} />
                    </td>
                  ))}
                  <td style={{ padding:"6px 8px", textAlign:"right" }}>
                    <Val v={rowTotal(row.key)} color={KC[row.key]||C.accent} bold />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ════ ACHIEVE ════ */}
      {view==="achieve" && selYr!=="24" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12,
            padding:20, overflowX:"auto" }}>
            <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:4 }}>
              목표 달성률 — 20{selYr}년 · {mode}
            </div>
            <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>
              실적 ÷ 목표 (%) · 누계는 {MONTHS[emi]} 기준
            </div>
            <table style={{ borderCollapse:"collapse", minWidth:900 }}>
              <thead>
                <tr style={{ borderBottom:`1px solid ${C.border}` }}>
                  <TH>항목</TH>
                  {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                  <TH right accent>누계달성</TH>
                </tr>
              </thead>
              <tbody>
                {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key => {
                  const row = ALL_ROWS.find(r=>r.key===key);
                  const ytdP = ytdTotal(key,pD,emi);
                  const ytdT = ytdTotal(key,tD,emi);
                  const ytdA = aRate(ytdP,ytdT);
                  return (
                    <tr key={key} style={{ borderBottom:`1px solid ${C.border}18` }}>
                      <td style={{ padding:"6px 12px", paddingLeft:12+(row?.lv||0)*14,
                        color:KC[key]||C.muted2, fontWeight:600, fontSize:12,
                        position:"sticky", left:0, background:C.card }}>{key}</td>
                      {MONTHS.map((_,mi) => {
                        const p=gNum(monthRows[mi][key]), t=gNum(tMonthRows[mi][key]);
                        const a=aRate(p,t); const as_=aStyle(a);
                        return (
                          <td key={mi} style={{ padding:"6px 8px", textAlign:"right" }}>
                            {t>0?(
                              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:1 }}>
                                <span style={{ color:as_.c, fontSize:11, fontWeight:700 }}>{as_.t}</span>
                                <span style={{ color:C.muted, fontSize:9 }}>
                                  <span title={tipV(p)}>{p>0?Math.round(p).toLocaleString():"-"}</span>
                                  /<span title={tipV(t)}>{Math.round(t).toLocaleString()}</span>
                                </span>
                              </div>
                            ):<span style={{ color:C.muted }}>-</span>}
                          </td>
                        );
                      })}
                      <td style={{ padding:"6px 12px", textAlign:"right" }}>
                        <ABadge v={ytdA} />
                        {ytdT>0 && (
                          <div style={{ color:C.muted, fontSize:9, marginTop:1 }}>
                            <span title={tipV(ytdP)}>{ytdP>0?Math.round(ytdP).toLocaleString():"-"}</span>
                            /<span title={tipV(ytdT)}>{Math.round(ytdT).toLocaleString()}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            {["CE","대외영업","혼수","뉴홈","SAC","B2B"].map(key => {
              const ytdP=ytdTotal(key,pD,emi), ytdT=ytdTotal(key,tD,emi);
              const a=aRate(ytdP,ytdT); const as_=aStyle(a); const n=gNum(a);
              return (
                <div key={key} style={{ flex:"1 1 150px", background:C.card2,
                  border:`1px solid ${C.border}`, borderRadius:12, padding:"14px 16px",
                  borderLeft:`3px solid ${KC[key]||C.accent}` }}>
                  <div style={{ color:KC[key]||C.text, fontWeight:700, fontSize:13, marginBottom:6 }}>{key}</div>
                  <div style={{ color:as_.c, fontSize:24, fontWeight:900, marginBottom:4 }}>{as_.t}</div>
                  <div style={{ color:C.muted, fontSize:11 }}>
                    <span title={tipV(ytdP)}>{ytdP>0?Math.round(ytdP).toLocaleString():"-"}</span>억 /
                    <span title={tipV(ytdT)}> {ytdT>0?Math.round(ytdT).toLocaleString():"-"}</span>억
                  </div>
                  <MiniBar pct={n} color={n>=100?C.green:n>=80?C.orange:C.red} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {view==="achieve"&&selYr==="24"&&(
        <div style={{ background:C.card, borderRadius:12, padding:30, textAlign:"center", color:C.muted }}>
          24년은 목표 데이터가 없습니다.
        </div>
      )}

      {/* ════ GROWTH ════ */}
      {view==="growth" && (
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12,
          padding:20, overflowX:"auto" }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:4 }}>
            전년비 성장률 — 20{selYr}년 vs {prevYr?"20"+prevYr+"년":"기준없음"} · {mode}
          </div>
          <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>동월 비교 (%) · 누계는 {MONTHS[emi]} 기준</div>
          {prevRows?(
            <table style={{ borderCollapse:"collapse", minWidth:900 }}>
              <thead>
                <tr style={{ borderBottom:`1px solid ${C.border}` }}>
                  <TH>항목</TH>
                  {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                  <TH right accent>누계성장</TH>
                </tr>
              </thead>
              <tbody>
                {ALL_ROWS.map(row => {
                  const ytdCurr=ytdTotal(row.key,pD,emi);
                  const ytdPrev=ytdTotal(row.key,prevP,emi);
                  const ytdGr=gRate(ytdCurr,ytdPrev);
                  return (
                    <tr key={row.key} style={{ borderBottom:`1px solid ${C.border}18`,
                      background:row.bold?C.bg+"88":"transparent" }}>
                      <RowLabel row={row} />
                      {MONTHS.map((_,mi) => {
                        const cv=gNum(monthRows[mi][row.key]), pv=gNum(prevRows[mi][row.key]);
                        const gr=gRate(cv,pv); const gs=gStyle(gr);
                        return (
                          <td key={mi} style={{ padding:"6px 8px", textAlign:"right" }}>
                            {(cv>0||pv>0)?
                              <span style={{ color:gs.c, fontSize:11, fontWeight:600 }}>{gs.t}</span>
                              :<span style={{ color:C.muted }}>-</span>}
                          </td>
                        );
                      })}
                      <td style={{ padding:"6px 12px", textAlign:"right" }}>
                        <GBadge v={ytdGr} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ):(
            <div style={{ color:C.muted, padding:20, textAlign:"center" }}>
              24년은 전년 비교 기준이 없습니다.
            </div>
          )}
        </div>
      )}

      {/* ════ SHARE ════ */}
      {view==="share" && (
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12,
          padding:20, overflowX:"auto" }}>
          <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:4 }}>
            CE 비중 — 20{selYr}년 · {mode}
          </div>
          <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>
            기준: CE(휴대폰제외) · 대외영업=(대외영업-휴대폰)÷CE
          </div>
          <table style={{ borderCollapse:"collapse", minWidth:900 }}>
            <thead>
              <tr style={{ borderBottom:`1px solid ${C.border}` }}>
                <TH>항목</TH>
                {MONTHS.map(m=><TH key={m} right>{m}</TH>)}
                <TH right accent>전체비중</TH>
              </tr>
            </thead>
            <tbody>
              {["대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key => {
                const totCE=rowTotal("CE",pD), totHP=rowTotal("휴대폰",pD);
                const totV=key==="대외영업"?rowTotal("대외영업",pD)-totHP:rowTotal(key,pD);
                const totS=totCE?(totV/totCE*100).toFixed(1):null;
                return (
                  <tr key={key} style={{ borderBottom:`1px solid ${C.border}18` }}>
                    <td style={{ padding:"6px 12px", color:KC[key]||C.muted2, fontWeight:600,
                      fontSize:12, position:"sticky", left:0, background:C.card }}>
                      {key}{key==="대외영업"&&<span style={{ color:C.muted,fontSize:9 }}> (폰제외)</span>}
                    </td>
                    {MONTHS.map((_,mi) => {
                      const ce=gNum(monthRows[mi].CE), hp=gNum(monthRows[mi].휴대폰);
                      const v=key==="대외영업"?gNum(monthRows[mi].대외영업)-hp:gNum(monthRows[mi][key]);
                      const s=ce?(v/ce*100).toFixed(1):null;
                      return (
                        <td key={mi} style={{ padding:"6px 8px", textAlign:"right" }}>
                          {s?<span style={{ color:KC[key]||C.text, fontSize:11, fontWeight:600 }}>{s}%</span>
                            :<span style={{ color:C.muted }}>-</span>}
                        </td>
                      );
                    })}
                    <td style={{ padding:"6px 12px", textAlign:"right",
                      color:KC[key]||C.accent, fontWeight:700, fontSize:12 }}>
                      {totS?totS+"%":"-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* ════ TREND ════ */}
      {view==="trend" && (
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:18 }}>
            <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:14 }}>
              항목별 월별 트렌드 · {mode}
              {prevYr&&<span style={{ color:C.muted, fontSize:11, fontWeight:400, marginLeft:8 }}>
                회색: {prevYr}년 / 컬러: {selYr}년
              </span>}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:10 }}>
              {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key => {
                const curr=MONTHS.map((_,mi)=>gNum(monthRows[mi][key]));
                const prev=prevRows?MONTHS.map((_,mi)=>gNum(prevRows[mi][key])):null;
                const totC=curr.reduce((a,b)=>a+b,0), totP=prev?prev.reduce((a,b)=>a+b,0):0;
                const gr=gRate(totC,totP); const gs=gStyle(gr);
                const maxV=Math.max(...curr,...(prev||[0]),1);
                return (
                  <div key={key} style={{ background:C.card2, borderRadius:9, padding:"12px 14px",
                    borderTop:`2px solid ${KC[key]||C.muted}` }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                      <span style={{ color:KC[key]||C.text, fontWeight:700, fontSize:13 }}>{key}</span>
                      <span style={{ color:gs.c, fontSize:10, fontWeight:700 }}>{gs.t}</span>
                    </div>
                    <svg viewBox="0 0 200 38" style={{ width:"100%", height:38 }} preserveAspectRatio="none">
                      {prev&&(()=>{
                        const pts=prev.map((v,i)=>`${(i/11)*200},${38-(v/maxV)*34-2}`).join(" ");
                        return <polyline points={pts} fill="none" stroke={C.muted} strokeWidth={1.2} strokeLinejoin="round" opacity={0.5}/>;
                      })()}
                      {(()=>{
                        const pts=curr.map((v,i)=>`${(i/11)*200},${38-(v/maxV)*34-2}`).join(" ");
                        return <polyline points={pts} fill="none" stroke={KC[key]||C.accent} strokeWidth={2} strokeLinejoin="round"/>;
                      })()}
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 히트맵 */}
          <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12,
            padding:18, overflowX:"auto" }}>
            <div style={{ color:C.text, fontWeight:800, fontSize:14, marginBottom:4 }}>
              전년동월비 성장률 히트맵 · {mode}
            </div>
            <div style={{ color:C.muted, fontSize:11, marginBottom:14 }}>
              20{selYr}년 vs 20{prevYr||"-"}년 (녹색:성장 / 적색:감소)
            </div>
            {prevRows?(
              <table style={{ borderCollapse:"collapse", minWidth:700 }}>
                <thead>
                  <tr>
                    <th style={{ padding:"5px 12px", textAlign:"left", color:C.muted, fontWeight:600, width:80 }}>항목</th>
                    {MONTHS.map(m=><th key={m} style={{ padding:"5px 8px", textAlign:"center",
                      color:C.muted, fontWeight:600, minWidth:46 }}>{m}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {["CE","대외영업","혼수","뉴홈","SAC","B2B","SMB","농협","휴대폰"].map(key => (
                    <tr key={key} style={{ borderBottom:`1px solid ${C.border}18` }}>
                      <td style={{ padding:"5px 12px", color:KC[key]||C.muted2, fontWeight:600, fontSize:12 }}>{key}</td>
                      {MONTHS.map((_,mi) => {
                        const cv=gNum(monthRows[mi][key]), pv=gNum(prevRows[mi][key]);
                        if(!cv&&!pv) return <td key={mi} style={{ padding:"5px 8px", textAlign:"center" }}><span style={{ color:C.muted, fontSize:10 }}>-</span></td>;
                        const gr=pv?((cv-pv)/pv*100):null;
                        const intensity=gr!==null?Math.min(Math.abs(gr)/25,1):0;
                        const bg=gr===null?"transparent":gr>0?`rgba(52,211,153,${intensity*0.3})`:`rgba(248,113,113,${intensity*0.3})`;
                        const col=gr===null?C.muted:gr>0?C.green:C.red;
                        return (
                          <td key={mi} style={{ padding:"5px 8px", textAlign:"center",
                            background:bg, borderRadius:3 }}>
                            <span style={{ color:col, fontSize:10, fontWeight:600 }}>
                              {gr!==null?(gr>0?"+":"")+gr.toFixed(1)+"%":"-"}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            ):(
              <div style={{ color:C.muted, padding:20, textAlign:"center" }}>전년 비교 기준 없음</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════
//  APP ROOT
// ═══════════════════════════════════════════════════
function App() {
  const [tab,      setTab]      = useState("input");
  const [mode,     setMode]     = useState("매출");  // 전역 판매/매출 모드
  const [data,     setData]     = useState(initData);
  const [saveState, setSaveState] = useState("idle");
  const [hasUnsaved, setHasUnsaved] = useState(false);

  const DOC_REF = () => window.db.collection("perf").doc("main");
  const [dbStatus, setDbStatus] = useState("로딩중...");

  // ── 구버전 데이터 → 신버전 자동 변환 ──────────────
  // 구버전: data[yr].perf / data[yr].target
  // 신버전: data[yr][매출].perf / data[yr][매출].target
  const migrateData = (raw) => {
    if (!raw) return initData();
    const isOldFormat = yr => raw[yr] && raw[yr].perf && !raw[yr]["매출"];
    if (!isOldFormat("24") && !isOldFormat("25") && !isOldFormat("26")) return raw;
    // 구버전 감지 → 기존 데이터를 매출로 이동
    const migrated = initData();
    ["24","25","26"].forEach(yr => {
      if (raw[yr]) {
        if (raw[yr].perf)   migrated[yr]["매출"].perf   = raw[yr].perf;
        if (raw[yr].target) migrated[yr]["매출"].target = raw[yr].target;
      }
    });
    console.log("📦 데이터 구조 마이그레이션 완료 (구버전→신버전)");
    return migrated;
  };

  useEffect(() => {
    (async () => {
      try {
        const snap = await DOC_REF().get();
        if (snap.exists()) {
          const raw = snap.data().perfData;
          const migrated = migrateData(raw);
          setData(migrated);
          localStorage.setItem("perf_data_v3", JSON.stringify(migrated));
          console.log("✅ Firestore 로드 성공:", JSON.stringify(migrated).slice(0,200));
          setDbStatus("✅ DB연결");
        } else {
          console.log("⚠️ Firestore 문서 없음");
          const local = localStorage.getItem("perf_data_v3");
          if (local) setData(migrateData(JSON.parse(local)));
        }
      } catch(e) {
        console.log("❌ Firestore 오류:", e.message);
        setDbStatus("❌ DB오류: "+e.message.slice(0,30));
        try {
          const local = localStorage.getItem("perf_data_v3");
          if (local) setData(migrateData(JSON.parse(local)));
        } catch {}
      } finally {
        window.__appReady = true;
      }
    })();
  }, []);

  const handleSetData = useCallback((updater) => {
    setData(prev => {
      const next = typeof updater==="function" ? updater(prev) : updater;
      setHasUnsaved(true);
      return next;
    });
  }, []);

  const handleSave = useCallback(async () => {
    setSaveState("saving");
    try {
      await DOC_REF().set({ perfData: data, updatedAt: new Date().toISOString() });
      localStorage.setItem("perf_data_v3", JSON.stringify(data));
      setSaveState("saved");
      setHasUnsaved(false);
      setTimeout(() => setSaveState("idle"), 2500);
    } catch(e) {
      try { localStorage.setItem("perf_data_v3", JSON.stringify(data)); } catch {}
      setSaveState("error");
      setTimeout(() => setSaveState("idle"), 3000);
    }
  }, [data]);

  const TABS = [
    {k:"dashboard", l:"대시보드",  icon:"◈"},
    {k:"analysis",  l:"실적분석",  icon:"◉"},
    {k:"input",     l:"실적입력",  icon:"◎"},
  ];

  const modeColor = C[mode];

  return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.text,
      fontFamily:"'Noto Sans KR','Apple SD Gothic Neo',sans-serif" }}>

      {/* ══════════════════════════════════════════
           최상단 판매 / 매출 선택 바
          ══════════════════════════════════════════ */}
      <div style={{ background:"#040b16", borderBottom:`1px solid ${C.border}`,
        padding:"0 28px" }}>
        <div style={{ maxWidth:1360, margin:"0 auto", display:"flex",
          alignItems:"center", height:42, gap:6 }}>
          <span style={{ color:C.muted, fontSize:11, fontWeight:700,
            letterSpacing:"0.08em", marginRight:8 }}>구분</span>
          {MODES.map(m => (
            <button key={m} onClick={() => setMode(m)} style={{
              padding:"6px 28px", borderRadius:8, cursor:"pointer",
              fontFamily:"inherit", fontWeight:800, fontSize:13,
              border:`1px solid ${mode===m ? C[m] : C.border}`,
              background: mode===m ? C[m]+"22" : "transparent",
              color: mode===m ? C[m] : C.muted,
              boxShadow: mode===m ? `0 0 12px ${C[m]}40` : "none",
              transition:"all .15s",
            }}>
              {m==="매출" ? "💰 매출" : "📦 판매"}
            </button>
          ))}
          <div style={{ marginLeft:12, height:24, width:1, background:C.border }} />
          <span style={{ color:C[mode], fontSize:11, fontWeight:700 }}>
            현재: {mode} 모드 · 전 화면에 {mode} 데이터가 표시됩니다
          </span>
          <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
            {saveState==="saved"  && <span style={{ color:C.green,  fontSize:11, fontWeight:600 }}>✓ 저장완료</span>}
            {saveState==="saving" && <span style={{ color:C.orange, fontSize:11, fontWeight:600 }}>저장 중...</span>}
            {saveState==="error"  && <span style={{ color:C.red,    fontSize:11, fontWeight:600 }}>⚠ 저장실패</span>}
            {hasUnsaved && saveState==="idle" && <span style={{ color:C.orange, fontSize:11, fontWeight:600 }}>● 미저장</span>}
          </div>
        </div>
      </div>

      {/* ── 메인 헤더 ── */}
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`,
        padding:"0 28px", position:"sticky", top:42, zIndex:200 }}>
        <div style={{ display:"flex", alignItems:"center", height:50, gap:24, maxWidth:1360, margin:"0 auto" }}>

          {/* 로고 */}
          <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
            <div style={{ width:28, height:28,
              background:`linear-gradient(135deg, ${modeColor} 0%, ${C.accent} 100%)`,
              borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:13, fontWeight:900, color:"#fff",
              boxShadow:`0 0 12px ${modeColor}50`, transition:"all .3s" }}>C</div>
            <div>
              <div style={{ color:C.text, fontWeight:900, fontSize:13, letterSpacing:"-0.03em" }}>
                Chungcheong Sales
              </div>
              <div style={{ color:modeColor, fontSize:9, letterSpacing:"0.06em", fontWeight:700 }}>
                충청영업팀 · {mode} 실적관리
              </div>
            </div>
          </div>

          {/* 탭 */}
          <nav style={{ display:"flex", gap:2 }}>
            {TABS.map(t => (
              <button key={t.k} onClick={() => setTab(t.k)} style={{
                padding:"8px 18px", borderRadius:8, border:"none", cursor:"pointer",
                background: tab===t.k ? modeColor+"20" : "transparent",
                color: tab===t.k ? modeColor : C.muted,
                fontWeight: tab===t.k ? 800 : 500, fontSize:13, fontFamily:"inherit",
                borderBottom: tab===t.k ? `2px solid ${modeColor}` : "2px solid transparent",
                transition:"all .2s",
              }}>
                {t.icon}&nbsp;{t.l}
              </button>
            ))}
          </nav>

          <div style={{ marginLeft:"auto", display:"flex", gap:6, alignItems:"center", flexShrink:0 }}>
            <span style={{ color:C.muted, fontSize:9 }}>v6</span>
            <span style={{ color: dbStatus.startsWith("✅")?C.green:dbStatus.startsWith("❌")?C.red:C.orange,
              fontSize:10, fontWeight:600 }}>{dbStatus}</span>
            <Chip color={C.muted2}>24년</Chip>
            <Chip color={C.accent}>25년</Chip>
            <Chip color={modeColor}>26년</Chip>
          </div>
        </div>
      </div>

      {/* ── 콘텐츠 ── */}
      <div style={{ maxWidth:1360, margin:"0 auto", padding:"22px 28px" }}>
        <div style={{ marginBottom:18 }}>
          <h1 style={{ margin:0, color:C.text, fontSize:19, fontWeight:900, letterSpacing:"-0.04em" }}>
            {tab==="dashboard" ? "실적 대시보드" : tab==="analysis" ? "실적 분석" : "실적 입력"}
            <span style={{ color:modeColor, fontSize:14, fontWeight:700, marginLeft:10 }}>· {mode}</span>
          </h1>
          <p style={{ margin:"4px 0 0", color:C.muted, fontSize:12 }}>
            {tab==="dashboard" && "KPI · CE비중 · 전년비성장률 · 목표달성률 · 월별트렌드 종합 현황 (26년 기준)"}
            {tab==="analysis"  && "실적현황 · 목표달성률 · 전년비성장률 · CE비중 · 트렌드/히트맵 상세 분석"}
            {tab==="input"     && "24년/25년/26년 월별 실적·목표 수기 입력 · 억원(소수점 가능) · 표시는 억단위 정수"}
          </p>
        </div>

        {tab==="dashboard" && <Dashboard data={data} mode={mode} />}
        {tab==="analysis"  && <Analysis  data={data} mode={mode} />}
        {tab==="input"     && <InputTab  data={data} setData={handleSetData} mode={mode}
                                onSave={handleSave} saveState={saveState} hasUnsaved={hasUnsaved} />}
      </div>

      {/* ── 푸터 ── */}
      <div style={{ borderTop:`1px solid ${C.border}`, padding:"12px 28px",
        background:C.surface, marginTop:24 }}>
        <div style={{ maxWidth:1360, margin:"0 auto", display:"flex", gap:14,
          flexWrap:"wrap", alignItems:"center" }}>
          <span style={{ color:C.muted, fontSize:10, fontWeight:700,
            letterSpacing:"0.06em", flexShrink:0 }}>산출 기준</span>
          {[
            ["대외영업", "혼수+입주+이사+SMB+농협+거주중+휴대폰", C.blue],
            ["뉴홈",     "입주+이사",               C.green],
            ["B2B",      "SMB+농협+휴대폰",          C.orange],
            ["CE비중",   "각항목÷CE (CE=전체·휴대폰제외)", C.accent],
            ["대외영업CE비중", "(대외영업-휴대폰)÷CE",  C.purple],
            ["달성률",   "실적누계÷목표누계×100",    C.teal],
            ["표시",     "억단위 정수 · hover→소수점1자리", C.muted2],
          ].map(([k,v,c]) => (
            <span key={k} style={{ color:C.muted, fontSize:10 }}>
              <span style={{ color:c, fontWeight:700 }}>{k}</span> = {v}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── React 앱 마운트 ── */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
