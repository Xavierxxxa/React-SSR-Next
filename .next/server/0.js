exports.ids = [0];
exports.modules = {

/***/ "./pages/code_splitting/Restapi.js":
/*!*****************************************!*\
  !*** ./pages/code_splitting/Restapi.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\xavie\\OneDrive\\Documentos\\RECODE\\React_Next\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: this.props.repositories.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: repo.name
      }, repo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this);
  }

}

_defineProperty(Home, "getInitialProps", async () => {
  const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
  return {
    repositories: await response.json()
  };
});

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJyZXBvc2l0b3JpZXMiLCJtYXAiLCJyZXBvIiwibmFtZSIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNQSxJQUFOLFNBQW1CQywrQ0FBbkIsQ0FBNkI7QUFTMUNDLFFBQU0sR0FBRztBQUNQLHdCQUNFO0FBQUEsZ0JBQ0csS0FBS0MsS0FBTCxDQUFXQyxZQUFYLENBQXdCQyxHQUF4QixDQUE0QkMsSUFBSSxpQkFDL0I7QUFBQSxrQkFBbUJBLElBQUksQ0FBQ0M7QUFBeEIsU0FBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU9EOztBQWpCeUM7O2dCQUF2QlIsSSxxQkFDTSxZQUFZO0FBQ25DLFFBQU1TLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLDhDQUQwQixDQUE1QjtBQUlBLFNBQU87QUFBRU4sZ0JBQVksRUFBRSxNQUFNSyxRQUFRLENBQUNFLElBQVQ7QUFBdEIsR0FBUDtBQUNELEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL3JvY2tldHNlYXQvcmVwb3NcIlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4geyByZXBvc2l0b3JpZXM6IGF3YWl0IHJlc3BvbnNlLmpzb24oKSB9O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RoaXMucHJvcHMucmVwb3NpdG9yaWVzLm1hcChyZXBvID0+IChcclxuICAgICAgICAgIDxoMSBrZXk9e3JlcG8uaWR9PntyZXBvLm5hbWV9PC9oMT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=