'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = require('./test1');

Object.keys(_test).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test[key];
    }
  });
});

var _test2 = require('./test2');

Object.keys(_test2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test2[key];
    }
  });
});

var _test3 = require('./test3');

Object.keys(_test3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test3[key];
    }
  });
});

var _test4 = require('./test4');

Object.keys(_test4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _test4[key];
    }
  });
});
