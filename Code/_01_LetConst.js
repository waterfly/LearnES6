/*
 * @Author: WaterFly
 * @Date: 2021-09-29 17:48:34
 * @Description: let, const, 顶级对象
 * Just enjoy code.
 */

/*
  let 
  知识点：
  1. let 是块级作用域，
  2. 不存在变量提升

*/
{
  let test_let = "a";

  {
    let test = "b";
    console.log(test);
  }

  //使用test会报错，test只存在所在的块级作用域
  try {
    console.log(test);
  } catch (error) {
    console.log(error);
  }
}

/*
  const
  知识点：
  1. const 用于声明常量
  2. 对于Object, Array来说，const是指向一个指针，只能保证指针不变，但是里面内容可变

*/
{
  const test = "a";

  //修改test变量会报错
  try {
    test = "b";
  } catch (error) {
    console.log(error);
  }

  //指针所指的Object, Array等是可以修改的
  const test_object = {
    a: 1,
  };
  test_object.b = 2;
  console.log(test_object);
}

/*

  顶层对象
  知识点：
  1. 浏览器是 window对象，Node是 global对象
  2. 用var、function声明的全局变量，也属于顶层对象的属性；用let const class 声明的全局变量，不属于顶层对象的属性
  3. Node中每个文件都是一个模块，定义的全局变量只在该模块里有效，不会是顶层对象（global）的属性
  4. 
*/

{
  var test_global = "1";

  //使用浏览器运行
  try {
    console.log(window.test_global);
  } catch (error) {
    console.log(error);
  }

  //浏览器环境为 window
  console.log(this);

  //使用Node.js环境运行
  try {
    console.log(global);
  } catch (error) {
    console.log(error);
  }
}

/*

  class内的全局变量 和 this
  知识点：
  1. class的this就是指该函数本身
  2. 函数内的全局变量就是this的属性

*/
{
  class TestClass {
    //声明类作用域内的变量，也可以在constructor内声明。
    //初始化时会先初始化这里的变量，然后调用 constructor
    a = "1";
    b = "2";

    constructor(){
      //constructor内声明的变量必须要用 this
      this.c = "3"

      console.log(this.a);
      this.a = "4";
    }

    testFunction() {
      console.log(this); //返回该class变量本身
      console.log(this.a); //如果直接用 a会报错，一定要用this.a
    }
  }

  let test_class = new TestClass();
  test_class.testFunction();
}