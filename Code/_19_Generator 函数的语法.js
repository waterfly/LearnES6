{
  // // 1. Generator 函数基本写法
  // {
  //   function* helloWorldGenerator() {
  //     console.log("hello");
  //     yield "hello";

  //     console.log("world");
  //     yield "world";

  //     console.log("ending");
  //     return "ending";
  //   }

  //   // 返回一个 遍历器对象（Iterator Object）
  //   var hw = helloWorldGenerator();

  //   // 第一种写法，next函数
  //   {
  //     hw.next(); // {value: 'hello', done: false}
  //     hw.next(); // {value: 'world', done: false}
  //     hw.next(); // {value: 'ending', done: true}
  //   }

  //   // 第二种写法，使用 for...of ，注意 hw 遍历器对象只能遍历一次，遍历完以后就不能再遍历
  //   {
  //     for (const item of hw) {
  //       console.log(item);
  //     }
  //   }
  // }

  // // 2. 使用 Generator 生成 Iterator接口
  // {
  //   var myIterable = {};
  //   // 直接将 Generator 函数赋值给 Symbol.iterator 属性即可
  //   myIterable[Symbol.iterator] = function* () {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  //   };

  //   // myIterable 即可具备 Iterator 接口
  //   console.log([...myIterable]);
  // }

  // // 3. yield表达式的值会作为 next函数的返回值，next函数的参数或作为上一个yield表达式的值
  // {
  //   function* foo(x) {
  //     var y = 3 * (yield x + 1); // 只执行到 yield x + 1 表达式，并返回 x + 1的结果
  //     var z = yield y / 3; // 先执行 y = 3 * next函数的传参（注意，需要把 yield x + 1 替换为 next函数的参数，并不是表达式本身的结果），然后执行  y / 3；
  //     return x + y + z; // 返回该表达式的值
  //   }

  //   // 使 x = 4
  //   var b = foo(4);
  //   // 第一次调用 next，参数没有意义，无需传参
  //   console.log(b.next()); // { value:6, done:false }
  //   // 第二次调用 next，参数 4 会作为上次yield表达式的值传过去，即作为 (yield x + 1) 表达式的值（忽略 x + 1的结果）
  //   console.log(b.next(4)); // { value:4, done:false }
  //   // 第三次调用 next，参数 13 会作为 yield y / 3 表达式的值
  //   console.log(b.next(13)); // { value:29, done:true }
  // }

  // 4. throw(), return(), next()  函数
  {
    // throw() 方法，外部调用时，如果Generator 函数内部实现了try...catch，则让 Generator 函数内部捕获到这个错误，参数可作为catch的参数
    {
      var g = function* () {
        try {
          yield 1;
        } catch (error) {
          yield 2;
        }
        yield 3;
      };

      var i = g();
      i.next(); // 执行第一个 yield 表达式
      i.throw(new Error("出错了！")); // 进入函数体内部的 try...catch，同时会附带执行一次 next 函数，执行 yield 2
      i.next(); // 执行 yield 3
    }

    // return(params)方法，外部调用后，立即结束 Generator函数，并返回该参数 { value: params, done: true }
    {
      {
        function* gen() {
          yield 1;
          yield 2;
          yield 3;
        }

        var g = gen();

        g.next(); // 执行 yield 1，  { value: 1, done: false }
        g.return("foo"); // 立即结束 遍历器执行， { value: "foo", done: true }
        g.next(); // 遍历器已经结束，不会再执行任何代码 { value: undefined, done: true }
      }

      // 如果内部有 try...catch...finally，则当执行到 try 内部代码时，如果调用 return 语句，会直接进入 finally，执行完代码后结束遍历，最后并返回 return 函数的参数
      {
        function* numbers() {
          yield 1;
          try {
            yield 2;
            yield 3;
          } finally {
            yield 4;
            yield 5;
          }
          yield 6;
        }
        var g = numbers();
        g.next(); // { value: 1, done: false }
        g.next(); // { value: 2, done: false }
        g.return(7); // { value: 4, done: false }
        g.next(); // { value: 5, done: false }
        g.next(); // { value: 7, done: true }
      }
    }
  }

  // 5. yield*  表达式，用于 Generator函数的多次嵌套
  {
    function* foo() {
      yield "a";
      yield "b";
    }

    function* bar() {
      yield "x";
      yield foo(); // 这里只会返回 foo这个遍历器对象，不会对 foo 进行遍历，需要手动改成 for...of 的形式，或者直接使用 yield * 完成自动遍历的效果
      yield "y";
    }

    /*
      需要手动调用 for...of

      function* bar() {
        yield "x";
        // 手动遍历 foo()
        for (let i of foo()) {
          console.log(i);
        }
        yield "y";
      }

      等同于 直接使用 yield* 表达式

      function* bar() {
        yield "x";
        yield* foo();
        yield "y";
      }


    */

    for (let v of bar()) {
      console.log(v);
    }
  }
}
