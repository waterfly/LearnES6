/*
 * @Author: WaterFly
 * @Date: 2022-08-30 14:31:56
 * @Description:
 * Just enjoy code.
 */

// 1. async函数基本形式，async await
{
  function t() {
    return 1;
  }

  function p() {
    return 2;
  }

  // async 函数基本形式，async await
  async function test() {
    await t();
    await p();
    return 2;
  }
  // 异步执行 test
  test().then((val) => {
    console.log(val);
  });
}

// 2. async 函数返回一个新的Promise对象，如果 return 语句返回一个普通对象，则会成为then语句的参数；如果 return 返回一个Promise对象，则 返回一个与该Promise对象相同状态的Promise对象
{
  // async函数内return 一个普通对象，则 then 函数参数为该对象
  {
    async function test() {
      await 1;
      await 2;
      return 1;
    }

    // async 函数返回一个新的Promise对象，
    test().then((val) => {
      console.log(val); // 1
    });
  }

  // async函数内return Promise对象，则then参数为该Promise对象的传参
  {
    async function test() {
      await 1;
      await 2;
      return Promise.resolve(1); // 触发 then
      // return Promise.reject(2); // 触发 catch
    }

    // async 函数返回一个新的Promise对象，
    test()
      .then((val) => {
        console.log(val); // 1
      })
      .catch((err) => {
        console.log(err); // 2
      });
  }
}

// 3. 需要注意对await语句的异常处理。async 函数内任意一个 await 语句抛出异常，都会结束async函数的执行，因此需要注意对await语句的异常处理
{
  // async 函数内任意一个 await 语句抛出异常，都会结束async函数的执行
  {
    function t() {
      throw "occur a error";
      return 1;
    }

    function p() {
      return 2;
    }

    async function test() {
      await t(); // 由于该函数抛出了异常，会导致整个async函数终止，直接停止执行，对外抛出异常
      await p();
      return 2;
    }
    // 异步执行 test
    test()
      .then((val) => {
        console.log(val);
      })
      .catch((err) => {
        console.log(err); // "occur a error"
      });
  }

  // 可以对 await 进行 try...catch 或 直接跟 catch语句处理
  {
    function t() {
      return Promise.reject("occur a error");
    }

    function p() {
      return 2;
    }

    async function test() {
      // 1. 第一种写法使用 try...catch
      // try {
      //   await t();
      // } catch (error) { }

      // 2. 第二种写法，如果是Promise对象，则可以直接跟catch语句（非Promise对象则只能使用 try...catch）
      await t().catch((err) => {
        console.log(err); // "occur a error"
      });
      await p();
      return 2;
    }
    // 异步执行 test
    test()
      .then((val) => {
        console.log(val); // 2
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// 4. 如果需要多条await语句同步执行，则需要注意写法，使用Promise.all()、Promise.allSettled() 、或先调用函数再使用await
{
  function getFoo() {
    return 1;
  }

  function getBar() {
    return 2;
  }

  async function test() {
    // 写法一，使用 使用Promise.all() 或 Promise.allSettled(
    {
      let [foo, bar] = await Promise.all([getFoo(), getBar()]);
    }

    // 写法二，先调用函数再使用await，建议使用该写法
    {
      let fooPromise = getFoo();
      let barPromise = getBar();
      let foo = await fooPromise;
      let bar = await barPromise;
    }

    return 2;
  }
  // 异步执行 test
  test().then((val) => {
    console.log(val);
  });
}
