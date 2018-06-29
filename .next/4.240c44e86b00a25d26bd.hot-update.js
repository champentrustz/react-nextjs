webpackHotUpdate(4,{

/***/ "./components/login/login-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\react-nextjs\\components\\login\\login-form.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var StatusLogin = function StatusLogin(props) {
  if (props.status_login === 'wrong') {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
      className: "text-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, "\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14! \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }));
  } else {
    return false;
  }
};

var LoginForm = function LoginForm(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../../static/image/ssru00.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "GE Smart Classroom"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StatusLogin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-6 offset-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
    className: "form-control",
    style: {
      width: '150px'
    },
    value: props.type,
    onChange: props.typeChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "student",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "\u0E19\u0E31\u0E01\u0E28\u0E36\u0E01\u0E29\u0E32"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "teacher",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "\u0E2D\u0E32\u0E08\u0E32\u0E23\u0E22\u0E4C"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "ta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22\u0E2A\u0E2D\u0E19"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
    value: "admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    value: props.username,
    onChange: props.usernameChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    type: "password",
    className: "form-control",
    value: props.password,
    onChange: props.passwordChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "btn btn-success btn-block",
    onClick: props.login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  })));
};

var _default = LoginForm;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StatusLogin, "StatusLogin", "D:\\react-nextjs\\components\\login\\login-form.js");
  reactHotLoader.register(LoginForm, "LoginForm", "D:\\react-nextjs\\components\\login\\login-form.js");
  reactHotLoader.register(_default, "default", "D:\\react-nextjs\\components\\login\\login-form.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.240c44e86b00a25d26bd.hot-update.js.map