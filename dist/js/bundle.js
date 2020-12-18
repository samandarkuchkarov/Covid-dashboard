/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_country */ \"./js/list_country.js\");\n/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ \"./js/keyboard.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./js/search.js\");\n\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  _keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.init();\n});\n(0,_list_country__WEBPACK_IMPORTED_MODULE_0__.list)('case');\ndocument.querySelector('.cases-btn').addEventListener('click', () => {\n  (0,_list_country__WEBPACK_IMPORTED_MODULE_0__.list)('case');\n});\ndocument.querySelector('.deathes-btn').addEventListener('click', () => {\n  (0,_list_country__WEBPACK_IMPORTED_MODULE_0__.list)('deaths');\n});\ndocument.querySelector('.recover-btn').addEventListener('click', () => {\n  (0,_list_country__WEBPACK_IMPORTED_MODULE_0__.list)('recovered');\n});\nlet search = new _search__WEBPACK_IMPORTED_MODULE_2__.Search();\nsearch.listen();\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/keyboard.js":
/*!************************!*\
  !*** ./js/keyboard.js ***!
  \************************/
/*! namespace exports */
/*! export Keyboard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Keyboard\": () => /* binding */ Keyboard\n/* harmony export */ });\nconst Keyboard = {\n  elements: {\n    main: null,\n    keysContainer: null,\n    keys: []\n  },\n  eventHandlers: {\n    oninput: null,\n    onclose: null\n  },\n  properties: {\n    value: \"\",\n    capsLock: false\n  },\n\n  init() {\n    this.elements.main = document.createElement(\"div\");\n    this.elements.keysContainer = document.createElement(\"div\");\n    this.elements.main.classList.add(\"keyboard\", \"keyboard--hidden\");\n    this.elements.keysContainer.classList.add(\"keyboard__keys\");\n    this.elements.keysContainer.appendChild(this._createKeys());\n    let keyboard = document.getElementsByClassName('keyboard');\n    let textarea = document.querySelector('.use-keyboard-input');\n    document.querySelector('body').addEventListener('click', event => {\n      let condition = keyboard[0].contains(event.target) === true || textarea.contains(event.target) === true;\n\n      if (condition == false) {\n        this.close();\n      }\n    });\n    this.elements.keys = this.elements.keysContainer.querySelectorAll(\".keyboard__key\");\n    this.elements.main.appendChild(this.elements.keysContainer);\n    document.body.appendChild(this.elements.main);\n    document.querySelectorAll(\".use-keyboard-input\").forEach(element => {\n      element.addEventListener(\"focus\", () => {\n        this.open(element.value, currentValue => {\n          element.value = currentValue;\n        });\n      });\n    });\n  },\n\n  _createKeys() {\n    const fragment = document.createDocumentFragment();\n    const keyLayout = [\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"backspace\", \"q\", \"w\", \"e\", \"r\", \"t\", \"y\", \"u\", \"i\", \"o\", \"p\", \"caps\", \"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"l\", \"enter\", \"done\", \"z\", \"x\", \"c\", \"v\", \"b\", \"n\", \"m\", \",\", \".\", \"?\", \"space\"];\n\n    const createIconHTML = icon_name => {\n      return `<i class=\"material-icons\">${icon_name}</i>`;\n    };\n\n    keyLayout.forEach(key => {\n      const keyElement = document.createElement(\"button\");\n      const insertLineBreak = [\"backspace\", \"p\", \"enter\", \"?\"].indexOf(key) !== -1;\n      keyElement.setAttribute(\"type\", \"button\");\n      keyElement.classList.add(\"keyboard__key\");\n\n      switch (key) {\n        case \"backspace\":\n          keyElement.classList.add(\"keyboard__key--wide\");\n          keyElement.innerHTML = createIconHTML(\"backspace\");\n          keyElement.addEventListener(\"click\", () => {\n            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);\n\n            this._triggerEvent(\"oninput\");\n          });\n          break;\n\n        case \"caps\":\n          keyElement.classList.add(\"keyboard__key--wide\", \"keyboard__key--activatable\");\n          keyElement.innerHTML = `CapsLk`;\n          keyElement.addEventListener(\"click\", () => {\n            this._toggleCapsLock();\n\n            keyElement.classList.toggle(\"keyboard__key--active\", this.properties.capsLock);\n          });\n          break;\n\n        case \"enter\":\n          keyElement.classList.add(\"keyboard__key--wide\");\n          keyElement.innerHTML = `Enter`;\n          keyElement.addEventListener(\"click\", () => {\n            this.close();\n\n            this._triggerEvent(\"onclose\");\n          });\n          break;\n\n        case \"space\":\n          keyElement.classList.add(\"keyboard__key--extra-wide\");\n          keyElement.innerHTML = \"Space\";\n          keyElement.addEventListener(\"click\", () => {\n            this.properties.value += \" \";\n\n            this._triggerEvent(\"oninput\");\n          });\n          break;\n\n        case \"done\":\n          keyElement.classList.add(\"keyboard__key--wide\", \"keyboard__key--dark\");\n          keyElement.innerHTML = createIconHTML(\"Exit\");\n          keyElement.addEventListener(\"click\", () => {\n            this.close();\n\n            this._triggerEvent(\"onclose\");\n          });\n          break;\n\n        default:\n          keyElement.textContent = key.toLowerCase();\n          keyElement.addEventListener(\"click\", () => {\n            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();\n\n            this._triggerEvent(\"oninput\");\n          });\n          break;\n      }\n\n      fragment.appendChild(keyElement);\n\n      if (insertLineBreak) {\n        fragment.appendChild(document.createElement(\"br\"));\n      }\n    });\n    return fragment;\n  },\n\n  _triggerEvent(handlerName) {\n    if (typeof this.eventHandlers[handlerName] == \"function\") {\n      this.eventHandlers[handlerName](this.properties.value);\n    }\n  },\n\n  _toggleCapsLock() {\n    this.properties.capsLock = !this.properties.capsLock;\n\n    for (const key of this.elements.keys) {\n      if (key.childElementCount === 0) {\n        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();\n      }\n    }\n  },\n\n  open(initialValue, oninput, onclose) {\n    this.properties.value = initialValue || \"\";\n    this.eventHandlers.oninput = oninput;\n    this.eventHandlers.onclose = onclose;\n    this.elements.main.classList.remove(\"keyboard--hidden\");\n  },\n\n  close() {\n    this.properties.value = \"\";\n    this.eventHandlers.oninput = oninput;\n    this.eventHandlers.onclose = onclose;\n    this.elements.main.classList.add(\"keyboard--hidden\");\n  }\n\n};\n\n//# sourceURL=webpack:///./js/keyboard.js?");

/***/ }),

/***/ "./js/list_country.js":
/*!****************************!*\
  !*** ./js/list_country.js ***!
  \****************************/
/*! namespace exports */
/*! export list [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list\": () => /* binding */ list\n/* harmony export */ });\nasync function list(cases) {\n  document.querySelector('.list-block').innerHTML = '';\n  const url = `https://corona.lmao.ninja/v2/countries`;\n  const res = await fetch(url);\n  const data = await res.json();\n  const title_case = document.querySelector('.global-cases-title');\n  let sum_cases = 0;\n\n  if (cases === 'case') {\n    data.sort((a, b) => {\n      return b.cases - a.cases;\n    });\n    title_case.textContent = 'Global Cases';\n  } else if (cases == 'deaths') {\n    data.sort((a, b) => {\n      return b.deaths - a.deaths;\n    });\n    title_case.textContent = 'Global Deaths';\n  } else if (cases == 'recovered') {\n    data.sort((a, b) => {\n      return b.recovered - a.recovered;\n    });\n    title_case.textContent = 'Amount of recovered';\n  }\n\n  let sum_deathes = 0;\n\n  for (let i = 0; i < data.length; i++) {\n    let country = document.createElement('div');\n    country.className = 'list-block-item';\n    document.querySelector('.list-block').appendChild(country);\n\n    if (cases == 'case') {\n      sum_cases += data[i].cases;\n      country.innerHTML = `<i class = \"cases\">${data[i].cases}</i> <i class = \"flag\"></i><i class = \"country_name\">${data[i].country}</i>`;\n    } else if (cases == 'deaths') {\n      sum_cases += data[i].deaths;\n      country.innerHTML = `<i class = \"cases\">${data[i].deaths}</i> <i class = \"flag\"></i><i class = \"country_name\">${data[i].country}</i>`;\n    } else if (cases == 'recovered') {\n      sum_cases += data[i].recovered;\n      country.innerHTML = `<i class = \"cases\">${data[i].recovered}</i> <i class = \"flag\"></i><i class = \"country_name\">${data[i].country}</i>`;\n    }\n\n    document.querySelectorAll('.flag')[i].style.backgroundImage = `url(${data[i].countryInfo.flag})`;\n    sum_cases += data[i].cases;\n    sum_deathes += data[i].deaths;\n  }\n\n  document.querySelector('.global-cases').textContent = sum_cases;\n  document.querySelector('.global-deathes').textContent = sum_deathes;\n  return data;\n}\n\n//# sourceURL=webpack:///./js/list_country.js?");

/***/ }),

/***/ "./js/search.js":
/*!**********************!*\
  !*** ./js/search.js ***!
  \**********************/
/*! namespace exports */
/*! export Search [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": () => /* binding */ Search\n/* harmony export */ });\nclass Search {\n  compare() {\n    let input, filter;\n    let list = document.querySelectorAll('.list-block-item');\n    input = document.querySelector('.use-keyboard-input');\n    filter = input.value.toUpperCase();\n    const text = document.querySelectorAll('.country_name');\n\n    for (let i = 0; i < list.length; i++) {\n      if (text[i].textContent.toUpperCase().indexOf(filter) > -1) {\n        list[i].style.display = '';\n      } else {\n        list[i].style.display = 'none';\n      }\n    }\n  }\n\n  listen() {\n    const textarea = document.querySelector('.use-keyboard-input');\n    let that = this;\n    setTimeout(function () {\n      const keyboard = document.querySelectorAll('.keyboard__key');\n\n      for (let i = 0; i < keyboard.length; i++) {\n        keyboard[i].addEventListener('click', () => {\n          that.compare();\n        });\n      }\n    }, 0);\n    textarea.addEventListener('keydown', () => {\n      setTimeout(function () {\n        that.compare();\n      }, 0);\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./js/search.js?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./sass/style.scss");
/******/ })()
;