/** 'tty' nodejs core module browserify-ied with `--standalone tty`. Should support all module systems (commonjs, AMD & `window.tty`) - check browserify docs.

From [node2web](http://github.com/anodynos/node2web) collection,
should/will be exposed as 'tty' to [bower](http://bower.io) for *browser* usage.

browserify version: '3.46.1', build date 'Wed Oct 08 2014 17:38:40 GMT+0300 (EEST)' 
**/
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.tty=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
exports.isatty = function () { return false; };

function ReadStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.ReadStream = ReadStream;

function WriteStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.WriteStream = WriteStream;

},{}],2:[function(_dereq_,module,exports){
module.exports = _dereq_('tty');
},{"tty":1}]},{},[2])
(2)
});