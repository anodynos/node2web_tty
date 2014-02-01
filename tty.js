/** **nodejs 'tty' core module.**

From [node2web](http://github.com/anodynos/node2web) collection,
via [browserify-CDN](http://wzrd.in/),
exposed as 'tty' to [bower](http://bower.io) for *browser* usage.

Latest [browserify-CDN](http://wzrd.in/) reported **version: 'v0.10.12'** 
**/
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.tty=e():"undefined"!=typeof global?global.tty=e():"undefined"!=typeof self&&(self.tty=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.isatty = function () { return false; };

function ReadStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.ReadStream = ReadStream;

function WriteStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.WriteStream = WriteStream;

},{}]},{},[1])
(1)
});
;