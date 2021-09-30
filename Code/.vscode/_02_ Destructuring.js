/*
 * @Author: WaterFly
 * @Date: 2021-09-30
 * @Description: 解构
 * Just enjoy code.
 */

/*
  数组的解构
*/
{
  //基本格式
  {
    //完全结构
    let [a, b, c] = [1, 2, 3];
  }

  //不完全结构，d为 undefined
  {
    let [a, b, c, d] = [1, 2, 3];
  }

  //空余元素写法
  {
    let [x, , y] = [1, 2, 3];
    x; // 1
    y; // 3
  }

  //...写法，使用...取某元素开始到结尾的数组元素，效果类似 Array.slice(x)
  {
    let [head, ...tail] = [1, 2, 3, 4];
    head; // 1
    tail; // [2, 3, 4]
  }

  //...写法，不会是undefined，而是空数组
  {
    let [x, y, ...z] = ["a"];
    x; // "a"
    y; // undefined
    z; // []
  }

  //默认值写法，当 解构时 === undefined时，则为默认值
  {
    let [x, y = "b"] = ["a"]; // x='a', y='b'
    console.log(x);
    console.log(y);
  }

  //使用数组解构，实现变量值交换
  {
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
  }
}

/*
  对象的结构
*/
{
  //基本格式
  {
    let { foo, bar } = { foo: "aaa", bar: "bbb" };
    foo; // "aaa"
    bar; // "bbb"
  }

  //变量名与属性名不一致的情况
  {
    let { foo: baz } = { foo: "aaa", bar: "bbb" };
    baz; // "aaa"
  }

  //默认值，当 === undefined 时，取默认值
  {
    let { x, y = 5 } = { x: 1 };
  }

  //数组使用对象形式做解构，以 索引 为key
  {
    let arr = [1, 2, 3];
    let { 0: first, [arr.length - 1]: last } = arr;
    first; // 1
    last; // 3
  }
}

/*
  字符串的解构
*/
{
  //字符串被转换成了一个类似数组的对象
  const [a, b, c, d, e] = "hello";
}
