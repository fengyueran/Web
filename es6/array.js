
//1.转换为数组
const convertToArray = () => {
    console.log('you are in convertToArray');
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    //1）Array.from：转换为真正的数组
    let realArr = Array.from(arrayLike);

    //2）扩展运算符（...）：转换为真正的数组，
    //let realArr1 =[...arrayLike];

    //3）Array()：只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。
    Array(); // []
    Array(3); // [, , ,]
    Array(3, 11, 8); // [3, 11, 8]

    //4）Array.of：用于将一组值，转换为数组，基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一
    Array.of(1,2,3);//[1,2,3]

    realArr.forEach((p) => {
        console.log(p);
    });
};
convertToArray();


//2.数组实例的find()
const findInArray = () => {
    let array = Array.of(1,2,3,4,5,6);
    //1）返回第一个满足条件的值
    let findedValue1 = array.find((value) => {
        return value > 3;//4
    });
    console.log(findedValue1);

    //2）find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
    let findedValue2 = array.find((value, index, arr) => {
        return value > 3;//
    });
    console.log(findedValue2);

  //3）返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
    array.findIndex((value, index, arr) => {
        return value > 3;//3
    });
};
findInArray();


//3.数组实例的fill()
const fillArray = () => {
    let array1 = Array.of(1,2,3);
    //1）fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
    let filledArray1 = array1.fill(7);
    console.log(filledArray1);//[7,7,7]

    //2）fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
    let array2 = Array.of(1,2,3,5,6,7);
    let filledArray2 = array2.fill(7,2,3);
    console.log(filledArray2);//[ 1, 2, 7, 5, 6, 7 ]
};
fillArray();


//4.数组的遍历
const forEachArray = () => {
    let array = Array.of(1,2,3,4,5);
    for(let index in array) {
        console.log(index);//0,1,2,3,4,5
    }

    //1）keys()是对键名的遍历
    for(let index of array.keys()) {
        console.log(index);//0,1,2,3,4,5
    }

    //2）values()是对键值的遍历
    // for (let elem of array.values()) {
    //   console.log(elem);
    // }

    //3）entries()是对键值对的遍历
    for(let elem of array.entries()) {
      //[index, elem]
        console.log(elem);//[ 0, 1 ] [ 1, 2 ]...[ 5, 6 ]
    }

    console.log(array);
};
forEachArray();


const array1 = Array.of(7,6,5,4,3,2);
// for(const src of  array1) {
//   console.log(src);
// }
let BreakException= {};
try {
    Object.keys(array1).forEach(key => {
        console.log(array1[key]);
        if (array1[key] == 5) {
            throw BreakException;
        }
    });
} catch(e) {
    console.log();
}

export{convertToArray, findInArray, fillArray, forEachArray};
