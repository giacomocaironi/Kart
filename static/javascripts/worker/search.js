/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/javascripts/integrations/search/worker/main/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/escape-html/index.js":
/*!*******************************************!*\
  !*** ./node_modules/escape-html/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ "./node_modules/expose-loader/dist/runtime/getGlobalThis.js":
/*!******************************************************************!*\
  !*** ./node_modules/expose-loader/dist/runtime/getGlobalThis.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// eslint-disable-next-line func-names
module.exports = function () {
  if (typeof globalThis === 'object') {
    return globalThis;
  }

  var g;

  try {
    // This works if eval is allowed (see CSP)
    // eslint-disable-next-line no-new-func
    g = this || new Function('return this')();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === 'object') {
      return window;
    } // This works if the self reference is available


    if (typeof self === 'object') {
      return self;
    } // This works if the global reference is available


    if (typeof global !== 'undefined') {
      return global;
    }
  }

  return g;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lunr/lunr-exposed.js":
/*!*******************************************!*\
  !*** ./node_modules/lunr/lunr-exposed.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./lunr.js */ "./node_modules/lunr/lunr.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../expose-loader/dist/runtime/getGlobalThis.js */ "./node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
if (typeof ___EXPOSE_LOADER_GLOBAL_THIS___["lunr"] === 'undefined') ___EXPOSE_LOADER_GLOBAL_THIS___["lunr"] = ___EXPOSE_LOADER_IMPORT___;
else throw new Error('[exposes-loader] The "lunr" value exists in the global scope, it may not be safe to overwrite it, use the "override" option')
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "./node_modules/lunr/lunr.js":
/*!***********************************!*\
  !*** ./node_modules/lunr/lunr.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.8
 * Copyright (C) 2019 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.3.8"
/*!
 * lunr.utils
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 * @namespace lunr.utils
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf lunr.utils
 * @function
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf lunr.utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}

/**
 * Clones an object.
 *
 * Will create a copy of an existing object such that any mutations
 * on the copy cannot affect the original.
 *
 * Only shallow objects are supported, passing a nested object to this
 * function will cause a TypeError.
 *
 * Objects with primitives, and arrays of primitives are supported.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} a clone of the passed object.
 * @throws {TypeError} when a nested object is passed.
 * @memberOf Utils
 */
lunr.utils.clone = function (obj) {
  if (obj === null || obj === undefined) {
    return obj
  }

  var clone = Object.create(null),
      keys = Object.keys(obj)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
        val = obj[key]

    if (Array.isArray(val)) {
      clone[key] = val.slice()
      continue
    }

    if (typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean') {
      clone[key] = val
      continue
    }

    throw new TypeError("clone is not deep and does not support nested objects")
  }

  return clone
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/*!
 * lunr.Set
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A lunr set.
 *
 * @constructor
 */
lunr.Set = function (elements) {
  this.elements = Object.create(null)

  if (elements) {
    this.length = elements.length

    for (var i = 0; i < this.length; i++) {
      this.elements[elements[i]] = true
    }
  } else {
    this.length = 0
  }
}

/**
 * A complete set that contains all elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.complete = {
  intersect: function (other) {
    return other
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return true
  }
}

/**
 * An empty set that contains no elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.empty = {
  intersect: function () {
    return this
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return false
  }
}

/**
 * Returns true if this set contains the specified object.
 *
 * @param {object} object - Object whose presence in this set is to be tested.
 * @returns {boolean} - True if this set contains the specified object.
 */
lunr.Set.prototype.contains = function (object) {
  return !!this.elements[object]
}

/**
 * Returns a new set containing only the elements that are present in both
 * this set and the specified set.
 *
 * @param {lunr.Set} other - set to intersect with this set.
 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
 */

lunr.Set.prototype.intersect = function (other) {
  var a, b, elements, intersection = []

  if (other === lunr.Set.complete) {
    return this
  }

  if (other === lunr.Set.empty) {
    return other
  }

  if (this.length < other.length) {
    a = this
    b = other
  } else {
    a = other
    b = this
  }

  elements = Object.keys(a.elements)

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    if (element in b.elements) {
      intersection.push(element)
    }
  }

  return new lunr.Set (intersection)
}

/**
 * Returns a new set combining the elements of this and the specified set.
 *
 * @param {lunr.Set} other - set to union with this set.
 * @return {lunr.Set} a new set that is the union of this and the specified set.
 */

lunr.Set.prototype.union = function (other) {
  if (other === lunr.Set.complete) {
    return lunr.Set.complete
  }

  if (other === lunr.Set.empty) {
    return this
  }

  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
 * added as metadata to every token that is created from the object to be tokenized.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 * @see {@link lunr.Pipeline}
 */
lunr.tokenizer = function (obj, metadata) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(
        lunr.utils.asString(t).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  var str = obj.toString().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        var tokenMetadata = lunr.utils.clone(metadata) || {}
        tokenMetadata["position"] = [sliceStart, sliceLength]
        tokenMetadata["index"] = tokens.length

        tokens.push(
          new lunr.Token (
            str.slice(sliceStart, sliceEnd),
            tokenMetadata
          )
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null, undefined or an empty string. This token will not be passed to any downstream pipeline
 * functions and will not be added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]
    var memo = []

    for (var j = 0; j < tokens.length; j++) {
      var result = fn(tokens[j], j, tokens)

      if (result === null || result === void 0 || result === '') continue

      if (Array.isArray(result)) {
        for (var k = 0; k < result.length; k++) {
          memo.push(result[k])
        }
      } else {
        memo.push(result)
      }
    }

    tokens = memo
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @param {?object} metadata - Optional metadata to associate with the token
 * passed to the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str, metadata) {
  var token = new lunr.Token (str, metadata)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the similarity between this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / this.magnitude() || 0
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2019 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 * @function
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @function
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @function
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      }

      stack.push({
        node: noEditNode,
        editsRemaining: frame.editsRemaining,
        str: frame.str.slice(1)
      })
    }

    if (frame.editsRemaining == 0) {
      continue
    }

    // insertion
    if ("*" in frame.node.edges) {
      var insertionNode = frame.node.edges["*"]
    } else {
      var insertionNode = new lunr.TokenSet
      frame.node.edges["*"] = insertionNode
    }

    if (frame.str.length == 0) {
      insertionNode.final = true
    }

    stack.push({
      node: insertionNode,
      editsRemaining: frame.editsRemaining - 1,
      str: frame.str
    })

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.str.length > 1) {
      stack.push({
        node: frame.node,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // deletion
    // just removing the last character from the str
    if (frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      }

      stack.push({
        node: substitutionNode,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      }

      stack.push({
        node: transposeNode,
        editsRemaining: frame.editsRemaining - 1,
        str: charA + frame.str.slice(2)
      })
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * When a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * This is not intended to be used on a TokenSet that
 * contains wildcards, in these cases the results are
 * undefined and are likely to cause an infinite loop.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      /* In Safari, at this point the prefix is sometimes corrupted, see:
       * https://github.com/olivernn/lunr.js/issues/279 Calling any
       * String.prototype method forces Safari to "cast" this string to what
       * it's supposed to be, fixing the bug. */
      frame.prefix.charAt(0)
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 * @example <caption>terms with presence modifiers</caption>
 * -foo +bar baz
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.  For details on how the score is calculated, please see
 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null),
      requiredMatches = Object.create(null),
      prohibitedMatches = Object.create(null)

  /*
   * To support field level boosts a query vector is created per
   * field. An empty vector is eagerly created to support negated
   * queries.
   */
  for (var i = 0; i < this.fields.length; i++) {
    queryVectors[this.fields[i]] = new lunr.Vector
  }

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null,
        clauseMatches = lunr.Set.complete

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term, {
        fields: clause.fields
      })
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      /*
       * If a term marked as required does not exist in the tokenSet it is
       * impossible for the search to return any matches. We set all the field
       * scoped required matches set to empty and stop examining any further
       * clauses.
       */
      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k]
          requiredMatches[field] = lunr.Set.empty
        }

        break
      }

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field,
              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)

          /*
           * if the presence of this term is required ensure that the matching
           * documents are added to the set of required matches for this clause.
           *
           */
          if (clause.presence == lunr.Query.presence.REQUIRED) {
            clauseMatches = clauseMatches.union(matchingDocumentsSet)

            if (requiredMatches[field] === undefined) {
              requiredMatches[field] = lunr.Set.complete
            }
          }

          /*
           * if the presence of this term is prohibited ensure that the matching
           * documents are added to the set of prohibited matches for this field,
           * creating that set if it does not yet exist.
           */
          if (clause.presence == lunr.Query.presence.PROHIBITED) {
            if (prohibitedMatches[field] === undefined) {
              prohibitedMatches[field] = lunr.Set.empty
            }

            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)

            /*
             * Prohibited matches should not be part of the query vector used for
             * similarity scoring and no metadata should be extracted so we continue
             * to the next field
             */
            continue
          }

          /*
           * The query field vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }

    /**
     * If the presence was required we need to update the requiredMatches field sets.
     * We do this after all fields for the term have collected their matches because
     * the clause terms presence is required in _any_ of the fields not _all_ of the
     * fields.
     */
    if (clause.presence === lunr.Query.presence.REQUIRED) {
      for (var k = 0; k < clause.fields.length; k++) {
        var field = clause.fields[k]
        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)
      }
    }
  }

  /**
   * Need to combine the field scoped required and prohibited
   * matching documents into a global set of required and prohibited
   * matches
   */
  var allRequiredMatches = lunr.Set.complete,
      allProhibitedMatches = lunr.Set.empty

  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i]

    if (requiredMatches[field]) {
      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])
    }

    if (prohibitedMatches[field]) {
      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  /*
   * If the query is negated (contains only prohibited terms)
   * we need to get _all_ fieldRefs currently existing in the
   * index. This is only done when we know that the query is
   * entirely prohibited terms to avoid any cost of getting all
   * fieldRefs unnecessarily.
   *
   * Additionally, blank MatchData must be created to correctly
   * populate the results.
   */
  if (query.isNegated()) {
    matchingFieldRefs = Object.keys(this.fieldVectors)

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      var matchingFieldRef = matchingFieldRefs[i]
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)
      matchingFields[matchingFieldRef] = new lunr.MatchData
    }
  }

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef

    if (!allRequiredMatches.contains(docRef)) {
      continue
    }

    if (allProhibitedMatches.contains(docRef)) {
      continue
    }

    var fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = Object.create(null),
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = Object.create(null)
  this._documents = Object.create(null)
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * A function that is used to extract a field from a document.
 *
 * Lunr expects a field to be at the top level of a document, if however the field
 * is deeply nested within a document an extractor function can be used to extract
 * the right field for indexing.
 *
 * @callback fieldExtractor
 * @param {object} doc - The document being added to the index.
 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
 * @example <caption>Extracting a nested field</caption>
 * function (doc) { return doc.nested.field }
 */

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * Fields can be boosted at build time. This allows terms within that field to have more
 * importance when ranking search results. Use a field boost to specify that matches within
 * one field are more important than other fields.
 *
 * @param {string} fieldName - The name of a field to index in all documents.
 * @param {object} attributes - Optional attributes associated with this field.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
 */
lunr.Builder.prototype.field = function (fieldName, attributes) {
  if (/\//.test(fieldName)) {
    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
  }

  this._fields[fieldName] = attributes || {}
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
 * this document should rank higher in search results than other documents.
 *
 * @param {object} doc - The document to add to the index.
 * @param {object} attributes - Optional attributes associated with this document.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
 */
lunr.Builder.prototype.add = function (doc, attributes) {
  var docRef = doc[this._ref],
      fields = Object.keys(this._fields)

  this._documents[docRef] = attributes || {}
  this.documentCount += 1

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i],
        extractor = this._fields[fieldName].extractor,
        field = extractor ? extractor(doc) : doc[fieldName],
        tokens = this.tokenizer(field, {
          fields: [fieldName]
        }),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < fields.length; k++) {
          posting[fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  var fields = Object.keys(this._fields)

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i]
    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        fieldName = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length


    var fieldBoost = this._fields[fieldName].boost || 1,
        docBoost = this._documents[fieldRef.docRef].boost || 1

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)
      score *= fieldBoost
      score *= docBoost
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: Object.keys(this._fields),
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata || {})

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)

  if (term !== undefined) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = clonedMetadata
  }
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */

lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * Constants for indicating what kind of presence a term must have in matching documents.
 *
 * @constant
 * @enum {number}
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with required presence</caption>
 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
 */
lunr.Query.presence = {
  /**
   * Term's presence in a document is optional, this is the default value.
   */
  OPTIONAL: 1,

  /**
   * Term's presence in a document is required, documents that do not contain
   * this term will not be returned.
   */
  REQUIRED: 2,

  /**
   * Term's presence in a document is prohibited, documents that do contain
   * this term will not be returned.
   */
  PROHIBITED: 3
}

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  if (!('presence' in clause)) {
    clause.presence = lunr.Query.presence.OPTIONAL
  }

  this.clauses.push(clause)

  return this
}

/**
 * A negated query is one in which every clause has a presence of
 * prohibited. These queries require some special processing to return
 * the expected results.
 *
 * @returns boolean
 */
lunr.Query.prototype.isNegated = function () {
  for (var i = 0; i < this.clauses.length; i++) {
    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
      return false
    }
  }

  return true
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
 * to a token or token-like string should be done before calling this method.
 *
 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
 * array, each term in the array will share the same options.
 *
 * @param {object|object[]} term - The term(s) to add to the query.
 * @param {object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
 * query.term(lunr.tokenizer("foo bar"))
 */
lunr.Query.prototype.term = function (term, options) {
  if (Array.isArray(term)) {
    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)
    return this
  }

  var clause = options || {}
  clause.term = term.toString()

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'
lunr.QueryLexer.PRESENCE = 'PRESENCE'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    // "+" indicates term presence is required
    // checking for length to ensure that only
    // leading "+" are considered
    if (char == "+" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    // "-" indicates term presence is prohibited
    // checking for length to ensure that only
    // leading "-" are considered
    if (char == "-" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseClause

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseClause = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.PRESENCE:
      return lunr.QueryParser.parsePresence
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parsePresence = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.str) {
    case "-":
      parser.currentClause.presence = lunr.Query.presence.PROHIBITED
      break
    case "+":
      parser.currentClause.presence = lunr.Query.presence.REQUIRED
      break
    default:
      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'"
      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term or field, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

/***/ "./static/javascripts/integrations/search/worker/main/index.ts":
/*!*********************************************************************!*\
  !*** ./static/javascripts/integrations/search/worker/main/index.ts ***!
  \*********************************************************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lunr */ "./node_modules/lunr/lunr-exposed.js");
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_ */ "./static/javascripts/integrations/search/_/index.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message */ "./static/javascripts/integrations/search/worker/message/index.ts");
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
 * Data
 * ------------------------------------------------------------------------- */
/**
 * Search
 */
var search;
/* ----------------------------------------------------------------------------
 * Helper functions
 * ------------------------------------------------------------------------- */
/**
 * Set up multi-language support through `lunr-languages`
 *
 * This function will automatically import the stemmers necessary to process
 * the languages which were given through the search index configuration.
 *
 * @param config - Search index configuration
 */
function setupLunrLanguages(config) {
    var e_1, _a;
    var base = "../lunr";
    /* Add scripts for languages */
    var scripts = [];
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.lang), _c = _b.next(); !_c.done; _c = _b.next()) {
            var lang = _c.value;
            if (lang === "ja")
                scripts.push(base + "/tinyseg.min.js");
            if (lang !== "en")
                scripts.push(base + "/min/lunr." + lang + ".min.js");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    /* Add multi-language support */
    if (config.lang.length > 1)
        scripts.push(base + "/min/lunr.multi.min.js");
    /* Load scripts synchronously */
    if (scripts.length)
        importScripts.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([base + "/min/lunr.stemmer.support.min.js"], scripts));
}
/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */
/**
 * Message handler
 *
 * @param message - Source message
 *
 * @return Target message
 */
function handler(message) {
    switch (message.type) {
        /* Search setup message */
        case _message__WEBPACK_IMPORTED_MODULE_3__["SearchMessageType"].SETUP:
            setupLunrLanguages(message.data.config);
            search = new ___WEBPACK_IMPORTED_MODULE_2__["Search"](message.data);
            return {
                type: _message__WEBPACK_IMPORTED_MODULE_3__["SearchMessageType"].READY
            };
        /* Search query message */
        case _message__WEBPACK_IMPORTED_MODULE_3__["SearchMessageType"].QUERY:
            return {
                type: _message__WEBPACK_IMPORTED_MODULE_3__["SearchMessageType"].RESULT,
                data: search ? search.query(message.data) : []
            };
        /* All other messages */
        default:
            throw new TypeError("Invalid message type");
    }
}
/* ----------------------------------------------------------------------------
 * Worker
 * ------------------------------------------------------------------------- */
addEventListener("message", function (ev) {
    postMessage(handler(ev.data));
});


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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzY2FwZS1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sdW5yL2x1bnItZXhwb3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHVuci9sdW5yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWMvamF2YXNjcmlwdHMvaW50ZWdyYXRpb25zL3NlYXJjaC9fL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvc2VhcmNoL2RvY3VtZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvc2VhcmNoL2hpZ2hsaWdodGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvc2VhcmNoL3dvcmtlci9tYWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy9qYXZhc2NyaXB0cy9pbnRlZ3JhdGlvbnMvc2VhcmNoL3dvcmtlci9tZXNzYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQSw4Q0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDaENELGlDQUFpQyxtQkFBTyxDQUFDLGdEQUFhO0FBQ3RELDBDQUEwQyxtQkFBTyxDQUFDLGtIQUFnRDtBQUNsRztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNULFNBQVM7QUFDVCxTQUFTO0FBQ1QsU0FBUztBQUNULGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLElBQUk7QUFDZixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWSxTQUFTO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU8sYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxXQUFXLDBCQUEwQjtBQUNyQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDLGFBQWE7QUFDYjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEJBQTBCO0FBQ3JDLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QixXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXLFdBQVc7QUFDdEIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsVUFBVTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiwwQkFBMEI7QUFDL0MsMkJBQTJCLDJCQUEyQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDLCtCQUErQixjQUFjLHNCQUFzQjtBQUNuRSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVksV0FBVztBQUN2QixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXLFdBQVc7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFVBQVU7QUFDN0I7O0FBRUEscUJBQXFCLFVBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaURBQWlEO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsYUFBYTtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLDRCQUE0QjtBQUN2QyxXQUFXLGNBQWM7QUFDekIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLGVBQWU7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBNkQ7QUFDckU7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsWUFBWSxxQkFBcUI7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsV0FBVztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGVBQWU7O0FBRTlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxlQUFlO0FBQzdCLGNBQWMsY0FBYztBQUM1QixjQUFjLGNBQWM7QUFDNUIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxlQUFlO0FBQzFCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGNBQWMsT0FBTztBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLHlCQUF5QjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0EsK0NBQStDLHVCQUF1QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQyxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUNBQXlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUMsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQTBDO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQ0FBcUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsdUJBQXVCO0FBQ3pGOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSxJQUEwQztBQUNsRDtBQUNBLE1BQU0sb0NBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQ3JCLEtBQUssTUFBTSxFQVVOO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDbDVHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLEtBQUs7QUFDakQsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNJLFNBQVMsb0JBQW9CLENBQ2xDLE9BQXNCO0lBRXRCLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO0FBQ2pELENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSSxTQUFTLG9CQUFvQixDQUNsQyxPQUFzQjtJQUV0QixPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQUMsS0FBSztBQUNqRCxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0ksU0FBUyxxQkFBcUIsQ0FDbkMsT0FBc0I7SUFFdEIsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLE1BQU07QUFDbEQsQ0FBQyIsImZpbGUiOiJzdGF0aWMvamF2YXNjcmlwdHMvd29ya2VyL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3RhdGljL2phdmFzY3JpcHRzL2ludGVncmF0aW9ucy9zZWFyY2gvd29ya2VyL21haW4vaW5kZXgudHNcIik7XG4iLCIvKiFcbiAqIGVzY2FwZS1odG1sXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDEzIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBBbmRyZWFzIEx1YmJlXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBUaWFuY2hlbmcgXCJUaW1vdGh5XCIgR3VcbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbWF0Y2hIdG1sUmVnRXhwID0gL1tcIicmPD5dLztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUh0bWw7XG5cbi8qKlxuICogRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyBpbiB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGh0bWwuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBlc2NhcGUgZm9yIGluc2VydGluZyBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xuICB2YXIgc3RyID0gJycgKyBzdHJpbmc7XG4gIHZhciBtYXRjaCA9IG1hdGNoSHRtbFJlZ0V4cC5leGVjKHN0cik7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgZXNjYXBlO1xuICB2YXIgaHRtbCA9ICcnO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEluZGV4ID0gMDtcblxuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OiAvLyBcIlxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyAmXG4gICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gJ1xuICAgICAgICBlc2NhcGUgPSAnJiMzOTsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjA6IC8vIDxcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjI6IC8vID5cbiAgICAgICAgZXNjYXBlID0gJyZndDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICBodG1sICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCk7XG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGh0bWwgKz0gZXNjYXBlO1xuICB9XG5cbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gaW5kZXhcbiAgICA/IGh0bWwgKyBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpXG4gICAgOiBodG1sO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICB9XG5cbiAgdmFyIGc7XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBnID0gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gLy8gVGhpcyB3b3JrcyBpZiB0aGUgc2VsZiByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cblxuICAgIGlmICh0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH0gLy8gVGhpcyB3b3JrcyBpZiB0aGUgZ2xvYmFsIHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblxuXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnO1xufSgpOyIsInZhciBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCItIS4vbHVuci5qc1wiKTtcbnZhciBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXyA9IHJlcXVpcmUoXCIuLi9leHBvc2UtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRHbG9iYWxUaGlzLmpzXCIpO1xudmFyIF9fX0VYUE9TRV9MT0FERVJfR0xPQkFMX1RISVNfX18gPSBfX19FWFBPU0VfTE9BREVSX0dFVF9HTE9CQUxfVEhJU19fXztcbmlmICh0eXBlb2YgX19fRVhQT1NFX0xPQURFUl9HTE9CQUxfVEhJU19fX1tcImx1bnJcIl0gPT09ICd1bmRlZmluZWQnKSBfX19FWFBPU0VfTE9BREVSX0dMT0JBTF9USElTX19fW1wibHVuclwiXSA9IF9fX0VYUE9TRV9MT0FERVJfSU1QT1JUX19fO1xuZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ1tleHBvc2VzLWxvYWRlcl0gVGhlIFwibHVuclwiIHZhbHVlIGV4aXN0cyBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBpdCBtYXkgbm90IGJlIHNhZmUgdG8gb3ZlcndyaXRlIGl0LCB1c2UgdGhlIFwib3ZlcnJpZGVcIiBvcHRpb24nKVxubW9kdWxlLmV4cG9ydHMgPSBfX19FWFBPU0VfTE9BREVSX0lNUE9SVF9fXztcbiIsIi8qKlxuICogbHVuciAtIGh0dHA6Ly9sdW5yanMuY29tIC0gQSBiaXQgbGlrZSBTb2xyLCBidXQgbXVjaCBzbWFsbGVyIGFuZCBub3QgYXMgYnJpZ2h0IC0gMi4zLjhcbiAqIENvcHlyaWdodCAoQykgMjAxOSBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbjsoZnVuY3Rpb24oKXtcblxuLyoqXG4gKiBBIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb25maWd1cmluZyBhbmQgY29uc3RydWN0aW5nXG4gKiBhIG5ldyBsdW5yIEluZGV4LlxuICpcbiAqIEEgbHVuci5CdWlsZGVyIGluc3RhbmNlIGlzIGNyZWF0ZWQgYW5kIHRoZSBwaXBlbGluZSBzZXR1cFxuICogd2l0aCBhIHRyaW1tZXIsIHN0b3Agd29yZCBmaWx0ZXIgYW5kIHN0ZW1tZXIuXG4gKlxuICogVGhpcyBidWlsZGVyIG9iamVjdCBpcyB5aWVsZGVkIHRvIHRoZSBjb25maWd1cmF0aW9uIGZ1bmN0aW9uXG4gKiB0aGF0IGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciwgYWxsb3dpbmcgdGhlIGxpc3Qgb2YgZmllbGRzXG4gKiBhbmQgb3RoZXIgYnVpbGRlciBwYXJhbWV0ZXJzIHRvIGJlIGN1c3RvbWlzZWQuXG4gKlxuICogQWxsIGRvY3VtZW50cyBfbXVzdF8gYmUgYWRkZWQgd2l0aGluIHRoZSBwYXNzZWQgY29uZmlnIGZ1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiB2YXIgaWR4ID0gbHVucihmdW5jdGlvbiAoKSB7XG4gKiAgIHRoaXMuZmllbGQoJ3RpdGxlJylcbiAqICAgdGhpcy5maWVsZCgnYm9keScpXG4gKiAgIHRoaXMucmVmKCdpZCcpXG4gKlxuICogICBkb2N1bWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XG4gKiAgICAgdGhpcy5hZGQoZG9jKVxuICogICB9LCB0aGlzKVxuICogfSlcbiAqXG4gKiBAc2VlIHtAbGluayBsdW5yLkJ1aWxkZXJ9XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICogQHNlZSB7QGxpbmsgbHVuci50cmltbWVyfVxuICogQHNlZSB7QGxpbmsgbHVuci5zdG9wV29yZEZpbHRlcn1cbiAqIEBzZWUge0BsaW5rIGx1bnIuc3RlbW1lcn1cbiAqIEBuYW1lc3BhY2Uge2Z1bmN0aW9ufSBsdW5yXG4gKi9cbnZhciBsdW5yID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICB2YXIgYnVpbGRlciA9IG5ldyBsdW5yLkJ1aWxkZXJcblxuICBidWlsZGVyLnBpcGVsaW5lLmFkZChcbiAgICBsdW5yLnRyaW1tZXIsXG4gICAgbHVuci5zdG9wV29yZEZpbHRlcixcbiAgICBsdW5yLnN0ZW1tZXJcbiAgKVxuXG4gIGJ1aWxkZXIuc2VhcmNoUGlwZWxpbmUuYWRkKFxuICAgIGx1bnIuc3RlbW1lclxuICApXG5cbiAgY29uZmlnLmNhbGwoYnVpbGRlciwgYnVpbGRlcilcbiAgcmV0dXJuIGJ1aWxkZXIuYnVpbGQoKVxufVxuXG5sdW5yLnZlcnNpb24gPSBcIjIuMy44XCJcbi8qIVxuICogbHVuci51dGlsc1xuICogQ29weXJpZ2h0IChDKSAyMDE5IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgY29udGFpbmluZyB1dGlscyBmb3IgdGhlIHJlc3Qgb2YgdGhlIGx1bnIgbGlicmFyeVxuICogQG5hbWVzcGFjZSBsdW5yLnV0aWxzXG4gKi9cbmx1bnIudXRpbHMgPSB7fVxuXG4vKipcbiAqIFByaW50IGEgd2FybmluZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHByaW50ZWQuXG4gKiBAbWVtYmVyT2YgbHVuci51dGlsc1xuICogQGZ1bmN0aW9uXG4gKi9cbmx1bnIudXRpbHMud2FybiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgaWYgKGdsb2JhbC5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xufSkodGhpcylcblxuLyoqXG4gKiBDb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy5cbiAqXG4gKiBJbiB0aGUgY2FzZSBvZiBgbnVsbGAgYW5kIGB1bmRlZmluZWRgIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiB0aGUgZW1wdHkgc3RyaW5nLCBpbiBhbGwgb3RoZXIgY2FzZXMgdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiBgdG9TdHJpbmdgIG9uIHRoZSBwYXNzZWQgb2JqZWN0IGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7QW55fSBvYmogVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHBhc3NlZCBvYmplY3QuXG4gKiBAbWVtYmVyT2YgbHVuci51dGlsc1xuICovXG5sdW5yLnV0aWxzLmFzU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09PSB2b2lkIDAgfHwgb2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqLnRvU3RyaW5nKClcbiAgfVxufVxuXG4vKipcbiAqIENsb25lcyBhbiBvYmplY3QuXG4gKlxuICogV2lsbCBjcmVhdGUgYSBjb3B5IG9mIGFuIGV4aXN0aW5nIG9iamVjdCBzdWNoIHRoYXQgYW55IG11dGF0aW9uc1xuICogb24gdGhlIGNvcHkgY2Fubm90IGFmZmVjdCB0aGUgb3JpZ2luYWwuXG4gKlxuICogT25seSBzaGFsbG93IG9iamVjdHMgYXJlIHN1cHBvcnRlZCwgcGFzc2luZyBhIG5lc3RlZCBvYmplY3QgdG8gdGhpc1xuICogZnVuY3Rpb24gd2lsbCBjYXVzZSBhIFR5cGVFcnJvci5cbiAqXG4gKiBPYmplY3RzIHdpdGggcHJpbWl0aXZlcywgYW5kIGFycmF5cyBvZiBwcmltaXRpdmVzIGFyZSBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybiB7T2JqZWN0fSBhIGNsb25lIG9mIHRoZSBwYXNzZWQgb2JqZWN0LlxuICogQHRocm93cyB7VHlwZUVycm9yfSB3aGVuIGEgbmVzdGVkIG9iamVjdCBpcyBwYXNzZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqL1xubHVuci51dGlscy5jbG9uZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBvYmpcbiAgfVxuXG4gIHZhciBjbG9uZSA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldLFxuICAgICAgICB2YWwgPSBvYmpba2V5XVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgY2xvbmVba2V5XSA9IHZhbC5zbGljZSgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNsb25lW2tleV0gPSB2YWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNsb25lIGlzIG5vdCBkZWVwIGFuZCBkb2VzIG5vdCBzdXBwb3J0IG5lc3RlZCBvYmplY3RzXCIpXG4gIH1cblxuICByZXR1cm4gY2xvbmVcbn1cbmx1bnIuRmllbGRSZWYgPSBmdW5jdGlvbiAoZG9jUmVmLCBmaWVsZE5hbWUsIHN0cmluZ1ZhbHVlKSB7XG4gIHRoaXMuZG9jUmVmID0gZG9jUmVmXG4gIHRoaXMuZmllbGROYW1lID0gZmllbGROYW1lXG4gIHRoaXMuX3N0cmluZ1ZhbHVlID0gc3RyaW5nVmFsdWVcbn1cblxubHVuci5GaWVsZFJlZi5qb2luZXIgPSBcIi9cIlxuXG5sdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICB2YXIgbiA9IHMuaW5kZXhPZihsdW5yLkZpZWxkUmVmLmpvaW5lcilcblxuICBpZiAobiA9PT0gLTEpIHtcbiAgICB0aHJvdyBcIm1hbGZvcm1lZCBmaWVsZCByZWYgc3RyaW5nXCJcbiAgfVxuXG4gIHZhciBmaWVsZFJlZiA9IHMuc2xpY2UoMCwgbiksXG4gICAgICBkb2NSZWYgPSBzLnNsaWNlKG4gKyAxKVxuXG4gIHJldHVybiBuZXcgbHVuci5GaWVsZFJlZiAoZG9jUmVmLCBmaWVsZFJlZiwgcylcbn1cblxubHVuci5GaWVsZFJlZi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9zdHJpbmdWYWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zdHJpbmdWYWx1ZSA9IHRoaXMuZmllbGROYW1lICsgbHVuci5GaWVsZFJlZi5qb2luZXIgKyB0aGlzLmRvY1JlZlxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX3N0cmluZ1ZhbHVlXG59XG4vKiFcbiAqIGx1bnIuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTkgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIGx1bnIgc2V0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5sdW5yLlNldCA9IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICB0aGlzLmVsZW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmIChlbGVtZW50cykge1xuICAgIHRoaXMubGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHNbZWxlbWVudHNbaV1dID0gdHJ1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgfVxufVxuXG4vKipcbiAqIEEgY29tcGxldGUgc2V0IHRoYXQgY29udGFpbnMgYWxsIGVsZW1lbnRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEByZWFkb25seVxuICogQHR5cGUge2x1bnIuU2V0fVxuICovXG5sdW5yLlNldC5jb21wbGV0ZSA9IHtcbiAgaW50ZXJzZWN0OiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICB1bmlvbjogZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyXG4gIH0sXG5cbiAgY29udGFpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogQW4gZW1wdHkgc2V0IHRoYXQgY29udGFpbnMgbm8gZWxlbWVudHMuXG4gKlxuICogQHN0YXRpY1xuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7bHVuci5TZXR9XG4gKi9cbmx1bnIuU2V0LmVtcHR5ID0ge1xuICBpbnRlcnNlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9LFxuXG4gIHVuaW9uOiBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXJcbiAgfSxcblxuICBjb250YWluczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgc2V0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgLSBPYmplY3Qgd2hvc2UgcHJlc2VuY2UgaW4gdGhpcyBzZXQgaXMgdG8gYmUgdGVzdGVkLlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiB0aGlzIHNldCBjb250YWlucyB0aGUgc3BlY2lmaWVkIG9iamVjdC5cbiAqL1xubHVuci5TZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICByZXR1cm4gISF0aGlzLmVsZW1lbnRzW29iamVjdF1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IHNldCBjb250YWluaW5nIG9ubHkgdGhlIGVsZW1lbnRzIHRoYXQgYXJlIHByZXNlbnQgaW4gYm90aFxuICogdGhpcyBzZXQgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICpcbiAqIEBwYXJhbSB7bHVuci5TZXR9IG90aGVyIC0gc2V0IHRvIGludGVyc2VjdCB3aXRoIHRoaXMgc2V0LlxuICogQHJldHVybnMge2x1bnIuU2V0fSBhIG5ldyBzZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoaXMgYW5kIHRoZSBzcGVjaWZpZWQgc2V0LlxuICovXG5cbmx1bnIuU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgdmFyIGEsIGIsIGVsZW1lbnRzLCBpbnRlcnNlY3Rpb24gPSBbXVxuXG4gIGlmIChvdGhlciA9PT0gbHVuci5TZXQuY29tcGxldGUpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5lbXB0eSkge1xuICAgIHJldHVybiBvdGhlclxuICB9XG5cbiAgaWYgKHRoaXMubGVuZ3RoIDwgb3RoZXIubGVuZ3RoKSB7XG4gICAgYSA9IHRoaXNcbiAgICBiID0gb3RoZXJcbiAgfSBlbHNlIHtcbiAgICBhID0gb3RoZXJcbiAgICBiID0gdGhpc1xuICB9XG5cbiAgZWxlbWVudHMgPSBPYmplY3Qua2V5cyhhLmVsZW1lbnRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldXG4gICAgaWYgKGVsZW1lbnQgaW4gYi5lbGVtZW50cykge1xuICAgICAgaW50ZXJzZWN0aW9uLnB1c2goZWxlbWVudClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IGx1bnIuU2V0IChpbnRlcnNlY3Rpb24pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBzZXQgY29tYmluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuU2V0fSBvdGhlciAtIHNldCB0byB1bmlvbiB3aXRoIHRoaXMgc2V0LlxuICogQHJldHVybiB7bHVuci5TZXR9IGEgbmV3IHNldCB0aGF0IGlzIHRoZSB1bmlvbiBvZiB0aGlzIGFuZCB0aGUgc3BlY2lmaWVkIHNldC5cbiAqL1xuXG5sdW5yLlNldC5wcm90b3R5cGUudW5pb24gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5jb21wbGV0ZSkge1xuICAgIHJldHVybiBsdW5yLlNldC5jb21wbGV0ZVxuICB9XG5cbiAgaWYgKG90aGVyID09PSBsdW5yLlNldC5lbXB0eSkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZXR1cm4gbmV3IGx1bnIuU2V0KE9iamVjdC5rZXlzKHRoaXMuZWxlbWVudHMpLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlci5lbGVtZW50cykpKVxufVxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgaW52ZXJzZSBkb2N1bWVudCBmcmVxdWVuY3kgZm9yXG4gKiBhIHBvc3RpbmcuIFRoaXMgaXMgc2hhcmVkIGJldHdlZW4gdGhlIGJ1aWxkZXIgYW5kIHRoZSBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcG9zdGluZyAtIFRoZSBwb3N0aW5nIGZvciBhIGdpdmVuIHRlcm1cbiAqIEBwYXJhbSB7bnVtYmVyfSBkb2N1bWVudENvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBkb2N1bWVudHMuXG4gKi9cbmx1bnIuaWRmID0gZnVuY3Rpb24gKHBvc3RpbmcsIGRvY3VtZW50Q291bnQpIHtcbiAgdmFyIGRvY3VtZW50c1dpdGhUZXJtID0gMFxuXG4gIGZvciAodmFyIGZpZWxkTmFtZSBpbiBwb3N0aW5nKSB7XG4gICAgaWYgKGZpZWxkTmFtZSA9PSAnX2luZGV4JykgY29udGludWUgLy8gSWdub3JlIHRoZSB0ZXJtIGluZGV4LCBpdHMgbm90IGEgZmllbGRcbiAgICBkb2N1bWVudHNXaXRoVGVybSArPSBPYmplY3Qua2V5cyhwb3N0aW5nW2ZpZWxkTmFtZV0pLmxlbmd0aFxuICB9XG5cbiAgdmFyIHggPSAoZG9jdW1lbnRDb3VudCAtIGRvY3VtZW50c1dpdGhUZXJtICsgMC41KSAvIChkb2N1bWVudHNXaXRoVGVybSArIDAuNSlcblxuICByZXR1cm4gTWF0aC5sb2coMSArIE1hdGguYWJzKHgpKVxufVxuXG4vKipcbiAqIEEgdG9rZW4gd3JhcHMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0b2tlblxuICogYXMgaXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlIHRleHQgcHJvY2Vzc2luZyBwaXBlbGluZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyPScnXSAtIFRoZSBzdHJpbmcgdG9rZW4gYmVpbmcgd3JhcHBlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGE9e31dIC0gTWV0YWRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdG9rZW4uXG4gKi9cbmx1bnIuVG9rZW4gPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB0aGlzLnN0ciA9IHN0ciB8fCBcIlwiXG4gIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCB7fVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRva2VuIHN0cmluZyB0aGF0IGlzIGJlaW5nIHdyYXBwZWQgYnkgdGhpcyBvYmplY3QuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnN0clxufVxuXG4vKipcbiAqIEEgdG9rZW4gdXBkYXRlIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB1cGRhdGluZyBvciBvcHRpb25hbGx5XG4gKiB3aGVuIGNsb25pbmcgYSB0b2tlbi5cbiAqXG4gKiBAY2FsbGJhY2sgbHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuLlxuICogQHBhcmFtIHtPYmplY3R9IG1ldGFkYXRhIC0gQWxsIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRva2VuLlxuICovXG5cbi8qKlxuICogQXBwbGllcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gdGhlIHdyYXBwZWQgc3RyaW5nIHRva2VuLlxuICpcbiAqIEBleGFtcGxlXG4gKiB0b2tlbi51cGRhdGUoZnVuY3Rpb24gKHN0ciwgbWV0YWRhdGEpIHtcbiAqICAgcmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpXG4gKiB9KVxuICpcbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn51cGRhdGVGdW5jdGlvbn0gZm4gLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIHRoZSB0b2tlbiBzdHJpbmcuXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlbn1cbiAqL1xubHVuci5Ub2tlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHRoaXMuc3RyID0gZm4odGhpcy5zdHIsIHRoaXMubWV0YWRhdGEpXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdG9rZW4uIE9wdGlvbmFsbHkgYSBmdW5jdGlvbiBjYW4gYmVcbiAqIGFwcGxpZWQgdG8gdGhlIGNsb25lZCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW5+dXBkYXRlRnVuY3Rpb259IFtmbl0gLSBBbiBvcHRpb25hbCBmdW5jdGlvbiB0byBhcHBseSB0byB0aGUgY2xvbmVkIHRva2VuLlxuICogQHJldHVybnMge2x1bnIuVG9rZW59XG4gKi9cbmx1bnIuVG9rZW4ucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGZuKSB7XG4gIGZuID0gZm4gfHwgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMgfVxuICByZXR1cm4gbmV3IGx1bnIuVG9rZW4gKGZuKHRoaXMuc3RyLCB0aGlzLm1ldGFkYXRhKSwgdGhpcy5tZXRhZGF0YSlcbn1cbi8qIVxuICogbHVuci50b2tlbml6ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOSBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIHNwbGl0dGluZyBhIHN0cmluZyBpbnRvIHRva2VucyByZWFkeSB0byBiZSBpbnNlcnRlZCBpbnRvXG4gKiB0aGUgc2VhcmNoIGluZGV4LiBVc2VzIGBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JgIHRvIHNwbGl0IHN0cmluZ3MsIGNoYW5nZVxuICogdGhlIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgdG8gY2hhbmdlIGhvdyBzdHJpbmdzIGFyZSBzcGxpdCBpbnRvIHRva2Vucy5cbiAqXG4gKiBUaGlzIHRva2VuaXplciB3aWxsIGNvbnZlcnQgaXRzIHBhcmFtZXRlciB0byBhIHN0cmluZyBieSBjYWxsaW5nIGB0b1N0cmluZ2AgYW5kXG4gKiB0aGVuIHdpbGwgc3BsaXQgdGhpcyBzdHJpbmcgb24gdGhlIGNoYXJhY3RlciBpbiBgbHVuci50b2tlbml6ZXIuc2VwYXJhdG9yYC5cbiAqIEFycmF5cyB3aWxsIGhhdmUgdGhlaXIgZWxlbWVudHMgY29udmVydGVkIHRvIHN0cmluZ3MgYW5kIHdyYXBwZWQgaW4gYSBsdW5yLlRva2VuLlxuICpcbiAqIE9wdGlvbmFsIG1ldGFkYXRhIGNhbiBiZSBwYXNzZWQgdG8gdGhlIHRva2VuaXplciwgdGhpcyBtZXRhZGF0YSB3aWxsIGJlIGNsb25lZCBhbmRcbiAqIGFkZGVkIGFzIG1ldGFkYXRhIHRvIGV2ZXJ5IHRva2VuIHRoYXQgaXMgY3JlYXRlZCBmcm9tIHRoZSBvYmplY3QgdG8gYmUgdG9rZW5pemVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IGludG8gdG9rZW5zXG4gKiBAcGFyYW0gez9vYmplY3R9IG1ldGFkYXRhIC0gT3B0aW9uYWwgbWV0YWRhdGEgdG8gYXNzb2NpYXRlIHdpdGggZXZlcnkgdG9rZW5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuW119XG4gKiBAc2VlIHtAbGluayBsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLnRva2VuaXplciA9IGZ1bmN0aW9uIChvYmosIG1ldGFkYXRhKSB7XG4gIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBuZXcgbHVuci5Ub2tlbihcbiAgICAgICAgbHVuci51dGlscy5hc1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICB2YXIgc3RyID0gb2JqLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGgsXG4gICAgICB0b2tlbnMgPSBbXVxuXG4gIGZvciAodmFyIHNsaWNlRW5kID0gMCwgc2xpY2VTdGFydCA9IDA7IHNsaWNlRW5kIDw9IGxlbjsgc2xpY2VFbmQrKykge1xuICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChzbGljZUVuZCksXG4gICAgICAgIHNsaWNlTGVuZ3RoID0gc2xpY2VFbmQgLSBzbGljZVN0YXJ0XG5cbiAgICBpZiAoKGNoYXIubWF0Y2gobHVuci50b2tlbml6ZXIuc2VwYXJhdG9yKSB8fCBzbGljZUVuZCA9PSBsZW4pKSB7XG5cbiAgICAgIGlmIChzbGljZUxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHRva2VuTWV0YWRhdGEgPSBsdW5yLnV0aWxzLmNsb25lKG1ldGFkYXRhKSB8fCB7fVxuICAgICAgICB0b2tlbk1ldGFkYXRhW1wicG9zaXRpb25cIl0gPSBbc2xpY2VTdGFydCwgc2xpY2VMZW5ndGhdXG4gICAgICAgIHRva2VuTWV0YWRhdGFbXCJpbmRleFwiXSA9IHRva2Vucy5sZW5ndGhcblxuICAgICAgICB0b2tlbnMucHVzaChcbiAgICAgICAgICBuZXcgbHVuci5Ub2tlbiAoXG4gICAgICAgICAgICBzdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpLFxuICAgICAgICAgICAgdG9rZW5NZXRhZGF0YVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzbGljZVN0YXJ0ID0gc2xpY2VFbmQgKyAxXG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogVGhlIHNlcGFyYXRvciB1c2VkIHRvIHNwbGl0IGEgc3RyaW5nIGludG8gdG9rZW5zLiBPdmVycmlkZSB0aGlzIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mXG4gKiBgbHVuci50b2tlbml6ZXJgIGJlaGF2aW91ciB3aGVuIHRva2VuaXppbmcgc3RyaW5ncy4gQnkgZGVmYXVsdCB0aGlzIHNwbGl0cyBvbiB3aGl0ZXNwYWNlIGFuZCBoeXBoZW5zLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzZWUgbHVuci50b2tlbml6ZXJcbiAqL1xubHVuci50b2tlbml6ZXIuc2VwYXJhdG9yID0gL1tcXHNcXC1dKy9cbi8qIVxuICogbHVuci5QaXBlbGluZVxuICogQ29weXJpZ2h0IChDKSAyMDE5IE9saXZlciBOaWdodGluZ2FsZVxuICovXG5cbi8qKlxuICogbHVuci5QaXBlbGluZXMgbWFpbnRhaW4gYW4gb3JkZXJlZCBsaXN0IG9mIGZ1bmN0aW9ucyB0byBiZSBhcHBsaWVkIHRvIGFsbFxuICogdG9rZW5zIGluIGRvY3VtZW50cyBlbnRlcmluZyB0aGUgc2VhcmNoIGluZGV4IGFuZCBxdWVyaWVzIGJlaW5nIHJhbiBhZ2FpbnN0XG4gKiB0aGUgaW5kZXguXG4gKlxuICogQW4gaW5zdGFuY2Ugb2YgbHVuci5JbmRleCBjcmVhdGVkIHdpdGggdGhlIGx1bnIgc2hvcnRjdXQgd2lsbCBjb250YWluIGFcbiAqIHBpcGVsaW5lIHdpdGggYSBzdG9wIHdvcmQgZmlsdGVyIGFuZCBhbiBFbmdsaXNoIGxhbmd1YWdlIHN0ZW1tZXIuIEV4dHJhXG4gKiBmdW5jdGlvbnMgY2FuIGJlIGFkZGVkIGJlZm9yZSBvciBhZnRlciBlaXRoZXIgb2YgdGhlc2UgZnVuY3Rpb25zIG9yIHRoZXNlXG4gKiBkZWZhdWx0IGZ1bmN0aW9ucyBjYW4gYmUgcmVtb3ZlZC5cbiAqXG4gKiBXaGVuIHJ1biB0aGUgcGlwZWxpbmUgd2lsbCBjYWxsIGVhY2ggZnVuY3Rpb24gaW4gdHVybiwgcGFzc2luZyBhIHRva2VuLCB0aGVcbiAqIGluZGV4IG9mIHRoYXQgdG9rZW4gaW4gdGhlIG9yaWdpbmFsIGxpc3Qgb2YgYWxsIHRva2VucyBhbmQgZmluYWxseSBhIGxpc3Qgb2ZcbiAqIGFsbCB0aGUgb3JpZ2luYWwgdG9rZW5zLlxuICpcbiAqIFRoZSBvdXRwdXQgb2YgZnVuY3Rpb25zIGluIHRoZSBwaXBlbGluZSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgbmV4dCBmdW5jdGlvblxuICogaW4gdGhlIHBpcGVsaW5lLiBUbyBleGNsdWRlIGEgdG9rZW4gZnJvbSBlbnRlcmluZyB0aGUgaW5kZXggdGhlIGZ1bmN0aW9uXG4gKiBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCwgdGhlIHJlc3Qgb2YgdGhlIHBpcGVsaW5lIHdpbGwgbm90IGJlIGNhbGxlZCB3aXRoXG4gKiB0aGlzIHRva2VuLlxuICpcbiAqIEZvciBzZXJpYWxpc2F0aW9uIG9mIHBpcGVsaW5lcyB0byB3b3JrLCBhbGwgZnVuY3Rpb25zIHVzZWQgaW4gYW4gaW5zdGFuY2Ugb2ZcbiAqIGEgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgd2l0aCBsdW5yLlBpcGVsaW5lLiBSZWdpc3RlcmVkIGZ1bmN0aW9ucyBjYW5cbiAqIHRoZW4gYmUgbG9hZGVkLiBJZiB0cnlpbmcgdG8gbG9hZCBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgdGhhdCB1c2VzIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgbm90IHJlZ2lzdGVyZWQgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogSWYgbm90IHBsYW5uaW5nIG9uIHNlcmlhbGlzaW5nIHRoZSBwaXBlbGluZSB0aGVuIHJlZ2lzdGVyaW5nIHBpcGVsaW5lIGZ1bmN0aW9uc1xuICogaXMgbm90IG5lY2Vzc2FyeS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5QaXBlbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyZWRGdW5jdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogQSBwaXBlbGluZSBmdW5jdGlvbiBtYXBzIGx1bnIuVG9rZW4gdG8gbHVuci5Ub2tlbi4gQSBsdW5yLlRva2VuIGNvbnRhaW5zIHRoZSB0b2tlblxuICogc3RyaW5nIGFzIHdlbGwgYXMgYWxsIGtub3duIG1ldGFkYXRhLiBBIHBpcGVsaW5lIGZ1bmN0aW9uIGNhbiBtdXRhdGUgdGhlIHRva2VuIHN0cmluZ1xuICogb3IgbXV0YXRlIChvciBhZGQpIG1ldGFkYXRhIGZvciBhIGdpdmVuIHRva2VuLlxuICpcbiAqIEEgcGlwZWxpbmUgZnVuY3Rpb24gY2FuIGluZGljYXRlIHRoYXQgdGhlIHBhc3NlZCB0b2tlbiBzaG91bGQgYmUgZGlzY2FyZGVkIGJ5IHJldHVybmluZ1xuICogbnVsbCwgdW5kZWZpbmVkIG9yIGFuIGVtcHR5IHN0cmluZy4gVGhpcyB0b2tlbiB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmVcbiAqIGZ1bmN0aW9ucyBhbmQgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGluZGV4LlxuICpcbiAqIE11bHRpcGxlIHRva2VucyBjYW4gYmUgcmV0dXJuZWQgYnkgcmV0dXJuaW5nIGFuIGFycmF5IG9mIHRva2Vucy4gRWFjaCB0b2tlbiB3aWxsIGJlIHBhc3NlZFxuICogdG8gYW55IGRvd25zdHJlYW0gcGlwZWxpbmUgZnVuY3Rpb25zIGFuZCBhbGwgd2lsbCByZXR1cm5lZCB0b2tlbnMgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQW55IG51bWJlciBvZiBwaXBlbGluZSBmdW5jdGlvbnMgbWF5IGJlIGNoYWluZWQgdG9nZXRoZXIgdXNpbmcgYSBsdW5yLlBpcGVsaW5lLlxuICpcbiAqIEBpbnRlcmZhY2UgbHVuci5QaXBlbGluZUZ1bmN0aW9uXG4gKiBAcGFyYW0ge2x1bnIuVG9rZW59IHRva2VuIC0gQSB0b2tlbiBmcm9tIHRoZSBkb2N1bWVudCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaSAtIFRoZSBpbmRleCBvZiB0aGlzIHRva2VuIGluIHRoZSBjb21wbGV0ZSBsaXN0IG9mIHRva2VucyBmb3IgdGhpcyBkb2N1bWVudC9maWVsZC5cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbltdfSB0b2tlbnMgLSBBbGwgdG9rZW5zIGZvciB0aGlzIGRvY3VtZW50L2ZpZWxkLlxuICogQHJldHVybnMgeyg/bHVuci5Ub2tlbnxsdW5yLlRva2VuW10pfVxuICovXG5cbi8qKlxuICogUmVnaXN0ZXIgYSBmdW5jdGlvbiB3aXRoIHRoZSBwaXBlbGluZS5cbiAqXG4gKiBGdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgcGlwZWxpbmUgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgaWYgdGhlIHBpcGVsaW5lXG4gKiBuZWVkcyB0byBiZSBzZXJpYWxpc2VkLCBvciBhIHNlcmlhbGlzZWQgcGlwZWxpbmUgbmVlZHMgdG8gYmUgbG9hZGVkLlxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgZnVuY3Rpb24gZG9lcyBub3QgYWRkIGl0IHRvIGEgcGlwZWxpbmUsIGZ1bmN0aW9ucyBtdXN0IHN0aWxsIGJlXG4gKiBhZGRlZCB0byBpbnN0YW5jZXMgb2YgdGhlIHBpcGVsaW5lIGZvciB0aGVtIHRvIGJlIHVzZWQgd2hlbiBydW5uaW5nIGEgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCAtIFRoZSBsYWJlbCB0byByZWdpc3RlciB0aGlzIGZ1bmN0aW9uIHdpdGhcbiAqL1xubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBsYWJlbCkge1xuICBpZiAobGFiZWwgaW4gdGhpcy5yZWdpc3RlcmVkRnVuY3Rpb25zKSB7XG4gICAgbHVuci51dGlscy53YXJuKCdPdmVyd3JpdGluZyBleGlzdGluZyByZWdpc3RlcmVkIGZ1bmN0aW9uOiAnICsgbGFiZWwpXG4gIH1cblxuICBmbi5sYWJlbCA9IGxhYmVsXG4gIGx1bnIuUGlwZWxpbmUucmVnaXN0ZXJlZEZ1bmN0aW9uc1tmbi5sYWJlbF0gPSBmblxufVxuXG4vKipcbiAqIFdhcm5zIGlmIHRoZSBmdW5jdGlvbiBpcyBub3QgcmVnaXN0ZXJlZCBhcyBhIFBpcGVsaW5lIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjaGVjayBmb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLlBpcGVsaW5lLndhcm5JZkZ1bmN0aW9uTm90UmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgaXNSZWdpc3RlcmVkID0gZm4ubGFiZWwgJiYgKGZuLmxhYmVsIGluIHRoaXMucmVnaXN0ZXJlZEZ1bmN0aW9ucylcblxuICBpZiAoIWlzUmVnaXN0ZXJlZCkge1xuICAgIGx1bnIudXRpbHMud2FybignRnVuY3Rpb24gaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBwaXBlbGluZS4gVGhpcyBtYXkgY2F1c2UgcHJvYmxlbXMgd2hlbiBzZXJpYWxpc2luZyB0aGUgaW5kZXguXFxuJywgZm4pXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHByZXZpb3VzbHkgc2VyaWFsaXNlZCBwaXBlbGluZS5cbiAqXG4gKiBBbGwgZnVuY3Rpb25zIHRvIGJlIGxvYWRlZCBtdXN0IGFscmVhZHkgYmUgcmVnaXN0ZXJlZCB3aXRoIGx1bnIuUGlwZWxpbmUuXG4gKiBJZiBhbnkgZnVuY3Rpb24gZnJvbSB0aGUgc2VyaWFsaXNlZCBkYXRhIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHRoZW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpc2VkIC0gVGhlIHNlcmlhbGlzZWQgcGlwZWxpbmUgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtsdW5yLlBpcGVsaW5lfVxuICovXG5sdW5yLlBpcGVsaW5lLmxvYWQgPSBmdW5jdGlvbiAoc2VyaWFsaXNlZCkge1xuICB2YXIgcGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuXG4gIHNlcmlhbGlzZWQuZm9yRWFjaChmdW5jdGlvbiAoZm5OYW1lKSB7XG4gICAgdmFyIGZuID0gbHVuci5QaXBlbGluZS5yZWdpc3RlcmVkRnVuY3Rpb25zW2ZuTmFtZV1cblxuICAgIGlmIChmbikge1xuICAgICAgcGlwZWxpbmUuYWRkKGZuKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBsb2FkIHVucmVnaXN0ZXJlZCBmdW5jdGlvbjogJyArIGZuTmFtZSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHBpcGVsaW5lXG59XG5cbi8qKlxuICogQWRkcyBuZXcgZnVuY3Rpb25zIHRvIHRoZSBlbmQgb2YgdGhlIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbltdfSBmdW5jdGlvbnMgLSBBbnkgbnVtYmVyIG9mIGZ1bmN0aW9ucyB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgZm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQoZm4pXG4gICAgdGhpcy5fc3RhY2sucHVzaChmbilcbiAgfSwgdGhpcylcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGFmdGVyIGEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGVcbiAqIHBpcGVsaW5lLlxuICpcbiAqIExvZ3MgYSB3YXJuaW5nIGlmIHRoZSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gZXhpc3RpbmdGbiAtIEEgZnVuY3Rpb24gdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0ge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn0gbmV3Rm4gLSBUaGUgbmV3IGZ1bmN0aW9uIHRvIGFkZCB0byB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLmFmdGVyID0gZnVuY3Rpb24gKGV4aXN0aW5nRm4sIG5ld0ZuKSB7XG4gIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKG5ld0ZuKVxuXG4gIHZhciBwb3MgPSB0aGlzLl9zdGFjay5pbmRleE9mKGV4aXN0aW5nRm4pXG4gIGlmIChwb3MgPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGV4aXN0aW5nRm4nKVxuICB9XG5cbiAgcG9zID0gcG9zICsgMVxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2luZ2xlIGZ1bmN0aW9uIGJlZm9yZSBhIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlXG4gKiBwaXBlbGluZS5cbiAqXG4gKiBMb2dzIGEgd2FybmluZyBpZiB0aGUgZnVuY3Rpb24gaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGV4aXN0aW5nRm4gLSBBIGZ1bmN0aW9uIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHBpcGVsaW5lLlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IG5ld0ZuIC0gVGhlIG5ldyBmdW5jdGlvbiB0byBhZGQgdG8gdGhlIHBpcGVsaW5lLlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoZXhpc3RpbmdGbiwgbmV3Rm4pIHtcbiAgbHVuci5QaXBlbGluZS53YXJuSWZGdW5jdGlvbk5vdFJlZ2lzdGVyZWQobmV3Rm4pXG5cbiAgdmFyIHBvcyA9IHRoaXMuX3N0YWNrLmluZGV4T2YoZXhpc3RpbmdGbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZXhpc3RpbmdGbicpXG4gIH1cblxuICB0aGlzLl9zdGFjay5zcGxpY2UocG9zLCAwLCBuZXdGbilcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGEgZnVuY3Rpb24gZnJvbSB0aGUgcGlwZWxpbmUuXG4gKlxuICogQHBhcmFtIHtsdW5yLlBpcGVsaW5lRnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgcGlwZWxpbmUuXG4gKi9cbmx1bnIuUGlwZWxpbmUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgcG9zID0gdGhpcy5fc3RhY2suaW5kZXhPZihmbilcbiAgaWYgKHBvcyA9PSAtMSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fc3RhY2suc3BsaWNlKHBvcywgMSlcbn1cblxuLyoqXG4gKiBSdW5zIHRoZSBjdXJyZW50IGxpc3Qgb2YgZnVuY3Rpb25zIHRoYXQgbWFrZSB1cCB0aGUgcGlwZWxpbmUgYWdhaW5zdCB0aGVcbiAqIHBhc3NlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zIFRoZSB0b2tlbnMgdG8gcnVuIHRocm91Z2ggdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge0FycmF5fVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIHZhciBzdGFja0xlbmd0aCA9IHRoaXMuX3N0YWNrLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2tMZW5ndGg7IGkrKykge1xuICAgIHZhciBmbiA9IHRoaXMuX3N0YWNrW2ldXG4gICAgdmFyIG1lbW8gPSBbXVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbih0b2tlbnNbal0sIGosIHRva2VucylcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQgPT09IHZvaWQgMCB8fCByZXN1bHQgPT09ICcnKSBjb250aW51ZVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgcmVzdWx0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgbWVtby5wdXNoKHJlc3VsdFtrXSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtby5wdXNoKHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2tlbnMgPSBtZW1vXG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBwYXNzaW5nIGEgc3RyaW5nIHRocm91Z2ggYSBwaXBlbGluZSBhbmQgZ2V0dGluZ1xuICogc3RyaW5ncyBvdXQuIFRoaXMgbWV0aG9kIHRha2VzIGNhcmUgb2Ygd3JhcHBpbmcgdGhlIHBhc3NlZCBzdHJpbmcgaW4gYVxuICogdG9rZW4gYW5kIG1hcHBpbmcgdGhlIHJlc3VsdGluZyB0b2tlbnMgYmFjayB0byBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHBhc3MgdGhyb3VnaCB0aGUgcGlwZWxpbmUuXG4gKiBAcGFyYW0gez9vYmplY3R9IG1ldGFkYXRhIC0gT3B0aW9uYWwgbWV0YWRhdGEgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHRva2VuXG4gKiBwYXNzZWQgdG8gdGhlIHBpcGVsaW5lLlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5ydW5TdHJpbmcgPSBmdW5jdGlvbiAoc3RyLCBtZXRhZGF0YSkge1xuICB2YXIgdG9rZW4gPSBuZXcgbHVuci5Ub2tlbiAoc3RyLCBtZXRhZGF0YSlcblxuICByZXR1cm4gdGhpcy5ydW4oW3Rva2VuXSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHQudG9TdHJpbmcoKVxuICB9KVxufVxuXG4vKipcbiAqIFJlc2V0cyB0aGUgcGlwZWxpbmUgYnkgcmVtb3ZpbmcgYW55IGV4aXN0aW5nIHByb2Nlc3NvcnMuXG4gKlxuICovXG5sdW5yLlBpcGVsaW5lLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc3RhY2sgPSBbXVxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGlwZWxpbmUgcmVhZHkgZm9yIHNlcmlhbGlzYXRpb24uXG4gKlxuICogTG9ncyBhIHdhcm5pbmcgaWYgdGhlIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICpcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xubHVuci5QaXBlbGluZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5fc3RhY2subWFwKGZ1bmN0aW9uIChmbikge1xuICAgIGx1bnIuUGlwZWxpbmUud2FybklmRnVuY3Rpb25Ob3RSZWdpc3RlcmVkKGZuKVxuXG4gICAgcmV0dXJuIGZuLmxhYmVsXG4gIH0pXG59XG4vKiFcbiAqIGx1bnIuVmVjdG9yXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTkgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHZlY3RvciBpcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgdmVjdG9yIHNwYWNlIG9mIGRvY3VtZW50cyBhbmQgcXVlcmllcy4gVGhlc2VcbiAqIHZlY3RvcnMgc3VwcG9ydCBvcGVyYXRpb25zIHRvIGRldGVybWluZSB0aGUgc2ltaWxhcml0eSBiZXR3ZWVuIHR3byBkb2N1bWVudHMgb3JcbiAqIGEgZG9jdW1lbnQgYW5kIGEgcXVlcnkuXG4gKlxuICogTm9ybWFsbHkgbm8gcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQgZm9yIGluaXRpYWxpemluZyBhIHZlY3RvciwgYnV0IGluIHRoZSBjYXNlIG9mXG4gKiBsb2FkaW5nIGEgcHJldmlvdXNseSBkdW1wZWQgdmVjdG9yIHRoZSByYXcgZWxlbWVudHMgY2FuIGJlIHByb3ZpZGVkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyB2ZWN0b3JzIGFyZSBpbXBsZW1lbnRlZCB3aXRoIGEgZmxhdCBhcnJheSwgd2hlcmUgYW4gZWxlbWVudHNcbiAqIGluZGV4IGlzIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IGl0cyB2YWx1ZS4gRS5nLiBbaW5kZXgsIHZhbHVlLCBpbmRleCwgdmFsdWVdLiBUaGlzXG4gKiBhbGxvd3MgdGhlIHVuZGVybHlpbmcgYXJyYXkgdG8gYmUgYXMgc3BhcnNlIGFzIHBvc3NpYmxlIGFuZCBzdGlsbCBvZmZlciBkZWNlbnRcbiAqIHBlcmZvcm1hbmNlIHdoZW4gYmVpbmcgdXNlZCBmb3IgdmVjdG9yIGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyW119IFtlbGVtZW50c10gLSBUaGUgZmxhdCBsaXN0IG9mIGVsZW1lbnQgaW5kZXggYW5kIGVsZW1lbnQgdmFsdWUgcGFpcnMuXG4gKi9cbmx1bnIuVmVjdG9yID0gZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gIHRoaXMuX21hZ25pdHVkZSA9IDBcbiAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzIHx8IFtdXG59XG5cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBwb3NpdGlvbiB3aXRoaW4gdGhlIHZlY3RvciB0byBpbnNlcnQgYSBnaXZlbiBpbmRleC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgaW50ZXJuYWxseSBieSBpbnNlcnQgYW5kIHVwc2VydC4gSWYgdGhlcmUgYXJlIGR1cGxpY2F0ZSBpbmRleGVzIHRoZW5cbiAqIHRoZSBwb3NpdGlvbiBpcyByZXR1cm5lZCBhcyBpZiB0aGUgdmFsdWUgZm9yIHRoYXQgaW5kZXggd2VyZSB0byBiZSB1cGRhdGVkLCBidXQgaXRcbiAqIGlzIHRoZSBjYWxsZXJzIHJlc3BvbnNpYmlsaXR5IHRvIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYSBkdXBsaWNhdGUgYXQgdGhhdCBpbmRleFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnNlcnRJZHggLSBUaGUgaW5kZXggYXQgd2hpY2ggdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGluc2VydGVkLlxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLnBvc2l0aW9uRm9ySW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgLy8gRm9yIGFuIGVtcHR5IHZlY3RvciB0aGUgdHVwbGUgY2FuIGJlIGluc2VydGVkIGF0IHRoZSBiZWdpbm5pbmdcbiAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgdmFyIHN0YXJ0ID0gMCxcbiAgICAgIGVuZCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoIC8gMixcbiAgICAgIHNsaWNlTGVuZ3RoID0gZW5kIC0gc3RhcnQsXG4gICAgICBwaXZvdFBvaW50ID0gTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpLFxuICAgICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG5cbiAgd2hpbGUgKHNsaWNlTGVuZ3RoID4gMSkge1xuICAgIGlmIChwaXZvdEluZGV4IDwgaW5kZXgpIHtcbiAgICAgIHN0YXJ0ID0gcGl2b3RQb2ludFxuICAgIH1cblxuICAgIGlmIChwaXZvdEluZGV4ID4gaW5kZXgpIHtcbiAgICAgIGVuZCA9IHBpdm90UG9pbnRcbiAgICB9XG5cbiAgICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBzbGljZUxlbmd0aCA9IGVuZCAtIHN0YXJ0XG4gICAgcGl2b3RQb2ludCA9IHN0YXJ0ICsgTWF0aC5mbG9vcihzbGljZUxlbmd0aCAvIDIpXG4gICAgcGl2b3RJbmRleCA9IHRoaXMuZWxlbWVudHNbcGl2b3RQb2ludCAqIDJdXG4gIH1cblxuICBpZiAocGl2b3RJbmRleCA9PSBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPiBpbmRleCkge1xuICAgIHJldHVybiBwaXZvdFBvaW50ICogMlxuICB9XG5cbiAgaWYgKHBpdm90SW5kZXggPCBpbmRleCkge1xuICAgIHJldHVybiAocGl2b3RQb2ludCArIDEpICogMlxuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0cyBhbiBlbGVtZW50IGF0IGFuIGluZGV4IHdpdGhpbiB0aGUgdmVjdG9yLlxuICpcbiAqIERvZXMgbm90IGFsbG93IGR1cGxpY2F0ZXMsIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBlbnRyeVxuICogZm9yIHRoaXMgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqL1xubHVuci5WZWN0b3IucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbnNlcnRJZHgsIHZhbCkge1xuICB0aGlzLnVwc2VydChpbnNlcnRJZHgsIHZhbCwgZnVuY3Rpb24gKCkge1xuICAgIHRocm93IFwiZHVwbGljYXRlIGluZGV4XCJcbiAgfSlcbn1cblxuLyoqXG4gKiBJbnNlcnRzIG9yIHVwZGF0ZXMgYW4gZXhpc3RpbmcgaW5kZXggd2l0aGluIHRoZSB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluc2VydElkeCAtIFRoZSBpbmRleCBhdCB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5zZXJ0ZWQuXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsIC0gVGhlIHZhbHVlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBmb3IgdXBkYXRlcywgdGhlIGV4aXN0aW5nIHZhbHVlIGFuZCB0aGVcbiAqIHJlcXVlc3RlZCB2YWx1ZSBhcmUgcGFzc2VkIGFzIGFyZ3VtZW50c1xuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUudXBzZXJ0ID0gZnVuY3Rpb24gKGluc2VydElkeCwgdmFsLCBmbikge1xuICB0aGlzLl9tYWduaXR1ZGUgPSAwXG4gIHZhciBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25Gb3JJbmRleChpbnNlcnRJZHgpXG5cbiAgaWYgKHRoaXMuZWxlbWVudHNbcG9zaXRpb25dID09IGluc2VydElkeCkge1xuICAgIHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSA9IGZuKHRoaXMuZWxlbWVudHNbcG9zaXRpb24gKyAxXSwgdmFsKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxlbWVudHMuc3BsaWNlKHBvc2l0aW9uLCAwLCBpbnNlcnRJZHgsIHZhbClcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIG1hZ25pdHVkZSBvZiB0aGlzIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fbWFnbml0dWRlKSByZXR1cm4gdGhpcy5fbWFnbml0dWRlXG5cbiAgdmFyIHN1bU9mU3F1YXJlcyA9IDAsXG4gICAgICBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBlbGVtZW50c0xlbmd0aDsgaSArPSAyKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuZWxlbWVudHNbaV1cbiAgICBzdW1PZlNxdWFyZXMgKz0gdmFsICogdmFsXG4gIH1cblxuICByZXR1cm4gdGhpcy5fbWFnbml0dWRlID0gTWF0aC5zcXJ0KHN1bU9mU3F1YXJlcylcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgdmVjdG9yIHRvIGNvbXB1dGUgdGhlIGRvdCBwcm9kdWN0IHdpdGguXG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5sdW5yLlZlY3Rvci5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHZhciBkb3RQcm9kdWN0ID0gMCxcbiAgICAgIGEgPSB0aGlzLmVsZW1lbnRzLCBiID0gb3RoZXJWZWN0b3IuZWxlbWVudHMsXG4gICAgICBhTGVuID0gYS5sZW5ndGgsIGJMZW4gPSBiLmxlbmd0aCxcbiAgICAgIGFWYWwgPSAwLCBiVmFsID0gMCxcbiAgICAgIGkgPSAwLCBqID0gMFxuXG4gIHdoaWxlIChpIDwgYUxlbiAmJiBqIDwgYkxlbikge1xuICAgIGFWYWwgPSBhW2ldLCBiVmFsID0gYltqXVxuICAgIGlmIChhVmFsIDwgYlZhbCkge1xuICAgICAgaSArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID4gYlZhbCkge1xuICAgICAgaiArPSAyXG4gICAgfSBlbHNlIGlmIChhVmFsID09IGJWYWwpIHtcbiAgICAgIGRvdFByb2R1Y3QgKz0gYVtpICsgMV0gKiBiW2ogKyAxXVxuICAgICAgaSArPSAyXG4gICAgICBqICs9IDJcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG90UHJvZHVjdFxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNpbWlsYXJpdHkgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlciB2ZWN0b3IuXG4gKlxuICogQHBhcmFtIHtsdW5yLlZlY3Rvcn0gb3RoZXJWZWN0b3IgLSBUaGUgb3RoZXIgdmVjdG9yIHRvIGNhbGN1bGF0ZSB0aGVcbiAqIHNpbWlsYXJpdHkgd2l0aC5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS5zaW1pbGFyaXR5ID0gZnVuY3Rpb24gKG90aGVyVmVjdG9yKSB7XG4gIHJldHVybiB0aGlzLmRvdChvdGhlclZlY3RvcikgLyB0aGlzLm1hZ25pdHVkZSgpIHx8IDBcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdmVjdG9yIHRvIGFuIGFycmF5IG9mIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3V0cHV0ID0gbmV3IEFycmF5ICh0aGlzLmVsZW1lbnRzLmxlbmd0aCAvIDIpXG5cbiAgZm9yICh2YXIgaSA9IDEsIGogPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMiwgaisrKSB7XG4gICAgb3V0cHV0W2pdID0gdGhpcy5lbGVtZW50c1tpXVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEEgSlNPTiBzZXJpYWxpemFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7TnVtYmVyW119XG4gKi9cbmx1bnIuVmVjdG9yLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVsZW1lbnRzXG59XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyohXG4gKiBsdW5yLnN0ZW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOSBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbSAtIGh0dHA6Ly90YXJ0YXJ1cy5vcmcvfm1hcnRpbi9Qb3J0ZXJTdGVtbWVyL2pzLnR4dFxuICovXG5cbi8qKlxuICogbHVuci5zdGVtbWVyIGlzIGFuIGVuZ2xpc2ggbGFuZ3VhZ2Ugc3RlbW1lciwgdGhpcyBpcyBhIEphdmFTY3JpcHRcbiAqIGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb3J0ZXJTdGVtbWVyIHRha2VuIGZyb20gaHR0cDovL3RhcnRhcnVzLm9yZy9+bWFydGluXG4gKlxuICogQHN0YXRpY1xuICogQGltcGxlbWVudHMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBwYXJhbSB7bHVuci5Ub2tlbn0gdG9rZW4gLSBUaGUgc3RyaW5nIHRvIHN0ZW1cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqIEBmdW5jdGlvblxuICovXG5sdW5yLnN0ZW1tZXIgPSAoZnVuY3Rpb24oKXtcbiAgdmFyIHN0ZXAybGlzdCA9IHtcbiAgICAgIFwiYXRpb25hbFwiIDogXCJhdGVcIixcbiAgICAgIFwidGlvbmFsXCIgOiBcInRpb25cIixcbiAgICAgIFwiZW5jaVwiIDogXCJlbmNlXCIsXG4gICAgICBcImFuY2lcIiA6IFwiYW5jZVwiLFxuICAgICAgXCJpemVyXCIgOiBcIml6ZVwiLFxuICAgICAgXCJibGlcIiA6IFwiYmxlXCIsXG4gICAgICBcImFsbGlcIiA6IFwiYWxcIixcbiAgICAgIFwiZW50bGlcIiA6IFwiZW50XCIsXG4gICAgICBcImVsaVwiIDogXCJlXCIsXG4gICAgICBcIm91c2xpXCIgOiBcIm91c1wiLFxuICAgICAgXCJpemF0aW9uXCIgOiBcIml6ZVwiLFxuICAgICAgXCJhdGlvblwiIDogXCJhdGVcIixcbiAgICAgIFwiYXRvclwiIDogXCJhdGVcIixcbiAgICAgIFwiYWxpc21cIiA6IFwiYWxcIixcbiAgICAgIFwiaXZlbmVzc1wiIDogXCJpdmVcIixcbiAgICAgIFwiZnVsbmVzc1wiIDogXCJmdWxcIixcbiAgICAgIFwib3VzbmVzc1wiIDogXCJvdXNcIixcbiAgICAgIFwiYWxpdGlcIiA6IFwiYWxcIixcbiAgICAgIFwiaXZpdGlcIiA6IFwiaXZlXCIsXG4gICAgICBcImJpbGl0aVwiIDogXCJibGVcIixcbiAgICAgIFwibG9naVwiIDogXCJsb2dcIlxuICAgIH0sXG5cbiAgICBzdGVwM2xpc3QgPSB7XG4gICAgICBcImljYXRlXCIgOiBcImljXCIsXG4gICAgICBcImF0aXZlXCIgOiBcIlwiLFxuICAgICAgXCJhbGl6ZVwiIDogXCJhbFwiLFxuICAgICAgXCJpY2l0aVwiIDogXCJpY1wiLFxuICAgICAgXCJpY2FsXCIgOiBcImljXCIsXG4gICAgICBcImZ1bFwiIDogXCJcIixcbiAgICAgIFwibmVzc1wiIDogXCJcIlxuICAgIH0sXG5cbiAgICBjID0gXCJbXmFlaW91XVwiLCAgICAgICAgICAvLyBjb25zb25hbnRcbiAgICB2ID0gXCJbYWVpb3V5XVwiLCAgICAgICAgICAvLyB2b3dlbFxuICAgIEMgPSBjICsgXCJbXmFlaW91eV0qXCIsICAgIC8vIGNvbnNvbmFudCBzZXF1ZW5jZVxuICAgIFYgPSB2ICsgXCJbYWVpb3VdKlwiLCAgICAgIC8vIHZvd2VsIHNlcXVlbmNlXG5cbiAgICBtZ3IwID0gXCJeKFwiICsgQyArIFwiKT9cIiArIFYgKyBDLCAgICAgICAgICAgICAgIC8vIFtDXVZDLi4uIGlzIG0+MFxuICAgIG1lcTEgPSBcIl4oXCIgKyBDICsgXCIpP1wiICsgViArIEMgKyBcIihcIiArIFYgKyBcIik/JFwiLCAgLy8gW0NdVkNbVl0gaXMgbT0xXG4gICAgbWdyMSA9IFwiXihcIiArIEMgKyBcIik/XCIgKyBWICsgQyArIFYgKyBDLCAgICAgICAvLyBbQ11WQ1ZDLi4uIGlzIG0+MVxuICAgIHNfdiA9IFwiXihcIiArIEMgKyBcIik/XCIgKyB2OyAgICAgICAgICAgICAgICAgICAvLyB2b3dlbCBpbiBzdGVtXG5cbiAgdmFyIHJlX21ncjAgPSBuZXcgUmVnRXhwKG1ncjApO1xuICB2YXIgcmVfbWdyMSA9IG5ldyBSZWdFeHAobWdyMSk7XG4gIHZhciByZV9tZXExID0gbmV3IFJlZ0V4cChtZXExKTtcbiAgdmFyIHJlX3NfdiA9IG5ldyBSZWdFeHAoc192KTtcblxuICB2YXIgcmVfMWEgPSAvXiguKz8pKHNzfGkpZXMkLztcbiAgdmFyIHJlMl8xYSA9IC9eKC4rPykoW15zXSlzJC87XG4gIHZhciByZV8xYiA9IC9eKC4rPyllZWQkLztcbiAgdmFyIHJlMl8xYiA9IC9eKC4rPykoZWR8aW5nKSQvO1xuICB2YXIgcmVfMWJfMiA9IC8uJC87XG4gIHZhciByZTJfMWJfMiA9IC8oYXR8Ymx8aXopJC87XG4gIHZhciByZTNfMWJfMiA9IG5ldyBSZWdFeHAoXCIoW15hZWlvdXlsc3pdKVxcXFwxJFwiKTtcbiAgdmFyIHJlNF8xYl8yID0gbmV3IFJlZ0V4cChcIl5cIiArIEMgKyB2ICsgXCJbXmFlaW91d3h5XSRcIik7XG5cbiAgdmFyIHJlXzFjID0gL14oLis/W15hZWlvdV0peSQvO1xuICB2YXIgcmVfMiA9IC9eKC4rPykoYXRpb25hbHx0aW9uYWx8ZW5jaXxhbmNpfGl6ZXJ8YmxpfGFsbGl8ZW50bGl8ZWxpfG91c2xpfGl6YXRpb258YXRpb258YXRvcnxhbGlzbXxpdmVuZXNzfGZ1bG5lc3N8b3VzbmVzc3xhbGl0aXxpdml0aXxiaWxpdGl8bG9naSkkLztcblxuICB2YXIgcmVfMyA9IC9eKC4rPykoaWNhdGV8YXRpdmV8YWxpemV8aWNpdGl8aWNhbHxmdWx8bmVzcykkLztcblxuICB2YXIgcmVfNCA9IC9eKC4rPykoYWx8YW5jZXxlbmNlfGVyfGljfGFibGV8aWJsZXxhbnR8ZW1lbnR8bWVudHxlbnR8b3V8aXNtfGF0ZXxpdGl8b3VzfGl2ZXxpemUpJC87XG4gIHZhciByZTJfNCA9IC9eKC4rPykoc3x0KShpb24pJC87XG5cbiAgdmFyIHJlXzUgPSAvXiguKz8pZSQvO1xuICB2YXIgcmVfNV8xID0gL2xsJC87XG4gIHZhciByZTNfNSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBDICsgdiArIFwiW15hZWlvdXd4eV0kXCIpO1xuXG4gIHZhciBwb3J0ZXJTdGVtbWVyID0gZnVuY3Rpb24gcG9ydGVyU3RlbW1lcih3KSB7XG4gICAgdmFyIHN0ZW0sXG4gICAgICBzdWZmaXgsXG4gICAgICBmaXJzdGNoLFxuICAgICAgcmUsXG4gICAgICByZTIsXG4gICAgICByZTMsXG4gICAgICByZTQ7XG5cbiAgICBpZiAody5sZW5ndGggPCAzKSB7IHJldHVybiB3OyB9XG5cbiAgICBmaXJzdGNoID0gdy5zdWJzdHIoMCwxKTtcbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9VcHBlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIC8vIFN0ZXAgMWFcbiAgICByZSA9IHJlXzFhXG4gICAgcmUyID0gcmUyXzFhO1xuXG4gICAgaWYgKHJlLnRlc3QodykpIHsgdyA9IHcucmVwbGFjZShyZSxcIiQxJDJcIik7IH1cbiAgICBlbHNlIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdy5yZXBsYWNlKHJlMixcIiQxJDJcIik7IH1cblxuICAgIC8vIFN0ZXAgMWJcbiAgICByZSA9IHJlXzFiO1xuICAgIHJlMiA9IHJlMl8xYjtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KGZwWzFdKSkge1xuICAgICAgICByZSA9IHJlXzFiXzI7XG4gICAgICAgIHcgPSB3LnJlcGxhY2UocmUsXCJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZTIudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUyLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICByZTIgPSByZV9zX3Y7XG4gICAgICBpZiAocmUyLnRlc3Qoc3RlbSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICAgIHJlMiA9IHJlMl8xYl8yO1xuICAgICAgICByZTMgPSByZTNfMWJfMjtcbiAgICAgICAgcmU0ID0gcmU0XzFiXzI7XG4gICAgICAgIGlmIChyZTIudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICAgIGVsc2UgaWYgKHJlMy50ZXN0KHcpKSB7IHJlID0gcmVfMWJfMjsgdyA9IHcucmVwbGFjZShyZSxcIlwiKTsgfVxuICAgICAgICBlbHNlIGlmIChyZTQudGVzdCh3KSkgeyB3ID0gdyArIFwiZVwiOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAxYyAtIHJlcGxhY2Ugc3VmZml4IHkgb3IgWSBieSBpIGlmIHByZWNlZGVkIGJ5IGEgbm9uLXZvd2VsIHdoaWNoIGlzIG5vdCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSB3b3JkIChzbyBjcnkgLT4gY3JpLCBieSAtPiBieSwgc2F5IC0+IHNheSlcbiAgICByZSA9IHJlXzFjO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgdyA9IHN0ZW0gKyBcImlcIjtcbiAgICB9XG5cbiAgICAvLyBTdGVwIDJcbiAgICByZSA9IHJlXzI7XG4gICAgaWYgKHJlLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlLmV4ZWModyk7XG4gICAgICBzdGVtID0gZnBbMV07XG4gICAgICBzdWZmaXggPSBmcFsyXTtcbiAgICAgIHJlID0gcmVfbWdyMDtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtICsgc3RlcDJsaXN0W3N1ZmZpeF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RlcCAzXG4gICAgcmUgPSByZV8zO1xuICAgIGlmIChyZS50ZXN0KHcpKSB7XG4gICAgICB2YXIgZnAgPSByZS5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdO1xuICAgICAgc3VmZml4ID0gZnBbMl07XG4gICAgICByZSA9IHJlX21ncjA7XG4gICAgICBpZiAocmUudGVzdChzdGVtKSkge1xuICAgICAgICB3ID0gc3RlbSArIHN0ZXAzbGlzdFtzdWZmaXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNFxuICAgIHJlID0gcmVfNDtcbiAgICByZTIgPSByZTJfNDtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmUyLnRlc3QodykpIHtcbiAgICAgIHZhciBmcCA9IHJlMi5leGVjKHcpO1xuICAgICAgc3RlbSA9IGZwWzFdICsgZnBbMl07XG4gICAgICByZTIgPSByZV9tZ3IxO1xuICAgICAgaWYgKHJlMi50ZXN0KHN0ZW0pKSB7XG4gICAgICAgIHcgPSBzdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0ZXAgNVxuICAgIHJlID0gcmVfNTtcbiAgICBpZiAocmUudGVzdCh3KSkge1xuICAgICAgdmFyIGZwID0gcmUuZXhlYyh3KTtcbiAgICAgIHN0ZW0gPSBmcFsxXTtcbiAgICAgIHJlID0gcmVfbWdyMTtcbiAgICAgIHJlMiA9IHJlX21lcTE7XG4gICAgICByZTMgPSByZTNfNTtcbiAgICAgIGlmIChyZS50ZXN0KHN0ZW0pIHx8IChyZTIudGVzdChzdGVtKSAmJiAhKHJlMy50ZXN0KHN0ZW0pKSkpIHtcbiAgICAgICAgdyA9IHN0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmUgPSByZV81XzE7XG4gICAgcmUyID0gcmVfbWdyMTtcbiAgICBpZiAocmUudGVzdCh3KSAmJiByZTIudGVzdCh3KSkge1xuICAgICAgcmUgPSByZV8xYl8yO1xuICAgICAgdyA9IHcucmVwbGFjZShyZSxcIlwiKTtcbiAgICB9XG5cbiAgICAvLyBhbmQgdHVybiBpbml0aWFsIFkgYmFjayB0byB5XG5cbiAgICBpZiAoZmlyc3RjaCA9PSBcInlcIikge1xuICAgICAgdyA9IGZpcnN0Y2gudG9Mb3dlckNhc2UoKSArIHcuc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJldHVybiB3O1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4udXBkYXRlKHBvcnRlclN0ZW1tZXIpO1xuICB9XG59KSgpO1xuXG5sdW5yLlBpcGVsaW5lLnJlZ2lzdGVyRnVuY3Rpb24obHVuci5zdGVtbWVyLCAnc3RlbW1lcicpXG4vKiFcbiAqIGx1bnIuc3RvcFdvcmRGaWx0ZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOSBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciBidWlsZHMgYSBzdG9wV29yZEZpbHRlciBmdW5jdGlvbiBmcm9tIHRoZSBwcm92aWRlZFxuICogbGlzdCBvZiBzdG9wIHdvcmRzLlxuICpcbiAqIFRoZSBidWlsdCBpbiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGJ1aWx0IHVzaW5nIHRoaXMgZ2VuZXJhdG9yIGFuZCBjYW4gYmUgdXNlZFxuICogdG8gZ2VuZXJhdGUgY3VzdG9tIHN0b3BXb3JkRmlsdGVycyBmb3IgYXBwbGljYXRpb25zIG9yIG5vbiBFbmdsaXNoIGxhbmd1YWdlcy5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IHRva2VuIFRoZSB0b2tlbiB0byBwYXNzIHRocm91Z2ggdGhlIGZpbHRlclxuICogQHJldHVybnMge2x1bnIuUGlwZWxpbmVGdW5jdGlvbn1cbiAqIEBzZWUgbHVuci5QaXBlbGluZVxuICogQHNlZSBsdW5yLnN0b3BXb3JkRmlsdGVyXG4gKi9cbmx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlciA9IGZ1bmN0aW9uIChzdG9wV29yZHMpIHtcbiAgdmFyIHdvcmRzID0gc3RvcFdvcmRzLnJlZHVjZShmdW5jdGlvbiAobWVtbywgc3RvcFdvcmQpIHtcbiAgICBtZW1vW3N0b3BXb3JkXSA9IHN0b3BXb3JkXG4gICAgcmV0dXJuIG1lbW9cbiAgfSwge30pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICh0b2tlbiAmJiB3b3Jkc1t0b2tlbi50b1N0cmluZygpXSAhPT0gdG9rZW4udG9TdHJpbmcoKSkgcmV0dXJuIHRva2VuXG4gIH1cbn1cblxuLyoqXG4gKiBsdW5yLnN0b3BXb3JkRmlsdGVyIGlzIGFuIEVuZ2xpc2ggbGFuZ3VhZ2Ugc3RvcCB3b3JkIGxpc3QgZmlsdGVyLCBhbnkgd29yZHNcbiAqIGNvbnRhaW5lZCBpbiB0aGUgbGlzdCB3aWxsIG5vdCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgZmlsdGVyLlxuICpcbiAqIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBpbiB0aGUgUGlwZWxpbmUuIElmIHRoZSB0b2tlbiBkb2VzIG5vdCBwYXNzIHRoZVxuICogZmlsdGVyIHRoZW4gdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtcyB7bHVuci5Ub2tlbn0gdG9rZW4gLSBBIHRva2VuIHRvIGNoZWNrIGZvciBiZWluZyBhIHN0b3Agd29yZC5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSB7QGxpbmsgbHVuci5QaXBlbGluZX1cbiAqL1xubHVuci5zdG9wV29yZEZpbHRlciA9IGx1bnIuZ2VuZXJhdGVTdG9wV29yZEZpbHRlcihbXG4gICdhJyxcbiAgJ2FibGUnLFxuICAnYWJvdXQnLFxuICAnYWNyb3NzJyxcbiAgJ2FmdGVyJyxcbiAgJ2FsbCcsXG4gICdhbG1vc3QnLFxuICAnYWxzbycsXG4gICdhbScsXG4gICdhbW9uZycsXG4gICdhbicsXG4gICdhbmQnLFxuICAnYW55JyxcbiAgJ2FyZScsXG4gICdhcycsXG4gICdhdCcsXG4gICdiZScsXG4gICdiZWNhdXNlJyxcbiAgJ2JlZW4nLFxuICAnYnV0JyxcbiAgJ2J5JyxcbiAgJ2NhbicsXG4gICdjYW5ub3QnLFxuICAnY291bGQnLFxuICAnZGVhcicsXG4gICdkaWQnLFxuICAnZG8nLFxuICAnZG9lcycsXG4gICdlaXRoZXInLFxuICAnZWxzZScsXG4gICdldmVyJyxcbiAgJ2V2ZXJ5JyxcbiAgJ2ZvcicsXG4gICdmcm9tJyxcbiAgJ2dldCcsXG4gICdnb3QnLFxuICAnaGFkJyxcbiAgJ2hhcycsXG4gICdoYXZlJyxcbiAgJ2hlJyxcbiAgJ2hlcicsXG4gICdoZXJzJyxcbiAgJ2hpbScsXG4gICdoaXMnLFxuICAnaG93JyxcbiAgJ2hvd2V2ZXInLFxuICAnaScsXG4gICdpZicsXG4gICdpbicsXG4gICdpbnRvJyxcbiAgJ2lzJyxcbiAgJ2l0JyxcbiAgJ2l0cycsXG4gICdqdXN0JyxcbiAgJ2xlYXN0JyxcbiAgJ2xldCcsXG4gICdsaWtlJyxcbiAgJ2xpa2VseScsXG4gICdtYXknLFxuICAnbWUnLFxuICAnbWlnaHQnLFxuICAnbW9zdCcsXG4gICdtdXN0JyxcbiAgJ215JyxcbiAgJ25laXRoZXInLFxuICAnbm8nLFxuICAnbm9yJyxcbiAgJ25vdCcsXG4gICdvZicsXG4gICdvZmYnLFxuICAnb2Z0ZW4nLFxuICAnb24nLFxuICAnb25seScsXG4gICdvcicsXG4gICdvdGhlcicsXG4gICdvdXInLFxuICAnb3duJyxcbiAgJ3JhdGhlcicsXG4gICdzYWlkJyxcbiAgJ3NheScsXG4gICdzYXlzJyxcbiAgJ3NoZScsXG4gICdzaG91bGQnLFxuICAnc2luY2UnLFxuICAnc28nLFxuICAnc29tZScsXG4gICd0aGFuJyxcbiAgJ3RoYXQnLFxuICAndGhlJyxcbiAgJ3RoZWlyJyxcbiAgJ3RoZW0nLFxuICAndGhlbicsXG4gICd0aGVyZScsXG4gICd0aGVzZScsXG4gICd0aGV5JyxcbiAgJ3RoaXMnLFxuICAndGlzJyxcbiAgJ3RvJyxcbiAgJ3RvbycsXG4gICd0d2FzJyxcbiAgJ3VzJyxcbiAgJ3dhbnRzJyxcbiAgJ3dhcycsXG4gICd3ZScsXG4gICd3ZXJlJyxcbiAgJ3doYXQnLFxuICAnd2hlbicsXG4gICd3aGVyZScsXG4gICd3aGljaCcsXG4gICd3aGlsZScsXG4gICd3aG8nLFxuICAnd2hvbScsXG4gICd3aHknLFxuICAnd2lsbCcsXG4gICd3aXRoJyxcbiAgJ3dvdWxkJyxcbiAgJ3lldCcsXG4gICd5b3UnLFxuICAneW91cidcbl0pXG5cbmx1bnIuUGlwZWxpbmUucmVnaXN0ZXJGdW5jdGlvbihsdW5yLnN0b3BXb3JkRmlsdGVyLCAnc3RvcFdvcmRGaWx0ZXInKVxuLyohXG4gKiBsdW5yLnRyaW1tZXJcbiAqIENvcHlyaWdodCAoQykgMjAxOSBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIGx1bnIudHJpbW1lciBpcyBhIHBpcGVsaW5lIGZ1bmN0aW9uIGZvciB0cmltbWluZyBub24gd29yZFxuICogY2hhcmFjdGVycyBmcm9tIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0b2tlbnMgYmVmb3JlIHRoZXlcbiAqIGVudGVyIHRoZSBpbmRleC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIG1heSBub3Qgd29yayBjb3JyZWN0bHkgZm9yIG5vbiBsYXRpblxuICogY2hhcmFjdGVycyBhbmQgc2hvdWxkIGVpdGhlciBiZSByZW1vdmVkIG9yIGFkYXB0ZWQgZm9yIHVzZVxuICogd2l0aCBsYW5ndWFnZXMgd2l0aCBub24tbGF0aW4gY2hhcmFjdGVycy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAaW1wbGVtZW50cyB7bHVuci5QaXBlbGluZUZ1bmN0aW9ufVxuICogQHBhcmFtIHtsdW5yLlRva2VufSB0b2tlbiBUaGUgdG9rZW4gdG8gcGFzcyB0aHJvdWdoIHRoZSBmaWx0ZXJcbiAqIEByZXR1cm5zIHtsdW5yLlRva2VufVxuICogQHNlZSBsdW5yLlBpcGVsaW5lXG4gKi9cbmx1bnIudHJpbW1lciA9IGZ1bmN0aW9uICh0b2tlbikge1xuICByZXR1cm4gdG9rZW4udXBkYXRlKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxcVysvLCAnJykucmVwbGFjZSgvXFxXKyQvLCAnJylcbiAgfSlcbn1cblxubHVuci5QaXBlbGluZS5yZWdpc3RlckZ1bmN0aW9uKGx1bnIudHJpbW1lciwgJ3RyaW1tZXInKVxuLyohXG4gKiBsdW5yLlRva2VuU2V0XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTkgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBBIHRva2VuIHNldCBpcyB1c2VkIHRvIHN0b3JlIHRoZSB1bmlxdWUgbGlzdCBvZiBhbGwgdG9rZW5zXG4gKiB3aXRoaW4gYW4gaW5kZXguIFRva2VuIHNldHMgYXJlIGFsc28gdXNlZCB0byByZXByZXNlbnQgYW5cbiAqIGluY29taW5nIHF1ZXJ5IHRvIHRoZSBpbmRleCwgdGhpcyBxdWVyeSB0b2tlbiBzZXQgYW5kIGluZGV4XG4gKiB0b2tlbiBzZXQgYXJlIHRoZW4gaW50ZXJzZWN0ZWQgdG8gZmluZCB3aGljaCB0b2tlbnMgdG8gbG9va1xuICogdXAgaW4gdGhlIGludmVydGVkIGluZGV4LlxuICpcbiAqIEEgdG9rZW4gc2V0IGNhbiBob2xkIG11bHRpcGxlIHRva2VucywgYXMgaW4gdGhlIGNhc2Ugb2YgdGhlXG4gKiBpbmRleCB0b2tlbiBzZXQsIG9yIGl0IGNhbiBob2xkIGEgc2luZ2xlIHRva2VuIGFzIGluIHRoZVxuICogY2FzZSBvZiBhIHNpbXBsZSBxdWVyeSB0b2tlbiBzZXQuXG4gKlxuICogQWRkaXRpb25hbGx5IHRva2VuIHNldHMgYXJlIHVzZWQgdG8gcGVyZm9ybSB3aWxkY2FyZCBtYXRjaGluZy5cbiAqIExlYWRpbmcsIGNvbnRhaW5lZCBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzIGFyZSBzdXBwb3J0ZWQsIGFuZFxuICogZnJvbSB0aGlzIGVkaXQgZGlzdGFuY2UgbWF0Y2hpbmcgY2FuIGFsc28gYmUgcHJvdmlkZWQuXG4gKlxuICogVG9rZW4gc2V0cyBhcmUgaW1wbGVtZW50ZWQgYXMgYSBtaW5pbWFsIGZpbml0ZSBzdGF0ZSBhdXRvbWF0YSxcbiAqIHdoZXJlIGJvdGggY29tbW9uIHByZWZpeGVzIGFuZCBzdWZmaXhlcyBhcmUgc2hhcmVkIGJldHdlZW4gdG9rZW5zLlxuICogVGhpcyBoZWxwcyB0byByZWR1Y2UgdGhlIHNwYWNlIHVzZWQgZm9yIHN0b3JpbmcgdGhlIHRva2VuIHNldC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xubHVuci5Ub2tlblNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5maW5hbCA9IGZhbHNlXG4gIHRoaXMuZWRnZXMgPSB7fVxuICB0aGlzLmlkID0gbHVuci5Ub2tlblNldC5fbmV4dElkXG4gIGx1bnIuVG9rZW5TZXQuX25leHRJZCArPSAxXG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIG5leHQsIGF1dG8gaW5jcmVtZW50LCBpZGVudGlmaWVyIHRvIGFzc2lnblxuICogdG8gYSBuZXcgdG9rZW5TZXQuXG4gKlxuICogVG9rZW5TZXRzIHJlcXVpcmUgYSB1bmlxdWUgaWRlbnRpZmllciB0byBiZSBjb3JyZWN0bHkgbWluaW1pc2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuVG9rZW5TZXQuX25leHRJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgaW5zdGFuY2UgZnJvbSB0aGUgZ2l2ZW4gc29ydGVkIGFycmF5IG9mIHdvcmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyciAtIEEgc29ydGVkIGFycmF5IG9mIHN0cmluZ3MgdG8gY3JlYXRlIHRoZSBzZXQgZnJvbS5cbiAqIEByZXR1cm5zIHtsdW5yLlRva2VuU2V0fVxuICogQHRocm93cyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZSBpbnB1dCBhcnJheSBpcyBub3Qgc29ydGVkLlxuICovXG5sdW5yLlRva2VuU2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgdmFyIGJ1aWxkZXIgPSBuZXcgbHVuci5Ub2tlblNldC5CdWlsZGVyXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGJ1aWxkZXIuaW5zZXJ0KGFycltpXSlcbiAgfVxuXG4gIGJ1aWxkZXIuZmluaXNoKClcbiAgcmV0dXJuIGJ1aWxkZXIucm9vdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0b2tlbiBzZXQgZnJvbSBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNsYXVzZSAtIEEgc2luZ2xlIGNsYXVzZSBmcm9tIGx1bnIuUXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhdXNlLnRlcm0gLSBUaGUgcXVlcnkgY2xhdXNlIHRlcm0uXG4gKiBAcGFyYW0ge251bWJlcn0gW2NsYXVzZS5lZGl0RGlzdGFuY2VdIC0gVGhlIG9wdGlvbmFsIGVkaXQgZGlzdGFuY2UgZm9yIHRoZSB0ZXJtLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCdlZGl0RGlzdGFuY2UnIGluIGNsYXVzZSkge1xuICAgIHJldHVybiBsdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyhjbGF1c2UudGVybSwgY2xhdXNlLmVkaXREaXN0YW5jZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbHVuci5Ub2tlblNldC5mcm9tU3RyaW5nKGNsYXVzZS50ZXJtKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHNldCByZXByZXNlbnRpbmcgYSBzaW5nbGUgc3RyaW5nIHdpdGggYSBzcGVjaWZpZWRcbiAqIGVkaXQgZGlzdGFuY2UuXG4gKlxuICogSW5zZXJ0aW9ucywgZGVsZXRpb25zLCBzdWJzdGl0dXRpb25zIGFuZCB0cmFuc3Bvc2l0aW9ucyBhcmUgZWFjaFxuICogdHJlYXRlZCBhcyBhbiBlZGl0IGRpc3RhbmNlIG9mIDEuXG4gKlxuICogSW5jcmVhc2luZyB0aGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHdpbGwgaGF2ZSBhIGRyYW1hdGljIGltcGFjdFxuICogb24gdGhlIHBlcmZvcm1hbmNlIG9mIGJvdGggY3JlYXRpbmcgYW5kIGludGVyc2VjdGluZyB0aGVzZSBUb2tlblNldHMuXG4gKiBJdCBpcyBhZHZpc2VkIHRvIGtlZXAgdGhlIGVkaXQgZGlzdGFuY2UgbGVzcyB0aGFuIDMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0b2tlbiBzZXQgZnJvbS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlZGl0RGlzdGFuY2UgLSBUaGUgYWxsb3dlZCBlZGl0IGRpc3RhbmNlIHRvIG1hdGNoLlxuICogQHJldHVybnMge2x1bnIuVmVjdG9yfVxuICovXG5sdW5yLlRva2VuU2V0LmZyb21GdXp6eVN0cmluZyA9IGZ1bmN0aW9uIChzdHIsIGVkaXREaXN0YW5jZSkge1xuICB2YXIgcm9vdCA9IG5ldyBsdW5yLlRva2VuU2V0XG5cbiAgdmFyIHN0YWNrID0gW3tcbiAgICBub2RlOiByb290LFxuICAgIGVkaXRzUmVtYWluaW5nOiBlZGl0RGlzdGFuY2UsXG4gICAgc3RyOiBzdHJcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKClcblxuICAgIC8vIG5vIGVkaXRcbiAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjaGFyID0gZnJhbWUuc3RyLmNoYXJBdCgwKSxcbiAgICAgICAgICBub0VkaXROb2RlXG5cbiAgICAgIGlmIChjaGFyIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgbm9FZGl0Tm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhcl1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vRWRpdE5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW2NoYXJdID0gbm9FZGl0Tm9kZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIG5vRWRpdE5vZGUuZmluYWwgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBub2RlOiBub0VkaXROb2RlLFxuICAgICAgICBlZGl0c1JlbWFpbmluZzogZnJhbWUuZWRpdHNSZW1haW5pbmcsXG4gICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChmcmFtZS5lZGl0c1JlbWFpbmluZyA9PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIGluc2VydGlvblxuICAgIGlmIChcIipcIiBpbiBmcmFtZS5ub2RlLmVkZ2VzKSB7XG4gICAgICB2YXIgaW5zZXJ0aW9uTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbnNlcnRpb25Ob2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgIGZyYW1lLm5vZGUuZWRnZXNbXCIqXCJdID0gaW5zZXJ0aW9uTm9kZVxuICAgIH1cblxuICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDApIHtcbiAgICAgIGluc2VydGlvbk5vZGUuZmluYWwgPSB0cnVlXG4gICAgfVxuXG4gICAgc3RhY2sucHVzaCh7XG4gICAgICBub2RlOiBpbnNlcnRpb25Ob2RlLFxuICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgIHN0cjogZnJhbWUuc3RyXG4gICAgfSlcblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8gY2FuIG9ubHkgZG8gYSBkZWxldGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBkZWxldGUgaW4gdGhlIHN0cmluZ1xuICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID4gMSkge1xuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIG5vZGU6IGZyYW1lLm5vZGUsXG4gICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgIHN0cjogZnJhbWUuc3RyLnNsaWNlKDEpXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGRlbGV0aW9uXG4gICAgLy8ganVzdCByZW1vdmluZyB0aGUgbGFzdCBjaGFyYWN0ZXIgZnJvbSB0aGUgc3RyXG4gICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgZnJhbWUubm9kZS5maW5hbCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBzdWJzdGl0dXRpb25cbiAgICAvLyBjYW4gb25seSBkbyBhIHN1YnN0aXR1dGlvbiBpZiB3ZSBoYXZlIGVub3VnaCBlZGl0cyByZW1haW5pbmdcbiAgICAvLyBhbmQgaWYgdGhlcmUgYXJlIGNoYXJhY3RlcnMgbGVmdCB0byBzdWJzdGl0dXRlXG4gICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgaWYgKFwiKlwiIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN1YnN0aXR1dGlvbk5vZGUgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICBmcmFtZS5ub2RlLmVkZ2VzW1wiKlwiXSA9IHN1YnN0aXR1dGlvbk5vZGVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lLnN0ci5sZW5ndGggPT0gMSkge1xuICAgICAgICBzdWJzdGl0dXRpb25Ob2RlLmZpbmFsID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgbm9kZTogc3Vic3RpdHV0aW9uTm9kZSxcbiAgICAgICAgZWRpdHNSZW1haW5pbmc6IGZyYW1lLmVkaXRzUmVtYWluaW5nIC0gMSxcbiAgICAgICAgc3RyOiBmcmFtZS5zdHIuc2xpY2UoMSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gdHJhbnNwb3NpdGlvblxuICAgIC8vIGNhbiBvbmx5IGRvIGEgdHJhbnNwb3NpdGlvbiBpZiB0aGVyZSBhcmUgZWRpdHMgcmVtYWluaW5nXG4gICAgLy8gYW5kIHRoZXJlIGFyZSBlbm91Z2ggY2hhcmFjdGVycyB0byB0cmFuc3Bvc2VcbiAgICBpZiAoZnJhbWUuc3RyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBjaGFyQSA9IGZyYW1lLnN0ci5jaGFyQXQoMCksXG4gICAgICAgICAgY2hhckIgPSBmcmFtZS5zdHIuY2hhckF0KDEpLFxuICAgICAgICAgIHRyYW5zcG9zZU5vZGVcblxuICAgICAgaWYgKGNoYXJCIGluIGZyYW1lLm5vZGUuZWRnZXMpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZSA9IGZyYW1lLm5vZGUuZWRnZXNbY2hhckJdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc3Bvc2VOb2RlID0gbmV3IGx1bnIuVG9rZW5TZXRcbiAgICAgICAgZnJhbWUubm9kZS5lZGdlc1tjaGFyQl0gPSB0cmFuc3Bvc2VOb2RlXG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZS5zdHIubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdHJhbnNwb3NlTm9kZS5maW5hbCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgIG5vZGU6IHRyYW5zcG9zZU5vZGUsXG4gICAgICAgIGVkaXRzUmVtYWluaW5nOiBmcmFtZS5lZGl0c1JlbWFpbmluZyAtIDEsXG4gICAgICAgIHN0cjogY2hhckEgKyBmcmFtZS5zdHIuc2xpY2UoMilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb3Rcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVG9rZW5TZXQgZnJvbSBhIHN0cmluZy5cbiAqXG4gKiBUaGUgc3RyaW5nIG1heSBjb250YWluIG9uZSBvciBtb3JlIHdpbGRjYXJkIGNoYXJhY3RlcnMgKCopXG4gKiB0aGF0IHdpbGwgYWxsb3cgd2lsZGNhcmQgbWF0Y2hpbmcgd2hlbiBpbnRlcnNlY3Rpbmcgd2l0aFxuICogYW5vdGhlciBUb2tlblNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBjcmVhdGUgYSBUb2tlblNldCBmcm9tLlxuICogQHJldHVybnMge2x1bnIuVG9rZW5TZXR9XG4gKi9cbmx1bnIuVG9rZW5TZXQuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIG5vZGUgPSBuZXcgbHVuci5Ub2tlblNldCxcbiAgICAgIHJvb3QgPSBub2RlXG5cbiAgLypcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgY2hhcmFjdGVycyB3aXRoaW4gdGhlIHBhc3NlZCBzdHJpbmdcbiAgICogYXBwZW5kaW5nIGEgbm9kZSBmb3IgZWFjaCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIFdoZW4gYSB3aWxkY2FyZCBjaGFyYWN0ZXIgaXMgZm91bmQgdGhlbiBhIHNlbGZcbiAgICogcmVmZXJlbmNpbmcgZWRnZSBpcyBpbnRyb2R1Y2VkIHRvIGNvbnRpbnVhbGx5IG1hdGNoXG4gICAqIGFueSBudW1iZXIgb2YgYW55IGNoYXJhY3RlcnMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNoYXIgPSBzdHJbaV0sXG4gICAgICAgIGZpbmFsID0gKGkgPT0gbGVuIC0gMSlcblxuICAgIGlmIChjaGFyID09IFwiKlwiKSB7XG4gICAgICBub2RlLmVkZ2VzW2NoYXJdID0gbm9kZVxuICAgICAgbm9kZS5maW5hbCA9IGZpbmFsXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG5cbiAgICAgIG5vZGUuZWRnZXNbY2hhcl0gPSBuZXh0XG4gICAgICBub2RlID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByb290XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhpcyBUb2tlblNldCBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAqIGNvbnRhaW5lZCB3aXRoaW4gdGhlIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaXMgbm90IGludGVuZGVkIHRvIGJlIHVzZWQgb24gYSBUb2tlblNldCB0aGF0XG4gKiBjb250YWlucyB3aWxkY2FyZHMsIGluIHRoZXNlIGNhc2VzIHRoZSByZXN1bHRzIGFyZVxuICogdW5kZWZpbmVkIGFuZCBhcmUgbGlrZWx5IHRvIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuXG4gKlxuICogQHJldHVybnMge3N0cmluZ1tdfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd29yZHMgPSBbXVxuXG4gIHZhciBzdGFjayA9IFt7XG4gICAgcHJlZml4OiBcIlwiLFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgdmFyIGZyYW1lID0gc3RhY2sucG9wKCksXG4gICAgICAgIGVkZ2VzID0gT2JqZWN0LmtleXMoZnJhbWUubm9kZS5lZGdlcyksXG4gICAgICAgIGxlbiA9IGVkZ2VzLmxlbmd0aFxuXG4gICAgaWYgKGZyYW1lLm5vZGUuZmluYWwpIHtcbiAgICAgIC8qIEluIFNhZmFyaSwgYXQgdGhpcyBwb2ludCB0aGUgcHJlZml4IGlzIHNvbWV0aW1lcyBjb3JydXB0ZWQsIHNlZTpcbiAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9vbGl2ZXJubi9sdW5yLmpzL2lzc3Vlcy8yNzkgQ2FsbGluZyBhbnlcbiAgICAgICAqIFN0cmluZy5wcm90b3R5cGUgbWV0aG9kIGZvcmNlcyBTYWZhcmkgdG8gXCJjYXN0XCIgdGhpcyBzdHJpbmcgdG8gd2hhdFxuICAgICAgICogaXQncyBzdXBwb3NlZCB0byBiZSwgZml4aW5nIHRoZSBidWcuICovXG4gICAgICBmcmFtZS5wcmVmaXguY2hhckF0KDApXG4gICAgICB3b3Jkcy5wdXNoKGZyYW1lLnByZWZpeClcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldXG5cbiAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICBwcmVmaXg6IGZyYW1lLnByZWZpeC5jb25jYXQoZWRnZSksXG4gICAgICAgIG5vZGU6IGZyYW1lLm5vZGUuZWRnZXNbZWRnZV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdvcmRzXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgVG9rZW5TZXQuXG4gKlxuICogVGhpcyBpcyBpbnRlbmRlZCB0byBhbGxvdyBUb2tlblNldHMgdG8gYmUgdXNlZCBhcyBrZXlzXG4gKiBpbiBvYmplY3RzLCBsYXJnZWx5IHRvIGFpZCB0aGUgY29uc3RydWN0aW9uIGFuZCBtaW5pbWlzYXRpb25cbiAqIG9mIGEgVG9rZW5TZXQuIEFzIHN1Y2ggaXQgaXMgbm90IGRlc2lnbmVkIHRvIGJlIGEgaHVtYW5cbiAqIGZyaWVuZGx5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBUb2tlblNldC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5sdW5yLlRva2VuU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTk9URTogVXNpbmcgT2JqZWN0LmtleXMgaGVyZSBhcyB0aGlzLmVkZ2VzIGlzIHZlcnkgbGlrZWx5XG4gIC8vIHRvIGVudGVyICdoYXNoLW1vZGUnIHdpdGggbWFueSBrZXlzIGJlaW5nIGFkZGVkXG4gIC8vXG4gIC8vIGF2b2lkaW5nIGEgZm9yLWluIGxvb3AgaGVyZSBhcyBpdCBsZWFkcyB0byB0aGUgZnVuY3Rpb25cbiAgLy8gYmVpbmcgZGUtb3B0aW1pc2VkIChhdCBsZWFzdCBpbiBWOCkuIEZyb20gc29tZSBzaW1wbGVcbiAgLy8gYmVuY2htYXJrcyB0aGUgcGVyZm9ybWFuY2UgaXMgY29tcGFyYWJsZSwgYnV0IGFsbG93aW5nXG4gIC8vIFY4IHRvIG9wdGltaXplIG1heSBtZWFuIGVhc3kgcGVyZm9ybWFuY2Ugd2lucyBpbiB0aGUgZnV0dXJlLlxuXG4gIGlmICh0aGlzLl9zdHIpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyXG4gIH1cblxuICB2YXIgc3RyID0gdGhpcy5maW5hbCA/ICcxJyA6ICcwJyxcbiAgICAgIGxhYmVscyA9IE9iamVjdC5rZXlzKHRoaXMuZWRnZXMpLnNvcnQoKSxcbiAgICAgIGxlbiA9IGxhYmVscy5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGxhYmVsID0gbGFiZWxzW2ldLFxuICAgICAgICBub2RlID0gdGhpcy5lZGdlc1tsYWJlbF1cblxuICAgIHN0ciA9IHN0ciArIGxhYmVsICsgbm9kZS5pZFxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgVG9rZW5TZXQgdGhhdCBpcyB0aGUgaW50ZXJzZWN0aW9uIG9mXG4gKiB0aGlzIFRva2VuU2V0IGFuZCB0aGUgcGFzc2VkIFRva2VuU2V0LlxuICpcbiAqIFRoaXMgaW50ZXJzZWN0aW9uIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgYW55IHdpbGRjYXJkc1xuICogY29udGFpbmVkIHdpdGhpbiB0aGUgVG9rZW5TZXQuXG4gKlxuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBiIC0gQW4gb3RoZXIgVG9rZW5TZXQgdG8gaW50ZXJzZWN0IHdpdGguXG4gKiBAcmV0dXJucyB7bHVuci5Ub2tlblNldH1cbiAqL1xubHVuci5Ub2tlblNldC5wcm90b3R5cGUuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIG91dHB1dCA9IG5ldyBsdW5yLlRva2VuU2V0LFxuICAgICAgZnJhbWUgPSB1bmRlZmluZWRcblxuICB2YXIgc3RhY2sgPSBbe1xuICAgIHFOb2RlOiBiLFxuICAgIG91dHB1dDogb3V0cHV0LFxuICAgIG5vZGU6IHRoaXNcbiAgfV1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgZnJhbWUgPSBzdGFjay5wb3AoKVxuXG4gICAgLy8gTk9URTogQXMgd2l0aCB0aGUgI3RvU3RyaW5nIG1ldGhvZCwgd2UgYXJlIHVzaW5nXG4gICAgLy8gT2JqZWN0LmtleXMgYW5kIGEgZm9yIGxvb3AgaW5zdGVhZCBvZiBhIGZvci1pbiBsb29wXG4gICAgLy8gYXMgYm90aCBvZiB0aGVzZSBvYmplY3RzIGVudGVyICdoYXNoJyBtb2RlLCBjYXVzaW5nXG4gICAgLy8gdGhlIGZ1bmN0aW9uIHRvIGJlIGRlLW9wdGltaXNlZCBpbiBWOFxuICAgIHZhciBxRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5xTm9kZS5lZGdlcyksXG4gICAgICAgIHFMZW4gPSBxRWRnZXMubGVuZ3RoLFxuICAgICAgICBuRWRnZXMgPSBPYmplY3Qua2V5cyhmcmFtZS5ub2RlLmVkZ2VzKSxcbiAgICAgICAgbkxlbiA9IG5FZGdlcy5sZW5ndGhcblxuICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcUxlbjsgcSsrKSB7XG4gICAgICB2YXIgcUVkZ2UgPSBxRWRnZXNbcV1cblxuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBuTGVuOyBuKyspIHtcbiAgICAgICAgdmFyIG5FZGdlID0gbkVkZ2VzW25dXG5cbiAgICAgICAgaWYgKG5FZGdlID09IHFFZGdlIHx8IHFFZGdlID09ICcqJykge1xuICAgICAgICAgIHZhciBub2RlID0gZnJhbWUubm9kZS5lZGdlc1tuRWRnZV0sXG4gICAgICAgICAgICAgIHFOb2RlID0gZnJhbWUucU5vZGUuZWRnZXNbcUVkZ2VdLFxuICAgICAgICAgICAgICBmaW5hbCA9IG5vZGUuZmluYWwgJiYgcU5vZGUuZmluYWwsXG4gICAgICAgICAgICAgIG5leHQgPSB1bmRlZmluZWRcblxuICAgICAgICAgIGlmIChuRWRnZSBpbiBmcmFtZS5vdXRwdXQuZWRnZXMpIHtcbiAgICAgICAgICAgIC8vIGFuIGVkZ2UgYWxyZWFkeSBleGlzdHMgZm9yIHRoaXMgY2hhcmFjdGVyXG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBub2RlLCBqdXN0IHNldCB0aGUgZmluYWxpdHlcbiAgICAgICAgICAgIC8vIGJpdCB1bmxlc3MgdGhpcyBub2RlIGlzIGFscmVhZHkgZmluYWxcbiAgICAgICAgICAgIG5leHQgPSBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdXG4gICAgICAgICAgICBuZXh0LmZpbmFsID0gbmV4dC5maW5hbCB8fCBmaW5hbFxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vIGVkZ2UgZXhpc3RzIHlldCwgbXVzdCBjcmVhdGUgb25lXG4gICAgICAgICAgICAvLyBzZXQgdGhlIGZpbmFsaXR5IGJpdCBhbmQgaW5zZXJ0IGl0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBvdXRwdXRcbiAgICAgICAgICAgIG5leHQgPSBuZXcgbHVuci5Ub2tlblNldFxuICAgICAgICAgICAgbmV4dC5maW5hbCA9IGZpbmFsXG4gICAgICAgICAgICBmcmFtZS5vdXRwdXQuZWRnZXNbbkVkZ2VdID0gbmV4dFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgcU5vZGU6IHFOb2RlLFxuICAgICAgICAgICAgb3V0cHV0OiBuZXh0LFxuICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0XG59XG5sdW5yLlRva2VuU2V0LkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucHJldmlvdXNXb3JkID0gXCJcIlxuICB0aGlzLnJvb3QgPSBuZXcgbHVuci5Ub2tlblNldFxuICB0aGlzLnVuY2hlY2tlZE5vZGVzID0gW11cbiAgdGhpcy5taW5pbWl6ZWROb2RlcyA9IHt9XG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHdvcmQpIHtcbiAgdmFyIG5vZGUsXG4gICAgICBjb21tb25QcmVmaXggPSAwXG5cbiAgaWYgKHdvcmQgPCB0aGlzLnByZXZpb3VzV29yZCkge1xuICAgIHRocm93IG5ldyBFcnJvciAoXCJPdXQgb2Ygb3JkZXIgd29yZCBpbnNlcnRpb25cIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZC5sZW5ndGggJiYgaSA8IHRoaXMucHJldmlvdXNXb3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHdvcmRbaV0gIT0gdGhpcy5wcmV2aW91c1dvcmRbaV0pIGJyZWFrXG4gICAgY29tbW9uUHJlZml4KytcbiAgfVxuXG4gIHRoaXMubWluaW1pemUoY29tbW9uUHJlZml4KVxuXG4gIGlmICh0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgbm9kZSA9IHRoaXMucm9vdFxuICB9IGVsc2Uge1xuICAgIG5vZGUgPSB0aGlzLnVuY2hlY2tlZE5vZGVzW3RoaXMudW5jaGVja2VkTm9kZXMubGVuZ3RoIC0gMV0uY2hpbGRcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBjb21tb25QcmVmaXg7IGkgPCB3b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5leHROb2RlID0gbmV3IGx1bnIuVG9rZW5TZXQsXG4gICAgICAgIGNoYXIgPSB3b3JkW2ldXG5cbiAgICBub2RlLmVkZ2VzW2NoYXJdID0gbmV4dE5vZGVcblxuICAgIHRoaXMudW5jaGVja2VkTm9kZXMucHVzaCh7XG4gICAgICBwYXJlbnQ6IG5vZGUsXG4gICAgICBjaGFyOiBjaGFyLFxuICAgICAgY2hpbGQ6IG5leHROb2RlXG4gICAgfSlcblxuICAgIG5vZGUgPSBuZXh0Tm9kZVxuICB9XG5cbiAgbm9kZS5maW5hbCA9IHRydWVcbiAgdGhpcy5wcmV2aW91c1dvcmQgPSB3b3JkXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm1pbmltaXplKDApXG59XG5cbmx1bnIuVG9rZW5TZXQuQnVpbGRlci5wcm90b3R5cGUubWluaW1pemUgPSBmdW5jdGlvbiAoZG93blRvKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLnVuY2hlY2tlZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gZG93blRvOyBpLS0pIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudW5jaGVja2VkTm9kZXNbaV0sXG4gICAgICAgIGNoaWxkS2V5ID0gbm9kZS5jaGlsZC50b1N0cmluZygpXG5cbiAgICBpZiAoY2hpbGRLZXkgaW4gdGhpcy5taW5pbWl6ZWROb2Rlcykge1xuICAgICAgbm9kZS5wYXJlbnQuZWRnZXNbbm9kZS5jaGFyXSA9IHRoaXMubWluaW1pemVkTm9kZXNbY2hpbGRLZXldXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENhY2hlIHRoZSBrZXkgZm9yIHRoaXMgbm9kZSBzaW5jZVxuICAgICAgLy8gd2Uga25vdyBpdCBjYW4ndCBjaGFuZ2UgYW55bW9yZVxuICAgICAgbm9kZS5jaGlsZC5fc3RyID0gY2hpbGRLZXlcblxuICAgICAgdGhpcy5taW5pbWl6ZWROb2Rlc1tjaGlsZEtleV0gPSBub2RlLmNoaWxkXG4gICAgfVxuXG4gICAgdGhpcy51bmNoZWNrZWROb2Rlcy5wb3AoKVxuICB9XG59XG4vKiFcbiAqIGx1bnIuSW5kZXhcbiAqIENvcHlyaWdodCAoQykgMjAxOSBPbGl2ZXIgTmlnaHRpbmdhbGVcbiAqL1xuXG4vKipcbiAqIEFuIGluZGV4IGNvbnRhaW5zIHRoZSBidWlsdCBpbmRleCBvZiBhbGwgZG9jdW1lbnRzIGFuZCBwcm92aWRlcyBhIHF1ZXJ5IGludGVyZmFjZVxuICogdG8gdGhlIGluZGV4LlxuICpcbiAqIFVzdWFsbHkgaW5zdGFuY2VzIG9mIGx1bnIuSW5kZXggd2lsbCBub3QgYmUgY3JlYXRlZCB1c2luZyB0aGlzIGNvbnN0cnVjdG9yLCBpbnN0ZWFkXG4gKiBsdW5yLkJ1aWxkZXIgc2hvdWxkIGJlIHVzZWQgdG8gY29uc3RydWN0IG5ldyBpbmRleGVzLCBvciBsdW5yLkluZGV4LmxvYWQgc2hvdWxkIGJlXG4gKiB1c2VkIHRvIGxvYWQgcHJldmlvdXNseSBidWlsdCBhbmQgc2VyaWFsaXplZCBpbmRleGVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzIC0gVGhlIGF0dHJpYnV0ZXMgb2YgdGhlIGJ1aWx0IHNlYXJjaCBpbmRleC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycy5pbnZlcnRlZEluZGV4IC0gQW4gaW5kZXggb2YgdGVybS9maWVsZCB0byBkb2N1bWVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGx1bnIuVmVjdG9yPn0gYXR0cnMuZmllbGRWZWN0b3JzIC0gRmllbGQgdmVjdG9yc1xuICogQHBhcmFtIHtsdW5yLlRva2VuU2V0fSBhdHRycy50b2tlblNldCAtIEFuIHNldCBvZiBhbGwgY29ycHVzIHRva2Vucy5cbiAqIEBwYXJhbSB7c3RyaW5nW119IGF0dHJzLmZpZWxkcyAtIFRoZSBuYW1lcyBvZiBpbmRleGVkIGRvY3VtZW50IGZpZWxkcy5cbiAqIEBwYXJhbSB7bHVuci5QaXBlbGluZX0gYXR0cnMucGlwZWxpbmUgLSBUaGUgcGlwZWxpbmUgdG8gdXNlIGZvciBzZWFyY2ggdGVybXMuXG4gKi9cbmx1bnIuSW5kZXggPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gYXR0cnMuaW52ZXJ0ZWRJbmRleFxuICB0aGlzLmZpZWxkVmVjdG9ycyA9IGF0dHJzLmZpZWxkVmVjdG9yc1xuICB0aGlzLnRva2VuU2V0ID0gYXR0cnMudG9rZW5TZXRcbiAgdGhpcy5maWVsZHMgPSBhdHRycy5maWVsZHNcbiAgdGhpcy5waXBlbGluZSA9IGF0dHJzLnBpcGVsaW5lXG59XG5cbi8qKlxuICogQSByZXN1bHQgY29udGFpbnMgZGV0YWlscyBvZiBhIGRvY3VtZW50IG1hdGNoaW5nIGEgc2VhcmNoIHF1ZXJ5LlxuICogQHR5cGVkZWYge09iamVjdH0gbHVuci5JbmRleH5SZXN1bHRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWYgLSBUaGUgcmVmZXJlbmNlIG9mIHRoZSBkb2N1bWVudCB0aGlzIHJlc3VsdCByZXByZXNlbnRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNjb3JlIC0gQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIHJlcHJlc2VudGluZyBob3cgc2ltaWxhciB0aGlzIGRvY3VtZW50IGlzIHRvIHRoZSBxdWVyeS5cbiAqIEBwcm9wZXJ0eSB7bHVuci5NYXRjaERhdGF9IG1hdGNoRGF0YSAtIENvbnRhaW5zIG1ldGFkYXRhIGFib3V0IHRoaXMgbWF0Y2ggaW5jbHVkaW5nIHdoaWNoIHRlcm0ocykgY2F1c2VkIHRoZSBtYXRjaC5cbiAqL1xuXG4vKipcbiAqIEFsdGhvdWdoIGx1bnIgcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHF1ZXJpZXMgdXNpbmcgbHVuci5RdWVyeSwgaXQgYWxzbyBwcm92aWRlcyBhIHNpbXBsZVxuICogcXVlcnkgbGFuZ3VhZ2Ugd2hpY2ggaXRzZWxmIGlzIHBhcnNlZCBpbnRvIGFuIGluc3RhbmNlIG9mIGx1bnIuUXVlcnkuXG4gKlxuICogRm9yIHByb2dyYW1tYXRpY2FsbHkgYnVpbGRpbmcgcXVlcmllcyBpdCBpcyBhZHZpc2VkIHRvIGRpcmVjdGx5IHVzZSBsdW5yLlF1ZXJ5LCB0aGUgcXVlcnkgbGFuZ3VhZ2VcbiAqIGlzIGJlc3QgdXNlZCBmb3IgaHVtYW4gZW50ZXJlZCB0ZXh0IHJhdGhlciB0aGFuIHByb2dyYW0gZ2VuZXJhdGVkIHRleHQuXG4gKlxuICogQXQgaXRzIHNpbXBsZXN0IHF1ZXJpZXMgY2FuIGp1c3QgYmUgYSBzaW5nbGUgdGVybSwgZS5nLiBgaGVsbG9gLCBtdWx0aXBsZSB0ZXJtcyBhcmUgYWxzbyBzdXBwb3J0ZWRcbiAqIGFuZCB3aWxsIGJlIGNvbWJpbmVkIHdpdGggT1IsIGUuZyBgaGVsbG8gd29ybGRgIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHRoYXQgY29udGFpbiBlaXRoZXIgJ2hlbGxvJ1xuICogb3IgJ3dvcmxkJywgdGhvdWdoIHRob3NlIHRoYXQgY29udGFpbiBib3RoIHdpbGwgcmFuayBoaWdoZXIgaW4gdGhlIHJlc3VsdHMuXG4gKlxuICogV2lsZGNhcmRzIGNhbiBiZSBpbmNsdWRlZCBpbiB0ZXJtcyB0byBtYXRjaCBvbmUgb3IgbW9yZSB1bnNwZWNpZmllZCBjaGFyYWN0ZXJzLCB0aGVzZSB3aWxkY2FyZHMgY2FuXG4gKiBiZSBpbnNlcnRlZCBhbnl3aGVyZSB3aXRoaW4gdGhlIHRlcm0sIGFuZCBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGNhbiBleGlzdCBpbiBhIHNpbmdsZSB0ZXJtLiBBZGRpbmdcbiAqIHdpbGRjYXJkcyB3aWxsIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgZG9jdW1lbnRzIHRoYXQgd2lsbCBiZSBmb3VuZCBidXQgY2FuIGFsc28gaGF2ZSBhIG5lZ2F0aXZlXG4gKiBpbXBhY3Qgb24gcXVlcnkgcGVyZm9ybWFuY2UsIGVzcGVjaWFsbHkgd2l0aCB3aWxkY2FyZHMgYXQgdGhlIGJlZ2lubmluZyBvZiBhIHRlcm0uXG4gKlxuICogVGVybXMgY2FuIGJlIHJlc3RyaWN0ZWQgdG8gc3BlY2lmaWMgZmllbGRzLCBlLmcuIGB0aXRsZTpoZWxsb2AsIG9ubHkgZG9jdW1lbnRzIHdpdGggdGhlIHRlcm1cbiAqIGhlbGxvIGluIHRoZSB0aXRsZSBmaWVsZCB3aWxsIG1hdGNoIHRoaXMgcXVlcnkuIFVzaW5nIGEgZmllbGQgbm90IHByZXNlbnQgaW4gdGhlIGluZGV4IHdpbGwgbGVhZFxuICogdG8gYW4gZXJyb3IgYmVpbmcgdGhyb3duLlxuICpcbiAqIE1vZGlmaWVycyBjYW4gYWxzbyBiZSBhZGRlZCB0byB0ZXJtcywgbHVuciBzdXBwb3J0cyBlZGl0IGRpc3RhbmNlIGFuZCBib29zdCBtb2RpZmllcnMgb24gdGVybXMuIEEgdGVybVxuICogYm9vc3Qgd2lsbCBtYWtlIGRvY3VtZW50cyBtYXRjaGluZyB0aGF0IHRlcm0gc2NvcmUgaGlnaGVyLCBlLmcuIGBmb29eNWAuIEVkaXQgZGlzdGFuY2UgaXMgYWxzbyBzdXBwb3J0ZWRcbiAqIHRvIHByb3ZpZGUgZnV6enkgbWF0Y2hpbmcsIGUuZy4gJ2hlbGxvfjInIHdpbGwgbWF0Y2ggZG9jdW1lbnRzIHdpdGggaGVsbG8gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDIuXG4gKiBBdm9pZCBsYXJnZSB2YWx1ZXMgZm9yIGVkaXQgZGlzdGFuY2UgdG8gaW1wcm92ZSBxdWVyeSBwZXJmb3JtYW5jZS5cbiAqXG4gKiBFYWNoIHRlcm0gYWxzbyBzdXBwb3J0cyBhIHByZXNlbmNlIG1vZGlmaWVyLiBCeSBkZWZhdWx0IGEgdGVybSdzIHByZXNlbmNlIGluIGRvY3VtZW50IGlzIG9wdGlvbmFsLCBob3dldmVyXG4gKiB0aGlzIGNhbiBiZSBjaGFuZ2VkIHRvIGVpdGhlciByZXF1aXJlZCBvciBwcm9oaWJpdGVkLiBGb3IgYSB0ZXJtJ3MgcHJlc2VuY2UgdG8gYmUgcmVxdWlyZWQgaW4gYSBkb2N1bWVudCB0aGVcbiAqIHRlcm0gc2hvdWxkIGJlIHByZWZpeGVkIHdpdGggYSAnKycsIGUuZy4gYCtmb28gYmFyYCBpcyBhIHNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgbXVzdCBjb250YWluICdmb28nIGFuZFxuICogb3B0aW9uYWxseSBjb250YWluICdiYXInLiBDb252ZXJzZWx5IGEgbGVhZGluZyAnLScgc2V0cyB0aGUgdGVybXMgcHJlc2VuY2UgdG8gcHJvaGliaXRlZCwgaS5lLiBpdCBtdXN0IG5vdFxuICogYXBwZWFyIGluIGEgZG9jdW1lbnQsIGUuZy4gYC1mb28gYmFyYCBpcyBhIHNlYXJjaCBmb3IgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW4gJ2ZvbycgYnV0IG1heSBjb250YWluICdiYXInLlxuICpcbiAqIFRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhlIGJhY2tzbGFzaCBjaGFyYWN0ZXIgJ1xcJyBjYW4gYmUgdXNlZCwgdGhpcyBhbGxvd3Mgc2VhcmNoZXMgdG8gaW5jbHVkZVxuICogY2hhcmFjdGVycyB0aGF0IHdvdWxkIG5vcm1hbGx5IGJlIGNvbnNpZGVyZWQgbW9kaWZpZXJzLCBlLmcuIGBmb29cXH4yYCB3aWxsIHNlYXJjaCBmb3IgYSB0ZXJtIFwiZm9vfjJcIiBpbnN0ZWFkXG4gKiBvZiBhdHRlbXB0aW5nIHRvIGFwcGx5IGEgYm9vc3Qgb2YgMiB0byB0aGUgc2VhcmNoIHRlcm0gXCJmb29cIi5cbiAqXG4gKiBAdHlwZWRlZiB7c3RyaW5nfSBsdW5yLkluZGV4flF1ZXJ5U3RyaW5nXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5TaW1wbGUgc2luZ2xlIHRlcm0gcXVlcnk8L2NhcHRpb24+XG4gKiBoZWxsb1xuICogQGV4YW1wbGUgPGNhcHRpb24+TXVsdGlwbGUgdGVybSBxdWVyeTwvY2FwdGlvbj5cbiAqIGhlbGxvIHdvcmxkXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtIHNjb3BlZCB0byBhIGZpZWxkPC9jYXB0aW9uPlxuICogdGl0bGU6aGVsbG9cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhIGJvb3N0IG9mIDEwPC9jYXB0aW9uPlxuICogaGVsbG9eMTBcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnRlcm0gd2l0aCBhbiBlZGl0IGRpc3RhbmNlIG9mIDI8L2NhcHRpb24+XG4gKiBoZWxsb34yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj50ZXJtcyB3aXRoIHByZXNlbmNlIG1vZGlmaWVyczwvY2FwdGlvbj5cbiAqIC1mb28gK2JhciBiYXpcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgc2VhcmNoIGFnYWluc3QgdGhlIGluZGV4IHVzaW5nIGx1bnIgcXVlcnkgc3ludGF4LlxuICpcbiAqIFJlc3VsdHMgd2lsbCBiZSByZXR1cm5lZCBzb3J0ZWQgYnkgdGhlaXIgc2NvcmUsIHRoZSBtb3N0IHJlbGV2YW50IHJlc3VsdHNcbiAqIHdpbGwgYmUgcmV0dXJuZWQgZmlyc3QuICBGb3IgZGV0YWlscyBvbiBob3cgdGhlIHNjb3JlIGlzIGNhbGN1bGF0ZWQsIHBsZWFzZSBzZWVcbiAqIHRoZSB7QGxpbmsgaHR0cHM6Ly9sdW5yanMuY29tL2d1aWRlcy9zZWFyY2hpbmcuaHRtbCNzY29yaW5nfGd1aWRlfS5cbiAqXG4gKiBGb3IgbW9yZSBwcm9ncmFtbWF0aWMgcXVlcnlpbmcgdXNlIGx1bnIuSW5kZXgjcXVlcnkuXG4gKlxuICogQHBhcmFtIHtsdW5yLkluZGV4flF1ZXJ5U3RyaW5nfSBxdWVyeVN0cmluZyAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgYSBsdW5yIHF1ZXJ5LlxuICogQHRocm93cyB7bHVuci5RdWVyeVBhcnNlRXJyb3J9IElmIHRoZSBwYXNzZWQgcXVlcnkgc3RyaW5nIGNhbm5vdCBiZSBwYXJzZWQuXG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH5SZXN1bHRbXX1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUuc2VhcmNoID0gZnVuY3Rpb24gKHF1ZXJ5U3RyaW5nKSB7XG4gIHJldHVybiB0aGlzLnF1ZXJ5KGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBwYXJzZXIgPSBuZXcgbHVuci5RdWVyeVBhcnNlcihxdWVyeVN0cmluZywgcXVlcnkpXG4gICAgcGFyc2VyLnBhcnNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHF1ZXJ5IGJ1aWxkZXIgY2FsbGJhY2sgcHJvdmlkZXMgYSBxdWVyeSBvYmplY3QgdG8gYmUgdXNlZCB0byBleHByZXNzXG4gKiB0aGUgcXVlcnkgdG8gcGVyZm9ybSBvbiB0aGUgaW5kZXguXG4gKlxuICogQGNhbGxiYWNrIGx1bnIuSW5kZXh+cXVlcnlCdWlsZGVyXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB1cC5cbiAqIEB0aGlzIGx1bnIuUXVlcnlcbiAqL1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgcXVlcnkgYWdhaW5zdCB0aGUgaW5kZXggdXNpbmcgdGhlIHlpZWxkZWQgbHVuci5RdWVyeSBvYmplY3QuXG4gKlxuICogSWYgcGVyZm9ybWluZyBwcm9ncmFtbWF0aWMgcXVlcmllcyBhZ2FpbnN0IHRoZSBpbmRleCwgdGhpcyBtZXRob2QgaXMgcHJlZmVycmVkXG4gKiBvdmVyIGx1bnIuSW5kZXgjc2VhcmNoIHNvIGFzIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIHF1ZXJ5IHBhcnNpbmcgb3ZlcmhlYWQuXG4gKlxuICogQSBxdWVyeSBvYmplY3QgaXMgeWllbGRlZCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIHVzZWQgdG9cbiAqIGV4cHJlc3MgdGhlIHF1ZXJ5IHRvIGJlIHJ1biBhZ2FpbnN0IHRoZSBpbmRleC5cbiAqXG4gKiBOb3RlIHRoYXQgYWx0aG91Z2ggdGhpcyBmdW5jdGlvbiB0YWtlcyBhIGNhbGxiYWNrIHBhcmFtZXRlciBpdCBpcyBfbm90XyBhblxuICogYXN5bmNocm9ub3VzIG9wZXJhdGlvbiwgdGhlIGNhbGxiYWNrIGlzIGp1c3QgeWllbGRlZCBhIHF1ZXJ5IG9iamVjdCB0byBiZVxuICogY3VzdG9taXplZC5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuSW5kZXh+cXVlcnlCdWlsZGVyfSBmbiAtIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGJ1aWxkIHRoZSBxdWVyeS5cbiAqIEByZXR1cm5zIHtsdW5yLkluZGV4flJlc3VsdFtdfVxuICovXG5sdW5yLkluZGV4LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBmb3IgZWFjaCBxdWVyeSBjbGF1c2VcbiAgLy8gKiBwcm9jZXNzIHRlcm1zXG4gIC8vICogZXhwYW5kIHRlcm1zIGZyb20gdG9rZW4gc2V0XG4gIC8vICogZmluZCBtYXRjaGluZyBkb2N1bWVudHMgYW5kIG1ldGFkYXRhXG4gIC8vICogZ2V0IGRvY3VtZW50IHZlY3RvcnNcbiAgLy8gKiBzY29yZSBkb2N1bWVudHNcblxuICB2YXIgcXVlcnkgPSBuZXcgbHVuci5RdWVyeSh0aGlzLmZpZWxkcyksXG4gICAgICBtYXRjaGluZ0ZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBxdWVyeVZlY3RvcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgdGVybUZpZWxkQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgcmVxdWlyZWRNYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIHByb2hpYml0ZWRNYXRjaGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIC8qXG4gICAqIFRvIHN1cHBvcnQgZmllbGQgbGV2ZWwgYm9vc3RzIGEgcXVlcnkgdmVjdG9yIGlzIGNyZWF0ZWQgcGVyXG4gICAqIGZpZWxkLiBBbiBlbXB0eSB2ZWN0b3IgaXMgZWFnZXJseSBjcmVhdGVkIHRvIHN1cHBvcnQgbmVnYXRlZFxuICAgKiBxdWVyaWVzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXJ5VmVjdG9yc1t0aGlzLmZpZWxkc1tpXV0gPSBuZXcgbHVuci5WZWN0b3JcbiAgfVxuXG4gIGZuLmNhbGwocXVlcnksIHF1ZXJ5KVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnkuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIC8qXG4gICAgICogVW5sZXNzIHRoZSBwaXBlbGluZSBoYXMgYmVlbiBkaXNhYmxlZCBmb3IgdGhpcyB0ZXJtLCB3aGljaCBpc1xuICAgICAqIHRoZSBjYXNlIGZvciB0ZXJtcyB3aXRoIHdpbGRjYXJkcywgd2UgbmVlZCB0byBwYXNzIHRoZSBjbGF1c2VcbiAgICAgKiB0ZXJtIHRocm91Z2ggdGhlIHNlYXJjaCBwaXBlbGluZS4gQSBwaXBlbGluZSByZXR1cm5zIGFuIGFycmF5XG4gICAgICogb2YgcHJvY2Vzc2VkIHRlcm1zLiBQaXBlbGluZSBmdW5jdGlvbnMgbWF5IGV4cGFuZCB0aGUgcGFzc2VkXG4gICAgICogdGVybSwgd2hpY2ggbWVhbnMgd2UgbWF5IGVuZCB1cCBwZXJmb3JtaW5nIG11bHRpcGxlIGluZGV4IGxvb2t1cHNcbiAgICAgKiBmb3IgYSBzaW5nbGUgcXVlcnkgdGVybS5cbiAgICAgKi9cbiAgICB2YXIgY2xhdXNlID0gcXVlcnkuY2xhdXNlc1tpXSxcbiAgICAgICAgdGVybXMgPSBudWxsLFxuICAgICAgICBjbGF1c2VNYXRjaGVzID0gbHVuci5TZXQuY29tcGxldGVcblxuICAgIGlmIChjbGF1c2UudXNlUGlwZWxpbmUpIHtcbiAgICAgIHRlcm1zID0gdGhpcy5waXBlbGluZS5ydW5TdHJpbmcoY2xhdXNlLnRlcm0sIHtcbiAgICAgICAgZmllbGRzOiBjbGF1c2UuZmllbGRzXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtcyA9IFtjbGF1c2UudGVybV1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHRlcm1zLmxlbmd0aDsgbSsrKSB7XG4gICAgICB2YXIgdGVybSA9IHRlcm1zW21dXG5cbiAgICAgIC8qXG4gICAgICAgKiBFYWNoIHRlcm0gcmV0dXJuZWQgZnJvbSB0aGUgcGlwZWxpbmUgbmVlZHMgdG8gdXNlIHRoZSBzYW1lIHF1ZXJ5XG4gICAgICAgKiBjbGF1c2Ugb2JqZWN0LCBlLmcuIHRoZSBzYW1lIGJvb3N0IGFuZCBvciBlZGl0IGRpc3RhbmNlLiBUaGVcbiAgICAgICAqIHNpbXBsZXN0IHdheSB0byBkbyB0aGlzIGlzIHRvIHJlLXVzZSB0aGUgY2xhdXNlIG9iamVjdCBidXQgbXV0YXRlXG4gICAgICAgKiBpdHMgdGVybSBwcm9wZXJ0eS5cbiAgICAgICAqL1xuICAgICAgY2xhdXNlLnRlcm0gPSB0ZXJtXG5cbiAgICAgIC8qXG4gICAgICAgKiBGcm9tIHRoZSB0ZXJtIGluIHRoZSBjbGF1c2Ugd2UgY3JlYXRlIGEgdG9rZW4gc2V0IHdoaWNoIHdpbGwgdGhlblxuICAgICAgICogYmUgdXNlZCB0byBpbnRlcnNlY3QgdGhlIGluZGV4ZXMgdG9rZW4gc2V0IHRvIGdldCBhIGxpc3Qgb2YgdGVybXNcbiAgICAgICAqIHRvIGxvb2t1cCBpbiB0aGUgaW52ZXJ0ZWQgaW5kZXhcbiAgICAgICAqL1xuICAgICAgdmFyIHRlcm1Ub2tlblNldCA9IGx1bnIuVG9rZW5TZXQuZnJvbUNsYXVzZShjbGF1c2UpLFxuICAgICAgICAgIGV4cGFuZGVkVGVybXMgPSB0aGlzLnRva2VuU2V0LmludGVyc2VjdCh0ZXJtVG9rZW5TZXQpLnRvQXJyYXkoKVxuXG4gICAgICAvKlxuICAgICAgICogSWYgYSB0ZXJtIG1hcmtlZCBhcyByZXF1aXJlZCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdG9rZW5TZXQgaXQgaXNcbiAgICAgICAqIGltcG9zc2libGUgZm9yIHRoZSBzZWFyY2ggdG8gcmV0dXJuIGFueSBtYXRjaGVzLiBXZSBzZXQgYWxsIHRoZSBmaWVsZFxuICAgICAgICogc2NvcGVkIHJlcXVpcmVkIG1hdGNoZXMgc2V0IHRvIGVtcHR5IGFuZCBzdG9wIGV4YW1pbmluZyBhbnkgZnVydGhlclxuICAgICAgICogY2xhdXNlcy5cbiAgICAgICAqL1xuICAgICAgaWYgKGV4cGFuZGVkVGVybXMubGVuZ3RoID09PSAwICYmIGNsYXVzZS5wcmVzZW5jZSA9PT0gbHVuci5RdWVyeS5wcmVzZW5jZS5SRVFVSVJFRCkge1xuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdXG4gICAgICAgICAgcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9IGx1bnIuU2V0LmVtcHR5XG4gICAgICAgIH1cblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV4cGFuZGVkVGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLypcbiAgICAgICAgICogRm9yIGVhY2ggdGVybSBnZXQgdGhlIHBvc3RpbmcgYW5kIHRlcm1JbmRleCwgdGhpcyBpcyByZXF1aXJlZCBmb3JcbiAgICAgICAgICogYnVpbGRpbmcgdGhlIHF1ZXJ5IHZlY3Rvci5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBleHBhbmRlZFRlcm0gPSBleHBhbmRlZFRlcm1zW2pdLFxuICAgICAgICAgICAgcG9zdGluZyA9IHRoaXMuaW52ZXJ0ZWRJbmRleFtleHBhbmRlZFRlcm1dLFxuICAgICAgICAgICAgdGVybUluZGV4ID0gcG9zdGluZy5faW5kZXhcblxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAqIEZvciBlYWNoIGZpZWxkIHRoYXQgdGhpcyBxdWVyeSB0ZXJtIGlzIHNjb3BlZCBieSAoYnkgZGVmYXVsdFxuICAgICAgICAgICAqIGFsbCBmaWVsZHMgYXJlIGluIHNjb3BlKSB3ZSBuZWVkIHRvIGdldCBhbGwgdGhlIGRvY3VtZW50IHJlZnNcbiAgICAgICAgICAgKiB0aGF0IGhhdmUgdGhpcyB0ZXJtIGluIHRoYXQgZmllbGQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGUgcG9zdGluZyBpcyB0aGUgZW50cnkgaW4gdGhlIGludmVydGVkSW5kZXggZm9yIHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIHRlcm0gZnJvbSBhYm92ZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgZmllbGQgPSBjbGF1c2UuZmllbGRzW2tdLFxuICAgICAgICAgICAgICBmaWVsZFBvc3RpbmcgPSBwb3N0aW5nW2ZpZWxkXSxcbiAgICAgICAgICAgICAgbWF0Y2hpbmdEb2N1bWVudFJlZnMgPSBPYmplY3Qua2V5cyhmaWVsZFBvc3RpbmcpLFxuICAgICAgICAgICAgICB0ZXJtRmllbGQgPSBleHBhbmRlZFRlcm0gKyBcIi9cIiArIGZpZWxkLFxuICAgICAgICAgICAgICBtYXRjaGluZ0RvY3VtZW50c1NldCA9IG5ldyBsdW5yLlNldChtYXRjaGluZ0RvY3VtZW50UmVmcylcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogaWYgdGhlIHByZXNlbmNlIG9mIHRoaXMgdGVybSBpcyByZXF1aXJlZCBlbnN1cmUgdGhhdCB0aGUgbWF0Y2hpbmdcbiAgICAgICAgICAgKiBkb2N1bWVudHMgYXJlIGFkZGVkIHRvIHRoZSBzZXQgb2YgcmVxdWlyZWQgbWF0Y2hlcyBmb3IgdGhpcyBjbGF1c2UuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09IGx1bnIuUXVlcnkucHJlc2VuY2UuUkVRVUlSRUQpIHtcbiAgICAgICAgICAgIGNsYXVzZU1hdGNoZXMgPSBjbGF1c2VNYXRjaGVzLnVuaW9uKG1hdGNoaW5nRG9jdW1lbnRzU2V0KVxuXG4gICAgICAgICAgICBpZiAocmVxdWlyZWRNYXRjaGVzW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0gPSBsdW5yLlNldC5jb21wbGV0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogaWYgdGhlIHByZXNlbmNlIG9mIHRoaXMgdGVybSBpcyBwcm9oaWJpdGVkIGVuc3VyZSB0aGF0IHRoZSBtYXRjaGluZ1xuICAgICAgICAgICAqIGRvY3VtZW50cyBhcmUgYWRkZWQgdG8gdGhlIHNldCBvZiBwcm9oaWJpdGVkIG1hdGNoZXMgZm9yIHRoaXMgZmllbGQsXG4gICAgICAgICAgICogY3JlYXRpbmcgdGhhdCBzZXQgaWYgaXQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChjbGF1c2UucHJlc2VuY2UgPT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICAgICAgICBpZiAocHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID0gbHVuci5TZXQuZW1wdHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdID0gcHJvaGliaXRlZE1hdGNoZXNbZmllbGRdLnVuaW9uKG1hdGNoaW5nRG9jdW1lbnRzU2V0KVxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogUHJvaGliaXRlZCBtYXRjaGVzIHNob3VsZCBub3QgYmUgcGFydCBvZiB0aGUgcXVlcnkgdmVjdG9yIHVzZWQgZm9yXG4gICAgICAgICAgICAgKiBzaW1pbGFyaXR5IHNjb3JpbmcgYW5kIG5vIG1ldGFkYXRhIHNob3VsZCBiZSBleHRyYWN0ZWQgc28gd2UgY29udGludWVcbiAgICAgICAgICAgICAqIHRvIHRoZSBuZXh0IGZpZWxkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgKiBUaGUgcXVlcnkgZmllbGQgdmVjdG9yIGlzIHBvcHVsYXRlZCB1c2luZyB0aGUgdGVybUluZGV4IGZvdW5kIGZvclxuICAgICAgICAgICAqIHRoZSB0ZXJtIGFuZCBhIHVuaXQgdmFsdWUgd2l0aCB0aGUgYXBwcm9wcmlhdGUgYm9vc3QgYXBwbGllZC5cbiAgICAgICAgICAgKiBVc2luZyB1cHNlcnQgYmVjYXVzZSB0aGVyZSBjb3VsZCBhbHJlYWR5IGJlIGFuIGVudHJ5IGluIHRoZSB2ZWN0b3JcbiAgICAgICAgICAgKiBmb3IgdGhlIHRlcm0gd2UgYXJlIHdvcmtpbmcgd2l0aC4gSW4gdGhhdCBjYXNlIHdlIGp1c3QgYWRkIHRoZSBzY29yZXNcbiAgICAgICAgICAgKiB0b2dldGhlci5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBxdWVyeVZlY3RvcnNbZmllbGRdLnVwc2VydCh0ZXJtSW5kZXgsIGNsYXVzZS5ib29zdCwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgKyBiIH0pXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB3ZSd2ZSBhbHJlYWR5IHNlZW4gdGhpcyB0ZXJtLCBmaWVsZCBjb21ibyB0aGVuIHdlJ3ZlIGFscmVhZHkgY29sbGVjdGVkXG4gICAgICAgICAgICogdGhlIG1hdGNoaW5nIGRvY3VtZW50cyBhbmQgbWV0YWRhdGEsIG5vIG5lZWQgdG8gZ28gdGhyb3VnaCBhbGwgdGhhdCBhZ2FpblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgbWF0Y2hpbmdEb2N1bWVudFJlZnMubGVuZ3RoOyBsKyspIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBBbGwgbWV0YWRhdGEgZm9yIHRoaXMgdGVybS9maWVsZC9kb2N1bWVudCB0cmlwbGVcbiAgICAgICAgICAgICAqIGFyZSB0aGVuIGV4dHJhY3RlZCBhbmQgY29sbGVjdGVkIGludG8gYW4gaW5zdGFuY2VcbiAgICAgICAgICAgICAqIG9mIGx1bnIuTWF0Y2hEYXRhIHJlYWR5IHRvIGJlIHJldHVybmVkIGluIHRoZSBxdWVyeVxuICAgICAgICAgICAgICogcmVzdWx0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdEb2N1bWVudFJlZiA9IG1hdGNoaW5nRG9jdW1lbnRSZWZzW2xdLFxuICAgICAgICAgICAgICAgIG1hdGNoaW5nRmllbGRSZWYgPSBuZXcgbHVuci5GaWVsZFJlZiAobWF0Y2hpbmdEb2N1bWVudFJlZiwgZmllbGQpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gZmllbGRQb3N0aW5nW21hdGNoaW5nRG9jdW1lbnRSZWZdLFxuICAgICAgICAgICAgICAgIGZpZWxkTWF0Y2hcblxuICAgICAgICAgICAgaWYgKChmaWVsZE1hdGNoID0gbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0pID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgbWF0Y2hpbmdGaWVsZHNbbWF0Y2hpbmdGaWVsZFJlZl0gPSBuZXcgbHVuci5NYXRjaERhdGEgKGV4cGFuZGVkVGVybSwgZmllbGQsIG1ldGFkYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmllbGRNYXRjaC5hZGQoZXhwYW5kZWRUZXJtLCBmaWVsZCwgbWV0YWRhdGEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXJtRmllbGRDYWNoZVt0ZXJtRmllbGRdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHByZXNlbmNlIHdhcyByZXF1aXJlZCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcmVxdWlyZWRNYXRjaGVzIGZpZWxkIHNldHMuXG4gICAgICogV2UgZG8gdGhpcyBhZnRlciBhbGwgZmllbGRzIGZvciB0aGUgdGVybSBoYXZlIGNvbGxlY3RlZCB0aGVpciBtYXRjaGVzIGJlY2F1c2VcbiAgICAgKiB0aGUgY2xhdXNlIHRlcm1zIHByZXNlbmNlIGlzIHJlcXVpcmVkIGluIF9hbnlfIG9mIHRoZSBmaWVsZHMgbm90IF9hbGxfIG9mIHRoZVxuICAgICAqIGZpZWxkcy5cbiAgICAgKi9cbiAgICBpZiAoY2xhdXNlLnByZXNlbmNlID09PSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGNsYXVzZS5maWVsZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGZpZWxkID0gY2xhdXNlLmZpZWxkc1trXVxuICAgICAgICByZXF1aXJlZE1hdGNoZXNbZmllbGRdID0gcmVxdWlyZWRNYXRjaGVzW2ZpZWxkXS5pbnRlcnNlY3QoY2xhdXNlTWF0Y2hlcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTmVlZCB0byBjb21iaW5lIHRoZSBmaWVsZCBzY29wZWQgcmVxdWlyZWQgYW5kIHByb2hpYml0ZWRcbiAgICogbWF0Y2hpbmcgZG9jdW1lbnRzIGludG8gYSBnbG9iYWwgc2V0IG9mIHJlcXVpcmVkIGFuZCBwcm9oaWJpdGVkXG4gICAqIG1hdGNoZXNcbiAgICovXG4gIHZhciBhbGxSZXF1aXJlZE1hdGNoZXMgPSBsdW5yLlNldC5jb21wbGV0ZSxcbiAgICAgIGFsbFByb2hpYml0ZWRNYXRjaGVzID0gbHVuci5TZXQuZW1wdHlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV1cblxuICAgIGlmIChyZXF1aXJlZE1hdGNoZXNbZmllbGRdKSB7XG4gICAgICBhbGxSZXF1aXJlZE1hdGNoZXMgPSBhbGxSZXF1aXJlZE1hdGNoZXMuaW50ZXJzZWN0KHJlcXVpcmVkTWF0Y2hlc1tmaWVsZF0pXG4gICAgfVxuXG4gICAgaWYgKHByb2hpYml0ZWRNYXRjaGVzW2ZpZWxkXSkge1xuICAgICAgYWxsUHJvaGliaXRlZE1hdGNoZXMgPSBhbGxQcm9oaWJpdGVkTWF0Y2hlcy51bmlvbihwcm9oaWJpdGVkTWF0Y2hlc1tmaWVsZF0pXG4gICAgfVxuICB9XG5cbiAgdmFyIG1hdGNoaW5nRmllbGRSZWZzID0gT2JqZWN0LmtleXMobWF0Y2hpbmdGaWVsZHMpLFxuICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgbWF0Y2hlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAvKlxuICAgKiBJZiB0aGUgcXVlcnkgaXMgbmVnYXRlZCAoY29udGFpbnMgb25seSBwcm9oaWJpdGVkIHRlcm1zKVxuICAgKiB3ZSBuZWVkIHRvIGdldCBfYWxsXyBmaWVsZFJlZnMgY3VycmVudGx5IGV4aXN0aW5nIGluIHRoZVxuICAgKiBpbmRleC4gVGhpcyBpcyBvbmx5IGRvbmUgd2hlbiB3ZSBrbm93IHRoYXQgdGhlIHF1ZXJ5IGlzXG4gICAqIGVudGlyZWx5IHByb2hpYml0ZWQgdGVybXMgdG8gYXZvaWQgYW55IGNvc3Qgb2YgZ2V0dGluZyBhbGxcbiAgICogZmllbGRSZWZzIHVubmVjZXNzYXJpbHkuXG4gICAqXG4gICAqIEFkZGl0aW9uYWxseSwgYmxhbmsgTWF0Y2hEYXRhIG11c3QgYmUgY3JlYXRlZCB0byBjb3JyZWN0bHlcbiAgICogcG9wdWxhdGUgdGhlIHJlc3VsdHMuXG4gICAqL1xuICBpZiAocXVlcnkuaXNOZWdhdGVkKCkpIHtcbiAgICBtYXRjaGluZ0ZpZWxkUmVmcyA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRWZWN0b3JzKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGluZ0ZpZWxkUmVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG1hdGNoaW5nRmllbGRSZWYgPSBtYXRjaGluZ0ZpZWxkUmVmc1tpXVxuICAgICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWYpXG4gICAgICBtYXRjaGluZ0ZpZWxkc1ttYXRjaGluZ0ZpZWxkUmVmXSA9IG5ldyBsdW5yLk1hdGNoRGF0YVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdGaWVsZFJlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAvKlxuICAgICAqIEN1cnJlbnRseSB3ZSBoYXZlIGRvY3VtZW50IGZpZWxkcyB0aGF0IG1hdGNoIHRoZSBxdWVyeSwgYnV0IHdlXG4gICAgICogbmVlZCB0byByZXR1cm4gZG9jdW1lbnRzLiBUaGUgbWF0Y2hEYXRhIGFuZCBzY29yZXMgYXJlIGNvbWJpbmVkXG4gICAgICogZnJvbSBtdWx0aXBsZSBmaWVsZHMgYmVsb25naW5nIHRvIHRoZSBzYW1lIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogU2NvcmVzIGFyZSBjYWxjdWxhdGVkIGJ5IGZpZWxkLCB1c2luZyB0aGUgcXVlcnkgdmVjdG9ycyBjcmVhdGVkXG4gICAgICogYWJvdmUsIGFuZCBjb21iaW5lZCBpbnRvIGEgZmluYWwgZG9jdW1lbnQgc2NvcmUgdXNpbmcgYWRkaXRpb24uXG4gICAgICovXG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKG1hdGNoaW5nRmllbGRSZWZzW2ldKSxcbiAgICAgICAgZG9jUmVmID0gZmllbGRSZWYuZG9jUmVmXG5cbiAgICBpZiAoIWFsbFJlcXVpcmVkTWF0Y2hlcy5jb250YWlucyhkb2NSZWYpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChhbGxQcm9oaWJpdGVkTWF0Y2hlcy5jb250YWlucyhkb2NSZWYpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBmaWVsZFZlY3RvciA9IHRoaXMuZmllbGRWZWN0b3JzW2ZpZWxkUmVmXSxcbiAgICAgICAgc2NvcmUgPSBxdWVyeVZlY3RvcnNbZmllbGRSZWYuZmllbGROYW1lXS5zaW1pbGFyaXR5KGZpZWxkVmVjdG9yKSxcbiAgICAgICAgZG9jTWF0Y2hcblxuICAgIGlmICgoZG9jTWF0Y2ggPSBtYXRjaGVzW2RvY1JlZl0pICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvY01hdGNoLnNjb3JlICs9IHNjb3JlXG4gICAgICBkb2NNYXRjaC5tYXRjaERhdGEuY29tYmluZShtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgcmVmOiBkb2NSZWYsXG4gICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgbWF0Y2hEYXRhOiBtYXRjaGluZ0ZpZWxkc1tmaWVsZFJlZl1cbiAgICAgIH1cbiAgICAgIG1hdGNoZXNbZG9jUmVmXSA9IG1hdGNoXG4gICAgICByZXN1bHRzLnB1c2gobWF0Y2gpXG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogU29ydCB0aGUgcmVzdWx0cyBvYmplY3RzIGJ5IHNjb3JlLCBoaWdoZXN0IGZpcnN0LlxuICAgKi9cbiAgcmV0dXJuIHJlc3VsdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnNjb3JlIC0gYS5zY29yZVxuICB9KVxufVxuXG4vKipcbiAqIFByZXBhcmVzIHRoZSBpbmRleCBmb3IgSlNPTiBzZXJpYWxpemF0aW9uLlxuICpcbiAqIFRoZSBzY2hlbWEgZm9yIHRoaXMgSlNPTiBibG9iIHdpbGwgYmUgZGVzY3JpYmVkIGluIGFcbiAqIHNlcGFyYXRlIEpTT04gc2NoZW1hIGZpbGUuXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xubHVuci5JbmRleC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuaW52ZXJ0ZWRJbmRleClcbiAgICAuc29ydCgpXG4gICAgLm1hcChmdW5jdGlvbiAodGVybSkge1xuICAgICAgcmV0dXJuIFt0ZXJtLCB0aGlzLmludmVydGVkSW5kZXhbdGVybV1dXG4gICAgfSwgdGhpcylcblxuICB2YXIgZmllbGRWZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFZlY3RvcnMpXG4gICAgLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICByZXR1cm4gW3JlZiwgdGhpcy5maWVsZFZlY3RvcnNbcmVmXS50b0pTT04oKV1cbiAgICB9LCB0aGlzKVxuXG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogbHVuci52ZXJzaW9uLFxuICAgIGZpZWxkczogdGhpcy5maWVsZHMsXG4gICAgZmllbGRWZWN0b3JzOiBmaWVsZFZlY3RvcnMsXG4gICAgaW52ZXJ0ZWRJbmRleDogaW52ZXJ0ZWRJbmRleCxcbiAgICBwaXBlbGluZTogdGhpcy5waXBlbGluZS50b0pTT04oKVxuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgbHVuci5JbmRleFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpYWxpemVkSW5kZXggLSBBIHByZXZpb3VzbHkgc2VyaWFsaXplZCBsdW5yLkluZGV4XG4gKiBAcmV0dXJucyB7bHVuci5JbmRleH1cbiAqL1xubHVuci5JbmRleC5sb2FkID0gZnVuY3Rpb24gKHNlcmlhbGl6ZWRJbmRleCkge1xuICB2YXIgYXR0cnMgPSB7fSxcbiAgICAgIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgc2VyaWFsaXplZFZlY3RvcnMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRWZWN0b3JzLFxuICAgICAgaW52ZXJ0ZWRJbmRleCA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleCA9IHNlcmlhbGl6ZWRJbmRleC5pbnZlcnRlZEluZGV4LFxuICAgICAgdG9rZW5TZXRCdWlsZGVyID0gbmV3IGx1bnIuVG9rZW5TZXQuQnVpbGRlcixcbiAgICAgIHBpcGVsaW5lID0gbHVuci5QaXBlbGluZS5sb2FkKHNlcmlhbGl6ZWRJbmRleC5waXBlbGluZSlcblxuICBpZiAoc2VyaWFsaXplZEluZGV4LnZlcnNpb24gIT0gbHVuci52ZXJzaW9uKSB7XG4gICAgbHVuci51dGlscy53YXJuKFwiVmVyc2lvbiBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgc2VyaWFsaXNlZCBpbmRleC4gQ3VycmVudCB2ZXJzaW9uIG9mIGx1bnIgJ1wiICsgbHVuci52ZXJzaW9uICsgXCInIGRvZXMgbm90IG1hdGNoIHNlcmlhbGl6ZWQgaW5kZXggJ1wiICsgc2VyaWFsaXplZEluZGV4LnZlcnNpb24gKyBcIidcIilcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZFZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdHVwbGUgPSBzZXJpYWxpemVkVmVjdG9yc1tpXSxcbiAgICAgICAgcmVmID0gdHVwbGVbMF0sXG4gICAgICAgIGVsZW1lbnRzID0gdHVwbGVbMV1cblxuICAgIGZpZWxkVmVjdG9yc1tyZWZdID0gbmV3IGx1bnIuVmVjdG9yKGVsZW1lbnRzKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkSW52ZXJ0ZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0dXBsZSA9IHNlcmlhbGl6ZWRJbnZlcnRlZEluZGV4W2ldLFxuICAgICAgICB0ZXJtID0gdHVwbGVbMF0sXG4gICAgICAgIHBvc3RpbmcgPSB0dXBsZVsxXVxuXG4gICAgdG9rZW5TZXRCdWlsZGVyLmluc2VydCh0ZXJtKVxuICAgIGludmVydGVkSW5kZXhbdGVybV0gPSBwb3N0aW5nXG4gIH1cblxuICB0b2tlblNldEJ1aWxkZXIuZmluaXNoKClcblxuICBhdHRycy5maWVsZHMgPSBzZXJpYWxpemVkSW5kZXguZmllbGRzXG5cbiAgYXR0cnMuZmllbGRWZWN0b3JzID0gZmllbGRWZWN0b3JzXG4gIGF0dHJzLmludmVydGVkSW5kZXggPSBpbnZlcnRlZEluZGV4XG4gIGF0dHJzLnRva2VuU2V0ID0gdG9rZW5TZXRCdWlsZGVyLnJvb3RcbiAgYXR0cnMucGlwZWxpbmUgPSBwaXBlbGluZVxuXG4gIHJldHVybiBuZXcgbHVuci5JbmRleChhdHRycylcbn1cbi8qIVxuICogbHVuci5CdWlsZGVyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTkgT2xpdmVyIE5pZ2h0aW5nYWxlXG4gKi9cblxuLyoqXG4gKiBsdW5yLkJ1aWxkZXIgcGVyZm9ybXMgaW5kZXhpbmcgb24gYSBzZXQgb2YgZG9jdW1lbnRzIGFuZFxuICogcmV0dXJucyBpbnN0YW5jZXMgb2YgbHVuci5JbmRleCByZWFkeSBmb3IgcXVlcnlpbmcuXG4gKlxuICogQWxsIGNvbmZpZ3VyYXRpb24gb2YgdGhlIGluZGV4IGlzIGRvbmUgdmlhIHRoZSBidWlsZGVyLCB0aGVcbiAqIGZpZWxkcyB0byBpbmRleCwgdGhlIGRvY3VtZW50IHJlZmVyZW5jZSwgdGhlIHRleHQgcHJvY2Vzc2luZ1xuICogcGlwZWxpbmUgYW5kIGRvY3VtZW50IHNjb3JpbmcgcGFyYW1ldGVycyBhcmUgYWxsIHNldCBvbiB0aGVcbiAqIGJ1aWxkZXIgYmVmb3JlIGluZGV4aW5nLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByb3BlcnR5IHtzdHJpbmd9IF9yZWYgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHJlZmVyZW5jZSBmaWVsZC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IF9maWVsZHMgLSBJbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IGZpZWxkcyB0byBpbmRleC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBpbnZlcnRlZEluZGV4IC0gVGhlIGludmVydGVkIGluZGV4IG1hcHMgdGVybXMgdG8gZG9jdW1lbnQgZmllbGRzLlxuICogQHByb3BlcnR5IHtvYmplY3R9IGRvY3VtZW50VGVybUZyZXF1ZW5jaWVzIC0gS2VlcHMgdHJhY2sgb2YgZG9jdW1lbnQgdGVybSBmcmVxdWVuY2llcy5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBkb2N1bWVudExlbmd0aHMgLSBLZWVwcyB0cmFjayBvZiB0aGUgbGVuZ3RoIG9mIGRvY3VtZW50cyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcHJvcGVydHkge2x1bnIudG9rZW5pemVyfSB0b2tlbml6ZXIgLSBGdW5jdGlvbiBmb3Igc3BsaXR0aW5nIHN0cmluZ3MgaW50byB0b2tlbnMgZm9yIGluZGV4aW5nLlxuICogQHByb3BlcnR5IHtsdW5yLlBpcGVsaW5lfSBwaXBlbGluZSAtIFRoZSBwaXBlbGluZSBwZXJmb3JtcyB0ZXh0IHByb2Nlc3Npbmcgb24gdG9rZW5zIGJlZm9yZSBpbmRleGluZy5cbiAqIEBwcm9wZXJ0eSB7bHVuci5QaXBlbGluZX0gc2VhcmNoUGlwZWxpbmUgLSBBIHBpcGVsaW5lIGZvciBwcm9jZXNzaW5nIHNlYXJjaCB0ZXJtcyBiZWZvcmUgcXVlcnlpbmcgdGhlIGluZGV4LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRvY3VtZW50Q291bnQgLSBLZWVwcyB0cmFjayBvZiB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyBpbmRleGVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IF9iIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBmaWVsZCBsZW5ndGggbm9ybWFsaXphdGlvbiwgc2V0dGluZyB0aGlzIHRvIDAgZGlzYWJsZWQgbm9ybWFsaXphdGlvbiwgMSBmdWxseSBub3JtYWxpemVzIGZpZWxkIGxlbmd0aHMsIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuNzUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gX2sxIC0gQSBwYXJhbWV0ZXIgdG8gY29udHJvbCBob3cgcXVpY2tseSBhbiBpbmNyZWFzZSBpbiB0ZXJtIGZyZXF1ZW5jeSByZXN1bHRzIGluIHRlcm0gZnJlcXVlbmN5IHNhdHVyYXRpb24sIHRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0ZXJtSW5kZXggLSBBIGNvdW50ZXIgaW5jcmVtZW50ZWQgZm9yIGVhY2ggdW5pcXVlIHRlcm0sIHVzZWQgdG8gaWRlbnRpZnkgYSB0ZXJtcyBwb3NpdGlvbiBpbiB0aGUgdmVjdG9yIHNwYWNlLlxuICogQHByb3BlcnR5IHthcnJheX0gbWV0YWRhdGFXaGl0ZWxpc3QgLSBBIGxpc3Qgb2YgbWV0YWRhdGEga2V5cyB0aGF0IGhhdmUgYmVlbiB3aGl0ZWxpc3RlZCBmb3IgZW50cnkgaW4gdGhlIGluZGV4LlxuICovXG5sdW5yLkJ1aWxkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX3JlZiA9IFwiaWRcIlxuICB0aGlzLl9maWVsZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuX2RvY3VtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5pbnZlcnRlZEluZGV4ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzID0ge31cbiAgdGhpcy5maWVsZExlbmd0aHMgPSB7fVxuICB0aGlzLnRva2VuaXplciA9IGx1bnIudG9rZW5pemVyXG4gIHRoaXMucGlwZWxpbmUgPSBuZXcgbHVuci5QaXBlbGluZVxuICB0aGlzLnNlYXJjaFBpcGVsaW5lID0gbmV3IGx1bnIuUGlwZWxpbmVcbiAgdGhpcy5kb2N1bWVudENvdW50ID0gMFxuICB0aGlzLl9iID0gMC43NVxuICB0aGlzLl9rMSA9IDEuMlxuICB0aGlzLnRlcm1JbmRleCA9IDBcbiAgdGhpcy5tZXRhZGF0YVdoaXRlbGlzdCA9IFtdXG59XG5cbi8qKlxuICogU2V0cyB0aGUgZG9jdW1lbnQgZmllbGQgdXNlZCBhcyB0aGUgZG9jdW1lbnQgcmVmZXJlbmNlLiBFdmVyeSBkb2N1bWVudCBtdXN0IGhhdmUgdGhpcyBmaWVsZC5cbiAqIFRoZSB0eXBlIG9mIHRoaXMgZmllbGQgaW4gdGhlIGRvY3VtZW50IHNob3VsZCBiZSBhIHN0cmluZywgaWYgaXQgaXMgbm90IGEgc3RyaW5nIGl0IHdpbGwgYmVcbiAqIGNvZXJjZWQgaW50byBhIHN0cmluZyBieSBjYWxsaW5nIHRvU3RyaW5nLlxuICpcbiAqIFRoZSBkZWZhdWx0IHJlZiBpcyAnaWQnLlxuICpcbiAqIFRoZSByZWYgc2hvdWxkIF9ub3RfIGJlIGNoYW5nZWQgZHVyaW5nIGluZGV4aW5nLCBpdCBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgZG9jdW1lbnRzIGFyZVxuICogYWRkZWQgdG8gdGhlIGluZGV4LiBDaGFuZ2luZyBpdCBkdXJpbmcgaW5kZXhpbmcgY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW50IHJlc3VsdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZiAtIFRoZSBuYW1lIG9mIHRoZSByZWZlcmVuY2UgZmllbGQgaW4gdGhlIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdGhpcy5fcmVmID0gcmVmXG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqXG4gKiBMdW5yIGV4cGVjdHMgYSBmaWVsZCB0byBiZSBhdCB0aGUgdG9wIGxldmVsIG9mIGEgZG9jdW1lbnQsIGlmIGhvd2V2ZXIgdGhlIGZpZWxkXG4gKiBpcyBkZWVwbHkgbmVzdGVkIHdpdGhpbiBhIGRvY3VtZW50IGFuIGV4dHJhY3RvciBmdW5jdGlvbiBjYW4gYmUgdXNlZCB0byBleHRyYWN0XG4gKiB0aGUgcmlnaHQgZmllbGQgZm9yIGluZGV4aW5nLlxuICpcbiAqIEBjYWxsYmFjayBmaWVsZEV4dHJhY3RvclxuICogQHBhcmFtIHtvYmplY3R9IGRvYyAtIFRoZSBkb2N1bWVudCBiZWluZyBhZGRlZCB0byB0aGUgaW5kZXguXG4gKiBAcmV0dXJucyB7PyhzdHJpbmd8b2JqZWN0fG9iamVjdFtdKX0gb2JqIC0gVGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5kZXhlZCBmb3IgdGhpcyBmaWVsZC5cbiAqIEBleGFtcGxlIDxjYXB0aW9uPkV4dHJhY3RpbmcgYSBuZXN0ZWQgZmllbGQ8L2NhcHRpb24+XG4gKiBmdW5jdGlvbiAoZG9jKSB7IHJldHVybiBkb2MubmVzdGVkLmZpZWxkIH1cbiAqL1xuXG4vKipcbiAqIEFkZHMgYSBmaWVsZCB0byB0aGUgbGlzdCBvZiBkb2N1bWVudCBmaWVsZHMgdGhhdCB3aWxsIGJlIGluZGV4ZWQuIEV2ZXJ5IGRvY3VtZW50IGJlaW5nXG4gKiBpbmRleGVkIHNob3VsZCBoYXZlIHRoaXMgZmllbGQuIE51bGwgdmFsdWVzIGZvciB0aGlzIGZpZWxkIGluIGluZGV4ZWQgZG9jdW1lbnRzIHdpbGxcbiAqIG5vdCBjYXVzZSBlcnJvcnMgYnV0IHdpbGwgbGltaXQgdGhlIGNoYW5jZSBvZiB0aGF0IGRvY3VtZW50IGJlaW5nIHJldHJpZXZlZCBieSBzZWFyY2hlcy5cbiAqXG4gKiBBbGwgZmllbGRzIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgYWRkaW5nIGRvY3VtZW50cyB0byB0aGUgaW5kZXguIEFkZGluZyBmaWVsZHMgYWZ0ZXJcbiAqIGEgZG9jdW1lbnQgaGFzIGJlZW4gaW5kZXhlZCB3aWxsIGhhdmUgbm8gZWZmZWN0IG9uIGFscmVhZHkgaW5kZXhlZCBkb2N1bWVudHMuXG4gKlxuICogRmllbGRzIGNhbiBiZSBib29zdGVkIGF0IGJ1aWxkIHRpbWUuIFRoaXMgYWxsb3dzIHRlcm1zIHdpdGhpbiB0aGF0IGZpZWxkIHRvIGhhdmUgbW9yZVxuICogaW1wb3J0YW5jZSB3aGVuIHJhbmtpbmcgc2VhcmNoIHJlc3VsdHMuIFVzZSBhIGZpZWxkIGJvb3N0IHRvIHNwZWNpZnkgdGhhdCBtYXRjaGVzIHdpdGhpblxuICogb25lIGZpZWxkIGFyZSBtb3JlIGltcG9ydGFudCB0aGFuIG90aGVyIGZpZWxkcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb2YgYSBmaWVsZCB0byBpbmRleCBpbiBhbGwgZG9jdW1lbnRzLlxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXMgLSBPcHRpb25hbCBhdHRyaWJ1dGVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGZpZWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IFthdHRyaWJ1dGVzLmJvb3N0PTFdIC0gQm9vc3QgYXBwbGllZCB0byBhbGwgdGVybXMgd2l0aGluIHRoaXMgZmllbGQuXG4gKiBAcGFyYW0ge2ZpZWxkRXh0cmFjdG9yfSBbYXR0cmlidXRlcy5leHRyYWN0b3JdIC0gRnVuY3Rpb24gdG8gZXh0cmFjdCBhIGZpZWxkIGZyb20gYSBkb2N1bWVudC5cbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZpZWxkTmFtZSBjYW5ub3QgY29udGFpbiB1bnN1cHBvcnRlZCBjaGFyYWN0ZXJzICcvJ1xuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmZpZWxkID0gZnVuY3Rpb24gKGZpZWxkTmFtZSwgYXR0cmlidXRlcykge1xuICBpZiAoL1xcLy8udGVzdChmaWVsZE5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IgKFwiRmllbGQgJ1wiICsgZmllbGROYW1lICsgXCInIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVyICcvJ1wiKVxuICB9XG5cbiAgdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0gPSBhdHRyaWJ1dGVzIHx8IHt9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdG8gdHVuZSB0aGUgYW1vdW50IG9mIGZpZWxkIGxlbmd0aCBub3JtYWxpc2F0aW9uIHRoYXQgaXMgYXBwbGllZCB3aGVuXG4gKiBjYWxjdWxhdGluZyByZWxldmFuY2Ugc2NvcmVzLiBBIHZhbHVlIG9mIDAgd2lsbCBjb21wbGV0ZWx5IGRpc2FibGUgYW55IG5vcm1hbGlzYXRpb25cbiAqIGFuZCBhIHZhbHVlIG9mIDEgd2lsbCBmdWxseSBub3JtYWxpc2UgZmllbGQgbGVuZ3Rocy4gVGhlIGRlZmF1bHQgaXMgMC43NS4gVmFsdWVzIG9mIGJcbiAqIHdpbGwgYmUgY2xhbXBlZCB0byB0aGUgcmFuZ2UgMCAtIDEuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoaXMgdHVuaW5nIHBhcmFtZXRlci5cbiAqL1xubHVuci5CdWlsZGVyLnByb3RvdHlwZS5iID0gZnVuY3Rpb24gKG51bWJlcikge1xuICBpZiAobnVtYmVyIDwgMCkge1xuICAgIHRoaXMuX2IgPSAwXG4gIH0gZWxzZSBpZiAobnVtYmVyID4gMSkge1xuICAgIHRoaXMuX2IgPSAxXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fYiA9IG51bWJlclxuICB9XG59XG5cbi8qKlxuICogQSBwYXJhbWV0ZXIgdGhhdCBjb250cm9scyB0aGUgc3BlZWQgYXQgd2hpY2ggYSByaXNlIGluIHRlcm0gZnJlcXVlbmN5IHJlc3VsdHMgaW4gdGVybVxuICogZnJlcXVlbmN5IHNhdHVyYXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuMi4gU2V0dGluZyB0aGlzIHRvIGEgaGlnaGVyIHZhbHVlIHdpbGwgZ2l2ZVxuICogc2xvd2VyIHNhdHVyYXRpb24gbGV2ZWxzLCBhIGxvd2VyIHZhbHVlIHdpbGwgcmVzdWx0IGluIHF1aWNrZXIgc2F0dXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGhlIHZhbHVlIHRvIHNldCBmb3IgdGhpcyB0dW5pbmcgcGFyYW1ldGVyLlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmsxID0gZnVuY3Rpb24gKG51bWJlcikge1xuICB0aGlzLl9rMSA9IG51bWJlclxufVxuXG4vKipcbiAqIEFkZHMgYSBkb2N1bWVudCB0byB0aGUgaW5kZXguXG4gKlxuICogQmVmb3JlIGFkZGluZyBmaWVsZHMgdG8gdGhlIGluZGV4IHRoZSBpbmRleCBzaG91bGQgaGF2ZSBiZWVuIGZ1bGx5IHNldHVwLCB3aXRoIHRoZSBkb2N1bWVudFxuICogcmVmIGFuZCBhbGwgZmllbGRzIHRvIGluZGV4IGFscmVhZHkgaGF2aW5nIGJlZW4gc3BlY2lmaWVkLlxuICpcbiAqIFRoZSBkb2N1bWVudCBtdXN0IGhhdmUgYSBmaWVsZCBuYW1lIGFzIHNwZWNpZmllZCBieSB0aGUgcmVmIChieSBkZWZhdWx0IHRoaXMgaXMgJ2lkJykgYW5kXG4gKiBpdCBzaG91bGQgaGF2ZSBhbGwgZmllbGRzIGRlZmluZWQgZm9yIGluZGV4aW5nLCB0aG91Z2ggbnVsbCBvciB1bmRlZmluZWQgdmFsdWVzIHdpbGwgbm90XG4gKiBjYXVzZSBlcnJvcnMuXG4gKlxuICogRW50aXJlIGRvY3VtZW50cyBjYW4gYmUgYm9vc3RlZCBhdCBidWlsZCB0aW1lLiBBcHBseWluZyBhIGJvb3N0IHRvIGEgZG9jdW1lbnQgaW5kaWNhdGVzIHRoYXRcbiAqIHRoaXMgZG9jdW1lbnQgc2hvdWxkIHJhbmsgaGlnaGVyIGluIHNlYXJjaCByZXN1bHRzIHRoYW4gb3RoZXIgZG9jdW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBkb2MgLSBUaGUgZG9jdW1lbnQgdG8gYWRkIHRvIHRoZSBpbmRleC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzIC0gT3B0aW9uYWwgYXR0cmlidXRlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBkb2N1bWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXR0cmlidXRlcy5ib29zdD0xXSAtIEJvb3N0IGFwcGxpZWQgdG8gYWxsIHRlcm1zIHdpdGhpbiB0aGlzIGRvY3VtZW50LlxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkb2MsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGRvY1JlZiA9IGRvY1t0aGlzLl9yZWZdLFxuICAgICAgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIHRoaXMuX2RvY3VtZW50c1tkb2NSZWZdID0gYXR0cmlidXRlcyB8fCB7fVxuICB0aGlzLmRvY3VtZW50Q291bnQgKz0gMVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXSxcbiAgICAgICAgZXh0cmFjdG9yID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uZXh0cmFjdG9yLFxuICAgICAgICBmaWVsZCA9IGV4dHJhY3RvciA/IGV4dHJhY3Rvcihkb2MpIDogZG9jW2ZpZWxkTmFtZV0sXG4gICAgICAgIHRva2VucyA9IHRoaXMudG9rZW5pemVyKGZpZWxkLCB7XG4gICAgICAgICAgZmllbGRzOiBbZmllbGROYW1lXVxuICAgICAgICB9KSxcbiAgICAgICAgdGVybXMgPSB0aGlzLnBpcGVsaW5lLnJ1bih0b2tlbnMpLFxuICAgICAgICBmaWVsZFJlZiA9IG5ldyBsdW5yLkZpZWxkUmVmIChkb2NSZWYsIGZpZWxkTmFtZSksXG4gICAgICAgIGZpZWxkVGVybXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgICB0aGlzLmZpZWxkVGVybUZyZXF1ZW5jaWVzW2ZpZWxkUmVmXSA9IGZpZWxkVGVybXNcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gPSAwXG5cbiAgICAvLyBzdG9yZSB0aGUgbGVuZ3RoIG9mIHRoaXMgZmllbGQgZm9yIHRoaXMgZG9jdW1lbnRcbiAgICB0aGlzLmZpZWxkTGVuZ3Roc1tmaWVsZFJlZl0gKz0gdGVybXMubGVuZ3RoXG5cbiAgICAvLyBjYWxjdWxhdGUgdGVybSBmcmVxdWVuY2llcyBmb3IgdGhpcyBmaWVsZFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGVybXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal1cblxuICAgICAgaWYgKGZpZWxkVGVybXNbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpZWxkVGVybXNbdGVybV0gPSAwXG4gICAgICB9XG5cbiAgICAgIGZpZWxkVGVybXNbdGVybV0gKz0gMVxuXG4gICAgICAvLyBhZGQgdG8gaW52ZXJ0ZWQgaW5kZXhcbiAgICAgIC8vIGNyZWF0ZSBhbiBpbml0aWFsIHBvc3RpbmcgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICh0aGlzLmludmVydGVkSW5kZXhbdGVybV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBwb3N0aW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICBwb3N0aW5nW1wiX2luZGV4XCJdID0gdGhpcy50ZXJtSW5kZXhcbiAgICAgICAgdGhpcy50ZXJtSW5kZXggKz0gMVxuXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZmllbGRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgcG9zdGluZ1tmaWVsZHNba11dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dID0gcG9zdGluZ1xuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW4gZW50cnkgZm9yIHRoaXMgdGVybS9maWVsZE5hbWUvZG9jUmVmIHRvIHRoZSBpbnZlcnRlZEluZGV4XG4gICAgICBpZiAodGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dW2ZpZWxkTmFtZV1bZG9jUmVmXSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgYWxsIHdoaXRlbGlzdGVkIG1ldGFkYXRhIGFib3V0IHRoaXMgdG9rZW4gaW4gdGhlXG4gICAgICAvLyBpbnZlcnRlZCBpbmRleFxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCB0aGlzLm1ldGFkYXRhV2hpdGVsaXN0Lmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBtZXRhZGF0YUtleSA9IHRoaXMubWV0YWRhdGFXaGl0ZWxpc3RbbF0sXG4gICAgICAgICAgICBtZXRhZGF0YSA9IHRlcm0ubWV0YWRhdGFbbWV0YWRhdGFLZXldXG5cbiAgICAgICAgaWYgKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXVtmaWVsZE5hbWVdW2RvY1JlZl1bbWV0YWRhdGFLZXldLnB1c2gobWV0YWRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBhdmVyYWdlIGRvY3VtZW50IGxlbmd0aCBmb3IgdGhpcyBpbmRleFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocyA9IGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZExlbmd0aHMpLFxuICAgICAgbnVtYmVyT2ZGaWVsZHMgPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgYWNjdW11bGF0b3IgPSB7fSxcbiAgICAgIGRvY3VtZW50c1dpdGhGaWVsZCA9IHt9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkZpZWxkczsgaSsrKSB7XG4gICAgdmFyIGZpZWxkUmVmID0gbHVuci5GaWVsZFJlZi5mcm9tU3RyaW5nKGZpZWxkUmVmc1tpXSksXG4gICAgICAgIGZpZWxkID0gZmllbGRSZWYuZmllbGROYW1lXG5cbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdIHx8IChkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdID0gMClcbiAgICBkb2N1bWVudHNXaXRoRmllbGRbZmllbGRdICs9IDFcblxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkXSB8fCAoYWNjdW11bGF0b3JbZmllbGRdID0gMClcbiAgICBhY2N1bXVsYXRvcltmaWVsZF0gKz0gdGhpcy5maWVsZExlbmd0aHNbZmllbGRSZWZdXG4gIH1cblxuICB2YXIgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5fZmllbGRzKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkc1tpXVxuICAgIGFjY3VtdWxhdG9yW2ZpZWxkTmFtZV0gPSBhY2N1bXVsYXRvcltmaWVsZE5hbWVdIC8gZG9jdW1lbnRzV2l0aEZpZWxkW2ZpZWxkTmFtZV1cbiAgfVxuXG4gIHRoaXMuYXZlcmFnZUZpZWxkTGVuZ3RoID0gYWNjdW11bGF0b3Jcbn1cblxuLyoqXG4gKiBCdWlsZHMgYSB2ZWN0b3Igc3BhY2UgbW9kZWwgb2YgZXZlcnkgZG9jdW1lbnQgdXNpbmcgbHVuci5WZWN0b3JcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZUZpZWxkVmVjdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpZWxkVmVjdG9ycyA9IHt9LFxuICAgICAgZmllbGRSZWZzID0gT2JqZWN0LmtleXModGhpcy5maWVsZFRlcm1GcmVxdWVuY2llcyksXG4gICAgICBmaWVsZFJlZnNMZW5ndGggPSBmaWVsZFJlZnMubGVuZ3RoLFxuICAgICAgdGVybUlkZkNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRSZWZzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmllbGRSZWYgPSBsdW5yLkZpZWxkUmVmLmZyb21TdHJpbmcoZmllbGRSZWZzW2ldKSxcbiAgICAgICAgZmllbGROYW1lID0gZmllbGRSZWYuZmllbGROYW1lLFxuICAgICAgICBmaWVsZExlbmd0aCA9IHRoaXMuZmllbGRMZW5ndGhzW2ZpZWxkUmVmXSxcbiAgICAgICAgZmllbGRWZWN0b3IgPSBuZXcgbHVuci5WZWN0b3IsXG4gICAgICAgIHRlcm1GcmVxdWVuY2llcyA9IHRoaXMuZmllbGRUZXJtRnJlcXVlbmNpZXNbZmllbGRSZWZdLFxuICAgICAgICB0ZXJtcyA9IE9iamVjdC5rZXlzKHRlcm1GcmVxdWVuY2llcyksXG4gICAgICAgIHRlcm1zTGVuZ3RoID0gdGVybXMubGVuZ3RoXG5cblxuICAgIHZhciBmaWVsZEJvb3N0ID0gdGhpcy5fZmllbGRzW2ZpZWxkTmFtZV0uYm9vc3QgfHwgMSxcbiAgICAgICAgZG9jQm9vc3QgPSB0aGlzLl9kb2N1bWVudHNbZmllbGRSZWYuZG9jUmVmXS5ib29zdCB8fCAxXG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlcm1zTGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciB0ZXJtID0gdGVybXNbal0sXG4gICAgICAgICAgdGYgPSB0ZXJtRnJlcXVlbmNpZXNbdGVybV0sXG4gICAgICAgICAgdGVybUluZGV4ID0gdGhpcy5pbnZlcnRlZEluZGV4W3Rlcm1dLl9pbmRleCxcbiAgICAgICAgICBpZGYsIHNjb3JlLCBzY29yZVdpdGhQcmVjaXNpb25cblxuICAgICAgaWYgKHRlcm1JZGZDYWNoZVt0ZXJtXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlkZiA9IGx1bnIuaWRmKHRoaXMuaW52ZXJ0ZWRJbmRleFt0ZXJtXSwgdGhpcy5kb2N1bWVudENvdW50KVxuICAgICAgICB0ZXJtSWRmQ2FjaGVbdGVybV0gPSBpZGZcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkZiA9IHRlcm1JZGZDYWNoZVt0ZXJtXVxuICAgICAgfVxuXG4gICAgICBzY29yZSA9IGlkZiAqICgodGhpcy5fazEgKyAxKSAqIHRmKSAvICh0aGlzLl9rMSAqICgxIC0gdGhpcy5fYiArIHRoaXMuX2IgKiAoZmllbGRMZW5ndGggLyB0aGlzLmF2ZXJhZ2VGaWVsZExlbmd0aFtmaWVsZE5hbWVdKSkgKyB0ZilcbiAgICAgIHNjb3JlICo9IGZpZWxkQm9vc3RcbiAgICAgIHNjb3JlICo9IGRvY0Jvb3N0XG4gICAgICBzY29yZVdpdGhQcmVjaXNpb24gPSBNYXRoLnJvdW5kKHNjb3JlICogMTAwMCkgLyAxMDAwXG4gICAgICAvLyBDb252ZXJ0cyAxLjIzNDU2Nzg5IHRvIDEuMjM0LlxuICAgICAgLy8gUmVkdWNpbmcgdGhlIHByZWNpc2lvbiBzbyB0aGF0IHRoZSB2ZWN0b3JzIHRha2UgdXAgbGVzc1xuICAgICAgLy8gc3BhY2Ugd2hlbiBzZXJpYWxpc2VkLiBEb2luZyBpdCBub3cgc28gdGhhdCB0aGV5IGJlaGF2ZVxuICAgICAgLy8gdGhlIHNhbWUgYmVmb3JlIGFuZCBhZnRlciBzZXJpYWxpc2F0aW9uLiBBbHNvLCB0aGlzIGlzXG4gICAgICAvLyB0aGUgZmFzdGVzdCBhcHByb2FjaCB0byByZWR1Y2luZyBhIG51bWJlcidzIHByZWNpc2lvbiBpblxuICAgICAgLy8gSmF2YVNjcmlwdC5cblxuICAgICAgZmllbGRWZWN0b3IuaW5zZXJ0KHRlcm1JbmRleCwgc2NvcmVXaXRoUHJlY2lzaW9uKVxuICAgIH1cblxuICAgIGZpZWxkVmVjdG9yc1tmaWVsZFJlZl0gPSBmaWVsZFZlY3RvclxuICB9XG5cbiAgdGhpcy5maWVsZFZlY3RvcnMgPSBmaWVsZFZlY3RvcnNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9rZW4gc2V0IG9mIGFsbCB0b2tlbnMgaW4gdGhlIGluZGV4IHVzaW5nIGx1bnIuVG9rZW5TZXRcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5sdW5yLkJ1aWxkZXIucHJvdG90eXBlLmNyZWF0ZVRva2VuU2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2VuU2V0ID0gbHVuci5Ub2tlblNldC5mcm9tQXJyYXkoXG4gICAgT2JqZWN0LmtleXModGhpcy5pbnZlcnRlZEluZGV4KS5zb3J0KClcbiAgKVxufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgaW5kZXgsIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGx1bnIuSW5kZXguXG4gKlxuICogVGhpcyBjb21wbGV0ZXMgdGhlIGluZGV4aW5nIHByb2Nlc3MgYW5kIHNob3VsZCBvbmx5IGJlIGNhbGxlZFxuICogb25jZSBhbGwgZG9jdW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgaW5kZXguXG4gKlxuICogQHJldHVybnMge2x1bnIuSW5kZXh9XG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2FsY3VsYXRlQXZlcmFnZUZpZWxkTGVuZ3RocygpXG4gIHRoaXMuY3JlYXRlRmllbGRWZWN0b3JzKClcbiAgdGhpcy5jcmVhdGVUb2tlblNldCgpXG5cbiAgcmV0dXJuIG5ldyBsdW5yLkluZGV4KHtcbiAgICBpbnZlcnRlZEluZGV4OiB0aGlzLmludmVydGVkSW5kZXgsXG4gICAgZmllbGRWZWN0b3JzOiB0aGlzLmZpZWxkVmVjdG9ycyxcbiAgICB0b2tlblNldDogdGhpcy50b2tlblNldCxcbiAgICBmaWVsZHM6IE9iamVjdC5rZXlzKHRoaXMuX2ZpZWxkcyksXG4gICAgcGlwZWxpbmU6IHRoaXMuc2VhcmNoUGlwZWxpbmVcbiAgfSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGx1Z2luIHRvIHRoZSBpbmRleCBidWlsZGVyLlxuICpcbiAqIEEgcGx1Z2luIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgaW5kZXggYnVpbGRlciBhcyBpdHMgY29udGV4dC5cbiAqIFBsdWdpbnMgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXNlIG9yIGV4dGVuZCB0aGUgYmVoYXZpb3VyIG9mIHRoZSBpbmRleFxuICogaW4gc29tZSB3YXkuIEEgcGx1Z2luIGlzIGp1c3QgYSBmdW5jdGlvbiwgdGhhdCBlbmNhcHN1bGF0ZWQgdGhlIGN1c3RvbVxuICogYmVoYXZpb3VyIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgd2hlbiBidWlsZGluZyB0aGUgaW5kZXguXG4gKlxuICogVGhlIHBsdWdpbiBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBpbmRleCBidWlsZGVyIGFzIGl0cyBhcmd1bWVudCwgYWRkaXRpb25hbFxuICogYXJndW1lbnRzIGNhbiBhbHNvIGJlIHBhc3NlZCB3aGVuIGNhbGxpbmcgdXNlLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIGluZGV4IGJ1aWxkZXIgYXMgaXRzIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luIFRoZSBwbHVnaW4gdG8gYXBwbHkuXG4gKi9cbmx1bnIuQnVpbGRlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICBhcmdzLnVuc2hpZnQodGhpcylcbiAgZm4uYXBwbHkodGhpcywgYXJncylcbn1cbi8qKlxuICogQ29udGFpbnMgYW5kIGNvbGxlY3RzIG1ldGFkYXRhIGFib3V0IGEgbWF0Y2hpbmcgZG9jdW1lbnQuXG4gKiBBIHNpbmdsZSBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSBpcyByZXR1cm5lZCBhcyBwYXJ0IG9mIGV2ZXJ5XG4gKiBsdW5yLkluZGV4flJlc3VsdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKiBAcHJvcGVydHkge29iamVjdH0gbWV0YWRhdGEgLSBBIGNsb25lZCBjb2xsZWN0aW9uIG9mIG1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRvY3VtZW50LlxuICogQHNlZSB7QGxpbmsgbHVuci5JbmRleH5SZXN1bHR9XG4gKi9cbmx1bnIuTWF0Y2hEYXRhID0gZnVuY3Rpb24gKHRlcm0sIGZpZWxkLCBtZXRhZGF0YSkge1xuICB2YXIgY2xvbmVkTWV0YWRhdGEgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAgbWV0YWRhdGFLZXlzID0gT2JqZWN0LmtleXMobWV0YWRhdGEgfHwge30pXG5cbiAgLy8gQ2xvbmluZyB0aGUgbWV0YWRhdGEgdG8gcHJldmVudCB0aGUgb3JpZ2luYWxcbiAgLy8gYmVpbmcgbXV0YXRlZCBkdXJpbmcgbWF0Y2ggZGF0YSBjb21iaW5hdGlvbi5cbiAgLy8gTWV0YWRhdGEgaXMga2VwdCBpbiBhbiBhcnJheSB3aXRoaW4gdGhlIGludmVydGVkXG4gIC8vIGluZGV4IHNvIGNsb25pbmcgdGhlIGRhdGEgY2FuIGJlIGRvbmUgd2l0aFxuICAvLyBBcnJheSNzbGljZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFkYXRhS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBtZXRhZGF0YUtleXNbaV1cbiAgICBjbG9uZWRNZXRhZGF0YVtrZXldID0gbWV0YWRhdGFba2V5XS5zbGljZSgpXG4gIH1cblxuICB0aGlzLm1ldGFkYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gY2xvbmVkTWV0YWRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGx1bnIuTWF0Y2hEYXRhIHdpbGwgYmUgY3JlYXRlZCBmb3IgZXZlcnkgdGVybSB0aGF0IG1hdGNoZXMgYVxuICogZG9jdW1lbnQuIEhvd2V2ZXIgb25seSBvbmUgaW5zdGFuY2UgaXMgcmVxdWlyZWQgaW4gYSBsdW5yLkluZGV4flJlc3VsdC4gVGhpc1xuICogbWV0aG9kIGNvbWJpbmVzIG1ldGFkYXRhIGZyb20gYW5vdGhlciBpbnN0YW5jZSBvZiBsdW5yLk1hdGNoRGF0YSB3aXRoIHRoaXNcbiAqIG9iamVjdHMgbWV0YWRhdGEuXG4gKlxuICogQHBhcmFtIHtsdW5yLk1hdGNoRGF0YX0gb3RoZXJNYXRjaERhdGEgLSBBbm90aGVyIGluc3RhbmNlIG9mIG1hdGNoIGRhdGEgdG8gbWVyZ2Ugd2l0aCB0aGlzIG9uZS5cbiAqIEBzZWUge0BsaW5rIGx1bnIuSW5kZXh+UmVzdWx0fVxuICovXG5sdW5yLk1hdGNoRGF0YS5wcm90b3R5cGUuY29tYmluZSA9IGZ1bmN0aW9uIChvdGhlck1hdGNoRGF0YSkge1xuICB2YXIgdGVybXMgPSBPYmplY3Qua2V5cyhvdGhlck1hdGNoRGF0YS5tZXRhZGF0YSlcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRlcm0gPSB0ZXJtc1tpXSxcbiAgICAgICAgZmllbGRzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV0pXG5cbiAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tqXSxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdKVxuXG4gICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IGtleXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNba11cblxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gb3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXVtrZXldID0gdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XS5jb25jYXQob3RoZXJNYXRjaERhdGEubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCBtZXRhZGF0YSBmb3IgYSB0ZXJtL2ZpZWxkIHBhaXIgdG8gdGhpcyBpbnN0YW5jZSBvZiBtYXRjaCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXJtIC0gVGhlIHRlcm0gdGhpcyBtYXRjaCBkYXRhIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIC0gVGhlIGZpZWxkIGluIHdoaWNoIHRoZSB0ZXJtIHdhcyBmb3VuZFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIC0gVGhlIG1ldGFkYXRhIHJlY29yZGVkIGFib3V0IHRoaXMgdGVybSBpbiB0aGlzIGZpZWxkXG4gKi9cbmx1bnIuTWF0Y2hEYXRhLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGVybSwgZmllbGQsIG1ldGFkYXRhKSB7XG4gIGlmICghKHRlcm0gaW4gdGhpcy5tZXRhZGF0YSkpIHtcbiAgICB0aGlzLm1ldGFkYXRhW3Rlcm1dID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdID0gbWV0YWRhdGFcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghKGZpZWxkIGluIHRoaXMubWV0YWRhdGFbdGVybV0pKSB7XG4gICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF0gPSBtZXRhZGF0YVxuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIG1ldGFkYXRhS2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YWRhdGFLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG1ldGFkYXRhS2V5c1tpXVxuXG4gICAgaWYgKGtleSBpbiB0aGlzLm1ldGFkYXRhW3Rlcm1dW2ZpZWxkXSkge1xuICAgICAgdGhpcy5tZXRhZGF0YVt0ZXJtXVtmaWVsZF1ba2V5XSA9IHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0uY29uY2F0KG1ldGFkYXRhW2tleV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YWRhdGFbdGVybV1bZmllbGRdW2tleV0gPSBtZXRhZGF0YVtrZXldXG4gICAgfVxuICB9XG59XG4vKipcbiAqIEEgbHVuci5RdWVyeSBwcm92aWRlcyBhIHByb2dyYW1tYXRpYyB3YXkgb2YgZGVmaW5pbmcgcXVlcmllcyB0byBiZSBwZXJmb3JtZWRcbiAqIGFnYWluc3QgYSB7QGxpbmsgbHVuci5JbmRleH0uXG4gKlxuICogUHJlZmVyIGNvbnN0cnVjdGluZyBhIGx1bnIuUXVlcnkgdXNpbmcgdGhlIHtAbGluayBsdW5yLkluZGV4I3F1ZXJ5fSBtZXRob2RcbiAqIHNvIHRoZSBxdWVyeSBvYmplY3QgaXMgcHJlLWluaXRpYWxpemVkIHdpdGggdGhlIHJpZ2h0IGluZGV4IGZpZWxkcy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcm9wZXJ0eSB7bHVuci5RdWVyeX5DbGF1c2VbXX0gY2xhdXNlcyAtIEFuIGFycmF5IG9mIHF1ZXJ5IGNsYXVzZXMuXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBhbGxGaWVsZHMgLSBBbiBhcnJheSBvZiBhbGwgYXZhaWxhYmxlIGZpZWxkcyBpbiBhIGx1bnIuSW5kZXguXG4gKi9cbmx1bnIuUXVlcnkgPSBmdW5jdGlvbiAoYWxsRmllbGRzKSB7XG4gIHRoaXMuY2xhdXNlcyA9IFtdXG4gIHRoaXMuYWxsRmllbGRzID0gYWxsRmllbGRzXG59XG5cbi8qKlxuICogQ29uc3RhbnRzIGZvciBpbmRpY2F0aW5nIHdoYXQga2luZCBvZiBhdXRvbWF0aWMgd2lsZGNhcmQgaW5zZXJ0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIGNvbnN0cnVjdGluZyBhIHF1ZXJ5IGNsYXVzZS5cbiAqXG4gKiBUaGlzIGFsbG93cyB3aWxkY2FyZHMgdG8gYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgdGVybSB3aXRob3V0IGhhdmluZyB0byBtYW51YWxseSBkbyBhbnkgc3RyaW5nXG4gKiBjb25jYXRlbmF0aW9uLlxuICpcbiAqIFRoZSB3aWxkY2FyZCBjb25zdGFudHMgY2FuIGJlIGJpdHdpc2UgY29tYmluZWQgdG8gc2VsZWN0IGJvdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2lsZGNhcmRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGRlZmF1bHRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5OT05FIC0gVGhlIHRlcm0gd2lsbCBoYXZlIG5vIHdpbGRjYXJkcyBpbnNlcnRlZCwgdGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvdXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5MRUFESU5HIC0gUHJlcGVuZCB0aGUgdGVybSB3aXRoIGEgd2lsZGNhcmQsIHVubGVzcyBhIGxlYWRpbmcgd2lsZGNhcmQgYWxyZWFkeSBleGlzdHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWxkY2FyZC5UUkFJTElORyAtIEFwcGVuZCBhIHdpbGRjYXJkIHRvIHRoZSB0ZXJtLCB1bmxlc3MgYSB0cmFpbGluZyB3aWxkY2FyZCBhbHJlYWR5IGV4aXN0c1xuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I2NsYXVzZVxuICogQHNlZSBsdW5yLlF1ZXJ5I3Rlcm1cbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHsgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkcgfSlcbiAqIEBleGFtcGxlIDxjYXB0aW9uPnF1ZXJ5IHRlcm0gd2l0aCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oJ2ZvbycsIHtcbiAqICAgd2lsZGNhcmQ6IGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORyB8IGx1bnIuUXVlcnkud2lsZGNhcmQuVFJBSUxJTkdcbiAqIH0pXG4gKi9cblxubHVuci5RdWVyeS53aWxkY2FyZCA9IG5ldyBTdHJpbmcgKFwiKlwiKVxubHVuci5RdWVyeS53aWxkY2FyZC5OT05FID0gMFxubHVuci5RdWVyeS53aWxkY2FyZC5MRUFESU5HID0gMVxubHVuci5RdWVyeS53aWxkY2FyZC5UUkFJTElORyA9IDJcblxuLyoqXG4gKiBDb25zdGFudHMgZm9yIGluZGljYXRpbmcgd2hhdCBraW5kIG9mIHByZXNlbmNlIGEgdGVybSBtdXN0IGhhdmUgaW4gbWF0Y2hpbmcgZG9jdW1lbnRzLlxuICpcbiAqIEBjb25zdGFudFxuICogQGVudW0ge251bWJlcn1cbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeSN0ZXJtXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5xdWVyeSB0ZXJtIHdpdGggcmVxdWlyZWQgcHJlc2VuY2U8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKCdmb28nLCB7IHByZXNlbmNlOiBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEIH0pXG4gKi9cbmx1bnIuUXVlcnkucHJlc2VuY2UgPSB7XG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyBvcHRpb25hbCwgdGhpcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIE9QVElPTkFMOiAxLFxuXG4gIC8qKlxuICAgKiBUZXJtJ3MgcHJlc2VuY2UgaW4gYSBkb2N1bWVudCBpcyByZXF1aXJlZCwgZG9jdW1lbnRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUkVRVUlSRUQ6IDIsXG5cbiAgLyoqXG4gICAqIFRlcm0ncyBwcmVzZW5jZSBpbiBhIGRvY3VtZW50IGlzIHByb2hpYml0ZWQsIGRvY3VtZW50cyB0aGF0IGRvIGNvbnRhaW5cbiAgICogdGhpcyB0ZXJtIHdpbGwgbm90IGJlIHJldHVybmVkLlxuICAgKi9cbiAgUFJPSElCSVRFRDogM1xufVxuXG4vKipcbiAqIEEgc2luZ2xlIGNsYXVzZSBpbiBhIHtAbGluayBsdW5yLlF1ZXJ5fSBjb250YWlucyBhIHRlcm0gYW5kIGRldGFpbHMgb24gaG93IHRvXG4gKiBtYXRjaCB0aGF0IHRlcm0gYWdhaW5zdCBhIHtAbGluayBsdW5yLkluZGV4fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZmllbGRzIC0gVGhlIGZpZWxkcyBpbiBhbiBpbmRleCB0aGlzIGNsYXVzZSBzaG91bGQgYmUgbWF0Y2hlZCBhZ2FpbnN0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtib29zdD0xXSAtIEFueSBib29zdCB0aGF0IHNob3VsZCBiZSBhcHBsaWVkIHdoZW4gbWF0Y2hpbmcgdGhpcyBjbGF1c2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VkaXREaXN0YW5jZV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIGZ1enp5IG1hdGNoaW5nIGFwcGxpZWQsIGFuZCBob3cgZnV6enkgdGhlIG1hdGNoIHNob3VsZCBiZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3VzZVBpcGVsaW5lXSAtIFdoZXRoZXIgdGhlIHRlcm0gc2hvdWxkIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSBzZWFyY2ggcGlwZWxpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpbGRjYXJkPWx1bnIuUXVlcnkud2lsZGNhcmQuTk9ORV0gLSBXaGV0aGVyIHRoZSB0ZXJtIHNob3VsZCBoYXZlIHdpbGRjYXJkcyBhcHBlbmRlZCBvciBwcmVwZW5kZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ByZXNlbmNlPWx1bnIuUXVlcnkucHJlc2VuY2UuT1BUSU9OQUxdIC0gVGhlIHRlcm1zIHByZXNlbmNlIGluIGFueSBtYXRjaGluZyBkb2N1bWVudHMuXG4gKi9cblxuLyoqXG4gKiBBZGRzIGEge0BsaW5rIGx1bnIuUXVlcnl+Q2xhdXNlfSB0byB0aGlzIHF1ZXJ5LlxuICpcbiAqIFVubGVzcyB0aGUgY2xhdXNlIGNvbnRhaW5zIHRoZSBmaWVsZHMgdG8gYmUgbWF0Y2hlZCBhbGwgZmllbGRzIHdpbGwgYmUgbWF0Y2hlZC4gSW4gYWRkaXRpb25cbiAqIGEgZGVmYXVsdCBib29zdCBvZiAxIGlzIGFwcGxpZWQgdG8gdGhlIGNsYXVzZS5cbiAqXG4gKiBAcGFyYW0ge2x1bnIuUXVlcnl+Q2xhdXNlfSBjbGF1c2UgLSBUaGUgY2xhdXNlIHRvIGFkZCB0byB0aGlzIHF1ZXJ5LlxuICogQHNlZSBsdW5yLlF1ZXJ5fkNsYXVzZVxuICogQHJldHVybnMge2x1bnIuUXVlcnl9XG4gKi9cbmx1bnIuUXVlcnkucHJvdG90eXBlLmNsYXVzZSA9IGZ1bmN0aW9uIChjbGF1c2UpIHtcbiAgaWYgKCEoJ2ZpZWxkcycgaW4gY2xhdXNlKSkge1xuICAgIGNsYXVzZS5maWVsZHMgPSB0aGlzLmFsbEZpZWxkc1xuICB9XG5cbiAgaWYgKCEoJ2Jvb3N0JyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLmJvb3N0ID0gMVxuICB9XG5cbiAgaWYgKCEoJ3VzZVBpcGVsaW5lJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnVzZVBpcGVsaW5lID0gdHJ1ZVxuICB9XG5cbiAgaWYgKCEoJ3dpbGRjYXJkJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLndpbGRjYXJkID0gbHVuci5RdWVyeS53aWxkY2FyZC5OT05FXG4gIH1cblxuICBpZiAoKGNsYXVzZS53aWxkY2FyZCAmIGx1bnIuUXVlcnkud2lsZGNhcmQuTEVBRElORykgJiYgKGNsYXVzZS50ZXJtLmNoYXJBdCgwKSAhPSBsdW5yLlF1ZXJ5LndpbGRjYXJkKSkge1xuICAgIGNsYXVzZS50ZXJtID0gXCIqXCIgKyBjbGF1c2UudGVybVxuICB9XG5cbiAgaWYgKChjbGF1c2Uud2lsZGNhcmQgJiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HKSAmJiAoY2xhdXNlLnRlcm0uc2xpY2UoLTEpICE9IGx1bnIuUXVlcnkud2lsZGNhcmQpKSB7XG4gICAgY2xhdXNlLnRlcm0gPSBcIlwiICsgY2xhdXNlLnRlcm0gKyBcIipcIlxuICB9XG5cbiAgaWYgKCEoJ3ByZXNlbmNlJyBpbiBjbGF1c2UpKSB7XG4gICAgY2xhdXNlLnByZXNlbmNlID0gbHVuci5RdWVyeS5wcmVzZW5jZS5PUFRJT05BTFxuICB9XG5cbiAgdGhpcy5jbGF1c2VzLnB1c2goY2xhdXNlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQSBuZWdhdGVkIHF1ZXJ5IGlzIG9uZSBpbiB3aGljaCBldmVyeSBjbGF1c2UgaGFzIGEgcHJlc2VuY2Ugb2ZcbiAqIHByb2hpYml0ZWQuIFRoZXNlIHF1ZXJpZXMgcmVxdWlyZSBzb21lIHNwZWNpYWwgcHJvY2Vzc2luZyB0byByZXR1cm5cbiAqIHRoZSBleHBlY3RlZCByZXN1bHRzLlxuICpcbiAqIEByZXR1cm5zIGJvb2xlYW5cbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUuaXNOZWdhdGVkID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2xhdXNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLmNsYXVzZXNbaV0ucHJlc2VuY2UgIT0gbHVuci5RdWVyeS5wcmVzZW5jZS5QUk9ISUJJVEVEKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKipcbiAqIEFkZHMgYSB0ZXJtIHRvIHRoZSBjdXJyZW50IHF1ZXJ5LCB1bmRlciB0aGUgY292ZXJzIHRoaXMgd2lsbCBjcmVhdGUgYSB7QGxpbmsgbHVuci5RdWVyeX5DbGF1c2V9XG4gKiB0byB0aGUgbGlzdCBvZiBjbGF1c2VzIHRoYXQgbWFrZSB1cCB0aGlzIHF1ZXJ5LlxuICpcbiAqIFRoZSB0ZXJtIGlzIHVzZWQgYXMgaXMsIGkuZS4gbm8gdG9rZW5pemF0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIGJ5IHRoaXMgbWV0aG9kLiBJbnN0ZWFkIGNvbnZlcnNpb25cbiAqIHRvIGEgdG9rZW4gb3IgdG9rZW4tbGlrZSBzdHJpbmcgc2hvdWxkIGJlIGRvbmUgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuXG4gKlxuICogVGhlIHRlcm0gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgYnkgY2FsbGluZyBgdG9TdHJpbmdgLiBNdWx0aXBsZSB0ZXJtcyBjYW4gYmUgcGFzc2VkIGFzIGFuXG4gKiBhcnJheSwgZWFjaCB0ZXJtIGluIHRoZSBhcnJheSB3aWxsIHNoYXJlIHRoZSBzYW1lIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119IHRlcm0gLSBUaGUgdGVybShzKSB0byBhZGQgdG8gdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIEFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBxdWVyeSBjbGF1c2UuXG4gKiBAcmV0dXJucyB7bHVuci5RdWVyeX1cbiAqIEBzZWUgbHVuci5RdWVyeSNjbGF1c2VcbiAqIEBzZWUgbHVuci5RdWVyeX5DbGF1c2VcbiAqIEBleGFtcGxlIDxjYXB0aW9uPmFkZGluZyBhIHNpbmdsZSB0ZXJtIHRvIGEgcXVlcnk8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKFwiZm9vXCIpXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5hZGRpbmcgYSBzaW5nbGUgdGVybSB0byBhIHF1ZXJ5IGFuZCBzcGVjaWZ5aW5nIHNlYXJjaCBmaWVsZHMsIHRlcm0gYm9vc3QgYW5kIGF1dG9tYXRpYyB0cmFpbGluZyB3aWxkY2FyZDwvY2FwdGlvbj5cbiAqIHF1ZXJ5LnRlcm0oXCJmb29cIiwge1xuICogICBmaWVsZHM6IFtcInRpdGxlXCJdLFxuICogICBib29zdDogMTAsXG4gKiAgIHdpbGRjYXJkOiBsdW5yLlF1ZXJ5LndpbGRjYXJkLlRSQUlMSU5HXG4gKiB9KVxuICogQGV4YW1wbGUgPGNhcHRpb24+dXNpbmcgbHVuci50b2tlbml6ZXIgdG8gY29udmVydCBhIHN0cmluZyB0byB0b2tlbnMgYmVmb3JlIHVzaW5nIHRoZW0gYXMgdGVybXM8L2NhcHRpb24+XG4gKiBxdWVyeS50ZXJtKGx1bnIudG9rZW5pemVyKFwiZm9vIGJhclwiKSlcbiAqL1xubHVuci5RdWVyeS5wcm90b3R5cGUudGVybSA9IGZ1bmN0aW9uICh0ZXJtLCBvcHRpb25zKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlcm0pKSB7XG4gICAgdGVybS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7IHRoaXMudGVybSh0LCBsdW5yLnV0aWxzLmNsb25lKG9wdGlvbnMpKSB9LCB0aGlzKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB2YXIgY2xhdXNlID0gb3B0aW9ucyB8fCB7fVxuICBjbGF1c2UudGVybSA9IHRlcm0udG9TdHJpbmcoKVxuXG4gIHRoaXMuY2xhdXNlKGNsYXVzZSlcblxuICByZXR1cm4gdGhpc1xufVxubHVuci5RdWVyeVBhcnNlRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3RhcnQsIGVuZCkge1xuICB0aGlzLm5hbWUgPSBcIlF1ZXJ5UGFyc2VFcnJvclwiXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgdGhpcy5zdGFydCA9IHN0YXJ0XG4gIHRoaXMuZW5kID0gZW5kXG59XG5cbmx1bnIuUXVlcnlQYXJzZUVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvclxubHVuci5RdWVyeUxleGVyID0gZnVuY3Rpb24gKHN0cikge1xuICB0aGlzLmxleGVtZXMgPSBbXVxuICB0aGlzLnN0ciA9IHN0clxuICB0aGlzLmxlbmd0aCA9IHN0ci5sZW5ndGhcbiAgdGhpcy5wb3MgPSAwXG4gIHRoaXMuc3RhcnQgPSAwXG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucyA9IFtdXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLnNsaWNlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3ViU2xpY2VzID0gW10sXG4gICAgICBzbGljZVN0YXJ0ID0gdGhpcy5zdGFydCxcbiAgICAgIHNsaWNlRW5kID0gdGhpcy5wb3NcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNsaWNlRW5kID0gdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zW2ldXG4gICAgc3ViU2xpY2VzLnB1c2godGhpcy5zdHIuc2xpY2Uoc2xpY2VTdGFydCwgc2xpY2VFbmQpKVxuICAgIHNsaWNlU3RhcnQgPSBzbGljZUVuZCArIDFcbiAgfVxuXG4gIHN1YlNsaWNlcy5wdXNoKHRoaXMuc3RyLnNsaWNlKHNsaWNlU3RhcnQsIHRoaXMucG9zKSlcbiAgdGhpcy5lc2NhcGVDaGFyUG9zaXRpb25zLmxlbmd0aCA9IDBcblxuICByZXR1cm4gc3ViU2xpY2VzLmpvaW4oJycpXG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHRoaXMubGV4ZW1lcy5wdXNoKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN0cjogdGhpcy5zbGljZVN0cmluZygpLFxuICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgIGVuZDogdGhpcy5wb3NcbiAgfSlcblxuICB0aGlzLnN0YXJ0ID0gdGhpcy5wb3Ncbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5lc2NhcGVDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZXNjYXBlQ2hhclBvc2l0aW9ucy5wdXNoKHRoaXMucG9zIC0gMSlcbiAgdGhpcy5wb3MgKz0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIuRU9TXG4gIH1cblxuICB2YXIgY2hhciA9IHRoaXMuc3RyLmNoYXJBdCh0aGlzLnBvcylcbiAgdGhpcy5wb3MgKz0gMVxuICByZXR1cm4gY2hhclxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgLSB0aGlzLnN0YXJ0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5wcm90b3R5cGUuaWdub3JlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdGFydCA9PSB0aGlzLnBvcykge1xuICAgIHRoaXMucG9zICs9IDFcbiAgfVxuXG4gIHRoaXMuc3RhcnQgPSB0aGlzLnBvc1xufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmJhY2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb3MgLT0gMVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIucHJvdG90eXBlLmFjY2VwdERpZ2l0UnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hhciwgY2hhckNvZGVcblxuICBkbyB7XG4gICAgY2hhciA9IHRoaXMubmV4dCgpXG4gICAgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMClcbiAgfSB3aGlsZSAoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KVxuXG4gIGlmIChjaGFyICE9IGx1bnIuUXVlcnlMZXhlci5FT1MpIHtcbiAgICB0aGlzLmJhY2t1cCgpXG4gIH1cbn1cblxubHVuci5RdWVyeUxleGVyLnByb3RvdHlwZS5tb3JlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wb3MgPCB0aGlzLmxlbmd0aFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIuRU9TID0gJ0VPUydcbmx1bnIuUXVlcnlMZXhlci5GSUVMRCA9ICdGSUVMRCdcbmx1bnIuUXVlcnlMZXhlci5URVJNID0gJ1RFUk0nXG5sdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSA9ICdFRElUX0RJU1RBTkNFJ1xubHVuci5RdWVyeUxleGVyLkJPT1NUID0gJ0JPT1NUJ1xubHVuci5RdWVyeUxleGVyLlBSRVNFTkNFID0gJ1BSRVNFTkNFJ1xuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RmllbGQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgbGV4ZXIuYmFja3VwKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQpXG4gIGxleGVyLmlnbm9yZSgpXG4gIHJldHVybiBsdW5yLlF1ZXJ5TGV4ZXIubGV4VGV4dFxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4VGVybSA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDEpIHtcbiAgICBsZXhlci5iYWNrdXAoKVxuICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gIH1cblxuICBsZXhlci5pZ25vcmUoKVxuXG4gIGlmIChsZXhlci5tb3JlKCkpIHtcbiAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5TGV4ZXIubGV4RWRpdERpc3RhbmNlID0gZnVuY3Rpb24gKGxleGVyKSB7XG4gIGxleGVyLmlnbm9yZSgpXG4gIGxleGVyLmFjY2VwdERpZ2l0UnVuKClcbiAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuRURJVF9ESVNUQU5DRSlcbiAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG59XG5cbmx1bnIuUXVlcnlMZXhlci5sZXhCb29zdCA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBsZXhlci5pZ25vcmUoKVxuICBsZXhlci5hY2NlcHREaWdpdFJ1bigpXG4gIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLkJPT1NUKVxuICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbn1cblxubHVuci5RdWVyeUxleGVyLmxleEVPUyA9IGZ1bmN0aW9uIChsZXhlcikge1xuICBpZiAobGV4ZXIud2lkdGgoKSA+IDApIHtcbiAgICBsZXhlci5lbWl0KGx1bnIuUXVlcnlMZXhlci5URVJNKVxuICB9XG59XG5cbi8vIFRoaXMgbWF0Y2hlcyB0aGUgc2VwYXJhdG9yIHVzZWQgd2hlbiB0b2tlbmlzaW5nIGZpZWxkc1xuLy8gd2l0aGluIGEgZG9jdW1lbnQuIFRoZXNlIHNob3VsZCBtYXRjaCBvdGhlcndpc2UgaXQgaXNcbi8vIG5vdCBwb3NzaWJsZSB0byBzZWFyY2ggZm9yIHNvbWUgdG9rZW5zIHdpdGhpbiBhIGRvY3VtZW50LlxuLy9cbi8vIEl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdXNlciB0byBjaGFuZ2UgdGhlIHNlcGFyYXRvciBvbiB0aGVcbi8vIHRva2VuaXplciBzbyBpdCBfbWlnaHRfIGNsYXNoIHdpdGggYW55IG90aGVyIG9mIHRoZSBzcGVjaWFsXG4vLyBjaGFyYWN0ZXJzIGFscmVhZHkgdXNlZCB3aXRoaW4gdGhlIHNlYXJjaCBzdHJpbmcsIGUuZy4gOi5cbi8vXG4vLyBUaGlzIG1lYW5zIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBzZXBhcmF0b3IgaW5cbi8vIHN1Y2ggYSB3YXkgdGhhdCBtYWtlcyBzb21lIHdvcmRzIHVuc2VhcmNoYWJsZSB1c2luZyBhIHNlYXJjaFxuLy8gc3RyaW5nLlxubHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IgPSBsdW5yLnRva2VuaXplci5zZXBhcmF0b3JcblxubHVuci5RdWVyeUxleGVyLmxleFRleHQgPSBmdW5jdGlvbiAobGV4ZXIpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgY2hhciA9IGxleGVyLm5leHQoKVxuXG4gICAgaWYgKGNoYXIgPT0gbHVuci5RdWVyeUxleGVyLkVPUykge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhFT1NcbiAgICB9XG5cbiAgICAvLyBFc2NhcGUgY2hhcmFjdGVyIGlzICdcXCdcbiAgICBpZiAoY2hhci5jaGFyQ29kZUF0KDApID09IDkyKSB7XG4gICAgICBsZXhlci5lc2NhcGVDaGFyYWN0ZXIoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoY2hhciA9PSBcIjpcIikge1xuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhGaWVsZFxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiflwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEVkaXREaXN0YW5jZVxuICAgIH1cblxuICAgIGlmIChjaGFyID09IFwiXlwiKSB7XG4gICAgICBsZXhlci5iYWNrdXAoKVxuICAgICAgaWYgKGxleGVyLndpZHRoKCkgPiAwKSB7XG4gICAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlRFUk0pXG4gICAgICB9XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleEJvb3N0XG4gICAgfVxuXG4gICAgLy8gXCIrXCIgaW5kaWNhdGVzIHRlcm0gcHJlc2VuY2UgaXMgcmVxdWlyZWRcbiAgICAvLyBjaGVja2luZyBmb3IgbGVuZ3RoIHRvIGVuc3VyZSB0aGF0IG9ubHlcbiAgICAvLyBsZWFkaW5nIFwiK1wiIGFyZSBjb25zaWRlcmVkXG4gICAgaWYgKGNoYXIgPT0gXCIrXCIgJiYgbGV4ZXIud2lkdGgoKSA9PT0gMSkge1xuICAgICAgbGV4ZXIuZW1pdChsdW5yLlF1ZXJ5TGV4ZXIuUFJFU0VOQ0UpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRleHRcbiAgICB9XG5cbiAgICAvLyBcIi1cIiBpbmRpY2F0ZXMgdGVybSBwcmVzZW5jZSBpcyBwcm9oaWJpdGVkXG4gICAgLy8gY2hlY2tpbmcgZm9yIGxlbmd0aCB0byBlbnN1cmUgdGhhdCBvbmx5XG4gICAgLy8gbGVhZGluZyBcIi1cIiBhcmUgY29uc2lkZXJlZFxuICAgIGlmIChjaGFyID09IFwiLVwiICYmIGxleGVyLndpZHRoKCkgPT09IDEpIHtcbiAgICAgIGxleGVyLmVtaXQobHVuci5RdWVyeUxleGVyLlBSRVNFTkNFKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlMZXhlci5sZXhUZXh0XG4gICAgfVxuXG4gICAgaWYgKGNoYXIubWF0Y2gobHVuci5RdWVyeUxleGVyLnRlcm1TZXBhcmF0b3IpKSB7XG4gICAgICByZXR1cm4gbHVuci5RdWVyeUxleGVyLmxleFRlcm1cbiAgICB9XG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIHF1ZXJ5KSB7XG4gIHRoaXMubGV4ZXIgPSBuZXcgbHVuci5RdWVyeUxleGVyIChzdHIpXG4gIHRoaXMucXVlcnkgPSBxdWVyeVxuICB0aGlzLmN1cnJlbnRDbGF1c2UgPSB7fVxuICB0aGlzLmxleGVtZUlkeCA9IDBcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGV4ZXIucnVuKClcbiAgdGhpcy5sZXhlbWVzID0gdGhpcy5sZXhlci5sZXhlbWVzXG5cbiAgdmFyIHN0YXRlID0gbHVuci5RdWVyeVBhcnNlci5wYXJzZUNsYXVzZVxuXG4gIHdoaWxlIChzdGF0ZSkge1xuICAgIHN0YXRlID0gc3RhdGUodGhpcylcbiAgfVxuXG4gIHJldHVybiB0aGlzLnF1ZXJ5XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLnBlZWtMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxleGVtZXNbdGhpcy5sZXhlbWVJZHhdXG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucHJvdG90eXBlLmNvbnN1bWVMZXhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZXhlbWUgPSB0aGlzLnBlZWtMZXhlbWUoKVxuICB0aGlzLmxleGVtZUlkeCArPSAxXG4gIHJldHVybiBsZXhlbWVcbn1cblxubHVuci5RdWVyeVBhcnNlci5wcm90b3R5cGUubmV4dENsYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbXBsZXRlZENsYXVzZSA9IHRoaXMuY3VycmVudENsYXVzZVxuICB0aGlzLnF1ZXJ5LmNsYXVzZShjb21wbGV0ZWRDbGF1c2UpXG4gIHRoaXMuY3VycmVudENsYXVzZSA9IHt9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VDbGF1c2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnR5cGUpIHtcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5URVJNOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VUZXJtXG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImV4cGVjdGVkIGVpdGhlciBhIGZpZWxkIG9yIGEgdGVybSwgZm91bmQgXCIgKyBsZXhlbWUudHlwZVxuXG4gICAgICBpZiAobGV4ZW1lLnN0ci5sZW5ndGggPj0gMSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gXCIgd2l0aCB2YWx1ZSAnXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2UgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobGV4ZW1lLnN0cikge1xuICAgIGNhc2UgXCItXCI6XG4gICAgICBwYXJzZXIuY3VycmVudENsYXVzZS5wcmVzZW5jZSA9IGx1bnIuUXVlcnkucHJlc2VuY2UuUFJPSElCSVRFRFxuICAgICAgYnJlYWtcbiAgICBjYXNlIFwiK1wiOlxuICAgICAgcGFyc2VyLmN1cnJlbnRDbGF1c2UucHJlc2VuY2UgPSBsdW5yLlF1ZXJ5LnByZXNlbmNlLlJFUVVJUkVEXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgcHJlc2VuY2Ugb3BlcmF0b3InXCIgKyBsZXhlbWUuc3RyICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgbm90aGluZ1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuRklFTEQ6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUZpZWxkXG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJleHBlY3RpbmcgdGVybSBvciBmaWVsZCwgZm91bmQgJ1wiICsgbmV4dExleGVtZS50eXBlICsgXCInXCJcbiAgICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBuZXh0TGV4ZW1lLnN0YXJ0LCBuZXh0TGV4ZW1lLmVuZClcbiAgfVxufVxuXG5sdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGQgPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwYXJzZXIucXVlcnkuYWxsRmllbGRzLmluZGV4T2YobGV4ZW1lLnN0cikgPT0gLTEpIHtcbiAgICB2YXIgcG9zc2libGVGaWVsZHMgPSBwYXJzZXIucXVlcnkuYWxsRmllbGRzLm1hcChmdW5jdGlvbiAoZikgeyByZXR1cm4gXCInXCIgKyBmICsgXCInXCIgfSkuam9pbignLCAnKSxcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJ1bnJlY29nbmlzZWQgZmllbGQgJ1wiICsgbGV4ZW1lLnN0ciArIFwiJywgcG9zc2libGUgZmllbGRzOiBcIiArIHBvc3NpYmxlRmllbGRzXG5cbiAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbGV4ZW1lLnN0YXJ0LCBsZXhlbWUuZW5kKVxuICB9XG5cbiAgcGFyc2VyLmN1cnJlbnRDbGF1c2UuZmllbGRzID0gW2xleGVtZS5zdHJdXG5cbiAgdmFyIG5leHRMZXhlbWUgPSBwYXJzZXIucGVla0xleGVtZSgpXG5cbiAgaWYgKG5leHRMZXhlbWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kIG5vdGhpbmdcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZXhwZWN0aW5nIHRlcm0sIGZvdW5kICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm0gPSBmdW5jdGlvbiAocGFyc2VyKSB7XG4gIHZhciBsZXhlbWUgPSBwYXJzZXIuY29uc3VtZUxleGVtZSgpXG5cbiAgaWYgKGxleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLnRlcm0gPSBsZXhlbWUuc3RyLnRvTG93ZXJDYXNlKClcblxuICBpZiAobGV4ZW1lLnN0ci5pbmRleE9mKFwiKlwiKSAhPSAtMSkge1xuICAgIHBhcnNlci5jdXJyZW50Q2xhdXNlLnVzZVBpcGVsaW5lID0gZmFsc2VcbiAgfVxuXG4gIHZhciBuZXh0TGV4ZW1lID0gcGFyc2VyLnBlZWtMZXhlbWUoKVxuXG4gIGlmIChuZXh0TGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHN3aXRjaCAobmV4dExleGVtZS50eXBlKSB7XG4gICAgY2FzZSBsdW5yLlF1ZXJ5TGV4ZXIuVEVSTTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlVGVybVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkZJRUxEOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VGaWVsZFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkVESVRfRElTVEFOQ0U6XG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZVxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLkJPT1NUOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdFxuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlBSRVNFTkNFOlxuICAgICAgcGFyc2VyLm5leHRDbGF1c2UoKVxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VQcmVzZW5jZVxuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJVbmV4cGVjdGVkIGxleGVtZSB0eXBlICdcIiArIG5leHRMZXhlbWUudHlwZSArIFwiJ1wiXG4gICAgICB0aHJvdyBuZXcgbHVuci5RdWVyeVBhcnNlRXJyb3IgKGVycm9yTWVzc2FnZSwgbmV4dExleGVtZS5zdGFydCwgbmV4dExleGVtZS5lbmQpXG4gIH1cbn1cblxubHVuci5RdWVyeVBhcnNlci5wYXJzZUVkaXREaXN0YW5jZSA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGVkaXREaXN0YW5jZSA9IHBhcnNlSW50KGxleGVtZS5zdHIsIDEwKVxuXG4gIGlmIChpc05hTihlZGl0RGlzdGFuY2UpKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiZWRpdCBkaXN0YW5jZSBtdXN0IGJlIG51bWVyaWNcIlxuICAgIHRocm93IG5ldyBsdW5yLlF1ZXJ5UGFyc2VFcnJvciAoZXJyb3JNZXNzYWdlLCBsZXhlbWUuc3RhcnQsIGxleGVtZS5lbmQpXG4gIH1cblxuICBwYXJzZXIuY3VycmVudENsYXVzZS5lZGl0RGlzdGFuY2UgPSBlZGl0RGlzdGFuY2VcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbmx1bnIuUXVlcnlQYXJzZXIucGFyc2VCb29zdCA9IGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgdmFyIGxleGVtZSA9IHBhcnNlci5jb25zdW1lTGV4ZW1lKClcblxuICBpZiAobGV4ZW1lID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJvb3N0ID0gcGFyc2VJbnQobGV4ZW1lLnN0ciwgMTApXG5cbiAgaWYgKGlzTmFOKGJvb3N0KSkge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcImJvb3N0IG11c3QgYmUgbnVtZXJpY1wiXG4gICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIGxleGVtZS5zdGFydCwgbGV4ZW1lLmVuZClcbiAgfVxuXG4gIHBhcnNlci5jdXJyZW50Q2xhdXNlLmJvb3N0ID0gYm9vc3RcblxuICB2YXIgbmV4dExleGVtZSA9IHBhcnNlci5wZWVrTGV4ZW1lKClcblxuICBpZiAobmV4dExleGVtZSA9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG5leHRMZXhlbWUudHlwZSkge1xuICAgIGNhc2UgbHVuci5RdWVyeUxleGVyLlRFUk06XG4gICAgICBwYXJzZXIubmV4dENsYXVzZSgpXG4gICAgICByZXR1cm4gbHVuci5RdWVyeVBhcnNlci5wYXJzZVRlcm1cbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5GSUVMRDpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlRmllbGRcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5FRElUX0RJU1RBTkNFOlxuICAgICAgcmV0dXJuIGx1bnIuUXVlcnlQYXJzZXIucGFyc2VFZGl0RGlzdGFuY2VcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5CT09TVDpcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlQm9vc3RcbiAgICBjYXNlIGx1bnIuUXVlcnlMZXhlci5QUkVTRU5DRTpcbiAgICAgIHBhcnNlci5uZXh0Q2xhdXNlKClcbiAgICAgIHJldHVybiBsdW5yLlF1ZXJ5UGFyc2VyLnBhcnNlUHJlc2VuY2VcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IFwiVW5leHBlY3RlZCBsZXhlbWUgdHlwZSAnXCIgKyBuZXh0TGV4ZW1lLnR5cGUgKyBcIidcIlxuICAgICAgdGhyb3cgbmV3IGx1bnIuUXVlcnlQYXJzZUVycm9yIChlcnJvck1lc3NhZ2UsIG5leHRMZXhlbWUuc3RhcnQsIG5leHRMZXhlbWUuZW5kKVxuICB9XG59XG5cbiAgLyoqXG4gICAqIGV4cG9ydCB0aGUgbW9kdWxlIHZpYSBBTUQsIENvbW1vbkpTIG9yIGFzIGEgYnJvd3NlciBnbG9iYWxcbiAgICogRXhwb3J0IGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAgICovXG4gIDsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICBkZWZpbmUoZmFjdG9yeSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLyoqXG4gICAgICAgKiBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAqIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgKiBsaWtlIE5vZGUuXG4gICAgICAgKi9cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICByb290Lmx1bnIgPSBmYWN0b3J5KClcbiAgICB9XG4gIH0odGhpcywgZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEp1c3QgcmV0dXJuIGEgdmFsdWUgdG8gZGVmaW5lIHRoZSBtb2R1bGUgZXhwb3J0LlxuICAgICAqIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICAgKiBjYW4gcmV0dXJuIGEgZnVuY3Rpb24gYXMgdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgICAqL1xuICAgIHJldHVybiBsdW5yXG4gIH0pKVxufSkoKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT04tSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHtcbiAgQXJ0aWNsZURvY3VtZW50LFxuICBTZWFyY2hEb2N1bWVudE1hcCxcbiAgU2VjdGlvbkRvY3VtZW50LFxuICBzZXR1cFNlYXJjaERvY3VtZW50TWFwXG59IGZyb20gXCIuLi9kb2N1bWVudFwiXG5pbXBvcnQge1xuICBTZWFyY2hIaWdobGlnaHRGYWN0b3J5Rm4sXG4gIHNldHVwU2VhcmNoSGlnaGxpZ2h0ZXJcbn0gZnJvbSBcIi4uL2hpZ2hsaWdodGVyXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZWFyY2ggaW5kZXggY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEluZGV4Q29uZmlnIHtcbiAgbGFuZzogc3RyaW5nW10gICAgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBsYW5ndWFnZXMgKi9cbiAgc2VwYXJhdG9yOiBzdHJpbmcgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBzZXBhcmF0b3IgKi9cbn1cblxuLyoqXG4gKiBTZWFyY2ggaW5kZXggZG9jdW1lbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hJbmRleERvY3VtZW50IHtcbiAgbG9jYXRpb246IHN0cmluZyAgICAgICAgICAgICAgICAgICAgIC8qIERvY3VtZW50IGxvY2F0aW9uICovXG4gIHRpdGxlOiBzdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAvKiBEb2N1bWVudCB0aXRsZSAqL1xuICB0ZXh0OiBzdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgLyogRG9jdW1lbnQgdGV4dCAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIGluZGV4IHBpcGVsaW5lIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFNlYXJjaEluZGV4UGlwZWxpbmVGbiA9XG4gIHwgXCJ0cmltbWVyXCIgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFRyaW1tZXIgKi9cbiAgfCBcInN0b3BXb3JkRmlsdGVyXCIgICAgICAgICAgICAgICAgICAgLyogU3RvcCB3b3JkIGZpbHRlciAqL1xuICB8IFwic3RlbW1lclwiICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBTdGVtbWVyICovXG5cbi8qKlxuICogU2VhcmNoIGluZGV4IHBpcGVsaW5lXG4gKi9cbmV4cG9ydCB0eXBlIFNlYXJjaEluZGV4UGlwZWxpbmUgPSBTZWFyY2hJbmRleFBpcGVsaW5lRm5bXVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIGluZGV4XG4gKlxuICogVGhpcyBpbnRlcmZhY2VzIGRlc2NyaWJlcyB0aGUgZm9ybWF0IG9mIHRoZSBgc2VhcmNoX2luZGV4Lmpzb25gIGZpbGUgd2hpY2hcbiAqIGlzIGF1dG9tYXRpY2FsbHkgYnVpbHQgYnkgdGhlIE1rRG9jcyBzZWFyY2ggcGx1Z2luLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEluZGV4IHtcbiAgY29uZmlnOiBTZWFyY2hJbmRleENvbmZpZyAgICAgICAgICAgIC8qIFNlYXJjaCBpbmRleCBjb25maWd1cmF0aW9uICovXG4gIGRvY3M6IFNlYXJjaEluZGV4RG9jdW1lbnRbXSAgICAgICAgICAvKiBTZWFyY2ggaW5kZXggZG9jdW1lbnRzICovXG4gIGluZGV4Pzogb2JqZWN0IHwgc3RyaW5nICAgICAgICAgICAgICAvKiBQcmVidWlsdCBvciBzZXJpYWxpemVkIGluZGV4ICovXG4gIHBpcGVsaW5lPzogU2VhcmNoSW5kZXhQaXBlbGluZSAgICAgICAvKiBTZWFyY2ggaW5kZXggcGlwZWxpbmUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNlYXJjaCByZXN1bHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hSZXN1bHQge1xuICBhcnRpY2xlOiBBcnRpY2xlRG9jdW1lbnQgICAgICAgICAgICAgLyogQXJ0aWNsZSBkb2N1bWVudCAqL1xuICBzZWN0aW9uczogU2VjdGlvbkRvY3VtZW50W10gICAgICAgICAgLyogU2VjdGlvbiBkb2N1bWVudHMgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgZGlmZmVyZW5jZSBvZiB0d28gbGlzdHMgb2Ygc3RyaW5nc1xuICpcbiAqIEBwYXJhbSBhIC0gMXN0IGxpc3Qgb2Ygc3RyaW5nc1xuICogQHBhcmFtIGIgLSAybmQgbGlzdCBvZiBzdHJpbmdzXG4gKlxuICogQHJldHVybiBEaWZmZXJlbmNlXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2UoYTogc3RyaW5nW10sIGI6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICBjb25zdCBbeCwgeV0gPSBbbmV3IFNldChhKSwgbmV3IFNldChiKV1cbiAgcmV0dXJuIFtcbiAgICAuLi5uZXcgU2V0KFsuLi54XS5maWx0ZXIodmFsdWUgPT4gIXkuaGFzKHZhbHVlKSkpXG4gIF1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBTZWFyY2hcbiAqXG4gKiBOb3RlIHRoYXQgYGx1bnJgIGlzIGluamVjdGVkIHZpYSBXZWJwYWNrLCBhcyBpdCB3aWxsIG90aGVyd2lzZSBhbHNvIGJlXG4gKiBidW5kbGVkIGluIHRoZSBhcHBsaWNhdGlvbiBidW5kbGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2gge1xuXG4gIC8qKlxuICAgKiBTZWFyY2ggZG9jdW1lbnQgbWFwcGluZ1xuICAgKlxuICAgKiBBIG1hcHBpbmcgb2YgVVJMcyAoaW5jbHVkaW5nIGhhc2ggZnJhZ21lbnRzKSB0byB0aGUgYWN0dWFsIGFydGljbGVzIGFuZFxuICAgKiBzZWN0aW9ucyBvZiB0aGUgZG9jdW1lbnRhdGlvbi4gVGhlIHNlYXJjaCBkb2N1bWVudCBtYXBwaW5nIG11c3QgYmUgY3JlYXRlZFxuICAgKiByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGluZGV4IHdhcyBwcmVidWlsdCBvciBub3QsIGFzIGBsdW5yYCBpdHNlbGYgd2lsbFxuICAgKiBvbmx5IHN0b3JlIHRoZSBhY3R1YWwgaW5kZXguXG4gICAqL1xuICBwcm90ZWN0ZWQgZG9jdW1lbnRzOiBTZWFyY2hEb2N1bWVudE1hcFxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaGlnaGxpZ2h0IGZhY3RvcnkgZnVuY3Rpb25cbiAgICovXG4gIHByb3RlY3RlZCBoaWdobGlnaHQ6IFNlYXJjaEhpZ2hsaWdodEZhY3RvcnlGblxuXG4gIC8qKlxuICAgKiBUaGUgYGx1bnJgIHNlYXJjaCBpbmRleFxuICAgKi9cbiAgcHJvdGVjdGVkIGluZGV4OiBsdW5yLkluZGV4XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgc2VhcmNoIGludGVncmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIC0gU2VhcmNoIGluZGV4XG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoeyBjb25maWcsIGRvY3MsIHBpcGVsaW5lLCBpbmRleCB9OiBTZWFyY2hJbmRleCkge1xuICAgIHRoaXMuZG9jdW1lbnRzID0gc2V0dXBTZWFyY2hEb2N1bWVudE1hcChkb2NzKVxuICAgIHRoaXMuaGlnaGxpZ2h0ID0gc2V0dXBTZWFyY2hIaWdobGlnaHRlcihjb25maWcpXG5cbiAgICAvKiBTZXQgc2VwYXJhdG9yIGZvciB0b2tlbml6ZXIgKi9cbiAgICBsdW5yLnRva2VuaXplci5zZXBhcmF0b3IgPSBuZXcgUmVnRXhwKGNvbmZpZy5zZXBhcmF0b3IpXG5cbiAgICAvKiBJZiBubyBpbmRleCB3YXMgZ2l2ZW4sIGNyZWF0ZSBpdCAqL1xuICAgIGlmICh0eXBlb2YgaW5kZXggPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRoaXMuaW5kZXggPSBsdW5yKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qIFNldCB1cCBhbHRlcm5hdGUgc2VhcmNoIGxhbmd1YWdlcyAqL1xuICAgICAgICBpZiAoY29uZmlnLmxhbmcubGVuZ3RoID09PSAxICYmIGNvbmZpZy5sYW5nWzBdICE9PSBcImVuXCIpIHtcbiAgICAgICAgICB0aGlzLnVzZSgobHVuciBhcyBhbnkpW2NvbmZpZy5sYW5nWzBdXSlcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdGhpcy51c2UoKGx1bnIgYXMgYW55KS5tdWx0aUxhbmd1YWdlKC4uLmNvbmZpZy5sYW5nKSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIENvbXB1dGUgZnVuY3Rpb25zIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgcGlwZWxpbmUgKi9cbiAgICAgICAgY29uc3QgZm5zID0gZGlmZmVyZW5jZShbXG4gICAgICAgICAgXCJ0cmltbWVyXCIsIFwic3RvcFdvcmRGaWx0ZXJcIiwgXCJzdGVtbWVyXCJcbiAgICAgICAgXSwgcGlwZWxpbmUhKVxuXG4gICAgICAgIC8qIFJlbW92ZSBmdW5jdGlvbnMgZnJvbSB0aGUgcGlwZWxpbmUgZm9yIGV2ZXJ5IGxhbmd1YWdlICovXG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBjb25maWcubGFuZy5tYXAobGFuZ3VhZ2UgPT4gKFxuICAgICAgICAgIGxhbmd1YWdlID09PSBcImVuXCIgPyBsdW5yIDogKGx1bnIgYXMgYW55KVtsYW5ndWFnZV1cbiAgICAgICAgKSkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGZuIG9mIGZucykge1xuICAgICAgICAgICAgdGhpcy5waXBlbGluZS5yZW1vdmUobGFuZ1tmbl0pXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFBpcGVsaW5lLnJlbW92ZShsYW5nW2ZuXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTZXQgdXAgZmllbGRzIGFuZCByZWZlcmVuY2UgKi9cbiAgICAgICAgdGhpcy5maWVsZChcInRpdGxlXCIsIHsgYm9vc3Q6IDEwMDAgfSlcbiAgICAgICAgdGhpcy5maWVsZChcInRleHRcIilcbiAgICAgICAgdGhpcy5yZWYoXCJsb2NhdGlvblwiKVxuXG4gICAgICAgIC8qIEluZGV4IGRvY3VtZW50cyAqL1xuICAgICAgICBmb3IgKGNvbnN0IGRvYyBvZiBkb2NzKVxuICAgICAgICAgIHRoaXMuYWRkKGRvYylcbiAgICAgIH0pXG5cbiAgICAvKiBQcmVidWlsdCBvciBzZXJpYWxpemVkIGluZGV4ICovXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5kZXggPSBsdW5yLkluZGV4LmxvYWQoXG4gICAgICAgIHR5cGVvZiBpbmRleCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgID8gSlNPTi5wYXJzZShpbmRleClcbiAgICAgICAgICA6IGluZGV4XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgbWF0Y2hpbmcgZG9jdW1lbnRzXG4gICAqXG4gICAqIFRoZSBzZWFyY2ggaW5kZXggd2hpY2ggTWtEb2NzIHByb3ZpZGVzIGlzIGRpdmlkZWQgdXAgaW50byBhcnRpY2xlcywgd2hpY2hcbiAgICogY29udGFpbiB0aGUgd2hvbGUgY29udGVudCBvZiB0aGUgaW5kaXZpZHVhbCBwYWdlcywgYW5kIHNlY3Rpb25zLCB3aGljaCBvbmx5XG4gICAqIGNvbnRhaW4gdGhlIGNvbnRlbnRzIG9mIHRoZSBzdWJzZWN0aW9ucyBvYnRhaW5lZCBieSBicmVha2luZyB0aGUgaW5kaXZpZHVhbFxuICAgKiBwYWdlcyB1cCBhdCBgaDFgIC4uLiBgaDZgLiBBcyB0aGVyZSBtYXkgYmUgbWFueSBzZWN0aW9ucyBvbiBkaWZmZXJlbnQgcGFnZXNcbiAgICogd2l0aCBpZGVudGljYWwgdGl0bGVzIChmb3IgZXhhbXBsZSB3aXRoaW4gdGhpcyB2ZXJ5IHByb2plY3QsIGUuZy4gXCJVc2FnZVwiXG4gICAqIG9yIFwiSW5zdGFsbGF0aW9uXCIpLCB0aGV5IG5lZWQgdG8gYmUgcHV0IGludG8gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnRhaW5pbmdcbiAgICogcGFnZS4gRm9yIHRoaXMgcmVhc29uLCBzZWN0aW9uIHJlc3VsdHMgYXJlIGdyb3VwZWQgd2l0aGluIHRoZWlyIHJlc3BlY3RpdmVcbiAgICogYXJ0aWNsZXMgd2hpY2ggYXJlIHRoZSB0b3AtbGV2ZWwgcmVzdWx0cyB0aGF0IGFyZSByZXR1cm5lZC5cbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIC0gUXVlcnkgdmFsdWVcbiAgICpcbiAgICogQHJldHVybiBTZWFyY2ggcmVzdWx0c1xuICAgKi9cbiAgcHVibGljIHF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBTZWFyY2hSZXN1bHRbXSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0cnkge1xuXG4gICAgICAgIC8qIEdyb3VwIHNlY3Rpb25zIGJ5IGNvbnRhaW5pbmcgYXJ0aWNsZSAqL1xuICAgICAgICBjb25zdCBncm91cHMgPSB0aGlzLmluZGV4LnNlYXJjaCh2YWx1ZSlcbiAgICAgICAgICAucmVkdWNlKChyZXN1bHRzLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5kb2N1bWVudHMuZ2V0KHJlc3VsdC5yZWYpXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgIGlmIChcInBhcmVudFwiIGluIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jdW1lbnQucGFyZW50LmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zZXQocmVmLCBbLi4ucmVzdWx0cy5nZXQocmVmKSB8fCBbXSwgcmVzdWx0XSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBkb2N1bWVudC5sb2NhdGlvblxuICAgICAgICAgICAgICAgIHJlc3VsdHMuc2V0KHJlZiwgcmVzdWx0cy5nZXQocmVmKSB8fCBbXSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNcbiAgICAgICAgICB9LCBuZXcgTWFwPHN0cmluZywgbHVuci5JbmRleC5SZXN1bHRbXT4oKSlcblxuICAgICAgICAvKiBDcmVhdGUgaGlnaGxpZ2h0ZXIgZm9yIHF1ZXJ5ICovXG4gICAgICAgIGNvbnN0IGZuID0gdGhpcy5oaWdobGlnaHQodmFsdWUpXG5cbiAgICAgICAgLyogTWFwIGdyb3VwcyB0byBzZWFyY2ggZG9jdW1lbnRzICovXG4gICAgICAgIHJldHVybiBbLi4uZ3JvdXBzXS5tYXAoKFtyZWYsIHNlY3Rpb25zXSkgPT4gKHtcbiAgICAgICAgICBhcnRpY2xlOiBmbih0aGlzLmRvY3VtZW50cy5nZXQocmVmKSBhcyBBcnRpY2xlRG9jdW1lbnQpLFxuICAgICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucy5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZm4odGhpcy5kb2N1bWVudHMuZ2V0KHNlY3Rpb24ucmVmKSBhcyBTZWN0aW9uRG9jdW1lbnQpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpXG5cbiAgICAgIC8qIExvZyBlcnJvcnMgdG8gY29uc29sZSAoZm9yIG5vdykgKi9cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcXVlcnk6ICR7dmFsdWV9IOKAkyBzZWUgaHR0cHM6Ly9iaXQubHkvMnMzQ2hYR2ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogUmV0dXJuIG5vdGhpbmcgaW4gY2FzZSBvZiBlcnJvciBvciBlbXB0eSBxdWVyeSAqL1xuICAgIHJldHVybiBbXVxuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCAqIGFzIGVzY2FwZUhUTUwgZnJvbSBcImVzY2FwZS1odG1sXCJcblxuaW1wb3J0IHsgU2VhcmNoSW5kZXhEb2N1bWVudCB9IGZyb20gXCIuLi9fXCJcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVHlwZXNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBBIHRvcC1sZXZlbCBhcnRpY2xlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXJ0aWNsZURvY3VtZW50IGV4dGVuZHMgU2VhcmNoSW5kZXhEb2N1bWVudCB7XG4gIGxpbmtlZDogYm9vbGVhbiAgICAgICAgICAgICAgICAgICAgICAvKiBXaGV0aGVyIHRoZSBzZWN0aW9uIHdhcyBsaW5rZWQgKi9cbn1cblxuLyoqXG4gKiBBIHNlY3Rpb24gb2YgYW4gYXJ0aWNsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb25Eb2N1bWVudCBleHRlbmRzIFNlYXJjaEluZGV4RG9jdW1lbnQge1xuICBwYXJlbnQ6IEFydGljbGVEb2N1bWVudCAgICAgICAgICAgICAgLyogUGFyZW50IGFydGljbGUgKi9cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNlYXJjaCBkb2N1bWVudFxuICovXG5leHBvcnQgdHlwZSBTZWFyY2hEb2N1bWVudCA9XG4gIHwgQXJ0aWNsZURvY3VtZW50XG4gIHwgU2VjdGlvbkRvY3VtZW50XG5cbi8qKlxuICogU2VhcmNoIGRvY3VtZW50IG1hcHBpbmdcbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoRG9jdW1lbnRNYXAgPSBNYXA8c3RyaW5nLCBTZWFyY2hEb2N1bWVudD5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQ3JlYXRlIGEgc2VhcmNoIGRvY3VtZW50IG1hcHBpbmdcbiAqXG4gKiBAcGFyYW0gZG9jcyAtIFNlYXJjaCBpbmRleCBkb2N1bWVudHNcbiAqXG4gKiBAcmV0dXJuIFNlYXJjaCBkb2N1bWVudCBtYXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2VhcmNoRG9jdW1lbnRNYXAoXG4gIGRvY3M6IFNlYXJjaEluZGV4RG9jdW1lbnRbXVxuKTogU2VhcmNoRG9jdW1lbnRNYXAge1xuICBjb25zdCBkb2N1bWVudHMgPSBuZXcgTWFwPHN0cmluZywgU2VhcmNoRG9jdW1lbnQ+KClcbiAgZm9yIChjb25zdCBkb2Mgb2YgZG9jcykge1xuICAgIGNvbnN0IFtwYXRoLCBoYXNoXSA9IGRvYy5sb2NhdGlvbi5zcGxpdChcIiNcIilcblxuICAgIC8qIEV4dHJhY3QgbG9jYXRpb24gYW5kIHRpdGxlICovXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2MubG9jYXRpb25cbiAgICBjb25zdCB0aXRsZSAgICA9IGRvYy50aXRsZVxuXG4gICAgLyogRXNjYXBlIGFuZCBjbGVhbnVwIHRleHQgKi9cbiAgICBjb25zdCB0ZXh0ID0gZXNjYXBlSFRNTChkb2MudGV4dClcbiAgICAgIC5yZXBsYWNlKC9cXHMrKD89WywuOjshP10pL2csIFwiXCIpXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIiBcIilcblxuICAgIC8qIEhhbmRsZSBzZWN0aW9uICovXG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50cy5nZXQocGF0aCkgYXMgQXJ0aWNsZURvY3VtZW50XG5cbiAgICAgIC8qIElnbm9yZSBmaXJzdCBzZWN0aW9uLCBvdmVycmlkZSBhcnRpY2xlICovXG4gICAgICBpZiAoIXBhcmVudC5saW5rZWQpIHtcbiAgICAgICAgcGFyZW50LnRpdGxlICA9IGRvYy50aXRsZVxuICAgICAgICBwYXJlbnQudGV4dCAgID0gdGV4dFxuICAgICAgICBwYXJlbnQubGlua2VkID0gdHJ1ZVxuXG4gICAgICAvKiBBZGQgc3Vic2VxdWVudCBzZWN0aW9uICovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudHMuc2V0KGxvY2F0aW9uLCB7XG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBwYXJlbnRcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIC8qIEFkZCBhcnRpY2xlICovXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50cy5zZXQobG9jYXRpb24sIHtcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBsaW5rZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZXR1cm4gZG9jdW1lbnRzXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFNlYXJjaEluZGV4Q29uZmlnIH0gZnJvbSBcIi4uL19cIlxuaW1wb3J0IHsgU2VhcmNoRG9jdW1lbnQgfSBmcm9tIFwiLi4vZG9jdW1lbnRcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUeXBlc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIFNlYXJjaCBoaWdobGlnaHQgZnVuY3Rpb25cbiAqXG4gKiBAdGVtcGxhdGUgVCAtIFNlYXJjaCBkb2N1bWVudCB0eXBlXG4gKlxuICogQHBhcmFtIGRvY3VtZW50IC0gU2VhcmNoIGRvY3VtZW50XG4gKlxuICogQHJldHVybiBIaWdobGlnaHRlZCBkb2N1bWVudFxuICovXG5leHBvcnQgdHlwZSBTZWFyY2hIaWdobGlnaHRGbiA9IDxcbiAgVCBleHRlbmRzIFNlYXJjaERvY3VtZW50XG4+KGRvY3VtZW50OiBSZWFkb25seTxUPikgPT4gVFxuXG4vKipcbiAqIFNlYXJjaCBoaWdobGlnaHQgZmFjdG9yeSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFF1ZXJ5IHZhbHVlXG4gKlxuICogQHJldHVybiBTZWFyY2ggaGlnaGxpZ2h0IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFNlYXJjaEhpZ2hsaWdodEZhY3RvcnlGbiA9ICh2YWx1ZTogc3RyaW5nKSA9PiBTZWFyY2hIaWdobGlnaHRGblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBzZWFyY2ggaGlnaGxpZ2h0ZXJcbiAqXG4gKiBAcGFyYW0gY29uZmlnIC0gU2VhcmNoIGluZGV4IGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBAcmV0dXJuIFNlYXJjaCBoaWdobGlnaHQgZmFjdG9yeSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBTZWFyY2hIaWdobGlnaHRlcihcbiAgY29uZmlnOiBTZWFyY2hJbmRleENvbmZpZ1xuKTogU2VhcmNoSGlnaGxpZ2h0RmFjdG9yeUZuIHtcbiAgY29uc3Qgc2VwYXJhdG9yID0gbmV3IFJlZ0V4cChjb25maWcuc2VwYXJhdG9yLCBcImltZ1wiKVxuICBjb25zdCBoaWdobGlnaHQgPSAoXzogdW5rbm93biwgZGF0YTogc3RyaW5nLCB0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7ZGF0YX08ZW0+JHt0ZXJtfTwvZW0+YFxuICB9XG5cbiAgLyogUmV0dXJuIGZhY3RvcnkgZnVuY3Rpb24gKi9cbiAgcmV0dXJuICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgLnJlcGxhY2UoL1tcXHMqK1xcLTp+Xl0rL2csIFwiIFwiKVxuICAgICAgLnRyaW0oKVxuXG4gICAgLyogQ3JlYXRlIHNlYXJjaCB0ZXJtIG1hdGNoIGV4cHJlc3Npb24gKi9cbiAgICBjb25zdCBtYXRjaCA9IG5ldyBSZWdFeHAoYChefCR7Y29uZmlnLnNlcGFyYXRvcn0pKCR7XG4gICAgICB2YWx1ZVxuICAgICAgICAucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCBcIlxcXFwkJlwiKVxuICAgICAgICAucmVwbGFjZShzZXBhcmF0b3IsIFwifFwiKVxuICAgIH0pYCwgXCJpbWdcIilcblxuICAgIC8qIEhpZ2hsaWdodCBkb2N1bWVudCAqL1xuICAgIHJldHVybiBkb2N1bWVudCA9PiAoe1xuICAgICAgLi4uZG9jdW1lbnQsXG4gICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUucmVwbGFjZShtYXRjaCwgaGlnaGxpZ2h0KSxcbiAgICAgIHRleHQ6ICBkb2N1bWVudC50ZXh0LnJlcGxhY2UobWF0Y2gsIGhpZ2hsaWdodClcbiAgICB9KVxuICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjAgTWFydGluIERvbmF0aCA8bWFydGluLmRvbmF0aEBzcXVpZGZ1bmsuY29tPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTi1JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1NcbiAqIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQgXCJsdW5yXCJcblxuaW1wb3J0IHsgU2VhcmNoLCBTZWFyY2hJbmRleENvbmZpZyB9IGZyb20gXCIuLi8uLi9fXCJcbmltcG9ydCB7IFNlYXJjaE1lc3NhZ2UsIFNlYXJjaE1lc3NhZ2VUeXBlIH0gZnJvbSBcIi4uL21lc3NhZ2VcIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoXG4gKi9cbmxldCBzZWFyY2g6IFNlYXJjaFxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBIZWxwZXIgZnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2V0IHVwIG11bHRpLWxhbmd1YWdlIHN1cHBvcnQgdGhyb3VnaCBgbHVuci1sYW5ndWFnZXNgXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGF1dG9tYXRpY2FsbHkgaW1wb3J0IHRoZSBzdGVtbWVycyBuZWNlc3NhcnkgdG8gcHJvY2Vzc1xuICogdGhlIGxhbmd1YWdlcyB3aGljaCB3ZXJlIGdpdmVuIHRocm91Z2ggdGhlIHNlYXJjaCBpbmRleCBjb25maWd1cmF0aW9uLlxuICpcbiAqIEBwYXJhbSBjb25maWcgLSBTZWFyY2ggaW5kZXggY29uZmlndXJhdGlvblxuICovXG5mdW5jdGlvbiBzZXR1cEx1bnJMYW5ndWFnZXMoY29uZmlnOiBTZWFyY2hJbmRleENvbmZpZyk6IHZvaWQge1xuICBjb25zdCBiYXNlID0gXCIuLi9sdW5yXCJcblxuICAvKiBBZGQgc2NyaXB0cyBmb3IgbGFuZ3VhZ2VzICovXG4gIGNvbnN0IHNjcmlwdHMgPSBbXVxuICBmb3IgKGNvbnN0IGxhbmcgb2YgY29uZmlnLmxhbmcpIHtcbiAgICBpZiAobGFuZyA9PT0gXCJqYVwiKSBzY3JpcHRzLnB1c2goYCR7YmFzZX0vdGlueXNlZy5taW4uanNgKVxuICAgIGlmIChsYW5nICE9PSBcImVuXCIpIHNjcmlwdHMucHVzaChgJHtiYXNlfS9taW4vbHVuci4ke2xhbmd9Lm1pbi5qc2ApXG4gIH1cblxuICAvKiBBZGQgbXVsdGktbGFuZ3VhZ2Ugc3VwcG9ydCAqL1xuICBpZiAoY29uZmlnLmxhbmcubGVuZ3RoID4gMSlcbiAgICBzY3JpcHRzLnB1c2goYCR7YmFzZX0vbWluL2x1bnIubXVsdGkubWluLmpzYClcblxuICAvKiBMb2FkIHNjcmlwdHMgc3luY2hyb25vdXNseSAqL1xuICBpZiAoc2NyaXB0cy5sZW5ndGgpXG4gICAgaW1wb3J0U2NyaXB0cyhcbiAgICAgIGAke2Jhc2V9L21pbi9sdW5yLnN0ZW1tZXIuc3VwcG9ydC5taW4uanNgLFxuICAgICAgLi4uc2NyaXB0c1xuICAgIClcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTWVzc2FnZSBoYW5kbGVyXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBTb3VyY2UgbWVzc2FnZVxuICpcbiAqIEByZXR1cm4gVGFyZ2V0IG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZXIobWVzc2FnZTogU2VhcmNoTWVzc2FnZSk6IFNlYXJjaE1lc3NhZ2Uge1xuICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuXG4gICAgLyogU2VhcmNoIHNldHVwIG1lc3NhZ2UgKi9cbiAgICBjYXNlIFNlYXJjaE1lc3NhZ2VUeXBlLlNFVFVQOlxuICAgICAgc2V0dXBMdW5yTGFuZ3VhZ2VzKG1lc3NhZ2UuZGF0YS5jb25maWcpXG4gICAgICBzZWFyY2ggPSBuZXcgU2VhcmNoKG1lc3NhZ2UuZGF0YSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNlYXJjaE1lc3NhZ2VUeXBlLlJFQURZXG4gICAgICB9XG5cbiAgICAvKiBTZWFyY2ggcXVlcnkgbWVzc2FnZSAqL1xuICAgIGNhc2UgU2VhcmNoTWVzc2FnZVR5cGUuUVVFUlk6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTZWFyY2hNZXNzYWdlVHlwZS5SRVNVTFQsXG4gICAgICAgIGRhdGE6IHNlYXJjaCA/IHNlYXJjaC5xdWVyeShtZXNzYWdlLmRhdGEpIDogW11cbiAgICAgIH1cblxuICAgIC8qIEFsbCBvdGhlciBtZXNzYWdlcyAqL1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBtZXNzYWdlIHR5cGVcIilcbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBXb3JrZXJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXYgPT4ge1xuICBwb3N0TWVzc2FnZShoYW5kbGVyKGV2LmRhdGEpKVxufSlcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYtMjAyMCBNYXJ0aW4gRG9uYXRoIDxtYXJ0aW4uZG9uYXRoQHNxdWlkZnVuay5jb20+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG9cbiAqIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlXG4gKiByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OLUlORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HU1xuICogSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbmltcG9ydCB7IFNlYXJjaEluZGV4LCBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vLi4vX1wiXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFR5cGVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogU2VhcmNoIG1lc3NhZ2UgdHlwZVxuICovXG5leHBvcnQgY29uc3QgZW51bSBTZWFyY2hNZXNzYWdlVHlwZSB7XG4gIFNFVFVQLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggaW5kZXggc2V0dXAgKi9cbiAgUkVBRFksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFNlYXJjaCBpbmRleCByZWFkeSAqL1xuICBRVUVSWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogU2VhcmNoIHF1ZXJ5ICovXG4gIFJFU1VMVCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBTZWFyY2ggcmVzdWx0cyAqL1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogQSBtZXNzYWdlIGNvbnRhaW5pbmcgdGhlIGRhdGEgbmVjZXNzYXJ5IHRvIHNldHVwIHRoZSBzZWFyY2ggaW5kZXhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZXR1cE1lc3NhZ2Uge1xuICB0eXBlOiBTZWFyY2hNZXNzYWdlVHlwZS5TRVRVUCAgICAgICAgLyogTWVzc2FnZSB0eXBlICovXG4gIGRhdGE6IFNlYXJjaEluZGV4ICAgICAgICAgICAgICAgICAgICAvKiBNZXNzYWdlIGRhdGEgKi9cbn1cblxuLyoqXG4gKiBBIG1lc3NhZ2UgaW5kaWNhdGluZyB0aGUgc2VhcmNoIGluZGV4IGlzIHJlYWR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUmVhZHlNZXNzYWdlIHtcbiAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuUkVBRFkgICAgICAgIC8qIE1lc3NhZ2UgdHlwZSAqL1xufVxuXG4vKipcbiAqIEEgbWVzc2FnZSBjb250YWluaW5nIGEgc2VhcmNoIHF1ZXJ5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUXVlcnlNZXNzYWdlIHtcbiAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuUVVFUlkgICAgICAgIC8qIE1lc3NhZ2UgdHlwZSAqL1xuICBkYXRhOiBzdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgLyogTWVzc2FnZSBkYXRhICovXG59XG5cbi8qKlxuICogQSBtZXNzYWdlIGNvbnRhaW5pbmcgcmVzdWx0cyBmb3IgYSBzZWFyY2ggcXVlcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hSZXN1bHRNZXNzYWdlIHtcbiAgdHlwZTogU2VhcmNoTWVzc2FnZVR5cGUuUkVTVUxUICAgICAgIC8qIE1lc3NhZ2UgdHlwZSAqL1xuICBkYXRhOiBTZWFyY2hSZXN1bHRbXSAgICAgICAgICAgICAgICAgLyogTWVzc2FnZSBkYXRhICovXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBBIG1lc3NhZ2UgZXhjaGFuZ2VkIHdpdGggdGhlIHNlYXJjaCB3b3JrZXJcbiAqL1xuZXhwb3J0IHR5cGUgU2VhcmNoTWVzc2FnZSA9XG4gIHwgU2VhcmNoU2V0dXBNZXNzYWdlXG4gIHwgU2VhcmNoUmVhZHlNZXNzYWdlXG4gIHwgU2VhcmNoUXVlcnlNZXNzYWdlXG4gIHwgU2VhcmNoUmVzdWx0TWVzc2FnZVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBGdW5jdGlvbnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiBUeXBlIGd1YXJkIGZvciBzZWFyY2ggc2V0dXAgbWVzc2FnZXNcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSAtIFNlYXJjaCB3b3JrZXIgbWVzc2FnZVxuICpcbiAqIEByZXR1cm4gVGVzdCByZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2VhcmNoU2V0dXBNZXNzYWdlKFxuICBtZXNzYWdlOiBTZWFyY2hNZXNzYWdlXG4pOiBtZXNzYWdlIGlzIFNlYXJjaFNldHVwTWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IFNlYXJjaE1lc3NhZ2VUeXBlLlNFVFVQXG59XG5cbi8qKlxuICogVHlwZSBndWFyZCBmb3Igc2VhcmNoIHJlYWR5IG1lc3NhZ2VzXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBTZWFyY2ggd29ya2VyIG1lc3NhZ2VcbiAqXG4gKiBAcmV0dXJuIFRlc3QgcmVzdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlYXJjaFJlYWR5TWVzc2FnZShcbiAgbWVzc2FnZTogU2VhcmNoTWVzc2FnZVxuKTogbWVzc2FnZSBpcyBTZWFyY2hSZWFkeU1lc3NhZ2Uge1xuICByZXR1cm4gbWVzc2FnZS50eXBlID09PSBTZWFyY2hNZXNzYWdlVHlwZS5SRUFEWVxufVxuXG4vKipcbiAqIFR5cGUgZ3VhcmQgZm9yIHNlYXJjaCBxdWVyeSBtZXNzYWdlc1xuICpcbiAqIEBwYXJhbSBtZXNzYWdlIC0gU2VhcmNoIHdvcmtlciBtZXNzYWdlXG4gKlxuICogQHJldHVybiBUZXN0IHJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTZWFyY2hRdWVyeU1lc3NhZ2UoXG4gIG1lc3NhZ2U6IFNlYXJjaE1lc3NhZ2Vcbik6IG1lc3NhZ2UgaXMgU2VhcmNoUXVlcnlNZXNzYWdlIHtcbiAgcmV0dXJuIG1lc3NhZ2UudHlwZSA9PT0gU2VhcmNoTWVzc2FnZVR5cGUuUVVFUllcbn1cblxuLyoqXG4gKiBUeXBlIGd1YXJkIGZvciBzZWFyY2ggcmVzdWx0IG1lc3NhZ2VzXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBTZWFyY2ggd29ya2VyIG1lc3NhZ2VcbiAqXG4gKiBAcmV0dXJuIFRlc3QgcmVzdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NlYXJjaFJlc3VsdE1lc3NhZ2UoXG4gIG1lc3NhZ2U6IFNlYXJjaE1lc3NhZ2Vcbik6IG1lc3NhZ2UgaXMgU2VhcmNoUmVzdWx0TWVzc2FnZSB7XG4gIHJldHVybiBtZXNzYWdlLnR5cGUgPT09IFNlYXJjaE1lc3NhZ2VUeXBlLlJFU1VMVFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==