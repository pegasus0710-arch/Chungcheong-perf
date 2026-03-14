/* ═══════════════════════════════════════════════
   충청영업팀 실적관리 v13
   ─────────────────────────────────────────────
   대시보드: 꺾기 차트, 누계 비교, 진척률, 전항목
   분석: 실적+목표+달성률 / 실적+전년+성장률
   입력: 일괄입력 실적/목표 명확 구분, 합계 고정
   반응형: 모바일/태블릿/PC 지원
   ═══════════════════════════════════════════════ */
const { useState, useEffect, useCallback, useMemo, useRef } = React;
const APP_VER = "v3.1";
// 목표 입력 잠금 비번 (SHA-256) — 기본값: tgt2025!
const TGT_PW_HASH  = "b1c9a90560020cd8f64c5a8a2c30bd2b6ce28dcff2b9e535f9da3c2d14061b68";
const TGT_UNLOCK_KEY = "cst_tgt_unlock_v1"; // 목표+실적 통합 잠금
// 전역 폰트 크기 (plan.html → localStorage 공유)
const FONT_SIZE_KEY = "cst_font_size_v1";

// ─── spin 애니메이션 전역 주입 (ErrorBoundary/내부 스피너용) ───
(()=>{
  if(!document.getElementById("cst-spin-style")){
    const s=document.createElement("style");
    s.id="cst-spin-style";
    s.textContent=
      "#app-content{transform-origin:top left;transition:transform .15s ease;}"+
      "@keyframes spin{to{transform:rotate(360deg)}}"+
      "@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}";
    document.head.appendChild(s);
  }
})();

// ─── 상수 ─────────────────────────────────────
const MONTHS   = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
const INP_KEYS = ["CE","혼수","입주","이사","SAC","거주중","SMB","농협","휴대폰"];
const MODES    = ["매출","판매"];
const ALL_KEYS = ["CE","대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];

// ─── 파생값 ─────────────────────────────────────
const g = (o,k) => parseFloat(o?.[k])||0;
const derived = o => ({
  뉴홈:    g(o,"입주")+g(o,"이사"),
  대외영업: g(o,"혼수")+g(o,"입주")+g(o,"이사")+g(o,"SMB")+g(o,"농협")+g(o,"거주중")+g(o,"휴대폰"),
  B2B:     g(o,"SMB")+g(o,"농협")+g(o,"휴대폰"),
});
const fullRow = o => ({...(o||{}), ...derived(o)});
const gNum = v => parseFloat(v)||0;
const sk = i => String(i); // safe key

// ─── 데이터 구조 ─────────────────────────────────
const emptyM = () => Object.fromEntries(
  Array.from({length:12},(_,i)=>[sk(i), Object.fromEntries(INP_KEYS.map(k=>[k,""]))])
);
const emptyMode = hasTgt => hasTgt ? {perf:emptyM(),target:emptyM()} : {perf:emptyM()};
const initData = () => ({
  "24":{매출:emptyMode(false),판매:emptyMode(false)},
  "25":{매출:emptyMode(true), 판매:emptyMode(true)},
  "26":{매출:emptyMode(true), 판매:emptyMode(true)},
});

// ─── 정규화 (Firestore 키형식 무관) ──────────────
const normalizeM = src => {
  const r = {};
  for(let i=0;i<12;i++){
    const v = src?.[i] || src?.[sk(i)] || {};
    r[sk(i)] = {};
    INP_KEYS.forEach(k=>{ r[sk(i)][k] = v[k]??""});
  }
  return r;
};
const migrate = raw => {
  if(!raw) return initData();
  const res = initData();
  ["24","25","26"].forEach(yr=>{
    if(!raw[yr]) return;
    MODES.forEach(mode=>{
      const src = raw[yr]?.[mode] || (mode==="매출"&&!raw[yr]?.["매출"]?raw[yr]:null);
      if(!src) return;
      ["perf","target"].forEach(t=>{
        if(!src[t]) return;
        res[yr][mode][t] = normalizeM(src[t]);
      });
    });
  });
  return res;
};

// ─── 수식 ────────────────────────────────────────
const sumM  = (d,k) => Array.from({length:12},(_,i)=>gNum(fullRow(d?.[sk(i)])[k])).reduce((a,b)=>a+b,0);
const sumR  = (d,k,f,t) => Array.from({length:t-f+1},(_,i)=>gNum(fullRow(d?.[sk(f+i)])[k])).reduce((a,b)=>a+b,0);
const pct   = (a,b) => b?(a/b*100).toFixed(1):null;
const grw   = (c,p) => p?((c-p)/p*100).toFixed(1):null;
const fmt   = v => {const n=gNum(v); return n>0?Math.round(n).toLocaleString():"-";};
const fmtD  = v => {const n=gNum(v); return n>0?n.toFixed(1)+"억":"";};
const lastMiOf = d => {for(let i=11;i>=0;i--) if(INP_KEYS.some(k=>gNum(d?.[sk(i)]?.[k])>0)) return i; return -1;};

// ─── 색상 ────────────────────────────────────────
const C = {
  bg:"#07101f",surf:"#0b1929",card:"#0f2035",card2:"#132843",
  b1:"#1b3353",b2:"#213d63",
  text:"#cce4f7",muted:"#4a6a88",muted2:"#7a9ab8",
  accent:"#7c83f5",blue:"#38b6f5",green:"#2dd488",orange:"#f5b942",
  red:"#f07070",purple:"#d97af5",teal:"#2dd4c0",
  매출:"#38b6f5",판매:"#2dd488",
};
const KC={CE:"#7c83f5",대외영업:"#38b6f5",혼수:"#f5b942",뉴홈:"#2dd488",
  입주:"#5ee8b0",이사:"#80f0de",SAC:"#d97af5",거주중:"#b87af5",
  B2B:"#f58f42",SMB:"#f5c090",농협:"#f5e090",휴대폰:"#90a8c0"};

// ─── 행 정의 ─────────────────────────────────────
const ROWS=[
  {key:"CE",lv:0,inp:true,bold:true},
  {key:"대외영업",lv:0,inp:false,bold:true},
  {key:"혼수",lv:1,inp:true,bold:false},
  {key:"뉴홈",lv:1,inp:false,bold:false},
  {key:"입주",lv:2,inp:true,bold:false},
  {key:"이사",lv:2,inp:true,bold:false},
  {key:"SAC",lv:1,inp:true,bold:false},
  {key:"거주중",lv:2,inp:true,bold:false},
  {key:"B2B",lv:1,inp:false,bold:false},
  {key:"SMB",lv:2,inp:true,bold:false},
  {key:"농협",lv:2,inp:true,bold:false},
  {key:"휴대폰",lv:1,inp:true,bold:false},
];

// ─── 유틸 UI ─────────────────────────────────────
const pctC = v=>{const n=gNum(v);return n>=100?C.green:n>=80?C.orange:C.red;};
const grwC  = v=>{const n=gNum(v);return n>0?C.green:n<0?C.red:C.muted2;};
const grwT  = v=>{const n=gNum(v);return n>0?`▲${v}%`:n<0?`▼${Math.abs(n)}%`:"─0%";};
const Chip  = ({c=C.accent,children})=>(
  <span style={{background:c+"22",color:c,border:`1px solid ${c}44`,
    borderRadius:5,padding:"2px 8px",fontSize:10,fontWeight:700,whiteSpace:"nowrap"}}>
    {children}
  </span>
);

// ─── 반응형 훅 ────────────────────────────────────
function useIsMobile(){
  const [m,setM]=useState(window.innerWidth<768);
  useEffect(()=>{
    const h=()=>setM(window.innerWidth<768);
    window.addEventListener("resize",h);
    return()=>window.removeEventListener("resize",h);
  },[]);
  return m;
}

// ─── SVG 라인 차트 ────────────────────────────────
function LineChart({series,labels,h=120,showDots=true}){
  const allVals=series.flatMap(s=>s.data.map(gNum));
  const maxV=Math.max(...allVals,1);
  const W=560, H=h, PL=6, PR=6, PT=8, PB=0;
  const cx=i=>(PL+(i/(labels.length-1||1))*(W-PL-PR));
  const cy=v=>(PT+(1-gNum(v)/maxV)*(H-PT-PB));
  const smooth=pts=>{
    if(pts.length<2) return "";
    return pts.reduce((p,pt,i)=>{
      if(i===0) return `M${pt.x},${pt.y}`;
      const prev=pts[i-1];
      const cpx=(pt.x-prev.x)*0.4;
      return `${p} C${prev.x+cpx},${prev.y} ${pt.x-cpx},${pt.y} ${pt.x},${pt.y}`;
    },"");
  };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:H}} preserveAspectRatio="none">
      {series.map((s,si)=>{
        const pts=s.data.map((v,i)=>({x:cx(i),y:cy(v)}));
        const valid=pts.filter((_,i)=>gNum(s.data[i])>0);
        if(valid.length===0) return null;
        const d=smooth(pts.filter((_,i)=>gNum(s.data[i])>0||i===0||i===pts.length-1));
        const fillPts=[...pts.map(p=>`${p.x},${p.y}`),`${cx(labels.length-1)},${H}`,`${cx(0)},${H}`].join(" ");
        return (
          <g key={si}>
            {s.fill&&<polygon points={fillPts} fill={s.color} opacity="0.08"/>}
            <path d={smooth(pts)} fill="none" stroke={s.color}
              strokeWidth={s.bold?2.5:1.8} strokeLinejoin="round" strokeLinecap="round"
              strokeDasharray={s.dash?"5,3":undefined} opacity={s.opacity||1}/>
            {showDots&&pts.map((p,i)=>gNum(s.data[i])>0&&(
              <circle key={i} cx={p.x} cy={p.y} r={3} fill={s.color}/>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ─── 미니 프로그레스 바 ───────────────────────────
function ProgressBar({pct:p,color,h=4}){
  const n=Math.min(Math.max(gNum(p),0),150);
  return (
    <div style={{height:h,background:C.b1,borderRadius:h,overflow:"hidden",position:"relative"}}>
      <div style={{height:"100%",width:`${Math.min(n,100)}%`,background:color,borderRadius:h,
        transition:"width .4s",boxShadow:`0 0 6px ${color}60`}}/>
      {n>100&&<div style={{position:"absolute",right:0,top:0,height:"100%",
        width:`${n-100}%`,background:C.orange,opacity:.6,borderRadius:h}}/>}
    </div>
  );
}

// ═══════════════════════════════════════════════
//  대시보드
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  대시보드 v14 — Pinterest/Dribbble 스타일
// ═══════════════════════════════════════════════

/* ── SVG 도넛 차트 ── */
function DonutChart({pct:p, color, size=72, stroke=8, label, sub}){
  const n = Math.min(Math.max(gNum(p),0),150);
  const r = (size-stroke*2)/2;
  const circ = 2*Math.PI*r;
  const fill = Math.min(n,100)/100*circ;
  const cx = size/2, cy = size/2;
  const textColor = n>=100?C.green:n>=80?C.orange:C.red;
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
      {/* SVG + 중앙 텍스트 절대 위치 오버레이 */}
      <div style={{position:"relative",width:size,height:size}}>
        <svg width={size} height={size} style={{transform:"rotate(-90deg)",display:"block"}}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.b1} strokeWidth={stroke}/>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={n===0?C.b2:color}
            strokeWidth={stroke} strokeLinecap="round"
            strokeDasharray={`${fill} ${circ}`}
            style={{transition:"stroke-dasharray .6s ease",filter:`drop-shadow(0 0 4px ${color}80)`}}/>
          {n>100&&(
            <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.orange}
              strokeWidth={stroke} strokeLinecap="round" opacity={.5}
              strokeDasharray={`${(n-100)/100*circ} ${circ}`}
              strokeDashoffset={-(fill)}/>
          )}
        </svg>
        {/* 숫자 — 절대 중앙 */}
        <div style={{
          position:"absolute",inset:0,
          display:"flex",alignItems:"center",justifyContent:"center",
          pointerEvents:"none",
        }}>
          <span style={{
            color:n===0?C.muted:textColor,
            fontSize:size<56?10:size<72?12:14,
            fontWeight:900,letterSpacing:"-0.03em",
          }}>
            {n===0?"─":n.toFixed(0)+"%"}
          </span>
        </div>
      </div>
      {label&&<div style={{color:C.muted2,fontSize:10,fontWeight:700,textAlign:"center",lineHeight:1.2}}>{label}</div>}
      {sub&&<div style={{color:C.muted,fontSize:9,textAlign:"center"}}>{sub}</div>}
    </div>
  );
}

/* ── 부드러운 SVG 라인 차트 (그리드+라벨 포함) ── */
function RichLineChart({series, labels, h=160, showAvg=false, pctMode=false, grMode=false, zeroOffset=0}){
  const [tooltip, setTooltip] = useState(null);
  const W=600, H=h, PL=36, PR=10, PT=12, PB=20;
  const iW=W-PL-PR, iH=H-PT-PB;
  const allV = series.flatMap(s=>s.data.map(gNum)).filter(v=>v>0);
  if(allV.length===0) return (
    <div style={{height:h,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span style={{color:C.muted,fontSize:11}}>데이터 없음</span>
    </div>
  );
  const maxV = Math.max(...allV)*1.12;
  const cx = i => PL + (i/(labels.length-1||1))*iW;
  const cy = v => PT + (1-gNum(v)/maxV)*iH;
  const smooth = pts => pts.reduce((p,pt,i)=>{
    if(i===0) return `M${pt.x},${pt.y}`;
    const prev=pts[i-1];
    const cpx=(pt.x-prev.x)*0.4;
    return `${p} C${prev.x+cpx},${prev.y} ${pt.x-cpx},${pt.y} ${pt.x},${pt.y}`;
  },"");
  const ticks = 4;

  // 각 시리즈 렌더용
  const seriesData = series.map(s=>({
    ...s,
    pts:s.data.map((v,i)=>({x:cx(i),y:cy(v),v:gNum(v),hasData:v!==null})),
  }));

  // 마우스 위치로 가장 가까운 X 인덱스
  const svgRef = React.useRef(null);
  const handleMouseMove = e => {
    if(!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const svgX = (e.clientX - rect.left) / rect.width * W;
    // 가장 가까운 라벨 인덱스
    let best=0, bestD=Infinity;
    labels.forEach((_,i)=>{ const d=Math.abs(cx(i)-svgX); if(d<bestD){bestD=d;best=i;} });
    const items = series.map(s=>({
      label:s.tooltipLabel||s.label||"",
      v:gNum(s.data[best]),
      rawV: s.grOffset!==undefined ? gNum(s.data[best])-s.grOffset : gNum(s.data[best]),
      color:s.color,
      unit:s.tooltipUnit||"억",
    })).filter(it=>it.v>0);
    if(items.length===0){setTooltip(null);return;}
    // tooltip position in % of container
    const tx=(e.clientX-rect.left)/rect.width*100;
    const ty=(e.clientY-rect.top)/rect.height*100;
    setTooltip({mi:best,tx,ty,items});
  };

  return (
    <div style={{position:"relative"}} onMouseLeave={()=>setTooltip(null)}>
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:h,cursor:"crosshair"}}
        preserveAspectRatio="xMinYMid meet" onMouseMove={handleMouseMove}>
        {/* 그리드 */}
        {Array.from({length:ticks+1},(_,i)=>{
          const v=maxV*(ticks-i)/ticks;
          const y=cy(v);
          return (
            <g key={i}>
              <line x1={PL} y1={y} x2={W-PR} y2={y} stroke={C.b1} strokeWidth={.5}/>
              <text x={PL-3} y={y+3} fill={C.muted} fontSize={8} textAnchor="end">
                {Math.round(v)>0?Math.round(v):""}
              </text>
            </g>
          );
        })}
        {/* X 라벨 */}
        {labels.map((l,i)=>(
          <text key={i} x={cx(i)} y={H} fill={C.muted} fontSize={8} textAnchor="middle">
            {l.replace("월","")}
          </text>
        ))}
        {/* 세로 호버 가이드 */}
        {tooltip&&(
          <line x1={cx(tooltip.mi)} y1={PT} x2={cx(tooltip.mi)} y2={PT+iH}
            stroke="rgba(255,255,255,.15)" strokeWidth={1} strokeDasharray="3,2"/>
        )}
        {/* 시리즈 */}
        {seriesData.map((s,si)=>{
          const activePts=s.pts.filter(p=>p.hasData||p.v>0);
          if(activePts.length===0) return null;
          const d=smooth(activePts);
          const avg=activePts.reduce((a,p)=>a+p.v,0)/activePts.length;
          const avgY=cy(avg);
          const fillPath=`${d} L${activePts[activePts.length-1].x},${PT+iH} L${activePts[0].x},${PT+iH} Z`;
          return (
            <g key={si}>
              {s.fill&&<path d={fillPath} fill={s.color} opacity={.1}/>}
              <path d={d} fill="none" stroke={s.color}
                strokeWidth={s.bold?3:s.medium?2:1.5}
                strokeLinejoin="round" strokeLinecap="round"
                strokeDasharray={s.dash?"6,3":undefined}
                opacity={s.op||1}/>
              {/* 포인트 */}
              {activePts.map((p,i)=>(
                <circle key={i} cx={p.x} cy={p.y}
                  r={tooltip&&tooltip.mi===activePts.indexOf(p)?4.5:(s.bold?3.5:2.5)}
                  fill={s.color} stroke={C.bg} strokeWidth={1.5} opacity={s.op||1}/>
              ))}
              {/* 26년 실적 포인트 수치 라벨 */}
              {s.showLabels&&activePts.map((p,i)=>{
                const prevP  = activePts[i-1];
                const goUp   = !prevP || p.y < prevP.y;
                const labelY = p.y + (goUp ? -10 : 13);
                const anchor = p.x < PL+30 ? "start" : p.x > W-PR-30 ? "end" : "middle";
                const realV  = s.grOffset!==undefined ? p.v - s.grOffset : p.v;
                const dispV  = s.tooltipUnit==="%"
                  ? Math.round(realV) + "%"
                  : Math.round(realV).toLocaleString();
                return (
                  <text key={i} x={p.x} y={labelY}
                    fill={s.color} fontSize={9} fontWeight={700}
                    textAnchor={anchor}
                    style={{filter:"drop-shadow(0 1px 2px rgba(0,0,0,.8))"}}>
                    {dispV}
                  </text>
                );
              })}
              {/* 평균선 */}
              {showAvg&&s.bold&&(
                <>
                  <line x1={activePts[0].x} y1={avgY} x2={activePts[activePts.length-1].x} y2={avgY}
                    stroke={s.color} strokeWidth={1} strokeDasharray="3,3" opacity={.4}/>
                  <text x={activePts[activePts.length-1].x+4} y={avgY+3}
                    fill={s.color} fontSize={8} opacity={.6}>
                    avg {Math.round(avg)}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>
      {/* 툴팁 오버레이 */}
      {tooltip&&(
        <div style={{
          position:"absolute",
          left:`${Math.min(tooltip.tx+2,75)}%`,
          top:`${Math.max(tooltip.ty-10,0)}%`,
          background:"rgba(7,16,31,.95)",
          border:`1px solid rgba(255,255,255,.12)`,
          borderRadius:8,padding:"8px 12px",
          pointerEvents:"none",zIndex:10,
          boxShadow:"0 4px 16px rgba(0,0,0,.5)",
          minWidth:100,
        }}>
          <div style={{color:C.muted,fontSize:9,marginBottom:4,fontWeight:700}}>
            {labels[tooltip.mi]}
          </div>
          {tooltip.items.map((it,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",
              gap:12,alignItems:"center",marginBottom:2}}>
              <div style={{display:"flex",alignItems:"center",gap:4}}>
                <div style={{width:6,height:2,borderRadius:1,background:it.color}}/>
                <span style={{color:C.muted2,fontSize:10}}>{it.label}</span>
              </div>
              <span style={{color:it.color,fontSize:11,fontWeight:800}}>
                {it.unit==="%"
                  ? Math.round(it.rawV) + "%"
                  : Math.round(it.rawV).toLocaleString()+"억"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── CE 비중 가로 스택바 ── */
function CeShareBar({data, emi}){
  const pD = data;
  const PARTS = [
    {k:"혼수",  c:"#f5b942"},
    {k:"뉴홈",  c:"#2dd488"},
    {k:"SAC",   c:"#d97af5"},
    {k:"거주중",c:"#b87af5"},
    {k:"B2B",   c:"#f58f42"},
    {k:"휴대폰",c:"#90a8c0"},
  ];
  const getSum = k => Array.from({length:emi+1},(_,i)=>gNum(fullRow(pD[sk(i)])[k])).reduce((a,b)=>a+b,0);
  const ce = getSum("CE");
  if(!ce) return <div style={{color:C.muted,fontSize:11,padding:"20px 0",textAlign:"center"}}>CE 데이터 없음</div>;
  const vals = PARTS.map(p=>({...p,v:getSum(p.k),s:(getSum(p.k)/ce*100)}));
  const total = vals.reduce((a,p)=>a+p.s,0);
  return (
    <div>
      {/* 스택 바 */}
      <div style={{display:"flex",borderRadius:6,overflow:"hidden",height:20,marginBottom:10,gap:1}}>
        {vals.map(p=>p.v>0&&(
          <div key={p.k} title={`${p.k}: ${p.s.toFixed(1)}%`}
            style={{flex:p.s,background:p.c,display:"flex",alignItems:"center",justifyContent:"center",
              minWidth:p.s>6?undefined:0,transition:"flex .4s",
              boxShadow:`inset 0 1px 0 rgba(255,255,255,.1)`}}>
            {p.s>6&&<span style={{color:"rgba(0,0,0,.7)",fontSize:9,fontWeight:700}}>{p.s.toFixed(0)}%</span>}
          </div>
        ))}
      </div>
      {/* 범례 그리드 */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 12px"}}>
        {vals.map(p=>(
          <div key={p.k} style={{display:"flex",alignItems:"center",gap:7}}>
            <div style={{width:8,height:8,borderRadius:2,background:p.c,flexShrink:0}}/>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
                <span style={{color:C.muted2,fontSize:11}}>{p.k}</span>
                <span style={{color:p.c,fontWeight:700,fontSize:11}}>{p.s.toFixed(1)}%</span>
              </div>
              <div style={{color:C.muted,fontSize:10}}>{Math.round(p.v).toLocaleString()}억</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  ErrorBoundary — 렌더 에러 포착 + 자동 재시도
// ═══════════════════════════════════════════════
class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    // resetKey가 바뀌면 children을 완전히 unmount → remount (hook 상태 초기화)
    this.state={error:null, resetKey:0, autoRetried:false};
    this._timer=null;
  }
  static getDerivedStateFromError(e){ return {error:e}; }
  componentDidCatch(e, info){
    console.error("🔴 렌더에러:", e, info);
    // 초기 진입 에러(#310 등)는 1회 자동 재시도
    // resetKey 증가 → children 완전 새 인스턴스로 remount
    if(!this.state.autoRetried){
      this._timer = setTimeout(()=>{
        this.setState(s=>({error:null, resetKey:s.resetKey+1, autoRetried:true}));
      }, 300);
    }
  }
  componentWillUnmount(){ clearTimeout(this._timer); }
  render(){
    if(this.state.error){
      // 자동 재시도 1회 실패 시 → 수동 버튼 표시
      return (
        <div style={{padding:24,background:"#1a0a0a",border:"1px solid #f0707060",
          borderRadius:12,color:"#f07070",margin:16}}>
          <div style={{fontWeight:800,fontSize:14,marginBottom:8}}>⚠ 화면 렌더 오류</div>
          <div style={{fontSize:11,color:"#7a9ab8",marginBottom:12}}>
            화면을 불러오는 중 오류가 발생했습니다. 다시 시도해 주세요.
          </div>
          <div style={{fontSize:10,fontFamily:"monospace",color:"#f5b942",
            background:"rgba(0,0,0,.3)",padding:"8px 12px",borderRadius:6,wordBreak:"break-all"}}>
            {String(this.state.error)}
          </div>
          <button onClick={()=>this.setState(s=>({error:null,resetKey:s.resetKey+1,autoRetried:false}))} style={{
            marginTop:14,padding:"7px 18px",borderRadius:7,border:"none",
            background:"#f07070",color:"#fff",cursor:"pointer",fontWeight:700,fontSize:12,
            fontFamily:"inherit",
          }}>🔄 다시 시도</button>
        </div>
      );
    }
    // resetKey가 key로 전달 → 변경 시 children 완전 remount
    return (
      <React.Fragment key={this.state.resetKey}>
        {this.props.children}
      </React.Fragment>
    );
  }
}

function Dashboard({data,mode}){
  const [selKey,setSelKey] = useState("대외영업");
  const isMobile = useIsMobile();
  const mColor = C[mode] || C.accent;

  // 방어적 데이터 접근
  const p26 = useMemo(()=>{ try{ return data?.["26"]?.[mode]?.perf   ||emptyM(); }catch{ return emptyM(); } },[data,mode]);
  const t26 = useMemo(()=>{ try{ return data?.["26"]?.[mode]?.target ||emptyM(); }catch{ return emptyM(); } },[data,mode]);
  const p25 = useMemo(()=>{ try{ return data?.["25"]?.[mode]?.perf   ||emptyM(); }catch{ return emptyM(); } },[data,mode]);
  const p24 = useMemo(()=>{ try{ return data?.["24"]?.[mode]?.perf   ||emptyM(); }catch{ return emptyM(); } },[data,mode]);

  const lm26 = lastMiOf(p26);
  const emi  = lm26>=0 ? lm26 : new Date().getMonth();

  // 누계 합산 (emi 기준)
  const ytd = (d,k) => { try{ return sumR(d,k,0,emi); }catch{ return 0; } };

  // 월별 데이터 배열
  const mArr   = (d,k) => { try{ return MONTHS.map((_,i)=>gNum(fullRow(d?.[sk(i)])?.[k])); }catch{ return MONTHS.map(()=>0); } };
  // 누계 배열
  const cumArr = (d,k) => {
    try{
      let acc=0;
      return MONTHS.map((_,i)=>{
        const v = gNum(fullRow(d?.[sk(i)])?.[k]);
        if(v>0 || i<=emi){ acc+=v; return acc; }
        return null;
      });
    }catch{ return MONTHS.map(()=>null); }
  };

  // 주요 항목 달성률
  const DONUT_KEYS = ["대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];

  // 월별 + 월평균
  const sel_monthly = useMemo(()=>{try{return mArr(p26,selKey).map((v,i)=>i<=emi?v:null);}catch{return MONTHS.map(()=>null);}},[p26,selKey,emi]);
  const sel_cum26   = useMemo(()=>{try{return cumArr(p26,selKey);}catch{return MONTHS.map(()=>null);}},[p26,selKey,emi]);
  const sel_cum25   = useMemo(()=>{try{return cumArr(p25,selKey);}catch{return MONTHS.map(()=>null);}},[p25,selKey,emi]);
  const sel_cum24   = useMemo(()=>{try{return cumArr(p24,selKey);}catch{return MONTHS.map(()=>null);}},[p24,selKey,emi]);
  const validMonths = sel_monthly.filter(v=>v!==null&&v>0);
  const monthAvg    = validMonths.length>0 ? validMonths.reduce((a,b)=>a+b,0)/validMonths.length : 0;

  return (
    <div style={{display:"flex",flexDirection:"column",gap:16}}>

      {/* ── 상단 헤더 카드 ── */}
      <div style={{
        background:`linear-gradient(135deg, #0d1f38 0%, #0a1628 60%, #061018 100%)`,
        border:`1px solid ${mColor}33`,borderRadius:16,padding:"20px 24px",
        boxShadow:`0 8px 32px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.04)`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:16}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:mColor,
                boxShadow:`0 0 8px ${mColor}`}}/>
              <span style={{color:C.muted2,fontSize:11,fontWeight:600,letterSpacing:"0.08em",
                textTransform:"uppercase"}}>{mode} 실적 대시보드</span>
            </div>
            <div style={{color:C.text,fontSize:22,fontWeight:900,letterSpacing:"-0.04em"}}>
              26년 {MONTHS[emi]} 누계 현황
            </div>
            <div style={{color:C.muted,fontSize:12,marginTop:4}}>
              입력 기준월 : {MONTHS[emi]} · 판매/매출 전환 가능 · hover 시 소수점 표시
            </div>
          </div>
          {/* 핵심 지표 2개 — 상세 확장형 */}
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            {[
              {k:"CE",      label:"CE",      color:KC.CE,   showCeShare:false},
              {k:"대외영업", label:"대외영업", color:KC.대외영업, showCeShare:true},
            ].map(({k,label,color,showCeShare})=>{
              const v26=ytd(p26,k), v25=ytd(p25,k), vt=ytd(t26,k);
              const gr=grw(v26,v25), ar=pct(v26,vt);
              const ceV=ytd(p26,"CE");
              const ceShare = showCeShare&&ceV>0 ? (v26/ceV*100).toFixed(1) : null;
              // 월평균: 입력월 수 기준
              const mCount = emi+1;
              const avg = mCount>0&&v26>0 ? (v26/mCount).toFixed(1) : null;
              return (
                <div key={k} style={{
                  background:`linear-gradient(135deg, rgba(255,255,255,.05) 0%, rgba(0,0,0,.1) 100%)`,
                  border:`1px solid ${color}40`,
                  borderRadius:14,padding:"14px 18px",minWidth:220,flex:1,
                  borderTop:`3px solid ${color}`,
                  boxShadow:`0 4px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.04)`
                }}>
                  {/* 헤더 */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{width:8,height:8,borderRadius:2,background:color,
                        boxShadow:`0 0 6px ${color}`}}/>
                      <span style={{color:color,fontWeight:800,fontSize:12,letterSpacing:"0.04em"}}>
                        {label} 누계
                      </span>
                    </div>
                    {ceShare&&(
                      <span style={{color:color,fontSize:10,fontWeight:700,
                        background:color+"18",borderRadius:4,padding:"2px 6px"}}>
                        CE의 {ceShare}%
                      </span>
                    )}
                  </div>

                  {/* 실적 대형 */}
                  <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:8}}>
                    <span title={fmtD(v26)} style={{color:C.text,fontSize:26,fontWeight:900,
                      letterSpacing:"-0.04em",cursor:"default",lineHeight:1}}>
                      {v26>0?Math.round(v26).toLocaleString():<span style={{color:C.muted,fontSize:18}}>─</span>}
                    </span>
                    {v26>0&&<span style={{color:C.muted2,fontSize:12}}>억</span>}
                  </div>

                  {/* 프로그레스 바 */}
                  {vt>0&&(
                    <div style={{marginBottom:8}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                        <span style={{color:C.muted,fontSize:9}}>목표 {Math.round(vt).toLocaleString()}억</span>
                        <span style={{color:ar?pctC(ar):C.muted,fontSize:10,fontWeight:800}}>
                          달성 {ar?Math.round(gNum(ar)):"─"}%
                        </span>
                      </div>
                      <div style={{height:5,background:"rgba(255,255,255,.08)",borderRadius:3,overflow:"hidden"}}>
                        <div style={{height:"100%",width:`${Math.min(gNum(ar),100)}%`,
                          background:`linear-gradient(90deg,${color},${color}aa)`,
                          borderRadius:3,boxShadow:`0 0 8px ${color}60`,transition:"width .6s"}}/>
                      </div>
                    </div>
                  )}

                  {/* 하단 3개 지표 */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
                    {[
                      {lbl:"전년실적", val:v25>0?Math.round(v25).toLocaleString()+"억":"─", c:C.muted2},
                      {lbl:"전년비",   val:gr?grwT(gr):"─", c:gr?grwC(gr):C.muted},
                      {lbl:"월평균",   val:avg?parseFloat(avg).toLocaleString()+"억":"─", c:C.orange},
                    ].map(({lbl,val,c})=>(
                      <div key={lbl} style={{background:"rgba(0,0,0,.2)",borderRadius:6,padding:"5px 6px",
                        textAlign:"center"}}>
                        <div style={{color:C.muted,fontSize:8,marginBottom:2}}>{lbl}</div>
                        <div style={{color:c,fontSize:11,fontWeight:700,lineHeight:1}}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 파트 선택 + 도넛 달성률 ── */}
      <div style={{display:"grid",
        gridTemplateColumns:isMobile?"1fr":`320px 1fr`,gap:14}}>

        {/* 도넛 달성률 패널 */}
        <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:14,padding:18,
          boxShadow:"0 4px 20px rgba(0,0,0,.2)"}}>
          <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:2}}>목표 달성률</div>
          <div style={{color:C.muted,fontSize:10,marginBottom:12}}>
            {MONTHS[emi]} 누계 기준 · 항목 클릭 시 차트 전환
          </div>
          {/* 11개 항목: 4-4-3 그리드 */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
            {DONUT_KEYS.map(k=>{
              const pv=ytd(p26,k), tv=ytd(t26,k), ar=pct(pv,tv);
              const color=KC[k]||C.accent;
              return (
                <div key={k} onClick={()=>setSelKey(k)}
                  style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,
                    cursor:"pointer",padding:"8px 4px",borderRadius:8,
                    background:selKey===k?color+"18":"rgba(255,255,255,.02)",
                    border:`1px solid ${selKey===k?color+"70":C.b1}`,
                    transition:"all .18s",
                    boxShadow:selKey===k?`0 0 10px ${color}25`:"none"}}>
                  <DonutChart pct={ar} color={color} size={56} stroke={6}/>
                  <div style={{color:selKey===k?color:C.muted2,fontSize:10,fontWeight:700,
                    textAlign:"center",marginTop:1}}>{k}</div>
                  <div style={{color:C.muted2,fontSize:9,textAlign:"center",lineHeight:1.3,marginTop:1}}>
                    <span style={{color:selKey===k?color:C.text,fontWeight:600}}>
                      {pv>0?Math.round(pv).toLocaleString():"─"}
                    </span>
                    {tv>0&&<span style={{color:C.muted}}>/{Math.round(tv).toLocaleString()}억</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── 전체 파트 연간 목표 진척 현황 (CE 제외) ── */}
          {(()=>{
            try {
            // 파트 목록 (대외영업·뉴홈·B2B 포함, CE 제외)
            const BAR_KEYS = ["대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];
            const remainMonths = 11 - emi;

            // 각 파트 데이터 계산
            const parts = BAR_KEYS.map(k => {
              const perf  = ytd(p26, k);                         // 누계 실적
              const annualTgt = (() => {
                let s=0;
                for(let i=0;i<12;i++) s+=gNum(fullRow(t26?.[sk(i)])?.[k]);
                return s;
              })();
              const rem   = Math.max(annualTgt - perf, 0);
              const arPct = annualTgt>0 ? perf/annualTgt*100 : 0;
              const needPM= remainMonths>0&&rem>0 ? Math.ceil(rem/remainMonths) : 0;
              return {k, perf, annualTgt, rem, arPct, needPM};
            }).filter(d => d.annualTgt > 0);

            if(parts.length === 0) return null;

            return (
              <div style={{marginTop:14,padding:"12px 10px",
                background:"rgba(0,0,0,.18)",borderRadius:10,
                border:"1px solid rgba(255,255,255,.06)"}}>
                {/* 헤더 */}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                  marginBottom:10}}>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <div style={{width:6,height:6,borderRadius:2,
                      background:"linear-gradient(135deg,#818cf8,#38bdf8)"}}/>
                    <span style={{color:C.muted2,fontSize:10,fontWeight:700}}>
                      파트별 연간 목표 진척 현황
                    </span>
                    <span style={{color:C.muted,fontSize:9,background:"rgba(255,255,255,.06)",
                      padding:"1px 5px",borderRadius:3}}>
                      {MONTHS[emi]} 마감기준
                    </span>
                  </div>
                  <span style={{color:C.muted,fontSize:9}}>
                    잔여 {remainMonths}개월
                  </span>
                </div>

                {/* 파트별 가로 바 */}
                <div style={{display:"flex",flexDirection:"column",gap:7}}>
                  {parts.map(({k, perf, annualTgt, rem, arPct, needPM})=>{
                    const color = KC[k]||C.accent;
                    const fillW = Math.min(arPct, 100);
                    const isAchieved = arPct >= 100;
                    return (
                      <div key={k}>
                        {/* 파트명 + 금액 + 달성률 */}
                        <div style={{display:"flex",justifyContent:"space-between",
                          alignItems:"center",marginBottom:3}}>
                          <div style={{display:"flex",alignItems:"center",gap:5,minWidth:44}}>
                            <div style={{width:5,height:5,borderRadius:1,background:color,flexShrink:0}}/>
                            <span style={{color:color,fontSize:10,fontWeight:800}}>{k}</span>
                          </div>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            {/* 누계실적 / 연간목표 */}
                            <span style={{color:C.text,fontSize:10,fontWeight:700}}>
                              {Math.round(perf).toLocaleString()}
                              <span style={{color:C.muted,fontSize:9,fontWeight:400}}>
                                /{Math.round(annualTgt).toLocaleString()}억
                              </span>
                            </span>
                            {/* 달성률 */}
                            <span style={{
                              color:isAchieved?C.green:arPct>=80?C.orange:C.red,
                              fontSize:10,fontWeight:900,minWidth:38,textAlign:"right"
                            }}>
                              {arPct.toFixed(1)}%
                            </span>
                          </div>
                        </div>

                        {/* 가로 바 */}
                        <div style={{height:8,background:"rgba(255,255,255,.06)",
                          borderRadius:4,overflow:"visible",position:"relative"}}>
                          {/* 실적 채움 */}
                          <div style={{
                            height:"100%",
                            width:`${fillW}%`,
                            background:`linear-gradient(90deg,${color}cc,${color})`,
                            borderRadius:4,
                            boxShadow:`0 0 6px ${color}50`,
                            transition:"width .6s ease",
                            position:"relative",
                          }}>
                            {/* 초과달성 표시 */}
                            {arPct>100&&(
                              <div style={{
                                position:"absolute",right:-2,top:-1,
                                height:10,width:Math.min((arPct-100)/100*fillW,20),
                                background:C.green,borderRadius:2,opacity:.7
                              }}/>
                            )}
                          </div>
                        </div>

                        {/* 잔여 + 월평균 필요 */}
                        {!isAchieved && rem > 0 && (
                          <div style={{display:"flex",justifyContent:"flex-end",
                            alignItems:"center",gap:6,marginTop:2}}>
                            <span style={{color:C.muted,fontSize:8}}>
                              잔여 <span style={{color:C.orange,fontWeight:700}}>
                                {Math.round(rem).toLocaleString()}억
                              </span>
                            </span>
                            {needPM>0&&remainMonths>0&&(
                              <span style={{color:C.muted,fontSize:8}}>
                                월평균 <span style={{color:C.blue,fontWeight:700}}>
                                  {Math.round(needPM).toLocaleString()}억
                                </span> 필요
                              </span>
                            )}
                          </div>
                        )}
                        {isAchieved&&(
                          <div style={{textAlign:"right",marginTop:2}}>
                            <span style={{color:C.green,fontSize:8,fontWeight:700}}>🎯 달성</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
            } catch(e) { return null; }
          })()}
        </div>

        {/* 우측 — 월별 추이 + 누계 추이 */}
        <div style={{display:"flex",flexDirection:"column",gap:14}}>

          {/* 선택 파트 월별 추이 */}
          <div style={{background:C.card2,border:`1px solid ${KC[selKey]||C.accent}44`,
            borderRadius:14,padding:18,boxShadow:"0 4px 20px rgba(0,0,0,.2)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",
              marginBottom:12,flexWrap:"wrap",gap:8}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{width:10,height:10,borderRadius:3,
                  background:KC[selKey]||C.accent,boxShadow:`0 0 8px ${KC[selKey]||C.accent}`}}/>
                <span style={{color:KC[selKey]||C.accent,fontWeight:900,fontSize:16}}>{selKey}</span>
                <span style={{color:C.muted2,fontSize:11}}>월별 실적 추이</span>
              </div>
              {/* 개선된 범례 — 라인 + 누계/월평균 표시 */}
              {(()=>{
                const ytd26 = ytd(p26,selKey);
                const ytd25 = ytd(p25,selKey);
                const avg26 = validMonths.length>0 ? Math.round(monthAvg) : null;
                const p25Arr = mArr(p25,selKey).filter((v,i)=>i<=emi&&v>0);
                const avg25 = p25Arr.length>0 ? Math.round(p25Arr.reduce((a,b)=>a+b,0)/p25Arr.length) : null;
                // 26년 연간 목표 합계
                const annTgt26 = (() => {let s=0; for(let i=0;i<12;i++) s+=gNum(fullRow(t26?.[sk(i)])?.[selKey]); return s;})();
                const cumTgt26 = ytd(t26,selKey);
                const tgtArr = mArr(t26,selKey).filter((v,i)=>i<=emi&&v>0);
                const avgTgt = tgtArr.length>0 ? Math.round(tgtArr.reduce((a,b)=>a+b,0)/tgtArr.length) : null;
                return (
                  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    {[
                      {l:"26년 실적", c:mColor, bold:true, dash:false,
                        ytdVal:ytd26, avgVal:avg26},
                      {l:"26년 목표", c:C.orange, bold:false, dash:true,
                        ytdVal:cumTgt26>0?cumTgt26:null, avgVal:avgTgt,
                        ytdLabel:"누계목표"},
                      {l:"25년 실적", c:"#a78bfa", bold:false, dash:false,
                        ytdVal:ytd25, avgVal:avg25},
                    ].map(({l,c,bold,dash,ytdVal,avgVal,ytdLabel})=>(
                      <div key={l} style={{display:"flex",flexDirection:"column",gap:2,
                        padding:"5px 8px",borderRadius:7,background:"rgba(255,255,255,.04)",
                        border:`1px solid ${c}22`}}>
                        <span style={{display:"flex",alignItems:"center",gap:4}}>
                          <svg width={16} height={3}>
                            <line x1={0} y1={1.5} x2={16} y2={1.5} stroke={c}
                              strokeWidth={bold?2.5:1.5} strokeDasharray={dash?"5,3":undefined}/>
                          </svg>
                          <span style={{color:c,fontSize:10,fontWeight:bold?800:600}}>{l}</span>
                        </span>
                        <span style={{color:C.muted2,fontSize:9}}>
                          {ytdLabel||"누계"}: <span style={{color:c,fontWeight:700}}>
                            {ytdVal>0?Math.round(ytdVal).toLocaleString()+"억":"─"}
                          </span>
                        </span>
                        <span style={{color:C.muted,fontSize:9}}>
                          월평균: <span style={{color:c,fontWeight:600}}>
                            {avgVal?avgVal+"억":"─"}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
            <RichLineChart h={140} series={[
              {data:mArr(p25,selKey).map((v,i)=>i<=emi?v:null),color:"#a78bfa",op:.7,tooltipLabel:"25년"},
              {data:mArr(p26,selKey).map((v,i)=>i<=emi?v:null),color:mColor,bold:true,fill:true,showLabels:true,tooltipLabel:"26년"},
              {data:mArr(t26,selKey).map((v,i)=>i<=emi?v:null),color:C.orange,dash:true,op:.7,tooltipLabel:"목표"},
            ]} labels={MONTHS}/>
          </div>

          {/* 누계 추이 */}
          <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:14,padding:18}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",
              marginBottom:12,flexWrap:"wrap",gap:8}}>
              <div>
                <div style={{color:C.text,fontWeight:800,fontSize:13}}>{selKey} 누계 추이</div>
                <div style={{color:C.muted,fontSize:10,marginTop:2}}>3개년 누적 비교</div>
              </div>
              {/* 범례 + 금액 */}
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                {[
                  {l:`26년 누계`,v:ytd(p26,selKey),c:mColor,b:true},
                  {l:`25년 누계`,v:ytd(p25,selKey),c:"#a78bfa",b:false},
                  {l:`24년 누계`,v:ytd(p24,selKey),c:"#fbbf24",b:false},
                ].map(({l,v,c,b})=>(
                  <div key={l} style={{display:"flex",alignItems:"center",gap:5}}>
                    <div style={{width:10,height:3,borderRadius:2,background:c}}/>
                    <div>
                      <div style={{color:C.muted,fontSize:9}}>{l}</div>
                      <div style={{color:c,fontWeight:b?800:600,fontSize:12}}>
                        {v>0?Math.round(v).toLocaleString()+"억":"─"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <RichLineChart h={130} series={[
              {data:sel_cum24.map((v,i)=>i<=emi?(v||0):null),color:"#fbbf24",op:.85,medium:true,tooltipLabel:"24년"},
              {data:sel_cum25.map((v,i)=>i<=emi?(v||0):null),color:"#a78bfa",op:.9,medium:true,tooltipLabel:"25년"},
              {data:sel_cum26.map((v,i)=>i<=emi?(v||0):null),color:mColor,bold:true,fill:true,showLabels:true,tooltipLabel:"26년"},
            ]} labels={MONTHS}/>
          </div>

          {/* 월별 달성률 추이 — 당월달성률 + 누계달성률 2선 */}
          {(()=>{
            // 당월 달성률
            const monthlyAr = MONTHS.map((_,i)=>{
              if(i>emi) return null;
              const pv=gNum(fullRow(p26?.[sk(i)])?.[selKey]);
              const tv=gNum(fullRow(t26?.[sk(i)])?.[selKey]);
              return tv>0 ? parseFloat((pv/tv*100).toFixed(1)) : null;
            });
            // 누계 달성률 (1월~i월 누적 실적 / 1월~i월 누적 목표)
            const cumAr = MONTHS.map((_,i)=>{
              if(i>emi) return null;
              let sp=0, st=0;
              for(let j=0;j<=i;j++){
                sp+=gNum(fullRow(p26?.[sk(j)])?.[selKey]);
                st+=gNum(fullRow(t26?.[sk(j)])?.[selKey]);
              }
              return st>0 ? parseFloat((sp/st*100).toFixed(1)) : null;
            });
            const ytdAr = pct(ytd(p26,selKey), ytd(t26,selKey));
            const avgMonthlyAr = monthlyAr.filter(v=>v!==null);
            const avgV = avgMonthlyAr.length>0 ? (avgMonthlyAr.reduce((a,b)=>a+b,0)/avgMonthlyAr.length).toFixed(1) : null;
            return (
              <div style={{background:C.card2,border:`1px solid ${C.teal}33`,borderRadius:14,padding:18}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",
                  marginBottom:10,flexWrap:"wrap",gap:8}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:7}}>
                      <div style={{width:8,height:8,borderRadius:2,background:C.teal}}/>
                      <span style={{color:C.teal,fontWeight:800,fontSize:13}}>{selKey}</span>
                      <span style={{color:C.muted2,fontSize:11}}>월별 달성률</span>
                    </div>
                    <div style={{color:C.muted,fontSize:10,marginTop:2}}>
                      {MONTHS[emi]} 누계달성:&nbsp;
                      <span style={{color:ytdAr?pctC(ytdAr):C.muted,fontWeight:700}}>{ytdAr?Math.round(gNum(ytdAr))+"%":"─"}</span>
                      {avgV&&<>&nbsp;·&nbsp;당월평균: <span style={{color:C.orange,fontWeight:700}}>{Math.round(gNum(avgV))}%</span></>}
                    </div>
                  </div>
                  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    {[["당월달성률",C.teal,true],["누계달성률",C.orange,false],["100% 기준",C.green,false,true]].map(([l,c,b,d])=>(
                      <span key={l} style={{display:"flex",alignItems:"center",gap:4}}>
                        <svg width={14} height={3}><line x1={0} y1={1.5} x2={14} y2={1.5}
                          stroke={c} strokeWidth={b?2:1.5} strokeDasharray={d?"4,2":undefined}/></svg>
                        <span style={{color:C.muted,fontSize:10}}>{l}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <RichLineChart h={110} series={[
                  {data:MONTHS.map((_,i)=>i<=emi?100:null), color:C.green, dash:true, op:.4, tooltipLabel:"100% 기준", tooltipUnit:"%"},
                  {data:cumAr,     color:C.orange, medium:true, op:.85, showLabels:true, tooltipLabel:"누계달성률", tooltipUnit:"%"},
                  {data:monthlyAr, color:C.teal,   bold:true,   fill:true, showLabels:false, tooltipLabel:"당월달성률", tooltipUnit:"%"},
                ]} labels={MONTHS} pctMode={true}/>
              </div>
            );
          })()}

          {/* 월별 전년비 성장률 — 당월성장률 + 누계성장률 2선 */}
          {(()=>{
            // 당월 성장률
            const monthlyGr = MONTHS.map((_,i)=>{
              if(i>emi) return null;
              const v26m=gNum(fullRow(p26?.[sk(i)])?.[selKey]);
              const v25m=gNum(fullRow(p25?.[sk(i)])?.[selKey]);
              return v25m>0 ? parseFloat(((v26m-v25m)/v25m*100).toFixed(1)) : null;
            });
            // 누계 성장률 (1~i월 누적)
            const cumGr = MONTHS.map((_,i)=>{
              if(i>emi) return null;
              let s26=0, s25=0;
              for(let j=0;j<=i;j++){
                s26+=gNum(fullRow(p26?.[sk(j)])?.[selKey]);
                s25+=gNum(fullRow(p25?.[sk(j)])?.[selKey]);
              }
              return s25>0 ? parseFloat(((s26-s25)/s25*100).toFixed(1)) : null;
            });
            const ytdGr = grw(ytd(p26,selKey), ytd(p25,selKey));
            const allVals = [...monthlyGr, ...cumGr].filter(v=>v!==null);
            const hasData = allVals.length>0;
            // 0 기준선 위치: 음수 범위/(음수+양수)
            const posMax = Math.max(...allVals.filter(v=>v>0), 0.1);
            const negMax = Math.max(...allVals.filter(v=>v<0).map(v=>Math.abs(v)), 0);
            const totalRange = posMax + negMax;
            // 0% 위치 (아래부터 %) = negMax/total
            const zeroPctFromBottom = totalRange>0 ? (negMax/totalRange*100) : 0;
            // 차트용: 음수 값을 offset 처리해서 RichLineChart에 넣기 위해
            // 모든 값을 +negMax 해서 0 기준 offset
            const offsetVal = v => v!==null ? parseFloat((v+negMax).toFixed(1)) : null;
            const zeroLine = totalRange>0 ? negMax : 0;
            return (
              <div style={{background:C.card2,border:`1px solid ${C.orange}33`,borderRadius:14,padding:18}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",
                  marginBottom:10,flexWrap:"wrap",gap:8}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:7}}>
                      <div style={{width:8,height:8,borderRadius:2,background:C.orange}}/>
                      <span style={{color:C.orange,fontWeight:800,fontSize:13}}>{selKey}</span>
                      <span style={{color:C.muted2,fontSize:11}}>월별 전년비 성장률</span>
                    </div>
                    <div style={{color:C.muted,fontSize:10,marginTop:2}}>
                      {MONTHS[emi]} 누계 전년비:&nbsp;
                      <span style={{color:ytdGr?grwC(ytdGr):C.muted,fontWeight:700}}>
                        {ytdGr?grwT(ytdGr):"─"}
                      </span>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    {[["당월성장률",C.orange,true],["누계성장률","#a78bfa",false],["0%","rgba(255,255,255,.3)",false,true]].map(([l,c,b,d])=>(
                      <span key={l} style={{display:"flex",alignItems:"center",gap:4}}>
                        <svg width={14} height={3}><line x1={0} y1={1.5} x2={14} y2={1.5}
                          stroke={c} strokeWidth={b?2:1.5} strokeDasharray={d?"4,2":undefined}/></svg>
                        <span style={{color:C.muted,fontSize:10}}>{l}</span>
                      </span>
                    ))}
                  </div>
                </div>
                {hasData ? (
                  <RichLineChart h={110} series={[
                    {data:MONTHS.map((_,i)=>i<=emi?offsetVal(0):null), color:"rgba(255,255,255,.25)", dash:true, op:.5, tooltipLabel:"0%", tooltipUnit:"%"},
                    {data:cumGr.map(offsetVal),    color:"#a78bfa", medium:true, op:.85, tooltipLabel:"누계성장률", tooltipUnit:"%", grOffset:negMax},
                    {data:monthlyGr.map(offsetVal),color:C.orange,  bold:true,   fill:true, tooltipLabel:"당월성장률", tooltipUnit:"%", grOffset:negMax, showLabels:true},
                  ]} labels={MONTHS} grMode={true} zeroOffset={negMax}/>
                ) : (
                  <div style={{height:110,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <span style={{color:C.muted,fontSize:11}}>25년 데이터 필요</span>
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      </div>

      {/* ── 하단 2열: 전년비 성장 카드 + CE 비중 ── */}
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:14}}>

          {/* 전년비 성장률 — 수평 발산형 바 (성장=오른쪽, 역성장=왼쪽) */}
        <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:14,padding:18}}>
          <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:2}}>전년비 성장률</div>
          <div style={{color:C.muted,fontSize:10,marginBottom:16}}>26년 vs 25년 · {MONTHS[emi]} 누계</div>
          {(()=>{
            const PARTS = ["대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];
            const rows = PARTS.map(k=>{
              const v26=ytd(p26,k), v25=ytd(p25,k), gr=grw(v26,v25);
              return {k, v26, v25, gr:gr!==null?parseFloat(gr):null, color:KC[k]||C.muted2};
            });
            const validGr = rows.map(r=>r.gr).filter(v=>v!==null);
            const posMax = Math.max(...validGr.filter(v=>v>0), 0.1);
            const negMax = Math.max(...validGr.filter(v=>v<0).map(v=>Math.abs(v)), 0);
            const totalRange = posMax + negMax;
            // 0 기준 위치 (왼쪽부터 %)
            const zeroLeft = totalRange>0 ? (negMax/totalRange*100) : 10;
            return (
              <div>
                {/* 0% 헤더 라인 */}
                <div style={{position:"relative",marginBottom:6,height:12}}>
                  <div style={{position:"absolute",left:`${zeroLeft}%`,top:0,bottom:0,
                    width:1,background:"rgba(255,255,255,.15)"}}/>
                  <span style={{position:"absolute",left:`${zeroLeft}%`,
                    transform:"translateX(-50%)",bottom:0,
                    color:C.muted,fontSize:9}}>0%</span>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:5}}>
                  {rows.map(({k,v26,v25,gr,color})=>{
                    const isUp = gr!==null&&gr>0;
                    const isDown = gr!==null&&gr<0;
                    const isFlat = gr===0&&v26>0;
                    // 바 너비: 절댓값/해당방향최대 × 해당방향영역%
                    const posArea = 100 - zeroLeft; // 오른쪽 영역
                    const negArea = zeroLeft;        // 왼쪽 영역
                    const barW = gr!==null
                      ? isUp   ? Math.min(Math.abs(gr)/posMax*posArea, posArea)
                      : isDown ? Math.min(Math.abs(gr)/negMax*negArea, negArea)
                      : isFlat ? 1 : 0
                      : 0;
                    return (
                      <div key={k} style={{display:"flex",alignItems:"center",gap:8}}>
                        {/* 항목명 */}
                        <div style={{display:"flex",alignItems:"center",gap:5,width:62,flexShrink:0}}>
                          <div style={{width:7,height:7,borderRadius:2,background:color,flexShrink:0}}/>
                          <span style={{color:C.muted2,fontSize:11,fontWeight:600,
                            whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{k}</span>
                        </div>
                        {/* 수치 */}
                        <div style={{display:"flex",alignItems:"center",gap:3,width:130,flexShrink:0}}>
                          <span style={{color:C.muted,fontSize:9,whiteSpace:"nowrap"}}>
                            {v25>0?Math.round(v25)+"억":"─"}
                          </span>
                          <span style={{color:C.b2,fontSize:8}}>→</span>
                          <span style={{color:C.text,fontSize:11,fontWeight:700,whiteSpace:"nowrap"}}>
                            {v26>0?Math.round(v26)+"억":"─"}
                          </span>
                          {v26>0&&v25>0&&(()=>{
                            const delta=Math.round(v26-v25);
                            const isP=delta>0, isN=delta<0;
                            if(delta===0) return null;
                            return (
                              <span style={{color:isP?C.green:C.red,fontSize:9,fontWeight:700,
                                whiteSpace:"nowrap",opacity:.9}}>
                                ({isP?"+":""}{delta}억)
                              </span>
                            );
                          })()}
                        </div>
                        {/* 발산형 바 영역 */}
                        <div style={{flex:1,position:"relative",height:22}}>
                          {/* 배경 + 0% 기준선 */}
                          <div style={{position:"absolute",inset:0,
                            background:"rgba(255,255,255,.025)",borderRadius:3}}/>
                          <div style={{position:"absolute",top:0,bottom:0,
                            left:`${zeroLeft}%`,width:1,
                            background:"rgba(255,255,255,.18)",zIndex:1}}/>
                          {/* 바 */}
                          {gr!==null&&(isUp||isDown||isFlat)&&(
                            <div style={{
                              position:"absolute",top:2,bottom:2,
                              ...(isUp||isFlat
                                ? {left:`${zeroLeft}%`, width:`${barW}%`}
                                : {right:`${100-zeroLeft}%`, width:`${barW}%`}),
                              background:isUp
                                ? `linear-gradient(90deg,${C.green}60,${C.green}dd)`
                                : isDown
                                  ? `linear-gradient(-90deg,${C.red}60,${C.red}dd)`
                                  : `rgba(255,255,255,.15)`,
                              borderRadius:isUp?"0 3px 3px 0":"3px 0 0 3px",
                              boxShadow:isUp?`0 0 8px ${C.green}40`:isDown?`0 0 8px ${C.red}40`:"none",
                              transition:"width .5s ease",zIndex:2,
                            }}/>
                          )}
                          {/* 수치 텍스트: 바가 클 때 안쪽, 작을 때 바깥쪽 */}
                          {gr!==null&&(()=>{
                            const THRESHOLD = 18; // 이 % 이상이면 안쪽에 표시
                            const insideBar = barW >= THRESHOLD;
                            const label = grwT(String(gr));
                            if(insideBar){
                              // 안쪽 끝 — 흰색 텍스트로 배색
                              return (
                                <div style={{
                                  position:"absolute",top:0,bottom:0,zIndex:4,
                                  ...(isUp
                                    ? {left:`calc(${zeroLeft}% + ${barW}% - 2px)`,transform:"translateX(-100%)"}
                                    : {right:`calc(${100-zeroLeft}% + ${barW}% - 2px)`,transform:"translateX(100%)"}),
                                  display:"flex",alignItems:"center",paddingRight:isUp?4:0,paddingLeft:isDown?4:0,
                                }}>
                                  <span style={{
                                    color:"rgba(255,255,255,.95)",
                                    fontSize:10,fontWeight:900,whiteSpace:"nowrap",
                                    textShadow:isUp?"1px 0 3px rgba(0,100,60,.9)":"1px 0 3px rgba(150,0,0,.9)",
                                  }}>{label}</span>
                                </div>
                              );
                            } else {
                              // 바깥쪽 — 원래 색상
                              return (
                                <div style={{
                                  position:"absolute",top:0,bottom:0,zIndex:4,
                                  ...(isUp
                                    ? {left:`calc(${zeroLeft}% + ${barW}% + 4px)`}
                                    : {right:`calc(${100-zeroLeft}% + ${barW}% + 4px)`,textAlign:"right"}),
                                  display:"flex",alignItems:"center",
                                }}>
                                  <span style={{
                                    color:isUp?C.green:isDown?C.red:C.muted2,
                                    fontSize:10,fontWeight:900,whiteSpace:"nowrap",
                                    textShadow:"0 1px 4px rgba(0,0,0,.9)",
                                  }}>{label}</span>
                                </div>
                              );
                            }
                          })()}
                          {/* 데이터 없음 */}
                          {gr===null&&v26===0&&(
                            <div style={{position:"absolute",top:0,bottom:0,left:`calc(${zeroLeft}% + 4px)`,
                              display:"flex",alignItems:"center",zIndex:3}}>
                              <span style={{color:C.muted,fontSize:9}}>─</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        {/* CE 비중 — 파트순서 기준 높은 비중 → 낮은 비중 가로 막대 */}
        {/* ※ 휴대폰은 대외영업/B2B 실적에는 포함되나 CE 비중 분석에서는 제외 */}
        {(()=>{
          const ce=ytd(p26,"CE");
          const PARTS=[
            {k:"대외영업", c:KC.대외영업},
            {k:"혼수",    c:KC.혼수},
            {k:"뉴홈",    c:KC.뉴홈},
            {k:"입주",    c:KC.입주},
            {k:"이사",    c:KC.이사},
            {k:"SAC",     c:KC.SAC},
            {k:"거주중",  c:KC.거주중},
            {k:"B2B",     c:KC.B2B},
            {k:"SMB",     c:KC.SMB},
            {k:"농협",    c:KC.농협},
            // 휴대폰 제외 — CE 비중 계산에서 제외 (실적 계산에는 포함됨)
          ];
          const rows = PARTS
            .map(p=>({...p, v:ytd(p26,p.k)}))
            .sort((a,b)=>b.v-a.v); // 높은 비중순 정렬
          // CE가 기준 — 모든 바는 CE 대비 비율
          const ceBarRef = ce>0 ? ce : 1;
          return (
            <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:14,padding:18}}>
              <div style={{color:C.text,fontWeight:800,fontSize:13,marginBottom:2}}>CE 비중 분석</div>
              <div style={{color:C.muted,fontSize:10,marginBottom:14}}>
                {MONTHS[emi]} 누계 · CE = {ce>0?Math.round(ce).toLocaleString()+"억":"─"}
                <span style={{marginLeft:8,color:C.muted}}>│ 비중 높은 순</span>
              </div>
              {ce>0 ? (
                <div style={{display:"flex",flexDirection:"column",gap:7}}>
                  {/* CE 행 — 항상 100% (기준선) */}
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:58,flexShrink:0,display:"flex",alignItems:"center",gap:5}}>
                      <div style={{width:7,height:7,borderRadius:2,background:KC.CE,flexShrink:0}}/>
                      <span style={{color:C.text,fontSize:11,fontWeight:700}}>CE</span>
                    </div>
                    <div style={{flex:1,height:20,background:"rgba(255,255,255,.03)",
                      borderRadius:5,overflow:"hidden",position:"relative"}}>
                      <div style={{
                        position:"absolute",left:0,top:0,bottom:0,width:"100%",
                        background:`linear-gradient(90deg,${KC.CE}cc,${KC.CE})`,
                        borderRadius:5,boxShadow:`0 0 12px ${KC.CE}50`,
                      }}/>
                      <div style={{position:"absolute",inset:0,display:"flex",
                        alignItems:"center",paddingLeft:8}}>
                        <span style={{color:"rgba(255,255,255,.95)",fontSize:10,fontWeight:700,
                          textShadow:"0 1px 4px rgba(0,0,0,.8)"}}>
                          {Math.round(ce).toLocaleString()}억
                        </span>
                      </div>
                    </div>
                    {/* CE는 비중 표시 없음 — 기준이므로 */}
                    <div style={{width:44,flexShrink:0}}/>
                  </div>
                  {/* 구분선 */}
                  <div style={{height:1,background:C.b1,margin:"2px 0"}}/>
                  {rows.map(({k,c,v})=>{
                    const hp = ytd(p26,"휴대폰");
                    // 대외영업·B2B: 실적(v)에는 휴대폰 포함, 비중 계산 시에는 제외
                    const shareV = (k==="대외영업"||k==="B2B") ? v - hp : v;
                    const share = ce>0 ? (shareV/ce*100) : 0;
                    const barW = ce>0 ? Math.min(shareV/ceBarRef*100, 100) : 0;
                    return (
                      <div key={k} style={{display:"flex",alignItems:"center",gap:8}}>
                        {/* 항목명 */}
                        <div style={{width:58,flexShrink:0,display:"flex",alignItems:"center",gap:5}}>
                          <div style={{width:7,height:7,borderRadius:2,background:c,flexShrink:0}}/>
                          <span style={{color:C.muted2,fontSize:11,fontWeight:600,
                            whiteSpace:"nowrap"}}>{k}</span>
                        </div>
                        {/* 막대 */}
                        <div style={{flex:1,height:20,background:"rgba(255,255,255,.03)",
                          borderRadius:5,overflow:"hidden",position:"relative"}}>
                          <div style={{
                            position:"absolute",left:0,top:0,bottom:0,
                            width:`${barW}%`,
                            background:`linear-gradient(90deg,${c}cc,${c})`,
                            borderRadius:5,transition:"width .5s ease",
                            boxShadow:`0 0 10px ${c}40`,
                          }}/>
                          {/* 실적 수치 */}
                          <div style={{position:"absolute",inset:0,display:"flex",
                            alignItems:"center",paddingLeft:8,gap:6}}>
                            <span style={{color:"rgba(255,255,255,.9)",fontSize:10,fontWeight:700,
                              textShadow:"0 1px 4px rgba(0,0,0,.8)"}}>
                              {shareV>0?Math.round(shareV).toLocaleString()+"억":"─"}
                            </span>
                          </div>
                        </div>
                        {/* 비중 % */}
                        <div style={{width:44,flexShrink:0,textAlign:"right"}}>
                          <span style={{color:c,fontSize:12,fontWeight:800}}>
                            {share>0?share.toFixed(1)+"%":"─"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div style={{color:C.muted,fontSize:12,padding:"40px 0",textAlign:"center"}}>
                  CE 데이터를 입력해주세요
                </div>
              )}
            </div>
          );
        })()}
      </div>

    </div>
  );
}


// ═══════════════════════════════════════════════
//  실적 입력
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  실적 입력 v14
//  - 카테고리 계층 명확 구분
//  - 일괄: 실적 전체 블록 + 목표 전체 블록 분리
//  - 달성률·성장률 자동 표시
// ═══════════════════════════════════════════════

/* ── 입력 행 정의 (계층 구조) ── */
const INPUT_ROWS = [
  // key, level(0=top/1=mid/2=sub), isAuto, groupStart, groupColor
  {key:"CE",       lv:0, auto:false, gs:true,  gc:KC.CE},
  {key:"대외영업",  lv:0, auto:true,  gs:true,  gc:KC.대외영업},
  {key:"혼수",     lv:1, auto:false, gs:false, gc:KC.혼수},
  {key:"뉴홈",     lv:1, auto:true,  gs:true,  gc:KC.뉴홈},
  {key:"입주",     lv:2, auto:false, gs:false, gc:KC.입주},
  {key:"이사",     lv:2, auto:false, gs:false, gc:KC.이사},
  {key:"SAC",      lv:1, auto:false, gs:true,  gc:KC.SAC},
  {key:"거주중",   lv:2, auto:false, gs:false, gc:KC.거주중},
  {key:"B2B",      lv:1, auto:true,  gs:true,  gc:KC.B2B},
  {key:"SMB",      lv:2, auto:false, gs:false, gc:KC.SMB},
  {key:"농협",     lv:2, auto:false, gs:false, gc:KC.농협},
  {key:"휴대폰",   lv:1, auto:false, gs:false, gc:KC.휴대폰},
];

/* ── 카테고리 그룹 배경색 ── */
const GROUP_BG = {
  CE:    "rgba(124,131,245,.06)",
  대외영업:"rgba(56,182,245,.05)",
  뉴홈:  "rgba(45,212,136,.05)",
  SAC:   "rgba(217,122,245,.05)",
  B2B:   "rgba(245,143,66,.05)",
};

/* ── 단일 입력 셀 ── */
function NumInput({value, onChange, color, readOnly=false, placeholder="0"}){
  const [focused,setFocused]=useState(false);
  if(readOnly) return (
    <div style={{
      padding:"5px 8px",textAlign:"right",fontSize:12,fontWeight:700,
      color:color||C.muted2,background:C.bg+"88",borderRadius:5,
      border:`1px solid ${color||C.b1}33`,minWidth:60,
    }}>
      {gNum(value)>0?Math.round(gNum(value)).toLocaleString():
        <span style={{color:C.b2,fontWeight:400}}>AUTO</span>}
    </div>
  );
  return (
    <input type="number" step="any" min="0" placeholder={placeholder}
      value={value??""} onChange={e=>onChange(e.target.value)}
      onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
      style={{
        width:"100%",minWidth:56,background:focused?C.bg:C.bg+"cc",
        border:`1px solid ${focused?(color||C.accent):C.b1}`,
        boxShadow:focused?`0 0 0 2px ${(color||C.accent)}22`:"none",
        borderRadius:5,padding:"5px 8px",color:color||C.text,
        fontSize:12,outline:"none",textAlign:"right",fontFamily:"inherit",
        WebkitAppearance:"none",MozAppearance:"textfield",
        transition:"border-color .15s, box-shadow .15s",
      }}
    />
  );
}

/* ── 행 레이블 ── */
function RowLabel({row, indent=true}){
  const lpad = indent ? row.lv*14 : 0;
  return (
    <div style={{
      display:"flex",alignItems:"center",gap:5,
      paddingLeft:lpad+(row.lv>0&&indent?8:0),
      whiteSpace:"nowrap",
    }}>
      {row.lv>0&&indent&&(
        <span style={{color:C.b2,fontSize:10,flexShrink:0}}>└</span>
      )}
      <span style={{
        fontSize:11,fontWeight:row.lv===0?800:row.lv===1?600:400,
        color:row.auto?(row.gc||C.muted2):(row.lv===0?(row.gc||C.text):(row.gc||C.muted2)),
      }}>
        {row.key}
      </span>
      {row.auto&&(
        <span style={{
          fontSize:8,color:row.gc||C.accent,background:(row.gc||C.accent)+"18",
          borderRadius:3,padding:"1px 4px",fontWeight:700,letterSpacing:".04em",
        }}>자동</span>
      )}
    </div>
  );
}

/* ── 그룹 구분선 ── */
function GroupDivider({color}){
  return (
    <tr>
      <td colSpan={100} style={{padding:0,height:4,
        background:`linear-gradient(90deg, ${color||C.b1}40 0%, transparent 100%)`}}/>
    </tr>
  );
}

// ── 목표 잠금해제 모달
// ── 메인 백업/복원 모달
function BackupMainModal({onClose, data, mode}){
  const [tab,setTab]=useState("export");
  const [msg,setMsg]=useState("");
  const fileRef=useRef(null);

  const downloadJson=()=>{
    const blob=new Blob([JSON.stringify({perfData:data},null,2)],{type:"application/json"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download=`충청_실적백업_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    setMsg("✅ JSON 백업 완료");
  };

  const downloadExcel=()=>{
    const wb=XLSX.utils.book_new();
    const YRS=["24","25","26"];
    const MONTHS=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
    const KEYS=["CE","대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];
    const sk=i=>`${i}`;
    const g=(o,k)=>parseFloat(o?.[k])||0;
    const derived=o=>{
      const r={...o};
      r.대외영업=["혼수","입주","이사","SAC","거주중","SMB","농협","휴대폰"].reduce((s,k)=>s+g(o,k),0);
      r.뉴홈=g(o,"입주")+g(o,"이사");
      r.B2B=g(o,"SMB")+g(o,"농협")+g(o,"휴대폰");
      return r;
    };
    ["매출","판매"].forEach(md=>{
      YRS.forEach(yr=>{
        const pD=data[yr]?.[md]?.perf||{};
        const tD=data[yr]?.[md]?.target||{};
        const rows=[["항목",...MONTHS,"연간합계"]];
        ["목표","실적"].forEach(type=>{
          const d=type==="목표"?tD:pD;
          KEYS.forEach(k=>{
            const vals=MONTHS.map((_,i)=>parseFloat(derived(d[sk(i)]||{})[k]||0)||"");
            const sum=vals.reduce((a,b)=>a+(parseFloat(b)||0),0);
            rows.push([`${type}_${k}`,...vals,sum||""]);
          });
        });
        XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows),`${yr}년_${md}`);
      });
    });
    XLSX.writeFile(wb,`충청_실적백업_${new Date().toISOString().slice(0,10)}.xlsx`);
    setMsg("✅ 엑셀 백업 완료");
  };

  const downloadPdf=()=>{
    onClose();
    setTimeout(()=>window.print(),300);
  };

  const downloadImage=async()=>{
    setMsg("⏳ 이미지 생성 중...");
    onClose();
    await new Promise(r=>setTimeout(r,400));
    try{
      const el=document.getElementById("root");
      const canvas=await (window.html2canvas||html2canvas)(el,{scale:2,useCORS:true,backgroundColor:"#07101f",ignoreElements:e=>e.id==="backup-modal"});
      const a=document.createElement("a");
      a.href=canvas.toDataURL("image/png");
      a.download=`충청_메인화면_${new Date().toISOString().slice(0,10)}.png`;
      a.click();
    }catch(e){
      alert("이미지 생성 오류: "+e.message);
    }
  };

  const handleJsonUpload=async(e)=>{
    const file=e.target.files[0];
    if(!file)return;
    try{
      const text=await file.text();
      const parsed=JSON.parse(text);
      if(!parsed.perfData){setMsg("❌ 올바른 백업 파일이 아닙니다.");return;}
      // Firebase에 복원
      await window.db.collection("perf").doc("main").set({perfData:parsed.perfData},{merge:true});
      setMsg("✅ 복원 완료! 페이지를 새로고침하세요.");
    }catch(e){setMsg("❌ 파일 오류: "+e.message);}
  };

  const BtnRow=({icon,label,desc,onClick,c})=>(
    <button onClick={onClick} style={{
      display:"flex",alignItems:"center",gap:14,width:"100%",padding:"13px 16px",
      borderRadius:9,cursor:"pointer",textAlign:"left",fontFamily:"inherit",
      border:`1px solid ${c}40`,background:c+"0d",marginBottom:7,
      transition:"background .15s"}}
      onMouseEnter={e=>e.currentTarget.style.background=c+"20"}
      onMouseLeave={e=>e.currentTarget.style.background=c+"0d"}>
      <span style={{fontSize:20,flexShrink:0}}>{icon}</span>
      <div>
        <div style={{color:C.text,fontWeight:700,fontSize:13}}>{label}</div>
        <div style={{color:C.muted,fontSize:11,marginTop:2}}>{desc}</div>
      </div>
    </button>
  );

  return(
    <div id="backup-modal" style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,.75)",
      display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>
      <div style={{background:C.card,border:`1px solid ${C.b2}`,borderRadius:16,
        width:"min(460px,92vw)",maxHeight:"85vh",overflow:"auto",
        boxShadow:"0 8px 40px rgba(0,0,0,.6)"}}>
        <div style={{padding:"16px 20px",borderBottom:`1px solid ${C.b1}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontWeight:800,fontSize:15,color:C.text}}>📦 백업 · 복원</span>
          <button onClick={onClose} style={{background:"transparent",border:"none",
            color:C.muted,cursor:"pointer",fontSize:18}}>✕</button>
        </div>
        <div style={{display:"flex",borderBottom:`1px solid ${C.b1}`}}>
          {[["export","내보내기"],["import","가져오기"]].map(([k,l])=>(
            <button key={k} onClick={()=>setTab(k)} style={{
              flex:1,padding:"10px",border:"none",fontFamily:"inherit",cursor:"pointer",
              fontWeight:700,fontSize:12,
              background:tab===k?C.bg:"transparent",
              color:tab===k?C.teal:C.muted,
              borderBottom:tab===k?`2px solid ${C.teal}`:"2px solid transparent"}}>
              {l}
            </button>
          ))}
        </div>
        <div style={{padding:"16px"}}>
          {tab==="export"&&(
            <>
              <BtnRow icon="📋" label="JSON 전체 백업" c={C.teal}
                desc="실적·목표 전체 데이터를 JSON으로 저장 (완전 복원 가능)"
                onClick={downloadJson}/>
              <BtnRow icon="📊" label="엑셀 내보내기" c={C.green}
                desc="연도·모드별 실적/목표 데이터를 Excel로 저장"
                onClick={downloadExcel}/>
              <BtnRow icon="🖼" label="이미지 저장 (PNG)" c={C.blue}
                desc="현재 화면 전체를 고해상도 이미지로 저장"
                onClick={downloadImage}/>
              <BtnRow icon="🖨" label="PDF 저장 / 인쇄" c={C.orange}
                desc="브라우저 인쇄 기능으로 PDF 저장 또는 인쇄"
                onClick={downloadPdf}/>
            </>
          )}
          {tab==="import"&&(
            <div style={{background:C.bg,border:`1px solid ${C.teal}40`,borderRadius:10,padding:"16px"}}>
              <div style={{color:C.text,fontWeight:700,fontSize:13,marginBottom:6}}>📋 JSON 파일로 복원</div>
              <div style={{color:C.muted,fontSize:11,marginBottom:12,lineHeight:1.6}}>
                이전에 저장한 JSON 백업 파일을 선택하면 Firebase에 복원됩니다.<br/>
                ⚠ 현재 데이터를 덮어씁니다.
              </div>
              <input ref={fileRef} type="file" accept=".json" onChange={handleJsonUpload} style={{display:"none"}}/>
              <button onClick={()=>fileRef.current.click()} style={{
                width:"100%",padding:"10px",border:`2px dashed ${C.teal}60`,
                borderRadius:8,background:C.teal+"0a",color:C.teal,
                cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>
                📂 JSON 파일 선택
              </button>
            </div>
          )}
          {msg&&<div style={{marginTop:12,padding:"10px 14px",borderRadius:8,
            background:msg.startsWith("❌")?"rgba(240,112,112,.12)":"rgba(45,212,136,.12)",
            color:msg.startsWith("❌")?C.red:C.green,fontSize:12,fontWeight:600}}>
            {msg}
          </div>}
        </div>
      </div>
    </div>
  );
}

function TargetUnlockModal({onSuccess,onClose,title="목표 입력 잠금 해제",hashToMatch=TGT_PW_HASH}){
  const [pw,setPw]=useState("");
  const [err,setErr]=useState("");
  const [shake,setShake]=useState(false);
  const inputRef=useRef(null);
  useEffect(()=>{ setTimeout(()=>inputRef.current&&inputRef.current.focus(),80); },[]);

  const tryUnlock=async()=>{
    if(!pw){setErr("비밀번호를 입력해주세요.");return;}
    const buf=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pw));
    const hash=Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");
    if(hash===hashToMatch){
      onSuccess();
    } else {
      setErr("비밀번호가 올바르지 않습니다.");
      setPw("");
      setShake(true);
      setTimeout(()=>setShake(false),400);
    }
  };

  return(
    <div style={{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,.7)",
      display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>
      <div style={{
        background:C.card,border:`1px solid ${C.blue}50`,borderRadius:16,
        padding:"32px 36px",textAlign:"center",maxWidth:320,width:"90%",
        animation:shake?"shake .35s ease":"none",
        boxShadow:`0 0 40px ${C.blue}30`}}>
        <div style={{fontSize:28,marginBottom:8}}>🔐</div>
        <div style={{fontWeight:800,fontSize:15,color:C.text,marginBottom:4}}>{title}</div>
        <div style={{color:C.muted,fontSize:11,marginBottom:20}}>관리자 비밀번호를 입력하세요</div>
        <input
          ref={inputRef} type="password" value={pw}
          onChange={e=>{setPw(e.target.value);setErr("");}}
          onKeyDown={e=>e.key==="Enter"&&tryUnlock()}
          placeholder="••••••••"
          style={{width:"100%",background:C.bg,border:`1px solid ${err?C.red:C.b2}`,
            borderRadius:8,padding:"10px 14px",color:C.text,fontSize:15,
            letterSpacing:2,outline:"none",fontFamily:"inherit",
            transition:"border-color .2s",textAlign:"center"}}/>
        {err&&<div style={{color:C.red,fontSize:11,marginTop:6}}>{err}</div>}
        <div style={{display:"flex",gap:8,marginTop:14}}>
          <button onClick={onClose} style={{flex:1,padding:"9px",border:`1px solid ${C.b2}`,
            borderRadius:8,background:"transparent",color:C.muted,
            cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit"}}>
            취소
          </button>
          <button onClick={tryUnlock} style={{flex:2,padding:"9px",border:"none",
            borderRadius:8,background:C.blue,color:"#fff",
            cursor:"pointer",fontWeight:700,fontSize:12,fontFamily:"inherit"}}>
            잠금 해제
          </button>
        </div>
      </div>
    </div>
  );
}

function InputTab({data,setData,mode,onSave,saveState,hasUnsaved,onImport,isTargetUnlocked,onRequestTargetUnlock,onTargetLock}){
  const [yr,setYr]               = useState("26");
  const [mi,setMi]               = useState(0);
  const [inputMode,setInputMode] = useState("single");
  const isMobile = useIsMobile();

  const hasTgt = yr !== "24";
  const mColor = C[mode];

  const mD  = data[yr]?.[mode] || emptyMode(hasTgt);
  const pD  = mD.perf   || emptyM();
  const tD  = mD.target || emptyM();

  // 전년 데이터
  const prevYr = yr==="26"?"25":yr==="25"?"24":null;
  const prevP  = prevYr ? (data[prevYr]?.[mode]?.perf || emptyM()) : null;

  // Firebase 로드 후 마지막 입력월 자동 선택
  useEffect(()=>{
    for(let i=11;i>=0;i--){
      if(INP_KEYS.some(k=>gNum(pD[sk(i)]?.[k])>0)){ setMi(i); return; }
    }
  },[yr,mode,data]);

  const setVal = useCallback((type,mIdx,key,val)=>{
    setData(prev=>{
      const yr_=prev[yr]||{};
      const mode_=yr_[mode]||emptyMode(hasTgt);
      const type_=mode_[type]||emptyM();
      return {...prev,[yr]:{...yr_,[mode]:{...mode_,
        [type]:{...type_,[sk(mIdx)]:{...(type_[sk(mIdx)]||{}),[key]:val}}
      }}};
    });
  },[yr,mode,hasTgt,setData]);

  /* 연간 합산 */
  // emi = 실적이 입력된 마지막 월 (누계 기준월)
  const emi = (() => {
    for(let i=11;i>=0;i--) if(INP_KEYS.some(k=>gNum(pD[sk(i)]?.[k])>0)) return i;
    return new Date().getMonth();
  })();

  const pYear = k => sumM(pD,k);
  const tYear = k => sumM(tD,k);
  const prevYear = k => prevP ? sumM(prevP,k) : 0;

  /* 월별 fullRow */
  const pRow  = fullRow(pD[sk(mi)]);
  const tRow  = hasTgt ? fullRow(tD[sk(mi)]) : {};
  const ppRow = prevP  ? fullRow(prevP[sk(mi)]) : {};

  /* ── 단일 월 입력용 ── */
  const SingleRow = ({row})=>{
    const pv=pRow[row.key], tv=tRow[row.key], ppv=ppRow[row.key];
    const ar = hasTgt&&gNum(tv)>0 ? pct(pv,tv) : null;
    const gr = prevP&&gNum(ppv)>0  ? grw(pv,ppv) : null;
    // 목표 전년비
    const tgr = prevP&&gNum(ppv)>0 ? grw(gNum(tv),gNum(ppv)) : null;
    const isBg = GROUP_BG[row.key];
    return (
      <div style={{
        display:"grid",
        gridTemplateColumns:`140px 1fr ${hasTgt?"1fr":""}`,
        gap:6,alignItems:"stretch",
        padding:"4px 10px",
        background:isBg||"transparent",
        borderLeft:row.lv===0?`3px solid ${row.gc||C.b1}`:"none",
        marginBottom:row.gs&&row.lv===0?2:1,
        marginTop:row.gs&&row.lv===0?4:0,
      }}>
        <div style={{display:"flex",alignItems:"center"}}>
          <RowLabel row={row}/>
        </div>

        {/* ── 실적 셀: 입력 + 달성률 + 성장률 ── */}
        <div style={{
          background:isTargetUnlocked?mColor+"0d":"rgba(255,255,255,.03)",
          border:`1px solid ${isTargetUnlocked?mColor+"33":C.b1}`,borderRadius:7,
          padding:"5px 8px",display:"flex",flexDirection:"column",gap:2,
          position:"relative",
        }}>
          {!isTargetUnlocked&&(
            <button onClick={onRequestTargetUnlock} style={{
              position:"absolute",top:3,right:4,zIndex:5,cursor:"pointer",
              background:"rgba(245,185,66,.15)",border:"1px solid rgba(245,185,66,.4)",
              borderRadius:4,padding:"1px 5px",fontSize:9,fontFamily:"inherit",color:"#f5b942",
              fontWeight:700,lineHeight:1.4}}>
              🔒
            </button>
          )}
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{color:isTargetUnlocked?mColor:C.muted,fontSize:9,fontWeight:700,width:20,flexShrink:0}}>실적</span>
            <NumInput value={row.auto?pv:pD[sk(mi)]?.[row.key]}
              readOnly={row.auto||!isTargetUnlocked} color={isTargetUnlocked?row.gc||mColor:C.muted}
              onChange={v=>setVal("perf",mi,row.key,v)}/>
            <span style={{color:C.muted,fontSize:9,flexShrink:0}}>억</span>
          </div>
          <div style={{display:"flex",gap:8,paddingLeft:26}}>
            {ar!==null&&(
              <span style={{display:"flex",alignItems:"center",gap:2}}>
                <span style={{color:C.muted,fontSize:8}}>달성</span>
                <span style={{color:pctC(ar),fontSize:10,fontWeight:800}}>{Math.round(gNum(ar))}%</span>
              </span>
            )}
            {gr!==null&&(
              <span style={{display:"flex",alignItems:"center",gap:2}}>
                <span style={{color:C.muted,fontSize:8}}>전년비</span>
                <span style={{color:grwC(gr),fontSize:10,fontWeight:700}}>{grwT(gr)}</span>
              </span>
            )}
          </div>
        </div>

        {/* ── 목표 셀: 입력 + 전년비 ── */}
        {hasTgt&&(
          <div style={{
            background:isTargetUnlocked?C.blue+"0d":"rgba(255,255,255,.03)",
            border:`1px solid ${isTargetUnlocked?C.blue+"33":C.b1}`,borderRadius:7,
            padding:"5px 8px",display:"flex",flexDirection:"column",gap:2,
            position:"relative",
          }}>
            {!isTargetUnlocked&&(
              <button onClick={onRequestTargetUnlock} style={{
                position:"absolute",top:3,right:4,zIndex:5,cursor:"pointer",
                background:"rgba(59,130,246,.12)",border:"1px solid rgba(59,130,246,.35)",
                borderRadius:4,padding:"1px 5px",fontSize:9,fontFamily:"inherit",color:C.blue,
                fontWeight:700,lineHeight:1.4}}>
                🔒
              </button>
            )}
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <span style={{color:isTargetUnlocked?C.blue:C.muted,fontSize:9,fontWeight:700,width:20,flexShrink:0}}>목표</span>
              <NumInput value={row.auto?tRow[row.key]:tD[sk(mi)]?.[row.key]}
                readOnly={row.auto||!isTargetUnlocked} color={isTargetUnlocked?C.blue:C.muted}
                onChange={v=>setVal("target",mi,row.key,v)}/>
              <span style={{color:C.muted,fontSize:9,flexShrink:0}}>억</span>
            </div>
            <div style={{display:"flex",gap:8,paddingLeft:26}}>
              {tgr!==null&&(
                <span style={{display:"flex",alignItems:"center",gap:2}}>
                  <span style={{color:C.muted,fontSize:8}}>전년비</span>
                  <span style={{color:grwC(tgr),fontSize:10,fontWeight:700}}>{grwT(tgr)}</span>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  /* ── 일괄 입력 헤더 ── */
  const BulkTH = ({c,sticky,right,children,w})=>(
    <th style={{
      padding:"8px 6px",textAlign:right?"right":"center",
      color:c||C.muted,fontWeight:700,fontSize:11,whiteSpace:"nowrap",
      ...(sticky?{position:"sticky",left:0,background:C.card,zIndex:3}:{}),
      ...(w?{width:w,minWidth:w}:{minWidth:76}),
    }}>{children}</th>
  );

  /* ── 일괄 입력용 데이터 행 ── */
  const BulkDataRow = ({row, type, colorOverride, perfLocked=false})=>{
    const d     = type==="perf" ? pD : tD;
    const other = type==="perf" ? tD : null;
    const clr   = colorOverride || (type==="perf"?mColor:C.blue);

    // 합계 계산:
    // - perf: emi(실적 마지막 입력월)까지 누계
    // - target: 입력된 전 월 합산(12개월), 입력된 월만큼 반영
    const isTarget = type === "target";
    const yearSum  = isTarget ? sumM(d, row.key) : sumR(d, row.key, 0, emi);
    // 전년 실적 비교: target은 12개월 전체, perf는 emi까지
    const yearPrev = prevP
      ? (isTarget ? sumM(prevP, row.key) : sumR(prevP, row.key, 0, emi))
      : 0;
    // 실적 달성률용 목표 누계 (emi까지)
    const yearTgt  = sumR(tD, row.key, 0, emi);
    const yearAr   = type==="perf"&&hasTgt&&yearTgt>0 ? pct(yearSum,yearTgt) : null;
    const yearGr   = type==="perf"&&prevP&&yearPrev>0 ? grw(yearSum,yearPrev) : null;
    const tgtGr    = isTarget&&prevP&&yearPrev>0 ? grw(yearSum,yearPrev) : null;

    const rowBg = type==="perf"
      ? (GROUP_BG[row.key]||"transparent")
      : "rgba(56,182,245,.03)";

    return (
      <tr style={{borderBottom:`1px solid ${C.b1}20`,background:rowBg}}>
        {/* 항목명 */}
        <td style={{
          padding:"7px 10px",paddingLeft:10+row.lv*14,
          position:"sticky",left:0,background:C.card,zIndex:1,
          borderLeft:row.lv===0?`3px solid ${row.gc||C.b1}`:"none",
        }}>
          <RowLabel row={row} indent={true}/>
        </td>
        {/* 월별 셀 */}
        {MONTHS.map((_,mi2)=>{
          const val = row.auto
            ? gNum(fullRow(d[sk(mi2)])[row.key])
            : gNum(d[sk(mi2)]?.[row.key]);
          const prevVal = prevP ? gNum(fullRow(prevP[sk(mi2)])[row.key]) : 0;
          const tgtVal  = other ? gNum(fullRow(other[sk(mi2)])[row.key]) : 0;
          const ar = type==="perf"&&hasTgt&&tgtVal>0 ? pct(val,tgtVal) : null;
          const gr = type==="perf"&&prevP&&prevVal>0 ? grw(val,prevVal) : null;
          const tgr= type==="target"&&prevP&&prevVal>0 ? grw(val,prevVal) : null;

          return (
            <td key={mi2} style={{padding:"4px 5px",verticalAlign:"middle"}}>
              {row.auto ? (
                <div style={{
                  padding:"7px 8px",textAlign:"right",fontSize:11,fontWeight:700,
                  color:row.gc||clr,background:(row.gc||clr)+"12",
                  borderRadius:5,border:`1px solid ${row.gc||clr}22`,
                }}>
                  {val>0?Math.round(val).toLocaleString():<span style={{color:C.b2}}>─</span>}
                </div>
              ) : (
                <div>
                  <input type="number" step="any" min="0" placeholder="0"
                    value={d[sk(mi2)]?.[row.key]??""}
                    readOnly={perfLocked}
                    onChange={perfLocked?undefined:e=>setVal(type,mi2,row.key,e.target.value)}
                    style={{
                      width:"100%",background:C.bg,
                      border:`1px solid ${C.b1}`,borderRadius:5,
                      padding:"6px 8px",color:perfLocked?C.muted2:clr,fontSize:12,
                      outline:"none",textAlign:"right",fontFamily:"inherit",
                      cursor:perfLocked?"default":"text",
                    }}
                    onFocus={e=>{if(!perfLocked){e.target.style.borderColor=clr;e.target.style.boxShadow=`0 0 0 2px ${clr}22`;}}}
                    onBlur={e=>{e.target.style.borderColor=C.b1;e.target.style.boxShadow="none";}}
                  />
                  {/* 달성률 (실적) */}
                  {ar&&<div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:2,marginTop:2}}>
                    <span style={{color:C.muted,fontSize:8}}>달성</span>
                    <span style={{color:pctC(ar),fontSize:9,fontWeight:800}}>{Math.round(gNum(ar))}%</span>
                  </div>}
                  {/* 성장률 */}
                  {(gr||tgr)&&<div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:2,marginTop:1}}>
                    <span style={{color:C.muted,fontSize:8}}>전년비</span>
                    <span style={{color:grwC(gr||tgr),fontSize:9,fontWeight:700}}>{grwT(gr||tgr)}</span>
                  </div>}
                </div>
              )}
            </td>
          );
        })}
        {/* 연합계 */}
        <td style={{
          padding:"6px 10px",textAlign:"right",
          position:"sticky",right:0,
          background:C.card,zIndex:1,borderLeft:`1px solid ${C.b1}`,
        }}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:2}}>
            <span title={fmtD(yearSum)}
              style={{color:row.gc||clr,fontWeight:700,fontSize:11,cursor:"default",whiteSpace:"nowrap"}}>
              {yearSum>0?Math.round(yearSum).toLocaleString()+"억":"─"}
            </span>
            {yearAr&&(
              <span style={{display:"flex",alignItems:"center",gap:2}}>
                <span style={{color:C.muted,fontSize:8}}>누계달성</span>
                <span style={{color:pctC(yearAr),fontSize:10,fontWeight:800}}>{Math.round(gNum(yearAr))}%</span>
              </span>
            )}
            {(yearGr||tgtGr)&&(
              <span style={{display:"flex",alignItems:"center",gap:2}}>
                <span style={{color:C.muted,fontSize:8}}>{isTarget?"전년비":"누계성장"}</span>
                <span style={{color:grwC(yearGr||tgtGr),fontSize:10,fontWeight:700}}>{grwT(yearGr||tgtGr)}</span>
              </span>
            )}
          </div>
        </td>
      </tr>
    );
  };

  /* ── 섹션 헤더행 ── */
  const SectionHeaderRow = ({label, color, sub})=>(
    <tr>
      <td colSpan={100} style={{padding:"8px 12px 4px",
        background:`linear-gradient(90deg,${color}18 0%,transparent 60%)`,
        borderLeft:`3px solid ${color}`,borderBottom:`1px solid ${color}33`}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{color,fontWeight:800,fontSize:12}}>{label}</span>
          {sub&&<span style={{color:C.muted,fontSize:10}}>{sub}</span>}
        </div>
      </td>
    </tr>
  );

  return (
    <div style={{display:"flex",flexDirection:"column",gap:12}}>

      {/* ── 컨트롤 바 ── */}
      <div style={{
        background:`linear-gradient(135deg,${C.card2},${C.card})`,
        border:`1px solid ${C.b1}`,borderRadius:12,
        padding:"10px 14px",display:"flex",gap:8,alignItems:"center",flexWrap:"wrap",
        boxShadow:"0 4px 16px rgba(0,0,0,.2)",
      }}>
        {/* 연도 */}
        <div style={{display:"flex",gap:4}}>
          {[["24","실적전용"],["25","실적+목표"],["26","실적+목표"]].map(([y,d])=>(
            <button key={y} onClick={()=>setYr(y)} style={{
              padding:"5px 12px",borderRadius:7,cursor:"pointer",fontSize:11,fontWeight:700,
              fontFamily:"inherit",border:`1px solid ${yr===y?C.accent:C.b2}`,
              background:yr===y?C.accent+"22":"transparent",color:yr===y?C.accent:C.muted,
              boxShadow:yr===y?`0 0 8px ${C.accent}40`:"none",transition:"all .15s",
            }}>
              {y}년
              <span style={{fontSize:9,opacity:.7,marginLeft:3}}>({d})</span>
            </button>
          ))}
        </div>

        {/* 입력방식 */}
        <div style={{display:"flex",gap:3,background:C.bg,borderRadius:8,padding:3}}>
          {[["single","📅 월별"],["bulk","📊 일괄"]].map(([v,l])=>(
            <button key={v} onClick={()=>setInputMode(v)} style={{
              padding:"4px 12px",borderRadius:6,cursor:"pointer",fontSize:11,fontWeight:700,
              fontFamily:"inherit",border:"none",
              background:inputMode===v?mColor+"22":"transparent",
              color:inputMode===v?mColor:C.muted,
              boxShadow:inputMode===v?`0 0 6px ${mColor}30`:"none",
              transition:"all .15s",
            }}>{l}</button>
          ))}
        </div>

        {/* 월 탭 (월별 모드) */}
        {inputMode==="single"&&(
          <div style={{display:"flex",gap:2,flexWrap:"wrap",flex:1}}>
            {MONTHS.map((m,i)=>{
              const has=INP_KEYS.some(k=>gNum(pD[sk(i)]?.[k])>0);
              return (
                <button key={m} onClick={()=>setMi(i)} style={{
                  padding:"4px 8px",borderRadius:5,cursor:"pointer",fontSize:10,fontWeight:600,
                  fontFamily:"inherit",border:`1px solid ${mi===i?mColor:has?C.green+"50":C.b1}`,
                  background:mi===i?mColor+"22":"transparent",
                  color:mi===i?mColor:has?C.green:C.muted,
                  transition:"all .12s",
                }}>
                  {m.replace("월","")}
                  {has&&mi!==i&&<span style={{display:"block",width:3,height:3,borderRadius:"50%",
                    background:C.green,margin:"0 auto",marginTop:1}}/>}
                </button>
              );
            })}
          </div>
        )}
        {inputMode==="bulk"&&<div style={{flex:1}}/>}

        {/* 가져오기 */}
        <button onClick={onImport} style={{
          padding:"7px 14px",borderRadius:8,
          border:`1px solid ${C.teal}40`,
          background:`${C.teal}10`,
          color:C.teal,fontWeight:700,fontSize:11,
          cursor:"pointer",fontFamily:"inherit",
          display:"flex",alignItems:"center",gap:4,
          transition:"all .15s",flexShrink:0,
        }}
        onMouseEnter={e=>{e.currentTarget.style.background=C.teal+"22";e.currentTarget.style.borderColor=C.teal;}}
        onMouseLeave={e=>{e.currentTarget.style.background=C.teal+"10";e.currentTarget.style.borderColor=C.teal+"40";}}>
          📥{!isMobile&&" JSON 가져오기"}
        </button>

        {/* 저장 */}
        <button onClick={onSave} disabled={saveState==="saving"} style={{
          padding:"7px 20px",borderRadius:8,border:"none",cursor:"pointer",
          fontFamily:"inherit",fontWeight:800,fontSize:12,flexShrink:0,
          background:saveState==="saved"?C.green
            :hasUnsaved?`linear-gradient(135deg,${C.accent},${C.blue})`:C.b2,
          color:"#fff",
          boxShadow:hasUnsaved&&saveState==="idle"?`0 0 14px ${C.accent}50`:"none",
          transition:"all .2s",
        }}>
          {saveState==="saving"?"저장중...":saveState==="saved"?"✓ 완료":"💾 저장"}
        </button>
      </div>

      {/* ══════════════════════════════════════════
          일괄 입력 모드
         ══════════════════════════════════════════ */}
      {inputMode==="bulk"&&(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>

          {/* 안내 배지 */}
          <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
            <span style={{color:C.text,fontWeight:800,fontSize:14}}>
              {yr}년 · {mode}
            </span>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              <div style={{width:8,height:8,borderRadius:2,background:mColor}}/>
              <span style={{color:mColor,fontSize:11,fontWeight:700}}>실적</span>
            </div>
            {hasTgt&&(
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                <div style={{width:8,height:8,borderRadius:2,background:C.blue}}/>
                <span style={{color:C.blue,fontSize:11,fontWeight:700}}>목표</span>
              </div>
            )}
            {hasTgt&&(
              <span style={{color:C.muted,fontSize:10}}>
                · 셀 안 작은 숫자: 달성률(%), 전년비(▲▼)
              </span>
            )}
          </div>

          {/* ── 실적 블록 ── */}
          <div style={{
            background:C.card,border:`1px solid ${mColor}44`,borderRadius:14,
            overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,.25)",
          }}>
            {/* 블록 헤더 */}
            <div style={{
              padding:"10px 16px",
              background:`linear-gradient(90deg,${mColor}22 0%,transparent 70%)`,
              borderBottom:`1px solid ${mColor}33`,
              display:"flex",alignItems:"center",gap:10,
            }}>
              <div style={{width:4,height:20,borderRadius:2,background:mColor,
                boxShadow:`0 0 8px ${mColor}`}}/>
              <span style={{color:mColor,fontWeight:900,fontSize:14}}>📊 실적 입력</span>
              <span style={{color:C.muted,fontSize:11}}>{yr}년 · 억원 단위</span>
              <div style={{marginLeft:"auto",display:"flex",gap:4,alignItems:"center"}}>
                {isTargetUnlocked?(
                  <button onClick={onTargetLock} style={{
                    padding:"4px 10px",borderRadius:6,
                    border:`1px solid ${C.muted}`,background:"transparent",
                    color:C.muted,cursor:"pointer",fontSize:10,fontWeight:700,fontFamily:"inherit"}}>
                    🔒 잠금
                  </button>
                ):(
                  <button onClick={onRequestTargetUnlock} style={{
                    padding:"4px 12px",borderRadius:6,
                    border:`1px solid ${C.orange}`,background:C.orange+"18",
                    color:C.orange,cursor:"pointer",fontSize:10,fontWeight:700,fontFamily:"inherit"}}>
                    🔓 잠금 해제
                  </button>
                )}
              </div>
              {prevYr&&isTargetUnlocked&&<span style={{color:C.muted,fontSize:10}}>
                셀 하단: 목표달성률 · 전{prevYr}년비 성장률 자동표시
              </span>}
            </div>

            <div style={{overflowX:"auto"}}>
              <table style={{borderCollapse:"collapse",minWidth:1100,width:"100%"}}>
                <thead>
                  <tr style={{background:C.card2,borderBottom:`2px solid ${C.b1}`}}>
                    <BulkTH sticky w={130}>항목</BulkTH>
                    {MONTHS.map(m=>(
                      <BulkTH key={m} c={C.muted2}>
                        <div>{m}</div>
                        {hasTgt&&<div style={{fontSize:8,fontWeight:400,marginTop:1}}><span style={{color:C.teal}}>달성</span><span style={{color:C.muted}}>·</span><span style={{color:C.green}}>전년비</span></div>}
                      </BulkTH>
                    ))}
                    <BulkTH right c={C.accent} w={110}><div>{MONTHS[emi]} 누계</div><div style={{fontSize:8,marginTop:1}}><span style={{color:C.teal}}>달성</span><span style={{color:C.muted}}>·</span><span style={{color:C.green}}>전년동기비</span></div></BulkTH>
                  </tr>
                </thead>
                <tbody>
                  {INPUT_ROWS.map((row,ri)=>(
                    <React.Fragment key={row.key}>
                      {/* 그룹 시작선 */}
                      {row.gs&&ri>0&&<GroupDivider color={row.gc}/>}
                      <BulkDataRow row={row} type="perf" perfLocked={!isTargetUnlocked}/>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── 목표 블록 (25/26년만) ── */}
          {hasTgt&&(
            <div style={{
              background:C.card,border:`1px solid ${isTargetUnlocked?C.blue:C.b1}44`,borderRadius:14,
              overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,.25)",
            }}>
              <div style={{
                padding:"10px 16px",
                background:`linear-gradient(90deg,${C.blue}22 0%,transparent 70%)`,
                borderBottom:`1px solid ${C.blue}33`,
                display:"flex",alignItems:"center",gap:10,
              }}>
                <div style={{width:4,height:20,borderRadius:2,background:C.blue,
                  boxShadow:`0 0 8px ${C.blue}`}}/>
                <span style={{color:isTargetUnlocked?C.blue:C.muted,fontWeight:900,fontSize:14}}>🎯 목표 입력</span>
                <span style={{color:C.muted,fontSize:11}}>{yr}년 · 억원 단위</span>
                <div style={{marginLeft:"auto",display:"flex",gap:6,alignItems:"center"}}>
                  {prevYr&&isTargetUnlocked&&<span style={{color:C.muted,fontSize:10}}>
                    셀 하단: 전{prevYr}년실적 대비 성장률 자동표시
                  </span>}
                  {!isTargetUnlocked&&<span style={{color:C.muted,fontSize:10}}>🔒 잠금 상태 — 실적 블록에서 해제</span>}
                </div>
              </div>

              <div style={{overflowX:"auto"}}>
                <table style={{borderCollapse:"collapse",minWidth:1100,width:"100%"}}>
                  <thead>
                    <tr style={{background:C.card2,borderBottom:`2px solid ${C.b1}`}}>
                      <BulkTH sticky w={130}>항목</BulkTH>
                      {MONTHS.map(m=>(
                        <BulkTH key={m} c={C.blue}>
                          <div>{m}</div>
                          {prevYr&&<div style={{fontSize:8,fontWeight:400,marginTop:1}}><span style={{color:C.green}}>전년비</span></div>}
                        </BulkTH>
                      ))}
                      <BulkTH right c={C.blue} w={110}><div>연간 합계</div><div style={{fontSize:8,marginTop:1}}><span style={{color:C.green}}>전년비</span></div></BulkTH>
                    </tr>
                  </thead>
                  <tbody>
                    {INPUT_ROWS.map((row,ri)=>(
                      <React.Fragment key={row.key}>
                        {row.gs&&ri>0&&<GroupDivider color={C.blue}/>}
                        <BulkDataRow row={row} type="target" colorOverride={C.blue} perfLocked={!isTargetUnlocked}/>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════
          월별 입력 모드
         ══════════════════════════════════════════ */}
      {inputMode==="single"&&(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>

          {/* 월 헤딩 */}
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:3,height:24,borderRadius:2,background:mColor}}/>
            <span style={{color:C.text,fontWeight:800,fontSize:15}}>
              {yr}년 {MONTHS[mi]}
            </span>
            <Chip c={mColor}>{mode}</Chip>
            {hasTgt&&<Chip c={C.blue}>실적+목표</Chip>}
            {prevYr&&<Chip c={C.muted2}>전{prevYr}년비 성장률 자동표시</Chip>}
          </div>

          {/* 행 렌더 */}
          <div style={{
            background:C.card,border:`1px solid ${C.b1}`,borderRadius:12,
            padding:"6px 0",boxShadow:"0 4px 16px rgba(0,0,0,.2)",overflow:"hidden",
          }}>
            {INPUT_ROWS.map((row,ri)=>(
              <React.Fragment key={row.key}>
                {row.gs&&ri>0&&(
                  <div style={{height:6,
                    background:`linear-gradient(90deg,${row.gc||C.b1}20 0%,transparent 100%)`}}/>
                )}
                <SingleRow row={row}/>
              </React.Fragment>
            ))}
          </div>

          {/* ── 파트별 도넛 카드 (전체 12개) ── */}
          <div style={{
            background:C.card,border:`1px solid ${C.b1}`,borderRadius:12,padding:16,
            boxShadow:"0 4px 16px rgba(0,0,0,.2)",
          }}>
            <div style={{color:C.text,fontWeight:800,fontSize:12,marginBottom:12}}>
              {MONTHS[mi]} 파트별 현황
              <span style={{color:C.muted,fontWeight:400,fontSize:10,marginLeft:8}}>
                도넛: 달성률 · 수치: 실적/목표
              </span>
            </div>
            <div style={{display:"grid",
              gridTemplateColumns:isMobile?"repeat(3,1fr)":"repeat(6,1fr)",gap:10}}>
              {INPUT_ROWS.map(row=>{
                const pv=gNum(pRow[row.key]);
                const tv=hasTgt?gNum(tRow[row.key]):0;
                const ppv=prevP?gNum(ppRow[row.key]):0;
                const ar=hasTgt&&tv>0?pct(pv,tv):null;
                const gr=prevP&&ppv>0?grw(pv,ppv):null;
                const color=row.gc||C.muted2;
                return (
                  <div key={row.key} style={{
                    background:C.card2,border:`1px solid ${color}25`,
                    borderRadius:10,padding:"10px 6px",
                    display:"flex",flexDirection:"column",alignItems:"center",gap:4,
                    borderTop:`2px solid ${color}`,
                  }}>
                    <DonutChart pct={ar||0} color={color} size={60} stroke={7}/>
                    <div style={{display:"flex",alignItems:"center",gap:3}}>
                      <span style={{color,fontSize:10,fontWeight:700}}>{row.key}</span>
                      {row.auto&&<span style={{color:color,fontSize:7,background:color+"20",
                        borderRadius:2,padding:"1px 3px",fontWeight:700}}>자동</span>}
                    </div>
                    <div style={{textAlign:"center"}}>
                      <span style={{color:C.text,fontSize:12,fontWeight:800}}>
                        {pv>0?Math.round(pv).toLocaleString():<span style={{color:C.muted}}>─</span>}
                      </span>
                      {tv>0&&<span style={{color:C.muted,fontSize:9}}>/{Math.round(tv)}억</span>}
                    </div>
                    {gr!==null&&(
                      <span style={{color:grwC(gr),fontSize:9,fontWeight:700}}>
                        전년비 {grwT(gr)}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════
//  실적 분석
// ═══════════════════════════════════════════════
// AnalysisBtn: Analysis 밖에 정의 (안에 두면 매 렌더마다 새 타입 → hook 오염)
function AnalysisBtn({label,active,onClick,clr,color}){
  const c = clr||color||"#7c83f5";
  return (
    <button onClick={onClick} style={{
      padding:"5px 10px",borderRadius:6,cursor:"pointer",fontWeight:700,fontSize:11,
      fontFamily:"inherit",whiteSpace:"nowrap",transition:"all .15s",
      border:`1px solid ${active?c:C.b2}`,
      background:active?c+"28":"transparent",
      color:active?c:C.muted,
      boxShadow:active?`0 0 6px ${c}30`:"none",
    }}>{label}</button>
  );
}

function Analysis({data,mode}){
  const [yr,    setYr]  = useState("26");
  const [selKey,setSel] = useState("대외영업");
  const isMobile = useIsMobile();

  const ANALYSIS_KEYS = ["대외영업","CE","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];

  const pD   = data[yr]?.[mode]?.perf   ||emptyM();
  const tD   = data[yr]?.[mode]?.target ||emptyM();
  const prevYr = yr==="26"?"25":yr==="25"?"24":null;
  const prevP  = prevYr?(data[prevYr]?.[mode]?.perf||emptyM()):null;

  const lm  = lastMiOf(pD);
  const emi = lm>=0?lm:new Date().getMonth();
  const color = KC[selKey]||C.accent;

  // 선택 파트 월별 데이터
  const mPerf = MONTHS.map((_,i)=>gNum(fullRow(pD[sk(i)])?.[selKey]));
  const mTgt  = MONTHS.map((_,i)=>gNum(fullRow(tD[sk(i)])?.[selKey]));
  const mPrev = prevP ? MONTHS.map((_,i)=>gNum(fullRow(prevP[sk(i)])?.[selKey])) : null;

  // 누계
  const ytdP = mPerf.slice(0,emi+1).reduce((a,b)=>a+b,0);
  const ytdT = mTgt.slice(0,emi+1).reduce((a,b)=>a+b,0);
  const annT = mTgt.reduce((a,b)=>a+b,0);
  const ytdPrev = mPrev ? mPrev.slice(0,emi+1).reduce((a,b)=>a+b,0) : 0;

  // 월별 달성률 / 성장률
  const mAr = MONTHS.map((_,i)=>i<=emi&&mTgt[i]>0 ? parseFloat((mPerf[i]/mTgt[i]*100).toFixed(1)) : null);
  const mGr = MONTHS.map((_,i)=>i<=emi&&mPrev&&mPrev[i]>0 ? parseFloat(((mPerf[i]-mPrev[i])/mPrev[i]*100).toFixed(1)) : null);

  // 누계 달성률 / 성장률
  let cPerf=0,cTgt=0;
  const cumAr = MONTHS.map((_,i)=>{
    if(i>emi) return null;
    cPerf+=mPerf[i]; cTgt+=mTgt[i];
    return cTgt>0 ? parseFloat((cPerf/cTgt*100).toFixed(1)) : null;
  });
  let cP=0,cPv=0;
  const cumGr = mPrev ? MONTHS.map((_,i)=>{
    if(i>emi) return null;
    cP+=mPerf[i]; cPv+=mPrev[i];
    return cPv>0 ? parseFloat(((cP-cPv)/cPv*100).toFixed(1)) : null;
  }) : null;

  // 누계 차트 (3개년)
  const makeArr26 = (d,k) => { let s=0; return MONTHS.map((_,i)=>{if(i>emi)return null;s+=gNum(fullRow(d[sk(i)])?.[k]);return s;}); };
  const makeArr25 = (d,k) => { let s=0; return MONTHS.map((_,i)=>{if(i>emi)return null;s+=gNum(fullRow(d[sk(i)])?.[k]);return s;}); };
  const d24P = data["24"]?.[mode]?.perf||emptyM();
  const d25P = data["25"]?.[mode]?.perf||emptyM();

  // CE 비중 (CE 키가 있고 선택 파트가 CE가 아닐 때)
  const ceShare = selKey!=="CE" ? MONTHS.map((_,i)=>{
    const ce=gNum(fullRow(pD[sk(i)])?.CE);
    const hp=gNum(fullRow(pD[sk(i)])?.휴대폰);
    const v = selKey==="대외영업" ? gNum(fullRow(pD[sk(i)])?.[selKey])-hp
            : selKey==="B2B"    ? gNum(fullRow(pD[sk(i)])?.[selKey])-hp
            : gNum(fullRow(pD[sk(i)])?.[selKey]);
    return (i<=emi&&ce>0) ? parseFloat((v/ce*100).toFixed(1)) : null;
  }) : null;

  const avgPerf = ytdP>0&&emi>=0 ? Math.round(ytdP/(emi+1)) : 0;
  const ytdAr   = ytdT>0 ? pct(ytdP,ytdT) : null;
  const ytdGr   = ytdPrev>0 ? grw(ytdP,ytdPrev) : null;

  // 그로스 차트 offset
  const allGrVals = [...(mGr||[]),...(cumGr||[])].filter(v=>v!==null);
  const negMaxGr = allGrVals.length>0 ? Math.max(...allGrVals.filter(v=>v<0).map(v=>Math.abs(v)),0) : 0;
  const offsetGr = v => v!==null ? parseFloat((v+negMaxGr).toFixed(1)) : null;


  return (
    <div style={{display:"flex",flexDirection:"column",gap:12}}>

      {/* ── 컨트롤 바: 연도 + 파트 선택 ── */}
      <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:10,
        padding:"10px 14px",display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
        <div style={{display:"flex",gap:4}}>
          <span style={{color:C.muted,fontSize:10,fontWeight:700,alignSelf:"center",marginRight:2}}>연도</span>
          {["24","25","26"].map(y=>(
            <AnalysisBtn key={y} label={y+"년"} active={yr===y} onClick={()=>setYr(y)} clr={C.blue}/>
          ))}
        </div>
        <div style={{width:1,height:20,background:C.b1}}/>
        <div style={{display:"flex",gap:4,flexWrap:"wrap",flex:1}}>
          <span style={{color:C.muted,fontSize:10,fontWeight:700,alignSelf:"center",marginRight:2}}>파트</span>
          {ANALYSIS_KEYS.map(k=>(
            <AnalysisBtn key={k} label={k} active={selKey===k} onClick={()=>setSel(k)} clr={KC[k]}/>
          ))}
        </div>
      </div>

      {/* ── 상단 KPI 카드 ── */}
      <div style={{display:"grid",gridTemplateColumns:`repeat(${isMobile?2:5},1fr)`,gap:8}}>
        {[
          {l:"누계 실적",    v:ytdP>0?Math.round(ytdP)+"억":"─",   c:color, big:true},
          {l:"연간 목표",    v:annT>0?Math.round(annT)+"억":"─",    c:C.orange},
          {l:MONTHS[emi]+" 누계달성", v:ytdAr?Math.round(gNum(ytdAr))+"%":"─", c:ytdAr?pctC(ytdAr):C.muted},
          {l:"전년비 성장",  v:ytdGr?grwT(ytdGr):"─",              c:ytdGr?grwC(ytdGr):C.muted},
          {l:"월평균 실적",  v:avgPerf>0?avgPerf+"억":"─",           c:C.teal},
        ].map(({l,v,c,big})=>(
          <div key={l} style={{background:C.card,border:`1px solid ${c}30`,borderRadius:10,
            padding:"10px 12px",display:"flex",flexDirection:"column",gap:3}}>
            <span style={{color:C.muted,fontSize:9,fontWeight:700}}>{l}</span>
            <span style={{color:c,fontSize:big?18:15,fontWeight:900}}>{v}</span>
          </div>
        ))}
      </div>

      {/* ── 월별 데이터 테이블 ── */}
      <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:10,
        padding:"12px 14px",overflowX:"auto"}}>
        <div style={{color:C.text,fontWeight:800,fontSize:12,marginBottom:10}}>
          <span style={{color}}>{selKey}</span>
          <span style={{color:C.muted,fontWeight:400,fontSize:11,marginLeft:8}}>
            월별 상세 — {yr}년 · {mode} · 억원
          </span>
        </div>
        <table style={{borderCollapse:"collapse",minWidth:800,width:"100%"}}>
          <thead>
            <tr style={{borderBottom:`2px solid ${C.b1}`}}>
              <td style={{padding:"5px 10px",color:C.muted,fontWeight:700,fontSize:10,
                position:"sticky",left:0,background:C.card2,minWidth:72}}>항목</td>
              {MONTHS.map((m,i)=>(
                <td key={m} style={{padding:"5px 5px",textAlign:"right",
                  color:i<=emi?C.muted2:C.muted,fontWeight:600,fontSize:10,
                  borderBottom:i===emi?`2px solid ${color}60`:"none",minWidth:40}}>
                  {m}{i===emi&&<span style={{color,fontSize:7,display:"block"}}>▲</span>}
                </td>
              ))}
              <td style={{padding:"5px 8px",textAlign:"right",color:C.accent,
                fontWeight:700,fontSize:10,minWidth:50}}>누계</td>
            </tr>
          </thead>
          <tbody>
            {/* 실적 행 */}
            <tr style={{background:C.card+"66"}}>
              <td style={{padding:"4px 10px",color,fontWeight:700,fontSize:11,
                position:"sticky",left:0,background:C.card}}>실적</td>
              {mPerf.map((v,i)=>(
                <td key={i} style={{padding:"4px 5px",textAlign:"right"}}>
                  <span style={{color:i<=emi?C.text:C.muted,fontSize:11,fontWeight:i<=emi?700:400}}>
                    {i<=emi&&v>0?Math.round(v).toLocaleString():i<=emi?"─":"·"}
                  </span>
                </td>
              ))}
              <td style={{padding:"4px 8px",textAlign:"right"}}>
                <span style={{color,fontWeight:800,fontSize:12}}>{ytdP>0?Math.round(ytdP).toLocaleString()+"억":"─"}</span>
              </td>
            </tr>
            {/* 목표 행 */}
            {annT>0&&(
              <tr>
                <td style={{padding:"4px 10px",color:C.orange,fontWeight:600,fontSize:10,
                  position:"sticky",left:0,background:C.card2}}>목표</td>
                {mTgt.map((v,i)=>(
                  <td key={i} style={{padding:"4px 5px",textAlign:"right"}}>
                    <span style={{color:C.orange,fontSize:10,opacity:.8}}>
                      {v>0?Math.round(v).toLocaleString():"─"}
                    </span>
                  </td>
                ))}
                <td style={{padding:"4px 8px",textAlign:"right"}}>
                  <span style={{color:C.orange,fontWeight:700,fontSize:11}}>{annT>0?Math.round(annT).toLocaleString()+"억":"─"}</span>
                </td>
              </tr>
            )}
            {/* 달성률 행 */}
            {annT>0&&(
              <tr style={{borderBottom:`1px solid ${C.b1}30`}}>
                <td style={{padding:"3px 10px",color:C.muted,fontSize:10,
                  position:"sticky",left:0,background:C.card2}}>달성률</td>
                {mAr.map((v,i)=>(
                  <td key={i} style={{padding:"3px 5px",textAlign:"right"}}>
                    {v!==null
                      ? <span style={{color:pctC(v),fontSize:10,fontWeight:700}}>{Math.round(v)}%</span>
                      : <span style={{color:C.muted,fontSize:9}}>─</span>}
                  </td>
                ))}
                <td style={{padding:"3px 8px",textAlign:"right"}}>
                  {ytdAr?<span style={{color:pctC(ytdAr),fontWeight:800,fontSize:11}}>{Math.round(gNum(ytdAr))}%</span>
                    :<span style={{color:C.muted}}>─</span>}
                </td>
              </tr>
            )}
            {/* 전년실적 행 */}
            {mPrev&&(
              <tr style={{background:C.card+"22"}}>
                <td style={{padding:"4px 10px",color:C.muted2,fontWeight:500,fontSize:10,
                  position:"sticky",left:0,background:C.card2}}>{prevYr}년실적</td>
                {mPrev.map((v,i)=>(
                  <td key={i} style={{padding:"4px 5px",textAlign:"right"}}>
                    <span style={{color:C.muted2,fontSize:10}}>
                      {i<=emi&&v>0?Math.round(v).toLocaleString():"─"}
                    </span>
                  </td>
                ))}
                <td style={{padding:"4px 8px",textAlign:"right"}}>
                  <span style={{color:C.muted2,fontSize:11}}>{ytdPrev>0?Math.round(ytdPrev).toLocaleString()+"억":"─"}</span>
                </td>
              </tr>
            )}
            {/* 성장률 행 */}
            {mGr&&(
              <tr style={{borderBottom:`1px solid ${C.b1}40`}}>
                <td style={{padding:"3px 10px",color:C.muted,fontSize:10,
                  position:"sticky",left:0,background:C.card2}}>전년비</td>
                {mGr.map((v,i)=>(
                  <td key={i} style={{padding:"3px 5px",textAlign:"right"}}>
                    {v!==null
                      ? <span style={{color:grwC(String(v)),fontSize:10,fontWeight:600}}>{grwT(String(v))}</span>
                      : <span style={{color:C.muted,fontSize:9}}>─</span>}
                  </td>
                ))}
                <td style={{padding:"3px 8px",textAlign:"right"}}>
                  {ytdGr?<span style={{color:grwC(ytdGr),fontWeight:700,fontSize:11}}>{grwT(ytdGr)}</span>
                    :<span style={{color:C.muted}}>─</span>}
                </td>
              </tr>
            )}
            {/* CE 비중 행 */}
            {ceShare&&selKey!=="CE"&&(
              <tr>
                <td style={{padding:"3px 10px",color:KC.CE,fontSize:10,fontWeight:600,
                  position:"sticky",left:0,background:C.card2}}>CE비중</td>
                {ceShare.map((v,i)=>(
                  <td key={i} style={{padding:"3px 5px",textAlign:"right"}}>
                    {v!==null
                      ? <span style={{color:KC.CE,fontSize:9,fontWeight:600}}>{v.toFixed(1)}%</span>
                      : <span style={{color:C.muted,fontSize:9}}>─</span>}
                  </td>
                ))}
                <td style={{padding:"3px 8px",textAlign:"right"}}>
                  {(()=>{
                    const ceYtd=sumR(pD,"CE",0,emi);
                    const hp=sumR(pD,"휴대폰",0,emi);
                    const vYtd = selKey==="대외영업" ? sumR(pD,selKey,0,emi)-hp
                               : selKey==="B2B"    ? sumR(pD,selKey,0,emi)-hp
                               : sumR(pD,selKey,0,emi);
                    const s = ceYtd>0?(vYtd/ceYtd*100).toFixed(1):null;
                    return s?<span style={{color:KC.CE,fontWeight:700,fontSize:11}}>{s}%</span>
                      :<span style={{color:C.muted}}>─</span>;
                  })()}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ── 차트 그리드 ── */}
      <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:12}}>

        {/* 월별 실적 추이 */}
        <div style={{background:C.card2,border:`1px solid ${color}33`,borderRadius:10,padding:14}}>
          <div style={{color:C.text,fontWeight:700,fontSize:12,marginBottom:8}}>
            월별 실적 추이
            <span style={{color:C.muted,fontSize:9,fontWeight:400,marginLeft:6}}>당월 실적 vs 목표 vs {prevYr||"전년"}년</span>
          </div>
          {mPerf.some((v,i)=>i<=emi&&v>0) ? (
            <RichLineChart h={120} series={[
              ...(mPrev?[{data:mPrev.map((v,i)=>i<=emi?v:null),color:"#a78bfa",op:.7,tooltipLabel:`${prevYr}년`}]:[]),
              {data:mTgt.map((v,i)=>i<=emi?v:null),color:C.orange,dash:true,op:.7,tooltipLabel:"목표"},
              {data:mPerf.map((v,i)=>i<=emi?v:null),color,bold:true,fill:true,showLabels:true,tooltipLabel:`${yr}년`},
            ]} labels={MONTHS}/>
          ) : <div style={{height:120,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{color:C.muted,fontSize:11}}>데이터 없음</span></div>}
        </div>

        {/* 누계 추이 */}
        <div style={{background:C.card2,border:`1px solid ${C.b1}`,borderRadius:10,padding:14}}>
          <div style={{color:C.text,fontWeight:700,fontSize:12,marginBottom:8}}>
            누계 실적 추이
            <span style={{color:C.muted,fontSize:9,fontWeight:400,marginLeft:6}}>3개년 비교</span>
          </div>
          {(()=>{
            const c26 = makeArr26(pD,selKey);
            const c25 = makeArr26(d25P,selKey);
            const c24 = makeArr26(d24P,selKey);
            return c26.some(v=>v!==null) ? (
              <RichLineChart h={120} series={[
                {data:c24,color:"#fbbf24",op:.7,medium:true,tooltipLabel:"24년"},
                {data:c25,color:"#a78bfa",op:.85,medium:true,tooltipLabel:"25년"},
                {data:c26,color,bold:true,fill:true,showLabels:true,tooltipLabel:"26년"},
              ]} labels={MONTHS}/>
            ) : <div style={{height:120,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{color:C.muted,fontSize:11}}>데이터 없음</span></div>;
          })()}
        </div>

        {/* 달성률 추이 */}
        {annT>0&&(
          <div style={{background:C.card2,border:`1px solid ${C.teal}33`,borderRadius:10,padding:14}}>
            <div style={{color:C.text,fontWeight:700,fontSize:12,marginBottom:8}}>
              달성률 추이
              <span style={{color:C.muted,fontSize:9,fontWeight:400,marginLeft:6}}>당월 및 누계 달성률</span>
            </div>
            {mAr.some(v=>v!==null) ? (
              <RichLineChart h={110} pctMode={true} series={[
                {data:MONTHS.map((_,i)=>i<=emi?100:null),color:C.green,dash:true,op:.4,tooltipLabel:"100%기준",tooltipUnit:"%"},
                {data:cumAr,color:C.orange,medium:true,op:.85,showLabels:true,tooltipLabel:"누계달성률",tooltipUnit:"%"},
                {data:mAr,color:C.teal,bold:true,fill:true,tooltipLabel:"당월달성률",tooltipUnit:"%"},
              ]} labels={MONTHS}/>
            ) : <div style={{height:110,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{color:C.muted,fontSize:11}}>목표 데이터 없음</span></div>}
          </div>
        )}

        {/* 성장률 추이 */}
        {mPrev&&(
          <div style={{background:C.card2,border:`1px solid ${C.orange}33`,borderRadius:10,padding:14}}>
            <div style={{color:C.text,fontWeight:700,fontSize:12,marginBottom:8}}>
              전년비 성장률
              <span style={{color:C.muted,fontSize:9,fontWeight:400,marginLeft:6}}>당월 및 누계 성장률</span>
            </div>
            {mGr&&mGr.some(v=>v!==null) ? (
              <RichLineChart h={110} grMode={true} zeroOffset={negMaxGr} series={[
                {data:MONTHS.map((_,i)=>i<=emi?offsetGr(0):null),color:"rgba(255,255,255,.2)",dash:true,op:.5,tooltipLabel:"0%",tooltipUnit:"%"},
                ...(cumGr?[{data:cumGr.map(offsetGr),color:"#a78bfa",medium:true,op:.85,tooltipLabel:"누계성장률",tooltipUnit:"%",grOffset:negMaxGr}]:[]),
                {data:mGr.map(offsetGr),color:C.orange,bold:true,fill:true,showLabels:true,tooltipLabel:"당월성장률",tooltipUnit:"%",grOffset:negMaxGr},
              ]} labels={MONTHS}/>
            ) : <div style={{height:110,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{color:C.muted,fontSize:11}}>전년 데이터 없음</span></div>}
          </div>
        )}

      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
//  앱 루트
// ═══════════════════════════════════════════════
// ═══════════════════════════════════════════════
//  JSON 가져오기 모달 (딥 머지)
// ═══════════════════════════════════════════════
/*  지원 JSON 형식 예시:
    {
      "26": {
        "판매": {
          "perf":   { "0": {"CE":100,"혼수":10}, "1": {"CE":120} },
          "target": { "0": {"CE":130} }
        },
        "매출": { ... }
      },
      "25": { ... }
    }
    → 연도 / 모드 / perf|target / 월(0~11) / 항목 키 구조
*/
function ImportModal({onClose, currentData, onMerge}){
  const [jsonText, setJsonText] = useState("");
  const [preview,  setPreview]  = useState(null);  // {added, updated, total}
  const [step,     setStep]     = useState("edit"); // edit | confirm | done
  const [error,    setError]    = useState("");

  /* ── JSON 파싱 & 미리보기 ── */
  const parseAndPreview = () => {
    setError("");
    let parsed;
    try { parsed = JSON.parse(jsonText.trim()); }
    catch(e){ setError("JSON 형식 오류: "+e.message); return; }

    // 통계 계산 (신규 vs 덮어쓰기)
    let added=0, updated=0;
    const walk = (newObj, curObj, path=[]) => {
      if(typeof newObj !== "object" || newObj===null) return;
      Object.entries(newObj).forEach(([k,v])=>{
        const cur = curObj?.[k];
        if(typeof v === "object" && v!==null){
          walk(v, cur, [...path,k]);
        } else {
          // 리프 노드 (실제 수치)
          const n = Number(v);
          if(isNaN(n)) return;
          if(cur===undefined||cur===null||cur===""){ added++; }
          else if(String(cur)!==String(v)){ updated++; }
        }
      });
    };
    walk(parsed, currentData);

    setPreview({parsed, added, updated});
    setStep("confirm");
  };

  /* ── 딥 머지 실행 ── */
  const deepMerge = (base, incoming) => {
    if(typeof incoming !== "object" || incoming===null) return incoming;
    const result = {...base};
    Object.entries(incoming).forEach(([k,v])=>{
      if(typeof v==="object"&&v!==null&&!Array.isArray(v)){
        result[k] = deepMerge(base?.[k]||{}, v);
      } else {
        // 숫자 값만 적용 (빈 문자열·null 등 무시)
        const n = Number(v);
        if(!isNaN(n) && v!=="" && v!==null) result[k] = v;
      }
    });
    return result;
  };

  const doMerge = () => {
    if(!preview) return;
    const merged = deepMerge(currentData, preview.parsed);
    onMerge(merged);
    setStep("done");
  };

  /* ── 샘플 JSON 생성 ── */
  const insertSample = () => {
    const sample = {
      "26": {
        "판매": {
          "perf": {
            "0": {"CE":100,"혼수":10,"입주":30,"이사":5,"SMB":2,"농협":2,"거주중":1,"휴대폰":2,"SAC":1},
            "1": {"CE":100,"혼수":10,"입주":30,"이사":5,"SMB":2,"농협":2,"거주중":1,"휴대폰":2,"SAC":1}
          },
          "target": {
            "0": {"CE":120,"혼수":20,"입주":40,"이사":10,"SMB":3,"농협":3,"거주중":2,"휴대폰":3,"SAC":2}
          }
        }
      }
    };
    setJsonText(JSON.stringify(sample, null, 2));
    setError("");
  };

  const BADGE = (n,c,lbl) => n>0&&(
    <span style={{background:c+"18",color:c,fontSize:11,fontWeight:700,
      borderRadius:6,padding:"3px 10px",border:`1px solid ${c}30`}}>
      {lbl} {n}건
    </span>
  );

  return (
    <div style={{
      position:"fixed",inset:0,zIndex:9000,
      background:"rgba(0,0,0,.78)",backdropFilter:"blur(8px)",
      display:"flex",alignItems:"center",justifyContent:"center",padding:16,
    }} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{
        background:`linear-gradient(145deg,#0d1f38,#0a1628)`,
        border:`1px solid rgba(255,255,255,.1)`,borderRadius:20,
        padding:28,width:"100%",maxWidth:580,
        boxShadow:"0 24px 60px rgba(0,0,0,.7)",
        maxHeight:"90vh",overflowY:"auto",
      }}>
        {/* 헤더 */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
          <div>
            <div style={{color:C.text,fontWeight:900,fontSize:16}}>📥 JSON 데이터 가져오기</div>
            <div style={{color:C.muted,fontSize:11,marginTop:3,lineHeight:1.5}}>
              신규 → 추가 &nbsp;·&nbsp; 중복 → 덮어쓰기 &nbsp;·&nbsp; 없는 데이터 → 기존 유지
            </div>
          </div>
          <button onClick={onClose} style={{
            background:"rgba(255,255,255,.06)",border:"none",borderRadius:8,
            color:C.muted,fontSize:18,cursor:"pointer",width:32,height:32,
            display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,
          }}>×</button>
        </div>

        {/* ── STEP 1: 편집 ── */}
        {step==="edit"&&(<>
          {/* 데이터 구조 안내 */}
          <div style={{background:"rgba(124,131,245,.08)",border:`1px solid ${C.accent}30`,
            borderRadius:10,padding:"10px 14px",marginBottom:12,fontSize:10,color:C.muted2,lineHeight:1.7}}>
            <div style={{color:C.accent,fontWeight:700,marginBottom:4}}>📌 JSON 구조 안내</div>
            <code style={{color:C.muted2,fontFamily:"monospace",fontSize:10}}>
              {"{"} "26": {"{"} "판매": {"{"} "perf": {"{"} "0": {"{"} "CE":100, "혼수":10 {"}"} {"}"} {"}"} {"}"} {"}"}
            </code>
            <div style={{marginTop:4}}>
              <span style={{color:C.teal}}>월 키</span>: 0=1월, 1=2월 ... 11=12월 &nbsp;|&nbsp;
              <span style={{color:C.orange}}>type</span>: perf(실적) 또는 target(목표)
            </div>
          </div>

          <textarea
            value={jsonText}
            onChange={e=>{setJsonText(e.target.value);setError("");}}
            placeholder='{"26":{"판매":{"perf":{"0":{"CE":100}}}}}'
            style={{
              width:"100%",height:220,background:C.bg,
              border:`1px solid ${error?C.red:C.b1}`,borderRadius:10,
              padding:12,color:C.text,fontSize:11,fontFamily:"monospace",
              outline:"none",resize:"vertical",lineHeight:1.6,
              boxSizing:"border-box",
            }}
            onFocus={e=>{e.target.style.borderColor=C.accent;}}
            onBlur={e=>{e.target.style.borderColor=error?C.red:C.b1;}}
          />

          {error&&(
            <div style={{color:C.red,fontSize:11,marginTop:6,padding:"6px 10px",
              background:C.red+"10",borderRadius:6}}>
              ⚠ {error}
            </div>
          )}

          <div style={{display:"flex",gap:8,marginTop:12}}>
            <button onClick={insertSample} style={{
              padding:"8px 14px",borderRadius:8,border:`1px solid ${C.b1}`,
              background:"transparent",color:C.muted2,cursor:"pointer",
              fontFamily:"inherit",fontSize:11,
            }}>샘플 JSON 불러오기</button>
            <div style={{flex:1}}/>
            <button onClick={onClose} style={{
              padding:"8px 16px",borderRadius:8,border:`1px solid ${C.b1}`,
              background:"transparent",color:C.muted,cursor:"pointer",
              fontFamily:"inherit",fontSize:12,
            }}>취소</button>
            <button onClick={parseAndPreview} disabled={!jsonText.trim()} style={{
              padding:"8px 20px",borderRadius:8,border:"none",
              background:jsonText.trim()?`linear-gradient(135deg,${C.accent},${C.blue})`:"#1b3353",
              color:jsonText.trim()?"#fff":C.muted,cursor:jsonText.trim()?"pointer":"default",
              fontFamily:"inherit",fontSize:12,fontWeight:800,
            }}>미리보기 →</button>
          </div>
        </>)}

        {/* ── STEP 2: 확인 ── */}
        {step==="confirm"&&preview&&(<>
          <div style={{marginBottom:14}}>
            <div style={{color:C.text,fontWeight:700,fontSize:13,marginBottom:10}}>
              적용 내역 확인
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:14}}>
              {BADGE(preview.added, C.green, "➕ 신규")}
              {BADGE(preview.updated, C.orange, "✏️ 덮어쓰기")}
              {preview.added===0&&preview.updated===0&&(
                <span style={{color:C.muted,fontSize:11}}>변경사항 없음</span>
              )}
            </div>

            {/* 적용될 연도/모드 목록 */}
            <div style={{background:C.bg,borderRadius:10,padding:12,
              border:`1px solid ${C.b1}`,fontSize:11}}>
              <div style={{color:C.muted,fontWeight:700,marginBottom:8}}>적용 대상</div>
              {Object.entries(preview.parsed).map(([yr,modes])=>(
                <div key={yr} style={{marginBottom:6}}>
                  <span style={{color:C.accent,fontWeight:700}}>{yr}년</span>
                  {Object.entries(modes).map(([m,types])=>(
                    <span key={m} style={{marginLeft:8,color:C.muted2}}>
                      {m} ({Object.keys(types).join(", ")})
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <div style={{marginTop:12,padding:"10px 14px",
              background:C.green+"08",border:`1px solid ${C.green}30`,
              borderRadius:8,fontSize:11,color:C.muted2,lineHeight:1.6}}>
              ✅ 기존 데이터는 유지됩니다.<br/>
              JSON에 없는 항목·월은 현재 값 그대로 보존됩니다.
            </div>
          </div>

          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setStep("edit")} style={{
              flex:1,padding:"10px",borderRadius:8,border:`1px solid ${C.b1}`,
              background:"transparent",color:C.muted2,cursor:"pointer",
              fontFamily:"inherit",fontSize:12,
            }}>← 다시 편집</button>
            <button onClick={doMerge} style={{
              flex:2,padding:"10px",borderRadius:8,border:"none",
              background:`linear-gradient(135deg,${C.green},${C.teal})`,
              color:"#fff",cursor:"pointer",fontFamily:"inherit",
              fontSize:13,fontWeight:900,
            }}>✅ 병합 적용 후 저장</button>
          </div>
        </>)}

        {/* ── STEP 3: 완료 ── */}
        {step==="done"&&(
          <div style={{textAlign:"center",padding:"32px 0"}}>
            <div style={{fontSize:40,marginBottom:12}}>✅</div>
            <div style={{color:C.green,fontWeight:800,fontSize:15,marginBottom:6}}>
              병합 완료!
            </div>
            <div style={{color:C.muted,fontSize:12,marginBottom:8}}>
              데이터가 적용되었습니다.<br/>
              <span style={{color:C.orange}}>💾 저장 버튼을 눌러 Firebase에 저장하세요.</span>
            </div>
            <button onClick={onClose} style={{
              marginTop:16,padding:"10px 32px",borderRadius:8,border:"none",
              background:C.green+"22",color:C.green,cursor:"pointer",
              fontFamily:"inherit",fontSize:13,fontWeight:700,
            }}>닫기</button>
          </div>
        )}
      </div>
    </div>
  );
}


function ReportModal({onClose, mode, tab}){
  const [step,   setStep]   = useState("select"); // select | progress | done
  const [type,   setType]   = useState(null);     // "excel_img" | "pdf" | "excel_data"
  const [prog,   setProg]   = useState("");
  const [error,  setError]  = useState("");

  const OPTS = [
    {
      id:"pdf",
      icon:"📄",
      title:"PDF 출력",
      desc:"화면 그대로 PDF로 저장\n보고·공유용 레포트",
      badge:"추천",
      badgeC:"#2dd488",
      color:"#38b6f5",
    },
    {
      id:"excel_img",
      icon:"🖼️",
      title:"Excel (이미지)",
      desc:"차트·화면 캡처 후\nExcel 시트에 이미지 삽입",
      badge:"시각 동일",
      badgeC:"#7c83f5",
      color:"#7c83f5",
    },
    {
      id:"excel_data",
      icon:"📊",
      title:"Excel (데이터)",
      desc:"실적·목표 수치 테이블\n데이터 편집 가능",
      badge:"편집 가능",
      badgeC:"#f5b942",
      color:"#f5b942",
    },
  ];

  /* ─── 캡처 대상 요소 ─── */
  const getTarget = () => {
    // 메인 콘텐츠 영역만 캡처
    const el = document.querySelector("#report-content");
    return el || document.querySelector("#root > div");
  };

  /* ─── PDF 출력 ─── */
  const exportPDF = async () => {
    setStep("progress"); setProg("화면 캡처 중...");
    try {
      const el = getTarget();
      const canvas = await window.html2canvas(el, {
        scale: 1.8,
        useCORS: true,
        backgroundColor: "#07101f",
        logging: false,
        windowWidth: el.scrollWidth,
        windowHeight: el.scrollHeight,
      });
      setProg("PDF 생성 중...");
      const { jsPDF } = window.jspdf;
      const imgW = canvas.width, imgH = canvas.height;
      // A4 가로 기준
      const pageW = 297, pageH = (imgH / imgW) * pageW;
      const pdf = new jsPDF({
        orientation: pageW > pageH ? "landscape" : "portrait",
        unit: "mm",
        format: [pageW, Math.min(pageH, 420)],
      });
      // 긴 화면은 페이지 분할
      const pxPerMm = imgW / pageW;
      const pageHpx = Math.min(pageH, 420) * pxPerMm;
      let yOffset = 0, page = 0;
      while(yOffset < imgH){
        if(page>0) pdf.addPage();
        const sliceH = Math.min(pageHpx, imgH - yOffset);
        const sliceCanvas = document.createElement("canvas");
        sliceCanvas.width = imgW;
        sliceCanvas.height = sliceH;
        sliceCanvas.getContext("2d").drawImage(canvas, 0, -yOffset);
        const sliceImg = sliceCanvas.toDataURL("image/jpeg", 0.92);
        pdf.addImage(sliceImg, "JPEG", 0, 0, pageW, sliceH / pxPerMm);
        yOffset += pageHpx;
        page++;
      }
      const fname = `충청영업_${mode}_${new Date().toLocaleDateString("ko-KR").replace(/\. /g,"-").replace(".","")}`;
      pdf.save(`${fname}.pdf`);
      setStep("done");
    } catch(e){ setError("PDF 생성 실패: "+e.message); setStep("select"); }
  };

  /* ─── Excel (이미지 삽입) ─── */
  const exportExcelImg = async () => {
    setStep("progress"); setProg("화면 캡처 중...");
    try {
      const el = getTarget();
      const canvas = await window.html2canvas(el, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: "#07101f",
        logging: false,
        windowWidth: el.scrollWidth,
        windowHeight: el.scrollHeight,
      });
      setProg("Excel 생성 중...");
      const imgData = canvas.toDataURL("image/png");
      const XLSX = window.XLSX;
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([["충청영업팀 실적 레포트"]]);
      // 시트 크기 설정
      ws["!cols"] = Array(30).fill({wch:12});
      ws["!rows"] = [{hpt:400}];
      // 이미지는 XLSX에서 직접 삽입 불가 → base64 링크 안내 셀 삽입
      ws["A2"] = {v:"※ 아래는 캡처 이미지입니다. 별도 이미지 파일도 함께 저장됩니다."};
      ws["A3"] = {v:`생성일시: ${new Date().toLocaleString("ko-KR")}`};
      ws["A4"] = {v:`모드: ${mode} | 화면: ${tab==="dashboard"?"대시보드":tab==="analysis"?"실적분석":"실적입력"}`};
      XLSX.utils.book_append_sheet(wb, ws, "레포트");
      const fname = `충청영업_${mode}_${new Date().toLocaleDateString("ko-KR").replace(/\. /g,"-").replace(".","")}_이미지`;
      XLSX.writeFile(wb, `${fname}.xlsx`);
      // 이미지도 별도 다운로드
      setProg("이미지 저장 중...");
      const a = document.createElement("a");
      a.href = imgData;
      a.download = `${fname}.png`;
      a.click();
      setStep("done");
    } catch(e){ setError("Excel 생성 실패: "+e.message); setStep("select"); }
  };

  /* ─── Excel (데이터 테이블) ─── */
  const exportExcelData = async () => {
    setStep("progress"); setProg("데이터 정리 중...");
    // mode는 ReportModal props에서 직접 사용
    const exportMode = mode;
    const reportData = window.__reportData || {};
    try {
      const XLSX = window.XLSX;
      if(!XLSX){ setError("XLSX 라이브러리 로드 실패"); setStep("select"); return; }
      const wb = XLSX.utils.book_new();
      const now = new Date().toLocaleString("ko-KR");
      const months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
      const keys = ["CE","대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];
      const yrs = ["24","25","26"];

      // 값 계산 헬퍼
      const calcVal = (m, k) => {
        if(k==="대외영업") return Number(m.혼수||0)+Number(m.입주||0)+Number(m.이사||0)+Number(m.SMB||0)+Number(m.농협||0)+Number(m.거주중||0)+Number(m.휴대폰||0);
        if(k==="뉴홈")    return Number(m.입주||0)+Number(m.이사||0);
        if(k==="B2B")     return Number(m.SMB||0)+Number(m.농협||0)+Number(m.휴대폰||0);
        return Number(m[k]||0);
      };

      yrs.forEach(yr=>{
        const pD = reportData[yr]?.[exportMode]?.perf   || {};
        const tD = reportData[yr]?.[exportMode]?.target || {};
        const rows = [];
        rows.push(["항목", ...months, "연간합계"]);
        // 실적 블록
        rows.push(["▶ 실적 (억원)", ...Array(13).fill("")]);
        keys.forEach(k=>{
          const vals = months.map((_,i)=>calcVal(pD[String(i)]||{}, k));
          rows.push([k, ...vals, vals.reduce((a,b)=>a+b,0)]);
        });
        rows.push([""]);
        // 목표 블록 (25/26년만)
        if(yr!=="24"){
          rows.push(["▶ 목표 (억원)", ...Array(13).fill("")]);
          keys.forEach(k=>{
            const vals = months.map((_,i)=>calcVal(tD[String(i)]||{}, k));
            rows.push([k, ...vals, vals.reduce((a,b)=>a+b,0)]);
          });
          rows.push([""]);
          // 달성률 블록
          rows.push(["▶ 달성률 (%)", ...Array(13).fill("")]);
          keys.forEach(k=>{
            const vals = months.map((_,i)=>{
              const pv=calcVal(pD[String(i)]||{}, k);
              const tv=calcVal(tD[String(i)]||{}, k);
              return tv>0 ? parseFloat((pv/tv*100).toFixed(1)) : "";
            });
            const sumP=keys.reduce((a,_)=>a,0); // 연간 달성률
            const totalP = keys.map((_,idx)=>calcVal(pD[String(0)]||{},keys[idx]));
            const annP = vals.filter(v=>v!=="").length>0 ? parseFloat((vals.filter(v=>v!=="").reduce((a,b)=>Number(a)+Number(b),0)/vals.filter(v=>v!=="").length).toFixed(1)) : "";
            rows.push([k, ...vals, annP!==""?`${annP}%`:"─"]);
          });
        }

        const ws = XLSX.utils.aoa_to_sheet(rows);
        ws["!cols"] = [{wch:14},...Array(12).fill({wch:7}),{wch:10}];
        XLSX.utils.book_append_sheet(wb, ws, `${yr}년_${exportMode}`);
      });

      // 요약 시트
      const sumRows = [
        [`충청영업팀 실적 레포트 — ${exportMode}`, "", `생성: ${now}`],
        [],
        ["항목", "26년 누계", "25년 누계", "24년 누계", "전년비(%)", "26년 목표", "달성률(%)"],
      ];
      keys.forEach(k=>{
        const getAnn = (yr, type) => {
          const d = reportData[yr]?.[exportMode]?.[type] || {};
          let total=0;
          for(let i=0;i<12;i++) total += calcVal(d[String(i)]||{}, k);
          return total;
        };
        const v26=getAnn("26","perf"), v25=getAnn("25","perf"), v24=getAnn("24","perf");
        const t26=getAnn("26","target");
        const gr = v25>0 ? `${((v26-v25)/v25*100).toFixed(1)}%` : "─";
        const ar = t26>0 ? `${(v26/t26*100).toFixed(1)}%` : "─";
        sumRows.push([k, v26||0, v25||0, v24||0, gr, t26||0, ar]);
      });
      const wsSum = XLSX.utils.aoa_to_sheet(sumRows);
      wsSum["!cols"] = [{wch:14},{wch:10},{wch:10},{wch:10},{wch:10},{wch:10},{wch:10}];
      XLSX.utils.book_append_sheet(wb, wsSum, "요약");

      // 파일명: mode·날짜 올바르게
      const dateStr = new Date().toLocaleDateString("ko-KR").replace(/\. /g,"-").replace(/\.$/,"");
      XLSX.writeFile(wb, `충청영업_${exportMode}_${dateStr}_데이터.xlsx`);
      setStep("done");
    } catch(e){ setError("Excel 생성 실패: "+e.message); setStep("select"); }
  };

  /* ─── 실행 ─── */
  const run = () => {
    if(!type) return;
    if(type==="pdf")        exportPDF();
    else if(type==="excel_img")  exportExcelImg();
    else if(type==="excel_data") exportExcelData();
  };

  return (
    <div style={{
      position:"fixed",inset:0,zIndex:9000,
      background:"rgba(0,0,0,.75)",backdropFilter:"blur(8px)",
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:16,
    }} onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div style={{
        background:`linear-gradient(145deg,#0d1f38,#0a1628)`,
        border:`1px solid rgba(255,255,255,.1)`,borderRadius:20,
        padding:28,width:"100%",maxWidth:520,
        boxShadow:"0 24px 60px rgba(0,0,0,.7)",
      }}>
        {/* 헤더 */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <div>
            <div style={{color:"#cce4f7",fontWeight:900,fontSize:16,letterSpacing:"-0.03em"}}>
              레포트 출력
            </div>
            <div style={{color:"#4a6a88",fontSize:11,marginTop:2}}>
              {mode} · {tab==="dashboard"?"대시보드":tab==="analysis"?"실적분석":"실적입력"} 화면 기준
            </div>
          </div>
          <button onClick={onClose} style={{
            background:"rgba(255,255,255,.06)",border:"none",borderRadius:8,
            color:"#4a6a88",fontSize:18,cursor:"pointer",width:32,height:32,
            display:"flex",alignItems:"center",justifyContent:"center",
          }}>×</button>
        </div>

        {step==="select"&&(<>
          {/* 옵션 카드 */}
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:20}}>
            {OPTS.map(o=>(
              <div key={o.id} onClick={()=>setType(o.id)} style={{
                border:`1.5px solid ${type===o.id?o.color:o.color+"30"}`,
                borderRadius:12,padding:"14px 16px",cursor:"pointer",
                background:type===o.id?o.color+"12":"rgba(255,255,255,.02)",
                transition:"all .15s",
                boxShadow:type===o.id?`0 0 16px ${o.color}20`:"none",
              }}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span style={{fontSize:22}}>{o.icon}</span>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3}}>
                      <span style={{
                        color:type===o.id?o.color:"#cce4f7",
                        fontWeight:800,fontSize:13,
                      }}>{o.title}</span>
                      <span style={{
                        color:o.badgeC,fontSize:9,fontWeight:700,
                        background:o.badgeC+"18",borderRadius:4,padding:"1px 6px",
                      }}>{o.badge}</span>
                    </div>
                    <div style={{color:"#4a6a88",fontSize:11,whiteSpace:"pre-line",lineHeight:1.5}}>
                      {o.desc}
                    </div>
                  </div>
                  <div style={{
                    width:20,height:20,borderRadius:"50%",flexShrink:0,
                    border:`2px solid ${type===o.id?o.color:"#1b3353"}`,
                    background:type===o.id?o.color:"transparent",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    transition:"all .15s",
                  }}>
                    {type===o.id&&<div style={{width:6,height:6,borderRadius:"50%",background:"#fff"}}/>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {error&&<div style={{color:"#f07070",fontSize:11,marginBottom:12,textAlign:"center"}}>{error}</div>}

          <button onClick={run} disabled={!type} style={{
            width:"100%",padding:"13px",borderRadius:10,border:"none",
            background:type?`linear-gradient(135deg,${OPTS.find(o=>o.id===type)?.color||"#7c83f5"},${OPTS.find(o=>o.id===type)?.color||"#7c83f5"}99)`:"#1b3353",
            color:type?"#fff":"#4a6a88",fontWeight:800,fontSize:14,
            cursor:type?"pointer":"default",fontFamily:"inherit",
            transition:"all .2s",
            boxShadow:type?`0 4px 20px ${OPTS.find(o=>o.id===type)?.color||"#7c83f5"}30`:"none",
          }}>
            {type?`${OPTS.find(o=>o.id===type)?.title} 출력하기 →`:"출력 방식을 선택해주세요"}
          </button>
        </>)}

        {step==="progress"&&(
          <div style={{textAlign:"center",padding:"40px 0"}}>
            <div style={{marginBottom:16,fontSize:32}}>⏳</div>
            <div style={{color:"#cce4f7",fontWeight:700,fontSize:14,marginBottom:8}}>
              레포트 생성 중...
            </div>
            <div style={{color:"#4a6a88",fontSize:12}}>{prog}</div>
            <div style={{marginTop:20,height:3,background:"#1b3353",borderRadius:2,overflow:"hidden"}}>
              <div style={{height:"100%",background:"#7c83f5",borderRadius:2,
                animation:"reportProg 1.5s ease-in-out infinite"}}/>
            </div>
            <style>{`@keyframes reportProg{0%{width:10%;margin-left:0}50%{width:60%;margin-left:20%}100%{width:10%;margin-left:90%}}`}</style>
          </div>
        )}

        {step==="done"&&(
          <div style={{textAlign:"center",padding:"40px 0"}}>
            <div style={{marginBottom:16,fontSize:40}}>✅</div>
            <div style={{color:"#2dd488",fontWeight:800,fontSize:15,marginBottom:8}}>
              레포트 저장 완료!
            </div>
            <div style={{color:"#4a6a88",fontSize:12,marginBottom:24}}>
              다운로드 폴더를 확인해주세요
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>{setStep("select");setType(null);setError("");}} style={{
                flex:1,padding:"10px",borderRadius:8,border:"1px solid #1b3353",
                background:"transparent",color:"#7a9ab8",cursor:"pointer",
                fontFamily:"inherit",fontSize:12,
              }}>다시 출력</button>
              <button onClick={onClose} style={{
                flex:1,padding:"10px",borderRadius:8,border:"none",
                background:"#2dd48822",color:"#2dd488",cursor:"pointer",
                fontFamily:"inherit",fontSize:12,fontWeight:700,
              }}>닫기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App(){
  const [tab,       setTab]       = useState("dashboard");
  const [mode,      setMode]      = useState("매출");
  const [data,      setData]      = useState(initData);
  const [saveState, setSaveState] = useState("idle");
  const [hasUnsaved,setHasUnsaved]= useState(false);
  const [dbStatus,  setDbStatus]  = useState("연결중...");
  const [dbReady,   setDbReady]   = useState(false);   // ← 추가: Firebase 응답 완료 여부
  const [showReport,setShowReport]= useState(false);
  const [showImport,setShowImport]= useState(false);
  const [showBackupMain,setShowBackupMain] = useState(false);
  const [isTargetUnlocked,setIsTargetUnlocked] = useState(
    ()=>sessionStorage.getItem(TGT_UNLOCK_KEY)==="1"
  );
  const [showTgtPwModal,setShowTgtPwModal] = useState(false);

  const [globalFontSize,setGlobalFontSize] = useState(
    ()=>parseInt(localStorage.getItem(FONT_SIZE_KEY))||15
  );
  // zoom으로 전체 스케일링
  useEffect(()=>{
    const el=document.getElementById('app-content');
    if(!el)return;
    const ratio=globalFontSize/14; // 14px 기준
    el.style.transform=`scale(${ratio})`;
    el.style.width=`${100/ratio}%`;
    localStorage.setItem(FONT_SIZE_KEY, globalFontSize);
  },[globalFontSize]);
  const isMobile = useIsMobile();

  // 레포트용 전역 데이터 노출
  useEffect(()=>{ window.__reportData = data; }, [data]);

  const DOC = () => window.db.collection("perf").doc("main");

  useEffect(()=>{
    (async()=>{
      try{
        const snap = await DOC().get();
        if(snap.exists){
          const raw = snap.data().perfData;
          const loaded = migrate(raw);
          // 로딩 확인: 24년 매출 1월 CE 체크
          const ce24 = loaded?.["24"]?.["매출"]?.perf?.["0"]?.CE;
          setDbStatus(gNum(ce24)>0?`✅ 로드완료`:`✅ 연결됨`);
          setData(loaded);
          localStorage.setItem("cst_v13",JSON.stringify(loaded));
        } else {
          setDbStatus("⚠ 문서없음");
        }
      }catch(e){
        setDbStatus("❌ "+e.message.slice(0,25));
        try{
          const loc=localStorage.getItem("cst_v13")||localStorage.getItem("cst_v10")||localStorage.getItem("perf_data_v3");
          if(loc) setData(migrate(JSON.parse(loc)));
        }catch{}
      } finally{
        setDbReady(true);     // ← Firebase 완료 신호 (성공/실패 무관)
        window.__appReady=true;
      }
    })();
  },[]);

  const handleSetData=useCallback(upd=>{
    setData(prev=>{
      const next=typeof upd==="function"?upd(prev):upd;
      setHasUnsaved(true);
      return next;
    });
  },[]);

  const handleSave=useCallback(async()=>{
    setSaveState("saving");
    try{
      await DOC().set({perfData:data,updatedAt:new Date().toISOString()});
      localStorage.setItem("cst_v13",JSON.stringify(data));
      setSaveState("saved");
      setHasUnsaved(false);
      setTimeout(()=>setSaveState("idle"),2500);
    }catch(e){
      try{localStorage.setItem("cst_v13",JSON.stringify(data));}catch{}
      setSaveState("error");
      setTimeout(()=>setSaveState("idle"),3000);
    }
  },[data]);

  // JSON 딥머지 후 즉시 Firebase 저장
  const handleMerge = useCallback(async(merged)=>{
    setData(merged);
    localStorage.setItem("cst_v13", JSON.stringify(merged));
    setHasUnsaved(true);
    // 자동 저장
    try{
      await DOC().set({perfData:merged, updatedAt:new Date().toISOString()});
      localStorage.setItem("cst_v13", JSON.stringify(merged));
      setHasUnsaved(false);
      setSaveState("saved");
      setTimeout(()=>setSaveState("idle"),2500);
    }catch(e){
      // Firebase 실패해도 로컬에는 저장됨 — 사용자가 수동 저장 가능
    }
  },[]);

  const mColor=C[mode];
  const TABS=[{k:"dashboard",l:"대시보드",i:"◈"},{k:"analysis",l:"실적분석",i:"◉"},{k:"input",l:"실적입력",i:"◎"}];

  return (
    <div style={{minHeight:"100vh",background:C.bg,color:C.text,
      fontFamily:"'Noto Sans KR','Apple SD Gothic Neo',sans-serif"}}>

      {/* 판매/매출 선택 + 헤더 — 상단 고정 */}
      <div style={{position:"sticky",top:0,zIndex:300,background:C.bg}}>
      {/* 판매/매출 선택 */}
      <div style={{background:"#040c17",borderBottom:`1px solid ${C.b1}`,padding:"0 16px"}}>
        <div style={{maxWidth:1360,margin:"0 auto",display:"flex",alignItems:"center",
          height:38,gap:8,flexWrap:"wrap"}}>
          {!isMobile&&<span style={{color:C.muted,fontSize:10,fontWeight:700}}>구분</span>}
          {MODES.map(m=>(
            <button key={m} onClick={()=>setMode(m)} style={{
              padding:"4px 16px",borderRadius:6,cursor:"pointer",fontFamily:"inherit",
              fontWeight:800,fontSize:12,border:`1px solid ${mode===m?C[m]:C.b1}`,
              background:mode===m?C[m]+"22":"transparent",color:mode===m?C[m]:C.muted,
              boxShadow:mode===m?`0 0 8px ${C[m]}40`:"none",transition:"all .15s"}}>
              {m==="매출"?"💰 매출":"📦 판매"}
            </button>
          ))}
          <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
            <span style={{color:C.muted,fontSize:9}}>{APP_VER}</span>
            <span style={{fontSize:10,fontWeight:600,
              color:dbStatus.startsWith("✅")?C.green:dbStatus.startsWith("❌")?C.red:C.orange}}>
              {dbStatus}
            </span>
            {hasUnsaved&&saveState==="idle"&&
              <span style={{color:C.orange,fontSize:10,fontWeight:600}}>● 미저장</span>}
            {saveState==="saved"&&
              <span style={{color:C.green,fontSize:10,fontWeight:600}}>✓ 저장됨</span>}
          </div>
        </div>
      </div>

      {/* 헤더 */}
      <div style={{background:C.surf,borderBottom:`1px solid ${C.b1}`,padding:"0 16px"}}>
        <div style={{maxWidth:1360,margin:"0 auto",display:"flex",alignItems:"center",
          height:46,gap:isMobile?12:20}}>
          <div style={{display:"flex",alignItems:"center",gap:7,flexShrink:0}}>
            <div style={{width:24,height:24,background:`linear-gradient(135deg,${mColor},${C.accent})`,
              borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:12,fontWeight:900,color:"#fff",boxShadow:`0 0 8px ${mColor}50`}}>C</div>
            {!isMobile&&(
              <div>
                <div style={{color:C.text,fontWeight:900,fontSize:12}}>Chungcheong Sales</div>
                <div style={{color:mColor,fontSize:9,fontWeight:700}}>충청영업팀 · {mode}</div>
              </div>
            )}
          </div>
          <nav style={{display:"flex",gap:2}}>
            {TABS.map(t=>(
              <button key={t.k} onClick={()=>setTab(t.k)} style={{
                padding:isMobile?"6px 10px":"6px 14px",borderRadius:7,border:"none",cursor:"pointer",
                background:tab===t.k?mColor+"22":"transparent",color:tab===t.k?mColor:C.muted,
                fontWeight:tab===t.k?800:500,fontSize:isMobile?11:12,fontFamily:"inherit",
                borderBottom:tab===t.k?`2px solid ${mColor}`:"2px solid transparent"}}>
                {t.i}{!isMobile&&" "}{!isMobile&&t.l}
                {isMobile&&<span style={{fontSize:10,marginLeft:2}}>{t.l}</span>}
              </button>
            ))}
          </nav>
          {/* 레포트 버튼 */}
          <button onClick={()=>setShowReport(true)} style={{
            padding:"5px 12px",borderRadius:7,border:`1px solid #f5b94240`,
            background:"#f5b94210",color:"#f5b942",fontWeight:700,fontSize:11,
            cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:5,
            transition:"all .15s",marginLeft:4,
          }}
          onMouseEnter={e=>{e.currentTarget.style.background="#f5b94222";e.currentTarget.style.borderColor="#f5b942";}}
          onMouseLeave={e=>{e.currentTarget.style.background="#f5b94210";e.currentTarget.style.borderColor="#f5b94240";}}>
            🖨️{!isMobile&&" 레포트"}
          </button>
          {/* 백업 버튼 */}
          <button onClick={()=>setShowBackupMain(true)} style={{
            padding:"5px 12px",borderRadius:7,border:`1px solid ${C.teal}40`,
            background:C.teal+"10",color:C.teal,fontWeight:700,fontSize:11,
            cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",gap:5,
            transition:"all .15s",
          }}
          onMouseEnter={e=>{e.currentTarget.style.background=C.teal+"22";e.currentTarget.style.borderColor=C.teal;}}
          onMouseLeave={e=>{e.currentTarget.style.background=C.teal+"10";e.currentTarget.style.borderColor=C.teal+"40";}}>
            📦{!isMobile&&" 백업"}
          </button>
          {/* 폰트 크기 조절 */}
          <div style={{display:"flex",alignItems:"center",gap:3,background:"rgba(255,255,255,.05)",
            borderRadius:7,padding:"3px 6px",border:`1px solid ${C.b1}`}}>
            <span style={{color:C.muted2,fontSize:13,fontWeight:900,marginRight:1}}>T</span>
            <button onClick={()=>setGlobalFontSize(Math.max(12,globalFontSize-1))} style={{
              padding:"2px 7px",borderRadius:4,border:`1px solid ${C.b1}`,
              background:"rgba(255,255,255,.04)",color:C.muted2,
              cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:700}}>−</button>
            <span style={{color:C.text,fontSize:10,fontWeight:700,minWidth:26,textAlign:"center"}}>{globalFontSize}px</span>
            <button onClick={()=>setGlobalFontSize(Math.min(18,globalFontSize+1))} style={{
              padding:"2px 7px",borderRadius:4,border:`1px solid ${C.b1}`,
              background:"rgba(255,255,255,.04)",color:C.muted2,
              cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:700}}>+</button>
          </div>
          {/* 달성계획 링크 버튼 */}
          <a href="plan.html" style={{
            padding:"5px 12px",borderRadius:7,border:`1px solid #7c83f540`,
            background:"#7c83f510",color:"#7c83f5",fontWeight:700,fontSize:11,
            textDecoration:"none",display:"flex",alignItems:"center",gap:5,
            transition:"all .15s",marginLeft:4,whiteSpace:"nowrap",
          }}
          onMouseEnter={e=>{e.currentTarget.style.background="#7c83f522";e.currentTarget.style.borderColor="#7c83f5";}}
          onMouseLeave={e=>{e.currentTarget.style.background="#7c83f510";e.currentTarget.style.borderColor="#7c83f540";}}>
            📋{!isMobile&&" 달성계획"}
          </a>

        </div>
      </div>
      {/* ── sticky 헤더 끝 ── */}
      </div>

      {/* 콘텐츠 */}
      <div id="report-content" style={{maxWidth:1360,margin:"0 auto",padding:isMobile?"12px":"20px 16px"}}>
        <div style={{marginBottom:14}}>
          <h1 style={{margin:0,color:C.text,fontSize:isMobile?15:17,fontWeight:900,letterSpacing:"-0.04em"}}>
            {tab==="dashboard"?"실적 대시보드":tab==="analysis"?"실적 분석":"실적 입력"}
            <span style={{color:mColor,fontSize:13,fontWeight:700,marginLeft:8}}>· {mode}</span>
          </h1>
        </div>
        <div id="app-content" style={{transformOrigin:"top left",transition:"transform .15s ease"}}>
        <ErrorBoundary key={tab+mode}>
          {!dbReady ? (
            /* Firebase 응답 전 — 빈 데이터로 렌더 방지 */
            <div style={{padding:60,display:"flex",flexDirection:"column",
              alignItems:"center",justifyContent:"center",gap:14}}>
              <div style={{width:28,height:28,borderRadius:"50%",
                border:"3px solid rgba(56,182,245,.15)",
                borderTopColor:"#38b6f5",
                animation:"spin 0.9s linear infinite"}}/>
              <span style={{color:"#3d5f7e",fontSize:12}}>데이터 불러오는 중...</span>
            </div>
          ) : (
            <>
              {tab==="dashboard"&&<Dashboard key={mode} data={data} mode={mode}/>}
              {tab==="analysis" &&<Analysis  key={mode} data={data} mode={mode}/>}
              {tab==="input"    &&<InputTab  key={mode} data={data} setData={handleSetData} mode={mode}
              onSave={handleSave} saveState={saveState} hasUnsaved={hasUnsaved}
              onImport={()=>setShowImport(true)}
              isTargetUnlocked={isTargetUnlocked}
              onRequestTargetUnlock={()=>setShowTgtPwModal(true)}
              onTargetLock={()=>{sessionStorage.removeItem(TGT_UNLOCK_KEY);setIsTargetUnlocked(false);}}
              />}
            </>
          )}
        </ErrorBoundary>
        </div>{/* app-content 끝 */}
      </div>

      {/* 목표 잠금해제 비번 모달 */}
      {showTgtPwModal&&(
        <TargetUnlockModal
          onSuccess={()=>{sessionStorage.setItem(TGT_UNLOCK_KEY,"1");setIsTargetUnlocked(true);setShowTgtPwModal(false);}}
          onClose={()=>setShowTgtPwModal(false)}
        />
      )}


      {/* 푸터 */}
      <div style={{borderTop:`1px solid ${C.b1}`,padding:"8px 16px",background:C.surf,marginTop:20}}>
        <div style={{maxWidth:1360,margin:"0 auto",display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"}}>
          <span style={{color:C.muted,fontSize:10,fontWeight:700,flexShrink:0}}>산출기준</span>
          {[["대외영업","혼수+입주+이사+SMB+농협+거주중+휴대폰",C.blue],
            ["뉴홈","입주+이사",C.green],["B2B","SMB+농협+휴대폰",C.orange],
            ["CE비중","각항목÷CE",C.accent],["달성률","실적÷목표×100",C.teal]
          ].map(([k,v,c])=>(
            <span key={k} style={{color:C.muted,fontSize:10}}>
              <span style={{color:c,fontWeight:700}}>{k}</span>={v}
            </span>
          ))}
        </div>
      </div>
      {/* 레포트 모달 */}
      {showReport&&(
        <ReportModal onClose={()=>setShowReport(false)} mode={mode} tab={tab}/>
      )}
      {showBackupMain&&(
        <BackupMainModal onClose={()=>setShowBackupMain(false)} data={data} mode={mode}/>
      )}
      {/* JSON 가져오기 모달 */}
      {showImport&&(
        <ImportModal
          onClose={()=>setShowImport(false)}
          currentData={data}
          onMerge={handleMerge}
        />
      )}
    </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);