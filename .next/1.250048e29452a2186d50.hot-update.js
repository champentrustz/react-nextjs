webpackHotUpdate(1,{

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);

var _jsxFileName = "D:\\react-nextjs\\pages\\_app.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-3340346663"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-3340346663"
      }, "GE Smart Classroom"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,300i",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        integrity: "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-3340346663"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3340346663",
        css: "@import url('https://fonts.googleapis.com/css?family=Athiti');*{font-family:'Athiti',sans-serif;}.show-font{font-family:'Athiti',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCbUMsQUFFK0UsQUFFckMsQUFHQSxnQ0FGckMsQUFHQSIsImZpbGUiOiJwYWdlc1xcX2FwcC5qcyIsInNvdXJjZVJvb3QiOiJEOlxccmVhY3QtbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkdFIFNtYXJ0IENsYXNzcm9vbTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Xc2toYVNHRmdIWVdEY2J3TjcwL2RmWUJqNDdqejlxYnNNSWQvaVJOM2V3R2hYUUZaQ1NmdGQxTFpDZm1oa3RCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsMzAwaVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLnNsaW0ubWluLmpzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtcThpL1grOTY1RHpPMHJUN2FiSzQxSlN0UUlBcVZnUlZ6cGJ6bzVzbVhLcDRZZlJ2SCs4YWJ0VEUxUGk2aml6b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuMy91bWQvcG9wcGVyLm1pbi5qc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVpNUDdyVm8zbUl5a1YrMis5SjNVSjQ2akJrMFdMYVVBZG42ODlhQ3dvcWJCSmlTbmpBSy9sOFd2Q1dQSVBtNDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1zbUhZS2RMQUR3a1hPbjFFbU4xcWsvSGZuVWNiVlJaeVltWjRxcFBlYTZzakIvcFRKMGV1eVFwME1rOGNrKzVUXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BdGhpdGknKTtcclxuICAgICp7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdGhpdGknLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLnNob3ctZm9udHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0F0aGl0aScsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkxvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgICBpZihwcm9wcy5zdGF0dXNMb2dpbiA9PSAndHJ1ZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17cHJvcHMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVG9nZ2xlckRlbW8wM1wiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUb2dnbGVyRGVtbzAzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R0UgU21hcnQgQ2xhc3Nyb29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRvZ2dsZXJEZW1vMDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0byBtdC0yIG10LWxnLTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCIgc3R5bGU9e3snbWFyZ2luLXRvcCc6JzEwcHgnfX0+e3RoaXMucHJvcHMuZmlyc3ROYW1lfSB7dGhpcy5wcm9wcy5sYXN0TmFtZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uTG9naW4gc3RhdHVzTG9naW49e3RoaXMucHJvcHMuc3RhdHVzTG9naW59IGxvZ291dD17dGhpcy5wcm9wcy5sb2dvdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzTG9naW4gOiAnJyxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbGFzdE5hbWUgOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoZWNrTG9naW4gPSB0aGlzLmNoZWNrTG9naW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNoZWNrTG9naW4oc3RhdHVzKXtcclxuXHJcblxyXG5cclxuICAgICAgICBpZihzdGF0dXMgIT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzU3R1ZGVudCA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1N0dWRlbnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVGVhY2hlciA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1RlYWNoZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVGVhY2hlckFzc2lzdGFudCA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1RlYWNoZXJBc3Npc3RhbnRcIik7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT0gJy9zdHVkZW50LWNvdXJzZScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3R1ZGVudCA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHVkZW50Rmlyc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudExhc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWU6IGZpcnN0TmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZTogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW46IHN0YXR1c30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1cmwgPT0gJy90ZWFjaGVyLWNvdXJzZScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGVhY2hlciA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyRmlyc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckxhc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWU6IGZpcnN0TmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZTogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW46IHN0YXR1c30pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXJsID09ICcvdGEtY291cnNlJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUZWFjaGVyQXNzaXN0YW50ID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJBc3Npc3RhbnRGaXJzdE5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyQXNzaXN0YW50TGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0TmFtZTogZmlyc3ROYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3ROYW1lOiBsYXN0TmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXNMb2dpbjogc3RhdHVzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXJsID09ICcvYWRtaW4nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FkbWluID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluRmlyc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWRtaW5MYXN0TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lOiBmaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGFzdE5hbWU6IGxhc3ROYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1c0xvZ2luOiBzdGF0dXN9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGlzU3R1ZGVudCA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1N0dWRlbnRcIik7XHJcbiAgICAgICAgY29uc3QgaXNUZWFjaGVyID0gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzVGVhY2hlclwiKTtcclxuICAgICAgICBjb25zdCBpc1RlYWNoZXJBc3Npc3RhbnQgPSAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNUZWFjaGVyQXNzaXN0YW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGlzQWRtaW4gPSAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZG1pblwiKTtcclxuXHJcbiAgICAgICAgaWYoaXNTdHVkZW50ID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0dWRlbnRGaXJzdE5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudExhc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWUgOiBmaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGFzdE5hbWUgOiBsYXN0TmFtZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXNMb2dpbiA6ICd0cnVlJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGlzVGVhY2hlciA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyRmlyc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJMYXN0TmFtZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lIDogZmlyc3ROYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3ROYW1lIDogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiAndHJ1ZSd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc1RlYWNoZXJBc3Npc3RhbnQgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckFzc2lzdGFudEZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyQXNzaXN0YW50TGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0TmFtZSA6IGZpcnN0TmFtZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZSA6IGxhc3ROYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1c0xvZ2luIDogJ3RydWUnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNBZG1pbiA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkxhc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWUgOiBmaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGFzdE5hbWUgOiBsYXN0TmFtZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXNMb2dpbiA6ICd0cnVlJ30pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZih1cmwgPT0gJy8nKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lIDogJyd9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZSA6ICcnfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiAnJ30pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8TmF2YmFyIGZpcnN0TmFtZT17dGhpcy5zdGF0ZS5maXJzdE5hbWV9IGxhc3ROYW1lPXt0aGlzLnN0YXRlLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0xvZ2luPXt0aGlzLnN0YXRlLnN0YXR1c0xvZ2lufSBsb2dvdXQ9e3RoaXMubG9nb3V0fS8+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGNoZWNrTG9naW49e3RoaXMuY2hlY2tMb2dpbn0vPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\_app.js */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var ButtonLogin = function ButtonLogin(props) {
  if (props.statusLogin == 'true') {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    }, "\xA0 \xA0", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
      className: "btn btn-danger btn-sm",
      onClick: props.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"));
  } else {
    return false;
  }
};

var Navbar =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Navbar, _React$Component2);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg fixed-top navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarTogglerDemo03",
        "aria-controls": "navbarTogglerDemo03",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "GE Smart Classroom")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
        className: "text-light",
        style: {
          'margin-top': '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, this.props.firstName, " ", this.props.lastName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ButtonLogin, {
        statusLogin: this.props.statusLogin,
        logout: this.props.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))));
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));
    _this.state = {
      statusLogin: '',
      firstName: '',
      lastName: ''
    };
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    _this.checkLogin = _this.checkLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MyApp, [{
    key: "checkLogin",
    value: function checkLogin(status) {
      var _this2 = this;

      if (status != '') {
        var isStudent = localStorage.getItem("isStudent");
        var isTeacher = localStorage.getItem("isTeacher");
        var isTeacherAssistant = localStorage.getItem("isTeacherAssistant");

        __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeComplete = function (url) {
          if (url == '/student-course') {
            if (isStudent == 'true') {
              var firstName = localStorage.getItem("studentFirstName");
              var lastName = localStorage.getItem("studentLastName");

              _this2.setState({
                firstName: firstName
              });

              _this2.setState({
                lastName: lastName
              });

              _this2.setState({
                statusLogin: status
              });
            }
          } else if (url == '/teacher-course') {
            if (isTeacher == 'true') {
              var _firstName = localStorage.getItem("teacherFirstName");

              var _lastName = localStorage.getItem("teacherLastName");

              _this2.setState({
                firstName: _firstName
              });

              _this2.setState({
                lastName: _lastName
              });

              _this2.setState({
                statusLogin: status
              });
            }
          } else if (url == '/ta-course') {
            if (isTeacherAssistant == 'true') {
              var _firstName2 = localStorage.getItem("teacherAssistantFirstName");

              var _lastName2 = localStorage.getItem("teacherAssistantLastName");

              _this2.setState({
                firstName: _firstName2
              });

              _this2.setState({
                lastName: _lastName2
              });

              _this2.setState({
                statusLogin: status
              });
            }
          } else if (url == '/admin') {
            if (isAdmin == 'true') {
              var _firstName3 = localStorage.getItem("adminFirstName");

              var _lastName3 = localStorage.getItem("adminLastName");

              _this2.setState({
                firstName: _firstName3
              });

              _this2.setState({
                lastName: _lastName3
              });

              _this2.setState({
                statusLogin: status
              });
            }
          }
        };
      } else {
        __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.replace('/');
      }
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var isStudent, isTeacher, isTeacherAssistant, isAdmin, firstName, lastName, _firstName4, _lastName4, _firstName5, _lastName5, _firstName6, _lastName6;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isStudent = localStorage.getItem("isStudent");
                isTeacher = localStorage.getItem("isTeacher");
                isTeacherAssistant = localStorage.getItem("isTeacherAssistant");
                isAdmin = localStorage.getItem("isAdmin");

                if (!(isStudent == 'true')) {
                  _context.next = 12;
                  break;
                }

                firstName = localStorage.getItem("studentFirstName");
                lastName = localStorage.getItem("studentLastName");
                this.setState({
                  firstName: firstName
                });
                this.setState({
                  lastName: lastName
                });
                this.setState({
                  statusLogin: 'true'
                });
                _context.next = 37;
                break;

              case 12:
                if (!(isTeacher == 'true')) {
                  _context.next = 20;
                  break;
                }

                _firstName4 = localStorage.getItem("teacherFirstName");
                _lastName4 = localStorage.getItem("teacherLastName");
                this.setState({
                  firstName: _firstName4
                });
                this.setState({
                  lastName: _lastName4
                });
                this.setState({
                  statusLogin: 'true'
                });
                _context.next = 37;
                break;

              case 20:
                if (!(isTeacherAssistant == 'true')) {
                  _context.next = 28;
                  break;
                }

                _firstName5 = localStorage.getItem("teacherAssistantFirstName");
                _lastName5 = localStorage.getItem("teacherAssistantLastName");
                this.setState({
                  firstName: _firstName5
                });
                this.setState({
                  lastName: _lastName5
                });
                this.setState({
                  statusLogin: 'true'
                });
                _context.next = 37;
                break;

              case 28:
                if (!(isAdmin == 'true')) {
                  _context.next = 36;
                  break;
                }

                _firstName6 = localStorage.getItem("adminFirstName");
                _lastName6 = localStorage.getItem("adminLastName");
                this.setState({
                  firstName: _firstName6
                });
                this.setState({
                  lastName: _lastName6
                });
                this.setState({
                  statusLogin: 'true'
                });
                _context.next = 37;
                break;

              case 36:
                return _context.abrupt("return", false);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "logout",
    value: function logout() {
      localStorage.clear();
      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.replace('/');

      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeComplete = function (url) {
        if (url == '/') {}
      };

      this.setState({
        firstName: ''
      });
      this.setState({
        lastName: ''
      });
      this.setState({
        statusLogin: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Navbar, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        statusLogin: this.state.statusLogin,
        logout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        checkLogin: this.checkLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      })));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.250048e29452a2186d50.hot-update.js.map