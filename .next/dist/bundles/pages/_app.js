module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);

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
        css: "@import url('https://fonts.googleapis.com/css?family=Athiti');*{font-family:'Athiti',sans-serif;}.show-font{font-family:'Athiti',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCbUMsQUFFK0UsQUFFckMsQUFHQSxnQ0FGckMsQUFHQSIsImZpbGUiOiJwYWdlc1xcX2FwcC5qcyIsInNvdXJjZVJvb3QiOiJEOlxccmVhY3QtbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkdFIFNtYXJ0IENsYXNzcm9vbTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Xc2toYVNHRmdIWVdEY2J3TjcwL2RmWUJqNDdqejlxYnNNSWQvaVJOM2V3R2hYUUZaQ1NmdGQxTFpDZm1oa3RCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsMzAwaVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMy4xLnNsaW0ubWluLmpzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtcThpL1grOTY1RHpPMHJUN2FiSzQxSlN0UUlBcVZnUlZ6cGJ6bzVzbVhLcDRZZlJ2SCs4YWJ0VEUxUGk2aml6b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTQuMy91bWQvcG9wcGVyLm1pbi5qc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVpNUDdyVm8zbUl5a1YrMis5SjNVSjQ2akJrMFdMYVVBZG42ODlhQ3dvcWJCSmlTbmpBSy9sOFd2Q1dQSVBtNDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMS4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1zbUhZS2RMQUR3a1hPbjFFbU4xcWsvSGZuVWNiVlJaeVltWjRxcFBlYTZzakIvcFRKMGV1eVFwME1rOGNrKzVUXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BdGhpdGknKTtcclxuICAgICp7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdGhpdGknLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLnNob3ctZm9udHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0F0aGl0aScsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkxvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgICBpZihwcm9wcy5zdGF0dXNMb2dpbiA9PSAndHJ1ZScpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgb25DbGljaz17cHJvcHMubG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVG9nZ2xlckRlbW8wM1wiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUb2dnbGVyRGVtbzAzXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R0UgU21hcnQgQ2xhc3Nyb29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRvZ2dsZXJEZW1vMDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0byBtdC0yIG10LWxnLTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCIgc3R5bGU9e3snbWFyZ2luLXRvcCc6JzEwcHgnfX0+e3RoaXMucHJvcHMuc3R1ZGVudEZpcnN0TmFtZX0ge3RoaXMucHJvcHMuc3R1ZGVudExhc3ROYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Mb2dpbiBzdGF0dXNMb2dpbj17dGhpcy5wcm9wcy5zdGF0dXNMb2dpbn0gbG9nb3V0PXt0aGlzLmxvZ291dH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzdGF0dXNMb2dpbiA6ICcnLFxyXG4gICAgICAgICAgICBzdHVkZW50Rmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgc3R1ZGVudExhc3ROYW1lIDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBjb25zdCBpc1N0dWRlbnQgPSAgYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1N0dWRlbnRcIik7XHJcblxyXG4gICAgICAgIGlmKGlzU3R1ZGVudCA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjb25zdCBzdHVkZW50Rmlyc3ROYW1lID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHVkZW50Rmlyc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHVkZW50TGFzdE5hbWUgPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0dWRlbnRMYXN0TmFtZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R1ZGVudEZpcnN0TmFtZSA6IHN0dWRlbnRGaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3R1ZGVudExhc3ROYW1lIDogc3R1ZGVudExhc3ROYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1c0xvZ2luIDogJ3RydWUnfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgc3R1ZGVudEZpcnN0TmFtZT17dGhpcy5zdGF0ZS5zdHVkZW50Rmlyc3ROYW1lfSBzdHVkZW50TGFzdE5hbWU9e3RoaXMuc3RhdGUuc3R1ZGVudExhc3ROYW1lfVxyXG4gICAgICAgICAgICBzdGF0dXNMb2dpbj17dGhpcy5zdGF0ZS5zdGF0dXNMb2dpbn0vPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\_app.js */"
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
        lineNumber: 46
      }
    }, "\xA0 \xA0", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
      className: "btn btn-danger btn-sm",
      onClick: props.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
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

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
    _this.state = {};
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Navbar, [{
    key: "logout",
    value: function logout() {
      localStorage.clear();
      window.location.replace("/");
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg fixed-top navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "GE Smart Classroom")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarTogglerDemo02",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
        className: "text-light",
        style: {
          'margin-top': '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.props.studentFirstName, " ", this.props.studentLastName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ButtonLogin, {
        statusLogin: this.props.statusLogin,
        logout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
    var _this2;

    _classCallCheck(this, MyApp);

    _this2 = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));
    _this2.state = {
      statusLogin: '',
      studentFirstName: '',
      studentLastName: ''
    };
    return _this2;
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
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
                  _context.next = 15;
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
                this.setState({
                  studentFirstName: studentFirstName
                });
                this.setState({
                  studentLastName: studentLastName
                });
                this.setState({
                  statusLogin: 'true'
                });
                _context.next = 16;
                break;

              case 15:
                return _context.abrupt("return", false);

              case 16:
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
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Navbar, {
        studentFirstName: this.state.studentFirstName,
        studentLastName: this.state.studentLastName,
        statusLogin: this.state.statusLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a);



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map