function testVariable() {
  //let 声明的变量一定要在声明后使用，否则报错。
  const a = 1;
  let b = 2;
  console.log(a,b,c);//1 2 undefined
  //var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined
  var c = 3;
}

function testAssign() {
  //变量的解构赋值,ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
  //数组的解构
  let [a,b,c] = [1,2,3];
  //对象的解构
  let { foo, bar } = {bar: "bbb" , foo: "aaa"};//变量与属性同名来取值
  console.log([a,b,c]);//[ 1, 2, 3 ]
  console.log({ foo, bar });//{ foo: 'aaa', bar: 'bbb' }

  let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
  console.log(jsonData.id)//42
}

function testArray() {
  let arr = [1,2,3,4];
  arr.forEach(function(p) {
    //console.log(p)
  });

  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
//转换为真正的数组，Array.from
 let realArr = Array.from(arrayLike);
 //转换为真正的数组，扩展运算符（...）
 //let realArr1 =[...arrayLike];
 realArr.forEach(function(p) {
   console.log(p)
 });
}

function testFuction() {
  //rest参数
  //ES6 引入 rest 参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
  //ES6 引入了块级作用域({}范围内)，明确允许在块级作用域之中声明函数
  //注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
  function add(array,...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}
var a = [];
//add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。
console.log(add(a,2, 5, 3)); // 10

//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
console.log(...[1, 2, 3]);//1 2 3
}

const testArrowFunction = (x) => {
    /*
    等价于
    function testArrowFunction(x) {
      console.log(x);
    }
    */
    console.log(x);
    //一条语句不需要大括号括起来，也不需要显示return也可以获得num1 + num2的值
    const sum1 = (num1, num2) =>  num1 + num2;
    console.log(sum1(10,20));

   //大于一条语句需要用大括号括起来，且需要显示return(大括号括起来后就必须return，即使只有一条语句)
    const sum2 = (num1, num2) =>  {
       let a = 0;
       return  num1 + num2;//不显示return就得不到num1 + num2值
    }
    console.log(sum2(50,60));


    let objct = {student:"xiaoming"};

    //由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
    const returnObj = () => ({student:"xiaoming"});//{ student: 'xiaoming' }
    //const returnObj = () => {student:"xiaoming"};//undefined
    console.log(returnObj());


    var handler = {
     id: '123456',

  //箭头函数使this一直指向定义时所在的作用域，handler对象，箭头
     init: function() {
      document.addEventListener('click',
        event => this.doSomething(event.type), false);
     },

     doSomething: function(type) {
      console.log('Handling ' + type  + ' for ' + this.id);
     }
    };

    //下面的代码中，转换后的ES5版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this。
    // ES6
    function foo() {
    setTimeout(() => {
    console.log('id:', this.id);
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
    const seriesArrowFunc = (a)=> {
    return  (b) => {
        (c) => {
        return  a+ b + c;
        }
      }
    }
    const seriesArrowFunc1 = seriesArrowFunc(10)(20)(30);
    console.log(seriesArrowFunc1);
}



testVariable();
testAssign();
testArray();
testFuction();
testArrowFunction(1000);
