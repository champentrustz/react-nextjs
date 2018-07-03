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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/login/login-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\react-nextjs\\components\\login\\login-form.js";


var StatusLogin = function StatusLogin(props) {
  if (props.status_login == 'wrong') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "alert alert-danger",
      role: "alert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, "\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14! \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }));
  } else {
    return false;
  }
};

var LoginForm = function LoginForm(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../../static/image/ssru00.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "GE Smart Classroom"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-6 offset-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StatusLogin, {
    status_login: props.status_login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
    className: "form-control",
    style: {
      width: '150px'
    },
    value: props.type,
    onChange: props.typeChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "student",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "teacher",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "\u0E2D\u0E32\u0E08\u0E32\u0E23\u0E22\u0E4C"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "ta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E2A\u0E2D\u0E19"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    value: props.username,
    onChange: props.usernameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    value: props.password,
    onChange: props.passwordChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn btn-success btn-block",
    onClick: props.login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (LoginForm);

/***/ }),

/***/ "./components/login/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\react-nextjs\\components\\login\\timer.js";


var Timer = function Timer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Timer);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_timer__ = __webpack_require__("./components/login/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_form__ = __webpack_require__("./components/login/login-form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);

var _jsxFileName = "D:\\react-nextjs\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index(props) {
    var _this;

    _classCallCheck(this, index);

    _this = _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, props));
    _this.state = {
      seconds: 0,
      status_login: '',
      username: '',
      password: '',
      type: 'student'
    };
    _this.testPrint = _this.testPrint.bind(_assertThisInitialized(_this));
    _this.usernameChange = _this.usernameChange.bind(_assertThisInitialized(_this));
    _this.passwordChange = _this.passwordChange.bind(_assertThisInitialized(_this));
    _this.typeChange = _this.typeChange.bind(_assertThisInitialized(_this));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(index, [{
    key: "tick",
    value: function tick() {
      this.setState(function (prevState, props) {
        return {
          seconds: prevState.seconds + 1
        };
      });
    }
  }, {
    key: "testPrint",
    value: function testPrint() {
      console.log('test');
    }
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var resp, data, dataStudent, _resp, _data, dataTeacher, _resp2, _data2, dataTeacherAssistant, _resp3, _data3, _dataTeacherAssistant;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.type == 'student')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 3;
                return fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/studentlogin', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    apiKey: "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn: "1",
                    student_username: this.state.username,
                    student_password: this.state.password
                  })
                });

              case 3:
                resp = _context.sent;
                _context.next = 6;
                return resp.json();

              case 6:
                data = _context.sent;
                dataStudent = data.data;

                if (data.status === 1) {
                  localStorage.setItem('isStudent', 'true');
                  localStorage.setItem('studentFirstName', dataStudent.studentName);
                  localStorage.setItem('studentLastName', dataStudent.studentLastname);
                  localStorage.setItem('studentUsername', this.state.username);
                  localStorage.setItem('studentPassword', this.state.password);
                  localStorage.setItem('studentGender', dataStudent.studentGender);
                  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/student-course');
                  this.props.checkLogin('true');
                } else {
                  this.setState({
                    username: ''
                  });
                  this.setState({
                    password: ''
                  });
                  this.setState({
                    status_login: 'wrong'
                  });
                }

                _context.next = 42;
                break;

              case 11:
                if (!(this.state.type == 'teacher')) {
                  _context.next = 22;
                  break;
                }

                _context.next = 14;
                return fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/teacherlogin', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    apiKey: "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn: "1",
                    teacher_username: this.state.username,
                    teacher_password: this.state.password
                  })
                });

              case 14:
                _resp = _context.sent;
                _context.next = 17;
                return _resp.json();

              case 17:
                _data = _context.sent;
                dataTeacher = _data.data;

                if (_data.status === 1) {
                  localStorage.setItem('isTeacher', 'true');
                  localStorage.setItem('teacherID', dataTeacher.teacherID);
                  localStorage.setItem('teacherFirstName', dataTeacher.teacherName);
                  localStorage.setItem('teacherLastName', dataTeacher.teacherLastname);
                  localStorage.setItem('teacherUsername', this.state.username);
                  localStorage.setItem('teacherPassword', this.state.password);
                  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/teacher-course');
                  this.props.checkLogin('true');
                } else {
                  this.setState({
                    username: ''
                  });
                  this.setState({
                    password: ''
                  });
                  this.setState({
                    status_login: 'wrong'
                  });
                }

                _context.next = 42;
                break;

              case 22:
                if (!(this.state.type == 'ta')) {
                  _context.next = 33;
                  break;
                }

                _context.next = 25;
                return fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/talogin', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    apiKey: "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn: "1",
                    ta_username: this.state.username,
                    ta_password: this.state.password
                  })
                });

              case 25:
                _resp2 = _context.sent;
                _context.next = 28;
                return _resp2.json();

              case 28:
                _data2 = _context.sent;
                dataTeacherAssistant = _data2.data;

                if (_data2.status === 1) {
                  localStorage.setItem('isTeacherAssistant', 'true');
                  localStorage.setItem('teacherAssistantFirstName', dataTeacherAssistant.taName);
                  localStorage.setItem('teacherAssistantLastName', dataTeacherAssistant.taLastname);
                  localStorage.setItem('teacherAssistantUsername', this.state.username);
                  localStorage.setItem('teacherAssistantPassword', this.state.password);
                  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/ta-course');
                  this.props.checkLogin('true');
                } else {
                  this.setState({
                    username: ''
                  });
                  this.setState({
                    password: ''
                  });
                  this.setState({
                    status_login: 'wrong'
                  });
                }

                _context.next = 42;
                break;

              case 33:
                if (!(this.state.type == 'admin')) {
                  _context.next = 42;
                  break;
                }

                _context.next = 36;
                return fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/talogin', {
                  method: 'post',
                  headers: {
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    apiKey: "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn: "1",
                    ta_username: this.state.username,
                    ta_password: this.state.password
                  })
                });

              case 36:
                _resp3 = _context.sent;
                _context.next = 39;
                return _resp3.json();

              case 39:
                _data3 = _context.sent;
                _dataTeacherAssistant = _data3.data;

                if (_data3.status === 1) {
                  localStorage.setItem('isAdmin', 'true');
                  localStorage.setItem('adminFirstName', _dataTeacherAssistant.taName);
                  localStorage.setItem('adminLastName', _dataTeacherAssistant.taLastname);
                  __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/admin');
                  this.props.checkLogin('true');
                } else {
                  this.setState({
                    username: ''
                  });
                  this.setState({
                    password: ''
                  });
                  this.setState({
                    status_login: 'wrong'
                  });
                }

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function login() {
        return _login.apply(this, arguments);
      };
    }()
  }, {
    key: "usernameChange",
    value: function usernameChange(event) {
      this.setState({
        username: event.target.value
      });
    }
  }, {
    key: "passwordChange",
    value: function passwordChange(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "typeChange",
    value: function typeChange(event) {
      this.setState({
        type: event.target.value
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var isStudent, isTeacher, isTeacherAssistant, isAdmin;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isStudent = localStorage.getItem("isStudent");
                isTeacher = localStorage.getItem("isTeacher");
                isTeacherAssistant = localStorage.getItem("isTeacherAssistant");
                isAdmin = localStorage.getItem("isAdmin");

                if (!(isStudent == 'true')) {
                  _context2.next = 8;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/student-course');
                _context2.next = 21;
                break;

              case 8:
                if (!(isTeacher == 'true')) {
                  _context2.next = 12;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/teacher-course');
                _context2.next = 21;
                break;

              case 12:
                if (!(isTeacherAssistant == 'true')) {
                  _context2.next = 16;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/ta-course');
                _context2.next = 21;
                break;

              case 16:
                if (!(isAdmin == 'true')) {
                  _context2.next = 20;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/admin');
                _context2.next = 21;
                break;

              case 20:
                return _context2.abrupt("return", false);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container",
        style: {
          'paddingTop': '70px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_login_login_form__["a" /* default */], {
        message: this.props.message,
        username: this.state.username,
        password: this.state.password,
        usernameChange: this.usernameChange,
        passwordChange: this.passwordChange,
        type: this.state.type,
        typeChange: this.typeChange,
        status_login: this.state.status_login,
        login: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res, json, message;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch('https://jsonplaceholder.typicode.com/posts');

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return res.json();

              case 5:
                json = _context3.sent;
                message = "hello";
                return _context3.abrupt("return", {
                  json: json,
                  message: message
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map