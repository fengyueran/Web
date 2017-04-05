"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var timeout = function timeout(ms) {
  return new Promise(function (resolve, reject) {
    //Promise新建后立即执行
    console.log('Promise');
    //ms毫秒后执行匿名方法=>resolve后执行then方法
    setTimeout(function () {
      var status = false;
      if (status) {
        resolve("finish");
      } else {
        reject("error");
      }
    }, ms, 'done');
  });
};

timeout(1000).then(function (value) {
  console.log("1000ms已经过了");
  //为resolve传过来的参数
  console.log(value);
}, function (error) {
  //想要接收失败时的调用必须实现失败时回调方法
  console.log(error);
});

//链式写法，以上函数等价为：
var timeout1 = function timeout1(ms) {
  return new Promise(function (resolve, reject) {
    //Promise新建后立即执行
    console.log('Promise');
    //ms毫秒后执行匿名方法=>resolve后执行then方法
    setTimeout(function () {
      var status = false;
      if (status) {
        resolve("finish");
      } else {
        reject("error");
      }
    }, ms, 'done');
  }).then(function (value) {
    console.log("1000ms已经过了");
    //为resolve传过来的参数
    console.log(value);
  }, function (error) {
    //想要接收失败时的调用必须实现失败时回调方法
    console.log(error);
  });
};
timeout1(1000);

var helloword = function helloword() {
  console.log('hello world');
};
exports.default = { timeout: timeout, timeout1: timeout1 };
exports.helloword = helloword;
