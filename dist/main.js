/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=\"list\"],\nol[role=\"list\"] {\n  list-style: none;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1,\nh2,\nh3,\nh4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Make sure text-areas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/* Root Element variables */\n\n:root {\n  --background-color: #FDFAFE;\n  --background-color-lite: #f4fbfb;\n  --surface-color: #F5E3FB;\n  --main-color: #ab34d2;\n  --secondary-color: #D288EA;\n  --accent-color: #d288ea;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n  background-color: var(--background-color);\n  margin: 0;\n  padding: 16px;\n  width: 100vw;\n  height: 100vh;\n  font-size: 16px;\n  font-family: \"Courier New\", Courier, monospace;\n  display: flex;\n  flex-direction: column;\n\n}\n\n#main-content{\n  display: flex;\n  flex-direction: row;\n  margin-top: 32px;\n  margin-bottom: 32px;\n}\n\nh1{\n  text-align: center;\n  color: var(--main-color);\n}\n\n.player-section{\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.section-title {\n  font-size: x-large;\n  text-align: center;\n  font-weight: 700;\n}\n\n.computer-section {\n  flex:1;\n  display: flex;\n  flex-direction: column;\n}\n\n.section-board {\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(10,50px);\n  grid-template-rows: repeat(10,50px);\n}\n\n.player-board-node,.computer-board-node{\n  border: 1px solid black;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.has-ship{\n  background-color: var(--accent-color);\n}\n\n.board-node:hover{\n  background-color: var(--surface-color);\n}\n\n.player-missed-node{\n  height: 25px;\n  width: 25px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n.player-hit-node{\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.computer-hit-node{\n  height: 50px;\n  width: 50px;\n  position: relative;\n}\n\n.player-hit-node:after,\n.computer-hit-node:after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\\\\D7\";\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 50px;\n  color: red;\n  text-align: center;\n}\n\n.computer-missed-node{\n  height: 25px;\n  width: 25px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n\n#start-button{\n  background-color: var(--main-color);\n  border-radius: 8px;\n  font-size: larger;\n  color: white;\n  margin: 8px 40vw;\n  cursor: pointer;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/controllers/player_controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/player_controller.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ../models/player */ \"./src/models/player.js\");\nconst {\n  generateRandomShipPositions,\n  generateRandomNumber,\n} = __webpack_require__(/*! ../util/random_numbers */ \"./src/util/random_numbers.js\");\n\nfunction initPlayer() {\n  const player = new Player(\"PLAYER\");\n  const shipPositions = generateRandomShipPositions();\n\n  player.gameboard.placeShip(player.carrier, false, [\n    shipPositions[0],\n    generateRandomNumber(),\n  ]);\n  player.gameboard.placeShip(player.battleship, false, [\n    shipPositions[1],\n    generateRandomNumber(),\n  ]);\n  player.gameboard.placeShip(player.destroyer, false, [\n    shipPositions[2],\n    generateRandomNumber(),\n  ]);\n  player.gameboard.placeShip(player.submarine, false, [\n    shipPositions[3],\n    generateRandomNumber(),\n  ]);\n  player.gameboard.placeShip(player.boat, false, [\n    shipPositions[4],\n    generateRandomNumber(),\n  ]);\n  return player;\n}\n\nfunction initComputer() {\n  const computer = new Player(\"Computer\");\n  const shipPositions = generateRandomShipPositions();\n\n  computer.gameboard.placeShip(computer.carrier, false, [\n    shipPositions[0],\n    generateRandomNumber(),\n  ]);\n  computer.gameboard.placeShip(computer.battleship, false, [\n    shipPositions[1],\n    generateRandomNumber(),\n  ]);\n  computer.gameboard.placeShip(computer.destroyer, false, [\n    shipPositions[2],\n    generateRandomNumber(),\n  ]);\n  computer.gameboard.placeShip(computer.submarine, false, [\n    shipPositions[3],\n    generateRandomNumber(),\n  ]);\n  computer.gameboard.placeShip(computer.boat, false, [\n    shipPositions[4],\n    generateRandomNumber(),\n  ]);\n  return computer;\n}\n\nmodule.exports = { initPlayer, initComputer };\n\n\n//# sourceURL=webpack://webpack-template/./src/controllers/player_controller.js?");

/***/ }),

/***/ "./src/creators/create_board.js":
/*!**************************************!*\
  !*** ./src/creators/create_board.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\n/* harmony import */ var _controllers_player_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/player_controller */ \"./src/controllers/player_controller.js\");\n/* harmony import */ var _controllers_player_controller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_controllers_player_controller__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction createBoard() {\n  const playerBoard = document.getElementById(\"player-board\");\n  const computerBoard = document.getElementById(\"computer-board\");\n  const player = (0,_controllers_player_controller__WEBPACK_IMPORTED_MODULE_0__.initPlayer)();\n  const computer = (0,_controllers_player_controller__WEBPACK_IMPORTED_MODULE_0__.initComputer)();\n\n  for (let i = 0; i < 100; i += 1) {\n    const playerNode = document.createElement(\"div\");\n    const computerNode = document.createElement(\"div\");\n    playerNode.classList.add(\"player-board-node\");\n    playerNode.dataset.index = i;\n    computerNode.classList.add(\"computer-board-node\");\n    computerNode.dataset.index = i;\n    if (player.gameboard.board[i].ship !== null) {\n      playerNode.classList.add(\"has-ship\");\n    }\n    playerNode.addEventListener(\"click\", () => {\n      if (!playerNode.classList.contains(\"selected\")) {\n        playerNode.classList.add(\"selected\");\n        if (player.gameboard.board[i].ship !== null) {\n          player.gameboard.board[i].isHit = true;\n          player.gameboard.board[i].ship.hit();\n          const playerHitNode = document.createElement(\"div\");\n          playerHitNode.classList.add(\"player-hit-node\");\n          playerNode.appendChild(playerHitNode);\n        } else {\n          player.gameboard.board[i].isMissed = true;\n          const playerMissedNode = document.createElement(\"div\");\n          playerMissedNode.classList.add(\"player-missed-node\");\n          playerNode.appendChild(playerMissedNode);\n        }\n      }\n    });\n    computerNode.addEventListener(\"click\", () => {\n      if (!computerNode.classList.contains(\"selected\")) {\n        computerNode.classList.add(\"selected\");\n        if (computer.gameboard.board[i].ship !== null) {\n          computer.gameboard.board[i].isHit = true;\n          computer.gameboard.board[i].ship.hit();\n          const computerHitNode = document.createElement(\"div\");\n          computerHitNode.classList.add(\"computer-hit-node\");\n          computerNode.appendChild(computerHitNode);\n        } else {\n          computer.gameboard.board[i].isMissed = true;\n          const computerMissedNode = document.createElement(\"div\");\n          computerMissedNode.classList.add(\"computer-missed-node\");\n          computerNode.appendChild(computerMissedNode);\n        }\n      }\n    });\n    playerBoard.appendChild(playerNode);\n    computerBoard.appendChild(computerNode);\n  }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/creators/create_board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _creators_create_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creators/create_board */ \"./src/creators/create_board.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_creators_create_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/models/gameNode.js":
/*!********************************!*\
  !*** ./src/models/gameNode.js ***!
  \********************************/
/***/ ((module) => {

eval("class GameNode {\n  constructor(index, x, y, ship = null, isHit = false, isMissed = false) {\n    this.index = index;\n    this.position = [x, y];\n    this.ship = ship;\n    this.isHit = isHit;\n    this.isMissed = isMissed;\n  }\n}\n\nmodule.exports = GameNode;\n\n\n//# sourceURL=webpack://webpack-template/./src/models/gameNode.js?");

/***/ }),

/***/ "./src/models/gameboard.js":
/*!*********************************!*\
  !*** ./src/models/gameboard.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameNode = __webpack_require__(/*! ./gameNode */ \"./src/models/gameNode.js\");\n\nclass GameBoard {\n  constructor(size = 10) {\n    this.size = size;\n    this.board = [];\n    this.initializeBoard();\n  }\n\n  initializeBoard() {\n    for (let i = 0; i < this.size; i += 1) {\n      for (let j = 0; j < this.size; j += 1) {\n        const index = i * this.size + j;\n        this.board.push(new GameNode(index, i, j));\n      }\n    }\n  }\n\n  placeShip(ship, isVertical, startPosition) {\n    const x = startPosition[0];\n    const y = startPosition[1];\n\n    if (!isVertical) {\n      for (let i = 0; i < ship.length; i += 1) {\n        const horizontalIndex = x * this.size + i + y;\n        if (horizontalIndex >= 0 && horizontalIndex < this.size * this.size) {\n          this.board[horizontalIndex].ship = ship;\n        }\n      }\n    } else {\n      for (let j = 0; j < ship.length; j += 1) {\n        const verticalIndex = (x + j) * this.size + y;\n        if (verticalIndex >= 0 && verticalIndex < this.size * this.size) {\n          this.board[verticalIndex].ship = ship;\n        }\n      }\n    }\n  }\n\n  receiveAttack(position) {\n    const x = position[0];\n    const y = position[1];\n\n    const index = x * this.size + y;\n\n    const isShipHit = this.board[index].ship !== null;\n\n    if (isShipHit) {\n      this.board[index].ship.hit();\n      this.board[index].isHit = true;\n    } else {\n      this.board[index].isMissed = true;\n    }\n  }\n\n  getEmptyNodes() {\n    const emptyNodes = [];\n    for (let i = 0; i < this.board.length; i += 1) {\n      if (this.board[i].isMissed === false && this.board[i].isHit === false) {\n        emptyNodes.push(this.board[i].index);\n      }\n    }\n    return emptyNodes;\n  }\n}\n\nmodule.exports = GameBoard;\n\n\n//# sourceURL=webpack://webpack-template/./src/models/gameboard.js?");

/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameBoard = __webpack_require__(/*! ./gameboard */ \"./src/models/gameboard.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/models/ship.js\");\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.gameboard = new GameBoard();\n    this.attacks = [];\n    this.carrier = new Ship(\"Carrier\", 5);\n    this.battleship = new Ship(\"Battleship\", 4);\n    this.destroyer = new Ship(\"Destroyer\", 3);\n    this.submarine = new Ship(\"Submarine\", 3);\n    this.boat = new Ship(\"Boat\", 2);\n  }\n\n  attack(position, gameboard) {\n    const x = position[0];\n    const y = position[1];\n    const index = x * 10 + y;\n    this.attacks.push(index);\n    gameboard.receiveAttack(position);\n  }\n\n  getRandomAttackIndex() {\n    const attacksDone = this.attacks;\n    let attackIndex;\n\n    do {\n      attackIndex = Math.floor(Math.random() * 100);\n    } while (attacksDone.includes(attackIndex));\n\n    return attackIndex;\n  }\n\n  attackWithAi(gameBoard) {\n    const randomIndex = this.getRandomAttackIndex();\n    const xPosition = randomIndex % 10;\n    const yPosition = Math.floor(randomIndex / 10);\n    const attackPosition = [xPosition, yPosition];\n    this.attacks.push(randomIndex);\n    gameBoard.receiveAttack(attackPosition);\n  }\n}\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack://webpack-template/./src/models/player.js?");

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((module) => {

eval("class Ship {\n  constructor(name, length) {\n    this.name = name;\n    this.length = length;\n    this.numberOfHits = 0;\n    this.isSunk = false;\n  }\n\n  hit() {\n    if (this.isSunk === false) {\n      this.numberOfHits += 1;\n      if (this.numberOfHits === this.length) {\n        this.isSunk = true;\n      }\n    }\n  }\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://webpack-template/./src/models/ship.js?");

/***/ }),

/***/ "./src/util/random_numbers.js":
/*!************************************!*\
  !*** ./src/util/random_numbers.js ***!
  \************************************/
/***/ ((module) => {

eval("function generateRandomShipPositions() {\n  const numbers = new Set();\n\n  while (numbers.size < 5) {\n    const randomNumber = Math.floor(Math.random() * 10);\n    numbers.add(randomNumber);\n  }\n  return Array.from(numbers);\n}\n\nfunction generateRandomNumber() {\n  return Math.floor(Math.random() * 5);\n}\n\nmodule.exports = { generateRandomShipPositions, generateRandomNumber };\n\n\n//# sourceURL=webpack://webpack-template/./src/util/random_numbers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;