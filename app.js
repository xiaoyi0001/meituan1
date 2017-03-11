/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(14);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(90)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by trigkit4 on 2017/2/22.
 */
(function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }

    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    };
    flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    };
})(window, window['lib'] || (window['lib'] = {}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(39);

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(10);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(10);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.2.1
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b)
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: process.env.NODE_ENV !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var perf;

if (process.env.NODE_ENV !== 'production') {
  perf = inBrowser && window.performance;
  if (perf && (!perf.mark || !perf.measure)) {
    perf = undefined;
  }
}

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === "<Anonymous>") {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  if (Array.isArray(obj)) {
    obj.splice(key, 1);
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

function handleError (err, vm, type) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, type);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + type + ":"), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      if (!cur.fns) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (!oldHook) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (oldHook.fns && oldHook.merged) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constrcuts that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

function resolveScopedSlots (
  fns
) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'option is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
    updateComponent = function () {
      var name = vm._name;
      var startTag = "start " + name;
      var endTag = "end " + name;
      perf.mark(startTag);
      var vnode = vm._render();
      perf.mark(endTag);
      perf.measure((name + " render"), startTag, endTag);
      perf.mark(startTag);
      vm._update(vnode, hydrating);
      perf.mark(endTag);
      perf.measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive == null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var queue = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id, vm;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // call updated hooks
  index = queue.length;
  while (index--) {
    watcher = queue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key]) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (data.model) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init (
  vnode,
  hydrating,
  parentElm,
  refElm
) {
  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
    var child = vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance,
      parentElm,
      refElm
    );
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    // kept-alive components, treat as a patch
    var mountedNode = vnode; // work around flow
    prepatch(mountedNode, mountedNode);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.componentInstance = oldVnode.componentInstance;
  updateChildComponent(
    child,
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.componentInstance._isMounted) {
    vnode.componentInstance._isMounted = true;
    callHook(vnode.componentInstance, 'mounted');
  }
  if (vnode.data.keepAlive) {
    activateChildComponent(vnode.componentInstance, true /* direct */);
  }
}

function destroy (vnode) {
  if (!vnode.componentInstance._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.componentInstance.$destroy();
    } else {
      deactivateChildComponent(vnode.componentInstance, true /* direct */);
    }
  }
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (on[event]) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (data && data.__ob__) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          data[key] = value[key];
        } else {
          var type = data.attrs && data.attrs.type;
          var hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

function initInjections (vm) {
  var provide = vm.$options.provide;
  var inject = vm.$options.inject;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && source._provided[provideKey]) {
          vm[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
  }
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
      perf.mark('init');
    }

    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    initInjections(vm);
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && perf) {
      vm._name = formatComponentName(vm, false);
      perf.mark('init end');
      perf.measure(((vm._name) + " init"), 'init', 'init end');
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    for (var i = 0; i < latest.length; i++) {
      if (sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$2 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$2)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (pattern instanceof RegExp) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.2.1';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isReactivated) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (parent) {
      if (ref) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (vnode.parent) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parentElm$1 !== null) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (on[RANGE_TOKEN]) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (on[CHECKBOX_RADIO_TOKEN]) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once,
  capture
) {
  if (once) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, handler, capture);
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((modifiers && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookAgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookAgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookAgumentsLength (fn) {
  if (!fn) { return false }
  var invokerFns = fn.fns;
  if (invokerFns) {
    // invoker
    return getHookAgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.mustUseProp = mustUseProp;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
      config.productionTip !== false &&
      inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/* harmony default export */ __webpack_exports__["default"] = Vue$2;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7), __webpack_require__(91)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(31);
var buildURL = __webpack_require__(34);
var parseHeaders = __webpack_require__(40);
var isURLSameOrigin = __webpack_require__(38);
var createError = __webpack_require__(13);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(33);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(36);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(30);

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BScroll"] = factory();
	else
		root["BScroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _bscroll = __webpack_require__(1);

	_bscroll.BScroll.Version = ("0.1.15");

	module.exports = _bscroll.BScroll;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BScroll = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TOUCH_EVENT = 1;

	var BScroll = exports.BScroll = function (_EventEmitter) {
	  _inherits(BScroll, _EventEmitter);

	  function BScroll(el, options) {
	    _classCallCheck(this, BScroll);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BScroll).call(this));

	    _this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
	    _this.scroller = _this.wrapper.children[0];

	    _this.scrollerStyle = _this.scroller.style;

	    _this.options = {
	      startX: 0,
	      startY: 0,
	      scrollY: true,
	      directionLockThreshold: 5,
	      momentum: true,
	      bounce: true,
	      selectedIndex: 0,
	      rotate: 25,
	      wheel: false,
	      snap: false,
	      snapLoop: false,
	      snapThreshold: 0.1,
	      swipeTime: 2500,
	      bounceTime: 700,
	      adjustTime: 400,
	      swipeBounceTime: 1200,
	      deceleration: 0.001,
	      momentumLimitTime: 300,
	      momentumLimitDistance: 15,
	      resizePolling: 60,
	      preventDefault: true,
	      preventDefaultException: {
	        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
	      },
	      HWCompositing: true,
	      useTransition: true,
	      useTransform: true
	    };

	    (0, _util.extend)(_this.options, options);

	    _this.translateZ = _this.options.HWCompositing && _util.hasPerspective ? ' translateZ(0)' : '';

	    _this.options.useTransition = _this.options.useTransition && _util.hasTransition;
	    _this.options.useTransform = _this.options.useTransform && _util.hasTransform;

	    _this.options.eventPassthrough = _this.options.eventPassthrough === true ? 'vertical' : _this.options.eventPassthrough;
	    _this.options.preventDefault = !_this.options.eventPassthrough && _this.options.preventDefault;

	    _this.options.scrollX = _this.options.eventPassthrough === 'horizontal' ? false : _this.options.scrollX;
	    _this.options.scrollY = _this.options.eventPassthrough === 'vertical' ? false : _this.options.scrollY;

	    _this.options.freeScroll = _this.options.freeScroll && !_this.options.eventPassthrough;
	    _this.options.directionLockThreshold = _this.options.eventPassthrough ? 0 : _this.options.directionLockThreshold;

	    if (_this.options.tap === true) {
	      _this.options.tap = 'tap';
	    }

	    _this._init();

	    if (_this.options.snap) {
	      _this._initSnap();
	    }

	    _this.refresh();

	    if (!_this.options.snap) {
	      _this.scrollTo(_this.options.startX, _this.options.startY);
	    }

	    _this.enable();
	    return _this;
	  }

	  _createClass(BScroll, [{
	    key: '_init',
	    value: function _init() {
	      this.x = 0;
	      this.y = 0;
	      this.directionX = 0;
	      this.directionY = 0;

	      this._addEvents();
	    }
	  }, {
	    key: '_initSnap',
	    value: function _initSnap() {
	      var _this2 = this;

	      this.currentPage = {};

	      if (this.options.snapLoop) {
	        var children = this.scroller.children;
	        if (children.length > 0) {
	          (0, _util.prepend)(children[children.length - 1].cloneNode(true), this.scroller);
	          this.scroller.appendChild(children[1].cloneNode(true));
	        }
	      }

	      if (typeof this.options.snap === 'string') {
	        this.options.snap = this.scroller.querySelectorAll(this.options.snap);
	      }

	      this.on('refresh', function () {
	        _this2.pages = [];

	        if (!_this2.wrapperWidth || !_this2.wrapperHeight || !_this2.scrollerWidth || !_this2.scrollerHeight) {
	          return;
	        }

	        var stepX = _this2.options.snapStepX || _this2.wrapperWidth;
	        var stepY = _this2.options.snapStepY || _this2.wrapperHeight;

	        var x = 0;
	        var y = void 0;
	        var cx = void 0;
	        var cy = void 0;
	        var i = 0;
	        var l = void 0;
	        var m = 0;
	        var n = void 0;
	        var el = void 0;
	        var rect = void 0;
	        if (_this2.options.snap === true) {
	          cx = Math.round(stepX / 2);
	          cy = Math.round(stepY / 2);

	          while (x > -_this2.scrollerWidth) {
	            _this2.pages[i] = [];
	            l = 0;
	            y = 0;

	            while (y > -_this2.scrollerHeight) {
	              _this2.pages[i][l] = {
	                x: Math.max(x, _this2.maxScrollX),
	                y: Math.max(y, _this2.maxScrollY),
	                width: stepX,
	                height: stepY,
	                cx: x - cx,
	                cy: y - cy
	              };

	              y -= stepY;
	              l++;
	            }

	            x -= stepX;
	            i++;
	          }
	        } else {
	          el = _this2.options.snap;
	          l = el.length;
	          n = -1;

	          for (; i < l; i++) {
	            rect = (0, _util.getRect)(el[i]);
	            if (i === 0 || rect.left <= (0, _util.getRect)(el[i - 1]).left) {
	              m = 0;
	              n++;
	            }

	            if (!_this2.pages[m]) {
	              _this2.pages[m] = [];
	            }

	            x = Math.max(-rect.left, _this2.maxScrollX);
	            y = Math.max(-rect.top, _this2.maxScrollY);
	            cx = x - Math.round(rect.width / 2);
	            cy = y - Math.round(rect.height / 2);

	            _this2.pages[m][n] = {
	              x: x,
	              y: y,
	              width: rect.width,
	              height: rect.height,
	              cx: cx,
	              cy: cy
	            };

	            if (x > _this2.maxScrollX) {
	              m++;
	            }
	          }
	        }

	        var initPage = _this2.options.snapLoop ? 1 : 0;
	        _this2.goToPage(_this2.currentPage.pageX || initPage, _this2.currentPage.pageY || 0, 0);

	        if (_this2.options.snapThreshold % 1 === 0) {
	          _this2.snapThresholdX = _this2.options.snapThreshold;
	          _this2.snapThresholdY = _this2.options.snapThreshold;
	        } else {
	          _this2.snapThresholdX = Math.round(_this2.pages[_this2.currentPage.pageX][_this2.currentPage.pageY].width * _this2.options.snapThreshold);
	          _this2.snapThresholdY = Math.round(_this2.pages[_this2.currentPage.pageX][_this2.currentPage.pageY].height * _this2.options.snapThreshold);
	        }
	      });

	      this.on('scrollEnd', function () {
	        if (_this2.options.snapLoop) {
	          if (_this2.currentPage.pageX === 0) {
	            _this2.goToPage(_this2.pages.length - 2, _this2.currentPage.pageY, 0);
	          }
	          if (_this2.currentPage.pageX === _this2.pages.length - 1) {
	            _this2.goToPage(1, _this2.currentPage.pageY, 0);
	          }
	        }
	      });

	      this.on('flick', function () {
	        var time = _this2.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(_this2.x - _this2.startX), 1000), Math.min(Math.abs(_this2.y - _this2.startY), 1000)), 300);

	        _this2.goToPage(_this2.currentPage.pageX + _this2.directionX, _this2.currentPage.pageY + _this2.directionY, time);
	      });
	    }
	  }, {
	    key: '_nearestSnap',
	    value: function _nearestSnap(x, y) {
	      if (!this.pages.length) {
	        return { x: 0, y: 0, pageX: 0, pageY: 0 };
	      }

	      var i = 0;

	      if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
	        return this.currentPage;
	      }

	      if (x > 0) {
	        x = 0;
	      } else if (x < this.maxScrollX) {
	        x = this.maxScrollX;
	      }

	      if (y > 0) {
	        y = 0;
	      } else if (y < this.maxScrollY) {
	        y = this.maxScrollY;
	      }

	      var l = this.pages.length;
	      for (; i < l; i++) {
	        if (x >= this.pages[i][0].cx) {
	          x = this.pages[i][0].x;
	          break;
	        }
	      }

	      l = this.pages[i].length;

	      var m = 0;
	      for (; m < l; m++) {
	        if (y >= this.pages[0][m].cy) {
	          y = this.pages[0][m].y;
	          break;
	        }
	      }

	      if (i === this.currentPage.pageX) {
	        i += this.directionX;

	        if (i < 0) {
	          i = 0;
	        } else if (i >= this.pages.length) {
	          i = this.pages.length - 1;
	        }

	        x = this.pages[i][0].x;
	      }

	      if (m === this.currentPage.pageY) {
	        m += this.directionY;

	        if (m < 0) {
	          m = 0;
	        } else if (m >= this.pages[0].length) {
	          m = this.pages[0].length - 1;
	        }

	        y = this.pages[0][m].y;
	      }

	      return {
	        x: x,
	        y: y,
	        pageX: i,
	        pageY: m
	      };
	    }
	  }, {
	    key: '_addEvents',
	    value: function _addEvents() {
	      var eventOperation = _util.addEvent;
	      this._handleEvents(eventOperation);
	    }
	  }, {
	    key: '_removeEvents',
	    value: function _removeEvents() {
	      var eventOperation = _util.removeEvent;
	      this._handleEvents(eventOperation);
	    }
	  }, {
	    key: '_handleEvents',
	    value: function _handleEvents(eventOperation) {
	      var target = this.options.bindToWrapper ? this.wrapper : window;
	      eventOperation(window, 'orientationchange', this);
	      eventOperation(window, 'resize', this);

	      if (this.options.click) {
	        eventOperation(this.wrapper, 'click', this);
	      }

	      if (!this.options.disableMouse) {
	        eventOperation(this.wrapper, 'mousedown', this);
	        eventOperation(target, 'mousemove', this);
	        eventOperation(target, 'mousecancel', this);
	        eventOperation(target, 'mouseup', this);
	      }

	      if (_util.hasTouch && !this.options.disableTouch) {
	        eventOperation(this.wrapper, 'touchstart', this);
	        eventOperation(target, 'touchmove', this);
	        eventOperation(target, 'touchcancel', this);
	        eventOperation(target, 'touchend', this);
	      }

	      eventOperation(this.scroller, _util.style.transitionEnd, this);
	    }
	  }, {
	    key: '_start',
	    value: function _start(e) {
	      var _eventType = _util.eventType[e.type];
	      if (_eventType !== TOUCH_EVENT) {
	        if (e.button !== 0) {
	          return;
	        }
	      }
	      if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
	        return;
	      }
	      this.initiated = _eventType;

	      if (this.options.preventDefault && !_util.isBadAndroid && !(0, _util.preventDefaultException)(e.target, this.options.preventDefaultException)) {
	        e.preventDefault();
	      }

	      this.moved = false;
	      this.distX = 0;
	      this.distY = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	      this.directionLocked = 0;

	      this._transitionTime();
	      this.startTime = +new Date();

	      if (this.options.wheel) {
	        this.target = e.target;
	      }

	      if (this.options.useTransition && this.isInTransition) {
	        this.isInTransition = false;
	        var pos = this.getComputedPosition();
	        this._translate(pos.x, pos.y);
	        if (this.options.wheel) {
	          this.target = this.items[Math.round(-pos.y / this.itemHeight)];
	        } else {
	          this.trigger('scrollEnd');
	        }
	      }

	      var point = e.touches ? e.touches[0] : e;

	      this.startX = this.x;
	      this.startY = this.y;
	      this.absStartX = this.x;
	      this.absStartY = this.y;
	      this.pointX = point.pageX;
	      this.pointY = point.pageY;

	      this.trigger('beforeScrollStart');
	    }
	  }, {
	    key: '_move',
	    value: function _move(e) {
	      if (!this.enabled || this.destroyed || _util.eventType[e.type] !== this.initiated) {
	        return;
	      }

	      if (this.options.preventDefault) {
	        e.preventDefault();
	      }

	      var point = e.touches ? e.touches[0] : e;
	      var deltaX = point.pageX - this.pointX;
	      var deltaY = point.pageY - this.pointY;

	      this.pointX = point.pageX;
	      this.pointY = point.pageY;

	      this.distX += deltaX;
	      this.distY += deltaY;

	      var absDistX = Math.abs(this.distX);
	      var absDistY = Math.abs(this.distY);

	      var timestamp = +new Date();

	      if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
	        return;
	      }

	      if (!this.directionLocked && !this.options.freeScroll) {
	        if (absDistX > absDistY + this.options.directionLockThreshold) {
	          this.directionLocked = 'h';
	        } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
	          this.directionLocked = 'v';
	        } else {
	          this.directionLocked = 'n';
	        }
	      }

	      if (this.directionLocked === 'h') {
	        if (this.options.eventPassthrough === 'vertical') {
	          e.preventDefault();
	        } else if (this.options.eventPassthrough === 'horizontal') {
	          this.initiated = false;
	          return;
	        }
	        deltaY = 0;
	      } else if (this.directionLocked === 'v') {
	        if (this.options.eventPassthrough === 'horizontal') {
	          e.preventDefault();
	        } else if (this.options.eventPassthrough === 'vertical') {
	          this.initiated = false;
	          return;
	        }
	        deltaX = 0;
	      }

	      deltaX = this.hasHorizontalScroll ? deltaX : 0;
	      deltaY = this.hasVerticalScroll ? deltaY : 0;

	      var newX = this.x + deltaX;
	      var newY = this.y + deltaY;

	      if (newX > 0 || newX < this.maxScrollX) {
	        if (this.options.bounce) {
	          newX = this.x + deltaX / 3;
	        } else {
	          newX = newX > 0 ? 0 : this.maxScrollX;
	        }
	      }
	      if (newY > 0 || newY < this.maxScrollY) {
	        if (this.options.bounce) {
	          newY = this.y + deltaY / 3;
	        } else {
	          newY = newY > 0 ? 0 : this.maxScrollY;
	        }
	      }

	      this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
	      this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

	      if (!this.moved) {
	        this.moved = true;
	        this.trigger('scrollStart');
	      }

	      this._translate(newX, newY);

	      if (timestamp - this.startTime > this.options.momentumLimitTime) {
	        this.startTime = timestamp;
	        this.startX = this.x;
	        this.startY = this.y;

	        if (this.options.probeType === 1) {
	          this.trigger('scroll', {
	            x: this.x,
	            y: this.y
	          });
	        }
	      }

	      if (this.options.probeType > 1) {
	        this.trigger('scroll', {
	          x: this.x,
	          y: this.y
	        });
	      }

	      var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
	      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

	      var pX = this.pointX - scrollLeft;
	      var pY = this.pointY - scrollTop;

	      if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
	        this._end(e);
	      }
	    }
	  }, {
	    key: '_end',
	    value: function _end(e) {
	      if (!this.enabled || this.destroyed || _util.eventType[e.type] !== this.initiated) {
	        return;
	      }
	      this.initiated = false;

	      if (this.options.preventDefault && !(0, _util.preventDefaultException)(e.target, this.options.preventDefaultException)) {
	        e.preventDefault();
	      }

	      this.trigger('touchend', {
	        x: this.x,
	        y: this.y
	      });

	      if (this.resetPosition(this.options.bounceTime, _util.ease.bounce)) {
	        return;
	      }
	      this.isInTransition = false;

	      var newX = Math.round(this.x);
	      var newY = Math.round(this.y);

	      if (!this.moved) {
	        if (this.options.wheel) {
	          if (this.target && this.target.className === 'wheel-scroll') {
	            var index = Math.abs(Math.round(newY / this.itemHeight));
	            var _offset = Math.round((this.pointY + (0, _util.offset)(this.target).top - this.itemHeight / 2) / this.itemHeight);
	            this.target = this.items[index + _offset];
	          }
	          this.scrollToElement(this.target, this.options.adjustTime, true, true, _util.ease.swipe);
	        } else {
	          if (this.options.tap) {
	            (0, _util.tap)(e, this.options.tap);
	          }

	          if (this.options.click) {
	            (0, _util.click)(e);
	          }
	        }
	        this.trigger('scrollCancel');
	        return;
	      }

	      this.scrollTo(newX, newY);

	      this.endTime = +new Date();

	      var duration = this.endTime - this.startTime;
	      var absDistX = Math.abs(newX - this.startX);
	      var absDistY = Math.abs(newY - this.startY);

	      if (this._events.flick && duration < this.options.momentumLimitTime && absDistX < this.options.momentumLimitDistance && absDistY < this.options.momentumLimitDistance) {
	        this.trigger('flick');
	        return;
	      }

	      var time = 0;

	      if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
	        var momentumX = this.hasHorizontalScroll ? (0, _util.momentum)(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
	        var momentumY = this.hasVerticalScroll ? (0, _util.momentum)(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
	        newX = momentumX.destination;
	        newY = momentumY.destination;
	        time = Math.max(momentumX.duration, momentumY.duration);
	        this.isInTransition = 1;
	      } else {
	        if (this.options.wheel) {
	          newY = Math.round(newY / this.itemHeight) * this.itemHeight;
	          time = this.options.adjustTime;
	        }
	      }

	      var easing = _util.ease.swipe;
	      if (this.options.snap) {
	        var snap = this._nearestSnap(newX, newY);
	        this.currentPage = snap;
	        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
	        newX = snap.x;
	        newY = snap.y;

	        this.directionX = 0;
	        this.directionY = 0;
	        easing = _util.ease.bounce;
	      }

	      if (newX !== this.x || newY !== this.y) {
	        if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	          easing = _util.ease.swipeBounce;
	        }
	        this.scrollTo(newX, newY, time, easing);
	        return;
	      }

	      if (this.options.wheel) {
	        this.selectedIndex = Math.abs(this.y / this.itemHeight) | 0;
	      }
	      this.trigger('scrollEnd');
	    }
	  }, {
	    key: '_resize',
	    value: function _resize() {
	      var _this3 = this;

	      if (!this.enabled) {
	        return;
	      }

	      clearTimeout(this.resizeTimeout);
	      this.resizeTimeout = setTimeout(function () {
	        _this3.refresh();
	      }, this.options.resizePolling);
	    }
	  }, {
	    key: '_startProbe',
	    value: function _startProbe() {
	      (0, _util.cancelAnimationFrame)(this.probeTimer);
	      this.probeTimer = (0, _util.requestAnimationFrame)(probe);

	      var me = this;

	      function probe() {
	        var pos = me.getComputedPosition();
	        me.trigger('scroll', pos);
	        if (me.isInTransition) {
	          me.probeTimer = (0, _util.requestAnimationFrame)(probe);
	        }
	      }
	    }
	  }, {
	    key: '_transitionTime',
	    value: function _transitionTime() {
	      var _this4 = this;

	      var time = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.scrollerStyle[_util.style.transitionDuration] = time + 'ms';

	      if (this.options.wheel && !_util.isBadAndroid) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].style[_util.style.transitionDuration] = time + 'ms';
	        }
	      }

	      if (!time && _util.isBadAndroid) {
	        this.scrollerStyle[_util.style.transitionDuration] = '0.001s';

	        (0, _util.requestAnimationFrame)(function () {
	          if (_this4.scrollerStyle[_util.style.transitionDuration] === '0.0001ms') {
	            _this4.scrollerStyle[_util.style.transitionDuration] = '0s';
	          }
	        });
	      }
	    }
	  }, {
	    key: '_transitionTimingFunction',
	    value: function _transitionTimingFunction(easing) {
	      this.scrollerStyle[_util.style.transitionTimingFunction] = easing;

	      if (this.options.wheel && !_util.isBadAndroid) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].style[_util.style.transitionTimingFunction] = easing;
	        }
	      }
	    }
	  }, {
	    key: '_transitionEnd',
	    value: function _transitionEnd(e) {
	      if (e.target !== this.scroller || !this.isInTransition) {
	        return;
	      }

	      this._transitionTime();
	      if (!this.resetPosition(this.options.bounceTime, _util.ease.bounce)) {
	        this.isInTransition = false;
	        this.trigger('scrollEnd');
	      }
	    }
	  }, {
	    key: '_translate',
	    value: function _translate(x, y) {
	      if (this.options.useTransform) {
	        this.scrollerStyle[_util.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	      } else {
	        x = Math.round(x);
	        y = Math.round(y);
	        this.scrollerStyle.left = x + 'px';
	        this.scrollerStyle.top = y + 'px';
	      }

	      if (this.options.wheel && !_util.isBadAndroid) {
	        for (var i = 0; i < this.items.length; i++) {
	          var deg = this.options.rotate * (y / this.itemHeight + i);
	          this.items[i].style[_util.style.transform] = 'rotateX(' + deg + 'deg)';
	        }
	      }

	      this.x = x;
	      this.y = y;
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      this.enabled = true;
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.enabled = false;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      var rf = this.wrapper.offsetHeight;

	      this.wrapperWidth = parseInt(this.wrapper.style.width) || this.wrapper.clientWidth;
	      this.wrapperHeight = parseInt(this.wrapper.style.height) || this.wrapper.clientHeight;

	      this.scrollerWidth = parseInt(this.scroller.style.width) || this.scroller.clientWidth;
	      this.scrollerHeight = parseInt(this.scroller.style.height) || this.scroller.clientHeight;
	      if (this.options.wheel) {
	        this.items = this.scroller.children;
	        this.options.itemHeight = this.itemHeight = this.items.length ? this.items[0].clientHeight : 0;
	        if (this.selectedIndex === undefined) {
	          this.selectedIndex = this.options.selectedIndex;
	        }
	        this.options.startY = -this.selectedIndex * this.itemHeight;
	        this.maxScrollX = 0;
	        this.maxScrollY = -this.itemHeight * (this.items.length - 1);
	      } else {
	        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
	      }

	      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
	      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

	      if (!this.hasHorizontalScroll) {
	        this.maxScrollX = 0;
	        this.scrollerWidth = this.wrapperWidth;
	      }

	      if (!this.hasVerticalScroll) {
	        this.maxScrollY = 0;
	        this.scrollerHeight = this.wrapperHeight;
	      }

	      this.endTime = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	      this.wrapperOffset = (0, _util.offset)(this.wrapper);

	      this.trigger('refresh');

	      this.resetPosition();
	    }
	  }, {
	    key: 'resetPosition',
	    value: function resetPosition() {
	      var time = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var easeing = arguments.length <= 1 || arguments[1] === undefined ? _util.ease.bounce : arguments[1];

	      var x = this.x;
	      if (!this.hasHorizontalScroll || x > 0) {
	        x = 0;
	      } else if (x < this.maxScrollX) {
	        x = this.maxScrollX;
	      }

	      var y = this.y;
	      if (!this.hasVerticalScroll || y > 0) {
	        y = 0;
	      } else if (y < this.maxScrollY) {
	        y = this.maxScrollY;
	      }

	      if (x === this.x && y === this.y) {
	        return false;
	      }

	      this.scrollTo(x, y, time, easeing);

	      return true;
	    }
	  }, {
	    key: 'wheelTo',
	    value: function wheelTo(selectIndex) {
	      if (this.options.wheel) {
	        this.y = -selectIndex * this.itemHeight;
	        this.scrollTo(0, this.y);
	      }
	    }
	  }, {
	    key: 'scrollBy',
	    value: function scrollBy(x, y) {
	      var time = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	      var easing = arguments.length <= 3 || arguments[3] === undefined ? _util.ease.bounce : arguments[3];

	      x = this.x + x;
	      y = this.y + y;

	      this.scrollTo(x, y, time, easing);
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(x, y, time) {
	      var easing = arguments.length <= 3 || arguments[3] === undefined ? _util.ease.bounce : arguments[3];

	      this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

	      if (!time || this.options.useTransition) {
	        this._transitionTimingFunction(easing.style);
	        this._transitionTime(time);
	        this._translate(x, y);

	        if (time && this.options.probeType === 3) {
	          this._startProbe();
	        }

	        if (this.options.wheel) {
	          if (y > 0) {
	            this.selectedIndex = 0;
	          } else if (y < this.maxScrollY) {
	            this.selectedIndex = this.items.length - 1;
	          } else {
	            this.selectedIndex = Math.abs(y / this.itemHeight) | 0;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'getSelectedIndex',
	    value: function getSelectedIndex() {
	      return this.options.wheel && this.selectedIndex;
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      return this.options.snap && this.currentPage;
	    }
	  }, {
	    key: 'scrollToElement',
	    value: function scrollToElement(el, time, offsetX, offsetY, easing) {
	      if (!el) {
	        return;
	      }
	      el = el.nodeType ? el : this.scroller.querySelector(el);

	      if (this.options.wheel && el.className !== 'wheel-item') {
	        return;
	      }

	      var pos = (0, _util.offset)(el);
	      pos.left -= this.wrapperOffset.left;
	      pos.top -= this.wrapperOffset.top;

	      if (offsetX === true) {
	        offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
	      }
	      if (offsetY === true) {
	        offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
	      }

	      pos.left -= offsetX || 0;
	      pos.top -= offsetY || 0;
	      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
	      pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

	      if (this.options.wheel) {
	        pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
	      }

	      time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

	      this.scrollTo(pos.left, pos.top, time, easing);
	    }
	  }, {
	    key: 'getComputedPosition',
	    value: function getComputedPosition() {
	      var matrix = window.getComputedStyle(this.scroller, null);
	      var x = void 0;
	      var y = void 0;

	      if (this.options.useTransform) {
	        matrix = matrix[_util.style.transform].split(')')[0].split(', ');
	        x = +(matrix[12] || matrix[4]);
	        y = +(matrix[13] || matrix[5]);
	      } else {
	        x = +matrix.left.replace(/[^-\d.]/g, '');
	        y = +matrix.top.replace(/[^-\d.]/g, '');
	      }

	      return {
	        x: x,
	        y: y
	      };
	    }
	  }, {
	    key: 'goToPage',
	    value: function goToPage(x, y, time) {
	      var easing = arguments.length <= 3 || arguments[3] === undefined ? _util.ease.bounce : arguments[3];

	      if (x >= this.pages.length) {
	        x = this.pages.length - 1;
	      } else if (x < 0) {
	        x = 0;
	      }

	      if (y >= this.pages[x].length) {
	        y = this.pages[x].length - 1;
	      } else if (y < 0) {
	        y = 0;
	      }

	      var posX = this.pages[x][y].x;
	      var posY = this.pages[x][y].y;

	      time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

	      this.currentPage = {
	        x: posX,
	        y: posY,
	        pageX: x,
	        pageY: y
	      };
	      this.scrollTo(posX, posY, time, easing);
	    }
	  }, {
	    key: 'next',
	    value: function next(time, easing) {
	      var x = this.currentPage.pageX;
	      var y = this.currentPage.pageY;

	      x++;
	      if (x >= this.pages.length && this.hasVerticalScroll) {
	        x = 0;
	        y++;
	      }

	      this.goToPage(x, y, time, easing);
	    }
	  }, {
	    key: 'prev',
	    value: function prev(time, easing) {
	      var x = this.currentPage.pageX;
	      var y = this.currentPage.pageY;

	      x--;
	      if (x < 0 && this.hasVerticalScroll) {
	        x = 0;
	        y--;
	      }

	      this.goToPage(x, y, time, easing);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._removeEvents();

	      this.destroyed = true;
	      this.trigger('destroy');
	    }
	  }, {
	    key: 'handleEvent',
	    value: function handleEvent(e) {
	      switch (e.type) {
	        case 'touchstart':
	        case 'mousedown':
	          this._start(e);
	          break;
	        case 'touchmove':
	        case 'mousemove':
	          this._move(e);
	          break;
	        case 'touchend':
	        case 'mouseup':
	        case 'touchcancel':
	        case 'mousecancel':
	          this._end(e);
	          break;
	        case 'orientationchange':
	        case 'resize':
	          this._resize();
	          break;
	        case 'transitionend':
	        case 'webkitTransitionEnd':
	        case 'oTransitionEnd':
	        case 'MSTransitionEnd':
	          this._transitionEnd(e);
	          break;
	        case 'click':
	          if (this.enabled && !e._constructed && !/(SELECT|INPUT|TEXTAREA)/i.test(e.target.tagName)) {
	            e.preventDefault();
	            e.stopPropagation();
	          }
	          break;
	      }
	    }
	  }]);

	  return BScroll;
	}(_util.EventEmitter);

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(3);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

	var _env = __webpack_require__(4);

	Object.keys(_env).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _env[key];
	    }
	  });
	});

	var _ease = __webpack_require__(5);

	Object.keys(_ease).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ease[key];
	    }
	  });
	});

	var _eventEmitter = __webpack_require__(6);

	Object.keys(_eventEmitter).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _eventEmitter[key];
	    }
	  });
	});

	var _momentum = __webpack_require__(7);

	Object.keys(_momentum).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _momentum[key];
	    }
	  });
	});

	var _lang = __webpack_require__(8);

	Object.keys(_lang).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lang[key];
	    }
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.offset = offset;
	exports.getRect = getRect;
	exports.preventDefaultException = preventDefaultException;
	exports.tap = tap;
	exports.click = click;
	exports.prepend = prepend;
	exports.before = before;
	var elementStyle = document.createElement('div').style;

	var vendor = function () {
	  var transformNames = {
	    webkit: 'webkitTransform',
	    Moz: 'MozTransform',
	    O: 'OTransform',
	    ms: 'msTransform',
	    standard: 'transform'
	  };

	  for (var key in transformNames) {
	    if (elementStyle[transformNames[key]] !== undefined) {
	      return key;
	    }
	  }

	  return false;
	}();

	function prefixStyle(style) {
	  if (vendor === false) {
	    return false;
	  }

	  if (vendor === 'standard') {
	    return style;
	  }

	  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	function addEvent(el, type, fn, capture) {
	  el.addEventListener(type, fn, { passive: false, capture: !!capture });
	};

	function removeEvent(el, type, fn, capture) {
	  el.removeEventListener(type, fn, !!capture);
	};

	function offset(el) {
	  var left = 0;
	  var top = 0;

	  while (el) {
	    left -= el.offsetLeft;
	    top -= el.offsetTop;
	    el = el.offsetParent;
	  }

	  return {
	    left: left,
	    top: top
	  };
	};

	var transform = prefixStyle('transform');

	var hasPerspective = exports.hasPerspective = prefixStyle('perspective') in elementStyle;
	var hasTouch = exports.hasTouch = 'ontouchstart' in window;
	var hasTransform = exports.hasTransform = transform !== false;
	var hasTransition = exports.hasTransition = prefixStyle('transition') in elementStyle;

	var style = exports.style = {
	  transform: transform,
	  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
	  transitionDuration: prefixStyle('transitionDuration'),
	  transitionDelay: prefixStyle('transitionDelay'),
	  transformOrigin: prefixStyle('transformOrigin'),
	  transitionEnd: prefixStyle('transitionEnd')
	};

	var TOUCH_EVENT = 1;
	var MOUSE_EVENT = 2;
	var eventType = exports.eventType = {
	  touchstart: TOUCH_EVENT,
	  touchmove: TOUCH_EVENT,
	  touchend: TOUCH_EVENT,

	  mousedown: MOUSE_EVENT,
	  mousemove: MOUSE_EVENT,
	  mouseup: MOUSE_EVENT
	};

	function getRect(el) {
	  if (el instanceof window.SVGElement) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top,
	      left: rect.left,
	      width: rect.width,
	      height: rect.height
	    };
	  } else {
	    return {
	      top: el.offsetTop,
	      left: el.offsetLeft,
	      width: el.offsetWidth,
	      height: el.offsetHeight
	    };
	  }
	};

	function preventDefaultException(el, exceptions) {
	  for (var i in exceptions) {
	    if (exceptions[i].test(el[i])) {
	      return true;
	    }
	  }
	  return false;
	}

	function tap(e, eventName) {
	  var ev = document.createEvent('Event');
	  ev.initEvent(eventName, true, true);
	  ev.pageX = e.pageX;
	  ev.pageY = e.pageY;
	  e.target.dispatchEvent(ev);
	};

	function click(e) {
	  var target = e.target;

	  if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
	    var ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
	    ev.initEvent('click', true, true);
	    ev._constructed = true;
	    target.dispatchEvent(ev);
	  }
	};

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isBadAndroid = exports.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var ease = exports.ease = {
		swipe: {
			style: 'cubic-bezier(0.23, 1, 0.32, 1)',
			fn: function fn(t) {
				return 1 + --t * t * t * t * t;
			}
		},

		swipeBounce: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function fn(t) {
				return t * (2 - t);
			}
		},

		bounce: {
			style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
			fn: function fn(t) {
				return 1 - --t * t * t * t;
			}
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventEmitter = exports.EventEmitter = function () {
		function EventEmitter() {
			_classCallCheck(this, EventEmitter);

			this._events = {};
		}

		_createClass(EventEmitter, [{
			key: "on",
			value: function on(type, fn) {
				var context = arguments.length <= 2 || arguments[2] === undefined ? this : arguments[2];

				if (!this._events[type]) {
					this._events[type] = [];
				}

				this._events[type].push([fn, context]);
			}
		}, {
			key: "once",
			value: function once(type, fn) {
				var context = arguments.length <= 2 || arguments[2] === undefined ? this : arguments[2];

				var fired = false;

				function magic() {
					this.off(type, magic);

					if (!fired) {
						fired = true;
						fn.apply(context, arguments);
					}
				}

				this.on(type, magic);
			}
		}, {
			key: "off",
			value: function off(type, fn) {
				var _events = this._events[type];
				if (!_events) {
					return;
				}

				var count = _events.length;
				while (count--) {
					if (_events[count][0] === fn) {
						_events[count][0] = undefined;
					}
				}
			}
		}, {
			key: "trigger",
			value: function trigger(type) {
				var events = this._events[type];
				if (!events) {
					return;
				}

				var len = events.length;
				var eventsCopy = [].concat(_toConsumableArray(events));
				for (var i = 0; i < len; i++) {
					var event = eventsCopy[i];

					var _event = _slicedToArray(event, 2);

					var fn = _event[0];
					var context = _event[1];

					if (fn) {
						fn.apply(context, [].slice.call(arguments, 1));
					}
				}
			}
		}]);

		return EventEmitter;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.momentum = momentum;
	function momentum(current, start, time, lowerMargin, wrapperSize, options) {
		var distance = current - start;
		var speed = Math.abs(distance) / time;

		var deceleration = options.deceleration;
		var itemHeight = options.itemHeight;
		var swipeBounceTime = options.swipeBounceTime;
		var bounceTime = options.bounceTime;

		var duration = options.swipeTime;
		var rate = options.wheel ? 4 : 15;

		var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

		if (options.wheel && itemHeight) {
			destination = Math.round(destination / itemHeight) * itemHeight;
		}

		if (destination < lowerMargin) {
			destination = wrapperSize ? lowerMargin - wrapperSize / rate * speed : lowerMargin;
			duration = swipeBounceTime - bounceTime;
		} else if (destination > 0) {
			destination = wrapperSize ? wrapperSize / rate * speed : 0;
			duration = swipeBounceTime - bounceTime;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.extend = extend;
	function extend(target, source) {
		for (var key in source) {
			target[key] = source[key];
		}
	};

	var DEFAULT_INTERVAL = 100 / 60;

	var requestAnimationFrame = exports.requestAnimationFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
			return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2);
		};
	}();

	var cancelAnimationFrame = exports.cancelAnimationFrame = function () {
		return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
			window.clearTimeout(id);
		};
	}();

/***/ }
/******/ ])
});
;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABICAMAAADbJ8U9AAABd1BMVEUAAAD////p6en/01nq6ur/1WDl5eX/02Hm5ub/1lLo6Oj34Jv/2FXm5ub/0lnm5ub/01fn5+f/2VXo6Oj/2lPl5eX/11jl5eX/2Fbm5ub/2VXn5+f/11jn5+f/2Fbl5eX/11Tl5eX/1VXl5eX/1Vfk5OT/1Vfl5eX/1FXm5ub/1VTk5OT/1Fbl5eX/1VTm5ub/1Fbm5ub/1VXk5OT/1Vbl5eX/1Ffl5eX/1Fbl5eX/1VPm5ub/01Xl5eX/1Vbl5eX33Z7/1VXk5OT/11Tl5eX/1lTl5eX/1Vbl5eX/1lTl5eX/1lbk5OT/1VXl5eX/1lTl5eX/1VXk5OT/01Xk5OT/1VXl5eX/1lXl5eX/1VXk5OT/01Xk5OT/1lTk5OT/1VXl5eX/1lTk5OT/1VXk5OT/1VTl5eX/1VTl5eX/1VTl5eX/1FTl5eX/01Xk5OT/1VTk5OT/01Xl5eX/01Xl5eX/1VTl5eX/1VXl5eX/1VTk5OT13J3/1FQ8I1LTAAAAenRSTlMAARcXGBgdHR8fISEhKCgpKTY2Nzc6Ojs7PDxAQEFBRkZOTk9PVVVaWltbX19hYWVlZmZoaGpqa2tubm9vdHR+fn6FhYiIkpKUlJWVmZmamp+foqK1tbm5u7u+vr+/wMDFxePj5OTs7PHx9PT19fn5+vr7+/z8/f3+/kb4OZoAAAFqSURBVDjL1dLbS8JQHMDxn1NrRVnObd2sbOuy13ox6MGEwNcu/6kIglD2EFbQBQpK/AO6ucwJReo2m+7iDv72sAej9rCdne/YzmEfgKEcafcN1R/yO3E8pCGFBnYNVuax0P1CCgnMhnESZ50QAIiw8akIzQe7t5r8XVee5HovbGWC5LK14gWAMffcEIii5a+gF+D1Qwj159u5O7ACVGUhbM83sw/gBHjXRDuc3RDL1Z036eQ+OCdwZOCdwFhXazk0gFI+T0rR7sgVwtxnpdCG49M9KTbadO1p6WjCGo0dJNybDXiM/8Kx6+lqwberxJxvV8IM6qrTAd10pZCujGD+3eIl6krPX6Ou1Nw96qqVffRwdTtUV6WkNI27OjFcMSMt1BW9v/xfXKU8XHF+XcVWfbqKrg+4mjRd9R4hXG1mKHLZtqsXRaRwV281MYi7kqtiCHdVU3/HVaNc2h5wFWK/KgUVcbV4OD5EVz+yTYdJySS51AAAAABJRU5ErkJggg=="

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(89)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\cartcontrol.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cartcontrol.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdb4f9fa", Component.options)
  } else {
    hotAPI.reload("data-v-fdb4f9fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39fd4137", Component.options)
  } else {
    hotAPI.reload("data-v-39fd4137", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\star.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] star.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75fe76fc", Component.options)
  } else {
    hotAPI.reload("data-v-75fe76fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  "data-v-76765b2e",
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76765b2e", Component.options)
  } else {
    hotAPI.reload("data-v-76765b2e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(83)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\estimate.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] estimate.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13e93c5c", Component.options)
  } else {
    hotAPI.reload("data-v-13e93c5c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(82)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\menu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] menu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03933789", Component.options)
  } else {
    hotAPI.reload("data-v-03933789", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-2a6e8e1e",
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\merchants.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] merchants.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a6e8e1e", Component.options)
  } else {
    hotAPI.reload("data-v-2a6e8e1e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v2.2.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // inject instance registration hooks
    var hooks = data.hook || (data.hook = {});
    hooks.init = function (vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.prepatch = function (oldVnode, vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.destroy = function (vnode) {
      if (matched.instances[name] === vnode.child) {
        matched.instances[name] = undefined;
      }
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more comformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery;
    try {
      parsedQuery = parseQuery(query);
    } catch (e) {
      process.env.NODE_ENV !== 'production' && warn(false, e.message);
      parsedQuery = {};
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key];
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
    var compareTarget = location.path ? createRoute(null, location) : route;
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.target && e.target.getAttribute) {
    var target = e.target.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (
  routes,
  oldPathMap,
  oldNameMap
) {
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null);

function getRouteRegex (path) {
  var hit = regexpCache[path];
  var keys, regexp;

  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/';
  var query = resolveQuery(parsedPath.query, next.query);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      process.env.NODE_ENV !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      );
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) { params[key.name] = val; }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */


var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
  }
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, onAbort);
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function () { onAbort && onAbort(); };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true);
        abort();
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
        abort();
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  return function boundRouteGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = once(function (resolvedDef) {
          match.components[key] = resolvedDef;
          next();
        });

        var reject = once(function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason));
          next(false);
        });

        var res = def(resolve, reject);
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject);
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || []);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.onReady = function onReady (cb) {
  this.history.onReady(cb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(to, current || this.history.current, append);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.2.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = VueRouter;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(14);
var Axios = __webpack_require__(27);
var defaults = __webpack_require__(8);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(11);
axios.CancelToken = __webpack_require__(26);
axios.isCancel = __webpack_require__(12);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(41);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(11);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(8);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(28);
var dispatchRequest = __webpack_require__(29);
var isAbsoluteURL = __webpack_require__(37);
var combineURLs = __webpack_require__(35);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(32);
var isCancel = __webpack_require__(12);
var defaults = __webpack_require__(8);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(13);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_header_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vue_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_flexible__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_flexible___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_flexible__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app',
  data() {
    return {
      shop: {}
    };
  },
  created: function () {
    __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('static/goodsData.json').then(res => {
      var shopData = res.data.data;
      this.shop = shopData.shopInfo;
    });
  },
  components: {
    //子组件v-header
    'v-header': __WEBPACK_IMPORTED_MODULE_0__components_vue_header_vue___default.a
  }

};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_flexible_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_flexible_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_flexible_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartcontrol_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartcontrol_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cartcontrol_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_scroll__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        //指定selectFoods的类型为数组
        selectFoods: {
            type: Array
        },
        shop: {
            type: Object
        }
    },
    data() {
        return {
            dish: {},
            flag: true,
            showDialog: false
        };
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.selectFoods.forEach(item => {
                this.dish = item;
                //当商品有count和discountPrice属性时,计算总价格
                if (item.count && item.discountPrice) {
                    total += item.discountPrice * item.count;
                    //解决转换成二进制而计算不准确的问题
                    total = parseInt(total * 100) / 100;
                }
            });
            return total;
        },
        totalCount() {
            let count = 0;
            this.selectFoods.forEach(item => {
                if (item.count) {
                    count += item.count;
                }
            });
            return count;
        },
        cartShow() {
            //vue对象不存在totalCount说明购物车里没有物品,点击购物车不显示
            if (!this.totalCount) {
                this.flag = true;
                return false;
            }
            let show = !this.flag;
            if (show) {
                this.$nextTick(() => {
                    //显示购物车,并设置可以滚动
                    if (!this.scroll) {
                        this.scroll = new __WEBPACK_IMPORTED_MODULE_2_better_scroll___default.a(this.$refs.listContent, {
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                });
            }
            return show;
        }
    },
    methods: {
        goAccount() {
            window.alert(`支付${this.totalPrice + this.shop.deliveryFee}元`);
        },

        toggleList() {
            //当vue对象有属性totalCount说明购物车里有物品,可以点击弹出购物车清单,
            //否则不能点击
            if (!this.totalCount) {
                return false;
            }
            //让购物车点击隐藏再点击显示切换
            this.flag = !this.flag;
        },
        hideList() {
            this.flag = true;
        },
        clearCart() {
            var self = this;
            self.showDialog = true;
            var confirmBtn = document.getElementById('confirm');
            var cancelBtn = document.getElementsByClassName('cancel')[0];
            if (self.showDialog) {
                confirmBtn.addEventListener('click', function () {
                    self.selectFoods.forEach(item => {
                        item.count = 0;
                        self.showDialog = false; //防止点击购物车icon直接出现对话框
                        self.flag = true; //防止清空购物车后再次点击加入购物车出现购物车弹出
                    });
                });
                cancelBtn.addEventListener('click', function () {
                    self.showDialog = false;
                });
            }
        }
    },
    components: {
        cartControl: __WEBPACK_IMPORTED_MODULE_1__cartcontrol_vue___default.a
    }
};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        addCart(event) {
            //判断food是否存在count计数属性
            if (!this.food.count) {
                //使用vue的set方法给food添加一个count属性,并设置值为1
                __WEBPACK_IMPORTED_MODULE_0_vue__["default"].set(this.food, 'count', 1);
            } else {
                this.food.count++;
            }
            //this.$emit('add', event.target);
        },
        decreaseCart(event) {
            if (this.food.count) {
                this.food.count--;
            }
        }
    }
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_flexible_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_flexible_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_flexible_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            cmt: {},
            list: [],
            defaultUserPic: 'http://xs01.meituan.net/waimai_i/img/friend/userpic_defalut.c741e924.png'
        };
    },
    created() {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('static/shopComment.json').then(res => {
            this.cmt = res.data.data;
            this.list = res.data.data.list;
        });
    },
    components: {
        star: __WEBPACK_IMPORTED_MODULE_0__star_vue___default.a
    }
};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: {
    shop: {
      type: Object
    }
  },
  data() {
    return {};
  }
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_flexible__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_flexible___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_flexible__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__cart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cartcontrol_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cartcontrol_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__cartcontrol_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_better_scroll__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_better_scroll__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            shop: {},
            goods: [],
            dishCategory: [],
            listHeight: [],
            scrollY: 0
        };
    },
    computed: {
        currentIndex() {
            for (let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i + 1];
                //使用scrollY判断当前是否滚动到第i和第i+1列列表之间,
                // 如果是返回i,得到右侧列表索引i,否则返回0
                //然后在左侧li标签中添加:class="{'current':currentIndex === index}
                //当currentIndex和左侧索引值相等时li才有current类名
                if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
                    return i;
                }
            }
            return 0;
        },
        selectFoods() {
            let self = this,
                foods = [];
            //dishCategory为商品种类
            let dishList = self.dishCategory;
            dishList.forEach(item => {
                //dishList为商品信息列表
                var foodItem = item.dishList;
                foodItem.forEach(food => {
                    if (food.count) {
                        //food为单个商品信息,将下单的商品信息(包含商品数量属性count)放到foods数组中
                        foods.push(food);
                    }
                });
            });
            return foods;
        }
    },
    created() {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('static/goodsData.json').then(res => {
            let shopData = res.data.data;
            self.shop = shopData.shopInfo;
            self.dishCategory = shopData.dishCategory;
            //点击事件放在$nextTick里,会等到页面加载完成才会执行.
            self.$nextTick(() => {
                self._initScroll();
                self._calculateHeight();
            });
        });
    },
    methods: {
        selectMenu(index) {
            let dishList = this.$refs.dishList;
            let $el = dishList[index];
            this.foodsScroll.scrollToElement($el, 300);
        },
        _initScroll() {
            this.meunScroll = new __WEBPACK_IMPORTED_MODULE_5_better_scroll___default.a(this.$refs.menuWrapper, {
                //启用点击事件,click为true
                click: true
            });

            this.foodsScroll = new __WEBPACK_IMPORTED_MODULE_5_better_scroll___default.a(this.$refs.foodsWrapper, {
                click: true,
                //probeType值为3实时探测滚动的位置
                probeType: 3
            });

            this.foodsScroll.on('scroll', pos => {
                //将当前滚动到的位置scrollY取整
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        _calculateHeight() {
            let foodList = this.$refs.dishList;
            let height = 0;
            this.listHeight.push(height);
            for (let i = 0; i < foodList.length; i++) {
                let item = foodList[i];
                //使用clientHeight计算右侧每列的高
                height += item.clientHeight;
                //将右侧每列的高存到数组listHeight
                this.listHeight.push(height);
            }
        }
    },
    components: {
        'cart': __WEBPACK_IMPORTED_MODULE_3__cart_vue___default.a,
        'cartControl': __WEBPACK_IMPORTED_MODULE_4__cartcontrol_vue___default.a
    }
};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_flexible_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_flexible_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_flexible_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__star_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            shopInfo: {}
        };
    },
    created() {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('static/shopInfo.json').then(res => {
            this.shopInfo = res.data.data;
        });
    },
    components: {
        star: __WEBPACK_IMPORTED_MODULE_2__star_vue___default.a
    }
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_flexible_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_flexible_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_flexible_js__);
//
//
//
//
//
//


const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        score: {
            type: Number
        }
    },
    computed: {
        itemClasses() {
            let result = [];
            let score = Math.floor(this.score * 2) / 2;
            let hasDecimal = String(this.score).indexOf(".") > -1;
            let integer = Math.floor(score);
            for (let i = 0; i < integer; i++) {
                result.push(CLS_ON);
            }
            if (hasDecimal) {
                result.push(CLS_HALF);
            }
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }
            return result;
        }
    }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\n.webkit-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.m-menu {\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  top: 3.27777778rem;\n  bottom: 1.38888889rem;\n  width: 100%;\n  overflow: hidden;\n}\n.m-menu .menu-wrap {\n  -webkit-box-flex: 0;\n  width: 23%;\n  background: #f8f8f8;\n}\n.m-menu .menu-wrap .menu-list .menu-item {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  color: #666;\n  border-bottom: 0.02777778rem solid #f3f0f0;\n  border-right: 0.02777778rem solid #f3f0f0;\n  font-size: 0.33333333rem;\n  line-height: 0.44444444rem;\n  padding: 0.33333333rem 0rem 0.33333333rem 0.27777778rem;\n  background-color: #fafafa;\n}\n.m-menu .menu-wrap .menu-list .menu-item.current {\n  position: relative;\n  color: #666;\n  background-color: #fff;\n  border-right: 1px solid #f4f4f4;\n  padding-left: 0.27777778rem;\n}\n.m-menu .menu-wrap .menu-list .menu-item.current::before {\n  position: absolute;\n  content: '';\n  top: 25%;\n  left: 0;\n  height: 50%;\n  border-left: solid #ffd161 0.08333333rem;\n}\n.m-menu .foods-wrap {\n  width: 77%;\n}\n.m-menu .foods-wrap .foods-list {\n  background-color: #fff;\n}\n.m-menu .foods-wrap .foods-list .title {\n  text-align: left;\n  padding: 0.13888889rem 0;\n  text-indent: 0.27777778rem;\n  font-size: 0.33333333rem;\n  line-height: 1;\n  color: #666;\n  background-color: #f8f8f8;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  z-index: 10;\n}\n.m-menu .foods-wrap .foods-list ul .food-item {\n  position: relative;\n  color: #323232;\n  padding: 0.33333333rem 0 0 0.27777778rem;\n  border-bottom: 0.02777778rem solid #f3f0f0;\n  line-height: 0.97222222rem;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  padding: 0 0.27777778rem 0.11111111rem 0;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .img {\n  height: 1.66666667rem;\n  width: 1.66666667rem;\n  border-radius: 0.11111111rem;\n  border: 0.02777778rem solid #f3f0f0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .img img {\n  height: 100%;\n  width: 100%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content {\n  padding-left: 0.13888889rem;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1;\n  -ms-flex: 1 1;\n  flex: 1 1;\n  min-width: 0;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .name {\n  font-size: 0.44444444rem;\n  line-height: 0.61111111rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #444;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .description {\n  padding-top: 0.05555556rem;\n  padding-bottom: 0.05555556rem;\n  font-size: 0.33333333rem;\n  color: #999;\n  line-height: 0.44444444rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .extra {\n  padding-top: 0.02777778rem;\n  font-size: 0.33333333rem;\n  color: #999;\n  line-height: 0.44444444rem;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .extra .count {\n  margin-right: 0.41666667rem;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .deal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  line-height: 1.5em;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .deal .price {\n  color: #fb4e44;\n  font-size: 0.5rem;\n}\n.m-menu .foods-wrap .foods-list ul .food-item .dish-basic .content .deal .cart-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\n.webkit-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.comment-wrap .m-comment {\n  display: -webkit-box;\n  width: 100%;\n  margin: 0.27777778rem 0;\n  background-color: #fff;\n}\n.comment-wrap .m-comment .info-left {\n  margin: 0.41666667rem 0 0.41666667rem;\n  text-align: center;\n  width: 40%;\n  border-right: 0.02777778rem solid #d8d8d8;\n}\n.comment-wrap .m-comment .info-left .info-score {\n  line-height: 0.88888889rem;\n  font-size: 0.97222222rem;\n  color: #FEC520;\n}\n.comment-wrap .m-comment .info-left .info-desc {\n  line-height: 0.58333333rem;\n  font-size: 0.38888889rem;\n  color: #656565;\n}\n.comment-wrap .m-comment .info-left .info-good {\n  color: #A9A9A9;\n  font-size: 0.30555556rem;\n  line-height: 0.41666667rem;\n}\n.comment-wrap .m-comment .info-right {\n  margin: 0.41666667rem 0 0.41666667rem;\n  text-align: center;\n  width: 60%;\n}\n.comment-wrap .m-comment .info-right .info-star {\n  margin-bottom: 0.5rem;\n  margin-top: 0.13888889rem;\n}\n.comment-wrap .m-comment .info-right .info-star p {\n  display: inline-block;\n  height: 0.33333333rem;\n  margin: 0.13888889rem 0.13888889rem 0 0.27777778rem;\n}\n.comment-wrap .m-comment .info-right .info-star p .delivery-star {\n  background: url(" + __webpack_require__(16) + ") 40% 5.66% no-repeat;\n  width: 0.33333333rem;\n  height: 0.33333333rem;\n  float: left;\n  margin-right: 0.02777778rem;\n  background-size: 126% 379%;\n}\n.comment-wrap .m-cmtType {\n  background-color: #fff;\n  padding: 0.41666667rem 0.38888889rem 0.13888889rem 0.38888889rem;\n  margin-bottom: 0.27777778rem;\n}\n.comment-wrap .m-cmtType span {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 0.38888889rem;\n  height: 0.83333333rem;\n  line-height: 0.83333333rem;\n  margin: 0rem 0.27777778rem 0.27777778rem 0rem;\n  background: #FFF;\n  font-size: 0.36111111rem;\n  color: #656565;\n  text-align: center;\n  border-radius: 0.41666667rem;\n  border: 0.02777778rem solid #CCC;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content {\n  position: relative;\n  padding: 0.33333333rem 0.27777778rem;\n  margin-bottom: 0.27777778rem;\n  background-color: #fff;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-left {\n  position: absolute;\n  top: 0.55555556rem;\n  width: 15%;\n  display: inline-block;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-left img {\n  width: 1.11111111rem;\n  height: 1.11111111rem;\n  border-radius: 50%;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right {\n  position: relative;\n  left: 1.66666667rem;\n  top: 0.27777778rem;\n  display: inline-block;\n  width: 80%;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-sub {\n  line-height: 0.41666667rem;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-sub .name {\n  color: #2f2f2f;\n  font-size: 0.44444444rem;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-sub .time {\n  font-size: 0.33333333rem;\n  color: #898989;\n  float: right;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-star {\n  margin-top: 0.11111111rem;\n  line-height: 0.33333333rem;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-comment {\n  font-size: 0.38888889rem;\n  color: #2f2f2f;\n  margin-top: 0.27777778rem;\n  margin-bottom: 0.16666667rem;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-pic img {\n  width: 2.22222222rem;\n  height: 2.22222222rem;\n  background-size: cover;\n  margin-right: 0.13888889rem;\n  margin-bottom: 0.13888889rem;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-label {\n  margin: 0.11111111rem 0;\n  font-size: 0.33333333rem;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .evaluate-label .label {\n  width: 0.30555556rem;\n  height: 0.30555556rem;\n  margin-right: 0.11111111rem;\n  background: url(" + __webpack_require__(70) + ") no-repeat;\n  -webkit-background-size: contain;\n  background-size: contain;\n  display: inline-block;\n  vertical-align: middle;\n}\n.comment-wrap .evaluate-wrap .evaluate-list .content .evaluate-right .add-comment {\n  padding: 0.13888889rem 0.22222222rem;\n  background: #f4f4f4;\n  margin: 0.27777778rem 0;\n  font-size: 0.33333333rem;\n  color: #656565;\n  line-height: 0.41666667rem;\n}\n", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\n.webkit-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.common-footer {\n  position: fixed;\n  display: inline-block;\n  overflow: visible;\n  zoom: 1;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1001;\n  height: 1.38888889rem;\n  background-color: #000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.common-cart {\n  width: 1.38888889rem;\n  height: 1.38888889rem;\n}\n.cartfooter {\n  position: fixed;\n  display: inline-block;\n  overflow: visible;\n  zoom: 1;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1001;\n  height: 1.38888889rem;\n  background-color: #000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.cartfooter .container {\n  position: relative;\n  width: 100%;\n}\n.cartfooter .container .cart {\n  width: 1.38888889rem;\n  height: 1.38888889rem;\n  position: absolute;\n  left: 0.27777778rem;\n  top: -0.66666667rem;\n  background: url(" + __webpack_require__(58) + ") no-repeat;\n}\n.cartfooter .container p {\n  display: inline-block;\n  color: #999;\n  font-size: 0.38888889rem;\n}\n.cartfooter .container .min-del {\n  margin-left: 1.94444444rem;\n}\n.cartfooter .container .min-fee {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  position: absolute;\n  right: 0.55555556rem;\n  font-weight: bolder;\n  font-size: 0.44444444rem;\n}\n.new-cart {\n  position: fixed;\n  display: inline-block;\n  overflow: visible;\n  zoom: 1;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1001;\n  height: 1.38888889rem;\n  background-color: #000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.new-cart .box .cart-icon {\n  display: inline-block;\n  width: 1.38888889rem;\n  height: 1.38888889rem;\n  position: absolute;\n  left: 0.27777778rem;\n  top: -0.27777778rem;\n  z-index: 99999;\n  background: url(" + __webpack_require__(60) + ") no-repeat;\n}\n.new-cart .box .cart-icon .num {\n  position: absolute;\n  right: -0.27777778rem;\n  top: -0.27777778rem;\n  width: 0.83333333rem;\n  height: 0.83333333rem;\n  border-radius: 50%;\n  background-color: #fb4e44;\n  color: #fff;\n  text-align: center;\n  font-size: 0.5rem;\n  line-height: 0.83333333rem;\n  padding: 0.02777778rem;\n  -webkit-transform: scale(0.5);\n  font-style: normal;\n}\n.new-cart .box .price-box {\n  width: 100%;\n  padding: 0.22222222rem 0 0.22222222rem 1.94444444rem;\n  display: inline-block;\n}\n.new-cart .box .price-box .total {\n  color: #fff;\n  font-size: 0.66666667rem;\n  font-weight: bolder;\n  line-height: 0.72222222rem;\n}\n.new-cart .box .price-box .delivery {\n  color: #999;\n  font-size: 0.33333333rem;\n  line-height: 0.33333333rem;\n  padding-left: 0.11111111rem;\n}\n.new-cart .box .btn-submit {\n  position: absolute;\n  color: #000;\n  top: 0;\n  right: 0;\n  width: 3.05555556rem;\n  height: 1.38888889rem;\n  text-align: center;\n  font-size: 0.44444444rem;\n  font-weight: bolder;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: #ffd161;\n  line-height: 1.38888889rem;\n}\n.cart-panel-detail {\n  position: fixed;\n  bottom: 1.38888889rem;\n  width: 100%;\n  left: 0;\n}\n.cart-panel-detail::before {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  content: '';\n  background: rgba(0, 0, 0, 0.6);\n  display: block;\n  height: 100vh;\n  margin-bottom: 0.69444444rem;\n}\n.cart-panel-detail .shopcart-container {\n  position: fixed;\n  bottom: 1.38888889rem;\n  left: 0;\n  width: 100%;\n  z-index: 99999;\n}\n.cart-panel-detail .shopcart-container .cart-head {\n  background-color: #f4f4f4;\n  height: 0.83333333rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 0.41666667rem;\n  padding-right: 0.27777778rem;\n}\n.cart-panel-detail .shopcart-container .cart-head .clear-icon {\n  display: inline-block;\n  background: url(" + __webpack_require__(61) + ") no-repeat;\n  background-size: 0.36111111rem 0.36111111rem;\n  width: 0.36111111rem;\n  height: 100%;\n  margin-left: 6.11111111rem;\n  margin-top: 0.38888889rem;\n}\n.cart-panel-detail .shopcart-container .cart-content {\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  max-height: 5.55555556rem;\n  background-color: #fff;\n}\n.cart-panel-detail .shopcart-container .cart-content .dish-list {\n  color: #333;\n  text-align: right;\n  border-bottom: 0.02777778rem solid #e1e1e1;\n  line-height: 0.97222222rem;\n  height: 1.38888889rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0rem 0.27777778rem 0 0.41666667rem;\n}\n.cart-panel-detail .shopcart-container .cart-content .dish-list .name {\n  text-align: left;\n  font-size: 16 36rem;\n  line-height: 19 36rem;\n  width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding-right: 0.13888889rem;\n}\n.cart-panel-detail .shopcart-container .cart-content .dish-list .cartcontrol {\n  padding-top: 0.27777778rem;\n}\n.cart-panel-detail .dialog {\n  position: fixed;\n  left: 50%;\n  right: 50%;\n  top: 4.16666667rem;\n  width: 7.5rem;\n  border-radius: 0.11111111rem;\n  background-color: #fff;\n  margin-left: -3.75rem;\n  z-index: 1500;\n}\n.cart-panel-detail .dialog .content {\n  color: #000;\n  font-size: 0.38888889rem;\n  text-align: center;\n  margin: 0.44444444rem;\n}\n.cart-panel-detail .dialog .btn {\n  display: -webkit-box;\n  display: flex;\n}\n.cart-panel-detail .dialog .btn .cancel {\n  flex: 1;\n  color: #000;\n  border-right: 0.02777778rem solid #b6b6b6;\n  float: left;\n  display: inline-block;\n  border-top: 1px solid #b6b6b6;\n  padding: 0.38888889rem 0;\n  text-align: center;\n  text-decoration: none;\n}\n.cart-panel-detail .dialog .btn .confirm {\n  flex: 1;\n  color: #ffd161;\n  display: inline-block;\n  border-top: 1px solid #b6b6b6;\n  padding: 0.44444444rem 0;\n  text-decoration: none;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml[data-v-2a6e8e1e],\nbody[data-v-2a6e8e1e] {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n*[data-v-2a6e8e1e] {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul[data-v-2a6e8e1e] {\n  margin: 0;\n  padding: 0;\n}\nul li[data-v-2a6e8e1e] {\n  list-style: none;\n}\n.webkit-box[data-v-2a6e8e1e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box[data-v-2a6e8e1e] {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.common[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n}\n.shop-wrap .m-shop[data-v-2a6e8e1e] {\n  padding-top: 0.05555556rem;\n}\n.shop-wrap .m-shop .shopName[data-v-2a6e8e1e] {\n  padding: 0.38888889rem 0;\n  background: #fff;\n  border-bottom: 1px solid #f0f0f0;\n}\n.shop-wrap .m-shop .shopName .shop-item[data-v-2a6e8e1e] {\n  position: relative;\n  margin-left: 0.27777778rem;\n}\n.shop-wrap .m-shop .shopName .shop-item .info[data-v-2a6e8e1e] {\n  font-size: 0.33333333rem;\n  color: #999;\n  line-height: 0.33333333rem;\n}\n.shop-wrap .m-shop .shopName .shop-item .shop-tel[data-v-2a6e8e1e] {\n  position: absolute;\n  right: 0.27777778rem;\n  top: 0rem;\n}\n.shop-wrap .m-shop .shopName .shop-item .shop-tel a[data-v-2a6e8e1e] {\n  display: inline-block;\n  float: right;\n  background: url(" + __webpack_require__(71) + ");\n  background-size: 100% 100%;\n  width: 0.83333333rem;\n  height: 0.83333333rem;\n}\n.shop-wrap .shopDetail[data-v-2a6e8e1e] {\n  margin-top: 0.38888889rem;\n  background-color: #ffffff;\n  border-bottom: 0.02777778rem solid #f0f0f0;\n  border-top: 0.02777778rem solid #f0f0f0;\n}\n.shop-wrap .shopDetail p[data-v-2a6e8e1e] {\n  display: inline-block;\n  padding: 0.41666667rem 0;\n  width: 86%;\n  line-height: 0.55555556rem;\n  word-wrap: break-word;\n  margin-left: 0.27777778rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.shop-wrap .shopDetail p .broadcast[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(65) + ");\n}\n.shop-wrap .shopDetail p .time[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(59) + ");\n}\n.shop-wrap .shopDetail p .address[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(62) + ");\n}\n.shop-wrap .shopDetail p .img[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(72) + ");\n}\n.shop-wrap .other[data-v-2a6e8e1e] {\n  background-color: #fff;\n  margin-top: 0.27777778rem;\n  font-size: 0.38888889rem;\n}\n.shop-wrap .other p[data-v-2a6e8e1e] {\n  width: 92%;\n  display: inline-block;\n  margin-left: 0.27777778rem;\n  line-height: 0.44444444rem;\n  word-wrap: break-word;\n  margin-top: 0.27777778rem;\n}\n.shop-wrap .other p .brand[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(67) + ");\n}\n.shop-wrap .other p .pay[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(63) + ");\n}\n.shop-wrap .other p .ticket[data-v-2a6e8e1e] {\n  height: 0.41666667rem;\n  width: 0.41666667rem;\n  display: inline-block;\n  margin-right: 0.27777778rem;\n  background-image: url(" + __webpack_require__(68) + ");\n}\n", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\n.webkit-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.hd-wrapper {\n  background: #91618e;\n  background: url(" + __webpack_require__(64) + ") no-repeat;\n  padding: 1em 0;\n  height: 1.38888889rem;\n  color: #fff;\n  text-align: left;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 100;\n  background-size: cover;\n}\n.hd-wrapper .shop-header {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  width: 100%;\n}\n.hd-wrapper .shop-header .shop-item {\n  width: 60%;\n  padding-left: 0.27777778rem;\n}\n.hd-wrapper .shop-header .shop-item .sub-title-holder {\n  line-height: 0.55555556rem;\n}\n.hd-wrapper .shop-header .shop-item .sub-title-holder p {\n  padding: 0 0.13888889rem;\n  display: inline-block;\n  font-size: 0.33333333rem;\n  line-height: 0.27777778rem;\n  border-right: 1px solid #fff;\n}\n.hd-wrapper .shop-header .shop-item .sub-title-holder p.subtitle:nth-last-of-type(1) {\n  border-right: none;\n}\n.hd-wrapper .shop-header .shop-item .delivery-msg {\n  font-size: 0.33333333rem;\n  line-height: 0.61111111rem;\n  padding: 0.02777778rem 0.55555556rem 0.02777778rem 0.13888889rem;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.hd-wrapper .shop-header img {\n  display: inline-block;\n  float: left;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 100%;\n  border: 2px solid #ac98ad;\n  margin-left: 0.55555556rem;\n}\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\n.webkit-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.star {\n  display: inline-block;\n}\n.star .star-item {\n  background-image: url(" + __webpack_require__(16) + ");\n  width: 0.33333333rem;\n  height: 0.33333333rem;\n  float: left;\n  margin-right: 0.02777778rem;\n  background-position: 40% 5.66%;\n  background-size: 126% 379%;\n}\n.star .star-item.half {\n  background-position: 40% 50.943%;\n}\n.star .star-item.off {\n  background-position: 40% 96.226%;\n}\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml[data-v-76765b2e],\nbody[data-v-76765b2e] {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n*[data-v-76765b2e] {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul[data-v-76765b2e] {\n  margin: 0;\n  padding: 0;\n}\nul li[data-v-76765b2e] {\n  list-style: none;\n}\n.webkit-box[data-v-76765b2e] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box[data-v-76765b2e] {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n#app[data-v-76765b2e] {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#app .tabs-wrap[data-v-76765b2e] {\n  display: flex;\n}\n#app .tabs-wrap .tabs[data-v-76765b2e] {\n  position: relative;\n  display: inline-block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1;\n  flex: 1 1;\n  border-bottom: 1px solid #e7e7e7;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  text-align: center;\n  line-height: 1.25rem;\n  z-index: 100;\n}\n#app .tabs-wrap .tabs a[data-v-76765b2e] {\n  font-size: 0.36111111rem;\n  text-decoration: none;\n  color: #666;\n}\n#app .tabs-wrap .tabs a.active[data-v-76765b2e] {\n  color: #333;\n  font-weight: bolder;\n}\n#app .tabs-wrap .tabs a.active[data-v-76765b2e]:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: 33%;\n  bottom: 0;\n  border-top: 0.08333333rem solid #ffd161;\n  width: 32%;\n}\n", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\nhtml,\nbody {\n  background-color: #f0f0f0;\n  color: #333;\n  font-size: 0.33333333rem;\n}\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\n.webkit-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.center-box {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.cartcontrol .cart-decrease {\n  display: inline-block;\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.cartcontrol .cart-decrease .minus-icon {\n  background: url(" + __webpack_require__(66) + ") no-repeat;\n  background-size: 0.69444444rem 0.69444444rem;\n  width: 0.69444444rem;\n  height: 0.69444444rem;\n  display: inline-block;\n}\n.cartcontrol .cart-decrease.move-enter-active,\n.cartcontrol .cart-decrease.move-leave-active {\n  transition: all 0.4s linear;\n}\n.cartcontrol .cart-decrease.move-enter,\n.cartcontrol .cart-decrease.move-leave-active {\n  opacity: 0;\n  transform: translate3d(0.66666667rem, 0, 0);\n}\n.cartcontrol .cart-decrease.move-enter .inner,\n.cartcontrol .cart-decrease.move-leave-active .inner {\n  transform: rotate(180deg);\n}\n.cartcontrol .cart-count {\n  display: inline-block;\n  vertical-align: top;\n  width: 0.44444444rem;\n  text-align: center;\n  padding-top: 0.27777778rem;\n  line-height: 0.27777778rem;\n  font-size: 0.44444444rem;\n  color: #333;\n}\n.cartcontrol .cart-add {\n  display: inline-block;\n  background: url(" + __webpack_require__(69) + ") no-repeat;\n  background-size: 0.69444444rem 0.69444444rem;\n  width: 0.69444444rem;\n  height: 0.69444444rem;\n}\n", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA4JJREFUWAnFl8tL61AQxqe2gi/w0YVaEZUqoqJgtdJlEfEfdqM7XeqiPkAR3xUUqYoLaRXU3utvcHJTmzaJttwPUtKTc+b7MmdmziTy5xPyHxELw/3w8CC3t7fy9PQkLy8vekUiEWlra5P29nbp7e2VoaEhicfjgc1G/DxQLpfl9PRUTk5O5PX1NZBhBE1OTsr4+Li0tLTUXVNXwM3Njezt7UmpVFIjra2tMjg4KP39/dLR0aFvzQO8wZy7uzu93t7edD5z5ufnJZFI6H+vn5oCDg8P5ejoSNfg3pmZGRkZGfF9IzyWz+eF9Qhji6ampnR9YAHb29tyfX2t8ycmJmR2dlai0ajX+ppjHx8fcnBwIGdnZzoH8UtLS1Xzqzxgb87eLSwsyOjoaNWiMAOXl5eSy+UEz+DF6enpiuUVEcKem9sbQQ7T2NiYpFIpJcU2WeSGIwCFBBzA7UHefGtrS7j8gAgygpIDB1wGRwCpRiQTcOx5EBQKBeEKgrm5ObVdLBaduGCdI4A8B+xT2IDThT4/2LT9Ny6WqAAqHEWGPA/ieh+umo+xDQfp+fj4qPNUgAUGRYa8bRbIrIGBATVvnCqA2g6ocM2GcRinCsAlgNLZbBiHcVYIIAOaDeOoEPDbfX9+fg6t2zjVAxyfwFQFtdbT06NTNzY2tMC8v7/7LjUO41QB5hY7dn2tfE3IZrNaaqlwFLK1tTU5Pz+vu9w4jFMF0MkAzvMwIKcXFxdldXVVuyA8wMGzvr4u9/f3nqaMwzhVAG0U4KG7Tnta8Bjs7u6W5eVlyWQy2p4RE5ubm1UisG0CjFN7Qno49oRqSDPB4fETDA8Pa094fHysp5652WxdXV0JXmK8r69Ph9UD3NHDAfoBmomfgmpHzV9ZWZGuri7HDDaxDYyLe0cAxyVFgiilk2k09vf31cOdnZ2STCYd844AlNNAkp+0UXQyjcLFxYVmB7bhgMvw7+5zhO6VBhIQzY0QAfnu7q7a5KjnwHOjqifk4c7OjgYj92wNzUTYHoE9x+1WFziK0+k0JivgKYAZ9G9cFBmilsDCiNt9FZa+/pBqRDsBR1bhdt7cPPt9TU0BTOTMpoejjQKxWCzQh4mVZAKOPf/udjX29VNXAHN4I4KSNsrquNuA1z0eI9WIdj+P+QpwE9BG4RX7OLVvRYoYpPZxakXGvbbWfSgBtYz8Zvwv0bzSZc1W2toAAAAASUVORK5CYII="

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAXxJREFUSA3tVjFPg0AY7bUNTG4uEHf+A3E3pt2cdYSJ1TopMTGpMxtjB39B3Z35G5qyORgWHMD3NXdXOGgOpHEwJbncfd/33vt671p6bNThCcPQSNP0sSzLG8AtTkkZYyvLsu5R/9bJTHUAqvMmCwVrofECNUrfKbVGOG5kWhJ8JyPsYBbHMaMB2JygotZCq6VYxZZrVOxadXiwgcTKtu2HieM4T2QBEifDdRsKpHmeZZkxrWx9DkteG9ABCc/zZqCvqUenMxrQS1KZ7/tLbp1MHnqBL9HzmH4HEF5i0MEd+tlQE95jpw1PSxq7zO9WbTp/dkbaRuqn08X7PNA22kfsmz826uuYxB+tk1b0Xfw/67R3Bv63LZ3SxRKoLFTrtjeNIAjOFFznsMLdaglirRFe6W9UyPM8rhAEVjsTh7gEFFqCVLPOMIxbAC9QvMT8jheowHWawRG4T9ISAc2TapAkyZfrui9FUdAl8RSj74WFLpVr0zSvoij6qGr/AG2Wkr6ZufWuAAAAAElFTkSuQmCC"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABE1JREFUWAm1l/dLLU0MhnPsvXdFf7AhFlBUsKGo4N8sqCAoir1iRRSxd7Gj3s8nH1nWs7vq8XIDnlln3iTvZDKZmdCfD5EfyPv7u5yfn8vx8bFcXFzI09OT/qGakJCgf9nZ2VJQUCA5OTkSFRX1A6sioe8IvL6+yvb2tmxubsrz8/OPjMbHx0tVVZVUVFRITEzMlzpfEjg8PJSZmRnHcXp6uhQWFkp+fr4kJyfrrLFONO7v7+Xk5ESOjo7k5uZGnUKkublZioqKAkkEElhcXNRZo0lIa2trJS8vL9CQe+D09FRWV1d1yeivrq6WhoYGN8T59iUwPz+vYWcd6+rq1ICjEcHHxsaGrKysCPnDcjQ2Nnq0PQRQWlpa0iTq7OzUcHu0IuhgWcbGxpQEUSAabvlE4O7uTgYHBxXc1tYmJSUlbqx+k5SQJD/AIykpKVJcXKyJ55d0+/v7Mjk5qZMaGBhQvCp+/HwiAFOSqKysTFpbWw3jtGdnZzI9Pa0J53S6PkjMlpYWyc3NdfX+/zk1NSV7e3uaxETWxNkjZDHOmYFfwuB8dHRUKBs4IJSZmZlq5+rqSqNimO7ubg8JbB4cHKgPfEEWcaoFYULYMhQWtxB2Zo7zmpoa6enp0ZlYAWJr0scYGLDouAWsbUfzxbhDgGRB/NadNYc1M2dXBAljYMCiEy5m23wx7hB4eHhQfFpaWrieJhyd4RnsAbowJGm4mG3zxbhD4PHxUfFJSUnhek6225p7AK4Ow9gOcQ2J2TZfjDkEbPtQNP6VvL29qWnzxT8OgcTERB10h0c7Pn7Y5wjZ/p0YxnTceLNtkWDMIZCamqpYM+BWtOz1Syw3jm/DmI573A4pNzmHAMUH2d3d1db9Q/Kxb9nn1PYgYQwMWL+ENdulpaWOCacQcZFgGTBAFCyZQLJmVDgK0dramp5yQYUoFAop1r3O2Li+vlbb+KBumHwqxTs7OzI7OytZWVnS19dnGKeF3G9L8cjIiN6kOBE5GU0+EaBzeHhYLi8vpampScrLyw3ntEGHEWtOVMJnjqJNjKj29/c7tvjwECBUkCCURIFb0N/I7e2tDA0NaYnu7e39tLTYdZLQnGRkZOhhxJ7lCA2v6Yb7SYvuxMSEYKu+vt7jHBseAnRWVlbqmQB7SHDA/EbQxYbdFfxs+BIASNYTfo5o7oeRysLCgupS/7EVJIEESKauri7dmltbW7K+vh5kw9MPFh22HDZiY2M9GOsIJAAAA9xeMLC8vKzZbIpBLRkPFh103WXXT+dLAiiQlBgiInNzc76V0gxT6cBER0dLR0eH6tpYUPstARR5F2CQazoPFSupbqPc9xgDA9bvXujG27enDtiAX8tNZnx8XG/NVDQrVISdmeO8vb1d34d++n59ERHAAK8eSLDH2ds4ZZewRDjn2RaJREwA47yOucK/vLyor7i4OM0TXseRyq8I4IQCw12fIsUb4rcl+z9hMUnDOydUBAAAAABJRU5ErkJggg=="

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAqFBMVEVMaXEArv8Arv8Arv8Arv8Arf8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arv8Arf8Arv8Arv8Arf8Arf8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arf8Arf8Arf8Arv8Arf8Arf8Arf8Arv8Arf8Arf8Arf8Arv8Arf8Arv8Arf+30p+0AAAANnRSTlMAIFAQrYCgQL+A8EDADvEnb+8wYODQf3Cgn4bPsI9wMHElDfPyKG7fr69QEN+fj18mlr8MDK3BcYy7AAAA/UlEQVR42p3S2XKEIBAF0FaBBndn1JnMvmffE/j/PwsmxHIGtFK51Q/i8XbxIMCWpEoqaSclW4Cs2CTgTLIpMiA59CYnkCb9/L4HCQORHfY98xCMXCyvzWuclzb7NwwMc2Hz9MEb4CBk0DK1WMzEOkLUg6snhvi9Smk25VrEvMkbX748c07P2otZTdeIPupMllOMvC6Pr8paAMRV4LxaGI4fafPVQh+ilpXh4O6nwl5Xjna78b6cjzqsLlgvrvrbOswfYp3/Mf1l/5a2rC4qXhWHHO22NBuZiidgsZW/8OCP/LEHcurnE4Fjke/cuMuLI0BGDlJHNdONOnxm8AXbGR/PkSZ+fAAAAABJRU5ErkJggg=="

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAw1JREFUSA29l01oE0EUgM3ml4hQUuyppFDrRb2J4B+CBQ8NokglUkkL+bFpD60eBSsVsSDiQQvStKmtBKEgQqlKBAU9iYqKXryIHnqpUhHUEmrSbOL3yqaEkGx2m7QDj7ezb+Z9896+mUksW+rUEolE0/Lycncul3vT39//qppbS7UBRuxjY2OHLBbLk3w+34DOOJ3OlmAw+ENvrqJnNGKLxWLHgD3ToCrakU6n91WbWxMY6ElAjxE38LvAHmlA54aBgXYBfAhAIKPRaPQcWq0GLNjXFfH4+HgE6H2c2BRFGaGYzhNxvuDUiDYNBnqByo3jXAF2kUiHjIBKx9hKX+j1gV4GelWiQwaA3tEbr2czHDHf9IYGVYEGzUDZblcmJydbiheyGvHU1FRrJpOJYGhFyu3t7XzTowBXsJ8FKkVlqE1MTHSqqjqczWYDHDIHe3p6FmWiDcNuoG9xvFXPE9B/2Dv7+vqSeuNKbW63+/nS0tIH/O9NpVL3sPtkjMJqhjToU6vV2sW7MxVkv1moAAKBwF+Hw3GChafodsjel/eS6l3yYLfbL0UikY/yXO8WDocX+M438TuMDCBzsiWsAqJwMqI3qrlcrlv4zpHdw+wOu+GqrnVBXBq/CXIBP06CbNo0sLZwt2hur8ymgWX3kGYP3IVQKPRTwL9kFYS/R/RGNfwPim/SPStaqnoOOYLMUOojrKrsYc+ET16vN+Dz+dKMNdXwewC3EXyscKmMymTF4/HcRksni3EHuq2cYDs9Pz8/m0wmq961zF9r8Xi8mc4DRMHH9d7e3i9iVPx+vyrXGtFsYzVt7OedpWKz2SQji0iHWTgplh8LzUT7srGx8ZpApUmqV5uWwm+Ffon+SnG0c8q94H0BfspI2uUyIdVyscwQ5NpZYbiqSdFnjtR2wKYj56iNsYA/xcEYBsukWuDFUHk2BZYJ9YKbBtcLvi5wJTjV6xKbkbZusDgvTTuvjmvQqodMTeBiONvlu/TR8hfmnbaAiqrc76uKg/UM09PTDfx16WbMe7bPa72xYvsPn4BiBWN44cAAAAAASUVORK5CYII="

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABItJREFUaAXdmotS4kAQRZvwEgQfqOCutbW/4Ff4/f7C1hauoOIDBAFld06znQqYIFGUhFuFgITMuemeycw0mb9OsiKNx8/SHwxkOBzJaDQS3r9MJjJxD+R5nmTdI5/PSaFQkGKxIOVSSd+vCEEyHzU0dOAPDz3p9npq4D1gGKxWKrKzU5GiM/oRvdvQ03AoV9cd6fcHfvtEoFwu6VUvFPJSyOclm/U0MhxEpF5eJjIaj10ExxpNvm8R5Bi+f3RYk61ikbexFdsQaXR105Fut6eNZbNZqWyXpVLZlm0Hk8lkYkGQ8Y/OVK/3KL3HvjP8ot+vVitydFCLnY6xDBGR27t7AYJo7O/tykFtL7aJKMeTyV/p3N5pG0SNi0MbRGxZLWWIkzf/tDS9aGR3pyqHB/sunbLLthPrOKJ0fXMr9w9dvXik4cm3hp+6i072piFyvXlxqXmfz+Xk5Puxjk6LTrqqzxgtaXv8/Kz9kbbpm4u00BAdlsgQodLWljPT+LSoREESreZFSwZPTxohIkXEohRpiMj8+t1UM6RYo364sr4SBRP1f/psq32tKUjf/fnjJDJSXthJtM+4UPOMmePG0drMwEe/hQGWIFsYe6gh0ox7BWlGZJIiWGCCDcYwvTJkN8vpANBYa2TmgYkU/Rg2+jes85oxxE2T+8z0i8dfPgDMw4W951bBaAcjrDAHNWOIGQAdkFxl4phUwQYjrDAH5RtibsZ0hlGEm2bSBSOsMMNu8g1ZPjLV+KwZgDW6imcYYUXGzms1xBKATsZBzM3Sotr+njLDjgekhljPIGbNdLa0yPMyygyveVBDLM4QS4C0yZjNg8ewx4MOxnombYIZdt8HewCICV+a0s0uPMw2WcWLxxRdDbnNirSKjRaEF4/dGfTWOkMPSugfY8eL9iE15DY00io2YxD9KMe+GWJ3Jq7a7bacn5/L4H8/jPv9+eNLLnVOT0+lXq/Pf7TwvbHjxWN9gRgp4mqVZmibC8M548rY8RLfRdzWvvh4Z27qySIVp33SgzRZlSzl4p7P2PGSY6+ZjQh2NM3csick18/OzpY9/NOOgx3hxWNfGbGsTauMHS8eVQDELk9aZex48WxlalOgNJoydrx4Nm1gTcGSNm2CGXaEF+1D5B4jBVWAtAlm2PGgfQgDFJsQJY20yZjNg96EqJwh6jNpSjtYYUbmQQ1RBmRNwf3opnOnB6ThD6www26lTH/qY0UlNu84KOmCEVZk7Lz2DVHTpAxIB6PYlHTBCCvMwXqsbwgD1DRZ0lI5s5VsEo3BBiOsMAc1Y4hhj807OhuVsySmHkywwQgrzEHNGOID8pFORhmQylmSRr3phW4pG4zBvmOmXhniA8p+LGspA1I5S4pggQk2GMMUaohlBCULnsnVy9bVWiNFZGCAJcgWZiiyxsrBzJE2pmhs7jeqrG+mGO+JFBFjqKTYlNofXpgpnqnDcHcmp8llhs1V/jSG8zKdoQ0uIhePNsJGsyBX8PXCPhQ80F6zmbcxP14yUzxvzM/LgqZ4vTE/AJw3xnvSkfU9c611/UTzH9KMD1ZtAgfQAAAAAElFTkSuQmCC"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAZlBMVEVMaXEArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Rbc09AAAAIXRSTlMAMGDtv9AQQMCAlhkgBpHvUHCvkODPoLYY7rWw8N+IiRtga5UAAAAA6klEQVR42q2Ti27DIAxFTTDYUPJO+u42/v8n5zRT1QWINGlXMmCObGMkQ93oWJBuahhPByjocPoALbTINUTYUfwz7kIG90yKnRzC425T7FpLWFkF/dCJq8IGRyCk8IiIg7Q8uxyG2BPhYpTHBKsV8NE5L5ZEe6mK7A0bz8wJRhKpmWCcIJsc1mtzXPYqjXZkW4wepTHcNnZfClqiyZAxRGGDeS3oZgXMyafeFlxRNzA9o0n9wuYmDsenvJeF37Ft3aubTPJq6Pbw1NrdaMmtuPp5R4IT/QveHYOzhvF6LtGv66eM4CUWdGnqb/awGav4bsC8AAAAAElFTkSuQmCC"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAqFBMVEVMaXEArv8Arf8Arv8Arv8Arf8Arv8Arv8Arv8Arv8Arf8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arf8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arf8Arf8Arv8Arf8Arv8Arf8Arv8Arf8Arv8Arf8Arv8Arf8Arf8Arv8Arv8Arf8Arv8Arv8Arf+FSBigAAAANnRSTlMArcC/oEAQQMCAv9BwMA7w8Sdv77CggJAgYN9xJQ1/lvPyKG4QUPDPDFAwn3DgsAyPrV9W4I9kFXL+AAABFElEQVR42q2Sh27DIBCGDxt8nPdKmz2794T3f7Ni0iqxsSNVymcjsD6dpf8OgDnLtdLKJWdzgKKapdBLOqsKYCUMUjLI02F9twYFJ1Bn0egka+lAoEDkIYr4LcaGzs8nRCSXRPyDE10gdLTMpPe1kl70GXneisCiD1oCkPnAEAE0OdWRENxHjL9jxNDV6hhH96IPWlm0bYB0u4YNwj6YdKoTaeBkEptVm/Nlq/pBNngyWkb7U0tbJi/71DUfuxML6sdnAcJH4NMpBW2d8Cx7Mvu90TAehTfXv1rbnd9yUxCTNNqA2ag9UBuF+3+Jr4KergXin5fp5EV+XQPbDesdg21VLvrloqy2AAXb2FHZ9wi9eS/gB5R7KFGXbYdYAAAAAElFTkSuQmCC"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA5ZJREFUaAXdWk1r1FAUPXn2Q8dSGLDTgq5U6K5UcSF068puBH+A0L0rQdG9Cv6Igj9AcKMrtwUXolIQLagrhXZGGBjqaKd1xnvyYd5Mk8wkeRPz5sCjmSZ5OSfv5t737n1OTwAT6P4CWttA+wtwsAt06sCfNtD97fWuTgInKsBMDZhdAioXgPkVQJ0y8XQ4uYQcNoX8e2lvgf0doHeUjpQzBcwti6DL0laB6Wq6+7WrswmhgL3nQHNLyHe17nIcOgqorgGLNzIJSieE5lN/Afx4JSbTycE64VY1A5y5BtTWU5nd6EJoQt82gaP9BBYGT03NAec2PJMbodvRhDReArvPxIzM+IUReHmXOA6wdBNYuD70lmQh/Hg5Cs3XQzsa6wXVq97o0DnEIF4IRXx9Avz8HHNrwf8+fRE4fxeIESOuIgYcibKIIEVyIacYRAvhN/G/zSmKMDmRWwSOC6F34oddVpAbOQ6gXwjjBIevaO80QCrxJ7mRI7lq6BfCYFdUnNBIpD4kR3LVEArhtIMR2xaQKzn7CIVw7mR42rG13cL6nY9u47FRkCs5+/CEUBkngIbx8Ol37DUP3fZIjo2DnP1R8YS03pmbxWps6yIiAAUZB2fevgcLhRh/SkEdci0kUK4b46LIVpC7uGLlLk/TruzKJJrcZYmt0JY5jO0QDcpNFNguRJIdCp2G7TIkY9OQLMqH270s0xIGOMYGU251sTqNB7fOYm1lPv2LlWWxeC0/75TydpMi+Gi+kMxBUzSEU5SUQsp2uQIzgBlAM6A5mEJgWpn6Ew1O79O9Hg4kvTkGXNmQFKqGN5uSIh0HZmtiWjML4+i62D4ln6zchHKxjzX/NEmKK1QkzWI7JLOv3NR+TK7ICn3kLuUJ8VpSn2Bq31aQu2jw4gjrE7bC5+4LWZVUpPnYqMcZ/djYOyNnFogEHntWilhkMYwgaOYKdkmcyNmvcoVJbC7id+4bz6Qk8ch1jgWh5cf/hIT2RGWsFNkCctVqjqEQCmC5i5WisoMcyVVDvxC6Ypa7WCkqK8iNHAfK2v1CSJ5egOWusoLcfE+lUzwuhGdZs2O5q2wgp5h6YrQQCuDwsdxVFpALOcUgdL9RF0xEMVQXZn15WhczERsGAkETsYUjEMO/nM5YvalGFxMIYm2FLdc2p0sSG6RpU47BRw37ney1ht2tn6fZuRvPJCnubjyTVGzkxjNJdrgbz8SdGtx49hcBy2wN8hBOugAAAABJRU5ErkJggg=="

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAA5FBMVEUAAAD///+AgICqqqq/v7+ZmZmqqqq2trafn5+qqqqurq6qqqqnp6etra2np6eqqqqtra2oqKiqqqqqqqqqqqqrq6upqamqqqqqqqqrq6upqampqamqqqqrq6urq6upqamrq6uqqqqrq6upqamqqqqrq6upqamqqqqqqqqrq6upqamqqqqrq6upqamqqqqrq6upqamrq6upqamqqqqrq6upqamqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrmiUAyAAAAS3RSTlMAAQIDBAUGBwgVFhgaHCAhIiYqMDk6Pj9CSUpxcnN8fX+BgoOEhYmKk5eYmZqbnJ2eoKGio6fGz9Xe4OTm5+jq6/L19/j5+vv8/f6Cwb39AAAA7klEQVQYGV3Bi0LBAACG0W+EXEqlEkKhojUjSjKX3JL//d8nxpp1DnjST+/OZDxxevUsPku+Lp6mlp3LVDwRT2VqX7php6lFLcTevUxcL1pUQngu9MGWqe9qGMg5Tg5IasRGQ6tqhA1HcoC4JkBD60qMLUcaAgmNwdS6cowrPxzkgYTGZLSqxvAZkNSIrupRgjLq8alTgiK26gx0QkD0bqVz3vQQ4kC0/CMTrrUs4jsqrfTMhqXlLZ5waSkTl6V5gR2jPJfFnq1pgS2jPJPNn7amRQNCpZlaHGhrXkufPS7UIsCWq8k/2U6//3qF5xfjrChj0us5gwAAAABJRU5ErkJggg=="

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAutJREFUWAntV1FLakEQHtPSMlLUSoqQyChSIRFSUnsIpR9dgohEWGJZoaUPCQpB6oMaplL39s1lD+b1dM4tzZc7D51td2e/b2e+nV01v96NJmhTE8Rm6IkT0IkIPD8/0/X1NT09PdHLy4voHunXYDDQ4uIieTweMhqNvLYGGgD48fEx9Xq9kQLKLTY9PU2RSITm5+eJI3B1dcXgq6ur5PV6aXZ2Vs73W/3tdpsymQxVKhXKZrO0v79PrAGEHebz+cYGjvWxMWDABCYT6Ha73KnX6/k7zj8CQ2BKIvwO6NvbG93e3lKpVOJlHA4HuVwumppSPmQjIQDwfD4v7UG0oXYlU6aotML7uNh5OBymUCjEHqJPyX0kBATIV6r6SFKAnCPsyWRScCH0qbF/IoCCBZC1tTXa2dmR1ofgYCLsQoTShE8aqgl0Oh1KJBLUarVY8WazmVZWVnhpqB2CUyO6QS6qNPD6+so7B/jS0hJptVo6Pz8nVLbvmiIBCOv09JTq9TpZrVZWOco1CsnZ2Rl9RXj9pBUJXFxc0OPjIy0sLDA4dr++vs46qFardHNz078etxGpWCxGhULhr7HBjk81gOv54eGBazjO+MzMjOSPmo6o3N3dcVqWl5d5rNlsUjwe5ysd40jf9va25DfYkI1AsVjkowXQg4MDmpub++CLKzUQCJBGo6FUKsWAjUZDAsfNCnFiE7lc7oNv/z9DI1Aul+ny8pLFFgwGOfz9TqJtsVjI7Xbz1QqdIPQ4LZubm7S7u8upQz/SBDJbW1vCVfoOjQDAYX6/n2w2mzR5WAOL2u12qtVqDL6xscHgmIt+lGadTkf39/fD3P88SAZHkDPc3QijGtvb2+PQQwfYeb/h2B4eHjK5/n7RHpoCp9MpxlV9cccfHR3JzjWZTLJjnAKhbuRv3CYwBCYTwEsVlk6nR1Ld5DaByom6AhOY/CqGek9OTn70VRyNRvlpzgTAaKK/C0BgUja0Dvwkmf8EfgOAHz4fDkQlMwAAAABJRU5ErkJggg=="

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(84)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\vue\\四\\美团外卖\\src\\components\\vue\\cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27f3d4ca", Component.options)
  } else {
    hotAPI.reload("data-v-27f3d4ca", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-menu"
  }, [_c('div', {
    ref: "menuWrapper",
    staticClass: "menu-wrap"
  }, [_c('ul', {
    staticClass: "menu-list"
  }, _vm._l((_vm.dishCategory), function(item, index) {
    return _c('li', {
      staticClass: "menu-item",
      class: {
        'current': _vm.currentIndex === index
      },
      on: {
        "click": function($event) {
          _vm.selectMenu(index)
        }
      }
    }, [_vm._v(_vm._s(item.category) + "\n            ")])
  }))]), _vm._v(" "), _c('div', {
    ref: "foodsWrapper",
    staticClass: "foods-wrap"
  }, [_c('ul', _vm._l((_vm.dishCategory), function(item) {
    return _c('li', {
      ref: "dishList",
      refInFor: true,
      staticClass: "foods-list"
    }, [_c('h1', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.category))]), _vm._v(" "), _c('ul', _vm._l((item.dishList), function(food) {
      return _c('li', {
        staticClass: "food-item"
      }, [_c('div', {
        staticClass: "dish-basic"
      }, [_c('div', {
        staticClass: "img"
      }, [_c('img', {
        attrs: {
          "src": food.largeImg
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "content"
      }, [_c('div', {
        staticClass: "name"
      }, [_vm._v(_vm._s(food.name))]), _vm._v(" "), _c('p', {
        staticClass: "description"
      }, [_vm._v(_vm._s(food.desc))]), _vm._v(" "), _c('div', {
        staticClass: "extra"
      }, [_c('span', {
        staticClass: "count"
      }, [_vm._v("月售" + _vm._s(food.sold) + "份")])]), _vm._v(" "), _c('div', {
        staticClass: "deal"
      }, [_c('span', {
        staticClass: "price"
      }, [_vm._v("￥" + _vm._s(food.discountPrice))]), _vm._v(" "), _c('div', {
        staticClass: "cart-wrapper"
      }, [_c('cartControl', {
        attrs: {
          "food": food
        }
      })], 1)])])])])
    }))])
  }))]), _vm._v(" "), _c('cart', {
    attrs: {
      "shop": _vm.shop,
      "selectFoods": _vm.selectFoods
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03933789", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment-wrap"
  }, [_c('div', {
    staticClass: "m-comment"
  }, [_c('ul', {
    staticClass: "info-left"
  }, [_c('li', {
    staticClass: "info-score"
  }, [_vm._v(_vm._s(_vm.cmt.integratedScore))]), _vm._v(" "), _c('li', {
    staticClass: "info-desc"
  }, [_vm._v("综合评分")]), _vm._v(" "), _c('li', {
    staticClass: "info-good"
  }, [_vm._v(_vm._s(_vm.cmt.praiseRatio))])]), _vm._v(" "), _c('ul', {
    staticClass: "info-right"
  }, [_c('li', {
    staticClass: "info-star"
  }, [_vm._v("\n                配送评分\n                "), _c('p', [_c('star', {
    attrs: {
      "score": _vm.cmt.deliveryScore
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.cmt.deliveryScore))])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "info-star"
  }, [_vm._v("\n                商家评分\n                "), _c('p', [_c('star', {
    attrs: {
      "score": _vm.cmt.shopScore
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.cmt.shopScore))])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "m-cmtType"
  }, _vm._l((_vm.cmt.commentLabels), function(item) {
    return _c('span', [_vm._v(_vm._s(item.content))])
  })), _vm._v(" "), _c('ul', {
    staticClass: "evaluate-wrap"
  }, _vm._l((_vm.list), function(item) {
    return _c('li', {
      staticClass: "evaluate-list"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "evaluate-left"
    }, [_c('img', {
      attrs: {
        "src": item.userPicUrl || _vm.defaultUserPic,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "evaluate-right"
    }, [_c('p', {
      staticClass: "evaluate-sub"
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.userName || '美团外卖用户'))]), _vm._v(" "), _c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.commentTime))])]), _vm._v(" "), _c('p', {
      staticClass: "evaluate-star"
    }, [_c('star', {
      attrs: {
        "score": item.score
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "ship-time"
    }, [_vm._v(_vm._s(item.deliveryTime))])], 1), _vm._v(" "), _c('p', {
      staticClass: "evaluate-comment"
    }, [_vm._v("\n                        " + _vm._s(item.content) + "\n                    ")]), _vm._v(" "), (item.pictures) ? _c('div', {
      staticClass: "evaluate-pic"
    }, _vm._l((item.pictures), function(pic) {
      return _c('img', {
        attrs: {
          "src": pic.smallPicUrl,
          "alt": ""
        }
      })
    })) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "evaluate-label"
    }, [(item.label) ? _c('i', {
      staticClass: "label"
    }) : _vm._e(), _vm._v("\n                        " + _vm._s(item.label) + "\n                    ")]), _vm._v(" "), (item.shopReply) ? _c('p', {
      staticClass: "add-comment"
    }, [_vm._v("\n                        " + _vm._s(item.shopReply) + "\n                    ")]) : _vm._e()])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13e93c5c", module.exports)
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (!_vm.totalCount) ? _c('div', {
    staticClass: "cartfooter"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('i', {
    staticClass: "cart"
  }), _vm._v(" "), _c('p', {
    staticClass: "min-del"
  }, [_vm._v("另需配送费￥" + _vm._s(_vm.shop.deliveryFee))]), _vm._v(" "), _c('p', {
    staticClass: "min-fee"
  }, [_vm._v(_vm._s(_vm.shop.minFee) + "￥起送")])])]) : _c('div', {
    staticClass: "new-cart"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('i', {
    staticClass: "cart-icon",
    on: {
      "click": _vm.toggleList
    }
  }, [_c('i', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.totalCount))])]), _vm._v(" "), _c('div', {
    staticClass: "price-box"
  }, [_c('p', {
    staticClass: "total"
  }, [_vm._v(" ￥" + _vm._s(_vm.totalPrice))]), _vm._v(" "), _c('p', {
    staticClass: "delivery"
  }, [_vm._v("另需配送费￥" + _vm._s(_vm.shop.deliveryFee))])]), _vm._v(" "), _c('div', {
    staticClass: "btn-submit",
    on: {
      "click": _vm.goAccount
    }
  }, [_vm._v("去结算")])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "flag"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.cartShow),
      expression: "cartShow"
    }],
    staticClass: "cart-panel-detail"
  }, [_c('div', {
    staticClass: "shopcart-container"
  }, [_c('div', {
    staticClass: "cart-head"
  }, [_c('span', {
    staticClass: "titile"
  }, [_vm._v("购物车")]), _vm._v(" "), _c('span', {
    staticClass: "clear-icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "clear-btn",
    on: {
      "click": _vm.clearCart
    }
  }, [_vm._v("清空购物车")])]), _vm._v(" "), _c('ul', {
    ref: "listContent",
    staticClass: "cart-content"
  }, _vm._l((_vm.selectFoods), function(item) {
    return _c('li', {
      staticClass: "dish-list"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.discountPrice))]), _vm._v(" "), _c('cartControl', {
      attrs: {
        "food": item
      }
    })], 1)
  }))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDialog),
      expression: "showDialog"
    }],
    staticClass: "dialog"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._v("确定要清空购物车吗？")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('a', {
    staticClass: "cancel",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('a', {
    staticClass: "confirm",
    attrs: {
      "href": "#",
      "id": "confirm"
    }
  }, [_vm._v("确定")])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27f3d4ca", module.exports)
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shop-wrap"
  }, [_c('div', {
    staticClass: "m-shop"
  }, [_c('div', {
    staticClass: "shopName"
  }, [_c('div', {
    staticClass: "shop-item"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.shopInfo.shopName))]), _vm._v(" "), _c('star', {
    attrs: {
      "score": _vm.shopInfo.shopStar
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "info"
  }, [_c('span'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.shopInfo.sold))])]), _vm._v(" "), _c('div', {
    staticClass: "shop-tel"
  }, [_c('a', {
    attrs: {
      "href": _vm.shopInfo.shopPhone
    }
  })])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "shopDetail"
  }, [_c('p', [_c('i', {
    staticClass: "broadcast"
  }), _vm._v(_vm._s(_vm.shopInfo.tip))]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "time"
  }), _vm._v(_vm._s(_vm.shopInfo.serTime) + "外送")]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "address"
  }), _vm._v(_vm._s(_vm.shopInfo.shopAddress))]), _vm._v(" "), _c('p', [_c('i', {
    staticClass: "img"
  }), _vm._v(_vm._s(_vm.shopInfo.shopEnvTitle))])]), _vm._v(" "), _c('div', {
    staticClass: "other"
  }, [(_vm.shopInfo['brandMsg']) ? _c('p', [_c('i', {
    staticClass: "brand"
  }), _vm._v("\n            " + _vm._s(_vm.shopInfo.brandMsg) + "\n        ")]) : _vm._e(), _vm._v(" "), (_vm.shopInfo['onlinePay']) ? _c('p', [_c('i', {
    staticClass: "pay"
  }), _vm._v("\n            该商户支持在线支付\n        ")]) : _vm._e(), _vm._v(" "), (_vm.shopInfo.invoiceMsg) ? _c('p', [_c('i', {
    staticClass: "ticket"
  }), _vm._v("\n            " + _vm._s(_vm.shopInfo.invoiceMsg) + "\n        ")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a6e8e1e", module.exports)
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hd-wrapper"
  }, [_c('div', {
    staticClass: "shop-header"
  }, [_c('img', {
    attrs: {
      "src": _vm.shop.shopPic,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "shop-item"
  }, [_c('div', {
    staticClass: "sub-title-holder"
  }, [_c('p', {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.shop.deliveryTime) + "分钟")]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("起送￥" + _vm._s(_vm.shop.minFee))]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("配送￥" + _vm._s(_vm.shop.deliveryFee))])]), _vm._v(" "), _c('p', {
    staticClass: "delivery-msg"
  }, [_vm._v(_vm._s(_vm.shop.deliveryMsg))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39fd4137", module.exports)
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star"
  }, _vm._l((_vm.itemClasses), function(itemClass, index) {
    return _c('span', {
      key: "index",
      staticClass: "star-item",
      class: itemClass
    })
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75fe76fc", module.exports)
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('v-header', {
    attrs: {
      "shop": _vm.shop
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tabs-wrap"
  }, [_c('div', {
    staticClass: "tabs"
  }, [_c('router-link', {
    attrs: {
      "to": "/menu"
    }
  }, [_vm._v("菜单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tabs"
  }, [_c('router-link', {
    attrs: {
      "to": "/estimate"
    }
  }, [_vm._v("评价")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tabs"
  }, [_c('router-link', {
    attrs: {
      "to": "/merchants"
    }
  }, [_vm._v("商户")])], 1)]), _vm._v(" "), _c('keep-alive', [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76765b2e", module.exports)
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartcontrol"
  }, [_c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count > 0"
    }],
    staticClass: "cart-decrease",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.decreaseCart($event)
      }
    }
  }, [_c('span', {
    staticClass: "minus-icon"
  })])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count>0"
    }],
    staticClass: "cart-count"
  }, [_vm._v(_vm._s(_vm.food.count))]), _vm._v(" "), _c('div', {
    staticClass: "cart-add",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.addCart($event)
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fdb4f9fa", module.exports)
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("596d4bd1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-03933789\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-03933789\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("de7fdd4c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-13e93c5c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./estimate.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-13e93c5c\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./estimate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7651742e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-27f3d4ca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cart.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-27f3d4ca\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("12248e02", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-2a6e8e1e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./merchants.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-2a6e8e1e\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./merchants.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("f3ee7734", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-39fd4137\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-39fd4137\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("af9e7596", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-75fe76fc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./star.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-75fe76fc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./star.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9c31bf70", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-76765b2e\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-76765b2e\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("09786f6a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-fdb4f9fa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cartcontrol.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-fdb4f9fa\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/less-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./cartcontrol.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(9);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

var _vueRouter = __webpack_require__(24);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _menu = __webpack_require__(22);

var _menu2 = _interopRequireDefault(_menu);

var _estimate = __webpack_require__(21);

var _estimate2 = _interopRequireDefault(_estimate);

var _merchants = __webpack_require__(23);

var _merchants2 = _interopRequireDefault(_merchants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//使用路由

//引入评价模块

//引入路由插件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vueRouter2.default);
//引入商户模块

//引入菜单模块


var router = new _vueRouter2.default({
  //添加高亮显示
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: _menu2.default
  }, {
    //菜单页面路由
    path: '/menu',
    component: _menu2.default
  }, {
    //评价页面路由
    path: '/estimate',
    component: _estimate2.default
  }, {
    //商户页面路由
    path: '/merchants',
    component: _merchants2.default
  }]
});

new _vue2.default({
  el: '#app',
  //渲染路由
  router: router,
  render: function render(c) {
    return c(_App2.default);
  }
});

/***/ })
/******/ ]);