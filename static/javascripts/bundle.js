(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"static/javascripts/bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./static/javascripts/index.ts","static/javascripts/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/javascripts/browser/document/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/browser/document/index.ts ***!
  \******************************************************/
/*! exports provided: watchDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchDocument", function() { return watchDocument; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch document
 *
 * Documents must be implemented as subjects, so all downstream observables are
 * automatically updated when a new document is emitted. This enabled features
 * like instant loading.
 *
 * @return Document subject
 */
function watchDocument() {
    var document$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
    Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "DOMContentLoaded")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(document))
        .subscribe(document$);
    /* Return document */
    return document$;
}


/***/ }),

/***/ "./static/javascripts/browser/element/_/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/browser/element/_/index.ts ***!
  \*******************************************************/
/*! exports provided: getElement, getElementOrThrow, getActiveElement, getElements, createElement, replaceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementOrThrow", function() { return getElementOrThrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveElement", function() { return getActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return getElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve an element matching the query selector
 *
 * @template T - Element type
 *
 * @param selector - Query selector
 * @param node - Node of reference
 *
 * @return Element or nothing
 */
function getElement(selector, node) {
    if (node === void 0) { node = document; }
    return node.querySelector(selector) || undefined;
}
/**
 * Retrieve an element matching a query selector or throw a reference error
 *
 * @template T - Element type
 *
 * @param selector - Query selector
 * @param node - Node of reference
 *
 * @return Element
 */
function getElementOrThrow(selector, node) {
    if (node === void 0) { node = document; }
    var el = getElement(selector, node);
    if (typeof el === "undefined")
        throw new ReferenceError("Missing element: expected \"" + selector + "\" to be present");
    return el;
}
/**
 * Retrieve the currently active element
 *
 * @return Element or nothing
 */
function getActiveElement() {
    return document.activeElement instanceof HTMLElement
        ? document.activeElement
        : undefined;
}
/**
 * Retrieve all elements matching the query selector
 *
 * @template T - Element type
 *
 * @param selector - Query selector
 * @param node - Node of reference
 *
 * @return Elements
 */
function getElements(selector, node) {
    if (node === void 0) { node = document; }
    return Array.from(node.querySelectorAll(selector));
}
/* ------------------------------------------------------------------------- */
/**
 * Create an element
 *
 * @template T - Tag name type
 *
 * @param tagName - Tag name
 *
 * @return Element
 */
function createElement(tagName) {
    return document.createElement(tagName);
}
/**
 * Replace an element with another element
 *
 * @param source - Source element
 * @param target - Target element
 */
function replaceElement(source, target) {
    source.replaceWith(target);
}


/***/ }),

/***/ "./static/javascripts/browser/element/focus/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/browser/element/focus/index.ts ***!
  \***********************************************************/
/*! exports provided: setElementFocus, watchElementFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementFocus", function() { return setElementFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchElementFocus", function() { return watchElementFocus; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_ */ "./static/javascripts/browser/element/_/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set element focus
 *
 * @param el - Element
 * @param value - Whether the element should be focused
 */
function setElementFocus(el, value) {
    if (value === void 0) { value = true; }
    if (value)
        el.focus();
    else
        el.blur();
}
/* ------------------------------------------------------------------------- */
/**
 * Watch element focus
 *
 * @param el - Element
 *
 * @return Element focus observable
 */
function watchElementFocus(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(el, "focus"), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(el, "blur"))
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
        var type = _a.type;
        return type === "focus";
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(el === Object(___WEBPACK_IMPORTED_MODULE_2__["getActiveElement"])()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
}


/***/ }),

/***/ "./static/javascripts/browser/element/index.ts":
/*!*****************************************************!*\
  !*** ./static/javascripts/browser/element/index.ts ***!
  \*****************************************************/
/*! exports provided: getElement, getElementOrThrow, getActiveElement, getElements, createElement, replaceElement, setElementFocus, watchElementFocus, getElementOffset, watchElementOffset, setElementSelection, getElementSize, watchElementSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/browser/element/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return ___WEBPACK_IMPORTED_MODULE_0__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementOrThrow", function() { return ___WEBPACK_IMPORTED_MODULE_0__["getElementOrThrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveElement", function() { return ___WEBPACK_IMPORTED_MODULE_0__["getActiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return ___WEBPACK_IMPORTED_MODULE_0__["getElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return ___WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return ___WEBPACK_IMPORTED_MODULE_0__["replaceElement"]; });

/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus */ "./static/javascripts/browser/element/focus/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_1__["setElementFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchElementFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_1__["watchElementFocus"]; });

/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset */ "./static/javascripts/browser/element/offset/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementOffset", function() { return _offset__WEBPACK_IMPORTED_MODULE_2__["getElementOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchElementOffset", function() { return _offset__WEBPACK_IMPORTED_MODULE_2__["watchElementOffset"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./static/javascripts/browser/element/select/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementSelection", function() { return _select__WEBPACK_IMPORTED_MODULE_3__["setElementSelection"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./size */ "./static/javascripts/browser/element/size/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementSize", function() { return _size__WEBPACK_IMPORTED_MODULE_4__["getElementSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchElementSize", function() { return _size__WEBPACK_IMPORTED_MODULE_4__["watchElementSize"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */







/***/ }),

/***/ "./static/javascripts/browser/element/offset/index.ts":
/*!************************************************************!*\
  !*** ./static/javascripts/browser/element/offset/index.ts ***!
  \************************************************************/
/*! exports provided: getElementOffset, watchElementOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementOffset", function() { return getElementOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchElementOffset", function() { return watchElementOffset; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve element offset
 *
 * @param el - Element
 *
 * @return Element offset
 */
function getElementOffset(el) {
    return {
        x: el.scrollLeft,
        y: el.scrollTop
    };
}
/* ------------------------------------------------------------------------- */
/**
 * Watch element offset
 *
 * @param el - Element
 *
 * @return Element offset observable
 */
function watchElementOffset(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(el, "scroll"), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, "resize"))
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return getElementOffset(el); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(getElementOffset(el)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
}


/***/ }),

/***/ "./static/javascripts/browser/element/select/index.ts":
/*!************************************************************!*\
  !*** ./static/javascripts/browser/element/select/index.ts ***!
  \************************************************************/
/*! exports provided: setElementSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementSelection", function() { return setElementSelection; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set element text selection
 *
 * @param el - Element
 */
function setElementSelection(el) {
    if (el instanceof HTMLInputElement)
        el.select();
    else
        throw new Error("Not implemented");
}


/***/ }),

/***/ "./static/javascripts/browser/element/size/index.ts":
/*!**********************************************************!*\
  !*** ./static/javascripts/browser/element/size/index.ts ***!
  \**********************************************************/
/*! exports provided: getElementSize, watchElementSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementSize", function() { return getElementSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchElementSize", function() { return watchElementSize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve element size
 *
 * @param el - Element
 *
 * @return Element size
 */
function getElementSize(el) {
    return {
        width: el.offsetWidth,
        height: el.offsetHeight
    };
}
/* ------------------------------------------------------------------------- */
/**
 * Watch element size
 *
 * @param el - Element
 *
 * @return Element size observable
 */
function watchElementSize(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (next) {
        new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), contentRect = _b[0].contentRect;
            return next({
                width: Math.round(contentRect.width),
                height: Math.round(contentRect.height)
            });
        })
            .observe(el);
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(getElementSize(el)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
}


/***/ }),

/***/ "./static/javascripts/browser/index.ts":
/*!*********************************************!*\
  !*** ./static/javascripts/browser/index.ts ***!
  \*********************************************/
/*! exports provided: watchDocument, getElement, getElementOrThrow, getActiveElement, getElements, createElement, replaceElement, setElementFocus, watchElementFocus, getElementOffset, watchElementOffset, setElementSelection, getElementSize, watchElementSize, isSusceptibleToKeyboard, watchKeyboard, getLocation, setLocation, isLocalLocation, isAnchorLocation, watchLocation, watchLocationBase, getLocationHash, setLocationHash, watchLocationHash, watchMedia, getToggle, setToggle, watchToggle, watchViewport, watchViewportAt, getViewportOffset, setViewportOffset, watchViewportOffset, getViewportSize, watchViewportSize, watchWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document */ "./static/javascripts/browser/document/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchDocument", function() { return _document__WEBPACK_IMPORTED_MODULE_0__["watchDocument"]; });

/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./static/javascripts/browser/element/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElement", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["getElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementOrThrow", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["getElementOrThrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveElement", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["getActiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["getElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementFocus", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["setElementFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchElementFocus", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["watchElementFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementOffset", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["getElementOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchElementOffset", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["watchElementOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementSelection", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["setElementSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementSize", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["getElementSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchElementSize", function() { return _element__WEBPACK_IMPORTED_MODULE_1__["watchElementSize"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard */ "./static/javascripts/browser/keyboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSusceptibleToKeyboard", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_2__["isSusceptibleToKeyboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchKeyboard", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_2__["watchKeyboard"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location */ "./static/javascripts/browser/location/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["setLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLocalLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["isLocalLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnchorLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["isAnchorLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchLocation", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["watchLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchLocationBase", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["watchLocationBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHash", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["getLocationHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLocationHash", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["setLocationHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchLocationHash", function() { return _location__WEBPACK_IMPORTED_MODULE_3__["watchLocationHash"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media */ "./static/javascripts/browser/media/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchMedia", function() { return _media__WEBPACK_IMPORTED_MODULE_4__["watchMedia"]; });

/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle */ "./static/javascripts/browser/toggle/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getToggle", function() { return _toggle__WEBPACK_IMPORTED_MODULE_5__["getToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setToggle", function() { return _toggle__WEBPACK_IMPORTED_MODULE_5__["setToggle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchToggle", function() { return _toggle__WEBPACK_IMPORTED_MODULE_5__["watchToggle"]; });

/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewport */ "./static/javascripts/browser/viewport/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewport", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["watchViewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewportAt", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["watchViewportAt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewportOffset", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["getViewportOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setViewportOffset", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["setViewportOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewportOffset", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["watchViewportOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewportSize", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["getViewportSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewportSize", function() { return _viewport__WEBPACK_IMPORTED_MODULE_6__["watchViewportSize"]; });

/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worker */ "./static/javascripts/browser/worker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchWorker", function() { return _worker__WEBPACK_IMPORTED_MODULE_7__["watchWorker"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */










/***/ }),

/***/ "./static/javascripts/browser/keyboard/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/browser/keyboard/index.ts ***!
  \******************************************************/
/*! exports provided: isSusceptibleToKeyboard, watchKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSusceptibleToKeyboard", function() { return isSusceptibleToKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchKeyboard", function() { return watchKeyboard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Check whether an element may receive keyboard input
 *
 * @param el - Element
 *
 * @return Test result
 */
function isSusceptibleToKeyboard(el) {
    switch (el.tagName) {
        /* Form elements */
        case "INPUT":
        case "SELECT":
        case "TEXTAREA":
            return true;
        /* Everything else */
        default:
            return el.isContentEditable;
    }
}
/* ------------------------------------------------------------------------- */
/**
 * Watch keyboard
 *
 * @return Keyboard observable
 */
function watchKeyboard() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, "keydown")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (ev) { return !(ev.metaKey || ev.ctrlKey); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (ev) { return ({
        type: ev.key,
        claim: function () {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
}


/***/ }),

/***/ "./static/javascripts/browser/location/_/index.ts":
/*!********************************************************!*\
  !*** ./static/javascripts/browser/location/_/index.ts ***!
  \********************************************************/
/*! exports provided: getLocation, setLocation, isLocalLocation, isAnchorLocation, watchLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return setLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalLocation", function() { return isLocalLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnchorLocation", function() { return isAnchorLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchLocation", function() { return watchLocation; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve location
 *
 * This function will return a `URL` object (and not `Location`) in order to
 * normalize typings across the application. Furthermore, locations need to be
 * tracked without setting them and `Location` is a singleton which represents
 * the current location.
 *
 * @return URL
 */
function getLocation() {
    return new URL(location.href);
}
/**
 * Set location
 *
 * @param url - URL to change to
 */
function setLocation(url) {
    location.href = url.href;
}
/* ------------------------------------------------------------------------- */
/**
 * Check whether a URL is a local link or a file (except `.html`)
 *
 * @param url - URL or HTML anchor element
 * @param ref - Reference URL
 *
 * @return Test result
 */
function isLocalLocation(url, ref) {
    if (ref === void 0) { ref = location; }
    return url.host === ref.host
        && /^(?:\/[\w-]+)*(?:\/?|\.html)$/i.test(url.pathname);
}
/**
 * Check whether a URL is an anchor link on the current page
 *
 * @param url - URL or HTML anchor element
 * @param ref - Reference URL
 *
 * @return Test result
 */
function isAnchorLocation(url, ref) {
    if (ref === void 0) { ref = location; }
    return url.pathname === ref.pathname
        && url.hash.length > 0;
}
/* ------------------------------------------------------------------------- */
/**
 * Watch location
 *
 * @return Location subject
 */
function watchLocation() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](getLocation());
}


/***/ }),

/***/ "./static/javascripts/browser/location/base/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/browser/location/base/index.ts ***!
  \***********************************************************/
/*! exports provided: watchLocationBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchLocationBase", function() { return watchLocationBase; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ------------------------------------------------------------------------- */
/**
 * Watch location base
 *
 * @return Location base observable
 */
function watchLocationBase(base, _a) {
    var location$ = _a.location$;
    return location$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_a) {
        var href = _a.href;
        return new URL(base, href)
            .toString()
            .replace(/\/$/, "");
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
}


/***/ }),

/***/ "./static/javascripts/browser/location/hash/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/browser/location/hash/index.ts ***!
  \***********************************************************/
/*! exports provided: getLocationHash, setLocationHash, watchLocationHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHash", function() { return getLocationHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocationHash", function() { return setLocationHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchLocationHash", function() { return watchLocationHash; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve location hash
 *
 * @return Location hash
 */
function getLocationHash() {
    return location.hash.substring(1);
}
/**
 * Set location hash
 *
 * Setting a new fragment identifier via `location.hash` will have no effect
 * if the value doesn't change. When a new fragment identifier is set, we want
 * the browser to target the respective element at all times, which is why we
 * use this dirty little trick.
 *
 * @param hash - Location hash
 */
function setLocationHash(hash) {
    var el = Object(browser__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a");
    el.href = hash;
    el.addEventListener("click", function (ev) { return ev.stopPropagation(); });
    el.click();
}
/* ------------------------------------------------------------------------- */
/**
 * Watch location hash
 *
 * @return Location hash observable
 */
function watchLocationHash() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, "hashchange")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(getLocationHash), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(getLocationHash()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (hash) { return hash.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
}


/***/ }),

/***/ "./static/javascripts/browser/location/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/browser/location/index.ts ***!
  \******************************************************/
/*! exports provided: getLocation, setLocation, isLocalLocation, isAnchorLocation, watchLocation, watchLocationBase, getLocationHash, setLocationHash, watchLocationHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/browser/location/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return ___WEBPACK_IMPORTED_MODULE_0__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return ___WEBPACK_IMPORTED_MODULE_0__["setLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLocalLocation", function() { return ___WEBPACK_IMPORTED_MODULE_0__["isLocalLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAnchorLocation", function() { return ___WEBPACK_IMPORTED_MODULE_0__["isAnchorLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchLocation", function() { return ___WEBPACK_IMPORTED_MODULE_0__["watchLocation"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./static/javascripts/browser/location/base/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchLocationBase", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["watchLocationBase"]; });

/* harmony import */ var _hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash */ "./static/javascripts/browser/location/hash/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHash", function() { return _hash__WEBPACK_IMPORTED_MODULE_2__["getLocationHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLocationHash", function() { return _hash__WEBPACK_IMPORTED_MODULE_2__["setLocationHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchLocationHash", function() { return _hash__WEBPACK_IMPORTED_MODULE_2__["watchLocationHash"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/browser/media/index.ts":
/*!***************************************************!*\
  !*** ./static/javascripts/browser/media/index.ts ***!
  \***************************************************/
/*! exports provided: watchMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchMedia", function() { return watchMedia; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch media query
 *
 * @param query - Media query
 *
 * @return Media observable
 */
function watchMedia(query) {
    var media = matchMedia(query);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEventPattern"])(function (next) {
        return media.addListener(function () { return next(media.matches); });
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(media.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
}


/***/ }),

/***/ "./static/javascripts/browser/toggle/index.ts":
/*!****************************************************!*\
  !*** ./static/javascripts/browser/toggle/index.ts ***!
  \****************************************************/
/*! exports provided: getToggle, setToggle, watchToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToggle", function() { return getToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToggle", function() { return setToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchToggle", function() { return watchToggle; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element */ "./static/javascripts/browser/element/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * Toggle map
 */
var toggles = {
    drawer: Object(_element__WEBPACK_IMPORTED_MODULE_2__["getElementOrThrow"])("[data-md-toggle=drawer]"),
    search: Object(_element__WEBPACK_IMPORTED_MODULE_2__["getElementOrThrow"])("[data-md-toggle=search]")
};
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve the value of a toggle
 *
 * @param name - Toggle
 *
 * @return Toggle value
 */
function getToggle(name) {
    return toggles[name].checked;
}
/**
 * Set toggle
 *
 * Simulating a click event seems to be the most cross-browser compatible way
 * of changing the value while also emitting a `change` event. Before, Material
 * used `CustomEvent` to programmatically change the value of a toggle, but this
 * is a much simpler and cleaner solution which doesn't require a polyfill.
 *
 * @param name - Toggle
 * @param value - Toggle value
 */
function setToggle(name, value) {
    if (toggles[name].checked !== value)
        toggles[name].click();
}
/* ------------------------------------------------------------------------- */
/**
 * Watch toggle
 *
 * @param name - Toggle
 *
 * @return Toggle value observable
 */
function watchToggle(name) {
    var el = toggles[name];
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(el, "change")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return el.checked; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(el.checked));
}


/***/ }),

/***/ "./static/javascripts/browser/viewport/_/index.ts":
/*!********************************************************!*\
  !*** ./static/javascripts/browser/viewport/_/index.ts ***!
  \********************************************************/
/*! exports provided: watchViewport, watchViewportAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchViewport", function() { return watchViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchViewportAt", function() { return watchViewportAt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../offset */ "./static/javascripts/browser/viewport/offset/index.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../size */ "./static/javascripts/browser/viewport/size/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch viewport
 *
 * @return Viewport observable
 */
function watchViewport() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
        Object(_offset__WEBPACK_IMPORTED_MODULE_3__["watchViewportOffset"])(),
        Object(_size__WEBPACK_IMPORTED_MODULE_4__["watchViewportSize"])()
    ])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), offset = _b[0], size = _b[1];
        return ({ offset: offset, size: size });
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
}
/**
 * Watch viewport relative to element
 *
 * @param el - Element
 * @param options - Options
 *
 * @return Viewport observable
 */
function watchViewportAt(el, _a) {
    var header$ = _a.header$, viewport$ = _a.viewport$;
    var size$ = viewport$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])("size"));
    /* Compute element offset */
    var offset$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([size$, header$])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return ({
        x: el.offsetLeft,
        y: el.offsetTop
    }); }));
    /* Compute relative viewport, return hot observable */
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([header$, viewport$, offset$])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), height = _b[0].height, _c = _b[1], offset = _c.offset, size = _c.size, _d = _b[2], x = _d.x, y = _d.y;
        return ({
            offset: {
                x: offset.x - x,
                y: offset.y - y + height
            },
            size: size
        });
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
}


/***/ }),

/***/ "./static/javascripts/browser/viewport/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/browser/viewport/index.ts ***!
  \******************************************************/
/*! exports provided: watchViewport, watchViewportAt, getViewportOffset, setViewportOffset, watchViewportOffset, getViewportSize, watchViewportSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/browser/viewport/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewport", function() { return ___WEBPACK_IMPORTED_MODULE_0__["watchViewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewportAt", function() { return ___WEBPACK_IMPORTED_MODULE_0__["watchViewportAt"]; });

/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./static/javascripts/browser/viewport/offset/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewportOffset", function() { return _offset__WEBPACK_IMPORTED_MODULE_1__["getViewportOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setViewportOffset", function() { return _offset__WEBPACK_IMPORTED_MODULE_1__["setViewportOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewportOffset", function() { return _offset__WEBPACK_IMPORTED_MODULE_1__["watchViewportOffset"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ "./static/javascripts/browser/viewport/size/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewportSize", function() { return _size__WEBPACK_IMPORTED_MODULE_2__["getViewportSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchViewportSize", function() { return _size__WEBPACK_IMPORTED_MODULE_2__["watchViewportSize"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/browser/viewport/offset/index.ts":
/*!*************************************************************!*\
  !*** ./static/javascripts/browser/viewport/offset/index.ts ***!
  \*************************************************************/
/*! exports provided: getViewportOffset, setViewportOffset, watchViewportOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportOffset", function() { return getViewportOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewportOffset", function() { return setViewportOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchViewportOffset", function() { return watchViewportOffset; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve viewport offset
 *
 * On iOS Safari, viewport offset can be negative due to overflow scrolling.
 * As this may induce strange behaviors downstream, we'll just limit it to 0.
 *
 * @return Viewport offset
 */
function getViewportOffset() {
    return {
        x: Math.max(0, pageXOffset),
        y: Math.max(0, pageYOffset)
    };
}
/**
 * Set viewport offset
 *
 * @param offset - Viewport offset
 */
function setViewportOffset(_a) {
    var x = _a.x, y = _a.y;
    window.scrollTo(x || 0, y || 0);
}
/* ------------------------------------------------------------------------- */
/**
 * Watch viewport offset
 *
 * @return Viewport offset observable
 */
function watchViewportOffset() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, "scroll", { passive: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, "resize", { passive: true }))
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(getViewportOffset), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(getViewportOffset()));
}


/***/ }),

/***/ "./static/javascripts/browser/viewport/size/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/browser/viewport/size/index.ts ***!
  \***********************************************************/
/*! exports provided: getViewportSize, watchViewportSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewportSize", function() { return getViewportSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchViewportSize", function() { return watchViewportSize; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Retrieve viewport size
 *
 * @return Viewport size
 */
function getViewportSize() {
    return {
        width: innerWidth,
        height: innerHeight
    };
}
/* ------------------------------------------------------------------------- */
/**
 * Watch viewport size
 *
 * @return Viewport size observable
 */
function watchViewportSize() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, "resize", { passive: true })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(getViewportSize), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(getViewportSize()));
}


/***/ }),

/***/ "./static/javascripts/browser/worker/index.ts":
/*!****************************************************!*\
  !*** ./static/javascripts/browser/worker/index.ts ***!
  \****************************************************/
/*! exports provided: watchWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchWorker", function() { return watchWorker; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch a web worker
 *
 * This function returns an observable that will send all values emitted by the
 * message observable to the web worker. Web worker communication is expected
 * to be bidirectional (request-response) and synchronous. Messages that are
 * emitted during a pending request are throttled, the last one is emitted.
 *
 * @param worker - Web worker
 * @param options - Options
 *
 * @return Worker message observable
 */
function watchWorker(worker, _a) {
    var tx$ = _a.tx$;
    /* Intercept messages from worker-like objects */
    var rx$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEventPattern"])(function (next) {
        return worker.addEventListener("message", next);
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])("data"));
    /* Send and receive messages, return hot observable */
    return tx$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttle"])(function () { return rx$; }, { leading: true, trailing: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (message) { return worker.postMessage(message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMapTo"])(rx$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
}


/***/ }),

/***/ "./static/javascripts/components/_/index.ts":
/*!**************************************************!*\
  !*** ./static/javascripts/components/_/index.ts ***!
  \**************************************************/
/*! exports provided: setupComponents, useComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupComponents", function() { return setupComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponent", function() { return useComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * Component map observable
 */
var components$;
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set up bindings to components with given names
 *
 * This function will maintain bindings to the elements identified by the given
 * names in-between document switches and update the elements in-place.
 *
 * @param names - Component names
 * @param options - Options
 */
function setupComponents(names, _a) {
    var document$ = _a.document$;
    components$ = document$
        .pipe(
    /* Build component map */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (document) { return names.reduce(function (components, name) {
        var _a;
        var el = Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElement"])("[data-md-component=" + name + "]", document);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, components), typeof el !== "undefined" ? (_a = {}, _a[name] = el, _a) : {});
    }, {}); }), 
    /* Re-compute component map on document switch */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (prev, next) {
        var e_1, _a;
        try {
            for (var names_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                var name = names_1_1.value;
                switch (name) {
                    /* Top-level components: update */
                    case "announce":
                    case "header-title":
                    case "container":
                    case "skip":
                        if (name in prev && typeof prev[name] !== "undefined") {
                            Object(browser__WEBPACK_IMPORTED_MODULE_3__["replaceElement"])(prev[name], next[name]);
                            prev[name] = next[name];
                        }
                        break;
                    /* All other components: rebind */
                    default:
                        if (typeof next[name] !== "undefined")
                            prev[name] = Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElement"])("[data-md-component=" + name + "]");
                        else
                            delete prev[name];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return prev;
    }), 
    /* Convert to hot observable */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
}
function useComponent(name) {
    return components$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (components) { return (typeof components[name] !== "undefined"
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(components[name])
        : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
}


/***/ }),

/***/ "./static/javascripts/components/header/_/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/components/header/_/index.ts ***!
  \*********************************************************/
/*! exports provided: mountHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountHeader", function() { return mountHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_ */ "./static/javascripts/components/_/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/header/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount header from source observable
 *
 * @param options - Options
 *
 * @return Operator function
 */
function mountHeader(_a) {
    var document$ = _a.document$, viewport$ = _a.viewport$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (el) {
        var header$ = Object(_react__WEBPACK_IMPORTED_MODULE_5__["watchHeader"])(el, { document$: document$ });
        /* Compute whether the header should switch to page header */
        var type$ = Object(___WEBPACK_IMPORTED_MODULE_4__["useComponent"])("main")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (main) { return Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElement"])("h1, h2, h3, h4, h5, h6", main); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (hx) { return typeof hx !== "undefined"; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(Object(___WEBPACK_IMPORTED_MODULE_4__["useComponent"])("header-title")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), hx = _b[0], title = _b[1];
            return Object(browser__WEBPACK_IMPORTED_MODULE_3__["watchViewportAt"])(hx, { header$: header$, viewport$: viewport$ })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
                var y = _a.offset.y;
                return y >= hx.offsetHeight ? "page" : "site";
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(_react__WEBPACK_IMPORTED_MODULE_5__["applyHeaderType"])(title));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])("site"));
        /* Combine into single observable */
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([header$, type$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), header = _b[0], type = _b[1];
            return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: type }, header));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }));
}


/***/ }),

/***/ "./static/javascripts/components/header/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/components/header/index.ts ***!
  \*******************************************************/
/*! exports provided: mountHeader, watchHeader, applyHeaderType, setHeaderTitleActive, resetHeaderTitleActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/header/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountHeader", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountHeader"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/header/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchHeader", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["watchHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHeaderType", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applyHeaderType"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/header/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHeaderTitleActive", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setHeaderTitleActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHeaderTitleActive", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetHeaderTitleActive"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/header/react/index.ts":
/*!*************************************************************!*\
  !*** ./static/javascripts/components/header/react/index.ts ***!
  \*************************************************************/
/*! exports provided: watchHeader, applyHeaderType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchHeader", function() { return watchHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyHeaderType", function() { return applyHeaderType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/header/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch header
 *
 * @param el - Header element
 *
 * @return Header observable
 */
function watchHeader(el, _a) {
    var document$ = _a.document$;
    return document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
        var styles = getComputedStyle(el);
        return [
            "sticky",
            "-webkit-sticky" /* Safari */
        ].includes(styles.position);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (sticky) {
        if (sticky) {
            return Object(browser__WEBPACK_IMPORTED_MODULE_2__["watchElementSize"])(el)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
                var height = _a.height;
                return ({
                    sticky: true,
                    height: height
                });
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                sticky: false,
                height: 0
            });
        }
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(1));
}
/* ------------------------------------------------------------------------- */
/**
 * Apply header title type
 *
 * @param el - Header title element
 *
 * @return Operator function
 */
function applyHeaderType(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (type) {
        Object(_set__WEBPACK_IMPORTED_MODULE_3__["setHeaderTitleActive"])(el, type === "page");
    }), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
        Object(_set__WEBPACK_IMPORTED_MODULE_3__["resetHeaderTitleActive"])(el);
    }));
}


/***/ }),

/***/ "./static/javascripts/components/header/set/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/components/header/set/index.ts ***!
  \***********************************************************/
/*! exports provided: setHeaderTitleActive, resetHeaderTitleActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaderTitleActive", function() { return setHeaderTitleActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHeaderTitleActive", function() { return resetHeaderTitleActive; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set header title active
 *
 * @param el - Header title element
 * @param value - Whether the title is shown
 */
function setHeaderTitleActive(el, value) {
    el.setAttribute("data-md-state", value ? "active" : "");
}
/**
 * Reset header title active
 *
 * @param el - Header title element
 */
function resetHeaderTitleActive(el) {
    el.removeAttribute("data-md-state");
}


/***/ }),

/***/ "./static/javascripts/components/hero/_/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/components/hero/_/index.ts ***!
  \*******************************************************/
/*! exports provided: mountHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountHero", function() { return mountHero; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/hero/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount hero from source observable
 *
 * @param options - Options
 *
 * @return Operator function
 */
function mountHero(_a) {
    var header$ = _a.header$, viewport$ = _a.viewport$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (el) { return Object(browser__WEBPACK_IMPORTED_MODULE_2__["watchViewportAt"])(el, { header$: header$, viewport$: viewport$ })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
        var y = _a.offset.y;
        return ({ hidden: y >= 20 });
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilKeyChanged"])("hidden"), Object(_react__WEBPACK_IMPORTED_MODULE_3__["applyHero"])(el)); }));
}


/***/ }),

/***/ "./static/javascripts/components/hero/index.ts":
/*!*****************************************************!*\
  !*** ./static/javascripts/components/hero/index.ts ***!
  \*****************************************************/
/*! exports provided: mountHero, applyHero, setHeroHidden, resetHeroHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/hero/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountHero", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountHero"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/hero/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHero", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applyHero"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/hero/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHeroHidden", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setHeroHidden"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHeroHidden", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetHeroHidden"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/hero/react/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/components/hero/react/index.ts ***!
  \***********************************************************/
/*! exports provided: applyHero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyHero", function() { return applyHero; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/hero/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Apply hero
 *
 * @param el - Hero element
 *
 * @return Operator function
 */
function applyHero(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_a) {
        var hidden = _a.hidden;
        Object(_set__WEBPACK_IMPORTED_MODULE_2__["setHeroHidden"])(el, hidden);
    }), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
        Object(_set__WEBPACK_IMPORTED_MODULE_2__["resetHeroHidden"])(el);
    }));
}


/***/ }),

/***/ "./static/javascripts/components/hero/set/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/components/hero/set/index.ts ***!
  \*********************************************************/
/*! exports provided: setHeroHidden, resetHeroHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeroHidden", function() { return setHeroHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHeroHidden", function() { return resetHeroHidden; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set hero hidden
 *
 * @param el - Hero element
 * @param value - Whether the element is hidden
 */
function setHeroHidden(el, value) {
    el.setAttribute("data-md-state", value ? "hidden" : "");
}
/**
 * Reset hero hidden
 *
 * @param el - Hero element
 */
function resetHeroHidden(el) {
    el.removeAttribute("data-md-state");
}


/***/ }),

/***/ "./static/javascripts/components/index.ts":
/*!************************************************!*\
  !*** ./static/javascripts/components/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupComponents", function() { return ___WEBPACK_IMPORTED_MODULE_0__["setupComponents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComponent", function() { return ___WEBPACK_IMPORTED_MODULE_0__["useComponent"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./static/javascripts/components/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountHeader", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["mountHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchHeader", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["watchHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHeaderType", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["applyHeaderType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHeaderTitleActive", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["setHeaderTitleActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHeaderTitleActive", function() { return _header__WEBPACK_IMPORTED_MODULE_1__["resetHeaderTitleActive"]; });

/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ "./static/javascripts/components/hero/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountHero", function() { return _hero__WEBPACK_IMPORTED_MODULE_2__["mountHero"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHero", function() { return _hero__WEBPACK_IMPORTED_MODULE_2__["applyHero"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHeroHidden", function() { return _hero__WEBPACK_IMPORTED_MODULE_2__["setHeroHidden"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHeroHidden", function() { return _hero__WEBPACK_IMPORTED_MODULE_2__["resetHeroHidden"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./static/javascripts/components/main/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountMain", function() { return _main__WEBPACK_IMPORTED_MODULE_3__["mountMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchMain", function() { return _main__WEBPACK_IMPORTED_MODULE_3__["watchMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHeaderShadow", function() { return _main__WEBPACK_IMPORTED_MODULE_3__["applyHeaderShadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHeaderShadow", function() { return _main__WEBPACK_IMPORTED_MODULE_3__["setHeaderShadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHeaderShadow", function() { return _main__WEBPACK_IMPORTED_MODULE_3__["resetHeaderShadow"]; });

/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation */ "./static/javascripts/components/navigation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountNavigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_4__["mountNavigation"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./static/javascripts/components/search/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearch", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["mountSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchQuery", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["mountSearchQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSearchQuery", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["watchSearchQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchReset", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["mountSearchReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSearchReset", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["watchSearchReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchResult", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["mountSearchResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySearchResult", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["applySearchResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSearchResultMeta", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["setSearchResultMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultMeta", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["resetSearchResultMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToSearchResultList", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["addToSearchResultList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultList", function() { return _search__WEBPACK_IMPORTED_MODULE_5__["resetSearchResultList"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./static/javascripts/components/shared/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shared__WEBPACK_IMPORTED_MODULE_6__) if(["default","setupComponents","useComponent","mountHeader","watchHeader","applyHeaderType","setHeaderTitleActive","resetHeaderTitleActive","mountHero","applyHero","setHeroHidden","resetHeroHidden","mountMain","watchMain","applyHeaderShadow","setHeaderShadow","resetHeaderShadow","mountNavigation","mountSearch","mountSearchQuery","watchSearchQuery","mountSearchReset","watchSearchReset","mountSearchResult","applySearchResult","setSearchResultMeta","resetSearchResultMeta","addToSearchResultList","resetSearchResultList"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shared__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs */ "./static/javascripts/components/tabs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountTabs", function() { return _tabs__WEBPACK_IMPORTED_MODULE_7__["mountTabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyTabs", function() { return _tabs__WEBPACK_IMPORTED_MODULE_7__["applyTabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabsHidden", function() { return _tabs__WEBPACK_IMPORTED_MODULE_7__["setTabsHidden"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetTabsHidden", function() { return _tabs__WEBPACK_IMPORTED_MODULE_7__["resetTabsHidden"]; });

/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toc */ "./static/javascripts/components/toc/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc__WEBPACK_IMPORTED_MODULE_8__) if(["default","setupComponents","useComponent","mountHeader","watchHeader","applyHeaderType","setHeaderTitleActive","resetHeaderTitleActive","mountHero","applyHero","setHeroHidden","resetHeroHidden","mountMain","watchMain","applyHeaderShadow","setHeaderShadow","resetHeaderShadow","mountNavigation","mountSearch","mountSearchQuery","watchSearchQuery","mountSearchReset","watchSearchReset","mountSearchResult","applySearchResult","setSearchResultMeta","resetSearchResultMeta","addToSearchResultList","resetSearchResultList","mountTabs","applyTabs","setTabsHidden","resetTabsHidden"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */











/***/ }),

/***/ "./static/javascripts/components/main/_/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/components/main/_/index.ts ***!
  \*******************************************************/
/*! exports provided: mountMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountMain", function() { return mountMain; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_ */ "./static/javascripts/components/_/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/main/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount main area from source observable
 *
 * The header must be connected to the main area observable outside of the
 * operator function, as the header will persist in-between document switches
 * while the main area is replaced. However, the header observable must be
 * passed to this function, so we connect both via a long-living subject.
 *
 * @param options - Options
 *
 * @return Operator function
 */
function mountMain(_a) {
    var header$ = _a.header$, viewport$ = _a.viewport$;
    var main$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    /* Connect to main area observable via long-living subject */
    Object(___WEBPACK_IMPORTED_MODULE_2__["useComponent"])("header")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (header) { return main$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilKeyChanged"])("active"), Object(_react__WEBPACK_IMPORTED_MODULE_3__["applyHeaderShadow"])(header)); }))
        .subscribe();
    /* Return operator */
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (el) { return Object(_react__WEBPACK_IMPORTED_MODULE_3__["watchMain"])(el, { header$: header$, viewport$: viewport$ }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (main) { return main$.next(main); }));
}


/***/ }),

/***/ "./static/javascripts/components/main/index.ts":
/*!*****************************************************!*\
  !*** ./static/javascripts/components/main/index.ts ***!
  \*****************************************************/
/*! exports provided: mountMain, watchMain, applyHeaderShadow, setHeaderShadow, resetHeaderShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/main/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountMain", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountMain"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/main/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchMain", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["watchMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyHeaderShadow", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applyHeaderShadow"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/main/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHeaderShadow", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setHeaderShadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetHeaderShadow", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetHeaderShadow"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/main/react/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/components/main/react/index.ts ***!
  \***********************************************************/
/*! exports provided: watchMain, applyHeaderShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchMain", function() { return watchMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyHeaderShadow", function() { return applyHeaderShadow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/main/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch main area
 *
 * This function returns an observable that computes the visual parameters of
 * the main area which depends on the viewport vertical offset and height, as
 * well as the height of the header element, if the header is fixed.
 *
 * @param el - Main area element
 * @param options - Options
 *
 * @return Main area observable
 */
function watchMain(el, _a) {
    var header$ = _a.header$, viewport$ = _a.viewport$;
    /* Compute necessary adjustment for header */
    var adjust$ = header$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])("height"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    /* Compute the main area's top and bottom borders */
    var border$ = adjust$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_3__["watchElementSize"])(el)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var height = _a.height;
        return ({
            top: el.offsetTop,
            bottom: el.offsetTop + height
        });
    })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])("bottom"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    /* Compute the main area's offset, visible height and if we scrolled past */
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([adjust$, border$, viewport$])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), header = _b[0], _c = _b[1], top = _c.top, bottom = _c.bottom, _d = _b[2], y = _d.offset.y, height = _d.size.height;
        height = Math.max(0, height
            - Math.max(0, top - y, header)
            - Math.max(0, height + y - bottom));
        return {
            offset: top - header,
            height: height,
            active: top - header <= y
        };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
        return a.offset === b.offset
            && a.height === b.height
            && a.active === b.active;
    }));
}
/* ------------------------------------------------------------------------- */
/**
 * Apply header shadow
 *
 * @param el - Header element
 *
 * @return Operator function
 */
function applyHeaderShadow(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var active = _a.active;
        Object(_set__WEBPACK_IMPORTED_MODULE_4__["setHeaderShadow"])(el, active);
    }), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
        Object(_set__WEBPACK_IMPORTED_MODULE_4__["resetHeaderShadow"])(el);
    }));
}


/***/ }),

/***/ "./static/javascripts/components/main/set/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/components/main/set/index.ts ***!
  \*********************************************************/
/*! exports provided: setHeaderShadow, resetHeaderShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHeaderShadow", function() { return setHeaderShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHeaderShadow", function() { return resetHeaderShadow; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set header shadow
 *
 * @param el - Header element
 * @param value - Whether the shadow is shown
 */
function setHeaderShadow(el, value) {
    el.setAttribute("data-md-state", value ? "shadow" : "");
}
/**
 * Reset header shadow
 *
 * @param el - Header element
 */
function resetHeaderShadow(el) {
    el.removeAttribute("data-md-state");
}


/***/ }),

/***/ "./static/javascripts/components/navigation/_/index.ts":
/*!*************************************************************!*\
  !*** ./static/javascripts/components/navigation/_/index.ts ***!
  \*************************************************************/
/*! exports provided: mountNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountNavigation", function() { return mountNavigation; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./static/javascripts/components/shared/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount navigation from source observable
 *
 * @param options - Options
 *
 * @return Operator function
 */
function mountNavigation(_a) {
    var header$ = _a.header$, main$ = _a.main$, viewport$ = _a.viewport$, screen$ = _a.screen$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (el) { return screen$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (screen) {
        /* [screen +]: Mount navigation in sidebar */
        if (screen) {
            return Object(_shared__WEBPACK_IMPORTED_MODULE_2__["watchSidebar"])(el, { main$: main$, viewport$: viewport$ })
                .pipe(Object(_shared__WEBPACK_IMPORTED_MODULE_2__["applySidebar"])(el, { header$: header$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (sidebar) { return ({ sidebar: sidebar }); }));
            /* [screen -]: Mount navigation in drawer */
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
        }
    })); }));
}


/***/ }),

/***/ "./static/javascripts/components/navigation/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/components/navigation/index.ts ***!
  \***********************************************************/
/*! exports provided: mountNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/navigation/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountNavigation", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountNavigation"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/***/ }),

/***/ "./static/javascripts/components/search/_/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/components/search/_/index.ts ***!
  \*********************************************************/
/*! exports provided: mountSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountSearch", function() { return mountSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var integrations_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! integrations/search */ "./static/javascripts/integrations/search/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount search from source observable
 *
 * @param handler - Worker handler
 * @param options - Options
 *
 * @return Operator function
 */
function mountSearch(_a, _b) {
    var rx$ = _a.rx$, tx$ = _a.tx$;
    var query$ = _b.query$, reset$ = _b.reset$, result$ = _b.result$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
        /* Compute search status */
        var status$ = rx$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(integrations_search__WEBPACK_IMPORTED_MODULE_3__["isSearchReadyMessage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])("ready"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])("waiting"));
        /* Re-emit the latest query when search is ready */
        tx$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(integrations_search__WEBPACK_IMPORTED_MODULE_3__["isSearchQueryMessage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(status$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(tx$.next.bind(tx$));
        /* Combine into single observable */
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([status$, query$, result$, reset$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), status = _b[0], query = _b[1], result = _b[2];
            return ({
                status: status,
                query: query,
                result: result
            });
        }));
    }));
}


/***/ }),

/***/ "./static/javascripts/components/search/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/components/search/index.ts ***!
  \*******************************************************/
/*! exports provided: mountSearch, mountSearchQuery, watchSearchQuery, mountSearchReset, watchSearchReset, mountSearchResult, applySearchResult, setSearchResultMeta, resetSearchResultMeta, addToSearchResultList, resetSearchResultList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/search/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearch", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountSearch"]; });

/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ "./static/javascripts/components/search/query/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchQuery", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["mountSearchQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSearchQuery", function() { return _query__WEBPACK_IMPORTED_MODULE_1__["watchSearchQuery"]; });

/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset */ "./static/javascripts/components/search/reset/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchReset", function() { return _reset__WEBPACK_IMPORTED_MODULE_2__["mountSearchReset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSearchReset", function() { return _reset__WEBPACK_IMPORTED_MODULE_2__["watchSearchReset"]; });

/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result */ "./static/javascripts/components/search/result/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchResult", function() { return _result__WEBPACK_IMPORTED_MODULE_3__["mountSearchResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySearchResult", function() { return _result__WEBPACK_IMPORTED_MODULE_3__["applySearchResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSearchResultMeta", function() { return _result__WEBPACK_IMPORTED_MODULE_3__["setSearchResultMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultMeta", function() { return _result__WEBPACK_IMPORTED_MODULE_3__["resetSearchResultMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToSearchResultList", function() { return _result__WEBPACK_IMPORTED_MODULE_3__["addToSearchResultList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultList", function() { return _result__WEBPACK_IMPORTED_MODULE_3__["resetSearchResultList"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/***/ }),

/***/ "./static/javascripts/components/search/query/_/index.ts":
/*!***************************************************************!*\
  !*** ./static/javascripts/components/search/query/_/index.ts ***!
  \***************************************************************/
/*! exports provided: mountSearchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountSearchQuery", function() { return mountSearchQuery; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var integrations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! integrations */ "./static/javascripts/integrations/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/search/query/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount search query from source observable
 *
 * @param handler - Worker handler
 * @param options - Options
 *
 * @return Operator function
 */
function mountSearchQuery(_a, options) {
    var tx$ = _a.tx$;
    if (options === void 0) { options = {}; }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (el) {
        var query$ = Object(_react__WEBPACK_IMPORTED_MODULE_4__["watchSearchQuery"])(el, options);
        /* Subscribe worker to search query */
        query$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilKeyChanged"])("value"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
            var value = _a.value;
            return ({
                type: integrations__WEBPACK_IMPORTED_MODULE_3__["SearchMessageType"].QUERY,
                data: value
            });
        }))
            .subscribe(tx$.next.bind(tx$));
        /* Toggle search on focus */
        query$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilKeyChanged"])("focus"))
            .subscribe(function (_a) {
            var focus = _a.focus;
            if (focus)
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["setToggle"])("search", focus);
        });
        /* Return search query */
        return query$;
    }));
}


/***/ }),

/***/ "./static/javascripts/components/search/query/index.ts":
/*!*************************************************************!*\
  !*** ./static/javascripts/components/search/query/index.ts ***!
  \*************************************************************/
/*! exports provided: mountSearchQuery, watchSearchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/search/query/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchQuery", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountSearchQuery"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/search/query/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSearchQuery", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["watchSearchQuery"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/***/ }),

/***/ "./static/javascripts/components/search/query/react/index.ts":
/*!*******************************************************************!*\
  !*** ./static/javascripts/components/search/query/react/index.ts ***!
  \*******************************************************************/
/*! exports provided: watchSearchQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSearchQuery", function() { return watchSearchQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! integrations */ "./static/javascripts/integrations/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch search query
 *
 * Note that the focus event which triggers re-reading the current query value
 * is delayed by `1ms` so the input's empty state is allowed to propagate.
 *
 * @param el - Search query element
 * @param options - Options
 *
 * @return Search query observable
 */
function watchSearchQuery(el, _a) {
    var transform = (_a === void 0 ? {} : _a).transform;
    var fn = transform || integrations__WEBPACK_IMPORTED_MODULE_4__["defaultTransform"];
    /* Intercept keyboard events */
    var value$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(el, "keyup"), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(el, "focus").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1)))
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return fn(el.value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(fn(el.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    /* Intercept focus events */
    var focus$ = Object(browser__WEBPACK_IMPORTED_MODULE_3__["watchElementFocus"])(el);
    /* Combine into single observable */
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([value$, focus$])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), value = _b[0], focus = _b[1];
        return ({ value: value, focus: focus });
    }));
}


/***/ }),

/***/ "./static/javascripts/components/search/reset/_/index.ts":
/*!***************************************************************!*\
  !*** ./static/javascripts/components/search/reset/_/index.ts ***!
  \***************************************************************/
/*! exports provided: mountSearchReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountSearchReset", function() { return mountSearchReset; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_ */ "./static/javascripts/components/_/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/search/reset/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount search reset from source observable
 *
 * @return Operator function
 */
function mountSearchReset() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (el) { return Object(_react__WEBPACK_IMPORTED_MODULE_4__["watchSearchReset"])(el)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMapTo"])(Object(___WEBPACK_IMPORTED_MODULE_3__["useComponent"])("search-query")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(browser__WEBPACK_IMPORTED_MODULE_2__["setElementFocus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(undefined)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(undefined));
}


/***/ }),

/***/ "./static/javascripts/components/search/reset/index.ts":
/*!*************************************************************!*\
  !*** ./static/javascripts/components/search/reset/index.ts ***!
  \*************************************************************/
/*! exports provided: mountSearchReset, watchSearchReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/search/reset/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchReset", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountSearchReset"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/search/reset/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSearchReset", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["watchSearchReset"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/***/ }),

/***/ "./static/javascripts/components/search/reset/react/index.ts":
/*!*******************************************************************!*\
  !*** ./static/javascripts/components/search/reset/react/index.ts ***!
  \*******************************************************************/
/*! exports provided: watchSearchReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSearchReset", function() { return watchSearchReset; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch search reset
 *
 * @param el - Search reset element
 *
 * @return Search reset observable
 */
function watchSearchReset(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(el, "click")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(undefined));
}


/***/ }),

/***/ "./static/javascripts/components/search/result/_/index.ts":
/*!****************************************************************!*\
  !*** ./static/javascripts/components/search/result/_/index.ts ***!
  \****************************************************************/
/*! exports provided: mountSearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountSearchResult", function() { return mountSearchResult; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! integrations */ "./static/javascripts/integrations/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/search/result/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount search result from source observable
 *
 * @param handler - Worker handler
 * @param options - Options
 *
 * @return Operator function
 */
function mountSearchResult(_a, _b) {
    var rx$ = _a.rx$;
    var query$ = _b.query$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (el) {
        var container = el.parentElement;
        /* Compute if search is ready */
        var ready$ = rx$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(integrations__WEBPACK_IMPORTED_MODULE_4__["isSearchReadyMessage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true));
        /* Compute whether there are more search results to fetch */
        var fetch$ = Object(browser__WEBPACK_IMPORTED_MODULE_3__["watchElementOffset"])(container)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var y = _a.y;
            return y >= container.scrollHeight - container.offsetHeight - 16;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(ramda__WEBPACK_IMPORTED_MODULE_0__["identity"]));
        /* Apply search results */
        return rx$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(integrations__WEBPACK_IMPORTED_MODULE_4__["isSearchResultMessage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])("data"), Object(_react__WEBPACK_IMPORTED_MODULE_5__["applySearchResult"])(el, { query$: query$, ready$: ready$, fetch$: fetch$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])([]));
    }));
}


/***/ }),

/***/ "./static/javascripts/components/search/result/index.ts":
/*!**************************************************************!*\
  !*** ./static/javascripts/components/search/result/index.ts ***!
  \**************************************************************/
/*! exports provided: mountSearchResult, applySearchResult, setSearchResultMeta, resetSearchResultMeta, addToSearchResultList, resetSearchResultList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/search/result/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountSearchResult", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountSearchResult"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/search/result/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySearchResult", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applySearchResult"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/search/result/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSearchResultMeta", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setSearchResultMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultMeta", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetSearchResultMeta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToSearchResultList", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["addToSearchResultList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultList", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetSearchResultList"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/search/result/react/index.ts":
/*!********************************************************************!*\
  !*** ./static/javascripts/components/search/result/react/index.ts ***!
  \********************************************************************/
/*! exports provided: applySearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySearchResult", function() { return applySearchResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! templates */ "./static/javascripts/templates/index.ts");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/search/result/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Apply search results
 *
 * This function will perform a lazy rendering of the search results, depending
 * on the vertical offset of the search result container. When the scroll offset
 * reaches the bottom of the element, more results are fetched and rendered.
 *
 * @param el - Search result element
 * @param options - Options
 *
 * @return Operator function
 */
function applySearchResult(el, _a) {
    var query$ = _a.query$, ready$ = _a.ready$, fetch$ = _a.fetch$;
    var list = Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElementOrThrow"])(".md-search-result__list", el);
    var meta = Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElementOrThrow"])(".md-search-result__meta", el);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(
    /* Apply search result metadata */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(query$, ready$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), result = _b[0], query = _b[1];
        if (query.value) {
            Object(_set__WEBPACK_IMPORTED_MODULE_5__["setSearchResultMeta"])(meta, result.length);
        }
        else {
            Object(_set__WEBPACK_IMPORTED_MODULE_5__["resetSearchResultMeta"])(meta);
        }
        return result;
    }), 
    /* Apply search result list */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (result) { return fetch$
        .pipe(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (index) {
        var container = el.parentElement;
        while (index < result.length) {
            Object(_set__WEBPACK_IMPORTED_MODULE_5__["addToSearchResultList"])(list, Object(templates__WEBPACK_IMPORTED_MODULE_4__["renderSearchResult"])(result[index++]));
            if (container.scrollHeight - container.offsetHeight > 16)
                break;
        }
        return index;
    }, 0), 
    /* Re-map to search result */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(result), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
        Object(_set__WEBPACK_IMPORTED_MODULE_5__["resetSearchResultList"])(list);
    })); }));
}


/***/ }),

/***/ "./static/javascripts/components/search/result/set/index.ts":
/*!******************************************************************!*\
  !*** ./static/javascripts/components/search/result/set/index.ts ***!
  \******************************************************************/
/*! exports provided: setSearchResultMeta, resetSearchResultMeta, addToSearchResultList, resetSearchResultList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchResultMeta", function() { return setSearchResultMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultMeta", function() { return resetSearchResultMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToSearchResultList", function() { return addToSearchResultList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSearchResultList", function() { return resetSearchResultList; });
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set number of search results
 *
 * @param el - Search result metadata element
 * @param value - Number of results
 */
function setSearchResultMeta(el, value) {
    switch (value) {
        /* No results */
        case 0:
            el.textContent = Object(utilities__WEBPACK_IMPORTED_MODULE_0__["translate"])("search.result.none");
            break;
        /* One result */
        case 1:
            el.textContent = Object(utilities__WEBPACK_IMPORTED_MODULE_0__["translate"])("search.result.one");
            break;
        /* Multiple result */
        default:
            el.textContent = Object(utilities__WEBPACK_IMPORTED_MODULE_0__["translate"])("search.result.other", value.toString());
    }
}
/**
 * Reset number of search results
 *
 * @param el - Search result metadata element
 */
function resetSearchResultMeta(el) {
    el.textContent = Object(utilities__WEBPACK_IMPORTED_MODULE_0__["translate"])("search.result.placeholder");
}
/* ------------------------------------------------------------------------- */
/**
 * Add an element to the search result list
 *
 * @param el - Search result list element
 * @param child - Search result element
 */
function addToSearchResultList(el, child) {
    el.appendChild(child);
}
/**
 * Reset search result list
 *
 * @param el - Search result list element
 */
function resetSearchResultList(el) {
    el.innerHTML = "";
}


/***/ }),

/***/ "./static/javascripts/components/shared/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/components/shared/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./static/javascripts/components/shared/sidebar/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/***/ }),

/***/ "./static/javascripts/components/shared/sidebar/_/index.ts":
/*!*****************************************************************!*\
  !*** ./static/javascripts/components/shared/sidebar/_/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/***/ }),

/***/ "./static/javascripts/components/shared/sidebar/index.ts":
/*!***************************************************************!*\
  !*** ./static/javascripts/components/shared/sidebar/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/shared/sidebar/_/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in ___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return ___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/shared/sidebar/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchSidebar", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["watchSidebar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applySidebar", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applySidebar"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/shared/sidebar/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSidebarOffset", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setSidebarOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSidebarOffset", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetSidebarOffset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSidebarHeight", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setSidebarHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetSidebarHeight", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetSidebarHeight"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/shared/sidebar/react/index.ts":
/*!*********************************************************************!*\
  !*** ./static/javascripts/components/shared/sidebar/react/index.ts ***!
  \*********************************************************************/
/*! exports provided: watchSidebar, applySidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchSidebar", function() { return watchSidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySidebar", function() { return applySidebar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/shared/sidebar/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch sidebar
 *
 * This function returns an observable that computes the visual parameters of
 * the sidebar which depends on the vertical viewport offset, as well as the
 * height of the main area. When the page is scrolled beyond the header, the
 * sidebar is locked and fills the remaining space.
 *
 * @param el - Sidebar element
 * @param options - Options
 *
 * @return Sidebar observable
 */
function watchSidebar(el, _a) {
    var main$ = _a.main$, viewport$ = _a.viewport$;
    var adjust = el.parentElement.offsetTop
        - el.parentElement.parentElement.offsetTop;
    /* Compute the sidebar's available height and if it should be locked */
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([main$, viewport$])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = _b[0], offset = _c.offset, height = _c.height, y = _b[1].offset.y;
        height = height
            + Math.min(adjust, Math.max(0, y - offset))
            - adjust;
        return {
            height: height,
            lock: y >= offset + adjust
        };
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
        return a.height === b.height
            && a.lock === b.lock;
    }));
}
/* ------------------------------------------------------------------------- */
/**
 * Apply sidebar
 *
 * @param el - Sidebar element
 * @param options - Options
 *
 * @return Operator function
 */
function applySidebar(el, _a) {
    var header$ = _a.header$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(header$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = _b[0], height = _c.height, lock = _c.lock, offset = _b[1].height;
        Object(_set__WEBPACK_IMPORTED_MODULE_3__["setSidebarHeight"])(el, height);
        /* Set offset in locked state depending on header height */
        if (lock)
            Object(_set__WEBPACK_IMPORTED_MODULE_3__["setSidebarOffset"])(el, offset);
        else
            Object(_set__WEBPACK_IMPORTED_MODULE_3__["resetSidebarOffset"])(el);
    }), 
    /* Re-map to sidebar */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), sidebar = _b[0];
        return sidebar;
    }), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
        Object(_set__WEBPACK_IMPORTED_MODULE_3__["resetSidebarOffset"])(el);
        Object(_set__WEBPACK_IMPORTED_MODULE_3__["resetSidebarHeight"])(el);
    }));
}


/***/ }),

/***/ "./static/javascripts/components/shared/sidebar/set/index.ts":
/*!*******************************************************************!*\
  !*** ./static/javascripts/components/shared/sidebar/set/index.ts ***!
  \*******************************************************************/
/*! exports provided: setSidebarOffset, resetSidebarOffset, setSidebarHeight, resetSidebarHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSidebarOffset", function() { return setSidebarOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSidebarOffset", function() { return resetSidebarOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSidebarHeight", function() { return setSidebarHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSidebarHeight", function() { return resetSidebarHeight; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set sidebar offset
 *
 * @param el - Sidebar element
 * @param value - Sidebar offset
 */
function setSidebarOffset(el, value) {
    el.style.top = value + "px";
}
/**
 * Reset sidebar offset
 *
 * @param el - Sidebar element
 */
function resetSidebarOffset(el) {
    el.style.top = "";
}
/* ------------------------------------------------------------------------- */
/**
 * Set sidebar height
 *
 * @param el - Sidebar element
 * @param value - Sidebar height
 */
function setSidebarHeight(el, value) {
    el.style.height = value + "px";
}
/**
 * Reset sidebar height
 *
 * @param el - Sidebar element
 */
function resetSidebarHeight(el) {
    el.style.height = "";
}


/***/ }),

/***/ "./static/javascripts/components/tabs/_/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/components/tabs/_/index.ts ***!
  \*******************************************************/
/*! exports provided: mountTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountTabs", function() { return mountTabs; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../react */ "./static/javascripts/components/tabs/react/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount tabs from source observable
 *
 * @param options - Options
 *
 * @return Operator function
 */
function mountTabs(_a) {
    var header$ = _a.header$, viewport$ = _a.viewport$, screen$ = _a.screen$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (el) { return screen$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (screen) {
        /* [screen +]: Mount tabs above screen breakpoint */
        if (screen) {
            return Object(browser__WEBPACK_IMPORTED_MODULE_2__["watchViewportAt"])(el, { header$: header$, viewport$: viewport$ })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
                var y = _a.offset.y;
                return ({ hidden: y >= 10 });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilKeyChanged"])("hidden"), Object(_react__WEBPACK_IMPORTED_MODULE_3__["applyTabs"])(el));
            /* [screen -]: Unmount tabs below screen breakpoint */
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ hidden: true });
        }
    })); }));
}


/***/ }),

/***/ "./static/javascripts/components/tabs/index.ts":
/*!*****************************************************!*\
  !*** ./static/javascripts/components/tabs/index.ts ***!
  \*****************************************************/
/*! exports provided: mountTabs, applyTabs, setTabsHidden, resetTabsHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/tabs/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountTabs", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountTabs"]; });

/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/tabs/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyTabs", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applyTabs"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/tabs/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabsHidden", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setTabsHidden"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetTabsHidden", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetTabsHidden"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/tabs/react/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/components/tabs/react/index.ts ***!
  \***********************************************************/
/*! exports provided: applyTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTabs", function() { return applyTabs; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/tabs/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Apply tabs
 *
 * @param el - Tabs element
 *
 * @return Operator function
 */
function applyTabs(el) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["pipe"])(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_a) {
        var hidden = _a.hidden;
        Object(_set__WEBPACK_IMPORTED_MODULE_2__["setTabsHidden"])(el, hidden);
    }), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
        Object(_set__WEBPACK_IMPORTED_MODULE_2__["resetTabsHidden"])(el);
    }));
}


/***/ }),

/***/ "./static/javascripts/components/tabs/set/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/components/tabs/set/index.ts ***!
  \*********************************************************/
/*! exports provided: setTabsHidden, resetTabsHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabsHidden", function() { return setTabsHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetTabsHidden", function() { return resetTabsHidden; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set tabs hidden
 *
 * @param el - Tabs element
 * @param value - Whether the element is hidden
 */
function setTabsHidden(el, value) {
    el.setAttribute("data-md-state", value ? "hidden" : "");
}
/**
 * Reset tabs hidden
 *
 * @param el - Tabs element
 */
function resetTabsHidden(el) {
    el.removeAttribute("data-md-state");
}


/***/ }),

/***/ "./static/javascripts/components/toc/_/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/components/toc/_/index.ts ***!
  \******************************************************/
/*! exports provided: mountTableOfContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountTableOfContents", function() { return mountTableOfContents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./static/javascripts/components/shared/index.ts");
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../anchor */ "./static/javascripts/components/toc/anchor/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Mount table of contents from source observable
 *
 * @param options - Options
 *
 * @return Operator function
 */
function mountTableOfContents(_a) {
    var header$ = _a.header$, main$ = _a.main$, viewport$ = _a.viewport$, tablet$ = _a.tablet$;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (el) { return tablet$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (tablet) {
        /* [tablet +]: Mount table of contents in sidebar */
        if (tablet) {
            var els = Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElements"])(".md-nav__link", el);
            /* Watch and apply sidebar */
            var sidebar$ = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["watchSidebar"])(el, { main$: main$, viewport$: viewport$ })
                .pipe(Object(_shared__WEBPACK_IMPORTED_MODULE_4__["applySidebar"])(el, { header$: header$ }));
            /* Watch and apply anchor list (scroll spy) */
            var anchors$ = Object(_anchor__WEBPACK_IMPORTED_MODULE_5__["watchAnchorList"])(els, { header$: header$, viewport$: viewport$ })
                .pipe(Object(_anchor__WEBPACK_IMPORTED_MODULE_5__["applyAnchorList"])(els));
            /* Combine into single hot observable */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([sidebar$, anchors$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), sidebar = _b[0], anchors = _b[1];
                return ({ sidebar: sidebar, anchors: anchors });
            }));
            /* [tablet -]: Unmount table of contents */
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
    })); }));
}


/***/ }),

/***/ "./static/javascripts/components/toc/anchor/_/index.ts":
/*!*************************************************************!*\
  !*** ./static/javascripts/components/toc/anchor/_/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/***/ }),

/***/ "./static/javascripts/components/toc/anchor/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/components/toc/anchor/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/toc/anchor/_/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in ___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return ___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react */ "./static/javascripts/components/toc/anchor/react/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchAnchorList", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["watchAnchorList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyAnchorList", function() { return _react__WEBPACK_IMPORTED_MODULE_1__["applyAnchorList"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set */ "./static/javascripts/components/toc/anchor/set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAnchorBlur", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setAnchorBlur"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAnchorBlur", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetAnchorBlur"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAnchorActive", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["setAnchorActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetAnchorActive", function() { return _set__WEBPACK_IMPORTED_MODULE_2__["resetAnchorActive"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/***/ }),

/***/ "./static/javascripts/components/toc/anchor/react/index.ts":
/*!*****************************************************************!*\
  !*** ./static/javascripts/components/toc/anchor/react/index.ts ***!
  \*****************************************************************/
/*! exports provided: watchAnchorList, applyAnchorList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchAnchorList", function() { return watchAnchorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAnchorList", function() { return applyAnchorList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../set */ "./static/javascripts/components/toc/anchor/set/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Watch anchor list
 *
 * This is effectively a scroll-spy implementation which will account for the
 * fixed header and automatically re-calculate anchor offsets when the viewport
 * is resized. The returned observable will only emit if the anchor list needs
 * to be repainted.
 *
 * This implementation tracks an anchor element's entire path starting from its
 * level up to the top-most anchor element, e.g. `[h3, h2, h1]`. Although the
 * Material theme currently doesn't make use of this information, it enables
 * the styling of the entire hierarchy through customization.
 *
 * Note that the current anchor is the last item of the `prev` anchor list.
 *
 * @param els - Anchor elements
 * @param options - Options
 *
 * @return Anchor list observable
 */
function watchAnchorList(els, _a) {
    var e_1, _b;
    var header$ = _a.header$, viewport$ = _a.viewport$;
    var table = new Map();
    try {
        for (var els_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
            var el = els_1_1.value;
            var id = decodeURIComponent(el.hash.substring(1));
            var target = Object(browser__WEBPACK_IMPORTED_MODULE_4__["getElement"])("[id=\"" + id + "\"]");
            if (typeof target !== "undefined")
                table.set(el, target);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (els_1_1 && !els_1_1.done && (_b = els_1.return)) _b.call(els_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    /* Compute necessary adjustment for header */
    var adjust$ = header$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (header) { return 18 + header.height; }));
    /* Compute partition of previous and next anchors */
    var partition$ = Object(browser__WEBPACK_IMPORTED_MODULE_4__["watchElementSize"])(document.body)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilKeyChanged"])("height"), 
    /* Build index to map anchor paths to vertical offsets */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
        var path = [];
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(table).reduce(function (index, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), anchor = _b[0], target = _b[1];
            while (path.length) {
                var last = table.get(path[path.length - 1]);
                if (last.tagName >= target.tagName) {
                    path.pop();
                }
                else {
                    break;
                }
            }
            /* If the current anchor is hidden, continue with its parent */
            var offset = target.offsetTop;
            while (!offset && target.parentElement) {
                target = target.parentElement;
                offset = target.offsetTop;
            }
            /* Map reversed anchor path to vertical offset */
            return index.set(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["reverse"])(path = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(path, [anchor])), offset);
        }, new Map());
    }), 
    /* Re-compute partition when viewport offset changes */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (index) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([adjust$, viewport$])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (_a, _b) {
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prev = _c[0], next = _c[1];
        var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b, 2), adjust = _d[0], y = _d[1].offset.y;
        /* Look forward */
        while (next.length) {
            var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(next[0], 2), offset = _e[1];
            if (offset - adjust < y) {
                prev = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(prev, [next.shift()]);
            }
            else {
                break;
            }
        }
        /* Look backward */
        while (prev.length) {
            var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(prev[prev.length - 1], 2), offset = _f[1];
            if (offset - adjust >= y) {
                next = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([prev.pop()], next);
            }
            else {
                break;
            }
        }
        /* Return partition */
        return [prev, next];
    }, [[], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(index)]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (a, b) {
        return a[0] === b[0]
            && a[1] === b[1];
    })); }));
    /* Compute and return anchor list migrations */
    return partition$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prev = _b[0], next = _b[1];
        return ({
            prev: prev.map(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), path = _b[0];
                return path;
            }),
            next: next.map(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), path = _b[0];
                return path;
            })
        });
    }), 
    /* Extract anchor list migrations */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ prev: [], next: [] }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferCount"])(2, 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), a = _b[0], b = _b[1];
        /* Moving down */
        if (a.prev.length < b.prev.length) {
            return {
                prev: b.prev.slice(Math.max(0, a.prev.length - 1), b.prev.length),
                next: []
            };
            /* Moving up */
        }
        else {
            return {
                prev: b.prev.slice(-1),
                next: b.next.slice(0, b.next.length - a.next.length)
            };
        }
    }));
}
/* ------------------------------------------------------------------------- */
/**
 * Apply anchor list
 *
 * @param els - Anchor elements
 *
 * @return Operator function
 */
function applyAnchorList(els) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(
    /* Defer repaint to next animation frame */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
        var e_2, _b;
        var prev = _a.prev, next = _a.next;
        try {
            /* Look forward */
            for (var next_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(next), next_1_1 = next_1.next(); !next_1_1.done; next_1_1 = next_1.next()) {
                var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(next_1_1.value, 1), el = _c[0];
                Object(_set__WEBPACK_IMPORTED_MODULE_5__["resetAnchorActive"])(el);
                Object(_set__WEBPACK_IMPORTED_MODULE_5__["resetAnchorBlur"])(el);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (next_1_1 && !next_1_1.done && (_b = next_1.return)) _b.call(next_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        /* Look backward */
        prev.forEach(function (_a, index) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), el = _b[0];
            Object(_set__WEBPACK_IMPORTED_MODULE_5__["setAnchorActive"])(el, index === prev.length - 1);
            Object(_set__WEBPACK_IMPORTED_MODULE_5__["setAnchorBlur"])(el, true);
        });
    }), 
    /* Reset on complete or error */
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
        var e_3, _a;
        try {
            for (var els_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_2_1 = els_2.next(); !els_2_1.done; els_2_1 = els_2.next()) {
                var el = els_2_1.value;
                Object(_set__WEBPACK_IMPORTED_MODULE_5__["resetAnchorActive"])(el);
                Object(_set__WEBPACK_IMPORTED_MODULE_5__["resetAnchorBlur"])(el);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (els_2_1 && !els_2_1.done && (_a = els_2.return)) _a.call(els_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }));
}


/***/ }),

/***/ "./static/javascripts/components/toc/anchor/set/index.ts":
/*!***************************************************************!*\
  !*** ./static/javascripts/components/toc/anchor/set/index.ts ***!
  \***************************************************************/
/*! exports provided: setAnchorBlur, resetAnchorBlur, setAnchorActive, resetAnchorActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnchorBlur", function() { return setAnchorBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAnchorBlur", function() { return resetAnchorBlur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAnchorActive", function() { return setAnchorActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAnchorActive", function() { return resetAnchorActive; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set anchor blur
 *
 * @param el - Anchor element
 * @param value - Whether the anchor is blurred
 */
function setAnchorBlur(el, value) {
    el.setAttribute("data-md-state", value ? "blur" : "");
}
/**
 * Reset anchor blur
 *
 * @param el - Anchor element
 */
function resetAnchorBlur(el) {
    el.removeAttribute("data-md-state");
}
/* ------------------------------------------------------------------------- */
/**
 * Set anchor active
 *
 * @param el - Anchor element
 * @param value - Whether the anchor is active
 */
function setAnchorActive(el, value) {
    el.classList.toggle("md-nav__link--active", value);
}
/**
 * Reset anchor active
 *
 * @param el - Anchor element
 */
function resetAnchorActive(el) {
    el.classList.remove("md-nav__link--active");
}


/***/ }),

/***/ "./static/javascripts/components/toc/index.ts":
/*!****************************************************!*\
  !*** ./static/javascripts/components/toc/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/components/toc/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountTableOfContents", function() { return ___WEBPACK_IMPORTED_MODULE_0__["mountTableOfContents"]; });

/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchor */ "./static/javascripts/components/toc/anchor/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _anchor__WEBPACK_IMPORTED_MODULE_1__) if(["default","mountTableOfContents"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _anchor__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/***/ }),

/***/ "./static/javascripts/index.ts":
/*!*************************************!*\
  !*** ./static/javascripts/index.ts ***!
  \*************************************/
/*! exports provided: setScrollLock, resetScrollLock, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollLock", function() { return setScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetScrollLock", function() { return resetScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/dist/esm5/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components */ "./static/javascripts/components/index.ts");
/* harmony import */ var integrations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! integrations */ "./static/javascripts/integrations/index.ts");
/* harmony import */ var patches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! patches */ "./static/javascripts/patches/index.ts");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

// DISCLAIMER: this file is still WIP. There're some refactoring opportunities
// which must be tackled after we gathered some feedback on v5.
// tslint:disable









/* ------------------------------------------------------------------------- */
/* Denote that JavaScript is available */
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
/* Test for iOS */
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g))
    document.documentElement.classList.add("ios");
/**
 * Set scroll lock
 *
 * @param el - Scrollable element
 * @param value - Vertical offset
 */
function setScrollLock(el, value) {
    el.setAttribute("data-md-state", "lock");
    el.style.top = "-" + value + "px";
}
/**
 * Reset scroll lock
 *
 * @param el - Scrollable element
 */
function resetScrollLock(el) {
    var value = -1 * parseInt(el.style.top, 10);
    el.removeAttribute("data-md-state");
    el.style.top = "";
    if (value)
        window.scrollTo(0, value);
}
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Initialize Material for MkDocs
 *
 * @param config - Configuration
 */
function initialize(config) {
    if (!Object(utilities__WEBPACK_IMPORTED_MODULE_9__["isConfig"])(config))
        throw new SyntaxError("Invalid configuration: " + JSON.stringify(config));
    /* Set up subjects */
    var document$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchDocument"])();
    var location$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchLocation"])();
    /* Set up user interface observables */
    var base$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchLocationBase"])(config.base, { location$: location$ });
    var hash$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchLocationHash"])();
    var viewport$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchViewport"])();
    var tablet$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchMedia"])("(min-width: 960px)");
    var screen$ = Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchMedia"])("(min-width: 1220px)");
    /* ----------------------------------------------------------------------- */
    /* Set up component bindings */
    Object(components__WEBPACK_IMPORTED_MODULE_6__["setupComponents"])([
        "announce",
        "container",
        "header",
        "header-title",
        "hero",
        "main",
        "navigation",
        "search",
        "search-query",
        "search-reset",
        "search-result",
        "skip",
        "tabs",
        "toc" /* Table of contents */
    ], { document$: document$ });
    var keyboard$ = Object(integrations__WEBPACK_IMPORTED_MODULE_7__["setupKeyboard"])();
    // Hack: only make code blocks focusable on non-touch devices
    if (matchMedia("(hover)").matches)
        Object(patches__WEBPACK_IMPORTED_MODULE_8__["patchCodeBlocks"])({ document$: document$, viewport$: viewport$ });
    Object(patches__WEBPACK_IMPORTED_MODULE_8__["patchDetails"])({ document$: document$, hash$: hash$ });
    Object(patches__WEBPACK_IMPORTED_MODULE_8__["patchScripts"])({ document$: document$ });
    Object(patches__WEBPACK_IMPORTED_MODULE_8__["patchSource"])({ document$: document$ });
    Object(patches__WEBPACK_IMPORTED_MODULE_8__["patchTables"])({ document$: document$ });
    /* Force 1px scroll offset to trigger overflow scrolling */
    Object(patches__WEBPACK_IMPORTED_MODULE_8__["patchScrollfix"])({ document$: document$ });
    /* Set up clipboard and dialog */
    var dialog$ = Object(integrations__WEBPACK_IMPORTED_MODULE_7__["setupDialog"])();
    var clipboard$ = Object(integrations__WEBPACK_IMPORTED_MODULE_7__["setupClipboard"])({ document$: document$, dialog$: dialog$ });
    /* ----------------------------------------------------------------------- */
    /* Create header observable */
    var header$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("header")
        .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountHeader"])({ document$: document$, viewport$: viewport$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    var main$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("main")
        .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountMain"])({ header$: header$, viewport$: viewport$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    /* ----------------------------------------------------------------------- */
    var navigation$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("navigation")
        .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountNavigation"])({ header$: header$, main$: main$, viewport$: viewport$, screen$: screen$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1) // shareReplay because there might be late subscribers
    );
    var toc$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("toc")
        .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountTableOfContents"])({ header$: header$, main$: main$, viewport$: viewport$, tablet$: tablet$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    var tabs$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("tabs")
        .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountTabs"])({ header$: header$, viewport$: viewport$, screen$: screen$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    var hero$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("hero")
        .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountHero"])({ header$: header$, viewport$: viewport$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    /* ----------------------------------------------------------------------- */
    /* Search worker */
    var worker$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
        var index = config.search && config.search.index
            ? config.search.index
            : undefined;
        /* Fetch index if it wasn't passed explicitly */
        var index$ = typeof index !== "undefined"
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(index)
            : base$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (base) { return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"])({
                url: base + "/search/search_index.json",
                responseType: "json",
                withCredentials: true
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response")); }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(integrations__WEBPACK_IMPORTED_MODULE_7__["setupSearchWorker"])(config.search.worker, {
            base$: base$, index$: index$
        }));
    });
    /* ----------------------------------------------------------------------- */
    /* Mount search query */
    var search$ = worker$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (worker) {
        var query$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("search-query")
            .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountSearchQuery"])(worker, { transform: config.search.transform }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        /* Mount search reset */
        var reset$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("search-reset")
            .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountSearchReset"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        /* Mount search result */
        var result$ = Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("search-result")
            .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountSearchResult"])(worker, { query$: query$ }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        return Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("search")
            .pipe(Object(components__WEBPACK_IMPORTED_MODULE_6__["mountSearch"])(worker, { query$: query$, reset$: reset$, result$: result$ }));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
        Object(components__WEBPACK_IMPORTED_MODULE_6__["useComponent"])("search")
            .subscribe(function (el) { return el.hidden = true; }); // TODO: Hack
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"];
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    /* ----------------------------------------------------------------------- */
    // // put into search...
    hash$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_5__["setToggle"])("search", false); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(125))
        .subscribe(function (hash) { return Object(browser__WEBPACK_IMPORTED_MODULE_5__["setLocationHash"])("#" + hash); });
    // TODO: scroll restoration must be centralized
    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
        Object(browser__WEBPACK_IMPORTED_MODULE_5__["watchToggle"])("search"),
        tablet$,
    ])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(viewport$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 2), toggle = _c[0], tablet = _c[1], y = _b[1].offset.y;
        var active = toggle && !tablet;
        return document$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(active ? 400 : 100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_a) {
            var body = _a.body;
            return active
                ? setScrollLock(body, y)
                : resetScrollLock(body);
        }));
    }))
        .subscribe();
    /* ----------------------------------------------------------------------- */
    /* Always close drawer on click */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, "click")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (ev) { return !(ev.metaKey || ev.ctrlKey); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (ev) {
        if (ev.target instanceof HTMLElement) {
            var el = ev.target.closest("a"); // TODO: abstract as link click?
            if (el && Object(browser__WEBPACK_IMPORTED_MODULE_5__["isLocalLocation"])(el)) {
                return true;
            }
        }
        return false;
    }))
        .subscribe(function () {
        Object(browser__WEBPACK_IMPORTED_MODULE_5__["setToggle"])("drawer", false);
    });
    /* Enable instant loading, if not on file:// protocol */
    if (config.features.includes("instant") && location.protocol !== "file:") {
        /* Fetch sitemap and extract URL whitelist */
        base$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (base) { return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"])({
            url: base + "/sitemap.xml",
            responseType: "document",
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])("response")); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(base$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), document = _b[0], base = _b[1];
            var urls = Object(browser__WEBPACK_IMPORTED_MODULE_5__["getElements"])("loc", document)
                .map(function (node) { return node.textContent; });
            // Hack: This is a temporary fix to normalize instant loading lookup
            // on localhost and Netlify previews. If this approach proves to be
            // suitable, we'll refactor URL whitelisting anyway. We take the two
            // shortest URLs and determine the common prefix to isolate the
            // domain. If there're no two domains, we just leave it as-is, as
            // there isn't anything to be loaded anway.
            if (urls.length > 1) {
                var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["sortBy"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["prop"])("length"), urls), 2), a = _c[0], b = _c[1];
                /* Determine common prefix */
                var index = 0;
                if (a === b)
                    index = a.length;
                else
                    while (a.charAt(index) === b.charAt(index))
                        index++;
                /* Replace common prefix (i.e. base) with effective base */
                for (var i = 0; i < urls.length; i++)
                    urls[i] = urls[i].replace(a.slice(0, index), base + "/");
            }
            return urls;
        }))
            .subscribe(function (urls) {
            Object(integrations__WEBPACK_IMPORTED_MODULE_7__["setupInstantLoading"])(urls, { document$: document$, location$: location$, viewport$: viewport$ });
        });
    }
    /* ----------------------------------------------------------------------- */
    /* Unhide permalinks on first tab */
    keyboard$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (key) { return key.mode === "global" && key.type === "Tab"; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
        .subscribe(function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(browser__WEBPACK_IMPORTED_MODULE_5__["getElements"])(".headerlink")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var link = _c.value;
                link.style.visibility = "visible";
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    /* ----------------------------------------------------------------------- */
    var state = {
        /* Browser observables */
        document$: document$,
        location$: location$,
        viewport$: viewport$,
        /* Component observables */
        header$: header$,
        hero$: hero$,
        main$: main$,
        navigation$: navigation$,
        search$: search$,
        tabs$: tabs$,
        toc$: toc$,
        /* Integration observables */
        clipboard$: clipboard$,
        keyboard$: keyboard$,
        dialog$: dialog$
    };
    /* Subscribe to all observables */
    rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["values"])(state))).subscribe();
    return state;
}


/***/ }),

/***/ "./static/javascripts/integrations/clipboard/index.ts":
/*!************************************************************!*\
  !*** ./static/javascripts/integrations/clipboard/index.ts ***!
  \************************************************************/
/*! exports provided: setupClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupClipboard", function() { return setupClipboard; });
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! templates */ "./static/javascripts/templates/index.ts");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set up clipboard
 *
 * This function implements the Clipboard.js integration and injects a button
 * into all code blocks when the document changes.
 *
 * @param options - Options
 *
 * @return Clipboard observable
 */
function setupClipboard(_a) {
    var document$ = _a.document$, dialog$ = _a.dialog$;
    if (!clipboard__WEBPACK_IMPORTED_MODULE_0__["isSupported"]())
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"];
    /* Inject 'copy-to-clipboard' buttons */
    document$.subscribe(function () {
        var blocks = Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElements"])("pre > code");
        blocks.forEach(function (block, index) {
            var parent = block.parentElement;
            parent.id = "__code_" + index;
            parent.insertBefore(Object(templates__WEBPACK_IMPORTED_MODULE_4__["renderClipboardButton"])(parent.id), block);
        });
    });
    /* Initialize clipboard */
    var clipboard$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEventPattern"])(function (next) {
        new clipboard__WEBPACK_IMPORTED_MODULE_0__(".md-clipboard").on("success", next);
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    /* Display notification for clipboard event */
    clipboard$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (ev) { return ev.clearSelection(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(Object(utilities__WEBPACK_IMPORTED_MODULE_5__["translate"])("clipboard.copied")))
        .subscribe(dialog$);
    /* Return clipboard */
    return clipboard$;
}


/***/ }),

/***/ "./static/javascripts/integrations/dialog/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/integrations/dialog/index.ts ***!
  \*********************************************************/
/*! exports provided: setupDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDialog", function() { return setupDialog; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set up dialog
 *
 * @param options - Options
 *
 * @return Dialog observable
 */
function setupDialog(_a) {
    var duration = (_a === void 0 ? {} : _a).duration;
    var dialog$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    /* Create dialog */
    var dialog = Object(browser__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div"); // TODO: improve scoping
    dialog.classList.add("md-dialog", "md-typeset");
    /* Display dialog */
    dialog$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (text) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(document.body) // useComponent("container")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (container) { return container.appendChild(dialog); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1), // Strangley it doesnt work when we push things to the new animation frame...
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (el) {
        el.innerHTML = text;
        el.setAttribute("data-md-state", "open");
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(duration || 2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (el) { return el.removeAttribute("data-md-state"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (el) {
        el.innerHTML = "";
        el.remove();
    })); }))
        .subscribe();
    /* Return dialog */
    return dialog$;
}


/***/ }),

/***/ "./static/javascripts/integrations/index.ts":
/*!**************************************************!*\
  !*** ./static/javascripts/integrations/index.ts ***!
  \**************************************************/
/*! exports provided: setupClipboard, setupDialog, setupInstantLoading, setupKeyboard, Search, setupSearchDocumentMap, setupSearchHighlighter, defaultTransform, setupSearchWorker, SearchMessageType, isSearchSetupMessage, isSearchReadyMessage, isSearchQueryMessage, isSearchResultMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard */ "./static/javascripts/integrations/clipboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupClipboard", function() { return _clipboard__WEBPACK_IMPORTED_MODULE_0__["setupClipboard"]; });

/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./static/javascripts/integrations/dialog/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupDialog", function() { return _dialog__WEBPACK_IMPORTED_MODULE_1__["setupDialog"]; });

/* harmony import */ var _instant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instant */ "./static/javascripts/integrations/instant/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupInstantLoading", function() { return _instant__WEBPACK_IMPORTED_MODULE_2__["setupInstantLoading"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./static/javascripts/integrations/keyboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupKeyboard", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_3__["setupKeyboard"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./static/javascripts/integrations/search/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchDocumentMap", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["setupSearchDocumentMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchHighlighter", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["setupSearchHighlighter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTransform", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["defaultTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchWorker", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["setupSearchWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchMessageType", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["SearchMessageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchSetupMessage", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["isSearchSetupMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchReadyMessage", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["isSearchReadyMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchQueryMessage", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["isSearchQueryMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchResultMessage", function() { return _search__WEBPACK_IMPORTED_MODULE_4__["isSearchResultMessage"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */







/***/ }),

/***/ "./static/javascripts/integrations/instant/index.ts":
/*!**********************************************************!*\
  !*** ./static/javascripts/integrations/instant/index.ts ***!
  \**********************************************************/
/*! exports provided: setupInstantLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupInstantLoading", function() { return setupInstantLoading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs//ajax */ "./node_modules/rxjs/dist/esm5/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set up instant loading
 *
 * When fetching, theoretically, we could use `responseType: "document"`, but
 * since all MkDocs links are relative, we need to make sure that the current
 * location matches the document we just loaded. Otherwise any relative links
 * in the document could use the old location.
 *
 * This is the reason why we need to synchronize history events and the process
 * of fetching the document for navigation changes (except `popstate` events):
 *
 * 1. Fetch document via `XMLHTTPRequest`
 * 2. Set new location via `history.pushState`
 * 3. Parse and emit fetched document
 *
 * For `popstate` events, we must not use `history.pushState`, or the forward
 * history will be irreversibly overwritten. In case the request fails, the
 * location change is dispatched regularly.
 *
 * @param options - Options
 */
function setupInstantLoading(urls, _a) {
    var document$ = _a.document$, viewport$ = _a.viewport$, location$ = _a.location$;
    /* Disable automatic scroll restoration */
    if ("scrollRestoration" in history)
        history.scrollRestoration = "manual";
    /* Hack: ensure that reloads restore viewport offset */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, "beforeunload")
        .subscribe(function () {
        history.scrollRestoration = "auto";
    });
    /* Hack: ensure absolute favicon link to omit 404s on document switch */
    var favicon = Object(browser__WEBPACK_IMPORTED_MODULE_4__["getElement"])("link[rel=\"shortcut icon\"]");
    if (typeof favicon !== "undefined")
        favicon.href = favicon.href; // tslint:disable-line no-self-assignment
    /* Intercept link clicks and convert to state change */
    var state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document.body, "click")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (ev) { return !(ev.metaKey || ev.ctrlKey); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (ev) {
        if (ev.target instanceof HTMLElement) {
            var el = ev.target.closest("a");
            if (el && !el.target &&
                Object(browser__WEBPACK_IMPORTED_MODULE_4__["isLocalLocation"])(el) &&
                urls.includes(el.href)) {
                if (!Object(browser__WEBPACK_IMPORTED_MODULE_4__["isAnchorLocation"])(el))
                    ev.preventDefault();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(el);
            }
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"];
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (el) { return ({ url: new URL(el.href) }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    /* Always close search on link click */
    state$.subscribe(function () {
        Object(browser__WEBPACK_IMPORTED_MODULE_4__["setToggle"])("search", false);
    });
    /* Filter state changes to dispatch */
    var push$ = state$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
        var url = _a.url;
        return !Object(browser__WEBPACK_IMPORTED_MODULE_4__["isAnchorLocation"])(url);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    /* Intercept popstate events (history back and forward) */
    var pop$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, "popstate")
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (ev) { return ev.state !== null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ev) { return ({
        url: new URL(location.href),
        offset: ev.state
    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    /* Emit location change */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(push$, pop$)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (prev, next) { return prev.url.href === next.url.href; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pluck"])("url"))
        .subscribe(location$);
    /* Fetch document on location change */
    var ajax$ = location$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilKeyChanged"])("pathname"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (url) { return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])({
        url: url.href,
        responseType: "text",
        withCredentials: true
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
        Object(browser__WEBPACK_IMPORTED_MODULE_4__["setLocation"])(url);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"];
    })); }));
    /* Set new location as soon as the document was fetched */
    push$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(ajax$))
        .subscribe(function (_a) {
        var url = _a.url;
        history.pushState({}, "", url.toString());
    });
    /* Parse and emit document */
    var dom = new DOMParser();
    ajax$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
        var response = _a.response;
        return dom.parseFromString(response, "text/html");
    }))
        .subscribe(document$);
    /* Intercept instant loading */
    var instant$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(push$, pop$)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(document$));
    // TODO: this must be combined with search scroll restoration on mobile
    instant$.subscribe(function (_a) {
        var url = _a.url, offset = _a.offset;
        if (url.hash && !offset) {
            Object(browser__WEBPACK_IMPORTED_MODULE_4__["setLocationHash"])(url.hash);
        }
        else {
            Object(browser__WEBPACK_IMPORTED_MODULE_4__["setViewportOffset"])(offset || { y: 0 });
        }
    });
    /* Replace document metadata */
    instant$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(document$))
        .subscribe(function (_a) {
        var e_1, _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), _d = _c[1], title = _d.title, head = _d.head;
        document.title = title;
        try {
            /* Replace meta tags */
            for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])([
                "link[rel=\"canonical\"]",
                "meta[name=\"author\"]",
                "meta[name=\"description\"]"
            ]), _f = _e.next(); !_f.done; _f = _e.next()) {
                var selector = _f.value;
                var next = Object(browser__WEBPACK_IMPORTED_MODULE_4__["getElement"])(selector, head);
                var prev = Object(browser__WEBPACK_IMPORTED_MODULE_4__["getElement"])(selector, document.head);
                if (typeof next !== "undefined" &&
                    typeof prev !== "undefined") {
                    Object(browser__WEBPACK_IMPORTED_MODULE_4__["replaceElement"])(prev, next);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /* Finished, dispatch document switch event */
        document.dispatchEvent(new CustomEvent("DOMContentSwitch"));
    });
    /* Debounce update of viewport offset */
    viewport$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilKeyChanged"])("offset"))
        .subscribe(function (_a) {
        var offset = _a.offset;
        history.replaceState(offset, "");
    });
    /* Set viewport offset from history */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(state$, pop$)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferCount"])(2, 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prev = _b[0], next = _b[1];
        return prev.url.pathname === next.url.pathname
            && !Object(browser__WEBPACK_IMPORTED_MODULE_4__["isAnchorLocation"])(next.url);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), state = _b[1];
        return state;
    }))
        .subscribe(function (_a) {
        var offset = _a.offset;
        Object(browser__WEBPACK_IMPORTED_MODULE_4__["setViewportOffset"])(offset || { y: 0 });
    });
}


/***/ }),

/***/ "./static/javascripts/integrations/keyboard/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/integrations/keyboard/index.ts ***!
  \***********************************************************/
/*! exports provided: setupKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupKeyboard", function() { return setupKeyboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./static/javascripts/components/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set up keyboard
 *
 * This function will set up the keyboard handlers and ensure that keys are
 * correctly propagated. Currently there are two modes:
 *
 * - `global`: This mode is active when the search is closed. It is intended
 *   to assign hotkeys to specific functions of the site. Currently the search,
 *   previous and next page can be triggered.
 *
 * - `search`: This mode is active when the search is open. It maps certain
 *   navigational keys to offer search results that can be entirely navigated
 *   through keyboard input.
 *
 * The keyboard observable is returned and can be used to monitor the keyboard
 * in order toassign further hotkeys to custom functions.
 *
 * @return Keyboard observable
 */
function setupKeyboard() {
    var keyboard$ = Object(browser__WEBPACK_IMPORTED_MODULE_2__["watchKeyboard"])()
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (key) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ mode: Object(browser__WEBPACK_IMPORTED_MODULE_2__["getToggle"])("search") ? "search" : "global" }, key)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_a) {
        var mode = _a.mode;
        if (mode === "global") {
            var active = Object(browser__WEBPACK_IMPORTED_MODULE_2__["getActiveElement"])();
            if (typeof active !== "undefined")
                return !Object(browser__WEBPACK_IMPORTED_MODULE_2__["isSusceptibleToKeyboard"])(active);
        }
        return true;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    /* Set up search keyboard handlers */
    keyboard$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_a) {
        var mode = _a.mode;
        return mode === "search";
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(Object(components__WEBPACK_IMPORTED_MODULE_3__["useComponent"])("search-query"), Object(components__WEBPACK_IMPORTED_MODULE_3__["useComponent"])("search-result")))
        .subscribe(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], query = _b[1], result = _b[2];
        var active = Object(browser__WEBPACK_IMPORTED_MODULE_2__["getActiveElement"])();
        switch (key.type) {
            /* Enter: prevent form submission */
            case "Enter":
                if (active === query)
                    key.claim();
                break;
            /* Escape or Tab: close search */
            case "Escape":
            case "Tab":
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["setToggle"])("search", false);
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["setElementFocus"])(query, false);
                break;
            /* Vertical arrows: select previous or next search result */
            case "ArrowUp":
            case "ArrowDown":
                if (typeof active === "undefined") {
                    Object(browser__WEBPACK_IMPORTED_MODULE_2__["setElementFocus"])(query);
                }
                else {
                    var els = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([query], Object(browser__WEBPACK_IMPORTED_MODULE_2__["getElements"])("[href]", result));
                    var i = Math.max(0, (Math.max(0, els.indexOf(active)) + els.length + (key.type === "ArrowUp" ? -1 : +1)) % els.length);
                    Object(browser__WEBPACK_IMPORTED_MODULE_2__["setElementFocus"])(els[i]);
                }
                /* Prevent scrolling of page */
                key.claim();
                break;
            /* All other keys: hand to search query */
            default:
                if (query !== Object(browser__WEBPACK_IMPORTED_MODULE_2__["getActiveElement"])())
                    Object(browser__WEBPACK_IMPORTED_MODULE_2__["setElementFocus"])(query);
        }
    });
    /* Set up global keyboard handlers */
    keyboard$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_a) {
        var mode = _a.mode;
        return mode === "global";
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(Object(components__WEBPACK_IMPORTED_MODULE_3__["useComponent"])("search-query")))
        .subscribe(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _b[0], query = _b[1];
        switch (key.type) {
            /* Open search and select query */
            case "f":
            case "s":
            case "/":
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["setElementFocus"])(query);
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["setElementSelection"])(query);
                key.claim();
                break;
            /* Go to previous page */
            case "p":
            case ",":
                var prev = Object(browser__WEBPACK_IMPORTED_MODULE_2__["getElement"])("[href][rel=prev]");
                if (typeof prev !== "undefined")
                    prev.click();
                break;
            /* Go to next page */
            case "n":
            case ".":
                var next = Object(browser__WEBPACK_IMPORTED_MODULE_2__["getElement"])("[href][rel=next]");
                if (typeof next !== "undefined")
                    next.click();
                break;
        }
    });
    /* Return keyboard */
    return keyboard$;
}


/***/ }),

/***/ "./static/javascripts/integrations/search/_/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/integrations/search/_/index.ts ***!
  \***********************************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../document */ "./static/javascripts/integrations/search/document/index.ts");
/* harmony import */ var _highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highlighter */ "./static/javascripts/integrations/search/highlighter/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Compute the difference of two lists of strings
 *
 * @param a - 1st list of strings
 * @param b - 2nd list of strings
 *
 * @return Difference
 */
function difference(a, b) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])([new Set(a), new Set(b)], 2), x = _a[0], y = _a[1];
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Set(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(x).filter(function (value) { return !y.has(value); })));
}
/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */
/**
 * Search
 *
 * Note that `lunr` is injected via Webpack, as it will otherwise also be
 * bundled in the application bundle.
 */
var Search = /** @class */ (function () {
    /**
     * Create the search integration
     *
     * @param data - Search index
     */
    function Search(_a) {
        var config = _a.config, docs = _a.docs, pipeline = _a.pipeline, index = _a.index;
        this.documents = Object(_document__WEBPACK_IMPORTED_MODULE_1__["setupSearchDocumentMap"])(docs);
        this.highlight = Object(_highlighter__WEBPACK_IMPORTED_MODULE_2__["setupSearchHighlighter"])(config);
        /* Set separator for tokenizer */
        lunr.tokenizer.separator = new RegExp(config.separator);
        /* If no index was given, create it */
        if (typeof index === "undefined") {
            this.index = lunr(function () {
                var _a, e_1, _b, e_2, _c, e_3, _d;
                /* Set up alternate search languages */
                if (config.lang.length === 1 && config.lang[0] !== "en") {
                    this.use(lunr[config.lang[0]]);
                }
                else if (config.lang.length > 1) {
                    this.use((_a = lunr).multiLanguage.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(config.lang)));
                }
                /* Compute functions to be removed from the pipeline */
                var fns = difference([
                    "trimmer", "stopWordFilter", "stemmer"
                ], pipeline);
                try {
                    /* Remove functions from the pipeline for every language */
                    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.lang.map(function (language) { return (language === "en" ? lunr : lunr[language]); })), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var lang = _f.value;
                        try {
                            for (var fns_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(fns)), fns_1_1 = fns_1.next(); !fns_1_1.done; fns_1_1 = fns_1.next()) {
                                var fn = fns_1_1.value;
                                this.pipeline.remove(lang[fn]);
                                this.searchPipeline.remove(lang[fn]);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (fns_1_1 && !fns_1_1.done && (_c = fns_1.return)) _c.call(fns_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                /* Set up fields and reference */
                this.field("title", { boost: 1000 });
                this.field("text");
                this.ref("location");
                try {
                    /* Index documents */
                    for (var docs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(docs), docs_1_1 = docs_1.next(); !docs_1_1.done; docs_1_1 = docs_1.next()) {
                        var doc = docs_1_1.value;
                        this.add(doc);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (docs_1_1 && !docs_1_1.done && (_d = docs_1.return)) _d.call(docs_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
            /* Prebuilt or serialized index */
        }
        else {
            this.index = lunr.Index.load(typeof index === "string"
                ? JSON.parse(index)
                : index);
        }
    }
    /**
     * Search for matching documents
     *
     * The search index which MkDocs provides is divided up into articles, which
     * contain the whole content of the individual pages, and sections, which only
     * contain the contents of the subsections obtained by breaking the individual
     * pages up at `h1` ... `h6`. As there may be many sections on different pages
     * with identical titles (for example within this very project, e.g. "Usage"
     * or "Installation"), they need to be put into the context of the containing
     * page. For this reason, section results are grouped within their respective
     * articles which are the top-level results that are returned.
     *
     * @param value - Query value
     *
     * @return Search results
     */
    Search.prototype.query = function (value) {
        var _this = this;
        if (value) {
            try {
                /* Group sections by containing article */
                var groups = this.index.search(value)
                    .reduce(function (results, result) {
                    var document = _this.documents.get(result.ref);
                    if (typeof document !== "undefined") {
                        if ("parent" in document) {
                            var ref = document.parent.location;
                            results.set(ref, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(results.get(ref) || [], [result]));
                        }
                        else {
                            var ref = document.location;
                            results.set(ref, results.get(ref) || []);
                        }
                    }
                    return results;
                }, new Map());
                /* Create highlighter for query */
                var fn_1 = this.highlight(value);
                /* Map groups to search documents */
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(groups).map(function (_a) {
                    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), ref = _b[0], sections = _b[1];
                    return ({
                        article: fn_1(_this.documents.get(ref)),
                        sections: sections.map(function (section) {
                            return fn_1(_this.documents.get(section.ref));
                        })
                    });
                });
                /* Log errors to console (for now) */
            }
            catch (err) {
                // tslint:disable-next-line no-console
                console.warn("Invalid query: " + value + " \u2013 see https://bit.ly/2s3ChXG");
            }
        }
        /* Return nothing in case of error or empty query */
        return [];
    };
    return Search;
}());



/***/ }),

/***/ "./static/javascripts/integrations/search/document/index.ts":
/*!******************************************************************!*\
  !*** ./static/javascripts/integrations/search/document/index.ts ***!
  \******************************************************************/
/*! exports provided: setupSearchDocumentMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupSearchDocumentMap", function() { return setupSearchDocumentMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Create a search document mapping
 *
 * @param docs - Search index documents
 *
 * @return Search document map
 */
function setupSearchDocumentMap(docs) {
    var e_1, _a;
    var documents = new Map();
    try {
        for (var docs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(docs), docs_1_1 = docs_1.next(); !docs_1_1.done; docs_1_1 = docs_1.next()) {
            var doc = docs_1_1.value;
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(doc.location.split("#"), 2), path = _b[0], hash = _b[1];
            /* Extract location and title */
            var location = doc.location;
            var title = doc.title;
            /* Escape and cleanup text */
            var text = escape_html__WEBPACK_IMPORTED_MODULE_1__(doc.text)
                .replace(/\s+(?=[,.:;!?])/g, "")
                .replace(/\s+/g, " ");
            /* Handle section */
            if (hash) {
                var parent = documents.get(path);
                /* Ignore first section, override article */
                if (!parent.linked) {
                    parent.title = doc.title;
                    parent.text = text;
                    parent.linked = true;
                    /* Add subsequent section */
                }
                else {
                    documents.set(location, {
                        location: location,
                        title: title,
                        text: text,
                        parent: parent
                    });
                }
                /* Add article */
            }
            else {
                documents.set(location, {
                    location: location,
                    title: title,
                    text: text,
                    linked: false
                });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (docs_1_1 && !docs_1_1.done && (_a = docs_1.return)) _a.call(docs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return documents;
}


/***/ }),

/***/ "./static/javascripts/integrations/search/highlighter/index.ts":
/*!*********************************************************************!*\
  !*** ./static/javascripts/integrations/search/highlighter/index.ts ***!
  \*********************************************************************/
/*! exports provided: setupSearchHighlighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupSearchHighlighter", function() { return setupSearchHighlighter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Create a search highlighter
 *
 * @param config - Search index configuration
 *
 * @return Search highlight factory function
 */
function setupSearchHighlighter(config) {
    var separator = new RegExp(config.separator, "img");
    var highlight = function (_, data, term) {
        return data + "<em>" + term + "</em>";
    };
    /* Return factory function */
    return function (value) {
        value = value
            .replace(/[\s*+\-:~^]+/g, " ")
            .trim();
        /* Create search term match expression */
        var match = new RegExp("(^|" + config.separator + ")(" + value
            .replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&")
            .replace(separator, "|") + ")", "img");
        /* Highlight document */
        return function (document) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, document), { title: document.title.replace(match, highlight), text: document.text.replace(match, highlight) })); };
    };
}


/***/ }),

/***/ "./static/javascripts/integrations/search/index.ts":
/*!*********************************************************!*\
  !*** ./static/javascripts/integrations/search/index.ts ***!
  \*********************************************************/
/*! exports provided: Search, setupSearchDocumentMap, setupSearchHighlighter, defaultTransform, setupSearchWorker, SearchMessageType, isSearchSetupMessage, isSearchReadyMessage, isSearchQueryMessage, isSearchResultMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/integrations/search/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return ___WEBPACK_IMPORTED_MODULE_0__["Search"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document */ "./static/javascripts/integrations/search/document/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchDocumentMap", function() { return _document__WEBPACK_IMPORTED_MODULE_1__["setupSearchDocumentMap"]; });

/* harmony import */ var _highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlighter */ "./static/javascripts/integrations/search/highlighter/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchHighlighter", function() { return _highlighter__WEBPACK_IMPORTED_MODULE_2__["setupSearchHighlighter"]; });

/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform */ "./static/javascripts/integrations/search/transform/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTransform", function() { return _transform__WEBPACK_IMPORTED_MODULE_3__["defaultTransform"]; });

/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worker */ "./static/javascripts/integrations/search/worker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchWorker", function() { return _worker__WEBPACK_IMPORTED_MODULE_4__["setupSearchWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchMessageType", function() { return _worker__WEBPACK_IMPORTED_MODULE_4__["SearchMessageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchSetupMessage", function() { return _worker__WEBPACK_IMPORTED_MODULE_4__["isSearchSetupMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchReadyMessage", function() { return _worker__WEBPACK_IMPORTED_MODULE_4__["isSearchReadyMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchQueryMessage", function() { return _worker__WEBPACK_IMPORTED_MODULE_4__["isSearchQueryMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchResultMessage", function() { return _worker__WEBPACK_IMPORTED_MODULE_4__["isSearchResultMessage"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */







/***/ }),

/***/ "./static/javascripts/integrations/search/transform/index.ts":
/*!*******************************************************************!*\
  !*** ./static/javascripts/integrations/search/transform/index.ts ***!
  \*******************************************************************/
/*! exports provided: defaultTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTransform", function() { return defaultTransform; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Default transformation function
 *
 * 1. Search for terms in quotation marks and prepend a `+` modifier to denote
 *    that the resulting document must contain all terms, converting the query
 *    to an `AND` query (as opposed to the default `OR` behavior). While users
 *    may expect terms enclosed in quotation marks to map to span queries, i.e.
 *    for which order is important, `lunr` doesn't support them, so the best
 *    we can do is to convert the terms to an `AND` query.
 *
 * 2. Replace control characters which are not located at the beginning of the
 *    query or preceded by white space, or are not followed by a non-whitespace
 *    character or are at the end of the query string. Furthermore, filter
 *    unmatched quotation marks.
 *
 * 3. Trim excess whitespace from left and right.
 *
 * 4. Append a wildcard to the end of every word to make every word a prefix
 *    query in order to provide a good typeahead experience, by adding an
 *    asterisk (wildcard) in between terms, which can be denoted by whitespace,
 *    any non-control character, or a word boundary.
 *
 * @param value - Query value
 *
 * @return Transformed query value
 */
function defaultTransform(value) {
    return value
        .split(/"([^"]+)"/g) /* => 1 */
        .map(function (terms, i) { return i & 1
        ? terms.replace(/^\b|^(?![^\x00-\x7F]|$)|\s+/g, " +")
        : terms; })
        .join("")
        .replace(/"|(?:^|\s+)[*+\-:^~]+(?=\s+|$)/g, "") /* => 2 */
        .trim() /* => 3 */
        .replace(/\s+|(?![^\x00-\x7F]|^)$|\b$/g, "* "); /* => 4 */
}


/***/ }),

/***/ "./static/javascripts/integrations/search/worker/_/index.ts":
/*!******************************************************************!*\
  !*** ./static/javascripts/integrations/search/worker/_/index.ts ***!
  \******************************************************************/
/*! exports provided: setupSearchWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupSearchWorker", function() { return setupSearchWorker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message */ "./static/javascripts/integrations/search/worker/message/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A RTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */







/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */
/**
 * Set up search index
 *
 * @param data - Search index
 *
 * @return Search index
 */
function setupSearchIndex(_a) {
    var config = _a.config, docs = _a.docs, index = _a.index;
    /* Override default language with value from translation */
    if (config.lang.length === 1 && config.lang[0] === "en")
        config.lang = [Object(utilities__WEBPACK_IMPORTED_MODULE_5__["translate"])("search.config.lang")];
    /* Override default separator with value from translation */
    if (config.separator === "[\\s\\-]+")
        config.separator = Object(utilities__WEBPACK_IMPORTED_MODULE_5__["translate"])("search.config.separator");
    /* Set pipeline from translation */
    var pipeline = Object(utilities__WEBPACK_IMPORTED_MODULE_5__["translate"])("search.config.pipeline")
        .split(/\s*,\s*/)
        .filter(ramda__WEBPACK_IMPORTED_MODULE_1__["identity"]);
    /* Return search index after defaulting */
    return { config: config, docs: docs, index: index, pipeline: pipeline };
}
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Set up search web worker
 *
 * This function will create a web worker to set up and query the search index
 * which is done using `lunr`. The index must be passed as an observable to
 * enable hacks like _localsearch_ via search index embedding as JSON.
 *
 * @param url - Worker URL
 * @param options - Options
 *
 * @return Worker handler
 */
function setupSearchWorker(url, _a) {
    var index$ = _a.index$, base$ = _a.base$;
    var worker = new Worker(url);
    /* Create communication channels and resolve relative links */
    var tx$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    var rx$ = Object(browser__WEBPACK_IMPORTED_MODULE_4__["watchWorker"])(worker, { tx$: tx$ })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(base$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
        var e_1, _b, e_2, _c;
        var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), message = _d[0], base = _d[1];
        if (Object(_message__WEBPACK_IMPORTED_MODULE_6__["isSearchResultMessage"])(message)) {
            try {
                for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.data), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var _g = _f.value, article = _g.article, sections = _g.sections;
                    article.location = base + "/" + article.location;
                    try {
                        for (var sections_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(sections)), sections_1_1 = sections_1.next(); !sections_1_1.done; sections_1_1 = sections_1.next()) {
                            var section = sections_1_1.value;
                            section.location = base + "/" + section.location;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (sections_1_1 && !sections_1_1.done && (_c = sections_1.return)) _c.call(sections_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return message;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    /* Set up search index */
    index$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (index) { return ({
        type: _message__WEBPACK_IMPORTED_MODULE_6__["SearchMessageType"].SETUP,
        data: setupSearchIndex(index)
    }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["asyncScheduler"]))
        .subscribe(tx$.next.bind(tx$));
    /* Return worker handler */
    return { tx$: tx$, rx$: rx$ };
}


/***/ }),

/***/ "./static/javascripts/integrations/search/worker/index.ts":
/*!****************************************************************!*\
  !*** ./static/javascripts/integrations/search/worker/index.ts ***!
  \****************************************************************/
/*! exports provided: setupSearchWorker, SearchMessageType, isSearchSetupMessage, isSearchReadyMessage, isSearchQueryMessage, isSearchResultMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ */ "./static/javascripts/integrations/search/worker/_/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setupSearchWorker", function() { return ___WEBPACK_IMPORTED_MODULE_0__["setupSearchWorker"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./static/javascripts/integrations/search/worker/message/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchMessageType", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["SearchMessageType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchSetupMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["isSearchSetupMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchReadyMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["isSearchReadyMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchQueryMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["isSearchQueryMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSearchResultMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["isSearchResultMessage"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/***/ }),

/***/ "./static/javascripts/integrations/search/worker/message/index.ts":
/*!************************************************************************!*\
  !*** ./static/javascripts/integrations/search/worker/message/index.ts ***!
  \************************************************************************/
/*! exports provided: SearchMessageType, isSearchSetupMessage, isSearchReadyMessage, isSearchQueryMessage, isSearchResultMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMessageType", function() { return SearchMessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSearchSetupMessage", function() { return isSearchSetupMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSearchReadyMessage", function() { return isSearchReadyMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSearchQueryMessage", function() { return isSearchQueryMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSearchResultMessage", function() { return isSearchResultMessage; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A RTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */
/**
 * Search message type
 */
var SearchMessageType;
(function (SearchMessageType) {
    SearchMessageType[SearchMessageType["SETUP"] = 0] = "SETUP";
    SearchMessageType[SearchMessageType["READY"] = 1] = "READY";
    SearchMessageType[SearchMessageType["QUERY"] = 2] = "QUERY";
    SearchMessageType[SearchMessageType["RESULT"] = 3] = "RESULT"; /* Search results */
})(SearchMessageType || (SearchMessageType = {}));
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Type guard for search setup messages
 *
 * @param message - Search worker message
 *
 * @return Test result
 */
function isSearchSetupMessage(message) {
    return message.type === SearchMessageType.SETUP;
}
/**
 * Type guard for search ready messages
 *
 * @param message - Search worker message
 *
 * @return Test result
 */
function isSearchReadyMessage(message) {
    return message.type === SearchMessageType.READY;
}
/**
 * Type guard for search query messages
 *
 * @param message - Search worker message
 *
 * @return Test result
 */
function isSearchQueryMessage(message) {
    return message.type === SearchMessageType.QUERY;
}
/**
 * Type guard for search result messages
 *
 * @param message - Search worker message
 *
 * @return Test result
 */
function isSearchResultMessage(message) {
    return message.type === SearchMessageType.RESULT;
}


/***/ }),

/***/ "./static/javascripts/patches/code/index.ts":
/*!**************************************************!*\
  !*** ./static/javascripts/patches/code/index.ts ***!
  \**************************************************/
/*! exports provided: patchCodeBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchCodeBlocks", function() { return patchCodeBlocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Patch all `code` elements
 *
 * This function will make overflowing code blocks focusable via keyboard, so
 * they can be scrolled without a mouse.
 *
 * @param options - Options
 */
function patchCodeBlocks(_a) {
    var document$ = _a.document$, viewport$ = _a.viewport$;
    var els$ = document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElements"])("pre > code"); }));
    /* Observe viewport size only */
    var size$ = viewport$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilKeyChanged"])("size"));
    /* Make overflowing elements focusable */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([els$, size$])
        .subscribe(function (_a) {
        var e_1, _b;
        var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), els = _c[0];
        try {
            for (var els_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                var el = els_1_1.value;
                if (el.scrollWidth > el.clientWidth)
                    el.setAttribute("tabindex", "0");
                else
                    el.removeAttribute("tabindex");
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (els_1_1 && !els_1_1.done && (_b = els_1.return)) _b.call(els_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}


/***/ }),

/***/ "./static/javascripts/patches/details/index.ts":
/*!*****************************************************!*\
  !*** ./static/javascripts/patches/details/index.ts ***!
  \*****************************************************/
/*! exports provided: patchDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchDetails", function() { return patchDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */





/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Patch all `details` elements
 *
 * This function will ensure that all `details` tags are opened prior to
 * printing, so the whole content of the page is included, and on anchor jumps.
 *
 * @param options - Options
 */
function patchDetails(_a) {
    var document$ = _a.document$, hash$ = _a.hash$;
    var els$ = document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_4__["getElements"])("details"); }));
    /* Open all details before printing */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(browser__WEBPACK_IMPORTED_MODULE_4__["watchMedia"])("print").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(ramda__WEBPACK_IMPORTED_MODULE_1__["identity"])), /* Webkit */ Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "beforeprint") /* IE, FF */)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMapTo"])(els$))
        .subscribe(function (els) {
        var e_1, _a;
        try {
            for (var els_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                var el = els_1_1.value;
                el.setAttribute("open", "");
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    /* Open parent details and fix anchor jump */
    hash$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (id) { return Object(browser__WEBPACK_IMPORTED_MODULE_4__["getElement"])("[id=\"" + id + "\"]"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (el) { return typeof el !== "undefined"; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (el) {
        var details = el.closest("details");
        if (details && !details.open)
            details.setAttribute("open", "");
    }))
        .subscribe(function (el) { return el.scrollIntoView(); });
}


/***/ }),

/***/ "./static/javascripts/patches/index.ts":
/*!*********************************************!*\
  !*** ./static/javascripts/patches/index.ts ***!
  \*********************************************/
/*! exports provided: patchCodeBlocks, patchDetails, patchScripts, patchScrollfix, patchSource, patchTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code */ "./static/javascripts/patches/code/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchCodeBlocks", function() { return _code__WEBPACK_IMPORTED_MODULE_0__["patchCodeBlocks"]; });

/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./static/javascripts/patches/details/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchDetails", function() { return _details__WEBPACK_IMPORTED_MODULE_1__["patchDetails"]; });

/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ "./static/javascripts/patches/script/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchScripts", function() { return _script__WEBPACK_IMPORTED_MODULE_2__["patchScripts"]; });

/* harmony import */ var _scrollfix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollfix */ "./static/javascripts/patches/scrollfix/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchScrollfix", function() { return _scrollfix__WEBPACK_IMPORTED_MODULE_3__["patchScrollfix"]; });

/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./source */ "./static/javascripts/patches/source/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchSource", function() { return _source__WEBPACK_IMPORTED_MODULE_4__["patchSource"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table */ "./static/javascripts/patches/table/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchTables", function() { return _table__WEBPACK_IMPORTED_MODULE_5__["patchTables"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */








/***/ }),

/***/ "./static/javascripts/patches/script/index.ts":
/*!****************************************************!*\
  !*** ./static/javascripts/patches/script/index.ts ***!
  \****************************************************/
/*! exports provided: patchScripts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchScripts", function() { return patchScripts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./static/javascripts/components/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Patch all `script` elements
 *
 * This function must be run after a document switch, which means the first
 * emission must be ignored.
 *
 * @param options - Options
 */
function patchScripts(_a) {
    var document$ = _a.document$;
    var els$ = document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(Object(components__WEBPACK_IMPORTED_MODULE_3__["useComponent"])("container")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), el = _b[1];
        return Object(browser__WEBPACK_IMPORTED_MODULE_2__["getElements"])("script", el);
    }));
    /* Evaluate all scripts via replacement */
    els$.subscribe(function (els) {
        var e_1, _a;
        try {
            for (var els_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                var el = els_1_1.value;
                if (el.src || /(^|\/javascript)$/i.test(el.type)) {
                    var script = Object(browser__WEBPACK_IMPORTED_MODULE_2__["createElement"])("script");
                    var key = el.src ? "src" : "textContent";
                    script[key] = el[key];
                    Object(browser__WEBPACK_IMPORTED_MODULE_2__["replaceElement"])(el, script);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}


/***/ }),

/***/ "./static/javascripts/patches/scrollfix/index.ts":
/*!*******************************************************!*\
  !*** ./static/javascripts/patches/scrollfix/index.ts ***!
  \*******************************************************/
/*! exports provided: patchScrollfix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchScrollfix", function() { return patchScrollfix; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */
/**
 * Check whether the given device is an Apple device
 *
 * @return Test result
 */
function isAppleDevice() {
    return /(iPad|iPhone|iPod)/.test(navigator.userAgent);
}
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Patch all elements with `data-md-scrollfix` attributes
 *
 * This is a year-old patch which ensures that overflow scrolling works at the
 * top and bottom of containers on iOS by ensuring a `1px` scroll offset upon
 * the start of a touch event.
 *
 * @see https://bit.ly/2SCtAOO - Original source
 *
 * @param options - Options
 */
function patchScrollfix(_a) {
    var document$ = _a.document$;
    var els$ = document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElements"])("[data-md-scrollfix]"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    /* Remove marker attribute, so we'll only add the fix once */
    els$.subscribe(function (els) {
        var e_1, _a;
        try {
            for (var els_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                var el = els_1_1.value;
                el.removeAttribute("data-md-scrollfix");
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
    /* Patch overflow scrolling on touch start */
    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["iif"])(isAppleDevice, els$, rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (els) { return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(els.map(function (el) { return (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(el, "touchstart", { passive: true })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(el))); }))); }))
        .subscribe(function (el) {
        var top = el.scrollTop;
        /* We're at the top of the container */
        if (top === 0) {
            el.scrollTop = 1;
            /* We're at the bottom of the container */
        }
        else if (top + el.offsetHeight === el.scrollHeight) {
            el.scrollTop = top - 1;
        }
    });
}


/***/ }),

/***/ "./static/javascripts/patches/source/github/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/patches/source/github/index.ts ***!
  \***********************************************************/
/*! exports provided: fetchSourceFactsFromGitHub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSourceFactsFromGitHub", function() { return fetchSourceFactsFromGitHub; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/dist/esm5/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Fetch GitHub source facts
 *
 * @param user - GitHub user
 * @param repo - GitHub repository
 *
 * @return Source facts observable
 */
function fetchSourceFactsFromGitHub(user, repo) {
    return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_1__["ajax"])({
        url: typeof repo !== "undefined"
            ? "https://api.github.com/repos/" + user + "/" + repo
            : "https://api.github.com/users/" + user,
        responseType: "json"
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
        var status = _a.status;
        return status === 200;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (data) {
        /* GitHub repository */
        if (typeof repo !== "undefined") {
            var stargazers_count = data.stargazers_count, forks_count = data.forks_count;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([
                Object(utilities__WEBPACK_IMPORTED_MODULE_3__["round"])(stargazers_count || 0) + " Stars",
                Object(utilities__WEBPACK_IMPORTED_MODULE_3__["round"])(forks_count || 0) + " Forks"
            ]);
            /* GitHub user/organization */
        }
        else {
            var public_repos = data.public_repos;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([
                Object(utilities__WEBPACK_IMPORTED_MODULE_3__["round"])(public_repos || 0) + " Repositories"
            ]);
        }
    }));
}


/***/ }),

/***/ "./static/javascripts/patches/source/gitlab/index.ts":
/*!***********************************************************!*\
  !*** ./static/javascripts/patches/source/gitlab/index.ts ***!
  \***********************************************************/
/*! exports provided: fetchSourceFactsFromGitLab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSourceFactsFromGitLab", function() { return fetchSourceFactsFromGitLab; });
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/dist/esm5/ajax/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */



/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Fetch GitLab source facts
 *
 * @param base - GitLab base
 * @param project - GitLab project
 *
 * @return Source facts observable
 */
function fetchSourceFactsFromGitLab(base, project) {
    return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"])({
        url: "https://" + base + "/api/v4/projects/" + encodeURIComponent(project),
        responseType: "json"
    })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_a) {
        var status = _a.status;
        return status === 200;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])("response"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
        var star_count = _a.star_count, forks_count = _a.forks_count;
        return ([
            Object(utilities__WEBPACK_IMPORTED_MODULE_2__["round"])(star_count) + " Stars",
            Object(utilities__WEBPACK_IMPORTED_MODULE_2__["round"])(forks_count) + " Forks"
        ]);
    }));
}


/***/ }),

/***/ "./static/javascripts/patches/source/index.ts":
/*!****************************************************!*\
  !*** ./static/javascripts/patches/source/index.ts ***!
  \****************************************************/
/*! exports provided: patchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchSource", function() { return patchSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! templates */ "./static/javascripts/templates/index.ts");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github */ "./static/javascripts/patches/source/github/index.ts");
/* harmony import */ var _gitlab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gitlab */ "./static/javascripts/patches/source/gitlab/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */








/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */
/**
 * Fetch source facts
 *
 * @param url - Source repository URL
 *
 * @return Source facts observable
 */
function fetchSourceFacts(url) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(url.match(/(git(?:hub|lab))/i) || [], 1), type = _a[0];
    switch (type.toLowerCase()) {
        /* GitHub repository */
        case "github":
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(url.match(/^.+github\.com\/([^\/]+)\/?([^\/]+)?/i), 3), user = _b[1], repo = _b[2];
            return Object(_github__WEBPACK_IMPORTED_MODULE_6__["fetchSourceFactsFromGitHub"])(user, repo);
        /* GitLab repository */
        case "gitlab":
            var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(url.match(/^.+?([^\/]*gitlab[^\/]+)\/(.+?)\/?$/i), 3), base = _c[1], slug = _c[2];
            return Object(_gitlab__WEBPACK_IMPORTED_MODULE_7__["fetchSourceFactsFromGitLab"])(base, slug);
        /* Everything else */
        default:
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"];
    }
}
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Patch elements containing repository information
 *
 * This function will retrieve the URL from the repository link and try to
 * query data from integrated source code platforms like GitHub or GitLab.
 *
 * @param options - Options
 */
function patchSource(_a) {
    var document$ = _a.document$;
    document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElementOrThrow"])(".md-source[href]"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_a) {
        var href = _a.href;
        return (Object(utilities__WEBPACK_IMPORTED_MODULE_5__["cache"])("" + Object(utilities__WEBPACK_IMPORTED_MODULE_5__["hash"])(href), function () { return fetchSourceFacts(href); }));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"]; }))
        .subscribe(function (facts) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(browser__WEBPACK_IMPORTED_MODULE_3__["getElements"])(".md-source__repository")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                if (!el.hasAttribute("data-md-state")) {
                    el.setAttribute("data-md-state", "done");
                    el.appendChild(Object(templates__WEBPACK_IMPORTED_MODULE_4__["renderSource"])(facts));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}


/***/ }),

/***/ "./static/javascripts/patches/table/index.ts":
/*!***************************************************!*\
  !*** ./static/javascripts/patches/table/index.ts ***!
  \***************************************************/
/*! exports provided: patchTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchTables", function() { return patchTables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/* harmony import */ var templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! templates */ "./static/javascripts/templates/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */




/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Patch all `table` elements
 *
 * This function will re-render all tables by wrapping them to improve overflow
 * scrolling on smaller screen sizes.
 *
 * @param options - Options
 */
function patchTables(_a) {
    var document$ = _a.document$;
    var sentinel = Object(browser__WEBPACK_IMPORTED_MODULE_2__["createElement"])("table");
    document$
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () { return Object(browser__WEBPACK_IMPORTED_MODULE_2__["getElements"])("table:not([class])"); }))
        .subscribe(function (els) {
        var e_1, _a;
        try {
            for (var els_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                var el = els_1_1.value;
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["replaceElement"])(el, sentinel);
                Object(browser__WEBPACK_IMPORTED_MODULE_2__["replaceElement"])(sentinel, Object(templates__WEBPACK_IMPORTED_MODULE_3__["renderTable"])(el));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}


/***/ }),

/***/ "./static/javascripts/templates/clipboard/index.tsx":
/*!**********************************************************!*\
  !*** ./static/javascripts/templates/clipboard/index.tsx ***!
  \**********************************************************/
/*! exports provided: renderClipboardButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderClipboardButton", function() { return renderClipboardButton; });
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * CSS classes
 */
var css = {
    container: "md-clipboard md-icon"
};
/* ------------------------------------------------------------------------- */
/**
 * Path of `file-search-outline` icon
 */
var path = "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 " +
    "21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z";
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Render a 'copy-to-clipboard' button
 *
 * @param id - Unique identifier
 *
 * @return Element
 */
function renderClipboardButton(id) {
    return (Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: css.container, title: Object(utilities__WEBPACK_IMPORTED_MODULE_0__["translate"])("clipboard.copy"), "data-clipboard-target": "#" + id + " > code" },
        Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { d: path }))));
}


/***/ }),

/***/ "./static/javascripts/templates/index.ts":
/*!***********************************************!*\
  !*** ./static/javascripts/templates/index.ts ***!
  \***********************************************/
/*! exports provided: renderClipboardButton, renderSearchResult, renderSource, renderTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard */ "./static/javascripts/templates/clipboard/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderClipboardButton", function() { return _clipboard__WEBPACK_IMPORTED_MODULE_0__["renderClipboardButton"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./static/javascripts/templates/search/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSearchResult", function() { return _search__WEBPACK_IMPORTED_MODULE_1__["renderSearchResult"]; });

/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source */ "./static/javascripts/templates/source/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSource", function() { return _source__WEBPACK_IMPORTED_MODULE_2__["renderSource"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ "./static/javascripts/templates/table/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderTable", function() { return _table__WEBPACK_IMPORTED_MODULE_3__["renderTable"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/***/ }),

/***/ "./static/javascripts/templates/search/index.tsx":
/*!*******************************************************!*\
  !*** ./static/javascripts/templates/search/index.tsx ***!
  \*******************************************************/
/*! exports provided: renderSearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSearchResult", function() { return renderSearchResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * CSS classes
 */
var css = {
    item: "md-search-result__item",
    link: "md-search-result__link",
    article: "md-search-result__article md-search-result__article--document",
    section: "md-search-result__article",
    title: "md-search-result__title",
    teaser: "md-search-result__teaser"
};
/* ------------------------------------------------------------------------- */
/**
 * Path of `content-copy` icon
 */
var path = "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H13C12.59,21.75 12.2,21.44 " +
    "11.86,21.1C11.53,20.77 11.25,20.4 11,20H6V4H13V9H18V10.18C18.71,10.34 " +
    "19.39,10.61 20,11V8L14,2M20.31,18.9C21.64,16.79 21,14 " +
    "18.91,12.68C16.8,11.35 14,12 12.69,14.08C11.35,16.19 12,18.97 " +
    "14.09,20.3C15.55,21.23 17.41,21.23 " +
    "18.88,20.32L22,23.39L23.39,22L20.31,18.9M16.5,19A2.5,2.5 0 0,1 " +
    "14,16.5A2.5,2.5 0 0,1 16.5,14A2.5,2.5 0 0,1 19,16.5A2.5,2.5 0 0,1 16.5,19Z";
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Render a search result
 *
 * @param result - Search result
 *
 * @return Element
 */
function renderSearchResult(_a) {
    var article = _a.article, sections = _a.sections;
    /* Render icon */
    var icon = (Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "md-search-result__icon md-icon" },
        Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("path", { d: path }))));
    /* Render article and sections */
    var children = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([article], sections).map(function (document) {
        var location = document.location, title = document.title, text = document.text;
        return (Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: location, class: css.link, tabIndex: -1 },
            Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("article", { class: "parent" in document ? css.section : css.article },
                !("parent" in document) && icon,
                Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("h1", { class: css.title }, title),
                text.length > 0 && Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("p", { class: css.teaser }, Object(utilities__WEBPACK_IMPORTED_MODULE_1__["truncate"])(text, 320)))));
    });
    /* Render search result */
    return (Object(utilities__WEBPACK_IMPORTED_MODULE_1__["h"])("li", { class: css.item }, children));
}


/***/ }),

/***/ "./static/javascripts/templates/source/index.tsx":
/*!*******************************************************!*\
  !*** ./static/javascripts/templates/source/index.tsx ***!
  \*******************************************************/
/*! exports provided: renderSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSource", function() { return renderSource; });
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * CSS classes
 */
var css = {
    facts: "md-source__facts",
    fact: "md-source__fact"
};
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Render source facts
 *
 * @param facts - Source facts
 *
 * @return Element
 */
function renderSource(facts) {
    var children = facts.map(function (fact) { return (Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: css.fact }, fact)); });
    return (Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: css.facts }, children));
}


/***/ }),

/***/ "./static/javascripts/templates/table/index.tsx":
/*!******************************************************!*\
  !*** ./static/javascripts/templates/table/index.tsx ***!
  \******************************************************/
/*! exports provided: renderTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTable", function() { return renderTable; });
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./static/javascripts/utilities/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * CSS classes
 */
var css = {
    wrapper: "md-typeset__scrollwrap",
    table: "md-typeset__table"
};
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Render a table inside a wrapper to improve scrolling on mobile
 *
 * @param table - Table element
 *
 * @return Element
 */
function renderTable(table) {
    return (Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: css.wrapper },
        Object(utilities__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: css.table }, table)));
}


/***/ }),

/***/ "./static/javascripts/utilities/config/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/utilities/config/index.ts ***!
  \******************************************************/
/*! exports provided: isConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isConfig", function() { return isConfig; });
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Ensure that the given value is a valid configuration
 *
 * We could use `jsonschema` or any other schema validation framework, but that
 * would just add more bloat to the bundle, so we'll keep it plain and simple.
 *
 * @param config - Configuration
 *
 * @return Test result
 */
function isConfig(config) {
    return typeof config === "object"
        && typeof config.base === "string"
        && typeof config.features === "object"
        && typeof config.search === "object";
}


/***/ }),

/***/ "./static/javascripts/utilities/index.ts":
/*!***********************************************!*\
  !*** ./static/javascripts/utilities/index.ts ***!
  \***********************************************/
/*! exports provided: isConfig, h, cache, translate, truncate, round, hash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./static/javascripts/utilities/config/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_0__["isConfig"]; });

/* harmony import */ var _jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx */ "./static/javascripts/utilities/jsx/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _jsx__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony import */ var _rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rxjs */ "./static/javascripts/utilities/rxjs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _rxjs__WEBPACK_IMPORTED_MODULE_2__["cache"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./static/javascripts/utilities/string/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return _string__WEBPACK_IMPORTED_MODULE_3__["translate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string__WEBPACK_IMPORTED_MODULE_3__["truncate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "round", function() { return _string__WEBPACK_IMPORTED_MODULE_3__["round"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return _string__WEBPACK_IMPORTED_MODULE_3__["hash"]; });

/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */






/***/ }),

/***/ "./static/javascripts/utilities/jsx/index.ts":
/*!***************************************************!*\
  !*** ./static/javascripts/utilities/jsx/index.ts ***!
  \***************************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */


/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */
/**
 * Create an element
 *
 * @param tagName - HTML or SVG tag
 *
 * @return Element
 */
function createElement(tagName) {
    switch (tagName) {
        /* SVG elements */
        case "svg":
        case "path":
            return document.createElementNS("http://www.w3.org/2000/svg", tagName);
        /* HTML elements */
        default:
            return document.createElement(tagName);
    }
}
/**
 * Set an attribute
 *
 * @param el - Element
 * @param name - Attribute name
 * @param value - Attribute value
 */
function setAttribute(el, name, value) {
    switch (name) {
        /* Attributes to be ignored */
        case "xmlns":
            break;
        /* Attributes of SVG elements */
        case "viewBox":
        case "d":
            if (typeof value !== "boolean")
                el.setAttributeNS(null, name, value);
            else if (value)
                el.setAttributeNS(null, name, "");
            break;
        /* Attributes of HTML elements */
        default:
            if (typeof value !== "boolean")
                el.setAttribute(name, value);
            else if (value)
                el.setAttribute(name, "");
    }
}
/**
 * Append a child node to an element
 *
 * @param el - Element
 * @param child - Child node(s)
 */
function appendChild(el, child) {
    var e_1, _a;
    /* Handle primitive types (including raw HTML) */
    if (typeof child === "string" || typeof child === "number") {
        el.innerHTML += child.toString();
        /* Handle nodes */
    }
    else if (child instanceof Node) {
        el.appendChild(child);
        /* Handle nested children */
    }
    else if (Array.isArray(child)) {
        try {
            for (var child_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(child), child_1_1 = child_1.next(); !child_1_1.done; child_1_1 = child_1.next()) {
                var node = child_1_1.value;
                appendChild(el, node);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (child_1_1 && !child_1_1.done && (_a = child_1.return)) _a.call(child_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * JSX factory
 *
 * @param tagName - HTML or SVG tag
 * @param attributes - HTML attributes
 * @param children - Child elements
 *
 * @return Element
 */
function h(tagName, attributes) {
    var e_2, _a, e_3, _b;
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var el = createElement(tagName);
    /* Set attributes, if any */
    if (attributes)
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(ramda__WEBPACK_IMPORTED_MODULE_1__["keys"])(attributes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var attr = _d.value;
                setAttribute(el, attr, attributes[attr]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    try {
        /* Append child nodes */
        for (var children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
            var child = children_1_1.value;
            appendChild(el, child);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (children_1_1 && !children_1_1.done && (_b = children_1.return)) _b.call(children_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    /* Return element */
    return el;
}


/***/ }),

/***/ "./static/javascripts/utilities/rxjs/index.ts":
/*!****************************************************!*\
  !*** ./static/javascripts/utilities/rxjs/index.ts ***!
  \****************************************************/
/*! exports provided: cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Cache the last value emitted by an observable in session storage
 *
 * If the key is not found in session storage, the factory is executed and the
 * latest value emitted will automatically be persisted to sessions storage.
 * Note that the values emitted by the returned observable must be serializable
 * as `JSON`, or data will be lost.
 *
 * @template T - Value type
 *
 * @param key - Cache key
 * @param factory - Observable factory
 *
 * @return Value observable
 */
function cache(key, factory) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
        var data = sessionStorage.getItem(key);
        if (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(JSON.parse(data));
            /* Retrieve value from observable factory and write to storage */
        }
        else {
            var value$ = factory();
            value$.subscribe(function (value) {
                try {
                    sessionStorage.setItem(key, JSON.stringify(value));
                }
                catch (err) {
                    /* Uncritical, just swallow */
                }
            });
            /* Return value */
            return value$;
        }
    });
}


/***/ }),

/***/ "./static/javascripts/utilities/string/index.ts":
/*!******************************************************!*\
  !*** ./static/javascripts/utilities/string/index.ts ***!
  \******************************************************/
/*! exports provided: translate, truncate, round, hash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony import */ var browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser */ "./static/javascripts/browser/index.ts");
/*
 * Copyright (c) 2016-2020 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */
/**
 * Translations
 */
var lang;
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Translate the given key
 *
 * @param key - Key to be translated
 * @param value - Value to be replaced
 *
 * @return Translation
 */
function translate(key, value) {
    if (typeof lang === "undefined") {
        var el = Object(browser__WEBPACK_IMPORTED_MODULE_0__["getElementOrThrow"])("#__lang");
        lang = JSON.parse(el.textContent);
    }
    if (typeof lang[key] === "undefined") {
        throw new ReferenceError("Invalid translation: " + key);
    }
    return typeof value !== "undefined"
        ? lang[key].replace("#", value)
        : lang[key];
}
/**
 * Truncate a string after the given number of characters
 *
 * This is not a very reasonable approach, since the summaries kind of suck.
 * It would be better to create something more intelligent, highlighting the
 * search occurrences and making a better summary out of it, but this note was
 * written three years ago, so who knows if we'll ever fix it.
 *
 * @param value - Value to be truncated
 * @param n - Number of characters
 *
 * @return Truncated value
 */
function truncate(value, n) {
    var i = n;
    if (value.length > i) {
        while (value[i] !== " " && --i > 0)
            ; // tslint:disable-line
        return value.substring(0, i) + "...";
    }
    return value;
}
/**
 * Round a number for display with source facts
 *
 * This is a reverse engineered version of GitHub's weird rounding algorithm
 * for stars, forks and all other numbers. While all numbers below `1,000` are
 * returned as-is, bigger numbers are converted to fixed numbers:
 *
 * - `1,049` => `1k`
 * - `1,050` => `1.1k`
 * - `1,949` => `1.9k`
 * - `1,950` => `2k`
 *
 * @param value - Original value
 *
 * @return Rounded value
 */
function round(value) {
    if (value > 999) {
        var digits = +((value - 950) % 1000 > 99);
        return ((value + 0.000001) / 1000).toFixed(digits) + "k";
    }
    else {
        return value.toString();
    }
}
/**
 * Simple hash function
 *
 * @see https://bit.ly/2wsVjJ4 - Original source
 *
 * @param value - Value to be hashed
 *
 * @return Hash as 32bit integer
 */
function hash(value) {
    var h = 0;
    for (var i = 0, len = value.length; i < len; i++) {
        h = ((h << 5) - h) + value.charCodeAt(i);
        h |= 0; // Convert to 32bit integer
    }
    return h;
}


/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvZG9jdW1lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvZWxlbWVudC9fL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9icm93c2VyL2VsZW1lbnQvZm9jdXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvZWxlbWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvYnJvd3Nlci9lbGVtZW50L29mZnNldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvYnJvd3Nlci9lbGVtZW50L3NlbGVjdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvYnJvd3Nlci9lbGVtZW50L3NpemUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIva2V5Ym9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvbG9jYXRpb24vXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvYnJvd3Nlci9sb2NhdGlvbi9iYXNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9icm93c2VyL2xvY2F0aW9uL2hhc2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvbG9jYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvbWVkaWEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvdG9nZ2xlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9icm93c2VyL3ZpZXdwb3J0L18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvdmlld3BvcnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvdmlld3BvcnQvb2Zmc2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9icm93c2VyL3ZpZXdwb3J0L3NpemUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2Jyb3dzZXIvd29ya2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyL18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci9yZWFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIvc2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL2hlcm8vXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9oZXJvL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL2hlcm8vcmVhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvaGVyby9zZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvbWFpbi9fL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL21haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvbWFpbi9yZWFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9tYWluL3NldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9zZWFyY2gvXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9zZWFyY2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoL3F1ZXJ5L18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoL3F1ZXJ5L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC9xdWVyeS9yZWFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9zZWFyY2gvcmVzZXQvXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9zZWFyY2gvcmVzZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoL3Jlc2V0L3JlYWN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC9yZXN1bHQvXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy9zZWFyY2gvcmVzdWx0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3NlYXJjaC9yZXN1bHQvcmVhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2VhcmNoL3Jlc3VsdC9zZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3NoYXJlZC9zaWRlYmFyL18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXIvcmVhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXIvc2V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3RhYnMvXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy90YWJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3RhYnMvcmVhY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvdGFicy9zZXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvdG9jL18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvdG9jL2FuY2hvci9fL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9jb21wb25lbnRzL3RvYy9hbmNob3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2NvbXBvbmVudHMvdG9jL2FuY2hvci9yZWFjdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy90b2MvYW5jaG9yL3NldC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvY29tcG9uZW50cy90b2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvY2xpcGJvYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvZGlhbG9nL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2ludGVncmF0aW9ucy9pbnN0YW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMva2V5Ym9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2ludGVncmF0aW9ucy9zZWFyY2gvXy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvaW50ZWdyYXRpb25zL3NlYXJjaC9kb2N1bWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvaW50ZWdyYXRpb25zL3NlYXJjaC9oaWdobGlnaHRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvaW50ZWdyYXRpb25zL3NlYXJjaC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvaW50ZWdyYXRpb25zL3NlYXJjaC90cmFuc2Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2ludGVncmF0aW9ucy9zZWFyY2gvd29ya2VyL18vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL2ludGVncmF0aW9ucy9zZWFyY2gvd29ya2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvc2VhcmNoL3dvcmtlci9tZXNzYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9wYXRjaGVzL2NvZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL3BhdGNoZXMvZGV0YWlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvcGF0Y2hlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvcGF0Y2hlcy9zY3JpcHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL3BhdGNoZXMvc2Nyb2xsZml4L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9wYXRjaGVzL3NvdXJjZS9naXRodWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL3BhdGNoZXMvc291cmNlL2dpdGxhYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvcGF0Y2hlcy9zb3VyY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL3BhdGNoZXMvdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL3RlbXBsYXRlcy9jbGlwYm9hcmQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy90ZW1wbGF0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2phdmFzY3JpcHRzL3RlbXBsYXRlcy9zZWFyY2gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy90ZW1wbGF0ZXMvc291cmNlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvdGVtcGxhdGVzL3RhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvdXRpbGl0aWVzL2NvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvdXRpbGl0aWVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy91dGlsaXRpZXMvanN4L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy91dGlsaXRpZXMvcnhqcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvdXRpbGl0aWVzL3N0cmluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVB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QUFJLENBQUMsS0FBYTtJQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoRCxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLElBQUksQ0FBQyxFQUFDLDJCQUEyQjtLQUNuQztJQUNELE9BQU8sQ0FBQztBQUNWLENBQUMiLCJmaWxlIjoic3RhdGljL2phdmFzY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzdGF0aWMvamF2YXNjcmlwdHMvYnVuZGxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zdGF0aWMvamF2YXNjcmlwdHMvaW5kZXgudHNcIixcInN0YXRpYy9qYXZhc2NyaXB0cy92ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QsIGZyb21FdmVudCB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggZG9jdW1lbnRcbiAqXG4gKiBEb2N1bWVudHMgbXVzdCBiZSBpbXBsZW1lbnRlZCBhcyBzdWJqZWN0cywgc28gYWxsIGRvd25zdHJlYW0gb2JzZXJ2YWJsZXMgYXJlXG4gKiBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgd2hlbiBhIG5ldyBkb2N1bWVudCBpcyBlbWl0dGVkLiBUaGlzIGVuYWJsZWQgZmVhdHVyZXNcbiAqIGxpa2UgaW5zdGFudCBsb2FkaW5nLlxuICpcbiAqIEByZXR1cm4gRG9jdW1lbnQgc3ViamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hEb2N1bWVudCgpOiBTdWJqZWN0PERvY3VtZW50PiB7XG4gIGNvbnN0IGRvY3VtZW50JCA9IG5ldyBSZXBsYXlTdWJqZWN0PERvY3VtZW50PigpXG4gIGZyb21FdmVudChkb2N1bWVudCwgXCJET01Db250ZW50TG9hZGVkXCIpXG4gICAgLnBpcGUoXG4gICAgICBtYXBUbyhkb2N1bWVudClcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKGRvY3VtZW50JClcblxuICAvKiBSZXR1cm4gZG9jdW1lbnQgKi9cbiAgcmV0dXJuIGRvY3VtZW50JFxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBSZXRyaWV2ZSBhbiBlbGVtZW50IG1hdGNoaW5nIHRoZSBxdWVyeSBzZWxlY3RvclxuICpcbiAqIEB0ZW1wbGF0ZSBUIC0gRWxlbWVudCB0eXBlXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yIC0gUXVlcnkgc2VsZWN0b3JcbiAqIEBwYXJhbSBub2RlIC0gTm9kZSBvZiByZWZlcmVuY2VcbiAqXG4gKiBAcmV0dXJuIEVsZW1lbnQgb3Igbm90aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KFxuICBzZWxlY3Rvcjogc3RyaW5nLCBub2RlOiBQYXJlbnROb2RlID0gZG9jdW1lbnRcbik6IFQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gbm9kZS5xdWVyeVNlbGVjdG9yPFQ+KHNlbGVjdG9yKSB8fCB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBhbiBlbGVtZW50IG1hdGNoaW5nIGEgcXVlcnkgc2VsZWN0b3Igb3IgdGhyb3cgYSByZWZlcmVuY2UgZXJyb3JcbiAqXG4gKiBAdGVtcGxhdGUgVCAtIEVsZW1lbnQgdHlwZVxuICpcbiAqIEBwYXJhbSBzZWxlY3RvciAtIFF1ZXJ5IHNlbGVjdG9yXG4gKiBAcGFyYW0gbm9kZSAtIE5vZGUgb2YgcmVmZXJlbmNlXG4gKlxuICogQHJldHVybiBFbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50T3JUaHJvdzxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KFxuICBzZWxlY3Rvcjogc3RyaW5nLCBub2RlOiBQYXJlbnROb2RlID0gZG9jdW1lbnRcbik6IFQge1xuICBjb25zdCBlbCA9IGdldEVsZW1lbnQ8VD4oc2VsZWN0b3IsIG5vZGUpXG4gIGlmICh0eXBlb2YgZWwgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFxuICAgICAgYE1pc3NpbmcgZWxlbWVudDogZXhwZWN0ZWQgXCIke3NlbGVjdG9yfVwiIHRvIGJlIHByZXNlbnRgXG4gICAgKVxuICByZXR1cm4gZWxcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgY3VycmVudGx5IGFjdGl2ZSBlbGVtZW50XG4gKlxuICogQHJldHVybiBFbGVtZW50IG9yIG5vdGhpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoKTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQge1xuICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgOiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZSBhbGwgZWxlbWVudHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5IHNlbGVjdG9yXG4gKlxuICogQHRlbXBsYXRlIFQgLSBFbGVtZW50IHR5cGVcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3IgLSBRdWVyeSBzZWxlY3RvclxuICogQHBhcmFtIG5vZGUgLSBOb2RlIG9mIHJlZmVyZW5jZVxuICpcbiAqIEByZXR1cm4gRWxlbWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oXG4gIHNlbGVjdG9yOiBzdHJpbmcsIG5vZGU6IFBhcmVudE5vZGUgPSBkb2N1bWVudFxuKTogVFtdIHtcbiAgcmV0dXJuIEFycmF5LmZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsPFQ+KHNlbGVjdG9yKSlcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50XG4gKlxuICogQHRlbXBsYXRlIFQgLSBUYWcgbmFtZSB0eXBlXG4gKlxuICogQHBhcmFtIHRhZ05hbWUgLSBUYWcgbmFtZVxuICpcbiAqIEByZXR1cm4gRWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudDxcbiAgVCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcFxuPih0YWdOYW1lOiBUKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGFuIGVsZW1lbnQgd2l0aCBhbm90aGVyIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gc291cmNlIC0gU291cmNlIGVsZW1lbnRcbiAqIEBwYXJhbSB0YXJnZXQgLSBUYXJnZXQgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoXG4gIHNvdXJjZTogSFRNTEVsZW1lbnQsIHRhcmdldDogTm9kZVxuKTogdm9pZCB7XG4gIHNvdXJjZS5yZXBsYWNlV2l0aCh0YXJnZXQpXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBnZXRBY3RpdmVFbGVtZW50IH0gZnJvbSBcIi4uL19cIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXQgZWxlbWVudCBmb2N1c1xuICpcbiAqIEBwYXJhbSBlbCAtIEVsZW1lbnRcbiAqIEBwYXJhbSB2YWx1ZSAtIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGZvY3VzZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRGb2N1cyhcbmVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlXG4pOiB2b2lkIHtcbiAgaWYgKHZhbHVlKVxuICAgIGVsLmZvY3VzKClcbiAgZWxzZVxuICAgIGVsLmJsdXIoKVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggZWxlbWVudCBmb2N1c1xuICpcbiAqIEBwYXJhbSBlbCAtIEVsZW1lbnRcbiAqXG4gKiBAcmV0dXJuIEVsZW1lbnQgZm9jdXMgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hFbGVtZW50Rm9jdXMoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gIHJldHVybiBtZXJnZShcbiAgICBmcm9tRXZlbnQ8Rm9jdXNFdmVudD4oZWwsIFwiZm9jdXNcIiksXG4gICAgZnJvbUV2ZW50PEZvY3VzRXZlbnQ+KGVsLCBcImJsdXJcIilcbiAgKVxuICAgIC5waXBlKFxuICAgICAgbWFwKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJmb2N1c1wiKSxcbiAgICAgIHN0YXJ0V2l0aChlbCA9PT0gZ2V0QWN0aXZlRWxlbWVudCgpKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9fXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZvY3VzXCJcbmV4cG9ydCAqIGZyb20gXCIuL29mZnNldFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWxlY3RcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2l6ZVwiXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEVsZW1lbnQgb2Zmc2V0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudE9mZnNldCB7XG4gIHg6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBIb3Jpem9udGFsIG9mZnNldCAqL1xuICB5OiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVmVydGljYWwgb2Zmc2V0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHJpZXZlIGVsZW1lbnQgb2Zmc2V0XG4gKlxuICogQHBhcmFtIGVsIC0gRWxlbWVudFxuICpcbiAqIEByZXR1cm4gRWxlbWVudCBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRPZmZzZXQoZWw6IEhUTUxFbGVtZW50KTogRWxlbWVudE9mZnNldCB7XG4gIHJldHVybiB7XG4gICAgeDogZWwuc2Nyb2xsTGVmdCxcbiAgICB5OiBlbC5zY3JvbGxUb3BcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggZWxlbWVudCBvZmZzZXRcbiAqXG4gKiBAcGFyYW0gZWwgLSBFbGVtZW50XG4gKlxuICogQHJldHVybiBFbGVtZW50IG9mZnNldCBvYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEVsZW1lbnRPZmZzZXQoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogT2JzZXJ2YWJsZTxFbGVtZW50T2Zmc2V0PiB7XG4gIHJldHVybiBtZXJnZShcbiAgICBmcm9tRXZlbnQoZWwsIFwic2Nyb2xsXCIpLFxuICAgIGZyb21FdmVudCh3aW5kb3csIFwicmVzaXplXCIpXG4gIClcbiAgICAucGlwZShcbiAgICAgIG1hcCgoKSA9PiBnZXRFbGVtZW50T2Zmc2V0KGVsKSksXG4gICAgICBzdGFydFdpdGgoZ2V0RWxlbWVudE9mZnNldChlbCkpLFxuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCBlbGVtZW50IHRleHQgc2VsZWN0aW9uXG4gKlxuICogQHBhcmFtIGVsIC0gRWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFNlbGVjdGlvbihcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiB2b2lkIHtcbiAgaWYgKGVsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudClcbiAgICBlbC5zZWxlY3QoKVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tIFwicmVzaXplLW9ic2VydmVyLXBvbHlmaWxsXCJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudFBhdHRlcm4gfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBzaGFyZVJlcGxheSwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBFbGVtZW50IG9mZnNldFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRTaXplIHtcbiAgd2lkdGg6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVsZW1lbnQgd2lkdGggKi9cbiAgaGVpZ2h0OiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgIC8qIEVsZW1lbnQgaGVpZ2h0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHJpZXZlIGVsZW1lbnQgc2l6ZVxuICpcbiAqIEBwYXJhbSBlbCAtIEVsZW1lbnRcbiAqXG4gKiBAcmV0dXJuIEVsZW1lbnQgc2l6ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudFNpemUoZWw6IEhUTUxFbGVtZW50KTogRWxlbWVudFNpemUge1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiAgZWwub2Zmc2V0V2lkdGgsXG4gICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHRcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggZWxlbWVudCBzaXplXG4gKlxuICogQHBhcmFtIGVsIC0gRWxlbWVudFxuICpcbiAqIEByZXR1cm4gRWxlbWVudCBzaXplIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoRWxlbWVudFNpemUoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogT2JzZXJ2YWJsZTxFbGVtZW50U2l6ZT4ge1xuICByZXR1cm4gZnJvbUV2ZW50UGF0dGVybjxFbGVtZW50U2l6ZT4obmV4dCA9PiB7XG4gICAgbmV3IFJlc2l6ZU9ic2VydmVyKChbeyBjb250ZW50UmVjdCB9XSkgPT4gbmV4dCh7XG4gICAgICB3aWR0aDogIE1hdGgucm91bmQoY29udGVudFJlY3Qud2lkdGgpLFxuICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKGNvbnRlbnRSZWN0LmhlaWdodClcbiAgICB9KSlcbiAgICAgIC5vYnNlcnZlKGVsKVxuICB9KVxuICAgIC5waXBlKFxuICAgICAgc3RhcnRXaXRoKGdldEVsZW1lbnRTaXplKGVsKSksXG4gICAgICBzaGFyZVJlcGxheSgxKVxuICAgIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vZG9jdW1lbnRcIlxuZXhwb3J0ICogZnJvbSBcIi4vZWxlbWVudFwiXG5leHBvcnQgKiBmcm9tIFwiLi9rZXlib2FyZFwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2NhdGlvblwiXG5leHBvcnQgKiBmcm9tIFwiLi9tZWRpYVwiXG5leHBvcnQgKiBmcm9tIFwiLi90b2dnbGVcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlld3BvcnRcIlxuZXhwb3J0ICogZnJvbSBcIi4vd29ya2VyXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNoYXJlIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBLZXlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXkge1xuICB0eXBlOiBzdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgLyogS2V5IHR5cGUgKi9cbiAgY2xhaW0oKTogdm9pZCAgICAgICAgICAgICAgICAgICAgICAgIC8qIEtleSBjbGFpbSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIGVsZW1lbnQgbWF5IHJlY2VpdmUga2V5Ym9hcmQgaW5wdXRcbiAqXG4gKiBAcGFyYW0gZWwgLSBFbGVtZW50XG4gKlxuICogQHJldHVybiBUZXN0IHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdXNjZXB0aWJsZVRvS2V5Ym9hcmQoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHN3aXRjaCAoZWwudGFnTmFtZSkge1xuXG4gICAgLyogRm9ybSBlbGVtZW50cyAqL1xuICAgIGNhc2UgXCJJTlBVVFwiOlxuICAgIGNhc2UgXCJTRUxFQ1RcIjpcbiAgICBjYXNlIFwiVEVYVEFSRUFcIjpcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAvKiBFdmVyeXRoaW5nIGVsc2UgKi9cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGVsLmlzQ29udGVudEVkaXRhYmxlXG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIGtleWJvYXJkXG4gKlxuICogQHJldHVybiBLZXlib2FyZCBvYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaEtleWJvYXJkKCk6IE9ic2VydmFibGU8S2V5PiB7XG4gIHJldHVybiBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4od2luZG93LCBcImtleWRvd25cIilcbiAgICAucGlwZShcbiAgICAgIGZpbHRlcihldiA9PiAhKGV2Lm1ldGFLZXkgfHwgZXYuY3RybEtleSkpLFxuICAgICAgbWFwKGV2ID0+ICh7XG4gICAgICAgIHR5cGU6IGV2LmtleSxcbiAgICAgICAgY2xhaW0oKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pKSxcbiAgICAgIHNoYXJlKClcbiAgICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUmV0cmlldmUgbG9jYXRpb25cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGEgYFVSTGAgb2JqZWN0IChhbmQgbm90IGBMb2NhdGlvbmApIGluIG9yZGVyIHRvXG4gKiBub3JtYWxpemUgdHlwaW5ncyBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uLiBGdXJ0aGVybW9yZSwgbG9jYXRpb25zIG5lZWQgdG8gYmVcbiAqIHRyYWNrZWQgd2l0aG91dCBzZXR0aW5nIHRoZW0gYW5kIGBMb2NhdGlvbmAgaXMgYSBzaW5nbGV0b24gd2hpY2ggcmVwcmVzZW50c1xuICogdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHJldHVybiBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uKCk6IFVSTCB7XG4gIHJldHVybiBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpXG59XG5cbi8qKlxuICogU2V0IGxvY2F0aW9uXG4gKlxuICogQHBhcmFtIHVybCAtIFVSTCB0byBjaGFuZ2UgdG9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2F0aW9uKHVybDogVVJMKTogdm9pZCB7XG4gIGxvY2F0aW9uLmhyZWYgPSB1cmwuaHJlZlxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIFVSTCBpcyBhIGxvY2FsIGxpbmsgb3IgYSBmaWxlIChleGNlcHQgYC5odG1sYClcbiAqXG4gKiBAcGFyYW0gdXJsIC0gVVJMIG9yIEhUTUwgYW5jaG9yIGVsZW1lbnRcbiAqIEBwYXJhbSByZWYgLSBSZWZlcmVuY2UgVVJMXG4gKlxuICogQHJldHVybiBUZXN0IHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbExvY2F0aW9uKFxuICB1cmw6IFVSTCB8IEhUTUxBbmNob3JFbGVtZW50LFxuICByZWY6IFVSTCB8IExvY2F0aW9uID0gbG9jYXRpb25cbik6IGJvb2xlYW4ge1xuICByZXR1cm4gdXJsLmhvc3QgPT09IHJlZi5ob3N0XG4gICAgICAmJiAvXig/OlxcL1tcXHctXSspKig/OlxcLz98XFwuaHRtbCkkL2kudGVzdCh1cmwucGF0aG5hbWUpXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIFVSTCBpcyBhbiBhbmNob3IgbGluayBvbiB0aGUgY3VycmVudCBwYWdlXG4gKlxuICogQHBhcmFtIHVybCAtIFVSTCBvciBIVE1MIGFuY2hvciBlbGVtZW50XG4gKiBAcGFyYW0gcmVmIC0gUmVmZXJlbmNlIFVSTFxuICpcbiAqIEByZXR1cm4gVGVzdCByZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQW5jaG9yTG9jYXRpb24oXG4gIHVybDogVVJMIHwgSFRNTEFuY2hvckVsZW1lbnQsXG4gIHJlZjogVVJMIHwgTG9jYXRpb24gPSBsb2NhdGlvblxuKTogYm9vbGVhbiB7XG4gIHJldHVybiB1cmwucGF0aG5hbWUgPT09IHJlZi5wYXRobmFtZVxuICAgICAgJiYgdXJsLmhhc2gubGVuZ3RoID4gMFxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggbG9jYXRpb25cbiAqXG4gKiBAcmV0dXJuIExvY2F0aW9uIHN1YmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoTG9jYXRpb24oKTogU3ViamVjdDxVUkw+IHtcbiAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3Q8VVJMPihnZXRMb2NhdGlvbigpKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgdGFrZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XG4gIGxvY2F0aW9uJDogT2JzZXJ2YWJsZTxVUkw+ICAgICAgICAgICAvKiBMb2NhdGlvbiBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBsb2NhdGlvbiBiYXNlXG4gKlxuICogQHJldHVybiBMb2NhdGlvbiBiYXNlIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoTG9jYXRpb25CYXNlKFxuICBiYXNlOiBzdHJpbmcsIHsgbG9jYXRpb24kIH06IFdhdGNoT3B0aW9uc1xuKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgcmV0dXJuIGxvY2F0aW9uJFxuICAgIC5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIG1hcCgoeyBocmVmIH0pID0+IG5ldyBVUkwoYmFzZSwgaHJlZilcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoL1xcLyQvLCBcIlwiKVxuICAgICAgKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmUsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiYnJvd3NlclwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHJpZXZlIGxvY2F0aW9uIGhhc2hcbiAqXG4gKiBAcmV0dXJuIExvY2F0aW9uIGhhc2hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uSGFzaCgpOiBzdHJpbmcge1xuICByZXR1cm4gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSlcbn1cblxuLyoqXG4gKiBTZXQgbG9jYXRpb24gaGFzaFxuICpcbiAqIFNldHRpbmcgYSBuZXcgZnJhZ21lbnQgaWRlbnRpZmllciB2aWEgYGxvY2F0aW9uLmhhc2hgIHdpbGwgaGF2ZSBubyBlZmZlY3RcbiAqIGlmIHRoZSB2YWx1ZSBkb2Vzbid0IGNoYW5nZS4gV2hlbiBhIG5ldyBmcmFnbWVudCBpZGVudGlmaWVyIGlzIHNldCwgd2Ugd2FudFxuICogdGhlIGJyb3dzZXIgdG8gdGFyZ2V0IHRoZSByZXNwZWN0aXZlIGVsZW1lbnQgYXQgYWxsIHRpbWVzLCB3aGljaCBpcyB3aHkgd2VcbiAqIHVzZSB0aGlzIGRpcnR5IGxpdHRsZSB0cmljay5cbiAqXG4gKiBAcGFyYW0gaGFzaCAtIExvY2F0aW9uIGhhc2hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2F0aW9uSGFzaChoYXNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KFwiYVwiKVxuICBlbC5ocmVmID0gaGFzaFxuICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXYgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCkpXG4gIGVsLmNsaWNrKClcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIGxvY2F0aW9uIGhhc2hcbiAqXG4gKiBAcmV0dXJuIExvY2F0aW9uIGhhc2ggb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hMb2NhdGlvbkhhc2goKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgcmV0dXJuIGZyb21FdmVudDxIYXNoQ2hhbmdlRXZlbnQ+KHdpbmRvdywgXCJoYXNoY2hhbmdlXCIpXG4gICAgLnBpcGUoXG4gICAgICBtYXAoZ2V0TG9jYXRpb25IYXNoKSxcbiAgICAgIHN0YXJ0V2l0aChnZXRMb2NhdGlvbkhhc2goKSksXG4gICAgICBmaWx0ZXIoaGFzaCA9PiBoYXNoLmxlbmd0aCA+IDApLFxuICAgICAgc2hhcmUoKVxuICAgIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9iYXNlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hhc2hcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnRQYXR0ZXJuIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgc2hhcmVSZXBsYXksIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIG1lZGlhIHF1ZXJ5XG4gKlxuICogQHBhcmFtIHF1ZXJ5IC0gTWVkaWEgcXVlcnlcbiAqXG4gKiBAcmV0dXJuIE1lZGlhIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoTWVkaWEocXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICBjb25zdCBtZWRpYSA9IG1hdGNoTWVkaWEocXVlcnkpXG4gIHJldHVybiBmcm9tRXZlbnRQYXR0ZXJuPGJvb2xlYW4+KG5leHQgPT5cbiAgICBtZWRpYS5hZGRMaXN0ZW5lcigoKSA9PiBuZXh0KG1lZGlhLm1hdGNoZXMpKVxuICApXG4gICAgLnBpcGUoXG4gICAgICBzdGFydFdpdGgobWVkaWEubWF0Y2hlcyksXG4gICAgICBzaGFyZVJlcGxheSgxKVxuICAgIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBnZXRFbGVtZW50T3JUaHJvdyB9IGZyb20gXCIuLi9lbGVtZW50XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUb2dnbGVcbiAqL1xuZXhwb3J0IHR5cGUgVG9nZ2xlID1cbiAgfCBcImRyYXdlclwiICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVG9nZ2xlIGZvciBkcmF3ZXIgKi9cbiAgfCBcInNlYXJjaFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVG9nZ2xlIGZvciBzZWFyY2ggKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFRvZ2dsZSBtYXBcbiAqL1xuY29uc3QgdG9nZ2xlczogUmVjb3JkPFRvZ2dsZSwgSFRNTElucHV0RWxlbWVudD4gPSB7XG4gIGRyYXdlcjogZ2V0RWxlbWVudE9yVGhyb3coYFtkYXRhLW1kLXRvZ2dsZT1kcmF3ZXJdYCksXG4gIHNlYXJjaDogZ2V0RWxlbWVudE9yVGhyb3coYFtkYXRhLW1kLXRvZ2dsZT1zZWFyY2hdYClcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHZhbHVlIG9mIGEgdG9nZ2xlXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUb2dnbGVcbiAqXG4gKiBAcmV0dXJuIFRvZ2dsZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9nZ2xlKG5hbWU6IFRvZ2dsZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdG9nZ2xlc1tuYW1lXS5jaGVja2VkXG59XG5cbi8qKlxuICogU2V0IHRvZ2dsZVxuICpcbiAqIFNpbXVsYXRpbmcgYSBjbGljayBldmVudCBzZWVtcyB0byBiZSB0aGUgbW9zdCBjcm9zcy1icm93c2VyIGNvbXBhdGlibGUgd2F5XG4gKiBvZiBjaGFuZ2luZyB0aGUgdmFsdWUgd2hpbGUgYWxzbyBlbWl0dGluZyBhIGBjaGFuZ2VgIGV2ZW50LiBCZWZvcmUsIE1hdGVyaWFsXG4gKiB1c2VkIGBDdXN0b21FdmVudGAgdG8gcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2UgdGhlIHZhbHVlIG9mIGEgdG9nZ2xlLCBidXQgdGhpc1xuICogaXMgYSBtdWNoIHNpbXBsZXIgYW5kIGNsZWFuZXIgc29sdXRpb24gd2hpY2ggZG9lc24ndCByZXF1aXJlIGEgcG9seWZpbGwuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUb2dnbGVcbiAqIEBwYXJhbSB2YWx1ZSAtIFRvZ2dsZSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9nZ2xlKG5hbWU6IFRvZ2dsZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgaWYgKHRvZ2dsZXNbbmFtZV0uY2hlY2tlZCAhPT0gdmFsdWUpXG4gICAgdG9nZ2xlc1tuYW1lXS5jbGljaygpXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCB0b2dnbGVcbiAqXG4gKiBAcGFyYW0gbmFtZSAtIFRvZ2dsZVxuICpcbiAqIEByZXR1cm4gVG9nZ2xlIHZhbHVlIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoVG9nZ2xlKG5hbWU6IFRvZ2dsZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICBjb25zdCBlbCA9IHRvZ2dsZXNbbmFtZV1cbiAgcmV0dXJuIGZyb21FdmVudChlbCwgXCJjaGFuZ2VcIilcbiAgICAucGlwZShcbiAgICAgIG1hcCgoKSA9PiBlbC5jaGVja2VkKSxcbiAgICAgIHN0YXJ0V2l0aChlbC5jaGVja2VkKVxuICAgIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5XG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJjb21wb25lbnRzXCJcblxuaW1wb3J0IHtcbiAgVmlld3BvcnRPZmZzZXQsXG4gIHdhdGNoVmlld3BvcnRPZmZzZXRcbn0gZnJvbSBcIi4uL29mZnNldFwiXG5pbXBvcnQge1xuICBWaWV3cG9ydFNpemUsXG4gIHdhdGNoVmlld3BvcnRTaXplXG59IGZyb20gXCIuLi9zaXplXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBWaWV3cG9ydFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdwb3J0IHtcbiAgb2Zmc2V0OiBWaWV3cG9ydE9mZnNldCAgICAgICAgICAgICAgIC8qIFZpZXdwb3J0IG9mZnNldCAqL1xuICBzaXplOiBWaWV3cG9ydFNpemUgICAgICAgICAgICAgICAgICAgLyogVmlld3BvcnQgc2l6ZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBhdCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBXYXRjaEF0T3B0aW9ucyB7XG4gIGhlYWRlciQ6IE9ic2VydmFibGU8SGVhZGVyPiAgICAgICAgICAvKiBIZWFkZXIgb2JzZXJ2YWJsZSAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCB2aWV3cG9ydFxuICpcbiAqIEByZXR1cm4gVmlld3BvcnQgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hWaWV3cG9ydCgpOiBPYnNlcnZhYmxlPFZpZXdwb3J0PiB7XG4gIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICB3YXRjaFZpZXdwb3J0T2Zmc2V0KCksXG4gICAgd2F0Y2hWaWV3cG9ydFNpemUoKVxuICBdKVxuICAgIC5waXBlKFxuICAgICAgbWFwKChbb2Zmc2V0LCBzaXplXSkgPT4gKHsgb2Zmc2V0LCBzaXplIH0pKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxufVxuXG4vKipcbiAqIFdhdGNoIHZpZXdwb3J0IHJlbGF0aXZlIHRvIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gZWwgLSBFbGVtZW50XG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIFZpZXdwb3J0IG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoVmlld3BvcnRBdChcbiAgZWw6IEhUTUxFbGVtZW50LCB7IGhlYWRlciQsIHZpZXdwb3J0JCB9OiBXYXRjaEF0T3B0aW9uc1xuKTogT2JzZXJ2YWJsZTxWaWV3cG9ydD4ge1xuICBjb25zdCBzaXplJCA9IHZpZXdwb3J0JFxuICAgIC5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQoXCJzaXplXCIpXG4gICAgKVxuXG4gIC8qIENvbXB1dGUgZWxlbWVudCBvZmZzZXQgKi9cbiAgY29uc3Qgb2Zmc2V0JCA9IGNvbWJpbmVMYXRlc3QoW3NpemUkLCBoZWFkZXIkXSlcbiAgICAucGlwZShcbiAgICAgIG1hcCgoKTogVmlld3BvcnRPZmZzZXQgPT4gKHtcbiAgICAgICAgeDogZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgeTogZWwub2Zmc2V0VG9wXG4gICAgICB9KSlcbiAgICApXG5cbiAgLyogQ29tcHV0ZSByZWxhdGl2ZSB2aWV3cG9ydCwgcmV0dXJuIGhvdCBvYnNlcnZhYmxlICovXG4gIHJldHVybiBjb21iaW5lTGF0ZXN0KFtoZWFkZXIkLCB2aWV3cG9ydCQsIG9mZnNldCRdKVxuICAgIC5waXBlKFxuICAgICAgbWFwKChbeyBoZWlnaHQgfSwgeyBvZmZzZXQsIHNpemUgfSwgeyB4LCB5IH1dKSA9PiAoe1xuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICB4OiBvZmZzZXQueCAtIHgsXG4gICAgICAgICAgeTogb2Zmc2V0LnkgLSB5ICsgaGVpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgIHNpemVcbiAgICAgIH0pKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9fXCJcbmV4cG9ydCAqIGZyb20gXCIuL29mZnNldFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaXplXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBWaWV3cG9ydCBvZmZzZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3cG9ydE9mZnNldCB7XG4gIHg6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBIb3Jpem9udGFsIG9mZnNldCAqL1xuICB5OiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVmVydGljYWwgb2Zmc2V0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHZpZXdwb3J0IG9mZnNldFxuICpcbiAqIE9uIGlPUyBTYWZhcmksIHZpZXdwb3J0IG9mZnNldCBjYW4gYmUgbmVnYXRpdmUgZHVlIHRvIG92ZXJmbG93IHNjcm9sbGluZy5cbiAqIEFzIHRoaXMgbWF5IGluZHVjZSBzdHJhbmdlIGJlaGF2aW9ycyBkb3duc3RyZWFtLCB3ZSdsbCBqdXN0IGxpbWl0IGl0IHRvIDAuXG4gKlxuICogQHJldHVybiBWaWV3cG9ydCBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0KCk6IFZpZXdwb3J0T2Zmc2V0IHtcbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLm1heCgwLCBwYWdlWE9mZnNldCksXG4gICAgeTogTWF0aC5tYXgoMCwgcGFnZVlPZmZzZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdmlld3BvcnQgb2Zmc2V0XG4gKlxuICogQHBhcmFtIG9mZnNldCAtIFZpZXdwb3J0IG9mZnNldFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Vmlld3BvcnRPZmZzZXQoXG4gIHsgeCwgeSB9OiBQYXJ0aWFsPFZpZXdwb3J0T2Zmc2V0PlxuKTogdm9pZCB7XG4gIHdpbmRvdy5zY3JvbGxUbyh4IHx8IDAsIHkgfHwgMClcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIHZpZXdwb3J0IG9mZnNldFxuICpcbiAqIEByZXR1cm4gVmlld3BvcnQgb2Zmc2V0IG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoVmlld3BvcnRPZmZzZXQoKTogT2JzZXJ2YWJsZTxWaWV3cG9ydE9mZnNldD4ge1xuICByZXR1cm4gbWVyZ2UoXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgXCJzY3JvbGxcIiwgeyBwYXNzaXZlOiB0cnVlIH0pLFxuICAgIGZyb21FdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICApXG4gICAgLnBpcGUoXG4gICAgICBtYXAoZ2V0Vmlld3BvcnRPZmZzZXQpLFxuICAgICAgc3RhcnRXaXRoKGdldFZpZXdwb3J0T2Zmc2V0KCkpXG4gICAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogVmlld3BvcnQgc2l6ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdwb3J0U2l6ZSB7XG4gIHdpZHRoOiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAvKiBWaWV3cG9ydCB3aWR0aCAqL1xuICBoZWlnaHQ6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgLyogVmlld3BvcnQgaGVpZ2h0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJldHJpZXZlIHZpZXdwb3J0IHNpemVcbiAqXG4gKiBAcmV0dXJuIFZpZXdwb3J0IHNpemVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb3J0U2l6ZSgpOiBWaWV3cG9ydFNpemUge1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiAgaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IGlubmVySGVpZ2h0XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIHZpZXdwb3J0IHNpemVcbiAqXG4gKiBAcmV0dXJuIFZpZXdwb3J0IHNpemUgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hWaWV3cG9ydFNpemUoKTogT2JzZXJ2YWJsZTxWaWV3cG9ydFNpemU+IHtcbiAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgIC5waXBlKFxuICAgICAgbWFwKGdldFZpZXdwb3J0U2l6ZSksXG4gICAgICBzdGFydFdpdGgoZ2V0Vmlld3BvcnRTaXplKCkpXG4gICAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tRXZlbnRQYXR0ZXJuIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHtcbiAgcGx1Y2ssXG4gIHNoYXJlLFxuICBzd2l0Y2hNYXBUbyxcbiAgdGFwLFxuICB0aHJvdHRsZVxufSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdvcmtlciBtZXNzYWdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgV29ya2VyTWVzc2FnZSB7XG4gIHR5cGU6IHVua25vd24gICAgICAgICAgICAgICAgICAgICAgICAvKiBNZXNzYWdlIHR5cGUgKi9cbiAgZGF0YT86IHVua25vd24gICAgICAgICAgICAgICAgICAgICAgIC8qIE1lc3NhZ2UgZGF0YSAqL1xufVxuXG4vKipcbiAqIFdvcmtlciBoYW5kbGVyXG4gKlxuICogQHRlbXBsYXRlIFQgLSBNZXNzYWdlIHR5cGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXb3JrZXJIYW5kbGVyPFxuICBUIGV4dGVuZHMgV29ya2VyTWVzc2FnZVxuPiB7XG4gIHR4JDogU3ViamVjdDxUPiAgICAgICAgICAgICAgICAgICAgICAvKiBNZXNzYWdlIHRyYW5zbWlzc2lvbiBzdWJqZWN0ICovXG4gIHJ4JDogT2JzZXJ2YWJsZTxUPiAgICAgICAgICAgICAgICAgICAvKiBNZXNzYWdlIHJlY2VpdmUgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBvcHRpb25zXG4gKlxuICogQHRlbXBsYXRlIFQgLSBXb3JrZXIgbWVzc2FnZSB0eXBlXG4gKi9cbmludGVyZmFjZSBXYXRjaE9wdGlvbnM8VCBleHRlbmRzIFdvcmtlck1lc3NhZ2U+IHtcbiAgdHgkOiBPYnNlcnZhYmxlPFQ+ICAgICAgICAgICAgICAgICAgIC8qIE1lc3NhZ2UgdHJhbnNtaXNzaW9uIG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggYSB3ZWIgd29ya2VyXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIHNlbmQgYWxsIHZhbHVlcyBlbWl0dGVkIGJ5IHRoZVxuICogbWVzc2FnZSBvYnNlcnZhYmxlIHRvIHRoZSB3ZWIgd29ya2VyLiBXZWIgd29ya2VyIGNvbW11bmljYXRpb24gaXMgZXhwZWN0ZWRcbiAqIHRvIGJlIGJpZGlyZWN0aW9uYWwgKHJlcXVlc3QtcmVzcG9uc2UpIGFuZCBzeW5jaHJvbm91cy4gTWVzc2FnZXMgdGhhdCBhcmVcbiAqIGVtaXR0ZWQgZHVyaW5nIGEgcGVuZGluZyByZXF1ZXN0IGFyZSB0aHJvdHRsZWQsIHRoZSBsYXN0IG9uZSBpcyBlbWl0dGVkLlxuICpcbiAqIEBwYXJhbSB3b3JrZXIgLSBXZWIgd29ya2VyXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIFdvcmtlciBtZXNzYWdlIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoV29ya2VyPFQgZXh0ZW5kcyBXb3JrZXJNZXNzYWdlPihcbiAgd29ya2VyOiBXb3JrZXIsIHsgdHgkIH06IFdhdGNoT3B0aW9uczxUPlxuKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgLyogSW50ZXJjZXB0IG1lc3NhZ2VzIGZyb20gd29ya2VyLWxpa2Ugb2JqZWN0cyAqL1xuICBjb25zdCByeCQgPSBmcm9tRXZlbnRQYXR0ZXJuPE1lc3NhZ2VFdmVudD4obmV4dCA9PlxuICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBuZXh0KVxuICApXG4gICAgLnBpcGU8VD4oXG4gICAgICBwbHVjayhcImRhdGFcIilcbiAgICApXG5cbiAgLyogU2VuZCBhbmQgcmVjZWl2ZSBtZXNzYWdlcywgcmV0dXJuIGhvdCBvYnNlcnZhYmxlICovXG4gIHJldHVybiB0eCRcbiAgICAucGlwZShcbiAgICAgIHRocm90dGxlKCgpID0+IHJ4JCwgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZSB9KSxcbiAgICAgIHRhcChtZXNzYWdlID0+IHdvcmtlci5wb3N0TWVzc2FnZShtZXNzYWdlKSksXG4gICAgICBzd2l0Y2hNYXBUbyhyeCQpLFxuICAgICAgc2hhcmUoKVxuICAgIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc2NhbixcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcFxufSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBnZXRFbGVtZW50LCByZXBsYWNlRWxlbWVudCB9IGZyb20gXCJicm93c2VyXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBDb21wb25lbnRcbiAqL1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50ID1cbiAgfCBcImFubm91bmNlXCIgICAgICAgICAgICAgICAgICAgICAgICAgLyogQW5ub3VuY2VtZW50IGJhciAqL1xuICB8IFwiY29udGFpbmVyXCIgICAgICAgICAgICAgICAgICAgICAgICAvKiBDb250YWluZXIgKi9cbiAgfCBcImhlYWRlclwiICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogSGVhZGVyICovXG4gIHwgXCJoZWFkZXItdGl0bGVcIiAgICAgICAgICAgICAgICAgICAgIC8qIEhlYWRlciB0aXRsZSAqL1xuICB8IFwiaGVyb1wiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBIZXJvICovXG4gIHwgXCJtYWluXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIE1haW4gYXJlYSAqL1xuICB8IFwibmF2aWdhdGlvblwiICAgICAgICAgICAgICAgICAgICAgICAvKiBOYXZpZ2F0aW9uICovXG4gIHwgXCJzZWFyY2hcIiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCAqL1xuICB8IFwic2VhcmNoLXF1ZXJ5XCIgICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggaW5wdXQgKi9cbiAgfCBcInNlYXJjaC1yZXNldFwiICAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIHJlc2V0ICovXG4gIHwgXCJzZWFyY2gtcmVzdWx0XCIgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCByZXN1bHRzICovXG4gIHwgXCJza2lwXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFNraXAgbGluayAqL1xuICB8IFwidGFic1wiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBUYWJzICovXG4gIHwgXCJ0b2NcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRhYmxlIG9mIGNvbnRlbnRzICovXG5cbi8qKlxuICogQ29tcG9uZW50IG1hcFxuICovXG5leHBvcnQgdHlwZSBDb21wb25lbnRNYXAgPSB7XG4gIFtQIGluIENvbXBvbmVudF0/OiBIVE1MRWxlbWVudFxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBXYXRjaE9wdGlvbnMge1xuICBkb2N1bWVudCQ6IE9ic2VydmFibGU8RG9jdW1lbnQ+ICAgICAgLyogRG9jdW1lbnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ29tcG9uZW50IG1hcCBvYnNlcnZhYmxlXG4gKi9cbmxldCBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb21wb25lbnRNYXA+XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCB1cCBiaW5kaW5ncyB0byBjb21wb25lbnRzIHdpdGggZ2l2ZW4gbmFtZXNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgbWFpbnRhaW4gYmluZGluZ3MgdG8gdGhlIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgdGhlIGdpdmVuXG4gKiBuYW1lcyBpbi1iZXR3ZWVuIGRvY3VtZW50IHN3aXRjaGVzIGFuZCB1cGRhdGUgdGhlIGVsZW1lbnRzIGluLXBsYWNlLlxuICpcbiAqIEBwYXJhbSBuYW1lcyAtIENvbXBvbmVudCBuYW1lc1xuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cENvbXBvbmVudHMoXG4gIG5hbWVzOiBDb21wb25lbnRbXSwgeyBkb2N1bWVudCQgfTogV2F0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgY29tcG9uZW50cyQgPSBkb2N1bWVudCRcbiAgICAucGlwZShcblxuICAgICAgLyogQnVpbGQgY29tcG9uZW50IG1hcCAqL1xuICAgICAgbWFwKGRvY3VtZW50ID0+IG5hbWVzLnJlZHVjZTxDb21wb25lbnRNYXA+KChjb21wb25lbnRzLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gZ2V0RWxlbWVudChgW2RhdGEtbWQtY29tcG9uZW50PSR7bmFtZX1dYCwgZG9jdW1lbnQpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY29tcG9uZW50cyxcbiAgICAgICAgICAuLi50eXBlb2YgZWwgIT09IFwidW5kZWZpbmVkXCIgPyB7IFtuYW1lXTogZWwgfSA6IHt9XG4gICAgICAgIH1cbiAgICAgIH0sIHt9KSksXG5cbiAgICAgIC8qIFJlLWNvbXB1dGUgY29tcG9uZW50IG1hcCBvbiBkb2N1bWVudCBzd2l0Y2ggKi9cbiAgICAgIHNjYW4oKHByZXYsIG5leHQpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG5cbiAgICAgICAgICAgIC8qIFRvcC1sZXZlbCBjb21wb25lbnRzOiB1cGRhdGUgKi9cbiAgICAgICAgICAgIGNhc2UgXCJhbm5vdW5jZVwiOlxuICAgICAgICAgICAgY2FzZSBcImhlYWRlci10aXRsZVwiOlxuICAgICAgICAgICAgY2FzZSBcImNvbnRhaW5lclwiOlxuICAgICAgICAgICAgY2FzZSBcInNraXBcIjpcbiAgICAgICAgICAgICAgaWYgKG5hbWUgaW4gcHJldiAmJiB0eXBlb2YgcHJldltuYW1lXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50KHByZXZbbmFtZV0hLCBuZXh0W25hbWVdISlcbiAgICAgICAgICAgICAgICBwcmV2W25hbWVdID0gbmV4dFtuYW1lXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICAgIC8qIEFsbCBvdGhlciBjb21wb25lbnRzOiByZWJpbmQgKi9cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dFtuYW1lXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICBwcmV2W25hbWVdID0gZ2V0RWxlbWVudChgW2RhdGEtbWQtY29tcG9uZW50PSR7bmFtZX1dYClcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcmV2W25hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2XG4gICAgICB9KSxcblxuICAgICAgLyogQ29udmVydCB0byBob3Qgb2JzZXJ2YWJsZSAqL1xuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApXG59XG5cbi8qKlxuICogUmV0cmlldmUgYSBjb21wb25lbnRcbiAqXG4gKiBUaGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSB3aWxsIG9ubHkgcmUtZW1pdCBpZiB0aGUgZWxlbWVudCBjaGFuZ2VkLCBpLmUuIGlmXG4gKiBpdCB3YXMgcmVwbGFjZWQgZnJvbSBhIGRvY3VtZW50IHdoaWNoIHdhcyBzd2l0Y2hlZCB0by5cbiAqXG4gKiBAdGVtcGxhdGUgVCAtIEVsZW1lbnQgdHlwZVxuICpcbiAqIEBwYXJhbSBuYW1lIC0gQ29tcG9uZW50IG5hbWVcbiAqXG4gKiBAcmV0dXJuIENvbXBvbmVudCBvYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxJbnB1dEVsZW1lbnQ+KFxuICBuYW1lOiBcInNlYXJjaC1xdWVyeVwiXG4pOiBPYnNlcnZhYmxlPFQ+XG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tcG9uZW50PFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oXG4gIG5hbWU6IENvbXBvbmVudFxuKTogT2JzZXJ2YWJsZTxUPlxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbXBvbmVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KFxuICBuYW1lOiBDb21wb25lbnRcbik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gY29tcG9uZW50cyRcbiAgICAucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb21wb25lbnRzID0+IChcbiAgICAgICAgdHlwZW9mIGNvbXBvbmVudHNbbmFtZV0gIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICA/IG9mKGNvbXBvbmVudHNbbmFtZV0gYXMgVClcbiAgICAgICAgICA6IEVNUFRZXG4gICAgICApKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24sIGNvbWJpbmVMYXRlc3QsIHBpcGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBzdGFydFdpdGgsXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb21cbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHtcbiAgVmlld3BvcnQsXG4gIGdldEVsZW1lbnQsXG4gIHdhdGNoVmlld3BvcnRBdFxufSBmcm9tIFwiYnJvd3NlclwiXG5cbmltcG9ydCB7IHVzZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9fXCJcbmltcG9ydCB7XG4gIGFwcGx5SGVhZGVyVHlwZSxcbiAgd2F0Y2hIZWFkZXJcbn0gZnJvbSBcIi4uL3JlYWN0XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBIZWFkZXIgdHlwZVxuICovXG5leHBvcnQgdHlwZSBIZWFkZXJUeXBlID1cbiAgfCBcInNpdGVcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogSGVhZGVyIHNob3dzIHNpdGUgdGl0bGUgKi9cbiAgfCBcInBhZ2VcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogSGVhZGVyIHNob3dzIHBhZ2UgdGl0bGUgKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEhlYWRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlciB7XG4gIHR5cGU6IEhlYWRlclR5cGUgICAgICAgICAgICAgICAgICAgICAvKiBIZWFkZXIgdHlwZSAqL1xuICBzdGlja3k6IGJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgLyogSGVhZGVyIHN0aWNreW5lc3MgKi9cbiAgaGVpZ2h0OiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgIC8qIEhlYWRlciB2aXNpYmxlIGhlaWdodCAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBNb3VudE9wdGlvbnMge1xuICBkb2N1bWVudCQ6IE9ic2VydmFibGU8RG9jdW1lbnQ+ICAgICAgLyogRG9jdW1lbnQgb2JzZXJ2YWJsZSAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBoZWFkZXIgZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50SGVhZGVyKFxuICB7IGRvY3VtZW50JCwgdmlld3BvcnQkIH06IE1vdW50T3B0aW9uc1xuKTogT3BlcmF0b3JGdW5jdGlvbjxIVE1MRWxlbWVudCwgSGVhZGVyPiB7XG4gIHJldHVybiBwaXBlKFxuICAgIHN3aXRjaE1hcChlbCA9PiB7XG4gICAgICBjb25zdCBoZWFkZXIkID0gd2F0Y2hIZWFkZXIoZWwsIHsgZG9jdW1lbnQkIH0pXG5cbiAgICAgIC8qIENvbXB1dGUgd2hldGhlciB0aGUgaGVhZGVyIHNob3VsZCBzd2l0Y2ggdG8gcGFnZSBoZWFkZXIgKi9cbiAgICAgIGNvbnN0IHR5cGUkID0gdXNlQ29tcG9uZW50KFwibWFpblwiKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAobWFpbiA9PiBnZXRFbGVtZW50KFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiLCBtYWluKSEpLFxuICAgICAgICAgIGZpbHRlcihoeCA9PiB0eXBlb2YgaHggIT09IFwidW5kZWZpbmVkXCIpLFxuICAgICAgICAgIHdpdGhMYXRlc3RGcm9tKHVzZUNvbXBvbmVudChcImhlYWRlci10aXRsZVwiKSksXG4gICAgICAgICAgc3dpdGNoTWFwKChbaHgsIHRpdGxlXSkgPT4gd2F0Y2hWaWV3cG9ydEF0KGh4LCB7IGhlYWRlciQsIHZpZXdwb3J0JCB9KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgoeyBvZmZzZXQ6IHsgeSB9IH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geSA+PSBoeC5vZmZzZXRIZWlnaHQgPyBcInBhZ2VcIiA6IFwic2l0ZVwiXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgICBhcHBseUhlYWRlclR5cGUodGl0bGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzdGFydFdpdGg8SGVhZGVyVHlwZT4oXCJzaXRlXCIpXG4gICAgICAgIClcblxuICAgICAgLyogQ29tYmluZSBpbnRvIHNpbmdsZSBvYnNlcnZhYmxlICovXG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbaGVhZGVyJCwgdHlwZSRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKFtoZWFkZXIsIHR5cGVdKTogSGVhZGVyID0+ICh7IHR5cGUsIC4uLmhlYWRlciB9KSksXG4gICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgKVxuICAgIH0pXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFjdFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXRcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1xuICBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sXG4gIE9ic2VydmFibGUsXG4gIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLFxuICBvZixcbiAgcGlwZVxufSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmluYWxpemUsXG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YXBcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgd2F0Y2hFbGVtZW50U2l6ZSB9IGZyb20gXCJicm93c2VyXCJcblxuaW1wb3J0IHsgSGVhZGVyLCBIZWFkZXJUeXBlIH0gZnJvbSBcIi4uL19cIlxuaW1wb3J0IHtcbiAgcmVzZXRIZWFkZXJUaXRsZUFjdGl2ZSxcbiAgc2V0SGVhZGVyVGl0bGVBY3RpdmVcbn0gZnJvbSBcIi4uL3NldFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XG4gIGRvY3VtZW50JDogT2JzZXJ2YWJsZTxEb2N1bWVudD4gICAgICAvKiBEb2N1bWVudCBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIGhlYWRlclxuICpcbiAqIEBwYXJhbSBlbCAtIEhlYWRlciBlbGVtZW50XG4gKlxuICogQHJldHVybiBIZWFkZXIgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hIZWFkZXIoXG4gIGVsOiBIVE1MRWxlbWVudCwgeyBkb2N1bWVudCQgfTogV2F0Y2hPcHRpb25zXG4pOiBPYnNlcnZhYmxlPE9taXQ8SGVhZGVyLCBcInR5cGVcIj4+IHtcbiAgcmV0dXJuIGRvY3VtZW50JFxuICAgIC5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbClcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBcInN0aWNreVwiLCAgICAgICAgICAgICAgICAgICAgLyogTW9kZXJuIGJyb3dzZXJzICovXG4gICAgICAgICAgXCItd2Via2l0LXN0aWNreVwiICAgICAgICAgICAgIC8qIFNhZmFyaSAqL1xuICAgICAgICBdLmluY2x1ZGVzKHN0eWxlcy5wb3NpdGlvbilcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHN3aXRjaE1hcChzdGlja3kgPT4ge1xuICAgICAgICBpZiAoc3RpY2t5KSB7XG4gICAgICAgICAgcmV0dXJuIHdhdGNoRWxlbWVudFNpemUoZWwpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKCh7IGhlaWdodCB9KSA9PiAoe1xuICAgICAgICAgICAgICAgIHN0aWNreTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgIHN0aWNreTogZmFsc2UsXG4gICAgICAgICAgICBoZWlnaHQ6IDBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQXBwbHkgaGVhZGVyIHRpdGxlIHR5cGVcbiAqXG4gKiBAcGFyYW0gZWwgLSBIZWFkZXIgdGl0bGUgZWxlbWVudFxuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SGVhZGVyVHlwZShcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248SGVhZGVyVHlwZT4ge1xuICByZXR1cm4gcGlwZShcblxuICAgIC8qIERlZmVyIHJlcGFpbnQgdG8gbmV4dCBhbmltYXRpb24gZnJhbWUgKi9cbiAgICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxuICAgIHRhcCh0eXBlID0+IHtcbiAgICAgIHNldEhlYWRlclRpdGxlQWN0aXZlKGVsLCB0eXBlID09PSBcInBhZ2VcIilcbiAgICB9KSxcblxuICAgIC8qIFJlc2V0IG9uIGNvbXBsZXRlIG9yIGVycm9yICovXG4gICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgcmVzZXRIZWFkZXJUaXRsZUFjdGl2ZShlbClcbiAgICB9KVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCBoZWFkZXIgdGl0bGUgYWN0aXZlXG4gKlxuICogQHBhcmFtIGVsIC0gSGVhZGVyIHRpdGxlIGVsZW1lbnRcbiAqIEBwYXJhbSB2YWx1ZSAtIFdoZXRoZXIgdGhlIHRpdGxlIGlzIHNob3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRIZWFkZXJUaXRsZUFjdGl2ZShcbiAgZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogYm9vbGVhblxuKTogdm9pZCB7XG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgdmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIilcbn1cblxuLyoqXG4gKiBSZXNldCBoZWFkZXIgdGl0bGUgYWN0aXZlXG4gKlxuICogQHBhcmFtIGVsIC0gSGVhZGVyIHRpdGxlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SGVhZGVyVGl0bGVBY3RpdmUoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogdm9pZCB7XG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIilcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiwgcGlwZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLFxuICBtYXAsXG4gIHN3aXRjaE1hcFxufSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBWaWV3cG9ydCwgd2F0Y2hWaWV3cG9ydEF0IH0gZnJvbSBcImJyb3dzZXJcIlxuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vaGVhZGVyXCJcbmltcG9ydCB7IGFwcGx5SGVybyB9IGZyb20gXCIuLi9yZWFjdFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogSGVyb1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEhlcm8ge1xuICBoaWRkZW46IGJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgLyogV2hldGhlciB0aGUgaGVybyBpcyBoaWRkZW4gKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgTW91bnRPcHRpb25zIHtcbiAgaGVhZGVyJDogT2JzZXJ2YWJsZTxIZWFkZXI+ICAgICAgICAgIC8qIEhlYWRlciBvYnNlcnZhYmxlICovXG4gIHZpZXdwb3J0JDogT2JzZXJ2YWJsZTxWaWV3cG9ydD4gICAgICAvKiBWaWV3cG9ydCBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IGhlcm8gZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50SGVybyhcbiAgeyBoZWFkZXIkLCB2aWV3cG9ydCQgfTogTW91bnRPcHRpb25zXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEhUTUxFbGVtZW50LCBIZXJvPiB7XG4gIHJldHVybiBwaXBlKFxuICAgIHN3aXRjaE1hcChlbCA9PiB3YXRjaFZpZXdwb3J0QXQoZWwsIHsgaGVhZGVyJCwgdmlld3BvcnQkIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh7IG9mZnNldDogeyB5IH0gfSkgPT4gKHsgaGlkZGVuOiB5ID49IDIwIH0pKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQoXCJoaWRkZW5cIiksXG4gICAgICAgIGFwcGx5SGVybyhlbClcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFjdFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXRcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1xuICBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sXG4gIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLFxuICBwaXBlXG59IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IGZpbmFsaXplLCBvYnNlcnZlT24sIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vX1wiXG5pbXBvcnQge1xuICByZXNldEhlcm9IaWRkZW4sXG4gIHNldEhlcm9IaWRkZW5cbn0gZnJvbSBcIi4uL3NldFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEFwcGx5IGhlcm9cbiAqXG4gKiBAcGFyYW0gZWwgLSBIZXJvIGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJuIE9wZXJhdG9yIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUhlcm8oXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPEhlcm8+IHtcbiAgcmV0dXJuIHBpcGUoXG5cbiAgICAvKiBEZWZlciByZXBhaW50IHRvIG5leHQgYW5pbWF0aW9uIGZyYW1lICovXG4gICAgb2JzZXJ2ZU9uKGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSxcbiAgICB0YXAoKHsgaGlkZGVuIH0pID0+IHtcbiAgICAgIHNldEhlcm9IaWRkZW4oZWwsIGhpZGRlbilcbiAgICB9KSxcblxuICAgIC8qIFJlc2V0IG9uIGNvbXBsZXRlIG9yIGVycm9yICovXG4gICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgcmVzZXRIZXJvSGlkZGVuKGVsKVxuICAgIH0pXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IGhlcm8gaGlkZGVuXG4gKlxuICogQHBhcmFtIGVsIC0gSGVybyBlbGVtZW50XG4gKiBAcGFyYW0gdmFsdWUgLSBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGhpZGRlblxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SGVyb0hpZGRlbihcbiAgZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogYm9vbGVhblxuKTogdm9pZCB7XG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgdmFsdWUgPyBcImhpZGRlblwiIDogXCJcIilcbn1cblxuLyoqXG4gKiBSZXNldCBoZXJvIGhpZGRlblxuICpcbiAqIEBwYXJhbSBlbCAtIEhlcm8gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRIZXJvSGlkZGVuKFxuICBlbDogSFRNTEVsZW1lbnRcbik6IHZvaWQge1xuICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL19cIlxuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGVyXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hlcm9cIlxuZXhwb3J0ICogZnJvbSBcIi4vbWFpblwiXG5leHBvcnQgKiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGFyZWRcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFic1wiXG5leHBvcnQgKiBmcm9tIFwiLi90b2NcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uLCBTdWJqZWN0LCBwaXBlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tIFwiYnJvd3NlclwiXG5cbmltcG9ydCB7IHVzZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9fXCJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi8uLi9oZWFkZXJcIlxuaW1wb3J0IHtcbiAgYXBwbHlIZWFkZXJTaGFkb3csXG4gIHdhdGNoTWFpblxufSBmcm9tIFwiLi4vcmVhY3RcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1haW4gYXJlYVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1haW4ge1xuICBvZmZzZXQ6IG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgLyogTWFpbiBhcmVhIHRvcCBvZmZzZXQgKi9cbiAgaGVpZ2h0OiBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgIC8qIE1haW4gYXJlYSB2aXNpYmxlIGhlaWdodCAqL1xuICBhY3RpdmU6IGJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgLyogU2Nyb2xsZWQgcGFzdCB0b3Agb2Zmc2V0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIE1vdW50T3B0aW9ucyB7XG4gIGhlYWRlciQ6IE9ic2VydmFibGU8SGVhZGVyPiAgICAgICAgICAvKiBIZWFkZXIgb2JzZXJ2YWJsZSAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBtYWluIGFyZWEgZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICpcbiAqIFRoZSBoZWFkZXIgbXVzdCBiZSBjb25uZWN0ZWQgdG8gdGhlIG1haW4gYXJlYSBvYnNlcnZhYmxlIG91dHNpZGUgb2YgdGhlXG4gKiBvcGVyYXRvciBmdW5jdGlvbiwgYXMgdGhlIGhlYWRlciB3aWxsIHBlcnNpc3QgaW4tYmV0d2VlbiBkb2N1bWVudCBzd2l0Y2hlc1xuICogd2hpbGUgdGhlIG1haW4gYXJlYSBpcyByZXBsYWNlZC4gSG93ZXZlciwgdGhlIGhlYWRlciBvYnNlcnZhYmxlIG11c3QgYmVcbiAqIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBjb25uZWN0IGJvdGggdmlhIGEgbG9uZy1saXZpbmcgc3ViamVjdC5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIE9wZXJhdG9yIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3VudE1haW4oXG4gIHsgaGVhZGVyJCwgdmlld3BvcnQkIH06IE1vdW50T3B0aW9uc1xuKTogT3BlcmF0b3JGdW5jdGlvbjxIVE1MRWxlbWVudCwgTWFpbj4ge1xuICBjb25zdCBtYWluJCA9IG5ldyBTdWJqZWN0PE1haW4+KClcblxuICAvKiBDb25uZWN0IHRvIG1haW4gYXJlYSBvYnNlcnZhYmxlIHZpYSBsb25nLWxpdmluZyBzdWJqZWN0ICovXG4gIHVzZUNvbXBvbmVudChcImhlYWRlclwiKVxuICAgIC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGhlYWRlciA9PiBtYWluJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZChcImFjdGl2ZVwiKSxcbiAgICAgICAgICBhcHBseUhlYWRlclNoYWRvdyhoZWFkZXIpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKClcblxuICAvKiBSZXR1cm4gb3BlcmF0b3IgKi9cbiAgcmV0dXJuIHBpcGUoXG4gICAgc3dpdGNoTWFwKGVsID0+IHdhdGNoTWFpbihlbCwgeyBoZWFkZXIkLCB2aWV3cG9ydCQgfSkpLFxuICAgIHRhcChtYWluID0+IG1haW4kLm5leHQobWFpbikpXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFjdFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXRcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1xuICBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sXG4gIE9ic2VydmFibGUsXG4gIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLFxuICBjb21iaW5lTGF0ZXN0LFxuICBwaXBlXG59IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCxcbiAgZmluYWxpemUsXG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFwXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IFZpZXdwb3J0LCB3YXRjaEVsZW1lbnRTaXplIH0gZnJvbSBcImJyb3dzZXJcIlxuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vaGVhZGVyXCJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi4vX1wiXG5pbXBvcnQge1xuICByZXNldEhlYWRlclNoYWRvdyxcbiAgc2V0SGVhZGVyU2hhZG93XG59IGZyb20gXCIuLi9zZXRcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBXYXRjaE9wdGlvbnMge1xuICBoZWFkZXIkOiBPYnNlcnZhYmxlPEhlYWRlcj4gICAgICAgICAgLyogSGVhZGVyIG9ic2VydmFibGUgKi9cbiAgdmlld3BvcnQkOiBPYnNlcnZhYmxlPFZpZXdwb3J0PiAgICAgIC8qIFZpZXdwb3J0IG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggbWFpbiBhcmVhXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBjb21wdXRlcyB0aGUgdmlzdWFsIHBhcmFtZXRlcnMgb2ZcbiAqIHRoZSBtYWluIGFyZWEgd2hpY2ggZGVwZW5kcyBvbiB0aGUgdmlld3BvcnQgdmVydGljYWwgb2Zmc2V0IGFuZCBoZWlnaHQsIGFzXG4gKiB3ZWxsIGFzIHRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBlbGVtZW50LCBpZiB0aGUgaGVhZGVyIGlzIGZpeGVkLlxuICpcbiAqIEBwYXJhbSBlbCAtIE1haW4gYXJlYSBlbGVtZW50XG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIE1haW4gYXJlYSBvYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaE1haW4oXG4gIGVsOiBIVE1MRWxlbWVudCwgeyBoZWFkZXIkLCB2aWV3cG9ydCQgfTogV2F0Y2hPcHRpb25zXG4pOiBPYnNlcnZhYmxlPE1haW4+IHtcblxuICAvKiBDb21wdXRlIG5lY2Vzc2FyeSBhZGp1c3RtZW50IGZvciBoZWFkZXIgKi9cbiAgY29uc3QgYWRqdXN0JCA9IGhlYWRlciRcbiAgICAucGlwZShcbiAgICAgIHBsdWNrKFwiaGVpZ2h0XCIpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxuXG4gIC8qIENvbXB1dGUgdGhlIG1haW4gYXJlYSdzIHRvcCBhbmQgYm90dG9tIGJvcmRlcnMgKi9cbiAgY29uc3QgYm9yZGVyJCA9IGFkanVzdCRcbiAgICAucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB3YXRjaEVsZW1lbnRTaXplKGVsKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHsgaGVpZ2h0IH0pID0+ICh7XG4gICAgICAgICAgICB0b3A6ICAgIGVsLm9mZnNldFRvcCxcbiAgICAgICAgICAgIGJvdHRvbTogZWwub2Zmc2V0VG9wICsgaGVpZ2h0XG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZChcImJvdHRvbVwiKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxuXG4gIC8qIENvbXB1dGUgdGhlIG1haW4gYXJlYSdzIG9mZnNldCwgdmlzaWJsZSBoZWlnaHQgYW5kIGlmIHdlIHNjcm9sbGVkIHBhc3QgKi9cbiAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW2FkanVzdCQsIGJvcmRlciQsIHZpZXdwb3J0JF0pXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKFtoZWFkZXIsIHsgdG9wLCBib3R0b20gfSwgeyBvZmZzZXQ6IHsgeSB9LCBzaXplOiB7IGhlaWdodCB9IH1dKSA9PiB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KDAsIGhlaWdodFxuICAgICAgICAgIC0gTWF0aC5tYXgoMCwgdG9wICAgIC0geSwgIGhlYWRlcilcbiAgICAgICAgICAtIE1hdGgubWF4KDAsIGhlaWdodCArIHkgLSBib3R0b20pXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvZmZzZXQ6IHRvcCAtIGhlYWRlcixcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgYWN0aXZlOiB0b3AgLSBoZWFkZXIgPD0geVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPE1haW4+KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm9mZnNldCA9PT0gYi5vZmZzZXRcbiAgICAgICAgICAgICYmIGEuaGVpZ2h0ID09PSBiLmhlaWdodFxuICAgICAgICAgICAgJiYgYS5hY3RpdmUgPT09IGIuYWN0aXZlXG4gICAgICB9KVxuICAgIClcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEFwcGx5IGhlYWRlciBzaGFkb3dcbiAqXG4gKiBAcGFyYW0gZWwgLSBIZWFkZXIgZWxlbWVudFxuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5SGVhZGVyU2hhZG93KFxuICBlbDogSFRNTEVsZW1lbnRcbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxNYWluPiB7XG4gIHJldHVybiBwaXBlKFxuXG4gICAgLyogRGVmZXIgcmVwYWludCB0byBuZXh0IGFuaW1hdGlvbiBmcmFtZSAqL1xuICAgIG9ic2VydmVPbihhbmltYXRpb25GcmFtZVNjaGVkdWxlciksXG4gICAgdGFwKCh7IGFjdGl2ZSB9KSA9PiB7XG4gICAgICBzZXRIZWFkZXJTaGFkb3coZWwsIGFjdGl2ZSlcbiAgICB9KSxcblxuICAgIC8qIFJlc2V0IG9uIGNvbXBsZXRlIG9yIGVycm9yICovXG4gICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgcmVzZXRIZWFkZXJTaGFkb3coZWwpXG4gICAgfSlcbiAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXQgaGVhZGVyIHNoYWRvd1xuICpcbiAqIEBwYXJhbSBlbCAtIEhlYWRlciBlbGVtZW50XG4gKiBAcGFyYW0gdmFsdWUgLSBXaGV0aGVyIHRoZSBzaGFkb3cgaXMgc2hvd25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEhlYWRlclNoYWRvdyhcbiAgZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogYm9vbGVhblxuKTogdm9pZCB7XG4gIGVsLnNldEF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIiwgdmFsdWUgPyBcInNoYWRvd1wiIDogXCJcIilcbn1cblxuLyoqXG4gKiBSZXNldCBoZWFkZXIgc2hhZG93XG4gKlxuICogQHBhcmFtIGVsIC0gSGVhZGVyIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0SGVhZGVyU2hhZG93KFxuICBlbDogSFRNTEVsZW1lbnRcbik6IHZvaWQge1xuICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24sIG9mLCBwaXBlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gXCJicm93c2VyXCJcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2hlYWRlclwiXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uLy4uL21haW5cIlxuaW1wb3J0IHtcbiAgU2lkZWJhcixcbiAgYXBwbHlTaWRlYmFyLFxuICB3YXRjaFNpZGViYXJcbn0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTmF2aWdhdGlvbiBmb3IgW3NjcmVlbiAtXVxuICovXG5pbnRlcmZhY2UgTmF2aWdhdGlvbkJlbG93U2NyZWVuIHt9IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIGZvciBbc2NyZWVuICtdXG4gKi9cbmludGVyZmFjZSBOYXZpZ2F0aW9uQWJvdmVTY3JlZW4ge1xuICBzaWRlYmFyOiBTaWRlYmFyICAgICAgICAgICAgICAgICAgICAgLyogU2lkZWJhciAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTmF2aWdhdGlvblxuICovXG5leHBvcnQgdHlwZSBOYXZpZ2F0aW9uID1cbiAgfCBOYXZpZ2F0aW9uQmVsb3dTY3JlZW5cbiAgfCBOYXZpZ2F0aW9uQWJvdmVTY3JlZW5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgTW91bnRPcHRpb25zIHtcbiAgaGVhZGVyJDogT2JzZXJ2YWJsZTxIZWFkZXI+ICAgICAgICAgIC8qIEhlYWRlciBvYnNlcnZhYmxlICovXG4gIG1haW4kOiBPYnNlcnZhYmxlPE1haW4+ICAgICAgICAgICAgICAvKiBNYWluIGFyZWEgb2JzZXJ2YWJsZSAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xuICBzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ICAgICAgICAgLyogU2NyZWVuIG1lZGlhIG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgbmF2aWdhdGlvbiBmcm9tIHNvdXJjZSBvYnNlcnZhYmxlXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBPcGVyYXRvciBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbW91bnROYXZpZ2F0aW9uKFxuICB7IGhlYWRlciQsIG1haW4kLCB2aWV3cG9ydCQsIHNjcmVlbiQgfTogTW91bnRPcHRpb25zXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEhUTUxFbGVtZW50LCBOYXZpZ2F0aW9uPiB7XG4gIHJldHVybiBwaXBlKFxuICAgIHN3aXRjaE1hcChlbCA9PiBzY3JlZW4kXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHNjcmVlbiA9PiB7XG5cbiAgICAgICAgICAvKiBbc2NyZWVuICtdOiBNb3VudCBuYXZpZ2F0aW9uIGluIHNpZGViYXIgKi9cbiAgICAgICAgICBpZiAoc2NyZWVuKSB7XG4gICAgICAgICAgICByZXR1cm4gd2F0Y2hTaWRlYmFyKGVsLCB7IG1haW4kLCB2aWV3cG9ydCQgfSlcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgYXBwbHlTaWRlYmFyKGVsLCB7IGhlYWRlciQgfSksXG4gICAgICAgICAgICAgICAgbWFwKHNpZGViYXIgPT4gKHsgc2lkZWJhciB9KSlcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgLyogW3NjcmVlbiAtXTogTW91bnQgbmF2aWdhdGlvbiBpbiBkcmF3ZXIgKi9cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24sIGNvbWJpbmVMYXRlc3QsIHBpcGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgbWFwVG8sXG4gIHNhbXBsZSxcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXAsXG4gIHRha2Vcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgV29ya2VySGFuZGxlciB9IGZyb20gXCJicm93c2VyXCJcbmltcG9ydCB7XG4gIFNlYXJjaE1lc3NhZ2UsXG4gIFNlYXJjaFJlc3VsdCxcbiAgaXNTZWFyY2hRdWVyeU1lc3NhZ2UsXG4gIGlzU2VhcmNoUmVhZHlNZXNzYWdlXG59IGZyb20gXCJpbnRlZ3JhdGlvbnMvc2VhcmNoXCJcblxuaW1wb3J0IHsgU2VhcmNoUXVlcnkgfSBmcm9tIFwiLi4vcXVlcnlcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNlYXJjaCBzdGF0dXNcbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoU3RhdHVzID1cbiAgfCBcIndhaXRpbmdcIiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIHdhaXRpbmcgZm9yIGluaXRpYWxpemF0aW9uICovXG4gIHwgXCJyZWFkeVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCByZWFkeSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoIHtcbiAgc3RhdHVzOiBTZWFyY2hTdGF0dXMgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBzdGF0dXMgKi9cbiAgcXVlcnk6IFNlYXJjaFF1ZXJ5ICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBxdWVyeSAqL1xuICByZXN1bHQ6IFNlYXJjaFJlc3VsdFtdICAgICAgICAgICAgICAgLyogU2VhcmNoIHJlc3VsdCBsaXN0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIE1vdW50T3B0aW9ucyB7XG4gIHF1ZXJ5JDogT2JzZXJ2YWJsZTxTZWFyY2hRdWVyeT4gICAgICAvKiBTZWFyY2ggcXVlcnkgb2JzZXJ2YWJsZSAqL1xuICByZXNldCQ6IE9ic2VydmFibGU8dm9pZD4gICAgICAgICAgICAgLyogU2VhcmNoIHJlc2V0IG9ic2VydmFibGUgKi9cbiAgcmVzdWx0JDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRbXT4gIC8qIFNlYXJjaCByZXN1bHQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBzZWFyY2ggZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICpcbiAqIEBwYXJhbSBoYW5kbGVyIC0gV29ya2VyIGhhbmRsZXJcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50U2VhcmNoKFxuICB7IHJ4JCwgdHgkIH06IFdvcmtlckhhbmRsZXI8U2VhcmNoTWVzc2FnZT4sXG4gIHsgcXVlcnkkLCByZXNldCQsIHJlc3VsdCQgfTogTW91bnRPcHRpb25zXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEhUTUxFbGVtZW50LCBTZWFyY2g+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcblxuICAgICAgLyogQ29tcHV0ZSBzZWFyY2ggc3RhdHVzICovXG4gICAgICBjb25zdCBzdGF0dXMkID0gcngkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihpc1NlYXJjaFJlYWR5TWVzc2FnZSksXG4gICAgICAgICAgbWFwVG88U2VhcmNoU3RhdHVzPihcInJlYWR5XCIpLFxuICAgICAgICAgIHN0YXJ0V2l0aChcIndhaXRpbmdcIilcbiAgICAgICAgKSBhcyBPYnNlcnZhYmxlPFNlYXJjaFN0YXR1cz5cblxuICAgICAgLyogUmUtZW1pdCB0aGUgbGF0ZXN0IHF1ZXJ5IHdoZW4gc2VhcmNoIGlzIHJlYWR5ICovXG4gICAgICB0eCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGlzU2VhcmNoUXVlcnlNZXNzYWdlKSxcbiAgICAgICAgICBzYW1wbGUoc3RhdHVzJCksXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSh0eCQubmV4dC5iaW5kKHR4JCkpXG5cbiAgICAgIC8qIENvbWJpbmUgaW50byBzaW5nbGUgb2JzZXJ2YWJsZSAqL1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3N0YXR1cyQsIHF1ZXJ5JCwgcmVzdWx0JCwgcmVzZXQkXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChbc3RhdHVzLCBxdWVyeSwgcmVzdWx0XSkgPT4gKHtcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9KVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL19cIlxuZXhwb3J0ICogZnJvbSBcIi4vcXVlcnlcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVzZXRcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVzdWx0XCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiwgcGlwZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLFxuICBtYXAsXG4gIHN3aXRjaE1hcFxufSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBXb3JrZXJIYW5kbGVyLCBzZXRUb2dnbGUgfSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQge1xuICBTZWFyY2hNZXNzYWdlLFxuICBTZWFyY2hNZXNzYWdlVHlwZSxcbiAgU2VhcmNoUXVlcnlNZXNzYWdlLFxuICBTZWFyY2hUcmFuc2Zvcm1GblxufSBmcm9tIFwiaW50ZWdyYXRpb25zXCJcblxuaW1wb3J0IHsgd2F0Y2hTZWFyY2hRdWVyeSB9IGZyb20gXCIuLi9yZWFjdFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIHF1ZXJ5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUXVlcnkge1xuICB2YWx1ZTogc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgLyogUXVlcnkgdmFsdWUgKi9cbiAgZm9jdXM6IGJvb2xlYW4gICAgICAgICAgICAgICAgICAgICAgIC8qIFF1ZXJ5IGZvY3VzICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIE1vdW50T3B0aW9ucyB7XG4gIHRyYW5zZm9ybT86IFNlYXJjaFRyYW5zZm9ybUZuICAgICAgICAvKiBUcmFuc2Zvcm1hdGlvbiBmdW5jdGlvbiAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBzZWFyY2ggcXVlcnkgZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICpcbiAqIEBwYXJhbSBoYW5kbGVyIC0gV29ya2VyIGhhbmRsZXJcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50U2VhcmNoUXVlcnkoXG4gIHsgdHgkIH06IFdvcmtlckhhbmRsZXI8U2VhcmNoTWVzc2FnZT4sIG9wdGlvbnM6IE1vdW50T3B0aW9ucyA9IHt9XG4pOiBPcGVyYXRvckZ1bmN0aW9uPEhUTUxJbnB1dEVsZW1lbnQsIFNlYXJjaFF1ZXJ5PiB7XG4gIHJldHVybiBwaXBlKFxuICAgIHN3aXRjaE1hcChlbCA9PiB7XG4gICAgICBjb25zdCBxdWVyeSQgPSB3YXRjaFNlYXJjaFF1ZXJ5KGVsLCBvcHRpb25zKVxuXG4gICAgICAvKiBTdWJzY3JpYmUgd29ya2VyIHRvIHNlYXJjaCBxdWVyeSAqL1xuICAgICAgcXVlcnkkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkKFwidmFsdWVcIiksXG4gICAgICAgICAgbWFwKCh7IHZhbHVlIH0pOiBTZWFyY2hRdWVyeU1lc3NhZ2UgPT4gKHtcbiAgICAgICAgICAgIHR5cGU6IFNlYXJjaE1lc3NhZ2VUeXBlLlFVRVJZLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUodHgkLm5leHQuYmluZCh0eCQpKVxuXG4gICAgICAvKiBUb2dnbGUgc2VhcmNoIG9uIGZvY3VzICovXG4gICAgICBxdWVyeSRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQoXCJmb2N1c1wiKVxuICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoeyBmb2N1cyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9jdXMpXG4gICAgICAgICAgICAgIHNldFRvZ2dsZShcInNlYXJjaFwiLCBmb2N1cylcbiAgICAgICAgICB9KVxuXG4gICAgICAvKiBSZXR1cm4gc2VhcmNoIHF1ZXJ5ICovXG4gICAgICByZXR1cm4gcXVlcnkkXG4gICAgfSlcbiAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9fXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlYWN0XCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIGRlbGF5LFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzdGFydFdpdGhcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgd2F0Y2hFbGVtZW50Rm9jdXMgfSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQgeyBTZWFyY2hUcmFuc2Zvcm1GbiwgZGVmYXVsdFRyYW5zZm9ybSB9IGZyb20gXCJpbnRlZ3JhdGlvbnNcIlxuXG5pbXBvcnQgeyBTZWFyY2hRdWVyeSB9IGZyb20gXCIuLi9fXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgV2F0Y2hPcHRpb25zIHtcbiAgdHJhbnNmb3JtPzogU2VhcmNoVHJhbnNmb3JtRm4gICAgICAgIC8qIFRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIHNlYXJjaCBxdWVyeVxuICpcbiAqIE5vdGUgdGhhdCB0aGUgZm9jdXMgZXZlbnQgd2hpY2ggdHJpZ2dlcnMgcmUtcmVhZGluZyB0aGUgY3VycmVudCBxdWVyeSB2YWx1ZVxuICogaXMgZGVsYXllZCBieSBgMW1zYCBzbyB0aGUgaW5wdXQncyBlbXB0eSBzdGF0ZSBpcyBhbGxvd2VkIHRvIHByb3BhZ2F0ZS5cbiAqXG4gKiBAcGFyYW0gZWwgLSBTZWFyY2ggcXVlcnkgZWxlbWVudFxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBTZWFyY2ggcXVlcnkgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hTZWFyY2hRdWVyeShcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQsIHsgdHJhbnNmb3JtIH06IFdhdGNoT3B0aW9ucyA9IHt9XG4pOiBPYnNlcnZhYmxlPFNlYXJjaFF1ZXJ5PiB7XG4gIGNvbnN0IGZuID0gdHJhbnNmb3JtIHx8IGRlZmF1bHRUcmFuc2Zvcm1cblxuICAvKiBJbnRlcmNlcHQga2V5Ym9hcmQgZXZlbnRzICovXG4gIGNvbnN0IHZhbHVlJCA9IG1lcmdlKFxuICAgIGZyb21FdmVudChlbCwgXCJrZXl1cFwiKSxcbiAgICBmcm9tRXZlbnQoZWwsIFwiZm9jdXNcIikucGlwZShkZWxheSgxKSlcbiAgKVxuICAgIC5waXBlKFxuICAgICAgbWFwKCgpID0+IGZuKGVsLnZhbHVlKSksXG4gICAgICBzdGFydFdpdGgoZm4oZWwudmFsdWUpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApXG5cbiAgLyogSW50ZXJjZXB0IGZvY3VzIGV2ZW50cyAqL1xuICBjb25zdCBmb2N1cyQgPSB3YXRjaEVsZW1lbnRGb2N1cyhlbClcblxuICAvKiBDb21iaW5lIGludG8gc2luZ2xlIG9ic2VydmFibGUgKi9cbiAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3ZhbHVlJCwgZm9jdXMkXSlcbiAgICAucGlwZShcbiAgICAgIG1hcCgoW3ZhbHVlLCBmb2N1c10pID0+ICh7IHZhbHVlLCBmb2N1cyB9KSlcbiAgICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9wZXJhdG9yRnVuY3Rpb24sIHBpcGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBtYXBUbyxcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXAsXG4gIHN3aXRjaE1hcFRvLFxuICB0YXBcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgc2V0RWxlbWVudEZvY3VzIH0gZnJvbSBcImJyb3dzZXJcIlxuXG5pbXBvcnQgeyB1c2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vX1wiXG5pbXBvcnQgeyB3YXRjaFNlYXJjaFJlc2V0IH0gZnJvbSBcIi4uL3JlYWN0XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgc2VhcmNoIHJlc2V0IGZyb20gc291cmNlIG9ic2VydmFibGVcbiAqXG4gKiBAcmV0dXJuIE9wZXJhdG9yIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFNlYXJjaFJlc2V0KCk6IE9wZXJhdG9yRnVuY3Rpb248SFRNTEVsZW1lbnQsIHZvaWQ+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgc3dpdGNoTWFwKGVsID0+IHdhdGNoU2VhcmNoUmVzZXQoZWwpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwVG8odXNlQ29tcG9uZW50KFwic2VhcmNoLXF1ZXJ5XCIpKSxcbiAgICAgICAgdGFwKHNldEVsZW1lbnRGb2N1cyksXG4gICAgICAgIG1hcFRvKHVuZGVmaW5lZClcbiAgICAgIClcbiAgICApLFxuICAgIHN0YXJ0V2l0aCh1bmRlZmluZWQpXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFjdFwiXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogV2F0Y2ggc2VhcmNoIHJlc2V0XG4gKlxuICogQHBhcmFtIGVsIC0gU2VhcmNoIHJlc2V0IGVsZW1lbnRcbiAqXG4gKiBAcmV0dXJuIFNlYXJjaCByZXNldCBvYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaFNlYXJjaFJlc2V0KFxuICBlbDogSFRNTEVsZW1lbnRcbik6IE9ic2VydmFibGU8dm9pZD4ge1xuICByZXR1cm4gZnJvbUV2ZW50KGVsLCBcImNsaWNrXCIpXG4gICAgLnBpcGUoXG4gICAgICBtYXBUbyh1bmRlZmluZWQpXG4gICAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gXCJyYW1kYVwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uLCBwaXBlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtYXBUbyxcbiAgcGx1Y2ssXG4gIHN0YXJ0V2l0aCxcbiAgc3dpdGNoTWFwXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IFdvcmtlckhhbmRsZXIsIHdhdGNoRWxlbWVudE9mZnNldCB9IGZyb20gXCJicm93c2VyXCJcbmltcG9ydCB7XG4gIFNlYXJjaE1lc3NhZ2UsXG4gIFNlYXJjaFJlc3VsdCxcbiAgaXNTZWFyY2hSZWFkeU1lc3NhZ2UsXG4gIGlzU2VhcmNoUmVzdWx0TWVzc2FnZVxufSBmcm9tIFwiaW50ZWdyYXRpb25zXCJcblxuaW1wb3J0IHsgU2VhcmNoUXVlcnkgfSBmcm9tIFwiLi4vLi4vcXVlcnlcIlxuaW1wb3J0IHsgYXBwbHlTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vcmVhY3RcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBNb3VudE9wdGlvbnMge1xuICBxdWVyeSQ6IE9ic2VydmFibGU8U2VhcmNoUXVlcnk+ICAgICAgLyogU2VhcmNoIHF1ZXJ5IG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgc2VhcmNoIHJlc3VsdCBmcm9tIHNvdXJjZSBvYnNlcnZhYmxlXG4gKlxuICogQHBhcmFtIGhhbmRsZXIgLSBXb3JrZXIgaGFuZGxlclxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBPcGVyYXRvciBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbW91bnRTZWFyY2hSZXN1bHQoXG4gIHsgcngkIH06IFdvcmtlckhhbmRsZXI8U2VhcmNoTWVzc2FnZT4sIHsgcXVlcnkkIH06IE1vdW50T3B0aW9uc1xuKTogT3BlcmF0b3JGdW5jdGlvbjxIVE1MRWxlbWVudCwgU2VhcmNoUmVzdWx0W10+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgc3dpdGNoTWFwKGVsID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsLnBhcmVudEVsZW1lbnQhXG5cbiAgICAgIC8qIENvbXB1dGUgaWYgc2VhcmNoIGlzIHJlYWR5ICovXG4gICAgICBjb25zdCByZWFkeSQgPSByeCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKGlzU2VhcmNoUmVhZHlNZXNzYWdlKSxcbiAgICAgICAgICBtYXBUbyh0cnVlKVxuICAgICAgICApXG5cbiAgICAgIC8qIENvbXB1dGUgd2hldGhlciB0aGVyZSBhcmUgbW9yZSBzZWFyY2ggcmVzdWx0cyB0byBmZXRjaCAqL1xuICAgICAgY29uc3QgZmV0Y2gkID0gd2F0Y2hFbGVtZW50T2Zmc2V0KGNvbnRhaW5lcilcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCh7IHkgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHkgPj0gY29udGFpbmVyLnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLSAxNlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZmlsdGVyKGlkZW50aXR5KVxuICAgICAgICApXG5cbiAgICAgIC8qIEFwcGx5IHNlYXJjaCByZXN1bHRzICovXG4gICAgICByZXR1cm4gcngkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihpc1NlYXJjaFJlc3VsdE1lc3NhZ2UpLFxuICAgICAgICAgIHBsdWNrKFwiZGF0YVwiKSxcbiAgICAgICAgICBhcHBseVNlYXJjaFJlc3VsdChlbCwgeyBxdWVyeSQsIHJlYWR5JCwgZmV0Y2gkIH0pLFxuICAgICAgICAgIHN0YXJ0V2l0aChbXSlcbiAgICAgICAgKVxuICAgIH0pXG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFjdFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXRcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1xuICBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb24sXG4gIE9ic2VydmFibGUsXG4gIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLFxuICBwaXBlXG59IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIGZpbmFsaXplLFxuICBtYXAsXG4gIG1hcFRvLFxuICBvYnNlcnZlT24sXG4gIHNjYW4sXG4gIHN3aXRjaE1hcCxcbiAgd2l0aExhdGVzdEZyb21cbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgZ2V0RWxlbWVudE9yVGhyb3cgfSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiaW50ZWdyYXRpb25zL3NlYXJjaFwiXG5pbXBvcnQgeyByZW5kZXJTZWFyY2hSZXN1bHQgfSBmcm9tIFwidGVtcGxhdGVzXCJcblxuaW1wb3J0IHsgU2VhcmNoUXVlcnkgfSBmcm9tIFwiLi4vLi4vcXVlcnlcIlxuaW1wb3J0IHtcbiAgYWRkVG9TZWFyY2hSZXN1bHRMaXN0LFxuICByZXNldFNlYXJjaFJlc3VsdExpc3QsXG4gIHJlc2V0U2VhcmNoUmVzdWx0TWV0YSxcbiAgc2V0U2VhcmNoUmVzdWx0TWV0YVxufSBmcm9tIFwiLi4vc2V0XCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQXBwbHkgb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgQXBwbHlPcHRpb25zIHtcbiAgcXVlcnkkOiBPYnNlcnZhYmxlPFNlYXJjaFF1ZXJ5PiAgICAgLyogU2VhcmNoIHF1ZXJ5IG9ic2VydmFibGUgKi9cbiAgcmVhZHkkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ICAgICAgICAgLyogU2VhcmNoIHJlYWR5IG9ic2VydmFibGUgKi9cbiAgZmV0Y2gkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ICAgICAgICAgLyogUmVzdWx0IGZldGNoIG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQXBwbHkgc2VhcmNoIHJlc3VsdHNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcGVyZm9ybSBhIGxhenkgcmVuZGVyaW5nIG9mIHRoZSBzZWFyY2ggcmVzdWx0cywgZGVwZW5kaW5nXG4gKiBvbiB0aGUgdmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzZWFyY2ggcmVzdWx0IGNvbnRhaW5lci4gV2hlbiB0aGUgc2Nyb2xsIG9mZnNldFxuICogcmVhY2hlcyB0aGUgYm90dG9tIG9mIHRoZSBlbGVtZW50LCBtb3JlIHJlc3VsdHMgYXJlIGZldGNoZWQgYW5kIHJlbmRlcmVkLlxuICpcbiAqIEBwYXJhbSBlbCAtIFNlYXJjaCByZXN1bHQgZWxlbWVudFxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBPcGVyYXRvciBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTZWFyY2hSZXN1bHQoXG4gIGVsOiBIVE1MRWxlbWVudCwgeyBxdWVyeSQsIHJlYWR5JCwgZmV0Y2gkIH06IEFwcGx5T3B0aW9uc1xuKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFNlYXJjaFJlc3VsdFtdPiB7XG4gIGNvbnN0IGxpc3QgPSBnZXRFbGVtZW50T3JUaHJvdyhcIi5tZC1zZWFyY2gtcmVzdWx0X19saXN0XCIsIGVsKVxuICBjb25zdCBtZXRhID0gZ2V0RWxlbWVudE9yVGhyb3coXCIubWQtc2VhcmNoLXJlc3VsdF9fbWV0YVwiLCBlbClcbiAgcmV0dXJuIHBpcGUoXG5cbiAgICAvKiBBcHBseSBzZWFyY2ggcmVzdWx0IG1ldGFkYXRhICovXG4gICAgd2l0aExhdGVzdEZyb20ocXVlcnkkLCByZWFkeSQpLFxuICAgIG1hcCgoW3Jlc3VsdCwgcXVlcnldKSA9PiB7XG4gICAgICBpZiAocXVlcnkudmFsdWUpIHtcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0TWV0YShtZXRhLCByZXN1bHQubGVuZ3RoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRTZWFyY2hSZXN1bHRNZXRhKG1ldGEpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSksXG5cbiAgICAvKiBBcHBseSBzZWFyY2ggcmVzdWx0IGxpc3QgKi9cbiAgICBzd2l0Y2hNYXAocmVzdWx0ID0+IGZldGNoJFxuICAgICAgLnBpcGUoXG5cbiAgICAgICAgLyogRGVmZXIgcmVwYWludCB0byBuZXh0IGFuaW1hdGlvbiBmcmFtZSAqL1xuICAgICAgICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxuICAgICAgICBzY2FuKGluZGV4ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBlbC5wYXJlbnRFbGVtZW50IVxuICAgICAgICAgIHdoaWxlIChpbmRleCA8IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFkZFRvU2VhcmNoUmVzdWx0TGlzdChsaXN0LCByZW5kZXJTZWFyY2hSZXN1bHQocmVzdWx0W2luZGV4KytdKSlcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gY29udGFpbmVyLm9mZnNldEhlaWdodCA+IDE2KVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaW5kZXhcbiAgICAgICAgfSwgMCksXG5cbiAgICAgICAgLyogUmUtbWFwIHRvIHNlYXJjaCByZXN1bHQgKi9cbiAgICAgICAgbWFwVG8ocmVzdWx0KSxcblxuICAgICAgICAvKiBSZXNldCBvbiBjb21wbGV0ZSBvciBlcnJvciAqL1xuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgcmVzZXRTZWFyY2hSZXN1bHRMaXN0KGxpc3QpXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gXCJ1dGlsaXRpZXNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXQgbnVtYmVyIG9mIHNlYXJjaCByZXN1bHRzXG4gKlxuICogQHBhcmFtIGVsIC0gU2VhcmNoIHJlc3VsdCBtZXRhZGF0YSBlbGVtZW50XG4gKiBAcGFyYW0gdmFsdWUgLSBOdW1iZXIgb2YgcmVzdWx0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VhcmNoUmVzdWx0TWV0YShcbiAgZWw6IEhUTUxFbGVtZW50LCB2YWx1ZTogbnVtYmVyXG4pOiB2b2lkIHtcbiAgc3dpdGNoICh2YWx1ZSkge1xuXG4gICAgLyogTm8gcmVzdWx0cyAqL1xuICAgIGNhc2UgMDpcbiAgICAgIGVsLnRleHRDb250ZW50ID0gdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5ub25lXCIpXG4gICAgICBicmVha1xuXG4gICAgLyogT25lIHJlc3VsdCAqL1xuICAgIGNhc2UgMTpcbiAgICAgIGVsLnRleHRDb250ZW50ID0gdHJhbnNsYXRlKFwic2VhcmNoLnJlc3VsdC5vbmVcIilcbiAgICAgIGJyZWFrXG5cbiAgICAvKiBNdWx0aXBsZSByZXN1bHQgKi9cbiAgICBkZWZhdWx0OlxuICAgICAgZWwudGV4dENvbnRlbnQgPSB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0Lm90aGVyXCIsIHZhbHVlLnRvU3RyaW5nKCkpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldCBudW1iZXIgb2Ygc2VhcmNoIHJlc3VsdHNcbiAqXG4gKiBAcGFyYW0gZWwgLSBTZWFyY2ggcmVzdWx0IG1ldGFkYXRhIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2VhcmNoUmVzdWx0TWV0YShcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiB2b2lkIHtcbiAgZWwudGV4dENvbnRlbnQgPSB0cmFuc2xhdGUoXCJzZWFyY2gucmVzdWx0LnBsYWNlaG9sZGVyXCIpXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBBZGQgYW4gZWxlbWVudCB0byB0aGUgc2VhcmNoIHJlc3VsdCBsaXN0XG4gKlxuICogQHBhcmFtIGVsIC0gU2VhcmNoIHJlc3VsdCBsaXN0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZCAtIFNlYXJjaCByZXN1bHQgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9TZWFyY2hSZXN1bHRMaXN0KFxuICBlbDogSFRNTEVsZW1lbnQsIGNoaWxkOiBFbGVtZW50XG4pOiB2b2lkIHtcbiAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpXG59XG5cbi8qKlxuICogUmVzZXQgc2VhcmNoIHJlc3VsdCBsaXN0XG4gKlxuICogQHBhcmFtIGVsIC0gU2VhcmNoIHJlc3VsdCBsaXN0IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2VhcmNoUmVzdWx0TGlzdChcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiB2b2lkIHtcbiAgZWwuaW5uZXJIVE1MID0gXCJcIlxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9zaWRlYmFyXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTaWRlYmFyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhciB7XG4gIGhlaWdodDogbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAvKiBTaWRlYmFyIGhlaWdodCAqL1xuICBsb2NrOiBib29sZWFuICAgICAgICAgICAgICAgICAgICAgICAgLyogU2lkZWJhciBsb2NrICovXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL19cIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVhY3RcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2V0XCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtcbiAgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLFxuICBPYnNlcnZhYmxlLFxuICBhbmltYXRpb25GcmFtZVNjaGVkdWxlcixcbiAgY29tYmluZUxhdGVzdCxcbiAgcGlwZVxufSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmluYWxpemUsXG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSBcImJyb3dzZXJcIlxuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vLi4vaGVhZGVyXCJcbmltcG9ydCB7IE1haW4gfSBmcm9tIFwiLi4vLi4vLi4vbWFpblwiXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL19cIlxuaW1wb3J0IHtcbiAgcmVzZXRTaWRlYmFySGVpZ2h0LFxuICByZXNldFNpZGViYXJPZmZzZXQsXG4gIHNldFNpZGViYXJIZWlnaHQsXG4gIHNldFNpZGViYXJPZmZzZXRcbn0gZnJvbSBcIi4uL3NldFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XG4gIG1haW4kOiBPYnNlcnZhYmxlPE1haW4+ICAgICAgICAgICAgICAvKiBNYWluIGFyZWEgb2JzZXJ2YWJsZSAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKipcbiAqIEFwcGx5IG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIEFwcGx5T3B0aW9ucyB7XG4gIGhlYWRlciQ6IE9ic2VydmFibGU8SGVhZGVyPiAgICAgICAgICAvKiBIZWFkZXIgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBzaWRlYmFyXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBjb21wdXRlcyB0aGUgdmlzdWFsIHBhcmFtZXRlcnMgb2ZcbiAqIHRoZSBzaWRlYmFyIHdoaWNoIGRlcGVuZHMgb24gdGhlIHZlcnRpY2FsIHZpZXdwb3J0IG9mZnNldCwgYXMgd2VsbCBhcyB0aGVcbiAqIGhlaWdodCBvZiB0aGUgbWFpbiBhcmVhLiBXaGVuIHRoZSBwYWdlIGlzIHNjcm9sbGVkIGJleW9uZCB0aGUgaGVhZGVyLCB0aGVcbiAqIHNpZGViYXIgaXMgbG9ja2VkIGFuZCBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLlxuICpcbiAqIEBwYXJhbSBlbCAtIFNpZGViYXIgZWxlbWVudFxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBTaWRlYmFyIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoU2lkZWJhcihcbiAgZWw6IEhUTUxFbGVtZW50LCB7IG1haW4kLCB2aWV3cG9ydCQgfTogV2F0Y2hPcHRpb25zXG4pOiBPYnNlcnZhYmxlPFNpZGViYXI+IHtcbiAgY29uc3QgYWRqdXN0ID0gZWwucGFyZW50RWxlbWVudCEub2Zmc2V0VG9wXG4gICAgICAgICAgICAgICAtIGVsLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLm9mZnNldFRvcFxuXG4gIC8qIENvbXB1dGUgdGhlIHNpZGViYXIncyBhdmFpbGFibGUgaGVpZ2h0IGFuZCBpZiBpdCBzaG91bGQgYmUgbG9ja2VkICovXG4gIHJldHVybiBjb21iaW5lTGF0ZXN0KFttYWluJCwgdmlld3BvcnQkXSlcbiAgICAucGlwZShcbiAgICAgIG1hcCgoW3sgb2Zmc2V0LCBoZWlnaHQgfSwgeyBvZmZzZXQ6IHsgeSB9IH1dKSA9PiB7XG4gICAgICAgIGhlaWdodCA9IGhlaWdodFxuICAgICAgICAgICsgTWF0aC5taW4oYWRqdXN0LCBNYXRoLm1heCgwLCB5IC0gb2Zmc2V0KSlcbiAgICAgICAgICAtIGFkanVzdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBsb2NrOiB5ID49IG9mZnNldCArIGFkanVzdFxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPFNpZGViYXI+KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLmhlaWdodCA9PT0gYi5oZWlnaHRcbiAgICAgICAgICAgICYmIGEubG9jayAgID09PSBiLmxvY2tcbiAgICAgIH0pXG4gICAgKVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQXBwbHkgc2lkZWJhclxuICpcbiAqIEBwYXJhbSBlbCAtIFNpZGViYXIgZWxlbWVudFxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBPcGVyYXRvciBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlTaWRlYmFyKFxuICBlbDogSFRNTEVsZW1lbnQsIHsgaGVhZGVyJCB9OiBBcHBseU9wdGlvbnNcbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxTaWRlYmFyPiB7XG4gIHJldHVybiBwaXBlKFxuXG4gICAgLyogRGVmZXIgcmVwYWludCB0byBuZXh0IGFuaW1hdGlvbiBmcmFtZSAqL1xuICAgIG9ic2VydmVPbihhbmltYXRpb25GcmFtZVNjaGVkdWxlciksXG4gICAgd2l0aExhdGVzdEZyb20oaGVhZGVyJCksXG4gICAgdGFwKChbeyBoZWlnaHQsIGxvY2sgfSwgeyBoZWlnaHQ6IG9mZnNldCB9XSkgPT4ge1xuICAgICAgc2V0U2lkZWJhckhlaWdodChlbCwgaGVpZ2h0KVxuXG4gICAgICAvKiBTZXQgb2Zmc2V0IGluIGxvY2tlZCBzdGF0ZSBkZXBlbmRpbmcgb24gaGVhZGVyIGhlaWdodCAqL1xuICAgICAgaWYgKGxvY2spXG4gICAgICAgIHNldFNpZGViYXJPZmZzZXQoZWwsIG9mZnNldClcbiAgICAgIGVsc2VcbiAgICAgICAgcmVzZXRTaWRlYmFyT2Zmc2V0KGVsKVxuICAgIH0pLFxuXG4gICAgLyogUmUtbWFwIHRvIHNpZGViYXIgKi9cbiAgICBtYXAoKFtzaWRlYmFyXSkgPT4gc2lkZWJhciksXG5cbiAgICAvKiBSZXNldCBvbiBjb21wbGV0ZSBvciBlcnJvciAqL1xuICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgIHJlc2V0U2lkZWJhck9mZnNldChlbClcbiAgICAgIHJlc2V0U2lkZWJhckhlaWdodChlbClcbiAgICB9KVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCBzaWRlYmFyIG9mZnNldFxuICpcbiAqIEBwYXJhbSBlbCAtIFNpZGViYXIgZWxlbWVudFxuICogQHBhcmFtIHZhbHVlIC0gU2lkZWJhciBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNpZGViYXJPZmZzZXQoXG4gIGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IG51bWJlclxuKTogdm9pZCB7XG4gIGVsLnN0eWxlLnRvcCA9IGAke3ZhbHVlfXB4YFxufVxuXG4vKipcbiAqIFJlc2V0IHNpZGViYXIgb2Zmc2V0XG4gKlxuICogQHBhcmFtIGVsIC0gU2lkZWJhciBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFNpZGViYXJPZmZzZXQoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogdm9pZCB7XG4gIGVsLnN0eWxlLnRvcCA9IFwiXCJcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCBzaWRlYmFyIGhlaWdodFxuICpcbiAqIEBwYXJhbSBlbCAtIFNpZGViYXIgZWxlbWVudFxuICogQHBhcmFtIHZhbHVlIC0gU2lkZWJhciBoZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNpZGViYXJIZWlnaHQoXG4gIGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IG51bWJlclxuKTogdm9pZCB7XG4gIGVsLnN0eWxlLmhlaWdodCA9IGAke3ZhbHVlfXB4YFxufVxuXG4vKipcbiAqIFJlc2V0IHNpZGViYXIgaGVpZ2h0XG4gKlxuICogQHBhcmFtIGVsIC0gU2lkZWJhciBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFNpZGViYXJIZWlnaHQoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogdm9pZCB7XG4gIGVsLnN0eWxlLmhlaWdodCA9IFwiXCJcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiwgb2YsIHBpcGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCxcbiAgbWFwLFxuICBzd2l0Y2hNYXBcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgVmlld3BvcnQsIHdhdGNoVmlld3BvcnRBdCB9IGZyb20gXCJicm93c2VyXCJcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2hlYWRlclwiXG5pbXBvcnQgeyBhcHBseVRhYnMgfSBmcm9tIFwiLi4vcmVhY3RcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFRhYnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYWJzIHtcbiAgaGlkZGVuOiBib29sZWFuICAgICAgICAgICAgICAgICAgICAgIC8qIFdoZXRoZXIgdGhlIHRhYnMgYXJlIGhpZGRlbiAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBNb3VudCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBNb3VudE9wdGlvbnMge1xuICBoZWFkZXIkOiBPYnNlcnZhYmxlPEhlYWRlcj4gICAgICAgICAgLyogSGVhZGVyIG9ic2VydmFibGUgKi9cbiAgdmlld3BvcnQkOiBPYnNlcnZhYmxlPFZpZXdwb3J0PiAgICAgIC8qIFZpZXdwb3J0IG9ic2VydmFibGUgKi9cbiAgc2NyZWVuJDogT2JzZXJ2YWJsZTxib29sZWFuPiAgICAgICAgIC8qIE1lZGlhIHNjcmVlbiBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IHRhYnMgZnJvbSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50VGFicyhcbiAgeyBoZWFkZXIkLCB2aWV3cG9ydCQsIHNjcmVlbiQgfTogTW91bnRPcHRpb25zXG4pOiBPcGVyYXRvckZ1bmN0aW9uPEhUTUxFbGVtZW50LCBUYWJzPiB7XG4gIHJldHVybiBwaXBlKFxuICAgIHN3aXRjaE1hcChlbCA9PiBzY3JlZW4kXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHNjcmVlbiA9PiB7XG5cbiAgICAgICAgICAvKiBbc2NyZWVuICtdOiBNb3VudCB0YWJzIGFib3ZlIHNjcmVlbiBicmVha3BvaW50ICovXG4gICAgICAgICAgaWYgKHNjcmVlbikge1xuICAgICAgICAgICAgcmV0dXJuIHdhdGNoVmlld3BvcnRBdChlbCwgeyBoZWFkZXIkLCB2aWV3cG9ydCQgfSlcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7IG9mZnNldDogeyB5IH0gfSkgPT4gKHsgaGlkZGVuOiB5ID49IDEwIH0pKSxcbiAgICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZChcImhpZGRlblwiKSxcbiAgICAgICAgICAgICAgICBhcHBseVRhYnMoZWwpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgIC8qIFtzY3JlZW4gLV06IFVubW91bnQgdGFicyBiZWxvdyBzY3JlZW4gYnJlYWtwb2ludCAqL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb2YoeyBoaWRkZW46IHRydWUgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmV4cG9ydCAqIGZyb20gXCIuL19cIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVhY3RcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2V0XCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtcbiAgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLFxuICBhbmltYXRpb25GcmFtZVNjaGVkdWxlcixcbiAgcGlwZVxufSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBmaW5hbGl6ZSwgb2JzZXJ2ZU9uLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBUYWJzIH0gZnJvbSBcIi4uL19cIlxuaW1wb3J0IHtcbiAgcmVzZXRUYWJzSGlkZGVuLFxuICBzZXRUYWJzSGlkZGVuXG59IGZyb20gXCIuLi9zZXRcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBBcHBseSB0YWJzXG4gKlxuICogQHBhcmFtIGVsIC0gVGFicyBlbGVtZW50XG4gKlxuICogQHJldHVybiBPcGVyYXRvciBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlUYWJzKFxuICBlbDogSFRNTEVsZW1lbnRcbik6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUYWJzPiB7XG4gIHJldHVybiBwaXBlKFxuXG4gICAgLyogRGVmZXIgcmVwYWludCB0byBuZXh0IGFuaW1hdGlvbiBmcmFtZSAqL1xuICAgIG9ic2VydmVPbihhbmltYXRpb25GcmFtZVNjaGVkdWxlciksXG4gICAgdGFwKCh7IGhpZGRlbiB9KSA9PiB7XG4gICAgICBzZXRUYWJzSGlkZGVuKGVsLCBoaWRkZW4pXG4gICAgfSksXG5cbiAgICAvKiBSZXNldCBvbiBjb21wbGV0ZSBvciBlcnJvciAqL1xuICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgIHJlc2V0VGFic0hpZGRlbihlbClcbiAgICB9KVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCB0YWJzIGhpZGRlblxuICpcbiAqIEBwYXJhbSBlbCAtIFRhYnMgZWxlbWVudFxuICogQHBhcmFtIHZhbHVlIC0gV2hldGhlciB0aGUgZWxlbWVudCBpcyBoaWRkZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFRhYnNIaWRkZW4oXG4gIGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IGJvb2xlYW5cbik6IHZvaWQge1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIHZhbHVlID8gXCJoaWRkZW5cIiA6IFwiXCIpXG59XG5cbi8qKlxuICogUmVzZXQgdGFicyBoaWRkZW5cbiAqXG4gKiBAcGFyYW0gZWwgLSBUYWJzIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VGFic0hpZGRlbihcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiB2b2lkIHtcbiAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBPcGVyYXRvckZ1bmN0aW9uLFxuICBjb21iaW5lTGF0ZXN0LFxuICBvZixcbiAgcGlwZVxufSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IFZpZXdwb3J0LCBnZXRFbGVtZW50cyB9IGZyb20gXCJicm93c2VyXCJcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uLy4uL2hlYWRlclwiXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIi4uLy4uL21haW5cIlxuaW1wb3J0IHtcbiAgU2lkZWJhcixcbiAgYXBwbHlTaWRlYmFyLFxuICB3YXRjaFNpZGViYXJcbn0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiXG5pbXBvcnQge1xuICBBbmNob3JMaXN0LFxuICBhcHBseUFuY2hvckxpc3QsXG4gIHdhdGNoQW5jaG9yTGlzdFxufSBmcm9tIFwiLi4vYW5jaG9yXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUYWJsZSBvZiBjb250ZW50cyBmb3IgW3RhYmxldCAtXVxuICovXG5pbnRlcmZhY2UgVGFibGVPZkNvbnRlbnRzQmVsb3dUYWJsZXQge30gLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4vKipcbiAqIFRhYmxlIG9mIGNvbnRlbnRzIGZvciBbdGFibGV0ICtdXG4gKi9cbmludGVyZmFjZSBUYWJsZU9mQ29udGVudHNBYm92ZVRhYmxldCB7XG4gIHNpZGViYXI6IFNpZGViYXIgICAgICAgICAgICAgICAgICAgICAvKiBTaWRlYmFyICovXG4gIGFuY2hvcnM6IEFuY2hvckxpc3QgICAgICAgICAgICAgICAgICAvKiBBbmNob3IgbGlzdCAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogVGFibGUgb2YgY29udGVudHNcbiAqL1xuZXhwb3J0IHR5cGUgVGFibGVPZkNvbnRlbnRzID1cbiAgfCBUYWJsZU9mQ29udGVudHNCZWxvd1RhYmxldFxuICB8IFRhYmxlT2ZDb250ZW50c0Fib3ZlVGFibGV0XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIE1vdW50T3B0aW9ucyB7XG4gIGhlYWRlciQ6IE9ic2VydmFibGU8SGVhZGVyPiAgICAgICAgICAvKiBIZWFkZXIgb2JzZXJ2YWJsZSAqL1xuICBtYWluJDogT2JzZXJ2YWJsZTxNYWluPiAgICAgICAgICAgICAgLyogTWFpbiBhcmVhIG9ic2VydmFibGUgKi9cbiAgdmlld3BvcnQkOiBPYnNlcnZhYmxlPFZpZXdwb3J0PiAgICAgIC8qIFZpZXdwb3J0IG9ic2VydmFibGUgKi9cbiAgdGFibGV0JDogT2JzZXJ2YWJsZTxib29sZWFuPiAgICAgICAgIC8qIFRhYmxldCBtZWRpYSBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1vdW50IHRhYmxlIG9mIGNvbnRlbnRzIGZyb20gc291cmNlIG9ic2VydmFibGVcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuIE9wZXJhdG9yIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFRhYmxlT2ZDb250ZW50cyhcbiAgeyBoZWFkZXIkLCBtYWluJCwgdmlld3BvcnQkLCB0YWJsZXQkIH06IE1vdW50T3B0aW9uc1xuKTogT3BlcmF0b3JGdW5jdGlvbjxIVE1MRWxlbWVudCwgVGFibGVPZkNvbnRlbnRzPiB7XG4gIHJldHVybiBwaXBlKFxuICAgIHN3aXRjaE1hcChlbCA9PiB0YWJsZXQkXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHRhYmxldCA9PiB7XG5cbiAgICAgICAgICAvKiBbdGFibGV0ICtdOiBNb3VudCB0YWJsZSBvZiBjb250ZW50cyBpbiBzaWRlYmFyICovXG4gICAgICAgICAgaWYgKHRhYmxldCkge1xuICAgICAgICAgICAgY29uc3QgZWxzID0gZ2V0RWxlbWVudHM8SFRNTEFuY2hvckVsZW1lbnQ+KFwiLm1kLW5hdl9fbGlua1wiLCBlbClcblxuICAgICAgICAgICAgLyogV2F0Y2ggYW5kIGFwcGx5IHNpZGViYXIgKi9cbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXIkID0gd2F0Y2hTaWRlYmFyKGVsLCB7IG1haW4kLCB2aWV3cG9ydCQgfSlcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgYXBwbHlTaWRlYmFyKGVsLCB7IGhlYWRlciQgfSlcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvKiBXYXRjaCBhbmQgYXBwbHkgYW5jaG9yIGxpc3QgKHNjcm9sbCBzcHkpICovXG4gICAgICAgICAgICBjb25zdCBhbmNob3JzJCA9IHdhdGNoQW5jaG9yTGlzdChlbHMsIHsgaGVhZGVyJCwgdmlld3BvcnQkIH0pXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGFwcGx5QW5jaG9yTGlzdChlbHMpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgLyogQ29tYmluZSBpbnRvIHNpbmdsZSBob3Qgb2JzZXJ2YWJsZSAqL1xuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW3NpZGViYXIkLCBhbmNob3JzJF0pXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoW3NpZGViYXIsIGFuY2hvcnNdKSA9PiAoeyBzaWRlYmFyLCBhbmNob3JzIH0pKVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAvKiBbdGFibGV0IC1dOiBVbm1vdW50IHRhYmxlIG9mIGNvbnRlbnRzICovXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7fSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKVxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQW5jaG9yIGxpc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmNob3JMaXN0IHtcbiAgcHJldjogSFRNTEFuY2hvckVsZW1lbnRbXVtdICAgICAgICAgIC8qIEFuY2hvcnMgKHByZXZpb3VzKSAqL1xuICBuZXh0OiBIVE1MQW5jaG9yRWxlbWVudFtdW10gICAgICAgICAgLyogQW5jaG9ycyAobmV4dCkgKi9cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWFjdFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXRcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSBcInJhbWRhXCJcbmltcG9ydCB7XG4gIE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbixcbiAgT2JzZXJ2YWJsZSxcbiAgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsXG4gIGNvbWJpbmVMYXRlc3QsXG4gIHBpcGVcbn0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHtcbiAgYnVmZmVyQ291bnQsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCxcbiAgZmluYWxpemUsXG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBzY2FuLFxuICBzdGFydFdpdGgsXG4gIHN3aXRjaE1hcCxcbiAgdGFwXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IFZpZXdwb3J0LCBnZXRFbGVtZW50LCB3YXRjaEVsZW1lbnRTaXplIH0gZnJvbSBcImJyb3dzZXJcIlxuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vLi4vLi4vaGVhZGVyXCJcbmltcG9ydCB7IEFuY2hvckxpc3QgfSBmcm9tIFwiLi4vX1wiXG5pbXBvcnQge1xuICByZXNldEFuY2hvckFjdGl2ZSxcbiAgcmVzZXRBbmNob3JCbHVyLFxuICBzZXRBbmNob3JBY3RpdmUsXG4gIHNldEFuY2hvckJsdXJcbn0gZnJvbSBcIi4uL3NldFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFdhdGNoIG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIFdhdGNoT3B0aW9ucyB7XG4gIGhlYWRlciQ6IE9ic2VydmFibGU8SGVhZGVyPiAgICAgICAgICAvKiBIZWFkZXIgb2JzZXJ2YWJsZSAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBXYXRjaCBhbmNob3IgbGlzdFxuICpcbiAqIFRoaXMgaXMgZWZmZWN0aXZlbHkgYSBzY3JvbGwtc3B5IGltcGxlbWVudGF0aW9uIHdoaWNoIHdpbGwgYWNjb3VudCBmb3IgdGhlXG4gKiBmaXhlZCBoZWFkZXIgYW5kIGF1dG9tYXRpY2FsbHkgcmUtY2FsY3VsYXRlIGFuY2hvciBvZmZzZXRzIHdoZW4gdGhlIHZpZXdwb3J0XG4gKiBpcyByZXNpemVkLiBUaGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSB3aWxsIG9ubHkgZW1pdCBpZiB0aGUgYW5jaG9yIGxpc3QgbmVlZHNcbiAqIHRvIGJlIHJlcGFpbnRlZC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIHRyYWNrcyBhbiBhbmNob3IgZWxlbWVudCdzIGVudGlyZSBwYXRoIHN0YXJ0aW5nIGZyb20gaXRzXG4gKiBsZXZlbCB1cCB0byB0aGUgdG9wLW1vc3QgYW5jaG9yIGVsZW1lbnQsIGUuZy4gYFtoMywgaDIsIGgxXWAuIEFsdGhvdWdoIHRoZVxuICogTWF0ZXJpYWwgdGhlbWUgY3VycmVudGx5IGRvZXNuJ3QgbWFrZSB1c2Ugb2YgdGhpcyBpbmZvcm1hdGlvbiwgaXQgZW5hYmxlc1xuICogdGhlIHN0eWxpbmcgb2YgdGhlIGVudGlyZSBoaWVyYXJjaHkgdGhyb3VnaCBjdXN0b21pemF0aW9uLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY3VycmVudCBhbmNob3IgaXMgdGhlIGxhc3QgaXRlbSBvZiB0aGUgYHByZXZgIGFuY2hvciBsaXN0LlxuICpcbiAqIEBwYXJhbSBlbHMgLSBBbmNob3IgZWxlbWVudHNcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gQW5jaG9yIGxpc3Qgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hBbmNob3JMaXN0KFxuICBlbHM6IEhUTUxBbmNob3JFbGVtZW50W10sIHsgaGVhZGVyJCwgdmlld3BvcnQkIH06IFdhdGNoT3B0aW9uc1xuKTogT2JzZXJ2YWJsZTxBbmNob3JMaXN0PiB7XG4gIGNvbnN0IHRhYmxlID0gbmV3IE1hcDxIVE1MQW5jaG9yRWxlbWVudCwgSFRNTEVsZW1lbnQ+KClcbiAgZm9yIChjb25zdCBlbCBvZiBlbHMpIHtcbiAgICBjb25zdCBpZCA9IGRlY29kZVVSSUNvbXBvbmVudChlbC5oYXNoLnN1YnN0cmluZygxKSlcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50KGBbaWQ9XCIke2lkfVwiXWApXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0YWJsZS5zZXQoZWwsIHRhcmdldClcbiAgfVxuXG4gIC8qIENvbXB1dGUgbmVjZXNzYXJ5IGFkanVzdG1lbnQgZm9yIGhlYWRlciAqL1xuICBjb25zdCBhZGp1c3QkID0gaGVhZGVyJFxuICAgIC5waXBlKFxuICAgICAgbWFwKGhlYWRlciA9PiAxOCArIGhlYWRlci5oZWlnaHQpXG4gICAgKVxuXG4gIC8qIENvbXB1dGUgcGFydGl0aW9uIG9mIHByZXZpb3VzIGFuZCBuZXh0IGFuY2hvcnMgKi9cbiAgY29uc3QgcGFydGl0aW9uJCA9IHdhdGNoRWxlbWVudFNpemUoZG9jdW1lbnQuYm9keSlcbiAgICAucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkKFwiaGVpZ2h0XCIpLFxuXG4gICAgICAvKiBCdWlsZCBpbmRleCB0byBtYXAgYW5jaG9yIHBhdGhzIHRvIHZlcnRpY2FsIG9mZnNldHMgKi9cbiAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgIGxldCBwYXRoOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW11cbiAgICAgICAgcmV0dXJuIFsuLi50YWJsZV0ucmVkdWNlKChpbmRleCwgW2FuY2hvciwgdGFyZ2V0XSkgPT4ge1xuICAgICAgICAgIHdoaWxlIChwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHRhYmxlLmdldChwYXRoW3BhdGgubGVuZ3RoIC0gMV0pIVxuICAgICAgICAgICAgaWYgKGxhc3QudGFnTmFtZSA+PSB0YXJnZXQudGFnTmFtZSkge1xuICAgICAgICAgICAgICBwYXRoLnBvcCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIElmIHRoZSBjdXJyZW50IGFuY2hvciBpcyBoaWRkZW4sIGNvbnRpbnVlIHdpdGggaXRzIHBhcmVudCAqL1xuICAgICAgICAgIGxldCBvZmZzZXQgPSB0YXJnZXQub2Zmc2V0VG9wXG4gICAgICAgICAgd2hpbGUgKCFvZmZzZXQgJiYgdGFyZ2V0LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICBvZmZzZXQgPSB0YXJnZXQub2Zmc2V0VG9wXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTWFwIHJldmVyc2VkIGFuY2hvciBwYXRoIHRvIHZlcnRpY2FsIG9mZnNldCAqL1xuICAgICAgICAgIHJldHVybiBpbmRleC5zZXQoXG4gICAgICAgICAgICByZXZlcnNlKHBhdGggPSBbLi4ucGF0aCwgYW5jaG9yXSksXG4gICAgICAgICAgICBvZmZzZXRcbiAgICAgICAgICApXG4gICAgICAgIH0sIG5ldyBNYXA8SFRNTEFuY2hvckVsZW1lbnRbXSwgbnVtYmVyPigpKVxuICAgICAgfSksXG5cbiAgICAgIC8qIFJlLWNvbXB1dGUgcGFydGl0aW9uIHdoZW4gdmlld3BvcnQgb2Zmc2V0IGNoYW5nZXMgKi9cbiAgICAgIHN3aXRjaE1hcChpbmRleCA9PiBjb21iaW5lTGF0ZXN0KFthZGp1c3QkLCB2aWV3cG9ydCRdKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzY2FuKChbcHJldiwgbmV4dF0sIFthZGp1c3QsIHsgb2Zmc2V0OiB7IHkgfSB9XSkgPT4ge1xuXG4gICAgICAgICAgICAvKiBMb29rIGZvcndhcmQgKi9cbiAgICAgICAgICAgIHdoaWxlIChuZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICBjb25zdCBbLCBvZmZzZXRdID0gbmV4dFswXVxuICAgICAgICAgICAgICBpZiAob2Zmc2V0IC0gYWRqdXN0IDwgeSkge1xuICAgICAgICAgICAgICAgIHByZXYgPSBbLi4ucHJldiwgbmV4dC5zaGlmdCgpIV1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIExvb2sgYmFja3dhcmQgKi9cbiAgICAgICAgICAgIHdoaWxlIChwcmV2Lmxlbmd0aCkge1xuICAgICAgICAgICAgICBjb25zdCBbLCBvZmZzZXRdID0gcHJldltwcmV2Lmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIGlmIChvZmZzZXQgLSBhZGp1c3QgPj0geSkge1xuICAgICAgICAgICAgICAgIG5leHQgPSBbcHJldi5wb3AoKSEsIC4uLm5leHRdXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiBSZXR1cm4gcGFydGl0aW9uICovXG4gICAgICAgICAgICByZXR1cm4gW3ByZXYsIG5leHRdXG4gICAgICAgICAgfSwgW1tdLCBbLi4uaW5kZXhdXSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhWzBdID09PSBiWzBdXG4gICAgICAgICAgICAgICAgJiYgYVsxXSA9PT0gYlsxXVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG5cbiAgLyogQ29tcHV0ZSBhbmQgcmV0dXJuIGFuY2hvciBsaXN0IG1pZ3JhdGlvbnMgKi9cbiAgcmV0dXJuIHBhcnRpdGlvbiRcbiAgICAucGlwZShcbiAgICAgIG1hcCgoW3ByZXYsIG5leHRdKSA9PiAoe1xuICAgICAgICBwcmV2OiBwcmV2Lm1hcCgoW3BhdGhdKSA9PiBwYXRoKSxcbiAgICAgICAgbmV4dDogbmV4dC5tYXAoKFtwYXRoXSkgPT4gcGF0aClcbiAgICAgIH0pKSxcblxuICAgICAgLyogRXh0cmFjdCBhbmNob3IgbGlzdCBtaWdyYXRpb25zICovXG4gICAgICBzdGFydFdpdGgoeyBwcmV2OiBbXSwgbmV4dDogW10gfSksXG4gICAgICBidWZmZXJDb3VudCgyLCAxKSxcbiAgICAgIG1hcCgoW2EsIGJdKSA9PiB7XG5cbiAgICAgICAgLyogTW92aW5nIGRvd24gKi9cbiAgICAgICAgaWYgKGEucHJldi5sZW5ndGggPCBiLnByZXYubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXY6IGIucHJldi5zbGljZShNYXRoLm1heCgwLCBhLnByZXYubGVuZ3RoIC0gMSksIGIucHJldi5sZW5ndGgpLFxuICAgICAgICAgICAgbmV4dDogW11cbiAgICAgICAgICB9XG5cbiAgICAgICAgLyogTW92aW5nIHVwICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXY6IGIucHJldi5zbGljZSgtMSksXG4gICAgICAgICAgICBuZXh0OiBiLm5leHQuc2xpY2UoMCwgYi5uZXh0Lmxlbmd0aCAtIGEubmV4dC5sZW5ndGgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEFwcGx5IGFuY2hvciBsaXN0XG4gKlxuICogQHBhcmFtIGVscyAtIEFuY2hvciBlbGVtZW50c1xuICpcbiAqIEByZXR1cm4gT3BlcmF0b3IgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5QW5jaG9yTGlzdChcbiAgZWxzOiBIVE1MQW5jaG9yRWxlbWVudFtdXG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248QW5jaG9yTGlzdD4ge1xuICByZXR1cm4gcGlwZShcblxuICAgIC8qIERlZmVyIHJlcGFpbnQgdG8gbmV4dCBhbmltYXRpb24gZnJhbWUgKi9cbiAgICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxuICAgIHRhcCgoeyBwcmV2LCBuZXh0IH0pID0+IHtcblxuICAgICAgLyogTG9vayBmb3J3YXJkICovXG4gICAgICBmb3IgKGNvbnN0IFtlbF0gb2YgbmV4dCkge1xuICAgICAgICByZXNldEFuY2hvckFjdGl2ZShlbClcbiAgICAgICAgcmVzZXRBbmNob3JCbHVyKGVsKVxuICAgICAgfVxuXG4gICAgICAvKiBMb29rIGJhY2t3YXJkICovXG4gICAgICBwcmV2LmZvckVhY2goKFtlbF0sIGluZGV4KSA9PiB7XG4gICAgICAgIHNldEFuY2hvckFjdGl2ZShlbCwgaW5kZXggPT09IHByZXYubGVuZ3RoIC0gMSlcbiAgICAgICAgc2V0QW5jaG9yQmx1cihlbCwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfSksXG5cbiAgICAvKiBSZXNldCBvbiBjb21wbGV0ZSBvciBlcnJvciAqL1xuICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZWwgb2YgZWxzKSB7XG4gICAgICAgIHJlc2V0QW5jaG9yQWN0aXZlKGVsKVxuICAgICAgICByZXNldEFuY2hvckJsdXIoZWwpXG4gICAgICB9XG4gICAgfSlcbiAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXQgYW5jaG9yIGJsdXJcbiAqXG4gKiBAcGFyYW0gZWwgLSBBbmNob3IgZWxlbWVudFxuICogQHBhcmFtIHZhbHVlIC0gV2hldGhlciB0aGUgYW5jaG9yIGlzIGJsdXJyZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFuY2hvckJsdXIoXG4gIGVsOiBIVE1MRWxlbWVudCwgdmFsdWU6IGJvb2xlYW5cbik6IHZvaWQge1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIHZhbHVlID8gXCJibHVyXCIgOiBcIlwiKVxufVxuXG4vKipcbiAqIFJlc2V0IGFuY2hvciBibHVyXG4gKlxuICogQHBhcmFtIGVsIC0gQW5jaG9yIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0QW5jaG9yQmx1cihcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiB2b2lkIHtcbiAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IGFuY2hvciBhY3RpdmVcbiAqXG4gKiBAcGFyYW0gZWwgLSBBbmNob3IgZWxlbWVudFxuICogQHBhcmFtIHZhbHVlIC0gV2hldGhlciB0aGUgYW5jaG9yIGlzIGFjdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QW5jaG9yQWN0aXZlKFxuICBlbDogSFRNTEVsZW1lbnQsIHZhbHVlOiBib29sZWFuXG4pOiB2b2lkIHtcbiAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIm1kLW5hdl9fbGluay0tYWN0aXZlXCIsIHZhbHVlKVxufVxuXG4vKipcbiAqIFJlc2V0IGFuY2hvciBhY3RpdmVcbiAqXG4gKiBAcGFyYW0gZWwgLSBBbmNob3IgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRBbmNob3JBY3RpdmUoXG4gIGVsOiBIVE1MRWxlbWVudFxuKTogdm9pZCB7XG4gIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJtZC1uYXZfX2xpbmstLWFjdGl2ZVwiKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9fXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FuY2hvclwiXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8vIERJU0NMQUlNRVI6IHRoaXMgZmlsZSBpcyBzdGlsbCBXSVAuIFRoZXJlJ3JlIHNvbWUgcmVmYWN0b3Jpbmcgb3Bwb3J0dW5pdGllc1xuLy8gd2hpY2ggbXVzdCBiZSB0YWNrbGVkIGFmdGVyIHdlIGdhdGhlcmVkIHNvbWUgZmVlZGJhY2sgb24gdjUuXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuXG5pbXBvcnQgeyBzb3J0QnksIHByb3AsIHZhbHVlcyB9IGZyb20gXCJyYW1kYVwiXG5pbXBvcnQge1xuICBtZXJnZSxcbiAgY29tYmluZUxhdGVzdCxcbiAgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsXG4gIGZyb21FdmVudCxcbiAgZnJvbSxcbiAgZGVmZXIsXG4gIG9mLFxuICBORVZFUlxufSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBhamF4IH0gZnJvbSBcInJ4anMvYWpheFwiXG5pbXBvcnQge1xuICBkZWxheSxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG4gIGZpbHRlcixcbiAgd2l0aExhdGVzdEZyb20sXG4gIG9ic2VydmVPbixcbiAgdGFrZSxcbiAgc2hhcmVSZXBsYXksXG4gIHBsdWNrLFxuICBjYXRjaEVycm9yLFxuICBtYXBcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHtcbiAgd2F0Y2hUb2dnbGUsXG4gIHNldFRvZ2dsZSxcbiAgZ2V0RWxlbWVudHMsXG4gIHdhdGNoTWVkaWEsXG4gIHdhdGNoRG9jdW1lbnQsXG4gIHdhdGNoTG9jYXRpb24sXG4gIHdhdGNoTG9jYXRpb25IYXNoLFxuICB3YXRjaFZpZXdwb3J0LFxuICBpc0xvY2FsTG9jYXRpb24sXG4gIHNldExvY2F0aW9uSGFzaCxcbiAgd2F0Y2hMb2NhdGlvbkJhc2Vcbn0gZnJvbSBcImJyb3dzZXJcIlxuaW1wb3J0IHtcbiAgbW91bnRIZWFkZXIsXG4gIG1vdW50SGVybyxcbiAgbW91bnRNYWluLFxuICBtb3VudE5hdmlnYXRpb24sXG4gIG1vdW50U2VhcmNoLFxuICBtb3VudFRhYmxlT2ZDb250ZW50cyxcbiAgbW91bnRUYWJzLFxuICB1c2VDb21wb25lbnQsXG4gIHNldHVwQ29tcG9uZW50cyxcbiAgbW91bnRTZWFyY2hRdWVyeSxcbiAgbW91bnRTZWFyY2hSZXNldCxcbiAgbW91bnRTZWFyY2hSZXN1bHRcbn0gZnJvbSBcImNvbXBvbmVudHNcIlxuaW1wb3J0IHtcbiAgc2V0dXBDbGlwYm9hcmQsXG4gIHNldHVwRGlhbG9nLFxuICBzZXR1cEtleWJvYXJkLFxuICBzZXR1cEluc3RhbnRMb2FkaW5nLFxuICBzZXR1cFNlYXJjaFdvcmtlcixcbiAgU2VhcmNoSW5kZXhcbn0gZnJvbSBcImludGVncmF0aW9uc1wiXG5pbXBvcnQge1xuICBwYXRjaENvZGVCbG9ja3MsXG4gIHBhdGNoVGFibGVzLFxuICBwYXRjaERldGFpbHMsXG4gIHBhdGNoU2Nyb2xsZml4LFxuICBwYXRjaFNvdXJjZSxcbiAgcGF0Y2hTY3JpcHRzXG59IGZyb20gXCJwYXRjaGVzXCJcbmltcG9ydCB7IGlzQ29uZmlnIH0gZnJvbSBcInV0aWxpdGllc1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogRGVub3RlIHRoYXQgSmF2YVNjcmlwdCBpcyBhdmFpbGFibGUgKi9cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIilcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwianNcIilcblxuLyogVGVzdCBmb3IgaU9TICovXG5pZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpKVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlvc1wiKVxuXG4vKipcbiAqIFNldCBzY3JvbGwgbG9ja1xuICpcbiAqIEBwYXJhbSBlbCAtIFNjcm9sbGFibGUgZWxlbWVudFxuICogQHBhcmFtIHZhbHVlIC0gVmVydGljYWwgb2Zmc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY3JvbGxMb2NrKFxuICBlbDogSFRNTEVsZW1lbnQsIHZhbHVlOiBudW1iZXJcbik6IHZvaWQge1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwibG9ja1wiKVxuICBlbC5zdHlsZS50b3AgPSBgLSR7dmFsdWV9cHhgXG59XG5cbi8qKlxuICogUmVzZXQgc2Nyb2xsIGxvY2tcbiAqXG4gKiBAcGFyYW0gZWwgLSBTY3JvbGxhYmxlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2Nyb2xsTG9jayhcbiAgZWw6IEhUTUxFbGVtZW50XG4pOiB2b2lkIHtcbiAgY29uc3QgdmFsdWUgPSAtMSAqIHBhcnNlSW50KGVsLnN0eWxlLnRvcCwgMTApXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbWQtc3RhdGVcIilcbiAgZWwuc3R5bGUudG9wID0gXCJcIlxuICBpZiAodmFsdWUpXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHZhbHVlKVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBJbml0aWFsaXplIE1hdGVyaWFsIGZvciBNa0RvY3NcbiAqXG4gKiBAcGFyYW0gY29uZmlnIC0gQ29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWc6IHVua25vd24pIHtcbiAgaWYgKCFpc0NvbmZpZyhjb25maWcpKVxuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW52YWxpZCBjb25maWd1cmF0aW9uOiAke0pTT04uc3RyaW5naWZ5KGNvbmZpZyl9YClcblxuICAvKiBTZXQgdXAgc3ViamVjdHMgKi9cbiAgY29uc3QgZG9jdW1lbnQkID0gd2F0Y2hEb2N1bWVudCgpXG4gIGNvbnN0IGxvY2F0aW9uJCA9IHdhdGNoTG9jYXRpb24oKVxuXG4gIC8qIFNldCB1cCB1c2VyIGludGVyZmFjZSBvYnNlcnZhYmxlcyAqL1xuICBjb25zdCBiYXNlJCAgICAgPSB3YXRjaExvY2F0aW9uQmFzZShjb25maWcuYmFzZSwgeyBsb2NhdGlvbiQgfSlcbiAgY29uc3QgaGFzaCQgICAgID0gd2F0Y2hMb2NhdGlvbkhhc2goKVxuICBjb25zdCB2aWV3cG9ydCQgPSB3YXRjaFZpZXdwb3J0KClcbiAgY29uc3QgdGFibGV0JCAgID0gd2F0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk2MHB4KVwiKVxuICBjb25zdCBzY3JlZW4kICAgPSB3YXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTIyMHB4KVwiKVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgLyogU2V0IHVwIGNvbXBvbmVudCBiaW5kaW5ncyAqL1xuICBzZXR1cENvbXBvbmVudHMoW1xuICAgIFwiYW5ub3VuY2VcIiwgICAgICAgICAgICAgICAgICAgICAgICAvKiBBbm5vdW5jZW1lbnQgYmFyICovXG4gICAgXCJjb250YWluZXJcIiwgICAgICAgICAgICAgICAgICAgICAgIC8qIENvbnRhaW5lciAqL1xuICAgIFwiaGVhZGVyXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBIZWFkZXIgKi9cbiAgICBcImhlYWRlci10aXRsZVwiLCAgICAgICAgICAgICAgICAgICAgLyogSGVhZGVyIHRpdGxlICovXG4gICAgXCJoZXJvXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEhlcm8gKi9cbiAgICBcIm1haW5cIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogTWFpbiBhcmVhICovXG4gICAgXCJuYXZpZ2F0aW9uXCIsICAgICAgICAgICAgICAgICAgICAgIC8qIE5hdmlnYXRpb24gKi9cbiAgICBcInNlYXJjaFwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoICovXG4gICAgXCJzZWFyY2gtcXVlcnlcIiwgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBpbnB1dCAqL1xuICAgIFwic2VhcmNoLXJlc2V0XCIsICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggcmVzZXQgKi9cbiAgICBcInNlYXJjaC1yZXN1bHRcIiwgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIHJlc3VsdHMgKi9cbiAgICBcInNraXBcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogU2tpcCBsaW5rICovXG4gICAgXCJ0YWJzXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRhYnMgKi9cbiAgICBcInRvY1wiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVGFibGUgb2YgY29udGVudHMgKi9cbiAgXSwgeyBkb2N1bWVudCQgfSlcblxuICBjb25zdCBrZXlib2FyZCQgPSBzZXR1cEtleWJvYXJkKClcblxuICAvLyBIYWNrOiBvbmx5IG1ha2UgY29kZSBibG9ja3MgZm9jdXNhYmxlIG9uIG5vbi10b3VjaCBkZXZpY2VzXG4gIGlmIChtYXRjaE1lZGlhKFwiKGhvdmVyKVwiKS5tYXRjaGVzKVxuICAgIHBhdGNoQ29kZUJsb2Nrcyh7IGRvY3VtZW50JCwgdmlld3BvcnQkIH0pXG4gIHBhdGNoRGV0YWlscyh7IGRvY3VtZW50JCwgaGFzaCQgfSlcbiAgcGF0Y2hTY3JpcHRzKHsgZG9jdW1lbnQkIH0pXG4gIHBhdGNoU291cmNlKHsgZG9jdW1lbnQkIH0pXG4gIHBhdGNoVGFibGVzKHsgZG9jdW1lbnQkIH0pXG5cbiAgLyogRm9yY2UgMXB4IHNjcm9sbCBvZmZzZXQgdG8gdHJpZ2dlciBvdmVyZmxvdyBzY3JvbGxpbmcgKi9cbiAgcGF0Y2hTY3JvbGxmaXgoeyBkb2N1bWVudCQgfSlcblxuICAvKiBTZXQgdXAgY2xpcGJvYXJkIGFuZCBkaWFsb2cgKi9cbiAgY29uc3QgZGlhbG9nJCA9IHNldHVwRGlhbG9nKClcbiAgY29uc3QgY2xpcGJvYXJkJCA9IHNldHVwQ2xpcGJvYXJkKHsgZG9jdW1lbnQkLCBkaWFsb2ckIH0pXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAvKiBDcmVhdGUgaGVhZGVyIG9ic2VydmFibGUgKi9cbiAgY29uc3QgaGVhZGVyJCA9IHVzZUNvbXBvbmVudChcImhlYWRlclwiKVxuICAgIC5waXBlKFxuICAgICAgbW91bnRIZWFkZXIoeyBkb2N1bWVudCQsIHZpZXdwb3J0JCB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxuXG4gIGNvbnN0IG1haW4kID0gdXNlQ29tcG9uZW50KFwibWFpblwiKVxuICAgIC5waXBlKFxuICAgICAgbW91bnRNYWluKHsgaGVhZGVyJCwgdmlld3BvcnQkIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBjb25zdCBuYXZpZ2F0aW9uJCA9IHVzZUNvbXBvbmVudChcIm5hdmlnYXRpb25cIilcbiAgICAucGlwZShcbiAgICAgIG1vdW50TmF2aWdhdGlvbih7IGhlYWRlciQsIG1haW4kLCB2aWV3cG9ydCQsIHNjcmVlbiQgfSksXG4gICAgICBzaGFyZVJlcGxheSgxKSAvLyBzaGFyZVJlcGxheSBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIGxhdGUgc3Vic2NyaWJlcnNcbiAgICApXG5cbiAgY29uc3QgdG9jJCA9IHVzZUNvbXBvbmVudChcInRvY1wiKVxuICAgIC5waXBlKFxuICAgICAgbW91bnRUYWJsZU9mQ29udGVudHMoeyBoZWFkZXIkLCBtYWluJCwgdmlld3BvcnQkLCB0YWJsZXQkIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApXG5cbiAgY29uc3QgdGFicyQgPSB1c2VDb21wb25lbnQoXCJ0YWJzXCIpXG4gICAgLnBpcGUoXG4gICAgICBtb3VudFRhYnMoeyBoZWFkZXIkLCB2aWV3cG9ydCQsIHNjcmVlbiQgfSksXG4gICAgICBzaGFyZVJlcGxheSgxKVxuICAgIClcblxuICBjb25zdCBoZXJvJCA9IHVzZUNvbXBvbmVudChcImhlcm9cIilcbiAgICAucGlwZShcbiAgICAgIG1vdW50SGVybyh7IGhlYWRlciQsIHZpZXdwb3J0JCB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgLyogU2VhcmNoIHdvcmtlciAqL1xuICBjb25zdCB3b3JrZXIkID0gZGVmZXIoKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gY29uZmlnLnNlYXJjaCAmJiBjb25maWcuc2VhcmNoLmluZGV4XG4gICAgICA/IGNvbmZpZy5zZWFyY2guaW5kZXhcbiAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAvKiBGZXRjaCBpbmRleCBpZiBpdCB3YXNuJ3QgcGFzc2VkIGV4cGxpY2l0bHkgKi9cbiAgICBjb25zdCBpbmRleCQgPSB0eXBlb2YgaW5kZXggIT09IFwidW5kZWZpbmVkXCJcbiAgICAgID8gZnJvbShpbmRleClcbiAgICAgIDogYmFzZSRcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChiYXNlID0+IGFqYXgoe1xuICAgICAgICAgICAgICB1cmw6IGAke2Jhc2V9L3NlYXJjaC9zZWFyY2hfaW5kZXguanNvbmAsXG4gICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnBpcGU8U2VhcmNoSW5kZXg+KFxuICAgICAgICAgICAgICAgIHBsdWNrKFwicmVzcG9uc2VcIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgIHJldHVybiBvZihzZXR1cFNlYXJjaFdvcmtlcihjb25maWcuc2VhcmNoLndvcmtlciwge1xuICAgICAgYmFzZSQsIGluZGV4JFxuICAgIH0pKVxuICB9KVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgLyogTW91bnQgc2VhcmNoIHF1ZXJ5ICovXG4gIGNvbnN0IHNlYXJjaCQgPSB3b3JrZXIkXG4gICAgLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAod29ya2VyID0+IHtcblxuICAgICAgICBjb25zdCBxdWVyeSQgPSB1c2VDb21wb25lbnQoXCJzZWFyY2gtcXVlcnlcIilcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1vdW50U2VhcmNoUXVlcnkod29ya2VyLCB7IHRyYW5zZm9ybTogY29uZmlnLnNlYXJjaC50cmFuc2Zvcm0gfSksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgIClcblxuICAgICAgICAvKiBNb3VudCBzZWFyY2ggcmVzZXQgKi9cbiAgICAgICAgY29uc3QgcmVzZXQkID0gdXNlQ29tcG9uZW50KFwic2VhcmNoLXJlc2V0XCIpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtb3VudFNlYXJjaFJlc2V0KCksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgIClcblxuICAgICAgICAvKiBNb3VudCBzZWFyY2ggcmVzdWx0ICovXG4gICAgICAgIGNvbnN0IHJlc3VsdCQgPSB1c2VDb21wb25lbnQoXCJzZWFyY2gtcmVzdWx0XCIpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtb3VudFNlYXJjaFJlc3VsdCh3b3JrZXIsIHsgcXVlcnkkIH0pLFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIHVzZUNvbXBvbmVudChcInNlYXJjaFwiKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbW91bnRTZWFyY2god29ya2VyLCB7IHF1ZXJ5JCwgcmVzZXQkLCByZXN1bHQkIH0pLFxuICAgICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgIHVzZUNvbXBvbmVudChcInNlYXJjaFwiKVxuICAgICAgICAgIC5zdWJzY3JpYmUoZWwgPT4gZWwuaGlkZGVuID0gdHJ1ZSkgLy8gVE9ETzogSGFja1xuICAgICAgICByZXR1cm4gTkVWRVJcbiAgICAgIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAvLyAvLyBwdXQgaW50byBzZWFyY2guLi5cbiAgaGFzaCRcbiAgICAucGlwZShcbiAgICAgIHRhcCgoKSA9PiBzZXRUb2dnbGUoXCJzZWFyY2hcIiwgZmFsc2UpKSxcbiAgICAgIGRlbGF5KDEyNSksIC8vIGVuc3VyZSB0aGF0IGl0IHJ1bnMgYWZ0ZXIgdGhlIGJvZHkgc2Nyb2xsIHJlc2V0Li4uXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShoYXNoID0+IHNldExvY2F0aW9uSGFzaChgIyR7aGFzaH1gKSlcblxuICAvLyBUT0RPOiBzY3JvbGwgcmVzdG9yYXRpb24gbXVzdCBiZSBjZW50cmFsaXplZFxuICBjb21iaW5lTGF0ZXN0KFtcbiAgICB3YXRjaFRvZ2dsZShcInNlYXJjaFwiKSxcbiAgICB0YWJsZXQkLFxuICBdKVxuICAgIC5waXBlKFxuICAgICAgd2l0aExhdGVzdEZyb20odmlld3BvcnQkKSxcbiAgICAgIHN3aXRjaE1hcCgoW1t0b2dnbGUsIHRhYmxldF0sIHsgb2Zmc2V0OiB7IHkgfX1dKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHRvZ2dsZSAmJiAhdGFibGV0XG4gICAgICAgIHJldHVybiBkb2N1bWVudCRcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIGRlbGF5KGFjdGl2ZSA/IDQwMCA6IDEwMCksXG4gICAgICAgICAgICBvYnNlcnZlT24oYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxuICAgICAgICAgICAgdGFwKCh7IGJvZHkgfSkgPT4gYWN0aXZlXG4gICAgICAgICAgICAgID8gc2V0U2Nyb2xsTG9jayhib2R5LCB5KVxuICAgICAgICAgICAgICA6IHJlc2V0U2Nyb2xsTG9jayhib2R5KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgIH0pXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgpXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAvKiBBbHdheXMgY2xvc2UgZHJhd2VyIG9uIGNsaWNrICovXG4gIGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudC5ib2R5LCBcImNsaWNrXCIpXG4gICAgLnBpcGUoXG4gICAgICBmaWx0ZXIoZXYgPT4gIShldi5tZXRhS2V5IHx8IGV2LmN0cmxLZXkpKSxcbiAgICAgIGZpbHRlcihldiA9PiB7XG4gICAgICAgIGlmIChldi50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGVsID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCJhXCIpIC8vIFRPRE86IGFic3RyYWN0IGFzIGxpbmsgY2xpY2s/XG4gICAgICAgICAgaWYgKGVsICYmIGlzTG9jYWxMb2NhdGlvbihlbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSlcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2V0VG9nZ2xlKFwiZHJhd2VyXCIsIGZhbHNlKVxuICAgICAgfSlcblxuICAvKiBFbmFibGUgaW5zdGFudCBsb2FkaW5nLCBpZiBub3Qgb24gZmlsZTovLyBwcm90b2NvbCAqL1xuICBpZiAoY29uZmlnLmZlYXR1cmVzLmluY2x1ZGVzKFwiaW5zdGFudFwiKSAmJiBsb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJmaWxlOlwiKSB7XG5cbiAgICAvKiBGZXRjaCBzaXRlbWFwIGFuZCBleHRyYWN0IFVSTCB3aGl0ZWxpc3QgKi9cbiAgICBiYXNlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChiYXNlID0+IGFqYXgoe1xuICAgICAgICAgIHVybDogYCR7YmFzZX0vc2l0ZW1hcC54bWxgLFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJkb2N1bWVudFwiLFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgICAgIC5waXBlPERvY3VtZW50PihcbiAgICAgICAgICAgIHBsdWNrKFwicmVzcG9uc2VcIilcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKGJhc2UkKSxcbiAgICAgICAgbWFwKChbZG9jdW1lbnQsIGJhc2VdKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXJscyA9IGdldEVsZW1lbnRzKFwibG9jXCIsIGRvY3VtZW50KVxuICAgICAgICAgICAgLm1hcChub2RlID0+IG5vZGUudGV4dENvbnRlbnQhKVxuXG4gICAgICAgICAgLy8gSGFjazogVGhpcyBpcyBhIHRlbXBvcmFyeSBmaXggdG8gbm9ybWFsaXplIGluc3RhbnQgbG9hZGluZyBsb29rdXBcbiAgICAgICAgICAvLyBvbiBsb2NhbGhvc3QgYW5kIE5ldGxpZnkgcHJldmlld3MuIElmIHRoaXMgYXBwcm9hY2ggcHJvdmVzIHRvIGJlXG4gICAgICAgICAgLy8gc3VpdGFibGUsIHdlJ2xsIHJlZmFjdG9yIFVSTCB3aGl0ZWxpc3RpbmcgYW55d2F5LiBXZSB0YWtlIHRoZSB0d29cbiAgICAgICAgICAvLyBzaG9ydGVzdCBVUkxzIGFuZCBkZXRlcm1pbmUgdGhlIGNvbW1vbiBwcmVmaXggdG8gaXNvbGF0ZSB0aGVcbiAgICAgICAgICAvLyBkb21haW4uIElmIHRoZXJlJ3JlIG5vIHR3byBkb21haW5zLCB3ZSBqdXN0IGxlYXZlIGl0IGFzLWlzLCBhc1xuICAgICAgICAgIC8vIHRoZXJlIGlzbid0IGFueXRoaW5nIHRvIGJlIGxvYWRlZCBhbndheS5cbiAgICAgICAgICBpZiAodXJscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBbYSwgYl0gPSBzb3J0QnkocHJvcChcImxlbmd0aFwiKSwgdXJscylcblxuICAgICAgICAgICAgLyogRGV0ZXJtaW5lIGNvbW1vbiBwcmVmaXggKi9cbiAgICAgICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgICAgIGlmIChhID09PSBiKVxuICAgICAgICAgICAgICBpbmRleCA9IGEubGVuZ3RoXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHdoaWxlIChhLmNoYXJBdChpbmRleCkgPT09IGIuY2hhckF0KGluZGV4KSlcbiAgICAgICAgICAgICAgICBpbmRleCsrXG5cbiAgICAgICAgICAgIC8qIFJlcGxhY2UgY29tbW9uIHByZWZpeCAoaS5lLiBiYXNlKSB3aXRoIGVmZmVjdGl2ZSBiYXNlICovXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgIHVybHNbaV0gPSB1cmxzW2ldLnJlcGxhY2UoYS5zbGljZSgwLCBpbmRleCksIGAke2Jhc2V9L2ApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB1cmxzXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodXJscyA9PiB7XG4gICAgICAgICAgc2V0dXBJbnN0YW50TG9hZGluZyh1cmxzLCB7IGRvY3VtZW50JCwgbG9jYXRpb24kLCB2aWV3cG9ydCQgfSlcbiAgICAgICAgfSlcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgLyogVW5oaWRlIHBlcm1hbGlua3Mgb24gZmlyc3QgdGFiICovXG4gIGtleWJvYXJkJFxuICAgIC5waXBlKFxuICAgICAgZmlsdGVyKGtleSA9PiBrZXkubW9kZSA9PT0gXCJnbG9iYWxcIiAmJiBrZXkudHlwZSA9PT0gXCJUYWJcIiksXG4gICAgICB0YWtlKDEpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgbGluayBvZiBnZXRFbGVtZW50cyhcIi5oZWFkZXJsaW5rXCIpKVxuICAgICAgICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG4gICAgICB9KVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgY29uc3Qgc3RhdGUgPSB7XG5cbiAgICAvKiBCcm93c2VyIG9ic2VydmFibGVzICovXG4gICAgZG9jdW1lbnQkLFxuICAgIGxvY2F0aW9uJCxcbiAgICB2aWV3cG9ydCQsXG5cbiAgICAvKiBDb21wb25lbnQgb2JzZXJ2YWJsZXMgKi9cbiAgICBoZWFkZXIkLFxuICAgIGhlcm8kLFxuICAgIG1haW4kLFxuICAgIG5hdmlnYXRpb24kLFxuICAgIHNlYXJjaCQsXG4gICAgdGFicyQsXG4gICAgdG9jJCxcblxuICAgIC8qIEludGVncmF0aW9uIG9ic2VydmFibGVzICovXG4gICAgY2xpcGJvYXJkJCxcbiAgICBrZXlib2FyZCQsXG4gICAgZGlhbG9nJFxuICB9XG5cbiAgLyogU3Vic2NyaWJlIHRvIGFsbCBvYnNlcnZhYmxlcyAqL1xuICBtZXJnZSguLi52YWx1ZXMoc3RhdGUpKVxuICAgIC5zdWJzY3JpYmUoKVxuICByZXR1cm4gc3RhdGVcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0ICogYXMgQ2xpcGJvYXJkSlMgZnJvbSBcImNsaXBib2FyZFwiXG5pbXBvcnQgeyBORVZFUiwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbUV2ZW50UGF0dGVybiB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IG1hcFRvLCBzaGFyZSwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgZ2V0RWxlbWVudHMgfSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQgeyByZW5kZXJDbGlwYm9hcmRCdXR0b24gfSBmcm9tIFwidGVtcGxhdGVzXCJcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gXCJ1dGlsaXRpZXNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXR1cCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBTZXR1cE9wdGlvbnMge1xuICBkb2N1bWVudCQ6IE9ic2VydmFibGU8RG9jdW1lbnQ+ICAgICAgLyogRG9jdW1lbnQgb2JzZXJ2YWJsZSAqL1xuICBkaWFsb2ckOiBTdWJqZWN0PHN0cmluZz4gICAgICAgICAgICAgLyogRGlhbG9nIHN1YmplY3QgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IHVwIGNsaXBib2FyZFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaW1wbGVtZW50cyB0aGUgQ2xpcGJvYXJkLmpzIGludGVncmF0aW9uIGFuZCBpbmplY3RzIGEgYnV0dG9uXG4gKiBpbnRvIGFsbCBjb2RlIGJsb2NrcyB3aGVuIHRoZSBkb2N1bWVudCBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gQ2xpcGJvYXJkIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQ2xpcGJvYXJkKFxuICB7IGRvY3VtZW50JCwgZGlhbG9nJCB9OiBTZXR1cE9wdGlvbnNcbik6IE9ic2VydmFibGU8Q2xpcGJvYXJkSlMuRXZlbnQ+IHtcbiAgaWYgKCFDbGlwYm9hcmRKUy5pc1N1cHBvcnRlZCgpKVxuICAgIHJldHVybiBORVZFUlxuXG4gIC8qIEluamVjdCAnY29weS10by1jbGlwYm9hcmQnIGJ1dHRvbnMgKi9cbiAgZG9jdW1lbnQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tzID0gZ2V0RWxlbWVudHMoXCJwcmUgPiBjb2RlXCIpXG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50ID0gYmxvY2sucGFyZW50RWxlbWVudCFcbiAgICAgIHBhcmVudC5pZCA9IGBfX2NvZGVfJHtpbmRleH1gXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHJlbmRlckNsaXBib2FyZEJ1dHRvbihwYXJlbnQuaWQpLCBibG9jaylcbiAgICB9KVxuICB9KVxuXG4gIC8qIEluaXRpYWxpemUgY2xpcGJvYXJkICovXG4gIGNvbnN0IGNsaXBib2FyZCQgPSBmcm9tRXZlbnRQYXR0ZXJuPENsaXBib2FyZEpTLkV2ZW50PihuZXh0ID0+IHtcbiAgICBuZXcgQ2xpcGJvYXJkSlMoXCIubWQtY2xpcGJvYXJkXCIpLm9uKFwic3VjY2Vzc1wiLCBuZXh0KVxuICB9KVxuICAgIC5waXBlKFxuICAgICAgc2hhcmUoKVxuICAgIClcblxuICAvKiBEaXNwbGF5IG5vdGlmaWNhdGlvbiBmb3IgY2xpcGJvYXJkIGV2ZW50ICovXG4gIGNsaXBib2FyZCRcbiAgICAucGlwZShcbiAgICAgIHRhcChldiA9PiBldi5jbGVhclNlbGVjdGlvbigpKSxcbiAgICAgIG1hcFRvKHRyYW5zbGF0ZShcImNsaXBib2FyZC5jb3BpZWRcIikpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShkaWFsb2ckKVxuXG4gIC8qIFJldHVybiBjbGlwYm9hcmQgKi9cbiAgcmV0dXJuIGNsaXBib2FyZCRcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgU3ViamVjdCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIG9mIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHtcbiAgZGVsYXksXG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBzd2l0Y2hNYXAsXG4gIHRhcFxufSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcImJyb3dzZXJcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldHVwIG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIFNldHVwT3B0aW9ucyB7XG4gIGR1cmF0aW9uPzogbnVtYmVyICAgICAgICAgICAgICAgICAgICAvKiBEaXNwbGF5IGR1cmF0aW9uIChkZWZhdWx0OiAycykgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IHVwIGRpYWxvZ1xuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICpcbiAqIEByZXR1cm4gRGlhbG9nIG9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRGlhbG9nKFxuICB7IGR1cmF0aW9uIH06IFNldHVwT3B0aW9ucyA9IHt9XG4pOiBTdWJqZWN0PHN0cmluZz4ge1xuICBjb25zdCBkaWFsb2ckID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpXG5cbiAgLyogQ3JlYXRlIGRpYWxvZyAqL1xuICBjb25zdCBkaWFsb2cgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGltcHJvdmUgc2NvcGluZ1xuICBkaWFsb2cuY2xhc3NMaXN0LmFkZChcIm1kLWRpYWxvZ1wiLCBcIm1kLXR5cGVzZXRcIilcblxuICAvKiBEaXNwbGF5IGRpYWxvZyAqL1xuICBkaWFsb2ckXG4gICAgLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAodGV4dCA9PiBvZihkb2N1bWVudC5ib2R5KSAvLyB1c2VDb21wb25lbnQoXCJjb250YWluZXJcIilcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGNvbnRhaW5lciA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nKSksXG4gICAgICAgICAgb2JzZXJ2ZU9uKGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSxcbiAgICAgICAgICBkZWxheSgxKSwgLy8gU3RyYW5nbGV5IGl0IGRvZXNudCB3b3JrIHdoZW4gd2UgcHVzaCB0aGluZ3MgdG8gdGhlIG5ldyBhbmltYXRpb24gZnJhbWUuLi5cbiAgICAgICAgICB0YXAoZWwgPT4ge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gdGV4dFxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiLCBcIm9wZW5cIilcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWxheShkdXJhdGlvbiB8fCAyMDAwKSxcbiAgICAgICAgICB0YXAoZWwgPT4gZWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zdGF0ZVwiKSksXG4gICAgICAgICAgZGVsYXkoNDAwKSxcbiAgICAgICAgICB0YXAoZWwgPT4ge1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgZWwucmVtb3ZlKClcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgpXG5cbiAgLyogUmV0dXJuIGRpYWxvZyAqL1xuICByZXR1cm4gZGlhbG9nJFxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9jbGlwYm9hcmRcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGlhbG9nXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luc3RhbnRcIlxuZXhwb3J0ICogZnJvbSBcIi4va2V5Ym9hcmRcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2VhcmNoXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgTkVWRVIsIE9ic2VydmFibGUsIFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIG9mIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgYWpheCB9IGZyb20gXCJyeGpzLy9hamF4XCJcbmltcG9ydCB7XG4gIGJ1ZmZlckNvdW50LFxuICBjYXRjaEVycm9yLFxuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBkaXN0aW5jdFVudGlsS2V5Q2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHBsdWNrLFxuICBzYW1wbGUsXG4gIHNoYXJlLFxuICBza2lwLFxuICBzd2l0Y2hNYXAsXG4gIHdpdGhMYXRlc3RGcm9tXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7XG4gIFZpZXdwb3J0LFxuICBWaWV3cG9ydE9mZnNldCxcbiAgZ2V0RWxlbWVudCxcbiAgaXNBbmNob3JMb2NhdGlvbixcbiAgaXNMb2NhbExvY2F0aW9uLFxuICByZXBsYWNlRWxlbWVudCxcbiAgc2V0TG9jYXRpb24sXG4gIHNldExvY2F0aW9uSGFzaCxcbiAgc2V0VG9nZ2xlLFxuICBzZXRWaWV3cG9ydE9mZnNldFxufSBmcm9tIFwiYnJvd3NlclwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEhpc3Rvcnkgc3RhdGVcbiAqL1xuaW50ZXJmYWNlIFN0YXRlIHtcbiAgdXJsOiBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFN0YXRlIFVSTCAqL1xuICBvZmZzZXQ/OiBWaWV3cG9ydE9mZnNldCAgICAgICAgICAgICAgLyogU3RhdGUgdmlld3BvcnQgb2Zmc2V0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXR1cCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBTZXR1cE9wdGlvbnMge1xuICBkb2N1bWVudCQ6IFN1YmplY3Q8RG9jdW1lbnQ+ICAgICAgICAgLyogRG9jdW1lbnQgc3ViamVjdCAqL1xuICBsb2NhdGlvbiQ6IFN1YmplY3Q8VVJMPiAgICAgICAgICAgICAgLyogTG9jYXRpb24gc3ViamVjdCAqL1xuICB2aWV3cG9ydCQ6IE9ic2VydmFibGU8Vmlld3BvcnQ+ICAgICAgLyogVmlld3BvcnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXQgdXAgaW5zdGFudCBsb2FkaW5nXG4gKlxuICogV2hlbiBmZXRjaGluZywgdGhlb3JldGljYWxseSwgd2UgY291bGQgdXNlIGByZXNwb25zZVR5cGU6IFwiZG9jdW1lbnRcImAsIGJ1dFxuICogc2luY2UgYWxsIE1rRG9jcyBsaW5rcyBhcmUgcmVsYXRpdmUsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGN1cnJlbnRcbiAqIGxvY2F0aW9uIG1hdGNoZXMgdGhlIGRvY3VtZW50IHdlIGp1c3QgbG9hZGVkLiBPdGhlcndpc2UgYW55IHJlbGF0aXZlIGxpbmtzXG4gKiBpbiB0aGUgZG9jdW1lbnQgY291bGQgdXNlIHRoZSBvbGQgbG9jYXRpb24uXG4gKlxuICogVGhpcyBpcyB0aGUgcmVhc29uIHdoeSB3ZSBuZWVkIHRvIHN5bmNocm9uaXplIGhpc3RvcnkgZXZlbnRzIGFuZCB0aGUgcHJvY2Vzc1xuICogb2YgZmV0Y2hpbmcgdGhlIGRvY3VtZW50IGZvciBuYXZpZ2F0aW9uIGNoYW5nZXMgKGV4Y2VwdCBgcG9wc3RhdGVgIGV2ZW50cyk6XG4gKlxuICogMS4gRmV0Y2ggZG9jdW1lbnQgdmlhIGBYTUxIVFRQUmVxdWVzdGBcbiAqIDIuIFNldCBuZXcgbG9jYXRpb24gdmlhIGBoaXN0b3J5LnB1c2hTdGF0ZWBcbiAqIDMuIFBhcnNlIGFuZCBlbWl0IGZldGNoZWQgZG9jdW1lbnRcbiAqXG4gKiBGb3IgYHBvcHN0YXRlYCBldmVudHMsIHdlIG11c3Qgbm90IHVzZSBgaGlzdG9yeS5wdXNoU3RhdGVgLCBvciB0aGUgZm9yd2FyZFxuICogaGlzdG9yeSB3aWxsIGJlIGlycmV2ZXJzaWJseSBvdmVyd3JpdHRlbi4gSW4gY2FzZSB0aGUgcmVxdWVzdCBmYWlscywgdGhlXG4gKiBsb2NhdGlvbiBjaGFuZ2UgaXMgZGlzcGF0Y2hlZCByZWd1bGFybHkuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEluc3RhbnRMb2FkaW5nKFxuICB1cmxzOiBzdHJpbmdbXSwgeyBkb2N1bWVudCQsIHZpZXdwb3J0JCwgbG9jYXRpb24kIH06IFNldHVwT3B0aW9uc1xuKTogdm9pZCB7XG5cbiAgLyogRGlzYWJsZSBhdXRvbWF0aWMgc2Nyb2xsIHJlc3RvcmF0aW9uICovXG4gIGlmIChcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeSlcbiAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIlxuXG4gIC8qIEhhY2s6IGVuc3VyZSB0aGF0IHJlbG9hZHMgcmVzdG9yZSB2aWV3cG9ydCBvZmZzZXQgKi9cbiAgZnJvbUV2ZW50KHdpbmRvdywgXCJiZWZvcmV1bmxvYWRcIilcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIlxuICAgIH0pXG5cbiAgLyogSGFjazogZW5zdXJlIGFic29sdXRlIGZhdmljb24gbGluayB0byBvbWl0IDQwNHMgb24gZG9jdW1lbnQgc3dpdGNoICovXG4gIGNvbnN0IGZhdmljb24gPSBnZXRFbGVtZW50PEhUTUxMaW5rRWxlbWVudD4oYGxpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXWApXG4gIGlmICh0eXBlb2YgZmF2aWNvbiAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICBmYXZpY29uLmhyZWYgPSBmYXZpY29uLmhyZWYgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1zZWxmLWFzc2lnbm1lbnRcblxuICAvKiBJbnRlcmNlcHQgbGluayBjbGlja3MgYW5kIGNvbnZlcnQgdG8gc3RhdGUgY2hhbmdlICovXG4gIGNvbnN0IHN0YXRlJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudC5ib2R5LCBcImNsaWNrXCIpXG4gICAgLnBpcGUoXG4gICAgICBmaWx0ZXIoZXYgPT4gIShldi5tZXRhS2V5IHx8IGV2LmN0cmxLZXkpKSxcbiAgICAgIHN3aXRjaE1hcChldiA9PiB7XG4gICAgICAgIGlmIChldi50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvbnN0IGVsID0gZXYudGFyZ2V0LmNsb3Nlc3QoXCJhXCIpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZWwgJiYgIWVsLnRhcmdldCAmJlxuICAgICAgICAgICAgaXNMb2NhbExvY2F0aW9uKGVsKSAmJlxuICAgICAgICAgICAgdXJscy5pbmNsdWRlcyhlbC5ocmVmKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCFpc0FuY2hvckxvY2F0aW9uKGVsKSlcbiAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIG9mKGVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTkVWRVJcbiAgICAgIH0pLFxuICAgICAgbWFwKGVsID0+ICh7IHVybDogbmV3IFVSTChlbC5ocmVmKSB9KSksXG4gICAgICBzaGFyZTxTdGF0ZT4oKVxuICAgIClcblxuICAvKiBBbHdheXMgY2xvc2Ugc2VhcmNoIG9uIGxpbmsgY2xpY2sgKi9cbiAgc3RhdGUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgc2V0VG9nZ2xlKFwic2VhcmNoXCIsIGZhbHNlKVxuICB9KVxuXG4gIC8qIEZpbHRlciBzdGF0ZSBjaGFuZ2VzIHRvIGRpc3BhdGNoICovXG4gIGNvbnN0IHB1c2gkID0gc3RhdGUkXG4gICAgLnBpcGUoXG4gICAgICBmaWx0ZXIoKHsgdXJsIH0pID0+ICFpc0FuY2hvckxvY2F0aW9uKHVybCkpLFxuICAgICAgc2hhcmUoKVxuICAgIClcblxuICAvKiBJbnRlcmNlcHQgcG9wc3RhdGUgZXZlbnRzIChoaXN0b3J5IGJhY2sgYW5kIGZvcndhcmQpICovXG4gIGNvbnN0IHBvcCQgPSBmcm9tRXZlbnQ8UG9wU3RhdGVFdmVudD4od2luZG93LCBcInBvcHN0YXRlXCIpXG4gICAgLnBpcGUoXG4gICAgICBmaWx0ZXIoZXYgPT4gZXYuc3RhdGUgIT09IG51bGwpLFxuICAgICAgbWFwKGV2ID0+ICh7XG4gICAgICAgIHVybDogbmV3IFVSTChsb2NhdGlvbi5ocmVmKSxcbiAgICAgICAgb2Zmc2V0OiBldi5zdGF0ZVxuICAgICAgfSkpLFxuICAgICAgc2hhcmU8U3RhdGU+KClcbiAgICApXG5cbiAgLyogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgKi9cbiAgbWVyZ2UocHVzaCQsIHBvcCQpXG4gICAgLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldiwgbmV4dCkgPT4gcHJldi51cmwuaHJlZiA9PT0gbmV4dC51cmwuaHJlZiksXG4gICAgICBwbHVjayhcInVybFwiKVxuICAgIClcbiAgICAgIC5zdWJzY3JpYmUobG9jYXRpb24kKVxuXG4gIC8qIEZldGNoIGRvY3VtZW50IG9uIGxvY2F0aW9uIGNoYW5nZSAqL1xuICBjb25zdCBhamF4JCA9IGxvY2F0aW9uJFxuICAgIC5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQoXCJwYXRobmFtZVwiKSxcbiAgICAgIHNraXAoMSksXG4gICAgICBzd2l0Y2hNYXAodXJsID0+IGFqYXgoe1xuICAgICAgICB1cmw6IHVybC5ocmVmLFxuICAgICAgICByZXNwb25zZVR5cGU6IFwidGV4dFwiLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG9jYXRpb24odXJsKVxuICAgICAgICAgICAgcmV0dXJuIE5FVkVSXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcblxuICAvKiBTZXQgbmV3IGxvY2F0aW9uIGFzIHNvb24gYXMgdGhlIGRvY3VtZW50IHdhcyBmZXRjaGVkICovXG4gIHB1c2gkXG4gICAgLnBpcGUoXG4gICAgICBzYW1wbGUoYWpheCQpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyB1cmwgfSkgPT4ge1xuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgdXJsLnRvU3RyaW5nKCkpXG4gICAgICB9KVxuXG4gIC8qIFBhcnNlIGFuZCBlbWl0IGRvY3VtZW50ICovXG4gIGNvbnN0IGRvbSA9IG5ldyBET01QYXJzZXIoKVxuICBhamF4JFxuICAgIC5waXBlKFxuICAgICAgbWFwKCh7IHJlc3BvbnNlIH0pID0+IGRvbS5wYXJzZUZyb21TdHJpbmcocmVzcG9uc2UsIFwidGV4dC9odG1sXCIpKVxuICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZG9jdW1lbnQkKVxuXG4gIC8qIEludGVyY2VwdCBpbnN0YW50IGxvYWRpbmcgKi9cbiAgY29uc3QgaW5zdGFudCQgPSBtZXJnZShwdXNoJCwgcG9wJClcbiAgICAucGlwZShcbiAgICAgIHNhbXBsZShkb2N1bWVudCQpXG4gICAgKVxuXG4gIC8vIFRPRE86IHRoaXMgbXVzdCBiZSBjb21iaW5lZCB3aXRoIHNlYXJjaCBzY3JvbGwgcmVzdG9yYXRpb24gb24gbW9iaWxlXG4gIGluc3RhbnQkLnN1YnNjcmliZSgoeyB1cmwsIG9mZnNldCB9KSA9PiB7XG4gICAgaWYgKHVybC5oYXNoICYmICFvZmZzZXQpIHtcbiAgICAgIHNldExvY2F0aW9uSGFzaCh1cmwuaGFzaClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Vmlld3BvcnRPZmZzZXQob2Zmc2V0IHx8IHsgeTogMCB9KVxuICAgIH1cbiAgfSlcblxuICAvKiBSZXBsYWNlIGRvY3VtZW50IG1ldGFkYXRhICovXG4gIGluc3RhbnQkXG4gICAgLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbShkb2N1bWVudCQpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoWywgeyB0aXRsZSwgaGVhZCB9XSkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG5cbiAgICAgICAgLyogUmVwbGFjZSBtZXRhIHRhZ3MgKi9cbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBbXG4gICAgICAgICAgYGxpbmtbcmVsPVwiY2Fub25pY2FsXCJdYCxcbiAgICAgICAgICBgbWV0YVtuYW1lPVwiYXV0aG9yXCJdYCxcbiAgICAgICAgICBgbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl1gXG4gICAgICAgIF0pIHtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gZ2V0RWxlbWVudChzZWxlY3RvciwgaGVhZClcbiAgICAgICAgICBjb25zdCBwcmV2ID0gZ2V0RWxlbWVudChzZWxlY3RvciwgZG9jdW1lbnQuaGVhZClcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgbmV4dCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHByZXYgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJlcGxhY2VFbGVtZW50KHByZXYsIG5leHQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogRmluaXNoZWQsIGRpc3BhdGNoIGRvY3VtZW50IHN3aXRjaCBldmVudCAqL1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIkRPTUNvbnRlbnRTd2l0Y2hcIikpXG4gICAgICB9KVxuXG4gIC8qIERlYm91bmNlIHVwZGF0ZSBvZiB2aWV3cG9ydCBvZmZzZXQgKi9cbiAgdmlld3BvcnQkXG4gICAgLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMjUwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkKFwib2Zmc2V0XCIpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBvZmZzZXQgfSkgPT4ge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShvZmZzZXQsIFwiXCIpXG4gICAgICB9KVxuXG4gIC8qIFNldCB2aWV3cG9ydCBvZmZzZXQgZnJvbSBoaXN0b3J5ICovXG4gIG1lcmdlKHN0YXRlJCwgcG9wJClcbiAgICAucGlwZShcbiAgICAgIGJ1ZmZlckNvdW50KDIsIDEpLFxuICAgICAgZmlsdGVyKChbcHJldiwgbmV4dF0pID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXYudXJsLnBhdGhuYW1lID09PSBuZXh0LnVybC5wYXRobmFtZVxuICAgICAgICAgICAgJiYgIWlzQW5jaG9yTG9jYXRpb24obmV4dC51cmwpXG4gICAgICB9KSxcbiAgICAgIG1hcCgoWywgc3RhdGVdKSA9PiBzdGF0ZSlcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKCh7IG9mZnNldCB9KSA9PiB7XG4gICAgICAgIHNldFZpZXdwb3J0T2Zmc2V0KG9mZnNldCB8fCB7IHk6IDAgfSlcbiAgICAgIH0pXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmUsXG4gIHdpdGhMYXRlc3RGcm9tXG59IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7XG4gIEtleSxcbiAgZ2V0QWN0aXZlRWxlbWVudCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudHMsXG4gIGdldFRvZ2dsZSxcbiAgaXNTdXNjZXB0aWJsZVRvS2V5Ym9hcmQsXG4gIHNldEVsZW1lbnRGb2N1cyxcbiAgc2V0RWxlbWVudFNlbGVjdGlvbixcbiAgc2V0VG9nZ2xlLFxuICB3YXRjaEtleWJvYXJkXG59IGZyb20gXCJicm93c2VyXCJcbmltcG9ydCB7IHVzZUNvbXBvbmVudCB9IGZyb20gXCJjb21wb25lbnRzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBLZXlib2FyZCBtb2RlXG4gKi9cbmV4cG9ydCB0eXBlIEtleWJvYXJkTW9kZSA9XG4gIHwgXCJnbG9iYWxcIiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEdsb2JhbCAqL1xuICB8IFwic2VhcmNoXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggaXMgb3BlbiAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogS2V5Ym9hcmRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXlib2FyZCBleHRlbmRzIEtleSB7XG4gIG1vZGU6IEtleWJvYXJkTW9kZSAgICAgICAgICAgICAgICAgICAvKiBLZXlib2FyZCBtb2RlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNldCB1cCBrZXlib2FyZFxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBzZXQgdXAgdGhlIGtleWJvYXJkIGhhbmRsZXJzIGFuZCBlbnN1cmUgdGhhdCBrZXlzIGFyZVxuICogY29ycmVjdGx5IHByb3BhZ2F0ZWQuIEN1cnJlbnRseSB0aGVyZSBhcmUgdHdvIG1vZGVzOlxuICpcbiAqIC0gYGdsb2JhbGA6IFRoaXMgbW9kZSBpcyBhY3RpdmUgd2hlbiB0aGUgc2VhcmNoIGlzIGNsb3NlZC4gSXQgaXMgaW50ZW5kZWRcbiAqICAgdG8gYXNzaWduIGhvdGtleXMgdG8gc3BlY2lmaWMgZnVuY3Rpb25zIG9mIHRoZSBzaXRlLiBDdXJyZW50bHkgdGhlIHNlYXJjaCxcbiAqICAgcHJldmlvdXMgYW5kIG5leHQgcGFnZSBjYW4gYmUgdHJpZ2dlcmVkLlxuICpcbiAqIC0gYHNlYXJjaGA6IFRoaXMgbW9kZSBpcyBhY3RpdmUgd2hlbiB0aGUgc2VhcmNoIGlzIG9wZW4uIEl0IG1hcHMgY2VydGFpblxuICogICBuYXZpZ2F0aW9uYWwga2V5cyB0byBvZmZlciBzZWFyY2ggcmVzdWx0cyB0aGF0IGNhbiBiZSBlbnRpcmVseSBuYXZpZ2F0ZWRcbiAqICAgdGhyb3VnaCBrZXlib2FyZCBpbnB1dC5cbiAqXG4gKiBUaGUga2V5Ym9hcmQgb2JzZXJ2YWJsZSBpcyByZXR1cm5lZCBhbmQgY2FuIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUga2V5Ym9hcmRcbiAqIGluIG9yZGVyIHRvYXNzaWduIGZ1cnRoZXIgaG90a2V5cyB0byBjdXN0b20gZnVuY3Rpb25zLlxuICpcbiAqIEByZXR1cm4gS2V5Ym9hcmQgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlib2FyZCgpOiBPYnNlcnZhYmxlPEtleWJvYXJkPiB7XG4gIGNvbnN0IGtleWJvYXJkJCA9IHdhdGNoS2V5Ym9hcmQoKVxuICAgIC5waXBlKFxuICAgICAgbWFwPEtleSwgS2V5Ym9hcmQ+KGtleSA9PiAoe1xuICAgICAgICBtb2RlOiBnZXRUb2dnbGUoXCJzZWFyY2hcIikgPyBcInNlYXJjaFwiIDogXCJnbG9iYWxcIixcbiAgICAgICAgLi4ua2V5XG4gICAgICB9KSksXG4gICAgICBmaWx0ZXIoKHsgbW9kZSB9KSA9PiB7XG4gICAgICAgIGlmIChtb2RlID09PSBcImdsb2JhbFwiKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gZ2V0QWN0aXZlRWxlbWVudCgpXG4gICAgICAgICAgaWYgKHR5cGVvZiBhY3RpdmUgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICByZXR1cm4gIWlzU3VzY2VwdGlibGVUb0tleWJvYXJkKGFjdGl2ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSksXG4gICAgICBzaGFyZSgpXG4gICAgKVxuXG4gIC8qIFNldCB1cCBzZWFyY2gga2V5Ym9hcmQgaGFuZGxlcnMgKi9cbiAga2V5Ym9hcmQkXG4gICAgLnBpcGUoXG4gICAgICBmaWx0ZXIoKHsgbW9kZSB9KSA9PiBtb2RlID09PSBcInNlYXJjaFwiKSxcbiAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICB1c2VDb21wb25lbnQoXCJzZWFyY2gtcXVlcnlcIiksXG4gICAgICAgIHVzZUNvbXBvbmVudChcInNlYXJjaC1yZXN1bHRcIilcbiAgICAgIClcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKChba2V5LCBxdWVyeSwgcmVzdWx0XSkgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBnZXRBY3RpdmVFbGVtZW50KClcbiAgICAgICAgc3dpdGNoIChrZXkudHlwZSkge1xuXG4gICAgICAgICAgLyogRW50ZXI6IHByZXZlbnQgZm9ybSBzdWJtaXNzaW9uICovXG4gICAgICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgICAgICBpZiAoYWN0aXZlID09PSBxdWVyeSlcbiAgICAgICAgICAgICAga2V5LmNsYWltKClcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICAvKiBFc2NhcGUgb3IgVGFiOiBjbG9zZSBzZWFyY2ggKi9cbiAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICAgICAgc2V0VG9nZ2xlKFwic2VhcmNoXCIsIGZhbHNlKVxuICAgICAgICAgICAgc2V0RWxlbWVudEZvY3VzKHF1ZXJ5LCBmYWxzZSlcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICAvKiBWZXJ0aWNhbCBhcnJvd3M6IHNlbGVjdCBwcmV2aW91cyBvciBuZXh0IHNlYXJjaCByZXN1bHQgKi9cbiAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYWN0aXZlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIHNldEVsZW1lbnRGb2N1cyhxdWVyeSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVscyA9IFtxdWVyeSwgLi4uZ2V0RWxlbWVudHMoXCJbaHJlZl1cIiwgcmVzdWx0KV1cbiAgICAgICAgICAgICAgY29uc3QgaSA9IE1hdGgubWF4KDAsIChcbiAgICAgICAgICAgICAgICBNYXRoLm1heCgwLCBlbHMuaW5kZXhPZihhY3RpdmUpKSArIGVscy5sZW5ndGggKyAoXG4gICAgICAgICAgICAgICAgICBrZXkudHlwZSA9PT0gXCJBcnJvd1VwXCIgPyAtMSA6ICsxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApICUgZWxzLmxlbmd0aClcbiAgICAgICAgICAgICAgc2V0RWxlbWVudEZvY3VzKGVsc1tpXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogUHJldmVudCBzY3JvbGxpbmcgb2YgcGFnZSAqL1xuICAgICAgICAgICAga2V5LmNsYWltKClcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICAvKiBBbGwgb3RoZXIga2V5czogaGFuZCB0byBzZWFyY2ggcXVlcnkgKi9cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKHF1ZXJ5ICE9PSBnZXRBY3RpdmVFbGVtZW50KCkpXG4gICAgICAgICAgICAgIHNldEVsZW1lbnRGb2N1cyhxdWVyeSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAvKiBTZXQgdXAgZ2xvYmFsIGtleWJvYXJkIGhhbmRsZXJzICovXG4gIGtleWJvYXJkJFxuICAgIC5waXBlKFxuICAgICAgZmlsdGVyKCh7IG1vZGUgfSkgPT4gbW9kZSA9PT0gXCJnbG9iYWxcIiksXG4gICAgICB3aXRoTGF0ZXN0RnJvbSh1c2VDb21wb25lbnQoXCJzZWFyY2gtcXVlcnlcIikpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoW2tleSwgcXVlcnldKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoa2V5LnR5cGUpIHtcblxuICAgICAgICAgIC8qIE9wZW4gc2VhcmNoIGFuZCBzZWxlY3QgcXVlcnkgKi9cbiAgICAgICAgICBjYXNlIFwiZlwiOlxuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICAgIHNldEVsZW1lbnRGb2N1cyhxdWVyeSlcbiAgICAgICAgICAgIHNldEVsZW1lbnRTZWxlY3Rpb24ocXVlcnkpXG4gICAgICAgICAgICBrZXkuY2xhaW0oKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIC8qIEdvIHRvIHByZXZpb3VzIHBhZ2UgKi9cbiAgICAgICAgICBjYXNlIFwicFwiOlxuICAgICAgICAgIGNhc2UgXCIsXCI6XG4gICAgICAgICAgICBjb25zdCBwcmV2ID0gZ2V0RWxlbWVudChcIltocmVmXVtyZWw9cHJldl1cIilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJldiAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgcHJldi5jbGljaygpXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgLyogR28gdG8gbmV4dCBwYWdlICovXG4gICAgICAgICAgY2FzZSBcIm5cIjpcbiAgICAgICAgICBjYXNlIFwiLlwiOlxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGdldEVsZW1lbnQoXCJbaHJlZl1bcmVsPW5leHRdXCIpXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5leHQgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgIG5leHQuY2xpY2soKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAvKiBSZXR1cm4ga2V5Ym9hcmQgKi9cbiAgcmV0dXJuIGtleWJvYXJkJFxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1xuICBBcnRpY2xlRG9jdW1lbnQsXG4gIFNlYXJjaERvY3VtZW50TWFwLFxuICBTZWN0aW9uRG9jdW1lbnQsXG4gIHNldHVwU2VhcmNoRG9jdW1lbnRNYXBcbn0gZnJvbSBcIi4uL2RvY3VtZW50XCJcbmltcG9ydCB7XG4gIFNlYXJjaEhpZ2hsaWdodEZhY3RvcnlGbixcbiAgc2V0dXBTZWFyY2hIaWdobGlnaHRlclxufSBmcm9tIFwiLi4vaGlnaGxpZ2h0ZXJcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNlYXJjaCBpbmRleCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoSW5kZXhDb25maWcge1xuICBsYW5nOiBzdHJpbmdbXSAgICAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIGxhbmd1YWdlcyAqL1xuICBzZXBhcmF0b3I6IHN0cmluZyAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIHNlcGFyYXRvciAqL1xufVxuXG4vKipcbiAqIFNlYXJjaCBpbmRleCBkb2N1bWVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEluZGV4RG9jdW1lbnQge1xuICBsb2NhdGlvbjogc3RyaW5nICAgICAgICAgICAgICAgICAgICAgLyogRG9jdW1lbnQgbG9jYXRpb24gKi9cbiAgdGl0bGU6IHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgIC8qIERvY3VtZW50IHRpdGxlICovXG4gIHRleHQ6IHN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAvKiBEb2N1bWVudCB0ZXh0ICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZWFyY2ggaW5kZXggcGlwZWxpbmUgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoSW5kZXhQaXBlbGluZUZuID1cbiAgfCBcInRyaW1tZXJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVHJpbW1lciAqL1xuICB8IFwic3RvcFdvcmRGaWx0ZXJcIiAgICAgICAgICAgICAgICAgICAvKiBTdG9wIHdvcmQgZmlsdGVyICovXG4gIHwgXCJzdGVtbWVyXCIgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFN0ZW1tZXIgKi9cblxuLyoqXG4gKiBTZWFyY2ggaW5kZXggcGlwZWxpbmVcbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoSW5kZXhQaXBlbGluZSA9IFNlYXJjaEluZGV4UGlwZWxpbmVGbltdXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZWFyY2ggaW5kZXhcbiAqXG4gKiBUaGlzIGludGVyZmFjZXMgZGVzY3JpYmVzIHRoZSBmb3JtYXQgb2YgdGhlIGBzZWFyY2hfaW5kZXguanNvbmAgZmlsZSB3aGljaFxuICogaXMgYXV0b21hdGljYWxseSBidWlsdCBieSB0aGUgTWtEb2NzIHNlYXJjaCBwbHVnaW4uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoSW5kZXgge1xuICBjb25maWc6IFNlYXJjaEluZGV4Q29uZmlnICAgICAgICAgICAgLyogU2VhcmNoIGluZGV4IGNvbmZpZ3VyYXRpb24gKi9cbiAgZG9jczogU2VhcmNoSW5kZXhEb2N1bWVudFtdICAgICAgICAgIC8qIFNlYXJjaCBpbmRleCBkb2N1bWVudHMgKi9cbiAgaW5kZXg/OiBvYmplY3QgfCBzdHJpbmcgICAgICAgICAgICAgIC8qIFByZWJ1aWx0IG9yIHNlcmlhbGl6ZWQgaW5kZXggKi9cbiAgcGlwZWxpbmU/OiBTZWFyY2hJbmRleFBpcGVsaW5lICAgICAgIC8qIFNlYXJjaCBpbmRleCBwaXBlbGluZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIHJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFJlc3VsdCB7XG4gIGFydGljbGU6IEFydGljbGVEb2N1bWVudCAgICAgICAgICAgICAvKiBBcnRpY2xlIGRvY3VtZW50ICovXG4gIHNlY3Rpb25zOiBTZWN0aW9uRG9jdW1lbnRbXSAgICAgICAgICAvKiBTZWN0aW9uIGRvY3VtZW50cyAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBDb21wdXRlIHRoZSBkaWZmZXJlbmNlIG9mIHR3byBsaXN0cyBvZiBzdHJpbmdzXG4gKlxuICogQHBhcmFtIGEgLSAxc3QgbGlzdCBvZiBzdHJpbmdzXG4gKiBAcGFyYW0gYiAtIDJuZCBsaXN0IG9mIHN0cmluZ3NcbiAqXG4gKiBAcmV0dXJuIERpZmZlcmVuY2VcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZShhOiBzdHJpbmdbXSwgYjogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IFt4LCB5XSA9IFtuZXcgU2V0KGEpLCBuZXcgU2V0KGIpXVxuICByZXR1cm4gW1xuICAgIC4uLm5ldyBTZXQoWy4uLnhdLmZpbHRlcih2YWx1ZSA9PiAheS5oYXModmFsdWUpKSlcbiAgXVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNlYXJjaFxuICpcbiAqIE5vdGUgdGhhdCBgbHVucmAgaXMgaW5qZWN0ZWQgdmlhIFdlYnBhY2ssIGFzIGl0IHdpbGwgb3RoZXJ3aXNlIGFsc28gYmVcbiAqIGJ1bmRsZWQgaW4gdGhlIGFwcGxpY2F0aW9uIGJ1bmRsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlYXJjaCB7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBkb2N1bWVudCBtYXBwaW5nXG4gICAqXG4gICAqIEEgbWFwcGluZyBvZiBVUkxzIChpbmNsdWRpbmcgaGFzaCBmcmFnbWVudHMpIHRvIHRoZSBhY3R1YWwgYXJ0aWNsZXMgYW5kXG4gICAqIHNlY3Rpb25zIG9mIHRoZSBkb2N1bWVudGF0aW9uLiBUaGUgc2VhcmNoIGRvY3VtZW50IG1hcHBpbmcgbXVzdCBiZSBjcmVhdGVkXG4gICAqIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGUgaW5kZXggd2FzIHByZWJ1aWx0IG9yIG5vdCwgYXMgYGx1bnJgIGl0c2VsZiB3aWxsXG4gICAqIG9ubHkgc3RvcmUgdGhlIGFjdHVhbCBpbmRleC5cbiAgICovXG4gIHByb3RlY3RlZCBkb2N1bWVudHM6IFNlYXJjaERvY3VtZW50TWFwXG5cbiAgLyoqXG4gICAqIFNlYXJjaCBoaWdobGlnaHQgZmFjdG9yeSBmdW5jdGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIGhpZ2hsaWdodDogU2VhcmNoSGlnaGxpZ2h0RmFjdG9yeUZuXG5cbiAgLyoqXG4gICAqIFRoZSBgbHVucmAgc2VhcmNoIGluZGV4XG4gICAqL1xuICBwcm90ZWN0ZWQgaW5kZXg6IGx1bnIuSW5kZXhcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBzZWFyY2ggaW50ZWdyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGRhdGEgLSBTZWFyY2ggaW5kZXhcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih7IGNvbmZpZywgZG9jcywgcGlwZWxpbmUsIGluZGV4IH06IFNlYXJjaEluZGV4KSB7XG4gICAgdGhpcy5kb2N1bWVudHMgPSBzZXR1cFNlYXJjaERvY3VtZW50TWFwKGRvY3MpXG4gICAgdGhpcy5oaWdobGlnaHQgPSBzZXR1cFNlYXJjaEhpZ2hsaWdodGVyKGNvbmZpZylcblxuICAgIC8qIFNldCBzZXBhcmF0b3IgZm9yIHRva2VuaXplciAqL1xuICAgIGx1bnIudG9rZW5pemVyLnNlcGFyYXRvciA9IG5ldyBSZWdFeHAoY29uZmlnLnNlcGFyYXRvcilcblxuICAgIC8qIElmIG5vIGluZGV4IHdhcyBnaXZlbiwgY3JlYXRlIGl0ICovXG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5pbmRleCA9IGx1bnIoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyogU2V0IHVwIGFsdGVybmF0ZSBzZWFyY2ggbGFuZ3VhZ2VzICovXG4gICAgICAgIGlmIChjb25maWcubGFuZy5sZW5ndGggPT09IDEgJiYgY29uZmlnLmxhbmdbMF0gIT09IFwiZW5cIikge1xuICAgICAgICAgIHRoaXMudXNlKChsdW5yIGFzIGFueSlbY29uZmlnLmxhbmdbMF1dKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnVzZSgobHVuciBhcyBhbnkpLm11bHRpTGFuZ3VhZ2UoLi4uY29uZmlnLmxhbmcpKVxuICAgICAgICB9XG5cbiAgICAgICAgLyogQ29tcHV0ZSBmdW5jdGlvbnMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBwaXBlbGluZSAqL1xuICAgICAgICBjb25zdCBmbnMgPSBkaWZmZXJlbmNlKFtcbiAgICAgICAgICBcInRyaW1tZXJcIiwgXCJzdG9wV29yZEZpbHRlclwiLCBcInN0ZW1tZXJcIlxuICAgICAgICBdLCBwaXBlbGluZSEpXG5cbiAgICAgICAgLyogUmVtb3ZlIGZ1bmN0aW9ucyBmcm9tIHRoZSBwaXBlbGluZSBmb3IgZXZlcnkgbGFuZ3VhZ2UgKi9cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIGNvbmZpZy5sYW5nLm1hcChsYW5ndWFnZSA9PiAoXG4gICAgICAgICAgbGFuZ3VhZ2UgPT09IFwiZW5cIiA/IGx1bnIgOiAobHVuciBhcyBhbnkpW2xhbmd1YWdlXVxuICAgICAgICApKSkge1xuICAgICAgICAgIGZvciAoY29uc3QgZm4gb2YgZm5zKSB7XG4gICAgICAgICAgICB0aGlzLnBpcGVsaW5lLnJlbW92ZShsYW5nW2ZuXSlcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUGlwZWxpbmUucmVtb3ZlKGxhbmdbZm5dKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNldCB1cCBmaWVsZHMgYW5kIHJlZmVyZW5jZSAqL1xuICAgICAgICB0aGlzLmZpZWxkKFwidGl0bGVcIiwgeyBib29zdDogMTAwMCB9KVxuICAgICAgICB0aGlzLmZpZWxkKFwidGV4dFwiKVxuICAgICAgICB0aGlzLnJlZihcImxvY2F0aW9uXCIpXG5cbiAgICAgICAgLyogSW5kZXggZG9jdW1lbnRzICovXG4gICAgICAgIGZvciAoY29uc3QgZG9jIG9mIGRvY3MpXG4gICAgICAgICAgdGhpcy5hZGQoZG9jKVxuICAgICAgfSlcblxuICAgIC8qIFByZWJ1aWx0IG9yIHNlcmlhbGl6ZWQgaW5kZXggKi9cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleCA9IGx1bnIuSW5kZXgubG9hZChcbiAgICAgICAgdHlwZW9mIGluZGV4ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgPyBKU09OLnBhcnNlKGluZGV4KVxuICAgICAgICAgIDogaW5kZXhcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBtYXRjaGluZyBkb2N1bWVudHNcbiAgICpcbiAgICogVGhlIHNlYXJjaCBpbmRleCB3aGljaCBNa0RvY3MgcHJvdmlkZXMgaXMgZGl2aWRlZCB1cCBpbnRvIGFydGljbGVzLCB3aGljaFxuICAgKiBjb250YWluIHRoZSB3aG9sZSBjb250ZW50IG9mIHRoZSBpbmRpdmlkdWFsIHBhZ2VzLCBhbmQgc2VjdGlvbnMsIHdoaWNoIG9ubHlcbiAgICogY29udGFpbiB0aGUgY29udGVudHMgb2YgdGhlIHN1YnNlY3Rpb25zIG9idGFpbmVkIGJ5IGJyZWFraW5nIHRoZSBpbmRpdmlkdWFsXG4gICAqIHBhZ2VzIHVwIGF0IGBoMWAgLi4uIGBoNmAuIEFzIHRoZXJlIG1heSBiZSBtYW55IHNlY3Rpb25zIG9uIGRpZmZlcmVudCBwYWdlc1xuICAgKiB3aXRoIGlkZW50aWNhbCB0aXRsZXMgKGZvciBleGFtcGxlIHdpdGhpbiB0aGlzIHZlcnkgcHJvamVjdCwgZS5nLiBcIlVzYWdlXCJcbiAgICogb3IgXCJJbnN0YWxsYXRpb25cIiksIHRoZXkgbmVlZCB0byBiZSBwdXQgaW50byB0aGUgY29udGV4dCBvZiB0aGUgY29udGFpbmluZ1xuICAgKiBwYWdlLiBGb3IgdGhpcyByZWFzb24sIHNlY3Rpb24gcmVzdWx0cyBhcmUgZ3JvdXBlZCB3aXRoaW4gdGhlaXIgcmVzcGVjdGl2ZVxuICAgKiBhcnRpY2xlcyB3aGljaCBhcmUgdGhlIHRvcC1sZXZlbCByZXN1bHRzIHRoYXQgYXJlIHJldHVybmVkLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgLSBRdWVyeSB2YWx1ZVxuICAgKlxuICAgKiBAcmV0dXJuIFNlYXJjaCByZXN1bHRzXG4gICAqL1xuICBwdWJsaWMgcXVlcnkodmFsdWU6IHN0cmluZyk6IFNlYXJjaFJlc3VsdFtdIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRyeSB7XG5cbiAgICAgICAgLyogR3JvdXAgc2VjdGlvbnMgYnkgY29udGFpbmluZyBhcnRpY2xlICovXG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMuaW5kZXguc2VhcmNoKHZhbHVlKVxuICAgICAgICAgIC5yZWR1Y2UoKHJlc3VsdHMsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9jdW1lbnQgPSB0aGlzLmRvY3VtZW50cy5nZXQocmVzdWx0LnJlZilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgaWYgKFwicGFyZW50XCIgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBkb2N1bWVudC5wYXJlbnQubG9jYXRpb25cbiAgICAgICAgICAgICAgICByZXN1bHRzLnNldChyZWYsIFsuLi5yZXN1bHRzLmdldChyZWYpIHx8IFtdLCByZXN1bHRdKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQocmVmLCByZXN1bHRzLmdldChyZWYpIHx8IFtdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgICAgICAgIH0sIG5ldyBNYXA8c3RyaW5nLCBsdW5yLkluZGV4LlJlc3VsdFtdPigpKVxuXG4gICAgICAgIC8qIENyZWF0ZSBoaWdobGlnaHRlciBmb3IgcXVlcnkgKi9cbiAgICAgICAgY29uc3QgZm4gPSB0aGlzLmhpZ2hsaWdodCh2YWx1ZSlcblxuICAgICAgICAvKiBNYXAgZ3JvdXBzIHRvIHNlYXJjaCBkb2N1bWVudHMgKi9cbiAgICAgICAgcmV0dXJuIFsuLi5ncm91cHNdLm1hcCgoW3JlZiwgc2VjdGlvbnNdKSA9PiAoe1xuICAgICAgICAgIGFydGljbGU6IGZuKHRoaXMuZG9jdW1lbnRzLmdldChyZWYpIGFzIEFydGljbGVEb2N1bWVudCksXG4gICAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmbih0aGlzLmRvY3VtZW50cy5nZXQoc2VjdGlvbi5yZWYpIGFzIFNlY3Rpb25Eb2N1bWVudClcbiAgICAgICAgICB9KVxuICAgICAgICB9KSlcblxuICAgICAgLyogTG9nIGVycm9ycyB0byBjb25zb2xlIChmb3Igbm93KSAqL1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBxdWVyeTogJHt2YWx1ZX0g4oCTIHNlZSBodHRwczovL2JpdC5seS8yczNDaFhHYClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBSZXR1cm4gbm90aGluZyBpbiBjYXNlIG9mIGVycm9yIG9yIGVtcHR5IHF1ZXJ5ICovXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0ICogYXMgZXNjYXBlSFRNTCBmcm9tIFwiZXNjYXBlLWh0bWxcIlxuXG5pbXBvcnQgeyBTZWFyY2hJbmRleERvY3VtZW50IH0gZnJvbSBcIi4uL19cIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEEgdG9wLWxldmVsIGFydGljbGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcnRpY2xlRG9jdW1lbnQgZXh0ZW5kcyBTZWFyY2hJbmRleERvY3VtZW50IHtcbiAgbGlua2VkOiBib29sZWFuICAgICAgICAgICAgICAgICAgICAgIC8qIFdoZXRoZXIgdGhlIHNlY3Rpb24gd2FzIGxpbmtlZCAqL1xufVxuXG4vKipcbiAqIEEgc2VjdGlvbiBvZiBhbiBhcnRpY2xlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbkRvY3VtZW50IGV4dGVuZHMgU2VhcmNoSW5kZXhEb2N1bWVudCB7XG4gIHBhcmVudDogQXJ0aWNsZURvY3VtZW50ICAgICAgICAgICAgICAvKiBQYXJlbnQgYXJ0aWNsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIGRvY3VtZW50XG4gKi9cbmV4cG9ydCB0eXBlIFNlYXJjaERvY3VtZW50ID1cbiAgfCBBcnRpY2xlRG9jdW1lbnRcbiAgfCBTZWN0aW9uRG9jdW1lbnRcblxuLyoqXG4gKiBTZWFyY2ggZG9jdW1lbnQgbWFwcGluZ1xuICovXG5leHBvcnQgdHlwZSBTZWFyY2hEb2N1bWVudE1hcCA9IE1hcDxzdHJpbmcsIFNlYXJjaERvY3VtZW50PlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBzZWFyY2ggZG9jdW1lbnQgbWFwcGluZ1xuICpcbiAqIEBwYXJhbSBkb2NzIC0gU2VhcmNoIGluZGV4IGRvY3VtZW50c1xuICpcbiAqIEByZXR1cm4gU2VhcmNoIGRvY3VtZW50IG1hcFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTZWFyY2hEb2N1bWVudE1hcChcbiAgZG9jczogU2VhcmNoSW5kZXhEb2N1bWVudFtdXG4pOiBTZWFyY2hEb2N1bWVudE1hcCB7XG4gIGNvbnN0IGRvY3VtZW50cyA9IG5ldyBNYXA8c3RyaW5nLCBTZWFyY2hEb2N1bWVudD4oKVxuICBmb3IgKGNvbnN0IGRvYyBvZiBkb2NzKSB7XG4gICAgY29uc3QgW3BhdGgsIGhhc2hdID0gZG9jLmxvY2F0aW9uLnNwbGl0KFwiI1wiKVxuXG4gICAgLyogRXh0cmFjdCBsb2NhdGlvbiBhbmQgdGl0bGUgKi9cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvYy5sb2NhdGlvblxuICAgIGNvbnN0IHRpdGxlICAgID0gZG9jLnRpdGxlXG5cbiAgICAvKiBFc2NhcGUgYW5kIGNsZWFudXAgdGV4dCAqL1xuICAgIGNvbnN0IHRleHQgPSBlc2NhcGVIVE1MKGRvYy50ZXh0KVxuICAgICAgLnJlcGxhY2UoL1xccysoPz1bLC46OyE/XSkvZywgXCJcIilcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxuXG4gICAgLyogSGFuZGxlIHNlY3Rpb24gKi9cbiAgICBpZiAoaGFzaCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnRzLmdldChwYXRoKSBhcyBBcnRpY2xlRG9jdW1lbnRcblxuICAgICAgLyogSWdub3JlIGZpcnN0IHNlY3Rpb24sIG92ZXJyaWRlIGFydGljbGUgKi9cbiAgICAgIGlmICghcGFyZW50LmxpbmtlZCkge1xuICAgICAgICBwYXJlbnQudGl0bGUgID0gZG9jLnRpdGxlXG4gICAgICAgIHBhcmVudC50ZXh0ICAgPSB0ZXh0XG4gICAgICAgIHBhcmVudC5saW5rZWQgPSB0cnVlXG5cbiAgICAgIC8qIEFkZCBzdWJzZXF1ZW50IHNlY3Rpb24gKi9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50cy5zZXQobG9jYXRpb24sIHtcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIHBhcmVudFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgLyogQWRkIGFydGljbGUgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnRzLnNldChsb2NhdGlvbiwge1xuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGxpbmtlZDogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBkb2N1bWVudHNcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgU2VhcmNoSW5kZXhDb25maWcgfSBmcm9tIFwiLi4vX1wiXG5pbXBvcnQgeyBTZWFyY2hEb2N1bWVudCB9IGZyb20gXCIuLi9kb2N1bWVudFwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIGhpZ2hsaWdodCBmdW5jdGlvblxuICpcbiAqIEB0ZW1wbGF0ZSBUIC0gU2VhcmNoIGRvY3VtZW50IHR5cGVcbiAqXG4gKiBAcGFyYW0gZG9jdW1lbnQgLSBTZWFyY2ggZG9jdW1lbnRcbiAqXG4gKiBAcmV0dXJuIEhpZ2hsaWdodGVkIGRvY3VtZW50XG4gKi9cbmV4cG9ydCB0eXBlIFNlYXJjaEhpZ2hsaWdodEZuID0gPFxuICBUIGV4dGVuZHMgU2VhcmNoRG9jdW1lbnRcbj4oZG9jdW1lbnQ6IFJlYWRvbmx5PFQ+KSA9PiBUXG5cbi8qKlxuICogU2VhcmNoIGhpZ2hsaWdodCBmYWN0b3J5IGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gUXVlcnkgdmFsdWVcbiAqXG4gKiBAcmV0dXJuIFNlYXJjaCBoaWdobGlnaHQgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoSGlnaGxpZ2h0RmFjdG9yeUZuID0gKHZhbHVlOiBzdHJpbmcpID0+IFNlYXJjaEhpZ2hsaWdodEZuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIHNlYXJjaCBoaWdobGlnaHRlclxuICpcbiAqIEBwYXJhbSBjb25maWcgLSBTZWFyY2ggaW5kZXggY29uZmlndXJhdGlvblxuICpcbiAqIEByZXR1cm4gU2VhcmNoIGhpZ2hsaWdodCBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFNlYXJjaEhpZ2hsaWdodGVyKFxuICBjb25maWc6IFNlYXJjaEluZGV4Q29uZmlnXG4pOiBTZWFyY2hIaWdobGlnaHRGYWN0b3J5Rm4ge1xuICBjb25zdCBzZXBhcmF0b3IgPSBuZXcgUmVnRXhwKGNvbmZpZy5zZXBhcmF0b3IsIFwiaW1nXCIpXG4gIGNvbnN0IGhpZ2hsaWdodCA9IChfOiB1bmtub3duLCBkYXRhOiBzdHJpbmcsIHRlcm06IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHtkYXRhfTxlbT4ke3Rlcm19PC9lbT5gXG4gIH1cblxuICAvKiBSZXR1cm4gZmFjdG9yeSBmdW5jdGlvbiAqL1xuICByZXR1cm4gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAucmVwbGFjZSgvW1xccyorXFwtOn5eXSsvZywgXCIgXCIpXG4gICAgICAudHJpbSgpXG5cbiAgICAvKiBDcmVhdGUgc2VhcmNoIHRlcm0gbWF0Y2ggZXhwcmVzc2lvbiAqL1xuICAgIGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChgKF58JHtjb25maWcuc2VwYXJhdG9yfSkoJHtcbiAgICAgIHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csIFwiXFxcXCQmXCIpXG4gICAgICAgIC5yZXBsYWNlKHNlcGFyYXRvciwgXCJ8XCIpXG4gICAgfSlgLCBcImltZ1wiKVxuXG4gICAgLyogSGlnaGxpZ2h0IGRvY3VtZW50ICovXG4gICAgcmV0dXJuIGRvY3VtZW50ID0+ICh7XG4gICAgICAuLi5kb2N1bWVudCxcbiAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZS5yZXBsYWNlKG1hdGNoLCBoaWdobGlnaHQpLFxuICAgICAgdGV4dDogIGRvY3VtZW50LnRleHQucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KVxuICAgIH0pXG4gIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9kb2N1bWVudFwiXG5leHBvcnQgKiBmcm9tIFwiLi9oaWdobGlnaHRlclwiXG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2Zvcm1cIlxuZXhwb3J0ICogZnJvbSBcIi4vd29ya2VyXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZWFyY2ggdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBRdWVyeSB2YWx1ZVxuICpcbiAqIEByZXR1cm4gVHJhbnNmb3JtZWQgcXVlcnkgdmFsdWVcbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoVHJhbnNmb3JtRm4gPSAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIERlZmF1bHQgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25cbiAqXG4gKiAxLiBTZWFyY2ggZm9yIHRlcm1zIGluIHF1b3RhdGlvbiBtYXJrcyBhbmQgcHJlcGVuZCBhIGArYCBtb2RpZmllciB0byBkZW5vdGVcbiAqICAgIHRoYXQgdGhlIHJlc3VsdGluZyBkb2N1bWVudCBtdXN0IGNvbnRhaW4gYWxsIHRlcm1zLCBjb252ZXJ0aW5nIHRoZSBxdWVyeVxuICogICAgdG8gYW4gYEFORGAgcXVlcnkgKGFzIG9wcG9zZWQgdG8gdGhlIGRlZmF1bHQgYE9SYCBiZWhhdmlvcikuIFdoaWxlIHVzZXJzXG4gKiAgICBtYXkgZXhwZWN0IHRlcm1zIGVuY2xvc2VkIGluIHF1b3RhdGlvbiBtYXJrcyB0byBtYXAgdG8gc3BhbiBxdWVyaWVzLCBpLmUuXG4gKiAgICBmb3Igd2hpY2ggb3JkZXIgaXMgaW1wb3J0YW50LCBgbHVucmAgZG9lc24ndCBzdXBwb3J0IHRoZW0sIHNvIHRoZSBiZXN0XG4gKiAgICB3ZSBjYW4gZG8gaXMgdG8gY29udmVydCB0aGUgdGVybXMgdG8gYW4gYEFORGAgcXVlcnkuXG4gKlxuICogMi4gUmVwbGFjZSBjb250cm9sIGNoYXJhY3RlcnMgd2hpY2ggYXJlIG5vdCBsb2NhdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlXG4gKiAgICBxdWVyeSBvciBwcmVjZWRlZCBieSB3aGl0ZSBzcGFjZSwgb3IgYXJlIG5vdCBmb2xsb3dlZCBieSBhIG5vbi13aGl0ZXNwYWNlXG4gKiAgICBjaGFyYWN0ZXIgb3IgYXJlIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXJ5IHN0cmluZy4gRnVydGhlcm1vcmUsIGZpbHRlclxuICogICAgdW5tYXRjaGVkIHF1b3RhdGlvbiBtYXJrcy5cbiAqXG4gKiAzLiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIGZyb20gbGVmdCBhbmQgcmlnaHQuXG4gKlxuICogNC4gQXBwZW5kIGEgd2lsZGNhcmQgdG8gdGhlIGVuZCBvZiBldmVyeSB3b3JkIHRvIG1ha2UgZXZlcnkgd29yZCBhIHByZWZpeFxuICogICAgcXVlcnkgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGdvb2QgdHlwZWFoZWFkIGV4cGVyaWVuY2UsIGJ5IGFkZGluZyBhblxuICogICAgYXN0ZXJpc2sgKHdpbGRjYXJkKSBpbiBiZXR3ZWVuIHRlcm1zLCB3aGljaCBjYW4gYmUgZGVub3RlZCBieSB3aGl0ZXNwYWNlLFxuICogICAgYW55IG5vbi1jb250cm9sIGNoYXJhY3Rlciwgb3IgYSB3b3JkIGJvdW5kYXJ5LlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFF1ZXJ5IHZhbHVlXG4gKlxuICogQHJldHVybiBUcmFuc2Zvcm1lZCBxdWVyeSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnNwbGl0KC9cIihbXlwiXSspXCIvZykgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogPT4gMSAqL1xuICAgICAgLm1hcCgodGVybXMsIGkpID0+IGkgJiAxXG4gICAgICAgID8gdGVybXMucmVwbGFjZSgvXlxcYnxeKD8hW15cXHgwMC1cXHg3Rl18JCl8XFxzKy9nLCBcIiArXCIpXG4gICAgICAgIDogdGVybXNcbiAgICAgIClcbiAgICAgIC5qb2luKFwiXCIpXG4gICAgLnJlcGxhY2UoL1wifCg/Ol58XFxzKylbKitcXC06Xn5dKyg/PVxccyt8JCkvZywgXCJcIikgLyogPT4gMiAqL1xuICAgIC50cmltKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qID0+IDMgKi9cbiAgICAucmVwbGFjZSgvXFxzK3woPyFbXlxceDAwLVxceDdGXXxeKSR8XFxiJC9nLCBcIiogXCIpICAvKiA9PiA0ICovXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gXCJyYW1kYVwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBhc3luY1NjaGVkdWxlciB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7XG4gIG1hcCxcbiAgb2JzZXJ2ZU9uLFxuICBzaGFyZVJlcGxheSxcbiAgd2l0aExhdGVzdEZyb21cbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHsgV29ya2VySGFuZGxlciwgd2F0Y2hXb3JrZXIgfSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tIFwidXRpbGl0aWVzXCJcblxuaW1wb3J0IHsgU2VhcmNoSW5kZXgsIFNlYXJjaEluZGV4UGlwZWxpbmUgfSBmcm9tIFwiLi4vLi4vX1wiXG5pbXBvcnQge1xuICBTZWFyY2hNZXNzYWdlLFxuICBTZWFyY2hNZXNzYWdlVHlwZSxcbiAgU2VhcmNoU2V0dXBNZXNzYWdlLFxuICBpc1NlYXJjaFJlc3VsdE1lc3NhZ2Vcbn0gZnJvbSBcIi4uL21lc3NhZ2VcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZXR1cCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBTZXR1cE9wdGlvbnMge1xuICBpbmRleCQ6IE9ic2VydmFibGU8U2VhcmNoSW5kZXg+ICAgICAgLyogU2VhcmNoIGluZGV4IG9ic2VydmFibGUgKi9cbiAgYmFzZSQ6IE9ic2VydmFibGU8c3RyaW5nPiAgICAgICAgICAgIC8qIExvY2F0aW9uIGJhc2Ugb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IHVwIHNlYXJjaCBpbmRleFxuICpcbiAqIEBwYXJhbSBkYXRhIC0gU2VhcmNoIGluZGV4XG4gKlxuICogQHJldHVybiBTZWFyY2ggaW5kZXhcbiAqL1xuZnVuY3Rpb24gc2V0dXBTZWFyY2hJbmRleChcbiAgeyBjb25maWcsIGRvY3MsIGluZGV4IH06IFNlYXJjaEluZGV4XG4pOiBTZWFyY2hJbmRleCB7XG5cbiAgLyogT3ZlcnJpZGUgZGVmYXVsdCBsYW5ndWFnZSB3aXRoIHZhbHVlIGZyb20gdHJhbnNsYXRpb24gKi9cbiAgaWYgKGNvbmZpZy5sYW5nLmxlbmd0aCA9PT0gMSAmJiBjb25maWcubGFuZ1swXSA9PT0gXCJlblwiKVxuICAgIGNvbmZpZy5sYW5nID0gW3RyYW5zbGF0ZShcInNlYXJjaC5jb25maWcubGFuZ1wiKV1cblxuICAvKiBPdmVycmlkZSBkZWZhdWx0IHNlcGFyYXRvciB3aXRoIHZhbHVlIGZyb20gdHJhbnNsYXRpb24gKi9cbiAgaWYgKGNvbmZpZy5zZXBhcmF0b3IgPT09IFwiW1xcXFxzXFxcXC1dK1wiKVxuICAgIGNvbmZpZy5zZXBhcmF0b3IgPSB0cmFuc2xhdGUoXCJzZWFyY2guY29uZmlnLnNlcGFyYXRvclwiKVxuXG4gIC8qIFNldCBwaXBlbGluZSBmcm9tIHRyYW5zbGF0aW9uICovXG4gIGNvbnN0IHBpcGVsaW5lID0gdHJhbnNsYXRlKFwic2VhcmNoLmNvbmZpZy5waXBlbGluZVwiKVxuICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAuZmlsdGVyKGlkZW50aXR5KSBhcyBTZWFyY2hJbmRleFBpcGVsaW5lXG5cbiAgLyogUmV0dXJuIHNlYXJjaCBpbmRleCBhZnRlciBkZWZhdWx0aW5nICovXG4gIHJldHVybiB7IGNvbmZpZywgZG9jcywgaW5kZXgsIHBpcGVsaW5lIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IHVwIHNlYXJjaCB3ZWIgd29ya2VyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGNyZWF0ZSBhIHdlYiB3b3JrZXIgdG8gc2V0IHVwIGFuZCBxdWVyeSB0aGUgc2VhcmNoIGluZGV4XG4gKiB3aGljaCBpcyBkb25lIHVzaW5nIGBsdW5yYC4gVGhlIGluZGV4IG11c3QgYmUgcGFzc2VkIGFzIGFuIG9ic2VydmFibGUgdG9cbiAqIGVuYWJsZSBoYWNrcyBsaWtlIF9sb2NhbHNlYXJjaF8gdmlhIHNlYXJjaCBpbmRleCBlbWJlZGRpbmcgYXMgSlNPTi5cbiAqXG4gKiBAcGFyYW0gdXJsIC0gV29ya2VyIFVSTFxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKlxuICogQHJldHVybiBXb3JrZXIgaGFuZGxlclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTZWFyY2hXb3JrZXIoXG4gIHVybDogc3RyaW5nLCB7IGluZGV4JCwgYmFzZSQgfTogU2V0dXBPcHRpb25zXG4pOiBXb3JrZXJIYW5kbGVyPFNlYXJjaE1lc3NhZ2U+IHtcbiAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcih1cmwpXG5cbiAgLyogQ3JlYXRlIGNvbW11bmljYXRpb24gY2hhbm5lbHMgYW5kIHJlc29sdmUgcmVsYXRpdmUgbGlua3MgKi9cbiAgY29uc3QgdHgkID0gbmV3IFN1YmplY3Q8U2VhcmNoTWVzc2FnZT4oKVxuICBjb25zdCByeCQgPSB3YXRjaFdvcmtlcih3b3JrZXIsIHsgdHgkIH0pXG4gICAgLnBpcGUoXG4gICAgICB3aXRoTGF0ZXN0RnJvbShiYXNlJCksXG4gICAgICBtYXAoKFttZXNzYWdlLCBiYXNlXSkgPT4ge1xuICAgICAgICBpZiAoaXNTZWFyY2hSZXN1bHRNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB7IGFydGljbGUsIHNlY3Rpb25zIH0gb2YgbWVzc2FnZS5kYXRhKSB7XG4gICAgICAgICAgICBhcnRpY2xlLmxvY2F0aW9uID0gYCR7YmFzZX0vJHthcnRpY2xlLmxvY2F0aW9ufWBcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucylcbiAgICAgICAgICAgICAgc2VjdGlvbi5sb2NhdGlvbiA9IGAke2Jhc2V9LyR7c2VjdGlvbi5sb2NhdGlvbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKVxuXG4gIC8qIFNldCB1cCBzZWFyY2ggaW5kZXggKi9cbiAgaW5kZXgkXG4gICAgLnBpcGUoXG4gICAgICBtYXA8U2VhcmNoSW5kZXgsIFNlYXJjaFNldHVwTWVzc2FnZT4oaW5kZXggPT4gKHtcbiAgICAgICAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuU0VUVVAsXG4gICAgICAgIGRhdGE6IHNldHVwU2VhcmNoSW5kZXgoaW5kZXgpXG4gICAgICB9KSksXG4gICAgICBvYnNlcnZlT24oYXN5bmNTY2hlZHVsZXIpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSh0eCQubmV4dC5iaW5kKHR4JCkpXG5cbiAgLyogUmV0dXJuIHdvcmtlciBoYW5kbGVyICovXG4gIHJldHVybiB7IHR4JCwgcngkIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vX1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZXNzYWdlXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFNlYXJjaEluZGV4LCBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vLi4vX1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIG1lc3NhZ2UgdHlwZVxuICovXG5leHBvcnQgY29uc3QgZW51bSBTZWFyY2hNZXNzYWdlVHlwZSB7XG4gIFNFVFVQLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggaW5kZXggc2V0dXAgKi9cbiAgUkVBRFksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBpbmRleCByZWFkeSAqL1xuICBRVUVSWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIHF1ZXJ5ICovXG4gIFJFU1VMVCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggcmVzdWx0cyAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQSBtZXNzYWdlIGNvbnRhaW5pbmcgdGhlIGRhdGEgbmVjZXNzYXJ5IHRvIHNldHVwIHRoZSBzZWFyY2ggaW5kZXhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZXR1cE1lc3NhZ2Uge1xuICB0eXBlOiBTZWFyY2hNZXNzYWdlVHlwZS5TRVRVUCAgICAgICAgLyogTWVzc2FnZSB0eXBlICovXG4gIGRhdGE6IFNlYXJjaEluZGV4ICAgICAgICAgICAgICAgICAgICAvKiBNZXNzYWdlIGRhdGEgKi9cbn1cblxuLyoqXG4gKiBBIG1lc3NhZ2UgaW5kaWNhdGluZyB0aGUgc2VhcmNoIGluZGV4IGlzIHJlYWR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUmVhZHlNZXNzYWdlIHtcbiAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuUkVBRFkgICAgICAgIC8qIE1lc3NhZ2UgdHlwZSAqL1xufVxuXG4vKipcbiAqIEEgbWVzc2FnZSBjb250YWluaW5nIGEgc2VhcmNoIHF1ZXJ5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUXVlcnlNZXNzYWdlIHtcbiAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuUVVFUlkgICAgICAgIC8qIE1lc3NhZ2UgdHlwZSAqL1xuICBkYXRhOiBzdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgLyogTWVzc2FnZSBkYXRhICovXG59XG5cbi8qKlxuICogQSBtZXNzYWdlIGNvbnRhaW5pbmcgcmVzdWx0cyBmb3IgYSBzZWFyY2ggcXVlcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hSZXN1bHRNZXNzYWdlIHtcbiAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuUkVTVUxUICAgICAgIC8qIE1lc3NhZ2UgdHlwZSAqL1xuICBkYXRhOiBTZWFyY2hSZXN1bHRbXSAgICAgICAgICAgICAgICAgLyogTWVzc2FnZSBkYXRhICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBBIG1lc3NhZ2UgZXhjaGFuZ2VkIHdpdGggdGhlIHNlYXJjaCB3b3JrZXJcbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoTWVzc2FnZSA9XG4gIHwgU2VhcmNoU2V0dXBNZXNzYWdlXG4gIHwgU2VhcmNoUmVhZHlNZXNzYWdlXG4gIHwgU2VhcmNoUXVlcnlNZXNzYWdlXG4gIHwgU2VhcmNoUmVzdWx0TWVzc2FnZVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUeXBlIGd1YXJkIGZvciBzZWFyY2ggc2V0dXAgbWVzc2FnZXNcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSAtIFNlYXJjaCB3b3JrZXIgbWVzc2FnZVxuICpcbiAqIEByZXR1cm4gVGVzdCByZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2VhcmNoU2V0dXBNZXNzYWdlKFxuICBtZXNzYWdlOiBTZWFyY2hNZXNzYWdlXG4pOiBtZXNzYWdlIGlzIFNlYXJjaFNldHVwTWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IFNlYXJjaE1lc3NhZ2VUeXBlLlNFVFVQXG59XG5cbi8qKlxuICogVHlwZSBndWFyZCBmb3Igc2VhcmNoIHJlYWR5IG1lc3NhZ2VzXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBTZWFyY2ggd29ya2VyIG1lc3NhZ2VcbiAqXG4gKiBAcmV0dXJuIFRlc3QgcmVzdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlYXJjaFJlYWR5TWVzc2FnZShcbiAgbWVzc2FnZTogU2VhcmNoTWVzc2FnZVxuKTogbWVzc2FnZSBpcyBTZWFyY2hSZWFkeU1lc3NhZ2Uge1xuICByZXR1cm4gbWVzc2FnZS50eXBlID09PSBTZWFyY2hNZXNzYWdlVHlwZS5SRUFEWVxufVxuXG4vKipcbiAqIFR5cGUgZ3VhcmQgZm9yIHNlYXJjaCBxdWVyeSBtZXNzYWdlc1xuICpcbiAqIEBwYXJhbSBtZXNzYWdlIC0gU2VhcmNoIHdvcmtlciBtZXNzYWdlXG4gKlxuICogQHJldHVybiBUZXN0IHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZWFyY2hRdWVyeU1lc3NhZ2UoXG4gIG1lc3NhZ2U6IFNlYXJjaE1lc3NhZ2Vcbik6IG1lc3NhZ2UgaXMgU2VhcmNoUXVlcnlNZXNzYWdlIHtcbiAgcmV0dXJuIG1lc3NhZ2UudHlwZSA9PT0gU2VhcmNoTWVzc2FnZVR5cGUuUVVFUllcbn1cblxuLyoqXG4gKiBUeXBlIGd1YXJkIGZvciBzZWFyY2ggcmVzdWx0IG1lc3NhZ2VzXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBTZWFyY2ggd29ya2VyIG1lc3NhZ2VcbiAqXG4gKiBAcmV0dXJuIFRlc3QgcmVzdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlYXJjaFJlc3VsdE1lc3NhZ2UoXG4gIG1lc3NhZ2U6IFNlYXJjaE1lc3NhZ2Vcbik6IG1lc3NhZ2UgaXMgU2VhcmNoUmVzdWx0TWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IFNlYXJjaE1lc3NhZ2VUeXBlLlJFU1VMVFxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbEtleUNoYW5nZWQsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IFZpZXdwb3J0LCBnZXRFbGVtZW50cyB9IGZyb20gXCJicm93c2VyXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgTW91bnRPcHRpb25zIHtcbiAgZG9jdW1lbnQkOiBPYnNlcnZhYmxlPERvY3VtZW50PiAgICAgIC8qIERvY3VtZW50IG9ic2VydmFibGUgKi9cbiAgdmlld3BvcnQkOiBPYnNlcnZhYmxlPFZpZXdwb3J0PiAgICAgIC8qIFZpZXdwb3J0IG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUGF0Y2ggYWxsIGBjb2RlYCBlbGVtZW50c1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIG92ZXJmbG93aW5nIGNvZGUgYmxvY2tzIGZvY3VzYWJsZSB2aWEga2V5Ym9hcmQsIHNvXG4gKiB0aGV5IGNhbiBiZSBzY3JvbGxlZCB3aXRob3V0IGEgbW91c2UuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaENvZGVCbG9ja3MoXG4gIHsgZG9jdW1lbnQkLCB2aWV3cG9ydCQgfTogTW91bnRPcHRpb25zXG4pOiB2b2lkIHtcbiAgY29uc3QgZWxzJCA9IGRvY3VtZW50JFxuICAgIC5waXBlKFxuICAgICAgbWFwKCgpID0+IGdldEVsZW1lbnRzPEhUTUxUYWJsZUVsZW1lbnQ+KFwicHJlID4gY29kZVwiKSlcbiAgICApXG5cbiAgLyogT2JzZXJ2ZSB2aWV3cG9ydCBzaXplIG9ubHkgKi9cbiAgY29uc3Qgc2l6ZSQgPSB2aWV3cG9ydCRcbiAgICAucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxLZXlDaGFuZ2VkKFwic2l6ZVwiKVxuICAgIClcblxuICAvKiBNYWtlIG92ZXJmbG93aW5nIGVsZW1lbnRzIGZvY3VzYWJsZSAqL1xuICBjb21iaW5lTGF0ZXN0KFtlbHMkLCBzaXplJF0pXG4gICAgLnN1YnNjcmliZSgoW2Vsc10pID0+IHtcbiAgICAgIGZvciAoY29uc3QgZWwgb2YgZWxzKSB7XG4gICAgICAgIGlmIChlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoKVxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIilcbiAgICAgIH1cbiAgICB9KVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gXCJyYW1kYVwiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcFRvLFxuICB0YXBcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcblxuaW1wb3J0IHtcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudHMsXG4gIHdhdGNoTWVkaWFcbn0gZnJvbSBcImJyb3dzZXJcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBQYXRjaCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBQYXRjaE9wdGlvbnMge1xuICBkb2N1bWVudCQ6IE9ic2VydmFibGU8RG9jdW1lbnQ+ICAgICAgLyogRG9jdW1lbnQgb2JzZXJ2YWJsZSAqL1xuICBoYXNoJDogT2JzZXJ2YWJsZTxzdHJpbmc+ICAgICAgICAgICAgLyogTG9jYXRpb24gaGFzaCBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFBhdGNoIGFsbCBgZGV0YWlsc2AgZWxlbWVudHNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgZW5zdXJlIHRoYXQgYWxsIGBkZXRhaWxzYCB0YWdzIGFyZSBvcGVuZWQgcHJpb3IgdG9cbiAqIHByaW50aW5nLCBzbyB0aGUgd2hvbGUgY29udGVudCBvZiB0aGUgcGFnZSBpcyBpbmNsdWRlZCwgYW5kIG9uIGFuY2hvciBqdW1wcy5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRGV0YWlscyhcbiAgeyBkb2N1bWVudCQsIGhhc2gkIH06IFBhdGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGNvbnN0IGVscyQgPSBkb2N1bWVudCRcbiAgICAucGlwZShcbiAgICAgIG1hcCgoKSA9PiBnZXRFbGVtZW50czxIVE1MRGV0YWlsc0VsZW1lbnQ+KFwiZGV0YWlsc1wiKSlcbiAgICApXG5cbiAgLyogT3BlbiBhbGwgZGV0YWlscyBiZWZvcmUgcHJpbnRpbmcgKi9cbiAgbWVyZ2UoXG4gICAgd2F0Y2hNZWRpYShcInByaW50XCIpLnBpcGUoZmlsdGVyKGlkZW50aXR5KSksIC8qIFdlYmtpdCAqL1xuICAgIGZyb21FdmVudCh3aW5kb3csIFwiYmVmb3JlcHJpbnRcIikgICAgICAgICAgICAvKiBJRSwgRkYgKi9cbiAgKVxuICAgIC5waXBlKFxuICAgICAgc3dpdGNoTWFwVG8oZWxzJClcbiAgICApXG4gICAgICAuc3Vic2NyaWJlKGVscyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgZWxzKVxuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJcIilcbiAgICAgIH0pXG5cbiAgLyogT3BlbiBwYXJlbnQgZGV0YWlscyBhbmQgZml4IGFuY2hvciBqdW1wICovXG4gIGhhc2gkXG4gICAgLnBpcGUoXG4gICAgICBtYXAoaWQgPT4gZ2V0RWxlbWVudChgW2lkPVwiJHtpZH1cIl1gKSEpLFxuICAgICAgZmlsdGVyKGVsID0+IHR5cGVvZiBlbCAhPT0gXCJ1bmRlZmluZWRcIiksXG4gICAgICB0YXAoZWwgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzID0gZWwuY2xvc2VzdChcImRldGFpbHNcIilcbiAgICAgICAgaWYgKGRldGFpbHMgJiYgIWRldGFpbHMub3BlbilcbiAgICAgICAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcIm9wZW5cIiwgXCJcIilcbiAgICAgIH0pXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShlbCA9PiBlbC5zY3JvbGxJbnRvVmlldygpKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9jb2RlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RldGFpbHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2NyaXB0XCJcbmV4cG9ydCAqIGZyb20gXCIuL3Njcm9sbGZpeFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zb3VyY2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGVcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgbWFwLCBza2lwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGdldEVsZW1lbnRzLFxuICByZXBsYWNlRWxlbWVudFxufSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQgeyB1c2VDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50c1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFBhdGNoIG9wdGlvbnNcbiAqL1xuaW50ZXJmYWNlIFBhdGNoT3B0aW9ucyB7XG4gIGRvY3VtZW50JDogT2JzZXJ2YWJsZTxEb2N1bWVudD4gICAgICAvKiBEb2N1bWVudCBvYnNlcnZhYmxlICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFBhdGNoIGFsbCBgc2NyaXB0YCBlbGVtZW50c1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gbXVzdCBiZSBydW4gYWZ0ZXIgYSBkb2N1bWVudCBzd2l0Y2gsIHdoaWNoIG1lYW5zIHRoZSBmaXJzdFxuICogZW1pc3Npb24gbXVzdCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hTY3JpcHRzKFxuICB7IGRvY3VtZW50JCB9OiBQYXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBjb25zdCBlbHMkID0gZG9jdW1lbnQkXG4gICAgLnBpcGUoXG4gICAgICBza2lwKDEpLFxuICAgICAgd2l0aExhdGVzdEZyb20odXNlQ29tcG9uZW50KFwiY29udGFpbmVyXCIpKSxcbiAgICAgIG1hcCgoWywgZWxdKSA9PiBnZXRFbGVtZW50czxIVE1MU2NyaXB0RWxlbWVudD4oXCJzY3JpcHRcIiwgZWwpKVxuICAgIClcblxuICAvKiBFdmFsdWF0ZSBhbGwgc2NyaXB0cyB2aWEgcmVwbGFjZW1lbnQgKi9cbiAgZWxzJC5zdWJzY3JpYmUoZWxzID0+IHtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIGVscykge1xuICAgICAgaWYgKGVsLnNyYyB8fCAvKF58XFwvamF2YXNjcmlwdCkkL2kudGVzdChlbC50eXBlKSkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpXG4gICAgICAgIGNvbnN0IGtleSA9IGVsLnNyYyA/IFwic3JjXCIgOiBcInRleHRDb250ZW50XCJcbiAgICAgICAgc2NyaXB0W2tleV0gPSBlbFtrZXldIVxuICAgICAgICByZXBsYWNlRWxlbWVudChlbCwgc2NyaXB0KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgTkVWRVIsIE9ic2VydmFibGUsIGZyb21FdmVudCwgaWlmLCBtZXJnZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IG1hcCwgbWFwVG8sIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBnZXRFbGVtZW50cyB9IGZyb20gXCJicm93c2VyXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUGF0Y2ggb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgUGF0Y2hPcHRpb25zIHtcbiAgZG9jdW1lbnQkOiBPYnNlcnZhYmxlPERvY3VtZW50PiAgICAgIC8qIERvY3VtZW50IG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIGZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIGRldmljZSBpcyBhbiBBcHBsZSBkZXZpY2VcbiAqXG4gKiBAcmV0dXJuIFRlc3QgcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGlzQXBwbGVEZXZpY2UoKTogYm9vbGVhbiB7XG4gIHJldHVybiAvKGlQYWR8aVBob25lfGlQb2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFBhdGNoIGFsbCBlbGVtZW50cyB3aXRoIGBkYXRhLW1kLXNjcm9sbGZpeGAgYXR0cmlidXRlc1xuICpcbiAqIFRoaXMgaXMgYSB5ZWFyLW9sZCBwYXRjaCB3aGljaCBlbnN1cmVzIHRoYXQgb3ZlcmZsb3cgc2Nyb2xsaW5nIHdvcmtzIGF0IHRoZVxuICogdG9wIGFuZCBib3R0b20gb2YgY29udGFpbmVycyBvbiBpT1MgYnkgZW5zdXJpbmcgYSBgMXB4YCBzY3JvbGwgb2Zmc2V0IHVwb25cbiAqIHRoZSBzdGFydCBvZiBhIHRvdWNoIGV2ZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9iaXQubHkvMlNDdEFPTyAtIE9yaWdpbmFsIHNvdXJjZVxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hTY3JvbGxmaXgoXG4gIHsgZG9jdW1lbnQkIH06IFBhdGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGNvbnN0IGVscyQgPSBkb2N1bWVudCRcbiAgICAucGlwZShcbiAgICAgIG1hcCgoKSA9PiBnZXRFbGVtZW50cyhcIltkYXRhLW1kLXNjcm9sbGZpeF1cIikpLFxuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApXG5cbiAgLyogUmVtb3ZlIG1hcmtlciBhdHRyaWJ1dGUsIHNvIHdlJ2xsIG9ubHkgYWRkIHRoZSBmaXggb25jZSAqL1xuICBlbHMkLnN1YnNjcmliZShlbHMgPT4ge1xuICAgIGZvciAoY29uc3QgZWwgb2YgZWxzKVxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1tZC1zY3JvbGxmaXhcIilcbiAgfSlcblxuICAvKiBQYXRjaCBvdmVyZmxvdyBzY3JvbGxpbmcgb24gdG91Y2ggc3RhcnQgKi9cbiAgaWlmKGlzQXBwbGVEZXZpY2UsIGVscyQsIE5FVkVSKVxuICAgIC5waXBlKFxuICAgICAgc3dpdGNoTWFwKGVscyA9PiBtZXJnZSguLi5lbHMubWFwKGVsID0+IChcbiAgICAgICAgZnJvbUV2ZW50KGVsLCBcInRvdWNoc3RhcnRcIiwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXBUbyhlbClcbiAgICAgICAgICApXG4gICAgICApKSkpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShlbCA9PiB7XG4gICAgICAgIGNvbnN0IHRvcCA9IGVsLnNjcm9sbFRvcFxuXG4gICAgICAgIC8qIFdlJ3JlIGF0IHRoZSB0b3Agb2YgdGhlIGNvbnRhaW5lciAqL1xuICAgICAgICBpZiAodG9wID09PSAwKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsVG9wID0gMVxuXG4gICAgICAgIC8qIFdlJ3JlIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lciAqL1xuICAgICAgICB9IGVsc2UgaWYgKHRvcCArIGVsLm9mZnNldEhlaWdodCA9PT0gZWwuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgZWwuc2Nyb2xsVG9wID0gdG9wIC0gMVxuICAgICAgICB9XG4gICAgICB9KVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBSZXBvLCBVc2VyIH0gZnJvbSBcImdpdGh1Yi10eXBlc1wiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IGFqYXggfSBmcm9tIFwicnhqcy9hamF4XCJcbmltcG9ydCB7IGZpbHRlciwgcGx1Y2ssIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5cbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcInV0aWxpdGllc1wiXG5cbmltcG9ydCB7IFNvdXJjZUZhY3RzIH0gZnJvbSBcIi4uXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogRmV0Y2ggR2l0SHViIHNvdXJjZSBmYWN0c1xuICpcbiAqIEBwYXJhbSB1c2VyIC0gR2l0SHViIHVzZXJcbiAqIEBwYXJhbSByZXBvIC0gR2l0SHViIHJlcG9zaXRvcnlcbiAqXG4gKiBAcmV0dXJuIFNvdXJjZSBmYWN0cyBvYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFNvdXJjZUZhY3RzRnJvbUdpdEh1YihcbiAgdXNlcjogc3RyaW5nLCByZXBvPzogc3RyaW5nXG4pOiBPYnNlcnZhYmxlPFNvdXJjZUZhY3RzPiB7XG4gIHJldHVybiBhamF4KHtcbiAgICB1cmw6IHR5cGVvZiByZXBvICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICA/IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7dXNlcn0vJHtyZXBvfWBcbiAgICAgIDogYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyfWAsXG4gICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIlxuICB9KVxuICAgIC5waXBlKFxuICAgICAgZmlsdGVyKCh7IHN0YXR1cyB9KSA9PiBzdGF0dXMgPT09IDIwMCksXG4gICAgICBwbHVjayhcInJlc3BvbnNlXCIpLFxuICAgICAgc3dpdGNoTWFwKGRhdGEgPT4ge1xuXG4gICAgICAgIC8qIEdpdEh1YiByZXBvc2l0b3J5ICovXG4gICAgICAgIGlmICh0eXBlb2YgcmVwbyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGNvbnN0IHsgc3RhcmdhemVyc19jb3VudCwgZm9ya3NfY291bnQgfTogUmVwbyA9IGRhdGFcbiAgICAgICAgICByZXR1cm4gb2YoW1xuICAgICAgICAgICAgYCR7cm91bmQoc3RhcmdhemVyc19jb3VudCB8fCAwKX0gU3RhcnNgLFxuICAgICAgICAgICAgYCR7cm91bmQoZm9ya3NfY291bnQgfHwgMCl9IEZvcmtzYFxuICAgICAgICAgIF0pXG5cbiAgICAgICAgLyogR2l0SHViIHVzZXIvb3JnYW5pemF0aW9uICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgeyBwdWJsaWNfcmVwb3MgfTogVXNlciA9IGRhdGFcbiAgICAgICAgICByZXR1cm4gb2YoW1xuICAgICAgICAgICAgYCR7cm91bmQocHVibGljX3JlcG9zIHx8IDApfSBSZXBvc2l0b3JpZXNgXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFByb2plY3RTY2hlbWEgfSBmcm9tIFwiZ2l0bGFiXCJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBhamF4IH0gZnJvbSBcInJ4anMvYWpheFwiXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCJ1dGlsaXRpZXNcIlxuXG5pbXBvcnQgeyBTb3VyY2VGYWN0cyB9IGZyb20gXCIuLlwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEZldGNoIEdpdExhYiBzb3VyY2UgZmFjdHNcbiAqXG4gKiBAcGFyYW0gYmFzZSAtIEdpdExhYiBiYXNlXG4gKiBAcGFyYW0gcHJvamVjdCAtIEdpdExhYiBwcm9qZWN0XG4gKlxuICogQHJldHVybiBTb3VyY2UgZmFjdHMgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTb3VyY2VGYWN0c0Zyb21HaXRMYWIoXG4gIGJhc2U6IHN0cmluZywgcHJvamVjdDogc3RyaW5nXG4pOiBPYnNlcnZhYmxlPFNvdXJjZUZhY3RzPiB7XG4gIHJldHVybiBhamF4KHtcbiAgICB1cmw6IGBodHRwczovLyR7YmFzZX0vYXBpL3Y0L3Byb2plY3RzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb2plY3QpfWAsXG4gICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIlxuICB9KVxuICAgIC5waXBlKFxuICAgICAgZmlsdGVyKCh7IHN0YXR1cyB9KSA9PiBzdGF0dXMgPT09IDIwMCksXG4gICAgICBwbHVjayhcInJlc3BvbnNlXCIpLFxuICAgICAgbWFwKCh7IHN0YXJfY291bnQsIGZvcmtzX2NvdW50IH06IFByb2plY3RTY2hlbWEpID0+IChbXG4gICAgICAgIGAke3JvdW5kKHN0YXJfY291bnQpfSBTdGFyc2AsXG4gICAgICAgIGAke3JvdW5kKGZvcmtzX2NvdW50KX0gRm9ya3NgXG4gICAgICBdKSlcbiAgICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQgeyBnZXRFbGVtZW50T3JUaHJvdywgZ2V0RWxlbWVudHMgfSBmcm9tIFwiYnJvd3NlclwiXG5pbXBvcnQgeyByZW5kZXJTb3VyY2UgfSBmcm9tIFwidGVtcGxhdGVzXCJcbmltcG9ydCB7IGNhY2hlLCBoYXNoIH0gZnJvbSBcInV0aWxpdGllc1wiXG5cbmltcG9ydCB7IGZldGNoU291cmNlRmFjdHNGcm9tR2l0SHViIH0gZnJvbSBcIi4vZ2l0aHViXCJcbmltcG9ydCB7IGZldGNoU291cmNlRmFjdHNGcm9tR2l0TGFiIH0gZnJvbSBcIi4vZ2l0bGFiXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTb3VyY2UgZmFjdHNcbiAqL1xuZXhwb3J0IHR5cGUgU291cmNlRmFjdHMgPSBzdHJpbmdbXVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBQYXRjaCBvcHRpb25zXG4gKi9cbmludGVyZmFjZSBQYXRjaE9wdGlvbnMge1xuICBkb2N1bWVudCQ6IE9ic2VydmFibGU8RG9jdW1lbnQ+ICAgICAgLyogRG9jdW1lbnQgb2JzZXJ2YWJsZSAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogRmV0Y2ggc291cmNlIGZhY3RzXG4gKlxuICogQHBhcmFtIHVybCAtIFNvdXJjZSByZXBvc2l0b3J5IFVSTFxuICpcbiAqIEByZXR1cm4gU291cmNlIGZhY3RzIG9ic2VydmFibGVcbiAqL1xuZnVuY3Rpb24gZmV0Y2hTb3VyY2VGYWN0cyhcbiAgdXJsOiBzdHJpbmdcbik6IE9ic2VydmFibGU8U291cmNlRmFjdHM+IHtcbiAgY29uc3QgW3R5cGVdID0gdXJsLm1hdGNoKC8oZ2l0KD86aHVifGxhYikpL2kpIHx8IFtdXG4gIHN3aXRjaCAodHlwZS50b0xvd2VyQ2FzZSgpKSB7XG5cbiAgICAvKiBHaXRIdWIgcmVwb3NpdG9yeSAqL1xuICAgIGNhc2UgXCJnaXRodWJcIjpcbiAgICAgIGNvbnN0IFssIHVzZXIsIHJlcG9dID0gdXJsLm1hdGNoKC9eLitnaXRodWJcXC5jb21cXC8oW15cXC9dKylcXC8/KFteXFwvXSspPy9pKVxuICAgICAgcmV0dXJuIGZldGNoU291cmNlRmFjdHNGcm9tR2l0SHViKHVzZXIsIHJlcG8pXG5cbiAgICAvKiBHaXRMYWIgcmVwb3NpdG9yeSAqL1xuICAgIGNhc2UgXCJnaXRsYWJcIjpcbiAgICAgIGNvbnN0IFssIGJhc2UsIHNsdWddID0gdXJsLm1hdGNoKC9eLis/KFteXFwvXSpnaXRsYWJbXlxcL10rKVxcLyguKz8pXFwvPyQvaSlcbiAgICAgIHJldHVybiBmZXRjaFNvdXJjZUZhY3RzRnJvbUdpdExhYihiYXNlLCBzbHVnKVxuXG4gICAgLyogRXZlcnl0aGluZyBlbHNlICovXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBORVZFUlxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFBhdGNoIGVsZW1lbnRzIGNvbnRhaW5pbmcgcmVwb3NpdG9yeSBpbmZvcm1hdGlvblxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCByZXRyaWV2ZSB0aGUgVVJMIGZyb20gdGhlIHJlcG9zaXRvcnkgbGluayBhbmQgdHJ5IHRvXG4gKiBxdWVyeSBkYXRhIGZyb20gaW50ZWdyYXRlZCBzb3VyY2UgY29kZSBwbGF0Zm9ybXMgbGlrZSBHaXRIdWIgb3IgR2l0TGFiLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hTb3VyY2UoXG4gIHsgZG9jdW1lbnQkIH06IFBhdGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGRvY3VtZW50JFxuICAgIC5waXBlKFxuICAgICAgbWFwKCgpID0+IGdldEVsZW1lbnRPclRocm93PEhUTUxBbmNob3JFbGVtZW50PihcIi5tZC1zb3VyY2VbaHJlZl1cIikpLFxuICAgICAgc3dpdGNoTWFwKCh7IGhyZWYgfSkgPT4gKFxuICAgICAgICBjYWNoZShgJHtoYXNoKGhyZWYpfWAsICgpID0+IGZldGNoU291cmNlRmFjdHMoaHJlZikpXG4gICAgICApKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gTkVWRVIpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShmYWN0cyA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgZ2V0RWxlbWVudHMoXCIubWQtc291cmNlX19yZXBvc2l0b3J5XCIpKSB7XG4gICAgICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIpKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1kLXN0YXRlXCIsIFwiZG9uZVwiKVxuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQocmVuZGVyU291cmNlKGZhY3RzKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuXG5pbXBvcnQge1xuICBjcmVhdGVFbGVtZW50LFxuICBnZXRFbGVtZW50cyxcbiAgcmVwbGFjZUVsZW1lbnRcbn0gZnJvbSBcImJyb3dzZXJcIlxuaW1wb3J0IHsgcmVuZGVyVGFibGUgfSBmcm9tIFwidGVtcGxhdGVzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSGVscGVyIHR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTW91bnQgb3B0aW9uc1xuICovXG5pbnRlcmZhY2UgTW91bnRPcHRpb25zIHtcbiAgZG9jdW1lbnQkOiBPYnNlcnZhYmxlPERvY3VtZW50PiAgICAgIC8qIERvY3VtZW50IG9ic2VydmFibGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUGF0Y2ggYWxsIGB0YWJsZWAgZWxlbWVudHNcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmUtcmVuZGVyIGFsbCB0YWJsZXMgYnkgd3JhcHBpbmcgdGhlbSB0byBpbXByb3ZlIG92ZXJmbG93XG4gKiBzY3JvbGxpbmcgb24gc21hbGxlciBzY3JlZW4gc2l6ZXMuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFRhYmxlcyhcbiAgeyBkb2N1bWVudCQgfTogTW91bnRPcHRpb25zXG4pOiB2b2lkIHtcbiAgY29uc3Qgc2VudGluZWwgPSBjcmVhdGVFbGVtZW50KFwidGFibGVcIilcbiAgZG9jdW1lbnQkXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gZ2V0RWxlbWVudHM8SFRNTFRhYmxlRWxlbWVudD4oXCJ0YWJsZTpub3QoW2NsYXNzXSlcIikpXG4gICAgKVxuICAgICAgLnN1YnNjcmliZShlbHMgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIGVscykge1xuICAgICAgICAgIHJlcGxhY2VFbGVtZW50KGVsLCBzZW50aW5lbClcbiAgICAgICAgICByZXBsYWNlRWxlbWVudChzZW50aW5lbCwgcmVuZGVyVGFibGUoZWwpKVxuICAgICAgICB9XG4gICAgICB9KVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBoLCB0cmFuc2xhdGUgfSBmcm9tIFwidXRpbGl0aWVzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIENTUyBjbGFzc2VzXG4gKi9cbmNvbnN0IGNzcyA9IHtcbiAgY29udGFpbmVyOiBcIm1kLWNsaXBib2FyZCBtZC1pY29uXCJcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFBhdGggb2YgYGZpbGUtc2VhcmNoLW91dGxpbmVgIGljb25cbiAqL1xuY29uc3QgcGF0aCA9XG4gIFwiTTE5LDIxSDhWN0gxOU0xOSw1SDhBMiwyIDAgMCwwIDYsN1YyMUEyLDIgMCAwLDAgOCwyM0gxOUEyLDIgMCAwLDAgXCIgK1xuICBcIjIxLDIxVjdBMiwyIDAgMCwwIDE5LDVNMTYsMUg0QTIsMiAwIDAsMCAyLDNWMTdINFYzSDE2VjFaXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogUmVuZGVyIGEgJ2NvcHktdG8tY2xpcGJvYXJkJyBidXR0b25cbiAqXG4gKiBAcGFyYW0gaWQgLSBVbmlxdWUgaWRlbnRpZmllclxuICpcbiAqIEByZXR1cm4gRWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2xpcGJvYXJkQnV0dG9uKFxuICBpZDogc3RyaW5nXG4pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz17Y3NzLmNvbnRhaW5lcn1cbiAgICAgIHRpdGxlPXt0cmFuc2xhdGUoXCJjbGlwYm9hcmQuY29weVwiKX1cbiAgICAgIGRhdGEtY2xpcGJvYXJkLXRhcmdldD17YCMke2lkfSA+IGNvZGVgfVxuICAgID5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPHBhdGggZD17cGF0aH0+PC9wYXRoPlxuICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vY2xpcGJvYXJkXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaFwiXG5leHBvcnQgKiBmcm9tIFwiLi9zb3VyY2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGVcIlxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiaW50ZWdyYXRpb25zL3NlYXJjaFwiXG5pbXBvcnQgeyBoLCB0cnVuY2F0ZSB9IGZyb20gXCJ1dGlsaXRpZXNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ1NTIGNsYXNzZXNcbiAqL1xuY29uc3QgY3NzID0ge1xuICBpdGVtOiAgICBcIm1kLXNlYXJjaC1yZXN1bHRfX2l0ZW1cIixcbiAgbGluazogICAgXCJtZC1zZWFyY2gtcmVzdWx0X19saW5rXCIsXG4gIGFydGljbGU6IFwibWQtc2VhcmNoLXJlc3VsdF9fYXJ0aWNsZSBtZC1zZWFyY2gtcmVzdWx0X19hcnRpY2xlLS1kb2N1bWVudFwiLFxuICBzZWN0aW9uOiBcIm1kLXNlYXJjaC1yZXN1bHRfX2FydGljbGVcIixcbiAgdGl0bGU6ICAgXCJtZC1zZWFyY2gtcmVzdWx0X190aXRsZVwiLFxuICB0ZWFzZXI6ICBcIm1kLXNlYXJjaC1yZXN1bHRfX3RlYXNlclwiXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBQYXRoIG9mIGBjb250ZW50LWNvcHlgIGljb25cbiAqL1xuY29uc3QgcGF0aCA9XG4gIFwiTTE0LDJINkEyLDIgMCAwLDAgNCw0VjIwQTIsMiAwIDAsMCA2LDIySDEzQzEyLjU5LDIxLjc1IDEyLjIsMjEuNDQgXCIgK1xuICBcIjExLjg2LDIxLjFDMTEuNTMsMjAuNzcgMTEuMjUsMjAuNCAxMSwyMEg2VjRIMTNWOUgxOFYxMC4xOEMxOC43MSwxMC4zNCBcIiArXG4gIFwiMTkuMzksMTAuNjEgMjAsMTFWOEwxNCwyTTIwLjMxLDE4LjlDMjEuNjQsMTYuNzkgMjEsMTQgXCIgK1xuICBcIjE4LjkxLDEyLjY4QzE2LjgsMTEuMzUgMTQsMTIgMTIuNjksMTQuMDhDMTEuMzUsMTYuMTkgMTIsMTguOTcgXCIgK1xuICBcIjE0LjA5LDIwLjNDMTUuNTUsMjEuMjMgMTcuNDEsMjEuMjMgXCIgK1xuICBcIjE4Ljg4LDIwLjMyTDIyLDIzLjM5TDIzLjM5LDIyTDIwLjMxLDE4LjlNMTYuNSwxOUEyLjUsMi41IDAgMCwxIFwiICtcbiAgXCIxNCwxNi41QTIuNSwyLjUgMCAwLDEgMTYuNSwxNEEyLjUsMi41IDAgMCwxIDE5LDE2LjVBMi41LDIuNSAwIDAsMSAxNi41LDE5WlwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJlbmRlciBhIHNlYXJjaCByZXN1bHRcbiAqXG4gKiBAcGFyYW0gcmVzdWx0IC0gU2VhcmNoIHJlc3VsdFxuICpcbiAqIEByZXR1cm4gRWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoUmVzdWx0KFxuICB7IGFydGljbGUsIHNlY3Rpb25zIH06IFNlYXJjaFJlc3VsdFxuKSB7XG5cbiAgLyogUmVuZGVyIGljb24gKi9cbiAgY29uc3QgaWNvbiA9IChcbiAgICA8ZGl2IGNsYXNzPVwibWQtc2VhcmNoLXJlc3VsdF9faWNvbiBtZC1pY29uXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxwYXRoIGQ9e3BhdGh9PjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApXG5cbiAgLyogUmVuZGVyIGFydGljbGUgYW5kIHNlY3Rpb25zICovXG4gIGNvbnN0IGNoaWxkcmVuID0gW2FydGljbGUsIC4uLnNlY3Rpb25zXS5tYXAoZG9jdW1lbnQgPT4ge1xuICAgIGNvbnN0IHsgbG9jYXRpb24sIHRpdGxlLCB0ZXh0IH0gPSBkb2N1bWVudFxuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtsb2NhdGlvbn0gY2xhc3M9e2Nzcy5saW5rfSB0YWJJbmRleD17LTF9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz17XCJwYXJlbnRcIiBpbiBkb2N1bWVudCA/IGNzcy5zZWN0aW9uIDogY3NzLmFydGljbGV9PlxuICAgICAgICAgIHshKFwicGFyZW50XCIgaW4gZG9jdW1lbnQpICYmIGljb259XG4gICAgICAgICAgPGgxIGNsYXNzPXtjc3MudGl0bGV9Pnt0aXRsZX08L2gxPlxuICAgICAgICAgIHt0ZXh0Lmxlbmd0aCA+IDAgJiYgPHAgY2xhc3M9e2Nzcy50ZWFzZXJ9Pnt0cnVuY2F0ZSh0ZXh0LCAzMjApfTwvcD59XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvYT5cbiAgICApXG4gIH0pXG5cbiAgLyogUmVuZGVyIHNlYXJjaCByZXN1bHQgKi9cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3M9e2Nzcy5pdGVtfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFNvdXJjZUZhY3RzIH0gZnJvbSBcInBhdGNoZXMvc291cmNlXCJcbmltcG9ydCB7IGggfSBmcm9tIFwidXRpbGl0aWVzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIENTUyBjbGFzc2VzXG4gKi9cbmNvbnN0IGNzcyA9IHtcbiAgZmFjdHM6IFwibWQtc291cmNlX19mYWN0c1wiLFxuICBmYWN0OiAgXCJtZC1zb3VyY2VfX2ZhY3RcIlxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBSZW5kZXIgc291cmNlIGZhY3RzXG4gKlxuICogQHBhcmFtIGZhY3RzIC0gU291cmNlIGZhY3RzXG4gKlxuICogQHJldHVybiBFbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTb3VyY2UoXG4gIGZhY3RzOiBTb3VyY2VGYWN0c1xuKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gZmFjdHMubWFwKGZhY3QgPT4gKFxuICAgIDxsaSBjbGFzcz17Y3NzLmZhY3R9PntmYWN0fTwvbGk+XG4gICkpXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzPXtjc3MuZmFjdHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgaCB9IGZyb20gXCJ1dGlsaXRpZXNcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ1NTIGNsYXNzZXNcbiAqL1xuY29uc3QgY3NzID0ge1xuICB3cmFwcGVyOiBcIm1kLXR5cGVzZXRfX3Njcm9sbHdyYXBcIixcbiAgdGFibGU6ICAgXCJtZC10eXBlc2V0X190YWJsZVwiXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFJlbmRlciBhIHRhYmxlIGluc2lkZSBhIHdyYXBwZXIgdG8gaW1wcm92ZSBzY3JvbGxpbmcgb24gbW9iaWxlXG4gKlxuICogQHBhcmFtIHRhYmxlIC0gVGFibGUgZWxlbWVudFxuICpcbiAqIEByZXR1cm4gRWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFibGUoXG4gIHRhYmxlOiBIVE1MVGFibGVFbGVtZW50XG4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPXtjc3Mud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzPXtjc3MudGFibGV9PlxuICAgICAgICB7dGFibGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgeyBTZWFyY2hJbmRleCwgU2VhcmNoVHJhbnNmb3JtRm4gfSBmcm9tIFwiaW50ZWdyYXRpb25zXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBGZWF0dXJlIGZsYWdzXG4gKi9cbmV4cG9ydCB0eXBlIEZlYXR1cmUgPVxuICB8IFwidGFic1wiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBUYWJzIG5hdmlnYXRpb24gKi9cbiAgfCBcImluc3RhbnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgLyogSW5zdGFudCBsb2FkaW5nXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBDb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgYmFzZTogc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEJhc2UgVVJMICovXG4gIGZlYXR1cmVzOiBGZWF0dXJlW10gICAgICAgICAgICAgICAgICAvKiBGZWF0dXJlIGZsYWdzICovXG4gIHNlYXJjaDoge1xuICAgIHdvcmtlcjogc3RyaW5nICAgICAgICAgICAgICAgICAgICAgLyogV29ya2VyIFVSTCAqL1xuICAgIGluZGV4PzogUHJvbWlzZTxTZWFyY2hJbmRleD4gICAgICAgLyogUHJvbWlzZSByZXNvbHZpbmcgd2l0aCBpbmRleCAqL1xuICAgIHRyYW5zZm9ybT86IFNlYXJjaFRyYW5zZm9ybUZuICAgICAgLyogVHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gKi9cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSB2YWxpZCBjb25maWd1cmF0aW9uXG4gKlxuICogV2UgY291bGQgdXNlIGBqc29uc2NoZW1hYCBvciBhbnkgb3RoZXIgc2NoZW1hIHZhbGlkYXRpb24gZnJhbWV3b3JrLCBidXQgdGhhdFxuICogd291bGQganVzdCBhZGQgbW9yZSBibG9hdCB0byB0aGUgYnVuZGxlLCBzbyB3ZSdsbCBrZWVwIGl0IHBsYWluIGFuZCBzaW1wbGUuXG4gKlxuICogQHBhcmFtIGNvbmZpZyAtIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBAcmV0dXJuIFRlc3QgcmVzdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbmZpZyhjb25maWc6IGFueSk6IGNvbmZpZyBpcyBDb25maWcge1xuICByZXR1cm4gdHlwZW9mIGNvbmZpZyA9PT0gXCJvYmplY3RcIlxuICAgICAgJiYgdHlwZW9mIGNvbmZpZy5iYXNlID09PSBcInN0cmluZ1wiXG4gICAgICAmJiB0eXBlb2YgY29uZmlnLmZlYXR1cmVzID09PSBcIm9iamVjdFwiXG4gICAgICAmJiB0eXBlb2YgY29uZmlnLnNlYXJjaCA9PT0gXCJvYmplY3RcIlxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNi0yMDIwIE1hcnRpbiBEb25hdGggPG1hcnRpbi5kb25hdGhAc3F1aWRmdW5rLmNvbT5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0b1xuICogZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGVcbiAqIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuICogc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5leHBvcnQgKiBmcm9tIFwiLi9jb25maWdcIlxuZXhwb3J0ICogZnJvbSBcIi4vanN4XCJcbmV4cG9ydCAqIGZyb20gXCIuL3J4anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3RyaW5nXCJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGUgbm8tbnVsbC1rZXl3b3JkXG5cbmltcG9ydCB7IEpTWCBhcyBKU1hJbnRlcm5hbCB9IGZyb20gXCJwcmVhY3RcIlxuaW1wb3J0IHsga2V5cyB9IGZyb20gXCJyYW1kYVwiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEhlbHBlciB0eXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIEhUTUwgYW5kIFNWRyBhdHRyaWJ1dGVzXG4gKi9cbnR5cGUgQXR0cmlidXRlcyA9XG4gICYgSlNYSW50ZXJuYWwuSFRNTEF0dHJpYnV0ZXNcbiAgJiBKU1hJbnRlcm5hbC5TVkdBdHRyaWJ1dGVzXG4gICYgUmVjb3JkPHN0cmluZywgYW55PlxuXG4vKipcbiAqIENoaWxkIGVsZW1lbnRcbiAqL1xudHlwZSBDaGlsZCA9XG4gIHwgSFRNTEVsZW1lbnRcbiAgfCBTVkdFbGVtZW50XG4gIHwgVGV4dFxuICB8IHN0cmluZ1xuICB8IG51bWJlclxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gdGFnTmFtZSAtIEhUTUwgb3IgU1ZHIHRhZ1xuICpcbiAqIEByZXR1cm4gRWxlbWVudFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCB7XG4gIHN3aXRjaCAodGFnTmFtZSkge1xuXG4gICAgLyogU1ZHIGVsZW1lbnRzICovXG4gICAgY2FzZSBcInN2Z1wiOlxuICAgIGNhc2UgXCJwYXRoXCI6XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdGFnTmFtZSlcblxuICAgIC8qIEhUTUwgZWxlbWVudHMgKi9cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhbiBhdHRyaWJ1dGVcbiAqXG4gKiBAcGFyYW0gZWwgLSBFbGVtZW50XG4gKiBAcGFyYW0gbmFtZSAtIEF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0gdmFsdWUgLSBBdHRyaWJ1dGUgdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlKFxuICBlbDogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgc3dpdGNoIChuYW1lKSB7XG5cbiAgICAvKiBBdHRyaWJ1dGVzIHRvIGJlIGlnbm9yZWQgKi9cbiAgICBjYXNlIFwieG1sbnNcIjpcbiAgICAgIGJyZWFrXG5cbiAgICAvKiBBdHRyaWJ1dGVzIG9mIFNWRyBlbGVtZW50cyAqL1xuICAgIGNhc2UgXCJ2aWV3Qm94XCI6XG4gICAgY2FzZSBcImRcIjpcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBuYW1lLCB2YWx1ZSlcbiAgICAgIGVsc2UgaWYgKHZhbHVlKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBuYW1lLCBcIlwiKVxuICAgICAgYnJlYWtcblxuICAgIC8qIEF0dHJpYnV0ZXMgb2YgSFRNTCBlbGVtZW50cyAqL1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIilcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgICAgZWxzZSBpZiAodmFsdWUpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCBcIlwiKVxuICB9XG59XG5cbi8qKlxuICogQXBwZW5kIGEgY2hpbGQgbm9kZSB0byBhbiBlbGVtZW50XG4gKlxuICogQHBhcmFtIGVsIC0gRWxlbWVudFxuICogQHBhcmFtIGNoaWxkIC0gQ2hpbGQgbm9kZShzKVxuICovXG5mdW5jdGlvbiBhcHBlbmRDaGlsZChcbiAgZWw6IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudCwgY2hpbGQ6IENoaWxkIHwgQ2hpbGRbXVxuKTogdm9pZCB7XG5cbiAgLyogSGFuZGxlIHByaW1pdGl2ZSB0eXBlcyAoaW5jbHVkaW5nIHJhdyBIVE1MKSAqL1xuICBpZiAodHlwZW9mIGNoaWxkID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBjaGlsZCA9PT0gXCJudW1iZXJcIikge1xuICAgIGVsLmlubmVySFRNTCArPSBjaGlsZC50b1N0cmluZygpXG5cbiAgLyogSGFuZGxlIG5vZGVzICovXG4gIH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpXG5cbiAgLyogSGFuZGxlIG5lc3RlZCBjaGlsZHJlbiAqL1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIGNoaWxkKVxuICAgICAgYXBwZW5kQ2hpbGQoZWwsIG5vZGUpXG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogSlNYIGZhY3RvcnlcbiAqXG4gKiBAcGFyYW0gdGFnTmFtZSAtIEhUTUwgb3IgU1ZHIHRhZ1xuICogQHBhcmFtIGF0dHJpYnV0ZXMgLSBIVE1MIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIENoaWxkIGVsZW1lbnRzXG4gKlxuICogQHJldHVybiBFbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoKFxuICB0YWdOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMgfCBudWxsLCAuLi5jaGlsZHJlbjogQ2hpbGRbXVxuKTogSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50IHtcbiAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLyogU2V0IGF0dHJpYnV0ZXMsIGlmIGFueSAqL1xuICBpZiAoYXR0cmlidXRlcylcbiAgICBmb3IgKGNvbnN0IGF0dHIgb2Yga2V5cyhhdHRyaWJ1dGVzKSlcbiAgICAgIHNldEF0dHJpYnV0ZShlbCwgYXR0ciwgYXR0cmlidXRlc1thdHRyXSlcblxuICAvKiBBcHBlbmQgY2hpbGQgbm9kZXMgKi9cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbilcbiAgICBhcHBlbmRDaGlsZChlbCwgY2hpbGQpXG5cbiAgLyogUmV0dXJuIGVsZW1lbnQgKi9cbiAgcmV0dXJuIGVsXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE5hbWVzcGFjZVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5leHBvcnQgZGVjbGFyZSBuYW1lc3BhY2UgaCB7XG4gIG5hbWVzcGFjZSBKU1gge1xuICAgIHR5cGUgRWxlbWVudCA9IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudFxuICAgIHR5cGUgSW50cmluc2ljRWxlbWVudHMgPSBKU1hJbnRlcm5hbC5JbnRyaW5zaWNFbGVtZW50c1xuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUsIGRlZmVyLCBvZiB9IGZyb20gXCJyeGpzXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ2FjaGUgdGhlIGxhc3QgdmFsdWUgZW1pdHRlZCBieSBhbiBvYnNlcnZhYmxlIGluIHNlc3Npb24gc3RvcmFnZVxuICpcbiAqIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGluIHNlc3Npb24gc3RvcmFnZSwgdGhlIGZhY3RvcnkgaXMgZXhlY3V0ZWQgYW5kIHRoZVxuICogbGF0ZXN0IHZhbHVlIGVtaXR0ZWQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHBlcnNpc3RlZCB0byBzZXNzaW9ucyBzdG9yYWdlLlxuICogTm90ZSB0aGF0IHRoZSB2YWx1ZXMgZW1pdHRlZCBieSB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSBtdXN0IGJlIHNlcmlhbGl6YWJsZVxuICogYXMgYEpTT05gLCBvciBkYXRhIHdpbGwgYmUgbG9zdC5cbiAqXG4gKiBAdGVtcGxhdGUgVCAtIFZhbHVlIHR5cGVcbiAqXG4gKiBAcGFyYW0ga2V5IC0gQ2FjaGUga2V5XG4gKiBAcGFyYW0gZmFjdG9yeSAtIE9ic2VydmFibGUgZmFjdG9yeVxuICpcbiAqIEByZXR1cm4gVmFsdWUgb2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGU8VD4oXG4gIGtleTogc3RyaW5nLCBmYWN0b3J5OiAoKSA9PiBPYnNlcnZhYmxlPFQ+XG4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHJldHVybiBvZihKU09OLnBhcnNlKGRhdGEpIGFzIFQpXG5cbiAgICAvKiBSZXRyaWV2ZSB2YWx1ZSBmcm9tIG9ic2VydmFibGUgZmFjdG9yeSBhbmQgd3JpdGUgdG8gc3RvcmFnZSAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSQgPSBmYWN0b3J5KClcbiAgICAgIHZhbHVlJC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8qIFVuY3JpdGljYWwsIGp1c3Qgc3dhbGxvdyAqL1xuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvKiBSZXR1cm4gdmFsdWUgKi9cbiAgICAgIHJldHVybiB2YWx1ZSRcbiAgICB9XG4gIH0pXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IGdldEVsZW1lbnRPclRocm93IH0gZnJvbSBcImJyb3dzZXJcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgdHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUcmFuc2xhdGlvbiBrZXlzXG4gKi9cbnR5cGUgVHJhbnNsYXRlS2V5ID1cbiAgfCBcImNsaXBib2FyZC5jb3B5XCIgICAgICAgICAgICAgICAgICAgLyogQ29weSB0byBjbGlwYm9hcmQgKi9cbiAgfCBcImNsaXBib2FyZC5jb3BpZWRcIiAgICAgICAgICAgICAgICAgLyogQ29waWVkIHRvIGNsaXBib2FyZCAqL1xuICB8IFwic2VhcmNoLmNvbmZpZy5sYW5nXCIgICAgICAgICAgICAgICAvKiBTZWFyY2ggbGFuZ3VhZ2UgKi9cbiAgfCBcInNlYXJjaC5jb25maWcucGlwZWxpbmVcIiAgICAgICAgICAgLyogU2VhcmNoIHBpcGVsaW5lICovXG4gIHwgXCJzZWFyY2guY29uZmlnLnNlcGFyYXRvclwiICAgICAgICAgIC8qIFNlYXJjaCBzZXBhcmF0b3IgKi9cbiAgfCBcInNlYXJjaC5yZXN1bHQucGxhY2Vob2xkZXJcIiAgICAgICAgLyogVHlwZSB0byBzdGFydCBzZWFyY2hpbmcgKi9cbiAgfCBcInNlYXJjaC5yZXN1bHQubm9uZVwiICAgICAgICAgICAgICAgLyogTm8gbWF0Y2hpbmcgZG9jdW1lbnRzICovXG4gIHwgXCJzZWFyY2gucmVzdWx0Lm9uZVwiICAgICAgICAgICAgICAgIC8qIDEgbWF0Y2hpbmcgZG9jdW1lbnQgKi9cbiAgfCBcInNlYXJjaC5yZXN1bHQub3RoZXJcIiAgICAgICAgICAgICAgLyogIyBtYXRjaGluZyBkb2N1bWVudHMgKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFRyYW5zbGF0aW9uc1xuICovXG5sZXQgbGFuZzogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUcmFuc2xhdGUgdGhlIGdpdmVuIGtleVxuICpcbiAqIEBwYXJhbSBrZXkgLSBLZXkgdG8gYmUgdHJhbnNsYXRlZFxuICogQHBhcmFtIHZhbHVlIC0gVmFsdWUgdG8gYmUgcmVwbGFjZWRcbiAqXG4gKiBAcmV0dXJuIFRyYW5zbGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoa2V5OiBUcmFuc2xhdGVLZXksIHZhbHVlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHR5cGVvZiBsYW5nID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgZWwgPSBnZXRFbGVtZW50T3JUaHJvdyhcIiNfX2xhbmdcIilcbiAgICBsYW5nID0gSlNPTi5wYXJzZShlbC50ZXh0Q29udGVudCEpXG4gIH1cbiAgaWYgKHR5cGVvZiBsYW5nW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoYEludmFsaWQgdHJhbnNsYXRpb246ICR7a2V5fWApXG4gIH1cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gbGFuZ1trZXldLnJlcGxhY2UoXCIjXCIsIHZhbHVlKVxuICAgIDogbGFuZ1trZXldXG59XG5cbi8qKlxuICogVHJ1bmNhdGUgYSBzdHJpbmcgYWZ0ZXIgdGhlIGdpdmVuIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gKlxuICogVGhpcyBpcyBub3QgYSB2ZXJ5IHJlYXNvbmFibGUgYXBwcm9hY2gsIHNpbmNlIHRoZSBzdW1tYXJpZXMga2luZCBvZiBzdWNrLlxuICogSXQgd291bGQgYmUgYmV0dGVyIHRvIGNyZWF0ZSBzb21ldGhpbmcgbW9yZSBpbnRlbGxpZ2VudCwgaGlnaGxpZ2h0aW5nIHRoZVxuICogc2VhcmNoIG9jY3VycmVuY2VzIGFuZCBtYWtpbmcgYSBiZXR0ZXIgc3VtbWFyeSBvdXQgb2YgaXQsIGJ1dCB0aGlzIG5vdGUgd2FzXG4gKiB3cml0dGVuIHRocmVlIHllYXJzIGFnbywgc28gd2hvIGtub3dzIGlmIHdlJ2xsIGV2ZXIgZml4IGl0LlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFZhbHVlIHRvIGJlIHRydW5jYXRlZFxuICogQHBhcmFtIG4gLSBOdW1iZXIgb2YgY2hhcmFjdGVyc1xuICpcbiAqIEByZXR1cm4gVHJ1bmNhdGVkIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZSh2YWx1ZTogc3RyaW5nLCBuOiBudW1iZXIpOiBzdHJpbmcge1xuICBsZXQgaSA9IG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA+IGkpIHtcbiAgICB3aGlsZSAodmFsdWVbaV0gIT09IFwiIFwiICYmIC0taSA+IDApOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIGAke3ZhbHVlLnN1YnN0cmluZygwLCBpKX0uLi5gXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogUm91bmQgYSBudW1iZXIgZm9yIGRpc3BsYXkgd2l0aCBzb3VyY2UgZmFjdHNcbiAqXG4gKiBUaGlzIGlzIGEgcmV2ZXJzZSBlbmdpbmVlcmVkIHZlcnNpb24gb2YgR2l0SHViJ3Mgd2VpcmQgcm91bmRpbmcgYWxnb3JpdGhtXG4gKiBmb3Igc3RhcnMsIGZvcmtzIGFuZCBhbGwgb3RoZXIgbnVtYmVycy4gV2hpbGUgYWxsIG51bWJlcnMgYmVsb3cgYDEsMDAwYCBhcmVcbiAqIHJldHVybmVkIGFzLWlzLCBiaWdnZXIgbnVtYmVycyBhcmUgY29udmVydGVkIHRvIGZpeGVkIG51bWJlcnM6XG4gKlxuICogLSBgMSwwNDlgID0+IGAxa2BcbiAqIC0gYDEsMDUwYCA9PiBgMS4xa2BcbiAqIC0gYDEsOTQ5YCA9PiBgMS45a2BcbiAqIC0gYDEsOTUwYCA9PiBgMmtgXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gT3JpZ2luYWwgdmFsdWVcbiAqXG4gKiBAcmV0dXJuIFJvdW5kZWQgdmFsdWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAodmFsdWUgPiA5OTkpIHtcbiAgICBjb25zdCBkaWdpdHMgPSArKCh2YWx1ZSAtIDk1MCkgJSAxMDAwID4gOTkpXG4gICAgcmV0dXJuIGAkeygodmFsdWUgKyAwLjAwMDAwMSkgLyAxMDAwKS50b0ZpeGVkKGRpZ2l0cyl9a2BcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKVxuICB9XG59XG5cbi8qKlxuICogU2ltcGxlIGhhc2ggZnVuY3Rpb25cbiAqXG4gKiBAc2VlIGh0dHBzOi8vYml0Lmx5LzJ3c1ZqSjQgLSBPcmlnaW5hbCBzb3VyY2VcbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBWYWx1ZSB0byBiZSBoYXNoZWRcbiAqXG4gKiBAcmV0dXJuIEhhc2ggYXMgMzJiaXQgaW50ZWdlclxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaCh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgaCA9IDBcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGggID0gKChoIDw8IDUpIC0gaCkgKyB2YWx1ZS5jaGFyQ29kZUF0KGkpXG4gICAgICBoIHw9IDAgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuICAgIHJldHVybiBoXG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=