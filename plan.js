// ─── 충청영업팀 달성계획 시스템 (plan.js) ───────────────────────────────────
// React + Firebase + Babel 인라인 JSX
// 이 파일은 plan.html에서 type="text/babel" 로 로드됩니다.

const {useState,useEffect,useRef,useMemo}=React;

// ── ErrorBoundary
class ErrorBoundary extends React.Component {
  constructor(p){super(p);this.state={err:null};}
  static getDerivedStateFromError(e){return{err:e};}
  componentDidCatch(e,info){console.error("PlanApp 에러:",e,info);}
  render(){
    if(this.state.err) return(
      <div style={{padding:40,color:"#f07070",fontFamily:"monospace",background:"#07101f",minHeight:"100vh"}}>
        <div style={{fontSize:18,fontWeight:700,marginBottom:16}}>⚠ 렌더 오류</div>
        <pre style={{fontSize:12,whiteSpace:"pre-wrap",color:"#e8f4fd"}}>{String(this.state.err)}</pre>
        <button onClick={()=>this.setState({err:null})}
          style={{marginTop:20,padding:"8px 20px",background:"#7c83f5",color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontSize:14}}>
          재시도
        </button>
      </div>
    );
    return this.props.children;
  }
}

// ── 상수
const MONTHS=["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
const PARTS=["대외영업","혼수","뉴홈","입주","이사","SAC","거주중","B2B","SMB","농협","휴대폰"];
const MODES=["판매","매출"];
const YRS=["26","25","24"];
const LS_PLAN="cst_plan_draft_v1";
const LS_TEXT="cst_plan_text_v1";

const KC={
  "대외영업":"#38b6f5","혼수":"#f5b942","뉴홈":"#2dd488","입주":"#34d399",
  "이사":"#60a5fa","SAC":"#c084fc","거주중":"#f472b6","B2B":"#fb923c",
  "SMB":"#facc15","농협":"#a3e635","휴대폰":"#94a3b8","CE":"#7c83f5"
};
const C={
  bg:"#07101f",surf:"#0d1b2e",card:"#0f2138",card2:"#0a1628",
  b1:"rgba(255,255,255,.08)",b2:"rgba(255,255,255,.14)",
  text:"#e8f4fd",muted:"#4a7090",muted2:"#6a9ab8",
  accent:"#7c83f5",blue:"#3b82f6",green:"#2dd488",
  orange:"#f5b942",teal:"#2dd4bf",red:"#f07070",
  판매:"#f5b942",매출:"#38b6f5",
};

const gNum=v=>parseFloat(v)||0;
const sk=i=>`${i}`;
const fmtN=v=>v>0?Math.round(v).toLocaleString()+"억":"─";
const pctC=v=>{const n=gNum(v);return n>=100?C.green:n>=80?C.orange:C.red;};
const grwC=v=>{const n=gNum(v);return n>0?C.green:n<0?C.red:C.muted2;};

function fullRow(r){
  const base={CE:0,혼수:0,입주:0,이사:0,SAC:0,거주중:0,SMB:0,농협:0,휴대폰:0};
  if(!r)return{...base,대외영업:0,뉴홈:0,B2B:0};
  const o={...base,...r};
  o.대외영업=gNum(o.혼수)+gNum(o.입주)+gNum(o.이사)+gNum(o.SAC)+gNum(o.거주중)+gNum(o.SMB)+gNum(o.농협)+gNum(o.휴대폰);
  o.뉴홈=gNum(o.입주)+gNum(o.이사);
  o.B2B=gNum(o.SMB)+gNum(o.농협)+gNum(o.휴대폰);
  return o;
}

// ── SVG 라인 차트 (범례 포함, y축 가변형)
function MiniChart({series,labels,h=240,pctMode=false,grMode=false}){
  const [tip,setTip]=useState(null);
  const W=560,PT=22,PL=46,PR=16,PB=40;
  const iH=h-PT-PB, iW=W-PL-PR;
  const allV=series.flatMap(s=>s.data.filter(v=>v!==null)).map(gNum);
  const hasData=allV.length>0;
  if(!hasData)return(
    <div style={{height:h,display:"flex",alignItems:"center",justifyContent:"center",color:C.muted,fontSize:12}}>
      데이터 없음
    </div>
  );
  const maxV=Math.max(...allV,pctMode?100:0.1);
  // y축 가변: 실적 차트는 데이터 최솟값 기준 (격차 강조)
  const rawMin=Math.min(...allV);
  const padding=(maxV-rawMin)*0.12;
  // pctMode도 데이터 기준 가변 (단, 100% 기준선 표시 유지)
  const minV=grMode?Math.min(rawMin,0):Math.max(0,rawMin-padding);
  const range=maxV-minV||1;
  const cy=v=>PT+iH*(1-(gNum(v)-minV)/range);
  const cx=i=>PL+iW*i/11;
  const smooth=pts=>{
    if(!pts.length)return"";
    let d=`M${pts[0].x},${pts[0].y}`;
    for(let i=1;i<pts.length;i++){
      const px=pts[i-1],nx=pts[i];
      const cpx=(px.x+nx.x)/2;
      d+=` C${cpx},${px.y} ${cpx},${nx.y} ${nx.x},${nx.y}`;
    }
    return d;
  };
  // Y축 눈금
  const yTicks=[0,.2,.4,.6,.8,1].map(r=>({r,v:minV+range*r}));
  return(
    <div style={{position:"relative"}}>
      {/* 범례 */}
      <div style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:10,paddingLeft:PL}}>
        {series.map((s,si)=>(
          <div key={si} style={{display:"flex",alignItems:"center",gap:6}}>
            <div style={{width:s.dash?0:18,height:0,borderTop:`${s.bold?3:2}px ${s.dash?"dashed":"solid"} ${s.color}`,opacity:s.op||1}}/>
            {s.dash&&<div style={{width:18,height:0,borderTop:`2px dashed ${s.color}`,opacity:s.op||1}}/>}
            <span style={{color:C.muted2,fontSize:11}}>{s.label}</span>
          </div>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${h}`} style={{width:"100%",height:h,overflow:"visible"}} onMouseLeave={()=>setTip(null)}>
        {/* 그리드 */}
        {yTicks.map(({r,v})=>(
          <g key={r}>
            <line x1={PL} y1={PT+iH*(1-r)} x2={W-PR} y2={PT+iH*(1-r)} stroke="rgba(255,255,255,.06)" strokeWidth={1}/>
            <text x={PL-5} y={PT+iH*(1-r)+4} fill={C.muted} fontSize={10} textAnchor="end">
              {pctMode||grMode?Math.round(v)+"%":Math.round(v)}
            </text>
          </g>
        ))}
        {grMode&&<line x1={PL} y1={cy(0)} x2={W-PR} y2={cy(0)} stroke={C.muted2} strokeWidth={1} strokeDasharray="3,2" opacity={.5}/>}
        {pctMode&&<line x1={PL} y1={cy(100)} x2={W-PR} y2={cy(100)} stroke={C.green} strokeWidth={1} strokeDasharray="4,3" opacity={.5}/>}
        {/* 데이터 라인 */}
        {series.map((s,si)=>{
          const pts=s.data.map((v,i)=>({x:cx(i),y:cy(v),v:gNum(v)})).filter((_,i)=>s.data[i]!==null);
          if(!pts.length)return null;
          const d=smooth(pts);
          const fillPath=`${d} L${pts[pts.length-1].x},${cy(Math.max(minV,0))} L${pts[0].x},${cy(Math.max(minV,0))} Z`;
          return(
            <g key={si}>
              {s.fill&&<path d={fillPath} fill={s.color} opacity={.08}/>}
              <path d={d} fill="none" stroke={s.color} strokeWidth={s.bold?2.5:1.5} strokeDasharray={s.dash?"6,3":undefined} opacity={s.op||1}/>
              {pts.map((p,pi)=>(
                <circle key={pi} cx={p.x} cy={p.y} r={s.bold?4.5:3} fill={s.color} stroke={C.bg} strokeWidth={1.5} opacity={s.op||1}/>
              ))}
              {s.showLabels&&pts.map((p,pi)=>{
                const prev=pts[pi-1];
                const goUp=!prev||p.y<prev.y;
                return(
                  <text key={pi} x={p.x} y={p.y+(goUp?-13:17)} fill={s.color} fontSize={10} fontWeight={700}
                    textAnchor={p.x<PL+35?"start":p.x>W-PR-35?"end":"middle"}
                    style={{filter:"drop-shadow(0 1px 3px rgba(0,0,0,.95))"}}>
                    {pctMode||grMode?Math.round(p.v)+"%":Math.round(p.v)}
                  </text>
                );
              })}
            </g>
          );
        })}
        {/* 툴팁 히트 영역 */}
        {labels.map((_,i)=>(
          <rect key={i} x={cx(i)-22} y={PT} width={44} height={iH} fill="transparent"
            onMouseEnter={()=>{
              const items=series.map(s=>({label:s.label,color:s.color,val:s.data[i]})).filter(it=>it.val!==null);
              setTip({mi:i,items,xi:i});
            }}/>
        ))}
        {/* X축 레이블 */}
        {labels.map((l,i)=>(
          <text key={i} x={cx(i)} y={h-8} fill={C.muted} fontSize={10} textAnchor="middle">{l}</text>
        ))}
      </svg>
      {tip&&(
        <div style={{position:"absolute",left:`${Math.min(tip.xi/11*84+4,62)}%`,top:"10%",
          background:"rgba(7,16,31,.97)",border:`1px solid ${C.b2}`,
          borderRadius:8,padding:"10px 14px",pointerEvents:"none",zIndex:10,
          boxShadow:"0 4px 16px rgba(0,0,0,.6)",minWidth:120}}>
          <div style={{color:C.muted,fontSize:10,marginBottom:5,fontWeight:700}}>{labels[tip.mi]}</div>
          {tip.items.map((it,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",gap:14,marginBottom:3}}>
              <span style={{color:C.muted2,fontSize:11}}>{it.label}</span>
              <span style={{color:it.color,fontSize:12,fontWeight:800}}>
                {pctMode||grMode?Math.round(gNum(it.val))+"%":Math.round(gNum(it.val))+"억"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({c,children}){
  return <span style={{background:c+"22",color:c,fontSize:9,fontWeight:700,
    padding:"2px 6px",borderRadius:4,border:`1px solid ${c}40`}}>{children}</span>;
}

// ── 자동 높이 textarea
function AutoTextarea({value,onChange,placeholder,minHeight=220,readOnly=false,fontSize=14,style={}}){
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current;
    if(!el)return;
    el.style.height="auto";
    el.style.height=Math.max(minHeight,el.scrollHeight)+"px";
  },[value,minHeight,fontSize]);
  return(
    <textarea ref={ref} value={value} onChange={readOnly?undefined:onChange}
      readOnly={readOnly} placeholder={readOnly?"":placeholder}
      style={{width:"100%",minHeight:minHeight,background:C.bg,
        border:`1px solid ${readOnly?"rgba(255,255,255,.12)":C.accent+"60"}`,borderRadius:8,
        padding:"14px 16px",color:C.text,fontSize:fontSize,lineHeight:1.75,
        outline:"none",resize:readOnly?"none":"vertical",overflow:"hidden",
        cursor:readOnly?"default":"text",opacity:readOnly?.85:1,
        transition:"height .1s ease, border-color .2s",...style}}/>
  );
}

// ── 리치 에디터 (툴바 포함)
function RichEditor({value,onChange,placeholder,minHeight=220,readOnly=false,fontSize=14,style={}}){
  const ref=useRef(null);

  // 일반텍스트 → HTML 변환 (구버전 데이터 호환)
  const toHTML=(v)=>{
    if(!v) return "";
    // 이미 HTML 태그가 있으면 그대로
    if(v.indexOf("<")!==-1&&v.indexOf(">")!==-1) return v;
    // 일반 텍스트: 줄바꿈을 <br>로, &<> 이스케이프
    return v
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .split("\n").join("<br>");
  };

  const lastVal=useRef(null);  // 마지막으로 설정한 외부 value
  useEffect(()=>{
    const el=ref.current;
    if(!el)return;
    // value가 외부에서 바뀌었을 때만 innerHTML 갱신 (취소/파트변경 포함)
    if(lastVal.current!==value){
      el.innerHTML=toHTML(value);
      lastVal.current=value;
    }
    el.style.height="auto";
    el.style.height=Math.max(minHeight,el.scrollHeight)+"px";
  },[value,minHeight]);

  const emit=()=>{
    const v=ref.current?.innerHTML||"";
    if(onChange) onChange({target:{value:v}});
    lastVal.current=v;  // emit 후엔 현재 HTML을 lastVal로 업데이트
  };

  // ── 선택 영역에 span 스타일 적용 (execCommand 대체)
  const applyStyle=(cssProp,cssVal)=>{
    const el=ref.current;
    if(!el) return;
    el.focus();
    const sel=window.getSelection();
    if(!sel||sel.rangeCount===0) return;
    const range=sel.getRangeAt(0);
    if(range.collapsed){
      // 선택 없을 때: 커서 위치에 span 삽입 (이후 타이핑에 적용)
      const span=document.createElement('span');
      span.style[cssProp]=cssVal;
      span.innerHTML='&#8203;'; // zero-width
      range.insertNode(span);
      range.setStart(span,1); range.setEnd(span,1);
      sel.removeAllRanges(); sel.addRange(range);
    } else {
      // 선택 영역 전체를 span으로 래핑
      const frag=range.extractContents();
      const span=document.createElement('span');
      span.style[cssProp]=cssVal;
      span.appendChild(frag);
      range.insertNode(span);
      range.selectNodeContents(span);
      sel.removeAllRanges(); sel.addRange(range);
    }
    emit();
  };

  const applyBlock=(tag,styleStr="")=>{
    const el=ref.current;
    if(!el) return;
    el.focus();
    const sel=window.getSelection();
    if(!sel||sel.rangeCount===0) return;
    const range=sel.getRangeAt(0);
    const block=document.createElement(tag);
    if(styleStr) block.setAttribute('style',styleStr);
    if(range.collapsed){
      block.innerHTML='<br>';
      range.insertNode(block);
    } else {
      const frag=range.extractContents();
      block.appendChild(frag);
      range.insertNode(block);
    }
    // 커서를 블록 뒤로
    const after=document.createRange();
    after.setStartAfter(block); after.collapse(true);
    sel.removeAllRanges(); sel.addRange(after);
    emit();
  };

  const execCmd=(cmd,val=null)=>{
    ref.current?.focus();
    document.execCommand(cmd,false,val);
    emit();
  };

  // ── 스타일 상수
  const SIZES=[
    {l:"소 (11px)",v:"11px"},{l:"보통 (14px)",v:"14px"},
    {l:"중 (18px)",v:"18px"},{l:"대 (22px)",v:"22px"},
    {l:"특대 (28px)",v:"28px"},
  ];
  const HEADING_STYLES=[
    {l:"일반",       tag:"p",   s:""},
    {l:"제목 1",     tag:"h2",  s:"font-size:26px;font-weight:900;margin:8px 0 4px;color:#e8f4fd;border-bottom:2px solid rgba(56,182,245,.4);padding-bottom:4px"},
    {l:"제목 2",     tag:"h3",  s:"font-size:20px;font-weight:800;margin:6px 0 4px;color:#e8f4fd"},
    {l:"제목 3",     tag:"h4",  s:"font-size:16px;font-weight:700;margin:4px 0;color:#b0d0e8"},
    {l:"강조 블록",  tag:"div", s:"border-left:3px solid #38b6f5;padding:6px 12px;margin:6px 0;background:rgba(56,182,245,.08);color:#e8f4fd"},
    {l:"경고 블록",  tag:"div", s:"border-left:3px solid #f87171;padding:6px 12px;margin:6px 0;background:rgba(248,113,113,.08);color:#e8f4fd"},
  ];
  const COLORS=[
    {l:"기본",  v:""},{l:"빨강",v:"#ef4444"},{l:"주황",v:"#f97316"},
    {l:"노랑",  v:"#facc15"},{l:"초록",v:"#22c55e"},{l:"파랑",v:"#60a5fa"},
    {l:"하늘",  v:"#38bdf8"},{l:"보라",v:"#a855f7"},{l:"분홍",v:"#f472b6"},
    {l:"흰색",  v:"#ffffff"},{l:"회색",v:"#9ca3af"},
  ];
  const BG_COLORS=[
    {l:"없음",  v:""},{l:"노랑",v:"#fef08a"},{l:"연두",v:"#bbf7d0"},
    {l:"하늘",  v:"#bfdbfe"},{l:"분홍",v:"#fecaca"},{l:"보라",v:"#e9d5ff"},
    {l:"주황",  v:"#fed7aa"},{l:"회색",v:"#e5e7eb"},
  ];

  const BtnS={
    padding:"3px 9px",border:"1px solid rgba(255,255,255,.18)",borderRadius:4,
    background:"rgba(255,255,255,.07)",color:"#c8d8e8",cursor:"pointer",
    fontSize:11,fontFamily:"inherit",fontWeight:700,lineHeight:1.5,
    transition:"background .1s",userSelect:"none",whiteSpace:"nowrap",
  };
  const SelS={
    background:"#0c1e32",border:"1px solid rgba(255,255,255,.2)",
    color:"#c8d8e8",fontSize:11,borderRadius:4,padding:"3px 6px",
    cursor:"pointer",fontFamily:"inherit",
  };
  const Sep=()=><div style={{width:1,height:18,background:"rgba(255,255,255,.2)",margin:"0 3px",flexShrink:0}}/>;

  // 일반텍스트 → HTML 변환 (구버전 데이터 호환) - readOnly용
  const toHTMLStatic=(v)=>{
    if(!v) return "";
    if(v.indexOf("<")!==-1&&v.indexOf(">")!==-1) return v;
    return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").split("\n").join("<br>");
  };
  if(readOnly){
    return(
      <div style={{
        padding:"12px 16px",borderRadius:8,border:"1px solid rgba(255,255,255,.08)",
        minHeight,color:"#c8d8e8",fontSize:14,lineHeight:1.8,
        wordBreak:"break-word",background:"rgba(255,255,255,.02)",opacity:.9,...style}}
        dangerouslySetInnerHTML={{__html:toHTMLStatic(value)}}
      />
    );
  }

  return(
    <div style={{borderRadius:8,border:"1px solid rgba(56,182,245,.3)",overflow:"hidden",...style}}>
      {/* ── 툴바 */}
      <div style={{background:"#0c1e32",borderBottom:"1px solid rgba(255,255,255,.12)",
        padding:"6px 10px",display:"flex",gap:4,flexWrap:"wrap",alignItems:"center"}}>

        {/* 서식 (execCommand 동작 OK) */}
        {[["B","bold","굵게"],["I","italic","기울임"],["U","underline","밑줄"],["S","strikeThrough","취소선"]].map(([l,c,t])=>(
          <button key={c}
            onMouseDown={e=>{e.preventDefault();execCmd(c);}}
            title={t}
            style={{...BtnS,
              fontWeight:c==="bold"?900:700,
              fontStyle:c==="italic"?"italic":"normal",
              textDecoration:c==="underline"?"underline":c==="strikeThrough"?"line-through":"none"}}>
            {l}
          </button>
        ))}
        <Sep/>

        {/* 단락 스타일 */}
        <select style={{...SelS,maxWidth:90}}
          defaultValue=""
          onChange={e=>{
            const h=HEADING_STYLES.find(x=>x.l===e.target.value);
            if(h){
              if(h.tag==="p") execCmd("formatBlock","p");
              else applyBlock(h.tag, h.s);
            }
            e.target.value="";
          }}>
          <option value="">단락▾</option>
          {HEADING_STYLES.map(h=><option key={h.l} value={h.l}>{h.l}</option>)}
        </select>

        {/* 글자 크기 — span 방식 */}
        <select style={{...SelS,maxWidth:90}}
          defaultValue=""
          onChange={e=>{
            const v=e.target.value;
            if(v) applyStyle("fontSize",v);
            e.target.value="";
          }}>
          <option value="">크기▾</option>
          {SIZES.map(s=><option key={s.v} value={s.v}>{s.l}</option>)}
        </select>
        <Sep/>

        {/* 글자색 — span 방식 */}
        <select style={{...SelS,maxWidth:70}}
          defaultValue=""
          onChange={e=>{
            const v=e.target.value;
            if(v) applyStyle("color",v);
            e.target.value="";
          }}>
          <option value="">글자색▾</option>
          {COLORS.filter(c=>c.v).map(c=>(
            <option key={c.v} value={c.v} style={{background:c.v,color:"#000"}}>{c.l}</option>
          ))}
        </select>

        {/* 배경색 — span 방식 */}
        <select style={{...SelS,maxWidth:75}}
          defaultValue=""
          onChange={e=>{
            const v=e.target.value;
            if(v) applyStyle("backgroundColor",v);
            e.target.value="";
          }}>
          <option value="">배경색▾</option>
          {BG_COLORS.filter(b=>b.v).map(b=>(
            <option key={b.v} value={b.v} style={{background:b.v,color:"#000"}}>{b.l}</option>
          ))}
        </select>
        <Sep/>

        {/* 정렬 */}
        {[["◀","justifyLeft","왼쪽"],["■","justifyCenter","가운데"],["▶","justifyRight","오른쪽"]].map(([l,c,t])=>(
          <button key={c} onMouseDown={e=>{e.preventDefault();execCmd(c);}} title={t} style={BtnS}>{l}</button>
        ))}
        <Sep/>

        {/* 목록 */}
        <button onMouseDown={e=>{e.preventDefault();execCmd("insertUnorderedList");}} style={BtnS} title="글머리 기호">• 목록</button>
        <button onMouseDown={e=>{e.preventDefault();execCmd("insertOrderedList");}} style={BtnS} title="번호 목록">1. 목록</button>
        <Sep/>

        {/* 구분선 */}
        <button onMouseDown={e=>{
          e.preventDefault();
          execCmd("insertHTML","<hr style='border:none;border-top:1px solid rgba(255,255,255,.25);margin:10px 0'><br>");
        }} style={BtnS} title="구분선">— 선</button>

        {/* 박스 */}
        <button onMouseDown={e=>{
          e.preventDefault();
          execCmd("insertHTML","<div style='border:1px solid rgba(56,182,245,.4);border-radius:6px;padding:8px 12px;margin:6px 0;background:rgba(56,182,245,.06)'>내용 입력</div><br>");
        }} style={BtnS} title="강조 박스">□ 박스</button>
        <Sep/>

        {/* 초기화 */}
        <button onMouseDown={e=>{e.preventDefault();execCmd("removeFormat");}} style={{...BtnS,color:"#f87171"}} title="서식 제거">초기화</button>
      </div>

      {/* ── 편집 영역 */}
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={e=>{
          const v=e.currentTarget.innerHTML;
          onChange&&onChange({target:{value:v}});
          lastVal.current=v;
        }}
        data-placeholder={placeholder}
        style={{
          minHeight,padding:"14px 16px",
          color:"#e8f4fd",fontSize:14,lineHeight:1.8,
          outline:"none",background:"rgba(255,255,255,.015)",
          wordBreak:"break-word",
        }}
      />
      <style>{`
        [contenteditable]:empty:before{
          content:attr(data-placeholder);
          color:rgba(255,255,255,.2);
          font-style:italic;pointer-events:none;
          display:block;white-space:pre-line;
        }
      `}</style>
    </div>
  );
}


function BackupModal({onClose,perfData,planTextData,onImportJson,excelFn}){
  const [tab,setTab]=useState("export");
  const [msg,setMsg]=useState("");
  const fileRef=useRef(null);

  const downloadJson=()=>{
    const blob=new Blob([JSON.stringify({perfData,planTextData},null,2)],{type:"application/json"});
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download=`충청_전체백업_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    setMsg("✅ JSON 다운로드 완료");
  };

  const downloadPdf=()=>{
    onClose(); // 모달 먼저 닫기
    setTimeout(()=>window.print(),350);
  };

  const downloadImage=async()=>{
    onClose(); // 모달 먼저 닫기
    await new Promise(r=>setTimeout(r,400));
    try{
      const el=document.getElementById("root");
      const canvas=await html2canvas(el,{
        scale:2,useCORS:true,backgroundColor:"#07101f",
        logging:false,
        ignoreElements:el=>el.getAttribute&&el.getAttribute("id")==="backup-plan-modal"
      });
      const a=document.createElement("a");
      a.href=canvas.toDataURL("image/png");
      a.download=`충청_달성계획_${new Date().toISOString().slice(0,10)}.png`;
      a.click();
    }catch(e){
      alert("이미지 생성 오류: "+e.message);
    }
  };

  const handleJsonUpload=async(e)=>{
    const file=e.target.files[0];
    if(!file){return;}
    try{
      const text=await file.text();
      const parsed=JSON.parse(text);
      if(!parsed.perfData&&!parsed.planTextData){
        setMsg("❌ 올바른 백업 파일이 아닙니다.");
        return;
      }
      onImportJson(parsed);
      setMsg("✅ JSON 복원 완료! Firebase에 저장하려면 저장 버튼을 누르세요.");
    }catch(e){
      setMsg("❌ 파일 파싱 오류: "+e.message);
    }
  };

  const BtnRow=({icon,label,desc,onClick,c})=>(
    <button onClick={onClick} style={{
      display:"flex",alignItems:"center",gap:14,width:"100%",
      padding:"14px 18px",borderRadius:10,cursor:"pointer",textAlign:"left",fontFamily:"inherit",
      border:`1px solid ${c}40`,background:c+"0d",
      transition:"background .15s",marginBottom:8}}
      onMouseEnter={e=>e.currentTarget.style.background=c+"20"}
      onMouseLeave={e=>e.currentTarget.style.background=c+"0d"}>
      <span style={{fontSize:22,flexShrink:0}}>{icon}</span>
      <div>
        <div style={{color:C.text,fontWeight:700,fontSize:13}}>{label}</div>
        <div style={{color:C.muted,fontSize:11,marginTop:2}}>{desc}</div>
      </div>
    </button>
  );

  return(
    <div id="backup-plan-modal" style={{position:"fixed",inset:0,zIndex:800,background:"rgba(0,0,0,.75)",
      display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>
      <div style={{background:C.card,border:`1px solid ${C.b2}`,borderRadius:16,
        width:"min(480px,92vw)",maxHeight:"85vh",overflow:"auto",
        boxShadow:"0 8px 40px rgba(0,0,0,.6)"}}>
        {/* 헤더 */}
        <div style={{padding:"16px 20px",borderBottom:`1px solid ${C.b1}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontWeight:800,fontSize:15,color:C.text}}>📦 다운로드 · 복원</span>
          <button onClick={onClose} style={{background:"transparent",border:"none",color:C.muted,
            cursor:"pointer",fontSize:18,fontFamily:"inherit"}}>✕</button>
        </div>
        {/* 탭 */}
        <div style={{display:"flex",borderBottom:`1px solid ${C.b1}`}}>
          {[["export","내보내기"],["import","가져오기"]].map(([k,l])=>(
            <button key={k} onClick={()=>setTab(k)} style={{
              flex:1,padding:"10px",border:"none",fontFamily:"inherit",cursor:"pointer",
              fontWeight:700,fontSize:12,
              background:tab===k?C.bg:"transparent",
              color:tab===k?C.accent:C.muted,
              borderBottom:tab===k?`2px solid ${C.accent}`:"2px solid transparent"}}>
              {l}
            </button>
          ))}
        </div>
        {/* 본문 */}
        <div style={{padding:"20px"}}>
          {tab==="export"&&(
            <>
              <BtnRow icon="📋" label="JSON 전체 백업" c={C.accent}
                desc="실적·목표·달성계획 전체 데이터를 JSON 파일로 저장 (완전 복원 가능)"
                onClick={downloadJson}/>
              <BtnRow icon="📊" label="엑셀 내보내기" c={C.green}
                desc="월별 실적·누계·KPI를 Excel 파일로 저장 (원본 소수점 포함)"
                onClick={excelFn}/>
              <BtnRow icon="🖼" label="이미지 저장 (PNG)" c={C.teal}
                desc="현재 화면 전체를 고해상도 이미지로 저장"
                onClick={downloadImage}/>
              <BtnRow icon="🖨" label="PDF 저장 / 인쇄" c={C.orange}
                desc="브라우저 인쇄 기능으로 PDF 저장 또는 인쇄"
                onClick={downloadPdf}/>
            </>
          )}
          {tab==="import"&&(
            <>
              <div style={{background:C.bg,border:`1px solid ${C.accent}40`,borderRadius:10,padding:"16px",marginBottom:12}}>
                <div style={{color:C.text,fontWeight:700,fontSize:13,marginBottom:6}}>📋 JSON 파일로 복원</div>
                <div style={{color:C.muted,fontSize:11,marginBottom:12,lineHeight:1.6}}>
                  이전에 저장한 JSON 백업 파일을 선택하면 데이터가 복원됩니다.<br/>
                  ⚠ 현재 Firebase 데이터를 덮어쓰게 됩니다.
                </div>
                <input ref={fileRef} type="file" accept=".json"
                  onChange={handleJsonUpload}
                  style={{display:"none"}}/>
                <button onClick={()=>fileRef.current.click()} style={{
                  width:"100%",padding:"10px",border:`2px dashed ${C.accent}60`,
                  borderRadius:8,background:C.accent+"0a",color:C.accent,
                  cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:"inherit"}}>
                  📂 JSON 파일 선택
                </button>
              </div>
            </>
          )}
          {msg&&(
            <div style={{marginTop:12,padding:"10px 14px",borderRadius:8,
              background:msg.startsWith("❌")?"rgba(240,112,112,.15)":"rgba(45,212,136,.15)",
              border:`1px solid ${msg.startsWith("❌")?C.red:C.green}40`,
              color:msg.startsWith("❌")?C.red:C.green,fontSize:12,fontWeight:600}}>
              {msg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TabBtn({label,active,color,onClick}){
  return(
    <button onClick={onClick} style={{
      padding:"4px 10px",borderRadius:5,cursor:"pointer",fontWeight:700,fontSize:11,
      fontFamily:"inherit",border:`1px solid ${active?color:C.b1}`,
      background:active?color+"22":"transparent",color:active?color:C.muted}}>
      {label}
    </button>
  );
}

// ── 메인 앱
function PlanApp(){
  const [perfData,setPerfData]=useState(null);
  const [planTextData,setPlanTextData]=useState({});  // Firebase 저장 텍스트 계획
  const [textDraft,setTextDraft]=useState({});         // 로컬 미저장 텍스트
  const [part,setPart]=useState("대외영업");
  const [mode,setMode]=useState("매출");
  const [yr,setYr]=useState("26");
  const [chartTab,setChartTab]=useState("실적");
  const [cumChartTab,setCumChartTab]=useState("실적");
  const [saveState,setSaveState]=useState("idle");
  const [dbReady,setDbReady]=useState(false);
  const [selMonth,setSelMonth]=useState("annual"); // 'annual' | 0~11
  const [isEditing,setIsEditing]=useState(false);   // 수정 모드 잠금
  const [editorKey,setEditorKey]=useState(0);  // 편집기 강제 remount용
  const [zoom,setZoom]=useState(()=>{
    const saved=parseInt(localStorage.getItem('cst_zoom_v2'));
    return (saved>=80&&saved<=200)?saved:100;
  }); // 화면 배율 %
  // 양방향 zoom (center 기준)
  useEffect(()=>{
    const wrapper=document.getElementById('plan-zoom-wrapper');
    if(!wrapper)return;
    const safeZoom=Math.max(50,Math.min(200,zoom||100));
    const ratio=safeZoom/100;
    if(ratio===1){
      wrapper.style.transform='';
      wrapper.style.width='';
      wrapper.style.position='';
      wrapper.style.left='';
    } else {
      const vw=window.innerWidth;
      wrapper.style.transformOrigin='top left';
      wrapper.style.transform=`scale(${ratio})`;
      wrapper.style.width=`${vw}px`;
      wrapper.style.position='relative';
      wrapper.style.left=`${(vw - vw*ratio)/2}px`;
    }
    localStorage.setItem('cst_zoom_v2', String(safeZoom));
  },[zoom]);
  // (yr==="26"?"25":yr==="25"?"24":"23"): yr 기반 자동 계산 (별도 state 불필요)
  const [showBackup,setShowBackup]=useState(false);
  const autoSaveTimer=useRef(null);

  // Firebase 로드
  useEffect(()=>{
    (async()=>{
      try{
        const snap=await window.db.collection("perf").doc("main").get();
        if(snap.exists){
          const d=snap.data();
          if(d.perfData) setPerfData(d.perfData);
          if(d.planTextData) setPlanTextData(d.planTextData);
        }
      }catch(e){console.error("Firebase 로드 오류:",e);}
      finally{setDbReady(true);}
    })();
  },[]);

  // localStorage 텍스트 복원
  useEffect(()=>{
    try{
      const saved=localStorage.getItem(LS_TEXT);
      if(saved) setTextDraft(JSON.parse(saved));
    }catch{}
  },[]);

  // 텍스트 draft 3초 자동저장
  useEffect(()=>{
    clearTimeout(autoSaveTimer.current);
    if(Object.keys(textDraft).length>0){
      autoSaveTimer.current=setTimeout(()=>{
        try{localStorage.setItem(LS_TEXT,JSON.stringify(textDraft));}catch{}
      },3000);
    }
    return()=>clearTimeout(autoSaveTimer.current);
  },[textDraft]);

  // 텍스트 접근 헬퍼
  // 계획 텍스트: mode 무관하게 동일 데이터 (판매/매출 공통)
  const getText=(pYr,_mode,pPart,mk)=>{
    const d=textDraft[pYr]&&textDraft[pYr][pPart]&&textDraft[pYr][pPart][mk];
    const p=planTextData[pYr]&&planTextData[pYr][pPart]&&planTextData[pYr][pPart][mk];
    return d!==undefined?d:(p||"");
  };
  const setText=(pYr,_mode,pPart,mk,val)=>{
    setTextDraft(prev=>{
      const next=JSON.parse(JSON.stringify(prev));
      if(!next[pYr])next[pYr]={};
      if(!next[pYr][pPart])next[pYr][pPart]={};
      next[pYr][pPart][mk]=val;
      return next;
    });
  };

  // Firebase 저장
  const handleSave=async()=>{
    setSaveState("saving");
    try{
      const merged=JSON.parse(JSON.stringify(planTextData));
      const mergeDeep=(t,s)=>{
        Object.keys(s).forEach(k=>{
          if(s[k]&&typeof s[k]==="object"&&!Array.isArray(s[k])){
            if(!t[k])t[k]={};
            mergeDeep(t[k],s[k]);
          } else {t[k]=s[k];}
        });
      };
      mergeDeep(merged,textDraft);
      await window.db.collection("perf").doc("main").set(
        {planTextData:merged,planUpdatedAt:new Date().toISOString()},
        {merge:true}
      );
      setPlanTextData(merged);
      setTextDraft({});
      localStorage.removeItem(LS_TEXT);
      setSaveState("saved");
      setIsEditing(false); // 저장 후 잠금
      setTimeout(()=>setSaveState("idle"),2500);
    }catch(e){
      console.error("저장 오류:",e);
      setSaveState("error");
      setTimeout(()=>setSaveState("idle"),3000);
    }
  };

  // 데이터 계산
  const pD=useMemo(()=>{const y=perfData&&perfData[yr];const m=y&&y[mode];return(m&&m.perf)||{};},[perfData,yr,mode]);
  const tD=useMemo(()=>{const y=perfData&&perfData[yr];const m=y&&y[mode];return(m&&m.target)||{};},[perfData,yr,mode]);
  const prevYrKey=yr==="26"?"25":yr==="25"?"24":null;
  const pD25=useMemo(()=>{if(!prevYrKey||!perfData)return{};const y=perfData[prevYrKey];const m=y&&y[mode];return(m&&m.perf)||{};},[perfData,prevYrKey,mode]);

  const mPerf=useMemo(()=>MONTHS.map((_,i)=>gNum((fullRow(pD[sk(i)])||{})[part])),[pD,part]);
  const mTgt =useMemo(()=>MONTHS.map((_,i)=>gNum((fullRow(tD[sk(i)])||{})[part])),[tD,part]);
  const mPrev=useMemo(()=>MONTHS.map((_,i)=>gNum((fullRow(pD25[sk(i)])||{})[part])),[pD25,part]);

  // 최근 실적 월 (emi)
  const emi=useMemo(()=>{
    for(let i=11;i>=0;i--){
      const r=pD[sk(i)];
      if(r&&Object.keys(r).length>0&&Object.values(r).some(v=>gNum(v)>0))return i;
    }
    return-1;
  },[pD]);

  // KPI
  const ytdP   =mPerf.slice(0,Math.max(emi+1,0)).reduce((a,b)=>a+b,0);
  const ytdT   =mTgt .slice(0,Math.max(emi+1,0)).reduce((a,b)=>a+b,0);
  const ytdPrev=mPrev.slice(0,Math.max(emi+1,0)).reduce((a,b)=>a+b,0);
  const annT   =mTgt.reduce((a,b)=>a+b,0);
  const remT   =Math.max(annT-ytdP,0);
  const remMonths=Math.max(11-emi,0);
  const avgMonthly=emi>=0&&ytdP>0?Math.round(ytdP/(emi+1)):0;
  const prevAvgMonthly=emi>=0&&ytdPrev>0?Math.round(ytdPrev/(emi+1)):0;
  const needPM =remMonths>0?Math.ceil(remT/remMonths):0;
  const ytdAr  =ytdT>0?(ytdP/ytdT*100).toFixed(1):null;
  const ytdGr  =ytdPrev>0?((ytdP-ytdPrev)/ytdPrev*100).toFixed(1):null;

  // CE/대외 비중 (누계)
  const ceYtd =emi>=0?MONTHS.slice(0,emi+1).reduce((a,_,i)=>a+gNum((fullRow(pD[sk(i)])||{}).CE),0):0;
  const hpYtd =emi>=0?MONTHS.slice(0,emi+1).reduce((a,_,i)=>a+gNum((fullRow(pD[sk(i)])||{}).휴대폰),0):0;
  const daeYtd=emi>=0?MONTHS.slice(0,emi+1).reduce((a,_,i)=>a+gNum((fullRow(pD[sk(i)])||{}).대외영업),0):0;
  // 전년 CE 비중
  const cePrevYtd =emi>=0?MONTHS.slice(0,emi+1).reduce((a,_,i)=>a+gNum((fullRow(pD25[sk(i)])||{}).CE),0):0;
  const hpPrevYtd =emi>=0?MONTHS.slice(0,emi+1).reduce((a,_,i)=>a+gNum((fullRow(pD25[sk(i)])||{}).휴대폰),0):0;
  const daePrevYtd=emi>=0?MONTHS.slice(0,emi+1).reduce((a,_,i)=>a+gNum((fullRow(pD25[sk(i)])||{}).대외영업),0):0;

  const ceSharePct=ceYtd>0&&part!=="CE"&&ytdP>0?(
    part==="대외영업"?(daeYtd-hpYtd)/ceYtd*100:ytdP/ceYtd*100
  ):null;
  const cePrevSharePct=cePrevYtd>0&&part!=="CE"&&ytdPrev>0?(
    part==="대외영업"?(daePrevYtd-hpPrevYtd)/cePrevYtd*100:ytdPrev/cePrevYtd*100
  ):null;
  const daeSharePct=daeYtd>0&&part!=="대외영업"&&part!=="CE"&&ytdP>0?ytdP/daeYtd*100:null;

  // 누계
  let cumP=0,cumT=0,cumPrev=0;
  const cumPerf   =MONTHS.map((_,i)=>{if(i>emi)return null;cumP+=mPerf[i];return cumP;});
  const cumTgt    =MONTHS.map((_,i)=>{cumT+=mTgt[i];return cumT;});
  const cumPrevArr=MONTHS.map((_,i)=>{if(i>emi)return null;cumPrev+=mPrev[i];return cumPrev;});
  const cumAr     =MONTHS.map((_,i)=>{if(i>emi||!cumTgt[i])return null;return(cumPerf[i]||0)/cumTgt[i]*100;});
  const cumGr     =MONTHS.map((_,i)=>{if(i>emi||!cumPrevArr[i])return null;return((cumPerf[i]||0)-cumPrevArr[i])/cumPrevArr[i]*100;});

  // 월별 달성/성장률
  const mArArr=MONTHS.map((_,i)=>i<=emi&&mTgt[i]>0?(mPerf[i]/mTgt[i]*100):null);
  const mGrArr=MONTHS.map((_,i)=>i<=emi&&mPrev[i]>0?((mPerf[i]-mPrev[i])/mPrev[i]*100):null);

  // ── yr 연도 기준 참고 데이터
  const planPrevYrKey=yr==="26"?"25":yr==="25"?"24":null;
  const pD_pl=useMemo(()=>{const y=perfData&&perfData[yr];const m=y&&y[mode];return(m&&m.perf)||{};},[perfData,yr,mode]);
  const tD_pl=useMemo(()=>{const y=perfData&&perfData[yr];const m=y&&y[mode];return(m&&m.target)||{};},[perfData,yr,mode]);
  const pD25_pl=useMemo(()=>{if(!planPrevYrKey||!perfData)return{};const y=perfData[planPrevYrKey];const m=y&&y[mode];return(m&&m.perf)||{};},[perfData,planPrevYrKey,mode]);
  const mTgt_pl =useMemo(()=>MONTHS.map((_,i)=>gNum((fullRow(tD_pl[sk(i)])||{})[part])),[tD_pl,part]);
  const mPerf_pl=useMemo(()=>MONTHS.map((_,i)=>gNum((fullRow(pD_pl[sk(i)])||{})[part])),[pD_pl,part]);
  const mPrev_pl=useMemo(()=>MONTHS.map((_,i)=>gNum((fullRow(pD25_pl[sk(i)])||{})[part])),[pD25_pl,part]);
  const annT_pl =mTgt_pl.reduce((a,b)=>a+b,0);
  const emi_pl  =useMemo(()=>{for(let i=11;i>=0;i--){const r=pD_pl[sk(i)];if(r&&Object.values(r).some(v=>gNum(v)>0))return i;}return -1;},[pD_pl]);
  const ytdP_pl =mPerf_pl.slice(0,Math.max(emi_pl+1,0)).reduce((a,b)=>a+b,0);
  const ytdPrev_pl=mPrev_pl.slice(0,Math.max(emi_pl+1,0)).reduce((a,b)=>a+b,0);

  // 선택 월 정보 (yr 연도 기준)
  const annPrev_pl=mPrev_pl.reduce((a,b)=>a+b,0); // 전년 연간 합계
  const selMi=selMonth==="annual"?null:selMonth;
  const selTgt =selMi!==null?mTgt_pl[selMi]:annT_pl;
  const selPerf=selMi!==null?mPerf_pl[selMi]:ytdP_pl;
  const selPrev=selMi!==null?mPrev_pl[selMi]:annPrev_pl; // 연간 선택시 전년 연간 합계
  const selGrowthTarget=selPrev>0&&selTgt>0?((selTgt-selPrev)/selPrev*100).toFixed(1):null;
  const selAr=selTgt>0&&selPerf>0?(selPerf/selTgt*100).toFixed(1):null;
  // 실제 성장률 (실적 기준) - 25년 등 목표 없을 때도 표시
  const selActualGr=selPrev>0&&selPerf>0?((selPerf-selPrev)/selPrev*100).toFixed(1):null;

  const color=KC[part]||C.accent;
  const hasDraft=Object.keys(textDraft).length>0;
  const currentText=getText(yr,mode,part,selMonth==="annual"?"annual":String(selMonth));

  // 엑셀 다운로드 (원본 소수점 유지)
  const handleExcel=()=>{
    const wb=XLSX.utils.book_new();
    const fmt=v=>typeof v==="number"?parseFloat(v.toFixed(4)):v; // 소수점 4자리까지 원본 유지
    const addSheet=(name,rows)=>XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows),name);
    addSheet("월별실적",[
      [`${yr}년 ${mode} - ${part} 월별 실적`],[],
      ["항목",...MONTHS,"누계"],
      ["목표",...mTgt.map(fmt),fmt(annT)],
      ["실적",...MONTHS.map((_,i)=>i<=emi?fmt(mPerf[i]):""),fmt(ytdP)],
      ["달성률",...MONTHS.map((_,i)=>i<=emi&&mTgt[i]>0?parseFloat((mPerf[i]/mTgt[i]*100).toFixed(2)):""),""],
      ["성장률",...MONTHS.map((_,i)=>i<=emi&&mPrev[i]>0?parseFloat(((mPerf[i]-mPrev[i])/mPrev[i]*100).toFixed(2)):""),""],
      ["전년",...MONTHS.map((_,i)=>i<=emi?fmt(mPrev[i]):""),fmt(ytdPrev)],
    ]);
    addSheet("누계실적",[
      [`${yr}년 ${mode} - ${part} 누계 실적`],[],
      ["항목",...MONTHS],
      ["누계목표",...cumTgt.map(fmt)],
      ["누계실적",...cumPerf.map(v=>v!==null?fmt(v):"")],
      ["누계달성",...cumAr.map(v=>v!==null?parseFloat(v.toFixed(2)):"")],
      ["누계성장",...cumGr.map(v=>v!==null?parseFloat(v.toFixed(2)):"")],
      ["누계전년",...cumPrevArr.map(v=>v!==null?fmt(v):"")],
    ]);
    addSheet("KPI요약",[
      [`${yr}년 ${emi>=0?MONTHS[emi]:""} 기준 — ${mode} · ${part}`],[],
      ["항목","값(억)"],
      ["연간목표",fmt(annT)||"─"],["누계실적",fmt(ytdP)||"─"],
      ["월평균",fmt(avgMonthly)||"─"],["누계달성률",ytdAr?parseFloat(ytdAr):"─"],
      ["전년비성장",ytdGr?parseFloat(ytdGr):"─"],["잔여목표",fmt(remT)||"─"],
      ["잔여월평균",fmt(needPM)||"─"],
      ["CE비중",ceSharePct?parseFloat(ceSharePct.toFixed(2)):"─"],
      ["전년CE비중",cePrevSharePct?parseFloat(cePrevSharePct.toFixed(2)):"─"],
    ]);
    // 달성계획 텍스트 시트 추가
    const planRows=[["연도","파트","구분","내용"]];
    const allPlanData={...planTextData};
    Object.keys(allPlanData).forEach(pYr=>{
      Object.keys(allPlanData[pYr]||{}).forEach(pPart=>{
        Object.keys(allPlanData[pYr][pPart]||{}).forEach(mk=>{
          const txt=allPlanData[pYr][pPart][mk];
          if(txt)planRows.push([pYr,pPart,mk==="annual"?"연간":mk+"월",txt]);
        });
      });
    });
    if(planRows.length>1)addSheet("달성계획텍스트",planRows);
    XLSX.writeFile(wb,`충청_${yr}년_${mode}_${part}_${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  // JSON 복원
  const handleImportJson=(parsed)=>{
    if(parsed.perfData) window.__importedPerf=parsed.perfData;
    if(parsed.planTextData){
      setPlanTextData(parsed.planTextData);
      // Firebase에도 반영
      window.db.collection("perf").doc("main").set(
        {planTextData:parsed.planTextData,planUpdatedAt:new Date().toISOString()},
        {merge:true}
      ).catch(e=>console.error("복원 저장 오류:",e));
    }
  };

  if(!dbReady) return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      height:"100vh",gap:14,background:"#07101f"}}>
      <div style={{width:36,height:36,borderRadius:"50%",border:"4px solid rgba(56,182,245,.2)",
        borderTopColor:"#38b6f5",animation:"spin 0.9s linear infinite"}}/>
      <span style={{color:"#6a9ab8",fontSize:14,fontWeight:600}}>데이터 불러오는 중...</span>
    </div>
  );

  return(
    <div style={{background:C.bg,minHeight:"100vh"}}>

      {/* ── 헤더 2행 구조 */}
      <div className="no-print" style={{position:"sticky",top:0,zIndex:100,background:C.surf,borderBottom:`1px solid ${C.b1}`}}>
        {/* ─ 1행: 로고 + 탭 + zoom + 백업 ─ */}
        <div style={{maxWidth:1360,margin:"0 auto",display:"flex",alignItems:"center",gap:2,padding:"6px 16px"}}>
          {/* 로고 */}
          <a href="index.html" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none",color:C.text,marginRight:8,flexShrink:0}}>
            <div style={{width:28,height:28,borderRadius:8,background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:14,color:"#fff"}}>C</div>
            <div>
              <div style={{fontWeight:900,fontSize:12,color:C.text}}>충청영업팀</div>
              <div style={{color:mode==="매출"?C.매출:C.판매,fontSize:9,fontWeight:700}}>충청영업팀 · {mode}</div>
            </div>
          </a>
          {/* 탭 메뉴 */}
          <nav style={{display:"flex",gap:2}}>
            {[
              {href:"index.html",l:"대시보드",i:"◈"},
              {href:"index.html#analysis",l:"실적분석",i:"◉"},
              {href:"index.html#input",l:"실적입력",i:"◎"},
            ].map(t=>(
              <a key={t.href} href={t.href} style={{
                padding:"5px 12px",borderRadius:7,border:"none",cursor:"pointer",
                background:"transparent",color:C.muted,fontWeight:500,fontSize:12,
                fontFamily:"inherit",textDecoration:"none",display:"flex",alignItems:"center",gap:4,
                borderBottom:"2px solid transparent",whiteSpace:"nowrap",transition:"color .15s",
              }}
              onMouseEnter={e=>e.currentTarget.style.color=mode==="매출"?C.매출:C.판매}
              onMouseLeave={e=>e.currentTarget.style.color=C.muted}>
                {t.i} {t.l}
              </a>
            ))}
            <a href="plan.html" style={{
              padding:"5px 12px",borderRadius:7,border:"none",cursor:"pointer",
              background:C.accent+"22",color:C.accent,fontWeight:800,fontSize:12,
              fontFamily:"inherit",textDecoration:"none",display:"flex",alignItems:"center",gap:4,
              borderBottom:`2px solid ${C.accent}`,whiteSpace:"nowrap",
            }}>
              📋 달성계획
            </a>
          </nav>
          {/* 우측: zoom + 백업 */}
          <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
            <div style={{display:"flex",alignItems:"center",gap:3,background:"rgba(255,255,255,.06)",borderRadius:7,padding:"3px 6px",border:`1px solid ${C.b1}`}}>
              <span style={{fontSize:12,color:C.muted2}}>🔍</span>
              <button onClick={()=>setZoom(z=>Math.max(50,z-10))} style={{
                padding:"2px 6px",borderRadius:4,border:`1px solid ${C.b1}`,
                background:"rgba(255,255,255,.04)",color:C.muted2,
                cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:700,lineHeight:1}}>−</button>
              <select value={zoom} onChange={e=>setZoom(parseInt(e.target.value))}
                style={{background:"transparent",border:"none",color:C.text,fontSize:11,
                  fontWeight:700,cursor:"pointer",outline:"none",fontFamily:"inherit",minWidth:46}}>
                {[50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200].map(v=>(
                  <option key={v} value={v} style={{background:"#07101f",color:"#e8f4fd"}}>{v}%</option>
                ))}
              </select>
              <button onClick={()=>setZoom(z=>Math.min(200,z+10))} style={{
                padding:"2px 6px",borderRadius:4,border:`1px solid ${C.b1}`,
                background:"rgba(255,255,255,.04)",color:C.muted2,
                cursor:"pointer",fontSize:11,fontFamily:"inherit",fontWeight:700,lineHeight:1}}>+</button>
            </div>
            <button onClick={()=>setShowBackup(true)} style={{
              padding:"5px 12px",borderRadius:7,cursor:"pointer",fontWeight:700,fontSize:11,
              fontFamily:"inherit",border:`1px solid ${C.teal}40`,
              background:C.teal+"10",color:C.teal,
              display:"flex",alignItems:"center",gap:5,transition:"all .15s"}}
              onMouseEnter={e=>{e.currentTarget.style.background=C.teal+"22";e.currentTarget.style.borderColor=C.teal;}}
              onMouseLeave={e=>{e.currentTarget.style.background=C.teal+"10";e.currentTarget.style.borderColor=C.teal+"40";}}>
              📦 다운로드
            </button>
          </div>
        </div>
        {/* ─ 2행: 판매/매출 + 연도 + 파트 ─ */}
        <div style={{maxWidth:1360,margin:"0 auto",display:"flex",alignItems:"center",gap:8,padding:"4px 16px 6px",borderTop:`1px solid ${C.b1}22`}}>
          {/* 판매/매출 */}
          <div style={{display:"flex",gap:3}}>
            {MODES.map(m=>(
              <button key={m} onClick={()=>setMode(m)} style={{
                padding:"3px 10px",borderRadius:5,cursor:"pointer",fontWeight:700,fontSize:11,
                fontFamily:"inherit",border:`1px solid ${mode===m?(m==="판매"?C.판매:C.매출):C.b1}`,
                background:mode===m?(m==="판매"?C.판매:C.매출)+"22":"transparent",
                color:mode===m?(m==="판매"?C.판매:C.매출):C.muted}}>
                <span style={{color:m==="판매"?C.판매:C.매출,fontSize:8}}>●</span> {m}
              </button>
            ))}
          </div>
          <div style={{width:1,height:16,background:C.b1,flexShrink:0}}/>
          {/* 연도 */}
          <div style={{display:"flex",gap:3}}>
            {YRS.map(y=>(
              <button key={y} onClick={()=>setYr(y)} style={{
                padding:"3px 9px",borderRadius:5,cursor:"pointer",fontWeight:700,fontSize:11,
                fontFamily:"inherit",border:`1px solid ${yr===y?C.blue:C.b1}`,
                background:yr===y?C.blue+"22":"transparent",color:yr===y?C.blue:C.muted}}>
                {y}년
              </button>
            ))}
          </div>
          <div style={{width:1,height:16,background:C.b1,flexShrink:0}}/>
          {/* 파트 선택 */}
          <div style={{display:"flex",gap:3,overflowX:"auto",flex:1,minWidth:0}}>
            {PARTS.map(k=>(
              <button key={k} onClick={()=>setPart(k)} style={{
                padding:"3px 9px",borderRadius:5,cursor:"pointer",fontWeight:700,fontSize:11,
                fontFamily:"inherit",whiteSpace:"nowrap",flexShrink:0,transition:"all .15s",
                border:`1px solid ${part===k?KC[k]||C.accent:C.b1}`,
                background:part===k?(KC[k]||C.accent)+"22":"transparent",
                color:part===k?KC[k]||C.accent:C.muted}}>
                {k}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="plan-zoom-wrapper" style={{position:"relative",left:0}}>
      <div id="plan-content" style={{maxWidth:1360,margin:"0 auto",padding:"16px",display:"flex",flexDirection:"column",gap:14}}>

        {/* ── [1] KPI 카드 — 한 줄 가로 (반응형) */}
        <style>{`
          .kpi-row{display:flex;gap:6px;flex-wrap:nowrap;overflow-x:auto}
          .kpi-cell{flex:1 1 0;min-width:110px;background:#0a1628;border-radius:10px;overflow:hidden;box-sizing:border-box;display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.08)}
          .kpi-cell-lg{flex:1.8 1 0;min-width:160px}
          .kpi-title{padding:6px 12px;font-size:9px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,.06)}
          .kpi-body{padding:12px 14px;flex:1;display:flex;flex-direction:column;justify-content:center}
          .kpi-cell-center .kpi-body{align-items:center;text-align:center}
          @media(max-width:640px){.kpi-row{flex-wrap:wrap}.kpi-cell{min-width:calc(50% - 3px)}.kpi-cell-lg{min-width:100%}}
        `}</style>
        <div className="kpi-row">
          {/* 누계 실적 */}
          <div className="kpi-cell kpi-cell-lg kpi-cell-center" style={{border:`2px solid ${color}50`}}>
            <div className="kpi-title" style={{background:color+"18",color}}>
              누계 실적{emi>=0?` (${MONTHS[emi]})`:""}{ytdT>0&&` · 목표 ${fmtN(ytdT)}`}
            </div>
            <div className="kpi-body">
              <div style={{display:"flex",alignItems:"baseline",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:6}}>
                <span style={{color,fontSize:32,fontWeight:900,letterSpacing:"-1.5px",lineHeight:1}}>{fmtN(ytdP)}</span>
                {avgMonthly>0&&<span style={{color:C.muted2,fontSize:12,fontWeight:600}}>월평 {avgMonthly}억</span>}
              </div>
              {ytdAr&&<div style={{marginBottom:4}}>
                <span style={{color:pctC(ytdAr),fontWeight:900,fontSize:20,
                  background:pctC(ytdAr)+"15",padding:"2px 10px",borderRadius:6}}>
                  {Math.round(gNum(ytdAr))}%
                </span>
              </div>}
              {ytdP>0&&ytdT>0&&<div style={{color:(ytdP-ytdT)>=0?C.green:C.red,fontSize:12,fontWeight:800}}>
                {(ytdP-ytdT)>=0?"▲":"▼"} {Math.abs(Math.round(ytdP-ytdT)).toLocaleString()}억 {(ytdP-ytdT)<0?"부족":"초과"}
              </div>}
            </div>
          </div>
          {/* 연간 목표 */}
          <div className="kpi-cell kpi-cell-lg" style={{border:`2px solid ${C.orange}40`}}>
            <div className="kpi-title" style={{background:C.orange+"18",color:C.orange}}>연간 목표</div>
            <div className="kpi-body">
              <div style={{color:C.orange,fontSize:26,fontWeight:900,letterSpacing:"-1px",marginBottom:5}}>{fmtN(annT)}</div>
              <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                <span style={{color:remT>0?C.blue:C.green,fontWeight:700,fontSize:12}}>잔여 {fmtN(remT)}</span>
                {needPM>0&&<span style={{color:C.muted2,fontSize:11}}>월평 {needPM}억</span>}
              </div>
            </div>
          </div>
          {/* 전년비 성장 */}
          <div className="kpi-cell" style={{border:`1px solid ${ytdGr?grwC(ytdGr):C.muted}40`}}>
            <div className="kpi-title" style={{background:"rgba(255,255,255,.04)",color:C.muted2}}>전년비 성장</div>
            <div className="kpi-body">
              <div style={{color:ytdGr?grwC(ytdGr):C.muted,fontSize:24,fontWeight:900,marginBottom:4}}>
                {ytdGr?(gNum(ytdGr)>0?"▲":"▼")+Math.abs(gNum(ytdGr)).toFixed(1)+"%":"─"}
              </div>
              <div style={{color:C.muted,fontSize:10}}>전년 {fmtN(ytdPrev)}</div>
              {ytdP>0&&ytdPrev>0&&<div style={{color:(ytdP-ytdPrev)>=0?C.green:C.red,fontSize:10,fontWeight:700}}>
                차이 {(ytdP-ytdPrev)>=0?"+":""}{Math.round(ytdP-ytdPrev)}억
              </div>}
            </div>
          </div>
          {/* CE 비중 */}
          {ceSharePct!==null&&(
            <div className="kpi-cell" style={{border:"1px solid #7c83f540"}}>
              <div className="kpi-title" style={{background:"rgba(124,131,245,.12)",color:"#9da4f5"}}>CE 비중 (누계)</div>
              <div className="kpi-body">
                <div style={{color:"#7c83f5",fontSize:24,fontWeight:900,marginBottom:4}}>{ceSharePct.toFixed(1)}%</div>
                {cePrevSharePct!==null&&<div style={{color:C.muted,fontSize:10}}>
                  전년 {cePrevSharePct.toFixed(1)}%
                  <span style={{color:(ceSharePct-cePrevSharePct)>=0?C.green:C.red,marginLeft:3,fontWeight:700}}>
                    {(ceSharePct-cePrevSharePct)>=0?"▲":"▼"}{Math.abs(ceSharePct-cePrevSharePct).toFixed(1)}%p
                  </span>
                </div>}
              </div>
            </div>
          )}
          {/* 누계 전년 */}
          <div className="kpi-cell" style={{border:`1px solid ${C.muted2}30`}}>
            <div className="kpi-title" style={{background:"rgba(255,255,255,.04)",color:C.muted2}}>누계 전년</div>
            <div className="kpi-body">
              <div style={{color:C.muted2,fontSize:24,fontWeight:900,marginBottom:4}}>{fmtN(ytdPrev)}</div>
              {prevAvgMonthly>0&&<div style={{color:C.muted,fontSize:10}}>월평 {prevAvgMonthly}억</div>}
            </div>
          </div>
          {/* 대외영업 비중 */}
          {daeSharePct!==null&&(
            <div className="kpi-cell" style={{border:`1px solid ${KC["대외영업"]}40`}}>
              <div className="kpi-title" style={{background:KC["대외영업"]+"15",color:KC["대외영업"]}}>대외영업 비중</div>
              <div className="kpi-body">
                <div style={{color:KC["대외영업"],fontSize:24,fontWeight:900}}>{daeSharePct.toFixed(1)}%</div>
              </div>
            </div>
          )}
        </div>

        {/* ── [2+3] 월별 + 누계 가로 나란히 (반응형) */}
        <style>{`.perf-row{display:flex;gap:12px}
        .perf-col{flex:1 1 0;min-width:0;border-radius:12px;overflow:hidden}
        .perf-col-monthly{background:#0b1d33;border:2px solid rgba(56,182,245,.25)}
        .perf-col-cum{background:#0d1430;border:2px solid rgba(167,139,250,.25)}
        .perf-col-header{padding:10px 14px 10px}
        .perf-col-monthly .perf-col-header{border-bottom:2px solid rgba(56,182,245,.2);background:rgba(56,182,245,.06)}
        .perf-col-cum .perf-col-header{border-bottom:2px solid rgba(167,139,250,.2);background:rgba(167,139,250,.06)}
        .perf-col-body{padding:14px}
        @media(max-width:900px){.perf-row{flex-direction:column}}`}</style>
        <div className="perf-row">

        {/* ── [2] 월별 실적 */}
        <div className="perf-col perf-col-monthly">
          {/* 월별 헤더 */}
          <div className="perf-col-header">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:6}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{background:"rgba(56,182,245,.2)",color:"#38b6f5",fontWeight:900,
                  fontSize:10,padding:"3px 8px",borderRadius:4,letterSpacing:".5px"}}>월별</span>
                <span style={{color,fontWeight:800,fontSize:13}}>{part}</span>
                <span style={{color:C.muted,fontWeight:400,fontSize:10}}>{yr}년 {mode}</span>
              </div>
              <div style={{display:"flex",gap:3}}>
                {["실적","달성","성장"].map(t=><TabBtn key={t} label={t} active={chartTab===t} color={color} onClick={()=>setChartTab(t)}/>)}
              </div>
            </div>
          </div>
          <div className="perf-col-body">
          {/* 차트 */}
          <div style={{marginBottom:10}}>
            {chartTab==="실적"&&<MiniChart labels={MONTHS} h={200} series={[
              {data:mPrev.map((v,i)=>i<=emi?v:null),color:"#a78bfa",op:.7,label:"전년"},
              {data:mTgt.map(v=>v||null),color:C.orange,dash:true,op:.8,label:"목표"},
              {data:mPerf.map((v,i)=>i<=emi?v:null),color,bold:true,fill:true,showLabels:true,label:"실적"},
            ]}/>}
            {chartTab==="달성"&&<MiniChart labels={MONTHS} h={200} pctMode={true} series={[
              {data:MONTHS.map((_,i)=>i<=emi?100:null),color:C.green,dash:true,op:.4,label:"100%"},
              {data:mArArr,color:C.teal,bold:true,fill:true,showLabels:true,label:"달성률"},
            ]}/>}
            {chartTab==="성장"&&<MiniChart labels={MONTHS} h={200} grMode={true} series={[
              {data:mGrArr,color:C.orange,bold:true,fill:true,showLabels:true,label:"성장률"},
            ]}/>}
          </div>
          {/* 핵심 4행 표 */}
          <div style={{overflowX:"auto"}}>
          <div style={{minWidth:680}}>
            <table style={{borderCollapse:"collapse",width:"100%",tableLayout:"fixed"}}>
              <thead>
                <tr style={{borderBottom:`2px solid ${C.b1}`}}>
                  <td style={{padding:"5px 10px",color:C.muted,fontWeight:700,fontSize:10,width:56}}>항목</td>
                  {MONTHS.map((m,i)=>(
                    <td key={m} style={{padding:"4px 4px",textAlign:"right",
                      color:i<=emi?C.muted2:C.muted,fontSize:10,fontWeight:600}}>
                      {m.replace("월","")}{i===emi&&<span style={{color,fontSize:7,display:"block",textAlign:"center"}}>▲</span>}
                    </td>
                  ))}
                  <td style={{padding:"4px 8px",textAlign:"right",color:C.accent,fontSize:10,fontWeight:700,width:48}}>누계</td>
                </tr>
              </thead>
              <tbody>
                {[
                  {key:"목표",   data:mTgt,    c:C.orange, sum:annT,      bg:"rgba(245,185,66,.06)"},
                  {key:"실적",   data:mPerf,   c:color,    sum:ytdP,    useEmi:true, bg:"rgba(56,182,245,.1)"},
                  {key:"달성률", data:mArArr,  c:C.teal,   sum:ytdAr,   isPct:true,  bg:"rgba(45,212,136,.05)"},
                  {key:"성장률", data:mGrArr,  c:C.green,  sum:ytdGr,   isPct:true,  isGrw:true, bg:"rgba(45,212,136,.03)"},
                  {key:"전년",   data:mPrev,   c:C.muted2, sum:ytdPrev, useEmi:true, bg:"rgba(255,255,255,.02)"},
                  {key:"목표차질",data:mPerf,  c:null,     sum:ytdP-ytdT, isDiff:true, diffBase:mTgt, bg:"rgba(255,255,255,.015)"},
                  {key:"전년차질",data:mPerf,  c:null,     sum:ytdP-ytdPrev, isDiff:true, diffBase:mPrev, bg:"rgba(255,255,255,.01)"},
                ].map(({key,data,c,sum,useEmi,isPct,isGrw,isDiff,diffBase,bg})=>(
                  <tr key={key} style={{borderBottom:`1px solid ${C.b1}14`,background:bg||"transparent"}}>
                    <td style={{padding:"4px 8px",fontWeight:700,fontSize:10,
                      color:isDiff?C.muted2:c,
                      background:bg||"transparent",whiteSpace:"nowrap"}}>{key}</td>
                    {(isDiff?mPerf:data).map((v,i)=>{
                      if(isDiff){
                        if(i>emi)return<td key={i} style={{textAlign:"right",padding:"3px 4px"}}><span style={{color:C.muted,fontSize:9}}>─</span></td>;
                        const d=mPerf[i]-(diffBase[i]||0);
                        return<td key={i} style={{padding:"3px 4px",textAlign:"right"}}>
                          <span style={{color:d>=0?C.green:C.red,fontSize:10,fontWeight:600}}>{d>=0?"+":""}{Math.round(d)}</span>
                        </td>;
                      }
                      const hide=(useEmi&&i>emi)||(isPct&&v===null);
                      return(
                        <td key={i} style={{padding:"3px 4px",textAlign:"right"}}>
                          {hide?<span style={{color:C.muted,fontSize:9}}>─</span>:
                            <span style={{color:isPct?(isGrw?grwC(String(v)):pctC(gNum(v))):i<=emi?c:C.muted,fontSize:10,fontWeight:i<=emi?600:400}}>
                              {isPct?(gNum(v)>0&&isGrw?"+":"")+Math.round(gNum(v))+"%":Math.round(gNum(v)).toLocaleString()}
                            </span>}
                        </td>
                      );
                    })}
                    <td style={{padding:"3px 8px",textAlign:"right"}}>
                      {isDiff?(
                        <span style={{color:sum>=0?C.green:C.red,fontWeight:800,fontSize:11}}>
                          {sum>=0?"+":""}{Math.round(sum)}억
                        </span>
                      ):sum!=null&&(
                        <span style={{color:c,fontWeight:800,fontSize:11}}>
                          {isPct?Math.round(gNum(sum))+"%":Math.round(gNum(sum)).toLocaleString()+"억"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>{/* 핵심표 끝 */}
          </div>{/* perf-col-body 끝 */}
        </div>{/* 월별 col 끝 */}

        {/* ── [3] 누계 실적 */}
        <div className="perf-col perf-col-cum">
          {/* 누계 헤더 */}
          <div className="perf-col-header">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:6}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{background:"rgba(167,139,250,.2)",color:"#a78bfa",fontWeight:900,
                  fontSize:10,padding:"3px 8px",borderRadius:4,letterSpacing:".5px"}}>누계</span>
                <span style={{color,fontWeight:800,fontSize:13}}>{part}</span>
                <span style={{color:C.muted,fontWeight:400,fontSize:10}}>{yr}년 {mode}</span>
              </div>
              <div style={{display:"flex",gap:3}}>
                {["실적","달성","성장"].map(t=><TabBtn key={t} label={t} active={cumChartTab===t} color={color} onClick={()=>setCumChartTab(t)}/>)}
              </div>
            </div>
          </div>
          <div className="perf-col-body">
          {/* 차트 */}
          <div style={{marginBottom:10}}>
            {cumChartTab==="실적"&&<MiniChart labels={MONTHS} h={200} series={[
              {data:cumPrevArr,color:"#a78bfa",op:.7,label:"전년누계"},
              {data:cumTgt,color:C.orange,dash:true,op:.8,label:"누계목표"},
              {data:cumPerf,color,bold:true,fill:true,showLabels:true,label:"누계실적"},
            ]}/>}
            {cumChartTab==="달성"&&<MiniChart labels={MONTHS} h={200} pctMode={true} series={[
              {data:MONTHS.map((_,i)=>i<=emi?100:null),color:C.green,dash:true,op:.4,label:"100%"},
              {data:cumAr,color:C.teal,bold:true,fill:true,showLabels:true,label:"누계달성률"},
            ]}/>}
            {cumChartTab==="성장"&&<MiniChart labels={MONTHS} h={200} grMode={true} series={[
              {data:cumGr,color:C.orange,bold:true,fill:true,showLabels:true,label:"누계성장률"},
            ]}/>}
          </div>
          {/* 표 — 전체폭 */}
          <div style={{overflowX:"auto"}}>
          <div style={{minWidth:680}}>
            <table style={{borderCollapse:"collapse",width:"100%",tableLayout:"fixed"}}>
              <thead>
                <tr style={{borderBottom:`2px solid ${C.b1}`}}>
                  <td style={{padding:"5px 8px",color:C.muted,fontWeight:700,fontSize:10,width:60}}>항목</td>
                  {MONTHS.map((m,i)=>(
                    <td key={m} style={{padding:"4px 4px",textAlign:"right",
                      color:i<=emi?C.muted2:C.muted,fontSize:10,fontWeight:600}}>
                      {m.replace("월","")}{i===emi&&<span style={{color,fontSize:7,display:"block",textAlign:"center"}}>▲</span>}
                    </td>
                  ))}
                  <td style={{padding:"4px 8px",textAlign:"right",color:C.accent,fontSize:10,fontWeight:700,width:48}}>누계</td>
                </tr>
              </thead>
              <tbody>
                {[
                  {key:"목표",   data:cumTgt,    c:C.orange, sum:annT,      bg:"rgba(245,185,66,.06)"},
                  {key:"실적",   data:cumPerf,   c:color,    sum:ytdP,      bg:"rgba(56,182,245,.1)"},
                  {key:"달성률", data:cumAr,     c:C.teal,   sum:ytdAr,   isPct:true,  bg:"rgba(45,212,136,.05)"},
                  {key:"성장률", data:cumGr,     c:C.green,  sum:ytdGr,   isPct:true, isGrw:true, bg:"rgba(45,212,136,.03)"},
                  {key:"전년",   data:cumPrevArr,c:C.muted2, sum:ytdPrev,   bg:"rgba(255,255,255,.02)"},
                  {key:"목표차질",data:cumPerf,  c:null,     sum:ytdP-ytdT, isDiff:true, diffBase:cumTgt, bg:"rgba(255,255,255,.015)"},
                  {key:"전년차질",data:cumPerf,  c:null,     sum:ytdP-ytdPrev, isDiff:true, diffBase:cumPrevArr, bg:"rgba(255,255,255,.01)"},
                ].map(({key,data,c,sum,isPct,isGrw,isDiff,diffBase,bg})=>(
                  <tr key={key} style={{borderBottom:`1px solid ${C.b1}14`,background:bg||"transparent"}}>
                    <td style={{padding:"4px 8px",fontWeight:700,fontSize:10,
                      color:isDiff?C.muted2:c,
                      background:bg||"transparent",whiteSpace:"nowrap"}}>{key}</td>
                    {(isDiff?cumPerf:data).map((v,i)=>{
                      if(isDiff){
                        if(v===null)return<td key={i} style={{textAlign:"right",padding:"3px 4px"}}><span style={{color:C.muted,fontSize:9}}>─</span></td>;
                        const base=diffBase[i];
                        const d=v-(base||0);
                        return<td key={i} style={{padding:"3px 4px",textAlign:"right"}}>
                          <span style={{color:d>=0?C.green:C.red,fontSize:10,fontWeight:600}}>{d>=0?"+":""}{Math.round(d)}</span>
                        </td>;
                      }
                      return(
                        <td key={i} style={{padding:"3px 4px",textAlign:"right"}}>
                          {v===null?<span style={{color:C.muted,fontSize:9}}>─</span>:
                            <span style={{color:isPct?(isGrw?grwC(String(v)):pctC(gNum(v))):i<=emi?c:C.muted,fontSize:10,fontWeight:i<=emi?600:400}}>
                              {isPct?(gNum(v)>0&&isGrw?"+":"")+Math.round(gNum(v))+"%":Math.round(gNum(v)).toLocaleString()}
                            </span>}
                        </td>
                      );
                    })}
                    <td style={{padding:"3px 8px",textAlign:"right"}}>
                      {isDiff?(
                        <span style={{color:sum>=0?C.green:C.red,fontWeight:800,fontSize:11}}>
                          {sum>=0?"+":""}{Math.round(sum)}억
                        </span>
                      ):sum!=null&&(
                        <span style={{color:c,fontWeight:800,fontSize:11}}>
                          {isPct?Math.round(gNum(sum))+"%":Math.round(gNum(sum)).toLocaleString()+"억"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          </div>{/* perf-col-body 끝 */}
        </div>{/* 누계 col 끝 */}
        </div>{/* perf-row 끝 */}

        {/* ── [4+5] 달성 계획 + 전년도 주요사항 통합 */}
        <div style={{background:C.card2,border:`2px solid ${C.accent}44`,borderRadius:12,padding:16}}>

          {/* 헤더 */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <span style={{fontWeight:800,fontSize:14,color:C.text}}>{isEditing?"✏️":"🔒"} 달성 계획</span>
              <span style={{color:C.muted,fontSize:11}}>{mode} · {part}</span>
              <span style={{fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:4,
                background:isEditing?C.orange+"28":C.muted+"18",
                color:isEditing?C.orange:C.muted,border:`1px solid ${isEditing?C.orange+"50":C.b1}`}}>
                {isEditing?"편집 중":"저장됨"}
              </span>
              {hasDraft&&isEditing&&<Chip c={C.orange}>● 미저장</Chip>}
            </div>

          </div>

          {/* 공통 월 선택 탭 */}
          <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:16,
            borderBottom:`1px solid ${C.b1}`,paddingBottom:12}}>
            <button onClick={()=>setSelMonth("annual")} style={{
              padding:"5px 12px",borderRadius:6,cursor:"pointer",fontWeight:700,fontSize:11,
              fontFamily:"inherit",border:`1px solid ${selMonth==="annual"?C.accent:C.b1}`,
              background:selMonth==="annual"?C.accent+"22":"transparent",
              color:selMonth==="annual"?C.accent:C.muted}}>
              연간
            </button>
            {MONTHS.map((m,i)=>{
              const hasPlan=getText(yr,mode,part,String(i)).length>0;
              const hasPrev=getText("prev_"+(yr==="26"?"25":yr==="25"?"24":"23"),mode,part,String(i)).length>0;
              return(
                <button key={i} onClick={()=>setSelMonth(i)} style={{
                  padding:"5px 10px",borderRadius:6,cursor:"pointer",fontWeight:700,fontSize:11,
                  fontFamily:"inherit",position:"relative",
                  border:`1px solid ${selMonth===i?color:hasPlan||hasPrev?color+"50":C.b1}`,
                  background:selMonth===i?color+"22":hasPlan||hasPrev?color+"08":"transparent",
                  color:selMonth===i?color:hasPlan||hasPrev?color+"bb":C.muted}}>
                  {m}
                  {(hasPlan||hasPrev)&&selMonth!==i&&(
                    <span style={{position:"absolute",top:2,right:2,width:4,height:4,
                      borderRadius:"50%",background:hasPlan?color:C.muted2,display:"block"}}/>
                  )}
                </button>
              );
            })}
          </div>

                    {/* 참고 카드 — title+body 구조 */}
          <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
            {(()=>{
              const cards=[
                {label:selMonth==="annual"?"연간 목표":`${MONTHS[selMonth]} 목표`,val:fmtN(selTgt),c:C.orange,bg:C.orange+"12"},
                {label:selMonth==="annual"?"전년 연간 실적":`${MONTHS[selMonth]} 전년 실적`,val:fmtN(selPrev),c:C.muted2,bg:"rgba(255,255,255,.04)"},
                {label:"성장 목표",
                 val:selGrowthTarget?(gNum(selGrowthTarget)>=0?"▲":"▼")+Math.abs(gNum(selGrowthTarget)).toFixed(1)+"%":"─",
                 c:selGrowthTarget?grwC(selGrowthTarget):C.muted,
                 bg:selGrowthTarget?(gNum(selGrowthTarget)>=0?"rgba(34,197,94,.08)":"rgba(239,68,68,.08)"):"rgba(255,255,255,.04)"},
                ...(selMi!==null&&selPerf>0?[{
                  label:`${MONTHS[selMi]} 실적`,
                  val:fmtN(selPerf),
                  sub:selAr?`달성 ${Math.round(gNum(selAr))}%`:selActualGr?(gNum(selActualGr)>=0?"▲":"▼")+Math.abs(gNum(selActualGr)).toFixed(1)+"%":null,
                  c:color,bg:color+"10"}]:[]),
              ];
              return cards.map(({label,val,sub,c,bg})=>(
                <div key={label} style={{
                  background:"#0a1628",borderRadius:8,overflow:"hidden",
                  border:`1px solid ${c}30`,flex:1,minWidth:110}}>
                  <div style={{background:bg||"rgba(255,255,255,.04)",padding:"5px 12px",
                    color:c,fontSize:9,fontWeight:800,letterSpacing:".4px",
                    borderBottom:"1px solid rgba(255,255,255,.06)"}}>{label}</div>
                  <div style={{padding:"10px 12px"}}>
                    <div style={{color:c,fontSize:18,fontWeight:900,letterSpacing:"-.5px"}}>{val}</div>
                    {sub&&<div style={{color:c,fontSize:11,fontWeight:700,marginTop:2,opacity:.8}}>{sub}</div>}
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* ── 달성 계획 에디터 */}
          <div style={{marginBottom:16}}>
            <div style={{color:C.accent,fontSize:11,fontWeight:700,marginBottom:8,
              display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>📝 {selMonth==="annual"?"연간":MONTHS[selMonth]} 달성 계획
                <span style={{color:C.muted,fontWeight:400,marginLeft:6,fontSize:10}}>
                  ({yr}년 · {mode} · {part})
                </span>
              </span>
            </div>
            <RichEditor
              key={`plan-${editorKey}-${yr}-${mode}-${part}-${selMonth}`}
              value={currentText}
              onChange={e=>setText(yr,mode,part,selMonth==="annual"?"annual":String(selMonth),e.target.value)}
              placeholder={"예)\n• 핵심 거래처 집중 공략: ○○가구 등 상위 10개사 목표 관리\n• 신규 개척: 신혼부부 대상 패키지 제안 확대\n• 캠페인 연계: 봄 이사철 프로모션 적극 활용\n• 리스크 관리: 전년 대비 취약 월 보완 방안 수립"}
              minHeight={200}
              readOnly={!isEditing}
              fontSize={14}
            />
          </div>

          {/* ── 전년도 주요사항 에디터 */}
          <div style={{borderTop:`1px solid ${C.b1}`,paddingTop:14,marginBottom:6}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexWrap:"wrap",gap:6}}>
              <div style={{color:C.muted2,fontSize:11,fontWeight:700}}>
                📌 {selMonth==="annual"?"연간":MONTHS[selMonth]} 전년도 주요사항
                <span style={{color:C.muted,fontWeight:400,marginLeft:6,fontSize:10}}>
                  ({(yr==="26"?"25":yr==="25"?"24":"23")}년 실적 특이사항)
                </span>
              </div>
              
            </div>
            <RichEditor
              key={`prev-${editorKey}-${yr}-${mode}-${part}-${selMonth}`}
              value={getText("prev_"+(yr==="26"?"25":yr==="25"?"24":"23"),mode,part,selMonth==="annual"?"annual":String(selMonth))}
              onChange={e=>setText("prev_"+(yr==="26"?"25":yr==="25"?"24":"23"),mode,part,selMonth==="annual"?"annual":String(selMonth),e.target.value)}
              placeholder={"예)\n• 1분기: 혼수·이사 수요 호조로 초과달성\n• 하반기: 경기침체로 고가 제품 부진\n• 연간 달성률 103%, 전년비 +5%"}
              minHeight={130}
              readOnly={!isEditing}
              fontSize={13}
            />
          </div>

          {/* ── 하단 버튼 (수정/취소/저장 하나로) */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
            marginTop:14,paddingTop:14,borderTop:`1px solid ${C.b1}`,flexWrap:"wrap",gap:8}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              {saveState==="saved"&&<span style={{color:C.green,fontSize:11,fontWeight:700}}>✅ 저장 완료</span>}
              {saveState==="error"&&<span style={{color:C.red,fontSize:11,fontWeight:700}}>❌ 저장 오류</span>}
              {hasDraft&&isEditing&&saveState==="idle"&&<span style={{color:C.muted,fontSize:10}}>● 3초 후 로컬 자동저장</span>}
            </div>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              {isEditing?(
                <>
                  <button onClick={()=>{setTextDraft({});setIsEditing(false);setEditorKey(k=>k+1);}} style={{
                    padding:"8px 18px",borderRadius:7,cursor:"pointer",fontWeight:700,fontSize:12,
                    fontFamily:"inherit",border:`1px solid ${C.muted}`,background:"transparent",color:C.muted}}>
                    취소
                  </button>
                  <button onClick={handleSave} disabled={!hasDraft||saveState==="saving"} style={{
                    padding:"8px 22px",borderRadius:7,fontWeight:700,fontSize:12,fontFamily:"inherit",
                    border:"none",cursor:hasDraft?"pointer":"default",
                    background:hasDraft?C.accent:"rgba(255,255,255,.08)",
                    color:hasDraft?"#fff":C.muted,opacity:saveState==="saving"?.6:1}}>
                    {saveState==="saving"?"저장 중...":"💾 저장"}
                  </button>
                </>
              ):(
                <button onClick={()=>{setIsEditing(true);setEditorKey(k=>k+1);}} style={{
                  padding:"8px 22px",borderRadius:7,cursor:"pointer",fontWeight:700,fontSize:12,
                  fontFamily:"inherit",border:`1px solid ${C.accent}`,background:C.accent+"22",color:C.accent}}>
                  ✏️ 수정
                </button>
              )}
            </div>
          </div>
        </div>

        <div style={{color:C.muted,fontSize:10,textAlign:"center",paddingBottom:16}}>
          충청영업팀 실적관리 시스템 · 달성 계획 / 비밀번호 문의: 관리자
        </div>
      </div>{/* plan-content 끝 */}
      </div>{/* plan-zoom-wrapper 끝 */}

      {/* 백업 모달 */}
      {showBackup&&(
        <BackupModal
          onClose={()=>setShowBackup(false)}
          perfData={perfData}
          planTextData={planTextData}
          onImportJson={handleImportJson}
          excelFn={()=>{handleExcel();}}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ErrorBoundary><PlanApp/></ErrorBoundary>);
