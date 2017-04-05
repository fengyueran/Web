/* eslint-disable no-console, no-unused-vars, no-redeclare */
const testArrowFunction = (x) => {
    console.log('you are in testArrowFunction');
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
        const a = 0;
        return  num1 + num2;//不显示return就得不到num1 + num2值
    };
    console.log(sum2(50,60));


    let objct = {student:'xiaoming'};

    //由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
    const returnObj = () => ({student:'xiaoming'});//{ student: 'xiaoming' }
    //const returnObj = () => {student:"xiaoming"};//undefined
    console.log(returnObj());


    let handler = {
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
        let _this = this;
        setTimeout(function () {
            console.log('id:', _this.id);
        }, 100);
    }

        // const seriesArrowFunc = (a)=>(b)=>(c)=>a+b+c;
    const seriesArrowFunc = (a)=> {
        return  (b) => {
            return (c) => {
                return  a+ b + c;
            };
        };
    };
    const seriesArrowFunc1 = seriesArrowFunc(10)(20)(30);
    console.log(seriesArrowFunc1);
};
testArrowFunction();
export{testArrowFunction};
