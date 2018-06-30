webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_timer__ = __webpack_require__("./components/login/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_form__ = __webpack_require__("./components/login/login-form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
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
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.props.isLogin == 'student')) {
                  _context2.next = 4;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/student-course');
                _context2.next = 17;
                break;

              case 4:
                if (!(this.props.isLogin == 'teacher')) {
                  _context2.next = 8;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/teacher-course');
                _context2.next = 17;
                break;

              case 8:
                if (!(this.props.isLogin == 'ta')) {
                  _context2.next = 12;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/ta-course');
                _context2.next = 17;
                break;

              case 12:
                if (!(this.props.isLogin == 'admin')) {
                  _context2.next = 16;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_5_next_router___default.a.push('/admin');
                _context2.next = 17;
                break;

              case 16:
                return _context2.abrupt("return", false);

              case 17:
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
          'paddingTop': '80px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
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
          lineNumber: 240
        }
      }))));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.055d2bb5135c48a2ab97.hot-update.js.map