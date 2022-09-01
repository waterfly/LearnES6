/*
 * @Author: WaterFly
 * @Date: 2022-09-01 11:36:54
 * @Description:
 * Just enjoy code.
 */

// 1. class继承的基本形式
{
  // 定义父类
  class Foo {
    // 类构造函数
    constructor() {
      console.log(1);
      this.x = 1;
      this.y = 2;
    }

    static a() {
      console.log("Foo a()");
    }
  }

  // 使用 extends 定义继承
  class Bar extends Foo {
    constructor() {
      // 子类构造函数内必须调用super，且 this. 语句需要在super() 后才能使用
      super();
      console.log(2);
    }

    test() {
      // 普通方法中 super指向父类的原型对象，所以这里获取不到 父类的变量，
      console.log(super.x); // undefined

      // 父类的实例方法和实例变量，直接通过 this 获取
      console.log(this.x); // 1

      // 普通方法中，只能通过类名调用 父类的静态方法，不能使用 super
      Foo.a();

      return super.x;
    }

    static b() {
      // 静态方法中，super 指向父类，可用 Super 调用父类的静态方法
      super.a();
    }
  }

  const bar = new Bar();
  console.log(bar.test());

  Bar.b();

  // 判断一个类是否继承另外一个类 Object.getPrototypeOf
  console.log(Object.getPrototypeOf(Bar) == Foo);
}
