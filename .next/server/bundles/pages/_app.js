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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
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
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        integrity: "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-3340346663"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js",
        integrity: "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T",
        crossOrigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-3340346663"
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3340346663",
        css: "@import url('https://fonts.googleapis.com/css?family=Athiti');*{font-family:'Athiti',sans-serif;}.show-font{font-family:'Athiti',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCbUMsQUFFK0UsQUFFckMsQUFHQSxnQ0FGckMsQUFHQSIsImZpbGUiOiJwYWdlc1xcX2FwcC5qcyIsInNvdXJjZVJvb3QiOiJEOlxccmVhY3QtbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkdFIFNtYXJ0IENsYXNzcm9vbTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1Xc2toYVNHRmdIWVdEY2J3TjcwL2RmWUJqNDdqejlxYnNNSWQvaVJOM2V3R2hYUUZaQ1NmdGQxTFpDZm1oa3RCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsMzAwaVwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjMuMS5zbGltLm1pbi5qc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LXE4aS9YKzk2NUR6TzByVDdhYks0MUpTdFFJQXFWZ1JWenBiem81c21YS3A0WWZSdkgrOGFidFRFMVBpNmppem9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3BvcHBlci5qcy8xLjE0LjMvdW1kL3BvcHBlci5taW4uanNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1aTVA3clZvM21JeWtWKzIrOUozVUo0NmpCazBXTGFVQWRuNjg5YUN3b3FiQkppU25qQUsvbDhXdkNXUElQbTQ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjEuMS9qcy9ib290c3RyYXAubWluLmpzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtc21IWUtkTEFEd2tYT24xRW1OMXFrL0hmblVjYlZSWnlZbVo0cXBQZWE2c2pCL3BUSjBldXlRcDBNazhjays1VFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXRoaXRpJyk7XHJcbiAgICAqe1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQXRoaXRpJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuICAgIC5zaG93LWZvbnR7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBdGhpdGknLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBCdXR0b25Mb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYocHJvcHMuc3RhdHVzTG9naW4gPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIG9uQ2xpY2s9e3Byb3BzLmxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICDguK3guK3guIHguIjguLLguIHguKPguLDguJrguJpcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+R0UgU21hcnQgQ2xhc3Nyb29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0byBtdC0yIG10LWxnLTBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCIgc3R5bGU9e3snbWFyZ2luLXRvcCc6JzEwcHgnfX0+e3RoaXMucHJvcHMuZmlyc3ROYW1lfSB7dGhpcy5wcm9wcy5sYXN0TmFtZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uTG9naW4gc3RhdHVzTG9naW49e3RoaXMucHJvcHMuc3RhdHVzTG9naW59IGxvZ291dD17dGhpcy5wcm9wcy5sb2dvdXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoZWNrTG9naW4gPSB0aGlzLmNoZWNrTG9naW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNoZWNrTG9naW4oc3RhdHVzKXtcclxuXHJcbiAgICAgICAgY29uc3QgaXNTdHVkZW50ID0gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzU3R1ZGVudFwiKTtcclxuICAgICAgICBjb25zdCBpc1RlYWNoZXIgPSAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNUZWFjaGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzVGVhY2hlckFzc2lzdGFudCA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1RlYWNoZXJBc3Npc3RhbnRcIik7XHJcbiAgICAgICAgY29uc3QgaXNBZG1pbiA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkbWluXCIpO1xyXG5cclxuICAgICAgICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcclxuICAgICAgICAgICAgaWYodXJsID09ICcvc3R1ZGVudC1jb3Vyc2UnKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc1N0dWRlbnQgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHVkZW50Rmlyc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudExhc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudFVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudFBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpcnN0TmFtZSA6IGZpcnN0TmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3ROYW1lIDogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXNMb2dpbiA6IHN0YXR1c30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9naW4gOiAnc3R1ZGVudCd9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZSA6IHVzZXJuYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQgOiBwYXNzd29yZH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHVybCA9PSAnL3RlYWNoZXItY291cnNlJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNUZWFjaGVyID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJMYXN0TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJVc2VybmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJQYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWUgOiBmaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZSA6IGxhc3ROYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiBzdGF0dXN9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvZ2luIDogJ3RlYWNoZXInfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWUgOiB1c2VybmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkIDogcGFzc3dvcmR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYodXJsID09ICcvdGEtY291cnNlJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNUZWFjaGVyQXNzaXN0YW50ID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckFzc2lzdGFudEZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJBc3Npc3RhbnRMYXN0TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJBc3Npc3RhbnRVc2VybmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJBc3Npc3RhbnRQYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWUgOiBmaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXN0TmFtZSA6IGxhc3ROYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiBzdGF0dXN9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvZ2luIDogJ3RhJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lIDogdXNlcm5hbWV9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHBhc3N3b3JkfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZih1cmwgPT0gJy9hZG1pbicpe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzQWRtaW4gPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkbWluTGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lIDogZmlyc3ROYW1lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGFzdE5hbWUgOiBsYXN0TmFtZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1c0xvZ2luIDogc3RhdHVzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2dpbiA6ICdhZG1pbid9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaXNTdHVkZW50ID0gICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzU3R1ZGVudFwiKTtcclxuICAgICAgICBjb25zdCBpc1RlYWNoZXIgPSAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNUZWFjaGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IGlzVGVhY2hlckFzc2lzdGFudCA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc1RlYWNoZXJBc3Npc3RhbnRcIik7XHJcbiAgICAgICAgY29uc3QgaXNBZG1pbiA9ICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkbWluXCIpO1xyXG5cclxuICAgICAgICBpZihpc1N0dWRlbnQgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudEZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHVkZW50TGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3R1ZGVudFVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0dWRlbnRQYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lIDogZmlyc3ROYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3ROYW1lIDogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiAndHJ1ZSd9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2dpbiA6ICdzdHVkZW50J30pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZSA6IHVzZXJuYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkIDogcGFzc3dvcmR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc1RlYWNoZXIgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyTGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlclVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJQYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lIDogZmlyc3ROYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3ROYW1lIDogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiAndHJ1ZSd9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2dpbiA6ICd0ZWFjaGVyJ30pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZSA6IHVzZXJuYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkIDogcGFzc3dvcmR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihpc1RlYWNoZXJBc3Npc3RhbnQgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckFzc2lzdGFudEZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZWFjaGVyQXNzaXN0YW50TGFzdE5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVhY2hlckFzc2lzdGFudFVzZXJuYW1lXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlYWNoZXJBc3Npc3RhbnRQYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zmlyc3ROYW1lIDogZmlyc3ROYW1lfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xhc3ROYW1lIDogbGFzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiAndHJ1ZSd9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2dpbiA6ICd0YSd9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWUgOiB1c2VybmFtZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6IHBhc3N3b3JkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNBZG1pbiA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkZpcnN0TmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZG1pbkxhc3ROYW1lXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWUgOiBmaXJzdE5hbWV9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGFzdE5hbWUgOiBsYXN0TmFtZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGF0dXNMb2dpbiA6ICd0cnVlJ30pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvZ2luIDogJ2FkbWluJ30pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IHtcclxuICAgICAgICAgICAgaWYodXJsID09ICcvJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmaXJzdE5hbWUgOiAnJ30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGFzdE5hbWUgOiAnJ30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhdHVzTG9naW4gOiAnJ30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2dpbiA6ICcnfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZSA6ICcnfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZCA6ICcnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgZmlyc3ROYW1lPXt0aGlzLnN0YXRlLmZpcnN0TmFtZX0gbGFzdE5hbWU9e3RoaXMuc3RhdGUubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzTG9naW49e3RoaXMuc3RhdGUuc3RhdHVzTG9naW59IGxvZ291dD17dGhpcy5sb2dvdXR9Lz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgIHsuLi5wYWdlUHJvcHN9IGNoZWNrTG9naW49e3RoaXMuY2hlY2tMb2dpbn0gaXNMb2dpbj17dGhpcy5zdGF0ZS5pc0xvZ2lufVxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfS8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\_app.js */"
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
        lineNumber: 48
      }
    }, "\xA0 \xA0", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
      className: "btn btn-danger btn-sm",
      onClick: props.logout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
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
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "GE Smart Classroom")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
        className: "navbar-nav mr-auto mt-2 mt-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
        className: "text-light",
        style: {
          'margin-top': '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, this.props.firstName, " ", this.props.lastName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(ButtonLogin, {
        statusLogin: this.props.statusLogin,
        logout: this.props.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
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
    _this.state = {};
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
    _this.checkLogin = _this.checkLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MyApp, [{
    key: "checkLogin",
    value: function checkLogin(status) {
      var _this2 = this;

      var isStudent = localStorage.getItem("isStudent");
      var isTeacher = localStorage.getItem("isTeacher");
      var isTeacherAssistant = localStorage.getItem("isTeacherAssistant");
      var isAdmin = localStorage.getItem("isAdmin");

      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeComplete = function (url) {
        if (url == '/student-course') {
          if (isStudent == 'true') {
            var firstName = localStorage.getItem("studentFirstName");
            var lastName = localStorage.getItem("studentLastName");
            var username = localStorage.getItem("studentUsername");
            var password = localStorage.getItem("studentPassword");

            _this2.setState({
              firstName: firstName
            });

            _this2.setState({
              lastName: lastName
            });

            _this2.setState({
              statusLogin: status
            });

            _this2.setState({
              isLogin: 'student'
            });

            _this2.setState({
              username: username
            });

            _this2.setState({
              password: password
            });
          }
        } else if (url == '/teacher-course') {
          if (isTeacher == 'true') {
            var _firstName = localStorage.getItem("teacherFirstName");

            var _lastName = localStorage.getItem("teacherLastName");

            var _username = localStorage.getItem("teacherUsername");

            var _password = localStorage.getItem("teacherPassword");

            _this2.setState({
              firstName: _firstName
            });

            _this2.setState({
              lastName: _lastName
            });

            _this2.setState({
              statusLogin: status
            });

            _this2.setState({
              isLogin: 'teacher'
            });

            _this2.setState({
              username: _username
            });

            _this2.setState({
              password: _password
            });
          }
        } else if (url == '/ta-course') {
          if (isTeacherAssistant == 'true') {
            var _firstName2 = localStorage.getItem("teacherAssistantFirstName");

            var _lastName2 = localStorage.getItem("teacherAssistantLastName");

            var _username2 = localStorage.getItem("teacherAssistantUsername");

            var _password2 = localStorage.getItem("teacherAssistantPassword");

            _this2.setState({
              firstName: _firstName2
            });

            _this2.setState({
              lastName: _lastName2
            });

            _this2.setState({
              statusLogin: status
            });

            _this2.setState({
              isLogin: 'ta'
            });

            _this2.setState({
              username: _username2
            });

            _this2.setState({
              password: _password2
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

            _this2.setState({
              isLogin: 'admin'
            });
          }
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var isStudent, isTeacher, isTeacherAssistant, isAdmin, firstName, lastName, username, password, _firstName4, _lastName4, _username3, _password3, _firstName5, _lastName5, _username4, _password4, _firstName6, _lastName6;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isStudent = localStorage.getItem("isStudent");
                isTeacher = localStorage.getItem("isTeacher");
                isTeacherAssistant = localStorage.getItem("isTeacherAssistant");
                isAdmin = localStorage.getItem("isAdmin");

                if (!(isStudent == 'true')) {
                  _context.next = 17;
                  break;
                }

                firstName = localStorage.getItem("studentFirstName");
                lastName = localStorage.getItem("studentLastName");
                username = localStorage.getItem("studentUsername");
                password = localStorage.getItem("studentPassword");
                this.setState({
                  firstName: firstName
                });
                this.setState({
                  lastName: lastName
                });
                this.setState({
                  statusLogin: 'true'
                });
                this.setState({
                  isLogin: 'student'
                });
                this.setState({
                  username: username
                });
                this.setState({
                  password: password
                });
                _context.next = 53;
                break;

              case 17:
                if (!(isTeacher == 'true')) {
                  _context.next = 30;
                  break;
                }

                _firstName4 = localStorage.getItem("teacherFirstName");
                _lastName4 = localStorage.getItem("teacherLastName");
                _username3 = localStorage.getItem("teacherUsername");
                _password3 = localStorage.getItem("teacherPassword");
                this.setState({
                  firstName: _firstName4
                });
                this.setState({
                  lastName: _lastName4
                });
                this.setState({
                  statusLogin: 'true'
                });
                this.setState({
                  isLogin: 'teacher'
                });
                this.setState({
                  username: _username3
                });
                this.setState({
                  password: _password3
                });
                _context.next = 53;
                break;

              case 30:
                if (!(isTeacherAssistant == 'true')) {
                  _context.next = 43;
                  break;
                }

                _firstName5 = localStorage.getItem("teacherAssistantFirstName");
                _lastName5 = localStorage.getItem("teacherAssistantLastName");
                _username4 = localStorage.getItem("teacherAssistantUsername");
                _password4 = localStorage.getItem("teacherAssistantPassword");
                this.setState({
                  firstName: _firstName5
                });
                this.setState({
                  lastName: _lastName5
                });
                this.setState({
                  statusLogin: 'true'
                });
                this.setState({
                  isLogin: 'ta'
                });
                this.setState({
                  username: _username4
                });
                this.setState({
                  password: _password4
                });
                _context.next = 53;
                break;

              case 43:
                if (!(isAdmin == 'true')) {
                  _context.next = 52;
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
                this.setState({
                  isLogin: 'admin'
                });
                _context.next = 53;
                break;

              case 52:
                return _context.abrupt("return", false);

              case 53:
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
      var _this3 = this;

      localStorage.clear();
      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.replace('/');

      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeComplete = function (url) {
        if (url == '/') {
          _this3.setState({
            firstName: ''
          });

          _this3.setState({
            lastName: ''
          });

          _this3.setState({
            statusLogin: ''
          });

          _this3.setState({
            isLogin: ''
          });

          _this3.setState({
            username: ''
          });

          _this3.setState({
            password: ''
          });
        }
      };
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
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Navbar, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        statusLogin: this.state.statusLogin,
        logout: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        checkLogin: this.checkLogin,
        isLogin: this.state.isLogin,
        username: this.state.username,
        password: this.state.password,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
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

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

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