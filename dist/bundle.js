/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-size: 62.5%;\\n  overflow: hidden;\\n}\\n\\nnav {\\n  padding: 1em 5em;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: rgb(168, 70, 70);\\n}\\n\\n.nav-input {\\n  display: flex;\\n  gap: 2em;\\n}\\n\\n.show-add-project,\\n.show-add-task {\\n  font-size: 3em;\\n  padding: 0.2em;\\n}\\n\\n.site-name {\\n  color: white;\\n  font-size: 8em;\\n}\\n\\n.content {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.project {\\n  margin: 1em 1em 0em 1em;\\n  font-size: 3em;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: rgb(201, 201, 201);\\n  padding: 1em;\\n  transition: 0.5s;\\n}\\n\\n.projct-view {\\n  height: 100vh;\\n  background-color: rgb(236, 236, 236);\\n}\\n\\n.project-overlay,\\n.task-overlay,\\n.edit-task-overlay {\\n  font-size: 3em;\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  background-color: rgba(0, 0, 0, 0.336);\\n}\\n\\n.project-model,\\n.task-model,\\n.edit-task-model {\\n  padding: 2em;\\n  display: flex;\\n  flex-direction: column;\\n  margin: auto;\\n  width: 25em;\\n  background-color: aliceblue;\\n  position: absolute;\\n}\\n\\n.task-model,\\n.edit-task-model {\\n  height: 28em;\\n}\\n.project-model {\\n  height: 8em;\\n}\\n\\n.project-overlay,\\n.task-overlay,\\n.project-model,\\n.task-model,\\n.edit-task-overlay,\\n.edit-task-model {\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n}\\n\\n#input-task-notes,\\n#input-task-desc {\\n  height: 5em;\\n}\\n\\n.view-container {\\n  display: flex;\\n}\\n.projct-view {\\n  width: 50%;\\n}\\n.task-view {\\n  width: 50%;\\n  padding: 2em;\\n}\\n\\n.active {\\n  background-color: rgb(255, 255, 255);\\n}\\n\\n.tasks {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5em;\\n}\\n\\n.indi-task-container {\\n  font-size: 3em;\\n}\\n\\n.task-icons {\\n  display: flex;\\n  gap: 1em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n\n\n\n\n\n\nconst btnOpenProject = document.querySelector(\".show-add-project\");\nconst btnOpenTask = document.querySelector(\".show-add-task\");\nconst btnNewTask = document.querySelector(\".btn-add-task\");\nconst content = document.querySelector(\".content \");\nconst taskOverlay = document.querySelector(\".task-overlay\");\nconst projectOverlay = document.querySelector(\".project-overlay\");\n\nconst inputTitle = document.querySelector(\"#input-task-title\");\nconst inputDesc = document.querySelector(\"#input-task-desc\");\nconst inputDate = document.querySelector(\"#input-task-date\");\nconst inputPriority = document.querySelector(\"#input-task-priority\");\nconst inputNotes = document.querySelector(\"#input-task-notes\");\n\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_3__.createEditTaskOverlay)();\n\nbtnOpenTask.addEventListener(\"click\", () => {\n  if (document.querySelector(\".active\") === null) {\n    alert(\"Select a project!\");\n  } else {\n    taskOverlay.style.display = \"block\";\n  }\n});\n\nbtnNewTask.addEventListener(\"click\", () => {\n  _modules_task__WEBPACK_IMPORTED_MODULE_2__.taskController.createTask(\n    inputTitle,\n    inputDesc,\n    inputDate,\n    inputPriority,\n    inputNotes\n  );\n  clearTaks();\n  displayTasks();\n\n  taskOverlay.style.display = \"none\";\n});\n\nfunction clearTaks() {\n  let container = document.querySelector(\".tasks\");\n  while (container.hasChildNodes()) {\n    container.removeChild(container.lastChild);\n  }\n}\n\nconst displayTasks = function () {\n  let localProject = _modules_task__WEBPACK_IMPORTED_MODULE_2__.taskController.getProject();\n  let tasks = localProject.task;\n\n  for (let i = 0; i < tasks.length; i++) {\n    const name = tasks[i].taskTitle;\n    const desc = tasks[i].description;\n    const date = tasks[i].dueDate;\n    const priority = tasks[i].priority;\n    const notes = tasks[i].notes;\n\n    generateTasks(name, desc, date, priority, notes, i);\n  }\n\n  function generateTasks(name, desc, date, priority, notes, index) {\n    const tasksContainer = document.querySelector(\".tasks\");\n\n    const removeFromLocalArray = function () {\n      tasks.splice(Number(index), 1);\n      _modules_task__WEBPACK_IMPORTED_MODULE_2__.taskController.toStorage(localProject.name, localProject);\n      clearTaks();\n      displayTasks();\n    };\n\n    const updateTasks = function (index) {\n      const title = document.querySelector(\"#edit-task-title\");\n      const desc = document.querySelector(\"#edit-task-desc\");\n      const date = document.querySelector(\"#edit-task-date\");\n      const prio = document.querySelector(\"#edit-task-prio\");\n      const notes = document.querySelector(\"#edit-task-notes\");\n\n      tasks[index].taskTitle = title.value;\n      tasks[index].description = desc.value;\n      tasks[index].dueDate = date.value;\n      tasks[index].priority = prio.value;\n      tasks[index].notes = notes.value;\n\n      _modules_task__WEBPACK_IMPORTED_MODULE_2__.taskController.toStorage(localProject.name, localProject);\n      clearTaks();\n      displayTasks();\n    };\n\n    const editTasks = function () {\n      let openTaskOverlay = document.querySelector(\".edit-task-overlay\");\n      const index = this.dataset.index;\n\n      openTaskOverlay.style.display = \"block\";\n\n      const button = document.querySelector(\".editButtonSubmit\");\n      button.addEventListener(\"click\", () => {\n        openTaskOverlay.style.display = \"none\";\n        updateTasks(index);\n      });\n    };\n\n    const divContainer = document.createElement(\"div\");\n    divContainer.classList.add(`indi-task-container`);\n    const divName = document.createElement(\"div\");\n    divName.textContent = `Task Title: ${name}`;\n    const divDesc = document.createElement(\"div\");\n    divDesc.textContent = `Description: ${desc}`;\n    const divDate = document.createElement(\"div\");\n    divDate.textContent = `Due Date: ${date}`;\n    const divPriority = document.createElement(\"div\");\n    divPriority.textContent = `Priority: ${priority}`;\n    const divNotes = document.createElement(\"div\");\n    divNotes.textContent = `Notes: ${notes}`;\n    const divIcons = document.createElement(\"div\");\n    divIcons.classList.add(\"task-icons\");\n    const editTask = document.createElement(\"i\");\n    editTask.dataset.index = index;\n    editTask.classList.add(\"glyphicon\", \"glyphicon-pencil\", \"editTaskButton\");\n    const removeTask = document.createElement(\"i\");\n    removeTask.classList.add(\"glyphicon\", \"glyphicon-remove\");\n\n    removeTask.addEventListener(\"click\", removeFromLocalArray);\n    editTask.addEventListener(\"click\", editTasks);\n\n    tasksContainer.appendChild(divContainer);\n    divContainer.append(\n      divName,\n      divDesc,\n      divDate,\n      divPriority,\n      divNotes,\n      divIcons\n    );\n    divIcons.append(editTask, removeTask);\n  }\n};\n\n(function submitNewProject() {\n  btnOpenProject.addEventListener(\"click\", () => {\n    projectOverlay.style.display = \"block\";\n  });\n\n  document.querySelector(\".btn-add-project\").addEventListener(\"click\", () => {\n    let newProjectName = document.querySelector(\"#input-new-project\").value;\n    _modules_project__WEBPACK_IMPORTED_MODULE_1__.projectController.createProject(newProjectName);\n\n    displayProject(newProjectName);\n    activeProject();\n\n    projectOverlay.style.display = \"none\";\n  });\n})();\n\nfunction displayProject(name) {\n  let projectContainer = document.createElement(\"div\");\n  projectContainer.classList.add(\"project\");\n  let projectName = document.createElement(\"div\");\n  projectName.classList.add(\"project-name\");\n  projectName.textContent = name;\n  let projectRemove = document.createElement(\"i\");\n  projectRemove.classList.add(\n    \"project-remove\",\n    \"glyphicon\",\n    \"glyphicon-remove\"\n  );\n\n  removeProject(projectRemove, projectContainer, name);\n  projectContainer.append(projectName, projectRemove);\n  content.appendChild(projectContainer);\n}\n\nfunction removeProject(projectRemove, projectContainer, name) {\n  projectRemove.addEventListener(\"click\", () => {\n    window.localStorage.removeItem(`${name}`);\n    content.removeChild(projectContainer);\n  });\n}\n\nconst activeProject = function () {\n  let allProjects = document.querySelectorAll(\".project\");\n  allProjects.forEach((project) => {\n    project.addEventListener(\"click\", () => {\n      allProjects.forEach((element) => {\n        element.classList.remove(\"active\");\n      });\n      project.classList.add(\"active\");\n      clearTaks();\n      displayTasks();\n    });\n  });\n};\n\nconst defaultProject = (function () {\n  if (localStorage.length === 0) _modules_project__WEBPACK_IMPORTED_MODULE_1__.projectController.createProject(\"Default\");\n})();\n\nconst loadProjects = (function () {\n  const localProject = window.localStorage;\n  for (let i = 0; i < localProject.length; i++) {\n    displayProject(localProject.key(i));\n  }\n  activeProject();\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectController\": () => (/* binding */ projectController),\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory)\n/* harmony export */ });\nconst projectFactory = function (newName) {\n  let name = newName;\n  let task = [];\n\n  return { name, task };\n};\n\nconst projectController = (function () {\n  function createProject(projectName) {\n    let project = projectFactory(projectName);\n    toStorage(project.name, project);\n  }\n\n  function toStorage(projectName, obj) {\n    window.localStorage.setItem(projectName, JSON.stringify(obj));\n  }\n\n  function removeProject(projectName) {\n    window.localStorage.removeItem(projectName);\n  }\n\n  return { createProject, removeProject };\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEditTaskOverlay\": () => (/* binding */ createEditTaskOverlay)\n/* harmony export */ });\nconst createEditTaskOverlay = function () {\n  const htmlDiv = document.querySelector(\".edit-task\");\n\n  //form\n  const editTaskOverlay = document.createElement(\"div\");\n  editTaskOverlay.classList.add(\"edit-task-overlay\");\n\n  const editTaskModel = document.createElement(\"div\");\n  editTaskModel.classList.add(\"edit-task-model\");\n\n  //object\n\n  const labelForName = document.createElement(\"label\");\n  labelForName.for = \"edit-task-title\";\n  labelForName.textContent = \"Task Title:\";\n  const editInputName = document.createElement(\"input\");\n  editInputName.id = \"edit-task-title\";\n\n  const labelForDesc = document.createElement(\"label\");\n  labelForDesc.for = \"edit-task-desc\";\n  labelForDesc.textContent = \"Description:\";\n  const editInputDesc = document.createElement(\"input\");\n  editInputDesc.id = \"edit-task-desc\";\n\n  const labelForDate = document.createElement(\"label\");\n  labelForDate.for = \"edit-task-date\";\n  labelForDate.textContent = \"Due Date:\";\n  const editInputDate = document.createElement(\"input\");\n  editInputDate.type = \"date\";\n  editInputDate.id = \"edit-task-date\";\n\n  const labelForPrio = document.createElement(\"label\");\n  labelForPrio.for = \"edit-task-prio\";\n  labelForPrio.textContent = \"Task Priority:\";\n  const editInputPrio = document.createElement(\"select\");\n  editInputPrio.id = \"edit-task-prio\";\n  const optionHigh = document.createElement(\"option\");\n  optionHigh.value = \"high\";\n  optionHigh.textContent = \"High\";\n  const optionMedium = document.createElement(\"option\");\n  optionMedium.value = \"medium\";\n  optionMedium.textContent = \"Medium\";\n  const optionLow = document.createElement(\"option\");\n  optionLow.value = \"low\";\n  optionLow.textContent = \"Low\";\n\n  const labelForNotes = document.createElement(\"label\");\n  labelForNotes.for = \"edit-task-notes\";\n  labelForNotes.textContent = \"Notes:\";\n\n  const editInputNotes = document.createElement(\"input\");\n  editInputNotes.id = \"edit-task-notes\";\n\n  const editButton = document.createElement(\"button\");\n  editButton.textContent = \"Change\";\n  editButton.classList.add(\"editButtonSubmit\");\n\n  //append\n  htmlDiv.appendChild(editTaskOverlay);\n  editTaskOverlay.appendChild(editTaskModel);\n  editInputPrio.append(optionHigh, optionMedium, optionLow);\n  editTaskModel.append(\n    labelForName,\n    editInputName,\n    labelForDesc,\n    editInputDesc,\n    labelForDate,\n    editInputDate,\n    labelForPrio,\n    editInputPrio,\n    labelForNotes,\n    editInputNotes,\n    editButton\n  );\n};\n\n\n//# sourceURL=webpack://todo-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskController\": () => (/* binding */ taskController),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory)\n/* harmony export */ });\nconst taskFactory = function (\n  inputTitle,\n  inputDesc,\n  inputDate,\n  inputPriority,\n  inputNotes\n) {\n  let taskTitle = inputTitle;\n  let description = inputDesc;\n  let dueDate = inputDate;\n  let priority = inputPriority;\n  let notes = inputNotes;\n\n  return { taskTitle, description, dueDate, priority, notes };\n};\n\nconst taskController = (function () {\n  function getProject() {\n    const selectedProject = document.querySelector(\".active\");\n    const projectName = selectedProject.textContent;\n\n    return JSON.parse(window.localStorage.getItem(projectName));\n  }\n\n  function createTask(\n    inputTitle,\n    inputDesc,\n    inputDate,\n    inputPriority,\n    inputNotes\n  ) {\n    let project = getProject();\n    let tasks = taskFactory(\n      inputTitle.value,\n      inputDesc.value,\n      inputDate.value,\n      inputPriority.value,\n      inputNotes.value\n    );\n    project.task.push(tasks);\n\n    toStorage(project.name, project);\n  }\n\n  function toStorage(projectName, obj) {\n    window.localStorage.setItem(projectName, JSON.stringify(obj));\n  }\n\n  return { getProject, createTask, toStorage };\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

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