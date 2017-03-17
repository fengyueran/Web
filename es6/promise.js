const timeout = (ms) => {
  return new Promise((resolve,reject) => {
    //Promise新建后立即执行
    console.log('Promise');
    //ms毫秒后执行匿名方法=>resolve后执行then方法
    setTimeout(() => {
      let status = false;
      if (status) {
        resolve("finish");
      } else {
        reject("error");
      }
    },ms,'done');
  });
}

timeout(1000).then((value) => {
  console.log("1000ms已经过了");
  //为resolve传过来的参数
  console.log(value);
}, (error) => {//想要接收失败时的调用必须实现失败时回调方法
  console.log(error);
});

//链式写法，以上函数等价为：
const timeout1 = (ms) => {
  return new Promise((resolve,reject) => {
    //Promise新建后立即执行
    console.log('Promise');
    //ms毫秒后执行匿名方法=>resolve后执行then方法
    setTimeout(() => {
      let status = false;
      if (status) {
        resolve("finish");
      } else {
        reject("error");
      }
    },ms,'done');
  }).then((value) => {
    console.log("1000ms已经过了");
    //为resolve传过来的参数
    console.log(value);
  }, (error) => {//想要接收失败时的调用必须实现失败时回调方法
    console.log(error);
  });
}
timeout1(1000);
