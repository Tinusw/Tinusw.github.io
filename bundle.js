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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// eslint-disable-next-line import/no-webpack-loader-syntax
module.exports = __webpack_require__(7);


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(5)
var isArray = __webpack_require__(6)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.css = __webpack_require__ (25);
module.exports.js = __webpack_require__ (8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (20);
__webpack_require__ (10);
__webpack_require__ (11);
__webpack_require__ (12);
__webpack_require__ (13);
__webpack_require__ (14);
__webpack_require__ (15);
__webpack_require__ (19);
__webpack_require__ (16);
__webpack_require__ (17);
__webpack_require__ (18);
__webpack_require__ (9);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(0) + ");\n  src: url(" + __webpack_require__(0) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(29) + ") format(\"woff2\"), url(" + __webpack_require__(28) + ") format(\"woff\"), url(" + __webpack_require__(27) + ") format(\"truetype\"), url(" + __webpack_require__(26) + ") format(\"svg\");\n}\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n\n.glyphicon-plus:before {\n  content: \"+\";\n}\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\na {\n  color: #337ab7;\n  text-decoration: none;\n}\n\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\nfigure {\n  margin: 0;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 6px;\n}\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh1 .small,\nh2 small,\nh2 .small,\nh3 small,\nh3 .small,\nh4 small,\nh4 .small,\nh5 small,\nh5 .small,\nh6 small,\nh6 .small,\n.h1 small,\n.h1 .small,\n.h2 small,\n.h2 .small,\n.h3 small,\n.h3 .small,\n.h4 small,\n.h4 .small,\n.h5 small,\n.h5 .small,\n.h6 small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\n\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\nh1 small,\nh1 .small,\n.h1 small,\n.h1 .small,\nh2 small,\nh2 .small,\n.h2 small,\n.h2 .small,\nh3 small,\nh3 .small,\n.h3 small,\n.h3 .small {\n  font-size: 65%;\n}\n\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\nh4 small,\nh4 .small,\n.h4 small,\n.h4 .small,\nh5 small,\nh5 .small,\n.h5 small,\n.h5 .small,\nh6 small,\nh6 .small,\n.h6 small,\n.h6 .small {\n  font-size: 75%;\n}\n\nh1,\n.h1 {\n  font-size: 36px;\n}\n\nh2,\n.h2 {\n  font-size: 30px;\n}\n\nh3,\n.h3 {\n  font-size: 24px;\n}\n\nh4,\n.h4 {\n  font-size: 18px;\n}\n\nh5,\n.h5 {\n  font-size: 14px;\n}\n\nh6,\n.h6 {\n  font-size: 12px;\n}\n\np {\n  margin: 0 0 10px;\n}\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\n\nsmall,\n.small {\n  font-size: 85%;\n}\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n\n.text-lowercase {\n  text-transform: lowercase;\n}\n\n.text-uppercase,\n.initialism {\n  text-transform: uppercase;\n}\n\n.text-capitalize {\n  text-transform: capitalize;\n}\n\n.text-muted {\n  color: #777777;\n}\n\n.text-primary {\n  color: #337ab7;\n}\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n\n.text-success {\n  color: #3c763d;\n}\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n\n.text-info {\n  color: #31708f;\n}\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n\n.text-warning {\n  color: #8a6d3b;\n}\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n\n.text-danger {\n  color: #a94442;\n}\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n\n.bg-primary {\n  color: #fff;\n}\n\n.bg-primary {\n  background-color: #337ab7;\n}\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n\n.bg-success {\n  background-color: #dff0d8;\n}\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n\n.bg-info {\n  background-color: #d9edf7;\n}\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n\n.bg-warning {\n  background-color: #fcf8e3;\n}\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n\n.bg-danger {\n  background-color: #f2dede;\n}\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nul ul,\nul ol,\nol ul,\nol ol {\n  margin-bottom: 0;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n\ndt,\ndd {\n  line-height: 1.42857;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-left: 0;\n}\n\n.dl-horizontal dd:before,\n.dl-horizontal dd:after {\n  content: \" \";\n  display: table;\n}\n\n.dl-horizontal dd:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n\n.initialism {\n  font-size: 90%;\n}\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\n\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\n\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857;\n  color: #777777;\n}\n\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n\n.blockquote-reverse footer:before,\n.blockquote-reverse small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right footer:before,\nblockquote.pull-right small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n\n.blockquote-reverse footer:after,\n.blockquote-reverse small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right footer:after,\nblockquote.pull-right small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container:before,\n.container:after {\n  content: \" \";\n  display: table;\n}\n\n.container:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.container-fluid:before,\n.container-fluid:after {\n  content: \" \";\n  display: table;\n}\n\n.container-fluid:after {\n  clear: both;\n}\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n\n.row:after {\n  clear: both;\n}\n\n.col-xs-1,\n.col-sm-1,\n.col-md-1,\n.col-lg-1,\n.col-xs-2,\n.col-sm-2,\n.col-md-2,\n.col-lg-2,\n.col-xs-3,\n.col-sm-3,\n.col-md-3,\n.col-lg-3,\n.col-xs-4,\n.col-sm-4,\n.col-md-4,\n.col-lg-4,\n.col-xs-5,\n.col-sm-5,\n.col-md-5,\n.col-lg-5,\n.col-xs-6,\n.col-sm-6,\n.col-md-6,\n.col-lg-6,\n.col-xs-7,\n.col-sm-7,\n.col-md-7,\n.col-lg-7,\n.col-xs-8,\n.col-sm-8,\n.col-md-8,\n.col-lg-8,\n.col-xs-9,\n.col-sm-9,\n.col-md-9,\n.col-lg-9,\n.col-xs-10,\n.col-sm-10,\n.col-md-10,\n.col-lg-10,\n.col-xs-11,\n.col-sm-11,\n.col-md-11,\n.col-lg-11,\n.col-xs-12,\n.col-sm-12,\n.col-md-12,\n.col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  float: left;\n}\n\n.col-xs-1 {\n  width: 8.33333%;\n}\n\n.col-xs-2 {\n  width: 16.66667%;\n}\n\n.col-xs-3 {\n  width: 25%;\n}\n\n.col-xs-4 {\n  width: 33.33333%;\n}\n\n.col-xs-5 {\n  width: 41.66667%;\n}\n\n.col-xs-6 {\n  width: 50%;\n}\n\n.col-xs-7 {\n  width: 58.33333%;\n}\n\n.col-xs-8 {\n  width: 66.66667%;\n}\n\n.col-xs-9 {\n  width: 75%;\n}\n\n.col-xs-10 {\n  width: 83.33333%;\n}\n\n.col-xs-11 {\n  width: 91.66667%;\n}\n\n.col-xs-12 {\n  width: 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 768px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    float: left;\n  }\n\n  .col-sm-1 {\n    width: 8.33333%;\n  }\n\n  .col-sm-2 {\n    width: 16.66667%;\n  }\n\n  .col-sm-3 {\n    width: 25%;\n  }\n\n  .col-sm-4 {\n    width: 33.33333%;\n  }\n\n  .col-sm-5 {\n    width: 41.66667%;\n  }\n\n  .col-sm-6 {\n    width: 50%;\n  }\n\n  .col-sm-7 {\n    width: 58.33333%;\n  }\n\n  .col-sm-8 {\n    width: 66.66667%;\n  }\n\n  .col-sm-9 {\n    width: 75%;\n  }\n\n  .col-sm-10 {\n    width: 83.33333%;\n  }\n\n  .col-sm-11 {\n    width: 91.66667%;\n  }\n\n  .col-sm-12 {\n    width: 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    float: left;\n  }\n\n  .col-md-1 {\n    width: 8.33333%;\n  }\n\n  .col-md-2 {\n    width: 16.66667%;\n  }\n\n  .col-md-3 {\n    width: 25%;\n  }\n\n  .col-md-4 {\n    width: 33.33333%;\n  }\n\n  .col-md-5 {\n    width: 41.66667%;\n  }\n\n  .col-md-6 {\n    width: 50%;\n  }\n\n  .col-md-7 {\n    width: 58.33333%;\n  }\n\n  .col-md-8 {\n    width: 66.66667%;\n  }\n\n  .col-md-9 {\n    width: 75%;\n  }\n\n  .col-md-10 {\n    width: 83.33333%;\n  }\n\n  .col-md-11 {\n    width: 91.66667%;\n  }\n\n  .col-md-12 {\n    width: 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    float: left;\n  }\n\n  .col-lg-1 {\n    width: 8.33333%;\n  }\n\n  .col-lg-2 {\n    width: 16.66667%;\n  }\n\n  .col-lg-3 {\n    width: 25%;\n  }\n\n  .col-lg-4 {\n    width: 33.33333%;\n  }\n\n  .col-lg-5 {\n    width: 41.66667%;\n  }\n\n  .col-lg-6 {\n    width: 50%;\n  }\n\n  .col-lg-7 {\n    width: 58.33333%;\n  }\n\n  .col-lg-8 {\n    width: 66.66667%;\n  }\n\n  .col-lg-9 {\n    width: 75%;\n  }\n\n  .col-lg-10 {\n    width: 83.33333%;\n  }\n\n  .col-lg-11 {\n    width: 91.66667%;\n  }\n\n  .col-lg-12 {\n    width: 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\n\nth {\n  text-align: left;\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n\n.table > caption + thead > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > th,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n\n.table-bordered {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > th,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > th,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\ninput[type=\"radio\"][disabled],\ninput[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed;\n}\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n\n.form-control-static.input-lg,\n.input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn,\n.form-control-static.input-sm,\n.input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\nselect.input-sm,\n.input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px;\n}\n\ntextarea.input-sm,\n.input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.input-lg,\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\nselect.input-lg,\n.input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px;\n}\n\ntextarea.input-lg,\n.input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto;\n}\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.has-feedback {\n  position: relative;\n}\n\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n\n.input-lg + .form-control-feedback,\n.input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n\n.input-sm + .form-control-feedback,\n.input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after {\n  content: \" \";\n  display: table;\n}\n\n.form-horizontal .form-group:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-default:active:hover,\n.btn-default:active:focus,\n.btn-default:active.focus,\n.btn-default.active:hover,\n.btn-default.active:focus,\n.btn-default.active.focus,\n.open > .btn-default.dropdown-toggle:hover,\n.open > .btn-default.dropdown-toggle:focus,\n.open > .btn-default.dropdown-toggle.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-default:active,\n.btn-default.active,\n.open > .btn-default.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-default.disabled:hover,\n.btn-default.disabled:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled]:hover,\n.btn-default[disabled]:focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default:hover,\nfieldset[disabled] .btn-default:focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  background-image: none;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link[disabled]:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:hover,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\ntr.collapse.in {\n  display: table-row;\n}\n\ntbody.collapse.in {\n  display: table-row-group;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857;\n  color: #333333;\n  white-space: nowrap;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar:before,\n.btn-toolbar:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-toolbar:after {\n  clear: both;\n}\n\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table;\n}\n\n.btn-group-vertical > .btn-group:after {\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus {\n  z-index: 3;\n}\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.input-group-addon.input-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.input-group-addon.input-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\n.nav:before,\n.nav:after {\n  content: \" \";\n  display: table;\n}\n\n.nav:after {\n  clear: both;\n}\n\n.nav > li {\n  position: relative;\n  display: block;\n}\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.nav > li.disabled > a {\n  color: #777777;\n}\n\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.nav > li > a > img {\n  max-width: none;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n\n.nav-pills > li {\n  float: left;\n}\n\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.nav-stacked > li {\n  float: none;\n}\n\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n\n.nav-justified,\n.nav-tabs.nav-justified {\n  width: 100%;\n}\n\n.nav-justified > li,\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n\n.nav-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n\n@media (min-width: 768px) {\n  .nav-justified > li,\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n\n  .nav-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n\n.nav-tabs-justified,\n.nav-tabs.nav-justified {\n  border-bottom: 0;\n}\n\n.nav-tabs-justified > li > a,\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n\n.nav-tabs-justified > .active > a,\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a,\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n\n  .nav-tabs-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n\n.navbar:before,\n.navbar:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n\n.navbar-header:before,\n.navbar-header:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-header:after {\n  clear: both;\n}\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n\n.navbar-collapse:before,\n.navbar-collapse:after {\n  content: \" \";\n  display: table;\n}\n\n.navbar-collapse:after {\n  clear: both;\n}\n\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.navbar-toggle:focus {\n  outline: 0;\n}\n\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n\n  .navbar-nav > li {\n    float: left;\n  }\n\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.navbar-btn.btn-sm,\n.btn-group-sm > .navbar-btn.btn {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.navbar-btn.btn-xs,\n.btn-group-xs > .navbar-btn.btn {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-brand {\n  color: #777;\n}\n\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-text {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n\n.navbar-default .navbar-link {\n  color: #777;\n}\n\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n\n.navbar-default .btn-link {\n  color: #777;\n}\n\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n\n.navbar-default .btn-link[disabled]:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:hover,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909;\n}\n\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #090909;\n}\n\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #090909;\n  color: #fff;\n}\n\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #090909;\n  }\n\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n\n.navbar-inverse .btn-link[disabled]:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n\n.breadcrumb > li {\n  display: inline-block;\n}\n\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n\n.breadcrumb > .active {\n  color: #777777;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n\n.pagination > li {\n  display: inline;\n}\n\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.pagination > li > a:hover,\n.pagination > li > a:focus,\n.pagination > li > span:hover,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n\n.pagination > .active > a,\n.pagination > .active > a:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span,\n.pagination > .active > span:hover,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n}\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n\n.pager:before,\n.pager:after {\n  content: \" \";\n  display: table;\n}\n\n.pager:after {\n  clear: both;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-default {\n  background-color: #777777;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n\n.label-primary {\n  background-color: #337ab7;\n}\n\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.btn-xs .badge,\n.btn-group-xs > .btn .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\n\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.list-group-item > .badge {\n  float: right;\n}\n\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.jumbotron .container {\n  max-width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n\n.thumbnail > img,\n.thumbnail a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n\n.alert .alert-link {\n  font-weight: bold;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n\n.media {\n  margin-top: 15px;\n}\n\n.media:first-child {\n  margin-top: 0;\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:hover,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:hover,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:hover,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-body {\n  padding: 15px;\n}\n\n.panel-body:before,\n.panel-body:after {\n  content: \" \";\n  display: table;\n}\n\n.panel-body:after {\n  clear: both;\n}\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n\n.panel-group {\n  margin-bottom: 20px;\n}\n\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n\n.panel-group .panel-footer {\n  border-top: 0;\n}\n\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n\n.panel-default {\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n\n.panel-primary {\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n\n.panel-success {\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n\n.panel-info {\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n\n.panel-warning {\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n\n.panel-danger {\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header:before,\n.modal-header:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-header:after {\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n\n.modal-footer:after {\n  clear: both;\n}\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.popover.top {\n  margin-top: -10px;\n}\n\n.popover.right {\n  margin-left: 10px;\n}\n\n.popover.bottom {\n  margin-top: 10px;\n}\n\n.popover.left {\n  margin-left: -10px;\n}\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.popover > .arrow {\n  border-width: 11px;\n}\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  line-height: 1;\n}\n\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n\n.carousel-inner > .active {\n  left: 0;\n}\n\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.carousel-inner > .next {\n  left: 100%;\n}\n\n.carousel-inner > .prev {\n  left: -100%;\n}\n\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n\n.carousel-inner > .active.left {\n  left: -100%;\n}\n\n.carousel-inner > .active.right {\n  left: 100%;\n}\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent;\n}\n\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: transparent;\n}\n\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n\n.carousel-caption .btn {\n  text-shadow: none;\n}\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-right {\n  float: right !important;\n}\n\n.pull-left {\n  float: left !important;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: block !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.affix {\n  position: fixed;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n.visible-xs {\n  display: none !important;\n}\n\n.visible-sm {\n  display: none !important;\n}\n\n.visible-md {\n  display: none !important;\n}\n\n.visible-lg {\n  display: none !important;\n}\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n\n  table.visible-xs {\n    display: table !important;\n  }\n\n  tr.visible-xs {\n    display: table-row !important;\n  }\n\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n\n  table.visible-sm {\n    display: table !important;\n  }\n\n  tr.visible-sm {\n    display: table-row !important;\n  }\n\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n\n  table.visible-md {\n    display: table !important;\n  }\n\n  tr.visible-md {\n    display: table-row !important;\n  }\n\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n\n  table.visible-lg {\n    display: table !important;\n  }\n\n  tr.visible-lg {\n    display: table-row !important;\n  }\n\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n\n.visible-print {\n  display: none !important;\n}\n\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n\n  table.visible-print {\n    display: table !important;\n  }\n\n  tr.visible-print {\n    display: table-row !important;\n  }\n\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWxvYWRlci9uby1vcC5qcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWl4aW5zLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19oaWRlLXRleHQuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX29wYWNpdHkuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2ltYWdlLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19sYWJlbHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3Jlc2V0LWZpbHRlci5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzaXplLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19yZXNwb25zaXZlLXZpc2liaWxpdHkuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3NpemUuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RhYi1mb2N1cy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcmVzZXQtdGV4dC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdGV4dC1lbXBoYXNpcy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdGV4dC1vdmVyZmxvdy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fdmVuZG9yLXByZWZpeGVzLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19hbGVydHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2J1dHRvbnMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3BhbmVscy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fcGFnaW5hdGlvbi5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbGlzdC1ncm91cC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fbmF2LWRpdmlkZXIuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2Zvcm1zLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19wcm9ncmVzcy1iYXIuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX3RhYmxlLXJvdy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fYmFja2dyb3VuZC12YXJpYW50LnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ib3JkZXItcmFkaXVzLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19ncmFkaWVudHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2NsZWFyZml4LnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvbWl4aW5zL19jZW50ZXItYmxvY2suc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX25hdi12ZXJ0aWNhbC1hbGlnbi5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL21peGlucy9fZ3JpZC1mcmFtZXdvcmsuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9taXhpbnMvX2dyaWQuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25vcm1hbGl6ZS5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcmludC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19nbHlwaGljb25zLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3NjYWZmb2xkaW5nLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3R5cGUuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY29kZS5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19ncmlkLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19mb3Jtcy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b25zLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2NvbXBvbmVudC1hbmltYXRpb25zLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Ryb3Bkb3ducy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19idXR0b24tZ3JvdXBzLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2lucHV0LWdyb3Vwcy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZzLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdmJhci5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19icmVhZGNydW1icy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYWdpbmF0aW9uLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhZ2VyLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xhYmVscy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19iYWRnZXMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fanVtYm90cm9uLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RodW1ibmFpbHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYWxlcnRzLnNjc3MiLCIvVXNlcnMvdGludXN3YWduZXIvQ29tcFNjaS9QZXJzb25hbFNpdGUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Byb2dyZXNzLWJhcnMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWVkaWEuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbGlzdC1ncm91cC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYW5lbHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fd2VsbHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcmVzcG9uc2l2ZS1lbWJlZC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jbG9zZS5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19tb2RhbHMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdG9vbHRpcC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wb3BvdmVycy5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jYXJvdXNlbC5zY3NzIiwiL1VzZXJzL3RpbnVzd2FnbmVyL0NvbXBTY2kvUGVyc29uYWxTaXRlL25vZGVfbW9kdWxlcy9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL191dGlsaXRpZXMuc2NzcyIsIi9Vc2Vycy90aW51c3dhZ25lci9Db21wU2NpL1BlcnNvbmFsU2l0ZS9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcmVzcG9uc2l2ZS11dGlsaXRpZXMuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fdmFyaWFibGVzXCI7XG4kaWNvbi1mb250LXBhdGg6IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2ZvbnRzL2Jvb3RzdHJhcC9cIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19ub3JtYWxpemVcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcmludFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2dseXBoaWNvbnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19zY2FmZm9sZGluZ1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3R5cGVcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jb2RlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZ3JpZFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RhYmxlc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2Zvcm1zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2NvbXBvbmVudC1hbmltYXRpb25zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fZHJvcGRvd25zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fYnV0dG9uLWdyb3Vwc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2lucHV0LWdyb3Vwc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX25hdnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19uYXZiYXJcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19icmVhZGNydW1ic1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wYWdlclwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2xhYmVsc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2JhZGdlc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX2p1bWJvdHJvblwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3RodW1ibmFpbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19hbGVydHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19wcm9ncmVzcy1iYXJzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fbWVkaWFcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19saXN0LWdyb3VwXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcGFuZWxzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fd2VsbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19yZXNwb25zaXZlLWVtYmVkXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fY2xvc2VcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19tb2RhbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL190b29sdGlwXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwLXNhc3MvYXNzZXRzL3N0eWxlc2hlZXRzL2Jvb3RzdHJhcC9fcG9wb3ZlcnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAtc2Fzcy9hc3NldHMvc3R5bGVzaGVldHMvYm9vdHN0cmFwL19jYXJvdXNlbFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3V0aWxpdGllc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9zdHlsZXNoZWV0cy9ib290c3RyYXAvX3Jlc3BvbnNpdmUtdXRpbGl0aWVzXCI7XG5cbiIsIi8vIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVXRpbGl0aWVzXG5AaW1wb3J0IFwibWl4aW5zL2hpZGUtdGV4dFwiO1xuQGltcG9ydCBcIm1peGlucy9vcGFjaXR5XCI7XG5AaW1wb3J0IFwibWl4aW5zL2ltYWdlXCI7XG5AaW1wb3J0IFwibWl4aW5zL2xhYmVsc1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC1maWx0ZXJcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcmVzaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eVwiO1xuQGltcG9ydCBcIm1peGlucy9zaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RhYi1mb2N1c1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC10ZXh0XCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtZW1waGFzaXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGV4dC1vdmVyZmxvd1wiO1xuQGltcG9ydCBcIm1peGlucy92ZW5kb3ItcHJlZml4ZXNcIjtcblxuLy8gQ29tcG9uZW50c1xuQGltcG9ydCBcIm1peGlucy9hbGVydHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvYnV0dG9uc1wiO1xuQGltcG9ydCBcIm1peGlucy9wYW5lbHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcGFnaW5hdGlvblwiO1xuQGltcG9ydCBcIm1peGlucy9saXN0LWdyb3VwXCI7XG5AaW1wb3J0IFwibWl4aW5zL25hdi1kaXZpZGVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL2Zvcm1zXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Byb2dyZXNzLWJhclwiO1xuQGltcG9ydCBcIm1peGlucy90YWJsZS1yb3dcIjtcblxuLy8gU2tpbnNcbkBpbXBvcnQgXCJtaXhpbnMvYmFja2dyb3VuZC12YXJpYW50XCI7XG5AaW1wb3J0IFwibWl4aW5zL2JvcmRlci1yYWRpdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JhZGllbnRzXCI7XG5cbi8vIExheW91dFxuQGltcG9ydCBcIm1peGlucy9jbGVhcmZpeFwiO1xuQGltcG9ydCBcIm1peGlucy9jZW50ZXItYmxvY2tcIjtcbkBpbXBvcnQgXCJtaXhpbnMvbmF2LXZlcnRpY2FsLWFsaWduXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWQtZnJhbWV3b3JrXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWRcIjtcbiIsIi8vIENTUyBpbWFnZSByZXBsYWNlbWVudFxuLy9cbi8vIEhlYWRzIHVwISB2MyBsYXVuY2hlZCB3aXRoIG9ubHkgYC5oaWRlLXRleHQoKWAsIGJ1dCBwZXIgb3VyIHBhdHRlcm4gZm9yXG4vLyBtaXhpbnMgYmVpbmcgcmV1c2VkIGFzIGNsYXNzZXMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGlzIGRvZXNuJ3QgaG9sZCB1cC4gQXNcbi8vIG9mIHYzLjAuMSB3ZSBoYXZlIGFkZGVkIGAudGV4dC1oaWRlKClgIGFuZCBkZXByZWNhdGVkIGAuaGlkZS10ZXh0KClgLlxuLy9cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvY29tbWl0L2FhMDM5NmVhZTc1N1xuXG4vLyBEZXByZWNhdGVkIGFzIG9mIHYzLjAuMSAoaGFzIGJlZW4gcmVtb3ZlZCBpbiB2NClcbkBtaXhpbiBoaWRlLXRleHQoKSB7XG4gIGZvbnQ6IDAvMCBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBOZXcgbWl4aW4gdG8gdXNlIGFzIG9mIHYzLjAuMVxuQG1peGluIHRleHQtaGlkZSgpIHtcbiAgQGluY2x1ZGUgaGlkZS10ZXh0O1xufVxuIiwiLy8gT3BhY2l0eVxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eSkge1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgLy8gSUU4IGZpbHRlclxuICAkb3BhY2l0eS1pZTogKCRvcGFjaXR5ICogMTAwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PSRvcGFjaXR5LWllKTtcbn1cbiIsIi8vIEltYWdlIE1peGluc1xuLy8gLSBSZXNwb25zaXZlIGltYWdlXG4vLyAtIFJldGluYSBpbWFnZVxuXG5cbi8vIFJlc3BvbnNpdmUgaW1hZ2Vcbi8vXG4vLyBLZWVwIGltYWdlcyBmcm9tIHNjYWxpbmcgYmV5b25kIHRoZSB3aWR0aCBvZiB0aGVpciBwYXJlbnRzLlxuQG1peGluIGltZy1yZXNwb25zaXZlKCRkaXNwbGF5OiBibG9jaykge1xuICBkaXNwbGF5OiAkZGlzcGxheTtcbiAgbWF4LXdpZHRoOiAxMDAlOyAvLyBQYXJ0IDE6IFNldCBhIG1heGltdW0gcmVsYXRpdmUgdG8gdGhlIHBhcmVudFxuICBoZWlnaHQ6IGF1dG87IC8vIFBhcnQgMjogU2NhbGUgdGhlIGhlaWdodCBhY2NvcmRpbmcgdG8gdGhlIHdpZHRoLCBvdGhlcndpc2UgeW91IGdldCBzdHJldGNoaW5nXG59XG5cblxuLy8gUmV0aW5hIGltYWdlXG4vL1xuLy8gU2hvcnQgcmV0aW5hIG1peGluIGZvciBzZXR0aW5nIGJhY2tncm91bmQtaW1hZ2UgYW5kIC1zaXplLiBOb3RlIHRoYXQgdGhlXG4vLyBzcGVsbGluZyBvZiBgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvYCBpcyBpbnRlbnRpb25hbC5cbkBtaXhpbiBpbWctcmV0aW5hKCRmaWxlLTF4LCAkZmlsZS0yeCwgJHdpZHRoLTF4LCAkaGVpZ2h0LTF4KSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWltYWdlLXBhdGgoXCIjeyRmaWxlLTF4fVwiKSwgXCIjeyRmaWxlLTF4fVwiKSk7XG5cbiAgQG1lZGlhXG4gIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcbiAgb25seSBzY3JlZW4gYW5kICggICBtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKCAgICAgLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgIG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgICAgICAgICBtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgb25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDJkcHB4KSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtaW1hZ2UtcGF0aChcIiN7JGZpbGUtMnh9XCIpLCBcIiN7JGZpbGUtMnh9XCIpKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR3aWR0aC0xeCAkaGVpZ2h0LTF4O1xuICB9XG59XG4iLCIvLyBMYWJlbHNcblxuQG1peGluIGxhYmVsLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAmW2hyZWZdIHtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFJlc2V0IGZpbHRlcnMgZm9yIElFXG4vL1xuLy8gV2hlbiB5b3UgbmVlZCB0byByZW1vdmUgYSBncmFkaWVudCBiYWNrZ3JvdW5kLCBkbyBub3QgZm9yZ2V0IHRvIHVzZSB0aGlzIHRvIHJlc2V0XG4vLyB0aGUgSUUgZmlsdGVyIGZvciBJRTkgYW5kIGJlbG93LlxuXG5AbWl4aW4gcmVzZXQtZmlsdGVyKCkge1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChlbmFibGVkID0gZmFsc2UpO1xufVxuIiwiLy8gUmVzaXplIGFueXRoaW5nXG5cbkBtaXhpbiByZXNpemFibGUoJGRpcmVjdGlvbikge1xuICByZXNpemU6ICRkaXJlY3Rpb247IC8vIE9wdGlvbnM6IGhvcml6b250YWwsIHZlcnRpY2FsLCBib3RoXG4gIG92ZXJmbG93OiBhdXRvOyAvLyBQZXIgQ1NTMyBVSSwgYHJlc2l6ZWAgb25seSBhcHBsaWVzIHdoZW4gYG92ZXJmbG93YCBpc24ndCBgdmlzaWJsZWBcbn1cbiIsIi8vIFJlc3BvbnNpdmUgdXRpbGl0aWVzXG5cbi8vXG4vLyBNb3JlIGVhc2lseSBpbmNsdWRlIGFsbCB0aGUgc3RhdGVzIGZvciByZXNwb25zaXZlLXV0aWxpdGllcy5sZXNzLlxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCRwYXJlbnQpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICB0YWJsZSN7JHBhcmVudH0gIHsgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgfVxuICB0ciN7JHBhcmVudH0gICAgIHsgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgdGgjeyRwYXJlbnR9LFxuICB0ZCN7JHBhcmVudH0gICAgIHsgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG59XG5cbi8vIFtjb252ZXJ0ZXJdICRwYXJlbnQgaGFja1xuQG1peGluIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCRwYXJlbnQpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIvLyBTaXppbmcgc2hvcnRjdXRzXG5cbkBtaXhpbiBzaXplKCR3aWR0aCwgJGhlaWdodCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiBzcXVhcmUoJHNpemUpIHtcbiAgQGluY2x1ZGUgc2l6ZSgkc2l6ZSwgJHNpemUpO1xufVxuIiwiLy8gV2ViS2l0LXN0eWxlIGZvY3VzXG5cbkBtaXhpbiB0YWItZm9jdXMoKSB7XG4gIC8vIFdlYktpdC1zcGVjaWZpYy4gT3RoZXIgYnJvd3NlcnMgd2lsbCBrZWVwIHRoZWlyIGRlZmF1bHQgb3V0bGluZSBzdHlsZS5cbiAgLy8gKEluaXRpYWxseSB0cmllZCB0byBhbHNvIGZvcmNlIGRlZmF1bHQgdmlhIGBvdXRsaW5lOiBpbml0aWFsYCxcbiAgLy8gYnV0IHRoYXQgc2VlbXMgdG8gZXJyb25lb3VzbHkgcmVtb3ZlIHRoZSBvdXRsaW5lIGluIEZpcmVmb3ggYWx0b2dldGhlci4pXG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4iLCJAbWl4aW4gcmVzZXQtdGV4dCgpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICAvLyBXZSBkZWxpYmVyYXRlbHkgZG8gTk9UIHJlc2V0IGZvbnQtc2l6ZS5cbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIEZhbGxiYWNrIGZvciB3aGVyZSBgc3RhcnRgIGlzIG5vdCBzdXBwb3J0ZWRcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cbiIsIi8vIFR5cG9ncmFwaHlcblxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gdGV4dC1lbXBoYXNpcy12YXJpYW50KCRwYXJlbnQsICRjb2xvcikge1xuICAjeyRwYXJlbnR9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICB9XG4gIGEjeyRwYXJlbnR9OmhvdmVyLFxuICBhI3skcGFyZW50fTpmb2N1cyB7XG4gICAgY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIFRleHQgb3ZlcmZsb3dcbi8vIFJlcXVpcmVzIGlubGluZS1ibG9jayBvciBibG9jayBmb3IgcHJvcGVyIHN0eWxpbmdcblxuQG1peGluIHRleHQtb3ZlcmZsb3coKSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiLy8gVmVuZG9yIFByZWZpeGVzXG4vL1xuLy8gQWxsIHZlbmRvciBtaXhpbnMgYXJlIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMi4wIGR1ZSB0byB0aGUgaW50cm9kdWN0aW9uIG9mXG4vLyBBdXRvcHJlZml4ZXIgaW4gb3VyIEdydW50ZmlsZS4gVGhleSBoYXZlIGJlZW4gcmVtb3ZlZCBpbiB2NC5cblxuLy8gLSBBbmltYXRpb25zXG4vLyAtIEJhY2tmYWNlIHZpc2liaWxpdHlcbi8vIC0gQm94IHNoYWRvd1xuLy8gLSBCb3ggc2l6aW5nXG4vLyAtIENvbnRlbnQgY29sdW1uc1xuLy8gLSBIeXBoZW5zXG4vLyAtIFBsYWNlaG9sZGVyIHRleHRcbi8vIC0gVHJhbnNmb3JtYXRpb25zXG4vLyAtIFRyYW5zaXRpb25zXG4vLyAtIFVzZXIgU2VsZWN0XG5cblxuLy8gQW5pbWF0aW9uc1xuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xuICAgICAgIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb246ICRhbmltYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLW5hbWUoJG5hbWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogJG5hbWU7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xufVxuQG1peGluIGFuaW1hdGlvbi1kdXJhdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ICR0aW1pbmctZnVuY3Rpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRkZWxheSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xufVxuQG1peGluIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoJGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbi1jb3VudDtcbn1cbkBtaXhpbiBhbmltYXRpb24tZGlyZWN0aW9uKCRkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLWZpbGwtbW9kZSgkZmlsbC1tb2RlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogJGZpbGwtbW9kZTtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiAkZmlsbC1tb2RlO1xufVxuXG4vLyBCYWNrZmFjZSB2aXNpYmlsaXR5XG4vLyBQcmV2ZW50IGJyb3dzZXJzIGZyb20gZmxpY2tlcmluZyB3aGVuIHVzaW5nIENTUyAzRCB0cmFuc2Zvcm1zLlxuLy8gRGVmYXVsdCB2YWx1ZSBpcyBgdmlzaWJsZWAsIGJ1dCBjYW4gYmUgY2hhbmdlZCB0byBgaGlkZGVuYFxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmlzaWJpbGl0eSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xuICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2aXNpYmlsaXR5O1xufVxuXG4vLyBEcm9wIHNoYWRvd3Ncbi8vXG4vLyBOb3RlOiBEZXByZWNhdGVkIGAuYm94LXNoYWRvdygpYCBhcyBvZiB2My4xLjAgc2luY2UgYWxsIG9mIEJvb3RzdHJhcCdzXG4vLyBzdXBwb3J0ZWQgYnJvd3NlcnMgdGhhdCBoYXZlIGJveCBzaGFkb3cgY2FwYWJpbGl0aWVzIG5vdyBzdXBwb3J0IGl0LlxuXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdzsgLy8gaU9TIDw0LjMgJiBBbmRyb2lkIDw0LjFcbiAgICAgICAgICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG4vLyBCb3ggc2l6aW5nXG5AbWl4aW4gYm94LXNpemluZygkYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogJGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6ICRib3htb2RlbDtcbn1cblxuLy8gQ1NTMyBDb250ZW50IENvbHVtbnNcbkBtaXhpbiBjb250ZW50LWNvbHVtbnMoJGNvbHVtbi1jb3VudCwgJGNvbHVtbi1nYXA6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogJGNvbHVtbi1jb3VudDtcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICRjb2x1bW4tY291bnQ7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiAkY29sdW1uLWNvdW50O1xuICAtd2Via2l0LWNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xuICAgICAtbW96LWNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xuICAgICAgICAgIGNvbHVtbi1nYXA6ICRjb2x1bW4tZ2FwO1xufVxuXG4vLyBPcHRpb25hbCBoeXBoZW5hdGlvblxuQG1peGluIGh5cGhlbnMoJG1vZGU6IGF1dG8pIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWh5cGhlbnM6ICRtb2RlO1xuICAgICAtbW96LWh5cGhlbnM6ICRtb2RlO1xuICAgICAgLW1zLWh5cGhlbnM6ICRtb2RlOyAvLyBJRTEwK1xuICAgICAgIC1vLWh5cGhlbnM6ICRtb2RlO1xuICAgICAgICAgIGh5cGhlbnM6ICRtb2RlO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpIHtcbiAgLy8gRmlyZWZveFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIG9wYWNpdHk6IDE7IC8vIE92ZXJyaWRlIEZpcmVmb3gncyB1bnVzdWFsIGRlZmF1bHQgb3BhY2l0eTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XG4gIH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogJGNvbG9yOyB9IC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyICB7IGNvbG9yOiAkY29sb3I7IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVHJhbnNmb3JtYXRpb25zXG5AbWl4aW4gc2NhbGUoJHJhdGlvLi4uKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKCRyYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgkcmF0aW8pO1xufVxuXG5AbWl4aW4gc2NhbGVYKCRyYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWCgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKCRyYXRpbyk7XG59XG5AbWl4aW4gc2NhbGVZKCRyYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVkoJHJhdGlvKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlWSgkcmF0aW8pO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKCRyYXRpbyk7XG59XG5AbWl4aW4gc2tldygkeCwgJHkpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKCR4KSBza2V3WSgkeSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy80ODg1OyBJRTkrXG4gICAgICAgLW8tdHJhbnNmb3JtOiBza2V3WCgkeCkgc2tld1koJHkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2tld1goJHgpIHNrZXdZKCR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUoJHgsICR5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgkeCwgJHkpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHgsICR5KTtcbn1cbkBtaXhpbiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xufVxuQG1peGluIHJvdGF0ZSgkZGVncmVlcykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoJGRlZ3JlZXMpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiByb3RhdGVYKCRkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWCgkZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiByb3RhdGVZKCRkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoJGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgkZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKCRkZWdyZWVzKTtcbn1cbkBtaXhpbiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogJHBlcnNwZWN0aXZlO1xuICAgICAtbW96LXBlcnNwZWN0aXZlOiAkcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmU6ICRwZXJzcGVjdGl2ZTtcbn1cbkBtaXhpbiBwZXJzcGVjdGl2ZS1vcmlnaW4oJHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiAkcGVyc3BlY3RpdmU7XG59XG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkb3JpZ2luKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbiAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47IC8vIElFOSBvbmx5XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcbn1cblxuXG4vLyBUcmFuc2l0aW9uc1xuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tcHJvcGVydHkoJHRyYW5zaXRpb24tcHJvcGVydHkuLi4pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAkdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAkdHJhbnNpdGlvbi1wcm9wZXJ0eTtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCR0cmFuc2l0aW9uLWRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogJHRyYW5zaXRpb24tZGVsYXk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kdXJhdGlvbigkdHJhbnNpdGlvbi1kdXJhdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLXRyYW5zZm9ybSgkdHJhbnNpdGlvbi4uLikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtICR0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSAkdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb247XG59XG5cblxuLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG5AbWl4aW4gdXNlci1zZWxlY3QoJHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiAkc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiAkc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiAkc2VsZWN0O1xufVxuIiwiLy8gQWxlcnRzXG5cbkBtaXhpbiBhbGVydC12YXJpYW50KCRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkdGV4dC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG5cbiAgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkYm9yZGVyLCA1JSk7XG4gIH1cbiAgLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiBkYXJrZW4oJHRleHQtY29sb3IsIDEwJSk7XG4gIH1cbn1cbiIsIi8vIEJ1dHRvbiB2YXJpYW50c1xuLy9cbi8vIEVhc2lseSBwdW1wIG91dCBkZWZhdWx0IHN0eWxlcywgYXMgd2VsbCBhcyA6aG92ZXIsIDpmb2N1cywgOmFjdGl2ZSxcbi8vIGFuZCBkaXNhYmxlZCBvcHRpb25zIGZvciBhbGwgYnV0dG9uc1xuXG5AbWl4aW4gYnV0dG9uLXZhcmlhbnQoJGNvbG9yLCAkYmFja2dyb3VuZCwgJGJvcmRlcikge1xuICBjb2xvcjogJGNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAxMiUpO1xuICB9XG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgLm9wZW4gPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDEwJSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDEyJSk7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRiYWNrZ3JvdW5kLCAxNyUpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXIsIDI1JSk7XG4gICAgfVxuICB9XG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgLm9wZW4gPiAmLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICAmLmRpc2FibGVkLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAuYmFkZ2Uge1xuICAgIGNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gQnV0dG9uIHNpemVzXG5AbWl4aW4gYnV0dG9uLXNpemUoJHBhZGRpbmctdmVydGljYWwsICRwYWRkaW5nLWhvcml6b250YWwsICRmb250LXNpemUsICRsaW5lLWhlaWdodCwgJGJvcmRlci1yYWRpdXMpIHtcbiAgcGFkZGluZzogJHBhZGRpbmctdmVydGljYWwgJHBhZGRpbmctaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbn1cbiIsIi8vIFBhbmVsc1xuXG5AbWl4aW4gcGFuZWwtdmFyaWFudCgkYm9yZGVyLCAkaGVhZGluZy10ZXh0LWNvbG9yLCAkaGVhZGluZy1iZy1jb2xvciwgJGhlYWRpbmctYm9yZGVyKSB7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcblxuICAmID4gLnBhbmVsLWhlYWRpbmcge1xuICAgIGNvbG9yOiAkaGVhZGluZy10ZXh0LWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkaW5nLWJnLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGhlYWRpbmctYm9yZGVyO1xuXG4gICAgKyAucGFuZWwtY29sbGFwc2UgPiAucGFuZWwtYm9keSB7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkYm9yZGVyO1xuICAgIH1cbiAgICAuYmFkZ2Uge1xuICAgICAgY29sb3I6ICRoZWFkaW5nLWJnLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRpbmctdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJiA+IC5wYW5lbC1mb290ZXIge1xuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFBhZ2luYXRpb25cblxuQG1peGluIHBhZ2luYXRpb24tc2l6ZSgkcGFkZGluZy12ZXJ0aWNhbCwgJHBhZGRpbmctaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICA+IGxpIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIExpc3QgR3JvdXBzXG5cbkBtaXhpbiBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kLCAkY29sb3IpIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG5cbiAgICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSYsIGJ1dHRvbiYgdG8gYS5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9LCBidXR0b24ubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfVxuICB9XG5cbiAgYS5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9LFxuICBidXR0b24ubGlzdC1ncm91cC1pdGVtLSN7JHN0YXRlfSB7XG4gICAgY29sb3I6ICRjb2xvcjtcblxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpO1xuICAgIH1cbiAgICAmLmFjdGl2ZSxcbiAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAmLmFjdGl2ZTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSG9yaXpvbnRhbCBkaXZpZGVyc1xuLy9cbi8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gaHIpIHdpdGhpbiBkcm9wZG93bnMgYW5kIG5hdiBsaXN0c1xuXG5AbWl4aW4gbmF2LWRpdmlkZXIoJGNvbG9yOiAjZTVlNWU1KSB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46ICgoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMikgLSAxKSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG59XG4iLCIvLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4vL1xuLy8gVXNlZCBpbiBmb3Jtcy5sZXNzIHRvIGdlbmVyYXRlIHRoZSBmb3JtIHZhbGlkYXRpb24gQ1NTIGZvciB3YXJuaW5ncywgZXJyb3JzLFxuLy8gYW5kIHN1Y2Nlc3Nlcy5cblxuQG1peGluIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCR0ZXh0LWNvbG9yOiAjNTU1LCAkYm9yZGVyLWNvbG9yOiAjY2NjLCAkYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSkge1xuICAvLyBDb2xvciB0aGUgbGFiZWwgYW5kIGhlbHAgdGV4dFxuICAuaGVscC1ibG9jayxcbiAgLmNvbnRyb2wtbGFiZWwsXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94LFxuICAucmFkaW8taW5saW5lLFxuICAuY2hlY2tib3gtaW5saW5lLFxuICAmLnJhZGlvIGxhYmVsLFxuICAmLmNoZWNrYm94IGxhYmVsLFxuICAmLnJhZGlvLWlubGluZSBsYWJlbCxcbiAgJi5jaGVja2JveC1pbmxpbmUgbGFiZWwgIHtcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gIH1cbiAgLy8gU2V0IHRoZSBib3JkZXIgYW5kIGJveCBzaGFkb3cgb24gc3BlY2lmaWMgaW5wdXRzIHRvIG1hdGNoXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpKTsgLy8gUmVkZWNsYXJlIHNvIHRyYW5zaXRpb25zIHdvcmtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCRib3JkZXItY29sb3IsIDEwJSk7XG4gICAgICAkc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDZweCBsaWdodGVuKCRib3JkZXItY29sb3IsIDIwJSk7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCRzaGFkb3cpO1xuICAgIH1cbiAgfVxuICAvLyBTZXQgdmFsaWRhdGlvbiBzdGF0ZXMgYWxzbyBmb3IgYWRkb25zXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgfVxuICAvLyBPcHRpb25hbCBmZWVkYmFjayBpY29uXG4gIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgfVxufVxuXG5cbi8vIEZvcm0gY29udHJvbCBmb2N1cyBzdGF0ZVxuLy9cbi8vIEdlbmVyYXRlIGEgY3VzdG9taXplZCBmb2N1cyBzdGF0ZSBhbmQgZm9yIGFueSBpbnB1dCB3aXRoIHRoZSBzcGVjaWZpZWQgY29sb3IsXG4vLyB3aGljaCBkZWZhdWx0cyB0byB0aGUgYCRpbnB1dC1ib3JkZXItZm9jdXNgIHZhcmlhYmxlLlxuLy9cbi8vIFdlIGhpZ2hseSBlbmNvdXJhZ2UgeW91IHRvIG5vdCBjdXN0b21pemUgdGhlIGRlZmF1bHQgdmFsdWUsIGJ1dCBpbnN0ZWFkIHVzZVxuLy8gdGhpcyB0byB0d2VhayBjb2xvcnMgb24gYW4gYXMtbmVlZGVkIGJhc2lzLiBUaGlzIGFlc3RoZXRpYyBjaGFuZ2UgaXMgYmFzZWQgb25cbi8vIFdlYktpdCdzIGRlZmF1bHQgc3R5bGVzLCBidXQgYXBwbGljYWJsZSB0byBhIHdpZGVyIHJhbmdlIG9mIGJyb3dzZXJzLiBJdHNcbi8vIHVzYWJpbGl0eSBhbmQgYWNjZXNzaWJpbGl0eSBzaG91bGQgYmUgdGFrZW4gaW50byBhY2NvdW50IHdpdGggYW55IGNoYW5nZS5cbi8vXG4vLyBFeGFtcGxlIHVzYWdlOiBjaGFuZ2UgdGhlIGRlZmF1bHQgYmx1ZSBib3JkZXIgYW5kIHNoYWRvdyB0byB3aGl0ZSBmb3IgYmV0dGVyXG4vLyBjb250cmFzdCBhZ2FpbnN0IGEgZGFyayBncmF5IGJhY2tncm91bmQuXG5AbWl4aW4gZm9ybS1jb250cm9sLWZvY3VzKCRjb2xvcjogJGlucHV0LWJvcmRlci1mb2N1cykge1xuICAkY29sb3ItcmdiYTogcmdiYShyZWQoJGNvbG9yKSwgZ3JlZW4oJGNvbG9yKSwgYmx1ZSgkY29sb3IpLCAuNik7XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIG91dGxpbmU6IDA7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwgMCAwIDhweCAkY29sb3ItcmdiYSk7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIFJlbGF0aXZlIHRleHQgc2l6ZSwgcGFkZGluZywgYW5kIGJvcmRlci1yYWRpaSBjaGFuZ2VzIGZvciBmb3JtIGNvbnRyb2xzLiBGb3Jcbi8vIGhvcml6b250YWwgc2l6aW5nLCB3cmFwIGNvbnRyb2xzIGluIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy4gYDxzZWxlY3Q+YFxuLy8gZWxlbWVudCBnZXRzIHNwZWNpYWwgbG92ZSBiZWNhdXNlIGl0J3Mgc3BlY2lhbCwgYW5kIHRoYXQncyBhIGZhY3QhXG4vLyBbY29udmVydGVyXSAkcGFyZW50IGhhY2tcbkBtaXhpbiBpbnB1dC1zaXplKCRwYXJlbnQsICRpbnB1dC1oZWlnaHQsICRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgc2VsZWN0I3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICB9XG5cbiAgdGV4dGFyZWEjeyRwYXJlbnR9LFxuICBzZWxlY3RbbXVsdGlwbGVdI3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4iLCIvLyBQcm9ncmVzcyBiYXJzXG5cbkBtaXhpbiBwcm9ncmVzcy1iYXItdmFyaWFudCgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gIC8vIERlcHJlY2F0ZWQgcGFyZW50IGNsYXNzIHJlcXVpcmVtZW50IGFzIG9mIHYzLjIuMFxuICAucHJvZ3Jlc3Mtc3RyaXBlZCAmIHtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkO1xuICB9XG59XG4iLCIvLyBUYWJsZXNcblxuQG1peGluIHRhYmxlLXJvdy12YXJpYW50KCRzdGF0ZSwgJGJhY2tncm91bmQpIHtcbiAgLy8gRXhhY3Qgc2VsZWN0b3JzIGJlbG93IHJlcXVpcmVkIHRvIG92ZXJyaWRlIGAudGFibGUtc3RyaXBlZGAgYW5kIHByZXZlbnRcbiAgLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cbiAgLnRhYmxlID4gdGhlYWQgPiB0cixcbiAgLnRhYmxlID4gdGJvZHkgPiB0cixcbiAgLnRhYmxlID4gdGZvb3QgPiB0ciB7XG4gICAgPiB0ZC4jeyRzdGF0ZX0sXG4gICAgPiB0aC4jeyRzdGF0ZX0sXG4gICAgJi4jeyRzdGF0ZX0gPiB0ZCxcbiAgICAmLiN7JHN0YXRlfSA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvdmVyIHN0YXRlcyBmb3IgYC50YWJsZS1ob3ZlcmBcbiAgLy8gTm90ZTogdGhpcyBpcyBub3QgYXZhaWxhYmxlIGZvciBjZWxscyBvciByb3dzIHdpdGhpbiBgdGhlYWRgIG9yIGB0Zm9vdGAuXG4gIC50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHIge1xuICAgID4gdGQuI3skc3RhdGV9OmhvdmVyLFxuICAgID4gdGguI3skc3RhdGV9OmhvdmVyLFxuICAgICYuI3skc3RhdGV9OmhvdmVyID4gdGQsXG4gICAgJjpob3ZlciA+IC4jeyRzdGF0ZX0sXG4gICAgJi4jeyRzdGF0ZX06aG92ZXIgPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcblxuLy8gW2NvbnZlcnRlcl0gJHBhcmVudCBoYWNrXG5AbWl4aW4gYmctdmFyaWFudCgkcGFyZW50LCAkY29sb3IpIHtcbiAgI3skcGFyZW50fSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG4gIGEjeyRwYXJlbnR9OmhvdmVyLFxuICBhI3skcGFyZW50fTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvciwgMTAlKTtcbiAgfVxufVxuIiwiLy8gU2luZ2xlIHNpZGUgYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gYm9yZGVyLXRvcC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG59XG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cztcbn1cbkBtaXhpbiBib3JkZXItbGVmdC1yYWRpdXMoJHJhZGl1cykge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xuICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkcmFkaXVzO1xufVxuIiwiLy8gR3JhZGllbnRzXG5cblxuXG4vLyBIb3Jpem9udGFsIGdyYWRpZW50LCBmcm9tIGxlZnQgdG8gcmlnaHRcbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJHN0YXJ0LXBlcmNlbnQ6IDAlLCAkZW5kLXBlcmNlbnQ6IDEwMCUpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFNhZmFyaSA1LjEtNiwgQ2hyb21lIDEwK1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7IC8vIFN0YW5kYXJkLCBJRTEwLCBGaXJlZm94IDE2KywgT3BlcmEgMTIuMTArLCBTYWZhcmkgNyssIENocm9tZSAyNitcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGFuZCBkb3duXG59XG5cbi8vIFZlcnRpY2FsIGdyYWRpZW50LCBmcm9tIHRvcCB0byBib3R0b21cbi8vXG4vLyBDcmVhdGVzIHR3byBjb2xvciBzdG9wcywgc3RhcnQgYW5kIGVuZCwgYnkgc3BlY2lmeWluZyBhIGNvbG9yIGFuZCBwb3NpdGlvbiBmb3IgZWFjaCBjb2xvciBzdG9wLlxuLy8gQ29sb3Igc3RvcHMgYXJlIG5vdCBhdmFpbGFibGUgaW4gSUU5IGFuZCBiZWxvdy5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7ICAvLyBPcGVyYSAxMlxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTsgLy8gU3RhbmRhcmQsIElFMTAsIEZpcmVmb3ggMTYrLCBPcGVyYSAxMi4xMCssIFNhZmFyaSA3KywgQ2hyb21lIDI2K1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgYW5kIGRvd25cbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTYWZhcmkgNS4xLTYsIENocm9tZSAxMCtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7IC8vIE9wZXJhIDEyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkZGVnLCAkc3RhcnQtY29sb3IsICRlbmQtY29sb3IpOyAvLyBTdGFuZGFyZCwgSUUxMCwgRmlyZWZveCAxNissIE9wZXJhIDEyLjEwKywgU2FmYXJpIDcrLCBDaHJvbWUgMjYrXG59XG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbC10aHJlZS1jb2xvcnMoJHN0YXJ0LWNvbG9yOiAjMDBiM2VlLCAkbWlkLWNvbG9yOiAjN2E0M2I2LCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAjYzMzMjVmKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTEpOyAvLyBJRTkgYW5kIGRvd24sIGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0wKTsgLy8gSUU5IGFuZCBkb3duLCBnZXRzIG5vIGNvbG9yLXN0b3AgYXQgYWxsIGZvciBwcm9wZXIgZmFsbGJhY2tcbn1cbkBtaXhpbiBncmFkaWVudC1yYWRpYWwoJGlubmVyLWNvbG9yOiAjNTU1LCAkb3V0ZXItY29sb3I6ICMzMzMpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAkaW5uZXItY29sb3IsICRvdXRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsICRjb2xvciA1MCUsICRjb2xvciA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn1cbiIsIi8vIENsZWFyZml4XG4vL1xuLy8gRm9yIG1vZGVybiBicm93c2Vyc1xuLy8gMS4gVGhlIHNwYWNlIGNvbnRlbnQgaXMgb25lIHdheSB0byBhdm9pZCBhbiBPcGVyYSBidWcgd2hlbiB0aGVcbi8vICAgIGNvbnRlbnRlZGl0YWJsZSBhdHRyaWJ1dGUgaXMgaW5jbHVkZWQgYW55d2hlcmUgZWxzZSBpbiB0aGUgZG9jdW1lbnQuXG4vLyAgICBPdGhlcndpc2UgaXQgY2F1c2VzIHNwYWNlIHRvIGFwcGVhciBhdCB0aGUgdG9wIGFuZCBib3R0b20gb2YgZWxlbWVudHNcbi8vICAgIHRoYXQgYXJlIGNsZWFyZml4ZWQuXG4vLyAyLiBUaGUgdXNlIG9mIGB0YWJsZWAgcmF0aGVyIHRoYW4gYGJsb2NrYCBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB1c2luZ1xuLy8gICAgYDpiZWZvcmVgIHRvIGNvbnRhaW4gdGhlIHRvcC1tYXJnaW5zIG9mIGNoaWxkIGVsZW1lbnRzLlxuLy9cbi8vIFNvdXJjZTogaHR0cDovL25pY29sYXNnYWxsYWdoZXIuY29tL21pY3JvLWNsZWFyZml4LWhhY2svXG5cbkBtaXhpbiBjbGVhcmZpeCgpIHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiOyAvLyAxXG4gICAgZGlzcGxheTogdGFibGU7IC8vIDJcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuIiwiLy8gQ2VudGVyLWFsaWduIGEgYmxvY2sgbGV2ZWwgZWxlbWVudFxuXG5AbWl4aW4gY2VudGVyLWJsb2NrKCkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiIsIi8vIE5hdmJhciB2ZXJ0aWNhbCBhbGlnblxuLy9cbi8vIFZlcnRpY2FsbHkgY2VudGVyIGVsZW1lbnRzIGluIHRoZSBuYXZiYXIuXG4vLyBFeGFtcGxlOiBhbiBlbGVtZW50IGhhcyBhIGhlaWdodCBvZiAzMHB4LCBzbyB3cml0ZSBvdXQgYC5uYXZiYXItdmVydGljYWwtYWxpZ24oMzBweCk7YCB0byBjYWxjdWxhdGUgdGhlIGFwcHJvcHJpYXRlIHRvcCBtYXJnaW4uXG5cbkBtaXhpbiBuYXZiYXItdmVydGljYWwtYWxpZ24oJGVsZW1lbnQtaGVpZ2h0KSB7XG4gIG1hcmdpbi10b3A6ICgoJG5hdmJhci1oZWlnaHQgLSAkZWxlbWVudC1oZWlnaHQpIC8gMik7XG4gIG1hcmdpbi1ib3R0b206ICgoJG5hdmJhci1oZWlnaHQgLSAkZWxlbWVudC1oZWlnaHQpIC8gMik7XG59XG4iLCIvLyBGcmFtZXdvcmsgZ3JpZCBnZW5lcmF0aW9uXG4vL1xuLy8gVXNlZCBvbmx5IGJ5IEJvb3RzdHJhcCB0byBnZW5lcmF0ZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgZ3JpZCBjbGFzc2VzIGdpdmVuXG4vLyBhbnkgdmFsdWUgb2YgYCRncmlkLWNvbHVtbnNgLlxuXG4vLyBbY29udmVydGVyXSBUaGlzIGlzIGRlZmluZWQgcmVjdXJzaXZlbHkgaW4gTEVTUywgYnV0IFNhc3Mgc3VwcG9ydHMgcmVhbCBsb29wc1xuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRpOiAxLCAkbGlzdDogXCIuY29sLXhzLSN7JGl9LCAuY29sLXNtLSN7JGl9LCAuY29sLW1kLSN7JGl9LCAuY29sLWxnLSN7JGl9XCIpIHtcbiAgQGZvciAkaSBmcm9tICgxICsgMSkgdGhyb3VnaCAkZ3JpZC1jb2x1bW5zIHtcbiAgICAkbGlzdDogXCIjeyRsaXN0fSwgLmNvbC14cy0jeyRpfSwgLmNvbC1zbS0jeyRpfSwgLmNvbC1tZC0jeyRpfSwgLmNvbC1sZy0jeyRpfVwiO1xuICB9XG4gICN7JGxpc3R9IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gUHJldmVudCBjb2x1bW5zIGZyb20gY29sbGFwc2luZyB3aGVuIGVtcHR5XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIC8vIElubmVyIGd1dHRlciB2aWEgcGFkZGluZ1xuICAgIHBhZGRpbmctbGVmdDogIGNlaWwoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBmbG9vcigoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMikpO1xuICB9XG59XG5cblxuLy8gW2NvbnZlcnRlcl0gVGhpcyBpcyBkZWZpbmVkIHJlY3Vyc2l2ZWx5IGluIExFU1MsIGJ1dCBTYXNzIHN1cHBvcnRzIHJlYWwgbG9vcHNcbkBtaXhpbiBmbG9hdC1ncmlkLWNvbHVtbnMoJGNsYXNzLCAkaTogMSwgJGxpc3Q6IFwiLmNvbC0jeyRjbGFzc30tI3skaX1cIikge1xuICBAZm9yICRpIGZyb20gKDEgKyAxKSB0aHJvdWdoICRncmlkLWNvbHVtbnMge1xuICAgICRsaXN0OiBcIiN7JGxpc3R9LCAuY29sLSN7JGNsYXNzfS0jeyRpfVwiO1xuICB9XG4gICN7JGxpc3R9IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG5cbkBtaXhpbiBjYWxjLWdyaWQtY29sdW1uKCRpbmRleCwgJGNsYXNzLCAkdHlwZSkge1xuICBAaWYgKCR0eXBlID09IHdpZHRoKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS0jeyRpbmRleH0ge1xuICAgICAgd2lkdGg6IHBlcmNlbnRhZ2UoKCRpbmRleCAvICRncmlkLWNvbHVtbnMpKTtcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBwdXNoKSBhbmQgKCRpbmRleCA+IDApIHtcbiAgICAuY29sLSN7JGNsYXNzfS1wdXNoLSN7JGluZGV4fSB7XG4gICAgICBsZWZ0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVzaCkgYW5kICgkaW5kZXggPT0gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1c2gtMCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgfVxuICBAaWYgKCR0eXBlID09IHB1bGwpIGFuZCAoJGluZGV4ID4gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1bGwtI3skaW5kZXh9IHtcbiAgICAgIHJpZ2h0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG4gIEBpZiAoJHR5cGUgPT0gcHVsbCkgYW5kICgkaW5kZXggPT0gMCkge1xuICAgIC5jb2wtI3skY2xhc3N9LXB1bGwtMCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICB9XG4gIH1cbiAgQGlmICgkdHlwZSA9PSBvZmZzZXQpIHtcbiAgICAuY29sLSN7JGNsYXNzfS1vZmZzZXQtI3skaW5kZXh9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCgkaW5kZXggLyAkZ3JpZC1jb2x1bW5zKSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgZGVmaW5lZCByZWN1cnNpdmVseSBpbiBMRVNTLCBidXQgU2FzcyBzdXBwb3J0cyByZWFsIGxvb3BzXG5AbWl4aW4gbG9vcC1ncmlkLWNvbHVtbnMoJGNvbHVtbnMsICRjbGFzcywgJHR5cGUpIHtcbiAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgQGluY2x1ZGUgY2FsYy1ncmlkLWNvbHVtbigkaSwgJGNsYXNzLCAkdHlwZSk7XG4gIH1cbn1cblxuXG4vLyBDcmVhdGUgZ3JpZCBmb3Igc3BlY2lmaWMgY2xhc3NcbkBtaXhpbiBtYWtlLWdyaWQoJGNsYXNzKSB7XG4gIEBpbmNsdWRlIGZsb2F0LWdyaWQtY29sdW1ucygkY2xhc3MpO1xuICBAaW5jbHVkZSBsb29wLWdyaWQtY29sdW1ucygkZ3JpZC1jb2x1bW5zLCAkY2xhc3MsIHdpZHRoKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBwdWxsKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBwdXNoKTtcbiAgQGluY2x1ZGUgbG9vcC1ncmlkLWNvbHVtbnMoJGdyaWQtY29sdW1ucywgJGNsYXNzLCBvZmZzZXQpO1xufVxuIiwiLy8gR3JpZCBzeXN0ZW1cbi8vXG4vLyBHZW5lcmF0ZSBzZW1hbnRpYyBncmlkIGNvbHVtbnMgd2l0aCB0aGVzZSBtaXhpbnMuXG5cbi8vIENlbnRlcmVkIGNvbnRhaW5lciBlbGVtZW50XG5AbWl4aW4gY29udGFpbmVyLWZpeGVkKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICBmbG9vcigoJGd1dHRlciAvIDIpKTtcbiAgcGFkZGluZy1yaWdodDogY2VpbCgoJGd1dHRlciAvIDIpKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cbi8vIENyZWF0ZXMgYSB3cmFwcGVyIGZvciBhIHNlcmllcyBvZiBjb2x1bW5zXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIG1hcmdpbi1sZWZ0OiAgY2VpbCgoJGd1dHRlciAvIC0yKSk7XG4gIG1hcmdpbi1yaWdodDogZmxvb3IoKCRndXR0ZXIgLyAtMikpO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cblxuLy8gR2VuZXJhdGUgdGhlIGV4dHJhIHNtYWxsIGNvbHVtbnNcbkBtaXhpbiBtYWtlLXhzLWNvbHVtbigkY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xufVxuQG1peGluIG1ha2UteHMtY29sdW1uLW9mZnNldCgkY29sdW1ucykge1xuICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG59XG5AbWl4aW4gbWFrZS14cy1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbn1cbkBtaXhpbiBtYWtlLXhzLWNvbHVtbi1wdWxsKCRjb2x1bW5zKSB7XG4gIHJpZ2h0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbn1cblxuLy8gR2VuZXJhdGUgdGhlIHNtYWxsIGNvbHVtbnNcbkBtaXhpbiBtYWtlLXNtLWNvbHVtbigkY29sdW1ucywgJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2Utc20tY29sdW1uLW9mZnNldCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICBtYXJnaW4tbGVmdDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLXNtLWNvbHVtbi1wdXNoKCRjb2x1bW5zKSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1zbS1jb2x1bW4tcHVsbCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgICByaWdodDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGUgdGhlIG1lZGl1bSBjb2x1bW5zXG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLW1kLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1tZC1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbWQtY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlIHRoZSBsYXJnZSBjb2x1bW5zXG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4oJGNvbHVtbnMsICRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAgKCRndXR0ZXIgLyAyKTtcbiAgcGFkZGluZy1yaWdodDogKCRndXR0ZXIgLyAyKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogcGVyY2VudGFnZSgoJGNvbHVtbnMgLyAkZ3JpZC1jb2x1bW5zKSk7XG4gIH1cbn1cbkBtaXhpbiBtYWtlLWxnLWNvbHVtbi1vZmZzZXQoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgbWFyZ2luLWxlZnQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG5AbWl4aW4gbWFrZS1sZy1jb2x1bW4tcHVzaCgkY29sdW1ucykge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgICBsZWZ0OiBwZXJjZW50YWdlKCgkY29sdW1ucyAvICRncmlkLWNvbHVtbnMpKTtcbiAgfVxufVxuQG1peGluIG1ha2UtbGctY29sdW1uLXB1bGwoJGNvbHVtbnMpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgcmlnaHQ6IHBlcmNlbnRhZ2UoKCRjb2x1bW5zIC8gJGdyaWQtY29sdW1ucykpO1xuICB9XG59XG4iLCIkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyOiBmYWxzZSAhZGVmYXVsdDtcbi8vXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy89PSBDb2xvcnNcbi8vXG4vLyMjIEdyYXkgYW5kIGJyYW5kIGNvbG9ycyBmb3IgdXNlIGFjcm9zcyBCb290c3RyYXAuXG5cbiRncmF5LWJhc2U6ICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGdyYXktZGFya2VyOiAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgMTMuNSUpICFkZWZhdWx0OyAvLyAjMjIyXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCAyMCUpICFkZWZhdWx0OyAgIC8vICMzMzNcbiRncmF5OiAgICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWJhc2UsIDMzLjUlKSAhZGVmYXVsdDsgLy8gIzU1NVxuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktYmFzZSwgNDYuNyUpICFkZWZhdWx0OyAvLyAjNzc3XG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgbGlnaHRlbigkZ3JheS1iYXNlLCA5My41JSkgIWRlZmF1bHQ7IC8vICNlZWVcblxuJGJyYW5kLXByaW1hcnk6ICAgICAgICAgZGFya2VuKCM0MjhiY2EsIDYuNSUpICFkZWZhdWx0OyAvLyAjMzM3YWI3XG4kYnJhbmQtc3VjY2VzczogICAgICAgICAjNWNiODVjICFkZWZhdWx0O1xuJGJyYW5kLWluZm86ICAgICAgICAgICAgIzViYzBkZSAhZGVmYXVsdDtcbiRicmFuZC13YXJuaW5nOiAgICAgICAgICNmMGFkNGUgIWRlZmF1bHQ7XG4kYnJhbmQtZGFuZ2VyOiAgICAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuXG5cbi8vPT0gU2NhZmZvbGRpbmdcbi8vXG4vLyMjIFNldHRpbmdzIGZvciBzb21lIG9mIHRoZSBtb3N0IGdsb2JhbCBzdHlsZXMuXG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBmb3IgYDxib2R5PmAuXG4kYm9keS1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgdGV4dCBjb2xvciBvbiBgPGJvZHk+YC5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIHRleHR1YWwgbGluayBjb2xvci5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuLy8qKiBMaW5rIGhvdmVyIGNvbG9yIHNldCB2aWEgYGRhcmtlbigpYCBmdW5jdGlvbi5cbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbi8vKiogTGluayBob3ZlciBkZWNvcmF0aW9uLlxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogdW5kZXJsaW5lICFkZWZhdWx0O1xuXG5cbi8vPT0gVHlwb2dyYXBoeVxuLy9cbi8vIyMgRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgICBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYgIWRlZmF1bHQ7XG4vLyoqIERlZmF1bHQgbW9ub3NwYWNlIGZvbnRzIGZvciBgPGNvZGU+YCwgYDxrYmQ+YCwgYW5kIGA8cHJlPmAuXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgMTRweCAhZGVmYXVsdDtcbiRmb250LXNpemUtbGFyZ2U6ICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1zbWFsbDogICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAwLjg1KSkgIWRlZmF1bHQ7IC8vIH4xMnB4XG5cbiRmb250LXNpemUtaDE6ICAgICAgICAgICAgZmxvb3IoKCRmb250LXNpemUtYmFzZSAqIDIuNikpICFkZWZhdWx0OyAvLyB+MzZweFxuJGZvbnQtc2l6ZS1oMjogICAgICAgICAgICBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMi4xNSkpICFkZWZhdWx0OyAvLyB+MzBweFxuJGZvbnQtc2l6ZS1oMzogICAgICAgICAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiAxLjcpKSAhZGVmYXVsdDsgLy8gfjI0cHhcbiRmb250LXNpemUtaDQ6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkpICFkZWZhdWx0OyAvLyB+MThweFxuJGZvbnQtc2l6ZS1oNTogICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg2OiAgICAgICAgICAgIGNlaWwoKCRmb250LXNpemUtYmFzZSAqIDAuODUpKSAhZGVmYXVsdDsgLy8gfjEycHhcblxuLy8qKiBVbml0LWxlc3MgYGxpbmUtaGVpZ2h0YCBmb3IgdXNlIGluIGNvbXBvbmVudHMgbGlrZSBidXR0b25zLlxuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAxLjQyODU3MTQyOSAhZGVmYXVsdDsgLy8gMjAvMTRcbi8vKiogQ29tcHV0ZWQgXCJsaW5lLWhlaWdodFwiIChgZm9udC1zaXplYCAqIGBsaW5lLWhlaWdodGApIGZvciB1c2Ugd2l0aCBgbWFyZ2luYCwgYHBhZGRpbmdgLCBldGMuXG4kbGluZS1oZWlnaHQtY29tcHV0ZWQ6ICAgIGZsb29yKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSkpICFkZWZhdWx0OyAvLyB+MjBweFxuXG4vLyoqIEJ5IGRlZmF1bHQsIHRoaXMgaW5oZXJpdHMgZnJvbSB0aGUgYDxib2R5PmAuXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgMS4xICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuXG5cbi8vPT0gSWNvbm9ncmFwaHlcbi8vXG4vLyMjIFNwZWNpZnkgY3VzdG9tIGxvY2F0aW9uIGFuZCBmaWxlbmFtZSBvZiB0aGUgaW5jbHVkZWQgR2x5cGhpY29ucyBpY29uIGZvbnQuIFVzZWZ1bCBmb3IgdGhvc2UgaW5jbHVkaW5nIEJvb3RzdHJhcCB2aWEgQm93ZXIuXG5cbi8vKiogTG9hZCBmb250cyBmcm9tIHRoaXMgZGlyZWN0b3J5LlxuXG4vLyBbY29udmVydGVyXSBJZiAkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyIGlmIHVzZWQsIHByb3ZpZGUgcGF0aCByZWxhdGl2ZSB0byB0aGUgYXNzZXRzIGxvYWQgcGF0aC5cbi8vIFtjb252ZXJ0ZXJdIFRoaXMgaXMgYmVjYXVzZSBzb21lIGFzc2V0IGhlbHBlcnMsIHN1Y2ggYXMgU3Byb2NrZXRzLCBkbyBub3Qgd29yayB3aXRoIGZpbGUtcmVsYXRpdmUgcGF0aHMuXG4kaWNvbi1mb250LXBhdGg6IGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIFwiYm9vdHN0cmFwL1wiLCBcIi4uL2ZvbnRzL2Jvb3RzdHJhcC9cIikgIWRlZmF1bHQ7XG5cbi8vKiogRmlsZSBuYW1lIGZvciBhbGwgZm9udCBmaWxlcy5cbiRpY29uLWZvbnQtbmFtZTogICAgICAgICAgXCJnbHlwaGljb25zLWhhbGZsaW5ncy1yZWd1bGFyXCIgIWRlZmF1bHQ7XG4vLyoqIEVsZW1lbnQgSUQgd2l0aGluIFNWRyBpY29uIGZpbGUuXG4kaWNvbi1mb250LXN2Zy1pZDogICAgICAgIFwiZ2x5cGhpY29uc19oYWxmbGluZ3NyZWd1bGFyXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDb21wb25lbnRzXG4vL1xuLy8jIyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuIFZhbHVlcyBiYXNlZCBvbiAxNHB4IHRleHQgYW5kIDEuNDI4IGxpbmUtaGVpZ2h0ICh+MjBweCB0byBzdGFydCkuXG5cbiRwYWRkaW5nLWJhc2UtdmVydGljYWw6ICAgICA2cHggIWRlZmF1bHQ7XG4kcGFkZGluZy1iYXNlLWhvcml6b250YWw6ICAgMTJweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctbGFyZ2UtdmVydGljYWw6ICAgIDEwcHggIWRlZmF1bHQ7XG4kcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsOiAgMTZweCAhZGVmYXVsdDtcblxuJHBhZGRpbmctc21hbGwtdmVydGljYWw6ICAgIDVweCAhZGVmYXVsdDtcbiRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw6ICAxMHB4ICFkZWZhdWx0O1xuXG4kcGFkZGluZy14cy12ZXJ0aWNhbDogICAgICAgMXB4ICFkZWZhdWx0O1xuJHBhZGRpbmcteHMtaG9yaXpvbnRhbDogICAgIDVweCAhZGVmYXVsdDtcblxuJGxpbmUtaGVpZ2h0LWxhcmdlOiAgICAgICAgIDEuMzMzMzMzMyAhZGVmYXVsdDsgLy8gZXh0cmEgZGVjaW1hbHMgZm9yIFdpbiA4LjEgQ2hyb21lXG4kbGluZS1oZWlnaHQtc21hbGw6ICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgIDZweCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtYWxsOiAgICAgICAzcHggIWRlZmF1bHQ7XG5cbi8vKiogR2xvYmFsIGNvbG9yIGZvciBhY3RpdmUgaXRlbXMgKGUuZy4sIG5hdnMgb3IgZHJvcGRvd25zKS5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBHbG9iYWwgYmFja2dyb3VuZCBjb2xvciBmb3IgYWN0aXZlIGl0ZW1zIChlLmcuLCBuYXZzIG9yIGRyb3Bkb3ducykuXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG5cbi8vKiogV2lkdGggb2YgdGhlIGBib3JkZXJgIGZvciBnZW5lcmF0aW5nIGNhcmV0cyB0aGF0IGluZGljYXRlIGRyb3Bkb3ducy5cbiRjYXJldC13aWR0aC1iYXNlOiAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4vLyoqIENhcmV0cyBpbmNyZWFzZSBzbGlnaHRseSBpbiBzaXplIGZvciBsYXJnZXIgY29tcG9uZW50cy5cbiRjYXJldC13aWR0aC1sYXJnZTogICAgICAgICA1cHggIWRlZmF1bHQ7XG5cblxuLy89PSBUYWJsZXNcbi8vXG4vLyMjIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuLy8qKiBQYWRkaW5nIGZvciBgPHRoPmBzIGFuZCBgPHRkPmBzLlxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgICA4cHggIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgZm9yIGNlbGxzIGluIGAudGFibGUtY29uZGVuc2VkYC5cbiR0YWJsZS1jb25kZW5zZWQtY2VsbC1wYWRkaW5nOiAgNXB4ICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgYmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBhbGwgdGFibGVzLlxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbi8vKiogQmFja2dyb3VuZCBjb2xvciB1c2VkIGZvciBgLnRhYmxlLXN0cmlwZWRgLlxuJHRhYmxlLWJnLWFjY2VudDogICAgICAgICAgICAgICAjZjlmOWY5ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIHVzZWQgZm9yIGAudGFibGUtaG92ZXJgLlxuJHRhYmxlLWJnLWhvdmVyOiAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHRhYmxlLWJnLWFjdGl2ZTogICAgICAgICAgICAgICAkdGFibGUtYmctaG92ZXIgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciB0YWJsZSBhbmQgY2VsbCBib3JkZXJzLlxuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vPT0gQnV0dG9uc1xuLy9cbi8vIyMgRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbm9ybWFsICFkZWZhdWx0O1xuXG4kYnRuLWRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuJGJ0bi1kZWZhdWx0LWJnOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tZGVmYXVsdC1ib3JkZXI6ICAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRidG4tcHJpbWFyeS1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXByaW1hcnktYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRidG4tcHJpbWFyeS1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXByaW1hcnktYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1zdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJGJ0bi1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgICAgZGFya2VuKCRidG4tc3VjY2Vzcy1iZywgNSUpICFkZWZhdWx0O1xuXG4kYnRuLWluZm8tY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi1pbmZvLWJnOiAgICAgICAgICAgICAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG4kYnRuLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1pbmZvLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRidG4td2FybmluZy1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbiRidG4td2FybmluZy1ib3JkZXI6ICAgICAgICAgICAgIGRhcmtlbigkYnRuLXdhcm5pbmctYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1kYW5nZXItY29sb3I6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tZGFuZ2VyLWJnOiAgICAgICAgICAgICAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1ib3JkZXI6ICAgICAgICAgICAgICBkYXJrZW4oJGJ0bi1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1cy1iYXNlOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sYXJnZSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAgICRib3JkZXItcmFkaXVzLXNtYWxsICFkZWZhdWx0O1xuXG5cbi8vPT0gRm9ybXNcbi8vXG4vLyMjXG5cbi8vKiogYDxpbnB1dD5gIGJhY2tncm91bmQgY29sb3JcbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIGA8aW5wdXQgZGlzYWJsZWQ+YCBiYWNrZ3JvdW5kIGNvbG9yXG4kaW5wdXQtYmctZGlzYWJsZWQ6ICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4vLyoqIFRleHQgY29sb3IgZm9yIGA8aW5wdXQ+YHNcbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5ICFkZWZhdWx0O1xuLy8qKiBgPGlucHV0PmAgYm9yZGVyIGNvbG9yXG4kaW5wdXQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuXG4vLyBUT0RPOiBSZW5hbWUgYCRpbnB1dC1ib3JkZXItcmFkaXVzYCB0byBgJGlucHV0LWJvcmRlci1yYWRpdXMtYmFzZWAgaW4gdjRcbi8vKiogRGVmYXVsdCBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuLy8gVGhpcyBoYXMgbm8gZWZmZWN0IG9uIGA8c2VsZWN0PmBzIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiBgPHNlbGVjdD5gcyBpbiBDU1MuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuLy8qKiBMYXJnZSBgLmZvcm0tY29udHJvbGAgYm9yZGVyIHJhZGl1c1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2U6ICAgICAgJGJvcmRlci1yYWRpdXMtbGFyZ2UgIWRlZmF1bHQ7XG4vLyoqIFNtYWxsIGAuZm9ybS1jb250cm9sYCBib3JkZXIgcmFkaXVzXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbWFsbDogICAgICAkYm9yZGVyLXJhZGl1cy1zbWFsbCAhZGVmYXVsdDtcblxuLy8qKiBCb3JkZXIgY29sb3IgZm9yIGlucHV0cyBvbiBmb2N1c1xuJGlucHV0LWJvcmRlci1mb2N1czogICAgICAgICAgICAgIzY2YWZlOSAhZGVmYXVsdDtcblxuLy8qKiBQbGFjZWhvbGRlciB0ZXh0IGNvbG9yXG4kaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI6ICAgICAgICAjOTk5ICFkZWZhdWx0O1xuXG4vLyoqIERlZmF1bHQgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgKCRsaW5lLWhlaWdodC1jb21wdXRlZCArICgkcGFkZGluZy1iYXNlLXZlcnRpY2FsICogMikgKyAyKSAhZGVmYXVsdDtcbi8vKiogTGFyZ2UgYC5mb3JtLWNvbnRyb2xgIGhlaWdodFxuJGlucHV0LWhlaWdodC1sYXJnZTogICAgICAgICAgICAgKGNlaWwoJGZvbnQtc2l6ZS1sYXJnZSAqICRsaW5lLWhlaWdodC1sYXJnZSkgKyAoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuLy8qKiBTbWFsbCBgLmZvcm0tY29udHJvbGAgaGVpZ2h0XG4kaW5wdXQtaGVpZ2h0LXNtYWxsOiAgICAgICAgICAgICAoZmxvb3IoJGZvbnQtc2l6ZS1zbWFsbCAqICRsaW5lLWhlaWdodC1zbWFsbCkgKyAoJHBhZGRpbmctc21hbGwtdmVydGljYWwgKiAyKSArIDIpICFkZWZhdWx0O1xuXG4vLyoqIGAuZm9ybS1ncm91cGAgbWFyZ2luXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4kbGVnZW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJGxlZ2VuZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0ZXh0dWFsIGlucHV0IGFkZG9uc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogQm9yZGVyIGNvbG9yIGZvciB0ZXh0dWFsIGlucHV0IGFkZG9uc1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlciAhZGVmYXVsdDtcblxuLy8qKiBEaXNhYmxlZCBjdXJzb3IgZm9yIGZvcm0gY29udHJvbHMgYW5kIGJ1dHRvbnMuXG4kY3Vyc29yLWRpc2FibGVkOiAgICAgICAgICAgICAgICBub3QtYWxsb3dlZCAhZGVmYXVsdDtcblxuXG4vLz09IERyb3Bkb3duc1xuLy9cbi8vIyMgRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4vLyoqIEJhY2tncm91bmQgZm9yIHRoZSBkcm9wZG93biBtZW51LlxuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogRHJvcGRvd24gbWVudSBgYm9yZGVyLWNvbG9yYC5cbiRkcm9wZG93bi1ib3JkZXI6ICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjE1KSAhZGVmYXVsdDtcbi8vKiogRHJvcGRvd24gbWVudSBgYm9yZGVyLWNvbG9yYCAqKmZvciBJRTgqKi5cbiRkcm9wZG93bi1mYWxsYmFjay1ib3JkZXI6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyoqIERpdmlkZXIgY29sb3IgZm9yIGJldHdlZW4gZHJvcGRvd24gaXRlbXMuXG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAjZTVlNWU1ICFkZWZhdWx0O1xuXG4vLyoqIERyb3Bkb3duIGxpbmsgdGV4dCBjb2xvci5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4vLyoqIEhvdmVyIGNvbG9yIGZvciBkcm9wZG93biBsaW5rcy5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkZ3JheS1kYXJrLCA1JSkgIWRlZmF1bHQ7XG4vLyoqIEhvdmVyIGJhY2tncm91bmQgZm9yIGRyb3Bkb3duIGxpbmtzLlxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuLy8qKiBBY3RpdmUgZHJvcGRvd24gbWVudSBpdGVtIHRleHQgY29sb3IuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vKiogQWN0aXZlIGRyb3Bkb3duIG1lbnUgaXRlbSBiYWNrZ3JvdW5kIGNvbG9yLlxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbi8vKiogRGlzYWJsZWQgZHJvcGRvd24gbWVudSBpdGVtIGJhY2tncm91bmQgY29sb3IuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIGZvciBoZWFkZXJzIHdpdGhpbiBkcm9wZG93biBtZW51cy5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLyoqIERlcHJlY2F0ZWQgYCRkcm9wZG93bi1jYXJldC1jb2xvcmAgYXMgb2YgdjMuMS4wXG4kZHJvcGRvd24tY2FyZXQtY29sb3I6ICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuXG5cbi8vLS0gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuLy9cbi8vIE5vdGU6IFRoZXNlIHZhcmlhYmxlcyBhcmUgbm90IGdlbmVyYXRlZCBpbnRvIHRoZSBDdXN0b21pemVyLlxuXG4kemluZGV4LW5hdmJhcjogICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC1uYXZiYXItZml4ZWQ6ICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2dyb3VuZDogIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuXG5cbi8vPT0gTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xuLy9cbi8vIyMgRGVmaW5lIHRoZSBicmVha3BvaW50cyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSwgYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14c2AgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXhzOiAgICAgICAgICAgICAgICAgIDQ4MHB4ICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXhzLW1pbmAgYXMgb2YgdjMuMi4wXG4kc2NyZWVuLXhzLW1pbjogICAgICAgICAgICAgICRzY3JlZW4teHMgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tcGhvbmVgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1waG9uZTogICAgICAgICAgICAgICAkc2NyZWVuLXhzLW1pbiAhZGVmYXVsdDtcblxuLy8gU21hbGwgc2NyZWVuIC8gdGFibGV0XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tc21gIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1zbTogICAgICAgICAgICAgICAgICA3NjhweCAhZGVmYXVsdDtcbiRzY3JlZW4tc20tbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1zbSAhZGVmYXVsdDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi10YWJsZXRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi10YWJsZXQ6ICAgICAgICAgICAgICAkc2NyZWVuLXNtLW1pbiAhZGVmYXVsdDtcblxuLy8gTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3Bcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1tZGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDk5MnB4ICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1taW46ICAgICAgICAgICAgICAkc2NyZWVuLW1kICFkZWZhdWx0O1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1kZXNrdG9wOiAgICAgICAgICAgICAkc2NyZWVuLW1kLW1pbiAhZGVmYXVsdDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbGdgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZzogICAgICAgICAgICAgICAgICAxMjAwcHggIWRlZmF1bHQ7XG4kc2NyZWVuLWxnLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tbGcgIWRlZmF1bHQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbGctZGVza3RvcGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWxnLWRlc2t0b3A6ICAgICAgICAgICRzY3JlZW4tbGctbWluICFkZWZhdWx0O1xuXG4vLyBTbyBtZWRpYSBxdWVyaWVzIGRvbid0IG92ZXJsYXAgd2hlbiByZXF1aXJlZCwgcHJvdmlkZSBhIG1heGltdW1cbiRzY3JlZW4teHMtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tc20tbWluIC0gMSkgIWRlZmF1bHQ7XG4kc2NyZWVuLXNtLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLW1kLW1pbiAtIDEpICFkZWZhdWx0O1xuJHNjcmVlbi1tZC1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1sZy1taW4gLSAxKSAhZGVmYXVsdDtcblxuXG4vLz09IEdyaWQgc3lzdGVtXG4vL1xuLy8jIyBEZWZpbmUgeW91ciBjdXN0b20gcmVzcG9uc2l2ZSBncmlkLlxuXG4vLyoqIE51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBncmlkLlxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuLy8qKiBQYWRkaW5nIGJldHdlZW4gY29sdW1ucy4gR2V0cyBkaXZpZGVkIGluIGhhbGYgZm9yIHRoZSBsZWZ0IGFuZCByaWdodC5cbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xuLy8gTmF2YmFyIGNvbGxhcHNlXG4vLyoqIFBvaW50IGF0IHdoaWNoIHRoZSBuYXZiYXIgYmVjb21lcyB1bmNvbGxhcHNlZC5cbiRncmlkLWZsb2F0LWJyZWFrcG9pbnQ6ICAgICAkc2NyZWVuLXNtLW1pbiAhZGVmYXVsdDtcbi8vKiogUG9pbnQgYXQgd2hpY2ggdGhlIG5hdmJhciBiZWdpbnMgY29sbGFwc2luZy5cbiRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4OiAoJGdyaWQtZmxvYXQtYnJlYWtwb2ludCAtIDEpICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29udGFpbmVyIHNpemVzXG4vL1xuLy8jIyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4vLyBTbWFsbCBzY3JlZW4gLyB0YWJsZXRcbiRjb250YWluZXItdGFibGV0OiAgICAgICAgICAgICAoNzIwcHggKyAkZ3JpZC1ndXR0ZXItd2lkdGgpICFkZWZhdWx0O1xuLy8qKiBGb3IgYCRzY3JlZW4tc20tbWluYCBhbmQgdXAuXG4kY29udGFpbmVyLXNtOiAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci10YWJsZXQgIWRlZmF1bHQ7XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4kY29udGFpbmVyLWRlc2t0b3A6ICAgICAgICAgICAgKDk0MHB4ICsgJGdyaWQtZ3V0dGVyLXdpZHRoKSAhZGVmYXVsdDtcbi8vKiogRm9yIGAkc2NyZWVuLW1kLW1pbmAgYW5kIHVwLlxuJGNvbnRhaW5lci1tZDogICAgICAgICAgICAgICAgICRjb250YWluZXItZGVza3RvcCAhZGVmYXVsdDtcblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4kY29udGFpbmVyLWxhcmdlLWRlc2t0b3A6ICAgICAgKDExNDBweCArICRncmlkLWd1dHRlci13aWR0aCkgIWRlZmF1bHQ7XG4vLyoqIEZvciBgJHNjcmVlbi1sZy1taW5gIGFuZCB1cC5cbiRjb250YWluZXItbGc6ICAgICAgICAgICAgICAgICAkY29udGFpbmVyLWxhcmdlLWRlc2t0b3AgIWRlZmF1bHQ7XG5cblxuLy89PSBOYXZiYXJcbi8vXG4vLyMjXG5cbi8vIEJhc2ljcyBvZiBhIG5hdmJhclxuJG5hdmJhci1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICA1MHB4ICFkZWZhdWx0O1xuJG5hdmJhci1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAkbGluZS1oZWlnaHQtY29tcHV0ZWQgIWRlZmF1bHQ7XG4kbmF2YmFyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDogICAgICAgIGZsb29yKCgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKSkgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctdmVydGljYWw6ICAgICAgICAgICgoJG5hdmJhci1oZWlnaHQgLSAkbGluZS1oZWlnaHQtY29tcHV0ZWQpIC8gMikgIWRlZmF1bHQ7XG4kbmF2YmFyLWNvbGxhcHNlLW1heC1oZWlnaHQ6ICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRlZmF1bHQtY29sb3I6ICAgICAgICAgICAgICM3NzcgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYmc6ICAgICAgICAgICAgICAgICNmOGY4ZjggIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtYm9yZGVyOiAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWRlZmF1bHQtYmcsIDYuNSUpICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgbGlua3NcbiRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAjNzc3ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAgIzU1NSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJnLCA2LjUlKSAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAjY2NjICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtYmc6ICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgYnJhbmQgbGFiZWxcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAkbmF2YmFyLWRlZmF1bHQtbGluay1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJG5hdmJhci1kZWZhdWx0LWJyYW5kLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWJnOiAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBOYXZiYXIgdG9nZ2xlXG4kbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWhvdmVyLWJnOiAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbiRuYXZiYXItZGVmYXVsdC10b2dnbGUtaWNvbi1iYXItYmc6ICAgICAgICAjODg4ICFkZWZhdWx0O1xuJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ib3JkZXItY29sb3I6ICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cblxuLy89PT0gSW52ZXJ0ZWQgbmF2YmFyXG4vLyBSZXNldCBpbnZlcnRlZCBuYXZiYXIgYmFzaWNzXG4kbmF2YmFyLWludmVyc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGdyYXktbGlnaHQsIDE1JSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDEwJSkgIWRlZmF1bHQ7XG5cbi8vIEludmVydGVkIG5hdmJhciBsaW5rc1xuJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICBsaWdodGVuKCRncmF5LWxpZ2h0LCAxNSUpICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAgIGRhcmtlbigkbmF2YmFyLWludmVyc2UtYmcsIDEwJSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICM0NDQgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1iZzogICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgYnJhbmQgbGFiZWxcbiRuYXZiYXItaW52ZXJzZS1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItYmc6ICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4vLyBJbnZlcnRlZCBuYXZiYXIgdG9nZ2xlXG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWhvdmVyLWJnOiAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWljb24tYmFyLWJnOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbmF2YmFyLWludmVyc2UtdG9nZ2xlLWJvcmRlci1jb2xvcjogICAgICAgICMzMzMgIWRlZmF1bHQ7XG5cblxuLy89PSBOYXZzXG4vL1xuLy8jI1xuXG4vLz09PSBTaGFyZWQgbmF2IHN0eWxlc1xuJG5hdi1saW5rLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMHB4IDE1cHggIWRlZmF1bHQ7XG4kbmF2LWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbiRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kbmF2LWRpc2FibGVkLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4vLz09IFRhYnNcbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkZ3JheSAhZGVmYXVsdDtcbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAgI2RkZCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWp1c3RpZmllZC1saW5rLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJG5hdi10YWJzLWp1c3RpZmllZC1hY3RpdmUtbGluay1ib3JkZXItY29sb3I6ICAgICAkYm9keS1iZyAhZGVmYXVsdDtcblxuLy89PSBQaWxsc1xuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy89PSBQYWdpbmF0aW9uXG4vL1xuLy8jI1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI6ICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyOiAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyOiAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcblxuXG4vLz09IFBhZ2VyXG4vL1xuLy8jI1xuXG4kcGFnZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1iZyAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJvcmRlciAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRwYWdlci1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kcGFnZXItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cbiRwYWdlci1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vPT0gSnVtYm90cm9uXG4vL1xuLy8jI1xuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWhlYWRpbmctY29sb3I6ICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1mb250LXNpemU6ICAgICAgICAgICAgY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS41KSkgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWhlYWRpbmctZm9udC1zaXplOiAgICBjZWlsKCgkZm9udC1zaXplLWJhc2UgKiA0LjUpKSAhZGVmYXVsdDtcblxuXG4vLz09IEZvcm0gc3RhdGVzIGFuZCBhbGVydHNcbi8vXG4vLyMjIERlZmluZSBjb2xvcnMgZm9yIGZvcm0gZmVlZGJhY2sgc3RhdGVzIGFuZCwgYnkgZGVmYXVsdCwgYWxlcnRzLlxuXG4kc3RhdGUtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAgICAjM2M3NjNkICFkZWZhdWx0O1xuJHN0YXRlLXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgICAgI2RmZjBkOCAhZGVmYXVsdDtcbiRzdGF0ZS1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1zdWNjZXNzLWJnLCAtMTApLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1pbmZvLXRleHQ6ICAgICAgICAgICAgICAgICMzMTcwOGYgIWRlZmF1bHQ7XG4kc3RhdGUtaW5mby1iZzogICAgICAgICAgICAgICAgICAjZDllZGY3ICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKGFkanVzdC1odWUoJHN0YXRlLWluZm8tYmcsIC0xMCksIDclKSAhZGVmYXVsdDtcblxuJHN0YXRlLXdhcm5pbmctdGV4dDogICAgICAgICAgICAgIzhhNmQzYiAhZGVmYXVsdDtcbiRzdGF0ZS13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1ib3JkZXI6ICAgICAgICAgICBkYXJrZW4oYWRqdXN0LWh1ZSgkc3RhdGUtd2FybmluZy1iZywgLTEwKSwgNSUpICFkZWZhdWx0O1xuXG4kc3RhdGUtZGFuZ2VyLXRleHQ6ICAgICAgICAgICAgICAjYTk0NDQyICFkZWZhdWx0O1xuJHN0YXRlLWRhbmdlci1iZzogICAgICAgICAgICAgICAgI2YyZGVkZSAhZGVmYXVsdDtcbiRzdGF0ZS1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgIGRhcmtlbihhZGp1c3QtaHVlKCRzdGF0ZS1kYW5nZXItYmcsIC0xMCksIDUlKSAhZGVmYXVsdDtcblxuXG4vLz09IFRvb2x0aXBzXG4vL1xuLy8jI1xuXG4vLyoqIFRvb2x0aXAgbWF4IHdpZHRoXG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbi8vKiogVG9vbHRpcCB0ZXh0IGNvbG9yXG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBUb29sdGlwIGJhY2tncm91bmQgY29sb3JcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcblxuLy8qKiBUb29sdGlwIGFycm93IHdpZHRoXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICA1cHggIWRlZmF1bHQ7XG4vLyoqIFRvb2x0aXAgYXJyb3cgY29sb3JcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG5cbi8vPT0gUG9wb3ZlcnNcbi8vXG4vLyMjXG5cbi8vKiogUG9wb3ZlciBib2R5IGJhY2tncm91bmQgY29sb3JcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBtYXhpbXVtIHdpZHRoXG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGJvcmRlciBjb2xvclxuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcbi8vKiogUG9wb3ZlciBmYWxsYmFjayBib3JkZXIgY29sb3JcbiRwb3BvdmVyLWZhbGxiYWNrLWJvcmRlci1jb2xvcjogICAgICAgI2NjYyAhZGVmYXVsdDtcblxuLy8qKiBQb3BvdmVyIHRpdGxlIGJhY2tncm91bmQgY29sb3JcbiRwb3BvdmVyLXRpdGxlLWJnOiAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG5cbi8vKiogUG9wb3ZlciBhcnJvdyB3aWR0aFxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIGFycm93IGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgd2lkdGhcbiRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoOiAgICAgICAgICAgKCRwb3BvdmVyLWFycm93LXdpZHRoICsgMSkgIWRlZmF1bHQ7XG4vLyoqIFBvcG92ZXIgb3V0ZXIgYXJyb3cgY29sb3JcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgICAgZmFkZV9pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIDAuMDUpICFkZWZhdWx0O1xuLy8qKiBQb3BvdmVyIG91dGVyIGFycm93IGZhbGxiYWNrIGNvbG9yXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjogIGRhcmtlbigkcG9wb3Zlci1mYWxsYmFjay1ib3JkZXItY29sb3IsIDIwJSkgIWRlZmF1bHQ7XG5cblxuLy89PSBMYWJlbHNcbi8vXG4vLyMjXG5cbi8vKiogRGVmYXVsdCBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtZGVmYXVsdC1iZzogICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogUHJpbWFyeSBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtcHJpbWFyeS1iZzogICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbi8vKiogU3VjY2VzcyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtc3VjY2Vzcy1iZzogICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbi8vKiogSW5mbyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtaW5mby1iZzogICAgICAgICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcbi8vKiogV2FybmluZyBsYWJlbCBiYWNrZ3JvdW5kIGNvbG9yXG4kbGFiZWwtd2FybmluZy1iZzogICAgICAgICAgICAkYnJhbmQtd2FybmluZyAhZGVmYXVsdDtcbi8vKiogRGFuZ2VyIGxhYmVsIGJhY2tncm91bmQgY29sb3JcbiRsYWJlbC1kYW5nZXItYmc6ICAgICAgICAgICAgICRicmFuZC1kYW5nZXIgIWRlZmF1bHQ7XG5cbi8vKiogRGVmYXVsdCBsYWJlbCB0ZXh0IGNvbG9yXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBEZWZhdWx0IHRleHQgY29sb3Igb2YgYSBsaW5rZWQgbGFiZWxcbiRsYWJlbC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XG5cblxuLy89PSBNb2RhbHNcbi8vXG4vLyMjXG5cbi8vKiogUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAxNXB4ICFkZWZhdWx0O1xuXG4vLyoqIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgdGl0bGVcbiRtb2RhbC10aXRsZS1wYWRkaW5nOiAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4vLyoqIE1vZGFsIHRpdGxlIGxpbmUtaGVpZ2h0XG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIG1vZGFsIGNvbnRlbnQgYXJlYVxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBjb250ZW50IGJvcmRlciBjb2xvclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgY29udGVudCBib3JkZXIgY29sb3IgKipmb3IgSUU4KipcbiRtb2RhbC1jb250ZW50LWZhbGxiYWNrLWJvcmRlci1jb2xvcjogICAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuLy8qKiBNb2RhbCBiYWNrZHJvcCBiYWNrZ3JvdW5kIGNvbG9yXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuLy8qKiBNb2RhbCBiYWNrZHJvcCBvcGFjaXR5XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAuNSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgaGVhZGVyIGJvcmRlciBjb2xvclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgI2U1ZTVlNSAhZGVmYXVsdDtcbi8vKiogTW9kYWwgZm9vdGVyIGJvcmRlciBjb2xvclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgIDkwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgNjAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuXG4vLz09IEFsZXJ0c1xuLy9cbi8vIyMgRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cy1iYXNlICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgYm9sZCAhZGVmYXVsdDtcblxuJGFsZXJ0LXN1Y2Nlc3MtYmc6ICAgICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYmcgIWRlZmF1bHQ7XG4kYWxlcnQtc3VjY2Vzcy10ZXh0OiAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtaW5mby1iZzogICAgICAgICAgICAgICAkc3RhdGUtaW5mby1iZyAhZGVmYXVsdDtcbiRhbGVydC1pbmZvLXRleHQ6ICAgICAgICAgICAgICRzdGF0ZS1pbmZvLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtaW5mby1ib3JkZXI6ICAgICAgICAgICAkc3RhdGUtaW5mby1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC13YXJuaW5nLWJnOiAgICAgICAgICAgICRzdGF0ZS13YXJuaW5nLWJnICFkZWZhdWx0O1xuJGFsZXJ0LXdhcm5pbmctdGV4dDogICAgICAgICAgJHN0YXRlLXdhcm5pbmctdGV4dCAhZGVmYXVsdDtcbiRhbGVydC13YXJuaW5nLWJvcmRlcjogICAgICAgICRzdGF0ZS13YXJuaW5nLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LWRhbmdlci1iZzogICAgICAgICAgICAgJHN0YXRlLWRhbmdlci1iZyAhZGVmYXVsdDtcbiRhbGVydC1kYW5nZXItdGV4dDogICAgICAgICAgICRzdGF0ZS1kYW5nZXItdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1kYW5nZXItYm9yZGVyOiAgICAgICAgICRzdGF0ZS1kYW5nZXItYm9yZGVyICFkZWZhdWx0O1xuXG5cbi8vPT0gUHJvZ3Jlc3MgYmFyc1xuLy9cbi8vIyNcblxuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB3aG9sZSBwcm9ncmVzcyBjb21wb25lbnRcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4vLyoqIFByb2dyZXNzIGJhciB0ZXh0IGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuLy8qKiBWYXJpYWJsZSBmb3Igc2V0dGluZyByb3VuZGVkIGNvcm5lcnMgb24gcHJvZ3Jlc3MgYmFyLlxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgJGJvcmRlci1yYWRpdXMtYmFzZSAhZGVmYXVsdDtcblxuLy8qKiBEZWZhdWx0IHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4vLyoqIFN1Y2Nlc3MgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6ICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbi8vKiogV2FybmluZyBwcm9ncmVzcyBiYXIgY29sb3JcbiRwcm9ncmVzcy1iYXItd2FybmluZy1iZzogICAgICRicmFuZC13YXJuaW5nICFkZWZhdWx0O1xuLy8qKiBEYW5nZXIgcHJvZ3Jlc3MgYmFyIGNvbG9yXG4kcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuLy8qKiBJbmZvIHByb2dyZXNzIGJhciBjb2xvclxuJHByb2dyZXNzLWJhci1pbmZvLWJnOiAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG5cblxuLy89PSBMaXN0IGdyb3VwXG4vL1xuLy8jI1xuXG4vLyoqIEJhY2tncm91bmQgY29sb3Igb24gYC5saXN0LWdyb3VwLWl0ZW1gXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4vLyoqIGAubGlzdC1ncm91cC1pdGVtYCBib3JkZXIgY29sb3JcbiRsaXN0LWdyb3VwLWJvcmRlcjogICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbi8vKiogTGlzdCBncm91cCBib3JkZXIgcmFkaXVzXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQmFja2dyb3VuZCBjb2xvciBvZiBzaW5nbGUgbGlzdCBpdGVtcyBvbiBob3ZlclxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGFjdGl2ZSBsaXN0IGl0ZW1zXG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8qKiBCb3JkZXIgY29sb3Igb2YgYWN0aXZlIGxpc3QgZWxlbWVudHNcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI6ICAgICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8qKiBUZXh0IGNvbG9yIGZvciBjb250ZW50IHdpdGhpbiBhY3RpdmUgbGlzdCBpdGVtc1xuJGxpc3QtZ3JvdXAtYWN0aXZlLXRleHQtY29sb3I6ICBsaWdodGVuKCRsaXN0LWdyb3VwLWFjdGl2ZS1iZywgNDAlKSAhZGVmYXVsdDtcblxuLy8qKiBUZXh0IGNvbG9yIG9mIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFRleHQgY29sb3IgZm9yIGNvbnRlbnQgd2l0aGluIGRpc2FibGVkIGxpc3QgaXRlbXNcbiRsaXN0LWdyb3VwLWRpc2FibGVkLXRleHQtY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1saW5rLWNvbG9yOiAgICAgICAgICM1NTUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1saW5rLWhvdmVyLWNvbG9yOiAgICRsaXN0LWdyb3VwLWxpbmstY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1saW5rLWhlYWRpbmctY29sb3I6ICMzMzMgIWRlZmF1bHQ7XG5cblxuLy89PSBQYW5lbHNcbi8vXG4vLyMjXG5cbiRwYW5lbC1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFuZWwtYm9keS1wYWRkaW5nOiAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xuJHBhbmVsLWhlYWRpbmctcGFkZGluZzogICAgICAgMTBweCAxNXB4ICFkZWZhdWx0O1xuJHBhbmVsLWZvb3Rlci1wYWRkaW5nOiAgICAgICAgJHBhbmVsLWhlYWRpbmctcGFkZGluZyAhZGVmYXVsdDtcbiRwYW5lbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQm9yZGVyIGNvbG9yIGZvciBlbGVtZW50cyB3aXRoaW4gcGFuZWxzXG4kcGFuZWwtaW5uZXItYm9yZGVyOiAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuJHBhbmVsLWZvb3Rlci1iZzogICAgICAgICAgICAgI2Y1ZjVmNSAhZGVmYXVsdDtcblxuJHBhbmVsLWRlZmF1bHQtdGV4dDogICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRwYW5lbC1kZWZhdWx0LWJvcmRlcjogICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kcGFuZWwtZGVmYXVsdC1oZWFkaW5nLWJnOiAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kcGFuZWwtcHJpbWFyeS10ZXh0OiAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhbmVsLXByaW1hcnktYm9yZGVyOiAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kcGFuZWwtcHJpbWFyeS1oZWFkaW5nLWJnOiAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcblxuJHBhbmVsLXN1Y2Nlc3MtdGV4dDogICAgICAgICAgJHN0YXRlLXN1Y2Nlc3MtdGV4dCAhZGVmYXVsdDtcbiRwYW5lbC1zdWNjZXNzLWJvcmRlcjogICAgICAgICRzdGF0ZS1zdWNjZXNzLWJvcmRlciAhZGVmYXVsdDtcbiRwYW5lbC1zdWNjZXNzLWhlYWRpbmctYmc6ICAgICRzdGF0ZS1zdWNjZXNzLWJnICFkZWZhdWx0O1xuXG4kcGFuZWwtaW5mby10ZXh0OiAgICAgICAgICAgICAkc3RhdGUtaW5mby10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLWluZm8tYm9yZGVyOiAgICAgICAgICAgJHN0YXRlLWluZm8tYm9yZGVyICFkZWZhdWx0O1xuJHBhbmVsLWluZm8taGVhZGluZy1iZzogICAgICAgJHN0YXRlLWluZm8tYmcgIWRlZmF1bHQ7XG5cbiRwYW5lbC13YXJuaW5nLXRleHQ6ICAgICAgICAgICRzdGF0ZS13YXJuaW5nLXRleHQgIWRlZmF1bHQ7XG4kcGFuZWwtd2FybmluZy1ib3JkZXI6ICAgICAgICAkc3RhdGUtd2FybmluZy1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtd2FybmluZy1oZWFkaW5nLWJnOiAgICAkc3RhdGUtd2FybmluZy1iZyAhZGVmYXVsdDtcblxuJHBhbmVsLWRhbmdlci10ZXh0OiAgICAgICAgICAgJHN0YXRlLWRhbmdlci10ZXh0ICFkZWZhdWx0O1xuJHBhbmVsLWRhbmdlci1ib3JkZXI6ICAgICAgICAgJHN0YXRlLWRhbmdlci1ib3JkZXIgIWRlZmF1bHQ7XG4kcGFuZWwtZGFuZ2VyLWhlYWRpbmctYmc6ICAgICAkc3RhdGUtZGFuZ2VyLWJnICFkZWZhdWx0O1xuXG5cbi8vPT0gVGh1bWJuYWlsc1xuLy9cbi8vIyNcblxuLy8qKiBQYWRkaW5nIGFyb3VuZCB0aGUgdGh1bWJuYWlsIGltYWdlXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4vLyoqIFRodW1ibmFpbCBiYWNrZ3JvdW5kIGNvbG9yXG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJvcmRlciBjb2xvclxuJHRodW1ibmFpbC1ib3JkZXI6ICAgICAgICAgICAgI2RkZCAhZGVmYXVsdDtcbi8vKiogVGh1bWJuYWlsIGJvcmRlciByYWRpdXNcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICRib3JkZXItcmFkaXVzLWJhc2UgIWRlZmF1bHQ7XG5cbi8vKiogQ3VzdG9tIHRleHQgY29sb3IgZm9yIHRodW1ibmFpbCBjYXB0aW9uc1xuJHRodW1ibmFpbC1jYXB0aW9uLWNvbG9yOiAgICAgJHRleHQtY29sb3IgIWRlZmF1bHQ7XG4vLyoqIFBhZGRpbmcgYXJvdW5kIHRoZSB0aHVtYm5haWwgY2FwdGlvblxuJHRodW1ibmFpbC1jYXB0aW9uLXBhZGRpbmc6ICAgOXB4ICFkZWZhdWx0O1xuXG5cbi8vPT0gV2VsbHNcbi8vXG4vLyMjXG5cbiR3ZWxsLWJnOiAgICAgICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kd2VsbC1ib3JkZXI6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHdlbGwtYmcsIDclKSAhZGVmYXVsdDtcblxuXG4vLz09IEJhZGdlc1xuLy9cbi8vIyNcblxuJGJhZGdlLWNvbG9yOiAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbi8vKiogTGlua2VkIGJhZGdlIHRleHQgY29sb3Igb24gaG92ZXJcbiRiYWRnZS1saW5rLWhvdmVyLWNvbG9yOiAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYmFkZ2UtYmc6ICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuLy8qKiBCYWRnZSB0ZXh0IGNvbG9yIGluIGFjdGl2ZSBuYXYgbGlua1xuJGJhZGdlLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4vLyoqIEJhZGdlIGJhY2tncm91bmQgY29sb3IgaW4gYWN0aXZlIG5hdiBsaW5rXG4kYmFkZ2UtYWN0aXZlLWJnOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGJhZGdlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgMSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG5cblxuLy89PSBCcmVhZGNydW1ic1xuLy9cbi8vIyNcblxuJGJyZWFkY3J1bWItcGFkZGluZy12ZXJ0aWNhbDogICA4cHggIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLWhvcml6b250YWw6IDE1cHggIWRlZmF1bHQ7XG4vLyoqIEJyZWFkY3J1bWIgYmFja2dyb3VuZCBjb2xvclxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuLy8qKiBCcmVhZGNydW1iIHRleHQgY29sb3JcbiRicmVhZGNydW1iLWNvbG9yOiAgICAgICAgICAgICAgI2NjYyAhZGVmYXVsdDtcbi8vKiogVGV4dCBjb2xvciBvZiBjdXJyZW50IHBhZ2UgaW4gdGhlIGJyZWFkY3J1bWJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4vLyoqIFRleHR1YWwgc2VwYXJhdG9yIGZvciBiZXR3ZWVuIGJyZWFkY3J1bWIgZWxlbWVudHNcbiRicmVhZGNydW1iLXNlcGFyYXRvcjogICAgICAgICAgXCIvXCIgIWRlZmF1bHQ7XG5cblxuLy89PSBDYXJvdXNlbFxuLy9cbi8vIyNcblxuJGNhcm91c2VsLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKDAsMCwwLC42KSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gQ2xvc2Vcbi8vXG4vLyMjXG5cbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgMCAxcHggMCAjZmZmICFkZWZhdWx0O1xuXG5cbi8vPT0gQ29kZVxuLy9cbi8vIyNcblxuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgI2M3MjU0ZSAhZGVmYXVsdDtcbiRjb2RlLWJnOiAgICAgICAgICAgICAgICAgICAgICNmOWYyZjQgIWRlZmF1bHQ7XG5cbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAjMzMzICFkZWZhdWx0O1xuXG4kcHJlLWJnOiAgICAgICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRwcmUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLz09IFR5cGVcbi8vXG4vLyMjXG5cbi8vKiogSG9yaXpvbnRhbCBvZmZzZXQgZm9yIGZvcm1zIGFuZCBsaXN0cy5cbiRjb21wb25lbnQtb2Zmc2V0LWhvcml6b250YWw6IDE4MHB4ICFkZWZhdWx0O1xuLy8qKiBUZXh0IG11dGVkIGNvbG9yXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQWJicmV2aWF0aW9ucyBhbmQgYWNyb255bXMgYm9yZGVyIGNvbG9yXG4kYWJici1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogSGVhZGluZ3Mgc21hbGwgY29sb3JcbiRoZWFkaW5ncy1zbWFsbC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuLy8qKiBCbG9ja3F1b3RlIHNtYWxsIGNvbG9yXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBmb250IHNpemVcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbi8vKiogQmxvY2txdW90ZSBib3JkZXIgY29sb3JcbiRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjogICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG4vLyoqIFBhZ2UgaGVhZGVyIGJvcmRlciBjb2xvclxuJHBhZ2UtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbi8vKiogV2lkdGggb2YgaG9yaXpvbnRhbCBkZXNjcmlwdGlvbiBsaXN0IHRpdGxlc1xuJGRsLWhvcml6b250YWwtb2Zmc2V0OiAgICAgICAgJGNvbXBvbmVudC1vZmZzZXQtaG9yaXpvbnRhbCAhZGVmYXVsdDtcbi8vKiogUG9pbnQgYXQgd2hpY2ggLmRsLWhvcml6b250YWwgYmVjb21lcyBob3Jpem9udGFsXG4kZGwtaG9yaXpvbnRhbC1icmVha3BvaW50OiAgICAkZ3JpZC1mbG9hdC1icmVha3BvaW50ICFkZWZhdWx0O1xuLy8qKiBIb3Jpem9udGFsIGxpbmUgY29sb3IuXG4kaHItYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuIiwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vL1xuLy8gMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cbi8vIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXG4vLyAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXG4vL1xuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IC8vIDFcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvLyAyXG59XG5cbi8vXG4vLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXG4vL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgZGV0YWlsc2Agb3IgYHN1bW1hcnlgIGluIElFIDEwLzExXG4vLyBhbmQgRmlyZWZveC5cbi8vIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXG4vL1xuXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1haW4sXG5tZW51LFxubmF2LFxuc2VjdGlvbixcbnN1bW1hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXG4vLyAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4vL1xuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIDFcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvLyAyXG59XG5cbi8vXG4vLyBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuLy8gUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbi8vXG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgYFtoaWRkZW5dYCBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC5cbi8vIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cbi8vXG5cbltoaWRkZW5dLFxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vLyBMaW5rc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuLy9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vL1xuLy8gSW1wcm92ZSByZWFkYWJpbGl0eSBvZiBmb2N1c2VkIGVsZW1lbnRzIHdoZW4gdGhleSBhcmUgYWxzbyBpbiBhblxuLy8gYWN0aXZlL2hvdmVyIHN0YXRlLlxuLy9cblxuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLy8gVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vL1xuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXG4vLyBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cbi8vXG5cbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAjZmYwO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLy9cbi8vIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLy9cbi8vIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGFmZmVjdGluZyBgbGluZS1oZWlnaHRgIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8vIEVtYmVkZGVkIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cbi8vXG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLy9cbi8vIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxuLy9cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBHcm91cGluZyBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXG4vL1xuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG4vL1xuLy8gQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxuLy9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vL1xuLy8gQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy9cbi8vIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cbi8vXG5cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLy8gRm9ybXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxuLy8gc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxuLy9cblxuLy9cbi8vIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxuLy8gMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7IC8vIDFcbiAgZm9udDogaW5oZXJpdDsgLy8gMlxuICBtYXJnaW46IDA7IC8vIDNcbn1cblxuLy9cbi8vIEFkZHJlc3MgYG92ZXJmbG93YCBzZXQgdG8gYGhpZGRlbmAgaW4gSUUgOC85LzEwLzExLlxuLy9cblxuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXG4vLyBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxuLy8gQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cbi8vIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cbi8vXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vL1xuLy8gMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2Bcbi8vICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxuLy8gMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxuLy8gMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcbi8vICAgIGBpbnB1dGAgYW5kIG90aGVycy5cbi8vXG5cbmJ1dHRvbixcbmh0bWwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvLyAyXG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gM1xufVxuXG4vL1xuLy8gUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbi8vXG5cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cbi8vXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxuLy8gdGhlIFVBIHN0eWxlc2hlZXQuXG4vL1xuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi8vXG4vLyBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXG4vLyBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxuLy9cbi8vIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXG4vLyAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxuLy9cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuLy8gYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbi8vIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbi8vXG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vL1xuLy8gMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vLyAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxuLy9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvLyAxXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvLzJcbn1cblxuLy9cbi8vIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxuLy8gU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xuLy8gcGFkZGluZyAoYW5kIGB0ZXh0ZmllbGRgIGFwcGVhcmFuY2UpLlxuLy9cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8vXG4vLyBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXG4vL1xuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcbn1cblxuLy9cbi8vIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cbi8vIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cbi8vXG5cbmxlZ2VuZCB7XG4gIGJvcmRlcjogMDsgLy8gMVxuICBwYWRkaW5nOiAwOyAvLyAyXG59XG5cbi8vXG4vLyBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxuLy9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy9cbi8vIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cbi8vIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxuLy9cblxub3B0Z3JvdXAge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy8gVGFibGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxuLy9cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG4iLCIvKiEgU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9ibG9iL21hc3Rlci9zcmMvY3NzL21haW4uY3NzICovXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQcmludCBzdHlsZXMuXG4vLyBJbmxpbmVkIHRvIGF2b2lkIHRoZSBhZGRpdGlvbmFsIEhUVFAgcmVxdWVzdDogaDVicC5jb20vclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQG1lZGlhIHByaW50IHtcbiAgICAqLFxuICAgICo6YmVmb3JlLFxuICAgICo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvLyBCbGFjayBwcmludHMgZmFzdGVyOiBoNWJwLmNvbS9zXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhLFxuICAgIGE6dmlzaXRlZCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIGFbaHJlZl06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgICB9XG5cbiAgICBhYmJyW3RpdGxlXTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIChcIiBhdHRyKHRpdGxlKSBcIilcIjtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBzaG93IGxpbmtzIHRoYXQgYXJlIGZyYWdtZW50IGlkZW50aWZpZXJzLFxuICAgIC8vIG9yIHVzZSB0aGUgYGphdmFzY3JpcHQ6YCBwc2V1ZG8gcHJvdG9jb2xcbiAgICBhW2hyZWZePVwiI1wiXTphZnRlcixcbiAgICBhW2hyZWZePVwiamF2YXNjcmlwdDpcIl06YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cblxuICAgIHByZSxcbiAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwOyAvLyBoNWJwLmNvbS90XG4gICAgfVxuXG4gICAgdHIsXG4gICAgaW1nIHtcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIHAsXG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgICBvcnBoYW5zOiAzO1xuICAgICAgICB3aWRvd3M6IDM7XG4gICAgfVxuXG4gICAgaDIsXG4gICAgaDMge1xuICAgICAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbiAgICB9XG5cbiAgICAvLyBCb290c3RyYXAgc3BlY2lmaWMgY2hhbmdlcyBzdGFydFxuXG4gICAgLy8gQm9vdHN0cmFwIGNvbXBvbmVudHNcbiAgICAubmF2YmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJ0bixcbiAgICAuZHJvcHVwID4gLmJ0biB7XG4gICAgICAgID4gLmNhcmV0IHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIH1cblxuICAgIC50YWJsZSB7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDtcblxuICAgICAgICB0ZCxcbiAgICAgICAgdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCb290c3RyYXAgc3BlY2lmaWMgY2hhbmdlcyBlbmRcbn1cbiIsIi8vXG4vLyBHbHlwaGljb25zIGZvciBCb290c3RyYXBcbi8vXG4vLyBTaW5jZSBpY29ucyBhcmUgZm9udHMsIHRoZXkgY2FuIGJlIHBsYWNlZCBhbnl3aGVyZSB0ZXh0IGlzIHBsYWNlZCBhbmQgYXJlXG4vLyB0aHVzIGF1dG9tYXRpY2FsbHkgc2l6ZWQgdG8gbWF0Y2ggdGhlIHN1cnJvdW5kaW5nIGNoaWxkLiBUbyB1c2UsIGNyZWF0ZSBhblxuLy8gaW5saW5lIGVsZW1lbnQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2xhc3NlcywgbGlrZSBzbzpcbi8vXG4vLyA8YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPiBTdGFyPC9hPlxuXG5AYXQtcm9vdCB7XG4gIC8vIEltcG9ydCB0aGUgZm9udHNcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHbHlwaGljb25zIEhhbGZsaW5ncyc7XG4gICAgc3JjOiB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1mb250LXBhdGgoJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS5lb3QnKSwgJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS5lb3QnKSk7XG4gICAgc3JjOiB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1mb250LXBhdGgoJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS5lb3Q/I2llZml4JyksICcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0uZW90PyNpZWZpeCcpKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXG4gICAgICAgICB1cmwoaWYoJGJvb3RzdHJhcC1zYXNzLWFzc2V0LWhlbHBlciwgdHdicy1mb250LXBhdGgoJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS53b2ZmMicpLCAnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LndvZmYyJykpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWZvbnQtcGF0aCgnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LndvZmYnKSwgJyN7JGljb24tZm9udC1wYXRofSN7JGljb24tZm9udC1uYW1lfS53b2ZmJykpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKGlmKCRib290c3RyYXAtc2Fzcy1hc3NldC1oZWxwZXIsIHR3YnMtZm9udC1wYXRoKCcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0udHRmJyksICcjeyRpY29uLWZvbnQtcGF0aH0jeyRpY29uLWZvbnQtbmFtZX0udHRmJykpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICAgIHVybChpZigkYm9vdHN0cmFwLXNhc3MtYXNzZXQtaGVscGVyLCB0d2JzLWZvbnQtcGF0aCgnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LnN2ZyMjeyRpY29uLWZvbnQtc3ZnLWlkfScpLCAnI3skaWNvbi1mb250LXBhdGh9I3skaWNvbi1mb250LW5hbWV9LnN2ZyMjeyRpY29uLWZvbnQtc3ZnLWlkfScpKSBmb3JtYXQoJ3N2ZycpO1xuICB9XG59XG5cbi8vIENhdGNoYWxsIGJhc2VjbGFzc1xuLmdseXBoaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICdHbHlwaGljb25zIEhhbGZsaW5ncyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4vLyBJbmRpdmlkdWFsIGljb25zXG4uZ2x5cGhpY29uLWFzdGVyaXNrICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwwMDJhXCI7IH0gfVxuLmdseXBoaWNvbi1wbHVzICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMDAyYlwiOyB9IH1cbi5nbHlwaGljb24tZXVybyxcbi5nbHlwaGljb24tZXVyICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDIwYWNcIjsgfSB9XG4uZ2x5cGhpY29uLW1pbnVzICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwyMjEyXCI7IH0gfVxuLmdseXBoaWNvbi1jbG91ZCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMjYwMVwiOyB9IH1cbi5nbHlwaGljb24tZW52ZWxvcGUgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDI3MDlcIjsgfSB9XG4uZ2x5cGhpY29uLXBlbmNpbCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwyNzBmXCI7IH0gfVxuLmdseXBoaWNvbi1nbGFzcyAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAwMVwiOyB9IH1cbi5nbHlwaGljb24tbXVzaWMgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMDJcIjsgfSB9XG4uZ2x5cGhpY29uLXNlYXJjaCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDAzXCI7IH0gfVxuLmdseXBoaWNvbi1oZWFydCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAwNVwiOyB9IH1cbi5nbHlwaGljb24tc3RhciAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMDZcIjsgfSB9XG4uZ2x5cGhpY29uLXN0YXItZW1wdHkgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDA3XCI7IH0gfVxuLmdseXBoaWNvbi11c2VyICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAwOFwiOyB9IH1cbi5nbHlwaGljb24tZmlsbSAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMDlcIjsgfSB9XG4uZ2x5cGhpY29uLXRoLWxhcmdlICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDEwXCI7IH0gfVxuLmdseXBoaWNvbi10aCAgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxMVwiOyB9IH1cbi5nbHlwaGljb24tdGgtbGlzdCAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMTJcIjsgfSB9XG4uZ2x5cGhpY29uLW9rICAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDEzXCI7IH0gfVxuLmdseXBoaWNvbi1yZW1vdmUgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxNFwiOyB9IH1cbi5nbHlwaGljb24tem9vbS1pbiAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMTVcIjsgfSB9XG4uZ2x5cGhpY29uLXpvb20tb3V0ICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDE2XCI7IH0gfVxuLmdseXBoaWNvbi1vZmYgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAxN1wiOyB9IH1cbi5nbHlwaGljb24tc2lnbmFsICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMThcIjsgfSB9XG4uZ2x5cGhpY29uLWNvZyAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDE5XCI7IH0gfVxuLmdseXBoaWNvbi10cmFzaCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyMFwiOyB9IH1cbi5nbHlwaGljb24taG9tZSAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjFcIjsgfSB9XG4uZ2x5cGhpY29uLWZpbGUgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDIyXCI7IH0gfVxuLmdseXBoaWNvbi10aW1lICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyM1wiOyB9IH1cbi5nbHlwaGljb24tcm9hZCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjRcIjsgfSB9XG4uZ2x5cGhpY29uLWRvd25sb2FkLWFsdCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDI1XCI7IH0gfVxuLmdseXBoaWNvbi1kb3dubG9hZCAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyNlwiOyB9IH1cbi5nbHlwaGljb24tdXBsb2FkICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMjdcIjsgfSB9XG4uZ2x5cGhpY29uLWluYm94ICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDI4XCI7IH0gfVxuLmdseXBoaWNvbi1wbGF5LWNpcmNsZSAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAyOVwiOyB9IH1cbi5nbHlwaGljb24tcmVwZWF0ICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzBcIjsgfSB9XG4uZ2x5cGhpY29uLXJlZnJlc2ggICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDMxXCI7IH0gfVxuLmdseXBoaWNvbi1saXN0LWFsdCAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAzMlwiOyB9IH1cbi5nbHlwaGljb24tbG9jayAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzNcIjsgfSB9XG4uZ2x5cGhpY29uLWZsYWcgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDM0XCI7IH0gfVxuLmdseXBoaWNvbi1oZWFkcGhvbmVzICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAzNVwiOyB9IH1cbi5nbHlwaGljb24tdm9sdW1lLW9mZiAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzZcIjsgfSB9XG4uZ2x5cGhpY29uLXZvbHVtZS1kb3duICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDM3XCI7IH0gfVxuLmdseXBoaWNvbi12b2x1bWUtdXAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTAzOFwiOyB9IH1cbi5nbHlwaGljb24tcXJjb2RlICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwMzlcIjsgfSB9XG4uZ2x5cGhpY29uLWJhcmNvZGUgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQwXCI7IH0gfVxuLmdseXBoaWNvbi10YWcgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0MVwiOyB9IH1cbi5nbHlwaGljb24tdGFncyAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNDJcIjsgfSB9XG4uZ2x5cGhpY29uLWJvb2sgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQzXCI7IH0gfVxuLmdseXBoaWNvbi1ib29rbWFyayAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0NFwiOyB9IH1cbi5nbHlwaGljb24tcHJpbnQgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNDVcIjsgfSB9XG4uZ2x5cGhpY29uLWNhbWVyYSAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQ2XCI7IH0gfVxuLmdseXBoaWNvbi1mb250ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA0N1wiOyB9IH1cbi5nbHlwaGljb24tYm9sZCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNDhcIjsgfSB9XG4uZ2x5cGhpY29uLWl0YWxpYyAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDQ5XCI7IH0gfVxuLmdseXBoaWNvbi10ZXh0LWhlaWdodCAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1MFwiOyB9IH1cbi5nbHlwaGljb24tdGV4dC13aWR0aCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTFcIjsgfSB9XG4uZ2x5cGhpY29uLWFsaWduLWxlZnQgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDUyXCI7IH0gfVxuLmdseXBoaWNvbi1hbGlnbi1jZW50ZXIgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1M1wiOyB9IH1cbi5nbHlwaGljb24tYWxpZ24tcmlnaHQgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTRcIjsgfSB9XG4uZ2x5cGhpY29uLWFsaWduLWp1c3RpZnkgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDU1XCI7IH0gfVxuLmdseXBoaWNvbi1saXN0ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1NlwiOyB9IH1cbi5nbHlwaGljb24taW5kZW50LWxlZnQgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNTdcIjsgfSB9XG4uZ2x5cGhpY29uLWluZGVudC1yaWdodCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDU4XCI7IH0gfVxuLmdseXBoaWNvbi1mYWNldGltZS12aWRlbyAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA1OVwiOyB9IH1cbi5nbHlwaGljb24tcGljdHVyZSAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNjBcIjsgfSB9XG4uZ2x5cGhpY29uLW1hcC1tYXJrZXIgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDYyXCI7IH0gfVxuLmdseXBoaWNvbi1hZGp1c3QgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA2M1wiOyB9IH1cbi5nbHlwaGljb24tdGludCAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNjRcIjsgfSB9XG4uZ2x5cGhpY29uLWVkaXQgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDY1XCI7IH0gfVxuLmdseXBoaWNvbi1zaGFyZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA2NlwiOyB9IH1cbi5nbHlwaGljb24tY2hlY2sgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNjdcIjsgfSB9XG4uZ2x5cGhpY29uLW1vdmUgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDY4XCI7IH0gfVxuLmdseXBoaWNvbi1zdGVwLWJhY2t3YXJkICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA2OVwiOyB9IH1cbi5nbHlwaGljb24tZmFzdC1iYWNrd2FyZCAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzBcIjsgfSB9XG4uZ2x5cGhpY29uLWJhY2t3YXJkICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDcxXCI7IH0gfVxuLmdseXBoaWNvbi1wbGF5ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA3MlwiOyB9IH1cbi5nbHlwaGljb24tcGF1c2UgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzNcIjsgfSB9XG4uZ2x5cGhpY29uLXN0b3AgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDc0XCI7IH0gfVxuLmdseXBoaWNvbi1mb3J3YXJkICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA3NVwiOyB9IH1cbi5nbHlwaGljb24tZmFzdC1mb3J3YXJkICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzZcIjsgfSB9XG4uZ2x5cGhpY29uLXN0ZXAtZm9yd2FyZCAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDc3XCI7IH0gfVxuLmdseXBoaWNvbi1lamVjdCAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA3OFwiOyB9IH1cbi5nbHlwaGljb24tY2hldnJvbi1sZWZ0ICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwNzlcIjsgfSB9XG4uZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDgwXCI7IH0gfVxuLmdseXBoaWNvbi1wbHVzLXNpZ24gICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4MVwiOyB9IH1cbi5nbHlwaGljb24tbWludXMtc2lnbiAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwODJcIjsgfSB9XG4uZ2x5cGhpY29uLXJlbW92ZS1zaWduICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDgzXCI7IH0gfVxuLmdseXBoaWNvbi1vay1zaWduICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4NFwiOyB9IH1cbi5nbHlwaGljb24tcXVlc3Rpb24tc2lnbiAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwODVcIjsgfSB9XG4uZ2x5cGhpY29uLWluZm8tc2lnbiAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDg2XCI7IH0gfVxuLmdseXBoaWNvbi1zY3JlZW5zaG90ICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA4N1wiOyB9IH1cbi5nbHlwaGljb24tcmVtb3ZlLWNpcmNsZSAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwODhcIjsgfSB9XG4uZ2x5cGhpY29uLW9rLWNpcmNsZSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDg5XCI7IH0gfVxuLmdseXBoaWNvbi1iYW4tY2lyY2xlICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA5MFwiOyB9IH1cbi5nbHlwaGljb24tYXJyb3ctbGVmdCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwOTFcIjsgfSB9XG4uZ2x5cGhpY29uLWFycm93LXJpZ2h0ICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDkyXCI7IH0gfVxuLmdseXBoaWNvbi1hcnJvdy11cCAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA5M1wiOyB9IH1cbi5nbHlwaGljb24tYXJyb3ctZG93biAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwOTRcIjsgfSB9XG4uZ2x5cGhpY29uLXNoYXJlLWFsdCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMDk1XCI7IH0gfVxuLmdseXBoaWNvbi1yZXNpemUtZnVsbCAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTA5NlwiOyB9IH1cbi5nbHlwaGljb24tcmVzaXplLXNtYWxsICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUwOTdcIjsgfSB9XG4uZ2x5cGhpY29uLWV4Y2xhbWF0aW9uLXNpZ24gICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTAxXCI7IH0gfVxuLmdseXBoaWNvbi1naWZ0ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEwMlwiOyB9IH1cbi5nbHlwaGljb24tbGVhZiAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMDNcIjsgfSB9XG4uZ2x5cGhpY29uLWZpcmUgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTA0XCI7IH0gfVxuLmdseXBoaWNvbi1leWUtb3BlbiAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEwNVwiOyB9IH1cbi5nbHlwaGljb24tZXllLWNsb3NlICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMDZcIjsgfSB9XG4uZ2x5cGhpY29uLXdhcm5pbmctc2lnbiAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTA3XCI7IH0gfVxuLmdseXBoaWNvbi1wbGFuZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEwOFwiOyB9IH1cbi5nbHlwaGljb24tY2FsZW5kYXIgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMDlcIjsgfSB9XG4uZ2x5cGhpY29uLXJhbmRvbSAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTEwXCI7IH0gfVxuLmdseXBoaWNvbi1jb21tZW50ICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExMVwiOyB9IH1cbi5nbHlwaGljb24tbWFnbmV0ICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMTJcIjsgfSB9XG4uZ2x5cGhpY29uLWNoZXZyb24tdXAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTEzXCI7IH0gfVxuLmdseXBoaWNvbi1jaGV2cm9uLWRvd24gICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExNFwiOyB9IH1cbi5nbHlwaGljb24tcmV0d2VldCAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMTVcIjsgfSB9XG4uZ2x5cGhpY29uLXNob3BwaW5nLWNhcnQgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTE2XCI7IH0gfVxuLmdseXBoaWNvbi1mb2xkZXItY2xvc2UgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTExN1wiOyB9IH1cbi5nbHlwaGljb24tZm9sZGVyLW9wZW4gICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMThcIjsgfSB9XG4uZ2x5cGhpY29uLXJlc2l6ZS12ZXJ0aWNhbCAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTE5XCI7IH0gfVxuLmdseXBoaWNvbi1yZXNpemUtaG9yaXpvbnRhbCAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyMFwiOyB9IH1cbi5nbHlwaGljb24taGRkICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjFcIjsgfSB9XG4uZ2x5cGhpY29uLWJ1bGxob3JuICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTIyXCI7IH0gfVxuLmdseXBoaWNvbi1iZWxsICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyM1wiOyB9IH1cbi5nbHlwaGljb24tY2VydGlmaWNhdGUgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjRcIjsgfSB9XG4uZ2x5cGhpY29uLXRodW1icy11cCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTI1XCI7IH0gfVxuLmdseXBoaWNvbi10aHVtYnMtZG93biAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyNlwiOyB9IH1cbi5nbHlwaGljb24taGFuZC1yaWdodCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMjdcIjsgfSB9XG4uZ2x5cGhpY29uLWhhbmQtbGVmdCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTI4XCI7IH0gfVxuLmdseXBoaWNvbi1oYW5kLXVwICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEyOVwiOyB9IH1cbi5nbHlwaGljb24taGFuZC1kb3duICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzBcIjsgfSB9XG4uZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1yaWdodCAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTMxXCI7IH0gfVxuLmdseXBoaWNvbi1jaXJjbGUtYXJyb3ctbGVmdCAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEzMlwiOyB9IH1cbi5nbHlwaGljb24tY2lyY2xlLWFycm93LXVwICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzNcIjsgfSB9XG4uZ2x5cGhpY29uLWNpcmNsZS1hcnJvdy1kb3duICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTM0XCI7IH0gfVxuLmdseXBoaWNvbi1nbG9iZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEzNVwiOyB9IH1cbi5nbHlwaGljb24td3JlbmNoICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzZcIjsgfSB9XG4uZ2x5cGhpY29uLXRhc2tzICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTM3XCI7IH0gfVxuLmdseXBoaWNvbi1maWx0ZXIgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTEzOFwiOyB9IH1cbi5nbHlwaGljb24tYnJpZWZjYXNlICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxMzlcIjsgfSB9XG4uZ2x5cGhpY29uLWZ1bGxzY3JlZW4gICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTQwXCI7IH0gfVxuLmdseXBoaWNvbi1kYXNoYm9hcmQgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE0MVwiOyB9IH1cbi5nbHlwaGljb24tcGFwZXJjbGlwICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNDJcIjsgfSB9XG4uZ2x5cGhpY29uLWhlYXJ0LWVtcHR5ICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTQzXCI7IH0gfVxuLmdseXBoaWNvbi1saW5rICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE0NFwiOyB9IH1cbi5nbHlwaGljb24tcGhvbmUgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNDVcIjsgfSB9XG4uZ2x5cGhpY29uLXB1c2hwaW4gICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTQ2XCI7IH0gfVxuLmdseXBoaWNvbi11c2QgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE0OFwiOyB9IH1cbi5nbHlwaGljb24tZ2JwICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNDlcIjsgfSB9XG4uZ2x5cGhpY29uLXNvcnQgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTUwXCI7IH0gfVxuLmdseXBoaWNvbi1zb3J0LWJ5LWFscGhhYmV0ICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1MVwiOyB9IH1cbi5nbHlwaGljb24tc29ydC1ieS1hbHBoYWJldC1hbHQgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNTJcIjsgfSB9XG4uZ2x5cGhpY29uLXNvcnQtYnktb3JkZXIgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTUzXCI7IH0gfVxuLmdseXBoaWNvbi1zb3J0LWJ5LW9yZGVyLWFsdCAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1NFwiOyB9IH1cbi5nbHlwaGljb24tc29ydC1ieS1hdHRyaWJ1dGVzICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNTVcIjsgfSB9XG4uZ2x5cGhpY29uLXNvcnQtYnktYXR0cmlidXRlcy1hbHQgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTU2XCI7IH0gfVxuLmdseXBoaWNvbi11bmNoZWNrZWQgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE1N1wiOyB9IH1cbi5nbHlwaGljb24tZXhwYW5kICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNThcIjsgfSB9XG4uZ2x5cGhpY29uLWNvbGxhcHNlLWRvd24gICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTU5XCI7IH0gfVxuLmdseXBoaWNvbi1jb2xsYXBzZS11cCAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2MFwiOyB9IH1cbi5nbHlwaGljb24tbG9nLWluICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjFcIjsgfSB9XG4uZ2x5cGhpY29uLWZsYXNoICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTYyXCI7IH0gfVxuLmdseXBoaWNvbi1sb2ctb3V0ICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2M1wiOyB9IH1cbi5nbHlwaGljb24tbmV3LXdpbmRvdyAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjRcIjsgfSB9XG4uZ2x5cGhpY29uLXJlY29yZCAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTY1XCI7IH0gfVxuLmdseXBoaWNvbi1zYXZlICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2NlwiOyB9IH1cbi5nbHlwaGljb24tb3BlbiAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNjdcIjsgfSB9XG4uZ2x5cGhpY29uLXNhdmVkICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTY4XCI7IH0gfVxuLmdseXBoaWNvbi1pbXBvcnQgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE2OVwiOyB9IH1cbi5nbHlwaGljb24tZXhwb3J0ICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzBcIjsgfSB9XG4uZ2x5cGhpY29uLXNlbmQgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTcxXCI7IH0gfVxuLmdseXBoaWNvbi1mbG9wcHktZGlzayAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE3MlwiOyB9IH1cbi5nbHlwaGljb24tZmxvcHB5LXNhdmVkICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzNcIjsgfSB9XG4uZ2x5cGhpY29uLWZsb3BweS1yZW1vdmUgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTc0XCI7IH0gfVxuLmdseXBoaWNvbi1mbG9wcHktc2F2ZSAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE3NVwiOyB9IH1cbi5nbHlwaGljb24tZmxvcHB5LW9wZW4gICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzZcIjsgfSB9XG4uZ2x5cGhpY29uLWNyZWRpdC1jYXJkICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTc3XCI7IH0gfVxuLmdseXBoaWNvbi10cmFuc2ZlciAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE3OFwiOyB9IH1cbi5nbHlwaGljb24tY3V0bGVyeSAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxNzlcIjsgfSB9XG4uZ2x5cGhpY29uLWhlYWRlciAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTgwXCI7IH0gfVxuLmdseXBoaWNvbi1jb21wcmVzc2VkICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4MVwiOyB9IH1cbi5nbHlwaGljb24tZWFycGhvbmUgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxODJcIjsgfSB9XG4uZ2x5cGhpY29uLXBob25lLWFsdCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTgzXCI7IH0gfVxuLmdseXBoaWNvbi10b3dlciAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4NFwiOyB9IH1cbi5nbHlwaGljb24tc3RhdHMgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxODVcIjsgfSB9XG4uZ2x5cGhpY29uLXNkLXZpZGVvICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTg2XCI7IH0gfVxuLmdseXBoaWNvbi1oZC12aWRlbyAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE4N1wiOyB9IH1cbi5nbHlwaGljb24tc3VidGl0bGVzICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxODhcIjsgfSB9XG4uZ2x5cGhpY29uLXNvdW5kLXN0ZXJlbyAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTg5XCI7IH0gfVxuLmdseXBoaWNvbi1zb3VuZC1kb2xieSAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE5MFwiOyB9IH1cbi5nbHlwaGljb24tc291bmQtNS0xICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxOTFcIjsgfSB9XG4uZ2x5cGhpY29uLXNvdW5kLTYtMSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTkyXCI7IH0gfVxuLmdseXBoaWNvbi1zb3VuZC03LTEgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE5M1wiOyB9IH1cbi5nbHlwaGljb24tY29weXJpZ2h0LW1hcmsgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxOTRcIjsgfSB9XG4uZ2x5cGhpY29uLXJlZ2lzdHJhdGlvbi1tYXJrICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTk1XCI7IH0gfVxuLmdseXBoaWNvbi1jbG91ZC1kb3dubG9hZCAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTE5N1wiOyB9IH1cbi5nbHlwaGljb24tY2xvdWQtdXBsb2FkICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUxOThcIjsgfSB9XG4uZ2x5cGhpY29uLXRyZWUtY29uaWZlciAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMTk5XCI7IH0gfVxuLmdseXBoaWNvbi10cmVlLWRlY2lkdW91cyAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIwMFwiOyB9IH1cbi5nbHlwaGljb24tY2QgICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMDFcIjsgfSB9XG4uZ2x5cGhpY29uLXNhdmUtZmlsZSAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjAyXCI7IH0gfVxuLmdseXBoaWNvbi1vcGVuLWZpbGUgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIwM1wiOyB9IH1cbi5nbHlwaGljb24tbGV2ZWwtdXAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMDRcIjsgfSB9XG4uZ2x5cGhpY29uLWNvcHkgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjA1XCI7IH0gfVxuLmdseXBoaWNvbi1wYXN0ZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIwNlwiOyB9IH1cbi8vIFRoZSBmb2xsb3dpbmcgMiBHbHlwaGljb25zIGFyZSBvbWl0dGVkIGZvciB0aGUgdGltZSBiZWluZyBiZWNhdXNlXG4vLyB0aGV5IGN1cnJlbnRseSB1c2UgVW5pY29kZSBjb2RlcG9pbnRzIHRoYXQgYXJlIG91dHNpZGUgdGhlXG4vLyBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgKEJNUCkuIE9sZGVyIGJ1Z2d5IHZlcnNpb25zIG9mIFdlYktpdCBjYW4ndCBoYW5kbGVcbi8vIG5vbi1CTVAgY29kZXBvaW50cyBpbiBDU1Mgc3RyaW5nIGVzY2FwZXMsIGFuZCB0aHVzIGNhbid0IGRpc3BsYXkgdGhlc2UgdHdvIGljb25zLlxuLy8gTm90YWJseSwgdGhlIGJ1ZyBhZmZlY3RzIHNvbWUgb2xkZXIgdmVyc2lvbnMgb2YgdGhlIEFuZHJvaWQgQnJvd3Nlci5cbi8vIE1vcmUgaW5mbzogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMDEwNlxuLy8gLmdseXBoaWNvbi1kb29yICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMWY2YWFcIjsgfSB9XG4vLyAuZ2x5cGhpY29uLWtleSAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwxZjUxMVwiOyB9IH1cbi5nbHlwaGljb24tYWxlcnQgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMDlcIjsgfSB9XG4uZ2x5cGhpY29uLWVxdWFsaXplciAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjEwXCI7IH0gfVxuLmdseXBoaWNvbi1raW5nICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIxMVwiOyB9IH1cbi5nbHlwaGljb24tcXVlZW4gICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMTJcIjsgfSB9XG4uZ2x5cGhpY29uLXBhd24gICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjEzXCI7IH0gfVxuLmdseXBoaWNvbi1iaXNob3AgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIxNFwiOyB9IH1cbi5nbHlwaGljb24ta25pZ2h0ICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMTVcIjsgfSB9XG4uZ2x5cGhpY29uLWJhYnktZm9ybXVsYSAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjE2XCI7IH0gfVxuLmdseXBoaWNvbi10ZW50ICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMjZmYVwiOyB9IH1cbi5nbHlwaGljb24tYmxhY2tib2FyZCAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMThcIjsgfSB9XG4uZ2x5cGhpY29uLWJlZCAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjE5XCI7IH0gfVxuLmdseXBoaWNvbi1hcHBsZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjhmZlwiOyB9IH1cbi5nbHlwaGljb24tZXJhc2UgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMjFcIjsgfSB9XG4uZ2x5cGhpY29uLWhvdXJnbGFzcyAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwyMzFiXCI7IH0gfVxuLmdseXBoaWNvbi1sYW1wICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIyM1wiOyB9IH1cbi5nbHlwaGljb24tZHVwbGljYXRlICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMjRcIjsgfSB9XG4uZ2x5cGhpY29uLXBpZ2d5LWJhbmsgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjI1XCI7IH0gfVxuLmdseXBoaWNvbi1zY2lzc29ycyAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIyNlwiOyB9IH1cbi5nbHlwaGljb24tYml0Y29pbiAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMjdcIjsgfSB9XG4uZ2x5cGhpY29uLWJ0YyAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjI3XCI7IH0gfVxuLmdseXBoaWNvbi14YnQgICAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIyN1wiOyB9IH1cbi5nbHlwaGljb24teWVuICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDAwYTVcIjsgfSB9XG4uZ2x5cGhpY29uLWpweSAgICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFwwMGE1XCI7IH0gfVxuLmdseXBoaWNvbi1ydWJsZSAgICAgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcMjBiZFwiOyB9IH1cbi5nbHlwaGljb24tcnViICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXDIwYmRcIjsgfSB9XG4uZ2x5cGhpY29uLXNjYWxlICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjMwXCI7IH0gfVxuLmdseXBoaWNvbi1pY2UtbG9sbHkgICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzMVwiOyB9IH1cbi5nbHlwaGljb24taWNlLWxvbGx5LXRhc3RlZCAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMzJcIjsgfSB9XG4uZ2x5cGhpY29uLWVkdWNhdGlvbiAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjMzXCI7IH0gfVxuLmdseXBoaWNvbi1vcHRpb24taG9yaXpvbnRhbCAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzNFwiOyB9IH1cbi5nbHlwaGljb24tb3B0aW9uLXZlcnRpY2FsICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMzVcIjsgfSB9XG4uZ2x5cGhpY29uLW1lbnUtaGFtYnVyZ2VyICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjM2XCI7IH0gfVxuLmdseXBoaWNvbi1tb2RhbC13aW5kb3cgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTIzN1wiOyB9IH1cbi5nbHlwaGljb24tb2lsICAgICAgICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyMzhcIjsgfSB9XG4uZ2x5cGhpY29uLWdyYWluICAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjM5XCI7IH0gfVxuLmdseXBoaWNvbi1zdW5nbGFzc2VzICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0MFwiOyB9IH1cbi5nbHlwaGljb24tdGV4dC1zaXplICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDFcIjsgfSB9XG4uZ2x5cGhpY29uLXRleHQtY29sb3IgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjQyXCI7IH0gfVxuLmdseXBoaWNvbi10ZXh0LWJhY2tncm91bmQgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0M1wiOyB9IH1cbi5nbHlwaGljb24tb2JqZWN0LWFsaWduLXRvcCAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDRcIjsgfSB9XG4uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi1ib3R0b20gICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjQ1XCI7IH0gfVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24taG9yaXpvbnRhbHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0NlwiOyB9IH1cbi5nbHlwaGljb24tb2JqZWN0LWFsaWduLWxlZnQgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNDdcIjsgfSB9XG4uZ2x5cGhpY29uLW9iamVjdC1hbGlnbi12ZXJ0aWNhbCAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjQ4XCI7IH0gfVxuLmdseXBoaWNvbi1vYmplY3QtYWxpZ24tcmlnaHQgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI0OVwiOyB9IH1cbi5nbHlwaGljb24tdHJpYW5nbGUtcmlnaHQgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNTBcIjsgfSB9XG4uZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnQgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjUxXCI7IH0gfVxuLmdseXBoaWNvbi10cmlhbmdsZS1ib3R0b20gICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI1MlwiOyB9IH1cbi5nbHlwaGljb24tdHJpYW5nbGUtdG9wICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNTNcIjsgfSB9XG4uZ2x5cGhpY29uLWNvbnNvbGUgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjU0XCI7IH0gfVxuLmdseXBoaWNvbi1zdXBlcnNjcmlwdCAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI1NVwiOyB9IH1cbi5nbHlwaGljb24tc3Vic2NyaXB0ICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNTZcIjsgfSB9XG4uZ2x5cGhpY29uLW1lbnUtbGVmdCAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjU3XCI7IH0gfVxuLmdseXBoaWNvbi1tZW51LXJpZ2h0ICAgICAgICAgICAgIHsgJjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZTI1OFwiOyB9IH1cbi5nbHlwaGljb24tbWVudS1kb3duICAgICAgICAgICAgICB7ICY6YmVmb3JlIHsgY29udGVudDogXCJcXGUyNTlcIjsgfSB9XG4uZ2x5cGhpY29uLW1lbnUtdXAgICAgICAgICAgICAgICAgeyAmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxlMjYwXCI7IH0gfVxuIiwiLy9cbi8vIFNjYWZmb2xkaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIFJlc2V0IHRoZSBib3gtc2l6aW5nXG4vL1xuLy8gSGVhZHMgdXAhIFRoaXMgcmVzZXQgbWF5IGNhdXNlIGNvbmZsaWN0cyB3aXRoIHNvbWUgdGhpcmQtcGFydHkgd2lkZ2V0cy5cbi8vIEZvciByZWNvbW1lbmRhdGlvbnMgb24gcmVzb2x2aW5nIHN1Y2ggY29uZmxpY3RzLCBzZWVcbi8vIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2dldHRpbmctc3RhcnRlZC8jdGhpcmQtYm94LXNpemluZ1xuKiB7XG4gIEBpbmNsdWRlIGJveC1zaXppbmcoYm9yZGVyLWJveCk7XG59XG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xufVxuXG5cbi8vIEJvZHkgcmVzZXRcblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xufVxuXG4vLyBSZXNldCBmb250cyBmb3IgcmVsZXZhbnQgZWxlbWVudHNcbmlucHV0LFxuYnV0dG9uLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuXG4vLyBMaW5rc1xuXG5hIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogJGxpbmstaG92ZXItZGVjb3JhdGlvbjtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIEBpbmNsdWRlIHRhYi1mb2N1cztcbiAgfVxufVxuXG5cbi8vIEZpZ3VyZXNcbi8vXG4vLyBXZSByZXNldCB0aGlzIGhlcmUgYmVjYXVzZSBwcmV2aW91c2x5IE5vcm1hbGl6ZSBoYWQgbm8gYGZpZ3VyZWAgbWFyZ2lucy4gVGhpc1xuLy8gZW5zdXJlcyB3ZSBkb24ndCBicmVhayBhbnlvbmUncyB1c2Ugb2YgdGhlIGVsZW1lbnQuXG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuXG4vLyBJbWFnZXNcblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLy8gUmVzcG9uc2l2ZSBpbWFnZXMgKGVuc3VyZSBpbWFnZXMgZG9uJ3Qgc2NhbGUgYmV5b25kIHRoZWlyIHBhcmVudHMpXG4uaW1nLXJlc3BvbnNpdmUge1xuICBAaW5jbHVkZSBpbWctcmVzcG9uc2l2ZTtcbn1cblxuLy8gUm91bmRlZCBjb3JuZXJzXG4uaW1nLXJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTtcbn1cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuLy9cbi8vIEhlYWRzIHVwISBUaGlzIGlzIG1peGluLWVkIGludG8gdGh1bWJuYWlscy5sZXNzIGZvciBgLnRodW1ibmFpbGAuXG4uaW1nLXRodW1ibmFpbCB7XG4gIHBhZGRpbmc6ICR0aHVtYm5haWwtcGFkZGluZztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGh1bWJuYWlsLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkdGh1bWJuYWlsLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuMnMgZWFzZS1pbi1vdXQpO1xuXG4gIC8vIEtlZXAgdGhlbSBhdCBtb3N0IDEwMCUgd2lkZVxuICBAaW5jbHVkZSBpbWctcmVzcG9uc2l2ZShpbmxpbmUtYmxvY2spO1xufVxuXG4vLyBQZXJmZWN0IGNpcmNsZVxuLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IC8vIHNldCByYWRpdXMgaW4gcGVyY2VudHNcbn1cblxuXG4vLyBIb3Jpem9udGFsIHJ1bGVzXG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogICAgJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRoci1ib3JkZXI7XG59XG5cblxuLy8gT25seSBkaXNwbGF5IGNvbnRlbnQgdG8gc2NyZWVuIHJlYWRlcnNcbi8vXG4vLyBTZWU6IGh0dHA6Ly9hMTF5cHJvamVjdC5jb20vcG9zdHMvaG93LXRvLWhpZGUtY29udGVudFxuXG4uc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBVc2UgaW4gY29uanVuY3Rpb24gd2l0aCAuc3Itb25seSB0byBvbmx5IGRpc3BsYXkgY29udGVudCB3aGVuIGl0J3MgZm9jdXNlZC5cbi8vIFVzZWZ1bCBmb3IgXCJTa2lwIHRvIG1haW4gY29udGVudFwiIGxpbmtzOyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMy9OT1RFLVdDQUcyMC1URUNIUy0yMDEzMDkwNS9HMVxuLy8gQ3JlZGl0OiBIVE1MNSBCb2lsZXJwbGF0ZVxuXG4uc3Itb25seS1mb2N1c2FibGUge1xuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGNsaXA6IGF1dG87XG4gIH1cbn1cblxuXG4vLyBpT1MgXCJjbGlja2FibGUgZWxlbWVudHNcIiBmaXggZm9yIHJvbGU9XCJidXR0b25cIlxuLy9cbi8vIEZpeGVzIFwiY2xpY2thYmlsaXR5XCIgaXNzdWUgKGFuZCBtb3JlIGdlbmVyYWxseSwgdGhlIGZpcmluZyBvZiBldmVudHMgc3VjaCBhcyBmb2N1cyBhcyB3ZWxsKVxuLy8gZm9yIHRyYWRpdGlvbmFsbHkgbm9uLWZvY3VzYWJsZSBlbGVtZW50cyB3aXRoIHJvbGU9XCJidXR0b25cIlxuLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNTYWZhcmlfTW9iaWxlXG5cbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwiLy9cbi8vIFR5cG9ncmFwaHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gSGVhZGluZ3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xuICBmb250LWZhbWlseTogJGhlYWRpbmdzLWZvbnQtZmFtaWx5O1xuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xuICBsaW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xuXG4gIHNtYWxsLFxuICAuc21hbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICRoZWFkaW5ncy1zbWFsbC1jb2xvcjtcbiAgfVxufVxuXG5oMSwgLmgxLFxuaDIsIC5oMixcbmgzLCAuaDMge1xuICBtYXJnaW4tdG9wOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIG1hcmdpbi1ib3R0b206ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKTtcblxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDY1JTtcbiAgfVxufVxuaDQsIC5oNCxcbmg1LCAuaDUsXG5oNiwgLmg2IHtcbiAgbWFyZ2luLXRvcDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC8gMik7XG5cbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gIH1cbn1cblxuaDEsIC5oMSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTsgfVxuaDIsIC5oMiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMjsgfVxuaDMsIC5oMyB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMzsgfVxuaDQsIC5oNCB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNDsgfVxuaDUsIC5oNSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNTsgfVxuaDYsIC5oNiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNjsgfVxuXG5cbi8vIEJvZHkgdGV4dFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5wIHtcbiAgbWFyZ2luOiAwIDAgKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xufVxuXG4ubGVhZCB7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zaXplOiBmbG9vcigoJGZvbnQtc2l6ZS1iYXNlICogMS4xNSkpO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIGZvbnQtc2l6ZTogKCRmb250LXNpemUtYmFzZSAqIDEuNSk7XG4gIH1cbn1cblxuXG4vLyBFbXBoYXNpcyAmIG1pc2Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRXg6ICgxMnB4IHNtYWxsIGZvbnQgLyAxNHB4IGJhc2UgZm9udCkgKiAxMDAlID0gYWJvdXQgODUlXG5zbWFsbCxcbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogZmxvb3IoKDEwMCUgKiAkZm9udC1zaXplLXNtYWxsIC8gJGZvbnQtc2l6ZS1iYXNlKSk7XG59XG5cbm1hcmssXG4ubWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRzdGF0ZS13YXJuaW5nLWJnO1xuICBwYWRkaW5nOiAuMmVtO1xufVxuXG4vLyBBbGlnbm1lbnRcbi50ZXh0LWxlZnQgICAgICAgICAgIHsgdGV4dC1hbGlnbjogbGVmdDsgfVxuLnRleHQtcmlnaHQgICAgICAgICAgeyB0ZXh0LWFsaWduOiByaWdodDsgfVxuLnRleHQtY2VudGVyICAgICAgICAgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbi50ZXh0LWp1c3RpZnkgICAgICAgIHsgdGV4dC1hbGlnbjoganVzdGlmeTsgfVxuLnRleHQtbm93cmFwICAgICAgICAgeyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi8vIFRyYW5zZm9ybWF0aW9uXG4udGV4dC1sb3dlcmNhc2UgICAgICB7IHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cbi50ZXh0LXVwcGVyY2FzZSAgICAgIHsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuLnRleHQtY2FwaXRhbGl6ZSAgICAgeyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuXG4vLyBDb250ZXh0dWFsIGNvbG9yc1xuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogJHRleHQtbXV0ZWQ7XG59XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtcHJpbWFyeScsICRicmFuZC1wcmltYXJ5KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1zdWNjZXNzJywgJHN0YXRlLXN1Y2Nlc3MtdGV4dCk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtaW5mbycsICRzdGF0ZS1pbmZvLXRleHQpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXdhcm5pbmcnLCAkc3RhdGUtd2FybmluZy10ZXh0KTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1kYW5nZXInLCAkc3RhdGUtZGFuZ2VyLXRleHQpO1xuXG4vLyBDb250ZXh0dWFsIGJhY2tncm91bmRzXG4vLyBGb3Igbm93IHdlJ2xsIGxlYXZlIHRoZXNlIGFsb25nc2lkZSB0aGUgdGV4dCBjbGFzc2VzIHVudGlsIHY0IHdoZW4gd2UgY2FuXG4vLyBzYWZlbHkgc2hpZnQgdGhpbmdzIGFyb3VuZCAocGVyIFNlbVZlciBydWxlcykuXG4uYmctcHJpbWFyeSB7XG4gIC8vIEdpdmVuIHRoZSBjb250cmFzdCBoZXJlLCB0aGlzIGlzIHRoZSBvbmx5IGNsYXNzIHRvIGhhdmUgaXRzIGNvbG9yIGludmVydGVkXG4gIC8vIGF1dG9tYXRpY2FsbHkuXG4gIGNvbG9yOiAjZmZmO1xufVxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXByaW1hcnknLCAkYnJhbmQtcHJpbWFyeSk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1zdWNjZXNzJywgJHN0YXRlLXN1Y2Nlc3MtYmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctaW5mbycsICRzdGF0ZS1pbmZvLWJnKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLXdhcm5pbmcnLCAkc3RhdGUtd2FybmluZy1iZyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1kYW5nZXInLCAkc3RhdGUtZGFuZ2VyLWJnKTtcblxuXG4vLyBQYWdlIGhlYWRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ucGFnZS1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogKCgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKSAtIDEpO1xuICBtYXJnaW46ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKiAyKSAwICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRwYWdlLWhlYWRlci1ib3JkZXItY29sb3I7XG59XG5cblxuLy8gTGlzdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVW5vcmRlcmVkIGFuZCBPcmRlcmVkIGxpc3RzXG51bCxcbm9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLy8gTGlzdCBvcHRpb25zXG5cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBmcm9tIGAubGlzdC11bnN0eWxlZGAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuQG1peGluIGxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4vLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYXMgYEBtaXhpbiBsaXN0LXVuc3R5bGVkYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG4ubGlzdC11bnN0eWxlZCB7XG4gIEBpbmNsdWRlIGxpc3QtdW5zdHlsZWQ7XG59XG5cblxuLy8gSW5saW5lIHR1cm5zIGxpc3QgaXRlbXMgaW50byBpbmxpbmUtYmxvY2tcbi5saXN0LWlubGluZSB7XG4gIEBpbmNsdWRlIGxpc3QtdW5zdHlsZWQ7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuXG4gID4gbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbn1cblxuLy8gRGVzY3JpcHRpb24gTGlzdHNcbmRsIHtcbiAgbWFyZ2luLXRvcDogMDsgLy8gUmVtb3ZlIGJyb3dzZXIgZGVmYXVsdFxuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG59XG5kdCxcbmRkIHtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xufVxuZHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmRkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7IC8vIFVuZG8gYnJvd3NlciBkZWZhdWx0XG59XG5cbi8vIEhvcml6b250YWwgZGVzY3JpcHRpb24gbGlzdHNcbi8vXG4vLyBEZWZhdWx0cyB0byBiZWluZyBzdGFja2VkIHdpdGhvdXQgYW55IG9mIHRoZSBiZWxvdyBzdHlsZXMgYXBwbGllZCwgdW50aWwgdGhlXG4vLyBncmlkIGJyZWFrcG9pbnQgaXMgcmVhY2hlZCAoZGVmYXVsdCBvZiB+NzY4cHgpLlxuXG4uZGwtaG9yaXpvbnRhbCB7XG4gIGRkIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeDsgLy8gQ2xlYXIgdGhlIGZsb2F0ZWQgYGR0YCBpZiBhbiBlbXB0eSBgZGRgIGlzIHByZXNlbnRcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZGwtaG9yaXpvbnRhbC1icmVha3BvaW50KSB7XG4gICAgZHQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB3aWR0aDogKCRkbC1ob3Jpem9udGFsLW9mZnNldCAtIDIwKTtcbiAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93O1xuICAgIH1cbiAgICBkZCB7XG4gICAgICBtYXJnaW4tbGVmdDogJGRsLWhvcml6b250YWwtb2Zmc2V0O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE1pc2Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQWJicmV2aWF0aW9ucyBhbmQgYWNyb255bXNcbmFiYnJbdGl0bGVdLFxuLy8gQWRkIGRhdGEtKiBhdHRyaWJ1dGUgdG8gaGVscCBvdXQgb3VyIHRvb2x0aXAgcGx1Z2luLCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy81MjU3XG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICRhYmJyLWJvcmRlci1jb2xvcjtcbn1cbi5pbml0aWFsaXNtIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIEBleHRlbmQgLnRleHQtdXBwZXJjYXNlO1xufVxuXG4vLyBCbG9ja3F1b3Rlc1xuYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgLyAyKSAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIG1hcmdpbjogMCAwICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zaXplOiAkYmxvY2txdW90ZS1mb250LXNpemU7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJGJsb2NrcXVvdGUtYm9yZGVyLWNvbG9yO1xuXG4gIHAsXG4gIHVsLFxuICBvbCB7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gTm90ZTogRGVwcmVjYXRlZCBzbWFsbCBhbmQgLnNtYWxsIGFzIG9mIHYzLjEuMFxuICAvLyBDb250ZXh0OiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjYwXG4gIGZvb3RlcixcbiAgc21hbGwsXG4gIC5zbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiA4MCU7IC8vIGJhY2sgdG8gZGVmYXVsdCBmb250LXNpemVcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgY29sb3I6ICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcMjAxNCBcXDAwQTAnOyAvLyBlbSBkYXNoLCBuYnNwXG4gICAgfVxuICB9XG59XG5cbi8vIE9wcG9zaXRlIGFsaWdubWVudCBvZiBibG9ja3F1b3RlXG4vL1xuLy8gSGVhZHMgdXA6IGBibG9ja3F1b3RlLnB1bGwtcmlnaHRgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYXMgb2YgdjMuMS4wLlxuLmJsb2NrcXVvdGUtcmV2ZXJzZSxcbmJsb2NrcXVvdGUucHVsbC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgJGJsb2NrcXVvdGUtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgLy8gQWNjb3VudCBmb3IgY2l0YXRpb25cbiAgZm9vdGVyLFxuICBzbWFsbCxcbiAgLnNtYWxsIHtcbiAgICAmOmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyB9XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFwwMEEwIFxcMjAxNCc7IC8vIG5ic3AsIGVtIGRhc2hcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkcmVzc2VzXG5hZGRyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbn1cbiIsIi8vXG4vLyBDb2RlIChpbmxpbmUgYW5kIGJsb2NrKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBJbmxpbmUgYW5kIGJsb2NrIGNvZGUgc3R5bGVzXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbW9ub3NwYWNlO1xufVxuXG4vLyBJbmxpbmUgY29kZVxuY29kZSB7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogJGNvZGUtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2RlLWJnO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlO1xufVxuXG4vLyBVc2VyIGlucHV0IHR5cGljYWxseSBlbnRlcmVkIHZpYSBrZXlib2FyZFxua2JkIHtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAka2JkLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAka2JkLWJnO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbWFsbDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMjUpO1xuXG4gIGtiZCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxufVxuXG4vLyBCbG9ja3Mgb2YgY29kZVxucHJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6ICgoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIC0gMSkgLyAyKTtcbiAgbWFyZ2luOiAwIDAgKCRsaW5lLWhlaWdodC1jb21wdXRlZCAvIDIpO1xuICBmb250LXNpemU6ICgkZm9udC1zaXplLWJhc2UgLSAxKTsgLy8gMTRweCB0byAxM3B4XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOiAkcHJlLWNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJlLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkcHJlLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcblxuICAvLyBBY2NvdW50IGZvciBzb21lIGNvZGUgb3V0cHV0cyB0aGF0IHBsYWNlIGNvZGUgdGFncyBpbiBwcmUgdGFnc1xuICBjb2RlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuXG4vLyBFbmFibGUgc2Nyb2xsYWJsZSBibG9ja3Mgb2YgY29kZVxuLnByZS1zY3JvbGxhYmxlIHtcbiAgbWF4LWhlaWdodDogJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiIsIi8vXG4vLyBHcmlkIHN5c3RlbVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBDb250YWluZXIgd2lkdGhzXG4vL1xuLy8gU2V0IHRoZSBjb250YWluZXIgd2lkdGgsIGFuZCBvdmVycmlkZSBpdCBmb3IgZml4ZWQgbmF2YmFycyBpbiBtZWRpYSBxdWVyaWVzLlxuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgY29udGFpbmVyLWZpeGVkO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIHdpZHRoOiAkY29udGFpbmVyLXNtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICAgIHdpZHRoOiAkY29udGFpbmVyLW1kO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIHdpZHRoOiAkY29udGFpbmVyLWxnO1xuICB9XG59XG5cblxuLy8gRmx1aWQgY29udGFpbmVyXG4vL1xuLy8gVXRpbGl6ZXMgdGhlIG1peGluIG1lYW50IGZvciBmaXhlZCB3aWR0aCBjb250YWluZXJzLCBidXQgd2l0aG91dCBhbnkgZGVmaW5lZFxuLy8gd2lkdGggZm9yIGZsdWlkLCBmdWxsIHdpZHRoIGxheW91dHMuXG5cbi5jb250YWluZXItZmx1aWQge1xuICBAaW5jbHVkZSBjb250YWluZXItZml4ZWQ7XG59XG5cblxuLy8gUm93XG4vL1xuLy8gUm93cyBjb250YWluIGFuZCBjbGVhciB0aGUgZmxvYXRzIG9mIHlvdXIgY29sdW1ucy5cblxuLnJvdyB7XG4gIEBpbmNsdWRlIG1ha2Utcm93O1xufVxuXG5cbi8vIENvbHVtbnNcbi8vXG4vLyBDb21tb24gc3R5bGVzIGZvciBzbWFsbCBhbmQgbGFyZ2UgZ3JpZCBjb2x1bW5zXG5cbkBpbmNsdWRlIG1ha2UtZ3JpZC1jb2x1bW5zO1xuXG5cbi8vIEV4dHJhIHNtYWxsIGdyaWRcbi8vXG4vLyBDb2x1bW5zLCBvZmZzZXRzLCBwdXNoZXMsIGFuZCBwdWxscyBmb3IgZXh0cmEgc21hbGwgZGV2aWNlcyBsaWtlXG4vLyBzbWFydHBob25lcy5cblxuQGluY2x1ZGUgbWFrZS1ncmlkKHhzKTtcblxuXG4vLyBTbWFsbCBncmlkXG4vL1xuLy8gQ29sdW1ucywgb2Zmc2V0cywgcHVzaGVzLCBhbmQgcHVsbHMgZm9yIHRoZSBzbWFsbCBkZXZpY2UgcmFuZ2UsIGZyb20gcGhvbmVzXG4vLyB0byB0YWJsZXRzLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHtcbiAgQGluY2x1ZGUgbWFrZS1ncmlkKHNtKTtcbn1cblxuXG4vLyBNZWRpdW0gZ3JpZFxuLy9cbi8vIENvbHVtbnMsIG9mZnNldHMsIHB1c2hlcywgYW5kIHB1bGxzIGZvciB0aGUgZGVza3RvcCBkZXZpY2UgcmFuZ2UuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQobWQpO1xufVxuXG5cbi8vIExhcmdlIGdyaWRcbi8vXG4vLyBDb2x1bW5zLCBvZmZzZXRzLCBwdXNoZXMsIGFuZCBwdWxscyBmb3IgdGhlIGxhcmdlIGRlc2t0b3AgZGV2aWNlIHJhbmdlLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgQGluY2x1ZGUgbWFrZS1ncmlkKGxnKTtcbn1cbiIsIi8vXG4vLyBUYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxudGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFibGUtYmc7XG59XG5jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6ICR0YWJsZS1jZWxsLXBhZGRpbmc7XG4gIHBhZGRpbmctYm90dG9tOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICBjb2xvcjogJHRleHQtbXV0ZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG50aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLy8gQmFzZWxpbmUgc3R5bGVzXG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgLy8gQ2VsbHNcbiAgPiB0aGVhZCxcbiAgPiB0Ym9keSxcbiAgPiB0Zm9vdCB7XG4gICAgPiB0ciB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIHBhZGRpbmc6ICR0YWJsZS1jZWxsLXBhZGRpbmc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIEJvdHRvbSBhbGlnbiBmb3IgY29sdW1uIGhlYWRpbmdzXG4gID4gdGhlYWQgPiB0ciA+IHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG4gIC8vIFJlbW92ZSB0b3AgYm9yZGVyIGZyb20gdGhlYWQgYnkgZGVmYXVsdFxuICA+IGNhcHRpb24gKyB0aGVhZCxcbiAgPiBjb2xncm91cCArIHRoZWFkLFxuICA+IHRoZWFkOmZpcnN0LWNoaWxkIHtcbiAgICA+IHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgID4gdGgsXG4gICAgICA+IHRkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQWNjb3VudCBmb3IgbXVsdGlwbGUgdGJvZHkgaW5zdGFuY2VzXG4gID4gdGJvZHkgKyB0Ym9keSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cblxuICAvLyBOZXN0aW5nXG4gIC50YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XG4gIH1cbn1cblxuXG4vLyBDb25kZW5zZWQgdGFibGUgdy8gaGFsZiBwYWRkaW5nXG5cbi50YWJsZS1jb25kZW5zZWQge1xuICA+IHRoZWFkLFxuICA+IHRib2R5LFxuICA+IHRmb290IHtcbiAgICA+IHRyIHtcbiAgICAgID4gdGgsXG4gICAgICA+IHRkIHtcbiAgICAgICAgcGFkZGluZzogJHRhYmxlLWNvbmRlbnNlZC1jZWxsLXBhZGRpbmc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gQm9yZGVyZWQgdmVyc2lvblxuLy9cbi8vIEFkZCBib3JkZXJzIGFsbCBhcm91bmQgdGhlIHRhYmxlIGFuZCBiZXR3ZWVuIGFsbCB0aGUgY29sdW1ucy5cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgPiB0aGVhZCxcbiAgPiB0Ym9keSxcbiAgPiB0Zm9vdCB7XG4gICAgPiB0ciB7XG4gICAgICA+IHRoLFxuICAgICAgPiB0ZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gID4gdGhlYWQgPiB0ciB7XG4gICAgPiB0aCxcbiAgICA+IHRkIHtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBaZWJyYS1zdHJpcGluZ1xuLy9cbi8vIERlZmF1bHQgemVicmEtc3RyaXBlIHN0eWxlcyAoYWx0ZXJuYXRpbmcgZ3JheSBhbmQgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHMpXG5cbi50YWJsZS1zdHJpcGVkIHtcbiAgPiB0Ym9keSA+IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZy1hY2NlbnQ7XG4gIH1cbn1cblxuXG4vLyBIb3ZlciBlZmZlY3Rcbi8vXG4vLyBQbGFjZWQgaGVyZSBzaW5jZSBpdCBoYXMgdG8gY29tZSBhZnRlciB0aGUgcG90ZW50aWFsIHplYnJhIHN0cmlwaW5nXG5cbi50YWJsZS1ob3ZlciB7XG4gID4gdGJvZHkgPiB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWJnLWhvdmVyO1xuICB9XG59XG5cblxuLy8gVGFibGUgY2VsbCBzaXppbmdcbi8vXG4vLyBSZXNldCBkZWZhdWx0IHRhYmxlIGJlaGF2aW9yXG5cbnRhYmxlIGNvbFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgcG9zaXRpb246IHN0YXRpYzsgLy8gUHJldmVudCBib3JkZXIgaGlkaW5nIGluIEZpcmVmb3ggYW5kIElFOS0xMSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2MjMpXG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiB0YWJsZS1jb2x1bW47XG59XG50YWJsZSB7XG4gIHRkLFxuICB0aCB7XG4gICAgJltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7IC8vIFByZXZlbnQgYm9yZGVyIGhpZGluZyBpbiBGaXJlZm94IGFuZCBJRTktMTEgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjIzKVxuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFRhYmxlIGJhY2tncm91bmRzXG4vL1xuLy8gRXhhY3Qgc2VsZWN0b3JzIGJlbG93IHJlcXVpcmVkIHRvIG92ZXJyaWRlIGAudGFibGUtc3RyaXBlZGAgYW5kIHByZXZlbnRcbi8vIGluaGVyaXRhbmNlIHRvIG5lc3RlZCB0YWJsZXMuXG5cbi8vIEdlbmVyYXRlIHRoZSBjb250ZXh0dWFsIHZhcmlhbnRzXG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCgnYWN0aXZlJywgJHRhYmxlLWJnLWFjdGl2ZSk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCgnc3VjY2VzcycsICRzdGF0ZS1zdWNjZXNzLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KCdpbmZvJywgJHN0YXRlLWluZm8tYmcpO1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoJ3dhcm5pbmcnLCAkc3RhdGUtd2FybmluZy1iZyk7XG5AaW5jbHVkZSB0YWJsZS1yb3ctdmFyaWFudCgnZGFuZ2VyJywgJHN0YXRlLWRhbmdlci1iZyk7XG5cblxuLy8gUmVzcG9uc2l2ZSB0YWJsZXNcbi8vXG4vLyBXcmFwIHlvdXIgdGFibGVzIGluIGAudGFibGUtcmVzcG9uc2l2ZWAgYW5kIHdlJ2xsIG1ha2UgdGhlbSBtb2JpbGUgZnJpZW5kbHlcbi8vIGJ5IGVuYWJsaW5nIGhvcml6b250YWwgc2Nyb2xsaW5nLiBPbmx5IGFwcGxpZXMgPDc2OHB4LiBFdmVyeXRoaW5nIGFib3ZlIHRoYXRcbi8vIHdpbGwgZGlzcGxheSBub3JtYWxseS5cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAwLjAxJTsgLy8gV29ya2Fyb3VuZCBmb3IgSUU5IGJ1ZyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTQ4MzcpXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICogMC43NSk7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG5cbiAgICAvLyBUaWdodGVuIHVwIHNwYWNpbmdcbiAgICA+IC50YWJsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAvLyBFbnN1cmUgdGhlIGNvbnRlbnQgZG9lc24ndCB3cmFwXG4gICAgICA+IHRoZWFkLFxuICAgICAgPiB0Ym9keSxcbiAgICAgID4gdGZvb3Qge1xuICAgICAgICA+IHRyIHtcbiAgICAgICAgICA+IHRoLFxuICAgICAgICAgID4gdGQge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTcGVjaWFsIG92ZXJyaWRlcyBmb3IgdGhlIGJvcmRlcmVkIHRhYmxlc1xuICAgID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICAgIGJvcmRlcjogMDtcblxuICAgICAgLy8gTnVrZSB0aGUgYXBwcm9wcmlhdGUgYm9yZGVycyBzbyB0aGF0IHRoZSBwYXJlbnQgY2FuIGhhbmRsZSB0aGVtXG4gICAgICA+IHRoZWFkLFxuICAgICAgPiB0Ym9keSxcbiAgICAgID4gdGZvb3Qge1xuICAgICAgICA+IHRyIHtcbiAgICAgICAgICA+IHRoOmZpcnN0LWNoaWxkLFxuICAgICAgICAgID4gdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgID4gdGg6bGFzdC1jaGlsZCxcbiAgICAgICAgICA+IHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IG51a2UgdGhlIGxhc3Qgcm93J3MgYm90dG9tLWJvcmRlciBpbiBgdGJvZHlgIGFuZCBgdGZvb3RgIHNpbmNlXG4gICAgICAvLyBjaGFuY2VzIGFyZSB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIGB0cmAgaW4gYSBgdGhlYWRgIGFuZCB0aGF0IHdvdWxkXG4gICAgICAvLyByZW1vdmUgdGhlIGJvcmRlciBhbHRvZ2V0aGVyLlxuICAgICAgPiB0Ym9keSxcbiAgICAgID4gdGZvb3Qge1xuICAgICAgICA+IHRyOmxhc3QtY2hpbGQge1xuICAgICAgICAgID4gdGgsXG4gICAgICAgICAgPiB0ZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gRm9ybXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gTm9ybWFsaXplIG5vbi1jb250cm9sc1xuLy9cbi8vIFJlc3R5bGUgYW5kIGJhc2VsaW5lIG5vbi1jb250cm9sIGZvcm0gZWxlbWVudHMuXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIC8vIENocm9tZSBhbmQgRmlyZWZveCBzZXQgYSBgbWluLXdpZHRoOiBtaW4tY29udGVudDtgIG9uIGZpZWxkc2V0cyxcbiAgLy8gc28gd2UgcmVzZXQgdGhhdCB0byBlbnN1cmUgaXQgYmVoYXZlcyBtb3JlIGxpa2UgYSBzdGFuZGFyZCBibG9jayBlbGVtZW50LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMjM1OS5cbiAgbWluLXdpZHRoOiAwO1xufVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS41KTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiAkbGVnZW5kLWNvbG9yO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGVnZW5kLWJvcmRlci1jb2xvcjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTsgLy8gRm9yY2UgSUU4IHRvIHdyYXAgbG9uZyBjb250ZW50IChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMzE0MSlcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG4vLyBOb3JtYWxpemUgZm9ybSBjb250cm9sc1xuLy9cbi8vIFdoaWxlIG1vc3Qgb2Ygb3VyIGZvcm0gc3R5bGVzIHJlcXVpcmUgZXh0cmEgY2xhc3Nlcywgc29tZSBiYXNpYyBub3JtYWxpemF0aW9uXG4vLyBpcyByZXF1aXJlZCB0byBlbnN1cmUgb3B0aW11bSBkaXNwbGF5IHdpdGggb3Igd2l0aG91dCB0aG9zZSBjbGFzc2VzIHRvIGJldHRlclxuLy8gYWRkcmVzcyBicm93c2VyIGluY29uc2lzdGVuY2llcy5cblxuLy8gT3ZlcnJpZGUgY29udGVudC1ib3ggaW4gTm9ybWFsaXplICgqIGlzbid0IHNwZWNpZmljIGVub3VnaClcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICBAaW5jbHVkZSBib3gtc2l6aW5nKGJvcmRlci1ib3gpO1xufVxuXG4vLyBQb3NpdGlvbiByYWRpb3MgYW5kIGNoZWNrYm94ZXMgYmV0dGVyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIG1hcmdpbi10b3A6IDFweCBcXDk7IC8vIElFOC05XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIE1ha2UgcmFuZ2UgaW5wdXRzIGJlaGF2ZSBsaWtlIHRleHR1YWwgZm9ybSBjb250cm9sc1xuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBNYWtlIG11bHRpcGxlIHNlbGVjdCBlbGVtZW50cyBoZWlnaHQgbm90IGZpeGVkXG5zZWxlY3RbbXVsdGlwbGVdLFxuc2VsZWN0W3NpemVdIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vLyBGb2N1cyBmb3IgZmlsZSwgcmFkaW8sIGFuZCBjaGVja2JveFxuaW5wdXRbdHlwZT1cImZpbGVcIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Zm9jdXMsXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Zm9jdXMge1xuICBAaW5jbHVkZSB0YWItZm9jdXM7XG59XG5cbi8vIEFkanVzdCBvdXRwdXQgZWxlbWVudFxub3V0cHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xufVxuXG5cbi8vIENvbW1vbiBmb3JtIGNvbnRyb2xzXG4vL1xuLy8gU2hhcmVkIHNpemUgYW5kIHR5cGUgcmVzZXRzIGZvciBmb3JtIGNvbnRyb2xzLiBBcHBseSBgLmZvcm0tY29udHJvbGAgdG8gYW55XG4vLyBvZiB0aGUgZm9sbG93aW5nIGZvcm0gY29udHJvbHM6XG4vL1xuLy8gc2VsZWN0XG4vLyB0ZXh0YXJlYVxuLy8gaW5wdXRbdHlwZT1cInRleHRcIl1cbi8vIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXVxuLy8gaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl1cbi8vIGlucHV0W3R5cGU9XCJkYXRlXCJdXG4vLyBpbnB1dFt0eXBlPVwibW9udGhcIl1cbi8vIGlucHV0W3R5cGU9XCJ0aW1lXCJdXG4vLyBpbnB1dFt0eXBlPVwid2Vla1wiXVxuLy8gaW5wdXRbdHlwZT1cIm51bWJlclwiXVxuLy8gaW5wdXRbdHlwZT1cImVtYWlsXCJdXG4vLyBpbnB1dFt0eXBlPVwidXJsXCJdXG4vLyBpbnB1dFt0eXBlPVwic2VhcmNoXCJdXG4vLyBpbnB1dFt0eXBlPVwidGVsXCJdXG4vLyBpbnB1dFt0eXBlPVwiY29sb3JcIl1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWJhc2U7IC8vIE1ha2UgaW5wdXRzIGF0IGxlYXN0IHRoZSBoZWlnaHQgb2YgdGhlaXIgYnV0dG9uIGNvdW50ZXJwYXJ0IChiYXNlIGxpbmUtaGVpZ2h0ICsgcGFkZGluZyArIGJvcmRlcilcbiAgcGFkZGluZzogJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCAkcGFkZGluZy1iYXNlLWhvcml6b250YWw7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkaW5wdXQtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZztcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLy8gUmVzZXQgdW51c3VhbCBGaXJlZm94LW9uLUFuZHJvaWQgZGVmYXVsdCBzdHlsZTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvaXNzdWVzLzIxNFxuICBib3JkZXI6IDFweCBzb2xpZCAkaW5wdXQtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1czsgLy8gTm90ZTogVGhpcyBoYXMgbm8gZWZmZWN0IG9uIDxzZWxlY3Q+cyBpbiBzb21lIGJyb3dzZXJzLCBkdWUgdG8gdGhlIGxpbWl0ZWQgc3R5bGFiaWxpdHkgb2YgPHNlbGVjdD5zIGluIENTUy5cbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cyk7XG5cbiAgLy8gQ3VzdG9taXplIHRoZSBgOmZvY3VzYCBzdGF0ZSB0byBpbWl0YXRlIG5hdGl2ZSBXZWJLaXQgc3R5bGVzLlxuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtZm9jdXM7XG5cbiAgLy8gUGxhY2Vob2xkZXJcbiAgQGluY2x1ZGUgcGxhY2Vob2xkZXI7XG5cbiAgLy8gVW5zdHlsZSB0aGUgY2FyZXQgb24gYDxzZWxlY3Q+YHMgaW4gSUUxMCsuXG4gICY6Oi1tcy1leHBhbmQge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC8vIERpc2FibGVkIGFuZCByZWFkLW9ubHkgaW5wdXRzXG4gIC8vXG4gIC8vIEhUTUw1IHNheXMgdGhhdCBjb250cm9scyB1bmRlciBhIGZpZWxkc2V0ID4gbGVnZW5kOmZpcnN0LWNoaWxkIHdvbid0IGJlXG4gIC8vIGRpc2FibGVkIGlmIHRoZSBmaWVsZHNldCBpcyBkaXNhYmxlZC4gRHVlIHRvIGltcGxlbWVudGF0aW9uIGRpZmZpY3VsdHksIHdlXG4gIC8vIGRvbid0IGhvbm9yIHRoYXQgZWRnZSBjYXNlOyB3ZSBzdHlsZSB0aGVtIGFzIGRpc2FibGVkIGFueXdheS5cbiAgJltkaXNhYmxlZF0sXG4gICZbcmVhZG9ubHldLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnLWRpc2FibGVkO1xuICAgIG9wYWNpdHk6IDE7IC8vIGlPUyBmaXggZm9yIHVucmVhZGFibGUgZGlzYWJsZWQgY29udGVudDsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTE2NTVcbiAgfVxuXG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIHRleHRhcmVhJiB0byB0ZXh0YXJlYS5mb3JtLWNvbnRyb2xcbn1cblxuLy8gUmVzZXQgaGVpZ2h0IGZvciBgdGV4dGFyZWFgc1xudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi8vIFNlYXJjaCBpbnB1dHMgaW4gaU9TXG4vL1xuLy8gVGhpcyBvdmVycmlkZXMgdGhlIGV4dHJhIHJvdW5kZWQgY29ybmVycyBvbiBzZWFyY2ggaW5wdXRzIGluIGlPUyBzbyB0aGF0IG91clxuLy8gYC5mb3JtLWNvbnRyb2xgIGNsYXNzIGNhbiBwcm9wZXJseSBzdHlsZSB0aGVtLiBOb3RlIHRoYXQgdGhpcyBjYW5ub3Qgc2ltcGx5XG4vLyBiZSBhZGRlZCB0byBgLmZvcm0tY29udHJvbGAgYXMgaXQncyBub3Qgc3BlY2lmaWMgZW5vdWdoLiBGb3IgZGV0YWlscywgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNTg2LlxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5cbi8vIFNwZWNpYWwgc3R5bGVzIGZvciBpT1MgdGVtcG9yYWwgaW5wdXRzXG4vL1xuLy8gSW4gTW9iaWxlIFNhZmFyaSwgc2V0dGluZyBgZGlzcGxheTogYmxvY2tgIG9uIHRlbXBvcmFsIGlucHV0cyBjYXVzZXMgdGhlXG4vLyB0ZXh0IHdpdGhpbiB0aGUgaW5wdXQgdG8gYmVjb21lIHZlcnRpY2FsbHkgbWlzYWxpZ25lZC4gQXMgYSB3b3JrYXJvdW5kLCB3ZVxuLy8gc2V0IGEgcGl4ZWwgbGluZS1oZWlnaHQgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBoZWlnaHQgb2YgdGhlIGlucHV0LCBidXQgb25seVxuLy8gZm9yIFNhZmFyaS4gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzk4NDhcbi8vXG4vLyBOb3RlIHRoYXQgYXMgb2YgOS4zLCBpT1MgZG9lc24ndCBzdXBwb3J0IGB3ZWVrYC5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkge1xuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4gIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcbiAgaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcbiAgICAmLmZvcm0tY29udHJvbCB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1iYXNlO1xuICAgIH1cblxuICAgICYuaW5wdXQtc20sXG4gICAgLmlucHV0LWdyb3VwLXNtICYge1xuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gICAgfVxuXG4gICAgJi5pbnB1dC1sZyxcbiAgICAuaW5wdXQtZ3JvdXAtbGcgJiB7XG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1sYXJnZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBGb3JtIGdyb3Vwc1xuLy9cbi8vIERlc2lnbmVkIHRvIGhlbHAgd2l0aCB0aGUgb3JnYW5pemF0aW9uIGFuZCBzcGFjaW5nIG9mIHZlcnRpY2FsIGZvcm1zLiBGb3Jcbi8vIGhvcml6b250YWwgZm9ybXMsIHVzZSB0aGUgcHJlZGVmaW5lZCBncmlkIGNsYXNzZXMuXG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTtcbn1cblxuXG4vLyBDaGVja2JveGVzIGFuZCByYWRpb3Ncbi8vXG4vLyBJbmRlbnQgdGhlIGxhYmVscyB0byBwb3NpdGlvbiByYWRpb3MvY2hlY2tib3hlcyBhcyBoYW5naW5nIGNvbnRyb2xzLlxuXG4ucmFkaW8sXG4uY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGxhYmVsIHtcbiAgICBtaW4taGVpZ2h0OiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7IC8vIEVuc3VyZSB0aGUgaW5wdXQgZG9lc24ndCBqdW1wIHdoZW4gdGhlcmUgaXMgbm8gdGV4dFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLnJhZGlvLWlubGluZSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLmNoZWNrYm94LWlubGluZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXRvcDogNHB4IFxcOTtcbn1cblxuLnJhZGlvICsgLnJhZGlvLFxuLmNoZWNrYm94ICsgLmNoZWNrYm94IHtcbiAgbWFyZ2luLXRvcDogLTVweDsgLy8gTW92ZSB1cCBzaWJsaW5nIHJhZGlvcyBvciBjaGVja2JveGVzIGZvciB0aWdodGVyIHNwYWNpbmdcbn1cblxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIG9uIHNhbWUgbGluZVxuLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmFkaW8taW5saW5lICsgLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUgKyAuY2hlY2tib3gtaW5saW5lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IC8vIHNwYWNlIG91dCBjb25zZWN1dGl2ZSBpbmxpbmUgY29udHJvbHNcbn1cblxuLy8gQXBwbHkgc2FtZSBkaXNhYmxlZCBjdXJzb3IgdHdlYWsgYXMgZm9yIGlucHV0c1xuLy8gU29tZSBzcGVjaWFsIGNhcmUgaXMgbmVlZGVkIGJlY2F1c2UgPGxhYmVsPnMgZG9uJ3QgaW5oZXJpdCB0aGVpciBwYXJlbnQncyBgY3Vyc29yYC5cbi8vXG4vLyBOb3RlOiBOZWl0aGVyIHJhZGlvcyBub3IgY2hlY2tib3hlcyBjYW4gYmUgcmVhZG9ubHkuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAmW2Rpc2FibGVkXSxcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuLy8gVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBkaXJlY3RseSBvbiA8bGFiZWw+c1xuLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUge1xuICAmLmRpc2FibGVkLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG59XG4vLyBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIG9uIGVsZW1lbnRzIHdpdGggPGxhYmVsPiBkZXNjZW5kYW50c1xuLnJhZGlvLFxuLmNoZWNrYm94IHtcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGxhYmVsIHtcbiAgICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBTdGF0aWMgZm9ybSBjb250cm9sIHRleHRcbi8vXG4vLyBBcHBseSBjbGFzcyB0byBhIGBwYCBlbGVtZW50IHRvIG1ha2UgYW55IHN0cmluZyBvZiB0ZXh0IGFsaWduIHdpdGggbGFiZWxzIGluXG4vLyBhIGhvcml6b250YWwgZm9ybSBsYXlvdXQuXG5cbi5mb3JtLWNvbnRyb2wtc3RhdGljIHtcbiAgLy8gU2l6ZSBpdCBhcHByb3ByaWF0ZWx5IG5leHQgdG8gcmVhbCBmb3JtIGNvbnRyb2xzXG4gIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpO1xuICBwYWRkaW5nLWJvdHRvbTogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTtcbiAgLy8gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gYHBgXG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1pbi1oZWlnaHQ6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAkZm9udC1zaXplLWJhc2UpO1xuXG4gICYuaW5wdXQtbGcsXG4gICYuaW5wdXQtc20ge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIEJ1aWxkIG9uIGAuZm9ybS1jb250cm9sYCB3aXRoIG1vZGlmaWVyIGNsYXNzZXMgdG8gZGVjcmVhc2Ugb3IgaW5jcmVhc2UgdGhlXG4vLyBoZWlnaHQgYW5kIGZvbnQtc2l6ZSBvZiBmb3JtIGNvbnRyb2xzLlxuLy9cbi8vIFRoZSBgLmZvcm0tZ3JvdXAtKiBmb3JtLWNvbnRyb2xgIHZhcmlhdGlvbnMgYXJlIHNhZGx5IGR1cGxpY2F0ZWQgdG8gYXZvaWQgdGhlXG4vLyBpc3N1ZSBkb2N1bWVudGVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTUwNzQuXG5cbkBpbmNsdWRlIGlucHV0LXNpemUoJy5pbnB1dC1zbScsICRpbnB1dC1oZWlnaHQtc21hbGwsICRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsLCAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsLCAkZm9udC1zaXplLXNtYWxsLCAkbGluZS1oZWlnaHQtc21hbGwsICRpbnB1dC1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbi5mb3JtLWdyb3VwLXNtIHtcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtc21hbGw7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGw7XG4gIH1cbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICB9XG4gIHRleHRhcmVhLmZvcm0tY29udHJvbCxcbiAgc2VsZWN0W211bHRpcGxlXS5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICAgIG1pbi1oZWlnaHQ6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAkZm9udC1zaXplLXNtYWxsKTtcbiAgICBwYWRkaW5nOiAoJHBhZGRpbmctc21hbGwtdmVydGljYWwgKyAxKSAkcGFkZGluZy1zbWFsbC1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LXNtYWxsO1xuICB9XG59XG5cbkBpbmNsdWRlIGlucHV0LXNpemUoJy5pbnB1dC1sZycsICRpbnB1dC1oZWlnaHQtbGFyZ2UsICRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsLCAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsLCAkZm9udC1zaXplLWxhcmdlLCAkbGluZS1oZWlnaHQtbGFyZ2UsICRpbnB1dC1ib3JkZXItcmFkaXVzLWxhcmdlKTtcbi5mb3JtLWdyb3VwLWxnIHtcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtbGFyZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2U7XG4gIH1cbiAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICB9XG4gIHRleHRhcmVhLmZvcm0tY29udHJvbCxcbiAgc2VsZWN0W211bHRpcGxlXS5mb3JtLWNvbnRyb2wge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICAgIG1pbi1oZWlnaHQ6ICgkbGluZS1oZWlnaHQtY29tcHV0ZWQgKyAkZm9udC1zaXplLWxhcmdlKTtcbiAgICBwYWRkaW5nOiAoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgKyAxKSAkcGFkZGluZy1sYXJnZS1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWxhcmdlO1xuICB9XG59XG5cblxuLy8gRm9ybSBjb250cm9sIGZlZWRiYWNrIHN0YXRlc1xuLy9cbi8vIEFwcGx5IGNvbnRleHR1YWwgYW5kIHNlbWFudGljIHN0YXRlcyB0byBpbmRpdmlkdWFsIGZvcm0gY29udHJvbHMuXG5cbi5oYXMtZmVlZGJhY2sge1xuICAvLyBFbmFibGUgYWJzb2x1dGUgcG9zaXRpb25pbmdcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8vIEVuc3VyZSBpY29ucyBkb24ndCBvdmVybGFwIHRleHRcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZy1yaWdodDogKCRpbnB1dC1oZWlnaHQtYmFzZSAqIDEuMjUpO1xuICB9XG59XG4vLyBGZWVkYmFjayBpY29uIChyZXF1aXJlcyAuZ2x5cGhpY29uIGNsYXNzZXMpXG4uZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyOyAvLyBFbnN1cmUgaWNvbiBpcyBhYm92ZSBpbnB1dCBncm91cHNcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAkaW5wdXQtaGVpZ2h0LWJhc2U7XG4gIGhlaWdodDogJGlucHV0LWhlaWdodC1iYXNlO1xuICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1iYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmlucHV0LWxnICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5pbnB1dC1ncm91cC1sZyArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uZm9ybS1ncm91cC1sZyAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHdpZHRoOiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGFyZ2U7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxhcmdlO1xufVxuLmlucHV0LXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi5pbnB1dC1ncm91cC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2ssXG4uZm9ybS1ncm91cC1zbSAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHdpZHRoOiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xuICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc21hbGw7XG4gIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtYWxsO1xufVxuXG4vLyBGZWVkYmFjayBzdGF0ZXNcbi5oYXMtc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCRzdGF0ZS1zdWNjZXNzLXRleHQsICRzdGF0ZS1zdWNjZXNzLXRleHQsICRzdGF0ZS1zdWNjZXNzLWJnKTtcbn1cbi5oYXMtd2FybmluZyB7XG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCRzdGF0ZS13YXJuaW5nLXRleHQsICRzdGF0ZS13YXJuaW5nLXRleHQsICRzdGF0ZS13YXJuaW5nLWJnKTtcbn1cbi5oYXMtZXJyb3Ige1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtZGFuZ2VyLXRleHQsICRzdGF0ZS1kYW5nZXItdGV4dCwgJHN0YXRlLWRhbmdlci1iZyk7XG59XG5cbi8vIFJlcG9zaXRpb24gZmVlZGJhY2sgaWNvbiBpZiBpbnB1dCBoYXMgdmlzaWJsZSBsYWJlbCBhYm92ZVxuLmhhcy1mZWVkYmFjayBsYWJlbCB7XG5cbiAgJiB+IC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHRvcDogKCRsaW5lLWhlaWdodC1jb21wdXRlZCArIDUpOyAvLyBIZWlnaHQgb2YgdGhlIGBsYWJlbGAgYW5kIGl0cyBtYXJnaW5cbiAgfVxuICAmLnNyLW9ubHkgfiAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cblxuXG4vLyBIZWxwIHRleHRcbi8vXG4vLyBBcHBseSB0byBhbnkgZWxlbWVudCB5b3Ugd2lzaCB0byBjcmVhdGUgbGlnaHQgdGV4dCBmb3IgcGxhY2VtZW50IGltbWVkaWF0ZWx5XG4vLyBiZWxvdyBhIGZvcm0gY29udHJvbC4gVXNlIGZvciBnZW5lcmFsIGhlbHAsIGZvcm1hdHRpbmcsIG9yIGluc3RydWN0aW9uYWwgdGV4dC5cblxuLmhlbHAtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jazsgLy8gYWNjb3VudCBmb3IgYW55IGVsZW1lbnQgdXNpbmcgaGVscC1ibG9ja1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiBsaWdodGVuKCR0ZXh0LWNvbG9yLCAyNSUpOyAvLyBsaWdodGVuIHRoZSB0ZXh0IHNvbWUgZm9yIGNvbnRyYXN0XG59XG5cblxuLy8gSW5saW5lIGZvcm1zXG4vL1xuLy8gTWFrZSBmb3JtcyBhcHBlYXIgaW5saW5lKC1ibG9jaykgYnkgYWRkaW5nIHRoZSBgLmZvcm0taW5saW5lYCBjbGFzcy4gSW5saW5lXG4vLyBmb3JtcyBiZWdpbiBzdGFja2VkIG9uIGV4dHJhIHNtYWxsIChtb2JpbGUpIGRldmljZXMgYW5kIHRoZW4gZ28gaW5saW5lIHdoZW5cbi8vIHZpZXdwb3J0cyByZWFjaCA8NzY4cHguXG4vL1xuLy8gUmVxdWlyZXMgd3JhcHBpbmcgaW5wdXRzIGFuZCBsYWJlbHMgd2l0aCBgLmZvcm0tZ3JvdXBgIGZvciBwcm9wZXIgZGlzcGxheSBvZlxuLy8gZGVmYXVsdCBIVE1MIGZvcm0gY29udHJvbHMgYW5kIG91ciBjdXN0b20gZm9ybSBjb250cm9scyAoZS5nLiwgaW5wdXQgZ3JvdXBzKS5cbi8vXG4vLyBIZWFkcyB1cCEgVGhpcyBpcyBtaXhpbi1lZCBpbnRvIGAubmF2YmFyLWZvcm1gIGluIG5hdmJhcnMubGVzcy5cblxuLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGZyb20gYC5mb3JtLWlubGluZWAgZm9yIGxpYnNhc3MgY29tcGF0aWJpbGl0eVxuQG1peGluIGZvcm0taW5saW5lIHtcblxuICAvLyBLaWNrIGluIHRoZSBpbmxpbmVcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgLy8gSW5saW5lLWJsb2NrIGFsbCB0aGUgdGhpbmdzIGZvciBcImlubGluZVwiXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gSW4gbmF2YmFyLWZvcm0sIGFsbG93IGZvbGtzIHRvICpub3QqIHVzZSBgLmZvcm0tZ3JvdXBgXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogYXV0bzsgLy8gUHJldmVudCBsYWJlbHMgZnJvbSBzdGFja2luZyBhYm92ZSBpbnB1dHMgaW4gYC5mb3JtLWdyb3VwYFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN0YXRpYyBjb250cm9scyBiZWhhdmUgbGlrZSByZWd1bGFyIG9uZXNcbiAgICAuZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgIC5pbnB1dC1ncm91cC1hZGRvbixcbiAgICAgIC5pbnB1dC1ncm91cC1idG4sXG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5wdXQgZ3JvdXBzIG5lZWQgdGhhdCAxMDAlIHdpZHRoIHRob3VnaFxuICAgIC5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luIG9uIHJhZGlvcy9jaGVja2JveGVzIHRoYXQgd2VyZSB1c2VkIGZvciBzdGFja2luZywgYW5kXG4gICAgLy8gdGhlbiB1bmRvIHRoZSBmbG9hdGluZyBvZiByYWRpb3MgYW5kIGNoZWNrYm94ZXMgdG8gbWF0Y2guXG4gICAgLnJhZGlvLFxuICAgIC5jaGVja2JveCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAgIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLy8gUmUtb3ZlcnJpZGUgdGhlIGZlZWRiYWNrIGljb24uXG4gICAgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbn1cbi8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBhcyBgQG1peGluIGZvcm0taW5saW5lYCBmb3IgbGlic2FzcyBjb21wYXRpYmlsaXR5XG4uZm9ybS1pbmxpbmUge1xuICBAaW5jbHVkZSBmb3JtLWlubGluZTtcbn1cblxuXG5cbi8vIEhvcml6b250YWwgZm9ybXNcbi8vXG4vLyBIb3Jpem9udGFsIGZvcm1zIGFyZSBidWlsdCBvbiBncmlkIGNsYXNzZXMgYW5kIGFsbG93IHlvdSB0byBjcmVhdGUgZm9ybXMgd2l0aFxuLy8gbGFiZWxzIG9uIHRoZSBsZWZ0IGFuZCBpbnB1dHMgb24gdGhlIHJpZ2h0LlxuXG4uZm9ybS1ob3Jpem9udGFsIHtcblxuICAvLyBDb25zaXN0ZW50IHZlcnRpY2FsIGFsaWdubWVudCBvZiByYWRpb3MgYW5kIGNoZWNrYm94ZXNcbiAgLy9cbiAgLy8gTGFiZWxzIGFsc28gZ2V0IHNvbWUgcmVzZXQgc3R5bGVzLCBidXQgdGhhdCBpcyBzY29wZWQgdG8gYSBtZWRpYSBxdWVyeSBiZWxvdy5cbiAgLnJhZGlvLFxuICAuY2hlY2tib3gsXG4gIC5yYWRpby1pbmxpbmUsXG4gIC5jaGVja2JveC1pbmxpbmUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKTsgLy8gRGVmYXVsdCBwYWRkaW5nIHBsdXMgYSBib3JkZXJcbiAgfVxuICAvLyBBY2NvdW50IGZvciBwYWRkaW5nIHdlJ3JlIGFkZGluZyB0byBlbnN1cmUgdGhlIGFsaWdubWVudCBhbmQgb2YgaGVscCB0ZXh0XG4gIC8vIGFuZCBvdGhlciBjb250ZW50IGJlbG93IGl0ZW1zXG4gIC5yYWRpbyxcbiAgLmNoZWNrYm94IHtcbiAgICBtaW4taGVpZ2h0OiAoJGxpbmUtaGVpZ2h0LWNvbXB1dGVkICsgKCRwYWRkaW5nLWJhc2UtdmVydGljYWwgKyAxKSk7XG4gIH1cblxuICAvLyBNYWtlIGZvcm0gZ3JvdXBzIGJlaGF2ZSBsaWtlIHJvd3NcbiAgLmZvcm0tZ3JvdXAge1xuICAgIEBpbmNsdWRlIG1ha2Utcm93O1xuICB9XG5cbiAgLy8gUmVzZXQgc3BhY2luZyBhbmQgcmlnaHQgYWxpZ24gbGFiZWxzLCBidXQgc2NvcGUgdG8gbWVkaWEgcXVlcmllcyBzbyB0aGF0XG4gIC8vIGxhYmVscyBvbiBuYXJyb3cgdmlld3BvcnRzIHN0YWNrIHRoZSBzYW1lIGFzIGEgZGVmYXVsdCBmb3JtIGV4YW1wbGUuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIC5jb250cm9sLWxhYmVsIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAoJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCArIDEpOyAvLyBEZWZhdWx0IHBhZGRpbmcgcGx1cyBhIGJvcmRlclxuICAgIH1cbiAgfVxuXG4gIC8vIFZhbGlkYXRpb24gc3RhdGVzXG4gIC8vXG4gIC8vIFJlcG9zaXRpb24gdGhlIGljb24gYmVjYXVzZSBpdCdzIG5vdyB3aXRoaW4gYSBncmlkIGNvbHVtbiBhbmQgY29sdW1ucyBoYXZlXG4gIC8vIGBwb3NpdGlvbjogcmVsYXRpdmU7YCBvbiB0aGVtLiBBbHNvIGFjY291bnRzIGZvciB0aGUgZ3JpZCBndXR0ZXIgcGFkZGluZy5cbiAgLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICByaWdodDogZmxvb3IoKCRncmlkLWd1dHRlci13aWR0aCAvIDIpKTtcbiAgfVxuXG4gIC8vIEZvcm0gZ3JvdXAgc2l6ZXNcbiAgLy9cbiAgLy8gUXVpY2sgdXRpbGl0eSBjbGFzcyBmb3IgYXBwbHlpbmcgYC5pbnB1dC1sZ2AgYW5kIGAuaW5wdXQtc21gIHN0eWxlcyB0byB0aGVcbiAgLy8gaW5wdXRzIGFuZCBsYWJlbHMgd2l0aGluIGEgYC5mb3JtLWdyb3VwYC5cbiAgLmZvcm0tZ3JvdXAtbGcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgICAgLmNvbnRyb2wtbGFiZWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLWxhcmdlLXZlcnRpY2FsICsgMSk7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sYXJnZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZvcm0tZ3JvdXAtc20ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgICAgLmNvbnRyb2wtbGFiZWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogKCRwYWRkaW5nLXNtYWxsLXZlcnRpY2FsICsgMSk7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBCdXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2Ugc3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBGb3IgaW5wdXQuYnRuXG4gIGZvbnQtd2VpZ2h0OiAkYnRuLWZvbnQtd2VpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTRcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCRwYWRkaW5nLWJhc2UtdmVydGljYWwsICRwYWRkaW5nLWJhc2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1iYXNlLCAkbGluZS1oZWlnaHQtYmFzZSwgJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2UpO1xuICBAaW5jbHVkZSB1c2VyLXNlbGVjdChub25lKTtcblxuICAmLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBAaW5jbHVkZSB0YWItZm9jdXM7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgY29sb3I6ICRidG4tZGVmYXVsdC1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLC4xMjUpKTtcbiAgfVxuXG4gICYuZGlzYWJsZWQsXG4gICZbZGlzYWJsZWRdLFxuICBmaWVsZHNldFtkaXNhYmxlZF0gJiB7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIEBpbmNsdWRlIG9wYWNpdHkoLjY1KTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmIHRvIGEuYnRuXG59XG5cbmEuYnRuIHtcbiAgJi5kaXNhYmxlZCxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvLyBGdXR1cmUtcHJvb2YgZGlzYWJsaW5nIG9mIGNsaWNrcyBvbiBgPGE+YCBlbGVtZW50c1xuICB9XG59XG5cblxuLy8gQWx0ZXJuYXRlIGJ1dHRvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5idG4tZGVmYXVsdCB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tZGVmYXVsdC1jb2xvciwgJGJ0bi1kZWZhdWx0LWJnLCAkYnRuLWRlZmF1bHQtYm9yZGVyKTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tcHJpbWFyeS1jb2xvciwgJGJ0bi1wcmltYXJ5LWJnLCAkYnRuLXByaW1hcnktYm9yZGVyKTtcbn1cbi8vIFN1Y2Nlc3MgYXBwZWFycyBhcyBncmVlblxuLmJ0bi1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1zdWNjZXNzLWNvbG9yLCAkYnRuLXN1Y2Nlc3MtYmcsICRidG4tc3VjY2Vzcy1ib3JkZXIpO1xufVxuLy8gSW5mbyBhcHBlYXJzIGFzIGJsdWUtZ3JlZW5cbi5idG4taW5mbyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4taW5mby1jb2xvciwgJGJ0bi1pbmZvLWJnLCAkYnRuLWluZm8tYm9yZGVyKTtcbn1cbi8vIFdhcm5pbmcgYXBwZWFycyBhcyBvcmFuZ2Vcbi5idG4td2FybmluZyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4td2FybmluZy1jb2xvciwgJGJ0bi13YXJuaW5nLWJnLCAkYnRuLXdhcm5pbmctYm9yZGVyKTtcbn1cbi8vIERhbmdlciBhbmQgZXJyb3IgYXBwZWFyIGFzIHJlZFxuLmJ0bi1kYW5nZXIge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLWRhbmdlci1jb2xvciwgJGJ0bi1kYW5nZXItYmcsICRidG4tZGFuZ2VyLWJvcmRlcik7XG59XG5cblxuLy8gTGluayBidXR0b25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIE1ha2UgYSBidXR0b24gbG9vayBhbmQgYmVoYXZlIGxpa2UgYSBsaW5rXG4uYnRuLWxpbmsge1xuICBjb2xvcjogJGxpbmstY29sb3I7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgJixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogJGxpbmstaG92ZXItZGVjb3JhdGlvbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmW2Rpc2FibGVkXSxcbiAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEJ1dHRvbiBTaXplc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1sZyB7XG4gIC8vIGxpbmUtaGVpZ2h0OiBlbnN1cmUgZXZlbi1udW1iZXJlZCBoZWlnaHQgb2YgYnV0dG9uIG5leHQgdG8gbGFyZ2UgaW5wdXRcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmctbGFyZ2UtdmVydGljYWwsICRwYWRkaW5nLWxhcmdlLWhvcml6b250YWwsICRmb250LXNpemUtbGFyZ2UsICRsaW5lLWhlaWdodC1sYXJnZSwgJGJ0bi1ib3JkZXItcmFkaXVzLWxhcmdlKTtcbn1cbi5idG4tc20ge1xuICAvLyBsaW5lLWhlaWdodDogZW5zdXJlIHByb3BlciBoZWlnaHQgb2YgYnV0dG9uIG5leHQgdG8gc21hbGwgaW5wdXRcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHBhZGRpbmctc21hbGwtdmVydGljYWwsICRwYWRkaW5nLXNtYWxsLWhvcml6b250YWwsICRmb250LXNpemUtc21hbGwsICRsaW5lLWhlaWdodC1zbWFsbCwgJGJ0bi1ib3JkZXItcmFkaXVzLXNtYWxsKTtcbn1cbi5idG4teHMge1xuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkcGFkZGluZy14cy12ZXJ0aWNhbCwgJHBhZGRpbmcteHMtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkYnRuLWJvcmRlci1yYWRpdXMtc21hbGwpO1xufVxuXG5cbi8vIEJsb2NrIGJ1dHRvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gVmVydGljYWxseSBzcGFjZSBvdXQgbXVsdGlwbGUgYmxvY2sgYnV0dG9uc1xuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi8vIFNwZWNpZmljaXR5IG92ZXJyaWRlc1xuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAmLmJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi8vXG4vLyBDb21wb25lbnQgYW5pbWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gSGVhZHMgdXAhXG4vL1xuLy8gV2UgZG9uJ3QgdXNlIHRoZSBgLm9wYWNpdHkoKWAgbWl4aW4gaGVyZSBzaW5jZSBpdCBjYXVzZXMgYSBidWcgd2l0aCB0ZXh0XG4vLyBmaWVsZHMgaW4gSUU3LTguIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMzU1Mi5cblxuLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKG9wYWNpdHkgLjE1cyBsaW5lYXIpO1xuICAmLmluIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5jb2xsYXBzZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJi5pbiAgICAgIHsgZGlzcGxheTogYmxvY2s7IH1cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIHRyJi5pbiB0byB0ci5jb2xsYXBzZS5pblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgdGJvZHkmLmluIHRvIHRib2R5LmNvbGxhcHNlLmluXG59XG5cbnRyLmNvbGxhcHNlLmluICAgIHsgZGlzcGxheTogdGFibGUtcm93OyB9XG5cbnRib2R5LmNvbGxhcHNlLmluIHsgZGlzcGxheTogdGFibGUtcm93LWdyb3VwOyB9XG5cbi5jb2xsYXBzaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tcHJvcGVydHkoaGVpZ2h0LCB2aXNpYmlsaXR5KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbi1kdXJhdGlvbiguMzVzKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oZWFzZSk7XG59XG4iLCIvL1xuLy8gRHJvcGRvd24gbWVudXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gRHJvcGRvd24gYXJyb3cvY2FyZXRcbi5jYXJldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXRvcDogICAkY2FyZXQtd2lkdGgtYmFzZSBkYXNoZWQ7XG4gIGJvcmRlci10b3A6ICAgJGNhcmV0LXdpZHRoLWJhc2Ugc29saWQgXFw5OyAvLyBJRThcbiAgYm9yZGVyLXJpZ2h0OiAkY2FyZXQtd2lkdGgtYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6ICAkY2FyZXQtd2lkdGgtYmFzZSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLy8gVGhlIGRyb3Bkb3duIHdyYXBwZXIgKGRpdilcbi5kcm9wdXAsXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8vIFByZXZlbnQgdGhlIGZvY3VzIG9uIHRoZSBkcm9wZG93biB0b2dnbGUgd2hlbiBjbG9zaW5nIGRyb3Bkb3duc1xuLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8vIFRoZSBkcm9wZG93biBtZW51ICh1bClcbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtZHJvcGRvd247XG4gIGRpc3BsYXk6IG5vbmU7IC8vIG5vbmUgYnkgZGVmYXVsdCwgYnV0IGJsb2NrIG9uIFwib3BlblwiIG9mIHRoZSBtZW51XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAycHggMCAwOyAvLyBvdmVycmlkZSBkZWZhdWx0IHVsXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyAvLyBFbnN1cmVzIHByb3BlciBhbGlnbm1lbnQgaWYgcGFyZW50IGhhcyBpdCBjaGFuZ2VkIChlLmcuLCBtb2RhbCBmb290ZXIpXG4gIGJhY2tncm91bmQtY29sb3I6ICRkcm9wZG93bi1iZztcbiAgYm9yZGVyOiAxcHggc29saWQgJGRyb3Bkb3duLWZhbGxiYWNrLWJvcmRlcjsgLy8gSUU4IGZhbGxiYWNrXG4gIGJvcmRlcjogMXB4IHNvbGlkICRkcm9wZG93bi1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcblxuICAvLyBBbGlnbnMgdGhlIGRyb3Bkb3duIG1lbnUgdG8gcmlnaHRcbiAgLy9cbiAgLy8gRGVwcmVjYXRlZCBhcyBvZiAzLjEuMCBpbiBmYXZvciBvZiBgLmRyb3Bkb3duLW1lbnUtW2Rpcl1gXG4gICYucHVsbC1yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgfVxuXG4gIC8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gaHIpIHdpdGhpbiB0aGUgZHJvcGRvd25cbiAgLmRpdmlkZXIge1xuICAgIEBpbmNsdWRlIG5hdi1kaXZpZGVyKCRkcm9wZG93bi1kaXZpZGVyLWJnKTtcbiAgfVxuXG4gIC8vIExpbmtzIHdpdGhpbiB0aGUgZHJvcGRvd24gbWVudVxuICA+IGxpID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogM3B4IDIwcHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgY29sb3I6ICRkcm9wZG93bi1saW5rLWNvbG9yO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8vIHByZXZlbnQgbGlua3MgZnJvbSByYW5kb21seSBicmVha2luZyBvbnRvIG5ldyBsaW5lc1xuICB9XG59XG5cbi8vIEhvdmVyL0ZvY3VzIHN0YXRlXG4uZHJvcGRvd24tbWVudSA+IGxpID4gYSB7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyb3Bkb3duLWxpbmstaG92ZXItYmc7XG4gIH1cbn1cblxuLy8gQWN0aXZlIHN0YXRlXG4uZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhIHtcbiAgJixcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJvcGRvd24tbGluay1hY3RpdmUtYmc7XG4gIH1cbn1cblxuLy8gRGlzYWJsZWQgc3RhdGVcbi8vXG4vLyBHcmF5IG91dCB0ZXh0IGFuZCBlbnN1cmUgdGhlIGhvdmVyL2ZvY3VzIHN0YXRlIHJlbWFpbnMgZ3JheVxuXG4uZHJvcGRvd24tbWVudSA+IC5kaXNhYmxlZCA+IGEge1xuICAmLFxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAvLyBOdWtlIGhvdmVyL2ZvY3VzIGVmZmVjdHNcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlbW92ZSBDU1MgZ3JhZGllbnRcbiAgICBAaW5jbHVkZSByZXNldC1maWx0ZXI7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICB9XG59XG5cbi8vIE9wZW4gc3RhdGUgZm9yIHRoZSBkcm9wZG93blxuLm9wZW4ge1xuICAvLyBTaG93IHRoZSBtZW51XG4gID4gLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBvdXRsaW5lIHdoZW4gOmZvY3VzIGlzIHRyaWdnZXJlZFxuICA+IGEge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbn1cblxuLy8gTWVudSBwb3NpdGlvbmluZ1xuLy9cbi8vIEFkZCBleHRyYSBjbGFzcyB0byBgLmRyb3Bkb3duLW1lbnVgIHRvIGZsaXAgdGhlIGFsaWdubWVudCBvZiB0aGUgZHJvcGRvd25cbi8vIG1lbnUgd2l0aCB0aGUgcGFyZW50LlxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICBsZWZ0OiBhdXRvOyAvLyBSZXNldCB0aGUgZGVmYXVsdCBmcm9tIGAuZHJvcGRvd24tbWVudWBcbiAgcmlnaHQ6IDA7XG59XG4vLyBXaXRoIHYzLCB3ZSBlbmFibGVkIGF1dG8tZmxpcHBpbmcgaWYgeW91IGhhdmUgYSBkcm9wZG93biB3aXRoaW4gYSByaWdodFxuLy8gYWxpZ25lZCBuYXYgY29tcG9uZW50LiBUbyBlbmFibGUgdGhlIHVuZG9pbmcgb2YgdGhhdCwgd2UgcHJvdmlkZSBhbiBvdmVycmlkZVxuLy8gdG8gcmVzdG9yZSB0aGUgZGVmYXVsdCBkcm9wZG93biBtZW51IGFsaWdubWVudC5cbi8vXG4vLyBUaGlzIGlzIG9ubHkgZm9yIGxlZnQtYWxpZ25pbmcgYSBkcm9wZG93biBtZW51IHdpdGhpbiBhIGAubmF2YmFyLXJpZ2h0YCBvclxuLy8gYC5wdWxsLXJpZ2h0YCBuYXYgY29tcG9uZW50LlxuLmRyb3Bkb3duLW1lbnUtbGVmdCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4vLyBEcm9wZG93biBzZWN0aW9uIGhlYWRlcnNcbi5kcm9wZG93bi1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbWFsbDtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJGRyb3Bkb3duLWhlYWRlci1jb2xvcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLy8gYXMgd2l0aCA+IGxpID4gYVxufVxuXG4vLyBCYWNrZHJvcCB0byBjYXRjaCBib2R5IGNsaWNrcyBvbiBtb2JpbGUsIGV0Yy5cbi5kcm9wZG93bi1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAoJHppbmRleC1kcm9wZG93biAtIDEwKTtcbn1cblxuLy8gUmlnaHQgYWxpZ25lZCBkcm9wZG93bnNcbi5wdWxsLXJpZ2h0ID4gLmRyb3Bkb3duLW1lbnUge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuLy8gQWxsb3cgZm9yIGRyb3Bkb3ducyB0byBnbyBib3R0b20gdXAgKGFrYSwgZHJvcHVwLW1lbnUpXG4vL1xuLy8gSnVzdCBhZGQgLmRyb3B1cCBhZnRlciB0aGUgc3RhbmRhcmQgLmRyb3Bkb3duIGNsYXNzIGFuZCB5b3UncmUgc2V0LCBicm8uXG4vLyBUT0RPOiBhYnN0cmFjdCB0aGlzIHNvIHRoYXQgdGhlIG5hdmJhciBmaXhlZCBzdHlsZXMgYXJlIG5vdCBwbGFjZWQgaGVyZT9cblxuLmRyb3B1cCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIC5kcm9wZG93biB7XG4gIC8vIFJldmVyc2UgdGhlIGNhcmV0XG4gIC5jYXJldCB7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItYm90dG9tOiAkY2FyZXQtd2lkdGgtYmFzZSBkYXNoZWQ7XG4gICAgYm9yZGVyLWJvdHRvbTogJGNhcmV0LXdpZHRoLWJhc2Ugc29saWQgXFw5OyAvLyBJRThcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4gIC8vIERpZmZlcmVudCBwb3NpdGlvbmluZyBmb3IgYm90dG9tIHVwIG1lbnVcbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG5cblxuLy8gQ29tcG9uZW50IGFsaWdubWVudFxuLy9cbi8vIFJlaXRlcmF0ZSBwZXIgbmF2YmFyLmxlc3MgYW5kIHRoZSBtb2RpZmllZCBjb21wb25lbnQgYWxpZ25tZW50IHRoZXJlLlxuXG5AbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAubmF2YmFyLXJpZ2h0IHtcbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICByaWdodDogMDsgbGVmdDogYXV0bztcbiAgICB9XG4gICAgLy8gTmVjZXNzYXJ5IGZvciBvdmVycmlkZXMgb2YgdGhlIGRlZmF1bHQgcmlnaHQgYWxpZ25lZCBtZW51LlxuICAgIC8vIFdpbGwgcmVtb3ZlIGNvbWUgdjQgaW4gYWxsIGxpa2VsaWhvb2QuXG4gICAgLmRyb3Bkb3duLW1lbnUtbGVmdCB7XG4gICAgICBsZWZ0OiAwOyByaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBCdXR0b24gZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNYWtlIHRoZSBkaXYgYmVoYXZlIGxpa2UgYSBidXR0b25cbi5idG4tZ3JvdXAsXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8vIG1hdGNoIC5idG4gYWxpZ25tZW50IGdpdmVuIGZvbnQtc2l6ZSBoYWNrIGFib3ZlXG4gID4gLmJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIEJyaW5nIHRoZSBcImFjdGl2ZVwiIGJ1dHRvbiB0byB0aGUgZnJvbnRcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUsXG4gICAgJi5hY3RpdmUge1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cbn1cblxuLy8gUHJldmVudCBkb3VibGUgYm9yZGVycyB3aGVuIGJ1dHRvbnMgYXJlIG5leHQgdG8gZWFjaCBvdGhlclxuLmJ0bi1ncm91cCB7XG4gIC5idG4gKyAuYnRuLFxuICAuYnRuICsgLmJ0bi1ncm91cCxcbiAgLmJ0bi1ncm91cCArIC5idG4sXG4gIC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxufVxuXG4vLyBPcHRpb25hbDogR3JvdXAgbXVsdGlwbGUgYnV0dG9uIGdyb3VwcyB0b2dldGhlciBmb3IgYSB0b29sYmFyXG4uYnRuLXRvb2xiYXIge1xuICBtYXJnaW4tbGVmdDogLTVweDsgLy8gT2Zmc2V0IHRoZSBmaXJzdCBjaGlsZCdzIG1hcmdpblxuICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICAuYnRuLFxuICAuYnRuLWdyb3VwLFxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwLFxuICA+IC5pbnB1dC1ncm91cCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4uYnRuLWdyb3VwID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi8vIFNldCBjb3JuZXJzIGluZGl2aWR1YWwgYmVjYXVzZSBzb21ldGltZXMgYSBzaW5nbGUgYnV0dG9uIGNhbiBiZSBpbiBhIC5idG4tZ3JvdXAgYW5kIHdlIG5lZWQgOmZpcnN0LWNoaWxkIGFuZCA6bGFzdC1jaGlsZCB0byBib3RoIG1hdGNoXG4uYnRuLWdyb3VwID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICAmOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApO1xuICB9XG59XG4vLyBOZWVkIC5kcm9wZG93bi10b2dnbGUgc2luY2UgOmxhc3QtY2hpbGQgZG9lc24ndCBhcHBseSwgZ2l2ZW4gdGhhdCBhIC5kcm9wZG93bi1tZW51IGlzIHVzZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgaXRcbi5idG4tZ3JvdXAgPiAuYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCksXG4uYnRuLWdyb3VwID4gLmRyb3Bkb3duLXRvZ2dsZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcbn1cblxuLy8gQ3VzdG9tIGVkaXRzIGZvciBpbmNsdWRpbmcgYnRuLWdyb3VwcyB3aXRoaW4gYnRuLWdyb3VwcyAodXNlZnVsIGZvciBpbmNsdWRpbmcgZHJvcGRvd24gYnV0dG9ucyB3aXRoaW4gYSBidG4tZ3JvdXApXG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gID4gLmJ0bjpsYXN0LWNoaWxkLFxuICA+IC5kcm9wZG93bi10b2dnbGUge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoMCk7XG4gIH1cbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuXG4vLyBPbiBhY3RpdmUgYW5kIG9wZW4sIGRvbid0IHNob3cgb3V0bGluZVxuLmJ0bi1ncm91cCAuZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSxcbi5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgb3V0bGluZTogMDtcbn1cblxuXG4vLyBTaXppbmdcbi8vXG4vLyBSZW1peCB0aGUgZGVmYXVsdCBidXR0b24gc2l6aW5nIGNsYXNzZXMgaW50byBuZXcgb25lcyBmb3IgZWFzaWVyIG1hbmlwdWxhdGlvbi5cblxuLmJ0bi1ncm91cC14cyA+IC5idG4geyBAZXh0ZW5kIC5idG4teHM7IH1cbi5idG4tZ3JvdXAtc20gPiAuYnRuIHsgQGV4dGVuZCAuYnRuLXNtOyB9XG4uYnRuLWdyb3VwLWxnID4gLmJ0biB7IEBleHRlbmQgLmJ0bi1sZzsgfVxuXG5cbi8vIFNwbGl0IGJ1dHRvbiBkcm9wZG93bnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gR2l2ZSB0aGUgbGluZSBiZXR3ZWVuIGJ1dHRvbnMgc29tZSBkZXB0aFxuLmJ0bi1ncm91cCA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWxnICsgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLy8gVGhlIGNsaWNrYWJsZSBidXR0b24gZm9yIHRvZ2dsaW5nIHRoZSBtZW51XG4vLyBSZW1vdmUgdGhlIGdyYWRpZW50IGFuZCBzZXQgdGhlIHNhbWUgaW5zZXQgc2hhZG93IGFzIHRoZSA6YWN0aXZlIHN0YXRlXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuXG4gIC8vIFNob3cgbm8gc2hhZG93IGZvciBgLmJ0bi1saW5rYCBzaW5jZSBpdCBoYXMgbm8gb3RoZXIgYnV0dG9uIHN0eWxlcy5cbiAgJi5idG4tbGluayB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG5cbi8vIFJlcG9zaXRpb24gdGhlIGNhcmV0XG4uYnRuIC5jYXJldCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLy8gQ2FyZXRzIGluIG90aGVyIGJ1dHRvbiBzaXplc1xuLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6ICRjYXJldC13aWR0aC1sYXJnZSAkY2FyZXQtd2lkdGgtbGFyZ2UgMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi8vIFVwc2lkZSBkb3duIGNhcmV0cyBmb3IgLmRyb3B1cFxuLmRyb3B1cCAuYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogMCAkY2FyZXQtd2lkdGgtbGFyZ2UgJGNhcmV0LXdpZHRoLWxhcmdlO1xufVxuXG5cbi8vIFZlcnRpY2FsIGJ1dHRvbiBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwLFxuICA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBDbGVhciBmbG9hdHMgc28gZHJvcGRvd24gbWVudXMgY2FuIGJlIHByb3Blcmx5IHBsYWNlZFxuICA+IC5idG4tZ3JvdXAge1xuICAgIEBpbmNsdWRlIGNsZWFyZml4O1xuICAgID4gLmJ0biB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gIH1cblxuICA+IC5idG4gKyAuYnRuLFxuICA+IC5idG4gKyAuYnRuLWdyb3VwLFxuICA+IC5idG4tZ3JvdXAgKyAuYnRuLFxuICA+IC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuIHtcbiAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gICY6Zmlyc3QtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2UpO1xuICAgIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKDApO1xuICB9XG4gICY6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGJ0bi1ib3JkZXItcmFkaXVzLWJhc2UpO1xuICB9XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgPiAuYnRuOmxhc3QtY2hpbGQsXG4gID4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoMCk7XG4gIH1cbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG59XG5cblxuLy8gSnVzdGlmaWVkIGJ1dHRvbiBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmJ0bi1ncm91cC1qdXN0aWZpZWQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gID4gLmJ0bixcbiAgPiAuYnRuLWdyb3VwIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiAxJTtcbiAgfVxuICA+IC5idG4tZ3JvdXAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICA+IC5idG4tZ3JvdXAgLmRyb3Bkb3duLW1lbnUge1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cblxuXG4vLyBDaGVja2JveCBhbmQgcmFkaW8gb3B0aW9uc1xuLy9cbi8vIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGJyb3dzZXIncyBmb3JtIHZhbGlkYXRpb24gZmVlZGJhY2ssIHBvd2VyZWQgYnkgdGhlXG4vLyBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgd2UgaGF2ZSB0byBcImhpZGVcIiB0aGUgaW5wdXRzIHZpYSBgY2xpcGAuIFdlIGNhbm5vdCB1c2Vcbi8vIGBkaXNwbGF5OiBub25lO2Agb3IgYHZpc2liaWxpdHk6IGhpZGRlbjtgIGFzIHRoYXQgYWxzbyBoaWRlcyB0aGUgcG9wb3Zlci5cbi8vIFNpbXBseSB2aXN1YWxseSBoaWRpbmcgdGhlIGlucHV0cyB2aWEgYG9wYWNpdHlgIHdvdWxkIGxlYXZlIHRoZW0gY2xpY2thYmxlIGluXG4vLyBjZXJ0YWluIGNhc2VzIHdoaWNoIGlzIHByZXZlbnRlZCBieSB1c2luZyBgY2xpcGAgYW5kIGBwb2ludGVyLWV2ZW50c2AuXG4vLyBUaGlzIHdheSwgd2UgZW5zdXJlIGEgRE9NIGVsZW1lbnQgaXMgdmlzaWJsZSB0byBwb3NpdGlvbiB0aGUgcG9wb3ZlciBmcm9tLlxuLy9cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMjc5NCBhbmRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzE0NTU5IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdIHtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBJbnB1dCBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEJhc2Ugc3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uaW5wdXQtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIEZvciBkcm9wZG93bnNcbiAgZGlzcGxheTogdGFibGU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7IC8vIHByZXZlbnQgaW5wdXQgZ3JvdXBzIGZyb20gaW5oZXJpdGluZyBib3JkZXIgc3R5bGVzIGZyb20gdGFibGUgY2VsbHMgd2hlbiBwbGFjZWQgd2l0aGluIGEgdGFibGVcblxuICAvLyBVbmRvIHBhZGRpbmcgYW5kIGZsb2F0IG9mIGdyaWQgY2xhc3Nlc1xuICAmW2NsYXNzKj1cImNvbC1cIl0ge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIGlucHV0IGlzIGFsd2F5cyBhYm92ZSB0aGUgKmFwcGVuZGVkKiBhZGRvbiBidXR0b24gZm9yXG4gICAgLy8gcHJvcGVyIGJvcmRlciBjb2xvcnMuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAvLyBJRTkgZnViYXJzIHRoZSBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgaW4gdGV4dCBpbnB1dHMgYW5kIHRoZSBhcnJvd3Mgb25cbiAgICAvLyBzZWxlY3QgZWxlbWVudHMgaW4gaW5wdXQgZ3JvdXBzLiBUbyBmaXggaXQsIHdlIGZsb2F0IHRoZSBpbnB1dC4gRGV0YWlsczpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNTYxI2lzc3VlY29tbWVudC0yODkzNjg1NVxuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgei1pbmRleDogMztcbiAgICB9XG4gIH1cbn1cblxuLy8gU2l6aW5nIG9wdGlvbnNcbi8vXG4vLyBSZW1peCB0aGUgZGVmYXVsdCBmb3JtIGNvbnRyb2wgc2l6aW5nIGNsYXNzZXMgaW50byBuZXcgb25lcyBmb3IgZWFzaWVyXG4vLyBtYW5pcHVsYXRpb24uXG5cbi5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIEBleHRlbmQgLmlucHV0LWxnO1xufVxuLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1idG4gPiAuYnRuIHtcbiAgQGV4dGVuZCAuaW5wdXQtc207XG59XG5cblxuLy8gRGlzcGxheSBhcyB0YWJsZS1jZWxsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4uaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtYnRuLFxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXG4gICY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuLy8gQWRkb24gYW5kIGFkZG9uIHdyYXBwZXIgZm9yIGJ1dHRvbnNcbi5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1idG4ge1xuICB3aWR0aDogMSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8vIE1hdGNoIHRoZSBpbnB1dHNcbn1cblxuLy8gVGV4dCBpbnB1dCBncm91cHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6ICRwYWRkaW5nLWJhc2UtdmVydGljYWwgJHBhZGRpbmctYmFzZS1ob3Jpem9udGFsO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAkaW5wdXQtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWdyb3VwLWFkZG9uLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcblxuICAvLyBTaXppbmdcbiAgJi5pbnB1dC1zbSB7XG4gICAgcGFkZGluZzogJHBhZGRpbmctc21hbGwtdmVydGljYWwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMtc21hbGw7XG4gIH1cbiAgJi5pbnB1dC1sZyB7XG4gICAgcGFkZGluZzogJHBhZGRpbmctbGFyZ2UtdmVydGljYWwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbDtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGFyZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXMtbGFyZ2U7XG4gIH1cblxuICAvLyBOdWtlIGRlZmF1bHQgbWFyZ2lucyBmcm9tIGNoZWNrYm94ZXMgYW5kIHJhZGlvcyB0byB2ZXJ0aWNhbGx5IGNlbnRlciB3aXRoaW4uXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi8vIFJlc2V0IHJvdW5kZWQgY29ybmVyc1xuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLWdyb3VwID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bGFzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXAgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLy8gQnV0dG9uIGlucHV0IGdyb3Vwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLmlucHV0LWdyb3VwLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gSmFua2lseSBwcmV2ZW50IGlucHV0IGJ1dHRvbiBncm91cHMgZnJvbSB3cmFwcGluZyB3aXRoIGB3aGl0ZS1zcGFjZWAgYW5kXG4gIC8vIGBmb250LXNpemVgIGluIGNvbWJpbmF0aW9uIHdpdGggYGlubGluZS1ibG9ja2Agb24gYnV0dG9ucy5cbiAgZm9udC1zaXplOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIC8vIE5lZ2F0aXZlIG1hcmdpbiBmb3Igc3BhY2luZywgcG9zaXRpb24gZm9yIGJyaW5naW5nIGhvdmVyZWQvZm9jdXNlZC9hY3RpdmVkXG4gIC8vIGVsZW1lbnQgYWJvdmUgdGhlIHNpYmxpbmdzLlxuICA+IC5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICArIC5idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgfVxuICAgIC8vIEJyaW5nIHRoZSBcImFjdGl2ZVwiIGJ1dHRvbiB0byB0aGUgZnJvbnRcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gIH1cblxuICAvLyBOZWdhdGl2ZSBtYXJnaW4gdG8gb25seSBoYXZlIGEgMXB4IGJvcmRlciBiZXR3ZWVuIHRoZSB0d29cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgPiAuYnRuLFxuICAgID4gLmJ0bi1ncm91cCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgfVxuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgPiAuYnRuLFxuICAgID4gLmJ0bi1ncm91cCB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gTmF2c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubmF2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwOyAvLyBPdmVycmlkZSBkZWZhdWx0IHVsL29sXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgID4gYSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6ICRuYXYtbGluay1wYWRkaW5nO1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtbGluay1ob3Zlci1iZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlZCBzdGF0ZSBzZXRzIHRleHQgdG8gZ3JheSBhbmQgbnVrZXMgaG92ZXIvdGFiIGVmZmVjdHNcbiAgICAmLmRpc2FibGVkID4gYSB7XG4gICAgICBjb2xvcjogJG5hdi1kaXNhYmxlZC1saW5rLWNvbG9yO1xuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2LWRpc2FibGVkLWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBPcGVuIGRyb3Bkb3duc1xuICAub3BlbiA+IGEge1xuICAgICYsXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtbGluay1ob3Zlci1iZztcbiAgICAgIGJvcmRlci1jb2xvcjogJGxpbmstY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLy8gTmF2IGRpdmlkZXJzIChkZXByZWNhdGVkIHdpdGggdjMuMC4xKVxuICAvL1xuICAvLyBUaGlzIHNob3VsZCBoYXZlIGJlZW4gcmVtb3ZlZCBpbiB2MyB3aXRoIHRoZSBkcm9wcGluZyBvZiBgLm5hdi1saXN0YCwgYnV0XG4gIC8vIHdlIG1pc3NlZCBpdC4gV2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQgdGhpcyBhbnl3aGVyZSwgYnV0IGluIHRoZSBpbnRlcmVzdFxuICAvLyBvZiBtYWludGFpbmluZyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGluIGNhc2UgeW91IHVzZSBpdCwgaXQncyBkZXByZWNhdGVkLlxuICAubmF2LWRpdmlkZXIge1xuICAgIEBpbmNsdWRlIG5hdi1kaXZpZGVyO1xuICB9XG5cbiAgLy8gUHJldmVudCBJRTggZnJvbSBtaXNwbGFjaW5nIGltZ3NcbiAgLy9cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2lzc3Vlcy85ODQjaXNzdWVjb21tZW50LTM5ODU5ODlcbiAgPiBsaSA+IGEgPiBpbWcge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufVxuXG5cbi8vIFRhYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gR2l2ZSB0aGUgdGFicyBzb21ldGhpbmcgdG8gc2l0IG9uXG4ubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgPiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLy8gTWFrZSB0aGUgbGlzdC1pdGVtcyBvdmVybGF5IHRoZSBib3R0b20gYm9yZGVyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcblxuICAgIC8vIEFjdHVhbCB0YWJzIChhcyBsaW5rcylcbiAgICA+IGEge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2UgJGJvcmRlci1yYWRpdXMtYmFzZSAwIDA7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3IgJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWN0aXZlIHN0YXRlLCBhbmQgaXRzIDpob3ZlciB0byBvdmVycmlkZSBub3JtYWwgOmhvdmVyXG4gICAgJi5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1iZztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gcHVsbGluZyB0aGlzIGluIG1haW5seSBmb3IgbGVzcyBzaG9ydGhhbmRcbiAgJi5uYXYtanVzdGlmaWVkIHtcbiAgICBAZXh0ZW5kIC5uYXYtanVzdGlmaWVkO1xuICAgIEBleHRlbmQgLm5hdi10YWJzLWp1c3RpZmllZDtcbiAgfVxufVxuXG5cbi8vIFBpbGxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ubmF2LXBpbGxzIHtcbiAgPiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAvLyBMaW5rcyByZW5kZXJlZCBhcyBwaWxsc1xuICAgID4gYSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM7XG4gICAgfVxuICAgICsgbGkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICB9XG5cbiAgICAvLyBBY3RpdmUgc3RhdGVcbiAgICAmLmFjdGl2ZSA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gU3RhY2tlZCBwaWxsc1xuLm5hdi1zdGFja2VkIHtcbiAgPiBsaSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgKyBsaSB7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDsgLy8gbm8gbmVlZCBmb3IgdGhpcyBnYXAgYmV0d2VlbiBuYXYgaXRlbXNcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXYgdmFyaWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gSnVzdGlmaWVkIG5hdiBsaW5rc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubmF2LWp1c3RpZmllZCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gID4gbGkge1xuICAgIGZsb2F0OiBub25lO1xuICAgID4gYSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG5cbiAgPiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIHRvcDogYXV0bztcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgPiBsaSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgd2lkdGg6IDElO1xuICAgICAgPiBhIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTW92ZSBib3JkZXJzIHRvIGFuY2hvcnMgaW5zdGVhZCBvZiBib3R0b20gb2YgbGlzdFxuLy9cbi8vIE1peGluIGZvciBhZGRpbmcgb24gdG9wIHRoZSBzaGFyZWQgYC5uYXYtanVzdGlmaWVkYCBzdHlsZXMgZm9yIG91ciB0YWJzXG4ubmF2LXRhYnMtanVzdGlmaWVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcblxuICA+IGxpID4gYSB7XG4gICAgLy8gT3ZlcnJpZGUgbWFyZ2luIGZyb20gLm5hdi10YWJzXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG4gIH1cblxuICA+IC5hY3RpdmUgPiBhLFxuICA+IC5hY3RpdmUgPiBhOmhvdmVyLFxuICA+IC5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gICAgPiBsaSA+IGEge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRuYXYtdGFicy1qdXN0aWZpZWQtbGluay1ib3JkZXItY29sb3I7XG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1iYXNlICRib3JkZXItcmFkaXVzLWJhc2UgMCAwO1xuICAgIH1cbiAgICA+IC5hY3RpdmUgPiBhLFxuICAgID4gLmFjdGl2ZSA+IGE6aG92ZXIsXG4gICAgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkbmF2LXRhYnMtanVzdGlmaWVkLWFjdGl2ZS1saW5rLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBUYWJiYWJsZSB0YWJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEhpZGUgdGFiYmFibGUgcGFuZXMgdG8gc3RhcnQsIHNob3cgdGhlbSB3aGVuIGAuYWN0aXZlYFxuLnRhYi1jb250ZW50IHtcbiAgPiAudGFiLXBhbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgPiAuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG5cbi8vIERyb3Bkb3duc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTcGVjaWZpYyBkcm9wZG93bnNcbi5uYXYtdGFicyAuZHJvcGRvd24tbWVudSB7XG4gIC8vIG1ha2UgZHJvcGRvd24gYm9yZGVyIG92ZXJsYXAgdGFiIGJvcmRlclxuICBtYXJnaW4tdG9wOiAtMXB4O1xuICAvLyBSZW1vdmUgdGhlIHRvcCByb3VuZGVkIGNvcm5lcnMgaGVyZSBzaW5jZSB0aGVyZSBpcyBhIGhhcmQgZWRnZSBhYm92ZSB0aGUgbWVudVxuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbn1cbiIsIi8vXG4vLyBOYXZiYXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIFdyYXBwZXIgYW5kIGJhc2UgY2xhc3Ncbi8vXG4vLyBQcm92aWRlIGEgc3RhdGljIG5hdmJhciBmcm9tIHdoaWNoIHdlIGV4cGFuZCB0byBjcmVhdGUgZnVsbC13aWR0aCwgZml4ZWQsIGFuZFxuLy8gb3RoZXIgbmF2YmFyIHZhcmlhdGlvbnMuXG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6ICRuYXZiYXItaGVpZ2h0OyAvLyBFbnN1cmUgYSBuYXZiYXIgYWx3YXlzIHNob3dzIChlLmcuLCB3aXRob3V0IGEgLm5hdmJhci1icmFuZCBpbiBjb2xsYXBzZWQgbW9kZSlcbiAgbWFyZ2luLWJvdHRvbTogJG5hdmJhci1tYXJnaW4tYm90dG9tO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAvLyBQcmV2ZW50IGZsb2F0cyBmcm9tIGJyZWFraW5nIHRoZSBuYXZiYXJcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAkbmF2YmFyLWJvcmRlci1yYWRpdXM7XG4gIH1cbn1cblxuXG4vLyBOYXZiYXIgaGVhZGluZ1xuLy9cbi8vIEdyb3VwcyBgLm5hdmJhci1icmFuZGAgYW5kIGAubmF2YmFyLXRvZ2dsZWAgaW50byBhIHNpbmdsZSBjb21wb25lbnQgZm9yIGVhc3lcbi8vIHN0eWxpbmcgb2YgcmVzcG9uc2l2ZSBhc3BlY3RzLlxuXG4ubmF2YmFyLWhlYWRlciB7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuXG4vLyBOYXZiYXIgY29sbGFwc2UgKGJvZHkpXG4vL1xuLy8gR3JvdXAgeW91ciBuYXZiYXIgY29udGVudCBpbnRvIHRoaXMgZm9yIGVhc3kgY29sbGFwc2luZyBhbmQgZXhwYW5kaW5nIGFjcm9zc1xuLy8gdmFyaW91cyBkZXZpY2Ugc2l6ZXMuIEJ5IGRlZmF1bHQsIHRoaXMgY29udGVudCBpcyBjb2xsYXBzZWQgd2hlbiA8NzY4cHgsIGJ1dFxuLy8gd2lsbCBleHBhbmQgcGFzdCB0aGF0IGZvciBhIGhvcml6b250YWwgZGlzcGxheS5cbi8vXG4vLyBUbyBzdGFydCAob24gbW9iaWxlIGRldmljZXMpIHRoZSBuYXZiYXIgbGlua3MsIGZvcm1zLCBhbmQgYnV0dG9ucyBhcmUgc3RhY2tlZFxuLy8gdmVydGljYWxseSBhbmQgaW5jbHVkZSBhIGBtYXgtaGVpZ2h0YCB0byBvdmVyZmxvdyBpbiBjYXNlIHlvdSBoYXZlIHRvbyBtdWNoXG4vLyBjb250ZW50IGZvciB0aGUgdXNlcidzIHZpZXdwb3J0LlxuXG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZTtcbiAgcGFkZGluZy1yaWdodDogJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIHBhZGRpbmctbGVmdDogICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuMSk7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgJi5pbiB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgJi5jb2xsYXBzZSB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDsgLy8gT3ZlcnJpZGUgZGVmYXVsdCBzZXR0aW5nXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuaW4ge1xuICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAvLyBVbmRvIHRoZSBjb2xsYXBzZSBzaWRlIHBhZGRpbmcgZm9yIG5hdmJhcnMgd2l0aCBjb250YWluZXJzIHRvIGVuc3VyZVxuICAgIC8vIGFsaWdubWVudCBvZiByaWdodC1hbGlnbmVkIGNvbnRlbnRzLlxuICAgIC5uYXZiYXItZml4ZWQtdG9wICYsXG4gICAgLm5hdmJhci1zdGF0aWMtdG9wICYsXG4gICAgLm5hdmJhci1maXhlZC1ib3R0b20gJiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4ubmF2YmFyLWZpeGVkLXRvcCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIHtcbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgbWF4LWhlaWdodDogJG5hdmJhci1jb2xsYXBzZS1tYXgtaGVpZ2h0O1xuXG4gICAgQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiAkc2NyZWVuLXhzLW1pbikgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBCb3RoIG5hdmJhciBoZWFkZXIgYW5kIGNvbGxhcHNlXG4vL1xuLy8gV2hlbiBhIGNvbnRhaW5lciBpcyBwcmVzZW50LCBjaGFuZ2UgdGhlIGJlaGF2aW9yIG9mIHRoZSBoZWFkZXIgYW5kIGNvbGxhcHNlLlxuXG4uY29udGFpbmVyLFxuLmNvbnRhaW5lci1mbHVpZCB7XG4gID4gLm5hdmJhci1oZWFkZXIsXG4gID4gLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gICAgbWFyZ2luLWxlZnQ6ICAtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6ICAwO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vXG4vLyBOYXZiYXIgYWxpZ25tZW50IG9wdGlvbnNcbi8vXG4vLyBEaXNwbGF5IHRoZSBuYXZiYXIgYWNyb3NzIHRoZSBlbnRpcmV0eSBvZiB0aGUgcGFnZSBvciBmaXhlZCBpdCB0byB0aGUgdG9wIG9yXG4vLyBib3R0b20gb2YgdGhlIHBhZ2UuXG5cbi8vIFN0YXRpYyB0b3AgKHVuZml4ZWQsIGJ1dCAxMDAlIHdpZGUpIG5hdmJhclxuLm5hdmJhci1zdGF0aWMtdG9wIHtcbiAgei1pbmRleDogJHppbmRleC1uYXZiYXI7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cblxuLy8gRml4IHRoZSB0b3AvYm90dG9tIG5hdmJhcnMgd2hlbiBzY3JlZW4gcmVhbCBlc3RhdGUgc3VwcG9ydHMgaXRcbi5uYXZiYXItZml4ZWQtdG9wLFxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LW5hdmJhci1maXhlZDtcblxuICAvLyBVbmRvIHRoZSByb3VuZGVkIGNvcm5lcnNcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4ubmF2YmFyLWZpeGVkLXRvcCB7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xufVxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8vIG92ZXJyaWRlIC5uYXZiYXIgZGVmYXVsdHNcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwO1xufVxuXG5cbi8vIEJyYW5kL3Byb2plY3QgbmFtZVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6ICRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWxhcmdlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBoZWlnaHQ6ICRuYXZiYXItaGVpZ2h0O1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gID4gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgLm5hdmJhciA+IC5jb250YWluZXIgJixcbiAgICAubmF2YmFyID4gLmNvbnRhaW5lci1mbHVpZCAmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2YmFyIHRvZ2dsZVxuLy9cbi8vIEN1c3RvbSBidXR0b24gZm9yIHRvZ2dsaW5nIHRoZSBgLm5hdmJhci1jb2xsYXBzZWAsIHBvd2VyZWQgYnkgdGhlIGNvbGxhcHNlXG4vLyBKYXZhU2NyaXB0IHBsdWdpbi5cblxuLm5hdmJhci10b2dnbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigzNHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlc2V0IHVudXN1YWwgRmlyZWZveC1vbi1BbmRyb2lkIGRlZmF1bHQgc3R5bGU7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzL2lzc3Vlcy8yMTRcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgLy8gV2UgcmVtb3ZlIHRoZSBgb3V0bGluZWAgaGVyZSwgYnV0IGxhdGVyIGNvbXBlbnNhdGUgYnkgYXR0YWNoaW5nIGA6aG92ZXJgXG4gIC8vIHN0eWxlcyB0byBgOmZvY3VzYC5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gIC8vIEJhcnNcbiAgLmljb24tYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIH1cbiAgLmljb24tYmFyICsgLmljb24tYmFyIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vLyBOYXZiYXIgbmF2IGxpbmtzXG4vL1xuLy8gQnVpbGRzIG9uIHRvcCBvZiB0aGUgYC5uYXZgIGNvbXBvbmVudHMgd2l0aCBpdHMgb3duIG1vZGlmaWVyIGNsYXNzIHRvIG1ha2Vcbi8vIHRoZSBuYXYgdGhlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBob3Jpem9udGFsIG5hdiAoYWJvdmUgNzY4cHgpLlxuXG4ubmF2YmFyLW5hdiB7XG4gIG1hcmdpbjogKCRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbCAvIDIpICgtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWwpO1xuXG4gID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nLXRvcDogICAgMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgLy8gRHJvcGRvd25zIGdldCBjdXN0b20gZGlzcGxheSB3aGVuIGNvbGxhcHNlZFxuICAgIC5vcGVuIC5kcm9wZG93bi1tZW51IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgID4gbGkgPiBhLFxuICAgICAgLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAyNXB4O1xuICAgICAgfVxuICAgICAgPiBsaSA+IGEge1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVW5jb2xsYXBzZSB0aGUgbmF2XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgPiBsaSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgID4gYSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAgICAkbmF2YmFyLXBhZGRpbmctdmVydGljYWw7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAkbmF2YmFyLXBhZGRpbmctdmVydGljYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gTmF2YmFyIGZvcm1cbi8vXG4vLyBFeHRlbnNpb24gb2YgdGhlIGAuZm9ybS1pbmxpbmVgIHdpdGggc29tZSBleHRyYSBmbGF2b3IgZm9yIG9wdGltdW0gZGlzcGxheSBpblxuLy8gb3VyIG5hdmJhcnMuXG5cbi5uYXZiYXItZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG4gIG1hcmdpbi1yaWdodDogLSRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBwYWRkaW5nOiAxMHB4ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgJHNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xKSwgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygkc2hhZG93KTtcblxuICAvLyBNaXhpbiBiZWhhdmlvciBmb3Igb3B0aW11bSBkaXNwbGF5XG4gIEBpbmNsdWRlIGZvcm0taW5saW5lO1xuXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludC1tYXgpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBWZXJ0aWNhbGx5IGNlbnRlciBpbiBleHBhbmRlZCwgaG9yaXpvbnRhbCBuYXZiYXJcbiAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRpbnB1dC1oZWlnaHQtYmFzZSk7XG5cbiAgLy8gVW5kbyAxMDAlIHdpZHRoIGZvciBwdWxsIGNsYXNzZXNcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQpIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbn1cblxuXG4vLyBEcm9wZG93biBtZW51c1xuXG4vLyBNZW51IHBvc2l0aW9uIGFuZCBtZW51IGNhcmV0c1xuLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG59XG4vLyBNZW51IHBvc2l0aW9uIGFuZCBtZW51IGNhcmV0IHN1cHBvcnQgZm9yIGRyb3B1cHMgdmlhIGV4dHJhIGRyb3B1cCBjbGFzc1xuLm5hdmJhci1maXhlZC1ib3R0b20gLm5hdmJhci1uYXYgPiBsaSA+IC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoJG5hdmJhci1ib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoMCk7XG59XG5cblxuLy8gQnV0dG9ucyBpbiBuYXZiYXJzXG4vL1xuLy8gVmVydGljYWxseSBjZW50ZXIgYSBidXR0b24gd2l0aGluIGEgbmF2YmFyICh3aGVuICpub3QqIGluIGEgZm9ybSkuXG5cbi5uYXZiYXItYnRuIHtcbiAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKCRpbnB1dC1oZWlnaHQtYmFzZSk7XG5cbiAgJi5idG4tc20ge1xuICAgIEBpbmNsdWRlIG5hdmJhci12ZXJ0aWNhbC1hbGlnbigkaW5wdXQtaGVpZ2h0LXNtYWxsKTtcbiAgfVxuICAmLmJ0bi14cyB7XG4gICAgQGluY2x1ZGUgbmF2YmFyLXZlcnRpY2FsLWFsaWduKDIyKTtcbiAgfVxufVxuXG5cbi8vIFRleHQgaW4gbmF2YmFyc1xuLy9cbi8vIEFkZCBhIGNsYXNzIHRvIG1ha2UgYW55IGVsZW1lbnQgcHJvcGVybHkgYWxpZ24gaXRzZWxmIHZlcnRpY2FsbHkgd2l0aGluIHRoZSBuYXZiYXJzLlxuXG4ubmF2YmFyLXRleHQge1xuICBAaW5jbHVkZSBuYXZiYXItdmVydGljYWwtYWxpZ24oJGxpbmUtaGVpZ2h0LWNvbXB1dGVkKTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludCkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgICBtYXJnaW4tcmlnaHQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICB9XG59XG5cblxuLy8gQ29tcG9uZW50IGFsaWdubWVudFxuLy9cbi8vIFJlcHVycG9zZSB0aGUgcHVsbCB1dGlsaXRpZXMgYXMgdGhlaXIgb3duIG5hdmJhciB1dGlsaXRpZXMgdG8gYXZvaWQgc3BlY2lmaWNpdHlcbi8vIGlzc3VlcyB3aXRoIHBhcmVudHMgYW5kIGNoYWluaW5nLiBPbmx5IGRvIHRoaXMgd2hlbiB0aGUgbmF2YmFyIGlzIHVuY29sbGFwc2VkXG4vLyB0aG91Z2ggc28gdGhhdCBuYXZiYXIgY29udGVudHMgcHJvcGVybHkgc3RhY2sgYW5kIGFsaWduIGluIG1vYmlsZS5cbi8vXG4vLyBEZWNsYXJlZCBhZnRlciB0aGUgbmF2YmFyIGNvbXBvbmVudHMgdG8gZW5zdXJlIG1vcmUgc3BlY2lmaWNpdHkgb24gdGhlIG1hcmdpbnMuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAkZ3JpZC1mbG9hdC1icmVha3BvaW50KSB7XG4gIC5uYXZiYXItbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtJG5hdmJhci1wYWRkaW5nLWhvcml6b250YWw7XG5cbiAgICB+IC5uYXZiYXItcmlnaHQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEFsdGVybmF0ZSBuYXZiYXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBEZWZhdWx0IG5hdmJhclxuLm5hdmJhci1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWJnO1xuICBib3JkZXItY29sb3I6ICRuYXZiYXItZGVmYXVsdC1ib3JkZXI7XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1icmFuZC1jb2xvcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1iZztcbiAgICB9XG4gIH1cblxuICAubmF2YmFyLXRleHQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtY29sb3I7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgPiBsaSA+IGEge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yO1xuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuICAgID4gLmFjdGl2ZSA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWJnO1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5kaXNhYmxlZCA+IGEge1xuICAgICAgJixcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1iZztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtdG9nZ2xlLWJvcmRlci1jb2xvcjtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LXRvZ2dsZS1ob3Zlci1iZztcbiAgICB9XG4gICAgLmljb24tYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC10b2dnbGUtaWNvbi1iYXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSxcbiAgLm5hdmJhci1mb3JtIHtcbiAgICBib3JkZXItY29sb3I6ICRuYXZiYXItZGVmYXVsdC1ib3JkZXI7XG4gIH1cblxuICAvLyBEcm9wZG93biBtZW51IGl0ZW1zXG4gIC5uYXZiYXItbmF2IHtcbiAgICAvLyBSZW1vdmUgYmFja2dyb3VuZCBjb2xvciBmcm9tIG9wZW4gZHJvcGRvd25cbiAgICA+IC5vcGVuID4gYSB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRncmlkLWZsb2F0LWJyZWFrcG9pbnQtbWF4KSB7XG4gICAgICAvLyBEcm9wZG93bnMgZ2V0IGN1c3RvbSBkaXNwbGF5IHdoZW4gY29sbGFwc2VkXG4gICAgICAub3BlbiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgID4gbGkgPiBhIHtcbiAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3I7XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWhvdmVyLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICAgICAmLFxuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstYWN0aXZlLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+IC5kaXNhYmxlZCA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItZGVmYXVsdC1saW5rLWRpc2FibGVkLWJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLy8gTGlua3MgaW4gbmF2YmFyc1xuICAvL1xuICAvLyBBZGQgYSBjbGFzcyB0byBlbnN1cmUgbGlua3Mgb3V0c2lkZSB0aGUgbmF2YmFyIG5hdiBhcmUgY29sb3JlZCBjb3JyZWN0bHkuXG5cbiAgLm5hdmJhci1saW5rIHtcbiAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3I7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1saW5rIHtcbiAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWRlZmF1bHQtbGluay1ob3Zlci1jb2xvcjtcbiAgICB9XG4gICAgJltkaXNhYmxlZF0sXG4gICAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1kZWZhdWx0LWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEludmVyc2UgbmF2YmFyXG5cbi5uYXZiYXItaW52ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1iZztcbiAgYm9yZGVyLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYm9yZGVyO1xuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtYnJhbmQtY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtYnJhbmQtaG92ZXItYmc7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci10ZXh0IHtcbiAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWNvbG9yO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgID4gbGkgPiBhIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1jb2xvcjtcblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWJnO1xuICAgICAgfVxuICAgIH1cbiAgICA+IC5hY3RpdmUgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiAuZGlzYWJsZWQgPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtYmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGFya2VuIHRoZSByZXNwb25zaXZlIG5hdiB0b2dnbGVcbiAgLm5hdmJhci10b2dnbGUge1xuICAgIGJvcmRlci1jb2xvcjogJG5hdmJhci1pbnZlcnNlLXRvZ2dsZS1ib3JkZXItY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS10b2dnbGUtaG92ZXItYmc7XG4gICAgfVxuICAgIC5pY29uLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtdG9nZ2xlLWljb24tYmFyLWJnO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2UsXG4gIC5uYXZiYXItZm9ybSB7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZW4oJG5hdmJhci1pbnZlcnNlLWJnLCA3JSk7XG4gIH1cblxuICAvLyBEcm9wZG93bnNcbiAgLm5hdmJhci1uYXYge1xuICAgID4gLm9wZW4gPiBhIHtcbiAgICAgICYsXG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1iZztcbiAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJGdyaWQtZmxvYXQtYnJlYWtwb2ludC1tYXgpIHtcbiAgICAgIC8vIERyb3Bkb3ducyBnZXQgY3VzdG9tIGRpc3BsYXlcbiAgICAgIC5vcGVuIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgPiAuZHJvcGRvd24taGVhZGVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRuYXZiYXItaW52ZXJzZS1ib3JkZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZiYXItaW52ZXJzZS1ib3JkZXI7XG4gICAgICAgIH1cbiAgICAgICAgPiBsaSA+IGEge1xuICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1jb2xvcjtcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItYmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID4gLmFjdGl2ZSA+IGEge1xuICAgICAgICAgICYsXG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtY29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1hY3RpdmUtYmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID4gLmRpc2FibGVkID4gYSB7XG4gICAgICAgICAgJixcbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICRuYXZiYXItaW52ZXJzZS1saW5rLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtYmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1saW5rIHtcbiAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstaG92ZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1saW5rIHtcbiAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstY29sb3I7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAkbmF2YmFyLWludmVyc2UtbGluay1ob3Zlci1jb2xvcjtcbiAgICB9XG4gICAgJltkaXNhYmxlZF0sXG4gICAgZmllbGRzZXRbZGlzYWJsZWRdICYge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1pbnZlcnNlLWxpbmstZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQnJlYWRjcnVtYnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiAkYnJlYWRjcnVtYi1wYWRkaW5nLXZlcnRpY2FsICRicmVhZGNydW1iLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJlYWRjcnVtYi1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtYmFzZTtcblxuICA+IGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICArIGxpOmJlZm9yZSB7XG4gICAgICAvLyBbY29udmVydGVyXSBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2lzc3Vlcy8xMTE1XG4gICAgICAkbmJzcDogXCJcXDAwYTBcIjtcbiAgICAgIGNvbnRlbnQ6IFwiI3skYnJlYWRjcnVtYi1zZXBhcmF0b3J9I3skbmJzcH1cIjsgLy8gVW5pY29kZSBzcGFjZSBhZGRlZCBzaW5jZSBpbmxpbmUtYmxvY2sgbWVhbnMgbm9uLWNvbGxhcHNpbmcgd2hpdGUtc3BhY2VcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgY29sb3I6ICRicmVhZGNydW1iLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gID4gLmFjdGl2ZSB7XG4gICAgY29sb3I6ICRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjtcbiAgfVxufVxuIiwiLy9cbi8vIFBhZ2luYXRpb24gKG11bHRpcGxlIHBhZ2VzKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIDA7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG5cbiAgPiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lOyAvLyBSZW1vdmUgbGlzdC1zdHlsZSBhbmQgYmxvY2stbGV2ZWwgZGVmYXVsdHNcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsb2F0OiBsZWZ0OyAvLyBDb2xsYXBzZSB3aGl0ZS1zcGFjZVxuICAgICAgcGFkZGluZzogJHBhZGRpbmctYmFzZS12ZXJ0aWNhbCAkcGFkZGluZy1iYXNlLWhvcml6b250YWw7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJHBhZ2luYXRpb24tY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1iZztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwYWdpbmF0aW9uLWJvcmRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgID4gYSxcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMtYmFzZSk7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICA+IGEsXG4gICAgICA+IHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKCRib3JkZXItcmFkaXVzLWJhc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID4gbGkgPiBhLFxuICA+IGxpID4gc3BhbiB7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICBjb2xvcjogJHBhZ2luYXRpb24taG92ZXItY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1ob3Zlci1iZztcbiAgICAgIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gID4gLmFjdGl2ZSA+IGEsXG4gID4gLmFjdGl2ZSA+IHNwYW4ge1xuICAgICYsXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICBjb2xvcjogJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYWN0aXZlLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbiAgfVxuXG4gID4gLmRpc2FibGVkIHtcbiAgICA+IHNwYW4sXG4gICAgPiBzcGFuOmhvdmVyLFxuICAgID4gc3Bhbjpmb2N1cyxcbiAgICA+IGEsXG4gICAgPiBhOmhvdmVyLFxuICAgID4gYTpmb2N1cyB7XG4gICAgICBjb2xvcjogJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1kaXNhYmxlZC1iZztcbiAgICAgIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyO1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyBTaXppbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIExhcmdlXG4ucGFnaW5hdGlvbi1sZyB7XG4gIEBpbmNsdWRlIHBhZ2luYXRpb24tc2l6ZSgkcGFkZGluZy1sYXJnZS12ZXJ0aWNhbCwgJHBhZGRpbmctbGFyZ2UtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1sYXJnZSwgJGxpbmUtaGVpZ2h0LWxhcmdlLCAkYm9yZGVyLXJhZGl1cy1sYXJnZSk7XG59XG5cbi8vIFNtYWxsXG4ucGFnaW5hdGlvbi1zbSB7XG4gIEBpbmNsdWRlIHBhZ2luYXRpb24tc2l6ZSgkcGFkZGluZy1zbWFsbC12ZXJ0aWNhbCwgJHBhZGRpbmctc21hbGwtaG9yaXpvbnRhbCwgJGZvbnQtc2l6ZS1zbWFsbCwgJGxpbmUtaGVpZ2h0LXNtYWxsLCAkYm9yZGVyLXJhZGl1cy1zbWFsbCk7XG59XG4iLCIvL1xuLy8gUGFnZXIgcGFnaW5hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4ucGFnZXIge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbjogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiA1cHggMTRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlci1iZztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwYWdlci1ib3JkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAkcGFnZXItYm9yZGVyLXJhZGl1cztcbiAgICB9XG5cbiAgICA+IGE6aG92ZXIsXG4gICAgPiBhOmZvY3VzIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlci1ob3Zlci1iZztcbiAgICB9XG4gIH1cblxuICAubmV4dCB7XG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLnByZXZpb3VzIHtcbiAgICA+IGEsXG4gICAgPiBzcGFuIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC5kaXNhYmxlZCB7XG4gICAgPiBhLFxuICAgID4gYTpob3ZlcixcbiAgICA+IGE6Zm9jdXMsXG4gICAgPiBzcGFuIHtcbiAgICAgIGNvbG9yOiAkcGFnZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItYmc7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gTGFiZWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IC4yZW0gLjZlbSAuM2VtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmIHRvIGEubGFiZWxcblxuICAvLyBFbXB0eSBsYWJlbHMgY29sbGFwc2UgYXV0b21hdGljYWxseSAobm90IGF2YWlsYWJsZSBpbiBJRTgpXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvLyBRdWljayBmaXggZm9yIGxhYmVscyBpbiBidXR0b25zXG4gIC5idG4gJiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTFweDtcbiAgfVxufVxuXG4vLyBBZGQgaG92ZXIgZWZmZWN0cywgYnV0IG9ubHkgZm9yIGxpbmtzXG5hLmxhYmVsIHtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6ICRsYWJlbC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLy8gQ29sb3JzXG4vLyBDb250ZXh0dWFsIHZhcmlhdGlvbnMgKGxpbmtlZCBsYWJlbHMgZ2V0IGRhcmtlciBvbiA6aG92ZXIpXG5cbi5sYWJlbC1kZWZhdWx0IHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtZGVmYXVsdC1iZyk7XG59XG5cbi5sYWJlbC1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtcHJpbWFyeS1iZyk7XG59XG5cbi5sYWJlbC1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtc3VjY2Vzcy1iZyk7XG59XG5cbi5sYWJlbC1pbmZvIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtaW5mby1iZyk7XG59XG5cbi5sYWJlbC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtd2FybmluZy1iZyk7XG59XG5cbi5sYWJlbC1kYW5nZXIge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC1kYW5nZXItYmcpO1xufVxuIiwiLy9cbi8vIEJhZGdlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xuICBmb250LXdlaWdodDogJGJhZGdlLWZvbnQtd2VpZ2h0O1xuICBjb2xvcjogJGJhZGdlLWNvbG9yO1xuICBsaW5lLWhlaWdodDogJGJhZGdlLWxpbmUtaGVpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1iZztcbiAgYm9yZGVyLXJhZGl1czogJGJhZGdlLWJvcmRlci1yYWRpdXM7XG5cbiAgLy8gRW1wdHkgYmFkZ2VzIGNvbGxhcHNlIGF1dG9tYXRpY2FsbHkgKG5vdCBhdmFpbGFibGUgaW4gSUU4KVxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLy8gUXVpY2sgZml4IGZvciBiYWRnZXMgaW4gYnV0dG9uc1xuICAuYnRuICYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG4gIH1cblxuICAuYnRuLXhzICYsXG4gIC5idG4tZ3JvdXAteHMgPiAuYnRuICYge1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xuICB9XG5cbiAgLy8gW2NvbnZlcnRlcl0gZXh0cmFjdGVkIGEmIHRvIGEuYmFkZ2VcblxuICAvLyBBY2NvdW50IGZvciBiYWRnZXMgaW4gbmF2c1xuICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSA+ICYsXG4gIC5uYXYtcGlsbHMgPiAuYWN0aXZlID4gYSA+ICYge1xuICAgIGNvbG9yOiAkYmFkZ2UtYWN0aXZlLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWRnZS1hY3RpdmUtYmc7XG4gIH1cblxuICAubGlzdC1ncm91cC1pdGVtID4gJiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbSA+ICYgKyAmIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5uYXYtcGlsbHMgPiBsaSA+IGEgPiAmIHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG59XG5cbi8vIEhvdmVyIHN0YXRlLCBidXQgb25seSBmb3IgbGlua3NcbmEuYmFkZ2Uge1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogJGJhZGdlLWxpbmstaG92ZXItY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiLy9cbi8vIEp1bWJvdHJvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4uanVtYm90cm9uIHtcbiAgcGFkZGluZy10b3A6ICAgICRqdW1ib3Ryb24tcGFkZGluZztcbiAgcGFkZGluZy1ib3R0b206ICRqdW1ib3Ryb24tcGFkZGluZztcbiAgbWFyZ2luLWJvdHRvbTogJGp1bWJvdHJvbi1wYWRkaW5nO1xuICBjb2xvcjogJGp1bWJvdHJvbi1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGp1bWJvdHJvbi1iZztcblxuICBoMSxcbiAgLmgxIHtcbiAgICBjb2xvcjogJGp1bWJvdHJvbi1oZWFkaW5nLWNvbG9yO1xuICB9XG5cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogKCRqdW1ib3Ryb24tcGFkZGluZyAvIDIpO1xuICAgIGZvbnQtc2l6ZTogJGp1bWJvdHJvbi1mb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuXG4gID4gaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkanVtYm90cm9uLWJnLCAxMCUpO1xuICB9XG5cbiAgLmNvbnRhaW5lciAmLFxuICAuY29udGFpbmVyLWZsdWlkICYge1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxhcmdlOyAvLyBPbmx5IHJvdW5kIGNvcm5lcnMgYXQgaGlnaGVyIHJlc29sdXRpb25zIGlmIGNvbnRhaW5lZCBpbiBhIGNvbnRhaW5lclxuICAgIHBhZGRpbmctbGVmdDogICgkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAoJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMik7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikge1xuICAgIHBhZGRpbmctdG9wOiAgICAoJGp1bWJvdHJvbi1wYWRkaW5nICogMS42KTtcbiAgICBwYWRkaW5nLWJvdHRvbTogKCRqdW1ib3Ryb24tcGFkZGluZyAqIDEuNik7XG5cbiAgICAuY29udGFpbmVyICYsXG4gICAgLmNvbnRhaW5lci1mbHVpZCAmIHtcbiAgICAgIHBhZGRpbmctbGVmdDogICgkanVtYm90cm9uLXBhZGRpbmcgKiAyKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICgkanVtYm90cm9uLXBhZGRpbmcgKiAyKTtcbiAgICB9XG5cbiAgICBoMSxcbiAgICAuaDEge1xuICAgICAgZm9udC1zaXplOiAkanVtYm90cm9uLWhlYWRpbmctZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIFRodW1ibmFpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gTWl4aW4gYW5kIGFkanVzdCB0aGUgcmVndWxhciBpbWFnZSBjbGFzc1xuLnRodW1ibmFpbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAkdGh1bWJuYWlsLXBhZGRpbmc7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGh1bWJuYWlsLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkdGh1bWJuYWlsLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJvcmRlciAuMnMgZWFzZS1pbi1vdXQpO1xuXG4gID4gaW1nLFxuICBhID4gaW1nIHtcbiAgICBAaW5jbHVkZSBpbWctcmVzcG9uc2l2ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAvLyBbY29udmVydGVyXSBleHRyYWN0ZWQgYSY6aG92ZXIsIGEmOmZvY3VzLCBhJi5hY3RpdmUgdG8gYS50aHVtYm5haWw6aG92ZXIsIGEudGh1bWJuYWlsOmZvY3VzLCBhLnRodW1ibmFpbC5hY3RpdmVcblxuICAvLyBJbWFnZSBjYXB0aW9uc1xuICAuY2FwdGlvbiB7XG4gICAgcGFkZGluZzogJHRodW1ibmFpbC1jYXB0aW9uLXBhZGRpbmc7XG4gICAgY29sb3I6ICR0aHVtYm5haWwtY2FwdGlvbi1jb2xvcjtcbiAgfVxufVxuXG4vLyBBZGQgYSBob3ZlciBzdGF0ZSBmb3IgbGlua2VkIHZlcnNpb25zIG9ubHlcbmEudGh1bWJuYWlsOmhvdmVyLFxuYS50aHVtYm5haWw6Zm9jdXMsXG5hLnRodW1ibmFpbC5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICRsaW5rLWNvbG9yO1xufVxuIiwiLy9cbi8vIEFsZXJ0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIHN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAkYWxlcnQtcGFkZGluZztcbiAgbWFyZ2luLWJvdHRvbTogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogJGFsZXJ0LWJvcmRlci1yYWRpdXM7XG5cbiAgLy8gSGVhZGluZ3MgZm9yIGxhcmdlciBhbGVydHNcbiAgaDQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgLy8gU3BlY2lmaWVkIGZvciB0aGUgaDQgdG8gcHJldmVudCBjb25mbGljdHMgb2YgY2hhbmdpbmcgJGhlYWRpbmdzLWNvbG9yXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAvLyBQcm92aWRlIGNsYXNzIGZvciBsaW5rcyB0aGF0IG1hdGNoIGFsZXJ0c1xuICAuYWxlcnQtbGluayB7XG4gICAgZm9udC13ZWlnaHQ6ICRhbGVydC1saW5rLWZvbnQtd2VpZ2h0O1xuICB9XG5cbiAgLy8gSW1wcm92ZSBhbGlnbm1lbnQgYW5kIHNwYWNpbmcgb2YgaW5uZXIgY29udGVudFxuICA+IHAsXG4gID4gdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICA+IHAgKyBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbn1cblxuLy8gRGlzbWlzc2libGUgYWxlcnRzXG4vL1xuLy8gRXhwYW5kIHRoZSByaWdodCBwYWRkaW5nIGFuZCBhY2NvdW50IGZvciB0aGUgY2xvc2UgYnV0dG9uJ3MgcG9zaXRpb25pbmcuXG5cbi5hbGVydC1kaXNtaXNzYWJsZSwgLy8gVGhlIG1pc3NwZWxsZWQgLmFsZXJ0LWRpc21pc3NhYmxlIHdhcyBkZXByZWNhdGVkIGluIDMuMi4wLlxuLmFsZXJ0LWRpc21pc3NpYmxlIHtcbiAgcGFkZGluZy1yaWdodDogKCRhbGVydC1wYWRkaW5nICsgMjApO1xuXG4gIC8vIEFkanVzdCBjbG9zZSBsaW5rIHBvc2l0aW9uXG4gIC5jbG9zZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgICByaWdodDogLTIxcHg7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gQWx0ZXJuYXRlIHN0eWxlc1xuLy9cbi8vIEdlbmVyYXRlIGNvbnRleHR1YWwgbW9kaWZpZXIgY2xhc3NlcyBmb3IgY29sb3JpemluZyB0aGUgYWxlcnQuXG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtc3VjY2Vzcy1iZywgJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyLCAkYWxlcnQtc3VjY2Vzcy10ZXh0KTtcbn1cblxuLmFsZXJ0LWluZm8ge1xuICBAaW5jbHVkZSBhbGVydC12YXJpYW50KCRhbGVydC1pbmZvLWJnLCAkYWxlcnQtaW5mby1ib3JkZXIsICRhbGVydC1pbmZvLXRleHQpO1xufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIEBpbmNsdWRlIGFsZXJ0LXZhcmlhbnQoJGFsZXJ0LXdhcm5pbmctYmcsICRhbGVydC13YXJuaW5nLWJvcmRlciwgJGFsZXJ0LXdhcm5pbmctdGV4dCk7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBAaW5jbHVkZSBhbGVydC12YXJpYW50KCRhbGVydC1kYW5nZXItYmcsICRhbGVydC1kYW5nZXItYm9yZGVyLCAkYWxlcnQtZGFuZ2VyLXRleHQpO1xufVxuIiwiLy9cbi8vIFByb2dyZXNzIGJhcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gQmFyIGFuaW1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gV2ViS2l0XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tICB7IGJhY2tncm91bmQtcG9zaXRpb246IDQwcHggMDsgfVxuICB0byAgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxufVxuXG4vLyBTcGVjIGFuZCBJRTEwK1xuQGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20gIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogNDBweCAwOyB9XG4gIHRvICAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG59XG5cblxuLy8gQmFyIGl0c2VsZlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBPdXRlciBjb250YWluZXJcbi5wcm9ncmVzcyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogJGxpbmUtaGVpZ2h0LWNvbXB1dGVkO1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcm9ncmVzcy1iZztcbiAgYm9yZGVyLXJhZGl1czogJHByb2dyZXNzLWJvcmRlci1yYWRpdXM7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjEpKTtcbn1cblxuLy8gQmFyIG9mIHByb2dyZXNzXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG4gIGNvbG9yOiAkcHJvZ3Jlc3MtYmFyLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcm9ncmVzcy1iYXItYmc7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMTUpKTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbih3aWR0aCAuNnMgZWFzZSk7XG59XG5cbi8vIFN0cmlwZWQgYmFyc1xuLy9cbi8vIGAucHJvZ3Jlc3Mtc3RyaXBlZCAucHJvZ3Jlc3MtYmFyYCBpcyBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBpbiBmYXZvciBvZiB0aGVcbi8vIGAucHJvZ3Jlc3MtYmFyLXN0cmlwZWRgIGNsYXNzLCB3aGljaCB5b3UganVzdCBhZGQgdG8gYW4gZXhpc3Rpbmdcbi8vIGAucHJvZ3Jlc3MtYmFyYC5cbi5wcm9ncmVzcy1zdHJpcGVkIC5wcm9ncmVzcy1iYXIsXG4ucHJvZ3Jlc3MtYmFyLXN0cmlwZWQge1xuICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcbn1cblxuLy8gQ2FsbCBhbmltYXRpb24gZm9yIHRoZSBhY3RpdmUgb25lXG4vL1xuLy8gYC5wcm9ncmVzcy5hY3RpdmUgLnByb2dyZXNzLWJhcmAgaXMgZGVwcmVjYXRlZCBhcyBvZiB2My4yLjAgaW4gZmF2b3Igb2YgdGhlXG4vLyBgLnByb2dyZXNzLWJhci5hY3RpdmVgIGFwcHJvYWNoLlxuLnByb2dyZXNzLmFjdGl2ZSAucHJvZ3Jlc3MtYmFyLFxuLnByb2dyZXNzLWJhci5hY3RpdmUge1xuICBAaW5jbHVkZSBhbmltYXRpb24ocHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlKTtcbn1cblxuXG4vLyBWYXJpYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5wcm9ncmVzcy1iYXItc3VjY2VzcyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZyk7XG59XG5cbi5wcm9ncmVzcy1iYXItaW5mbyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRwcm9ncmVzcy1iYXItaW5mby1iZyk7XG59XG5cbi5wcm9ncmVzcy1iYXItd2FybmluZyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLWJhci12YXJpYW50KCRwcm9ncmVzcy1iYXItd2FybmluZy1iZyk7XG59XG5cbi5wcm9ncmVzcy1iYXItZGFuZ2VyIHtcbiAgQGluY2x1ZGUgcHJvZ3Jlc3MtYmFyLXZhcmlhbnQoJHByb2dyZXNzLWJhci1kYW5nZXItYmcpO1xufVxuIiwiLm1lZGlhIHtcbiAgLy8gUHJvcGVyIHNwYWNpbmcgYmV0d2VlbiBpbnN0YW5jZXMgb2YgLm1lZGlhXG4gIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG4ubWVkaWEsXG4ubWVkaWEtYm9keSB7XG4gIHpvb206IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZWRpYS1ib2R5IHtcbiAgd2lkdGg6IDEwMDAwcHg7XG59XG5cbi5tZWRpYS1vYmplY3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAvLyBGaXggY29sbGFwc2UgaW4gd2Via2l0IGZyb20gbWF4LXdpZHRoOiAxMDAlIGFuZCBkaXNwbGF5OiB0YWJsZS1jZWxsLlxuICAmLmltZy10aHVtYm5haWwge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufVxuXG4ubWVkaWEtcmlnaHQsXG4ubWVkaWEgPiAucHVsbC1yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm1lZGlhLWxlZnQsXG4ubWVkaWEgPiAucHVsbC1sZWZ0IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm1lZGlhLWxlZnQsXG4ubWVkaWEtcmlnaHQsXG4ubWVkaWEtYm9keSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tZWRpYS1taWRkbGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWVkaWEtYm90dG9tIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLy8gUmVzZXQgbWFyZ2lucyBvbiBoZWFkaW5ncyBmb3IgdGlnaHRlciBkZWZhdWx0IHNwYWNpbmdcbi5tZWRpYS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4vLyBNZWRpYSBsaXN0IHZhcmlhdGlvblxuLy9cbi8vIFVuZG8gZGVmYXVsdCB1bC9vbCBzdHlsZXNcbi5tZWRpYS1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuIiwiLy9cbi8vIExpc3QgZ3JvdXBzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi8vXG4vLyBFYXNpbHkgdXNhYmxlIG9uIDx1bD4sIDxvbD4sIG9yIDxkaXY+LlxuXG4ubGlzdC1ncm91cCB7XG4gIC8vIE5vIG5lZWQgdG8gc2V0IGxpc3Qtc3R5bGU6IG5vbmU7IHNpbmNlIC5saXN0LWdyb3VwLWl0ZW0gaXMgYmxvY2sgbGV2ZWxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwOyAvLyByZXNldCBwYWRkaW5nIGJlY2F1c2UgdWwgYW5kIG9sXG59XG5cblxuLy8gSW5kaXZpZHVhbCBsaXN0IGl0ZW1zXG4vL1xuLy8gVXNlIG9uIGBsaWBzIG9yIGBkaXZgcyB3aXRoaW4gdGhlIGAubGlzdC1ncm91cGAgcGFyZW50LlxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICAvLyBQbGFjZSB0aGUgYm9yZGVyIG9uIHRoZSBsaXN0IGl0ZW1zIGFuZCBuZWdhdGl2ZSBtYXJnaW4gdXAgZm9yIGJldHRlciBzdHlsaW5nXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWdyb3VwLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkbGlzdC1ncm91cC1ib3JkZXI7XG5cbiAgLy8gUm91bmQgdGhlIGZpcnN0IGFuZCBsYXN0IGl0ZW1zXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXMpO1xuICB9XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygkbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtcbiAgfVxufVxuXG5cbi8vIEludGVyYWN0aXZlIGxpc3QgaXRlbXNcbi8vXG4vLyBVc2UgYW5jaG9yIG9yIGJ1dHRvbiBlbGVtZW50cyBpbnN0ZWFkIG9mIGBsaWBzIG9yIGBkaXZgcyB0byBjcmVhdGUgaW50ZXJhY3RpdmUgaXRlbXMuXG4vLyBJbmNsdWRlcyBhbiBleHRyYSBgLmFjdGl2ZWAgbW9kaWZpZXIgY2xhc3MgZm9yIHNob3dpbmcgc2VsZWN0ZWQgaXRlbXMuXG5cbmEubGlzdC1ncm91cC1pdGVtLFxuYnV0dG9uLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGNvbG9yOiAkbGlzdC1ncm91cC1saW5rLWNvbG9yO1xuXG4gIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gICAgY29sb3I6ICRsaXN0LWdyb3VwLWxpbmstaGVhZGluZy1jb2xvcjtcbiAgfVxuXG4gIC8vIEhvdmVyIHN0YXRlXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJGxpc3QtZ3JvdXAtbGluay1ob3Zlci1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1ob3Zlci1iZztcbiAgfVxufVxuXG5idXR0b24ubGlzdC1ncm91cC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICAvLyBEaXNhYmxlZCBzdGF0ZVxuICAmLmRpc2FibGVkLFxuICAmLmRpc2FibGVkOmhvdmVyLFxuICAmLmRpc2FibGVkOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC1iZztcbiAgICBjb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I7XG4gICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuXG4gICAgLy8gRm9yY2UgY29sb3IgdG8gaW5oZXJpdCBmb3IgY3VzdG9tIGNvbnRlbnRcbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gICAgICBjb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAvLyBBY3RpdmUgY2xhc3Mgb24gaXRlbSBpdHNlbGYsIG5vdCBwYXJlbnRcbiAgJi5hY3RpdmUsXG4gICYuYWN0aXZlOmhvdmVyLFxuICAmLmFjdGl2ZTpmb2N1cyB7XG4gICAgei1pbmRleDogMjsgLy8gUGxhY2UgYWN0aXZlIGl0ZW1zIGFib3ZlIHRoZWlyIHNpYmxpbmdzIGZvciBwcm9wZXIgYm9yZGVyIHN0eWxpbmdcbiAgICBjb2xvcjogJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1iZztcbiAgICBib3JkZXItY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI7XG5cbiAgICAvLyBGb3JjZSBjb2xvciB0byBpbmhlcml0IGZvciBjdXN0b20gY29udGVudFxuICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyxcbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiBzbWFsbCxcbiAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiAuc21hbGwge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICAgIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gICAgICBjb2xvcjogJGxpc3QtZ3JvdXAtYWN0aXZlLXRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuLy8gQ29udGV4dHVhbCB2YXJpYW50c1xuLy9cbi8vIEFkZCBtb2RpZmllciBjbGFzc2VzIHRvIGNoYW5nZSB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIG9uIGluZGl2aWR1YWwgaXRlbXMuXG4vLyBPcmdhbml6YXRpb25hbGx5LCB0aGlzIG11c3QgY29tZSBhZnRlciB0aGUgYDpob3ZlcmAgc3RhdGVzLlxuXG5AaW5jbHVkZSBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudChzdWNjZXNzLCAkc3RhdGUtc3VjY2Vzcy1iZywgJHN0YXRlLXN1Y2Nlc3MtdGV4dCk7XG5AaW5jbHVkZSBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudChpbmZvLCAkc3RhdGUtaW5mby1iZywgJHN0YXRlLWluZm8tdGV4dCk7XG5AaW5jbHVkZSBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudCh3YXJuaW5nLCAkc3RhdGUtd2FybmluZy1iZywgJHN0YXRlLXdhcm5pbmctdGV4dCk7XG5AaW5jbHVkZSBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudChkYW5nZXIsICRzdGF0ZS1kYW5nZXItYmcsICRzdGF0ZS1kYW5nZXItdGV4dCk7XG5cblxuLy8gQ3VzdG9tIGNvbnRlbnQgb3B0aW9uc1xuLy9cbi8vIEV4dHJhIGNsYXNzZXMgZm9yIGNyZWF0aW5nIHdlbGwtZm9ybWF0dGVkIGNvbnRlbnQgd2l0aGluIGAubGlzdC1ncm91cC1pdGVtYHMuXG5cbi5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4iLCIvL1xuLy8gUGFuZWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIEJhc2UgY2xhc3Ncbi5wYW5lbCB7XG4gIG1hcmdpbi1ib3R0b206ICRsaW5lLWhlaWdodC1jb21wdXRlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbmVsLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogJHBhbmVsLWJvcmRlci1yYWRpdXM7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KSk7XG59XG5cbi8vIFBhbmVsIGNvbnRlbnRzXG4ucGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6ICRwYW5lbC1ib2R5LXBhZGRpbmc7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuXG4vLyBPcHRpb25hbCBoZWFkaW5nXG4ucGFuZWwtaGVhZGluZyB7XG4gIHBhZGRpbmc6ICRwYW5lbC1oZWFkaW5nLXBhZGRpbmc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSkpO1xuXG4gID4gLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFdpdGhpbiBoZWFkaW5nLCBzdHJpcCBhbnkgYGgqYCB0YWcgb2YgaXRzIGRlZmF1bHQgbWFyZ2lucyBmb3Igc3BhY2luZy5cbi5wYW5lbC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogY2VpbCgoJGZvbnQtc2l6ZS1iYXNlICogMS4xMjUpKTtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgPiBhLFxuICA+IHNtYWxsLFxuICA+IC5zbWFsbCxcbiAgPiBzbWFsbCA+IGEsXG4gID4gLnNtYWxsID4gYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gT3B0aW9uYWwgZm9vdGVyIChzdGF5cyBncmF5IGluIGV2ZXJ5IG1vZGlmaWVyIGNsYXNzKVxuLnBhbmVsLWZvb3RlciB7XG4gIHBhZGRpbmc6ICRwYW5lbC1mb290ZXItcGFkZGluZztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbmVsLWZvb3Rlci1iZztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRwYW5lbC1pbm5lci1ib3JkZXI7XG4gIEBpbmNsdWRlIGJvcmRlci1ib3R0b20tcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcbn1cblxuXG4vLyBMaXN0IGdyb3VwcyBpbiBwYW5lbHNcbi8vXG4vLyBCeSBkZWZhdWx0LCBzcGFjZSBvdXQgbGlzdCBncm91cCBjb250ZW50IGZyb20gcGFuZWwgaGVhZGluZ3MgdG8gYWNjb3VudCBmb3Jcbi8vIGFueSBraW5kIG9mIGN1c3RvbSBjb250ZW50IGJldHdlZW4gdGhlIHR3by5cblxuLnBhbmVsIHtcbiAgPiAubGlzdC1ncm91cCxcbiAgPiAucGFuZWwtY29sbGFwc2UgPiAubGlzdC1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLy8gQWRkIGJvcmRlciB0b3AgcmFkaXVzIGZvciBmaXJzdCBvbmVcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGJvcmRlciBib3R0b20gcmFkaXVzIGZvciBsYXN0IG9uZVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gID4gLnBhbmVsLWhlYWRpbmcgKyAucGFuZWwtY29sbGFwc2UgPiAubGlzdC1ncm91cCB7XG4gICAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbiAgICB9XG4gIH1cbn1cbi8vIENvbGxhcHNlIHNwYWNlIGJldHdlZW4gd2hlbiB0aGVyZSdzIG5vIGFkZGl0aW9uYWwgY29udGVudC5cbi5wYW5lbC1oZWFkaW5nICsgLmxpc3QtZ3JvdXAge1xuICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICB9XG59XG4ubGlzdC1ncm91cCArIC5wYW5lbC1mb290ZXIge1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xufVxuXG4vLyBUYWJsZXMgaW4gcGFuZWxzXG4vL1xuLy8gUGxhY2UgYSBub24tYm9yZGVyZWQgYC50YWJsZWAgd2l0aGluIGEgcGFuZWwgKG5vdCB3aXRoaW4gYSBgLnBhbmVsLWJvZHlgKSBhbmRcbi8vIHdhdGNoIGl0IGdvIGZ1bGwgd2lkdGguXG5cbi5wYW5lbCB7XG4gID4gLnRhYmxlLFxuICA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLFxuICA+IC5wYW5lbC1jb2xsYXBzZSA+IC50YWJsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIGNhcHRpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAkcGFuZWwtYm9keS1wYWRkaW5nO1xuICAgICAgcGFkZGluZy1yaWdodDogJHBhbmVsLWJvZHktcGFkZGluZztcbiAgICB9XG4gIH1cbiAgLy8gQWRkIGJvcmRlciB0b3AgcmFkaXVzIGZvciBmaXJzdCBvbmVcbiAgPiAudGFibGU6Zmlyc3QtY2hpbGQsXG4gID4gLnRhYmxlLXJlc3BvbnNpdmU6Zmlyc3QtY2hpbGQgPiAudGFibGU6Zmlyc3QtY2hpbGQge1xuICAgIEBpbmNsdWRlIGJvcmRlci10b3AtcmFkaXVzKCgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpKTtcblxuICAgID4gdGhlYWQ6Zmlyc3QtY2hpbGQsXG4gICAgPiB0Ym9keTpmaXJzdC1jaGlsZCB7XG4gICAgICA+IHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcblxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCxcbiAgICAgICAgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRkOmxhc3QtY2hpbGQsXG4gICAgICAgIHRoOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBBZGQgYm9yZGVyIGJvdHRvbSByYWRpdXMgZm9yIGxhc3Qgb25lXG4gID4gLnRhYmxlOmxhc3QtY2hpbGQsXG4gID4gLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCA+IC50YWJsZTpsYXN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKSk7XG5cbiAgICA+IHRib2R5Omxhc3QtY2hpbGQsXG4gICAgPiB0Zm9vdDpsYXN0LWNoaWxkIHtcbiAgICAgID4gdHI6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICgkcGFuZWwtYm9yZGVyLXJhZGl1cyAtIDEpO1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG5cbiAgICAgICAgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgICAgIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAoJHBhbmVsLWJvcmRlci1yYWRpdXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0ZDpsYXN0LWNoaWxkLFxuICAgICAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogKCRwYW5lbC1ib3JkZXItcmFkaXVzIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgPiAucGFuZWwtYm9keSArIC50YWJsZSxcbiAgPiAucGFuZWwtYm9keSArIC50YWJsZS1yZXNwb25zaXZlLFxuICA+IC50YWJsZSArIC5wYW5lbC1ib2R5LFxuICA+IC50YWJsZS1yZXNwb25zaXZlICsgLnBhbmVsLWJvZHkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICB9XG4gID4gLnRhYmxlID4gdGJvZHk6Zmlyc3QtY2hpbGQgPiB0cjpmaXJzdC1jaGlsZCB0aCxcbiAgPiAudGFibGUgPiB0Ym9keTpmaXJzdC1jaGlsZCA+IHRyOmZpcnN0LWNoaWxkIHRkIHtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG4gID4gLnRhYmxlLWJvcmRlcmVkLFxuICA+IC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDA7XG4gICAgPiB0aGVhZCxcbiAgICA+IHRib2R5LFxuICAgID4gdGZvb3Qge1xuICAgICAgPiB0ciB7XG4gICAgICAgID4gdGg6Zmlyc3QtY2hpbGQsXG4gICAgICAgID4gdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgID4gdGg6bGFzdC1jaGlsZCxcbiAgICAgICAgPiB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgPiB0aGVhZCxcbiAgICA+IHRib2R5IHtcbiAgICAgID4gdHI6Zmlyc3QtY2hpbGQge1xuICAgICAgICA+IHRkLFxuICAgICAgICA+IHRoIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgID4gdGJvZHksXG4gICAgPiB0Zm9vdCB7XG4gICAgICA+IHRyOmxhc3QtY2hpbGQge1xuICAgICAgICA+IHRkLFxuICAgICAgICA+IHRoIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gID4gLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cblxuLy8gQ29sbGFwc2libGUgcGFuZWxzIChha2EsIGFjY29yZGlvbilcbi8vXG4vLyBXcmFwIGEgc2VyaWVzIG9mIHBhbmVscyBpbiBgLnBhbmVsLWdyb3VwYCB0byB0dXJuIHRoZW0gaW50byBhbiBhY2NvcmRpb24gd2l0aFxuLy8gdGhlIGhlbHAgb2Ygb3VyIGNvbGxhcHNlIEphdmFTY3JpcHQgcGx1Z2luLlxuXG4ucGFuZWwtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAkbGluZS1oZWlnaHQtY29tcHV0ZWQ7XG5cbiAgLy8gVGlnaHRlbiB1cCBtYXJnaW4gc28gaXQncyBvbmx5IGJldHdlZW4gcGFuZWxzXG4gIC5wYW5lbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAkcGFuZWwtYm9yZGVyLXJhZGl1cztcblxuICAgICsgLnBhbmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIH1cblxuICAucGFuZWwtaGVhZGluZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcblxuICAgICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHksXG4gICAgKyAucGFuZWwtY29sbGFwc2UgPiAubGlzdC1ncm91cCB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHBhbmVsLWlubmVyLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAucGFuZWwtZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgICsgLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcGFuZWwtaW5uZXItYm9yZGVyO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIENvbnRleHR1YWwgdmFyaWF0aW9uc1xuLnBhbmVsLWRlZmF1bHQge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC1kZWZhdWx0LWJvcmRlciwgJHBhbmVsLWRlZmF1bHQtdGV4dCwgJHBhbmVsLWRlZmF1bHQtaGVhZGluZy1iZywgJHBhbmVsLWRlZmF1bHQtYm9yZGVyKTtcbn1cbi5wYW5lbC1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtcHJpbWFyeS1ib3JkZXIsICRwYW5lbC1wcmltYXJ5LXRleHQsICRwYW5lbC1wcmltYXJ5LWhlYWRpbmctYmcsICRwYW5lbC1wcmltYXJ5LWJvcmRlcik7XG59XG4ucGFuZWwtc3VjY2VzcyB7XG4gIEBpbmNsdWRlIHBhbmVsLXZhcmlhbnQoJHBhbmVsLXN1Y2Nlc3MtYm9yZGVyLCAkcGFuZWwtc3VjY2Vzcy10ZXh0LCAkcGFuZWwtc3VjY2Vzcy1oZWFkaW5nLWJnLCAkcGFuZWwtc3VjY2Vzcy1ib3JkZXIpO1xufVxuLnBhbmVsLWluZm8ge1xuICBAaW5jbHVkZSBwYW5lbC12YXJpYW50KCRwYW5lbC1pbmZvLWJvcmRlciwgJHBhbmVsLWluZm8tdGV4dCwgJHBhbmVsLWluZm8taGVhZGluZy1iZywgJHBhbmVsLWluZm8tYm9yZGVyKTtcbn1cbi5wYW5lbC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtd2FybmluZy1ib3JkZXIsICRwYW5lbC13YXJuaW5nLXRleHQsICRwYW5lbC13YXJuaW5nLWhlYWRpbmctYmcsICRwYW5lbC13YXJuaW5nLWJvcmRlcik7XG59XG4ucGFuZWwtZGFuZ2VyIHtcbiAgQGluY2x1ZGUgcGFuZWwtdmFyaWFudCgkcGFuZWwtZGFuZ2VyLWJvcmRlciwgJHBhbmVsLWRhbmdlci10ZXh0LCAkcGFuZWwtZGFuZ2VyLWhlYWRpbmctYmcsICRwYW5lbC1kYW5nZXItYm9yZGVyKTtcbn1cbiIsIi8vXG4vLyBXZWxsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4ud2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR3ZWxsLWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkd2VsbC1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KSk7XG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjE1KTtcbiAgfVxufVxuXG4vLyBTaXplc1xuLndlbGwtbGcge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTtcbn1cbi53ZWxsLXNtIHtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zbWFsbDtcbn1cbiIsIi8vIEVtYmVkcyByZXNwb25zaXZlXG4vL1xuLy8gQ3JlZGl0OiBOaWNvbGFzIEdhbGxhZ2hlciBhbmQgU1VJVCBDU1MuXG5cbi5lbWJlZC1yZXNwb25zaXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5lbWJlZC1yZXNwb25zaXZlLWl0ZW0sXG4gIGlmcmFtZSxcbiAgZW1iZWQsXG4gIG9iamVjdCxcbiAgdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4vLyBNb2RpZmllciBjbGFzcyBmb3IgMTY6OSBhc3BlY3QgcmF0aW9cbi5lbWJlZC1yZXNwb25zaXZlLTE2Ynk5IHtcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbn1cblxuLy8gTW9kaWZpZXIgY2xhc3MgZm9yIDQ6MyBhc3BlY3QgcmF0aW9cbi5lbWJlZC1yZXNwb25zaXZlLTRieTMge1xuICBwYWRkaW5nLWJvdHRvbTogNzUlO1xufVxuIiwiLy9cbi8vIENsb3NlIGljb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi5jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS41KTtcbiAgZm9udC13ZWlnaHQ6ICRjbG9zZS1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAkY2xvc2UtY29sb3I7XG4gIHRleHQtc2hhZG93OiAkY2xvc2UtdGV4dC1zaGFkb3c7XG4gIEBpbmNsdWRlIG9wYWNpdHkoLjIpO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkY2xvc2UtY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAaW5jbHVkZSBvcGFjaXR5KC41KTtcbiAgfVxuXG4gIC8vIFtjb252ZXJ0ZXJdIGV4dHJhY3RlZCBidXR0b24mIHRvIGJ1dHRvbi5jbG9zZVxufVxuXG4vLyBBZGRpdGlvbmFsIHByb3BlcnRpZXMgZm9yIGJ1dHRvbiB2ZXJzaW9uXG4vLyBpT1MgcmVxdWlyZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGluc3RlYWQgb2YgYW4gYW5jaG9yIHRhZy5cbi8vIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNTYWZhcmlfTW9iaWxlXG5idXR0b24uY2xvc2Uge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbiIsIi8vXG4vLyBNb2RhbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIC5tb2RhbC1vcGVuICAgICAgLSBib2R5IGNsYXNzIGZvciBraWxsaW5nIHRoZSBzY3JvbGxcbi8vIC5tb2RhbCAgICAgICAgICAgLSBjb250YWluZXIgdG8gc2Nyb2xsIHdpdGhpblxuLy8gLm1vZGFsLWRpYWxvZyAgICAtIHBvc2l0aW9uaW5nIHNoZWxsIGZvciB0aGUgYWN0dWFsIG1vZGFsXG4vLyAubW9kYWwtY29udGVudCAgIC0gYWN0dWFsIG1vZGFsIHcvIGJnIGFuZCBjb3JuZXJzIGFuZCBzaGl0XG5cbi8vIEtpbGwgdGhlIHNjcm9sbCBvbiB0aGUgYm9keVxuLm1vZGFsLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBDb250YWluZXIgdGhhdCB0aGUgbW9kYWwgc2Nyb2xscyB3aXRoaW5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LW1vZGFsO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgLy8gUHJldmVudCBDaHJvbWUgb24gV2luZG93cyBmcm9tIGFkZGluZyBhIGZvY3VzIG91dGxpbmUuIEZvciBkZXRhaWxzLCBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTA5NTEuXG4gIG91dGxpbmU6IDA7XG5cbiAgLy8gV2hlbiBmYWRpbmcgaW4gdGhlIG1vZGFsLCBhbmltYXRlIGl0IHRvIHNsaWRlIGRvd25cbiAgJi5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSgwLjNzIGVhc2Utb3V0KTtcbiAgfVxuICAmLmluIC5tb2RhbC1kaWFsb2cgeyBAaW5jbHVkZSB0cmFuc2xhdGUoMCwgMCkgfVxufVxuLm1vZGFsLW9wZW4gLm1vZGFsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4vLyBTaGVsbCBkaXYgdG8gcG9zaXRpb24gdGhlIG1vZGFsIHdpdGggYm90dG9tIHBhZGRpbmdcbi5tb2RhbC1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi8vIEFjdHVhbCBtb2RhbFxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1jb250ZW50LWJnO1xuICBib3JkZXI6IDFweCBzb2xpZCAkbW9kYWwtY29udGVudC1mYWxsYmFjay1ib3JkZXItY29sb3I7IC8vb2xkIGJyb3dzZXJzIGZhbGxiYWNrIChpZTggZXRjKVxuICBib3JkZXI6IDFweCBzb2xpZCAkbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxhcmdlO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAgM3B4IDlweCByZ2JhKDAsMCwwLC41KSk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC8vIFJlbW92ZSBmb2N1cyBvdXRsaW5lIGZyb20gb3BlbmVkIG1vZGFsXG4gIG91dGxpbmU6IDA7XG59XG5cbi8vIE1vZGFsIGJhY2tncm91bmRcbi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LW1vZGFsLWJhY2tncm91bmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1iYWNrZHJvcC1iZztcbiAgLy8gRmFkZSBmb3IgYmFja2Ryb3BcbiAgJi5mYWRlIHsgQGluY2x1ZGUgb3BhY2l0eSgwKTsgfVxuICAmLmluIHsgQGluY2x1ZGUgb3BhY2l0eSgkbW9kYWwtYmFja2Ryb3Atb3BhY2l0eSk7IH1cbn1cblxuLy8gTW9kYWwgaGVhZGVyXG4vLyBUb3Agc2VjdGlvbiBvZiB0aGUgbW9kYWwgdy8gdGl0bGUgYW5kIGRpc21pc3Ncbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAkbW9kYWwtdGl0bGUtcGFkZGluZztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yO1xuICBAaW5jbHVkZSBjbGVhcmZpeDtcbn1cbi8vIENsb3NlIGljb25cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLy8gVGl0bGUgdGV4dCB3aXRoaW4gaGVhZGVyXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAkbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ7XG59XG5cbi8vIE1vZGFsIGJvZHlcbi8vIFdoZXJlIGFsbCBtb2RhbCBjb250ZW50IHJlc2lkZXMgKHNpYmxpbmcgb2YgLm1vZGFsLWhlYWRlciBhbmQgLm1vZGFsLWZvb3Rlcilcbi5tb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAkbW9kYWwtaW5uZXItcGFkZGluZztcbn1cblxuLy8gRm9vdGVyIChmb3IgYWN0aW9ucylcbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAkbW9kYWwtaW5uZXItcGFkZGluZztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IC8vIHJpZ2h0IGFsaWduIGJ1dHRvbnNcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yO1xuICBAaW5jbHVkZSBjbGVhcmZpeDsgLy8gY2xlYXIgaXQgaW4gY2FzZSBmb2xrcyB1c2UgLnB1bGwtKiBjbGFzc2VzIG9uIGJ1dHRvbnNcblxuICAvLyBQcm9wZXJseSBzcGFjZSBvdXQgYnV0dG9uc1xuICAuYnRuICsgLmJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyAvLyBhY2NvdW50IGZvciBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHdoaWNoIGdldHMgdGhlIGJvdHRvbSBtYXJnaW4gbGlrZSBhbGwgb3RoZXIgaW5wdXRzXG4gIH1cbiAgLy8gYnV0IG92ZXJyaWRlIHRoYXQgZm9yIGJ1dHRvbiBncm91cHNcbiAgLmJ0bi1ncm91cCAuYnRuICsgLmJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIH1cbiAgLy8gYW5kIG92ZXJyaWRlIGl0IGZvciBibG9jayBidXR0b25zIGFzIHdlbGxcbiAgLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi8vIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxuLm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi8vIFNjYWxlIHVwIHRoZSBtb2RhbFxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG4gIC8vIEF1dG9tYXRpY2FsbHkgc2V0IG1vZGFsJ3Mgd2lkdGggZm9yIGxhcmdlciB2aWV3cG9ydHNcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6ICRtb2RhbC1tZDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgfVxuICAubW9kYWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDVweCAxNXB4IHJnYmEoMCwwLDAsLjUpKTtcbiAgfVxuXG4gIC8vIE1vZGFsIHNpemVzXG4gIC5tb2RhbC1zbSB7IHdpZHRoOiAkbW9kYWwtc207IH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSB7XG4gIC5tb2RhbC1sZyB7IHdpZHRoOiAkbW9kYWwtbGc7IH1cbn1cbiIsIi8vXG4vLyBUb29sdGlwc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBCYXNlIGNsYXNzXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogJHppbmRleC10b29sdGlwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLy8gT3VyIHBhcmVudCBlbGVtZW50IGNhbiBiZSBhcmJpdHJhcnkgc2luY2UgdG9vbHRpcHMgYXJlIGJ5IGRlZmF1bHQgaW5zZXJ0ZWQgYXMgYSBzaWJsaW5nIG9mIHRoZWlyIHRhcmdldCBlbGVtZW50LlxuICAvLyBTbyByZXNldCBvdXIgZm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzIHRvIGF2b2lkIGluaGVyaXRpbmcgd2VpcmQgdmFsdWVzLlxuICBAaW5jbHVkZSByZXNldC10ZXh0O1xuICBmb250LXNpemU6ICRmb250LXNpemUtc21hbGw7XG5cbiAgQGluY2x1ZGUgb3BhY2l0eSgwKTtcblxuICAmLmluICAgICB7IEBpbmNsdWRlIG9wYWNpdHkoJHRvb2x0aXAtb3BhY2l0eSk7IH1cbiAgJi50b3AgICAgeyBtYXJnaW4tdG9wOiAgLTNweDsgcGFkZGluZzogJHRvb2x0aXAtYXJyb3ctd2lkdGggMDsgfVxuICAmLnJpZ2h0ICB7IG1hcmdpbi1sZWZ0OiAgM3B4OyBwYWRkaW5nOiAwICR0b29sdGlwLWFycm93LXdpZHRoOyB9XG4gICYuYm90dG9tIHsgbWFyZ2luLXRvcDogICAzcHg7IHBhZGRpbmc6ICR0b29sdGlwLWFycm93LXdpZHRoIDA7IH1cbiAgJi5sZWZ0ICAgeyBtYXJnaW4tbGVmdDogLTNweDsgcGFkZGluZzogMCAkdG9vbHRpcC1hcnJvdy13aWR0aDsgfVxufVxuXG4vLyBXcmFwcGVyIGZvciB0aGUgdG9vbHRpcCBjb250ZW50XG4udG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogJHRvb2x0aXAtbWF4LXdpZHRoO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogJHRvb2x0aXAtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvb2x0aXAtYmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWJhc2U7XG59XG5cbi8vIEFycm93c1xuLnRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4vLyBOb3RlOiBEZXByZWNhdGVkIC50b3AtbGVmdCwgLnRvcC1yaWdodCwgLmJvdHRvbS1sZWZ0LCBhbmQgLmJvdHRvbS1yaWdodCBhcyBvZiB2My4zLjFcbi50b29sdGlwIHtcbiAgJi50b3AgLnRvb2x0aXAtYXJyb3cge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbiAgJi50b3AtbGVmdCAudG9vbHRpcC1hcnJvdyB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYudG9wLXJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWJvdHRvbTogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLnJpZ2h0IC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoIDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYuYm90dG9tIC50b29sdGlwLWFycm93IHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLXdpZHRoOiAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICB9XG4gICYuYm90dG9tLWxlZnQgLnRvb2x0aXAtYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIGJvcmRlci13aWR0aDogMCAkdG9vbHRpcC1hcnJvdy13aWR0aCAkdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgfVxuICAmLmJvdHRvbS1yaWdodCAudG9vbHRpcC1hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6ICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gIH1cbn1cbiIsIi8vXG4vLyBQb3BvdmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4ucG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LXBvcG92ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogJHBvcG92ZXItbWF4LXdpZHRoO1xuICBwYWRkaW5nOiAxcHg7XG4gIC8vIE91ciBwYXJlbnQgZWxlbWVudCBjYW4gYmUgYXJiaXRyYXJ5IHNpbmNlIHBvcG92ZXJzIGFyZSBieSBkZWZhdWx0IGluc2VydGVkIGFzIGEgc2libGluZyBvZiB0aGVpciB0YXJnZXQgZWxlbWVudC5cbiAgLy8gU28gcmVzZXQgb3VyIGZvbnQgYW5kIHRleHQgcHJvcGVydGllcyB0byBhdm9pZCBpbmhlcml0aW5nIHdlaXJkIHZhbHVlcy5cbiAgQGluY2x1ZGUgcmVzZXQtdGV4dDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcG92ZXItYmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwb3BvdmVyLWZhbGxiYWNrLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyOiAxcHggc29saWQgJHBvcG92ZXItYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sYXJnZTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDVweCAxMHB4IHJnYmEoMCwwLDAsLjIpKTtcblxuICAvLyBPZmZzZXQgdGhlIHBvcG92ZXIgdG8gYWNjb3VudCBmb3IgdGhlIHBvcG92ZXIgYXJyb3dcbiAgJi50b3AgICAgIHsgbWFyZ2luLXRvcDogLSRwb3BvdmVyLWFycm93LXdpZHRoOyB9XG4gICYucmlnaHQgICB7IG1hcmdpbi1sZWZ0OiAkcG9wb3Zlci1hcnJvdy13aWR0aDsgfVxuICAmLmJvdHRvbSAgeyBtYXJnaW4tdG9wOiAkcG9wb3Zlci1hcnJvdy13aWR0aDsgfVxuICAmLmxlZnQgICAgeyBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LXdpZHRoOyB9XG59XG5cbi5wb3BvdmVyLXRpdGxlIHtcbiAgbWFyZ2luOiAwOyAvLyByZXNldCBoZWFkaW5nIG1hcmdpblxuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3BvdmVyLXRpdGxlLWJnO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2VuKCRwb3BvdmVyLXRpdGxlLWJnLCA1JSk7XG4gIGJvcmRlci1yYWRpdXM6ICgkYm9yZGVyLXJhZGl1cy1sYXJnZSAtIDEpICgkYm9yZGVyLXJhZGl1cy1sYXJnZSAtIDEpIDAgMDtcbn1cblxuLnBvcG92ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xufVxuXG4vLyBBcnJvd3Ncbi8vXG4vLyAuYXJyb3cgaXMgb3V0ZXIsIC5hcnJvdzphZnRlciBpcyBpbm5lclxuXG4ucG9wb3ZlciA+IC5hcnJvdyB7XG4gICYsXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB9XG59XG4ucG9wb3ZlciA+IC5hcnJvdyB7XG4gIGJvcmRlci13aWR0aDogJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG59XG4ucG9wb3ZlciA+IC5hcnJvdzphZnRlciB7XG4gIGJvcmRlci13aWR0aDogJHBvcG92ZXItYXJyb3ctd2lkdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5wb3BvdmVyIHtcbiAgJi50b3AgPiAuYXJyb3cge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHBvcG92ZXItYXJyb3ctb3V0ZXItZmFsbGJhY2stY29sb3I7IC8vIElFOCBmYWxsYmFja1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yO1xuICAgIGJvdHRvbTogLSRwb3BvdmVyLWFycm93LW91dGVyLXdpZHRoO1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICBib3R0b206IDFweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHBvcG92ZXItYXJyb3ctY29sb3I7XG4gICAgfVxuICB9XG4gICYucmlnaHQgPiAuYXJyb3cge1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBtYXJnaW4tdG9wOiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjsgLy8gSUU4IGZhbGxiYWNrXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgbGVmdDogMXB4O1xuICAgICAgYm90dG9tOiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHBvcG92ZXItYXJyb3ctY29sb3I7XG4gICAgfVxuICB9XG4gICYuYm90dG9tID4gLmFycm93IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWZhbGxiYWNrLWNvbG9yOyAvLyBJRTggZmFsbGJhY2tcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjtcbiAgICB0b3A6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgdG9wOiAxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLSRwb3BvdmVyLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICYubGVmdCA+IC5hcnJvdyB7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IC0kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDtcbiAgICBtYXJnaW4tdG9wOiAtJHBvcG92ZXItYXJyb3ctb3V0ZXItd2lkdGg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkcG9wb3Zlci1hcnJvdy1vdXRlci1mYWxsYmFjay1jb2xvcjsgLy8gSUU4IGZhbGxiYWNrXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yO1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICByaWdodDogMXB4O1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRwb3BvdmVyLWFycm93LWNvbG9yO1xuICAgICAgYm90dG9tOiAtJHBvcG92ZXItYXJyb3ctd2lkdGg7XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQ2Fyb3VzZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gV3JhcHBlciBmb3IgdGhlIHNsaWRlIGNvbnRhaW5lciBhbmQgaW5kaWNhdG9yc1xuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuXG4gID4gLml0ZW0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oLjZzIGVhc2UtaW4tb3V0IGxlZnQpO1xuXG4gICAgLy8gQWNjb3VudCBmb3IgamFua2l0dWRlIG9uIGltYWdlc1xuICAgID4gaW1nLFxuICAgID4gYSA+IGltZyB7XG4gICAgICBAaW5jbHVkZSBpbWctcmVzcG9uc2l2ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cblxuICAgIC8vIFdlYktpdCBDU1MzIHRyYW5zZm9ybXMgZm9yIHN1cHBvcnRlZCBkZXZpY2VzXG4gICAgQG1lZGlhIGFsbCBhbmQgKHRyYW5zZm9ybS0zZCksICgtd2Via2l0LXRyYW5zZm9ybS0zZCkge1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi10cmFuc2Zvcm0oMC42cyBlYXNlLWluLW91dCk7XG4gICAgICBAaW5jbHVkZSBiYWNrZmFjZS12aXNpYmlsaXR5KGhpZGRlbik7XG4gICAgICBAaW5jbHVkZSBwZXJzcGVjdGl2ZSgxMDAwcHgpO1xuXG4gICAgICAmLm5leHQsXG4gICAgICAmLmFjdGl2ZS5yaWdodCB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgICAgJi5wcmV2LFxuICAgICAgJi5hY3RpdmUubGVmdCB7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgICYubmV4dC5sZWZ0LFxuICAgICAgJi5wcmV2LnJpZ2h0LFxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA+IC5hY3RpdmUsXG4gID4gLm5leHQsXG4gID4gLnByZXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgPiAuYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgPiAubmV4dCxcbiAgPiAucHJldiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gID4gLm5leHQge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgPiAucHJldiB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbiAgPiAubmV4dC5sZWZ0LFxuICA+IC5wcmV2LnJpZ2h0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgPiAuYWN0aXZlLmxlZnQge1xuICAgIGxlZnQ6IC0xMDAlO1xuICB9XG4gID4gLmFjdGl2ZS5yaWdodCB7XG4gICAgbGVmdDogMTAwJTtcbiAgfVxuXG59XG5cbi8vIExlZnQvcmlnaHQgY29udHJvbHMgZm9yIG5hdlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5jYXJvdXNlbC1jb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6ICRjYXJvdXNlbC1jb250cm9sLXdpZHRoO1xuICBAaW5jbHVkZSBvcGFjaXR5KCRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHkpO1xuICBmb250LXNpemU6ICRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZTtcbiAgY29sb3I6ICRjYXJvdXNlbC1jb250cm9sLWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAkY2Fyb3VzZWwtdGV4dC1zaGFkb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7IC8vIEZpeCBJRTkgY2xpY2stdGhydSBidWdcbiAgLy8gV2UgY2FuJ3QgaGF2ZSB0aGlzIHRyYW5zaXRpb24gaGVyZSBiZWNhdXNlIFdlYktpdCBjYW5jZWxzIHRoZSBjYXJvdXNlbFxuICAvLyBhbmltYXRpb24gaWYgeW91IHRyaXAgdGhpcyB3aGlsZSBpbiB0aGUgbWlkZGxlIG9mIGFub3RoZXIgYW5pbWF0aW9uLlxuXG4gIC8vIFNldCBncmFkaWVudHMgZm9yIGJhY2tncm91bmRzXG4gICYubGVmdCB7XG4gICAgQGluY2x1ZGUgZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6IHJnYmEoMCwwLDAsLjUpLCAkZW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMDAxKSk7XG4gIH1cbiAgJi5yaWdodCB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1ob3Jpem9udGFsKCRzdGFydC1jb2xvcjogcmdiYSgwLDAsMCwuMDAwMSksICRlbmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpKTtcbiAgfVxuXG4gIC8vIEhvdmVyL2ZvY3VzIHN0YXRlXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gICAgY29sb3I6ICRjYXJvdXNlbC1jb250cm9sLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBAaW5jbHVkZSBvcGFjaXR5KC45KTtcbiAgfVxuXG4gIC8vIFRvZ2dsZXNcbiAgLmljb24tcHJldixcbiAgLmljb24tbmV4dCxcbiAgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXG4gIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHotaW5kZXg6IDU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5pY29uLXByZXYsXG4gIC5nbHlwaGljb24tY2hldnJvbi1sZWZ0IHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICB9XG4gIC5pY29uLW5leHQsXG4gIC5nbHlwaGljb24tY2hldnJvbi1yaWdodCB7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB9XG4gIC5pY29uLXByZXYsXG4gIC5pY29uLW5leHQge1xuICAgIHdpZHRoOiAgMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICB9XG5cblxuICAuaWNvbi1wcmV2IHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnXFwyMDM5JzsvLyBTSU5HTEUgTEVGVC1QT0lOVElORyBBTkdMRSBRVU9UQVRJT04gTUFSSyAoVSsyMDM5KVxuICAgIH1cbiAgfVxuICAuaWNvbi1uZXh0IHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnXFwyMDNhJzsvLyBTSU5HTEUgUklHSFQtUE9JTlRJTkcgQU5HTEUgUVVPVEFUSU9OIE1BUksgKFUrMjAzQSlcbiAgICB9XG4gIH1cbn1cblxuLy8gT3B0aW9uYWwgaW5kaWNhdG9yIHBpcHNcbi8vXG4vLyBBZGQgYW4gdW5vcmRlcmVkIGxpc3Qgd2l0aCB0aGUgZm9sbG93aW5nIGNsYXNzIGFuZCBhZGQgYSBsaXN0IGl0ZW0gZm9yIGVhY2hcbi8vIHNsaWRlIHlvdXIgY2Fyb3VzZWwgaG9sZHMuXG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogMTU7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMzAlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAgMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTlweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY2Fyb3VzZWwtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC8vIElFOC05IGhhY2sgZm9yIGV2ZW50IGhhbmRsaW5nXG4gICAgLy9cbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA4LTkgZG9lcyBub3Qgc3VwcG9ydCBjbGlja3Mgb24gZWxlbWVudHMgd2l0aG91dCBhIHNldFxuICAgIC8vIGBiYWNrZ3JvdW5kLWNvbG9yYC4gV2UgY2Fubm90IHVzZSBgZmlsdGVyYCBzaW5jZSB0aGF0J3Mgbm90IHZpZXdlZCBhcyBhXG4gICAgLy8gYmFja2dyb3VuZCBjb2xvciBieSB0aGUgYnJvd3Nlci4gVGh1cywgYSBoYWNrIGlzIG5lZWRlZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2NsaWNrI0ludGVybmV0X0V4cGxvcmVyXG4gICAgLy9cbiAgICAvLyBGb3IgSUU4LCB3ZSBzZXQgc29saWQgYmxhY2sgYXMgaXQgZG9lc24ndCBzdXBwb3J0IGByZ2JhKClgLiBGb3IgSUU5LCB3ZVxuICAgIC8vIHNldCBhbHBoYSB0cmFuc3BhcmVuY3kgZm9yIHRoZSBiZXN0IHJlc3VsdHMgcG9zc2libGUuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCBcXDk7IC8vIElFOFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7IC8vIElFOVxuICB9XG4gIC5hY3RpdmUge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogIDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnO1xuICB9XG59XG5cbi8vIE9wdGlvbmFsIGNhcHRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGlkZGVuIGJ5IGRlZmF1bHQgZm9yIHNtYWxsZXIgdmlld3BvcnRzXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTUlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDIwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiAkY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogJGNhcm91c2VsLXRleHQtc2hhZG93O1xuICAmIC5idG4ge1xuICAgIHRleHQtc2hhZG93OiBub25lOyAvLyBObyBzaGFkb3cgZm9yIGJ1dHRvbiBlbGVtZW50cyBpbiBjYXJvdXNlbC1jYXB0aW9uXG4gIH1cbn1cblxuXG4vLyBTY2FsZSB1cCBjb250cm9scyBmb3IgdGFibGV0cyBhbmQgdXBcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSB7XG5cbiAgLy8gU2NhbGUgdXAgdGhlIGNvbnRyb2xzIGEgc21pZGdlXG4gIC5jYXJvdXNlbC1jb250cm9sIHtcbiAgICAuZ2x5cGhpY29uLWNoZXZyb24tbGVmdCxcbiAgICAuZ2x5cGhpY29uLWNoZXZyb24tcmlnaHQsXG4gICAgLmljb24tcHJldixcbiAgICAuaWNvbi1uZXh0IHtcbiAgICAgIHdpZHRoOiAoJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplICogMS41KTtcbiAgICAgIGhlaWdodDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAqIDEuNSk7XG4gICAgICBtYXJnaW4tdG9wOiAoJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplIC8gLTIpO1xuICAgICAgZm9udC1zaXplOiAoJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplICogMS41KTtcbiAgICB9XG4gICAgLmdseXBoaWNvbi1jaGV2cm9uLWxlZnQsXG4gICAgLmljb24tcHJldiB7XG4gICAgICBtYXJnaW4tbGVmdDogKCRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZSAvIC0yKTtcbiAgICB9XG4gICAgLmdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0LFxuICAgIC5pY29uLW5leHQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAoJGNhcm91c2VsLWNvbnRyb2wtZm9udC1zaXplIC8gLTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgYW5kIGxlZnQgYWxpZ24gdGhlIGNhcHRpb25zXG4gIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgICBsZWZ0OiAyMCU7XG4gICAgcmlnaHQ6IDIwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC8vIE1vdmUgdXAgdGhlIGluZGljYXRvcnNcbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxufVxuIiwiLy9cbi8vIFV0aWxpdHkgY2xhc3Nlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBGbG9hdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmNsZWFyZml4IHtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG4uY2VudGVyLWJsb2NrIHtcbiAgQGluY2x1ZGUgY2VudGVyLWJsb2NrO1xufVxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5wdWxsLWxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5cbi8vIFRvZ2dsaW5nIGNvbnRlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTm90ZTogRGVwcmVjYXRlZCAuaGlkZSBpbiBmYXZvciBvZiAuaGlkZGVuIG9yIC5zci1vbmx5IChhcyBhcHByb3ByaWF0ZSkgaW4gdjMuMC4xXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4udGV4dC1oaWRlIHtcbiAgQGluY2x1ZGUgdGV4dC1oaWRlO1xufVxuXG5cbi8vIEhpZGUgZnJvbSBzY3JlZW5yZWFkZXJzIGFuZCBicm93c2Vyc1xuLy9cbi8vIENyZWRpdDogSFRNTDUgQm9pbGVycGxhdGVcblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4vLyBGb3IgQWZmaXggcGx1Z2luXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5hZmZpeCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbiIsIi8vXG4vLyBSZXNwb25zaXZlOiBVdGlsaXR5IGNsYXNzZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gSUUxMCBpbiBXaW5kb3dzIChQaG9uZSkgOFxuLy9cbi8vIFN1cHBvcnQgZm9yIHJlc3BvbnNpdmUgdmlld3MgdmlhIG1lZGlhIHF1ZXJpZXMgaXMga2luZCBvZiBib3JrZWQgaW4gSUUxMCwgZm9yXG4vLyBTdXJmYWNlL2Rlc2t0b3AgaW4gc3BsaXQgdmlldyBhbmQgZm9yIFdpbmRvd3MgUGhvbmUgOC4gVGhpcyBwYXJ0aWN1bGFyIGZpeFxuLy8gbXVzdCBiZSBhY2NvbXBhbmllZCBieSBhIHNuaXBwZXQgb2YgSmF2YVNjcmlwdCB0byBzbmlmZiB0aGUgdXNlciBhZ2VudCBhbmRcbi8vIGFwcGx5IHNvbWUgY29uZGl0aW9uYWwgQ1NTIHRvICpvbmx5KiB0aGUgU3VyZmFjZS9kZXNrdG9wIFdpbmRvd3MgOC4gTG9vayBhdFxuLy8gb3VyIEdldHRpbmcgU3RhcnRlZCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHRoaXMgYnVnLlxuLy9cbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIGZvbGxvd2luZzpcbi8vXG4vLyBJc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMDQ5N1xuLy8gRG9jczogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vZ2V0dGluZy1zdGFydGVkLyNzdXBwb3J0LWllMTAtd2lkdGhcbi8vIFNvdXJjZTogaHR0cDovL3RpbWthZGxlYy5jb20vMjAxMy8wMS93aW5kb3dzLXBob25lLTgtYW5kLWRldmljZS13aWR0aC9cbi8vIFNvdXJjZTogaHR0cDovL3RpbWthZGxlYy5jb20vMjAxMi8xMC9pZTEwLXNuYXAtbW9kZS1hbmQtcmVzcG9uc2l2ZS1kZXNpZ24vXG5cbkBhdC1yb290IHtcbiAgQC1tcy12aWV3cG9ydCB7XG4gICAgd2lkdGg6IGRldmljZS13aWR0aDtcbiAgfVxufVxuXG5cbi8vIFZpc2liaWxpdHkgdXRpbGl0aWVzXG4vLyBOb3RlOiBEZXByZWNhdGVkIC52aXNpYmxlLXhzLCAudmlzaWJsZS1zbSwgLnZpc2libGUtbWQsIGFuZCAudmlzaWJsZS1sZyBhcyBvZiB2My4yLjBcblxuQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy52aXNpYmxlLXhzJyk7XG5AaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLnZpc2libGUtc20nKTtcbkBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcudmlzaWJsZS1tZCcpO1xuQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy52aXNpYmxlLWxnJyk7XG5cbi52aXNpYmxlLXhzLWJsb2NrLFxuLnZpc2libGUteHMtaW5saW5lLFxuLnZpc2libGUteHMtaW5saW5lLWJsb2NrLFxuLnZpc2libGUtc20tYmxvY2ssXG4udmlzaWJsZS1zbS1pbmxpbmUsXG4udmlzaWJsZS1zbS1pbmxpbmUtYmxvY2ssXG4udmlzaWJsZS1tZC1ibG9jayxcbi52aXNpYmxlLW1kLWlubGluZSxcbi52aXNpYmxlLW1kLWlubGluZS1ibG9jayxcbi52aXNpYmxlLWxnLWJsb2NrLFxuLnZpc2libGUtbGctaW5saW5lLFxuLnZpc2libGUtbGctaW5saW5lLWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCcudmlzaWJsZS14cycpO1xufVxuLnZpc2libGUteHMtYmxvY2sge1xuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS14cy1pbmxpbmUge1xuICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi14cy1tYXgpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUteHMtaW5saW5lLWJsb2NrIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzY3JlZW4teHMtbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc20tbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1zbS1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCcudmlzaWJsZS1zbScpO1xufVxuLnZpc2libGUtc20tYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXNtLWlubGluZSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXNtLWlubGluZS1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tc20tbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbWQtbWluKSBhbmQgKG1heC13aWR0aDogJHNjcmVlbi1tZC1tYXgpIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS12aXNpYmlsaXR5KCcudmlzaWJsZS1tZCcpO1xufVxuLnZpc2libGUtbWQtYmxvY2sge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLW1kLWlubGluZSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLW1kLWlubGluZS1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgYW5kIChtYXgtd2lkdGg6ICRzY3JlZW4tbWQtbWF4KSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUtbGcnKTtcbn1cbi52aXNpYmxlLWxnLWJsb2NrIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtbGctaW5saW5lIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tbGctbWluKSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLWxnLWlubGluZS1ibG9jayB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAkc2NyZWVuLXhzLW1heCkge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLmhpZGRlbi14cycpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLXNtLW1heCkge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLmhpZGRlbi1zbScpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIGFuZCAobWF4LXdpZHRoOiAkc2NyZWVuLW1kLW1heCkge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLWludmlzaWJpbGl0eSgnLmhpZGRlbi1tZCcpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHtcbiAgQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy5oaWRkZW4tbGcnKTtcbn1cblxuXG4vLyBQcmludCB1dGlsaXRpZXNcbi8vXG4vLyBNZWRpYSBxdWVyaWVzIGFyZSBwbGFjZWQgb24gdGhlIGluc2lkZSB0byBiZSBtaXhpbi1mcmllbmRseS5cblxuLy8gTm90ZTogRGVwcmVjYXRlZCAudmlzaWJsZS1wcmludCBhcyBvZiB2My4yLjBcblxuQGluY2x1ZGUgcmVzcG9uc2l2ZS1pbnZpc2liaWxpdHkoJy52aXNpYmxlLXByaW50Jyk7XG5cbkBtZWRpYSBwcmludCB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtdmlzaWJpbGl0eSgnLnZpc2libGUtcHJpbnQnKTtcbn1cbi52aXNpYmxlLXByaW50LWJsb2NrIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnZpc2libGUtcHJpbnQtaW5saW5lIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXByaW50LWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtaW52aXNpYmlsaXR5KCcuaGlkZGVuLXByaW50Jyk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBaUNBQSw0RUFBNEU7QUFRNUUsQUFBQSxJQUFJLENBQUM7RUFDSCxXQUFXLEVBQUUsVUFBVTtFQUN2QixvQkFBb0IsRUFBRSxJQUFJO0VBQzFCLHdCQUF3QixFQUFFLElBQUksR0FDL0I7O0FBTUQsQUFBQSxJQUFJLENBQUM7RUFDSCxNQUFNLEVBQUUsQ0FBQyxHQUNWOztBQVlELEFBQUEsT0FBTztBQUNQLEFBQUEsS0FBSztBQUNMLEFBQUEsT0FBTztBQUNQLEFBQUEsVUFBVTtBQUNWLEFBQUEsTUFBTTtBQUNOLEFBQUEsTUFBTTtBQUNOLEFBQUEsTUFBTTtBQUNOLEFBQUEsTUFBTTtBQUNOLEFBQUEsSUFBSTtBQUNKLEFBQUEsSUFBSTtBQUNKLEFBQUEsR0FBRztBQUNILEFBQUEsT0FBTztBQUNQLEFBQUEsT0FBTyxDQUFDO0VBQ04sT0FBTyxFQUFFLEtBQUssR0FDZjs7QUFPRCxBQUFBLEtBQUs7QUFDTCxBQUFBLE1BQU07QUFDTixBQUFBLFFBQVE7QUFDUixBQUFBLEtBQUssQ0FBQztFQUNKLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLGNBQWMsRUFBRSxRQUFR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 */", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(23)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"glyphicons\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/Users/tinuswagner/CompSci/PersonalSite/node_modules/bootstrap-loader/.bootstraprc-3-default\",\"bootstrapPath\":\"/Users/tinuswagner/CompSci/PersonalSite/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js", function() {
			var newContent = require("!!../css-loader/index.js!../resolve-url-loader/index.js!../sass-loader/lib/loader.js?sourceMap!./lib/bootstrap.styles.loader.js?{\"bootstrapVersion\":3,\"useCustomIconFontPath\":false,\"extractStyles\":false,\"styleLoaders\":[\"style\",\"css\",\"sass\"],\"styles\":[\"mixins\",\"normalize\",\"print\",\"glyphicons\",\"scaffolding\",\"type\",\"code\",\"grid\",\"tables\",\"forms\",\"buttons\",\"component-animations\",\"dropdowns\",\"button-groups\",\"input-groups\",\"navs\",\"navbar\",\"breadcrumbs\",\"pagination\",\"pager\",\"labels\",\"badges\",\"jumbotron\",\"thumbnails\",\"alerts\",\"progress-bars\",\"media\",\"list-group\",\"panels\",\"wells\",\"responsive-embed\",\"close\",\"modals\",\"tooltip\",\"popovers\",\"carousel\",\"utilities\",\"responsive-utilities\"],\"scripts\":[\"transition\",\"alert\",\"button\",\"carousel\",\"collapse\",\"dropdown\",\"modal\",\"tooltip\",\"popover\",\"scrollspy\",\"tab\",\"affix\"],\"configFilePath\":\"/Users/tinuswagner/CompSci/PersonalSite/node_modules/bootstrap-loader/.bootstraprc-3-default\",\"bootstrapPath\":\"/Users/tinuswagner/CompSci/PersonalSite/node_modules/bootstrap-sass\",\"bootstrapRelPath\":\"../bootstrap-sass\"}!./no-op.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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JbwmFCZ+JuYnUCe8J/goNChwKKwpoCnMKiYqSiqEKworeiwILGgsuizsLRwtiC30LiguZi6iLtgvDi9GL34vsi/4MD4whDDSMRIxYDGuMegyJDJeMpoy3jMiMz4zaDO2NBg0YDSoNNI1LDWeNeg2PjZ8Ntw3GjdON5I31DgQOEI4hjjIOQo5SjmIOcw6HDpsOpo63jugO9w8GDxQPKI8+D0yPew+Oj6MPtQ/KD9uP6o/+kBIQIBAxkECQX5CGEKoQu5DGENCQ3ZDoEPKRBBEYESuRPZFWkW2RgZGdEa0RvZHNkd2R7ZH9kgWSDJITkhqSIZIzEkSSThJXkmESapKAkouSlIAAQAAARcApwARAAAAAAACAAAAAQABAAAAQAAuAAAAAAAAABAAxgABAAAAAAATABIAAAADAAEECQAAAGoAEgADAAEECQABACgAfAADAAEECQACAA4ApAADAAEECQADAEwAsgADAAEECQAEADgA/gADAAEECQAFAHgBNgADAAEECQAGADYBrgADAAEECQAIABYB5AADAAEECQAJABYB+gADAAEECQALACQCEAADAAEECQAMACQCNAADAAEECQATACQCWAADAAEECQDIABYCfAADAAEECQDJADACkgADAAEECdkDABoCwnd3dy5nbHlwaGljb25zLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQA0ACAAYgB5ACAASgBhAG4AIABLAG8AdgBhAHIAaQBrAC4AIABBAGwAbAAgAHIAaQBnAGgAdABzACAAcgBlAHMAZQByAHYAZQBkAC4ARwBMAFkAUABIAEkAQwBPAE4AUwAgAEgAYQBsAGYAbABpAG4AZwBzAFIAZQBnAHUAbABhAHIAMQAuADAAMAA5ADsAVQBLAFcATgA7AEcATABZAFAASABJAEMATwBOAFMASABhAGwAZgBsAGkAbgBnAHMALQBSAGUAZwB1AGwAYQByAEcATABZAFAASABJAEMATwBOAFMAIABIAGEAbABmAGwAaQBuAGcAcwAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwADAAOQA7AFAAUwAgADAAMAAxAC4AMAAwADkAOwBoAG8AdABjAG8AbgB2ACAAMQAuADAALgA3ADAAOwBtAGEAawBlAG8AdABmAC4AbABpAGIAMgAuADUALgA1ADgAMwAyADkARwBMAFkAUABIAEkAQwBPAE4AUwBIAGEAbABmAGwAaQBuAGcAcwAtAFIAZQBnAHUAbABhAHIASgBhAG4AIABLAG8AdgBhAHIAaQBrAEoAYQBuACAASwBvAHYAYQByAGkAawB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQB3AHcAdwAuAGcAbAB5AHAAaABpAGMAbwBuAHMALgBjAG8AbQBXAGUAYgBmAG8AbgB0ACAAMQAuADAAVwBlAGQAIABPAGMAdAAgADIAOQAgADAANgA6ADMANgA6ADAANwAgADIAMAAxADQARgBvAG4AdAAgAFMAcQB1AGkAcgByAGUAbAAAAAIAAAAAAAD/tQAyAAAAAAAAAAAAAAAAAAAAAAAAAAABFwAAAQIBAwADAA0ADgEEAJYBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMA7wEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBUgFTAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BfwGAAYEBggGDAYQBhQGGAYcBiAGJAYoBiwGMAY0BjgGPAZABkQGSAZMBlAGVAZYBlwGYAZkBmgGbAZwBnQGeAZ8BoAGhAaIBowGkAaUBpgGnAagBqQGqAasBrAGtAa4BrwGwAbEBsgGzAbQBtQG2AbcBuAG5AboBuwG8Ab0BvgG/AcABwQHCAcMBxAHFAcYBxwHIAckBygHLAcwBzQHOAc8B0AHRAdIB0wHUAdUB1gHXAdgB2QHaAdsB3AHdAd4B3wHgAeEB4gHjAeQB5QHmAecB6AHpAeoB6wHsAe0B7gHvAfAB8QHyAfMB9AH1AfYB9wH4AfkB+gH7AfwB/QH+Af8CAAIBAgICAwIEAgUCBgIHAggCCQIKAgsCDAINAg4CDwIQAhECEgZnbHlwaDEGZ2x5cGgyB3VuaTAwQTAHdW5pMjAwMAd1bmkyMDAxB3VuaTIwMDIHdW5pMjAwMwd1bmkyMDA0B3VuaTIwMDUHdW5pMjAwNgd1bmkyMDA3B3VuaTIwMDgHdW5pMjAwOQd1bmkyMDBBB3VuaTIwMkYHdW5pMjA1RgRFdXJvB3VuaTIwQkQHdW5pMjMxQgd1bmkyNUZDB3VuaTI2MDEHdW5pMjZGQQd1bmkyNzA5B3VuaTI3MEYHdW5pRTAwMQd1bmlFMDAyB3VuaUUwMDMHdW5pRTAwNQd1bmlFMDA2B3VuaUUwMDcHdW5pRTAwOAd1bmlFMDA5B3VuaUUwMTAHdW5pRTAxMQd1bmlFMDEyB3VuaUUwMTMHdW5pRTAxNAd1bmlFMDE1B3VuaUUwMTYHdW5pRTAxNwd1bmlFMDE4B3VuaUUwMTkHdW5pRTAyMAd1bmlFMDIxB3VuaUUwMjIHdW5pRTAyMwd1bmlFMDI0B3VuaUUwMjUHdW5pRTAyNgd1bmlFMDI3B3VuaUUwMjgHdW5pRTAyOQd1bmlFMDMwB3VuaUUwMzEHdW5pRTAzMgd1bmlFMDMzB3VuaUUwMzQHdW5pRTAzNQd1bmlFMDM2B3VuaUUwMzcHdW5pRTAzOAd1bmlFMDM5B3VuaUUwNDAHdW5pRTA0MQd1bmlFMDQyB3VuaUUwNDMHdW5pRTA0NAd1bmlFMDQ1B3VuaUUwNDYHdW5pRTA0Nwd1bmlFMDQ4B3VuaUUwNDkHdW5pRTA1MAd1bmlFMDUxB3VuaUUwNTIHdW5pRTA1Mwd1bmlFMDU0B3VuaUUwNTUHdW5pRTA1Ngd1bmlFMDU3B3VuaUUwNTgHdW5pRTA1OQd1bmlFMDYwB3VuaUUwNjIHdW5pRTA2Mwd1bmlFMDY0B3VuaUUwNjUHdW5pRTA2Ngd1bmlFMDY3B3VuaUUwNjgHdW5pRTA2OQd1bmlFMDcwB3VuaUUwNzEHdW5pRTA3Mgd1bmlFMDczB3VuaUUwNzQHdW5pRTA3NQd1bmlFMDc2B3VuaUUwNzcHdW5pRTA3OAd1bmlFMDc5B3VuaUUwODAHdW5pRTA4MQd1bmlFMDgyB3VuaUUwODMHdW5pRTA4NAd1bmlFMDg1B3VuaUUwODYHdW5pRTA4Nwd1bmlFMDg4B3VuaUUwODkHdW5pRTA5MAd1bmlFMDkxB3VuaUUwOTIHdW5pRTA5Mwd1bmlFMDk0B3VuaUUwOTUHdW5pRTA5Ngd1bmlFMDk3B3VuaUUxMDEHdW5pRTEwMgd1bmlFMTAzB3VuaUUxMDQHdW5pRTEwNQd1bmlFMTA2B3VuaUUxMDcHdW5pRTEwOAd1bmlFMTA5B3VuaUUxMTAHdW5pRTExMQd1bmlFMTEyB3VuaUUxMTMHdW5pRTExNAd1bmlFMTE1B3VuaUUxMTYHdW5pRTExNwd1bmlFMTE4B3VuaUUxMTkHdW5pRTEyMAd1bmlFMTIxB3VuaUUxMjIHdW5pRTEyMwd1bmlFMTI0B3VuaUUxMjUHdW5pRTEyNgd1bmlFMTI3B3VuaUUxMjgHdW5pRTEyOQd1bmlFMTMwB3VuaUUxMzEHdW5pRTEzMgd1bmlFMTMzB3VuaUUxMzQHdW5pRTEzNQd1bmlFMTM2B3VuaUUxMzcHdW5pRTEzOAd1bmlFMTM5B3VuaUUxNDAHdW5pRTE0MQd1bmlFMTQyB3VuaUUxNDMHdW5pRTE0NAd1bmlFMTQ1B3VuaUUxNDYHdW5pRTE0OAd1bmlFMTQ5B3VuaUUxNTAHdW5pRTE1MQd1bmlFMTUyB3VuaUUxNTMHdW5pRTE1NAd1bmlFMTU1B3VuaUUxNTYHdW5pRTE1Nwd1bmlFMTU4B3VuaUUxNTkHdW5pRTE2MAd1bmlFMTYxB3VuaUUxNjIHdW5pRTE2Mwd1bmlFMTY0B3VuaUUxNjUHdW5pRTE2Ngd1bmlFMTY3B3VuaUUxNjgHdW5pRTE2OQd1bmlFMTcwB3VuaUUxNzEHdW5pRTE3Mgd1bmlFMTczB3VuaUUxNzQHdW5pRTE3NQd1bmlFMTc2B3VuaUUxNzcHdW5pRTE3OAd1bmlFMTc5B3VuaUUxODAHdW5pRTE4MQd1bmlFMTgyB3VuaUUxODMHdW5pRTE4NAd1bmlFMTg1B3VuaUUxODYHdW5pRTE4Nwd1bmlFMTg4B3VuaUUxODkHdW5pRTE5MAd1bmlFMTkxB3VuaUUxOTIHdW5pRTE5Mwd1bmlFMTk0B3VuaUUxOTUHdW5pRTE5Nwd1bmlFMTk4B3VuaUUxOTkHdW5pRTIwMAd1bmlFMjAxB3VuaUUyMDIHdW5pRTIwMwd1bmlFMjA0B3VuaUUyMDUHdW5pRTIwNgd1bmlFMjA5B3VuaUUyMTAHdW5pRTIxMQd1bmlFMjEyB3VuaUUyMTMHdW5pRTIxNAd1bmlFMjE1B3VuaUUyMTYHdW5pRTIxOAd1bmlFMjE5B3VuaUUyMjEHdW5pRTIyMwd1bmlFMjI0B3VuaUUyMjUHdW5pRTIyNgd1bmlFMjI3B3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTIzNAd1bmlFMjM1B3VuaUUyMzYHdW5pRTIzNwd1bmlFMjM4B3VuaUUyMzkHdW5pRTI0MAd1bmlFMjQxB3VuaUUyNDIHdW5pRTI0Mwd1bmlFMjQ0B3VuaUUyNDUHdW5pRTI0Ngd1bmlFMjQ3B3VuaUUyNDgHdW5pRTI0OQd1bmlFMjUwB3VuaUUyNTEHdW5pRTI1Mgd1bmlFMjUzB3VuaUUyNTQHdW5pRTI1NQd1bmlFMjU2B3VuaUUyNTcHdW5pRTI1OAd1bmlFMjU5B3VuaUUyNjAHdW5pRjhGRgZ1MUY1MTEGdTFGNkFBAAAAAAFUUMMXAAA="

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff2;base64,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"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// // // import 'jquery';
// // import $ from "jquery";
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
__webpack_require__(1);
// require('./src/scss/app.css');


/***/ })
/******/ ]);