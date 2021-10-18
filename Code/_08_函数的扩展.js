/*
 * @Author: WaterFly
 * @Date: 2021-10-18
 * @Description: 函数的扩展
 * Just enjoy code.
 */

//函数支持参数默认值
{
  //当不传y时，取默认值
  function log(x, y = "World") {
    console.log(x, y);
  }
  log("Hello"); // Hello World

  //可与解构一起使用
  function foo({ x, y = 5 }) {
    console.log(x, y);
  }
  foo({ x: 3 }); //3 5
}

//rest参数
{
  //values为数组对象，包含所有参数
  function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3); // 10
}

//箭头函数
{
  //形式
  {
    let f = (v) => v;

    //等同于
    {
      let f = (v) => {
        return v;
      };
    }
    // 等同于
    {
      let f = function (v) {
        return v;
      };
    }
  }

  //箭头函数内部没有this属性，使用的this为静态绑定，即指向定义时的对象
  {
    function foo() {

      console.log(this);

      //箭头函数为 静态绑定，总是指向定义时 上层作用域的 this
      //这里箭头函数 f 指向 foo() 的 this
      let f = () => {
        console.log("箭头函数 id:", this.id); //42
      };
      f();

      //普通函数为 运行时绑定
      //当函数调用时，内部this总是指向 顶层对象
      //当作为方法调用时，指向调用的this 对象
      let normal = function () {
        console.log("普通函数 id:", this.id); //21，浏览器环境
      };
      //这里为函数调用，因此内部this指向 顶层对象
      normal();
    }

    var id = 21;


    foo.call({ id: 42 }); //给foo绑定this
  }
}
