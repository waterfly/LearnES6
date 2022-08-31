// 1. class基本形式
{
  class TestObject {
    // 顶层可以定义实例变量，内部使用 this 访问变量
    one = "one";
    two = "two";

    // 构造函数，内部变量定义必须使用 this引用
    constructor() {
      this.x = 1;
      this.y = 2;
    }

    // 实例方法
    a() {
      return this.one;
    }

    // 静态方法，外部只能使用 TestObject.b() 访问，内部的 this 是 TestObject
    static b() {
      console.log("call b", this);
    }

    // get/set 方法，可以实现变量的只读或只写
    get jack() {
      return this.x;
    }

    set jack(value) {
      this.x = value;
    }
  }

  let test = new TestObject();
  console.log(test.a());
  console.log(test.jack);
  test.jack = 3;
}

// 2. class 特殊注意点：方法名可以使用表达式、class可以使用表达式定义
{
  // 2.1 方法名可以使用表达式，这个特性可以用于动态定义方法名
  {
    let methodName = "getArea";
    class Square {
      constructor(length) {
        // ...
      }

      [methodName]() {
        // ...
        return "getArea";
      }
    }

    const test = new Square();
    console.log(test.getArea());
  }

  // 2.2 class可以使用表达式定义
  {
    // Me只能用于内部使用，可省略
    const MyClass = class Me {
      getClassName() {
        return Me.name;
      }
    };

    const test = new MyClass();
    console.log(test.getClassName());
  }
}
