/*
 * @Author: WaterFly
 * @Date: 2021-10-26
 * @Description: 数组的扩展
 * Just enjoy code.
 */

// 1. 扩展运算符 ...
// 将数组转化为逗号分割的参数序列
{
  console.log(...[1, 2, 3]); //1, 2, 3

  function add(x, y) {
    return x + y;
  }
  let result = add(...[1, 2]); //3
  console.log(result);

  //场景
  {
    // 1. 复制数组
    {
      {
        //ES5写法
        const a1 = [1, 2];
        const a2 = a1.concat();
      }
      {
        //ES6写法
        const a1 = [1, 2];
        const a2 = [...a1];
        console.log(a2); //[1, 2]

        //或
        const [...a3] = a1;
        console.log(a3); //[1, 2]
      }
    }

    // 2 合并数组
    {
      const arr1 = ["a", "b"];
      const arr2 = ["c"];
      const arr3 = ["d", "e"];

      //ES5写法
      let r1 = arr1.concat(arr2, arr3); // [ 'a', 'b', 'c', 'd', 'e' ]
      console.log(r1);

      //ES6写法
      let r2 = [...arr1, ...arr2, ...arr3]; // [ 'a', 'b', 'c', 'd', 'e' ]
      console.log(r2);
    }

    // 3 与解构赋值结合
    {
      const list = [1, 2, 3, 4];
      let a,
        rest = null;
      //扩展运算符只能放到最后，放到前面或中间都会失败
      [a, ...rest] = list;
      console.log(a); // 1
      console.log(rest); // [2, 3, 4]
    }

    // 4 字符串快速转化为数组（非常好用！）
    {
      let a = [..."hello"];
      console.log(a); // [ "h", "e", "l", "l", "o" ]
    }

    // 5 实现了 Iterator 接口的对象，都可以使用扩展运算符
    // 比如 Map 和 Set 结构，Generator 函数
    {
      let nodeList = document.querySelectorAll("div");
      let array = [...nodeList]; //nodeList是一个类数组对象，但不是数组
    }
  }
}

// 2. Array.from()，将 类数组对象 和可遍历对象，转化为真正的数组
{
  let arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
  };

  // ES5的写法
  var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

  // ES6的写法
  let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
}
