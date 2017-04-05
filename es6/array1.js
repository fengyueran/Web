'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

//1.转换为数组
var convertToArray = function convertToArray() {
    console.log('you are in convertToArray');
    var arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    //1）Array.from：转换为真正的数组
    var realArr = Array.from(arrayLike);

    //2）扩展运算符（...）：转换为真正的数组，
    //let realArr1 =[...arrayLike];

    //3）Array()：只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。
    Array(); // []
    Array(3); // [, , ,]
    Array(3, 11, 8); // [3, 11, 8]

    //4）Array.of：用于将一组值，转换为数组，基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一
    Array.of(1, 2, 3); //[1,2,3]

    realArr.forEach(function (p) {
        console.log(p);
    });
};
convertToArray();

//2.数组实例的find()
var findInArray = function findInArray() {
    var array = Array.of(1, 2, 3, 4, 5, 6);
    //1）返回第一个满足条件的值
    var findedValue1 = array.find(function (value) {
        return value > 3; //4
    });
    console.log(findedValue1);

    //2）find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
    var findedValue2 = array.find(function (value, index, arr) {
        return value > 3; //
    });
    console.log(findedValue2);

    //3）返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
    array.findIndex(function (value, index, arr) {
        return value > 3; //3
    });
};
findInArray();

//3.数组实例的fill()
var fillArray = function fillArray() {
    var array1 = Array.of(1, 2, 3);
    //1）fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
    var filledArray1 = array1.fill(7);
    console.log(filledArray1); //[7,7,7]

    //2）fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
    var array2 = Array.of(1, 2, 3, 5, 6, 7);
    var filledArray2 = array2.fill(7, 2, 3);
    console.log(filledArray2); //[ 1, 2, 7, 5, 6, 7 ]
};
fillArray();

//4.数组的遍历
var forEachArray = function forEachArray() {
    var array = Array.of(1, 2, 3, 4, 5);
    for (var index in array) {
        console.log(index); //0,1,2,3,4,5
    }

    //1）keys()是对键名的遍历
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _index = _step.value;

            console.log(_index); //0,1,2,3,4,5
        }

        //2）values()是对键值的遍历
        // for (let elem of array.values()) {
        //   console.log(elem);
        // }

        //3）entries()是对键值对的遍历
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = array.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var elem = _step2.value;

            //[index, elem]
            console.log(elem); //[ 0, 1 ] [ 1, 2 ]...[ 5, 6 ]
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    console.log(array);
};
forEachArray();

var array1 = Array.of(7, 6, 5, 4, 3, 2);
// for(const src of  array1) {
//   console.log(src);
// }
var BreakException = {};
try {
    Object.keys(array1).forEach(function (key) {
        console.log(array1[key]);
        if (array1[key] == 5) {
            throw BreakException;
        }
    });
} catch (e) {
    console.log();
}

exports.convertToArray = convertToArray;
exports.findInArray = findInArray;
exports.fillArray = fillArray;
exports.forEachArray = forEachArray;
