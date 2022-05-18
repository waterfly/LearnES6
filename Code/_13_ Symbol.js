/*
 * @Author: WaterFly
 * @Date: 2022-05-18 11:17:51
 * @Description:
 * Just enjoy code.
 */

// 1. Symbol 是原始数据类型，不是对象，不能使用new命令
{
  let s1 = Symbol();
  let s2 = Symbol();
  let s3 = Symbol("foo"); // 可传入一个字符串，用于打印时显示，便于区分，除此之外，没有其他作用，不影响Symbol的唯一性
  // 每个Symbol都是唯一的，都是不同的
  if (s1 != s2) {
    console.log("s1 != s2");
  }
}

// 2. Symbol.for() 与 Symbol.keyFor()
{
  // 寻找使用 Symbol.for() 注册过"foo"的Symbol，如果有则返回，如果没有重新生成一个Symbol，并注册到全局。
  // 注意是注册到全局，而不是某个模块或者某个类，整个全局内都会生效
  let s1 = Symbol.for("foo");
  let s2 = Symbol.for("foo"); // 此时返回的是 s1
  if (s1 == s2) {
    console.log("s1 == s2");
  }

  // 注意，直接使用Symbol()生成的是不会注册到全局，使用Symbol.for()查找不到
  let s3 = Symbol("test");
  let s4 = Symbol.for("test");
  // 注意此时 s3 != s4，s4为重新生成的Symbol
  if (s3 == s4) {
    console.log("s3 != s4");
  }

  //  Symbol.keyFor() 会查找使用 Symbol.for()注册过得symbol，但是查找不到会返回undefined，这点与 Symbol.for() 不同
  let s5 = Symbol.keyFor("test"); //返回 s3
  let s6 = Symbol.keyFor("aaa"); // 返回 undefined
}

// 3. 用途
{
  // 1. 用来消除魔术字符串
  const shapeType = {
    triangle: Symbol(), // 当不需要关心triangle 的具体值时，只需要关系 triangle唯一，则可以用 Symbol()
  };

  // 2. 用作对象的私有属性，注意在对象内使用是，必须使用[]，而不能使用.运算符（点运算符后面只能跟字符串）
  const obj = {};
  const foo = Symbol("foo");
  obj[foo] = "bar";
}
