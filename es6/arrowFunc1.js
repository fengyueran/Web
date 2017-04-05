'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable no-console, no-unused-vars, no-redeclare */
var testArrowFunction = function testArrowFunction(x) {
    console.log('you are in testArrowFunction');
    /*
    等价于
    function testArrowFunction(x) {
      console.log(x);
    }
    */
    console.log(x);
    //一条语句不需要大括号括起来，也不需要显示return也可以获得num1 + num2的值
    var sum1 = function sum1(num1, num2) {
        return num1 + num2;
    };
    console.log(sum1(10, 20));

    //大于一条语句需要用大括号括起来，且需要显示return(大括号括起来后就必须return，即使只有一条语句)
    var sum2 = function sum2(num1, num2) {
        var a = 0;
        return num1 + num2; //不显示return就得不到num1 + num2值
    };
    console.log(sum2(50, 60));

    var objct = { student: 'xiaoming' };

    //由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
    var returnObj = function returnObj() {
        return { student: 'xiaoming' };
    }; //{ student: 'xiaoming' }
    //const returnObj = () => {student:"xiaoming"};//undefined
    console.log(returnObj());

    var handler = {
        id: '123456',

        //箭头函数使this一直指向定义时所在的作用域，handler对象，箭头
        init: function init() {
            var _this2 = this;

            document.addEventListener('click', function (event) {
                return _this2.doSomething(event.type);
            }, false);
        },

        doSomething: function doSomething(type) {
            console.log('Handling ' + type + ' for ' + this.id);
        }
    };

    //下面的代码中，转换后的ES5版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this。
    // ES6
    function foo() {
        var _this3 = this;

        setTimeout(function () {
            console.log('id:', _this3.id);
        }, 100);
    }

    // ES5
    function foo() {
        var _this = this;
        setTimeout(function () {
            console.log('id:', _this.id);
        }, 100);
    }

    // const seriesArrowFunc = (a)=>(b)=>(c)=>a+b+c;
    var seriesArrowFunc = function seriesArrowFunc(a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    };
    var seriesArrowFunc1 = seriesArrowFunc(10)(20)(30);
    console.log(seriesArrowFunc1);
};
testArrowFunction();
exports.testArrowFunction = testArrowFunction;
