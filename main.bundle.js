"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Quicksand-VariableFont_wght.ttf */ "./src/assets/fonts/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/search-icon-white.svg */ "./src/assets/icons/search-icon-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/left-arrow.svg */ "./src/assets/icons/left-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/dot-small-svgrepo-com.svg */ "./src/assets/icons/dot-small-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/right-arrow.svg */ "./src/assets/icons/right-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: quicksand;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})
}

html {
    font-family: quicksand;
    font-weight: 700;
}

body {
    margin: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(to bottom, #04689d, #1675aa, #2382b8, #2f90c5, #3a9ed3);
}

.header {
    width: 100vw;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
}

.main {
    height: calc(100vh - 150px)
}

.footer {
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    color: white;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}

.search-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    border-radius: 1.625rem;
    background-color:rgba(2, 25, 54, 0.842);
    border: 2px solid rgba(2, 25, 54, 0);
    height: 35px;
    width: 280px;
}
.search-form:focus {
    border:2px solid white;
    color: white;
}

.search-location {
    background-color: rgba(255, 255, 255, 0);
    color: white;
    height: 35px;
    width: 160px;
    padding: 0px;
    padding-left: 20px;
    font-weight: 800;
    font-size: 1rem;
    outline: none;
    border: none;
}
.search-location::placeholder {
    color: rgba(173, 173, 173, 0.89);
    font-weight: 600;
    font-size: 1rem;
}
.search-location:-webkit-autofill,
.search-location:-webkit-autofill:focus {
    transition: background-color 0s 600000s, color 0s 600000s;
    font-weight: 800;
    font-size: 1rem;
}

.search-icon {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    padding-right: 15px;
}
.search-icon:hover {
    cursor: pointer;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.current-weather {
    width: 40rem;
    height: 400px;
    color: white;
}

.location-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
}
.location-name {
    font-size: 2rem;
}
.date-time {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.507);
}

.weather-info {
    display: flex;
    height: 300px;
    margin-top: 30px;
}

.basic-weather {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    margin-right: 1.5rem;
}
.basic-icon-temp {
    display: flex;
    align-items: center;
}
.basic-weather-icon {
    display: none;
    background-size: contain;
    background-repeat: no-repeat;
    color: white;
    width: 4rem;
    height: 4rem;
}
.basic-temperature {
    font-size: 3rem;
    text-align: right;
}
.weather-description, .weather-feels-like {
    text-align: center;
    margin-left: 1rem;
    margin-top: 5px;
    font-size: 1.3rem;
}
.weather-feels-like {
    color: rgba(255, 255, 255, 0.507);
}

.data-item {
    display: none;
    align-items: center;
}
.moon-phase {
    text-align: center;
}
.data-label {
    color:rgba(255, 255, 255, 0.507);
}
.detailed-weather {
    display: grid;
    grid-template-columns: 33fr 33fr 33fr;
    grid-template-rows: 33fr 33fr 33fr;
    width: 65%;
}
.data-item > :nth-child(2) {
    margin-top: 5px;
    font-size: 1.2rem;
}

.forecast-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}

.navigation-controls {
    height: 40px;
    display: none;
    align-items: center;
}
.arrow-left {
    display: none;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
}
.arrow-left:hover {
    cursor: pointer;
}
.dot {
    display: none;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
}
.arrow-right {
    display: none;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
}
.arrow-right:hover {
    cursor: pointer;
}
.hourly-forecast {
    width: 60rem;
    height: 200px;
}
.six-hour-block {
    width: 60rem;
    height: 200px;
    position: absolute;
    display: none;
    color: white;
}
.hour {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly
}
.hour > * {
    user-select: none; 
}
.hourly-time {
    font-size: 1.25rem;
}
.hourly-temp {
    font-size: 2rem;
}

.block-two, .block-three, .block-four {
    display: none;
}
.hour {
    height: 100%;
    width: 100%;
}

.daily-forecast {
    display: none;
    flex-direction: column;
    color: white;
    width: 35rem;
    height: 400px;
    margin-top: 50px;
}
.forecast-title {
    font-size: 1.75rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.day {
    display: flex;
    align-content: center;
    font-size: 1.2rem;
    vertical-align: bottom;
    align-items: center;
    margin-top: 0.5rem;
}
.day-name {
    width: 25%;
    margin-left: 10%;
}
.day-max {
    width: 20%;
    margin-left: 10%;
}
.day-min {
    color: rgba(255, 255, 255, 0.596);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB;AACJ;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,yFAAyF;AAC7F;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,uBAAuB;IACvB,uCAAuC;IACvC,oCAAoC;IACpC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,wCAAwC;IACxC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,YAAY;AAChB;AACA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;AACnB;AACA;;IAEI,yDAAyD;IACzD,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,yDAA2D;IAC3D,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,UAAU;AACd;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,yDAAoD;IACpD,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,yDAA+D;IAC/D,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;AACf;AACA;IACI,aAAa;IACb,yDAAqD;IACrD,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;AACnB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB;AACJ;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,iCAAiC;AACrC","sourcesContent":["@font-face {\n    font-family: quicksand;\n    src: url(./assets/fonts/Quicksand-VariableFont_wght.ttf)\n}\n\nhtml {\n    font-family: quicksand;\n    font-weight: 700;\n}\n\nbody {\n    margin: 0px;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-image: linear-gradient(to bottom, #04689d, #1675aa, #2382b8, #2f90c5, #3a9ed3);\n}\n\n.header {\n    width: 100vw;\n    display: flex;\n    height: 100px;\n    align-items: center;\n    justify-content: center;\n}\n\n.main {\n    height: calc(100vh - 150px)\n}\n\n.footer {\n    height: 50px;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\na {\n    color: white;\n    text-decoration: none;\n}\na:hover{\n    text-decoration: underline;\n}\n\n.search-form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px;\n    border-radius: 1.625rem;\n    background-color:rgba(2, 25, 54, 0.842);\n    border: 2px solid rgba(2, 25, 54, 0);\n    height: 35px;\n    width: 280px;\n}\n.search-form:focus {\n    border:2px solid white;\n    color: white;\n}\n\n.search-location {\n    background-color: rgba(255, 255, 255, 0);\n    color: white;\n    height: 35px;\n    width: 160px;\n    padding: 0px;\n    padding-left: 20px;\n    font-weight: 800;\n    font-size: 1rem;\n    outline: none;\n    border: none;\n}\n.search-location::placeholder {\n    color: rgba(173, 173, 173, 0.89);\n    font-weight: 600;\n    font-size: 1rem;\n}\n.search-location:-webkit-autofill,\n.search-location:-webkit-autofill:focus {\n    transition: background-color 0s 600000s, color 0s 600000s;\n    font-weight: 800;\n    font-size: 1rem;\n}\n\n.search-icon {\n    background-image: url(./assets/icons/search-icon-white.svg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 20px;\n    width: 20px;\n    padding-right: 15px;\n}\n.search-icon:hover {\n    cursor: pointer;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.current-weather {\n    width: 40rem;\n    height: 400px;\n    color: white;\n}\n\n.location-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n}\n.location-name {\n    font-size: 2rem;\n}\n.date-time {\n    font-size: 1.25rem;\n    color: rgba(255, 255, 255, 0.507);\n}\n\n.weather-info {\n    display: flex;\n    height: 300px;\n    margin-top: 30px;\n}\n\n.basic-weather {\n    width: 35%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 3rem;\n    margin-right: 1.5rem;\n}\n.basic-icon-temp {\n    display: flex;\n    align-items: center;\n}\n.basic-weather-icon {\n    display: none;\n    background-size: contain;\n    background-repeat: no-repeat;\n    color: white;\n    width: 4rem;\n    height: 4rem;\n}\n.basic-temperature {\n    font-size: 3rem;\n    text-align: right;\n}\n.weather-description, .weather-feels-like {\n    text-align: center;\n    margin-left: 1rem;\n    margin-top: 5px;\n    font-size: 1.3rem;\n}\n.weather-feels-like {\n    color: rgba(255, 255, 255, 0.507);\n}\n\n.data-item {\n    display: none;\n    align-items: center;\n}\n.moon-phase {\n    text-align: center;\n}\n.data-label {\n    color:rgba(255, 255, 255, 0.507);\n}\n.detailed-weather {\n    display: grid;\n    grid-template-columns: 33fr 33fr 33fr;\n    grid-template-rows: 33fr 33fr 33fr;\n    width: 65%;\n}\n.data-item > :nth-child(2) {\n    margin-top: 5px;\n    font-size: 1.2rem;\n}\n\n.forecast-weather {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n}\n\n.navigation-controls {\n    height: 40px;\n    display: none;\n    align-items: center;\n}\n.arrow-left {\n    display: none;\n    background-image: url(./assets/icons/left-arrow.svg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 40px;\n    width: 40px;\n}\n.arrow-left:hover {\n    cursor: pointer;\n}\n.dot {\n    display: none;\n    background-image: url(./assets/icons/dot-small-svgrepo-com.svg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 30px;\n    width: 30px;\n}\n.arrow-right {\n    display: none;\n    background-image: url(./assets/icons/right-arrow.svg);\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 40px;\n    width: 40px;\n}\n.arrow-right:hover {\n    cursor: pointer;\n}\n.hourly-forecast {\n    width: 60rem;\n    height: 200px;\n}\n.six-hour-block {\n    width: 60rem;\n    height: 200px;\n    position: absolute;\n    display: none;\n    color: white;\n}\n.hour {\n    height: 200px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly\n}\n.hour > * {\n    user-select: none; \n}\n.hourly-time {\n    font-size: 1.25rem;\n}\n.hourly-temp {\n    font-size: 2rem;\n}\n\n.block-two, .block-three, .block-four {\n    display: none;\n}\n.hour {\n    height: 100%;\n    width: 100%;\n}\n\n.daily-forecast {\n    display: none;\n    flex-direction: column;\n    color: white;\n    width: 35rem;\n    height: 400px;\n    margin-top: 50px;\n}\n.forecast-title {\n    font-size: 1.75rem;\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.day {\n    display: flex;\n    align-content: center;\n    font-size: 1.2rem;\n    vertical-align: bottom;\n    align-items: center;\n    margin-top: 0.5rem;\n}\n.day-name {\n    width: 25%;\n    margin-left: 10%;\n}\n.day-max {\n    width: 20%;\n    margin-left: 10%;\n}\n.day-min {\n    color: rgba(255, 255, 255, 0.596);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/template.html":
/*!***************************!*\
  !*** ./src/template.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>How's the Weather?</title>\n</head>\n<body>\n    <div class=\"header\">\n        <form class=\"search-form\" novalidate>\n            <input type=\"text\" class=\"search-location\" name=\"searchLocaiton\" placeholder=\"Search location\">\n            <div class=\"search-icon\"></div>\n        </form>\n    </div>\n    <div class=\"main\">\n        <div class=\"current-weather\">\n            <div class=\"location-info\">\n                <div class=\"location-name\"></div>\n                <div class=\"date-time\"></div>\n            </div>\n            <div class=\"weather-info\">\n                <div class=\"basic-weather\">\n                    <div class=\"basic-icon-temp\">\n                        <img alt=\"Weather Icon\" class=\"basic-weather-icon\">\n                        <div class=\"basic-temperature\"></div>\n                    </div>\n                    <div class=\"weather-description\"></div>\n                    <div class=\"weather-feels-like\"></div>\n                </div>\n                <div class=\"detailed-weather\">\n                    <div class=\"data-item\" id=\"item-1\">\n                        <div class=\"data-label\">Wind</div>\n                        <div class=\"wind-speed\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-2\">\n                        <div class=\"data-label\">Humidity</div>\n                        <div class=\"humidity\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-3\">\n                        <div class=\"data-label\">UV Index</div>\n                        <div class=\"uv-index\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-4\">\n                        <div class=\"data-label\">Visibility</div>\n                        <div class=\"visibility\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-5\">\n                        <div class=\"data-label\">Cloudiness</div>\n                        <div class=\"chance-of-rain\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-6\">\n                        <div class=\"data-label\">Chance of Rain</div>\n                        <div class=\"rainfall\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-7\">\n                        <div class=\"data-label\">Sunrise</div>\n                        <div class=\"sunrise\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-8\">\n                        <div class=\"data-label\">Sunset</div>\n                        <div class=\"sunset\"></div>\n                    </div>\n                    <div class=\"data-item\" id=\"item-9\">\n                        <div class=\"data-label\">Moon Phase</div>\n                        <div class=\"moon-phase\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"forecast-weather\">\n            <div class=\"hourly-forecast\">\n                <div class=\"six-hour-block block-one\">\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                </div>\n                <div class=\"six-hour-block block-two\">\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                </div>\n                <div class=\"six-hour-block block-three\">\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                </div>\n                <div class=\"six-hour-block block-four\">\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                    <div class=\"hour\"></div>\n                </div>\n            </div>\n            <div class=\"navigation-controls\">\n                <div class=\"arrow-left\"></div>\n                <div class=\"dot dot-one\"></div>\n                <div class=\"dot dot-two\"></div>\n                <div class=\"dot dot-three\"></div>\n                <div class=\"dot dot-four\"></div>\n                <div class=\"arrow-right\"></div>\n            </div>\n            <div class=\"daily-forecast\">\n                <div class=\"forecast-title\">Three Day Forecast</div>\n                <div class=\"day day-one\"></div>\n                <div class=\"day day-two\"></div>\n                <div class=\"day day-three\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <a href=\"https://github.com/Frobii/weather-app\" class=\"github-repo\">Source Code</a>\n    </div>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api = (() => {
  function getDayName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  function getMonthName(dateStr) {
    const date = new Date(dateStr);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return month[date.getMonth()];
  }

  async function fetchThreeDayForecast(location) {
    const apiKey = '595f8949c2a74450b66224031231408';
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5`,
        { mode: 'cors' },
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const fetchedData = await response.json();
      return fetchedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function getLocationDetails(fetchedData) {
    try {
      const currentWeather = fetchedData.current;

      const locationName = `${fetchedData.location.name}, ${fetchedData.location.country}`;
      const dateTime = currentWeather.last_updated.split(' ');
      const date = dateTime[0];
      const time = dateTime[1];
      const dayName = getDayName(date, 'en-US');
      const monthName = getMonthName(date);
      const year = date.substring(0, 4);
      const day = date.substring(8, 10);

      const displayDate = `${dayName} ${day} ${monthName} ${year} | ${time}`;

      return {
        locationName,
        displayDate,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function getCurrentWeather(fetchedData) {
    try {
      const currentWeather = fetchedData.current;
      const forecastArray = await fetchedData.forecast.forecastday;
      const todaysForecast = await forecastArray[0].day;
      const astroData = await forecastArray[0].astro;

      // console.log('current', currentWeather);
      // console.log('forecast', todaysForecast);
      // console.log('astro', astroData);

      const currentCondition = currentWeather.condition.text;
      const currentConditionIcon = currentWeather.condition.icon;
      const forecastCondition = todaysForecast.condition.text;
      const forecastConditionIcon = todaysForecast.condition.icon;
      const { sunrise } = astroData;
      const { sunset } = astroData;
      const moonPhase = astroData.moon_phase;
      const currentTempC = currentWeather.temp_c;
      const currentTempF = currentWeather.temp_f;
      const { humidity } = currentWeather;
      const feelsLikeC = currentWeather.feelslike_c;
      const feelsLikeF = currentWeather.feelslike_f;
      const rainfallMillimeters = todaysForecast.totalprecip_mm;
      const chanceOfRain = todaysForecast.daily_chance_of_rain;
      const windSpeed = currentWeather.wind_kph;
      const visibility = currentWeather.vis_km;
      const uvIndex = currentWeather.uv;

      return {
        currentCondition,
        currentConditionIcon,
        forecastCondition,
        forecastConditionIcon,
        sunrise,
        sunset,
        moonPhase,
        currentTempC,
        currentTempF,
        humidity,
        feelsLikeC,
        feelsLikeF,
        rainfallMillimeters,
        chanceOfRain,
        windSpeed,
        visibility,
        uvIndex,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  function getCurrentTime(fetchedData) {
    const currentWeather = fetchedData.current;

    const dateTime = currentWeather.last_updated.split(' ');
    const currentTime = dateTime[1];

    return currentTime;
  }

  async function getHourlyForecast(fetchedData) {
    try {
      const forecastArray = await fetchedData.forecast.forecastday;
      const hourlyDataToday = await forecastArray[0].hour;
      const hourlyDataTomorrow = await forecastArray[1].hour;
      const currentTime = getCurrentTime(fetchedData);
      const currentTimeRoundDown = `${currentTime.substring(0, 3)}00`;
      const processed48Hours = [];
      const next24Hours = [];

      hourlyDataToday.forEach((hour) => {
        const hourObject = {};

        hourObject.temp_c = hour.temp_c;
        const dateTime = hour.time.split(' ');
        hourObject.time = dateTime[1];
        hourObject.icon = hour.condition.icon;

        processed48Hours.push(hourObject);
      });

      hourlyDataTomorrow.forEach((hour) => {
        const hourObject = {};

        hourObject.temp_c = hour.temp_c;
        const dateTime = hour.time.split(' ');
        hourObject.time = dateTime[1];
        hourObject.icon = hour.condition.icon;

        processed48Hours.push(hourObject);
      });

      for (let i = 0; i < 24; i += 1) {
        if (processed48Hours[i].time === currentTimeRoundDown) {
          for (let j = i; j < (i + 24); j += 1) {
            next24Hours.push(processed48Hours[j]);
          }
          break;
        }
      }

      return next24Hours;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function getThreeDayForecast(fetchedData) {
    try {
      const forecastArray = await fetchedData.forecast.forecastday;

      const dayOne = {};
      const dayTwo = {};
      const dayThree = {};
      const threeDayForecast = [dayOne, dayTwo, dayThree];
      let i = 0;

      threeDayForecast.forEach((day) => {
        const currentWeather = forecastArray[i].day;
        const { date } = forecastArray[i];
        day.dayName = getDayName(date, 'en-US');
        day.icon = currentWeather.condition.icon;
        day.maxTempC = currentWeather.maxtemp_c;
        day.minTempC = currentWeather.mintemp_c;
        day.maxTempF = currentWeather.maxtemp_f;
        day.minTempF = currentWeather.mintemp_f;
        i += 1;
      });

      return threeDayForecast;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async function getProcessedWeatherData(location) {
    try {
      const fetchedData = await fetchThreeDayForecast(location);

      const locationDetails = await getLocationDetails(fetchedData);
      const currentWeather = await getCurrentWeather(fetchedData);
      const hourlyWeather = await getHourlyForecast(fetchedData);
      const threeDayForecast = await getThreeDayForecast(fetchedData);

      return {
        locationDetails,
        currentWeather,
        hourlyWeather,
        threeDayForecast,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return {
    getProcessedWeatherData,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiToDom: () => (/* binding */ apiToDom),
/* harmony export */   controls: () => (/* binding */ controls)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/scripts/api.js");


const apiToDom = () => {
  function populateLocationDetails(locationDetails) {
    const locationName = document.querySelector('.location-name');
    const dateTime = document.querySelector('.date-time');

    locationName.textContent = locationDetails.locationName;
    dateTime.textContent = locationDetails.displayDate;
  }

  function populateBasicWeather(currentWeather) {
    const icon = document.querySelector('.basic-weather-icon');
    const temperature = document.querySelector('.basic-temperature');
    const description = document.querySelector('.weather-description');
    const feelsLike = document.querySelector('.weather-feels-like');

    icon.src = currentWeather.currentConditionIcon;
    icon.style.display = 'flex';
    temperature.textContent = `${currentWeather.currentTempC}°C`;
    description.textContent = currentWeather.currentCondition;
    feelsLike.textContent = `Feels Like ${currentWeather.feelsLikeC}°C`;
  }

  function populateDetailedWeather(currentWeather) {
    const dataItems = document.querySelectorAll('.data-item');
    const windSpeed = document.querySelector('.wind-speed');
    const humidity = document.querySelector('.humidity');
    const uvIndex = document.querySelector('.uv-index');
    const visibility = document.querySelector('.visibility');
    const rainfall = document.querySelector('.rainfall');
    const chanceOfRain = document.querySelector('.chance-of-rain');
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');
    const moonPhase = document.querySelector('.moon-phase');

    dataItems.forEach((item) => {
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
    });

    windSpeed.textContent = `${currentWeather.windSpeed}m/s`;
    humidity.textContent = `${currentWeather.humidity}%`;
    uvIndex.textContent = currentWeather.uvIndex;
    visibility.textContent = `${currentWeather.visibility}km`;
    rainfall.textContent = `${currentWeather.rainfallMillimeters}%`;
    chanceOfRain.textContent = `${currentWeather.chanceOfRain}%`;
    sunrise.textContent = currentWeather.sunrise;
    sunset.textContent = currentWeather.sunset;
    moonPhase.textContent = currentWeather.moonPhase;
  }

  function showNavControls() {
    const navControls = document.querySelector('.navigation-controls');
    navControls.style.display = 'flex';
  }

  function populateHourlyWeather(hourlyWeather) {
    const hourDivs = document.querySelectorAll('.hour');
    let i = 0;

    hourDivs.forEach((hourDiv) => {
      while (hourDiv.firstChild) {
        hourDiv.removeChild(hourDiv.firstChild);
      }
    });

    hourlyWeather.forEach((hour) => {
      const time = document.createElement('div');
      time.classList.add('hourly-time');
      time.textContent = hour.time;

      const tempC = document.createElement('div');
      tempC.classList.add('hourly-temp');
      tempC.textContent = `${hour.temp_c}°C`;

      const icon = document.createElement('img');
      tempC.classList.add('hourly-icon');
      icon.alt = 'Weather Icon';
      icon.src = hour.icon;

      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      iconContainer.appendChild(icon);

      hourDivs[i].appendChild(time);
      hourDivs[i].appendChild(tempC);
      hourDivs[i].appendChild(iconContainer);
      i += 1;
    });

    showNavControls();
  }

  function populateWeeklyWeather(forecastWeather) {
    const forecastContainer = document.querySelector('.daily-forecast');
    forecastContainer.style.display = 'flex';
    const dayOne = document.querySelector('.day-one');
    const dayTwo = document.querySelector('.day-two');
    const dayThree = document.querySelector('.day-three');
    const days = [dayOne, dayTwo, dayThree];
    let i = 0;

    days.forEach((day) => {
      while (day.firstChild) {
        day.removeChild(day.firstChild);
      }
    });

    forecastWeather.forEach((day) => {
      const dayName = document.createElement('div');
      dayName.classList.add('day-name');
      const dayMax = document.createElement('div');
      dayMax.classList.add('day-max');
      const dayMin = document.createElement('div');
      dayMin.classList.add('day-min');
      const dayIcon = document.createElement('img');
      dayIcon.classList.add('day-icon');
      const iconContainer = document.createElement('div');
      iconContainer.classList.add('icon-container');
      iconContainer.appendChild(dayIcon);

      dayName.textContent = day.dayName;
      dayIcon.src = day.icon;
      dayIcon.alt = 'Weather Icon';
      dayMax.textContent = `${day.maxTempC}°C`;
      dayMin.textContent = `${day.minTempC}°C`;

      days[i].appendChild(dayName);
      days[i].appendChild(dayIcon);
      days[i].appendChild(dayMax);
      days[i].appendChild(dayMin);

      i += 1;
    });
  }

  async function populateDom(searchData) {
    try {
      const processedWeather = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].getProcessedWeatherData(searchData);

      if (!processedWeather) {
        return;
      }

      const { locationDetails } = processedWeather;
      const { currentWeather } = processedWeather;
      const { hourlyWeather } = processedWeather;
      const { threeDayForecast } = processedWeather;

      // console.log('details', locationDetails);
      // console.log('current', currentWeather);
      // console.log('hourly', hourlyWeather);
      // console.log('forecast', forecastWeather);

      populateLocationDetails(locationDetails);
      populateBasicWeather(currentWeather);
      populateDetailedWeather(currentWeather);
      populateHourlyWeather(hourlyWeather);
      populateWeeklyWeather(threeDayForecast);
    } catch (error) {
      console.error(error);
    }
  }

  return { populateDom };
};

const controls = () => {
  function initializeNavigationControls() {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const arrows = [arrowLeft, arrowRight];

    arrows.forEach((control) => {
      control.style.display = 'flex';
    });

    const dots = document.querySelectorAll('.dot');
    const dotOne = dots[0];
    const dotTwo = dots[1];
    const dotThree = dots[2];
    const dotFour = dots[3];

    dots.forEach((control) => {
      control.style.display = 'flex';
    });

    dotOne.style.filter = 'brightness(30%)';

    const blockOne = document.querySelector('.block-one');
    const blockTwo = document.querySelector('.block-two');
    const blockThree = document.querySelector('.block-three');
    const blockFour = document.querySelector('.block-four');

    blockOne.style.display = 'flex';

    arrowRight.addEventListener('click', () => {
      if (blockOne.style.display === 'flex') {
        blockOne.style.display = 'none';
        blockTwo.style.display = 'flex';
        dotOne.style.filter = 'brightness(100%)';
        dotTwo.style.filter = 'brightness(30%)';
      } else if (blockTwo.style.display === 'flex') {
        blockTwo.style.display = 'none';
        blockThree.style.display = 'flex';
        dotTwo.style.filter = 'brightness(100%)';
        dotThree.style.filter = 'brightness(30%)';
      } else if (blockThree.style.display === 'flex') {
        blockThree.style.display = 'none';
        blockFour.style.display = 'flex';
        dotThree.style.filter = 'brightness(100%)';
        dotFour.style.filter = 'brightness(30%)';
      }
    });

    arrowLeft.addEventListener('click', () => {
      if (blockFour.style.display === 'flex') {
        blockFour.style.display = 'none';
        blockThree.style.display = 'flex';
        dotFour.style.filter = 'brightness(100%)';
        dotThree.style.filter = 'brightness(30%)';
      } else if (blockThree.style.display === 'flex') {
        blockThree.style.display = 'none';
        blockTwo.style.display = 'flex';
        dotThree.style.filter = 'brightness(100%)';
        dotTwo.style.filter = 'brightness(30%)';
      } else if (blockTwo.style.display === 'flex') {
        blockTwo.style.display = 'none';
        blockOne.style.display = 'flex';
        dotTwo.style.filter = 'brightness(100%)';
        dotOne.style.filter = 'brightness(30%)';
      }
    });
  }

  function setSearchEvents() {
    const searchBar = document.querySelector('.search-location');
    const searchIcon = document.querySelector('.search-icon');

    searchBar.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        const searchBar = document.querySelector('.search-location');
        const searchData = searchBar.value;
        apiToDom().populateDom(searchData);
      }
    });
    searchIcon.addEventListener('click', () => {
      const searchBar = document.querySelector('.search-location');
      const searchData = searchBar.value;
      apiToDom().populateDom(searchData);
    });
  }

  function initializeControls() {
    initializeNavigationControls();
    setSearchEvents();
  }

  return {
    initializeControls,
  };
};




/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template.html */ "./src/template.html");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/scripts/dom.js");




(0,_dom__WEBPACK_IMPORTED_MODULE_2__.controls)().initializeControls();

(0,_dom__WEBPACK_IMPORTED_MODULE_2__.apiToDom)().populateDom('Benevento');


/***/ }),

/***/ "./src/assets/fonts/Quicksand-VariableFont_wght.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Quicksand-VariableFont_wght.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6829efb7827c490befe6.ttf";

/***/ }),

/***/ "./src/assets/icons/dot-small-svgrepo-com.svg":
/*!****************************************************!*\
  !*** ./src/assets/icons/dot-small-svgrepo-com.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a33f3be7f45b243e7507.svg";

/***/ }),

/***/ "./src/assets/icons/left-arrow.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/left-arrow.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f90a9cd2ee676d65713.svg";

/***/ }),

/***/ "./src/assets/icons/right-arrow.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/right-arrow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fde890f3bf95680d0e3c.svg";

/***/ }),

/***/ "./src/assets/icons/search-icon-white.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/search-icon-white.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39a5b2134ca49aa40ac5.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMscUpBQXVEO0FBQ25HLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMseUlBQWlEO0FBQzdGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFB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QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUtFOzs7Ozs7Ozs7Ozs7Ozs7QUM1UW9CO0FBQ0k7QUFDaUI7O0FBRTNDLDhDQUFROztBQUVSLDhDQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL3NlYXJjaC1pY29uLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2xlZnQtYXJyb3cuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaWNvbnMvZG90LXNtYWxsLXN2Z3JlcG8tY29tLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL3JpZ2h0LWFycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSlcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA0Njg5ZCwgIzE2NzVhYSwgIzIzODJiOCwgIzJmOTBjNSwgIzNhOWVkMyk7XG59XG5cbi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4ge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KVxufVxuXG4uZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zZWFyY2gtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMS42MjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIsIDI1LCA1NCwgMC44NDIpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMiwgMjUsIDU0LCAwKTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDI4MHB4O1xufVxuLnNlYXJjaC1mb3JtOmZvY3VzIHtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlYXJjaC1sb2NhdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnNlYXJjaC1sb2NhdGlvbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDE3MywgMTczLCAxNzMsIDAuODkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLnNlYXJjaC1sb2NhdGlvbjotd2Via2l0LWF1dG9maWxsLFxuLnNlYXJjaC1sb2NhdGlvbjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzIDYwMDAwMHMsIGNvbG9yIDBzIDYwMDAwMHM7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zZWFyY2gtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnNlYXJjaC1pY29uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmN1cnJlbnQtd2VhdGhlciB7XG4gICAgd2lkdGg6IDQwcmVtO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9jYXRpb24taW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5sb2NhdGlvbi1uYW1lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG4uZGF0ZS10aW1lIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDcpO1xufVxuXG4ud2VhdGhlci1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJhc2ljLXdlYXRoZXIge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5iYXNpYy1pY29uLXRlbXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iYXNpYy13ZWF0aGVyLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbn1cbi5iYXNpYy10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndlYXRoZXItZGVzY3JpcHRpb24sIC53ZWF0aGVyLWZlZWxzLWxpa2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ud2VhdGhlci1mZWVscy1saWtlIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwNyk7XG59XG5cbi5kYXRhLWl0ZW0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb29uLXBoYXNlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGF0YS1sYWJlbCB7XG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwNyk7XG59XG4uZGV0YWlsZWQtd2VhdGhlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzZnIgMzNmciAzM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzNmciAzM2ZyIDMzZnI7XG4gICAgd2lkdGg6IDY1JTtcbn1cbi5kYXRhLWl0ZW0gPiA6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5mb3JlY2FzdC13ZWF0aGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ubmF2aWdhdGlvbi1jb250cm9scyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hcnJvdy1sZWZ0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4uYXJyb3ctbGVmdDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRvdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLmFycm93LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4uYXJyb3ctcmlnaHQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ob3VybHktZm9yZWNhc3Qge1xuICAgIHdpZHRoOiA2MHJlbTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuLnNpeC1ob3VyLWJsb2NrIHtcbiAgICB3aWR0aDogNjByZW07XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uaG91ciB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVxufVxuLmhvdXIgPiAqIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgXG59XG4uaG91cmx5LXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5ob3VybHktdGVtcCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uYmxvY2stdHdvLCAuYmxvY2stdGhyZWUsIC5ibG9jay1mb3VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmhvdXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRhaWx5LWZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uZm9yZWNhc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmRheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5kYXktbmFtZSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmRheS1tYXgge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5kYXktbWluIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU5Nik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHlGQUF5RjtBQUM3Rjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNa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LGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcXVpY2tzYW5kO1xcbiAgICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmKVxcbn1cXG5cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNDY4OWQsICMxNjc1YWEsICMyMzgyYjgsICMyZjkwYzUsICMzYTllZDMpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweClcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5hOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMiwgMjUsIDU0LCAwLjg0Mik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMiwgMjUsIDU0LCAwKTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMjgwcHg7XFxufVxcbi5zZWFyY2gtZm9ybTpmb2N1cyB7XFxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlYXJjaC1sb2NhdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuLnNlYXJjaC1sb2NhdGlvbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogcmdiYSgxNzMsIDE3MywgMTczLCAwLjg5KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uc2VhcmNoLWxvY2F0aW9uOi13ZWJraXQtYXV0b2ZpbGwsXFxuLnNlYXJjaC1sb2NhdGlvbjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyA2MDAwMDBzLCBjb2xvciAwcyA2MDAwMDBzO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pY29ucy9zZWFyY2gtaWNvbi13aGl0ZS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi5zZWFyY2gtaWNvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2NhdGlvbi1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcbi5sb2NhdGlvbi1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uZGF0ZS10aW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwNyk7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uYmFzaWMtd2VhdGhlciB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG4uYmFzaWMtaWNvbi10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJhc2ljLXdlYXRoZXItaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn1cXG4uYmFzaWMtdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ud2VhdGhlci1kZXNjcmlwdGlvbiwgLndlYXRoZXItZmVlbHMtbGlrZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbi53ZWF0aGVyLWZlZWxzLWxpa2Uge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwNyk7XFxufVxcblxcbi5kYXRhLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9vbi1waGFzZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRhdGEtbGFiZWwge1xcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTA3KTtcXG59XFxuLmRldGFpbGVkLXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzZnIgMzNmciAzM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzZnIgMzNmciAzM2ZyO1xcbiAgICB3aWR0aDogNjUlO1xcbn1cXG4uZGF0YS1pdGVtID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mb3JlY2FzdC13ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLm5hdmlnYXRpb24tY29udHJvbHMge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hcnJvdy1sZWZ0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb25zL2xlZnQtYXJyb3cuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG4uYXJyb3ctbGVmdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRvdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pY29ucy9kb3Qtc21hbGwtc3ZncmVwby1jb20uc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG4uYXJyb3ctcmlnaHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbnMvcmlnaHQtYXJyb3cuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG4uYXJyb3ctcmlnaHQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ob3VybHktZm9yZWNhc3Qge1xcbiAgICB3aWR0aDogNjByZW07XFxuICAgIGhlaWdodDogMjAwcHg7XFxufVxcbi5zaXgtaG91ci1ibG9jayB7XFxuICAgIHdpZHRoOiA2MHJlbTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob3VyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcXG59XFxuLmhvdXIgPiAqIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxcbn1cXG4uaG91cmx5LXRpbWUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5ob3VybHktdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmJsb2NrLXR3bywgLmJsb2NrLXRocmVlLCAuYmxvY2stZm91ciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ob3VyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRhaWx5LWZvcmVjYXN0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzVyZW07XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbi5mb3JlY2FzdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uZGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4uZGF5LW5hbWUge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4uZGF5LW1heCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5kYXktbWluIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTYpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgICA8dGl0bGU+SG93J3MgdGhlIFdlYXRoZXI/PC90aXRsZT5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwic2VhcmNoLWZvcm1cXFwiIG5vdmFsaWRhdGU+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWFyY2gtbG9jYXRpb25cXFwiIG5hbWU9XFxcInNlYXJjaExvY2FpdG9uXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGxvY2F0aW9uXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWFyY2gtaWNvblxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1cnJlbnQtd2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9jYXRpb24taW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uLW5hbWVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlLXRpbWVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYXRoZXItaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhc2ljLXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFzaWMtaWNvbi10ZW1wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cXFwiV2VhdGhlciBJY29uXFxcIiBjbGFzcz1cXFwiYmFzaWMtd2VhdGhlci1pY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXNpYy10ZW1wZXJhdHVyZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYXRoZXItZGVzY3JpcHRpb25cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2VhdGhlci1mZWVscy1saWtlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbGVkLXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1pdGVtXFxcIiBpZD1cXFwiaXRlbS0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWxhYmVsXFxcIj5XaW5kPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2luZC1zcGVlZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+SHVtaWRpdHk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJodW1pZGl0eVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tM1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+VVYgSW5kZXg8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1di1pbmRleFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+VmlzaWJpbGl0eTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInZpc2liaWxpdHlcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPkNsb3VkaW5lc3M8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGFuY2Utb2YtcmFpblxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+Q2hhbmNlIG9mIFJhaW48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyYWluZmFsbFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tN1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+U3VucmlzZTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bnJpc2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLThcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPlN1bnNldDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN1bnNldFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tOVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+TW9vbiBQaGFzZTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vb24tcGhhc2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JlY2FzdC13ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VybHktZm9yZWNhc3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXgtaG91ci1ibG9jayBibG9jay1vbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l4LWhvdXItYmxvY2sgYmxvY2stdHdvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeC1ob3VyLWJsb2NrIGJsb2NrLXRocmVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeC1ob3VyLWJsb2NrIGJsb2NrLWZvdXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZpZ2F0aW9uLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3ctbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRvdCBkb3Qtb25lXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZG90IGRvdC10d29cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkb3QgZG90LXRocmVlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZG90IGRvdC1mb3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJyb3ctcmlnaHRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhaWx5LWZvcmVjYXN0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3QtdGl0bGVcXFwiPlRocmVlIERheSBGb3JlY2FzdDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXkgZGF5LW9uZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheSBkYXktdHdvXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF5IGRheS10aHJlZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vRnJvYmlpL3dlYXRoZXItYXBwXFxcIiBjbGFzcz1cXFwiZ2l0aHViLXJlcG9cXFwiPlNvdXJjZSBDb2RlPC9hPlxcbiAgICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGdldERheU5hbWUoZGF0ZVN0ciwgbG9jYWxlKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TW9udGhOYW1lKGRhdGVTdHIpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gICAgY29uc3QgbW9udGggPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuICAgIHJldHVybiBtb250aFtkYXRlLmdldE1vbnRoKCldO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUaHJlZURheUZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gICAgY29uc3QgYXBpS2V5ID0gJzU5NWY4OTQ5YzJhNzQ0NTBiNjYyMjQwMzEyMzE0MDgnO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtsb2NhdGlvbn0mZGF5cz01YCxcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICAgICk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIGRhdGEuIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBmZXRjaGVkRGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbkRldGFpbHMoZmV0Y2hlZERhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBmZXRjaGVkRGF0YS5jdXJyZW50O1xuXG4gICAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBgJHtmZXRjaGVkRGF0YS5sb2NhdGlvbi5uYW1lfSwgJHtmZXRjaGVkRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgICBjb25zdCBkYXRlVGltZSA9IGN1cnJlbnRXZWF0aGVyLmxhc3RfdXBkYXRlZC5zcGxpdCgnICcpO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVUaW1lWzBdO1xuICAgICAgY29uc3QgdGltZSA9IGRhdGVUaW1lWzFdO1xuICAgICAgY29uc3QgZGF5TmFtZSA9IGdldERheU5hbWUoZGF0ZSwgJ2VuLVVTJyk7XG4gICAgICBjb25zdCBtb250aE5hbWUgPSBnZXRNb250aE5hbWUoZGF0ZSk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLnN1YnN0cmluZyg4LCAxMCk7XG5cbiAgICAgIGNvbnN0IGRpc3BsYXlEYXRlID0gYCR7ZGF5TmFtZX0gJHtkYXl9ICR7bW9udGhOYW1lfSAke3llYXJ9IHwgJHt0aW1lfWA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvY2F0aW9uTmFtZSxcbiAgICAgICAgZGlzcGxheURhdGUsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGZldGNoZWREYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZmV0Y2hlZERhdGEuY3VycmVudDtcbiAgICAgIGNvbnN0IGZvcmVjYXN0QXJyYXkgPSBhd2FpdCBmZXRjaGVkRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICAgIGNvbnN0IHRvZGF5c0ZvcmVjYXN0ID0gYXdhaXQgZm9yZWNhc3RBcnJheVswXS5kYXk7XG4gICAgICBjb25zdCBhc3Ryb0RhdGEgPSBhd2FpdCBmb3JlY2FzdEFycmF5WzBdLmFzdHJvO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnY3VycmVudCcsIGN1cnJlbnRXZWF0aGVyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmb3JlY2FzdCcsIHRvZGF5c0ZvcmVjYXN0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhc3RybycsIGFzdHJvRGF0YSk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24udGV4dDtcbiAgICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb25JY29uID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLmljb247XG4gICAgICBjb25zdCBmb3JlY2FzdENvbmRpdGlvbiA9IHRvZGF5c0ZvcmVjYXN0LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgY29uc3QgZm9yZWNhc3RDb25kaXRpb25JY29uID0gdG9kYXlzRm9yZWNhc3QuY29uZGl0aW9uLmljb247XG4gICAgICBjb25zdCB7IHN1bnJpc2UgfSA9IGFzdHJvRGF0YTtcbiAgICAgIGNvbnN0IHsgc3Vuc2V0IH0gPSBhc3Ryb0RhdGE7XG4gICAgICBjb25zdCBtb29uUGhhc2UgPSBhc3Ryb0RhdGEubW9vbl9waGFzZTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wQyA9IGN1cnJlbnRXZWF0aGVyLnRlbXBfYztcbiAgICAgIGNvbnN0IGN1cnJlbnRUZW1wRiA9IGN1cnJlbnRXZWF0aGVyLnRlbXBfZjtcbiAgICAgIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGN1cnJlbnRXZWF0aGVyO1xuICAgICAgY29uc3QgZmVlbHNMaWtlQyA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9jO1xuICAgICAgY29uc3QgZmVlbHNMaWtlRiA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9mO1xuICAgICAgY29uc3QgcmFpbmZhbGxNaWxsaW1ldGVycyA9IHRvZGF5c0ZvcmVjYXN0LnRvdGFscHJlY2lwX21tO1xuICAgICAgY29uc3QgY2hhbmNlT2ZSYWluID0gdG9kYXlzRm9yZWNhc3QuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gICAgICBjb25zdCB3aW5kU3BlZWQgPSBjdXJyZW50V2VhdGhlci53aW5kX2twaDtcbiAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBjdXJyZW50V2VhdGhlci52aXNfa207XG4gICAgICBjb25zdCB1dkluZGV4ID0gY3VycmVudFdlYXRoZXIudXY7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRDb25kaXRpb24sXG4gICAgICAgIGN1cnJlbnRDb25kaXRpb25JY29uLFxuICAgICAgICBmb3JlY2FzdENvbmRpdGlvbixcbiAgICAgICAgZm9yZWNhc3RDb25kaXRpb25JY29uLFxuICAgICAgICBzdW5yaXNlLFxuICAgICAgICBzdW5zZXQsXG4gICAgICAgIG1vb25QaGFzZSxcbiAgICAgICAgY3VycmVudFRlbXBDLFxuICAgICAgICBjdXJyZW50VGVtcEYsXG4gICAgICAgIGh1bWlkaXR5LFxuICAgICAgICBmZWVsc0xpa2VDLFxuICAgICAgICBmZWVsc0xpa2VGLFxuICAgICAgICByYWluZmFsbE1pbGxpbWV0ZXJzLFxuICAgICAgICBjaGFuY2VPZlJhaW4sXG4gICAgICAgIHdpbmRTcGVlZCxcbiAgICAgICAgdmlzaWJpbGl0eSxcbiAgICAgICAgdXZJbmRleCxcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoZmV0Y2hlZERhdGEpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGZldGNoZWREYXRhLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBkYXRlVGltZSA9IGN1cnJlbnRXZWF0aGVyLmxhc3RfdXBkYXRlZC5zcGxpdCgnICcpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZGF0ZVRpbWVbMV07XG5cbiAgICByZXR1cm4gY3VycmVudFRpbWU7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRIb3VybHlGb3JlY2FzdChmZXRjaGVkRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb3JlY2FzdEFycmF5ID0gYXdhaXQgZmV0Y2hlZERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgICBjb25zdCBob3VybHlEYXRhVG9kYXkgPSBhd2FpdCBmb3JlY2FzdEFycmF5WzBdLmhvdXI7XG4gICAgICBjb25zdCBob3VybHlEYXRhVG9tb3Jyb3cgPSBhd2FpdCBmb3JlY2FzdEFycmF5WzFdLmhvdXI7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IGdldEN1cnJlbnRUaW1lKGZldGNoZWREYXRhKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lUm91bmREb3duID0gYCR7Y3VycmVudFRpbWUuc3Vic3RyaW5nKDAsIDMpfTAwYDtcbiAgICAgIGNvbnN0IHByb2Nlc3NlZDQ4SG91cnMgPSBbXTtcbiAgICAgIGNvbnN0IG5leHQyNEhvdXJzID0gW107XG5cbiAgICAgIGhvdXJseURhdGFUb2RheS5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXJPYmplY3QgPSB7fTtcblxuICAgICAgICBob3VyT2JqZWN0LnRlbXBfYyA9IGhvdXIudGVtcF9jO1xuICAgICAgICBjb25zdCBkYXRlVGltZSA9IGhvdXIudGltZS5zcGxpdCgnICcpO1xuICAgICAgICBob3VyT2JqZWN0LnRpbWUgPSBkYXRlVGltZVsxXTtcbiAgICAgICAgaG91ck9iamVjdC5pY29uID0gaG91ci5jb25kaXRpb24uaWNvbjtcblxuICAgICAgICBwcm9jZXNzZWQ0OEhvdXJzLnB1c2goaG91ck9iamVjdCk7XG4gICAgICB9KTtcblxuICAgICAgaG91cmx5RGF0YVRvbW9ycm93LmZvckVhY2goKGhvdXIpID0+IHtcbiAgICAgICAgY29uc3QgaG91ck9iamVjdCA9IHt9O1xuXG4gICAgICAgIGhvdXJPYmplY3QudGVtcF9jID0gaG91ci50ZW1wX2M7XG4gICAgICAgIGNvbnN0IGRhdGVUaW1lID0gaG91ci50aW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIGhvdXJPYmplY3QudGltZSA9IGRhdGVUaW1lWzFdO1xuICAgICAgICBob3VyT2JqZWN0Lmljb24gPSBob3VyLmNvbmRpdGlvbi5pY29uO1xuXG4gICAgICAgIHByb2Nlc3NlZDQ4SG91cnMucHVzaChob3VyT2JqZWN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHByb2Nlc3NlZDQ4SG91cnNbaV0udGltZSA9PT0gY3VycmVudFRpbWVSb3VuZERvd24pIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IChpICsgMjQpOyBqICs9IDEpIHtcbiAgICAgICAgICAgIG5leHQyNEhvdXJzLnB1c2gocHJvY2Vzc2VkNDhIb3Vyc1tqXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0MjRIb3VycztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRUaHJlZURheUZvcmVjYXN0KGZldGNoZWREYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZvcmVjYXN0QXJyYXkgPSBhd2FpdCBmZXRjaGVkRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcblxuICAgICAgY29uc3QgZGF5T25lID0ge307XG4gICAgICBjb25zdCBkYXlUd28gPSB7fTtcbiAgICAgIGNvbnN0IGRheVRocmVlID0ge307XG4gICAgICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gW2RheU9uZSwgZGF5VHdvLCBkYXlUaHJlZV07XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIHRocmVlRGF5Rm9yZWNhc3QuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZm9yZWNhc3RBcnJheVtpXS5kYXk7XG4gICAgICAgIGNvbnN0IHsgZGF0ZSB9ID0gZm9yZWNhc3RBcnJheVtpXTtcbiAgICAgICAgZGF5LmRheU5hbWUgPSBnZXREYXlOYW1lKGRhdGUsICdlbi1VUycpO1xuICAgICAgICBkYXkuaWNvbiA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBkYXkubWF4VGVtcEMgPSBjdXJyZW50V2VhdGhlci5tYXh0ZW1wX2M7XG4gICAgICAgIGRheS5taW5UZW1wQyA9IGN1cnJlbnRXZWF0aGVyLm1pbnRlbXBfYztcbiAgICAgICAgZGF5Lm1heFRlbXBGID0gY3VycmVudFdlYXRoZXIubWF4dGVtcF9mO1xuICAgICAgICBkYXkubWluVGVtcEYgPSBjdXJyZW50V2VhdGhlci5taW50ZW1wX2Y7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhyZWVEYXlGb3JlY2FzdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaGVkRGF0YSA9IGF3YWl0IGZldGNoVGhyZWVEYXlGb3JlY2FzdChsb2NhdGlvbik7XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9uRGV0YWlscyA9IGF3YWl0IGdldExvY2F0aW9uRGV0YWlscyhmZXRjaGVkRGF0YSk7XG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyKGZldGNoZWREYXRhKTtcbiAgICAgIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBhd2FpdCBnZXRIb3VybHlGb3JlY2FzdChmZXRjaGVkRGF0YSk7XG4gICAgICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gYXdhaXQgZ2V0VGhyZWVEYXlGb3JlY2FzdChmZXRjaGVkRGF0YSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvY2F0aW9uRGV0YWlscyxcbiAgICAgICAgY3VycmVudFdlYXRoZXIsXG4gICAgICAgIGhvdXJseVdlYXRoZXIsXG4gICAgICAgIHRocmVlRGF5Rm9yZWNhc3QsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY29uc3QgYXBpVG9Eb20gPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIHBvcHVsYXRlTG9jYXRpb25EZXRhaWxzKGxvY2F0aW9uRGV0YWlscykge1xuICAgIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi1uYW1lJyk7XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS10aW1lJyk7XG5cbiAgICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRldGFpbHMubG9jYXRpb25OYW1lO1xuICAgIGRhdGVUaW1lLnRleHRDb250ZW50ID0gbG9jYXRpb25EZXRhaWxzLmRpc3BsYXlEYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVCYXNpY1dlYXRoZXIoY3VycmVudFdlYXRoZXIpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2ljLXdlYXRoZXItaWNvbicpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2ljLXRlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWZlZWxzLWxpa2UnKTtcblxuICAgIGljb24uc3JjID0gY3VycmVudFdlYXRoZXIuY3VycmVudENvbmRpdGlvbkljb247XG4gICAgaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIuY3VycmVudFRlbXBDfcKwQ2A7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlci5jdXJyZW50Q29uZGl0aW9uO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlICR7Y3VycmVudFdlYXRoZXIuZmVlbHNMaWtlQ33CsENgO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVEZXRhaWxlZFdlYXRoZXIoY3VycmVudFdlYXRoZXIpIHtcbiAgICBjb25zdCBkYXRhSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0YS1pdGVtJyk7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWQnKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICAgIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYtaW5kZXgnKTtcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKTtcbiAgICBjb25zdCByYWluZmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWluZmFsbCcpO1xuICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuY2Utb2YtcmFpbicpO1xuICAgIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VucmlzZScpO1xuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKTtcbiAgICBjb25zdCBtb29uUGhhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbi1waGFzZScpO1xuXG4gICAgZGF0YUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGl0ZW0uc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH0pO1xuXG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIud2luZFNwZWVkfW0vc2A7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci5odW1pZGl0eX0lYDtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIudXZJbmRleDtcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIudmlzaWJpbGl0eX1rbWA7XG4gICAgcmFpbmZhbGwudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci5yYWluZmFsbE1pbGxpbWV0ZXJzfSVgO1xuICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLmNoYW5jZU9mUmFpbn0lYDtcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIuc3VucmlzZTtcbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlci5zdW5zZXQ7XG4gICAgbW9vblBoYXNlLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIubW9vblBoYXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd05hdkNvbnRyb2xzKCkge1xuICAgIGNvbnN0IG5hdkNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tY29udHJvbHMnKTtcbiAgICBuYXZDb250cm9scy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9wdWxhdGVIb3VybHlXZWF0aGVyKGhvdXJseVdlYXRoZXIpIHtcbiAgICBjb25zdCBob3VyRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VyJyk7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgaG91ckRpdnMuZm9yRWFjaCgoaG91ckRpdikgPT4ge1xuICAgICAgd2hpbGUgKGhvdXJEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBob3VyRGl2LnJlbW92ZUNoaWxkKGhvdXJEaXYuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBob3VybHlXZWF0aGVyLmZvckVhY2goKGhvdXIpID0+IHtcbiAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXRpbWUnKTtcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBob3VyLnRpbWU7XG5cbiAgICAgIGNvbnN0IHRlbXBDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wQy5jbGFzc0xpc3QuYWRkKCdob3VybHktdGVtcCcpO1xuICAgICAgdGVtcEMudGV4dENvbnRlbnQgPSBgJHtob3VyLnRlbXBfY33CsENgO1xuXG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICB0ZW1wQy5jbGFzc0xpc3QuYWRkKCdob3VybHktaWNvbicpO1xuICAgICAgaWNvbi5hbHQgPSAnV2VhdGhlciBJY29uJztcbiAgICAgIGljb24uc3JjID0gaG91ci5pY29uO1xuXG4gICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb24tY29udGFpbmVyJyk7XG4gICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICBob3VyRGl2c1tpXS5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICAgIGhvdXJEaXZzW2ldLmFwcGVuZENoaWxkKHRlbXBDKTtcbiAgICAgIGhvdXJEaXZzW2ldLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgICAgaSArPSAxO1xuICAgIH0pO1xuXG4gICAgc2hvd05hdkNvbnRyb2xzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZVdlZWtseVdlYXRoZXIoZm9yZWNhc3RXZWF0aGVyKSB7XG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QnKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvbnN0IGRheU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktb25lJyk7XG4gICAgY29uc3QgZGF5VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS10d28nKTtcbiAgICBjb25zdCBkYXlUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktdGhyZWUnKTtcbiAgICBjb25zdCBkYXlzID0gW2RheU9uZSwgZGF5VHdvLCBkYXlUaHJlZV07XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIHdoaWxlIChkYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICBkYXkucmVtb3ZlQ2hpbGQoZGF5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yZWNhc3RXZWF0aGVyLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGF5TmFtZS5jbGFzc0xpc3QuYWRkKCdkYXktbmFtZScpO1xuICAgICAgY29uc3QgZGF5TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlNYXguY2xhc3NMaXN0LmFkZCgnZGF5LW1heCcpO1xuICAgICAgY29uc3QgZGF5TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlNaW4uY2xhc3NMaXN0LmFkZCgnZGF5LW1pbicpO1xuICAgICAgY29uc3QgZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdkYXktaWNvbicpO1xuICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uLWNvbnRhaW5lcicpO1xuICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlJY29uKTtcblxuICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGRheS5kYXlOYW1lO1xuICAgICAgZGF5SWNvbi5zcmMgPSBkYXkuaWNvbjtcbiAgICAgIGRheUljb24uYWx0ID0gJ1dlYXRoZXIgSWNvbic7XG4gICAgICBkYXlNYXgudGV4dENvbnRlbnQgPSBgJHtkYXkubWF4VGVtcEN9wrBDYDtcbiAgICAgIGRheU1pbi50ZXh0Q29udGVudCA9IGAke2RheS5taW5UZW1wQ33CsENgO1xuXG4gICAgICBkYXlzW2ldLmFwcGVuZENoaWxkKGRheU5hbWUpO1xuICAgICAgZGF5c1tpXS5hcHBlbmRDaGlsZChkYXlJY29uKTtcbiAgICAgIGRheXNbaV0uYXBwZW5kQ2hpbGQoZGF5TWF4KTtcbiAgICAgIGRheXNbaV0uYXBwZW5kQ2hpbGQoZGF5TWluKTtcblxuICAgICAgaSArPSAxO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVEb20oc2VhcmNoRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9jZXNzZWRXZWF0aGVyID0gYXdhaXQgYXBpLmdldFByb2Nlc3NlZFdlYXRoZXJEYXRhKHNlYXJjaERhdGEpO1xuXG4gICAgICBpZiAoIXByb2Nlc3NlZFdlYXRoZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGxvY2F0aW9uRGV0YWlscyB9ID0gcHJvY2Vzc2VkV2VhdGhlcjtcbiAgICAgIGNvbnN0IHsgY3VycmVudFdlYXRoZXIgfSA9IHByb2Nlc3NlZFdlYXRoZXI7XG4gICAgICBjb25zdCB7IGhvdXJseVdlYXRoZXIgfSA9IHByb2Nlc3NlZFdlYXRoZXI7XG4gICAgICBjb25zdCB7IHRocmVlRGF5Rm9yZWNhc3QgfSA9IHByb2Nlc3NlZFdlYXRoZXI7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkZXRhaWxzJywgbG9jYXRpb25EZXRhaWxzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50JywgY3VycmVudFdlYXRoZXIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2hvdXJseScsIGhvdXJseVdlYXRoZXIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2ZvcmVjYXN0JywgZm9yZWNhc3RXZWF0aGVyKTtcblxuICAgICAgcG9wdWxhdGVMb2NhdGlvbkRldGFpbHMobG9jYXRpb25EZXRhaWxzKTtcbiAgICAgIHBvcHVsYXRlQmFzaWNXZWF0aGVyKGN1cnJlbnRXZWF0aGVyKTtcbiAgICAgIHBvcHVsYXRlRGV0YWlsZWRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyKTtcbiAgICAgIHBvcHVsYXRlSG91cmx5V2VhdGhlcihob3VybHlXZWF0aGVyKTtcbiAgICAgIHBvcHVsYXRlV2Vla2x5V2VhdGhlcih0aHJlZURheUZvcmVjYXN0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgcG9wdWxhdGVEb20gfTtcbn07XG5cbmNvbnN0IGNvbnRyb2xzID0gKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0aWFsaXplTmF2aWdhdGlvbkNvbnRyb2xzKCkge1xuICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1sZWZ0Jyk7XG4gICAgY29uc3QgYXJyb3dSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpO1xuICAgIGNvbnN0IGFycm93cyA9IFthcnJvd0xlZnQsIGFycm93UmlnaHRdO1xuXG4gICAgYXJyb3dzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG4gICAgY29uc3QgZG90T25lID0gZG90c1swXTtcbiAgICBjb25zdCBkb3RUd28gPSBkb3RzWzFdO1xuICAgIGNvbnN0IGRvdFRocmVlID0gZG90c1syXTtcbiAgICBjb25zdCBkb3RGb3VyID0gZG90c1szXTtcblxuICAgIGRvdHMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuXG4gICAgZG90T25lLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuXG4gICAgY29uc3QgYmxvY2tPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stb25lJyk7XG4gICAgY29uc3QgYmxvY2tUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvY2stdHdvJyk7XG4gICAgY29uc3QgYmxvY2tUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay10aHJlZScpO1xuICAgIGNvbnN0IGJsb2NrRm91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1mb3VyJyk7XG5cbiAgICBibG9ja09uZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChibG9ja09uZS5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgYmxvY2tPbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYmxvY2tUd28uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG90T25lLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgICAgZG90VHdvLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuICAgICAgfSBlbHNlIGlmIChibG9ja1R3by5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgYmxvY2tUd28uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYmxvY2tUaHJlZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb3RUd28uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgICBkb3RUaHJlZS5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygzMCUpJztcbiAgICAgIH0gZWxzZSBpZiAoYmxvY2tUaHJlZS5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgYmxvY2tUaHJlZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBibG9ja0ZvdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG90VGhyZWUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgICBkb3RGb3VyLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGJsb2NrRm91ci5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgYmxvY2tGb3VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJsb2NrVGhyZWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG90Rm91ci5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxMDAlKSc7XG4gICAgICAgIGRvdFRocmVlLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuICAgICAgfSBlbHNlIGlmIChibG9ja1RocmVlLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICBibG9ja1RocmVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJsb2NrVHdvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGRvdFRocmVlLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgICAgZG90VHdvLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuICAgICAgfSBlbHNlIGlmIChibG9ja1R3by5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgYmxvY2tUd28uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYmxvY2tPbmUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG90VHdvLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgICAgZG90T25lLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2VhcmNoRXZlbnRzKCkge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9jYXRpb24nKTtcbiAgICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pY29uJyk7XG5cbiAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9jYXRpb24nKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICAgICAgYXBpVG9Eb20oKS5wb3B1bGF0ZURvbShzZWFyY2hEYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2NhdGlvbicpO1xuICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICAgIGFwaVRvRG9tKCkucG9wdWxhdGVEb20oc2VhcmNoRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQ29udHJvbHMoKSB7XG4gICAgaW5pdGlhbGl6ZU5hdmlnYXRpb25Db250cm9scygpO1xuICAgIHNldFNlYXJjaEV2ZW50cygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsaXplQ29udHJvbHMsXG4gIH07XG59O1xuXG5leHBvcnQge1xuICBjb250cm9scyxcbiAgYXBpVG9Eb20sXG59O1xuIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi90ZW1wbGF0ZS5odG1sJztcbmltcG9ydCB7IGNvbnRyb2xzLCBhcGlUb0RvbSB9IGZyb20gJy4vZG9tJztcblxuY29udHJvbHMoKS5pbml0aWFsaXplQ29udHJvbHMoKTtcblxuYXBpVG9Eb20oKS5wb3B1bGF0ZURvbSgnQmVuZXZlbnRvJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=