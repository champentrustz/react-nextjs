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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("./node_modules/next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);

var _jsxFileName = "D:\\react-nextjs\\pages\\_app.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
          lineNumber: 9
        },
        className: "jsx-3340346663"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-3340346663"
      }, "GE Smart Classroom"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        integrity: "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,300i",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        integrity: "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3340346663"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3340346663",
        css: "@import url('https://fonts.googleapis.com/css?family=Athiti');*{font-family:'Athiti',sans-serif;}.show-font{font-family:'Athiti',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCbUMsQUFFK0UsQUFFckMsQUFHQSxnQ0FGckMsQUFHQSIsImZpbGUiOiJwYWdlc1xcX2FwcC5qcyIsInNvdXJjZVJvb3QiOiJEOlxccmVhY3QtbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkdFIFNtYXJ0IENsYXNzcm9vbTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Xc2toYVNHRmdIWVdEY2J3TjcwL2RmWUJqNDdqejlxYnNNSWQvaVJOM2V3R2hYUUZaQ1NmdGQxTFpDZm1oa3RCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsMzAwaVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLnNsaW0ubWluLmpzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtcThpL1grOTY1RHpPMHJUN2FiSzQxSlN0UUlBcVZnUlZ6cGJ6bzVzbVhLcDRZZlJ2SCs4YWJ0VEUxUGk2aml6b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuMy91bWQvcG9wcGVyLm1pbi5qc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVpNUDdyVm8zbUl5a1YrMis5SjNVSjQ2akJrMFdMYVVBZG42ODlhQ3dvcWJCSmlTbmpBSy9sOFd2Q1dQSVBtNDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1zbUhZS2RMQUR3a1hPbjFFbU4xcWsvSGZuVWNiVlJaeVltWjRxcFBlYTZzakIvcFRKMGV1eVFwME1rOGNrKzVUXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BdGhpdGknKTtcclxuICAgICp7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdGhpdGknLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLnNob3ctZm9udHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0F0aGl0aScsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVG9nZ2xlckRlbW8wM1wiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUb2dnbGVyRGVtbzAzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R0UgU21hcnQgQ2xhc3Nyb29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRvZ2dsZXJEZW1vMDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0byBtdC0yIG10LWxnLTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy5zdHVkZW50Rmlyc3ROYW1lfSB7dGhpcy5wcm9wcy5zdHVkZW50TGFzdE5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj7guK3guK3guIHguIjguLLguIHguKPguLDguJrguJo8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzU3R1ZGVudCA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNTdHVkZW50XCIpO1xyXG5cclxuICAgICAgICBpZihpc1N0dWRlbnQgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudEZpcnN0TmFtZSA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudEZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3R1ZGVudExhc3ROYW1lID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHVkZW50TGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdHVkZW50Rmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudExhc3ROYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHN9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPE5hdmJhciBzdHVkZW50Rmlyc3ROYW1lPXt0aGlzLnByb3BzLnN0dWRlbnRGaXJzdE5hbWV9IHN0dWRlbnRMYXN0TmFtZT17dGhpcy5wcm9wcy5zdHVkZW50TGFzdE5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\_app.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var Navbar =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Navbar, _React$Component2);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg fixed-top navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "GE Smart Classroom")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.studentFirstName, " ", this.props.studentLastName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        className: "btn btn-danger btn-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Navbar, {
        studentFirstName: this.props.studentFirstName,
        studentLastName: this.props.studentLastName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var isStudent, studentFirstName, studentLastName;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return localStorage.getItem("isStudent");

              case 2:
                isStudent = _context.sent;

                if (!(isStudent == 'true')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 6;
                return localStorage.getItem("studentFirstName");

              case 6:
                studentFirstName = _context.sent;
                _context.next = 9;
                return localStorage.getItem("studentLastName");

              case 9:
                studentLastName = _context.sent;
                return _context.abrupt("return", {
                  studentFirstName: studentFirstName,
                  studentLastName: studentLastName
                });

              case 13:
                return _context.abrupt("return", false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "D:\\react-nextjs\\pages\\_app.js");
  reactHotLoader.register(Navbar, "Navbar", "D:\\react-nextjs\\pages\\_app.js");
  reactHotLoader.register(MyApp, "MyApp", "D:\\react-nextjs\\pages\\_app.js");
  leaveModule(module);
})();

;
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
//# sourceMappingURL=1.a08173fad2051d4cd9e6.hot-update.js.map