//从array.js中引入对象
import {convertToArray, findInArray} from './array';
convertToArray();
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;



const exportMethod1 = () => {
  console.log("export method 1")
}

const exportMethod2 = () => {
  console.log("export method 2")
}


//对外部输出变量，方法,常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
export {firstName, lastName, year, exportMethod1, exportMethod2 as exportMethod};
