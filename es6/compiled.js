'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exportMethod = exports.exportMethod1 = exports.year = exports.lastName = exports.firstName = undefined;

var _array = require('./array1');

var _arrowFunc = require('./arrowFunc1');

var myFunc = _interopRequireWildcard(_arrowFunc);

var _promise = require('./promise1');

var _promise2 = _interopRequireDefault(_promise);

var _testIndex = require('./testIndex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//3.import进promise.js中导出的default对象和helloword方法
//1.从array.js中引入array.js中export的方法
(0, _array.convertToArray)();
//2.将模块整体加载到对象myFunc上,arrowFunc上的所有方法通过myFunc.得到

myFunc.testArrowFunction();
_promise2.default.timeout();
_promise2.default.timeout1();
(0, _promise.helloword)();
_testIndex.test.myFunc1();

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

var exportMethod1 = function exportMethod1() {
    console.log('export method 1');
};

var exportMethod2 = function exportMethod2() {
    console.log('export method 2');
};

var exportMethod3 = function exportMethod3() {
    console.log('export method 3');
};

var exportMethod4 = function exportMethod4() {
    console.log('export method 4');
};

//对外部输出变量，方法,常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
exports.firstName = firstName;
exports.lastName = lastName;
exports.year = year;
exports.exportMethod1 = exportMethod1;
exports.exportMethod = exportMethod2;
exports.default = { exportMethod3: exportMethod3, exportMethod4: exportMethod4 };
/*
Export Syntax

// default exports
export default 42;
export default {};
export default [];
export default (1 + 2);
export default foo;
export default function () {}
export default class {}
export default function foo () {}
export default class foo {}

// variables exports
export var foo = 1;
export var foo = function () {};
export var bar;
export let foo = 2;
export let bar;
export const foo = 3;
export function foo () {}
export class foo {}

// named exports
export {};
export {foo};
export {foo, bar};
export {foo as bar};
export {foo as default};
export {foo as default, bar};

// exports from
export * from "foo";
export {} from "foo";
export {foo} from "foo";
export {foo, bar} from "foo";
export {foo as bar} from "foo";
export {foo as default} from "foo";
export {foo as default, bar} from "foo";
export {default} from "foo";
export {default as foo} from "foo";
Import Syntax

// default imports
import foo from "foo";
import {default as foo} from "foo";

// named imports
import {} from "foo";
import {bar} from "foo";
import {bar, baz} from "foo";
import {bar as baz} from "foo";
import {bar as baz, xyz} from "foo";

// glob imports
import * as foo from "foo";

// mixing imports
import foo, {baz as xyz} from "foo";
import foo, * as bar from "foo";

// just import
import "foo";
*/
