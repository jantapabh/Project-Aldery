webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: url, urlpost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlpost", function() { return urlpost; });
var url = 'https://sheets.googleapis.com/v4/spreadsheets/1mPsLDG_yN00jPw7srBREF-sXf5WYSxxoaJV0_6CI31Q/values/';
var urlpost = 'https://www.googleapis.com/oauth2/v4/token/?client_secret=-giSWLQLlg-e-g4sITPpoO6f&grant_type=refresh_token&refresh_token=1%2FPEfDyutOZE5MJvBRkJoL4EOh9ZFKaA3tj7Xmsnv4aC4&client_id=492497205693-gous0v8uc9vkd68strl5m4i31oqusjfl.apps.googleusercontent.com';


/***/ }),

/***/ "./config/api.js":
/*!***********************!*\
  !*** ./config/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");





function getSheetValues(_x, _x2) {
  return _getSheetValues.apply(this, arguments);
}

function _getSheetValues() {
  _getSheetValues = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token, col) {
    var request;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["url"]).concat(col), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            });

          case 2:
            request = _context.sent;
            return _context.abrupt("return", request.data.values);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSheetValues.apply(this, arguments);
}

function postSheetValues() {
  return _postSheetValues.apply(this, arguments);
}

function _postSheetValues() {
  _postSheetValues = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var request;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["urlpost"]), {
              headers: {
                Authorization: "Bearer 4/qQGd-JEj1hK6bmd0w0ESGCh7y-qrQNS4-pEwPb7nt-H3aPUhcUmA0FQx1cNs1GapRQ_wePGf4e6eXWGVTuhgY6E",
                Content_Type: "application/x-www-form-urlencoded",
                User_Agent: "google-oauth-playground",
                Content_length: "208",
                Host: "www.googleapis.com"
              }
            });

          case 2:
            request = _context2.sent;
            return _context2.abrupt("return", request);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postSheetValues.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getSheetValues: getSheetValues,
  postSheetValues: postSheetValues
});

/***/ })

})
//# sourceMappingURL=main.js.543f4e5c5e5a5b36087d.hot-update.js.map