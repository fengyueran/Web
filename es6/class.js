//JavaScript语言的传统方法是通过构造函数，定义并生成新对象
/*
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log(p.toString());
*/

//上面的代码用ES6的“类”改写，就是下面这样
class Point {
  //new命令生成对象实例时，自动调用constructor方法
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var p = new Point(1, 2);
console.log(p.toString());


//Class表达式
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}("xinghun");//person是一个立即执行的类的实例。
person.sayName();

//Class的继承
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

let colorPoint = new ColorPoint(1,2,"blue");
console.log(colorPoint.toString());
