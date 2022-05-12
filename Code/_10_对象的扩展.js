// 1. 属性的简介表示法
{
  // ES6允许大括号内直接写入 变量和函数，作为对象的属性和方法
  const foo = "bar";
  const baz = { foo }; // 等同于 const baz = {foo: foo}
  console.log(baz); // {foo: 'bar'}

  // 对象的方法关键字 function可以省略
  {
    const o = {
      method() {
        return "Hello!";
      },
    };

    // 等同于
    {
      const o = {
        method: function () {
          return "Hello!";
        },
      };
    }
  }
}

// 2. 属性名表达式
{
  // ES6允许 字面量定义对象时，使用表达式作为属性名（即把表达式放到方括号内）
  {
    let propKey = "foo";
    let obj = {
      [propKey]: true,
      ["a" + "bc"]: 123,
    };
  }

  // 表达式还可以用于定义方法名
  {
    let obj = {
      ["h" + "ello"]() {
        return "hi";
      },
    };

    obj.hello(); // hi
  }
}

// 5. super 关键字
{
  // 报错 SyntaxError: 'super' keyword unexpected here
  //
  // const obj = {
  //   foo: function () {
  //     return super.foo;
  //   },
  // };

  // 只能在对象的方法中（且只有简写形式）使用，其他地方都会报错
  const obj = {
    // 对象的简写形式
    foo() {
      return super.foo;
    },
  };
  console.log(obj);
}

// 6. 对象的扩展运算符
{
  // 结构赋值
  {
    // 基本形式
    {
      let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
      x; // 1
      y; // 2
      z; // { a: 3, b: 4 }
    }

    // 解构赋值要求括号右边必须是一个对象，所以是 null 或 undefined 或其他非对象类型，都会报错
    // 错误示例（为保证代码可运行，因此对其注释）
    {
      // let { ...z } = null; // 运行时错误
      // let { ...z } = undefined; // 运行时错误
    }
  }

  // 扩展运算符
  // 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
  {
    // 基本形式
    {
      let z = { a: 3, b: 4 };
      let n = { ...z };
      n; // { a: 3, b: 4 }
    }

    // 数组是特殊的对象，以索引为key，内容为value
    {
      let foo = { ...["a", "b", "c"] };
      foo; // {0: "a", 1: "b", 2: "c"}
    }

    // 其他特殊情况
    {
      // 如果扩展运算符后面是一个空对象，则没有任何效果。
      let r = { ...{}, a: 1 }; // { a: 1 }
      // 如果扩展运算符后面不是对象，则会自动将其转为对象。
      // 等同于 {...Object(1)}
      let r_1 = { ...1 }; // {}
      // 等同于 {...Object(true)}
      let r_bool = { ...true }; // {}
      // 等同于 {...Object(undefined)}
      let r_u = { ...undefined }; // {}
      // 等同于 {...Object(null)}
      let r_o = { ...null }; // {}
    }

    // 字符串，如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。
    {
      let a = { ..."hello" }; // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}
    }

    // 对象的扩展运算符等同于使用Object.assign()方法。
    {
      let aClone = { ...a }; // 等同于 Object.assign({}, a);
    }

    // 合并两个对象
    {
      let ab = { ...a, ...b };
      // 等同于 let ab = Object.assign({}, a, b);
    }
  }
}

// 7. AggregateError 错误对象，定义 AggregateError(errors[, message])
{
  const error = new AggregateError(
    [
      new Error("ERROR_11112"),
      new TypeError("First name must be a string"),
      new RangeError("Transaction value must be at least 1"),
      new URIError("User profile link must be https"),
    ],
    "Transaction cannot be processed"
  );
}
