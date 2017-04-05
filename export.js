
//node export method,如果有module.exports则忽略exports
exports.exportMethod1 = function () {
  console.log("export method1");
}

function exportMethod2 () {
  console.log("export method2");
}

function exportMethod3 () {
  console.log("export method3");
}

var i = 0;
//如果你想要你的模块成为一个特别的对象类型（类、数组等），那么使用module.exports；如果你希望你的模块成为一个传统的模块实例（module instance），使用exports。
module.exports.exportMethod4 = function () {
  i++;
  console.log("export method4 -------i=%d",i);
}

//屏蔽module.exports.exportMethod4
module.exports = {exportMethod2, exportMethod3};
