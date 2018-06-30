webpackHotUpdate(4,{

/***/ "./components/login/login-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    className: "text-center",
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
    className: "col-md-12 ",
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

/***/ })

})
//# sourceMappingURL=4.cfaad2c668a21e97067b.hot-update.js.map