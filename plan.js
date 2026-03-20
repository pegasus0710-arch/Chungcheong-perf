"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// ─── 충청영업팀 달성계획 시스템 (plan.js) ───────────────────────────────────
// React + Firebase + Babel 인라인 JSX
// 이 파일은 plan.html에서 type="text/babel" 로 로드됩니다.

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useMemo = _React.useMemo,
  useCallback = _React.useCallback;

// ── ErrorBoundary
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(p) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [p]);
    _this.state = {
      err: null
    };
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(e, info) {
      console.error("PlanApp 에러:", e, info);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.state.err) return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 40,
          color: C.red,
          fontFamily: "monospace",
          background: C.bg,
          minHeight: "100vh"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 16
        }
      }, "\u26A0 \uB80C\uB354 \uC624\uB958"), /*#__PURE__*/React.createElement("pre", {
        style: {
          fontSize: 12,
          whiteSpace: "pre-wrap",
          color: C.text
        }
      }, String(this.state.err)), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.setState({
            err: null
          });
        },
        style: {
          marginTop: 20,
          padding: "8px 20px",
          background: "#7c83f5",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 14
        }
      }, "\uC7AC\uC2DC\uB3C4"));
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(e) {
      return {
        err: e
      };
    }
  }]);
}(React.Component); // ── 상수
var MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

// XLSX 지연 로드
var XLSX_CDN = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
var _xlsxLoading = null;
var loadXLSX = function loadXLSX() {
  if (window.XLSX) return Promise.resolve(window.XLSX);
  if (_xlsxLoading) return _xlsxLoading;
  _xlsxLoading = new Promise(function (resolve, reject) {
    var s = document.createElement("script");
    s.src = XLSX_CDN;
    s.onload = function () {
      return resolve(window.XLSX);
    };
    s.onerror = function () {
      return reject(new Error("XLSX 로드 실패"));
    };
    document.head.appendChild(s);
  });
  return _xlsxLoading;
};
var PARTS = ["대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
var MODES = ["판매", "매출"];
var YRS = ["26", "25", "24"];
var LS_PLAN = "cst_plan_draft_v1";
var LS_TEXT = "cst_plan_text_v1";

// ── 테마 시스템
var THEME_KEY = "cst_theme_v1";
var KC_DARK = {
  "대외영업": "#38b6f5",
  "혼수": "#f5b942",
  "뉴홈": "#2dd488",
  "입주": "#34d399",
  "이사": "#60a5fa",
  "SAC": "#c084fc",
  "거주중": "#f472b6",
  "B2B": "#fb923c",
  "SMB": "#facc15",
  "농협": "#a3e635",
  "휴대폰": "#94a3b8",
  "CE": "#7c83f5"
};
var KC_LIGHT = {
  "대외영업": "#0369a1",
  "혼수": "#92400e",
  "뉴홈": "#065f46",
  "입주": "#047857",
  "이사": "#0e7490",
  "SAC": "#6d28d9",
  "거주중": "#9d174d",
  "B2B": "#9a3412",
  "SMB": "#92400e",
  "농협": "#3f6212",
  "휴대폰": "#334155",
  "CE": "#4338ca"
};
var COLORS_DARK_P = {
  bg: "#07101f",
  surf: "#0d1b2e",
  card: "#0f2138",
  card2: "#0a1628",
  b1: "rgba(255,255,255,.08)",
  b2: "rgba(255,255,255,.14)",
  text: "#e8f4fd",
  muted: "#4a7090",
  muted2: "#6a9ab8",
  accent: "#7c83f5",
  blue: "#3b82f6",
  green: "#2dd488",
  orange: "#f5b942",
  teal: "#2dd4bf",
  red: "#f07070",
  판매: "#f5b942",
  매출: "#38b6f5",
  tooltip: "rgba(7,16,31,.85)"
};
var COLORS_LIGHT_P = {
  bg: "#e8edf4",
  surf: "#f4f7fb",
  card: "#ffffff",
  card2: "#f0f4f8",
  b1: "rgba(0,0,0,.12)",
  b2: "rgba(0,0,0,.22)",
  text: "#1e293b",
  muted: "#5a7a96",
  muted2: "#3d5a74",
  accent: "#4f46e5",
  blue: "#0369a1",
  green: "#047857",
  orange: "#b45309",
  teal: "#0f766e",
  red: "#b91c1c",
  판매: "#b45309",
  매출: "#0369a1",
  tooltip: "rgba(255,255,255,.97)"
};
var _initThemeP = function () {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch (_unused) {
    return 'light';
  }
}();
var KC = _initThemeP === 'light' ? _objectSpread({}, KC_LIGHT) : _objectSpread({}, KC_DARK);
var C = _initThemeP === 'light' ? _objectSpread({}, COLORS_LIGHT_P) : _objectSpread({}, COLORS_DARK_P);
(function () {
  try {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  } catch (_unused2) {}
})();
function applyThemeCSSP(theme) {
  var el = document.getElementById('cst-theme-css');
  if (!el) {
    el = document.createElement('style');
    el.id = 'cst-theme-css';
    document.head.appendChild(el);
  }
  if (theme === 'light') {
    el.textContent = "body{background:".concat(COLORS_LIGHT_P.bg, "!important;color:").concat(COLORS_LIGHT_P.text, "!important}\n      ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.18)!important}\n      select,textarea,input{color-scheme:light}");
  } else {
    el.textContent = "body{background:".concat(COLORS_DARK_P.bg, "!important;color:").concat(COLORS_DARK_P.text, "!important}\n      ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.12)!important}\n      select,textarea,input{color-scheme:dark}");
  }
}
var gNum = function gNum(v) {
  return parseFloat(v) || 0;
};
var sk = function sk(i) {
  return "".concat(i);
};
var fmtN = function fmtN(v) {
  return v > 0 ? Math.round(v).toLocaleString() + "억" : "─";
};
var pctC = function pctC(v) {
  var n = gNum(v);
  return n >= 100 ? C.green : n >= 80 ? C.orange : C.red;
};
var grwC = function grwC(v) {
  var n = gNum(v);
  return n > 0 ? C.green : n < 0 ? C.red : C.muted2;
};
function fullRow(r) {
  var base = {
    CE: 0,
    혼수: 0,
    입주: 0,
    이사: 0,
    SAC: 0,
    거주중: 0,
    SMB: 0,
    농협: 0,
    휴대폰: 0
  };
  if (!r) return _objectSpread(_objectSpread({}, base), {}, {
    대외영업: 0,
    뉴홈: 0,
    B2B: 0
  });
  var o = _objectSpread(_objectSpread({}, base), r);
  o.대외영업 = gNum(o.혼수) + gNum(o.입주) + gNum(o.이사) + gNum(o.SAC) + gNum(o.거주중) + gNum(o.SMB) + gNum(o.농협) + gNum(o.휴대폰);
  o.뉴홈 = gNum(o.입주) + gNum(o.이사);
  o.B2B = gNum(o.SMB) + gNum(o.농협) + gNum(o.휴대폰);
  return o;
}

// ── SVG 라인 차트 (범례 포함, y축 가변형)
function useIsMobile() {
  var _useState = useState(window.innerWidth < 768),
    _useState2 = _slicedToArray(_useState, 2),
    m = _useState2[0],
    setM = _useState2[1];
  useEffect(function () {
    var h = function h() {
      return setM(window.innerWidth < 768);
    };
    window.addEventListener("resize", h);
    return function () {
      return window.removeEventListener("resize", h);
    };
  }, []);
  return m;
}
function MiniChart(_ref) {
  var series = _ref.series,
    labels = _ref.labels,
    _ref$h = _ref.h,
    h = _ref$h === void 0 ? 240 : _ref$h,
    _ref$pctMode = _ref.pctMode,
    pctMode = _ref$pctMode === void 0 ? false : _ref$pctMode,
    _ref$grMode = _ref.grMode,
    grMode = _ref$grMode === void 0 ? false : _ref$grMode;
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    tip = _useState4[0],
    setTip = _useState4[1];
  var W = 560,
    PT = 22,
    PL = 46,
    PR = 16,
    PB = 40;
  var iH = h - PT - PB,
    iW = W - PL - PR;
  var allV = series.flatMap(function (s) {
    return s.data.filter(function (v) {
      return v !== null;
    });
  }).map(gNum);
  var hasData = allV.length > 0;
  if (!hasData) return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: C.muted,
      fontSize: 12
    }
  }, "\uB370\uC774\uD130 \uC5C6\uC74C");
  var maxV = Math.max.apply(Math, _toConsumableArray(allV).concat([pctMode ? 100 : 0.1]));
  // y축 가변: 실적 차트는 데이터 최솟값 기준 (격차 강조)
  var rawMin = Math.min.apply(Math, _toConsumableArray(allV));
  var padding = (maxV - rawMin) * 0.12;
  // pctMode도 데이터 기준 가변 (단, 100% 기준선 표시 유지)
  var minV = grMode ? Math.min(rawMin, 0) : Math.max(0, rawMin - padding);
  var range = maxV - minV || 1;
  var cy = function cy(v) {
    return PT + iH * (1 - (gNum(v) - minV) / range);
  };
  var cx = function cx(i) {
    return PL + iW * i / 11;
  };
  var smooth = function smooth(pts) {
    if (!pts.length) return "";
    var d = "M".concat(pts[0].x, ",").concat(pts[0].y);
    for (var i = 1; i < pts.length; i++) {
      var px = pts[i - 1],
        nx = pts[i];
      var cpx = (px.x + nx.x) / 2;
      d += " C".concat(cpx, ",").concat(px.y, " ").concat(cpx, ",").concat(nx.y, " ").concat(nx.x, ",").concat(nx.y);
    }
    return d;
  };
  // Y축 눈금
  var yTicks = [0, .2, .4, .6, .8, 1].map(function (r) {
    return {
      r: r,
      v: minV + range * r
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 10,
      paddingLeft: PL
    }
  }, series.map(function (s, si) {
    return /*#__PURE__*/React.createElement("div", {
      key: si,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: s.dash ? 0 : 18,
        height: 0,
        borderTop: "".concat(s.bold ? 3 : 2, "px ").concat(s.dash ? "dashed" : "solid", " ").concat(s.color),
        opacity: s.op || 1
      }
    }), s.dash && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 18,
        height: 0,
        borderTop: "2px dashed ".concat(s.color),
        opacity: s.op || 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 11
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(h),
    style: {
      width: "100%",
      height: h,
      overflow: "visible"
    },
    onMouseLeave: function onMouseLeave() {
      return setTip(null);
    }
  }, yTicks.map(function (_ref2) {
    var r = _ref2.r,
      v = _ref2.v;
    return /*#__PURE__*/React.createElement("g", {
      key: r
    }, /*#__PURE__*/React.createElement("line", {
      x1: PL,
      y1: PT + iH * (1 - r),
      x2: W - PR,
      y2: PT + iH * (1 - r),
      stroke: C.b1,
      strokeWidth: 1,
      opacity: .8
    }), /*#__PURE__*/React.createElement("text", {
      x: PL - 5,
      y: PT + iH * (1 - r) + 4,
      fill: C.muted,
      fontSize: 10,
      textAnchor: "end"
    }, pctMode || grMode ? Math.round(v) + "%" : Math.round(v)));
  }), grMode && /*#__PURE__*/React.createElement("line", {
    x1: PL,
    y1: cy(0),
    x2: W - PR,
    y2: cy(0),
    stroke: C.muted2,
    strokeWidth: 1,
    strokeDasharray: "3,2",
    opacity: .5
  }), pctMode && /*#__PURE__*/React.createElement("line", {
    x1: PL,
    y1: cy(100),
    x2: W - PR,
    y2: cy(100),
    stroke: C.green,
    strokeWidth: 1,
    strokeDasharray: "4,3",
    opacity: .5
  }), series.map(function (s, si) {
    var pts = s.data.map(function (v, i) {
      return {
        x: cx(i),
        y: cy(v),
        v: gNum(v)
      };
    }).filter(function (_, i) {
      return s.data[i] !== null;
    });
    if (!pts.length) return null;
    var d = smooth(pts);
    var fillPath = "".concat(d, " L").concat(pts[pts.length - 1].x, ",").concat(cy(Math.max(minV, 0)), " L").concat(pts[0].x, ",").concat(cy(Math.max(minV, 0)), " Z");
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, s.fill && /*#__PURE__*/React.createElement("path", {
      d: fillPath,
      fill: s.color,
      opacity: .08
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: s.color,
      strokeWidth: s.bold ? 2.5 : 1.5,
      strokeDasharray: s.dash ? "6,3" : undefined,
      opacity: s.op || 1
    }), pts.map(function (p, pi) {
      return /*#__PURE__*/React.createElement("circle", {
        key: pi,
        cx: p.x,
        cy: p.y,
        r: s.bold ? 4.5 : 3,
        fill: s.color,
        stroke: C.bg,
        strokeWidth: 1.5,
        opacity: s.op || 1
      });
    }), s.showLabels && pts.map(function (p, pi) {
      var prev = pts[pi - 1];
      var goUp = !prev || p.y < prev.y;
      return /*#__PURE__*/React.createElement("text", {
        key: pi,
        x: p.x,
        y: p.y + (goUp ? -13 : 17),
        fill: s.color,
        fontSize: 10,
        fontWeight: 700,
        textAnchor: p.x < PL + 35 ? "start" : p.x > W - PR - 35 ? "end" : "middle"
      }, pctMode || grMode ? Math.round(p.v) + "%" : Math.round(p.v));
    }));
  }), labels.map(function (_, i) {
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: cx(i) - 22,
      y: PT,
      width: 44,
      height: iH,
      fill: "transparent",
      onMouseEnter: function onMouseEnter() {
        var items = series.map(function (s) {
          return {
            label: s.label,
            color: s.color,
            val: s.data[i]
          };
        }).filter(function (it) {
          return it.val !== null;
        });
        setTip({
          mi: i,
          items: items,
          xi: i
        });
      }
    });
  }), labels.map(function (l, i) {
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: cx(i),
      y: h - 8,
      fill: C.muted,
      fontSize: 10,
      textAnchor: "middle"
    }, l);
  })), tip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "".concat(Math.min(tip.xi / 11 * 84 + 4, 62), "%"),
      top: "10%",
      background: C.tooltip,
      border: "1px solid ".concat(C.b1),
      borderRadius: 8,
      padding: "10px 14px",
      pointerEvents: "none",
      zIndex: 10,
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 10,
      marginBottom: 5,
      fontWeight: 700
    }
  }, labels[tip.mi]), tip.items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 14,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 11
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: it.color,
        fontSize: 12,
        fontWeight: 800
      }
    }, pctMode || grMode ? Math.round(gNum(it.val)) + "%" : Math.round(gNum(it.val)) + "억"));
  })));
}
function Chip(_ref3) {
  var c = _ref3.c,
    children = _ref3.children;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: c + "22",
      color: c,
      fontSize: 9,
      fontWeight: 700,
      padding: "2px 6px",
      borderRadius: 4,
      border: "1px solid ".concat(c, "40")
    }
  }, children);
}

// ── 자동 높이 textarea
function AutoTextarea(_ref4) {
  var value = _ref4.value,
    onChange = _ref4.onChange,
    placeholder = _ref4.placeholder,
    _ref4$minHeight = _ref4.minHeight,
    minHeight = _ref4$minHeight === void 0 ? 220 : _ref4$minHeight,
    _ref4$readOnly = _ref4.readOnly,
    readOnly = _ref4$readOnly === void 0 ? false : _ref4$readOnly,
    _ref4$fontSize = _ref4.fontSize,
    fontSize = _ref4$fontSize === void 0 ? 14 : _ref4$fontSize,
    _ref4$style = _ref4.style,
    style = _ref4$style === void 0 ? {} : _ref4$style;
  var ref = useRef(null);
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.max(minHeight, el.scrollHeight) + "px";
  }, [value, minHeight, fontSize]);
  return /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    value: value,
    onChange: readOnly ? undefined : onChange,
    readOnly: readOnly,
    placeholder: readOnly ? "" : placeholder,
    style: _objectSpread({
      width: "100%",
      minHeight: minHeight,
      background: C.bg,
      border: "1px solid ".concat(readOnly ? C.b1 : C.accent + "60"),
      borderRadius: 8,
      padding: "14px 16px",
      color: C.text,
      fontSize: fontSize,
      lineHeight: 1.75,
      outline: "none",
      resize: readOnly ? "none" : "vertical",
      overflow: "hidden",
      cursor: readOnly ? "default" : "text",
      opacity: readOnly ? .85 : 1,
      transition: "height .1s ease, border-color .2s"
    }, style)
  });
}

// ── 리치 에디터 (툴바 포함)
// ── 표 삽입 그리드 피커 (독립 컴포넌트 — Hook 규칙 준수)
function TablePicker(_ref5) {
  var onInsert = _ref5.onInsert,
    BtnS = _ref5.BtnS;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPicker = _useState6[0],
    setShowPicker = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    hoverR = _useState8[0],
    setHoverR = _useState8[1];
  var _useState9 = useState(0),
    _useState0 = _slicedToArray(_useState9, 2),
    hoverC = _useState0[0],
    setHoverC = _useState0[1];
  var _useState1 = useState('row'),
    _useState10 = _slicedToArray(_useState1, 2),
    headerType = _useState10[0],
    setHeaderType = _useState10[1];
  var MAX_R = 8,
    MAX_C = 8;
  var headerOpts = [{
    v: 'row',
    l: '1행 제목'
  }, {
    v: 'col',
    l: '1열 제목'
  }, {
    v: 'both',
    l: '행+열 제목'
  }, {
    v: 'none',
    l: '제목 없음'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      setShowPicker(function (p) {
        return !p;
      });
    },
    style: _objectSpread({}, BtnS),
    title: "\uD45C \uC0BD\uC785"
  }, "\u229E \uD45C"), showPicker && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      zIndex: 200,
      background: C.card,
      border: "1px solid ".concat(C.b1),
      borderRadius: 8,
      padding: 8,
      marginTop: 4,
      boxShadow: "0 4px 16px rgba(0,0,0,.15)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      marginBottom: 8,
      flexWrap: "wrap"
    }
  }, headerOpts.map(function (o) {
    return /*#__PURE__*/React.createElement("button", {
      key: o.v,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        setHeaderType(o.v);
      },
      style: {
        padding: "2px 7px",
        borderRadius: 4,
        cursor: "pointer",
        fontSize: 9,
        fontWeight: 700,
        fontFamily: "inherit",
        border: "1px solid ".concat(headerType === o.v ? C.accent : C.b1),
        background: headerType === o.v ? C.accent + "20" : "transparent",
        color: headerType === o.v ? C.accent : C.muted
      }
    }, o.l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 9,
      marginBottom: 6,
      textAlign: "center",
      fontWeight: 600
    }
  }, hoverR > 0 && hoverC > 0 ? "".concat(hoverR, "\uD589 \xD7 ").concat(hoverC, "\uC5F4") : "표 크기 선택"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(".concat(MAX_C, ",18px)"),
      gap: 2
    }
  }, Array.from({
    length: MAX_R
  }, function (_, ri) {
    return Array.from({
      length: MAX_C
    }, function (_, ci) {
      return /*#__PURE__*/React.createElement("div", {
        key: "".concat(ri, "-").concat(ci),
        style: {
          width: 18,
          height: 18,
          borderRadius: 2,
          cursor: "pointer",
          background: ri < hoverR && ci < hoverC ? C.accent + "60" : C.b1,
          border: "1px solid ".concat(ri < hoverR && ci < hoverC ? C.accent : C.b2),
          transition: "background .1s"
        },
        onMouseEnter: function onMouseEnter() {
          setHoverR(ri + 1);
          setHoverC(ci + 1);
        },
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          onInsert(ri + 1, ci + 1, headerType);
          setShowPicker(false);
          setHoverR(0);
          setHoverC(0);
        }
      });
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      borderTop: "1px solid ".concat(C.b1),
      paddingTop: 6,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\uC9C1\uC811\uC785\uB825:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 1,
    max: 20,
    defaultValue: 3,
    id: "tbl-r",
    style: {
      width: 32,
      background: C.bg,
      border: "1px solid ".concat(C.b1),
      borderRadius: 3,
      padding: "1px 4px",
      color: C.text,
      fontSize: 10,
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 1,
    max: 20,
    defaultValue: 3,
    id: "tbl-c",
    style: {
      width: 32,
      background: C.bg,
      border: "1px solid ".concat(C.b1),
      borderRadius: 3,
      padding: "1px 4px",
      color: C.text,
      fontSize: 10,
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      var r = parseInt(document.getElementById("tbl-r").value) || 3;
      var c = parseInt(document.getElementById("tbl-c").value) || 3;
      onInsert(Math.min(r, 20), Math.min(c, 20), headerType);
      setShowPicker(false);
    },
    style: _objectSpread(_objectSpread({}, BtnS), {}, {
      padding: "1px 7px",
      fontSize: 10
    })
  }, "\uC0BD\uC785"))));
}

// ── 툴바 구분선 (외부 컴포넌트)
function ToolbarSep() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: C.b2,
      margin: "0 3px",
      flexShrink: 0
    }
  });
}
function ListPicker(_ref6) {
  var BtnS = _ref6.BtnS,
    execCmd = _ref6.execCmd,
    colors = _ref6.colors;
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    open = _useState12[0],
    setOpen = _useState12[1];
  var cc = colors || {
    card: "#0f2035",
    b1: "#1b3353",
    card2: "#132843",
    text: "#cce4f7"
  };
  var lists = [{
    l: "• 글머리",
    fn: function fn() {
      return execCmd("insertUnorderedList");
    }
  }, {
    l: "1. 번호",
    fn: function fn() {
      return execCmd("insertOrderedList");
    }
  }, {
    l: "○ 원형",
    fn: function fn() {
      return execCmd("insertHTML", "<ul style='list-style-type:circle;padding-left:1.6em;margin:4px 0'><li>내용</li></ul>");
    }
  }, {
    l: "▪ 사각형",
    fn: function fn() {
      return execCmd("insertHTML", "<ul style='list-style-type:square;padding-left:1.6em;margin:4px 0'><li>내용</li></ul>");
    }
  }, {
    l: "① 원문자",
    fn: function fn() {
      return execCmd("insertHTML", "<ol style='list-style-type:decimal;padding-left:1.6em;margin:4px 0'><li>내용</li></ol>");
    }
  }, {
    l: "ⓐ 알파벳",
    fn: function fn() {
      return execCmd("insertHTML", "<ol style='list-style-type:lower-alpha;padding-left:1.6em;margin:4px 0'><li>내용</li></ol>");
    }
  }, {
    l: "ⅰ 로마자",
    fn: function fn() {
      return execCmd("insertHTML", "<ol style='list-style-type:lower-roman;padding-left:1.6em;margin:4px 0'><li>내용</li></ol>");
    }
  }, {
    l: "→ 화살표",
    fn: function fn() {
      return execCmd("insertHTML", "<ul style='list-style:none;padding-left:1.4em;margin:4px 0'><li style=\"position:relative\"><span style=\"position:absolute;left:-1.2em\">→</span>내용</li></ul>");
    }
  }, {
    l: "✓ 체크",
    fn: function fn() {
      return execCmd("insertHTML", "<ul style='list-style:none;padding-left:1.4em;margin:4px 0'><li style=\"position:relative\"><span style=\"position:absolute;left:-1.2em\">✓</span>내용</li></ul>");
    }
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      setOpen(function (p) {
        return !p;
      });
    },
    style: _objectSpread({}, BtnS),
    title: "\uBAA9\uB85D"
  }, "\u2261 \uBAA9\uB85D\u25BE"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      zIndex: 200,
      background: C.card,
      border: "1px solid ".concat(C.b1),
      borderRadius: 7,
      padding: "4px 0",
      marginTop: 3,
      minWidth: 120,
      boxShadow: "0 4px 16px rgba(0,0,0,.15)"
    }
  }, lists.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "6px 14px",
        cursor: "pointer",
        fontSize: 11,
        color: C.text,
        fontWeight: 600,
        whiteSpace: "nowrap"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = C.card2;
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = "";
      },
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        item.fn();
        setOpen(false);
      }
    }, item.l);
  })));
}
function SymbolPicker(_ref7) {
  var BtnS = _ref7.BtnS,
    execCmd = _ref7.execCmd;
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    open = _useState14[0],
    setOpen = _useState14[1];
  var groups = [{
    g: "화살표",
    s: ["→", "←", "↑", "↓", "↔", "↕", "⇒", "⇐", "⇑", "⇓", "⇔", "▶", "◀", "▲", "▼"]
  }, {
    g: "기호",
    s: ["●", "○", "■", "□", "◆", "◇", "★", "☆", "♦", "♣", "♠", "♥", "•", "‣", "⁃"]
  }, {
    g: "체크",
    s: ["✓", "✔", "✗", "✘", "☑", "☒", "☐", "⊕", "⊖", "⊗", "⊘", "✅", "❌", "⚠", "ℹ"]
  }, {
    g: "숫자",
    s: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "ⓐ", "ⓑ", "ⓒ", "ⓘ", "ⓜ"]
  }, {
    g: "기타",
    s: ["※", "◎", "△", "▽", "◁", "▷", "…", "—", "–", "·", "°", "±", "×", "÷", "≈"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      setOpen(function (p) {
        return !p;
      });
    },
    style: _objectSpread({}, BtnS),
    title: "\uD2B9\uC218\uAE30\uD638"
  }, "\u03A9 \uAE30\uD638\u25BE"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: 0,
      zIndex: 200,
      background: C.card,
      border: "1px solid ".concat(C.b1),
      borderRadius: 7,
      padding: "8px",
      marginTop: 3,
      width: 240,
      boxShadow: "0 4px 16px rgba(0,0,0,.15)"
    }
  }, groups.map(function (_ref8) {
    var g = _ref8.g,
      s = _ref8.s;
    return /*#__PURE__*/React.createElement("div", {
      key: g,
      style: {
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 9,
        fontWeight: 700,
        marginBottom: 4,
        paddingBottom: 2,
        borderBottom: "1px solid ".concat(C.b1)
      }
    }, g), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 2
      }
    }, s.map(function (sym) {
      return /*#__PURE__*/React.createElement("button", {
        key: sym,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          execCmd("insertText", sym);
          setOpen(false);
        },
        style: {
          width: 26,
          height: 26,
          border: "1px solid ".concat(C.b1),
          borderRadius: 4,
          background: C.bg,
          cursor: "pointer",
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.text,
          fontFamily: "inherit"
        },
        onMouseEnter: function onMouseEnter(e) {
          return e.currentTarget.style.background = C.card2;
        },
        onMouseLeave: function onMouseLeave(e) {
          return e.currentTarget.style.background = C.bg;
        },
        title: sym
      }, sym);
    })));
  })));
}
function RichEditor(_ref9) {
  var value = _ref9.value,
    onChange = _ref9.onChange,
    placeholder = _ref9.placeholder,
    _ref9$minHeight = _ref9.minHeight,
    minHeight = _ref9$minHeight === void 0 ? 220 : _ref9$minHeight,
    _ref9$readOnly = _ref9.readOnly,
    readOnly = _ref9$readOnly === void 0 ? false : _ref9$readOnly,
    _ref9$fontSize = _ref9.fontSize,
    fontSize = _ref9$fontSize === void 0 ? 14 : _ref9$fontSize,
    _ref9$style = _ref9.style,
    style = _ref9$style === void 0 ? {} : _ref9$style,
    _ref9$theme = _ref9.theme,
    theme = _ref9$theme === void 0 ? "light" : _ref9$theme;
  var ref = useRef(null);

  // 일반텍스트 → HTML 변환 (구버전 데이터 호환)
  var toHTML = function toHTML(v) {
    if (!v) return "";
    // 이미 HTML 태그가 있으면 그대로
    if (v.indexOf("<") !== -1 && v.indexOf(">") !== -1) return v;
    // 일반 텍스트: 줄바꿈을 <br>로, &<> 이스케이프
    return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").split("\n").join("<br>");
  };
  var lastVal = useRef(null); // 마지막으로 설정한 외부 value
  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    // value가 외부에서 바뀌었을 때만 innerHTML 갱신 (취소/파트변경 포함)
    if (lastVal.current !== value) {
      el.innerHTML = toHTML(value);
      lastVal.current = value;
    }
    el.style.height = "auto";
    el.style.height = Math.max(minHeight, el.scrollHeight) + "px";
  }, [value, minHeight]);
  var emit = function emit() {
    var _ref$current;
    var v = ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.innerHTML) || "";
    if (onChange) onChange({
      target: {
        value: v
      }
    });
    lastVal.current = v; // emit 후엔 현재 HTML을 lastVal로 업데이트
  };

  // ── 표 삽입 함수 (headerType: 'row'=1행제목, 'col'=1열제목, 'none'=제목없음)
  var insertTable = function insertTable(rows, cols) {
    var headerType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'row';
    var el = ref.current;
    if (!el) return;
    el.focus();
    var cellStyle = "border:1px solid ".concat(C.b2, ";padding:6px 10px;min-width:60px;font-size:13px;color:").concat(C.text, ";");
    var headerStyle = cellStyle + "background:".concat(C.accent, "18;font-weight:700;");
    var html = "<table style=\"border-collapse:collapse;width:100%;margin:8px 0;\">";
    for (var r = 0; r < rows; r++) {
      html += "<tr>";
      for (var c = 0; c < cols; c++) {
        var isHeader = headerType === 'row' && r === 0 || headerType === 'col' && c === 0 || headerType === 'both' && (r === 0 || c === 0);
        if (isHeader) {
          var label = headerType === 'row' ? "\uC81C\uBAA9".concat(c + 1) : headerType === 'col' ? "\uC81C\uBAA9".concat(r + 1) : r === 0 ? "\uC81C\uBAA9".concat(c + 1) : "\uC81C\uBAA9".concat(r + 1);
          html += "<th contenteditable=\"true\" style=\"".concat(headerStyle, "\">").concat(label, "</th>");
        } else {
          html += "<td contenteditable=\"true\" style=\"".concat(cellStyle, "\">\uB0B4\uC6A9</td>");
        }
      }
      html += "</tr>";
    }
    html += "</table><br>";
    execCmd("insertHTML", html);
  };

  // ── 선택 영역에 span 스타일 적용 (execCommand 대체)
  var applyStyle = function applyStyle(cssProp, cssVal) {
    var el = ref.current;
    if (!el) return;
    el.focus();
    var sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    var range = sel.getRangeAt(0);
    // 빈값 = 해당 스타일 제거: 선택 영역 내 모든 span의 해당 속성 제거
    if (cssVal === "") {
      if (!range.collapsed) {
        var frag = range.cloneContents();
        var spans = frag.querySelectorAll('span');
        spans.forEach(function (s) {
          s.style[cssProp] = "";
          if (!s.getAttribute('style')) s.removeAttribute('style');
        });
        // DOM에 반영
        var allSpans = el.querySelectorAll('span');
        allSpans.forEach(function (s) {
          s.style[cssProp] = "";
          if (s.getAttribute('style') === "") s.removeAttribute('style');
        });
        emit();
      }
      return;
    }
    var makeSpan = function makeSpan() {
      var span = document.createElement('span');
      span.style[cssProp] = cssVal;
      if (cssProp === 'fontSize') span.style.lineHeight = '1.4';
      return span;
    };
    if (range.collapsed) {
      var span = makeSpan();
      span.innerHTML = '&#8203;';
      range.insertNode(span);
      range.setStart(span, 1);
      range.setEnd(span, 1);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      var _frag = range.extractContents();
      var _span = makeSpan();
      _span.appendChild(_frag);
      range.insertNode(_span);
      range.selectNodeContents(_span);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    emit();
  };
  var applyBlock = function applyBlock(tag) {
    var styleStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var el = ref.current;
    if (!el) return;
    el.focus();
    var sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    var range = sel.getRangeAt(0);
    var block = document.createElement(tag);
    if (styleStr) block.setAttribute('style', styleStr);
    if (range.collapsed) {
      block.innerHTML = '<br>';
      range.insertNode(block);
    } else {
      var frag = range.extractContents();
      block.appendChild(frag);
      range.insertNode(block);
    }
    // 커서를 블록 뒤로
    var after = document.createRange();
    after.setStartAfter(block);
    after.collapse(true);
    sel.removeAllRanges();
    sel.addRange(after);
    emit();
  };
  var execCmd = function execCmd(cmd) {
    var _ref$current2;
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (_ref$current2 = ref.current) === null || _ref$current2 === void 0 || _ref$current2.focus();
    document.execCommand(cmd, false, val);
    emit();
  };

  // ── 스타일 상수
  var SIZES = [{
    l: "소 (11px)",
    v: "11px"
  }, {
    l: "보통 (14px)",
    v: "14px"
  }, {
    l: "중 (18px)",
    v: "18px"
  }, {
    l: "대 (22px)",
    v: "22px"
  }, {
    l: "특대 (28px)",
    v: "28px"
  }];
  var HEADING_STYLES = [{
    l: "일반",
    tag: "p",
    s: ""
  }, {
    l: "제목 1",
    tag: "h2",
    s: "font-size:26px;font-weight:900;margin:8px 0 4px;color:".concat(theme === "light" ? "#1e293b" : C.text, ";border-bottom:2px solid ").concat(C.accent, "60;padding-bottom:4px")
  }, {
    l: "제목 2",
    tag: "h3",
    s: "font-size:20px;font-weight:800;margin:6px 0 4px;color:".concat(theme === "light" ? "#1e293b" : C.text)
  }, {
    l: "제목 3",
    tag: "h4",
    s: "font-size:16px;font-weight:700;margin:4px 0;color:".concat(theme === "light" ? "#334155" : C.muted2)
  }, {
    l: "강조 블록",
    tag: "div",
    s: "border-left:3px solid ".concat(C.accent, ";padding:6px 12px;margin:6px 0;background:").concat(C.accent, "12;color:").concat(theme === "light" ? "#1e293b" : C.text)
  }, {
    l: "경고 블록",
    tag: "div",
    s: "border-left:3px solid #f87171;padding:6px 12px;margin:6px 0;background:rgba(248,113,113,.08);color:".concat(theme === "light" ? "#1e293b" : C.text)
  }];
  var COLORS = [{
    l: "기본",
    v: ""
  }, {
    l: "빨강",
    v: "#ef4444"
  }, {
    l: "주황",
    v: "#f97316"
  }, {
    l: "노랑",
    v: "#facc15"
  }, {
    l: "초록",
    v: "#22c55e"
  }, {
    l: "파랑",
    v: "#60a5fa"
  }, {
    l: "하늘",
    v: "#38bdf8"
  }, {
    l: "보라",
    v: "#a855f7"
  }, {
    l: "분홍",
    v: "#f472b6"
  }, {
    l: "흰색",
    v: "#ffffff"
  }, {
    l: "회색",
    v: "#9ca3af"
  }];
  var BG_COLORS = [{
    l: "없음",
    v: ""
  }, {
    l: "노랑",
    v: "#fef08a"
  }, {
    l: "연두",
    v: "#bbf7d0"
  }, {
    l: "하늘",
    v: "#bfdbfe"
  }, {
    l: "분홍",
    v: "#fecaca"
  }, {
    l: "보라",
    v: "#e9d5ff"
  }, {
    l: "주황",
    v: "#fed7aa"
  }, {
    l: "회색",
    v: "#e5e7eb"
  }];
  var BtnS = {
    padding: "3px 9px",
    border: "1px solid ".concat(C.b2),
    borderRadius: 4,
    background: C.card,
    color: C.muted2,
    cursor: "pointer",
    fontSize: 11,
    fontFamily: "inherit",
    fontWeight: 700,
    lineHeight: 1.5,
    transition: "background .1s",
    userSelect: "none",
    whiteSpace: "nowrap"
  };
  var SelS = {
    background: C.card2,
    border: "1px solid ".concat(C.b1),
    color: C.muted2,
    fontSize: 11,
    borderRadius: 4,
    padding: "3px 6px",
    cursor: "pointer",
    fontFamily: "inherit"
  };
  var Sep = ToolbarSep;

  // 일반텍스트 → HTML 변환 (구버전 데이터 호환) - readOnly용
  var toHTMLStatic = function toHTMLStatic(v) {
    if (!v) return "";
    if (v.indexOf("<") !== -1 && v.indexOf(">") !== -1) return v;
    return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").split("\n").join("<br>");
  };

  // ← 반드시 readOnly return 앞에 선언
  var _useState15 = useState(minHeight),
    _useState16 = _slicedToArray(_useState15, 2),
    editorH = _useState16[0],
    setEditorH = _useState16[1];
  if (readOnly) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "rich-view",
      style: _objectSpread({
        padding: "12px 16px",
        borderRadius: 8,
        border: "1px solid ".concat(C.b1),
        minHeight: minHeight,
        color: C.text,
        fontSize: 14,
        lineHeight: 1.8,
        wordBreak: "break-word",
        background: "rgba(255,255,255,.02)",
        opacity: .9
      }, style),
      dangerouslySetInnerHTML: {
        __html: toHTMLStatic(value)
      }
    }), /*#__PURE__*/React.createElement("style", null, "\n          .rich-view ul, .rich-view ol { padding-left:1.6em; margin:4px 0; }\n          .rich-view ul li, .rich-view ol li { margin-bottom:3px; padding-left:2px; color:".concat(C.text, "; }\n          .rich-view p, .rich-view div, .rich-view span:not([style]) { color:").concat(C.text, "; }\n          .rich-view h2, .rich-view h3, .rich-view h4 { color:").concat(C.text, "; }\n          .rich-view table { border-collapse:collapse; width:100%; margin:8px 0; }\n          .rich-view td, .rich-view th { border:1px solid ").concat(C.b2, "; padding:6px 10px; font-size:13px; color:").concat(C.text, "; }\n          .rich-view th { background:").concat(C.accent, "18; font-weight:700; }\n        ")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      borderRadius: 8,
      border: "1px solid rgba(56,182,245,.3)"
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card2,
      borderBottom: "1px solid ".concat(C.b1),
      padding: "6px 10px",
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, [["B", "bold", "굵게"], ["I", "italic", "기울임"], ["U", "underline", "밑줄"], ["S", "strikeThrough", "취소선"]].map(function (_ref0) {
    var _ref1 = _slicedToArray(_ref0, 3),
      l = _ref1[0],
      c = _ref1[1],
      t = _ref1[2];
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        execCmd(c);
      },
      title: t,
      style: _objectSpread(_objectSpread({}, BtnS), {}, {
        fontWeight: c === "bold" ? 900 : 700,
        fontStyle: c === "italic" ? "italic" : "normal",
        textDecoration: c === "underline" ? "underline" : c === "strikeThrough" ? "line-through" : "none"
      })
    }, l);
  }), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, SelS), {}, {
      maxWidth: 90
    }),
    defaultValue: "",
    onChange: function onChange(e) {
      var h = HEADING_STYLES.find(function (x) {
        return x.l === e.target.value;
      });
      if (h) {
        if (h.tag === "p") execCmd("formatBlock", "p");else applyBlock(h.tag, h.s);
      }
      e.target.value = "";
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\uB2E8\uB77D\u25BE"), HEADING_STYLES.map(function (h) {
    return /*#__PURE__*/React.createElement("option", {
      key: h.l,
      value: h.l
    }, h.l);
  })), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, SelS), {}, {
      maxWidth: 90
    }),
    defaultValue: "",
    onChange: function onChange(e) {
      var v = e.target.value;
      if (v) applyStyle("fontSize", v);
      e.target.value = "";
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\uD06C\uAE30\u25BE"), SIZES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.v,
      value: s.v
    }, s.l);
  })), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, SelS), {}, {
      maxWidth: 70
    }),
    defaultValue: "",
    onChange: function onChange(e) {
      var v = e.target.value;
      if (v === "__none__") applyStyle("color", ""); // 글자색 제거
      else if (v) applyStyle("color", v);
      e.target.value = "";
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\uAE00\uC790\uC0C9\u25BE"), /*#__PURE__*/React.createElement("option", {
    value: "__none__",
    style: {
      color: C.muted
    }
  }, "\u2500\u2500 \uC5C6\uC74C"), COLORS.filter(function (c) {
    return c.v;
  }).map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.v,
      value: c.v,
      style: {
        background: c.v,
        color: c.v === "#ffffff" || c.v === "#facc15" || c.v === "#bbf7d0" ? "#000" : "#000"
      }
    }, c.l);
  })), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, SelS), {}, {
      maxWidth: 75
    }),
    defaultValue: "",
    onChange: function onChange(e) {
      var v = e.target.value;
      if (v === "__none__") applyStyle("backgroundColor", ""); // 배경색 제거
      else if (v) applyStyle("backgroundColor", v);
      e.target.value = "";
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\uBC30\uACBD\uC0C9\u25BE"), /*#__PURE__*/React.createElement("option", {
    value: "__none__",
    style: {
      color: C.muted
    }
  }, "\u2500\u2500 \uC5C6\uC74C"), BG_COLORS.filter(function (b) {
    return b.v;
  }).map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b.v,
      value: b.v,
      style: {
        background: b.v,
        color: "#000"
      }
    }, b.l);
  })), /*#__PURE__*/React.createElement(Sep, null), [["justifyLeft", "왼쪽 정렬", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "2",
    width: "12",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "5.5",
    width: "8",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "9",
    width: "12",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "12.5",
    width: "6",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }))], ["justifyCenter", "가운데 정렬", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "2",
    width: "12",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5.5",
    width: "8",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "9",
    width: "12",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "12.5",
    width: "6",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }))], ["justifyRight", "오른쪽 정렬", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "2",
    width: "12",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "5.5",
    width: "8",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "9",
    width: "12",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "12.5",
    width: "6",
    height: "1.5",
    rx: ".7",
    fill: "currentColor"
  }))]].map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 3),
      c = _ref11[0],
      t = _ref11[1],
      icon = _ref11[2];
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        execCmd(c);
      },
      title: t,
      style: BtnS
    }, icon);
  }), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement(ListPicker, {
    BtnS: BtnS,
    execCmd: execCmd
  }), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement(SymbolPicker, {
    BtnS: BtnS,
    execCmd: execCmd
  }), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      execCmd("insertHTML", "<hr style='border:none;border-top:1px solid rgba(255,255,255,.25);margin:10px 0'><br>");
    },
    style: BtnS,
    title: "\uAD6C\uBD84\uC120"
  }, "\u2014 \uC120"), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      execCmd("insertHTML", "<div style='border:1px solid rgba(56,182,245,.4);border-radius:6px;padding:8px 12px;margin:6px 0;background:rgba(56,182,245,.06)'>내용 입력</div><br>");
    },
    style: BtnS,
    title: "\uAC15\uC870 \uBC15\uC2A4"
  }, "\u25A1 \uBC15\uC2A4"), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement(TablePicker, {
    onInsert: insertTable,
    BtnS: BtnS
  }), /*#__PURE__*/React.createElement(Sep, null), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      execCmd("removeFormat");
    },
    style: _objectSpread(_objectSpread({}, BtnS), {}, {
      color: C.red
    }),
    title: "\uC11C\uC2DD \uC81C\uAC70"
  }, "\uC11C\uC2DD\uCD08\uAE30\uD654")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: function onInput(e) {
      var v = e.currentTarget.innerHTML;
      onChange && onChange({
        target: {
          value: v
        }
      });
      lastVal.current = v;
    },
    "data-placeholder": placeholder,
    style: {
      minHeight: editorH,
      height: editorH,
      padding: "14px 16px",
      color: C.text,
      fontSize: 14,
      lineHeight: 1.7,
      outline: "none",
      background: C.bg,
      wordBreak: "break-word",
      overflowY: "auto"
    },
    onContextMenu: function onContextMenu(e) {
      // 표 셀 우클릭 시 컨텍스트 메뉴
      var td = e.target.closest('td,th');
      if (!td) return;
      e.preventDefault();
      // 기존 메뉴 제거
      document.querySelectorAll('.tbl-ctx-menu').forEach(function (m) {
        return m.remove();
      });
      var menu = document.createElement('div');
      menu.className = 'tbl-ctx-menu';
      Object.assign(menu.style, {
        position: 'fixed',
        left: e.clientX + 'px',
        top: e.clientY + 'px',
        zIndex: 9999,
        background: C.card,
        border: "1px solid ".concat(C.b1),
        borderRadius: 8,
        padding: '6px 0',
        minWidth: 160,
        boxShadow: '0 4px 16px rgba(0,0,0,.2)',
        fontFamily: 'inherit'
      });
      var items = [{
        l: '↑ 위에 행 추가',
        fn: function fn() {
          var tr = td.closest('tr');
          var newTr = tr.cloneNode(true);
          newTr.querySelectorAll('td,th').forEach(function (c) {
            c.innerHTML = '';
          });
          tr.parentNode.insertBefore(newTr, tr);
          emit();
        }
      }, {
        l: '↓ 아래에 행 추가',
        fn: function fn() {
          var tr = td.closest('tr');
          var newTr = tr.cloneNode(true);
          newTr.querySelectorAll('td,th').forEach(function (c) {
            c.innerHTML = '';
          });
          tr.parentNode.insertBefore(newTr, tr.nextSibling);
          emit();
        }
      }, {
        l: '← 왼쪽에 열 추가',
        fn: function fn() {
          var table = td.closest('table');
          var ci = Array.from(td.closest('tr').children).indexOf(td);
          table.querySelectorAll('tr').forEach(function (row) {
            var _row$children$ci;
            var cell = document.createElement(row.rowIndex === 0 ? 'th' : 'td');
            cell.style.cssText = ((_row$children$ci = row.children[ci]) === null || _row$children$ci === void 0 || (_row$children$ci = _row$children$ci.style) === null || _row$children$ci === void 0 ? void 0 : _row$children$ci.cssText) || "border:1px solid ".concat(C.b2, ";padding:6px 10px;min-width:60px;font-size:13px;color:").concat(C.text, ";");
            row.insertBefore(cell, row.children[ci]);
          });
          emit();
        }
      }, {
        l: '→ 오른쪽에 열 추가',
        fn: function fn() {
          var table = td.closest('table');
          var ci = Array.from(td.closest('tr').children).indexOf(td);
          table.querySelectorAll('tr').forEach(function (row) {
            var _row$children$ci2;
            var cell = document.createElement(row.rowIndex === 0 ? 'th' : 'td');
            cell.style.cssText = ((_row$children$ci2 = row.children[ci]) === null || _row$children$ci2 === void 0 || (_row$children$ci2 = _row$children$ci2.style) === null || _row$children$ci2 === void 0 ? void 0 : _row$children$ci2.cssText) || "border:1px solid ".concat(C.b2, ";padding:6px 10px;min-width:60px;font-size:13px;color:").concat(C.text, ";");
            row.insertBefore(cell, row.children[ci + 1] || null);
          });
          emit();
        }
      }, {
        l: '─',
        fn: null
      }, {
        l: '✕ 이 행 삭제',
        fn: function fn() {
          var tr = td.closest('tr');
          if (tr.parentNode.rows.length > 1) {
            tr.remove();
            emit();
          }
        },
        danger: true
      }, {
        l: '✕ 이 열 삭제',
        fn: function fn() {
          var table = td.closest('table');
          var ci = Array.from(td.closest('tr').children).indexOf(td);
          table.querySelectorAll('tr').forEach(function (row) {
            var _row$children$ci3;
            if (row.children.length > 1) (_row$children$ci3 = row.children[ci]) === null || _row$children$ci3 === void 0 || _row$children$ci3.remove();
          });
          emit();
        },
        danger: true
      }, {
        l: '✕ 표 삭제',
        fn: function fn() {
          var table = td.closest('table');
          table.remove();
          emit();
        },
        danger: true
      }];
      items.forEach(function (item) {
        if (item.fn === null) {
          var sep = document.createElement('div');
          sep.style.cssText = "height:1px;background:".concat(C.b1, ";margin:4px 0;");
          menu.appendChild(sep);
          return;
        }
        var btn = document.createElement('div');
        btn.textContent = item.l;
        Object.assign(btn.style, {
          padding: '7px 16px',
          cursor: 'pointer',
          fontSize: 12,
          color: item.danger ? C.red : C.text,
          fontWeight: 600,
          transition: 'background .1s'
        });
        btn.onmouseenter = function () {
          return btn.style.background = C.card2;
        };
        btn.onmouseleave = function () {
          return btn.style.background = '';
        };
        btn.onmousedown = function (ev) {
          ev.preventDefault();
          item.fn();
          menu.remove();
        };
        menu.appendChild(btn);
      });
      document.body.appendChild(menu);
      var _hide = function hide() {
        menu.remove();
        document.removeEventListener('mousedown', _hide);
      };
      setTimeout(function () {
        return document.addEventListener('mousedown', _hide);
      }, 0);
    },
    onMouseDown: function onMouseDown(e) {
      // 열 너비 드래그 (th/td 우측 경계 5px 내)
      var td = e.target.closest('td,th');
      if (!td) return;
      var rect = td.getBoundingClientRect();
      if (e.clientX < rect.right - 5) return;
      e.preventDefault();
      var startX = e.clientX;
      var startW = td.offsetWidth;
      var table = td.closest('table');
      // 전체 테이블 너비 기준 %로 설정
      var tableW = table.offsetWidth;
      var onMove = function onMove(ev) {
        var newW = Math.max(40, startW + (ev.clientX - startX));
        td.style.width = (newW / tableW * 100).toFixed(1) + '%';
      };
      var _onUp = function onUp() {
        emit();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', _onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', _onUp);
    }
  }), /*#__PURE__*/React.createElement("style", null, "\n        [contenteditable]:empty:before{\n          content:attr(data-placeholder);\n          color:".concat(C.muted, ";\n          font-style:italic;pointer-events:none;\n          display:block;white-space:pre-line;\n        }\n        [contenteditable] ul,\n        [contenteditable] ol {\n          padding-left:1.6em;\n          margin:4px 0;\n        }\n        [contenteditable] ul li,\n        [contenteditable] ol li {\n          margin-bottom:3px;\n          padding-left:2px;\n          color:").concat(C.text, ";\n        }\n        [contenteditable] p,\n        [contenteditable] div,\n        [contenteditable] span:not([style]) {\n          color:").concat(C.text, ";\n        }\n        [contenteditable] h2,\n        [contenteditable] h3,\n        [contenteditable] h4 {\n          color:").concat(C.text, ";\n        }\n        [contenteditable] td,\n        [contenteditable] th {\n          cursor: default;\n        }\n        [contenteditable] td:hover,\n        [contenteditable] th:hover {\n          position: relative;\n        }\n        [contenteditable] td::after,\n        [contenteditable] th::after {\n          content:'';\n          position:absolute;\n          right:0;top:0;bottom:0;\n          width:5px;\n          cursor:col-resize;\n        }\n      ")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: C.card2,
      borderTop: "1px solid ".concat(C.b1),
      cursor: "ns-resize",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none"
    },
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      var startY = e.clientY;
      var startH = editorH;
      var onMove = function onMove(ev) {
        var newH = Math.max(100, startH + (ev.clientY - startY));
        setEditorH(newH);
      };
      var _onUp2 = function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', _onUp2);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', _onUp2);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 3,
      borderRadius: 2,
      background: C.b2,
      pointerEvents: "none"
    }
  })));
}
function BackupModal(_ref12) {
  var onClose = _ref12.onClose,
    perfData = _ref12.perfData,
    planTextData = _ref12.planTextData,
    onImportJson = _ref12.onImportJson,
    excelFn = _ref12.excelFn;
  var _useState17 = useState("export"),
    _useState18 = _slicedToArray(_useState17, 2),
    tab = _useState18[0],
    setTab = _useState18[1];
  var _useState19 = useState(""),
    _useState20 = _slicedToArray(_useState19, 2),
    msg = _useState20[0],
    setMsg = _useState20[1];
  var fileRef = useRef(null);
  var downloadJson = function downloadJson() {
    var blob = new Blob([JSON.stringify({
      perfData: perfData,
      planTextData: planTextData
    }, null, 2)], {
      type: "application/json"
    });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "\uCDA9\uCCAD_\uC804\uCCB4\uBC31\uC5C5_".concat(new Date().toISOString().slice(0, 10), ".json");
    a.click();
    setMsg("✅ JSON 다운로드 완료");
  };
  var downloadImage = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var el, canvas, a, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            onClose(); // 모달 먼저 닫기
            _context.n = 1;
            return new Promise(function (r) {
              return setTimeout(r, 400);
            });
          case 1:
            _context.p = 1;
            el = document.getElementById("root");
            _context.n = 2;
            return html2canvas(el, {
              scale: 2,
              useCORS: true,
              backgroundColor: C.bg,
              logging: false,
              ignoreElements: function ignoreElements(el) {
                return el.getAttribute && el.getAttribute("id") === "backup-plan-modal";
              }
            });
          case 2:
            canvas = _context.v;
            a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "\uCDA9\uCCAD_\uB2EC\uC131\uACC4\uD68D_".concat(new Date().toISOString().slice(0, 10), ".png");
            a.click();
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            alert("이미지 생성 오류: " + _t.message);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function downloadImage() {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleJsonUpload = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var file, text, parsed, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            file = e.target.files[0];
            if (file) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return file.text();
          case 2:
            text = _context2.v;
            parsed = JSON.parse(text);
            if (!(!parsed.perfData && !parsed.planTextData)) {
              _context2.n = 3;
              break;
            }
            setMsg("❌ 올바른 백업 파일이 아닙니다.");
            return _context2.a(2);
          case 3:
            onImportJson(parsed);
            setMsg("✅ JSON 복원 완료! Firebase에 저장하려면 저장 버튼을 누르세요.");
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            setMsg("❌ 파일 파싱 오류: " + _t2.message);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return function handleJsonUpload(_x) {
      return _ref14.apply(this, arguments);
    };
  }();
  var BtnRow = function BtnRow(_ref15) {
    var icon = _ref15.icon,
      label = _ref15.label,
      desc = _ref15.desc,
      onClick = _ref15.onClick,
      c = _ref15.c;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        padding: "14px 18px",
        borderRadius: 10,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit",
        border: "1px solid ".concat(c, "40"),
        background: c + "0d",
        transition: "background .15s",
        marginBottom: 8
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = c + "20";
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = c + "0d";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        flexShrink: 0
      }
    }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.text,
        fontWeight: 700,
        fontSize: 13
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 11,
        marginTop: 2
      }
    }, desc)));
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "backup-plan-modal",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 800,
      background: "rgba(0,0,0,.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.b2),
      borderRadius: 16,
      width: "min(480px,92vw)",
      maxHeight: "85vh",
      overflow: "auto",
      boxShadow: "0 8px 40px rgba(0,0,0,.6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid ".concat(C.b1),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: C.text
    }
  }, "\uD83D\uDCE6 \uB2E4\uC6B4\uB85C\uB4DC \xB7 \uBCF5\uC6D0"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "transparent",
      border: "none",
      color: C.muted,
      cursor: "pointer",
      fontSize: 18,
      fontFamily: "inherit"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid ".concat(C.b1)
    }
  }, [["export", "내보내기"], ["import", "가져오기"]].map(function (_ref16) {
    var _ref17 = _slicedToArray(_ref16, 2),
      k = _ref17[0],
      l = _ref17[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setTab(k);
      },
      style: {
        flex: 1,
        padding: "10px",
        border: "none",
        fontFamily: "inherit",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 12,
        background: tab === k ? C.bg : "transparent",
        color: tab === k ? C.accent : C.muted,
        borderBottom: tab === k ? "2px solid ".concat(C.accent) : "2px solid transparent"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px"
    }
  }, tab === "export" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDCCB",
    label: "JSON \uC804\uCCB4 \uBC31\uC5C5",
    c: C.accent,
    desc: "\uC2E4\uC801\xB7\uBAA9\uD45C\xB7\uB2EC\uC131\uACC4\uD68D \uC804\uCCB4 \uB370\uC774\uD130\uB97C JSON \uD30C\uC77C\uB85C \uC800\uC7A5 (\uC644\uC804 \uBCF5\uC6D0 \uAC00\uB2A5)",
    onClick: downloadJson
  }), /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDCCA",
    label: "\uC5D1\uC140 \uB0B4\uBCF4\uB0B4\uAE30",
    c: C.green,
    desc: "\uC6D4\uBCC4 \uC2E4\uC801\xB7\uB204\uACC4\xB7KPI\uB97C Excel \uD30C\uC77C\uB85C \uC800\uC7A5 (\uC6D0\uBCF8 \uC18C\uC218\uC810 \uD3EC\uD568)",
    onClick: excelFn
  }), /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDDBC",
    label: "\uC774\uBBF8\uC9C0 \uC800\uC7A5 (PNG)",
    c: C.teal,
    desc: "\uD604\uC7AC \uD654\uBA74 \uC804\uCCB4\uB97C \uACE0\uD574\uC0C1\uB3C4 \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5",
    onClick: downloadImage
  })), tab === "import" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      border: "1px solid ".concat(C.accent, "40"),
      borderRadius: 10,
      padding: "16px",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 6
    }
  }, "\uD83D\uDCCB JSON \uD30C\uC77C\uB85C \uBCF5\uC6D0"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11,
      marginBottom: 12,
      lineHeight: 1.6
    }
  }, "\uC774\uC804\uC5D0 \uC800\uC7A5\uD55C JSON \uBC31\uC5C5 \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uBA74 \uB370\uC774\uD130\uAC00 \uBCF5\uC6D0\uB429\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\u26A0 \uD604\uC7AC Firebase \uB370\uC774\uD130\uB97C \uB36E\uC5B4\uC4F0\uAC8C \uB429\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: ".json",
    onChange: handleJsonUpload,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return fileRef.current.click();
    },
    style: {
      width: "100%",
      padding: "10px",
      border: "2px dashed ".concat(C.accent, "60"),
      borderRadius: 8,
      background: C.accent + "0a",
      color: C.accent,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDCC2 JSON \uD30C\uC77C \uC120\uD0DD"))), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "10px 14px",
      borderRadius: 8,
      background: msg.startsWith("❌") ? "rgba(240,112,112,.15)" : "rgba(45,212,136,.15)",
      border: "1px solid ".concat(msg.startsWith("❌") ? C.red : C.green, "40"),
      color: msg.startsWith("❌") ? C.red : C.green,
      fontSize: 12,
      fontWeight: 600
    }
  }, msg))));
}
function TabBtn(_ref18) {
  var label = _ref18.label,
    active = _ref18.active,
    color = _ref18.color,
    onClick = _ref18.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "4px 10px",
      borderRadius: 5,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 11,
      fontFamily: "inherit",
      border: "1px solid ".concat(active ? color : C.b1),
      background: active ? color + "22" : "transparent",
      color: active ? color : C.muted
    }
  }, label);
}

// ── 메인 앱
function PlanApp() {
  var isMobile = useIsMobile();
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    perfData = _useState22[0],
    setPerfData = _useState22[1];
  var _useState23 = useState({}),
    _useState24 = _slicedToArray(_useState23, 2),
    planTextData = _useState24[0],
    setPlanTextData = _useState24[1]; // Firebase 저장 텍스트 계획
  var _useState25 = useState({}),
    _useState26 = _slicedToArray(_useState25, 2),
    textDraft = _useState26[0],
    setTextDraft = _useState26[1]; // 로컬 미저장 텍스트
  var _useState27 = useState("대외영업"),
    _useState28 = _slicedToArray(_useState27, 2),
    part = _useState28[0],
    setPart = _useState28[1];
  var _useState29 = useState("매출"),
    _useState30 = _slicedToArray(_useState29, 2),
    mode = _useState30[0],
    setMode = _useState30[1];
  var _useState31 = useState("26"),
    _useState32 = _slicedToArray(_useState31, 2),
    yr = _useState32[0],
    setYr = _useState32[1];
  var _useState33 = useState("실적"),
    _useState34 = _slicedToArray(_useState33, 2),
    chartTab = _useState34[0],
    setChartTab = _useState34[1];
  var _useState35 = useState("실적"),
    _useState36 = _slicedToArray(_useState35, 2),
    cumChartTab = _useState36[0],
    setCumChartTab = _useState36[1];
  var _useState37 = useState("idle"),
    _useState38 = _slicedToArray(_useState37, 2),
    saveState = _useState38[0],
    setSaveState = _useState38[1];
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    tempSaved = _useState40[0],
    setTempSaved = _useState40[1]; // 로컬 임시저장 완료 표시
  var _useState41 = useState(false),
    _useState42 = _slicedToArray(_useState41, 2),
    dbReady = _useState42[0],
    setDbReady = _useState42[1];
  var _useState43 = useState("🔄 연결중..."),
    _useState44 = _slicedToArray(_useState43, 2),
    dbStatus = _useState44[0],
    setDbStatus = _useState44[1];
  var _useState45 = useState("annual"),
    _useState46 = _slicedToArray(_useState45, 2),
    selMonth = _useState46[0],
    setSelMonth = _useState46[1]; // 'annual' | 0~11
  var _useState47 = useState(false),
    _useState48 = _slicedToArray(_useState47, 2),
    isEditing = _useState48[0],
    setIsEditing = _useState48[1]; // 수정 모드 잠금
  var _useState49 = useState(0),
    _useState50 = _slicedToArray(_useState49, 2),
    editorKey = _useState50[0],
    setEditorKey = _useState50[1]; // 편집기 강제 remount용
  var _useState51 = useState(function () {
      var saved = parseInt(localStorage.getItem('cst_zoom_v2'));
      return saved >= 50 && saved <= 200 ? saved : 100;
    }),
    _useState52 = _slicedToArray(_useState51, 2),
    zoom = _useState52[0],
    setZoom = _useState52[1];
  // ── 테마
  var _useState53 = useState(_initThemeP),
    _useState54 = _slicedToArray(_useState53, 2),
    theme = _useState54[0],
    setTheme = _useState54[1];
  var _useState55 = useState(0),
    _useState56 = _slicedToArray(_useState55, 2),
    themeKey = _useState56[0],
    setThemeKey = _useState56[1];
  var toggleTheme = useCallback(function () {
    var next = theme === 'dark' ? 'light' : 'dark';
    Object.assign(C, next === 'light' ? COLORS_LIGHT_P : COLORS_DARK_P);
    Object.assign(KC, next === 'light' ? KC_LIGHT : KC_DARK);
    localStorage.setItem(THEME_KEY, next);
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
    applyThemeCSSP(next);
    setTheme(next);
    setThemeKey(function (k) {
      return k + 1;
    });
  }, [theme]); // 화면 배율 %
  // 양방향 zoom (center 기준)
  useEffect(function () {
    var wrapper = document.getElementById('plan-zoom-wrapper');
    if (!wrapper) return;
    var safeZoom = Math.max(50, Math.min(200, zoom || 100));
    var ratio = safeZoom / 100;
    if (ratio === 1) {
      wrapper.style.transform = '';
      wrapper.style.width = '';
      wrapper.style.position = '';
      wrapper.style.left = '';
    } else {
      var vw = window.innerWidth;
      wrapper.style.transformOrigin = 'top left';
      wrapper.style.transform = "scale(".concat(ratio, ")");
      wrapper.style.width = "".concat(vw, "px");
      wrapper.style.position = 'relative';
      wrapper.style.left = "".concat((vw - vw * ratio) / 2, "px");
    }
    localStorage.setItem('cst_zoom_v2', String(safeZoom));
  }, [zoom]);
  // (yr==="26"?"25":yr==="25"?"24":"23"): yr 기반 자동 계산 (별도 state 불필요)
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    showBackup = _useState58[0],
    setShowBackup = _useState58[1];
  var autoSaveTimer = useRef(null);
  var LS_PERF_CACHE = "cst_v13"; // app.js와 동일 캐시키

  // Firebase 로드
  useEffect(function () {
    // 캐시 즉시 로드 (Firebase 실패해도 화면에 표시)
    try {
      var loc = localStorage.getItem(LS_PERF_CACHE);
      if (loc) {
        var cached = JSON.parse(loc);
        if (cached) setPerfData(cached);
      }

      // planTextData 캐시 복원 (Firebase 실패 대비)
      var cachedPlan = localStorage.getItem("cst_plan_text_cache_v1");
      if (cachedPlan) {
        var p = JSON.parse(cachedPlan);
        if (p) setPlanTextData(p);
      }

      // textDraft 복원 (미저장 변경사항)
      var savedText = localStorage.getItem(LS_TEXT);
      if (savedText) setTextDraft(JSON.parse(savedText));
    } catch (_unused3) {}
    setDbReady(true);

    // Firebase 백그라운드 로드
    var retries = 2;
    var loadFirebase = /*#__PURE__*/function () {
      var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var snap, d, _savedText, draft, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (!(retries >= 0)) {
                _context3.n = 6;
                break;
              }
              _context3.p = 1;
              setDbStatus(retries < 2 ? "\uD83D\uDD04 \uC7AC\uC2DC\uB3C4 \uC911... (".concat(2 - retries, "/2)") : "🔄 연결중...");
              _context3.n = 2;
              return Promise.race([window.db.collection("perf").doc("main").get(), new Promise(function (_, r) {
                return setTimeout(function () {
                  return r(new Error("timeout"));
                }, 12000);
              })]);
            case 2:
              snap = _context3.v;
              if (snap.exists) {
                d = snap.data();
                if (d.perfData) {
                  setPerfData(d.perfData);
                  localStorage.setItem(LS_PERF_CACHE, JSON.stringify(d.perfData));
                }
                if (d.planTextData) {
                  setPlanTextData(d.planTextData);
                  // planTextData도 캐시 저장 (다음 접속 시 Firebase 실패해도 표시 가능)
                  localStorage.setItem("cst_plan_text_cache_v1", JSON.stringify(d.planTextData));
                  // textDraft와 동일하면 제거
                  _savedText = localStorage.getItem(LS_TEXT);
                  if (_savedText) {
                    try {
                      draft = JSON.parse(_savedText);
                      if (JSON.stringify(draft) === JSON.stringify(d.planTextData)) {
                        localStorage.removeItem(LS_TEXT);
                        setTextDraft({});
                      }
                    } catch (_unused4) {}
                  }
                }
                setDbStatus("✅ 로드완료");
              } else {
                setDbStatus("⚠ 문서없음");
              }
              return _context3.a(2);
            case 3:
              _context3.p = 3;
              _t3 = _context3.v;
              retries--;
              if (!(retries < 0)) {
                _context3.n = 4;
                break;
              }
              setDbStatus(_t3.message === "timeout" ? "⚠ 연결지연 — 재시도↻" : "❌ 로드실패 — 재시도↻");
              _context3.n = 5;
              break;
            case 4:
              setDbStatus("\u26A0 \uC624\uB958 (".concat(2 - retries, "\uD68C) \u2014 \uC7AC\uC2DC\uB3C4 \uC911..."));
              _context3.n = 5;
              return new Promise(function (r) {
                return setTimeout(r, 2000);
              });
            case 5:
              _context3.n = 0;
              break;
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3]]);
      }));
      return function loadFirebase() {
        return _ref19.apply(this, arguments);
      };
    }();
    loadFirebase();
  }, []);

  // 텍스트 draft 3초 자동저장 (임시저장 표시)
  useEffect(function () {
    clearTimeout(autoSaveTimer.current);
    setTempSaved(false); // 변경 즉시 임시저장 해제
    if (Object.keys(textDraft).length > 0) {
      autoSaveTimer.current = setTimeout(function () {
        try {
          localStorage.setItem(LS_TEXT, JSON.stringify(textDraft));
          setTempSaved(true); // 임시저장 완료 표시
        } catch (_unused5) {}
      }, 3000);
    }
    return function () {
      return clearTimeout(autoSaveTimer.current);
    };
  }, [textDraft]);

  // 텍스트 접근 헬퍼
  // 계획 텍스트: mode 무관하게 동일 데이터 (판매/매출 공통)
  var getText = function getText(pYr, _mode, pPart, mk) {
    var d = textDraft[pYr] && textDraft[pYr][pPart] && textDraft[pYr][pPart][mk];
    var p = planTextData[pYr] && planTextData[pYr][pPart] && planTextData[pYr][pPart][mk];
    return d !== undefined ? d : p || "";
  };
  var setText = function setText(pYr, _mode, pPart, mk, val) {
    setTextDraft(function (prev) {
      var next = JSON.parse(JSON.stringify(prev));
      if (!next[pYr]) next[pYr] = {};
      if (!next[pYr][pPart]) next[pYr][pPart] = {};
      next[pYr][pPart][mk] = val;
      return next;
    });
  };

  // Firebase 저장
  var handleSave = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var merged, _mergeDeep, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setSaveState("saving");
            _context4.p = 1;
            merged = JSON.parse(JSON.stringify(planTextData));
            _mergeDeep = function mergeDeep(t, s) {
              Object.keys(s).forEach(function (k) {
                if (s[k] && _typeof(s[k]) === "object" && !Array.isArray(s[k])) {
                  if (!t[k]) t[k] = {};
                  _mergeDeep(t[k], s[k]);
                } else {
                  t[k] = s[k];
                }
              });
            };
            _mergeDeep(merged, textDraft);
            _context4.n = 2;
            return window.db.collection("perf").doc("main").set({
              planTextData: merged,
              planUpdatedAt: new Date().toISOString()
            }, {
              merge: true
            });
          case 2:
            setPlanTextData(merged);
            setTextDraft({});
            setTempSaved(false);
            localStorage.removeItem(LS_TEXT);
            setSaveState("saved");
            setIsEditing(false); // 저장 후 잠금
            setEditorKey(function (k) {
              return k + 1;
            }); // 저장 후 편집기 remount → Hook 순서 보장
            setTimeout(function () {
              return setSaveState("idle");
            }, 2500);
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            console.error("저장 오류:", _t4);
            setSaveState("error");
            setTimeout(function () {
              return setSaveState("idle");
            }, 3000);
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function handleSave() {
      return _ref20.apply(this, arguments);
    };
  }();

  // 데이터 계산
  var pD = useMemo(function () {
    var y = perfData && perfData[yr];
    var m = y && y[mode];
    return m && m.perf || {};
  }, [perfData, yr, mode]);
  var tD = useMemo(function () {
    var y = perfData && perfData[yr];
    var m = y && y[mode];
    return m && m.target || {};
  }, [perfData, yr, mode]);
  var prevYrKey = yr === "26" ? "25" : yr === "25" ? "24" : null;
  var pD25 = useMemo(function () {
    if (!prevYrKey || !perfData) return {};
    var y = perfData[prevYrKey];
    var m = y && y[mode];
    return m && m.perf || {};
  }, [perfData, prevYrKey, mode]);
  var mPerf = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(pD[sk(i)]) || {})[part]);
    });
  }, [pD, part]);
  var mTgt = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(tD[sk(i)]) || {})[part]);
    });
  }, [tD, part]);
  var mPrev = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(pD25[sk(i)]) || {})[part]);
    });
  }, [pD25, part]);

  // 최근 실적 월 (emi)
  var emi = useMemo(function () {
    for (var i = 11; i >= 0; i--) {
      var r = pD[sk(i)];
      if (r && Object.keys(r).length > 0 && Object.values(r).some(function (v) {
        return gNum(v) > 0;
      })) return i;
    }
    return -1;
  }, [pD]);

  // KPI
  var ytdP = mPerf.slice(0, Math.max(emi + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);
  var ytdT = mTgt.slice(0, Math.max(emi + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);
  var ytdPrev = mPrev.slice(0, Math.max(emi + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);
  var annPrev = mPrev.reduce(function (a, b) {
    return a + b;
  }, 0); // 전년 연간합계 (12개월 전체)
  var annT = mTgt.reduce(function (a, b) {
    return a + b;
  }, 0);
  var remT = Math.max(annT - ytdP, 0);
  var remMonths = Math.max(11 - emi, 0);
  var avgMonthly = emi >= 0 && ytdP > 0 ? Math.round(ytdP / (emi + 1)) : 0;
  var prevAvgMonthly = emi >= 0 && ytdPrev > 0 ? Math.round(ytdPrev / (emi + 1)) : 0;
  var needPM = remMonths > 0 ? Math.ceil(remT / remMonths) : 0;
  var ytdAr = ytdT > 0 ? (ytdP / ytdT * 100).toFixed(1) : null;
  var ytdGr = ytdPrev > 0 ? ((ytdP - ytdPrev) / ytdPrev * 100).toFixed(1) : null;

  // CE/대외 비중 (누계)
  var ceYtd = emi >= 0 ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    return a + gNum((fullRow(pD[sk(i)]) || {}).CE);
  }, 0) : 0;
  var hpYtd = emi >= 0 ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    return a + gNum((fullRow(pD[sk(i)]) || {}).휴대폰);
  }, 0) : 0;
  var daeYtd = emi >= 0 ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    return a + gNum((fullRow(pD[sk(i)]) || {}).대외영업);
  }, 0) : 0;
  // 전년 CE 비중
  var cePrevYtd = emi >= 0 ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    return a + gNum((fullRow(pD25[sk(i)]) || {}).CE);
  }, 0) : 0;
  var hpPrevYtd = emi >= 0 ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    return a + gNum((fullRow(pD25[sk(i)]) || {}).휴대폰);
  }, 0) : 0;
  var daePrevYtd = emi >= 0 ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    return a + gNum((fullRow(pD25[sk(i)]) || {}).대외영업);
  }, 0) : 0;
  var ceSharePct = ceYtd > 0 && part !== "CE" && ytdP > 0 ? part === "대외영업" ? (daeYtd - hpYtd) / ceYtd * 100 : ytdP / ceYtd * 100 : null;
  var cePrevSharePct = cePrevYtd > 0 && part !== "CE" && ytdPrev > 0 ? part === "대외영업" ? (daePrevYtd - hpPrevYtd) / cePrevYtd * 100 : ytdPrev / cePrevYtd * 100 : null;
  var daeSharePct = daeYtd > 0 && part !== "대외영업" && part !== "CE" && ytdP > 0 ? ytdP / daeYtd * 100 : null;

  // 누계
  var cumP = 0,
    cumT = 0,
    cumPrev = 0,
    cumPrevFull = 0;
  var cumPerf = MONTHS.map(function (_, i) {
    if (i > emi) return null;
    cumP += mPerf[i];
    return cumP;
  });
  var cumTgt = MONTHS.map(function (_, i) {
    cumT += mTgt[i];
    return cumT;
  });
  var cumPrevArr = MONTHS.map(function (_, i) {
    if (i > emi) return null;
    cumPrev += mPrev[i];
    return cumPrev;
  }); // 성장률 계산용 (emi까지)
  var cumPrevFull12 = MONTHS.map(function (_, i) {
    cumPrevFull += mPrev[i];
    return cumPrevFull;
  }); // 표 표시용 (12개월 전체)
  var cumAr = MONTHS.map(function (_, i) {
    if (i > emi || !cumTgt[i]) return null;
    return (cumPerf[i] || 0) / cumTgt[i] * 100;
  });
  var cumGr = MONTHS.map(function (_, i) {
    if (i > emi || !cumPrevArr[i]) return null;
    return ((cumPerf[i] || 0) - cumPrevArr[i]) / cumPrevArr[i] * 100;
  });

  // 월별 달성/성장률
  var mArArr = MONTHS.map(function (_, i) {
    return i <= emi && mTgt[i] > 0 ? mPerf[i] / mTgt[i] * 100 : null;
  });
  var mGrArr = MONTHS.map(function (_, i) {
    return i <= emi && mPrev[i] > 0 ? (mPerf[i] - mPrev[i]) / mPrev[i] * 100 : null;
  });

  // ── yr 연도 기준 참고 데이터 (선택 모드)
  var planPrevYrKey = yr === "26" ? "25" : yr === "25" ? "24" : null;
  var pD_pl = useMemo(function () {
    var y = perfData && perfData[yr];
    var m = y && y[mode];
    return m && m.perf || {};
  }, [perfData, yr, mode]);
  var tD_pl = useMemo(function () {
    var y = perfData && perfData[yr];
    var m = y && y[mode];
    return m && m.target || {};
  }, [perfData, yr, mode]);
  var pD25_pl = useMemo(function () {
    if (!planPrevYrKey || !perfData) return {};
    var y = perfData[planPrevYrKey];
    var m = y && y[mode];
    return m && m.perf || {};
  }, [perfData, planPrevYrKey, mode]);
  var mTgt_pl = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(tD_pl[sk(i)]) || {})[part]);
    });
  }, [tD_pl, part]);
  var mPerf_pl = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(pD_pl[sk(i)]) || {})[part]);
    });
  }, [pD_pl, part]);
  var mPrev_pl = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(pD25_pl[sk(i)]) || {})[part]);
    });
  }, [pD25_pl, part]);
  var annT_pl = mTgt_pl.reduce(function (a, b) {
    return a + b;
  }, 0);
  var emi_pl = useMemo(function () {
    for (var i = 11; i >= 0; i--) {
      var r = pD_pl[sk(i)];
      if (r && Object.values(r).some(function (v) {
        return gNum(v) > 0;
      })) return i;
    }
    return -1;
  }, [pD_pl]);
  var ytdP_pl = mPerf_pl.slice(0, Math.max(emi_pl + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);
  var ytdPrev_pl = mPrev_pl.slice(0, Math.max(emi_pl + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);

  // ── 반대 모드(판매↔매출) 데이터 (동시 표시용)
  var otherMode = mode === "매출" ? "판매" : "매출";
  var pD_ot = useMemo(function () {
    var y = perfData && perfData[yr];
    var m = y && y[otherMode];
    return m && m.perf || {};
  }, [perfData, yr, otherMode]);
  var tD_ot = useMemo(function () {
    var y = perfData && perfData[yr];
    var m = y && y[otherMode];
    return m && m.target || {};
  }, [perfData, yr, otherMode]);
  var pD25_ot = useMemo(function () {
    if (!planPrevYrKey || !perfData) return {};
    var y = perfData[planPrevYrKey];
    var m = y && y[otherMode];
    return m && m.perf || {};
  }, [perfData, planPrevYrKey, otherMode]);
  var mTgt_ot = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(tD_ot[sk(i)]) || {})[part]);
    });
  }, [tD_ot, part]);
  var mPerf_ot = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(pD_ot[sk(i)]) || {})[part]);
    });
  }, [pD_ot, part]);
  var mPrev_ot = useMemo(function () {
    return MONTHS.map(function (_, i) {
      return gNum((fullRow(pD25_ot[sk(i)]) || {})[part]);
    });
  }, [pD25_ot, part]);
  var annT_ot = mTgt_ot.reduce(function (a, b) {
    return a + b;
  }, 0);
  var emi_ot = useMemo(function () {
    for (var i = 11; i >= 0; i--) {
      var r = pD_ot[sk(i)];
      if (r && Object.values(r).some(function (v) {
        return gNum(v) > 0;
      })) return i;
    }
    return -1;
  }, [pD_ot]);
  var ytdP_ot = mPerf_ot.slice(0, Math.max(emi_ot + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);
  var ytdPrev_ot = mPrev_ot.slice(0, Math.max(emi_ot + 1, 0)).reduce(function (a, b) {
    return a + b;
  }, 0);

  // 선택 월 정보 (yr 연도 기준)
  var annPrev_pl = mPrev_pl.reduce(function (a, b) {
    return a + b;
  }, 0); // 전년 연간 합계
  var selMi = selMonth === "annual" ? null : selMonth;
  var selTgt = selMi !== null ? mTgt_pl[selMi] : annT_pl;
  var selPerf = selMi !== null ? mPerf_pl[selMi] : ytdP_pl;
  var selPrev = selMi !== null ? mPrev_pl[selMi] : annPrev_pl; // 연간 선택시 전년 연간 합계
  var selGrowthTarget = selPrev > 0 && selTgt > 0 ? ((selTgt - selPrev) / selPrev * 100).toFixed(1) : null;
  var selAr = selTgt > 0 && selPerf > 0 ? (selPerf / selTgt * 100).toFixed(1) : null;
  // 실제 성장률 (실적 기준) - 25년 등 목표 없을 때도 표시
  var selActualGr = selPrev > 0 && selPerf > 0 ? ((selPerf - selPrev) / selPrev * 100).toFixed(1) : null;
  var color = KC[part] || C.accent;
  var hasDraft = Object.keys(textDraft).length > 0;
  var currentText = getText(yr, mode, part, selMonth === "annual" ? "annual" : String(selMonth));

  // 엑셀 다운로드 (원본 소수점 유지)
  var handleExcel = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var wb, fmt, addSheet, planRows, allPlanData, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return loadXLSX();
          case 1:
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
            alert("XLSX 로드 실패. 다시 시도해주세요.");
            return _context5.a(2);
          case 3:
            wb = XLSX.utils.book_new();
            fmt = function fmt(v) {
              return typeof v === "number" ? parseFloat(v.toFixed(4)) : v;
            }; // 소수점 4자리까지 원본 유지
            addSheet = function addSheet(name, rows) {
              return XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), name);
            };
            addSheet("월별실적", [["".concat(yr, "\uB144 ").concat(mode, " - ").concat(part, " \uC6D4\uBCC4 \uC2E4\uC801")], [], ["항목"].concat(MONTHS, ["누계"]), ["목표"].concat(_toConsumableArray(mTgt.map(fmt)), [fmt(annT)]), ["실적"].concat(_toConsumableArray(MONTHS.map(function (_, i) {
              return i <= emi ? fmt(mPerf[i]) : "";
            })), [fmt(ytdP)]), ["달성률"].concat(_toConsumableArray(MONTHS.map(function (_, i) {
              return i <= emi && mTgt[i] > 0 ? parseFloat((mPerf[i] / mTgt[i] * 100).toFixed(2)) : "";
            })), [""]), ["성장률"].concat(_toConsumableArray(MONTHS.map(function (_, i) {
              return i <= emi && mPrev[i] > 0 ? parseFloat(((mPerf[i] - mPrev[i]) / mPrev[i] * 100).toFixed(2)) : "";
            })), [""]), ["전년"].concat(_toConsumableArray(MONTHS.map(function (_, i) {
              return i <= emi ? fmt(mPrev[i]) : "";
            })), [fmt(ytdPrev)])]);
            addSheet("누계실적", [["".concat(yr, "\uB144 ").concat(mode, " - ").concat(part, " \uB204\uACC4 \uC2E4\uC801")], [], ["항목"].concat(MONTHS), ["누계목표"].concat(_toConsumableArray(cumTgt.map(fmt))), ["누계실적"].concat(_toConsumableArray(cumPerf.map(function (v) {
              return v !== null ? fmt(v) : "";
            }))), ["누계달성"].concat(_toConsumableArray(cumAr.map(function (v) {
              return v !== null ? parseFloat(v.toFixed(2)) : "";
            }))), ["누계성장"].concat(_toConsumableArray(cumGr.map(function (v) {
              return v !== null ? parseFloat(v.toFixed(2)) : "";
            }))), ["누계전년"].concat(_toConsumableArray(cumPrevArr.map(function (v) {
              return v !== null ? fmt(v) : "";
            })))]);
            addSheet("KPI요약", [["".concat(yr, "\uB144 ").concat(emi >= 0 ? MONTHS[emi] : "", " \uAE30\uC900 \u2014 ").concat(mode, " \xB7 ").concat(part)], [], ["항목", "값(억)"], ["연간목표", fmt(annT) || "─"], ["누계실적", fmt(ytdP) || "─"], ["월평균", fmt(avgMonthly) || "─"], ["누계달성률", ytdAr ? parseFloat(ytdAr) : "─"], ["전년비성장", ytdGr ? parseFloat(ytdGr) : "─"], ["잔여목표", fmt(remT) || "─"], ["잔여월평균", fmt(needPM) || "─"], ["CE비중", ceSharePct ? parseFloat(ceSharePct.toFixed(2)) : "─"], ["전년CE비중", cePrevSharePct ? parseFloat(cePrevSharePct.toFixed(2)) : "─"]]);
            // 달성계획 텍스트 시트 추가
            planRows = [["연도", "파트", "구분", "내용"]];
            allPlanData = _objectSpread({}, planTextData);
            Object.keys(allPlanData).forEach(function (pYr) {
              Object.keys(allPlanData[pYr] || {}).forEach(function (pPart) {
                Object.keys(allPlanData[pYr][pPart] || {}).forEach(function (mk) {
                  var txt = allPlanData[pYr][pPart][mk];
                  if (txt) planRows.push([pYr, pPart, mk === "annual" ? "연간" : mk + "월", txt]);
                });
              });
            });
            if (planRows.length > 1) addSheet("달성계획텍스트", planRows);
            XLSX.writeFile(wb, "\uCDA9\uCCAD_".concat(yr, "\uB144_").concat(mode, "_").concat(part, "_").concat(new Date().toISOString().slice(0, 10), ".xlsx"));
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return function handleExcel() {
      return _ref21.apply(this, arguments);
    };
  }();

  // JSON 복원
  var handleImportJson = function handleImportJson(parsed) {
    if (parsed.perfData) window.__importedPerf = parsed.perfData;
    if (parsed.planTextData) {
      setPlanTextData(parsed.planTextData);
      // Firebase에도 반영
      window.db.collection("perf").doc("main").set({
        planTextData: parsed.planTextData,
        planUpdatedAt: new Date().toISOString()
      }, {
        merge: true
      }).catch(function (e) {
        return console.error("복원 저장 오류:", e);
      });
    }
  };
  if (!dbReady) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: 14,
      background: C.bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "4px solid ".concat(C.b1),
      borderTopColor: C.accent,
      animation: "spin 0.9s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 14,
      fontWeight: 600
    }
  }, "\uB370\uC774\uD130 \uBD88\uB7EC\uC624\uB294 \uC911..."));
  return /*#__PURE__*/React.createElement("div", {
    key: themeKey,
    style: {
      background: C.bg,
      minHeight: "100vh",
      color: C.text
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "no-print",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: C.surf,
      borderBottom: "1px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 2,
      padding: "6px 12px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      textDecoration: "none",
      color: C.text,
      marginRight: 4,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: C.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 900,
      fontSize: 13,
      color: "#fff",
      flexShrink: 0
    }
  }, "C"), !isMobile && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 12,
      color: C.text
    }
  }, "\uAD00\uB9AC\uC2DC\uC2A4\uD15C"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: mode === "매출" ? C.매출 : C.판매,
      fontSize: 9,
      fontWeight: 700
    }
  }, "\uAD00\uB9AC\uC2DC\uC2A4\uD15C \xB7 ", mode))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 1,
      flexShrink: 0
    }
  }, [{
    href: "index.html#dashboard",
    l: "대시보드",
    s: "홈"
  }, {
    href: "index.html#analysis",
    l: "실적분석",
    s: "분석"
  }, {
    href: "index.html#input",
    l: "실적입력",
    s: "입력"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("a", {
      key: t.l,
      href: t.href,
      style: {
        padding: isMobile ? "6px 8px" : "5px 12px",
        borderRadius: 7,
        border: "none",
        cursor: "pointer",
        background: "transparent",
        color: C.muted,
        fontWeight: 500,
        fontSize: isMobile ? 11 : 12,
        fontFamily: "inherit",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        borderBottom: "2px solid transparent",
        whiteSpace: "nowrap",
        transition: "color .15s"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.color = mode === "매출" ? C.매출 : C.판매;
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.color = C.muted;
      }
    }, isMobile ? t.s : t.l);
  }), /*#__PURE__*/React.createElement("a", {
    href: "plan.html",
    style: {
      padding: isMobile ? "6px 8px" : "5px 12px",
      borderRadius: 7,
      border: "none",
      cursor: "pointer",
      background: C.accent + "22",
      color: C.accent,
      fontWeight: 800,
      fontSize: isMobile ? 11 : 12,
      fontFamily: "inherit",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      borderBottom: "2px solid ".concat(C.accent),
      whiteSpace: "nowrap"
    }
  }, isMobile ? "계획" : "📋 달성계획")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: isMobile ? 4 : 6,
      flexShrink: 0
    }
  }, !isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: dbStatus.startsWith("✅") ? C.green : dbStatus.startsWith("❌") || dbStatus.includes("실패") ? C.red : dbStatus.startsWith("🔄") ? C.accent : C.orange,
      cursor: dbStatus.includes("재시도↻") ? "pointer" : "default",
      textDecoration: dbStatus.includes("재시도↻") ? "underline" : "none"
    },
    onClick: function onClick() {
      if (!dbStatus.includes("재시도↻")) return;
      var retries = 2;
      var retry = /*#__PURE__*/function () {
        var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
          var snap, d, _t6;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.p = _context6.n) {
              case 0:
                if (!(retries >= 0)) {
                  _context6.n = 6;
                  break;
                }
                _context6.p = 1;
                setDbStatus(retries < 2 ? "\uD83D\uDD04 \uC7AC\uC2DC\uB3C4 \uC911... (".concat(2 - retries, "/2)") : "🔄 연결중...");
                _context6.n = 2;
                return Promise.race([window.db.collection("perf").doc("main").get(), new Promise(function (_, r) {
                  return setTimeout(function () {
                    return r(new Error("timeout"));
                  }, 12000);
                })]);
              case 2:
                snap = _context6.v;
                if (snap.exists) {
                  d = snap.data();
                  if (d.perfData) {
                    setPerfData(d.perfData);
                    localStorage.setItem(LS_PERF_CACHE, JSON.stringify(d.perfData));
                  }
                  if (d.planTextData) {
                    setPlanTextData(d.planTextData);
                    localStorage.setItem("cst_plan_text_cache_v1", JSON.stringify(d.planTextData));
                  }
                  setDbStatus("✅ 로드완료");
                } else {
                  setDbStatus("⚠ 문서없음");
                }
                return _context6.a(2);
              case 3:
                _context6.p = 3;
                _t6 = _context6.v;
                retries--;
                if (!(retries < 0)) {
                  _context6.n = 4;
                  break;
                }
                setDbStatus(_t6.message === "timeout" ? "⚠ 연결지연 — 재시도↻" : "❌ 로드실패 — 재시도↻");
                _context6.n = 5;
                break;
              case 4:
                setDbStatus("\u26A0 \uC624\uB958 (".concat(2 - retries, "\uD68C)"));
                _context6.n = 5;
                return new Promise(function (r) {
                  return setTimeout(r, 2000);
                });
              case 5:
                _context6.n = 0;
                break;
              case 6:
                return _context6.a(2);
            }
          }, _callee6, null, [[1, 3]]);
        }));
        return function retry() {
          return _ref22.apply(this, arguments);
        };
      }();
      retry();
    }
  }, dbStatus), /*#__PURE__*/React.createElement("button", {
    onClick: toggleTheme,
    style: {
      padding: isMobile ? "5px 8px" : "4px 10px",
      borderRadius: 6,
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: 700,
      fontSize: 12,
      border: "1px solid ".concat(C.b1),
      background: theme === 'light' ? "rgba(255,200,50,.12)" : "rgba(100,120,200,.15)",
      color: theme === 'light' ? C.orange : C.accent,
      transition: "all .15s",
      display: "flex",
      alignItems: "center",
      gap: 4,
      flexShrink: 0
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = C.accent;
      e.currentTarget.style.opacity = ".8";
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = C.b1;
      e.currentTarget.style.opacity = "1";
    }
  }, theme === 'light' ? '☀️' : '🌙', !isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, theme === 'light' ? '라이트' : '다크')), !isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3,
      background: C.card2,
      borderRadius: 7,
      padding: "3px 6px",
      border: "1px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.muted2
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setZoom(function (z) {
        return Math.max(50, z - 10);
      });
    },
    style: {
      padding: "2px 6px",
      borderRadius: 4,
      border: "1px solid ".concat(C.b1),
      background: theme === "light" ? "rgba(0,0,0,.02)" : "rgba(255,255,255,.04)",
      color: C.muted2,
      cursor: "pointer",
      fontSize: 11,
      fontFamily: "inherit",
      fontWeight: 700,
      lineHeight: 1
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("select", {
    value: zoom,
    onChange: function onChange(e) {
      return setZoom(parseInt(e.target.value));
    },
    style: {
      background: "transparent",
      border: "none",
      color: C.text,
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer",
      outline: "none",
      fontFamily: "inherit",
      minWidth: 46
    }
  }, [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200].map(function (v) {
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: C.card,
        color: C.text
      }
    }, v, "%");
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setZoom(function (z) {
        return Math.min(200, z + 10);
      });
    },
    style: {
      padding: "2px 6px",
      borderRadius: 4,
      border: "1px solid ".concat(C.b1),
      background: theme === "light" ? "rgba(0,0,0,.02)" : "rgba(255,255,255,.04)",
      color: C.muted2,
      cursor: "pointer",
      fontSize: 11,
      fontFamily: "inherit",
      fontWeight: 700,
      lineHeight: 1
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowBackup(true);
    },
    style: {
      padding: isMobile ? "5px 8px" : "4px 12px",
      borderRadius: 7,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: isMobile ? 13 : 11,
      fontFamily: "inherit",
      border: "1px solid ".concat(C.teal, "40"),
      background: C.teal + "10",
      color: C.teal,
      display: "flex",
      alignItems: "center",
      gap: 4,
      transition: "all .15s",
      flexShrink: 0
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = C.teal + "22";
      e.currentTarget.style.borderColor = C.teal;
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = C.teal + "10";
      e.currentTarget.style.borderColor = C.teal + "40";
    }
  }, isMobile ? "⬇" : "📦 다운로드"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: isMobile ? 4 : 8,
      padding: "4px 12px 6px",
      borderTop: "1px solid ".concat(C.b1, "22"),
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      flexShrink: 0
    }
  }, MODES.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: function onClick() {
        return setMode(m);
      },
      style: {
        padding: "3px 8px",
        borderRadius: 5,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 11,
        fontFamily: "inherit",
        border: "1px solid ".concat(mode === m ? m === "판매" ? C.판매 : C.매출 : C.b1),
        background: mode === m ? (m === "판매" ? C.판매 : C.매출) + "22" : "transparent",
        color: mode === m ? m === "판매" ? C.판매 : C.매출 : C.muted,
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: m === "판매" ? C.판매 : C.매출,
        fontSize: 8
      }
    }, "\u25CF"), " ", m);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: C.b1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      flexShrink: 0
    }
  }, YRS.map(function (y) {
    return /*#__PURE__*/React.createElement("button", {
      key: y,
      onClick: function onClick() {
        return setYr(y);
      },
      style: {
        padding: "3px 7px",
        borderRadius: 5,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 11,
        fontFamily: "inherit",
        border: "1px solid ".concat(yr === y ? C.blue : C.b1),
        background: yr === y ? C.blue + "22" : "transparent",
        color: yr === y ? C.blue : C.muted,
        whiteSpace: "nowrap"
      }
    }, y, "\uB144");
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: C.b1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      overflowX: "auto",
      flex: 1,
      minWidth: 0
    }
  }, PARTS.map(function (k) {
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setPart(k);
      },
      style: {
        padding: "3px 8px",
        borderRadius: 5,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 11,
        fontFamily: "inherit",
        whiteSpace: "nowrap",
        flexShrink: 0,
        transition: "all .15s",
        border: "1px solid ".concat(part === k ? KC[k] || C.accent : C.b1),
        background: part === k ? (KC[k] || C.accent) + "22" : "transparent",
        color: part === k ? KC[k] || C.accent : C.muted
      }
    }, k);
  })), isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      flexShrink: 0,
      cursor: dbStatus.includes("재시도↻") ? "pointer" : "default",
      color: dbStatus.startsWith("✅") ? C.green : dbStatus.startsWith("❌") || dbStatus.includes("실패") ? C.red : dbStatus.startsWith("🔄") ? C.accent : C.orange
    }
  }, dbStatus.startsWith("✅") ? "✅" : dbStatus.startsWith("❌") ? "❌" : dbStatus.startsWith("⚠") ? "⚠" : "🔄"))), /*#__PURE__*/React.createElement("div", {
    id: "plan-zoom-wrapper",
    style: {
      position: "relative",
      left: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "plan-content",
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("style", null, "\n          .kpi-row{display:flex;gap:10px;flex-wrap:nowrap;overflow-x:auto}\n          .kpi-card{flex:1 1 0;min-width:160px;border-radius:14px;overflow:hidden;\n            box-sizing:border-box;background:".concat(C.card, ";box-shadow:0 2px 8px rgba(0,0,0,.07)}\n          .kpi-card-lg{flex:1.6 1 0;min-width:200px}\n          .kpi-card-header{display:flex;justify-content:space-between;align-items:center;\n            padding:10px 14px 8px}\n          .kpi-card-num{padding:0 14px 6px;display:flex;align-items:baseline;gap:4px}\n          .kpi-card-bar{padding:0 14px 10px}\n          .kpi-card-stats{display:grid;grid-template-columns:1fr 1fr 1fr;border-top:1px solid ").concat(C.b1, "}\n          .kpi-card-stat{padding:7px 0;text-align:center;border-right:1px solid ").concat(C.b1, "}\n          .kpi-card-stat:last-child{border-right:none}\n          @media(max-width:720px){.kpi-row{flex-wrap:wrap}.kpi-card{min-width:calc(50% - 5px)}.kpi-card-lg{min-width:100%}}\n        ")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card kpi-card-lg",
    style: {
      border: "2px solid ".concat(color, "50"),
      borderTop: "3px solid ".concat(color)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: color,
      boxShadow: "0 0 6px ".concat(color)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color,
      fontWeight: 800,
      fontSize: 12
    }
  }, part, " \uB204\uACC4 \uC2E4\uC801"), emi >= 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9,
      fontWeight: 600,
      background: theme === "light" ? "rgba(0,0,0,.06)" : "rgba(255,255,255,.06)",
      borderRadius: 3,
      padding: "1px 5px"
    }
  }, MONTHS[emi], " \uB9C8\uAC10\uAE30\uC900")), ytdT > 0 && ytdAr && /*#__PURE__*/React.createElement("span", {
    style: {
      color: pctC(ytdAr),
      fontSize: 10,
      fontWeight: 800,
      background: pctC(ytdAr) + "18",
      borderRadius: 4,
      padding: "2px 7px"
    }
  }, "\uB2EC\uC131 ", Math.round(gNum(ytdAr)), "%")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-num"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text,
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: "-1.5px",
      lineHeight: 1
    }
  }, ytdP > 0 ? Math.round(ytdP).toLocaleString() : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 20
    }
  }, "\u2500")), ytdP > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 13
    }
  }, "\uC5B5")), ytdT > 0 && /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\uBAA9\uD45C ", fmtN(ytdT)), ytdP > 0 && ytdT > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: ytdP - ytdT >= 0 ? C.green : C.red,
      fontSize: 9,
      fontWeight: 700
    }
  }, ytdP - ytdT >= 0 ? "▲" : "▼", Math.abs(Math.round(ytdP - ytdT)).toLocaleString(), "\uC5B5")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: theme === "light" ? "rgba(0,0,0,.07)" : "rgba(255,255,255,.08)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(ytdT > 0 ? ytdP / ytdT * 100 : 0, 100), "%"),
      background: "linear-gradient(90deg,".concat(color, ",").concat(color, "aa)"),
      borderRadius: 3,
      boxShadow: "0 0 8px ".concat(color, "60"),
      transition: "width .6s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-stats",
    style: {
      background: C.card2
    }
  }, [{
    lbl: "전년실적",
    val: ytdPrev > 0 ? fmtN(ytdPrev) : "─",
    c: C.muted2
  }, {
    lbl: "전년비",
    val: ytdGr ? (gNum(ytdGr) > 0 ? "▲" : "▼") + Math.abs(gNum(ytdGr)).toFixed(1) + "%" : "─",
    c: ytdGr ? grwC(ytdGr) : C.muted
  }, {
    lbl: "월평균",
    val: avgMonthly > 0 ? avgMonthly + "억" : "─",
    c: C.orange
  }].map(function (_ref23) {
    var lbl = _ref23.lbl,
      val = _ref23.val,
      c = _ref23.c;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      className: "kpi-card-stat"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1
      }
    }, val));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card kpi-card-lg",
    style: {
      border: "2px solid ".concat(C.orange, "40"),
      borderTop: "3px solid ".concat(C.orange)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: C.orange,
      boxShadow: "0 0 6px ".concat(C.orange)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontWeight: 800,
      fontSize: 12
    }
  }, "\uC5F0\uAC04 \uBAA9\uD45C")), needPM > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.blue,
      fontSize: 10,
      fontWeight: 700,
      background: C.blue + "18",
      borderRadius: 4,
      padding: "2px 7px"
    }
  }, "\uC6D4\uD3C9 ", needPM, "\uC5B5 \uD544\uC694")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-num"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: "-1.5px",
      lineHeight: 1
    }
  }, annT > 0 ? Math.round(annT).toLocaleString() : "─"), annT > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 13
    }
  }, "\uC5B5")), annT > 0 && /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\uC794\uC5EC ", fmtN(remT)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ytdAr ? pctC(ytdAr) : C.muted,
      fontSize: 9,
      fontWeight: 700
    }
  }, "\uC9C4\uCC99 ", annT > 0 ? Math.round(ytdP / annT * 100) : 0, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: theme === "light" ? "rgba(0,0,0,.07)" : "rgba(255,255,255,.08)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(annT > 0 ? ytdP / annT * 100 : 0, 100), "%"),
      background: "linear-gradient(90deg,".concat(C.orange, ",").concat(C.orange, "aa)"),
      borderRadius: 3,
      transition: "width .6s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-stats",
    style: {
      background: C.card2
    }
  }, [{
    lbl: "누계 실적",
    val: ytdP > 0 ? fmtN(ytdP) : "─",
    c: color
  }, {
    lbl: "달성률",
    val: ytdAr ? Math.round(gNum(ytdAr)) + "%" : "─",
    c: ytdAr ? pctC(ytdAr) : C.muted
  }, {
    lbl: "잔여",
    val: remT > 0 ? fmtN(remT) : "✓ 달성",
    c: remT > 0 ? C.blue : C.green
  }].map(function (_ref24) {
    var lbl = _ref24.lbl,
      val = _ref24.val,
      c = _ref24.c;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      className: "kpi-card-stat"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1
      }
    }, val));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card",
    style: {
      border: "2px solid ".concat(ytdGr ? grwC(ytdGr) : C.muted, "55"),
      borderTop: "3px solid ".concat(ytdGr ? grwC(ytdGr) : C.muted)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: ytdGr ? grwC(ytdGr) : C.muted
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: ytdGr ? grwC(ytdGr) : C.muted2,
      fontWeight: 800,
      fontSize: 12
    }
  }, "\uC804\uB144\uBE44 \uC131\uC7A5"))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-num"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ytdGr ? grwC(ytdGr) : C.muted,
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: "-1px",
      lineHeight: 1
    }
  }, ytdGr ? (gNum(ytdGr) > 0 ? "▲" : "▼") + Math.abs(gNum(ytdGr)).toFixed(1) + "%" : "─")), ytdGr && ytdPrev > 0 ? function () {
    var gr = gNum(ytdGr),
      maxR = 30;
    var barW = Math.min(Math.abs(gr), maxR) / maxR * 50;
    var isUp = gr >= 0;
    var bc = isUp ? C.green : C.red;
    return /*#__PURE__*/React.createElement("div", {
      className: "kpi-card-bar"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "\uC804\uB144 ", fmtN(ytdPrev)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "\uD604\uC7AC ", fmtN(ytdP))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: theme === "light" ? "rgba(0,0,0,.06)" : "rgba(255,255,255,.06)",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        width: 1,
        background: theme === "light" ? "rgba(0,0,0,.3)" : "rgba(255,255,255,.25)",
        zIndex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({
        position: "absolute",
        top: 0,
        bottom: 0
      }, isUp ? {
        left: "50%",
        width: "".concat(barW, "%")
      } : {
        right: "50%",
        width: "".concat(barW, "%")
      }), {}, {
        background: "linear-gradient(".concat(isUp ? "90deg" : "-90deg", ",").concat(bc, "70,").concat(bc, ")"),
        borderRadius: isUp ? "0 3px 3px 0" : "3px 0 0 3px",
        boxShadow: "0 0 6px ".concat(bc, "50"),
        transition: "width .6s"
      })
    })));
  }() : null, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-stats",
    style: {
      background: C.card2,
      gridTemplateColumns: "1fr 1fr"
    }
  }, [{
    lbl: "전년 실적",
    val: ytdPrev > 0 ? fmtN(ytdPrev) : "─",
    c: C.muted2
  }, {
    lbl: "차이",
    val: ytdP > 0 && ytdPrev > 0 ? (ytdP - ytdPrev >= 0 ? "+" : "") + Math.round(ytdP - ytdPrev) + "억" : "─",
    c: ytdP > 0 && ytdPrev > 0 ? ytdP - ytdPrev >= 0 ? C.green : C.red : C.muted
  }].map(function (_ref25) {
    var lbl = _ref25.lbl,
      val = _ref25.val,
      c = _ref25.c;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      className: "kpi-card-stat"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1
      }
    }, val));
  }))), ceSharePct !== null && part !== "휴대폰" && /*#__PURE__*/React.createElement("div", {
    className: "kpi-card",
    style: {
      border: "2px solid #7c83f555",
      borderTop: "3px solid #7c83f5"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: "#7c83f5",
      boxShadow: "0 0 6px #7c83f5"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.accent,
      fontWeight: 800,
      fontSize: 12
    }
  }, "CE \uBE44\uC911"))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-num"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#7c83f5",
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: "-1px",
      lineHeight: 1
    }
  }, ceSharePct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "CE \uB300\uBE44 \uBE44\uC911"), cePrevSharePct !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\uC804\uB144 ", cePrevSharePct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: theme === "light" ? "rgba(0,0,0,.06)" : "rgba(255,255,255,.06)",
      borderRadius: 3,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(ceSharePct, 100), "%"),
      background: "linear-gradient(90deg,#7c83f580,#7c83f5)",
      borderRadius: 3,
      boxShadow: "0 0 8px #7c83f550",
      transition: "width .6s"
    }
  }), cePrevSharePct !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "".concat(Math.min(cePrevSharePct, 100), "%"),
      width: 2,
      background: theme === "light" ? "rgba(0,0,0,.4)" : "rgba(255,255,255,.45)",
      borderRadius: 1,
      zIndex: 2
    }
  }))), cePrevSharePct !== null && /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-stats",
    style: {
      background: C.card2,
      gridTemplateColumns: "1fr 1fr"
    }
  }, [{
    lbl: "전년",
    val: cePrevSharePct.toFixed(1) + "%",
    c: C.muted2
  }, {
    lbl: "변화",
    val: (ceSharePct - cePrevSharePct >= 0 ? "▲" : "▼") + Math.abs(ceSharePct - cePrevSharePct).toFixed(1) + "p",
    c: ceSharePct - cePrevSharePct >= 0 ? C.green : C.red
  }].map(function (_ref26) {
    var lbl = _ref26.lbl,
      val = _ref26.val,
      c = _ref26.c;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      className: "kpi-card-stat"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1
      }
    }, val));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card",
    style: {
      border: "2px solid ".concat(C.muted2, "55"),
      borderTop: "3px solid ".concat(C.muted2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: C.muted2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontWeight: 800,
      fontSize: 12
    }
  }, "\uB204\uACC4 \uC804\uB144"))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-num"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: "-1px",
      lineHeight: 1
    }
  }, ytdPrev > 0 ? Math.round(ytdPrev).toLocaleString() : "─"), ytdPrev > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 13
    }
  }, "\uC5B5")), ytdPrev > 0 && ytdP > 0 ? function () {
    var ratio = ytdP / ytdPrev * 100;
    var isUp = ytdP >= ytdPrev;
    var bc = isUp ? C.green : C.red;
    // 0~150% 범위로 정규화 → 100%가 전체의 66.7%
    var barW = Math.min(ratio / 150 * 100, 100);
    var markerLeft = Math.min(100 / 150 * 100, 100); // 100% 지점
    return /*#__PURE__*/React.createElement("div", {
      className: "kpi-card-bar"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "\uC804\uB144 \uAE30\uC900"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: bc,
        fontSize: 9,
        fontWeight: 700
      }
    }, ratio.toFixed(0), "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: theme === "light" ? "rgba(0,0,0,.06)" : "rgba(255,255,255,.06)",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "".concat(markerLeft, "%"),
        top: 0,
        bottom: 0,
        width: 1.5,
        background: theme === "light" ? "rgba(0,0,0,.3)" : "rgba(255,255,255,.3)",
        zIndex: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(barW, "%"),
        background: "linear-gradient(90deg,".concat(bc, "70,").concat(bc, ")"),
        borderRadius: 3,
        boxShadow: "0 0 6px ".concat(bc, "40"),
        transition: "width .6s"
      }
    })));
  }() : null, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-stats",
    style: {
      background: C.card2,
      gridTemplateColumns: "1fr 1fr"
    }
  }, [{
    lbl: "월평균",
    val: prevAvgMonthly > 0 ? prevAvgMonthly + "억" : "─",
    c: C.muted2
  }, {
    lbl: "전년비",
    val: ytdP > 0 && ytdPrev > 0 ? (ytdP / ytdPrev * 100).toFixed(1) + "%" : "─",
    c: ytdP > 0 && ytdPrev > 0 ? ytdP >= ytdPrev ? C.green : C.red : C.muted
  }].map(function (_ref27) {
    var lbl = _ref27.lbl,
      val = _ref27.val,
      c = _ref27.c;
    return /*#__PURE__*/React.createElement("div", {
      key: lbl,
      className: "kpi-card-stat"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, lbl), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 11,
        fontWeight: 700,
        lineHeight: 1
      }
    }, val));
  }))), daeSharePct !== null && /*#__PURE__*/React.createElement("div", {
    className: "kpi-card",
    style: {
      border: "2px solid ".concat(KC["대외영업"], "55"),
      borderTop: "3px solid ".concat(KC["대외영업"])
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: KC["대외영업"],
      boxShadow: "0 0 6px ".concat(KC["대외영업"])
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: KC["대외영업"],
      fontWeight: 800,
      fontSize: 12
    }
  }, "\uB300\uC678\uC601\uC5C5 \uBE44\uC911"))), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-num"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: KC["대외영업"],
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: "-1px",
      lineHeight: 1
    }
  }, daeSharePct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\uB300\uC678\uC601\uC5C5 \uBE44\uC911"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: KC["대외영업"],
      fontSize: 9,
      fontWeight: 700
    }
  }, daeSharePct.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: theme === "light" ? "rgba(0,0,0,.06)" : "rgba(255,255,255,.06)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(daeSharePct, 100), "%"),
      background: "linear-gradient(90deg,".concat(KC["대외영업"], "80,").concat(KC["대외영업"], ")"),
      borderRadius: 3,
      boxShadow: "0 0 8px ".concat(KC["대외영업"], "50"),
      transition: "width .6s"
    }
  }))))), /*#__PURE__*/React.createElement("style", null, ".perf-row{display:flex;gap:12px}\n        .perf-col{flex:1 1 0;min-width:0;border-radius:12px;overflow:hidden}\n        .perf-col-monthly{background:".concat(C.card, ";border:2px solid ").concat(C.b1, ";box-shadow:0 2px 8px rgba(0,0,0,.06)}\n        .perf-col-cum{background:").concat(C.surf, ";border:2px solid ").concat(C.b1, ";box-shadow:0 2px 8px rgba(0,0,0,.06)}\n        .perf-col-header{padding:10px 14px 10px}\n        .perf-col-monthly .perf-col-header{border-bottom:2px solid ").concat(C.b1, ";background:").concat(C.card2, "}\n        .perf-col-cum .perf-col-header{border-bottom:2px solid ").concat(C.b1, ";background:").concat(C.card2, "}\n        .perf-col-body{padding:14px}\n        @media(max-width:900px){.perf-row{flex-direction:column}}")), /*#__PURE__*/React.createElement("div", {
    className: "perf-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "perf-col perf-col-monthly"
  }, /*#__PURE__*/React.createElement("div", {
    className: "perf-col-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(56,182,245,.2)",
      color: "#38b6f5",
      fontWeight: 900,
      fontSize: 10,
      padding: "3px 8px",
      borderRadius: 4,
      letterSpacing: ".5px"
    }
  }, "\uC6D4\uBCC4"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color,
      fontWeight: 800,
      fontSize: 13
    }
  }, part), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontWeight: 400,
      fontSize: 10
    }
  }, yr, "\uB144 ", mode)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    }
  }, ["실적", "달성", "성장"].map(function (t) {
    return /*#__PURE__*/React.createElement(TabBtn, {
      key: t,
      label: t,
      active: chartTab === t,
      color: color,
      onClick: function onClick() {
        return setChartTab(t);
      }
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "perf-col-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, chartTab === "실적" && /*#__PURE__*/React.createElement(MiniChart, {
    labels: MONTHS,
    h: 200,
    series: [{
      data: mPrev,
      color: "#a78bfa",
      op: .7,
      dash: true,
      label: "전년"
    }, {
      data: mTgt.map(function (v) {
        return v || null;
      }),
      color: C.orange,
      dash: true,
      op: .8,
      label: "목표"
    }, {
      data: mPerf.map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: color,
      bold: true,
      fill: true,
      showLabels: true,
      label: "실적"
    }]
  }), chartTab === "달성" && /*#__PURE__*/React.createElement(MiniChart, {
    labels: MONTHS,
    h: 200,
    pctMode: true,
    series: [{
      data: MONTHS.map(function (_, i) {
        return i <= emi ? 100 : null;
      }),
      color: C.green,
      dash: true,
      op: .4,
      label: "100%"
    }, {
      data: mArArr,
      color: C.teal,
      bold: true,
      fill: true,
      showLabels: true,
      label: "달성률"
    }]
  }), chartTab === "성장" && /*#__PURE__*/React.createElement(MiniChart, {
    labels: MONTHS,
    h: 200,
    grMode: true,
    series: [{
      data: mGrArr,
      color: C.orange,
      bold: true,
      fill: true,
      showLabels: true,
      label: "성장률"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      width: "100%",
      tableLayout: "fixed"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "2px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 4px",
      color: C.muted,
      fontWeight: 700,
      fontSize: 9,
      width: 36
    }
  }, "\uD56D\uBAA9"), MONTHS.map(function (m, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: m,
      style: {
        padding: "3px 2px",
        textAlign: "right",
        color: i <= emi ? C.muted2 : C.muted,
        fontSize: 8,
        fontWeight: 600
      }
    }, m.replace("월", ""), i === emi && /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontSize: 6,
        display: "block",
        textAlign: "center"
      }
    }, "\u25B2"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 4px",
      textAlign: "right",
      color: C.accent,
      fontSize: 9,
      fontWeight: 700,
      width: 54,
      whiteSpace: "nowrap"
    }
  }, "\uB204\uACC4"))), /*#__PURE__*/React.createElement("tbody", null, [{
    key: "목표",
    data: mTgt,
    c: C.orange,
    sum: ytdT,
    bg: "rgba(245,185,66,.10)"
  }, {
    key: "실적",
    data: mPerf,
    c: color,
    sum: ytdP,
    useEmi: true,
    bg: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.18)"
  }, {
    key: "달성률",
    data: mArArr,
    c: C.teal,
    sum: ytdAr,
    isPct: true,
    bg: "rgba(45,212,136,.09)"
  }, {
    key: "성장률",
    data: mGrArr,
    c: C.green,
    sum: ytdGr,
    isPct: true,
    isGrw: true,
    bg: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.18)"
  }, {
    key: "전년",
    data: mPrev,
    c: C.muted2,
    sum: ytdPrev,
    bg: theme === "light" ? "rgba(0,0,0,.02)" : "rgba(255,255,255,.05)"
  }, {
    key: "목표차질",
    data: mPerf,
    c: null,
    sum: ytdP - ytdT,
    isDiff: true,
    diffBase: mTgt,
    bg: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.18)"
  }, {
    key: "전년차질",
    data: mPerf,
    c: null,
    sum: ytdP - ytdPrev,
    isDiff: true,
    diffBase: mPrev,
    bg: theme === "light" ? "rgba(0,0,0,.015)" : C.card2
  }].map(function (_ref28, ri) {
    var key = _ref28.key,
      data = _ref28.data,
      c = _ref28.c,
      sum = _ref28.sum,
      useEmi = _ref28.useEmi,
      isPct = _ref28.isPct,
      isGrw = _ref28.isGrw,
      isDiff = _ref28.isDiff,
      diffBase = _ref28.diffBase,
      bg = _ref28.bg;
    return /*#__PURE__*/React.createElement("tr", {
      key: key,
      style: {
        borderBottom: "1px solid ".concat(ri % 2 === 0 ? theme === "light" ? "rgba(0,0,0,.08)" : "rgba(255,255,255,.09)" : theme === "light" ? "rgba(0,0,0,.14)" : "rgba(0,0,0,.25)"),
        background: bg
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "3px 4px",
        fontWeight: 700,
        fontSize: 9,
        color: isDiff ? C.muted2 : c,
        background: bg,
        whiteSpace: "nowrap"
      }
    }, key), (isDiff ? mPerf : data).map(function (v, i) {
      if (isDiff) {
        if (i > emi) return /*#__PURE__*/React.createElement("td", {
          key: i,
          style: {
            textAlign: "right",
            padding: "1px 2px"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.muted,
            fontSize: 8
          }
        }, "\u2500"));
        var d = mPerf[i] - (diffBase[i] || 0);
        return /*#__PURE__*/React.createElement("td", {
          key: i,
          style: {
            padding: "1px 2px",
            textAlign: "right"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: d >= 0 ? C.green : C.red,
            fontSize: 9,
            fontWeight: 600
          }
        }, d >= 0 ? "+" : "", Math.round(d)));
      }
      var hide = useEmi && i > emi || isPct && v === null;
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "1px 2px",
          textAlign: "right"
        }
      }, hide ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 8
        }
      }, "\u2500") : /*#__PURE__*/React.createElement("span", {
        style: {
          color: isPct ? isGrw ? grwC(String(v)) : pctC(gNum(v)) : i <= emi ? c : C.muted,
          fontSize: 9,
          fontWeight: i <= emi ? 600 : 400
        }
      }, isPct ? (gNum(v) > 0 && isGrw ? "+" : "") + Math.round(gNum(v)) + "%" : Math.round(gNum(v)).toLocaleString()));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "3px 4px",
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, isDiff ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: sum >= 0 ? C.green : C.red,
        fontWeight: 800,
        fontSize: 10,
        whiteSpace: "nowrap"
      }
    }, sum >= 0 ? "+" : "", Math.round(sum), "\uC5B5") : sum != null && /*#__PURE__*/React.createElement("span", {
      style: {
        color: c,
        fontWeight: 800,
        fontSize: 10,
        whiteSpace: "nowrap"
      }
    }, isPct ? Math.round(gNum(sum)) + "%" : Math.round(gNum(sum)).toLocaleString() + "억")));
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "perf-col perf-col-cum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "perf-col-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(167,139,250,.2)",
      color: "#a78bfa",
      fontWeight: 900,
      fontSize: 10,
      padding: "3px 8px",
      borderRadius: 4,
      letterSpacing: ".5px"
    }
  }, "\uB204\uACC4"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color,
      fontWeight: 800,
      fontSize: 13
    }
  }, part), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontWeight: 400,
      fontSize: 10
    }
  }, yr, "\uB144 ", mode)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    }
  }, ["실적", "달성", "성장"].map(function (t) {
    return /*#__PURE__*/React.createElement(TabBtn, {
      key: t,
      label: t,
      active: cumChartTab === t,
      color: color,
      onClick: function onClick() {
        return setCumChartTab(t);
      }
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "perf-col-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, cumChartTab === "실적" && /*#__PURE__*/React.createElement(MiniChart, {
    labels: MONTHS,
    h: 200,
    series: [{
      data: cumPrevFull12,
      color: "#a78bfa",
      op: .7,
      dash: true,
      label: "전년누계"
    }, {
      data: cumTgt,
      color: C.orange,
      dash: true,
      op: .8,
      label: "누계목표"
    }, {
      data: cumPerf,
      color: color,
      bold: true,
      fill: true,
      showLabels: true,
      label: "누계실적"
    }]
  }), cumChartTab === "달성" && /*#__PURE__*/React.createElement(MiniChart, {
    labels: MONTHS,
    h: 200,
    pctMode: true,
    series: [{
      data: MONTHS.map(function (_, i) {
        return i <= emi ? 100 : null;
      }),
      color: C.green,
      dash: true,
      op: .4,
      label: "100%"
    }, {
      data: cumAr,
      color: C.teal,
      bold: true,
      fill: true,
      showLabels: true,
      label: "누계달성률"
    }]
  }), cumChartTab === "성장" && /*#__PURE__*/React.createElement(MiniChart, {
    labels: MONTHS,
    h: 200,
    grMode: true,
    series: [{
      data: cumGr,
      color: C.orange,
      bold: true,
      fill: true,
      showLabels: true,
      label: "누계성장률"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      width: "100%",
      tableLayout: "fixed"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "2px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 4px",
      color: C.muted,
      fontWeight: 700,
      fontSize: 9,
      width: 36
    }
  }, "\uD56D\uBAA9"), MONTHS.map(function (m, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: m,
      style: {
        padding: "3px 2px",
        textAlign: "right",
        color: i <= emi ? C.muted2 : C.muted,
        fontSize: 8,
        fontWeight: 600
      }
    }, m.replace("월", ""), i === emi && /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontSize: 6,
        display: "block",
        textAlign: "center"
      }
    }, "\u25B2"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 4px",
      textAlign: "right",
      color: C.accent,
      fontSize: 9,
      fontWeight: 700,
      width: 54,
      whiteSpace: "nowrap"
    }
  }, "\uD569\uACC4"))), /*#__PURE__*/React.createElement("tbody", null, function () {
    // 연간 합계 기준 지표
    var annAr = annT > 0 ? (ytdP / annT * 100).toFixed(1) : null;
    var annGr = annPrev > 0 ? ((ytdP - annPrev) / annPrev * 100).toFixed(1) : null;
    return [{
      key: "목표",
      data: cumTgt,
      c: C.orange,
      sum: annT,
      bg: "rgba(245,185,66,.10)"
    }, {
      key: "실적",
      data: cumPerf,
      c: color,
      sum: ytdP,
      bg: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.18)"
    }, {
      key: "달성률",
      data: cumAr,
      c: C.teal,
      sum: annAr,
      isPct: true,
      bg: "rgba(45,212,136,.09)"
    }, {
      key: "성장률",
      data: cumGr,
      c: C.green,
      sum: annGr,
      isPct: true,
      isGrw: true,
      bg: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.18)"
    }, {
      key: "전년",
      data: cumPrevFull12,
      c: C.muted2,
      sum: annPrev,
      bg: theme === "light" ? "rgba(0,0,0,.02)" : "rgba(255,255,255,.05)"
    }, {
      key: "목표차질",
      data: cumPerf,
      c: null,
      sum: ytdP - annT,
      isDiff: true,
      diffBase: cumTgt,
      bg: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.18)"
    }, {
      key: "전년차질",
      data: cumPerf,
      c: null,
      sum: ytdP - annPrev,
      isDiff: true,
      diffBase: cumPrevFull12,
      bg: theme === "light" ? "rgba(0,0,0,.015)" : C.card2
    }];
  }().map(function (_ref29, ri) {
    var key = _ref29.key,
      data = _ref29.data,
      c = _ref29.c,
      sum = _ref29.sum,
      isPct = _ref29.isPct,
      isGrw = _ref29.isGrw,
      isDiff = _ref29.isDiff,
      diffBase = _ref29.diffBase,
      bg = _ref29.bg;
    return /*#__PURE__*/React.createElement("tr", {
      key: key,
      style: {
        borderBottom: "1px solid ".concat(ri % 2 === 0 ? theme === "light" ? "rgba(0,0,0,.08)" : "rgba(255,255,255,.09)" : theme === "light" ? "rgba(0,0,0,.14)" : "rgba(0,0,0,.25)"),
        background: bg
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "3px 4px",
        fontWeight: 700,
        fontSize: 9,
        color: isDiff ? C.muted2 : c,
        background: bg,
        whiteSpace: "nowrap"
      }
    }, key), (isDiff ? cumPerf : data).map(function (v, i) {
      if (isDiff) {
        if (v === null) return /*#__PURE__*/React.createElement("td", {
          key: i,
          style: {
            textAlign: "right",
            padding: "1px 2px"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.muted,
            fontSize: 8
          }
        }, "\u2500"));
        var base = diffBase[i];
        var d = v - (base || 0);
        return /*#__PURE__*/React.createElement("td", {
          key: i,
          style: {
            padding: "1px 2px",
            textAlign: "right"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: d >= 0 ? C.green : C.red,
            fontSize: 9,
            fontWeight: 600,
            whiteSpace: "nowrap"
          }
        }, d >= 0 ? "+" : "", Math.round(d)));
      }
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: {
          padding: "1px 2px",
          textAlign: "right"
        }
      }, v === null ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 8
        }
      }, "\u2500") : /*#__PURE__*/React.createElement("span", {
        style: {
          color: isPct ? isGrw ? grwC(String(v)) : pctC(gNum(v)) : i <= emi ? c : C.muted,
          fontSize: 9,
          fontWeight: i <= emi ? 600 : 400
        }
      }, isPct ? (gNum(v) > 0 && isGrw ? "+" : "") + Math.round(gNum(v)) + "%" : Math.round(gNum(v)).toLocaleString()));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "3px 4px",
        textAlign: "right",
        whiteSpace: "nowrap"
      }
    }, isDiff ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: sum >= 0 ? C.green : C.red,
        fontWeight: 800,
        fontSize: 10,
        whiteSpace: "nowrap"
      }
    }, sum >= 0 ? "+" : "", Math.round(sum), "\uC5B5") : sum != null && /*#__PURE__*/React.createElement("span", {
      style: {
        color: c,
        fontWeight: 800,
        fontSize: 10,
        whiteSpace: "nowrap"
      }
    }, isPct ? Math.round(gNum(sum)) + "%" : Math.round(gNum(sum)).toLocaleString() + "억")));
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.accent, "55"),
      borderRadius: 12,
      padding: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14,
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: C.text
    }
  }, isEditing ? "✏️" : "🔒", " \uB2EC\uC131 \uACC4\uD68D"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, mode, " \xB7 ", part), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: 4,
      background: isEditing ? C.orange + "28" : C.muted + "18",
      color: isEditing ? C.orange : C.muted,
      border: "1px solid ".concat(isEditing ? C.orange + "50" : C.b1)
    }
  }, isEditing ? "편집 중" : "저장됨"), hasDraft && isEditing && !tempSaved && /*#__PURE__*/React.createElement(Chip, {
    c: C.orange
  }, "\u25CF \uBBF8\uC800\uC7A5"), hasDraft && isEditing && tempSaved && /*#__PURE__*/React.createElement(Chip, {
    c: C.teal
  }, "\uD83D\uDCBE \uC784\uC2DC\uC800\uC7A5\uB428"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      marginBottom: 16,
      borderBottom: "1px solid ".concat(C.b1),
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelMonth("annual");
    },
    style: {
      padding: "5px 12px",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 11,
      fontFamily: "inherit",
      border: "1px solid ".concat(selMonth === "annual" ? C.accent : C.b1),
      background: selMonth === "annual" ? C.accent + "22" : "transparent",
      color: selMonth === "annual" ? C.accent : C.muted
    }
  }, "\uC5F0\uAC04"), MONTHS.map(function (m, i) {
    var hasPlan = getText(yr, mode, part, String(i)).length > 0;
    var hasPrev = getText("prev_" + (yr === "26" ? "25" : yr === "25" ? "24" : "23"), mode, part, String(i)).length > 0;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return setSelMonth(i);
      },
      style: {
        padding: "5px 10px",
        borderRadius: 6,
        cursor: "pointer",
        fontWeight: 700,
        fontSize: 11,
        fontFamily: "inherit",
        position: "relative",
        border: "1px solid ".concat(selMonth === i ? color : hasPlan || hasPrev ? color + "50" : C.b1),
        background: selMonth === i ? color + "22" : hasPlan || hasPrev ? color + "08" : "transparent",
        color: selMonth === i ? color : hasPlan || hasPrev ? color + "bb" : C.muted
      }
    }, m, (hasPlan || hasPrev) && selMonth !== i && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 2,
        right: 2,
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: hasPlan ? color : C.muted2,
        display: "block"
      }
    }));
  })), function () {
    var mkCard = function mkCard(m, mTgt, mPerf, mPrev, annT, emi_x, ytdP_x, ytdPrev_x) {
      var selTgt_x = selMi !== null ? mTgt[selMi] : annT;
      var selPerf_x = selMi !== null ? mPerf[selMi] : ytdP_x;
      // 성장률: 연간선택시 누계전년(ytdPrev_x) 기준, 월선택시 해당월 전년
      var selPrev_x = selMi !== null ? mPrev[selMi] : ytdPrev_x;
      // 목표 성장률: 목표 vs 전년(연간전년)
      var annPrev_x = mPrev.reduce(function (a, b) {
        return a + b;
      }, 0);
      var grBase_x = selMi !== null ? mPrev[selMi] : annPrev_x;
      var selGr_x = grBase_x > 0 && selTgt_x > 0 ? ((selTgt_x - grBase_x) / grBase_x * 100).toFixed(1) : null; // 목표 성장률
      var selAr_x = selTgt_x > 0 && selPerf_x > 0 ? (selPerf_x / selTgt_x * 100).toFixed(1) : null;
      var selActGr_x = selPrev_x > 0 && selPerf_x > 0 ? ((selPerf_x - selPrev_x) / selPrev_x * 100).toFixed(1) : null; // 실적 성장률
      var mc = m === "매출" ? C.매출 : C.판매;
      var hasPerf = selMi !== null ? selPerf_x > 0 : ytdP_x > 0;
      var emiLabel = emi_x >= 0 ? MONTHS[emi_x] : "";
      return {
        m: m,
        mc: mc,
        selTgt_x: selTgt_x,
        selPerf_x: selPerf_x,
        grBase_x: grBase_x,
        selPrev_x: selPrev_x,
        selGr_x: selGr_x,
        selAr_x: selAr_x,
        selActGr_x: selActGr_x,
        hasPerf: hasPerf,
        emiLabel: emiLabel
      };
    };
    var c1 = mkCard(mode, mTgt_pl, mPerf_pl, mPrev_pl, annT_pl, emi_pl, ytdP_pl, ytdPrev_pl);
    var c2 = mkCard(otherMode, mTgt_ot, mPerf_ot, mPrev_ot, annT_ot, emi_ot, ytdP_ot, ytdPrev_ot);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 12,
        flexWrap: "wrap"
      }
    }, [c1, c2].map(function (_ref30) {
      var m = _ref30.m,
        mc = _ref30.mc,
        selTgt_x = _ref30.selTgt_x,
        selPerf_x = _ref30.selPerf_x,
        grBase_x = _ref30.grBase_x,
        selGr_x = _ref30.selGr_x,
        selAr_x = _ref30.selAr_x,
        selActGr_x = _ref30.selActGr_x,
        hasPerf = _ref30.hasPerf,
        emiLabel = _ref30.emiLabel;
      return /*#__PURE__*/React.createElement("div", {
        key: m,
        style: {
          flex: 1,
          minWidth: 220,
          background: C.card,
          borderRadius: 12,
          border: "2px solid ".concat(mc, "30"),
          overflow: "hidden",
          boxShadow: theme === "light" ? "0 2px 8px rgba(0,0,0,.06)" : "none"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: mc + "14",
          padding: "6px 14px",
          borderBottom: "1px solid ".concat(mc, "25"),
          display: "flex",
          alignItems: "center",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 8,
          height: 8,
          borderRadius: 2,
          background: mc
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: mc,
          fontSize: 11,
          fontWeight: 800
        }
      }, m), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 10,
          marginLeft: 2
        }
      }, selMonth === "annual" ? "연간" : MONTHS[selMonth])), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          padding: "10px 14px",
          gap: 12,
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 80
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 9,
          fontWeight: 700,
          marginBottom: 3
        }
      }, selMonth === "annual" ? "연간 목표" : "".concat(MONTHS[selMonth], " \uBAA9\uD45C")), /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.orange,
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: "-.5px",
          lineHeight: 1
        }
      }, selTgt_x > 0 ? Math.round(selTgt_x).toLocaleString() + "억" : "─"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6,
          marginTop: 4,
          flexWrap: "wrap"
        }
      }, grBase_x > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted2,
          fontSize: 10
        }
      }, "\uC804\uB144 ", Math.round(grBase_x).toLocaleString(), "\uC5B5"), selGr_x !== null && /*#__PURE__*/React.createElement("span", {
        style: {
          color: grwC(selGr_x),
          fontSize: 10,
          fontWeight: 700
        }
      }, gNum(selGr_x) >= 0 ? "▲" : "▼", Math.abs(gNum(selGr_x)).toFixed(1), "%"))), hasPerf && /*#__PURE__*/React.createElement("div", {
        style: {
          width: 1,
          background: C.b1,
          alignSelf: "stretch"
        }
      }), hasPerf && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 80
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          color: C.muted,
          fontSize: 9,
          fontWeight: 700,
          marginBottom: 3
        }
      }, selMi !== null ? "".concat(MONTHS[selMi], " \uC2E4\uC801") : "".concat(emiLabel, " \uB204\uACC4")), /*#__PURE__*/React.createElement("div", {
        style: {
          color: mc,
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: "-.5px",
          lineHeight: 1
        }
      }, Math.round(selPerf_x).toLocaleString(), "\uC5B5"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6,
          marginTop: 4,
          flexWrap: "wrap"
        }
      }, selAr_x && /*#__PURE__*/React.createElement("span", {
        style: {
          background: C.accent + "18",
          color: C.accent,
          fontSize: 9,
          fontWeight: 700,
          padding: "1px 5px",
          borderRadius: 4
        }
      }, "\uB2EC\uC131 ", Math.round(gNum(selAr_x)), "%"), selActGr_x && /*#__PURE__*/React.createElement("span", {
        style: {
          color: grwC(selActGr_x),
          fontSize: 10,
          fontWeight: 700
        }
      }, gNum(selActGr_x) >= 0 ? "▲" : "▼", Math.abs(gNum(selActGr_x)).toFixed(1), "%")))));
    }));
  }(), part === "대외영업" && function () {
    var FIXED_PARTS = ["혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
    var BAR_PARTS = ["혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협"];
    var periodLabel = selMonth === "annual" ? "연간" : MONTHS[selMonth];
    var mc_mode = mode === "매출" ? C.매출 : C.판매;
    var mc_other = otherMode === "매출" ? C.매출 : C.판매;

    // 각 파트 데이터 계산
    var rows = FIXED_PARTS.map(function (k) {
      return {
        k: k,
        plTgt: selMi !== null ? gNum((fullRow(tD_pl[sk(selMi)]) || {})[k]) : MONTHS.reduce(function (a, _, i) {
          return a + gNum((fullRow(tD_pl[sk(i)]) || {})[k]);
        }, 0),
        plPrev: selMi !== null ? gNum((fullRow(pD25_pl[sk(selMi)]) || {})[k]) : MONTHS.reduce(function (a, _, i) {
          return a + gNum((fullRow(pD25_pl[sk(i)]) || {})[k]);
        }, 0),
        otTgt: selMi !== null ? gNum((fullRow(tD_ot[sk(selMi)]) || {})[k]) : MONTHS.reduce(function (a, _, i) {
          return a + gNum((fullRow(tD_ot[sk(i)]) || {})[k]);
        }, 0),
        otPrev: selMi !== null ? gNum((fullRow(pD25_ot[sk(selMi)]) || {})[k]) : MONTHS.reduce(function (a, _, i) {
          return a + gNum((fullRow(pD25_ot[sk(i)]) || {})[k]);
        }, 0)
      };
    });
    var daeTotalPl = BAR_PARTS.reduce(function (a, k) {
      var r = rows.find(function (x) {
        return x.k === k;
      });
      return a + (r ? r.plTgt : 0);
    }, 0);
    var daeTotalOt = BAR_PARTS.reduce(function (a, k) {
      var r = rows.find(function (x) {
        return x.k === k;
      });
      return a + (r ? r.otTgt : 0);
    }, 0);
    var maxPl = Math.max.apply(Math, _toConsumableArray(rows.filter(function (r) {
      return r.k !== "휴대폰";
    }).map(function (r) {
      return r.plTgt;
    })).concat([1]));
    var maxOt = Math.max.apply(Math, _toConsumableArray(rows.filter(function (r) {
      return r.k !== "휴대폰";
    }).map(function (r) {
      return r.otTgt;
    })).concat([1]));
    var Panel = function Panel(_ref31) {
      var mLabel = _ref31.mLabel,
        mColor = _ref31.mColor,
        getTgt = _ref31.getTgt,
        getPrev = _ref31.getPrev,
        daeTotal = _ref31.daeTotal,
        maxVal = _ref31.maxVal;
      var DAE_KEYS = ["혼수", "입주", "이사", "SAC", "거주중", "SMB", "농협", "휴대폰"];
      var totalTgt = DAE_KEYS.reduce(function (a, k) {
        var r = rows.find(function (x) {
          return x.k === k;
        });
        return a + (r ? getTgt(r) : 0);
      }, 0);
      var totalPrev = DAE_KEYS.reduce(function (a, k) {
        var r = rows.find(function (x) {
          return x.k === k;
        });
        return a + (r ? getPrev(r) : 0);
      }, 0);
      var totalGr = totalPrev > 0 && totalTgt > 0 ? ((totalTgt - totalPrev) / totalPrev * 100).toFixed(1) : null;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0,
          background: C.card,
          borderRadius: 12,
          border: "2px solid ".concat(mColor, "30"),
          overflow: "hidden",
          boxShadow: theme === "light" ? "0 2px 8px rgba(0,0,0,.07)" : "none"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: mColor + "14",
          borderBottom: "1px solid ".concat(mColor, "25"),
          padding: "7px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 8,
          height: 8,
          borderRadius: 2,
          background: mColor
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: mColor,
          fontSize: 12,
          fontWeight: 800
        }
      }, mLabel), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 10
        }
      }, periodLabel)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.text,
          fontSize: 13,
          fontWeight: 900
        }
      }, totalTgt > 0 ? Math.round(totalTgt).toLocaleString() + "억" : "─"), totalGr !== null && /*#__PURE__*/React.createElement("span", {
        style: {
          color: grwC(totalGr),
          fontSize: 11,
          fontWeight: 700
        }
      }, "(", gNum(totalGr) >= 0 ? "▲" : "▼", Math.abs(gNum(totalGr)).toFixed(1), "%)"))), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "8px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 4
        }
      }, rows.map(function (r) {
        var tgt = getTgt(r);
        var prev = getPrev(r);
        var gr = prev > 0 && tgt > 0 ? ((tgt - prev) / prev * 100).toFixed(1) : null;
        var isHp = r.k === "휴대폰";
        var share = !isHp && daeTotal > 0 && tgt > 0 ? tgt / daeTotal * 100 : null;
        var barW = !isHp && maxVal > 0 && tgt > 0 ? Math.min(tgt / maxVal * 100, 100) : 0;
        var kc = KC[r.k] || C.accent;
        return /*#__PURE__*/React.createElement("div", {
          key: r.k,
          style: {
            position: "relative"
          },
          onMouseEnter: function onMouseEnter(e) {
            var el = e.currentTarget.querySelector(".btip");
            if (el) el.style.display = "block";
          },
          onMouseLeave: function onMouseLeave(e) {
            var el = e.currentTarget.querySelector(".btip");
            if (el) el.style.display = "none";
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 42,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 3
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 5,
            height: 5,
            borderRadius: 1,
            background: kc,
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.muted2,
            fontSize: 10,
            fontWeight: 700
          }
        }, r.k)), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            position: "relative"
          }
        }, isHp ? /*#__PURE__*/React.createElement("div", {
          style: {
            height: 20,
            display: "flex",
            alignItems: "center"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            borderBottom: "1px dashed ".concat(C.b2)
          }
        })) : /*#__PURE__*/React.createElement("div", {
          style: {
            height: 20,
            background: C.b1 + "50",
            borderRadius: 3,
            overflow: "hidden",
            position: "relative"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "".concat(barW, "%"),
            background: "linear-gradient(90deg,".concat(kc, "bb,").concat(kc, ")"),
            borderRadius: 3,
            transition: "width .5s ease"
          }
        }), share !== null && barW > 16 && /*#__PURE__*/React.createElement("span", {
          style: {
            position: "absolute",
            right: "".concat(Math.max(100 - barW + 1, 2), "%"),
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            fontSize: 8,
            fontWeight: 700,
            textShadow: "0 1px 2px rgba(0,0,0,.5)",
            paddingRight: 3,
            whiteSpace: "nowrap"
          }
        }, share.toFixed(0), "%"))), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 96,
            flexShrink: 0,
            textAlign: "right"
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: tgt > 0 ? C.text : C.muted,
            fontSize: 12,
            fontWeight: 900
          }
        }, tgt > 0 ? Math.round(tgt).toLocaleString() + "억" : "─"), gr !== null && /*#__PURE__*/React.createElement("span", {
          style: {
            color: grwC(gr),
            fontSize: 9,
            fontWeight: 700,
            marginLeft: 3
          }
        }, "(", gNum(gr) >= 0 ? "▲" : "▼", Math.abs(gNum(gr)).toFixed(1), "%)"))), /*#__PURE__*/React.createElement("div", {
          className: "btip",
          style: {
            display: "none",
            position: "absolute",
            left: "40%",
            top: "100%",
            zIndex: 20,
            background: C.tooltip,
            border: "1px solid ".concat(C.b1),
            borderRadius: 6,
            padding: "6px 10px",
            fontSize: 10,
            color: C.text,
            whiteSpace: "nowrap",
            marginTop: 2
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 800,
            color: kc,
            marginBottom: 3
          }
        }, r.k), /*#__PURE__*/React.createElement("div", null, "\uBAA9\uD45C: ", /*#__PURE__*/React.createElement("b", null, tgt > 0 ? Math.round(tgt).toLocaleString() + "억" : "─")), /*#__PURE__*/React.createElement("div", null, "\uC804\uB144 \uC2E4\uC801: ", /*#__PURE__*/React.createElement("b", null, prev > 0 ? Math.round(prev).toLocaleString() + "억" : "─")), gr !== null && /*#__PURE__*/React.createElement("div", {
          style: {
            color: grwC(gr),
            fontWeight: 700
          }
        }, "\uC804\uB144\uBE44 ", gNum(gr) >= 0 ? "▲" : "▼", Math.abs(gNum(gr)).toFixed(1), "%")));
      })));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12,
        borderRadius: 10,
        border: "1px solid ".concat(C.b1),
        padding: "10px 12px",
        background: C.card2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: KC["대외영업"],
        fontSize: 10,
        fontWeight: 800,
        marginBottom: 10,
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCA \uD30C\uD2B8\uBCC4 \uBAA9\uD45C"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9,
        fontWeight: 400
      }
    }, periodLabel)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      mLabel: mode,
      mColor: mc_mode,
      getTgt: function getTgt(r) {
        return r.plTgt;
      },
      getPrev: function getPrev(r) {
        return r.plPrev;
      },
      daeTotal: daeTotalPl,
      maxVal: maxPl
    }), /*#__PURE__*/React.createElement(Panel, {
      mLabel: otherMode,
      mColor: mc_other,
      getTgt: function getTgt(r) {
        return r.otTgt;
      },
      getPrev: function getPrev(r) {
        return r.otPrev;
      },
      daeTotal: daeTotalOt,
      maxVal: maxOt
    })));
  }(), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.accent,
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 8,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCDD ", selMonth === "annual" ? "연간" : MONTHS[selMonth], " \uB2EC\uC131 \uACC4\uD68D", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontWeight: 400,
      marginLeft: 6,
      fontSize: 10
    }
  }, "(", yr, "\uB144 \xB7 ", mode, " \xB7 ", part, ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, isEditing ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setTextDraft({});
      setTempSaved(false);
      setIsEditing(false);
      setEditorKey(function (k) {
        return k + 1;
      });
    },
    style: {
      padding: "5px 14px",
      borderRadius: 7,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 11,
      fontFamily: "inherit",
      border: "1px solid ".concat(C.muted),
      background: "transparent",
      color: C.muted
    }
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: !hasDraft || saveState === "saving",
    style: {
      padding: "5px 16px",
      borderRadius: 7,
      fontWeight: 700,
      fontSize: 11,
      fontFamily: "inherit",
      border: "none",
      cursor: hasDraft ? "pointer" : "default",
      background: hasDraft ? C.accent : C.b1,
      color: hasDraft ? "#fff" : C.muted,
      opacity: saveState === "saving" ? .6 : 1
    }
  }, saveState === "saving" ? "저장 중..." : "💾 저장")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setIsEditing(true);
      setEditorKey(function (k) {
        return k + 1;
      });
    },
    disabled: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음"),
    style: {
      padding: "5px 16px",
      borderRadius: 7,
      fontWeight: 700,
      fontSize: 11,
      fontFamily: "inherit",
      border: "1px solid ".concat(dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? C.b1 : C.accent),
      background: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? C.b2 : C.accent + "22",
      color: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? C.muted : C.accent,
      cursor: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? "not-allowed" : "pointer",
      opacity: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? .5 : 1
    }
  }, "\u270F\uFE0F \uC218\uC815"), dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u26A0 \uB370\uC774\uD130 \uB85C\uB4DC \uBBF8\uC644\uB8CC")))), /*#__PURE__*/React.createElement(RichEditor, {
    key: "plan-".concat(editorKey, "-").concat(yr, "-").concat(mode, "-").concat(part, "-").concat(selMonth),
    value: currentText,
    onChange: function onChange(e) {
      return setText(yr, mode, part, selMonth === "annual" ? "annual" : String(selMonth), e.target.value);
    },
    placeholder: "예)\n• 핵심 거래처 집중 공략: ○○가구 등 상위 10개사 목표 관리\n• 신규 개척: 신혼부부 대상 패키지 제안 확대\n• 캠페인 연계: 봄 이사철 프로모션 적극 활용\n• 리스크 관리: 전년 대비 취약 월 보완 방안 수립",
    minHeight: 200,
    readOnly: !isEditing,
    fontSize: 14,
    theme: theme
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(C.b1),
      paddingTop: 14,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
      flexWrap: "wrap",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted2,
      fontSize: 11,
      fontWeight: 700
    }
  }, "\uD83D\uDCCC ", selMonth === "annual" ? "연간" : MONTHS[selMonth], " \uC804\uB144\uB3C4 \uC8FC\uC694\uC0AC\uD56D", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontWeight: 400,
      marginLeft: 6,
      fontSize: 10
    }
  }, "(", yr === "26" ? "25" : yr === "25" ? "24" : "23", "\uB144 \uC2E4\uC801 \uD2B9\uC774\uC0AC\uD56D)"))), /*#__PURE__*/React.createElement(RichEditor, {
    key: "prev-".concat(editorKey, "-").concat(yr, "-").concat(mode, "-").concat(part, "-").concat(selMonth),
    value: getText("prev_" + (yr === "26" ? "25" : yr === "25" ? "24" : "23"), mode, part, selMonth === "annual" ? "annual" : String(selMonth)),
    onChange: function onChange(e) {
      return setText("prev_" + (yr === "26" ? "25" : yr === "25" ? "24" : "23"), mode, part, selMonth === "annual" ? "annual" : String(selMonth), e.target.value);
    },
    placeholder: "예)\n• 1분기: 혼수·이사 수요 호조로 초과달성\n• 하반기: 경기침체로 고가 제품 부진\n• 연간 달성률 103%, 전년비 +5%",
    minHeight: 130,
    readOnly: !isEditing,
    fontSize: 13,
    theme: theme
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 14,
      paddingTop: 14,
      borderTop: "1px solid ".concat(C.b1),
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, saveState === "saved" && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green,
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2705 \uC800\uC7A5 \uC644\uB8CC"), saveState === "error" && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.red,
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u274C \uC800\uC7A5 \uC624\uB958"), hasDraft && isEditing && saveState === "idle" && !tempSaved && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10
    }
  }, "\u25CF 3\uCD08 \uD6C4 \uC784\uC2DC\uC800\uC7A5..."), hasDraft && isEditing && saveState === "idle" && tempSaved && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.teal,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDCBE \uC784\uC2DC\uC800\uC7A5\uB428 (\uC800\uC7A5 \uBC84\uD2BC\uC73C\uB85C \uD655\uC815)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, isEditing ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setTextDraft({});
      setTempSaved(false);
      setIsEditing(false);
      setEditorKey(function (k) {
        return k + 1;
      });
    },
    style: {
      padding: "8px 18px",
      borderRadius: 7,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 12,
      fontFamily: "inherit",
      border: "1px solid ".concat(C.muted),
      background: "transparent",
      color: C.muted
    }
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: !hasDraft || saveState === "saving",
    style: {
      padding: "8px 22px",
      borderRadius: 7,
      fontWeight: 700,
      fontSize: 12,
      fontFamily: "inherit",
      border: "none",
      cursor: hasDraft ? "pointer" : "default",
      background: hasDraft ? C.accent : C.b1,
      color: hasDraft ? "#fff" : C.muted,
      opacity: saveState === "saving" ? .6 : 1
    }
  }, saveState === "saving" ? "저장 중..." : "💾 저장")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setIsEditing(true);
      setEditorKey(function (k) {
        return k + 1;
      });
    },
    disabled: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음"),
    style: {
      padding: "8px 22px",
      borderRadius: 7,
      fontWeight: 700,
      fontSize: 12,
      fontFamily: "inherit",
      border: "1px solid ".concat(dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? C.b1 : C.accent),
      background: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? C.b2 : C.accent + "22",
      color: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? C.muted : C.accent,
      cursor: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? "not-allowed" : "pointer",
      opacity: dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") ? .5 : 1
    }
  }, "\u270F\uFE0F \uC218\uC815"), dbStatus && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음") && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u26A0 \uB370\uC774\uD130 \uB85C\uB4DC \uBBF8\uC644\uB8CC"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 10,
      textAlign: "center",
      paddingBottom: 16
    }
  }, "\uCDA9\uCCAD\uC601\uC5C5\uD300 \uC2E4\uC801\uAD00\uB9AC \uC2DC\uC2A4\uD15C \xB7 \uB2EC\uC131 \uACC4\uD68D / \uBE44\uBC00\uBC88\uD638 \uBB38\uC758: \uAD00\uB9AC\uC790"))), showBackup && /*#__PURE__*/React.createElement(BackupModal, {
    onClose: function onClose() {
      return setShowBackup(false);
    },
    perfData: perfData,
    planTextData: planTextData,
    onImportJson: handleImportJson,
    excelFn: function excelFn() {
      handleExcel();
    }
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(PlanApp, null)));
window.__APP_READY__ = true;
