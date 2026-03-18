"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* ═══════════════════════════════════════════════
   충청영업팀 실적관리 v13
   ─────────────────────────────────────────────
   대시보드: 꺾기 차트, 누계 비교, 진척률, 전항목
   분석: 실적+목표+달성률 / 실적+전년+성장률
   입력: 일괄입력 실적/목표 명확 구분, 합계 고정
   반응형: 모바일/태블릿/PC 지원
   ═══════════════════════════════════════════════ */
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback,
  useMemo = _React.useMemo,
  useRef = _React.useRef;
var APP_VER = "v3.2";

// XLSX 지연 로드 (다운로드 클릭 시 최초 1회만 로드)
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
// 목표 입력 잠금 비번 (SHA-256) — 기본값: ce2025!
var TGT_PW_HASH = "b1c9a90560020cd8f64c5a8a2c30bd2b6ce28dcff2b9e535f9da3c2d14061b68";
var TGT_UNLOCK_KEY = "cst_tgt_unlock_v1"; // 목표+실적 통합 잠금
// 전역 폰트 크기 (plan.html → localStorage 공유)
var FONT_SIZE_KEY = "cst_zoom_v2"; // v2: % 단위로 변경

// ─── spin 애니메이션 전역 주입 (ErrorBoundary/내부 스피너용) ───
(function () {
  if (!document.getElementById("cst-spin-style")) {
    var s = document.createElement("style");
    s.id = "cst-spin-style";
    s.textContent = "#app-content{transform-origin:top center;transition:transform .15s ease;}" + "@keyframes spin{to{transform:rotate(360deg)}}" + "@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}";
    document.head.appendChild(s);
  }
})();

// ─── 상수 ─────────────────────────────────────
var MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
var INP_KEYS = ["CE", "혼수", "입주", "이사", "SAC", "거주중", "SMB", "농협", "휴대폰"];
var MODES = ["매출", "판매"];
var ALL_KEYS = ["CE", "대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];

// ─── 파생값 ─────────────────────────────────────
var g = function g(o, k) {
  return parseFloat(o === null || o === void 0 ? void 0 : o[k]) || 0;
};
var derived = function derived(o) {
  return {
    뉴홈: g(o, "입주") + g(o, "이사"),
    대외영업: g(o, "혼수") + g(o, "입주") + g(o, "이사") + g(o, "SMB") + g(o, "농협") + g(o, "거주중") + g(o, "휴대폰"),
    B2B: g(o, "SMB") + g(o, "농협") + g(o, "휴대폰")
  };
};
var fullRow = function fullRow(o) {
  return _objectSpread(_objectSpread({}, o || {}), derived(o));
};
var gNum = function gNum(v) {
  return parseFloat(v) || 0;
};
var sk = function sk(i) {
  return String(i);
}; // safe key

// ─── 데이터 구조 ─────────────────────────────────
var emptyM = function emptyM() {
  return Object.fromEntries(Array.from({
    length: 12
  }, function (_, i) {
    return [sk(i), Object.fromEntries(INP_KEYS.map(function (k) {
      return [k, ""];
    }))];
  }));
};
var emptyMode = function emptyMode(hasTgt) {
  return hasTgt ? {
    perf: emptyM(),
    target: emptyM()
  } : {
    perf: emptyM()
  };
};
var initData = function initData() {
  return {
    "24": {
      매출: emptyMode(false),
      판매: emptyMode(false)
    },
    "25": {
      매출: emptyMode(true),
      판매: emptyMode(true)
    },
    "26": {
      매출: emptyMode(true),
      판매: emptyMode(true)
    }
  };
};

// ─── 정규화 (Firestore 키형식 무관) ──────────────
var normalizeM = function normalizeM(src) {
  var r = {};
  var _loop = function _loop(i) {
    var v = (src === null || src === void 0 ? void 0 : src[i]) || (src === null || src === void 0 ? void 0 : src[sk(i)]) || {};
    r[sk(i)] = {};
    INP_KEYS.forEach(function (k) {
      var _v$k;
      r[sk(i)][k] = (_v$k = v[k]) !== null && _v$k !== void 0 ? _v$k : "";
    });
  };
  for (var i = 0; i < 12; i++) {
    _loop(i);
  }
  return r;
};
var migrate = function migrate(raw) {
  if (!raw) return initData();
  var res = initData();
  ["24", "25", "26"].forEach(function (yr) {
    if (!raw[yr]) return;
    MODES.forEach(function (mode) {
      var _raw$yr, _raw$yr2;
      var src = ((_raw$yr = raw[yr]) === null || _raw$yr === void 0 ? void 0 : _raw$yr[mode]) || (mode === "매출" && !((_raw$yr2 = raw[yr]) !== null && _raw$yr2 !== void 0 && _raw$yr2["매출"]) ? raw[yr] : null);
      if (!src) return;
      ["perf", "target"].forEach(function (t) {
        if (!src[t]) return;
        res[yr][mode][t] = normalizeM(src[t]);
      });
    });
  });
  return res;
};

// ─── 수식 ────────────────────────────────────────
var sumM = function sumM(d, k) {
  return Array.from({
    length: 12
  }, function (_, i) {
    return gNum(fullRow(d === null || d === void 0 ? void 0 : d[sk(i)])[k]);
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
};
var sumR = function sumR(d, k, f, t) {
  return Array.from({
    length: t - f + 1
  }, function (_, i) {
    return gNum(fullRow(d === null || d === void 0 ? void 0 : d[sk(f + i)])[k]);
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
};
var pct = function pct(a, b) {
  return b ? (a / b * 100).toFixed(1) : null;
};
var grw = function grw(c, p) {
  return p ? ((c - p) / p * 100).toFixed(1) : null;
};
var fmt = function fmt(v) {
  var n = gNum(v);
  return n > 0 ? Math.round(n).toLocaleString() : "-";
};
var fmtD = function fmtD(v) {
  var n = gNum(v);
  return n > 0 ? Math.round(n).toLocaleString() + "억" : "";
};
var lastMiOf = function lastMiOf(d) {
  var _loop2 = function _loop2(i) {
      if (INP_KEYS.some(function (k) {
        var _d$sk;
        return gNum(d === null || d === void 0 || (_d$sk = d[sk(i)]) === null || _d$sk === void 0 ? void 0 : _d$sk[k]) > 0;
      })) return {
        v: i
      };
    },
    _ret;
  for (var i = 11; i >= 0; i--) {
    _ret = _loop2(i);
    if (_ret) return _ret.v;
  }
  return -1;
};

// ─── 테마 시스템 ──────────────────────────────────
var THEME_KEY = "cst_theme_v1";
var COLORS_DARK = {
  bg: "#07101f",
  surf: "#0b1929",
  card: "#0f2035",
  card2: "#132843",
  b1: "#1b3353",
  b2: "#213d63",
  text: "#cce4f7",
  muted: "#4a6a88",
  muted2: "#7a9ab8",
  accent: "#7c83f5",
  blue: "#38b6f5",
  green: "#2dd488",
  orange: "#f5b942",
  red: "#f07070",
  purple: "#d97af5",
  teal: "#2dd4c0",
  매출: "#38b6f5",
  판매: "#2dd488",
  tooltip: "rgba(7,16,31,.85)"
};
var COLORS_LIGHT = {
  bg: "#e8edf4",
  surf: "#f4f7fb",
  card: "#ffffff",
  card2: "#f0f4f8",
  b1: "#c8d6e5",
  b2: "#a0b4c8",
  text: "#1e293b",
  muted: "#5a7a96",
  muted2: "#3d5a74",
  accent: "#4f46e5",
  blue: "#0369a1",
  green: "#047857",
  orange: "#b45309",
  red: "#b91c1c",
  purple: "#7c3aed",
  teal: "#0f766e",
  매출: "#0369a1",
  판매: "#047857",
  tooltip: "rgba(255,255,255,.97)"
};
var KC_DARK = {
  CE: "#7c83f5",
  대외영업: "#38b6f5",
  혼수: "#f5b942",
  뉴홈: "#2dd488",
  입주: "#5ee8b0",
  이사: "#80f0de",
  SAC: "#d97af5",
  거주중: "#b87af5",
  B2B: "#f58f42",
  SMB: "#f5c090",
  농협: "#f5e090",
  휴대폰: "#90a8c0"
};
var KC_LIGHT = {
  CE: "#4338ca",
  대외영업: "#0369a1",
  혼수: "#92400e",
  뉴홈: "#065f46",
  입주: "#047857",
  이사: "#0e7490",
  SAC: "#6d28d9",
  거주중: "#9d174d",
  B2B: "#9a3412",
  SMB: "#92400e",
  농협: "#3f6212",
  휴대폰: "#334155"
};

// 모듈 초기화 시 테마 즉시 적용 (렌더 전 flash 방지)
var _initTheme = function () {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch (_unused) {
    return 'light';
  }
}();
var C = _initTheme === 'light' ? _objectSpread({}, COLORS_LIGHT) : _objectSpread({}, COLORS_DARK);
var KC = _initTheme === 'light' ? _objectSpread({}, KC_LIGHT) : _objectSpread({}, KC_DARK);
(function () {
  try {
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
  } catch (_unused2) {}
})();
function applyThemeCSS(theme) {
  var el = document.getElementById('cst-theme-css');
  if (!el) {
    el = document.createElement('style');
    el.id = 'cst-theme-css';
    document.head.appendChild(el);
  }
  if (theme === 'light') {
    el.textContent = "\n      body{background:".concat(COLORS_LIGHT.bg, "!important;color:").concat(COLORS_LIGHT.text, "!important}\n      ::-webkit-scrollbar-thumb{background:rgba(0,0,0,.18)!important}\n      select,textarea,input{color-scheme:light}\n    ");
  } else {
    el.textContent = "\n      body{background:".concat(COLORS_DARK.bg, "!important;color:").concat(COLORS_DARK.text, "!important}\n      ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.12)!important}\n      select,textarea,input{color-scheme:dark}\n    ");
  }
}

// ─── 행 정의 ─────────────────────────────────────
var ROWS = [{
  key: "CE",
  lv: 0,
  inp: true,
  bold: true
}, {
  key: "대외영업",
  lv: 0,
  inp: false,
  bold: true
}, {
  key: "혼수",
  lv: 1,
  inp: true,
  bold: false
}, {
  key: "뉴홈",
  lv: 1,
  inp: false,
  bold: false
}, {
  key: "입주",
  lv: 2,
  inp: true,
  bold: false
}, {
  key: "이사",
  lv: 2,
  inp: true,
  bold: false
}, {
  key: "SAC",
  lv: 1,
  inp: true,
  bold: false
}, {
  key: "거주중",
  lv: 2,
  inp: true,
  bold: false
}, {
  key: "B2B",
  lv: 1,
  inp: false,
  bold: false
}, {
  key: "SMB",
  lv: 2,
  inp: true,
  bold: false
}, {
  key: "농협",
  lv: 2,
  inp: true,
  bold: false
}, {
  key: "휴대폰",
  lv: 1,
  inp: true,
  bold: false
}];

// ─── 유틸 UI ─────────────────────────────────────
var pctC = function pctC(v) {
  var n = gNum(v);
  return n >= 100 ? C.green : n >= 80 ? C.orange : C.red;
};
var grwC = function grwC(v) {
  var n = gNum(v);
  return n > 0 ? C.green : n < 0 ? C.red : C.muted2;
};
var grwT = function grwT(v) {
  var n = gNum(v);
  return n > 0 ? "\u25B2".concat(v, "%") : n < 0 ? "\u25BC".concat(Math.abs(n), "%") : "─0%";
};
var Chip = function Chip(_ref) {
  var _ref$c = _ref.c,
    c = _ref$c === void 0 ? C.accent : _ref$c,
    children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: c + "22",
      color: c,
      border: "1px solid ".concat(c, "44"),
      borderRadius: 5,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, children);
};

// ─── 반응형 훅 ────────────────────────────────────
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

// ─── SVG 라인 차트 ────────────────────────────────
function LineChart(_ref2) {
  var series = _ref2.series,
    labels = _ref2.labels,
    _ref2$h = _ref2.h,
    h = _ref2$h === void 0 ? 120 : _ref2$h,
    _ref2$showDots = _ref2.showDots,
    showDots = _ref2$showDots === void 0 ? true : _ref2$showDots;
  var allVals = series.flatMap(function (s) {
    return s.data.map(gNum);
  });
  var maxV = Math.max.apply(Math, _toConsumableArray(allVals).concat([1]));
  var W = 560,
    H = h,
    PL = 6,
    PR = 6,
    PT = 8,
    PB = 0;
  var cx = function cx(i) {
    return PL + i / (labels.length - 1 || 1) * (W - PL - PR);
  };
  var cy = function cy(v) {
    return PT + (1 - gNum(v) / maxV) * (H - PT - PB);
  };
  var smooth = function smooth(pts) {
    if (pts.length < 2) return "";
    return pts.reduce(function (p, pt, i) {
      if (i === 0) return "M".concat(pt.x, ",").concat(pt.y);
      var prev = pts[i - 1];
      var cpx = (pt.x - prev.x) * 0.4;
      return "".concat(p, " C").concat(prev.x + cpx, ",").concat(prev.y, " ").concat(pt.x - cpx, ",").concat(pt.y, " ").concat(pt.x, ",").concat(pt.y);
    }, "");
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: "100%",
      height: H
    },
    preserveAspectRatio: "none"
  }, series.map(function (s, si) {
    var pts = s.data.map(function (v, i) {
      return {
        x: cx(i),
        y: cy(v)
      };
    });
    var valid = pts.filter(function (_, i) {
      return gNum(s.data[i]) > 0;
    });
    if (valid.length === 0) return null;
    var d = smooth(pts.filter(function (_, i) {
      return gNum(s.data[i]) > 0 || i === 0 || i === pts.length - 1;
    }));
    var fillPts = [].concat(_toConsumableArray(pts.map(function (p) {
      return "".concat(p.x, ",").concat(p.y);
    })), ["".concat(cx(labels.length - 1), ",").concat(H), "".concat(cx(0), ",").concat(H)]).join(" ");
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, s.fill && /*#__PURE__*/React.createElement("polygon", {
      points: fillPts,
      fill: s.color,
      opacity: "0.08"
    }), /*#__PURE__*/React.createElement("path", {
      d: smooth(pts),
      fill: "none",
      stroke: s.color,
      strokeWidth: s.bold ? 2.5 : 1.8,
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeDasharray: s.dash ? "5,3" : undefined,
      opacity: s.opacity || 1
    }), showDots && pts.map(function (p, i) {
      return gNum(s.data[i]) > 0 && /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: p.x,
        cy: p.y,
        r: 3,
        fill: s.color
      });
    }));
  }));
}

// ─── 미니 프로그레스 바 ───────────────────────────
function ProgressBar(_ref3) {
  var p = _ref3.pct,
    color = _ref3.color,
    _ref3$h = _ref3.h,
    h = _ref3$h === void 0 ? 4 : _ref3$h;
  var n = Math.min(Math.max(gNum(p), 0), 150);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: C.b1,
      borderRadius: h,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(n, 100), "%"),
      background: color,
      borderRadius: h,
      transition: "width .4s",
      boxShadow: "0 0 6px ".concat(color, "60")
    }
  }), n > 100 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      width: "".concat(n - 100, "%"),
      background: C.orange,
      opacity: .6,
      borderRadius: h
    }
  }));
}

// ═══════════════════════════════════════════════
//  대시보드
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
//  대시보드 v14 — Pinterest/Dribbble 스타일
// ═══════════════════════════════════════════════

/* ── SVG 도넛 차트 ── */
function DonutChart(_ref4) {
  var p = _ref4.pct,
    color = _ref4.color,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 72 : _ref4$size,
    _ref4$stroke = _ref4.stroke,
    stroke = _ref4$stroke === void 0 ? 8 : _ref4$stroke,
    label = _ref4.label,
    sub = _ref4.sub;
  var n = Math.min(Math.max(gNum(p), 0), 150);
  var r = (size - stroke * 2) / 2;
  var circ = 2 * Math.PI * r;
  var fill = Math.min(n, 100) / 100 * circ;
  var cx = size / 2,
    cy = size / 2;
  var textColor = n >= 100 ? C.green : n >= 80 ? C.orange : C.red;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: C.b1,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: n === 0 ? C.b2 : color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: "".concat(fill, " ").concat(circ),
    style: {
      transition: "stroke-dasharray .6s ease",
      filter: "drop-shadow(0 0 4px ".concat(color, "80)")
    }
  }), n > 100 && /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: C.orange,
    strokeWidth: stroke,
    strokeLinecap: "round",
    opacity: .5,
    strokeDasharray: "".concat((n - 100) / 100 * circ, " ").concat(circ),
    strokeDashoffset: -fill
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: n === 0 ? C.muted : textColor,
      fontSize: size < 56 ? 10 : size < 72 ? 12 : 14,
      fontWeight: 900,
      letterSpacing: "-0.03em"
    }
  }, n === 0 ? "─" : n.toFixed(0) + "%"))), label && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted2,
      fontSize: 10,
      fontWeight: 700,
      textAlign: "center",
      lineHeight: 1.2
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 9,
      textAlign: "center"
    }
  }, sub));
}

/* ── 부드러운 SVG 라인 차트 (그리드+라벨 포함) ── */
function RichLineChart(_ref5) {
  var series = _ref5.series,
    labels = _ref5.labels,
    _ref5$h = _ref5.h,
    h = _ref5$h === void 0 ? 160 : _ref5$h,
    _ref5$showAvg = _ref5.showAvg,
    showAvg = _ref5$showAvg === void 0 ? false : _ref5$showAvg,
    _ref5$pctMode = _ref5.pctMode,
    pctMode = _ref5$pctMode === void 0 ? false : _ref5$pctMode,
    _ref5$grMode = _ref5.grMode,
    grMode = _ref5$grMode === void 0 ? false : _ref5$grMode,
    _ref5$zeroOffset = _ref5.zeroOffset,
    zeroOffset = _ref5$zeroOffset === void 0 ? 0 : _ref5$zeroOffset;
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    tooltip = _useState4[0],
    setTooltip = _useState4[1];
  var svgRef = React.useRef(null); // ← Hook은 조기 return 전에 선언

  var W = 600,
    H = h,
    PL = 36,
    PR = 10,
    PT = 12,
    PB = 20;
  var iW = W - PL - PR,
    iH = H - PT - PB;
  var allV = series.flatMap(function (s) {
    return s.data.map(gNum);
  }).filter(function (v) {
    return v > 0;
  });
  if (allV.length === 0) return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, "\uB370\uC774\uD130 \uC5C6\uC74C"));
  var maxV = Math.max.apply(Math, _toConsumableArray(allV)) * 1.12;
  var cx = function cx(i) {
    return PL + i / (labels.length - 1 || 1) * iW;
  };
  var cy = function cy(v) {
    return PT + (1 - gNum(v) / maxV) * iH;
  };
  var smooth = function smooth(pts) {
    return pts.reduce(function (p, pt, i) {
      if (i === 0) return "M".concat(pt.x, ",").concat(pt.y);
      var prev = pts[i - 1];
      var cpx = (pt.x - prev.x) * 0.4;
      return "".concat(p, " C").concat(prev.x + cpx, ",").concat(prev.y, " ").concat(pt.x - cpx, ",").concat(pt.y, " ").concat(pt.x, ",").concat(pt.y);
    }, "");
  };
  var ticks = 4;

  // 각 시리즈 렌더용
  var seriesData = series.map(function (s) {
    return _objectSpread(_objectSpread({}, s), {}, {
      pts: s.data.map(function (v, i) {
        return {
          x: cx(i),
          y: cy(v),
          v: gNum(v),
          hasData: v !== null
        };
      })
    });
  });

  // 마우스 위치로 가장 가까운 X 인덱스
  var handleMouseMove = function handleMouseMove(e) {
    if (!svgRef.current) return;
    var rect = svgRef.current.getBoundingClientRect();
    var svgX = (e.clientX - rect.left) / rect.width * W;
    // 가장 가까운 라벨 인덱스
    var best = 0,
      bestD = Infinity;
    labels.forEach(function (_, i) {
      var d = Math.abs(cx(i) - svgX);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    var items = series.map(function (s) {
      return {
        label: s.tooltipLabel || s.label || "",
        v: gNum(s.data[best]),
        rawV: s.grOffset !== undefined ? gNum(s.data[best]) - s.grOffset : gNum(s.data[best]),
        color: s.color,
        unit: s.tooltipUnit || "억"
      };
    }).filter(function (it) {
      return it.v > 0;
    });
    if (items.length === 0) {
      setTooltip(null);
      return;
    }
    // tooltip position in % of container
    var tx = (e.clientX - rect.left) / rect.width * 100;
    var ty = (e.clientY - rect.top) / rect.height * 100;
    setTooltip({
      mi: best,
      tx: tx,
      ty: ty,
      items: items
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onMouseLeave: function onMouseLeave() {
      return setTooltip(null);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    ref: svgRef,
    viewBox: "0 0 ".concat(W, " ").concat(H),
    style: {
      width: "100%",
      height: h,
      cursor: "crosshair"
    },
    preserveAspectRatio: "xMinYMid meet",
    onMouseMove: handleMouseMove
  }, Array.from({
    length: ticks + 1
  }, function (_, i) {
    var v = maxV * (ticks - i) / ticks;
    var y = cy(v);
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: PL,
      y1: y,
      x2: W - PR,
      y2: y,
      stroke: C.b2,
      strokeWidth: .8,
      opacity: .6
    }), /*#__PURE__*/React.createElement("text", {
      x: PL - 3,
      y: y + 3,
      fill: C.muted,
      fontSize: 8,
      textAnchor: "end"
    }, Math.round(v) > 0 ? Math.round(v) : ""));
  }), labels.map(function (l, i) {
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: cx(i),
      y: H,
      fill: C.muted2,
      fontSize: 8,
      textAnchor: "middle"
    }, l.replace("월", ""));
  }), tooltip && /*#__PURE__*/React.createElement("line", {
    x1: cx(tooltip.mi),
    y1: PT,
    x2: cx(tooltip.mi),
    y2: PT + iH,
    stroke: C.b2,
    strokeWidth: 1,
    strokeDasharray: "3,2",
    opacity: .7
  }), seriesData.map(function (s, si) {
    var activePts = s.pts.filter(function (p) {
      return p.hasData || p.v > 0;
    });
    if (activePts.length === 0) return null;
    var d = smooth(activePts);
    var avg = activePts.reduce(function (a, p) {
      return a + p.v;
    }, 0) / activePts.length;
    var avgY = cy(avg);
    var fillPath = "".concat(d, " L").concat(activePts[activePts.length - 1].x, ",").concat(PT + iH, " L").concat(activePts[0].x, ",").concat(PT + iH, " Z");
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, s.fill && /*#__PURE__*/React.createElement("path", {
      d: fillPath,
      fill: s.color,
      opacity: .1
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: s.color,
      strokeWidth: s.bold ? 3 : s.medium ? 2 : 1.5,
      strokeLinejoin: "round",
      strokeLinecap: "round",
      strokeDasharray: s.dash ? "6,3" : undefined,
      opacity: s.op || 1
    }), activePts.map(function (p, i) {
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: p.x,
        cy: p.y,
        r: tooltip && tooltip.mi === activePts.indexOf(p) ? 4.5 : s.bold ? 3.5 : 2.5,
        fill: s.color,
        stroke: C.bg,
        strokeWidth: 1.5,
        opacity: s.op || 1
      });
    }), s.showLabels && activePts.map(function (p, i) {
      var prevP = activePts[i - 1];
      var goUp = !prevP || p.y < prevP.y;
      var labelY = p.y + (goUp ? -10 : 13);
      var anchor = p.x < PL + 30 ? "start" : p.x > W - PR - 30 ? "end" : "middle";
      var realV = s.grOffset !== undefined ? p.v - s.grOffset : p.v;
      var dispV = s.tooltipUnit === "%" ? Math.round(realV) + "%" : Math.round(realV).toLocaleString();
      return /*#__PURE__*/React.createElement("text", {
        key: i,
        x: p.x,
        y: labelY,
        fill: s.color,
        fontSize: 9,
        fontWeight: 700,
        textAnchor: anchor
      }, dispV);
    }), showAvg && s.bold && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: activePts[0].x,
      y1: avgY,
      x2: activePts[activePts.length - 1].x,
      y2: avgY,
      stroke: s.color,
      strokeWidth: 1,
      strokeDasharray: "3,3",
      opacity: .4
    }), /*#__PURE__*/React.createElement("text", {
      x: activePts[activePts.length - 1].x + 4,
      y: avgY + 3,
      fill: s.color,
      fontSize: 8,
      opacity: .6
    }, "avg ", Math.round(avg))));
  })), tooltip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "".concat(Math.min(tooltip.tx + 2, 75), "%"),
      top: "".concat(Math.max(tooltip.ty - 10, 0), "%"),
      background: C.tooltip,
      border: "1px solid ".concat(C.b1),
      borderRadius: 8,
      padding: "8px 12px",
      pointerEvents: "none",
      zIndex: 10,
      minWidth: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 9,
      marginBottom: 4,
      fontWeight: 700
    }
  }, labels[tooltip.mi]), tooltip.items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "center",
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 6,
        height: 2,
        borderRadius: 1,
        background: it.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 10
      }
    }, it.label)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: it.color,
        fontSize: 11,
        fontWeight: 800
      }
    }, it.unit === "%" ? Math.round(it.rawV) + "%" : Math.round(it.rawV).toLocaleString() + "억"));
  })));
}

/* ── CE 비중 가로 스택바 ── */
function CeShareBar(_ref6) {
  var data = _ref6.data,
    emi = _ref6.emi;
  var pD = data;
  var PARTS = [{
    k: "혼수",
    c: "#f5b942"
  }, {
    k: "뉴홈",
    c: "#2dd488"
  }, {
    k: "SAC",
    c: "#d97af5"
  }, {
    k: "거주중",
    c: "#b87af5"
  }, {
    k: "B2B",
    c: "#f58f42"
  }, {
    k: "휴대폰",
    c: "#90a8c0"
  }];
  var getSum = function getSum(k) {
    return Array.from({
      length: emi + 1
    }, function (_, i) {
      return gNum(fullRow(pD[sk(i)])[k]);
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
  };
  var ce = getSum("CE");
  if (!ce) return /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11,
      padding: "20px 0",
      textAlign: "center"
    }
  }, "CE \uB370\uC774\uD130 \uC5C6\uC74C");
  var vals = PARTS.map(function (p) {
    return _objectSpread(_objectSpread({}, p), {}, {
      v: getSum(p.k),
      s: getSum(p.k) / ce * 100
    });
  });
  var total = vals.reduce(function (a, p) {
    return a + p.s;
  }, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderRadius: 6,
      overflow: "hidden",
      height: 20,
      marginBottom: 10,
      gap: 1
    }
  }, vals.map(function (p) {
    return p.v > 0 && /*#__PURE__*/React.createElement("div", {
      key: p.k,
      title: "".concat(p.k, ": ").concat(p.s.toFixed(1), "%"),
      style: {
        flex: p.s,
        background: p.c,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: p.s > 6 ? undefined : 0,
        transition: "flex .4s",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.1)"
      }
    }, p.s > 6 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(0,0,0,.7)",
        fontSize: 9,
        fontWeight: 700
      }
    }, p.s.toFixed(0), "%"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "6px 12px"
    }
  }, vals.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.k,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: p.c,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 11
      }
    }, p.k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: p.c,
        fontWeight: 700,
        fontSize: 11
      }
    }, p.s.toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 10
      }
    }, Math.round(p.v).toLocaleString(), "\uC5B5")));
  })));
}

// ═══════════════════════════════════════════════
//  ErrorBoundary — 렌더 에러 포착 + 자동 재시도
// ═══════════════════════════════════════════════
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    // resetKey가 바뀌면 children을 완전히 unmount → remount (hook 상태 초기화)
    _this.state = {
      error: null,
      resetKey: 0,
      autoRetried: false
    };
    _this._timer = null;
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(e, info) {
      var _this2 = this;
      console.error("🔴 렌더에러:", e, info);
      // 초기 진입 에러(#310 등)는 1회 자동 재시도
      // resetKey 증가 → children 완전 새 인스턴스로 remount
      if (!this.state.autoRetried) {
        this._timer = setTimeout(function () {
          _this2.setState(function (s) {
            return {
              error: null,
              resetKey: s.resetKey + 1,
              autoRetried: true
            };
          });
        }, 300);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (this.state.error) {
        // 자동 재시도 1회 실패 시 → 수동 버튼 표시
        return /*#__PURE__*/React.createElement("div", {
          style: {
            padding: 24,
            background: C.card,
            border: "1px solid ".concat(C.red, "60"),
            borderRadius: 12,
            color: C.red,
            margin: 16
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 800,
            fontSize: 14,
            marginBottom: 8
          }
        }, "\u26A0 \uD654\uBA74 \uB80C\uB354 \uC624\uB958"), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 11,
            color: C.muted2,
            marginBottom: 12
          }
        }, "\uD654\uBA74\uC744 \uBD88\uB7EC\uC624\uB294 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 10,
            fontFamily: "monospace",
            color: C.orange,
            background: "rgba(0,0,0,.3)",
            padding: "8px 12px",
            borderRadius: 6,
            wordBreak: "break-all"
          }
        }, String(this.state.error)), /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return _this3.setState(function (s) {
              return {
                error: null,
                resetKey: s.resetKey + 1,
                autoRetried: false
              };
            });
          },
          style: {
            marginTop: 14,
            padding: "7px 18px",
            borderRadius: 7,
            border: "none",
            background: "#f07070",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 12,
            fontFamily: "inherit"
          }
        }, "\uD83D\uDD04 \uB2E4\uC2DC \uC2DC\uB3C4"));
      }
      // resetKey가 key로 전달 → 변경 시 children 완전 remount
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: this.state.resetKey
      }, this.props.children);
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
  }]);
}(React.Component);
function Dashboard(_ref7) {
  var data = _ref7.data,
    mode = _ref7.mode,
    theme = _ref7.theme;
  var _useState5 = useState("대외영업"),
    _useState6 = _slicedToArray(_useState5, 2),
    selKey = _useState6[0],
    setSelKey = _useState6[1];
  var isMobile = useIsMobile();
  var mColor = C[mode] || C.accent;

  // 방어적 데이터 접근
  var p26 = useMemo(function () {
    try {
      var _data$;
      return (data === null || data === void 0 || (_data$ = data["26"]) === null || _data$ === void 0 || (_data$ = _data$[mode]) === null || _data$ === void 0 ? void 0 : _data$.perf) || emptyM();
    } catch (_unused3) {
      return emptyM();
    }
  }, [data, mode]);
  var t26 = useMemo(function () {
    try {
      var _data$2;
      return (data === null || data === void 0 || (_data$2 = data["26"]) === null || _data$2 === void 0 || (_data$2 = _data$2[mode]) === null || _data$2 === void 0 ? void 0 : _data$2.target) || emptyM();
    } catch (_unused4) {
      return emptyM();
    }
  }, [data, mode]);
  var p25 = useMemo(function () {
    try {
      var _data$3;
      return (data === null || data === void 0 || (_data$3 = data["25"]) === null || _data$3 === void 0 || (_data$3 = _data$3[mode]) === null || _data$3 === void 0 ? void 0 : _data$3.perf) || emptyM();
    } catch (_unused5) {
      return emptyM();
    }
  }, [data, mode]);
  var p24 = useMemo(function () {
    try {
      var _data$4;
      return (data === null || data === void 0 || (_data$4 = data["24"]) === null || _data$4 === void 0 || (_data$4 = _data$4[mode]) === null || _data$4 === void 0 ? void 0 : _data$4.perf) || emptyM();
    } catch (_unused6) {
      return emptyM();
    }
  }, [data, mode]);
  var lm26 = lastMiOf(p26);
  var emi = lm26 >= 0 ? lm26 : new Date().getMonth();

  // 누계 합산 (emi 기준)
  var ytd = function ytd(d, k) {
    try {
      return sumR(d, k, 0, emi);
    } catch (_unused7) {
      return 0;
    }
  };

  // 월별 데이터 배열
  var mArr = function mArr(d, k) {
    try {
      return MONTHS.map(function (_, i) {
        var _fullRow;
        return gNum((_fullRow = fullRow(d === null || d === void 0 ? void 0 : d[sk(i)])) === null || _fullRow === void 0 ? void 0 : _fullRow[k]);
      });
    } catch (_unused8) {
      return MONTHS.map(function () {
        return 0;
      });
    }
  };
  // 누계 배열
  var cumArr = function cumArr(d, k) {
    try {
      var acc = 0;
      return MONTHS.map(function (_, i) {
        var _fullRow2;
        var v = gNum((_fullRow2 = fullRow(d === null || d === void 0 ? void 0 : d[sk(i)])) === null || _fullRow2 === void 0 ? void 0 : _fullRow2[k]);
        if (v > 0 || i <= emi) {
          acc += v;
          return acc;
        }
        return null;
      });
    } catch (_unused9) {
      return MONTHS.map(function () {
        return null;
      });
    }
  };

  // 주요 항목 달성률
  var DONUT_KEYS = ["대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];

  // 월별 + 월평균
  var sel_monthly = useMemo(function () {
    try {
      return mArr(p26, selKey).map(function (v, i) {
        return i <= emi ? v : null;
      });
    } catch (_unused0) {
      return MONTHS.map(function () {
        return null;
      });
    }
  }, [p26, selKey, emi]);
  var sel_cum26 = useMemo(function () {
    try {
      return cumArr(p26, selKey);
    } catch (_unused1) {
      return MONTHS.map(function () {
        return null;
      });
    }
  }, [p26, selKey, emi]);
  var sel_cum25 = useMemo(function () {
    try {
      return cumArr(p25, selKey);
    } catch (_unused10) {
      return MONTHS.map(function () {
        return null;
      });
    }
  }, [p25, selKey, emi]);
  var sel_cum24 = useMemo(function () {
    try {
      return cumArr(p24, selKey);
    } catch (_unused11) {
      return MONTHS.map(function () {
        return null;
      });
    }
  }, [p24, selKey, emi]);
  var validMonths = sel_monthly.filter(function (v) {
    return v !== null && v > 0;
  });
  var monthAvg = validMonths.length > 0 ? validMonths.reduce(function (a, b) {
    return a + b;
  }, 0) / validMonths.length : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(mColor, "33"),
      borderRadius: 16,
      padding: "20px 24px",
      boxShadow: "0 8px 32px rgba(0,0,0,.12), inset 0 1px 0 ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: mColor,
      boxShadow: "0 0 8px ".concat(mColor)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, mode, " \uC2E4\uC801 \uB300\uC2DC\uBCF4\uB4DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: "-0.04em"
    }
  }, "26\uB144 ", MONTHS[emi], " \uB204\uACC4 \uD604\uD669"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginTop: 4
    }
  }, "\uC785\uB825 \uAE30\uC900\uC6D4 : ", MONTHS[emi], " \xB7 \uD310\uB9E4/\uB9E4\uCD9C \uC804\uD658 \uAC00\uB2A5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
      alignItems: "stretch"
    }
  }, [{
    k: "CE",
    label: "CE",
    color: KC.CE,
    showCeShare: false
  }, {
    k: "대외영업",
    label: "대외영업",
    color: KC.대외영업,
    showCeShare: true
  }].map(function (_ref8) {
    var k = _ref8.k,
      label = _ref8.label,
      color = _ref8.color,
      showCeShare = _ref8.showCeShare;
    var v26 = ytd(p26, k),
      v25 = ytd(p25, k),
      vt = ytd(t26, k);
    var gr = grw(v26, v25),
      ar = pct(v26, vt);
    var ceV = ytd(p26, "CE");
    var ceShare = showCeShare && ceV > 0 ? (v26 / ceV * 100).toFixed(1) : null;
    var mCount = emi + 1;
    var avg = mCount > 0 && v26 > 0 ? (v26 / mCount).toFixed(1) : null;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        background: C.card2,
        border: "1px solid ".concat(color, "40"),
        borderRadius: 14,
        padding: "14px 18px",
        minWidth: isMobile ? "calc(50% - 6px)" : 220,
        flex: 1,
        borderTop: "3px solid ".concat(color),
        boxShadow: "0 4px 20px rgba(0,0,0,.1)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
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
        background: color,
        boxShadow: "0 0 6px ".concat(color)
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontWeight: 800,
        fontSize: 12,
        letterSpacing: "0.04em"
      }
    }, label, " \uB204\uACC4")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontSize: 10,
        fontWeight: 700,
        background: ceShare ? color + "18" : "transparent",
        borderRadius: 4,
        padding: "2px 6px",
        visibility: ceShare ? "visible" : "hidden"
      }
    }, "CE\uC758 ", ceShare || "0", "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 4,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      title: fmtD(v26),
      style: {
        color: C.text,
        fontSize: 26,
        fontWeight: 900,
        letterSpacing: "-0.04em",
        cursor: "default",
        lineHeight: 1
      }
    }, v26 > 0 ? Math.round(v26).toLocaleString() : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 18
      }
    }, "\u2500")), v26 > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 12
      }
    }, "\uC5B5")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
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
    }, vt > 0 ? "\uBAA9\uD45C ".concat(Math.round(vt).toLocaleString(), "\uC5B5") : "목표 ─"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: ar ? pctC(ar) : C.muted,
        fontSize: 10,
        fontWeight: 800
      }
    }, "\uB2EC\uC131 ", ar ? Math.round(gNum(ar)) : "─", "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: C.b1,
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(Math.min(gNum(ar) || 0, 100), "%"),
        background: "linear-gradient(90deg,".concat(color, ",").concat(color, "aa)"),
        borderRadius: 3,
        boxShadow: "0 0 8px ".concat(color, "60"),
        transition: "width .6s"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 6,
        marginTop: "auto"
      }
    }, [{
      lbl: "전년실적",
      val: v25 > 0 ? Math.round(v25).toLocaleString() + "억" : "─",
      c: C.muted2
    }, {
      lbl: "전년비",
      val: gr ? grwT(gr) : "─",
      c: gr ? grwC(gr) : C.muted
    }, {
      lbl: "월평균",
      val: avg ? parseFloat(avg).toLocaleString() + "억" : "─",
      c: C.orange
    }].map(function (_ref9) {
      var lbl = _ref9.lbl,
        val = _ref9.val,
        c = _ref9.c;
      return /*#__PURE__*/React.createElement("div", {
        key: lbl,
        style: {
          background: theme === "light" ? "rgba(0,0,0,.05)" : "rgba(0,0,0,.2)",
          borderRadius: 6,
          padding: "5px 6px",
          textAlign: "center"
        }
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
    })));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "320px 1fr",
      gap: 14,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 14,
      padding: 18,
      boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "0 4px 20px rgba(0,0,0,.2)",
      display: "flex",
      flexDirection: "column",
      alignSelf: "stretch",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 13,
      marginBottom: 2
    }
  }, "\uBAA9\uD45C \uB2EC\uC131\uB960"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 10,
      marginBottom: 12
    }
  }, MONTHS[emi], " \uB204\uACC4 \uAE30\uC900 \xB7 \uD56D\uBAA9 \uD074\uB9AD \uC2DC \uCC28\uD2B8 \uC804\uD658"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 8
    }
  }, DONUT_KEYS.map(function (k) {
    var pv = ytd(p26, k),
      tv = ytd(t26, k),
      ar = pct(pv, tv);
    var color = KC[k] || C.accent;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      onClick: function onClick() {
        return setSelKey(k);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        cursor: "pointer",
        padding: "8px 4px",
        borderRadius: 8,
        background: selKey === k ? color + "18" : C.bg,
        border: "1px solid ".concat(selKey === k ? color + "70" : C.b1),
        transition: "all .18s",
        boxShadow: selKey === k ? "0 0 10px ".concat(color, "25") : "none"
      }
    }, /*#__PURE__*/React.createElement(DonutChart, {
      pct: ar,
      color: color,
      size: 56,
      stroke: 6
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: selKey === k ? color : C.muted2,
        fontSize: 10,
        fontWeight: 700,
        textAlign: "center",
        marginTop: 1
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted2,
        fontSize: 9,
        textAlign: "center",
        lineHeight: 1.3,
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: selKey === k ? color : C.text,
        fontWeight: 600
      }
    }, pv > 0 ? Math.round(pv).toLocaleString() : "─"), tv > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted
      }
    }, "/", Math.round(tv).toLocaleString(), "\uC5B5")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, function () {
    try {
      // 파트 목록 (대외영업·뉴홈·B2B 포함, CE 제외)
      var BAR_KEYS = ["대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
      var remainMonths = 11 - emi;

      // 각 파트 데이터 계산
      var parts = BAR_KEYS.map(function (k) {
        var perf = ytd(p26, k); // 누계 실적
        var annualTgt = function () {
          var s = 0;
          for (var i = 0; i < 12; i++) {
            var _fullRow3;
            s += gNum((_fullRow3 = fullRow(t26 === null || t26 === void 0 ? void 0 : t26[sk(i)])) === null || _fullRow3 === void 0 ? void 0 : _fullRow3[k]);
          }
          return s;
        }();
        var rem = Math.max(annualTgt - perf, 0);
        var arPct = annualTgt > 0 ? perf / annualTgt * 100 : 0;
        var needPM = remainMonths > 0 && rem > 0 ? Math.ceil(rem / remainMonths) : 0;
        return {
          k: k,
          perf: perf,
          annualTgt: annualTgt,
          rem: rem,
          arPct: arPct,
          needPM: needPM
        };
      }).filter(function (d) {
        return d.annualTgt > 0;
      });
      if (parts.length === 0) return null;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 14,
          padding: "12px 10px",
          background: theme === 'light' ? "rgba(0,0,0,.04)" : C.bg,
          borderRadius: 10,
          border: "1px solid ".concat(C.b1),
          flex: 1,
          overflowY: "auto"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 6,
          height: 6,
          borderRadius: 2,
          background: "linear-gradient(135deg,#818cf8,#38bdf8)"
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted2,
          fontSize: 10,
          fontWeight: 700
        }
      }, "\uD30C\uD2B8\uBCC4 \uC5F0\uAC04 \uBAA9\uD45C \uC9C4\uCC99 \uD604\uD669"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 9,
          background: C.b1,
          padding: "1px 5px",
          borderRadius: 3
        }
      }, MONTHS[emi], " \uB9C8\uAC10\uAE30\uC900")), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 9
        }
      }, "\uC794\uC5EC ", remainMonths, "\uAC1C\uC6D4")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 7
        }
      }, parts.map(function (_ref0) {
        var k = _ref0.k,
          perf = _ref0.perf,
          annualTgt = _ref0.annualTgt,
          rem = _ref0.rem,
          arPct = _ref0.arPct,
          needPM = _ref0.needPM;
        var color = KC[k] || C.accent;
        var fillW = Math.min(arPct, 100);
        var isAchieved = arPct >= 100;
        return /*#__PURE__*/React.createElement("div", {
          key: k
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 3
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 5,
            minWidth: 44
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 5,
            height: 5,
            borderRadius: 1,
            background: color,
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            color: color,
            fontSize: 10,
            fontWeight: 800
          }
        }, k)), /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 11,
            fontWeight: 700
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: color
          }
        }, Math.round(perf).toLocaleString()), /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.muted2,
            fontSize: 10,
            fontWeight: 600
          }
        }, "/", Math.round(annualTgt).toLocaleString(), "\uC5B5")), /*#__PURE__*/React.createElement("span", {
          style: {
            color: isAchieved ? C.green : arPct >= 80 ? C.orange : C.red,
            fontSize: 10,
            fontWeight: 900,
            minWidth: 38,
            textAlign: "right"
          }
        }, arPct.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 8,
            background: C.b1,
            borderRadius: 4,
            overflow: "visible",
            position: "relative"
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            height: "100%",
            width: "".concat(fillW, "%"),
            background: "linear-gradient(90deg,".concat(color, "cc,").concat(color, ")"),
            borderRadius: 4,
            boxShadow: "0 0 6px ".concat(color, "50"),
            transition: "width .6s ease",
            position: "relative"
          }
        }, arPct > 100 && /*#__PURE__*/React.createElement("div", {
          style: {
            position: "absolute",
            right: -2,
            top: -1,
            height: 10,
            width: Math.min((arPct - 100) / 100 * fillW, 20),
            background: C.green,
            borderRadius: 2,
            opacity: .7
          }
        }))), !isAchieved && rem > 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 6,
            marginTop: 2
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.muted,
            fontSize: 8
          }
        }, "\uC794\uC5EC ", /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.orange,
            fontWeight: 700
          }
        }, Math.round(rem).toLocaleString(), "\uC5B5")), needPM > 0 && remainMonths > 0 && /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.muted,
            fontSize: 8
          }
        }, "\uC6D4\uD3C9\uADE0 ", /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.blue,
            fontWeight: 700
          }
        }, Math.round(needPM).toLocaleString(), "\uC5B5"), " \uD544\uC694")), isAchieved && /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: "right",
            marginTop: 2
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: C.green,
            fontSize: 8,
            fontWeight: 700
          }
        }, "\uD83C\uDFAF \uB2EC\uC131")));
      })));
    } catch (e) {
      return null;
    }
  }())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(KC[selKey] || C.accent, "55"),
      borderRadius: 14,
      padding: 18,
      boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "0 4px 20px rgba(0,0,0,.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 12,
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: KC[selKey] || C.accent,
      boxShadow: "0 0 8px ".concat(KC[selKey] || C.accent)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: KC[selKey] || C.accent,
      fontWeight: 900,
      fontSize: 16
    }
  }, selKey), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 11
    }
  }, "\uC6D4\uBCC4 \uC2E4\uC801 \uCD94\uC774")), function () {
    var ytd26 = ytd(p26, selKey);
    var ytd25 = ytd(p25, selKey);
    var avg26 = validMonths.length > 0 ? Math.round(monthAvg) : null;
    var p25Arr = mArr(p25, selKey).filter(function (v, i) {
      return i <= emi && v > 0;
    });
    var avg25 = p25Arr.length > 0 ? Math.round(p25Arr.reduce(function (a, b) {
      return a + b;
    }, 0) / p25Arr.length) : null;
    // 26년 연간 목표 합계
    var annTgt26 = function () {
      var s = 0;
      for (var i = 0; i < 12; i++) {
        var _fullRow4;
        s += gNum((_fullRow4 = fullRow(t26 === null || t26 === void 0 ? void 0 : t26[sk(i)])) === null || _fullRow4 === void 0 ? void 0 : _fullRow4[selKey]);
      }
      return s;
    }();
    var cumTgt26 = ytd(t26, selKey);
    var tgtArr = mArr(t26, selKey).filter(function (v, i) {
      return i <= emi && v > 0;
    });
    var avgTgt = tgtArr.length > 0 ? Math.round(tgtArr.reduce(function (a, b) {
      return a + b;
    }, 0) / tgtArr.length) : null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, [{
      l: "26년 실적",
      c: mColor,
      bold: true,
      dash: false,
      ytdVal: ytd26,
      avgVal: avg26
    }, {
      l: "26년 목표",
      c: C.orange,
      bold: false,
      dash: true,
      ytdVal: cumTgt26 > 0 ? cumTgt26 : null,
      avgVal: avgTgt,
      ytdLabel: "누계목표"
    }, {
      l: "25년 실적",
      c: "#a78bfa",
      bold: false,
      dash: false,
      ytdVal: ytd25,
      avgVal: avg25
    }].map(function (_ref1) {
      var l = _ref1.l,
        c = _ref1.c,
        bold = _ref1.bold,
        dash = _ref1.dash,
        ytdVal = _ref1.ytdVal,
        avgVal = _ref1.avgVal,
        ytdLabel = _ref1.ytdLabel;
      return /*#__PURE__*/React.createElement("div", {
        key: l,
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "5px 8px",
          borderRadius: 7,
          background: C.card2,
          border: "1px solid ".concat(c, "22")
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: 16,
        height: 3
      }, /*#__PURE__*/React.createElement("line", {
        x1: 0,
        y1: 1.5,
        x2: 16,
        y2: 1.5,
        stroke: c,
        strokeWidth: bold ? 2.5 : 1.5,
        strokeDasharray: dash ? "5,3" : undefined
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          color: c,
          fontSize: 10,
          fontWeight: bold ? 800 : 600
        }
      }, l)), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted2,
          fontSize: 9
        }
      }, ytdLabel || "누계", ": ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: c,
          fontWeight: 700
        }
      }, ytdVal > 0 ? Math.round(ytdVal).toLocaleString() + "억" : "─")), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 9
        }
      }, "\uC6D4\uD3C9\uADE0: ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: c,
          fontWeight: 600
        }
      }, avgVal ? avgVal + "억" : "─")));
    }));
  }()), /*#__PURE__*/React.createElement(RichLineChart, {
    h: 140,
    series: [{
      data: mArr(p25, selKey).map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: "#a78bfa",
      op: .7,
      tooltipLabel: "25년"
    }, {
      data: mArr(p26, selKey).map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: mColor,
      bold: true,
      fill: true,
      showLabels: true,
      tooltipLabel: "26년"
    }, {
      data: mArr(t26, selKey).map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: C.orange,
      dash: true,
      op: .7,
      tooltipLabel: "목표"
    }],
    labels: MONTHS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 14,
      padding: 18,
      boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 12,
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 13
    }
  }, selKey, " \uB204\uACC4 \uCD94\uC774"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 10,
      marginTop: 2
    }
  }, "3\uAC1C\uB144 \uB204\uC801 \uBE44\uAD50")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, [{
    l: "26\uB144 \uB204\uACC4",
    v: ytd(p26, selKey),
    c: mColor,
    b: true
  }, {
    l: "25\uB144 \uB204\uACC4",
    v: ytd(p25, selKey),
    c: "#a78bfa",
    b: false
  }, {
    l: "24\uB144 \uB204\uACC4",
    v: ytd(p24, selKey),
    c: "#fbbf24",
    b: false
  }].map(function (_ref10) {
    var l = _ref10.l,
      v = _ref10.v,
      c = _ref10.c,
      b = _ref10.b;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 3,
        borderRadius: 2,
        background: c
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontWeight: b ? 800 : 600,
        fontSize: 12
      }
    }, v > 0 ? Math.round(v).toLocaleString() + "억" : "─")));
  }))), /*#__PURE__*/React.createElement(RichLineChart, {
    h: 130,
    series: [{
      data: sel_cum24.map(function (v, i) {
        return i <= emi ? v || 0 : null;
      }),
      color: "#fbbf24",
      op: .85,
      medium: true,
      tooltipLabel: "24년"
    }, {
      data: sel_cum25.map(function (v, i) {
        return i <= emi ? v || 0 : null;
      }),
      color: "#a78bfa",
      op: .9,
      medium: true,
      tooltipLabel: "25년"
    }, {
      data: sel_cum26.map(function (v, i) {
        return i <= emi ? v || 0 : null;
      }),
      color: mColor,
      bold: true,
      fill: true,
      showLabels: true,
      tooltipLabel: "26년"
    }],
    labels: MONTHS
  })), function () {
    // 당월 달성률
    var monthlyAr = MONTHS.map(function (_, i) {
      var _fullRow5, _fullRow6;
      if (i > emi) return null;
      var pv = gNum((_fullRow5 = fullRow(p26 === null || p26 === void 0 ? void 0 : p26[sk(i)])) === null || _fullRow5 === void 0 ? void 0 : _fullRow5[selKey]);
      var tv = gNum((_fullRow6 = fullRow(t26 === null || t26 === void 0 ? void 0 : t26[sk(i)])) === null || _fullRow6 === void 0 ? void 0 : _fullRow6[selKey]);
      return tv > 0 ? parseFloat((pv / tv * 100).toFixed(1)) : null;
    });
    // 누계 달성률 (1월~i월 누적 실적 / 1월~i월 누적 목표)
    var cumAr = function () {
      var sp = 0,
        st = 0;
      return MONTHS.map(function (_, i) {
        var _fullRow7, _fullRow8;
        if (i > emi) return null;
        sp += gNum((_fullRow7 = fullRow(p26 === null || p26 === void 0 ? void 0 : p26[sk(i)])) === null || _fullRow7 === void 0 ? void 0 : _fullRow7[selKey]);
        st += gNum((_fullRow8 = fullRow(t26 === null || t26 === void 0 ? void 0 : t26[sk(i)])) === null || _fullRow8 === void 0 ? void 0 : _fullRow8[selKey]);
        return st > 0 ? parseFloat((sp / st * 100).toFixed(1)) : null;
      });
    }();
    var ytdAr = pct(ytd(p26, selKey), ytd(t26, selKey));
    var avgMonthlyAr = monthlyAr.filter(function (v) {
      return v !== null;
    });
    var avgV = avgMonthlyAr.length > 0 ? (avgMonthlyAr.reduce(function (a, b) {
      return a + b;
    }, 0) / avgMonthlyAr.length).toFixed(1) : null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.card,
        border: "2px solid ".concat(C.teal, "44"),
        borderRadius: 14,
        padding: 18,
        boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "0 4px 20px rgba(0,0,0,.2)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10,
        flexWrap: "wrap",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: C.teal
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.teal,
        fontWeight: 800,
        fontSize: 13
      }
    }, selKey), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 11
      }
    }, "\uC6D4\uBCC4 \uB2EC\uC131\uB960")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 10,
        marginTop: 2
      }
    }, MONTHS[emi], " \uB204\uACC4\uB2EC\uC131:\xA0", /*#__PURE__*/React.createElement("span", {
      style: {
        color: ytdAr ? pctC(ytdAr) : C.muted,
        fontWeight: 700
      }
    }, ytdAr ? Math.round(gNum(ytdAr)) + "%" : "─"), avgV && /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0\xB7\xA0\uB2F9\uC6D4\uD3C9\uADE0: ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.orange,
        fontWeight: 700
      }
    }, Math.round(gNum(avgV)), "%")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, [["당월달성률", C.teal, true], ["누계달성률", C.orange, false], ["100% 기준", C.green, false, true]].map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 4),
        l = _ref12[0],
        c = _ref12[1],
        b = _ref12[2],
        d = _ref12[3];
      return /*#__PURE__*/React.createElement("span", {
        key: l,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: 14,
        height: 3
      }, /*#__PURE__*/React.createElement("line", {
        x1: 0,
        y1: 1.5,
        x2: 14,
        y2: 1.5,
        stroke: c,
        strokeWidth: b ? 2 : 1.5,
        strokeDasharray: d ? "4,2" : undefined
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 10
        }
      }, l));
    }))), /*#__PURE__*/React.createElement(RichLineChart, {
      h: 110,
      series: [{
        data: MONTHS.map(function (_, i) {
          return i <= emi ? 100 : null;
        }),
        color: C.green,
        dash: true,
        op: .4,
        tooltipLabel: "100% 기준",
        tooltipUnit: "%"
      }, {
        data: cumAr,
        color: C.orange,
        medium: true,
        op: .85,
        showLabels: true,
        tooltipLabel: "누계달성률",
        tooltipUnit: "%"
      }, {
        data: monthlyAr,
        color: C.teal,
        bold: true,
        fill: true,
        showLabels: false,
        tooltipLabel: "당월달성률",
        tooltipUnit: "%"
      }],
      labels: MONTHS,
      pctMode: true
    }));
  }(), function () {
    // 당월 성장률
    var monthlyGr = MONTHS.map(function (_, i) {
      var _fullRow9, _fullRow0;
      if (i > emi) return null;
      var v26m = gNum((_fullRow9 = fullRow(p26 === null || p26 === void 0 ? void 0 : p26[sk(i)])) === null || _fullRow9 === void 0 ? void 0 : _fullRow9[selKey]);
      var v25m = gNum((_fullRow0 = fullRow(p25 === null || p25 === void 0 ? void 0 : p25[sk(i)])) === null || _fullRow0 === void 0 ? void 0 : _fullRow0[selKey]);
      return v25m > 0 ? parseFloat(((v26m - v25m) / v25m * 100).toFixed(1)) : null;
    });
    // 누계 성장률 (1~i월 누적)
    var cumGr = function () {
      var s26 = 0,
        s25 = 0;
      return MONTHS.map(function (_, i) {
        var _fullRow1, _fullRow10;
        if (i > emi) return null;
        s26 += gNum((_fullRow1 = fullRow(p26 === null || p26 === void 0 ? void 0 : p26[sk(i)])) === null || _fullRow1 === void 0 ? void 0 : _fullRow1[selKey]);
        s25 += gNum((_fullRow10 = fullRow(p25 === null || p25 === void 0 ? void 0 : p25[sk(i)])) === null || _fullRow10 === void 0 ? void 0 : _fullRow10[selKey]);
        return s25 > 0 ? parseFloat(((s26 - s25) / s25 * 100).toFixed(1)) : null;
      });
    }();
    var ytdGr = grw(ytd(p26, selKey), ytd(p25, selKey));
    var allVals = [].concat(_toConsumableArray(monthlyGr), _toConsumableArray(cumGr)).filter(function (v) {
      return v !== null;
    });
    var hasData = allVals.length > 0;
    // 0 기준선 위치: 음수 범위/(음수+양수)
    var posMax = Math.max.apply(Math, _toConsumableArray(allVals.filter(function (v) {
      return v > 0;
    })).concat([0.1]));
    var negMax = Math.max.apply(Math, _toConsumableArray(allVals.filter(function (v) {
      return v < 0;
    }).map(function (v) {
      return Math.abs(v);
    })).concat([0]));
    var totalRange = posMax + negMax;
    // 0% 위치 (아래부터 %) = negMax/total
    var zeroPctFromBottom = totalRange > 0 ? negMax / totalRange * 100 : 0;
    // 차트용: 음수 값을 offset 처리해서 RichLineChart에 넣기 위해
    // 모든 값을 +negMax 해서 0 기준 offset
    var offsetVal = function offsetVal(v) {
      return v !== null ? parseFloat((v + negMax).toFixed(1)) : null;
    };
    var zeroLine = totalRange > 0 ? negMax : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.card,
        border: "2px solid ".concat(C.orange, "44"),
        borderRadius: 14,
        padding: 18,
        boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "0 4px 20px rgba(0,0,0,.2)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10,
        flexWrap: "wrap",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: C.orange
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.orange,
        fontWeight: 800,
        fontSize: 13
      }
    }, selKey), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 11
      }
    }, "\uC6D4\uBCC4 \uC804\uB144\uBE44 \uC131\uC7A5\uB960")), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 10,
        marginTop: 2
      }
    }, MONTHS[emi], " \uB204\uACC4 \uC804\uB144\uBE44:\xA0", /*#__PURE__*/React.createElement("span", {
      style: {
        color: ytdGr ? grwC(ytdGr) : C.muted,
        fontWeight: 700
      }
    }, ytdGr ? grwT(ytdGr) : "─"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, [["당월성장률", C.orange, true], ["누계성장률", "#a78bfa", false], ["0%", "rgba(255,255,255,.3)", false, true]].map(function (_ref13) {
      var _ref14 = _slicedToArray(_ref13, 4),
        l = _ref14[0],
        c = _ref14[1],
        b = _ref14[2],
        d = _ref14[3];
      return /*#__PURE__*/React.createElement("span", {
        key: l,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 4
        }
      }, /*#__PURE__*/React.createElement("svg", {
        width: 14,
        height: 3
      }, /*#__PURE__*/React.createElement("line", {
        x1: 0,
        y1: 1.5,
        x2: 14,
        y2: 1.5,
        stroke: c,
        strokeWidth: b ? 2 : 1.5,
        strokeDasharray: d ? "4,2" : undefined
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 10
        }
      }, l));
    }))), hasData ? /*#__PURE__*/React.createElement(RichLineChart, {
      h: 110,
      series: [{
        data: MONTHS.map(function (_, i) {
          return i <= emi ? offsetVal(0) : null;
        }),
        color: "rgba(255,255,255,.25)",
        dash: true,
        op: .5,
        tooltipLabel: "0%",
        tooltipUnit: "%"
      }, {
        data: cumGr.map(offsetVal),
        color: "#a78bfa",
        medium: true,
        op: .85,
        tooltipLabel: "누계성장률",
        tooltipUnit: "%",
        grOffset: negMax
      }, {
        data: monthlyGr.map(offsetVal),
        color: C.orange,
        bold: true,
        fill: true,
        tooltipLabel: "당월성장률",
        tooltipUnit: "%",
        grOffset: negMax,
        showLabels: true
      }],
      labels: MONTHS,
      grMode: true,
      zeroOffset: negMax
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 11
      }
    }, "25\uB144 \uB370\uC774\uD130 \uD544\uC694")));
  }())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 14,
      padding: 18,
      boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "0 4px 20px rgba(0,0,0,.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 13,
      marginBottom: 2
    }
  }, "\uC804\uB144\uBE44 \uC131\uC7A5\uB960"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 10,
      marginBottom: 16
    }
  }, "26\uB144 vs 25\uB144 \xB7 ", MONTHS[emi], " \uB204\uACC4"), function () {
    var PARTS = ["대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
    var rows = PARTS.map(function (k) {
      var v26 = ytd(p26, k),
        v25 = ytd(p25, k),
        gr = grw(v26, v25);
      return {
        k: k,
        v26: v26,
        v25: v25,
        gr: gr !== null ? parseFloat(gr) : null,
        color: KC[k] || C.muted2
      };
    });
    var validGr = rows.map(function (r) {
      return r.gr;
    }).filter(function (v) {
      return v !== null;
    });
    var posMax = Math.max.apply(Math, _toConsumableArray(validGr.filter(function (v) {
      return v > 0;
    })).concat([0.1]));
    var negMax = Math.max.apply(Math, _toConsumableArray(validGr.filter(function (v) {
      return v < 0;
    }).map(function (v) {
      return Math.abs(v);
    })).concat([0]));
    var totalRange = posMax + negMax;
    // 0 기준 위치 (왼쪽부터 %)
    var zeroLeft = totalRange > 0 ? negMax / totalRange * 100 : 10;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 6,
        height: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "".concat(zeroLeft, "%"),
        top: 0,
        bottom: 0,
        width: 1,
        background: C.b2 + "80"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "".concat(zeroLeft, "%"),
        transform: "translateX(-50%)",
        bottom: 0,
        color: C.muted,
        fontSize: 9
      }
    }, "0%")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, rows.map(function (_ref15) {
      var k = _ref15.k,
        v26 = _ref15.v26,
        v25 = _ref15.v25,
        gr = _ref15.gr,
        color = _ref15.color;
      var isUp = gr !== null && gr > 0;
      var isDown = gr !== null && gr < 0;
      var isFlat = gr === 0 && v26 > 0;
      // 바 너비: 절댓값/해당방향최대 × 해당방향영역%
      var posArea = 100 - zeroLeft; // 오른쪽 영역
      var negArea = zeroLeft; // 왼쪽 영역
      var barW = gr !== null ? isUp ? Math.min(Math.abs(gr) / posMax * posArea, posArea) : isDown ? Math.min(Math.abs(gr) / negMax * negArea, negArea) : isFlat ? 1 : 0 : 0;
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 5,
          width: 62,
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 2,
          background: color,
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted2,
          fontSize: 11,
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, k)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 3,
          width: 130,
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 9,
          whiteSpace: "nowrap"
        }
      }, v25 > 0 ? Math.round(v25) + "억" : "─"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.b2,
          fontSize: 8
        }
      }, "\u2192"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.text,
          fontSize: 11,
          fontWeight: 700,
          whiteSpace: "nowrap"
        }
      }, v26 > 0 ? Math.round(v26) + "억" : "─"), v26 > 0 && v25 > 0 && function () {
        var delta = Math.round(v26 - v25);
        var isP = delta > 0,
          isN = delta < 0;
        if (delta === 0) return null;
        return /*#__PURE__*/React.createElement("span", {
          style: {
            color: isP ? C.green : C.red,
            fontSize: 9,
            fontWeight: 700,
            whiteSpace: "nowrap",
            opacity: .9
          }
        }, "(", isP ? "+" : "", delta, "\uC5B5)");
      }()), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          position: "relative",
          height: 22
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: "absolute",
          inset: 0,
          background: C.b1 + "30",
          borderRadius: 3
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "".concat(zeroLeft, "%"),
          width: 1,
          background: C.b2,
          zIndex: 1
        }
      }), gr !== null && (isUp || isDown || isFlat) && /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({
          position: "absolute",
          top: 2,
          bottom: 2
        }, isUp || isFlat ? {
          left: "".concat(zeroLeft, "%"),
          width: "".concat(barW, "%")
        } : {
          right: "".concat(100 - zeroLeft, "%"),
          width: "".concat(barW, "%")
        }), {}, {
          background: isUp ? "linear-gradient(90deg,".concat(C.green, "60,").concat(C.green, "dd)") : isDown ? "linear-gradient(-90deg,".concat(C.red, "60,").concat(C.red, "dd)") : "rgba(255,255,255,.15)",
          borderRadius: isUp ? "0 3px 3px 0" : "3px 0 0 3px",
          boxShadow: isUp ? "0 0 8px ".concat(C.green, "40") : isDown ? "0 0 8px ".concat(C.red, "40") : "none",
          transition: "width .5s ease",
          zIndex: 2
        })
      }), gr !== null && function () {
        var THRESHOLD = 18; // 이 % 이상이면 안쪽에 표시
        var insideBar = barW >= THRESHOLD;
        var label = grwT(String(gr));
        if (insideBar) {
          // 안쪽 끝 — 흰색 텍스트로 배색
          return /*#__PURE__*/React.createElement("div", {
            style: _objectSpread(_objectSpread({
              position: "absolute",
              top: 0,
              bottom: 0,
              zIndex: 4
            }, isUp ? {
              left: "calc(".concat(zeroLeft, "% + ").concat(barW, "% - 2px)"),
              transform: "translateX(-100%)"
            } : {
              right: "calc(".concat(100 - zeroLeft, "% + ").concat(barW, "% - 2px)"),
              transform: "translateX(100%)"
            }), {}, {
              display: "flex",
              alignItems: "center",
              paddingRight: isUp ? 4 : 0,
              paddingLeft: isDown ? 4 : 0
            })
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              color: "rgba(255,255,255,.95)",
              fontSize: 10,
              fontWeight: 900,
              whiteSpace: "nowrap",
              textShadow: isUp ? "1px 0 3px rgba(0,100,60,.9)" : "1px 0 3px rgba(150,0,0,.9)"
            }
          }, label));
        } else {
          // 바깥쪽 — 원래 색상
          return /*#__PURE__*/React.createElement("div", {
            style: _objectSpread(_objectSpread({
              position: "absolute",
              top: 0,
              bottom: 0,
              zIndex: 4
            }, isUp ? {
              left: "calc(".concat(zeroLeft, "% + ").concat(barW, "% + 4px)")
            } : {
              right: "calc(".concat(100 - zeroLeft, "% + ").concat(barW, "% + 4px)"),
              textAlign: "right"
            }), {}, {
              display: "flex",
              alignItems: "center"
            })
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              color: isUp ? C.green : isDown ? C.red : C.muted2,
              fontSize: 10,
              fontWeight: 900,
              whiteSpace: "nowrap",
              textShadow: "0 1px 4px rgba(0,0,0,.9)"
            }
          }, label));
        }
      }(), gr === null && v26 === 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "calc(".concat(zeroLeft, "% + 4px)"),
          display: "flex",
          alignItems: "center",
          zIndex: 3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 9
        }
      }, "\u2500"))));
    })));
  }()), function () {
    var ce = ytd(p26, "CE");
    var PARTS = [{
      k: "대외영업",
      c: KC.대외영업
    }, {
      k: "혼수",
      c: KC.혼수
    }, {
      k: "뉴홈",
      c: KC.뉴홈
    }, {
      k: "입주",
      c: KC.입주
    }, {
      k: "이사",
      c: KC.이사
    }, {
      k: "SAC",
      c: KC.SAC
    }, {
      k: "거주중",
      c: KC.거주중
    }, {
      k: "B2B",
      c: KC.B2B
    }, {
      k: "SMB",
      c: KC.SMB
    }, {
      k: "농협",
      c: KC.농협
    }
    // 휴대폰 제외 — CE 비중 계산에서 제외 (실적 계산에는 포함됨)
    ];
    var rows = PARTS.map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        v: ytd(p26, p.k)
      });
    }).sort(function (a, b) {
      return b.v - a.v;
    }); // 높은 비중순 정렬
    // CE가 기준 — 모든 바는 CE 대비 비율
    var ceBarRef = ce > 0 ? ce : 1;
    var hp = ytd(p26, "휴대폰"); // 루프 밖으로 이동 (반복 계산 방지)
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: C.card,
        border: "2px solid ".concat(C.b1),
        borderRadius: 14,
        padding: 18,
        boxShadow: theme === 'light' ? "0 2px 12px rgba(0,0,0,.08)" : "0 4px 20px rgba(0,0,0,.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.text,
        fontWeight: 800,
        fontSize: 13,
        marginBottom: 2
      }
    }, "CE \uBE44\uC911 \uBD84\uC11D"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 10,
        marginBottom: 14
      }
    }, MONTHS[emi], " \uB204\uACC4 \xB7 CE = ", ce > 0 ? Math.round(ce).toLocaleString() + "억" : "─", /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        color: C.muted
      }
    }, "\u2502 \uBE44\uC911 \uB192\uC740 \uC21C")), ce > 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 58,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: KC.CE,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.text,
        fontSize: 11,
        fontWeight: 700
      }
    }, "CE")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 20,
        background: C.card2,
        borderRadius: 5,
        overflow: "hidden",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "100%",
        background: "linear-gradient(90deg,".concat(KC.CE, "cc,").concat(KC.CE, ")"),
        borderRadius: 5,
        boxShadow: "0 0 12px ".concat(KC.CE, "50")
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        paddingLeft: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(255,255,255,.95)",
        fontSize: 10,
        fontWeight: 700,
        textShadow: "0 1px 4px rgba(0,0,0,.8)"
      }
    }, Math.round(ce).toLocaleString(), "\uC5B5"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        flexShrink: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: C.b1,
        margin: "2px 0"
      }
    }), rows.map(function (_ref16) {
      var k = _ref16.k,
        c = _ref16.c,
        v = _ref16.v;
      // 대외영업·B2B: 실적(v)에는 휴대폰 포함, 비중 계산 시에는 제외
      var shareV = k === "대외영업" || k === "B2B" ? v - hp : v;
      var share = ce > 0 ? shareV / ce * 100 : 0;
      var barW = ce > 0 ? Math.min(shareV / ceBarRef * 100, 100) : 0;
      return /*#__PURE__*/React.createElement("div", {
        key: k,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 58,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          gap: 5
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 2,
          background: c,
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted2,
          fontSize: 11,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }
      }, k)), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          height: 20,
          background: C.card2,
          borderRadius: 5,
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
          background: "linear-gradient(90deg,".concat(c, "cc,").concat(c, ")"),
          borderRadius: 5,
          transition: "width .5s ease",
          boxShadow: "0 0 10px ".concat(c, "40")
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          paddingLeft: 8,
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: "rgba(255,255,255,.9)",
          fontSize: 10,
          fontWeight: 700,
          textShadow: "0 1px 4px rgba(0,0,0,.8)"
        }
      }, shareV > 0 ? Math.round(shareV).toLocaleString() + "억" : "─"))), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 44,
          flexShrink: 0,
          textAlign: "right"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: c,
          fontSize: 12,
          fontWeight: 800
        }
      }, share > 0 ? share.toFixed(1) + "%" : "─")));
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 12,
        padding: "40px 0",
        textAlign: "center"
      }
    }, "CE \uB370\uC774\uD130\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"));
  }()));
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
var INPUT_ROWS = [
// key, level(0=top/1=mid/2=sub), isAuto, groupStart, groupColor
{
  key: "CE",
  lv: 0,
  auto: false,
  gs: true,
  gc: KC.CE
}, {
  key: "대외영업",
  lv: 0,
  auto: true,
  gs: true,
  gc: KC.대외영업
}, {
  key: "혼수",
  lv: 1,
  auto: false,
  gs: false,
  gc: KC.혼수
}, {
  key: "뉴홈",
  lv: 1,
  auto: true,
  gs: true,
  gc: KC.뉴홈
}, {
  key: "입주",
  lv: 2,
  auto: false,
  gs: false,
  gc: KC.입주
}, {
  key: "이사",
  lv: 2,
  auto: false,
  gs: false,
  gc: KC.이사
}, {
  key: "SAC",
  lv: 1,
  auto: false,
  gs: true,
  gc: KC.SAC
}, {
  key: "거주중",
  lv: 2,
  auto: false,
  gs: false,
  gc: KC.거주중
}, {
  key: "B2B",
  lv: 1,
  auto: true,
  gs: true,
  gc: KC.B2B
}, {
  key: "SMB",
  lv: 2,
  auto: false,
  gs: false,
  gc: KC.SMB
}, {
  key: "농협",
  lv: 2,
  auto: false,
  gs: false,
  gc: KC.농협
}, {
  key: "휴대폰",
  lv: 1,
  auto: false,
  gs: false,
  gc: KC.휴대폰
}];

/* ── 카테고리 그룹 배경색 ── */
var GROUP_BG = {
  CE: "rgba(124,131,245,.06)",
  대외영업: "rgba(56,182,245,.05)",
  뉴홈: "rgba(45,212,136,.05)",
  SAC: "rgba(217,122,245,.05)",
  B2B: "rgba(245,143,66,.05)"
};

/* ── 단일 입력 셀 ── */
function NumInput(_ref17) {
  var value = _ref17.value,
    _onChange = _ref17.onChange,
    color = _ref17.color,
    _ref17$readOnly = _ref17.readOnly,
    readOnly = _ref17$readOnly === void 0 ? false : _ref17$readOnly,
    _ref17$placeholder = _ref17.placeholder,
    placeholder = _ref17$placeholder === void 0 ? "0" : _ref17$placeholder;
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    focused = _useState8[0],
    setFocused = _useState8[1];
  if (readOnly) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "5px 8px",
      textAlign: "right",
      fontSize: 12,
      fontWeight: 700,
      color: color || C.muted2,
      background: C.bg + "88",
      borderRadius: 5,
      border: "1px solid ".concat(color || C.b1, "33"),
      minWidth: 60
    }
  }, gNum(value) > 0 ? Math.round(gNum(value)).toLocaleString() : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.b2,
      fontWeight: 400
    }
  }, "AUTO"));
  return /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "any",
    min: "0",
    placeholder: placeholder,
    value: value !== null && value !== void 0 ? value : "",
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    style: {
      width: "100%",
      minWidth: 56,
      background: focused ? C.bg : C.bg + "cc",
      border: "1px solid ".concat(focused ? color || C.accent : C.b1),
      boxShadow: focused ? "0 0 0 2px ".concat(color || C.accent, "22") : "none",
      borderRadius: 5,
      padding: "5px 8px",
      color: color || C.text,
      fontSize: 12,
      outline: "none",
      textAlign: "right",
      fontFamily: "inherit",
      WebkitAppearance: "none",
      MozAppearance: "textfield",
      transition: "border-color .15s, box-shadow .15s"
    }
  });
}

/* ── 행 레이블 ── */
function RowLabel(_ref18) {
  var row = _ref18.row,
    _ref18$indent = _ref18.indent,
    indent = _ref18$indent === void 0 ? true : _ref18$indent;
  var lpad = indent ? row.lv * 14 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      paddingLeft: lpad + (row.lv > 0 && indent ? 8 : 0),
      whiteSpace: "nowrap"
    }
  }, row.lv > 0 && indent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.b2,
      fontSize: 10,
      flexShrink: 0
    }
  }, "\u2514"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: row.lv === 0 ? 800 : row.lv === 1 ? 600 : 400,
      color: row.auto ? row.gc || C.muted2 : row.lv === 0 ? row.gc || C.text : row.gc || C.muted2
    }
  }, row.key), row.auto && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: row.gc || C.accent,
      background: (row.gc || C.accent) + "18",
      borderRadius: 3,
      padding: "1px 4px",
      fontWeight: 700,
      letterSpacing: ".04em"
    }
  }, "\uC790\uB3D9"));
}

/* ── 그룹 구분선 ── */
function GroupDivider(_ref19) {
  var color = _ref19.color;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 100,
    style: {
      padding: 0,
      height: 4,
      background: "linear-gradient(90deg, ".concat(color || C.b1, "40 0%, transparent 100%)")
    }
  }));
}

// ── 목표 잠금해제 모달
// ── 메인 백업/복원 모달
function BackupMainModal(_ref20) {
  var onClose = _ref20.onClose,
    data = _ref20.data,
    mode = _ref20.mode;
  var _useState9 = useState("export"),
    _useState0 = _slicedToArray(_useState9, 2),
    tab = _useState0[0],
    setTab = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    msg = _useState10[0],
    setMsg = _useState10[1];
  var fileRef = useRef(null);
  var downloadJson = function downloadJson() {
    var blob = new Blob([JSON.stringify({
      perfData: data
    }, null, 2)], {
      type: "application/json"
    });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "\uCDA9\uCCAD_\uC2E4\uC801\uBC31\uC5C5_".concat(new Date().toISOString().slice(0, 10), ".json");
    a.click();
    setMsg("✅ JSON 백업 완료");
  };
  var downloadExcel = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var wb, YRS, MONTHS, KEYS, sk, g, derived, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setMsg("⏳ XLSX 로드 중...");
            _context.p = 1;
            _context.n = 2;
            return loadXLSX();
          case 2:
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setMsg("❌ XLSX 로드 실패");
            return _context.a(2);
          case 4:
            wb = XLSX.utils.book_new();
            YRS = ["24", "25", "26"];
            MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
            KEYS = ["CE", "대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
            sk = function sk(i) {
              return "".concat(i);
            };
            g = function g(o, k) {
              return parseFloat(o === null || o === void 0 ? void 0 : o[k]) || 0;
            };
            derived = function derived(o) {
              var r = _objectSpread({}, o);
              r.대외영업 = ["혼수", "입주", "이사", "SAC", "거주중", "SMB", "농협", "휴대폰"].reduce(function (s, k) {
                return s + g(o, k);
              }, 0);
              r.뉴홈 = g(o, "입주") + g(o, "이사");
              r.B2B = g(o, "SMB") + g(o, "농협") + g(o, "휴대폰");
              return r;
            };
            ["매출", "판매"].forEach(function (md) {
              YRS.forEach(function (yr) {
                var _data$yr, _data$yr2;
                var pD = ((_data$yr = data[yr]) === null || _data$yr === void 0 || (_data$yr = _data$yr[md]) === null || _data$yr === void 0 ? void 0 : _data$yr.perf) || {};
                var tD = ((_data$yr2 = data[yr]) === null || _data$yr2 === void 0 || (_data$yr2 = _data$yr2[md]) === null || _data$yr2 === void 0 ? void 0 : _data$yr2.target) || {};
                var rows = [["항목"].concat(MONTHS, ["연간합계"])];
                ["목표", "실적"].forEach(function (type) {
                  var d = type === "목표" ? tD : pD;
                  KEYS.forEach(function (k) {
                    var vals = MONTHS.map(function (_, i) {
                      return parseFloat(derived(d[sk(i)] || {})[k] || 0) || "";
                    });
                    var sum = vals.reduce(function (a, b) {
                      return a + (parseFloat(b) || 0);
                    }, 0);
                    rows.push(["".concat(type, "_").concat(k)].concat(_toConsumableArray(vals), [sum || ""]));
                  });
                });
                XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), "".concat(yr, "\uB144_").concat(md));
              });
            });
            XLSX.writeFile(wb, "\uCDA9\uCCAD_\uC2E4\uC801\uBC31\uC5C5_".concat(new Date().toISOString().slice(0, 10), ".xlsx"));
            setMsg("✅ 엑셀 백업 완료");
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function downloadExcel() {
      return _ref21.apply(this, arguments);
    };
  }();
  var downloadImage = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var el, canvas, a, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setMsg("⏳ 이미지 생성 중...");
            onClose();
            _context2.n = 1;
            return new Promise(function (r) {
              return setTimeout(r, 400);
            });
          case 1:
            _context2.p = 1;
            el = document.getElementById("root");
            _context2.n = 2;
            return (window.html2canvas || html2canvas)(el, {
              scale: 2,
              useCORS: true,
              backgroundColor: C.bg,
              ignoreElements: function ignoreElements(e) {
                return e.id === "backup-modal";
              }
            });
          case 2:
            canvas = _context2.v;
            a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "\uCDA9\uCCAD_\uBA54\uC778\uD654\uBA74_".concat(new Date().toISOString().slice(0, 10), ".png");
            a.click();
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            alert("이미지 생성 오류: " + _t2.message);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function downloadImage() {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleJsonUpload = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var file, text, parsed, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            file = e.target.files[0];
            if (file) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            _context3.n = 2;
            return file.text();
          case 2:
            text = _context3.v;
            parsed = JSON.parse(text);
            if (parsed.perfData) {
              _context3.n = 3;
              break;
            }
            setMsg("❌ 올바른 백업 파일이 아닙니다.");
            return _context3.a(2);
          case 3:
            _context3.n = 4;
            return window.db.collection("perf").doc("main").set({
              perfData: parsed.perfData
            }, {
              merge: true
            });
          case 4:
            setMsg("✅ 복원 완료! 페이지를 새로고침하세요.");
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            setMsg("❌ 파일 오류: " + _t3.message);
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 5]]);
    }));
    return function handleJsonUpload(_x) {
      return _ref23.apply(this, arguments);
    };
  }();
  var BtnRow = function BtnRow(_ref24) {
    var icon = _ref24.icon,
      label = _ref24.label,
      desc = _ref24.desc,
      onClick = _ref24.onClick,
      c = _ref24.c;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        padding: "13px 16px",
        borderRadius: 9,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit",
        border: "1px solid ".concat(c, "40"),
        background: c + "0d",
        marginBottom: 7,
        transition: "background .15s"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = c + "20";
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = c + "0d";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
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
    id: "backup-modal",
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
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
      width: "min(460px,92vw)",
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
      fontSize: 18
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid ".concat(C.b1)
    }
  }, [["export", "내보내기"], ["import", "가져오기"]].map(function (_ref25) {
    var _ref26 = _slicedToArray(_ref25, 2),
      k = _ref26[0],
      l = _ref26[1];
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
        color: tab === k ? C.teal : C.muted,
        borderBottom: tab === k ? "2px solid ".concat(C.teal) : "2px solid transparent"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, tab === "export" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDCCB",
    label: "JSON \uC804\uCCB4 \uBC31\uC5C5",
    c: C.teal,
    desc: "\uC2E4\uC801\xB7\uBAA9\uD45C \uC804\uCCB4 \uB370\uC774\uD130\uB97C JSON\uC73C\uB85C \uC800\uC7A5 (\uC644\uC804 \uBCF5\uC6D0 \uAC00\uB2A5)",
    onClick: downloadJson
  }), /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDCCA",
    label: "\uC5D1\uC140 \uB0B4\uBCF4\uB0B4\uAE30",
    c: C.green,
    desc: "\uC5F0\uB3C4\xB7\uBAA8\uB4DC\uBCC4 \uC2E4\uC801/\uBAA9\uD45C \uB370\uC774\uD130\uB97C Excel\uB85C \uC800\uC7A5",
    onClick: downloadExcel
  }), /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDDBC",
    label: "\uC774\uBBF8\uC9C0 \uC800\uC7A5 (PNG)",
    c: C.blue,
    desc: "\uD604\uC7AC \uD654\uBA74 \uC804\uCCB4\uB97C \uACE0\uD574\uC0C1\uB3C4 \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5",
    onClick: downloadImage
  })), tab === "import" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      border: "1px solid ".concat(C.teal, "40"),
      borderRadius: 10,
      padding: "16px"
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
  }, "\uC774\uC804\uC5D0 \uC800\uC7A5\uD55C JSON \uBC31\uC5C5 \uD30C\uC77C\uC744 \uC120\uD0DD\uD558\uBA74 Firebase\uC5D0 \uBCF5\uC6D0\uB429\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "\u26A0 \uD604\uC7AC \uB370\uC774\uD130\uB97C \uB36E\uC5B4\uC501\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("input", {
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
      border: "2px dashed ".concat(C.teal, "60"),
      borderRadius: 8,
      background: C.teal + "0a",
      color: C.teal,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 13,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDCC2 JSON \uD30C\uC77C \uC120\uD0DD")), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "10px 14px",
      borderRadius: 8,
      background: msg.startsWith("❌") ? "rgba(240,112,112,.12)" : "rgba(45,212,136,.12)",
      color: msg.startsWith("❌") ? C.red : C.green,
      fontSize: 12,
      fontWeight: 600
    }
  }, msg))));
}
function TargetUnlockModal(_ref27) {
  var onSuccess = _ref27.onSuccess,
    onClose = _ref27.onClose,
    _ref27$title = _ref27.title,
    title = _ref27$title === void 0 ? "목표 입력 잠금 해제" : _ref27$title,
    _ref27$hashToMatch = _ref27.hashToMatch,
    hashToMatch = _ref27$hashToMatch === void 0 ? TGT_PW_HASH : _ref27$hashToMatch;
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    pw = _useState12[0],
    setPw = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    err = _useState14[0],
    setErr = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    shake = _useState16[0],
    setShake = _useState16[1];
  var inputRef = useRef(null);
  useEffect(function () {
    setTimeout(function () {
      return inputRef.current && inputRef.current.focus();
    }, 80);
  }, []);
  var tryUnlock = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var buf, hash;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (pw) {
              _context4.n = 1;
              break;
            }
            setErr("비밀번호를 입력해주세요.");
            return _context4.a(2);
          case 1:
            _context4.n = 2;
            return crypto.subtle.digest("SHA-256", new TextEncoder().encode(pw));
          case 2:
            buf = _context4.v;
            hash = Array.from(new Uint8Array(buf)).map(function (b) {
              return b.toString(16).padStart(2, "0");
            }).join("");
            if (hash === hashToMatch) {
              onSuccess();
            } else {
              setErr("비밀번호가 올바르지 않습니다.");
              setPw("");
              setShake(true);
              setTimeout(function () {
                return setShake(false);
              }, 400);
            }
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function tryUnlock() {
      return _ref28.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 900,
      background: "rgba(0,0,0,.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.blue, "50"),
      borderRadius: 16,
      padding: "32px 36px",
      textAlign: "center",
      maxWidth: 320,
      width: "90%",
      animation: shake ? "shake .35s ease" : "none",
      boxShadow: "0 0 40px ".concat(C.blue, "30")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, "\uD83D\uDD10"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: C.text,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11,
      marginBottom: 20
    }
  }, "\uAD00\uB9AC\uC790 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "password",
    value: pw,
    onChange: function onChange(e) {
      setPw(e.target.value);
      setErr("");
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && tryUnlock();
    },
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      width: "100%",
      background: C.bg,
      border: "1px solid ".concat(err ? C.red : C.b2),
      borderRadius: 8,
      padding: "10px 14px",
      color: C.text,
      fontSize: 15,
      letterSpacing: 2,
      outline: "none",
      fontFamily: "inherit",
      transition: "border-color .2s",
      textAlign: "center"
    }
  }), err && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.red,
      fontSize: 11,
      marginTop: 6
    }
  }, err), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      flex: 1,
      padding: "9px",
      border: "1px solid ".concat(C.b2),
      borderRadius: 8,
      background: "transparent",
      color: C.muted,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 12,
      fontFamily: "inherit"
    }
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement("button", {
    onClick: tryUnlock,
    style: {
      flex: 2,
      padding: "9px",
      border: "none",
      borderRadius: 8,
      background: C.blue,
      color: "#fff",
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 12,
      fontFamily: "inherit"
    }
  }, "\uC7A0\uAE08 \uD574\uC81C"))));
}
function InputTab(_ref29) {
  var _data$yr3, _data$prevYr;
  var data = _ref29.data,
    setData = _ref29.setData,
    mode = _ref29.mode,
    onSave = _ref29.onSave,
    saveState = _ref29.saveState,
    hasUnsaved = _ref29.hasUnsaved,
    dbStatus = _ref29.dbStatus,
    onImport = _ref29.onImport,
    isTargetUnlocked = _ref29.isTargetUnlocked,
    onRequestTargetUnlock = _ref29.onRequestTargetUnlock,
    onTargetLock = _ref29.onTargetLock,
    theme = _ref29.theme;
  var dbLoadFailed = dbStatus && (dbStatus.startsWith("❌") || dbStatus.includes("실패") || dbStatus.includes("재시도↻") || dbStatus.startsWith("🔄")) && !dbStatus.startsWith("✅") && !dbStatus.startsWith("⚠ 문서없음");
  var _useState17 = useState("26"),
    _useState18 = _slicedToArray(_useState17, 2),
    yr = _useState18[0],
    setYr = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    mi = _useState20[0],
    setMi = _useState20[1];
  var _useState21 = useState("single"),
    _useState22 = _slicedToArray(_useState21, 2),
    inputMode = _useState22[0],
    setInputMode = _useState22[1];
  var isMobile = useIsMobile();
  var hasTgt = yr !== "24";
  var mColor = C[mode];
  var mD = ((_data$yr3 = data[yr]) === null || _data$yr3 === void 0 ? void 0 : _data$yr3[mode]) || emptyMode(hasTgt);
  var pD = mD.perf || emptyM();
  var tD = mD.target || emptyM();

  // 전년 데이터
  var prevYr = yr === "26" ? "25" : yr === "25" ? "24" : null;
  var prevP = prevYr ? ((_data$prevYr = data[prevYr]) === null || _data$prevYr === void 0 || (_data$prevYr = _data$prevYr[mode]) === null || _data$prevYr === void 0 ? void 0 : _data$prevYr.perf) || emptyM() : null;

  // Firebase 로드 후 마지막 입력월 자동 선택
  useEffect(function () {
    var _loop3 = function _loop3(i) {
        if (INP_KEYS.some(function (k) {
          var _pD$sk;
          return gNum((_pD$sk = pD[sk(i)]) === null || _pD$sk === void 0 ? void 0 : _pD$sk[k]) > 0;
        })) {
          setMi(i);
          return {
            v: void 0
          };
        }
      },
      _ret2;
    for (var i = 11; i >= 0; i--) {
      _ret2 = _loop3(i);
      if (_ret2) return _ret2.v;
    }
  }, [yr, mode, data]);
  var setVal = useCallback(function (type, mIdx, key, val) {
    setData(function (prev) {
      var yr_ = prev[yr] || {};
      var mode_ = yr_[mode] || emptyMode(hasTgt);
      var type_ = mode_[type] || emptyM();
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, yr, _objectSpread(_objectSpread({}, yr_), {}, _defineProperty({}, mode, _objectSpread(_objectSpread({}, mode_), {}, _defineProperty({}, type, _objectSpread(_objectSpread({}, type_), {}, _defineProperty({}, sk(mIdx), _objectSpread(_objectSpread({}, type_[sk(mIdx)] || {}), {}, _defineProperty({}, key, val))))))))));
    });
  }, [yr, mode, hasTgt, setData]);

  /* 연간 합산 */
  // emi = 실적이 입력된 마지막 월 (누계 기준월)
  var emi = function () {
    var _loop4 = function _loop4(i) {
        if (INP_KEYS.some(function (k) {
          var _pD$sk2;
          return gNum((_pD$sk2 = pD[sk(i)]) === null || _pD$sk2 === void 0 ? void 0 : _pD$sk2[k]) > 0;
        })) return {
          v: i
        };
      },
      _ret3;
    for (var i = 11; i >= 0; i--) {
      _ret3 = _loop4(i);
      if (_ret3) return _ret3.v;
    }
    return new Date().getMonth();
  }();
  var pYear = function pYear(k) {
    return sumM(pD, k);
  };
  var tYear = function tYear(k) {
    return sumM(tD, k);
  };
  var prevYear = function prevYear(k) {
    return prevP ? sumM(prevP, k) : 0;
  };

  /* 월별 fullRow */
  var pRow = fullRow(pD[sk(mi)]);
  var tRow = hasTgt ? fullRow(tD[sk(mi)]) : {};
  var ppRow = prevP ? fullRow(prevP[sk(mi)]) : {};

  /* ── 단일 월 입력용 ── */
  var SingleRow = function SingleRow(_ref30) {
    var _pD$sk3, _tD$sk;
    var row = _ref30.row;
    var pv = pRow[row.key],
      tv = tRow[row.key],
      ppv = ppRow[row.key];
    var ar = hasTgt && gNum(tv) > 0 ? pct(pv, tv) : null;
    var gr = prevP && gNum(ppv) > 0 ? grw(pv, ppv) : null;
    // 목표 전년비
    var tgr = prevP && gNum(ppv) > 0 ? grw(gNum(tv), gNum(ppv)) : null;
    var isBg = GROUP_BG[row.key];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "140px 1fr ".concat(hasTgt ? "1fr" : ""),
        gap: 6,
        alignItems: "stretch",
        padding: "4px 10px",
        background: isBg || "transparent",
        borderLeft: row.lv === 0 ? "3px solid ".concat(row.gc || C.b1) : "none",
        marginBottom: row.gs && row.lv === 0 ? 2 : 1,
        marginTop: row.gs && row.lv === 0 ? 4 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(RowLabel, {
      row: row
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: isTargetUnlocked ? mColor + "0d" : C.card2,
        border: "1px solid ".concat(isTargetUnlocked ? mColor + "33" : C.b1),
        borderRadius: 7,
        padding: "5px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        position: "relative"
      }
    }, !isTargetUnlocked && /*#__PURE__*/React.createElement("button", {
      onClick: onRequestTargetUnlock,
      style: {
        position: "absolute",
        top: 3,
        right: 4,
        zIndex: 5,
        cursor: "pointer",
        background: "rgba(245,185,66,.15)",
        border: "1px solid rgba(245,185,66,.4)",
        borderRadius: 4,
        padding: "1px 5px",
        fontSize: 9,
        fontFamily: "inherit",
        color: C.orange,
        fontWeight: 700,
        lineHeight: 1.4
      }
    }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: isTargetUnlocked ? mColor : C.muted,
        fontSize: 9,
        fontWeight: 700,
        width: 20,
        flexShrink: 0
      }
    }, "\uC2E4\uC801"), /*#__PURE__*/React.createElement(NumInput, {
      value: row.auto ? pv : (_pD$sk3 = pD[sk(mi)]) === null || _pD$sk3 === void 0 ? void 0 : _pD$sk3[row.key],
      readOnly: row.auto || !isTargetUnlocked,
      color: isTargetUnlocked ? row.gc || mColor : C.muted,
      onChange: function onChange(v) {
        return setVal("perf", mi, row.key, v);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9,
        flexShrink: 0
      }
    }, "\uC5B5")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        paddingLeft: 26
      }
    }, ar !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 8
      }
    }, "\uB2EC\uC131"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: pctC(ar),
        fontSize: 10,
        fontWeight: 800
      }
    }, Math.round(gNum(ar)), "%")), gr !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 8
      }
    }, "\uC804\uB144\uBE44"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: grwC(gr),
        fontSize: 10,
        fontWeight: 700
      }
    }, grwT(gr))))), hasTgt && /*#__PURE__*/React.createElement("div", {
      style: {
        background: isTargetUnlocked ? C.blue + "0d" : C.card2,
        border: "1px solid ".concat(isTargetUnlocked ? C.blue + "33" : C.b1),
        borderRadius: 7,
        padding: "5px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        position: "relative"
      }
    }, !isTargetUnlocked && /*#__PURE__*/React.createElement("button", {
      onClick: onRequestTargetUnlock,
      style: {
        position: "absolute",
        top: 3,
        right: 4,
        zIndex: 5,
        cursor: "pointer",
        background: "rgba(59,130,246,.12)",
        border: "1px solid rgba(59,130,246,.35)",
        borderRadius: 4,
        padding: "1px 5px",
        fontSize: 9,
        fontFamily: "inherit",
        color: C.blue,
        fontWeight: 700,
        lineHeight: 1.4
      }
    }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: isTargetUnlocked ? C.blue : C.muted,
        fontSize: 9,
        fontWeight: 700,
        width: 20,
        flexShrink: 0
      }
    }, "\uBAA9\uD45C"), /*#__PURE__*/React.createElement(NumInput, {
      value: row.auto ? tRow[row.key] : (_tD$sk = tD[sk(mi)]) === null || _tD$sk === void 0 ? void 0 : _tD$sk[row.key],
      readOnly: row.auto || !isTargetUnlocked,
      color: isTargetUnlocked ? C.blue : C.muted,
      onChange: function onChange(v) {
        return setVal("target", mi, row.key, v);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9,
        flexShrink: 0
      }
    }, "\uC5B5")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        paddingLeft: 26
      }
    }, tgr !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 8
      }
    }, "\uC804\uB144\uBE44"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: grwC(tgr),
        fontSize: 10,
        fontWeight: 700
      }
    }, grwT(tgr))))));
  };

  /* ── 일괄 입력 헤더 ── */
  var BulkTH = function BulkTH(_ref31) {
    var c = _ref31.c,
      sticky = _ref31.sticky,
      right = _ref31.right,
      children = _ref31.children,
      w = _ref31.w;
    return /*#__PURE__*/React.createElement("th", {
      style: _objectSpread(_objectSpread({
        padding: "8px 6px",
        textAlign: right ? "right" : "center",
        color: c || C.muted,
        fontWeight: 700,
        fontSize: 11,
        whiteSpace: "nowrap"
      }, sticky ? {
        position: "sticky",
        left: 0,
        background: C.card,
        zIndex: 3
      } : {}), w ? {
        width: w,
        minWidth: w
      } : {
        minWidth: 76
      })
    }, children);
  };

  /* ── 일괄 입력용 데이터 행 ── */
  var BulkDataRow = function BulkDataRow(_ref32) {
    var row = _ref32.row,
      type = _ref32.type,
      colorOverride = _ref32.colorOverride,
      _ref32$perfLocked = _ref32.perfLocked,
      perfLocked = _ref32$perfLocked === void 0 ? false : _ref32$perfLocked;
    var d = type === "perf" ? pD : tD;
    var other = type === "perf" ? tD : null;
    var clr = colorOverride || (type === "perf" ? mColor : C.blue);

    // 합계 계산:
    // - perf: emi(실적 마지막 입력월)까지 누계
    // - target: 입력된 전 월 합산(12개월), 입력된 월만큼 반영
    var isTarget = type === "target";
    var yearSum = isTarget ? sumM(d, row.key) : sumR(d, row.key, 0, emi);
    // 전년 실적 비교: target은 12개월 전체, perf는 emi까지
    var yearPrev = prevP ? isTarget ? sumM(prevP, row.key) : sumR(prevP, row.key, 0, emi) : 0;
    // 실적 달성률용 목표 누계 (emi까지)
    var yearTgt = sumR(tD, row.key, 0, emi);
    var yearAr = type === "perf" && hasTgt && yearTgt > 0 ? pct(yearSum, yearTgt) : null;
    var yearGr = type === "perf" && prevP && yearPrev > 0 ? grw(yearSum, yearPrev) : null;
    var tgtGr = isTarget && prevP && yearPrev > 0 ? grw(yearSum, yearPrev) : null;
    var rowBg = type === "perf" ? GROUP_BG[row.key] || "transparent" : "rgba(56,182,245,.03)";
    return /*#__PURE__*/React.createElement("tr", {
      style: {
        borderBottom: "1px solid ".concat(C.b1, "20"),
        background: rowBg
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "7px 10px",
        paddingLeft: 10 + row.lv * 14,
        position: "sticky",
        left: 0,
        background: C.card,
        zIndex: 1,
        borderLeft: row.lv === 0 ? "3px solid ".concat(row.gc || C.b1) : "none"
      }
    }, /*#__PURE__*/React.createElement(RowLabel, {
      row: row,
      indent: true
    })), MONTHS.map(function (_, mi2) {
      var _d$sk2, _d$sk$row$key, _d$sk3;
      var val = row.auto ? gNum(fullRow(d[sk(mi2)])[row.key]) : gNum((_d$sk2 = d[sk(mi2)]) === null || _d$sk2 === void 0 ? void 0 : _d$sk2[row.key]);
      var prevVal = prevP ? gNum(fullRow(prevP[sk(mi2)])[row.key]) : 0;
      var tgtVal = other ? gNum(fullRow(other[sk(mi2)])[row.key]) : 0;
      var ar = type === "perf" && hasTgt && tgtVal > 0 ? pct(val, tgtVal) : null;
      var gr = type === "perf" && prevP && prevVal > 0 ? grw(val, prevVal) : null;
      var tgr = type === "target" && prevP && prevVal > 0 ? grw(val, prevVal) : null;
      return /*#__PURE__*/React.createElement("td", {
        key: mi2,
        style: {
          padding: "4px 5px",
          verticalAlign: "middle"
        }
      }, row.auto ? /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "7px 8px",
          textAlign: "right",
          fontSize: 11,
          fontWeight: 700,
          color: row.gc || clr,
          background: (row.gc || clr) + "12",
          borderRadius: 5,
          border: "1px solid ".concat(row.gc || clr, "22")
        }
      }, val > 0 ? Math.round(val).toLocaleString() : /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.b2
        }
      }, "\u2500")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
        type: "number",
        step: "any",
        min: "0",
        placeholder: "0",
        value: (_d$sk$row$key = (_d$sk3 = d[sk(mi2)]) === null || _d$sk3 === void 0 ? void 0 : _d$sk3[row.key]) !== null && _d$sk$row$key !== void 0 ? _d$sk$row$key : "",
        readOnly: perfLocked,
        onChange: perfLocked ? undefined : function (e) {
          return setVal(type, mi2, row.key, e.target.value);
        },
        style: {
          width: "100%",
          background: C.bg,
          border: "1px solid ".concat(C.b1),
          borderRadius: 5,
          padding: "6px 8px",
          color: perfLocked ? C.muted2 : clr,
          fontSize: 12,
          outline: "none",
          textAlign: "right",
          fontFamily: "inherit",
          cursor: perfLocked ? "default" : "text"
        },
        onFocus: function onFocus(e) {
          if (!perfLocked) {
            e.target.style.borderColor = clr;
            e.target.style.boxShadow = "0 0 0 2px ".concat(clr, "22");
          }
        },
        onBlur: function onBlur(e) {
          e.target.style.borderColor = C.b1;
          e.target.style.boxShadow = "none";
        }
      }), ar && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
          marginTop: 2
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 8
        }
      }, "\uB2EC\uC131"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: pctC(ar),
          fontSize: 9,
          fontWeight: 800
        }
      }, Math.round(gNum(ar)), "%")), (gr || tgr) && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
          marginTop: 1
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: C.muted,
          fontSize: 8
        }
      }, "\uC804\uB144\uBE44"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: grwC(gr || tgr),
          fontSize: 9,
          fontWeight: 700
        }
      }, grwT(gr || tgr)))));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "6px 10px",
        textAlign: "right",
        position: "sticky",
        right: 0,
        background: C.card,
        zIndex: 1,
        borderLeft: "1px solid ".concat(C.b1)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      title: fmtD(yearSum),
      style: {
        color: row.gc || clr,
        fontWeight: 700,
        fontSize: 11,
        cursor: "default",
        whiteSpace: "nowrap"
      }
    }, yearSum > 0 ? Math.round(yearSum).toLocaleString() + "억" : "─"), yearAr && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 8
      }
    }, "\uB204\uACC4\uB2EC\uC131"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: pctC(yearAr),
        fontSize: 10,
        fontWeight: 800
      }
    }, Math.round(gNum(yearAr)), "%")), (yearGr || tgtGr) && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 8
      }
    }, isTarget ? "전년비" : "누계성장"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: grwC(yearGr || tgtGr),
        fontSize: 10,
        fontWeight: 700
      }
    }, grwT(yearGr || tgtGr))))));
  };

  /* ── 섹션 헤더행 ── */
  var SectionHeaderRow = function SectionHeaderRow(_ref33) {
    var label = _ref33.label,
      color = _ref33.color,
      sub = _ref33.sub;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 100,
      style: {
        padding: "8px 12px 4px",
        background: "linear-gradient(90deg,".concat(color, "18 0%,transparent 60%)"),
        borderLeft: "3px solid ".concat(color),
        borderBottom: "1px solid ".concat(color, "33")
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontWeight: 800,
        fontSize: 12
      }
    }, label), sub && /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 10
      }
    }, sub))));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.surf,
      border: "2px solid ".concat(C.b1),
      borderRadius: 12,
      padding: "10px 14px",
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap",
      boxShadow: theme === 'light' ? "0 2px 8px rgba(0,0,0,.06)" : "0 4px 16px rgba(0,0,0,.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, [["24", "실적전용"], ["25", "실적+목표"], ["26", "실적+목표"]].map(function (_ref34) {
    var _ref35 = _slicedToArray(_ref34, 2),
      y = _ref35[0],
      d = _ref35[1];
    return /*#__PURE__*/React.createElement("button", {
      key: y,
      onClick: function onClick() {
        return setYr(y);
      },
      style: {
        padding: "5px 12px",
        borderRadius: 7,
        cursor: "pointer",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "inherit",
        border: "1px solid ".concat(yr === y ? C.accent : C.b2),
        background: yr === y ? C.accent + "22" : "transparent",
        color: yr === y ? C.accent : C.muted,
        boxShadow: yr === y ? "0 0 8px ".concat(C.accent, "40") : "none",
        transition: "all .15s"
      }
    }, y, "\uB144", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        opacity: .7,
        marginLeft: 3
      }
    }, "(", d, ")"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      background: C.bg,
      borderRadius: 8,
      padding: 3
    }
  }, [["single", "📅 월별"], ["bulk", "📊 일괄"]].map(function (_ref36) {
    var _ref37 = _slicedToArray(_ref36, 2),
      v = _ref37[0],
      l = _ref37[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setInputMode(v);
      },
      style: {
        padding: "4px 12px",
        borderRadius: 6,
        cursor: "pointer",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "inherit",
        border: "none",
        background: inputMode === v ? mColor + "22" : "transparent",
        color: inputMode === v ? mColor : C.muted,
        boxShadow: inputMode === v ? "0 0 6px ".concat(mColor, "30") : "none",
        transition: "all .15s"
      }
    }, l);
  })), inputMode === "single" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      flexWrap: "wrap",
      flex: 1
    }
  }, MONTHS.map(function (m, i) {
    var has = INP_KEYS.some(function (k) {
      var _pD$sk4;
      return gNum((_pD$sk4 = pD[sk(i)]) === null || _pD$sk4 === void 0 ? void 0 : _pD$sk4[k]) > 0;
    });
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: function onClick() {
        return setMi(i);
      },
      style: {
        padding: "4px 8px",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: 10,
        fontWeight: 600,
        fontFamily: "inherit",
        border: "1px solid ".concat(mi === i ? mColor : has ? C.green + "50" : C.b1),
        background: mi === i ? mColor + "22" : "transparent",
        color: mi === i ? mColor : has ? C.green : C.muted,
        transition: "all .12s"
      }
    }, m.replace("월", ""), has && mi !== i && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: C.green,
        margin: "0 auto",
        marginTop: 1
      }
    }));
  })), inputMode === "bulk" && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onImport,
    style: {
      padding: "7px 14px",
      borderRadius: 8,
      border: "1px solid ".concat(C.teal, "40"),
      background: "".concat(C.teal, "10"),
      color: C.teal,
      fontWeight: 700,
      fontSize: 11,
      cursor: "pointer",
      fontFamily: "inherit",
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
  }, "\uD83D\uDCE5", !isMobile && " JSON 가져오기"), /*#__PURE__*/React.createElement("button", {
    onClick: onSave,
    disabled: saveState === "saving" || dbLoadFailed,
    style: {
      padding: "7px 20px",
      borderRadius: 8,
      border: "none",
      cursor: dbLoadFailed ? "not-allowed" : "pointer",
      fontFamily: "inherit",
      fontWeight: 800,
      fontSize: 12,
      flexShrink: 0,
      background: dbLoadFailed ? C.b2 : saveState === "saved" ? C.green : hasUnsaved ? "linear-gradient(135deg,".concat(C.accent, ",").concat(C.blue, ")") : C.b2,
      color: dbLoadFailed ? C.muted : "#fff",
      boxShadow: !dbLoadFailed && hasUnsaved && saveState === "idle" ? "0 0 14px ".concat(C.accent, "50") : "none",
      transition: "all .2s",
      opacity: dbLoadFailed ? .5 : 1
    }
  }, saveState === "saving" ? "저장중..." : saveState === "saved" ? "✓ 완료" : "💾 저장"), dbLoadFailed && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u26A0 \uB370\uC774\uD130 \uB85C\uB4DC \uBBF8\uC644\uB8CC \u2014 \uC800\uC7A5 \uBD88\uAC00")), inputMode === "bulk" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 14
    }
  }, yr, "\uB144 \xB7 ", mode), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
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
      fontSize: 11,
      fontWeight: 700
    }
  }, "\uC2E4\uC801")), hasTgt && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: C.blue
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.blue,
      fontSize: 11,
      fontWeight: 700
    }
  }, "\uBAA9\uD45C")), hasTgt && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10
    }
  }, "\xB7 \uC140 \uC548 \uC791\uC740 \uC22B\uC790: \uB2EC\uC131\uB960(%), \uC804\uB144\uBE44(\u25B2\u25BC)")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(mColor, "55"),
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      background: "linear-gradient(90deg,".concat(mColor, "22 0%,transparent 70%)"),
      borderBottom: "1px solid ".concat(mColor, "33"),
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 20,
      borderRadius: 2,
      background: mColor,
      boxShadow: "0 0 8px ".concat(mColor)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: mColor,
      fontWeight: 900,
      fontSize: 14
    }
  }, "\uD83D\uDCCA \uC2E4\uC801 \uC785\uB825"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, yr, "\uB144 \xB7 \uC5B5\uC6D0 \uB2E8\uC704"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4,
      alignItems: "center"
    }
  }, isTargetUnlocked ? /*#__PURE__*/React.createElement("button", {
    onClick: onTargetLock,
    style: {
      padding: "4px 10px",
      borderRadius: 6,
      border: "1px solid ".concat(C.muted),
      background: "transparent",
      color: C.muted,
      cursor: "pointer",
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDD12 \uC7A0\uAE08") : /*#__PURE__*/React.createElement("button", {
    onClick: onRequestTargetUnlock,
    style: {
      padding: "4px 12px",
      borderRadius: 6,
      border: "1px solid ".concat(C.orange),
      background: C.orange + "18",
      color: C.orange,
      cursor: "pointer",
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "inherit"
    }
  }, "\uD83D\uDD13 \uC7A0\uAE08 \uD574\uC81C")), prevYr && isTargetUnlocked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10
    }
  }, "\uC140 \uD558\uB2E8: \uBAA9\uD45C\uB2EC\uC131\uB960 \xB7 \uC804", prevYr, "\uB144\uBE44 \uC131\uC7A5\uB960 \uC790\uB3D9\uD45C\uC2DC")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      minWidth: 1100,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.card2,
      borderBottom: "2px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement(BulkTH, {
    sticky: true,
    w: 130
  }, "\uD56D\uBAA9"), MONTHS.map(function (m) {
    return /*#__PURE__*/React.createElement(BulkTH, {
      key: m,
      c: C.muted2
    }, /*#__PURE__*/React.createElement("div", null, m), hasTgt && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        fontWeight: 400,
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.teal
      }
    }, "\uB2EC\uC131"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.green
      }
    }, "\uC804\uB144\uBE44")));
  }), /*#__PURE__*/React.createElement(BulkTH, {
    right: true,
    c: C.accent,
    w: 110
  }, /*#__PURE__*/React.createElement("div", null, MONTHS[emi], " \uB204\uACC4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.teal
    }
  }, "\uB2EC\uC131"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green
    }
  }, "\uC804\uB144\uB3D9\uAE30\uBE44"))))), /*#__PURE__*/React.createElement("tbody", null, INPUT_ROWS.map(function (row, ri) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: row.key
    }, row.gs && ri > 0 && /*#__PURE__*/React.createElement(GroupDivider, {
      color: row.gc
    }), /*#__PURE__*/React.createElement(BulkDataRow, {
      row: row,
      type: "perf",
      perfLocked: !isTargetUnlocked
    }));
  }))))), hasTgt && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(isTargetUnlocked ? C.blue : C.b1),
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      background: "linear-gradient(90deg,".concat(C.blue, "22 0%,transparent 70%)"),
      borderBottom: "1px solid ".concat(C.blue, "33"),
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 20,
      borderRadius: 2,
      background: C.blue,
      boxShadow: "0 0 8px ".concat(C.blue)
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: isTargetUnlocked ? C.blue : C.muted,
      fontWeight: 900,
      fontSize: 14
    }
  }, "\uD83C\uDFAF \uBAA9\uD45C \uC785\uB825"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, yr, "\uB144 \xB7 \uC5B5\uC6D0 \uB2E8\uC704"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, prevYr && isTargetUnlocked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10
    }
  }, "\uC140 \uD558\uB2E8: \uC804", prevYr, "\uB144\uC2E4\uC801 \uB300\uBE44 \uC131\uC7A5\uB960 \uC790\uB3D9\uD45C\uC2DC"), !isTargetUnlocked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10
    }
  }, "\uD83D\uDD12 \uC7A0\uAE08 \uC0C1\uD0DC \u2014 \uC2E4\uC801 \uBE14\uB85D\uC5D0\uC11C \uD574\uC81C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      minWidth: 1100,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.card2,
      borderBottom: "2px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement(BulkTH, {
    sticky: true,
    w: 130
  }, "\uD56D\uBAA9"), MONTHS.map(function (m) {
    return /*#__PURE__*/React.createElement(BulkTH, {
      key: m,
      c: C.blue
    }, /*#__PURE__*/React.createElement("div", null, m), prevYr && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        fontWeight: 400,
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.green
      }
    }, "\uC804\uB144\uBE44")));
  }), /*#__PURE__*/React.createElement(BulkTH, {
    right: true,
    c: C.blue,
    w: 110
  }, /*#__PURE__*/React.createElement("div", null, "\uC5F0\uAC04 \uD569\uACC4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green
    }
  }, "\uC804\uB144\uBE44"))))), /*#__PURE__*/React.createElement("tbody", null, INPUT_ROWS.map(function (row, ri) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: row.key
    }, row.gs && ri > 0 && /*#__PURE__*/React.createElement(GroupDivider, {
      color: C.blue
    }), /*#__PURE__*/React.createElement(BulkDataRow, {
      row: row,
      type: "target",
      colorOverride: C.blue,
      perfLocked: !isTargetUnlocked
    }));
  })))))), inputMode === "single" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      height: 24,
      borderRadius: 2,
      background: mColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 15
    }
  }, yr, "\uB144 ", MONTHS[mi]), /*#__PURE__*/React.createElement(Chip, {
    c: mColor
  }, mode), hasTgt && /*#__PURE__*/React.createElement(Chip, {
    c: C.blue
  }, "\uC2E4\uC801+\uBAA9\uD45C"), prevYr && /*#__PURE__*/React.createElement(Chip, {
    c: C.muted2
  }, "\uC804", prevYr, "\uB144\uBE44 \uC131\uC7A5\uB960 \uC790\uB3D9\uD45C\uC2DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, isTargetUnlocked ? /*#__PURE__*/React.createElement("button", {
    onClick: onTargetLock,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "5px 12px",
      borderRadius: 7,
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: 700,
      fontSize: 11,
      border: "1px solid ".concat(C.muted),
      background: C.card2,
      color: C.muted,
      transition: "all .15s"
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = C.orange;
      e.currentTarget.style.color = C.orange;
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = C.muted;
      e.currentTarget.style.color = C.muted;
    }
  }, "\uD83D\uDD13 ", /*#__PURE__*/React.createElement("span", null, "\uC785\uB825 \uC7A0\uAE08")) : /*#__PURE__*/React.createElement("button", {
    onClick: onRequestTargetUnlock,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "5px 12px",
      borderRadius: 7,
      cursor: "pointer",
      fontFamily: "inherit",
      fontWeight: 700,
      fontSize: 11,
      border: "1px solid ".concat(C.orange, "60"),
      background: C.orange + "15",
      color: C.orange,
      transition: "all .15s"
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = C.orange;
      e.currentTarget.style.background = C.orange + "25";
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = C.orange + "60";
      e.currentTarget.style.background = C.orange + "15";
    }
  }, "\uD83D\uDD12 ", /*#__PURE__*/React.createElement("span", null, "\uC7A0\uAE08 \uD574\uC81C")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 12,
      padding: "6px 0",
      boxShadow: "0 4px 16px rgba(0,0,0,.2)",
      overflow: "hidden"
    }
  }, INPUT_ROWS.map(function (row, ri) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: row.key
    }, row.gs && ri > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "linear-gradient(90deg,".concat(row.gc || C.b1, "20 0%,transparent 100%)")
      }
    }), /*#__PURE__*/React.createElement(SingleRow, {
      row: row
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 12,
      padding: 16,
      boxShadow: "0 4px 16px rgba(0,0,0,.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 12,
      marginBottom: 12
    }
  }, MONTHS[mi], " \uD30C\uD2B8\uBCC4 \uD604\uD669", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontWeight: 400,
      fontSize: 10,
      marginLeft: 8
    }
  }, "\uB3C4\uB11B: \uB2EC\uC131\uB960 \xB7 \uC218\uCE58: \uC2E4\uC801/\uBAA9\uD45C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(3,1fr)" : "repeat(6,1fr)",
      gap: 10
    }
  }, INPUT_ROWS.map(function (row) {
    var pv = gNum(pRow[row.key]);
    var tv = hasTgt ? gNum(tRow[row.key]) : 0;
    var ppv = prevP ? gNum(ppRow[row.key]) : 0;
    var ar = hasTgt && tv > 0 ? pct(pv, tv) : null;
    var gr = prevP && ppv > 0 ? grw(pv, ppv) : null;
    var color = row.gc || C.muted2;
    return /*#__PURE__*/React.createElement("div", {
      key: row.key,
      style: {
        background: C.card2,
        border: "1px solid ".concat(color, "25"),
        borderRadius: 10,
        padding: "10px 6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        borderTop: "2px solid ".concat(color)
      }
    }, /*#__PURE__*/React.createElement(DonutChart, {
      pct: ar || 0,
      color: color,
      size: 60,
      stroke: 7
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontSize: 10,
        fontWeight: 700
      }
    }, row.key), row.auto && /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontSize: 7,
        background: color + "20",
        borderRadius: 2,
        padding: "1px 3px",
        fontWeight: 700
      }
    }, "\uC790\uB3D9")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.text,
        fontSize: 12,
        fontWeight: 800
      }
    }, pv > 0 ? Math.round(pv).toLocaleString() : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted
      }
    }, "\u2500")), tv > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "/", Math.round(tv), "\uC5B5")), gr !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        color: grwC(gr),
        fontSize: 9,
        fontWeight: 700
      }
    }, "\uC804\uB144\uBE44 ", grwT(gr)));
  })))));
}

// ═══════════════════════════════════════════════
//  실적 분석
// ═══════════════════════════════════════════════
// AnalysisBtn: Analysis 밖에 정의 (안에 두면 매 렌더마다 새 타입 → hook 오염)
function AnalysisBtn(_ref38) {
  var label = _ref38.label,
    active = _ref38.active,
    onClick = _ref38.onClick,
    clr = _ref38.clr,
    color = _ref38.color;
  var c = clr || color || C.accent;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "5px 10px",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: 11,
      fontFamily: "inherit",
      whiteSpace: "nowrap",
      transition: "all .15s",
      border: "1px solid ".concat(active ? c : C.b2),
      background: active ? c + "28" : "transparent",
      color: active ? c : C.muted,
      boxShadow: active ? "0 0 6px ".concat(c, "30") : "none"
    }
  }, label);
}
function Analysis(_ref39) {
  var _data$yr4, _data$yr5, _data$prevYr2, _data$5, _data$6;
  var data = _ref39.data,
    mode = _ref39.mode,
    theme = _ref39.theme;
  var _useState23 = useState("26"),
    _useState24 = _slicedToArray(_useState23, 2),
    yr = _useState24[0],
    setYr = _useState24[1];
  var _useState25 = useState("대외영업"),
    _useState26 = _slicedToArray(_useState25, 2),
    selKey = _useState26[0],
    setSel = _useState26[1];
  var isMobile = useIsMobile();
  var ANALYSIS_KEYS = ["대외영업", "CE", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
  var pD = ((_data$yr4 = data[yr]) === null || _data$yr4 === void 0 || (_data$yr4 = _data$yr4[mode]) === null || _data$yr4 === void 0 ? void 0 : _data$yr4.perf) || emptyM();
  var tD = ((_data$yr5 = data[yr]) === null || _data$yr5 === void 0 || (_data$yr5 = _data$yr5[mode]) === null || _data$yr5 === void 0 ? void 0 : _data$yr5.target) || emptyM();
  var prevYr = yr === "26" ? "25" : yr === "25" ? "24" : null;
  var prevP = prevYr ? ((_data$prevYr2 = data[prevYr]) === null || _data$prevYr2 === void 0 || (_data$prevYr2 = _data$prevYr2[mode]) === null || _data$prevYr2 === void 0 ? void 0 : _data$prevYr2.perf) || emptyM() : null;
  var lm = lastMiOf(pD);
  var emi = lm >= 0 ? lm : new Date().getMonth();
  var color = KC[selKey] || C.accent;

  // 선택 파트 월별 데이터
  var mPerf = MONTHS.map(function (_, i) {
    var _fullRow11;
    return gNum((_fullRow11 = fullRow(pD[sk(i)])) === null || _fullRow11 === void 0 ? void 0 : _fullRow11[selKey]);
  });
  var mTgt = MONTHS.map(function (_, i) {
    var _fullRow12;
    return gNum((_fullRow12 = fullRow(tD[sk(i)])) === null || _fullRow12 === void 0 ? void 0 : _fullRow12[selKey]);
  });
  var mPrev = prevP ? MONTHS.map(function (_, i) {
    var _fullRow13;
    return gNum((_fullRow13 = fullRow(prevP[sk(i)])) === null || _fullRow13 === void 0 ? void 0 : _fullRow13[selKey]);
  }) : null;

  // 누계
  var ytdP = mPerf.slice(0, emi + 1).reduce(function (a, b) {
    return a + b;
  }, 0);
  var ytdT = mTgt.slice(0, emi + 1).reduce(function (a, b) {
    return a + b;
  }, 0);
  var annT = mTgt.reduce(function (a, b) {
    return a + b;
  }, 0);
  var ytdPrev = mPrev ? mPrev.slice(0, emi + 1).reduce(function (a, b) {
    return a + b;
  }, 0) : 0;
  var annPrevA = mPrev ? mPrev.reduce(function (a, b) {
    return a + b;
  }, 0) : 0; // 전년 연간합계

  // 월별 달성률 / 성장률
  var mAr = MONTHS.map(function (_, i) {
    return i <= emi && mTgt[i] > 0 ? parseFloat((mPerf[i] / mTgt[i] * 100).toFixed(1)) : null;
  });
  var mGr = MONTHS.map(function (_, i) {
    return i <= emi && mPrev && mPrev[i] > 0 ? parseFloat(((mPerf[i] - mPrev[i]) / mPrev[i] * 100).toFixed(1)) : null;
  });

  // 누계 달성률 / 성장률
  var cPerf = 0,
    cTgt = 0;
  var cumAr = MONTHS.map(function (_, i) {
    if (i > emi) return null;
    cPerf += mPerf[i];
    cTgt += mTgt[i];
    return cTgt > 0 ? parseFloat((cPerf / cTgt * 100).toFixed(1)) : null;
  });
  var cP = 0,
    cPv = 0;
  var cumGr = mPrev ? MONTHS.map(function (_, i) {
    if (i > emi) return null;
    cP += mPerf[i];
    cPv += mPrev[i];
    return cPv > 0 ? parseFloat(((cP - cPv) / cPv * 100).toFixed(1)) : null;
  }) : null;

  // 누계 차트 (3개년)
  var makeCumArr = function makeCumArr(d, k) {
    var s = 0;
    return MONTHS.map(function (_, i) {
      var _fullRow14;
      if (i > emi) return null;
      s += gNum((_fullRow14 = fullRow(d[sk(i)])) === null || _fullRow14 === void 0 ? void 0 : _fullRow14[k]);
      return s;
    });
  };
  var d24P = ((_data$5 = data["24"]) === null || _data$5 === void 0 || (_data$5 = _data$5[mode]) === null || _data$5 === void 0 ? void 0 : _data$5.perf) || emptyM();
  var d25P = ((_data$6 = data["25"]) === null || _data$6 === void 0 || (_data$6 = _data$6[mode]) === null || _data$6 === void 0 ? void 0 : _data$6.perf) || emptyM();

  // CE 비중 (CE 키가 있고 선택 파트가 CE가 아닐 때)
  var ceShare = selKey !== "CE" ? MONTHS.map(function (_, i) {
    var _fullRow15, _fullRow16, _fullRow17, _fullRow18, _fullRow19;
    var ce = gNum((_fullRow15 = fullRow(pD[sk(i)])) === null || _fullRow15 === void 0 ? void 0 : _fullRow15.CE);
    var hp = gNum((_fullRow16 = fullRow(pD[sk(i)])) === null || _fullRow16 === void 0 ? void 0 : _fullRow16.휴대폰);
    var v = selKey === "대외영업" ? gNum((_fullRow17 = fullRow(pD[sk(i)])) === null || _fullRow17 === void 0 ? void 0 : _fullRow17[selKey]) - hp : selKey === "B2B" ? gNum((_fullRow18 = fullRow(pD[sk(i)])) === null || _fullRow18 === void 0 ? void 0 : _fullRow18[selKey]) - hp : gNum((_fullRow19 = fullRow(pD[sk(i)])) === null || _fullRow19 === void 0 ? void 0 : _fullRow19[selKey]);
    return i <= emi && ce > 0 ? parseFloat((v / ce * 100).toFixed(1)) : null;
  }) : null;
  var avgPerf = ytdP > 0 && emi >= 0 ? Math.round(ytdP / (emi + 1)) : 0;
  var ytdAr = ytdT > 0 ? pct(ytdP, ytdT) : null;
  var ytdGr = ytdPrev > 0 ? grw(ytdP, ytdPrev) : null;
  var remT = Math.max(annT - ytdP, 0);
  var remMonths = Math.max(11 - emi, 0);
  var needPM = remMonths > 0 && remT > 0 ? Math.ceil(remT / remMonths) : 0;
  // CE 비중 누계
  var ceYtdV = selKey !== "CE" ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    var _fullRow20, _fullRow21;
    var ce = gNum((_fullRow20 = fullRow(pD[sk(i)])) === null || _fullRow20 === void 0 ? void 0 : _fullRow20.CE);
    var hp = gNum((_fullRow21 = fullRow(pD[sk(i)])) === null || _fullRow21 === void 0 ? void 0 : _fullRow21.휴대폰);
    return a + (ce > 0 ? ce : 0);
  }, 0) : 0;
  var ceShareYtd = selKey !== "CE" && ceYtdV > 0 ? (ytdP / ceYtdV * 100).toFixed(1) : null;
  var cePrevYtdV = selKey !== "CE" && mPrev ? MONTHS.slice(0, emi + 1).reduce(function (a, _, i) {
    var _fullRow22;
    var ce = gNum((_fullRow22 = fullRow(prevP === null || prevP === void 0 ? void 0 : prevP[sk(i)])) === null || _fullRow22 === void 0 ? void 0 : _fullRow22.CE);
    return a + (ce > 0 ? ce : 0);
  }, 0) : 0;
  var cePrevShareYtd = selKey !== "CE" && cePrevYtdV > 0 && ytdPrev > 0 ? (ytdPrev / cePrevYtdV * 100).toFixed(1) : null;

  // 그로스 차트 offset
  var allGrVals = [].concat(_toConsumableArray(mGr || []), _toConsumableArray(cumGr || [])).filter(function (v) {
    return v !== null;
  });
  var negMaxGr = allGrVals.length > 0 ? Math.max.apply(Math, _toConsumableArray(allGrVals.filter(function (v) {
    return v < 0;
  }).map(function (v) {
    return Math.abs(v);
  })).concat([0])) : 0;
  var offsetGr = function offsetGr(v) {
    return v !== null ? parseFloat((v + negMaxGr).toFixed(1)) : null;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.surf,
      border: "1px solid ".concat(C.b1),
      borderRadius: 10,
      padding: "10px 14px",
      display: "flex",
      gap: 12,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10,
      fontWeight: 700,
      alignSelf: "center",
      marginRight: 2
    }
  }, "\uC5F0\uB3C4"), ["24", "25", "26"].map(function (y) {
    return /*#__PURE__*/React.createElement(AnalysisBtn, {
      key: y,
      label: y + "년",
      active: yr === y,
      onClick: function onClick() {
        return setYr(y);
      },
      clr: C.blue
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: C.b1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10,
      fontWeight: 700,
      alignSelf: "center",
      marginRight: 2
    }
  }, "\uD30C\uD2B8"), ANALYSIS_KEYS.map(function (k) {
    return /*#__PURE__*/React.createElement(AnalysisBtn, {
      key: k,
      label: k,
      active: selKey === k,
      onClick: function onClick() {
        return setSel(k);
      },
      clr: KC[k]
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 180px",
      background: C.card,
      border: "1px solid ".concat(color, "40"),
      borderRadius: 14,
      padding: "12px 16px",
      borderTop: "3px solid ".concat(color),
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: color,
      fontSize: 11,
      fontWeight: 800
    }
  }, "\u25CF ", selKey, " \uB204\uACC4 \uC2E4\uC801"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, MONTHS[emi], " \uB9C8\uAC10\uAE30\uC900")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text,
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: "-0.04em"
    }
  }, ytdP > 0 ? Math.round(ytdP).toLocaleString() : "─"), ytdP > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 12
    }
  }, "\uC5B5")), ytdT > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.b1,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(gNum(ytdAr) || 0, 100), "%"),
      background: "linear-gradient(90deg,".concat(color, ",").concat(color, "aa)"),
      borderRadius: 2,
      transition: "width .6s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 4,
      marginTop: 2
    }
  }, [{
    l: "목표",
    v: ytdT > 0 ? Math.round(ytdT).toLocaleString() + "억" : "─",
    c: C.orange
  }, {
    l: "달성률",
    v: ytdAr ? Math.round(gNum(ytdAr)) + "%" : "─",
    c: ytdAr ? pctC(ytdAr) : C.muted
  }, {
    l: "월평균",
    v: avgPerf > 0 ? avgPerf.toLocaleString() + "억" : "─",
    c: C.accent
  }].map(function (_ref40) {
    var l = _ref40.l,
      v = _ref40.v,
      c = _ref40.c;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: theme === "light" ? "rgba(0,0,0,.04)" : "rgba(0,0,0,.2)",
        borderRadius: 6,
        padding: "4px 6px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 10,
        fontWeight: 700
      }
    }, v));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 180px",
      background: C.card,
      border: "1px solid ".concat(C.orange, "40"),
      borderRadius: 14,
      padding: "12px 16px",
      borderTop: "3px solid ".concat(C.orange),
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 11,
      fontWeight: 800
    }
  }, "\u25CF \uC5F0\uAC04 \uBAA9\uD45C"), needPM > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 9,
      background: C.orange + "18",
      borderRadius: 4,
      padding: "2px 6px",
      fontWeight: 700
    }
  }, "\uC6D4\uD3C9\uADE0 ", needPM, "\uC5B5 \uD544\uC694")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text,
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: "-0.04em"
    }
  }, annT > 0 ? Math.round(annT).toLocaleString() : "─"), annT > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 12
    }
  }, "\uC5B5")), annT > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.b1,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(ytdP / annT * 100, 100), "%"),
      background: "linear-gradient(90deg,".concat(C.orange, ",").concat(C.orange, "aa)"),
      borderRadius: 2,
      transition: "width .6s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 4,
      marginTop: 2
    }
  }, [{
    l: "전년대비",
    v: annPrevA > 0 ? ((annT - annPrevA) / annPrevA * 100).toFixed(1) + "%" : "─",
    c: annT >= annPrevA ? C.green : C.red
  }, {
    l: "누계 실적",
    v: ytdP > 0 ? Math.round(ytdP).toLocaleString() + "억" : "─",
    c: color
  }, {
    l: "잔여",
    v: remT > 0 ? Math.round(remT).toLocaleString() + "억" : "달성!",
    c: remT > 0 ? C.orange : C.green
  }].map(function (_ref41) {
    var l = _ref41.l,
      v = _ref41.v,
      c = _ref41.c;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: theme === "light" ? "rgba(0,0,0,.04)" : "rgba(0,0,0,.2)",
        borderRadius: 6,
        padding: "4px 6px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 10,
        fontWeight: 700
      }
    }, v));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 180px",
      background: C.card,
      border: "1px solid ".concat(ytdGr ? grwC(ytdGr) : C.muted, "40"),
      borderRadius: 14,
      padding: "12px 16px",
      borderTop: "3px solid ".concat(ytdGr ? grwC(ytdGr) : C.muted),
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ytdGr ? grwC(ytdGr) : C.muted,
      fontSize: 11,
      fontWeight: 800
    }
  }, "\u25CF \uC804\uB144\uBE44 \uC131\uC7A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: ytdGr ? grwC(ytdGr) : C.muted,
      fontSize: 24,
      fontWeight: 900
    }
  }, ytdGr ? grwT(ytdGr) : "─")), ytdPrev > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.b1,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(ytdP / ytdPrev * 100, 100), "%"),
      background: ytdGr ? "linear-gradient(90deg,".concat(grwC(ytdGr), ",").concat(grwC(ytdGr), "aa)") : "linear-gradient(90deg,".concat(C.muted, ",").concat(C.muted, "aa)"),
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 4,
      marginTop: 2
    }
  }, [{
    l: "전년 실적",
    v: ytdPrev > 0 ? Math.round(ytdPrev).toLocaleString() + "억" : "─",
    c: C.muted2
  }, {
    l: "차이",
    v: ytdP > 0 && ytdPrev > 0 ? (ytdP - ytdPrev >= 0 ? "+" : "") + Math.round(ytdP - ytdPrev) + "억" : "─",
    c: ytdP >= ytdPrev ? C.green : C.red
  }, {
    l: "현재",
    v: ytdP > 0 ? Math.round(ytdP).toLocaleString() + "억" : "─",
    c: color
  }].map(function (_ref42) {
    var l = _ref42.l,
      v = _ref42.v,
      c = _ref42.c;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: theme === "light" ? "rgba(0,0,0,.04)" : "rgba(0,0,0,.2)",
        borderRadius: 6,
        padding: "4px 6px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 10,
        fontWeight: 700
      }
    }, v));
  }))), selKey !== "CE" && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 180px",
      background: C.card,
      border: "1px solid ".concat(KC.CE, "40"),
      borderRadius: 14,
      padding: "12px 16px",
      borderTop: "3px solid ".concat(KC.CE),
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: KC.CE,
      fontSize: 11,
      fontWeight: 800
    }
  }, "\u25CF CE \uBE44\uC911"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: KC.CE,
      fontSize: 24,
      fontWeight: 900
    }
  }, ceShareYtd ? ceShareYtd + "%" : "─")), ceShareYtd && cePrevShareYtd && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.b1,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(gNum(ceShareYtd), 100), "%"),
      background: "linear-gradient(90deg,".concat(KC.CE, ",").concat(KC.CE, "aa)"),
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 4,
      marginTop: 2
    }
  }, [{
    l: "CE 대비 비중",
    v: ceShareYtd ? ceShareYtd + "%" : "─",
    c: KC.CE
  }, {
    l: "전년",
    v: cePrevShareYtd ? cePrevShareYtd + "%" : "─",
    c: C.muted2
  }, {
    l: "변화",
    v: ceShareYtd && cePrevShareYtd ? (gNum(ceShareYtd) - gNum(cePrevShareYtd) >= 0 ? "+" : "") + (gNum(ceShareYtd) - gNum(cePrevShareYtd)).toFixed(1) + "p" : "─",
    c: ceShareYtd && cePrevShareYtd ? gNum(ceShareYtd) >= gNum(cePrevShareYtd) ? C.green : C.red : C.muted
  }].map(function (_ref43) {
    var l = _ref43.l,
      v = _ref43.v,
      c = _ref43.c;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: theme === "light" ? "rgba(0,0,0,.04)" : "rgba(0,0,0,.2)",
        borderRadius: 6,
        padding: "4px 6px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 10,
        fontWeight: 700
      }
    }, v));
  }))), mPrev && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 180px",
      background: C.card,
      border: "1px solid ".concat(C.muted, "30"),
      borderRadius: 14,
      padding: "12px 16px",
      borderTop: "3px solid ".concat(C.muted),
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 11,
      fontWeight: 800
    }
  }, "\u25CF \uB204\uACC4 \uC804\uB144"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, "\uC804\uB144 \uAE30\uC900")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.text,
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: "-0.04em"
    }
  }, ytdPrev > 0 ? Math.round(ytdPrev).toLocaleString() : "─"), ytdPrev > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 12
    }
  }, "\uC5B5")), annPrevA > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.b1,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(Math.min(ytdPrev / annPrevA * 100, 100), "%"),
      background: "linear-gradient(90deg,".concat(C.muted, ",").concat(C.muted, "aa)"),
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 4,
      marginTop: 2
    }
  }, [{
    l: "월평균",
    v: ytdPrev > 0 ? Math.round(ytdPrev / (emi + 1)).toLocaleString() + "억" : "─",
    c: C.muted2
  }, {
    l: "전년비",
    v: ytdPrev > 0 && ytdP > 0 ? (ytdP / ytdPrev * 100).toFixed(1) + "%" : "─",
    c: ytdP >= ytdPrev ? C.green : C.red
  }].map(function (_ref44) {
    var l = _ref44.l,
      v = _ref44.v,
      c = _ref44.c;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: theme === "light" ? "rgba(0,0,0,.04)" : "rgba(0,0,0,.2)",
        borderRadius: 6,
        padding: "4px 6px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 8,
        marginBottom: 2
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        color: c,
        fontSize: 10,
        fontWeight: 700
      }
    }, v));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 10,
      padding: "12px 14px",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 800,
      fontSize: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: color
    }
  }, selKey), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontWeight: 400,
      fontSize: 11,
      marginLeft: 8
    }
  }, "\uC6D4\uBCC4 \uC0C1\uC138 \u2014 ", yr, "\uB144 \xB7 ", mode, " \xB7 \uC5B5\uC6D0")), /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: "collapse",
      minWidth: 800,
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "2px solid ".concat(C.b1)
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 10px",
      color: C.muted,
      fontWeight: 700,
      fontSize: 10,
      position: "sticky",
      left: 0,
      background: C.card2,
      minWidth: 72
    }
  }, "\uD56D\uBAA9"), MONTHS.map(function (m, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: m,
      style: {
        padding: "5px 5px",
        textAlign: "right",
        color: i <= emi ? C.muted2 : C.muted,
        fontWeight: 600,
        fontSize: 10,
        borderBottom: i === emi ? "2px solid ".concat(color, "60") : "none",
        minWidth: 40
      }
    }, m, i === emi && /*#__PURE__*/React.createElement("span", {
      style: {
        color: color,
        fontSize: 7,
        display: "block"
      }
    }, "\u25B2"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 8px",
      textAlign: "right",
      color: C.accent,
      fontWeight: 700,
      fontSize: 10,
      minWidth: 50
    }
  }, "\uB204\uACC4"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.card + "66"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 10px",
      color: color,
      fontWeight: 700,
      fontSize: 11,
      position: "sticky",
      left: 0,
      background: C.card
    }
  }, "\uC2E4\uC801"), mPerf.map(function (v, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: "4px 5px",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: i <= emi ? C.text : C.muted,
        fontSize: 11,
        fontWeight: i <= emi ? 700 : 400
      }
    }, i <= emi && v > 0 ? Math.round(v).toLocaleString() : i <= emi ? "─" : "·"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 8px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: color,
      fontWeight: 800,
      fontSize: 12
    }
  }, ytdP > 0 ? Math.round(ytdP).toLocaleString() + "억" : "─"))), annT > 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 10px",
      color: C.orange,
      fontWeight: 600,
      fontSize: 10,
      position: "sticky",
      left: 0,
      background: C.card2
    }
  }, "\uBAA9\uD45C"), mTgt.map(function (v, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: "4px 5px",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.orange,
        fontSize: 10,
        opacity: .8
      }
    }, v > 0 ? Math.round(v).toLocaleString() : "─"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 8px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontWeight: 700,
      fontSize: 11
    }
  }, ytdT > 0 ? Math.round(ytdT).toLocaleString() + "억" : "─"))), annT > 0 && /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "1px solid ".concat(C.b1, "30")
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 10px",
      color: C.muted,
      fontSize: 10,
      position: "sticky",
      left: 0,
      background: C.card2
    }
  }, "\uB2EC\uC131\uB960"), mAr.map(function (v, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: "3px 5px",
        textAlign: "right"
      }
    }, v !== null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: pctC(v),
        fontSize: 10,
        fontWeight: 700
      }
    }, Math.round(v), "%") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "\u2500"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 8px",
      textAlign: "right"
    }
  }, ytdAr ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: pctC(ytdAr),
      fontWeight: 800,
      fontSize: 11
    }
  }, Math.round(gNum(ytdAr)), "%") : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted
    }
  }, "\u2500"))), mPrev && /*#__PURE__*/React.createElement("tr", {
    style: {
      background: C.card + "22"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 10px",
      color: C.muted2,
      fontWeight: 500,
      fontSize: 10,
      position: "sticky",
      left: 0,
      background: C.card2
    }
  }, prevYr, "\uB144\uC2E4\uC801"), mPrev.map(function (v, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: "4px 5px",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted2,
        fontSize: 10
      }
    }, i <= emi && v > 0 ? Math.round(v).toLocaleString() : "─"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "4px 8px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted2,
      fontSize: 11
    }
  }, annPrevA > 0 ? Math.round(annPrevA).toLocaleString() + "억" : "─"))), mGr && /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "1px solid ".concat(C.b1, "40")
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 10px",
      color: C.muted,
      fontSize: 10,
      position: "sticky",
      left: 0,
      background: C.card2
    }
  }, "\uC804\uB144\uBE44"), mGr.map(function (v, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: "3px 5px",
        textAlign: "right"
      }
    }, v !== null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: grwC(String(v)),
        fontSize: 10,
        fontWeight: 600
      }
    }, grwT(String(v))) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "\u2500"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 8px",
      textAlign: "right"
    }
  }, ytdGr ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: grwC(ytdGr),
      fontWeight: 700,
      fontSize: 11
    }
  }, grwT(ytdGr)) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted
    }
  }, "\u2500"))), ceShare && selKey !== "CE" && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 10px",
      color: KC.CE,
      fontSize: 10,
      fontWeight: 600,
      position: "sticky",
      left: 0,
      background: C.card2
    }
  }, "CE\uBE44\uC911"), ceShare.map(function (v, i) {
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: {
        padding: "3px 5px",
        textAlign: "right"
      }
    }, v !== null ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: KC.CE,
        fontSize: 9,
        fontWeight: 600
      }
    }, v.toFixed(1), "%") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9
      }
    }, "\u2500"));
  }), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "3px 8px",
      textAlign: "right"
    }
  }, function () {
    var ceYtd = sumR(pD, "CE", 0, emi);
    var hp = sumR(pD, "휴대폰", 0, emi);
    var vYtd = selKey === "대외영업" ? sumR(pD, selKey, 0, emi) - hp : selKey === "B2B" ? sumR(pD, selKey, 0, emi) - hp : sumR(pD, selKey, 0, emi);
    var s = ceYtd > 0 ? (vYtd / ceYtd * 100).toFixed(1) : null;
    // 전년 CE비중
    var ceYtdPrev = prevP ? sumR(prevP, "CE", 0, emi) : 0;
    var vPrev = prevP && (selKey === "대외영업" ? sumR(prevP, selKey, 0, emi) - sumR(prevP, "휴대폰", 0, emi) : selKey === "B2B" ? sumR(prevP, selKey, 0, emi) - sumR(prevP, "휴대폰", 0, emi) : sumR(prevP, selKey, 0, emi));
    var sPrev = ceYtdPrev > 0 ? (vPrev / ceYtdPrev * 100).toFixed(1) : null;
    return s ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: KC.CE,
        fontWeight: 700,
        fontSize: 11
      }
    }, s, "%"), sPrev && /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 9,
        marginLeft: 4
      }
    }, "\uC804\uB144", sPrev, "%")) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted
      }
    }, "\u2500");
  }()))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(color, "44"),
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 700,
      fontSize: 12,
      marginBottom: 8
    }
  }, "\uC6D4\uBCC4 \uC2E4\uC801 \uCD94\uC774", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9,
      fontWeight: 400,
      marginLeft: 6
    }
  }, "\uB2F9\uC6D4 \uC2E4\uC801 vs \uBAA9\uD45C vs ", prevYr || "전년", "\uB144")), mPerf.some(function (v, i) {
    return i <= emi && v > 0;
  }) ? /*#__PURE__*/React.createElement(RichLineChart, {
    h: 120,
    series: [].concat(_toConsumableArray(mPrev ? [{
      data: mPrev.map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: "#a78bfa",
      op: .7,
      tooltipLabel: "".concat(prevYr, "\uB144")
    }] : []), [{
      data: mTgt.map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: C.orange,
      dash: true,
      op: .7,
      tooltipLabel: "목표"
    }, {
      data: mPerf.map(function (v, i) {
        return i <= emi ? v : null;
      }),
      color: color,
      bold: true,
      fill: true,
      showLabels: true,
      tooltipLabel: "".concat(yr, "\uB144")
    }]),
    labels: MONTHS
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, "\uB370\uC774\uD130 \uC5C6\uC74C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.b1),
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 700,
      fontSize: 12,
      marginBottom: 8
    }
  }, "\uB204\uACC4 \uC2E4\uC801 \uCD94\uC774", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9,
      fontWeight: 400,
      marginLeft: 6
    }
  }, "3\uAC1C\uB144 \uBE44\uAD50")), function () {
    var c26 = makeCumArr(pD, selKey);
    var c25 = makeCumArr(d25P, selKey);
    var c24 = makeCumArr(d24P, selKey);
    return c26.some(function (v) {
      return v !== null;
    }) ? /*#__PURE__*/React.createElement(RichLineChart, {
      h: 120,
      series: [{
        data: c24,
        color: "#fbbf24",
        op: .7,
        medium: true,
        tooltipLabel: "24년"
      }, {
        data: c25,
        color: "#a78bfa",
        op: .85,
        medium: true,
        tooltipLabel: "25년"
      }, {
        data: c26,
        color: color,
        bold: true,
        fill: true,
        showLabels: true,
        tooltipLabel: "26년"
      }],
      labels: MONTHS
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.muted,
        fontSize: 11
      }
    }, "\uB370\uC774\uD130 \uC5C6\uC74C"));
  }()), annT > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.teal, "44"),
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 700,
      fontSize: 12,
      marginBottom: 8
    }
  }, "\uB2EC\uC131\uB960 \uCD94\uC774", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9,
      fontWeight: 400,
      marginLeft: 6
    }
  }, "\uB2F9\uC6D4 \uBC0F \uB204\uACC4 \uB2EC\uC131\uB960")), mAr.some(function (v) {
    return v !== null;
  }) ? /*#__PURE__*/React.createElement(RichLineChart, {
    h: 110,
    pctMode: true,
    series: [{
      data: MONTHS.map(function (_, i) {
        return i <= emi ? 100 : null;
      }),
      color: C.green,
      dash: true,
      op: .4,
      tooltipLabel: "100%기준",
      tooltipUnit: "%"
    }, {
      data: cumAr,
      color: C.orange,
      medium: true,
      op: .85,
      showLabels: true,
      tooltipLabel: "누계달성률",
      tooltipUnit: "%"
    }, {
      data: mAr,
      color: C.teal,
      bold: true,
      fill: true,
      tooltipLabel: "당월달성률",
      tooltipUnit: "%"
    }],
    labels: MONTHS
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, "\uBAA9\uD45C \uB370\uC774\uD130 \uC5C6\uC74C"))), mPrev && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "2px solid ".concat(C.orange, "44"),
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 700,
      fontSize: 12,
      marginBottom: 8
    }
  }, "\uC804\uB144\uBE44 \uC131\uC7A5\uB960", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9,
      fontWeight: 400,
      marginLeft: 6
    }
  }, "\uB2F9\uC6D4 \uBC0F \uB204\uACC4 \uC131\uC7A5\uB960")), mGr && mGr.some(function (v) {
    return v !== null;
  }) ? /*#__PURE__*/React.createElement(RichLineChart, {
    h: 110,
    grMode: true,
    zeroOffset: negMaxGr,
    series: [{
      data: MONTHS.map(function (_, i) {
        return i <= emi ? offsetGr(0) : null;
      }),
      color: "rgba(255,255,255,.2)",
      dash: true,
      op: .5,
      tooltipLabel: "0%",
      tooltipUnit: "%"
    }].concat(_toConsumableArray(cumGr ? [{
      data: cumGr.map(offsetGr),
      color: "#a78bfa",
      medium: true,
      op: .85,
      tooltipLabel: "누계성장률",
      tooltipUnit: "%",
      grOffset: negMaxGr
    }] : []), [{
      data: mGr.map(offsetGr),
      color: C.orange,
      bold: true,
      fill: true,
      showLabels: true,
      tooltipLabel: "당월성장률",
      tooltipUnit: "%",
      grOffset: negMaxGr
    }]),
    labels: MONTHS
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, "\uC804\uB144 \uB370\uC774\uD130 \uC5C6\uC74C")))));
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
function ImportModal(_ref45) {
  var onClose = _ref45.onClose,
    currentData = _ref45.currentData,
    onMerge = _ref45.onMerge;
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    jsonText = _useState28[0],
    setJsonText = _useState28[1];
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    preview = _useState30[0],
    setPreview = _useState30[1]; // {added, updated, total}
  var _useState31 = useState("edit"),
    _useState32 = _slicedToArray(_useState31, 2),
    step = _useState32[0],
    setStep = _useState32[1]; // edit | confirm | done
  var _useState33 = useState(""),
    _useState34 = _slicedToArray(_useState33, 2),
    error = _useState34[0],
    setError = _useState34[1];

  /* ── JSON 파싱 & 미리보기 ── */
  var parseAndPreview = function parseAndPreview() {
    setError("");
    var parsed;
    try {
      parsed = JSON.parse(jsonText.trim());
    } catch (e) {
      setError("JSON 형식 오류: " + e.message);
      return;
    }

    // 통계 계산 (신규 vs 덮어쓰기)
    var added = 0,
      updated = 0;
    var _walk = function walk(newObj, curObj) {
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (_typeof(newObj) !== "object" || newObj === null) return;
      Object.entries(newObj).forEach(function (_ref46) {
        var _ref47 = _slicedToArray(_ref46, 2),
          k = _ref47[0],
          v = _ref47[1];
        var cur = curObj === null || curObj === void 0 ? void 0 : curObj[k];
        if (_typeof(v) === "object" && v !== null) {
          _walk(v, cur, [].concat(_toConsumableArray(path), [k]));
        } else {
          // 리프 노드 (실제 수치)
          var n = Number(v);
          if (isNaN(n)) return;
          if (cur === undefined || cur === null || cur === "") {
            added++;
          } else if (String(cur) !== String(v)) {
            updated++;
          }
        }
      });
    };
    _walk(parsed, currentData);
    setPreview({
      parsed: parsed,
      added: added,
      updated: updated
    });
    setStep("confirm");
  };

  /* ── 딥 머지 실행 ── */
  var _deepMerge = function deepMerge(base, incoming) {
    if (_typeof(incoming) !== "object" || incoming === null) return incoming;
    var result = _objectSpread({}, base);
    Object.entries(incoming).forEach(function (_ref48) {
      var _ref49 = _slicedToArray(_ref48, 2),
        k = _ref49[0],
        v = _ref49[1];
      if (_typeof(v) === "object" && v !== null && !Array.isArray(v)) {
        result[k] = _deepMerge((base === null || base === void 0 ? void 0 : base[k]) || {}, v);
      } else {
        // 숫자 값만 적용 (빈 문자열·null 등 무시)
        var n = Number(v);
        if (!isNaN(n) && v !== "" && v !== null) result[k] = v;
      }
    });
    return result;
  };
  var doMerge = function doMerge() {
    if (!preview) return;
    var merged = _deepMerge(currentData, preview.parsed);
    onMerge(merged);
    setStep("done");
  };

  /* ── 샘플 JSON 생성 ── */
  var insertSample = function insertSample() {
    var sample = {
      "26": {
        "판매": {
          "perf": {
            "0": {
              "CE": 100,
              "혼수": 10,
              "입주": 30,
              "이사": 5,
              "SMB": 2,
              "농협": 2,
              "거주중": 1,
              "휴대폰": 2,
              "SAC": 1
            },
            "1": {
              "CE": 100,
              "혼수": 10,
              "입주": 30,
              "이사": 5,
              "SMB": 2,
              "농협": 2,
              "거주중": 1,
              "휴대폰": 2,
              "SAC": 1
            }
          },
          "target": {
            "0": {
              "CE": 120,
              "혼수": 20,
              "입주": 40,
              "이사": 10,
              "SMB": 3,
              "농협": 3,
              "거주중": 2,
              "휴대폰": 3,
              "SAC": 2
            }
          }
        }
      }
    };
    setJsonText(JSON.stringify(sample, null, 2));
    setError("");
  };
  var BADGE = function BADGE(n, c, lbl) {
    return n > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        background: c + "18",
        color: c,
        fontSize: 11,
        fontWeight: 700,
        borderRadius: 6,
        padding: "3px 10px",
        border: "1px solid ".concat(c, "30")
      }
    }, lbl, " ", n, "\uAC74");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9000,
      background: "rgba(0,0,0,.78)",
      backdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    onClick: function onClick(e) {
      return e.target === e.currentTarget && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid rgba(255,255,255,.1)",
      borderRadius: 20,
      padding: 28,
      width: "100%",
      maxWidth: 580,
      boxShadow: "0 24px 60px rgba(0,0,0,.7)",
      maxHeight: "90vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 900,
      fontSize: 16
    }
  }, "\uD83D\uDCE5 JSON \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11,
      marginTop: 3,
      lineHeight: 1.5
    }
  }, "\uC2E0\uADDC \u2192 \uCD94\uAC00 \xA0\xB7\xA0 \uC911\uBCF5 \u2192 \uB36E\uC5B4\uC4F0\uAE30 \xA0\xB7\xA0 \uC5C6\uB294 \uB370\uC774\uD130 \u2192 \uAE30\uC874 \uC720\uC9C0")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: C.card2,
      border: "none",
      borderRadius: 8,
      color: C.muted,
      fontSize: 18,
      cursor: "pointer",
      width: 32,
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, "\xD7")), step === "edit" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(124,131,245,.08)",
      border: "1px solid ".concat(C.accent, "30"),
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 12,
      fontSize: 10,
      color: C.muted2,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.accent,
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\uD83D\uDCCC JSON \uAD6C\uC870 \uC548\uB0B4"), /*#__PURE__*/React.createElement("code", {
    style: {
      color: C.muted2,
      fontFamily: "monospace",
      fontSize: 10
    }
  }, "{", " \"26\": ", "{", " \"\uD310\uB9E4\": ", "{", " \"perf\": ", "{", " \"0\": ", "{", " \"CE\":100, \"\uD63C\uC218\":10 ", "}", " ", "}", " ", "}", " ", "}", " ", "}"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.teal
    }
  }, "\uC6D4 \uD0A4"), ": 0=1\uC6D4, 1=2\uC6D4 ... 11=12\uC6D4 \xA0|\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange
    }
  }, "type"), ": perf(\uC2E4\uC801) \uB610\uB294 target(\uBAA9\uD45C)")), /*#__PURE__*/React.createElement("textarea", {
    value: jsonText,
    onChange: function onChange(e) {
      setJsonText(e.target.value);
      setError("");
    },
    placeholder: "{\"26\":{\"\uD310\uB9E4\":{\"perf\":{\"0\":{\"CE\":100}}}}}",
    style: {
      width: "100%",
      height: 220,
      background: C.bg,
      border: "1px solid ".concat(error ? C.red : C.b1),
      borderRadius: 10,
      padding: 12,
      color: C.text,
      fontSize: 11,
      fontFamily: "monospace",
      outline: "none",
      resize: "vertical",
      lineHeight: 1.6,
      boxSizing: "border-box"
    },
    onFocus: function onFocus(e) {
      e.target.style.borderColor = C.accent;
    },
    onBlur: function onBlur(e) {
      e.target.style.borderColor = error ? C.red : C.b1;
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.red,
      fontSize: 11,
      marginTop: 6,
      padding: "6px 10px",
      background: C.red + "10",
      borderRadius: 6
    }
  }, "\u26A0 ", error), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: insertSample,
    style: {
      padding: "8px 14px",
      borderRadius: 8,
      border: "1px solid ".concat(C.b1),
      background: "transparent",
      color: C.muted2,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 11
    }
  }, "\uC0D8\uD50C JSON \uBD88\uB7EC\uC624\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: "8px 16px",
      borderRadius: 8,
      border: "1px solid ".concat(C.b1),
      background: "transparent",
      color: C.muted,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 12
    }
  }, "\uCDE8\uC18C"), /*#__PURE__*/React.createElement("button", {
    onClick: parseAndPreview,
    disabled: !jsonText.trim(),
    style: {
      padding: "8px 20px",
      borderRadius: 8,
      border: "none",
      background: jsonText.trim() ? "linear-gradient(135deg,".concat(C.accent, ",").concat(C.blue, ")") : C.b1,
      color: jsonText.trim() ? "#fff" : C.muted,
      cursor: jsonText.trim() ? "pointer" : "default",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 800
    }
  }, "\uBBF8\uB9AC\uBCF4\uAE30 \u2192"))), step === "confirm" && preview && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.text,
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 10
    }
  }, "\uC801\uC6A9 \uB0B4\uC5ED \uD655\uC778"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, BADGE(preview.added, C.green, "➕ 신규"), BADGE(preview.updated, C.orange, "✏️ 덮어쓰기"), preview.added === 0 && preview.updated === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 11
    }
  }, "\uBCC0\uACBD\uC0AC\uD56D \uC5C6\uC74C")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      borderRadius: 10,
      padding: 12,
      border: "1px solid ".concat(C.b1),
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\uC801\uC6A9 \uB300\uC0C1"), Object.entries(preview.parsed).map(function (_ref50) {
    var _ref51 = _slicedToArray(_ref50, 2),
      yr = _ref51[0],
      modes = _ref51[1];
    return /*#__PURE__*/React.createElement("div", {
      key: yr,
      style: {
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.accent,
        fontWeight: 700
      }
    }, yr, "\uB144"), Object.entries(modes).map(function (_ref52) {
      var _ref53 = _slicedToArray(_ref52, 2),
        m = _ref53[0],
        types = _ref53[1];
      return /*#__PURE__*/React.createElement("span", {
        key: m,
        style: {
          marginLeft: 8,
          color: C.muted2
        }
      }, m, " (", Object.keys(types).join(", "), ")");
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "10px 14px",
      background: C.green + "08",
      border: "1px solid ".concat(C.green, "30"),
      borderRadius: 8,
      fontSize: 11,
      color: C.muted2,
      lineHeight: 1.6
    }
  }, "\u2705 \uAE30\uC874 \uB370\uC774\uD130\uB294 \uC720\uC9C0\uB429\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), "JSON\uC5D0 \uC5C6\uB294 \uD56D\uBAA9\xB7\uC6D4\uC740 \uD604\uC7AC \uAC12 \uADF8\uB300\uB85C \uBCF4\uC874\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStep("edit");
    },
    style: {
      flex: 1,
      padding: "10px",
      borderRadius: 8,
      border: "1px solid ".concat(C.b1),
      background: "transparent",
      color: C.muted2,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 12
    }
  }, "\u2190 \uB2E4\uC2DC \uD3B8\uC9D1"), /*#__PURE__*/React.createElement("button", {
    onClick: doMerge,
    style: {
      flex: 2,
      padding: "10px",
      borderRadius: 8,
      border: "none",
      background: "linear-gradient(135deg,".concat(C.green, ",").concat(C.teal, ")"),
      color: "#fff",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: 900
    }
  }, "\u2705 \uBCD1\uD569 \uC801\uC6A9 \uD6C4 \uC800\uC7A5"))), step === "done" && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 12
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.green,
      fontWeight: 800,
      fontSize: 15,
      marginBottom: 6
    }
  }, "\uBCD1\uD569 \uC644\uB8CC!"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 12,
      marginBottom: 8
    }
  }, "\uB370\uC774\uD130\uAC00 \uC801\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange
    }
  }, "\uD83D\uDCBE \uC800\uC7A5 \uBC84\uD2BC\uC744 \uB20C\uB7EC Firebase\uC5D0 \uC800\uC7A5\uD558\uC138\uC694.")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginTop: 16,
      padding: "10px 32px",
      borderRadius: 8,
      border: "none",
      background: C.green + "22",
      color: C.green,
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: 700
    }
  }, "\uB2EB\uAE30"))));
}
function ReportModal(_ref54) {
  var onClose = _ref54.onClose,
    mode = _ref54.mode,
    tab = _ref54.tab;
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    msg = _useState36[0],
    setMsg = _useState36[1];
  var fileRef = useRef(null);
  var getLabel = function getLabel() {
    if (tab === "dashboard") return "대시보드";
    if (tab === "analysis") return "실적분석";
    return "실적입력";
  };
  var downloadExcelImg = /*#__PURE__*/function () {
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var el, canvas, wb, ws, a, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setMsg("⏳ 화면 캡처 중...");
            onClose();
            _context5.n = 1;
            return new Promise(function (r) {
              return setTimeout(r, 400);
            });
          case 1:
            _context5.p = 1;
            el = document.getElementById("report-content");
            _context5.n = 2;
            return window.html2canvas(el, {
              scale: 2,
              useCORS: true,
              backgroundColor: C.bg
            });
          case 2:
            canvas = _context5.v;
            wb = XLSX.utils.book_new();
            ws = XLSX.utils.aoa_to_sheet([["충청영업팀 실적 레포트"]]);
            XLSX.utils.book_append_sheet(wb, ws, "레포트");
            // 이미지 삽입은 xlsx 기본 미지원 → 이미지 직접 다운로드
            a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "\uCDA9\uCCAD_\uB808\uD3EC\uD2B8_".concat(mode, "_").concat(new Date().toISOString().slice(0, 10), ".png");
            a.click();
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            alert("캡처 오류: " + _t4.message);
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function downloadExcelImg() {
      return _ref55.apply(this, arguments);
    };
  }();
  var downloadExcelData = /*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var reportData, wb, months, keys, calcVal, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return loadXLSX();
          case 1:
            reportData = window.__reportData || {};
            wb = XLSX.utils.book_new();
            months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
            keys = ["CE", "대외영업", "혼수", "뉴홈", "입주", "이사", "SAC", "거주중", "B2B", "SMB", "농협", "휴대폰"];
            calcVal = function calcVal(m, k) {
              if (k === "대외영업") return ["혼수", "입주", "이사", "SAC", "거주중", "SMB", "농협", "휴대폰"].reduce(function (s, kk) {
                return s + (parseFloat(m[kk]) || 0);
              }, 0);
              if (k === "뉴홈") return (parseFloat(m.입주) || 0) + (parseFloat(m.이사) || 0);
              if (k === "B2B") return (parseFloat(m.SMB) || 0) + (parseFloat(m.농협) || 0) + (parseFloat(m.휴대폰) || 0);
              return parseFloat(m[k]) || 0;
            };
            ["26", "25", "24"].forEach(function (yr) {
              [mode].forEach(function (md) {
                var _reportData$yr, _reportData$yr2;
                var pD = ((_reportData$yr = reportData[yr]) === null || _reportData$yr === void 0 || (_reportData$yr = _reportData$yr[md]) === null || _reportData$yr === void 0 ? void 0 : _reportData$yr.perf) || {};
                var tD = ((_reportData$yr2 = reportData[yr]) === null || _reportData$yr2 === void 0 || (_reportData$yr2 = _reportData$yr2[md]) === null || _reportData$yr2 === void 0 ? void 0 : _reportData$yr2.target) || {};
                var rows = [["항목"].concat(months, ["연간합계"])];
                rows.push(["▶ 실적"].concat(_toConsumableArray(Array(13).fill(""))));
                keys.forEach(function (k) {
                  var vals = months.map(function (_, i) {
                    return calcVal(pD[String(i)] || {}, k);
                  });
                  rows.push([k].concat(_toConsumableArray(vals), [vals.reduce(function (a, b) {
                    return a + b;
                  }, 0)]));
                });
                if (yr !== "24") {
                  rows.push([""]);
                  rows.push(["▶ 목표"].concat(_toConsumableArray(Array(13).fill(""))));
                  keys.forEach(function (k) {
                    var vals = months.map(function (_, i) {
                      return calcVal(tD[String(i)] || {}, k);
                    });
                    rows.push([k].concat(_toConsumableArray(vals), [vals.reduce(function (a, b) {
                      return a + b;
                    }, 0)]));
                  });
                }
                XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rows), "".concat(yr, "\uB144_").concat(md));
              });
            });
            XLSX.writeFile(wb, "\uCDA9\uCCAD_\uC2E4\uC801\uB370\uC774\uD130_".concat(mode, "_").concat(new Date().toISOString().slice(0, 10), ".xlsx"));
            setMsg("✅ 엑셀 저장 완료");
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t5 = _context6.v;
            setMsg("❌ 오류: " + _t5.message);
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return function downloadExcelData() {
      return _ref56.apply(this, arguments);
    };
  }();
  var BtnRow = function BtnRow(_ref57) {
    var icon = _ref57.icon,
      label = _ref57.label,
      desc = _ref57.desc,
      onClick = _ref57.onClick,
      c = _ref57.c,
      badge = _ref57.badge;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        padding: "14px 16px",
        borderRadius: 9,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "inherit",
        border: "1px solid ".concat(c, "40"),
        background: c + "0d",
        marginBottom: 8,
        transition: "background .15s"
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = c + "22";
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = c + "0d";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        flexShrink: 0
      }
    }, icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.text,
        fontWeight: 700,
        fontSize: 13
      }
    }, label), badge && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: 700,
        padding: "2px 6px",
        borderRadius: 3,
        background: c + "22",
        color: c,
        border: "1px solid ".concat(c, "40")
      }
    }, badge)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: C.muted,
        fontSize: 11,
        marginTop: 3,
        whiteSpace: "pre-line"
      }
    }, desc)));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
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
      width: "min(460px,92vw)",
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 15,
      color: C.text
    }
  }, "\uD83D\uDDA8\uFE0F \uB808\uD3EC\uD2B8 \uCD9C\uB825"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.muted,
      fontSize: 11,
      marginTop: 2
    }
  }, mode, " \xB7 ", getLabel(), " \uD654\uBA74 \uAE30\uC900")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "transparent",
      border: "none",
      color: C.muted,
      cursor: "pointer",
      fontSize: 18
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDDBC",
    label: "\uC774\uBBF8\uC9C0 \uC800\uC7A5 (PNG)",
    badge: "\uC2DC\uAC01 \uB3D9\uC77C",
    c: C.accent,
    desc: "현재 화면 캡처 후 PNG로 저장",
    onClick: downloadExcelImg
  }), /*#__PURE__*/React.createElement(BtnRow, {
    icon: "\uD83D\uDCCA",
    label: "\uC5D1\uC140 (\uB370\uC774\uD130)",
    badge: "\uD3B8\uC9D1 \uAC00\uB2A5",
    c: C.orange,
    desc: "실적·목표 수치 테이블\n데이터 편집 가능",
    onClick: downloadExcelData
  }), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "10px 14px",
      borderRadius: 8,
      background: msg.startsWith("❌") ? "rgba(240,112,112,.12)" : "rgba(45,212,136,.12)",
      color: msg.startsWith("❌") ? C.red : C.green,
      fontSize: 12,
      fontWeight: 600
    }
  }, msg))));
}
function App() {
  var initTab = function () {
    var h = window.location.hash.replace("#", "");
    return ["analysis", "input", "dashboard"].includes(h) ? h : "dashboard";
  }();
  var _useState37 = useState(initTab),
    _useState38 = _slicedToArray(_useState37, 2),
    tab = _useState38[0],
    setTab = _useState38[1];
  var _useState39 = useState("매출"),
    _useState40 = _slicedToArray(_useState39, 2),
    mode = _useState40[0],
    setMode = _useState40[1];
  var _useState41 = useState(initData),
    _useState42 = _slicedToArray(_useState41, 2),
    data = _useState42[0],
    setData = _useState42[1];
  var _useState43 = useState("idle"),
    _useState44 = _slicedToArray(_useState43, 2),
    saveState = _useState44[0],
    setSaveState = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    hasUnsaved = _useState46[0],
    setHasUnsaved = _useState46[1];
  var _useState47 = useState("연결중..."),
    _useState48 = _slicedToArray(_useState47, 2),
    dbStatus = _useState48[0],
    setDbStatus = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    showReport = _useState50[0],
    setShowReport = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    showImport = _useState52[0],
    setShowImport = _useState52[1];
  var _useState53 = useState(false),
    _useState54 = _slicedToArray(_useState53, 2),
    showBackupMain = _useState54[0],
    setShowBackupMain = _useState54[1];
  var _useState55 = useState(function () {
      return sessionStorage.getItem(TGT_UNLOCK_KEY) === "1";
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    isTargetUnlocked = _useState56[0],
    setIsTargetUnlocked = _useState56[1];
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    showTgtPwModal = _useState58[0],
    setShowTgtPwModal = _useState58[1];
  // ── 테마
  var _useState59 = useState(_initTheme),
    _useState60 = _slicedToArray(_useState59, 2),
    theme = _useState60[0],
    setTheme = _useState60[1];
  var _useState61 = useState(0),
    _useState62 = _slicedToArray(_useState61, 2),
    themeKey = _useState62[0],
    setThemeKey = _useState62[1];
  var toggleTheme = useCallback(function () {
    var next = theme === 'dark' ? 'light' : 'dark';
    Object.assign(C, next === 'light' ? COLORS_LIGHT : COLORS_DARK);
    Object.assign(KC, next === 'light' ? KC_LIGHT : KC_DARK);
    localStorage.setItem(THEME_KEY, next);
    document.body.style.background = C.bg;
    document.body.style.color = C.text;
    applyThemeCSS(next);
    setTheme(next);
    setThemeKey(function (k) {
      return k + 1;
    });
  }, [theme]);
  var _useState63 = useState(function () {
      var saved = parseInt(localStorage.getItem(FONT_SIZE_KEY));
      return saved >= 50 && saved <= 200 ? saved : 100;
    }),
    _useState64 = _slicedToArray(_useState63, 2),
    globalZoom = _useState64[0],
    setGlobalZoom = _useState64[1];
  // 테마 초기 CSS 적용
  useEffect(function () {
    applyThemeCSS(_initTheme);
  }, []);
  // 양방향 zoom (center 기준)
  useEffect(function () {
    var el = document.getElementById('app-content');
    if (!el) return;
    var safeZoom = Math.max(50, Math.min(200, globalZoom || 100));
    var ratio = safeZoom / 100;
    if (ratio === 1) {
      // 100%: 모든 transform 제거 → 기본 레이아웃 그대로
      el.style.transform = '';
      el.style.width = '';
      el.style.position = '';
      el.style.left = '';
      el.style.margin = '';
    } else {
      var vw = window.innerWidth;
      el.style.transformOrigin = 'top left';
      el.style.transform = "scale(".concat(ratio, ")");
      el.style.width = "".concat(vw, "px");
      el.style.position = 'relative';
      el.style.left = "".concat((vw - vw * ratio) / 2, "px");
      el.style.margin = '0';
    }
    localStorage.setItem(FONT_SIZE_KEY, String(safeZoom));
  }, [globalZoom]);
  var isMobile = useIsMobile();

  // 레포트용 전역 데이터 노출
  useEffect(function () {
    window.__reportData = data;
  }, [data]);
  var DOC = function DOC() {
    return window.db.collection("perf").doc("main");
  };
  useEffect(function () {
    // 캐시 즉시 로드
    try {
      var loc = localStorage.getItem("cst_v13");
      if (loc) {
        var cached = migrate(JSON.parse(loc));
        setData(cached);
        setDbStatus("💾 캐시로드");
      }
    } catch (e) {
      console.warn("캐시 로드 오류:", e);
    }

    // Firebase 백그라운드 로드
    var retries = 2;
    var loadFirebase = /*#__PURE__*/function () {
      var _ref58 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var snap, _loaded$, raw, loaded, ce24, isTimeout, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!(retries >= 0)) {
                _context7.n = 6;
                break;
              }
              _context7.p = 1;
              setDbStatus(retries < 2 ? "\uD83D\uDD04 \uC7AC\uC2DC\uB3C4 \uC911... (".concat(2 - retries, "/2)") : "🔄 연결중...");
              _context7.n = 2;
              return Promise.race([DOC().get(), new Promise(function (_, rej) {
                return setTimeout(function () {
                  return rej(new Error("timeout"));
                }, 12000);
              })]);
            case 2:
              snap = _context7.v;
              if (snap.exists) {
                raw = snap.data().perfData;
                loaded = migrate(raw);
                ce24 = loaded === null || loaded === void 0 || (_loaded$ = loaded["24"]) === null || _loaded$ === void 0 || (_loaded$ = _loaded$["매출"]) === null || _loaded$ === void 0 || (_loaded$ = _loaded$.perf) === null || _loaded$ === void 0 || (_loaded$ = _loaded$["0"]) === null || _loaded$ === void 0 ? void 0 : _loaded$.CE;
                setDbStatus(gNum(ce24) > 0 ? "✅ 로드완료" : "✅ 연결됨");
                setData(loaded);
                localStorage.setItem("cst_v13", JSON.stringify(loaded));
              } else {
                setDbStatus("⚠ 문서없음");
              }
              return _context7.a(2);
            case 3:
              _context7.p = 3;
              _t6 = _context7.v;
              retries--;
              if (!(retries < 0)) {
                _context7.n = 4;
                break;
              }
              isTimeout = _t6.message === "timeout";
              setDbStatus(isTimeout ? "⚠ 연결지연 — 재시도↻" : "❌ 로드실패 — 재시도↻");
              _context7.n = 5;
              break;
            case 4:
              setDbStatus("\u26A0 \uC624\uB958 (".concat(2 - retries, "\uD68C) \u2014 \uC7AC\uC2DC\uB3C4 \uC911..."));
              _context7.n = 5;
              return new Promise(function (r) {
                return setTimeout(r, 2000);
              });
            case 5:
              _context7.n = 0;
              break;
            case 6:
              return _context7.a(2);
          }
        }, _callee7, null, [[1, 3]]);
      }));
      return function loadFirebase() {
        return _ref58.apply(this, arguments);
      };
    }();
    loadFirebase();
  }, []);
  var handleSetData = useCallback(function (upd) {
    setData(function (prev) {
      var next = typeof upd === "function" ? upd(prev) : upd;
      setHasUnsaved(true);
      return next;
    });
  }, []);
  var handleSave = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    var _t7;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          setSaveState("saving");
          _context8.p = 1;
          _context8.n = 2;
          return DOC().set({
            perfData: data,
            updatedAt: new Date().toISOString()
          });
        case 2:
          localStorage.setItem("cst_v13", JSON.stringify(data));
          setSaveState("saved");
          setHasUnsaved(false);
          setTimeout(function () {
            return setSaveState("idle");
          }, 2500);
          _context8.n = 4;
          break;
        case 3:
          _context8.p = 3;
          _t7 = _context8.v;
          try {
            localStorage.setItem("cst_v13", JSON.stringify(data));
          } catch (_unused13) {}
          setSaveState("error");
          setTimeout(function () {
            return setSaveState("idle");
          }, 3000);
        case 4:
          return _context8.a(2);
      }
    }, _callee8, null, [[1, 3]]);
  })), [data]);

  // JSON 딥머지 후 즉시 Firebase 저장
  var handleMerge = useCallback(/*#__PURE__*/function () {
    var _ref60 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(merged) {
      var _t8;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            setData(merged);
            localStorage.setItem("cst_v13", JSON.stringify(merged));
            setHasUnsaved(true);
            // 자동 저장
            _context9.p = 1;
            _context9.n = 2;
            return DOC().set({
              perfData: merged,
              updatedAt: new Date().toISOString()
            });
          case 2:
            localStorage.setItem("cst_v13", JSON.stringify(merged));
            setHasUnsaved(false);
            setSaveState("saved");
            setTimeout(function () {
              return setSaveState("idle");
            }, 2500);
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t8 = _context9.v;
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    return function (_x2) {
      return _ref60.apply(this, arguments);
    };
  }(), []);
  var mColor = C[mode];
  var TABS = [{
    k: "dashboard",
    l: "대시보드",
    i: "◈"
  }, {
    k: "analysis",
    l: "실적분석",
    i: "◉"
  }, {
    k: "input",
    l: "실적입력",
    i: "◎"
  }];
  return /*#__PURE__*/React.createElement("div", {
    key: themeKey,
    style: {
      minHeight: "100vh",
      background: C.bg,
      color: C.text,
      fontFamily: "'Noto Sans KR','Apple SD Gothic Neo',sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 300,
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
      background: "linear-gradient(135deg,".concat(mColor, ",").concat(C.accent, ")"),
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
      color: mColor,
      fontSize: 9,
      fontWeight: 700
    }
  }, "\uAD00\uB9AC\uC2DC\uC2A4\uD15C \xB7 ", mode))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 1,
      flexShrink: 0
    }
  }, TABS.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.k,
      onClick: function onClick() {
        return setTab(t.k);
      },
      style: {
        padding: isMobile ? "6px 8px" : "5px 12px",
        borderRadius: 7,
        border: "none",
        cursor: "pointer",
        background: tab === t.k ? mColor + "22" : "transparent",
        color: tab === t.k ? mColor : C.muted,
        fontWeight: tab === t.k ? 800 : 500,
        fontSize: isMobile ? 11 : 12,
        fontFamily: "inherit",
        whiteSpace: "nowrap",
        borderBottom: tab === t.k ? "2px solid ".concat(mColor) : "2px solid transparent",
        transition: "color .15s"
      }
    }, isMobile ? t.k === "dashboard" ? "홈" : t.k === "analysis" ? "분석" : "입력" : "".concat(t.i, " ").concat(t.l));
  }), /*#__PURE__*/React.createElement("a", {
    href: "plan.html",
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
      e.currentTarget.style.color = C.accent;
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.color = C.muted;
    }
  }, isMobile ? "계획" : "📋 달성계획")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: isMobile ? 4 : 8,
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
      if (dbStatus.includes("재시도↻")) {
        setDbStatus("🔄 연결중...");
        var retries = 2;
        var retry = /*#__PURE__*/function () {
          var _ref61 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
            var snap, _loaded$2, raw, loaded, ce24, _t9;
            return _regenerator().w(function (_context0) {
              while (1) switch (_context0.p = _context0.n) {
                case 0:
                  if (!(retries >= 0)) {
                    _context0.n = 6;
                    break;
                  }
                  _context0.p = 1;
                  setDbStatus(retries < 2 ? "\uD83D\uDD04 \uC7AC\uC2DC\uB3C4 \uC911... (".concat(2 - retries, "/2)") : "🔄 연결중...");
                  _context0.n = 2;
                  return Promise.race([DOC().get(), new Promise(function (_, rej) {
                    return setTimeout(function () {
                      return rej(new Error("timeout"));
                    }, 12000);
                  })]);
                case 2:
                  snap = _context0.v;
                  if (snap.exists) {
                    raw = snap.data().perfData;
                    loaded = migrate(raw);
                    ce24 = loaded === null || loaded === void 0 || (_loaded$2 = loaded["24"]) === null || _loaded$2 === void 0 || (_loaded$2 = _loaded$2["매출"]) === null || _loaded$2 === void 0 || (_loaded$2 = _loaded$2.perf) === null || _loaded$2 === void 0 || (_loaded$2 = _loaded$2["0"]) === null || _loaded$2 === void 0 ? void 0 : _loaded$2.CE;
                    setDbStatus(gNum(ce24) > 0 ? "✅ 로드완료" : "✅ 연결됨");
                    setData(loaded);
                    localStorage.setItem("cst_v13", JSON.stringify(loaded));
                  } else {
                    setDbStatus("⚠ 문서없음");
                  }
                  return _context0.a(2);
                case 3:
                  _context0.p = 3;
                  _t9 = _context0.v;
                  retries--;
                  if (!(retries < 0)) {
                    _context0.n = 4;
                    break;
                  }
                  setDbStatus(_t9.message === "timeout" ? "⚠ 연결지연 — 재시도↻" : "❌ 로드실패 — 재시도↻");
                  _context0.n = 5;
                  break;
                case 4:
                  setDbStatus("\u26A0 \uC624\uB958 (".concat(2 - retries, "\uD68C) \u2014 \uC7AC\uC2DC\uB3C4 \uC911..."));
                  _context0.n = 5;
                  return new Promise(function (r) {
                    return setTimeout(r, 2000);
                  });
                case 5:
                  _context0.n = 0;
                  break;
                case 6:
                  return _context0.a(2);
              }
            }, _callee0, null, [[1, 3]]);
          }));
          return function retry() {
            return _ref61.apply(this, arguments);
          };
        }();
        retry();
      }
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
  }, theme === 'light' ? '라이트' : '다크')), !isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 9
    }
  }, APP_VER), !isMobile && /*#__PURE__*/React.createElement("div", {
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
      color: C.muted2,
      flexShrink: 0
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setGlobalZoom(function (z) {
        return Math.max(50, z - 10);
      });
    },
    style: {
      padding: "2px 6px",
      borderRadius: 4,
      border: "1px solid ".concat(C.b1),
      background: C.card2,
      color: C.muted2,
      cursor: "pointer",
      fontSize: 11,
      fontFamily: "inherit",
      fontWeight: 700,
      lineHeight: 1
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("select", {
    value: globalZoom,
    onChange: function onChange(e) {
      return setGlobalZoom(parseInt(e.target.value));
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
      return setGlobalZoom(function (z) {
        return Math.min(200, z + 10);
      });
    },
    style: {
      padding: "2px 6px",
      borderRadius: 4,
      border: "1px solid ".concat(C.b1),
      background: C.card2,
      color: C.muted2,
      cursor: "pointer",
      fontSize: 11,
      fontFamily: "inherit",
      fontWeight: 700,
      lineHeight: 1
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowBackupMain(true);
    },
    style: {
      padding: isMobile ? "5px 8px" : "4px 12px",
      borderRadius: 7,
      border: "1px solid ".concat(C.teal, "40"),
      background: C.teal + "10",
      color: C.teal,
      fontWeight: 700,
      fontSize: isMobile ? 13 : 11,
      cursor: "pointer",
      fontFamily: "inherit",
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
      background: C.surf,
      borderTop: "1px solid ".concat(C.b1, "22"),
      padding: "0 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      height: 38,
      gap: 8
    }
  }, !isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10,
      fontWeight: 700
    }
  }, "\uAD6C\uBD84"), MODES.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: function onClick() {
        return setMode(m);
      },
      style: {
        padding: "3px 14px",
        borderRadius: 6,
        cursor: "pointer",
        fontFamily: "inherit",
        fontWeight: 800,
        fontSize: 12,
        border: "1px solid ".concat(mode === m ? C[m] : C.b1),
        background: mode === m ? C[m] + "22" : "transparent",
        color: mode === m ? C[m] : C.muted,
        boxShadow: mode === m ? "0 0 8px ".concat(C[m], "40") : "none",
        transition: "all .15s"
      }
    }, m === "매출" ? "💰 매출" : "📦 판매");
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, isMobile && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: dbStatus.startsWith("✅") ? C.green : dbStatus.startsWith("❌") || dbStatus.includes("실패") ? C.red : dbStatus.startsWith("🔄") ? C.accent : C.orange,
      cursor: dbStatus.includes("재시도↻") ? "pointer" : "default"
    },
    onClick: function onClick() {
      if (dbStatus.includes("재시도↻")) {
        setDbStatus("🔄 연결중...");
        var retries = 2;
        var retry = /*#__PURE__*/function () {
          var _ref62 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
            var snap, _loaded$3, raw, loaded, ce24, _t0;
            return _regenerator().w(function (_context1) {
              while (1) switch (_context1.p = _context1.n) {
                case 0:
                  if (!(retries >= 0)) {
                    _context1.n = 6;
                    break;
                  }
                  _context1.p = 1;
                  _context1.n = 2;
                  return Promise.race([DOC().get(), new Promise(function (_, rej) {
                    return setTimeout(function () {
                      return rej(new Error("timeout"));
                    }, 12000);
                  })]);
                case 2:
                  snap = _context1.v;
                  if (snap.exists) {
                    raw = snap.data().perfData;
                    loaded = migrate(raw);
                    ce24 = loaded === null || loaded === void 0 || (_loaded$3 = loaded["24"]) === null || _loaded$3 === void 0 || (_loaded$3 = _loaded$3["매출"]) === null || _loaded$3 === void 0 || (_loaded$3 = _loaded$3.perf) === null || _loaded$3 === void 0 || (_loaded$3 = _loaded$3["0"]) === null || _loaded$3 === void 0 ? void 0 : _loaded$3.CE;
                    setDbStatus(gNum(ce24) > 0 ? "✅ 로드완료" : "✅ 연결됨");
                    setData(loaded);
                    localStorage.setItem("cst_v13", JSON.stringify(loaded));
                  } else {
                    setDbStatus("⚠ 문서없음");
                  }
                  return _context1.a(2);
                case 3:
                  _context1.p = 3;
                  _t0 = _context1.v;
                  retries--;
                  if (!(retries < 0)) {
                    _context1.n = 4;
                    break;
                  }
                  setDbStatus(_t0.message === "timeout" ? "⚠ 연결지연 — 재시도↻" : "❌ 로드실패 — 재시도↻");
                  _context1.n = 5;
                  break;
                case 4:
                  setDbStatus("\u26A0 \uC624\uB958");
                  _context1.n = 5;
                  return new Promise(function (r) {
                    return setTimeout(r, 2000);
                  });
                case 5:
                  _context1.n = 0;
                  break;
                case 6:
                  return _context1.a(2);
              }
            }, _callee1, null, [[1, 3]]);
          }));
          return function retry() {
            return _ref62.apply(this, arguments);
          };
        }();
        retry();
      }
    }
  }, dbStatus.startsWith("✅") ? "✅" : dbStatus.startsWith("❌") ? "❌" : dbStatus.startsWith("⚠") ? "⚠" : "🔄"), hasUnsaved && saveState === "idle" && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.orange,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u25CF \uBBF8\uC800\uC7A5"), saveState === "saved" && /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.green,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u2713 \uC800\uC7A5\uB428"))))), /*#__PURE__*/React.createElement("div", {
    id: "report-content",
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      padding: isMobile ? "12px" : "20px 16px",
      paddingBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: C.text,
      fontSize: isMobile ? 15 : 17,
      fontWeight: 900,
      letterSpacing: "-0.04em"
    }
  }, tab === "dashboard" ? "실적 대시보드" : tab === "analysis" ? "실적 분석" : "실적 입력", /*#__PURE__*/React.createElement("span", {
    style: {
      color: mColor,
      fontSize: 13,
      fontWeight: 700,
      marginLeft: 8
    }
  }, "\xB7 ", mode))), /*#__PURE__*/React.createElement("div", {
    id: "app-content",
    style: {
      transformOrigin: "top center",
      transition: "transform .15s ease",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ErrorBoundary, {
    key: tab + mode
  }, tab === "dashboard" && /*#__PURE__*/React.createElement(Dashboard, {
    key: mode,
    data: data,
    mode: mode,
    theme: theme
  }), tab === "analysis" && /*#__PURE__*/React.createElement(Analysis, {
    key: mode,
    data: data,
    mode: mode,
    theme: theme
  }), tab === "input" && /*#__PURE__*/React.createElement(InputTab, {
    key: mode,
    data: data,
    setData: handleSetData,
    mode: mode,
    onSave: handleSave,
    saveState: saveState,
    hasUnsaved: hasUnsaved,
    dbStatus: dbStatus,
    onImport: function onImport() {
      return setShowImport(true);
    },
    isTargetUnlocked: isTargetUnlocked,
    onRequestTargetUnlock: function onRequestTargetUnlock() {
      return setShowTgtPwModal(true);
    },
    onTargetLock: function onTargetLock() {
      sessionStorage.removeItem(TGT_UNLOCK_KEY);
      setIsTargetUnlocked(false);
    },
    theme: theme
  })))), showTgtPwModal && /*#__PURE__*/React.createElement(TargetUnlockModal, {
    onSuccess: function onSuccess() {
      sessionStorage.setItem(TGT_UNLOCK_KEY, "1");
      setIsTargetUnlocked(true);
      setShowTgtPwModal(false);
    },
    onClose: function onClose() {
      return setShowTgtPwModal(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(C.b1),
      padding: "8px 16px",
      background: C.surf,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: "0 auto",
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted,
      fontSize: 10,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\uC0B0\uCD9C\uAE30\uC900"), [["대외영업", "혼수+입주+이사+SMB+농협+거주중+휴대폰", C.blue], ["뉴홈", "입주+이사", C.green], ["B2B", "SMB+농협+휴대폰", C.orange], ["CE비중", "각항목÷CE", C.accent], ["달성률", "실적÷목표×100", C.teal]].map(function (_ref63) {
    var _ref64 = _slicedToArray(_ref63, 3),
      k = _ref64[0],
      v = _ref64[1],
      c = _ref64[2];
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      style: {
        color: C.muted,
        fontSize: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: c,
        fontWeight: 700
      }
    }, k), "=", v);
  }))), showReport && /*#__PURE__*/React.createElement(ReportModal, {
    onClose: function onClose() {
      return setShowReport(false);
    },
    mode: mode,
    tab: tab
  }), showBackupMain && /*#__PURE__*/React.createElement(BackupMainModal, {
    onClose: function onClose() {
      return setShowBackupMain(false);
    },
    data: data,
    mode: mode
  }), showImport && /*#__PURE__*/React.createElement(ImportModal, {
    onClose: function onClose() {
      return setShowImport(false);
    },
    currentData: data,
    onMerge: handleMerge
  }));
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
window.__APP_READY__ = true;
