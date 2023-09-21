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

    console.log(currentWeather.currentConditionIcon);
    icon.src = `https:${currentWeather.currentConditionIcon}`;
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
      icon.src = `https:${hour.icon}`;

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
      dayIcon.src = `https:${day.icon}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMscUpBQXVEO0FBQ25HLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMseUlBQWlEO0FBQzdGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFB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QUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7O0FDN1FvQjtBQUNJO0FBQ2lCOztBQUUzQyw4Q0FBUTs7QUFFUiw4Q0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdGVtcGxhdGUuaHRtbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29ucy9zZWFyY2gtaWNvbi13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29ucy9sZWZ0LWFycm93LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ljb25zL2RvdC1zbWFsbC1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pY29ucy9yaWdodC1hcnJvdy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogcXVpY2tzYW5kO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pXG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNDY4OWQsICMxNjc1YWEsICMyMzgyYjgsICMyZjkwYzUsICMzYTllZDMpO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweClcbn1cblxuLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2VhcmNoLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyLCAyNSwgNTQsIDAuODQyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIsIDI1LCA1NCwgMCk7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAyODBweDtcbn1cbi5zZWFyY2gtZm9ybTpmb2N1cyB7XG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gtbG9jYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5zZWFyY2gtbG9jYXRpb246OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgxNzMsIDE3MywgMTczLCAwLjg5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5zZWFyY2gtbG9jYXRpb246LXdlYmtpdC1hdXRvZmlsbCxcbi5zZWFyY2gtbG9jYXRpb246LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwcyA2MDAwMDBzLCBjb2xvciAwcyA2MDAwMDBzO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5zZWFyY2gtaWNvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXJyZW50LXdlYXRoZXIge1xuICAgIHdpZHRoOiA0MHJlbTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvY2F0aW9uLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4ubG9jYXRpb24tbmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLmRhdGUtdGltZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTA3KTtcbn1cblxuLndlYXRoZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5iYXNpYy13ZWF0aGVyIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG4uYmFzaWMtaWNvbi10ZW1wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmFzaWMtd2VhdGhlci1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG59XG4uYmFzaWMtdGVtcGVyYXR1cmUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53ZWF0aGVyLWRlc2NyaXB0aW9uLCAud2VhdGhlci1mZWVscy1saWtlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLndlYXRoZXItZmVlbHMtbGlrZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDcpO1xufVxuXG4uZGF0YS1pdGVtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9vbi1waGFzZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRhdGEtbGFiZWwge1xuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDcpO1xufVxuLmRldGFpbGVkLXdlYXRoZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzM2ZyIDMzZnIgMzNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMzZnIgMzNmciAzM2ZyO1xuICAgIHdpZHRoOiA2NSU7XG59XG4uZGF0YS1pdGVtID4gOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZm9yZWNhc3Qtd2VhdGhlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLm5hdmlnYXRpb24tY29udHJvbHMge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXJyb3ctbGVmdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuLmFycm93LWxlZnQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kb3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cbi5hcnJvdy1yaWdodCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuLmFycm93LXJpZ2h0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG91cmx5LWZvcmVjYXN0IHtcbiAgICB3aWR0aDogNjByZW07XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbi5zaXgtaG91ci1ibG9jayB7XG4gICAgd2lkdGg6IDYwcmVtO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmhvdXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHlcbn1cbi5ob3VyID4gKiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IFxufVxuLmhvdXJseS10aW1lIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG4uaG91cmx5LXRlbXAge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmJsb2NrLXR3bywgLmJsb2NrLXRocmVlLCAuYmxvY2stZm91ciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5ob3VyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYWlseS1mb3JlY2FzdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmZvcmVjYXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5kYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uZGF5LW5hbWUge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5kYXktbWF4IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4uZGF5LW1pbiB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTYpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix5RkFBeUY7QUFDN0Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUkseURBQXlEO0lBQ3pELGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseURBQTJEO0lBQzNELHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlEQUFvRDtJQUNwRCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYix5REFBK0Q7SUFDL0Qsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseURBQXFEO0lBQ3JELHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXG4gICAgc3JjOiB1cmwoLi9hc3NldHMvZm9udHMvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZilcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDQ2ODlkLCAjMTY3NWFhLCAjMjM4MmI4LCAjMmY5MGM1LCAjM2E5ZWQzKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpXFxufVxcblxcbi5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuYTpob3ZlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIsIDI1LCA1NCwgMC44NDIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIsIDI1LCA1NCwgMCk7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbn1cXG4uc2VhcmNoLWZvcm06Zm9jdXMge1xcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtbG9jYXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5zZWFyY2gtbG9jYXRpb246OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHJnYmEoMTczLCAxNzMsIDE3MywgMC44OSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLnNlYXJjaC1sb2NhdGlvbjotd2Via2l0LWF1dG9maWxsLFxcbi5zZWFyY2gtbG9jYXRpb246LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMHMgNjAwMDAwcywgY29sb3IgMHMgNjAwMDAwcztcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc2VhcmNoLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbnMvc2VhcmNoLWljb24td2hpdGUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4uc2VhcmNoLWljb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9jYXRpb24taW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4ubG9jYXRpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmRhdGUtdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDcpO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLmJhc2ljLXdlYXRoZXIge1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxuLmJhc2ljLWljb24tdGVtcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5iYXNpYy13ZWF0aGVyLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG59XFxuLmJhc2ljLXRlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLndlYXRoZXItZGVzY3JpcHRpb24sIC53ZWF0aGVyLWZlZWxzLWxpa2Uge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ud2VhdGhlci1mZWVscy1saWtlIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDcpO1xcbn1cXG5cXG4uZGF0YS1pdGVtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vb24tcGhhc2Uge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kYXRhLWxhYmVsIHtcXG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwNyk7XFxufVxcbi5kZXRhaWxlZC13ZWF0aGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzM2ZyIDMzZnIgMzNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzM2ZyIDMzZnIgMzNmcjtcXG4gICAgd2lkdGg6IDY1JTtcXG59XFxuLmRhdGEtaXRlbSA+IDpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3Qtd2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5uYXZpZ2F0aW9uLWNvbnRyb2xzIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYXJyb3ctbGVmdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pY29ucy9sZWZ0LWFycm93LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuLmFycm93LWxlZnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kb3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaWNvbnMvZG90LXNtYWxsLXN2Z3JlcG8tY29tLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuLmFycm93LXJpZ2h0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ljb25zL3JpZ2h0LWFycm93LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuLmFycm93LXJpZ2h0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0IHtcXG4gICAgd2lkdGg6IDYwcmVtO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG4uc2l4LWhvdXItYmxvY2sge1xcbiAgICB3aWR0aDogNjByZW07XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaG91ciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XFxufVxcbi5ob3VyID4gKiB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyBcXG59XFxuLmhvdXJseS10aW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4uaG91cmx5LXRlbXAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ibG9jay10d28sIC5ibG9jay10aHJlZSwgLmJsb2NrLWZvdXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaG91ciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kYWlseS1mb3JlY2FzdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDM1cmVtO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uZm9yZWNhc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmRheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmRheS1uYW1lIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG59XFxuLmRheS1tYXgge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4uZGF5LW1pbiB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTk2KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gICAgPHRpdGxlPkhvdydzIHRoZSBXZWF0aGVyPzwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcInNlYXJjaC1mb3JtXFxcIiBub3ZhbGlkYXRlPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwic2VhcmNoLWxvY2F0aW9uXFxcIiBuYW1lPVxcXCJzZWFyY2hMb2NhaXRvblxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBsb2NhdGlvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VhcmNoLWljb25cXFwiPjwvZGl2PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXJyZW50LXdlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uLWluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2NhdGlvbi1uYW1lXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZS10aW1lXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWF0aGVyLWluZm9cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYXNpYy13ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhc2ljLWljb24tdGVtcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XFxcIldlYXRoZXIgSWNvblxcXCIgY2xhc3M9XFxcImJhc2ljLXdlYXRoZXItaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFzaWMtdGVtcGVyYXR1cmVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWF0aGVyLWRlc2NyaXB0aW9uXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYXRoZXItZmVlbHMtbGlrZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWxlZC13ZWF0aGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtaXRlbVxcXCIgaWQ9XFxcIml0ZW0tMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1sYWJlbFxcXCI+V2luZDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndpbmQtc3BlZWRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPkh1bWlkaXR5PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaHVtaWRpdHlcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPlVWIEluZGV4PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidXYtaW5kZXhcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPlZpc2liaWxpdHk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aXNpYmlsaXR5XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1pdGVtXFxcIiBpZD1cXFwiaXRlbS01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWxhYmVsXFxcIj5DbG91ZGluZXNzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhbmNlLW9mLXJhaW5cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPkNoYW5jZSBvZiBSYWluPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmFpbmZhbGxcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPlN1bnJpc2U8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW5yaXNlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0YS1pdGVtXFxcIiBpZD1cXFwiaXRlbS04XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWxhYmVsXFxcIj5TdW5zZXQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW5zZXRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWl0ZW1cXFwiIGlkPVxcXCJpdGVtLTlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGFiZWxcXFwiPk1vb24gUGhhc2U8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb29uLXBoYXNlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9yZWNhc3Qtd2VhdGhlclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91cmx5LWZvcmVjYXN0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2l4LWhvdXItYmxvY2sgYmxvY2stb25lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNpeC1ob3VyLWJsb2NrIGJsb2NrLXR3b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXgtaG91ci1ibG9jayBibG9jay10aHJlZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaXgtaG91ci1ibG9jayBibG9jay1mb3VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhvdXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaG91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJob3VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2aWdhdGlvbi1jb250cm9sc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFycm93LWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkb3QgZG90LW9uZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRvdCBkb3QtdHdvXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZG90IGRvdC10aHJlZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRvdCBkb3QtZm91clxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFycm93LXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYWlseS1mb3JlY2FzdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcmVjYXN0LXRpdGxlXFxcIj5UaHJlZSBEYXkgRm9yZWNhc3Q8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF5IGRheS1vbmVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXkgZGF5LXR3b1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheSBkYXktdGhyZWVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL0Zyb2JpaS93ZWF0aGVyLWFwcFxcXCIgY2xhc3M9XFxcImdpdGh1Yi1yZXBvXFxcIj5Tb3VyY2UgQ29kZTwvYT5cXG4gICAgPC9kaXY+XFxuPC9ib2R5PlxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhcGkgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBnZXREYXlOYW1lKGRhdGVTdHIsIGxvY2FsZSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1vbnRoTmFtZShkYXRlU3RyKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHIpO1xuICAgIGNvbnN0IG1vbnRoID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgICByZXR1cm4gbW9udGhbZGF0ZS5nZXRNb250aCgpXTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVGhyZWVEYXlGb3JlY2FzdChsb2NhdGlvbikge1xuICAgIGNvbnN0IGFwaUtleSA9ICc1OTVmODk0OWMyYTc0NDUwYjY2MjI0MDMxMjMxNDA4JztcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7bG9jYXRpb259JmRheXM9NWAsXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBkYXRhLiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZmV0Y2hlZERhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25EZXRhaWxzKGZldGNoZWREYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZmV0Y2hlZERhdGEuY3VycmVudDtcblxuICAgICAgY29uc3QgbG9jYXRpb25OYW1lID0gYCR7ZmV0Y2hlZERhdGEubG9jYXRpb24ubmFtZX0sICR7ZmV0Y2hlZERhdGEubG9jYXRpb24uY291bnRyeX1gO1xuICAgICAgY29uc3QgZGF0ZVRpbWUgPSBjdXJyZW50V2VhdGhlci5sYXN0X3VwZGF0ZWQuc3BsaXQoJyAnKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlVGltZVswXTtcbiAgICAgIGNvbnN0IHRpbWUgPSBkYXRlVGltZVsxXTtcbiAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXREYXlOYW1lKGRhdGUsICdlbi1VUycpO1xuICAgICAgY29uc3QgbW9udGhOYW1lID0gZ2V0TW9udGhOYW1lKGRhdGUpO1xuICAgICAgY29uc3QgeWVhciA9IGRhdGUuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgY29uc3QgZGF5ID0gZGF0ZS5zdWJzdHJpbmcoOCwgMTApO1xuXG4gICAgICBjb25zdCBkaXNwbGF5RGF0ZSA9IGAke2RheU5hbWV9ICR7ZGF5fSAke21vbnRoTmFtZX0gJHt5ZWFyfSB8ICR7dGltZX1gO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2NhdGlvbk5hbWUsXG4gICAgICAgIGRpc3BsYXlEYXRlLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihmZXRjaGVkRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGZldGNoZWREYXRhLmN1cnJlbnQ7XG4gICAgICBjb25zdCBmb3JlY2FzdEFycmF5ID0gYXdhaXQgZmV0Y2hlZERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgICBjb25zdCB0b2RheXNGb3JlY2FzdCA9IGF3YWl0IGZvcmVjYXN0QXJyYXlbMF0uZGF5O1xuICAgICAgY29uc3QgYXN0cm9EYXRhID0gYXdhaXQgZm9yZWNhc3RBcnJheVswXS5hc3RybztcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQnLCBjdXJyZW50V2VhdGhlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9yZWNhc3QnLCB0b2RheXNGb3JlY2FzdCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYXN0cm8nLCBhc3Ryb0RhdGEpO1xuXG4gICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHQ7XG4gICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uSWNvbiA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi5pY29uO1xuICAgICAgY29uc3QgZm9yZWNhc3RDb25kaXRpb24gPSB0b2RheXNGb3JlY2FzdC5jb25kaXRpb24udGV4dDtcbiAgICAgIGNvbnN0IGZvcmVjYXN0Q29uZGl0aW9uSWNvbiA9IHRvZGF5c0ZvcmVjYXN0LmNvbmRpdGlvbi5pY29uO1xuICAgICAgY29uc3QgeyBzdW5yaXNlIH0gPSBhc3Ryb0RhdGE7XG4gICAgICBjb25zdCB7IHN1bnNldCB9ID0gYXN0cm9EYXRhO1xuICAgICAgY29uc3QgbW9vblBoYXNlID0gYXN0cm9EYXRhLm1vb25fcGhhc2U7XG4gICAgICBjb25zdCBjdXJyZW50VGVtcEMgPSBjdXJyZW50V2VhdGhlci50ZW1wX2M7XG4gICAgICBjb25zdCBjdXJyZW50VGVtcEYgPSBjdXJyZW50V2VhdGhlci50ZW1wX2Y7XG4gICAgICBjb25zdCB7IGh1bWlkaXR5IH0gPSBjdXJyZW50V2VhdGhlcjtcbiAgICAgIGNvbnN0IGZlZWxzTGlrZUMgPSBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfYztcbiAgICAgIGNvbnN0IGZlZWxzTGlrZUYgPSBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZjtcbiAgICAgIGNvbnN0IHJhaW5mYWxsTWlsbGltZXRlcnMgPSB0b2RheXNGb3JlY2FzdC50b3RhbHByZWNpcF9tbTtcbiAgICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IHRvZGF5c0ZvcmVjYXN0LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgICAgY29uc3Qgd2luZFNwZWVkID0gY3VycmVudFdlYXRoZXIud2luZF9rcGg7XG4gICAgICBjb25zdCB2aXNpYmlsaXR5ID0gY3VycmVudFdlYXRoZXIudmlzX2ttO1xuICAgICAgY29uc3QgdXZJbmRleCA9IGN1cnJlbnRXZWF0aGVyLnV2O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50Q29uZGl0aW9uLFxuICAgICAgICBjdXJyZW50Q29uZGl0aW9uSWNvbixcbiAgICAgICAgZm9yZWNhc3RDb25kaXRpb24sXG4gICAgICAgIGZvcmVjYXN0Q29uZGl0aW9uSWNvbixcbiAgICAgICAgc3VucmlzZSxcbiAgICAgICAgc3Vuc2V0LFxuICAgICAgICBtb29uUGhhc2UsXG4gICAgICAgIGN1cnJlbnRUZW1wQyxcbiAgICAgICAgY3VycmVudFRlbXBGLFxuICAgICAgICBodW1pZGl0eSxcbiAgICAgICAgZmVlbHNMaWtlQyxcbiAgICAgICAgZmVlbHNMaWtlRixcbiAgICAgICAgcmFpbmZhbGxNaWxsaW1ldGVycyxcbiAgICAgICAgY2hhbmNlT2ZSYWluLFxuICAgICAgICB3aW5kU3BlZWQsXG4gICAgICAgIHZpc2liaWxpdHksXG4gICAgICAgIHV2SW5kZXgsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKGZldGNoZWREYXRhKSB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBmZXRjaGVkRGF0YS5jdXJyZW50O1xuXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBjdXJyZW50V2VhdGhlci5sYXN0X3VwZGF0ZWQuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IGRhdGVUaW1lWzFdO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRUaW1lO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QoZmV0Y2hlZERhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZm9yZWNhc3RBcnJheSA9IGF3YWl0IGZldGNoZWREYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgICAgY29uc3QgaG91cmx5RGF0YVRvZGF5ID0gYXdhaXQgZm9yZWNhc3RBcnJheVswXS5ob3VyO1xuICAgICAgY29uc3QgaG91cmx5RGF0YVRvbW9ycm93ID0gYXdhaXQgZm9yZWNhc3RBcnJheVsxXS5ob3VyO1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBnZXRDdXJyZW50VGltZShmZXRjaGVkRGF0YSk7XG4gICAgICBjb25zdCBjdXJyZW50VGltZVJvdW5kRG93biA9IGAke2N1cnJlbnRUaW1lLnN1YnN0cmluZygwLCAzKX0wMGA7XG4gICAgICBjb25zdCBwcm9jZXNzZWQ0OEhvdXJzID0gW107XG4gICAgICBjb25zdCBuZXh0MjRIb3VycyA9IFtdO1xuXG4gICAgICBob3VybHlEYXRhVG9kYXkuZm9yRWFjaCgoaG91cikgPT4ge1xuICAgICAgICBjb25zdCBob3VyT2JqZWN0ID0ge307XG5cbiAgICAgICAgaG91ck9iamVjdC50ZW1wX2MgPSBob3VyLnRlbXBfYztcbiAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBob3VyLnRpbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgaG91ck9iamVjdC50aW1lID0gZGF0ZVRpbWVbMV07XG4gICAgICAgIGhvdXJPYmplY3QuaWNvbiA9IGhvdXIuY29uZGl0aW9uLmljb247XG5cbiAgICAgICAgcHJvY2Vzc2VkNDhIb3Vycy5wdXNoKGhvdXJPYmplY3QpO1xuICAgICAgfSk7XG5cbiAgICAgIGhvdXJseURhdGFUb21vcnJvdy5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXJPYmplY3QgPSB7fTtcblxuICAgICAgICBob3VyT2JqZWN0LnRlbXBfYyA9IGhvdXIudGVtcF9jO1xuICAgICAgICBjb25zdCBkYXRlVGltZSA9IGhvdXIudGltZS5zcGxpdCgnICcpO1xuICAgICAgICBob3VyT2JqZWN0LnRpbWUgPSBkYXRlVGltZVsxXTtcbiAgICAgICAgaG91ck9iamVjdC5pY29uID0gaG91ci5jb25kaXRpb24uaWNvbjtcblxuICAgICAgICBwcm9jZXNzZWQ0OEhvdXJzLnB1c2goaG91ck9iamVjdCk7XG4gICAgICB9KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwcm9jZXNzZWQ0OEhvdXJzW2ldLnRpbWUgPT09IGN1cnJlbnRUaW1lUm91bmREb3duKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCAoaSArIDI0KTsgaiArPSAxKSB7XG4gICAgICAgICAgICBuZXh0MjRIb3Vycy5wdXNoKHByb2Nlc3NlZDQ4SG91cnNbal0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV4dDI0SG91cnM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0VGhyZWVEYXlGb3JlY2FzdChmZXRjaGVkRGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb3JlY2FzdEFycmF5ID0gYXdhaXQgZmV0Y2hlZERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG5cbiAgICAgIGNvbnN0IGRheU9uZSA9IHt9O1xuICAgICAgY29uc3QgZGF5VHdvID0ge307XG4gICAgICBjb25zdCBkYXlUaHJlZSA9IHt9O1xuICAgICAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IFtkYXlPbmUsIGRheVR3bywgZGF5VGhyZWVdO1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICB0aHJlZURheUZvcmVjYXN0LmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGZvcmVjYXN0QXJyYXlbaV0uZGF5O1xuICAgICAgICBjb25zdCB7IGRhdGUgfSA9IGZvcmVjYXN0QXJyYXlbaV07XG4gICAgICAgIGRheS5kYXlOYW1lID0gZ2V0RGF5TmFtZShkYXRlLCAnZW4tVVMnKTtcbiAgICAgICAgZGF5Lmljb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgZGF5Lm1heFRlbXBDID0gY3VycmVudFdlYXRoZXIubWF4dGVtcF9jO1xuICAgICAgICBkYXkubWluVGVtcEMgPSBjdXJyZW50V2VhdGhlci5taW50ZW1wX2M7XG4gICAgICAgIGRheS5tYXhUZW1wRiA9IGN1cnJlbnRXZWF0aGVyLm1heHRlbXBfZjtcbiAgICAgICAgZGF5Lm1pblRlbXBGID0gY3VycmVudFdlYXRoZXIubWludGVtcF9mO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRocmVlRGF5Rm9yZWNhc3Q7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCBmZXRjaFRocmVlRGF5Rm9yZWNhc3QobG9jYXRpb24pO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbkRldGFpbHMgPSBhd2FpdCBnZXRMb2NhdGlvbkRldGFpbHMoZmV0Y2hlZERhdGEpO1xuICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcihmZXRjaGVkRGF0YSk7XG4gICAgICBjb25zdCBob3VybHlXZWF0aGVyID0gYXdhaXQgZ2V0SG91cmx5Rm9yZWNhc3QoZmV0Y2hlZERhdGEpO1xuICAgICAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGF3YWl0IGdldFRocmVlRGF5Rm9yZWNhc3QoZmV0Y2hlZERhdGEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2NhdGlvbkRldGFpbHMsXG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLFxuICAgICAgICBob3VybHlXZWF0aGVyLFxuICAgICAgICB0aHJlZURheUZvcmVjYXN0LFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFByb2Nlc3NlZFdlYXRoZXJEYXRhLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGFwaVRvRG9tID0gKCkgPT4ge1xuICBmdW5jdGlvbiBwb3B1bGF0ZUxvY2F0aW9uRGV0YWlscyhsb2NhdGlvbkRldGFpbHMpIHtcbiAgICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24tbmFtZScpO1xuICAgIGNvbnN0IGRhdGVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtdGltZScpO1xuXG4gICAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gbG9jYXRpb25EZXRhaWxzLmxvY2F0aW9uTmFtZTtcbiAgICBkYXRlVGltZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGV0YWlscy5kaXNwbGF5RGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlQmFzaWNXZWF0aGVyKGN1cnJlbnRXZWF0aGVyKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNpYy13ZWF0aGVyLWljb24nKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNpYy10ZW1wZXJhdHVyZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1mZWVscy1saWtlJyk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlci5jdXJyZW50Q29uZGl0aW9uSWNvbik7XG4gICAgaWNvbi5zcmMgPSBgaHR0cHM6JHtjdXJyZW50V2VhdGhlci5jdXJyZW50Q29uZGl0aW9uSWNvbn1gO1xuICAgIGljb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLmN1cnJlbnRUZW1wQ33CsENgO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIuY3VycmVudENvbmRpdGlvbjtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZSAke2N1cnJlbnRXZWF0aGVyLmZlZWxzTGlrZUN9wrBDYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlRGV0YWlsZWRXZWF0aGVyKGN1cnJlbnRXZWF0aGVyKSB7XG4gICAgY29uc3QgZGF0YUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGEtaXRlbScpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJyk7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgICBjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnV2LWluZGV4Jyk7XG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aXNpYmlsaXR5Jyk7XG4gICAgY29uc3QgcmFpbmZhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFpbmZhbGwnKTtcbiAgICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmNlLW9mLXJhaW4nKTtcbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKTtcbiAgICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0Jyk7XG4gICAgY29uc3QgbW9vblBoYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb24tcGhhc2UnKTtcblxuICAgIGRhdGFJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBpdGVtLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICB9KTtcblxuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLndpbmRTcGVlZH1tL3NgO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIuaHVtaWRpdHl9JWA7XG4gICAgdXZJbmRleC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnV2SW5kZXg7XG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyLnZpc2liaWxpdHl9a21gO1xuICAgIHJhaW5mYWxsLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXIucmFpbmZhbGxNaWxsaW1ldGVyc30lYDtcbiAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlci5jaGFuY2VPZlJhaW59JWA7XG4gICAgc3VucmlzZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnN1bnJpc2U7XG4gICAgc3Vuc2V0LnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIuc3Vuc2V0O1xuICAgIG1vb25QaGFzZS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLm1vb25QaGFzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dOYXZDb250cm9scygpIHtcbiAgICBjb25zdCBuYXZDb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uLWNvbnRyb2xzJyk7XG4gICAgbmF2Q29udHJvbHMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlSG91cmx5V2VhdGhlcihob3VybHlXZWF0aGVyKSB7XG4gICAgY29uc3QgaG91ckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cicpO1xuICAgIGxldCBpID0gMDtcblxuICAgIGhvdXJEaXZzLmZvckVhY2goKGhvdXJEaXYpID0+IHtcbiAgICAgIHdoaWxlIChob3VyRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaG91ckRpdi5yZW1vdmVDaGlsZChob3VyRGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaG91cmx5V2VhdGhlci5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS10aW1lJyk7XG4gICAgICB0aW1lLnRleHRDb250ZW50ID0gaG91ci50aW1lO1xuXG4gICAgICBjb25zdCB0ZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcEMuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXRlbXAnKTtcbiAgICAgIHRlbXBDLnRleHRDb250ZW50ID0gYCR7aG91ci50ZW1wX2N9wrBDYDtcblxuICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgdGVtcEMuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWljb24nKTtcbiAgICAgIGljb24uYWx0ID0gJ1dlYXRoZXIgSWNvbic7XG4gICAgICBpY29uLnNyYyA9IGBodHRwczoke2hvdXIuaWNvbn1gO1xuXG4gICAgICBjb25zdCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb24tY29udGFpbmVyJyk7XG4gICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgICBob3VyRGl2c1tpXS5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgICAgIGhvdXJEaXZzW2ldLmFwcGVuZENoaWxkKHRlbXBDKTtcbiAgICAgIGhvdXJEaXZzW2ldLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgICAgaSArPSAxO1xuICAgIH0pO1xuXG4gICAgc2hvd05hdkNvbnRyb2xzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3B1bGF0ZVdlZWtseVdlYXRoZXIoZm9yZWNhc3RXZWF0aGVyKSB7XG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QnKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvbnN0IGRheU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktb25lJyk7XG4gICAgY29uc3QgZGF5VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS10d28nKTtcbiAgICBjb25zdCBkYXlUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktdGhyZWUnKTtcbiAgICBjb25zdCBkYXlzID0gW2RheU9uZSwgZGF5VHdvLCBkYXlUaHJlZV07XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgZGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIHdoaWxlIChkYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICBkYXkucmVtb3ZlQ2hpbGQoZGF5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yZWNhc3RXZWF0aGVyLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgY29uc3QgZGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGF5TmFtZS5jbGFzc0xpc3QuYWRkKCdkYXktbmFtZScpO1xuICAgICAgY29uc3QgZGF5TWF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlNYXguY2xhc3NMaXN0LmFkZCgnZGF5LW1heCcpO1xuICAgICAgY29uc3QgZGF5TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkYXlNaW4uY2xhc3NMaXN0LmFkZCgnZGF5LW1pbicpO1xuICAgICAgY29uc3QgZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdkYXktaWNvbicpO1xuICAgICAgY29uc3QgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpY29uLWNvbnRhaW5lcicpO1xuICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlJY29uKTtcblxuICAgICAgZGF5TmFtZS50ZXh0Q29udGVudCA9IGRheS5kYXlOYW1lO1xuICAgICAgZGF5SWNvbi5zcmMgPSBgaHR0cHM6JHtkYXkuaWNvbn1gO1xuICAgICAgZGF5SWNvbi5hbHQgPSAnV2VhdGhlciBJY29uJztcbiAgICAgIGRheU1heC50ZXh0Q29udGVudCA9IGAke2RheS5tYXhUZW1wQ33CsENgO1xuICAgICAgZGF5TWluLnRleHRDb250ZW50ID0gYCR7ZGF5Lm1pblRlbXBDfcKwQ2A7XG5cbiAgICAgIGRheXNbaV0uYXBwZW5kQ2hpbGQoZGF5TmFtZSk7XG4gICAgICBkYXlzW2ldLmFwcGVuZENoaWxkKGRheUljb24pO1xuICAgICAgZGF5c1tpXS5hcHBlbmRDaGlsZChkYXlNYXgpO1xuICAgICAgZGF5c1tpXS5hcHBlbmRDaGlsZChkYXlNaW4pO1xuXG4gICAgICBpICs9IDE7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZURvbShzZWFyY2hEYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2Nlc3NlZFdlYXRoZXIgPSBhd2FpdCBhcGkuZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEoc2VhcmNoRGF0YSk7XG5cbiAgICAgIGlmICghcHJvY2Vzc2VkV2VhdGhlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgbG9jYXRpb25EZXRhaWxzIH0gPSBwcm9jZXNzZWRXZWF0aGVyO1xuICAgICAgY29uc3QgeyBjdXJyZW50V2VhdGhlciB9ID0gcHJvY2Vzc2VkV2VhdGhlcjtcbiAgICAgIGNvbnN0IHsgaG91cmx5V2VhdGhlciB9ID0gcHJvY2Vzc2VkV2VhdGhlcjtcbiAgICAgIGNvbnN0IHsgdGhyZWVEYXlGb3JlY2FzdCB9ID0gcHJvY2Vzc2VkV2VhdGhlcjtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2RldGFpbHMnLCBsb2NhdGlvbkRldGFpbHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2N1cnJlbnQnLCBjdXJyZW50V2VhdGhlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaG91cmx5JywgaG91cmx5V2VhdGhlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9yZWNhc3QnLCBmb3JlY2FzdFdlYXRoZXIpO1xuXG4gICAgICBwb3B1bGF0ZUxvY2F0aW9uRGV0YWlscyhsb2NhdGlvbkRldGFpbHMpO1xuICAgICAgcG9wdWxhdGVCYXNpY1dlYXRoZXIoY3VycmVudFdlYXRoZXIpO1xuICAgICAgcG9wdWxhdGVEZXRhaWxlZFdlYXRoZXIoY3VycmVudFdlYXRoZXIpO1xuICAgICAgcG9wdWxhdGVIb3VybHlXZWF0aGVyKGhvdXJseVdlYXRoZXIpO1xuICAgICAgcG9wdWxhdGVXZWVrbHlXZWF0aGVyKHRocmVlRGF5Rm9yZWNhc3QpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBwb3B1bGF0ZURvbSB9O1xufTtcblxuY29uc3QgY29udHJvbHMgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIGluaXRpYWxpemVOYXZpZ2F0aW9uQ29udHJvbHMoKSB7XG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcbiAgICBjb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LXJpZ2h0Jyk7XG4gICAgY29uc3QgYXJyb3dzID0gW2Fycm93TGVmdCwgYXJyb3dSaWdodF07XG5cbiAgICBhcnJvd3MuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgY29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKTtcbiAgICBjb25zdCBkb3RPbmUgPSBkb3RzWzBdO1xuICAgIGNvbnN0IGRvdFR3byA9IGRvdHNbMV07XG4gICAgY29uc3QgZG90VGhyZWUgPSBkb3RzWzJdO1xuICAgIGNvbnN0IGRvdEZvdXIgPSBkb3RzWzNdO1xuXG4gICAgZG90cy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICBjb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSk7XG5cbiAgICBkb3RPbmUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMzAlKSc7XG5cbiAgICBjb25zdCBibG9ja09uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay1vbmUnKTtcbiAgICBjb25zdCBibG9ja1R3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay10d28nKTtcbiAgICBjb25zdCBibG9ja1RocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLXRocmVlJyk7XG4gICAgY29uc3QgYmxvY2tGb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrLWZvdXInKTtcblxuICAgIGJsb2NrT25lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGJsb2NrT25lLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICBibG9ja09uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBibG9ja1R3by5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb3RPbmUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgICBkb3RUd28uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMzAlKSc7XG4gICAgICB9IGVsc2UgaWYgKGJsb2NrVHdvLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICBibG9ja1R3by5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBibG9ja1RocmVlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGRvdFR3by5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxMDAlKSc7XG4gICAgICAgIGRvdFRocmVlLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDMwJSknO1xuICAgICAgfSBlbHNlIGlmIChibG9ja1RocmVlLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICBibG9ja1RocmVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJsb2NrRm91ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb3RUaHJlZS5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcygxMDAlKSc7XG4gICAgICAgIGRvdEZvdXIuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMzAlKSc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoYmxvY2tGb3VyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICBibG9ja0ZvdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYmxvY2tUaHJlZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb3RGb3VyLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDEwMCUpJztcbiAgICAgICAgZG90VGhyZWUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMzAlKSc7XG4gICAgICB9IGVsc2UgaWYgKGJsb2NrVGhyZWUuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgIGJsb2NrVGhyZWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYmxvY2tUd28uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG90VGhyZWUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgICBkb3RUd28uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMzAlKSc7XG4gICAgICB9IGVsc2UgaWYgKGJsb2NrVHdvLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICBibG9ja1R3by5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBibG9ja09uZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb3RUd28uc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMTAwJSknO1xuICAgICAgICBkb3RPbmUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoMzAlKSc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTZWFyY2hFdmVudHMoKSB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2NhdGlvbicpO1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWljb24nKTtcblxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1sb2NhdGlvbicpO1xuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgICAgICBhcGlUb0RvbSgpLnBvcHVsYXRlRG9tKHNlYXJjaERhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvY2F0aW9uJyk7XG4gICAgICBjb25zdCBzZWFyY2hEYXRhID0gc2VhcmNoQmFyLnZhbHVlO1xuICAgICAgYXBpVG9Eb20oKS5wb3B1bGF0ZURvbShzZWFyY2hEYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVDb250cm9scygpIHtcbiAgICBpbml0aWFsaXplTmF2aWdhdGlvbkNvbnRyb2xzKCk7XG4gICAgc2V0U2VhcmNoRXZlbnRzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemVDb250cm9scyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7XG4gIGNvbnRyb2xzLFxuICBhcGlUb0RvbSxcbn07XG4iLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3RlbXBsYXRlLmh0bWwnO1xuaW1wb3J0IHsgY29udHJvbHMsIGFwaVRvRG9tIH0gZnJvbSAnLi9kb20nO1xuXG5jb250cm9scygpLmluaXRpYWxpemVDb250cm9scygpO1xuXG5hcGlUb0RvbSgpLnBvcHVsYXRlRG9tKCdCZW5ldmVudG8nKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==