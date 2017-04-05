//1.从array.js中引入array.js中export的方法
import {convertToArray,findInArray} from './array';
//2.将模块整体加载到对象myFunc上,arrowFunc上的所有方法通过myFunc.得到
import * as myFunc from'./arrowFunc';
//3.import进promise.js中导出的default对象和helloword方法
import myPromise,{helloword} from'./promise';

import * as test from './testIndex';

convertToArray();
myFunc.testArrowFunction();
myPromise.timeout();
myPromise.timeout1();
helloword();
test.myFunc1();

let firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;



const exportMethod1 = () => {
    console.log('export method 1');
};

const exportMethod2 = () => {
    console.log('export method 2');
};

const exportMethod3 = () => {
    console.log('export method 3');
};

const exportMethod4 = () => {
    console.log('export method 4');
};

//对外部输出变量，方法,常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
export {firstName, lastName, year, exportMethod1, exportMethod2 as exportMethod};
export default {exportMethod3, exportMethod4};
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
