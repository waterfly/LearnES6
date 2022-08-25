{
  // 1. Generator 函数基本写法
  {
    function* helloWorldGenerator() {
      console.log("hello");
      yield "hello";

      console.log("world");
      yield "world";

      console.log("ending");
      return "ending";
    }

    // 返回一个 遍历器对象（Iterator Object）
    var hw = helloWorldGenerator();

    // 第一种写法，next函数
    {
      hw.next(); // {value: 'hello', done: false}
      hw.next(); // {value: 'world', done: false}
      hw.next(); // {value: 'ending', done: true}
    }

    // 第二种写法，使用 for...of ，注意 hw 遍历器对象只能遍历一次，遍历完以后就不能再遍历
    {
      for (const item of hw) {
        console.log(item);
      }
    }
  }

  // 2. 使用 Generator 生成 Iterator接口
  {
    var myIterable = {};
    // 直接将 Generator 函数赋值给 Symbol.iterator 属性即可
    myIterable[Symbol.iterator] = function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    // myIterable 即可具备 Iterator 接口
    console.log([...myIterable]);
  }

  // 3. yield表达式的值会作为 next函数的返回值，next函数的参数或作为上一个yield表达式的值
  {
    function* foo(x) {
      var y = 3 * (yield x + 1); // 只执行到 yield x + 1 表达式，并返回 x + 1的结果
      var z = yield y / 3; // 先执行 y = 3 * next函数的传参（注意，需要把 yield x + 1 替换为 next函数的参数，并不是表达式本身的结果），然后执行  y / 3；
      return x + y + z; // 返回该表达式的值
    }

    // 使 x = 4
    var b = foo(4);
    // 第一次调用 next，参数没有意义，无需传参
    console.log(b.next()); // { value:6, done:false }
    // 第二次调用 next，参数 4 会作为上次yield表达式的值传过去，即作为 (yield x + 1) 表达式的值（忽略 x + 1的结果）
    console.log(b.next(4)); // { value:4, done:false }
    // 第三次调用 next，参数 13 会作为 yield y / 3 表达式的值
    console.log(b.next(13)); // { value:29, done:true }
  }
}
