/*
 * @Author: WaterFly
 * @Date: 2022-07-23 15:15:44
 * @Description:
 * Just enjoy code.
 */

// 1. Promise 实例方法，基本使用，then, catch, finally
{
  let promise = new Promise((resolve, reject) => {
    //promise函数体
    setTimeout(() => {
      // 触发 resolve 或 reject
      reject();
    }, 2000);
  });

  promise
    .then(() => {
      //触发 resolve 时触发这里，注意多个then可以用链式写法
    })
    .catch(() => {
      //触发 reject 时触发这里
    })
    .finally(() => {
      //触发 resolve 或 reject 时触发这里
      console.log("finally");
    });
}

// 2. Promise 静态方法，allSettled, all, race, any
{
  // 2.1 promise allSettled，等promise数组都 resolve 或 reject时，才结束，不会触发catch。关注所有执行结束，不关心执行结果。（allResovled）
  {
    let promise_1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_1 reject");
        reject("promise_1", "promise_1_1");
      }, 2000);
    });

    let promise_2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_2 resolve");
        resolve("promise_2");
      }, 3000);
    });

    // let promise_3 = new Promise();

    Promise.allSettled([promise_1, promise_2])

      .then((values) => {
        /*
          values: 为数组，每个为字典

          [
            0:{status: 'rejected', reason: 'promise_1'}, //resolve
            1:{status: 'fulfilled', value: 'promise_2'} //reject
          ]

        */
        console.log(values);
        console.log("Promise all resolve");
      })
      .catch((values) => {
        console.log("Promise all catch");
        console.log(item);
      })
      .finally((values) => {
        console.log("Promise all finally");
      });
  }

  // 2.2 promise all，等promise数组都 resolve 时 或 有任何一个 reject 时结束。即关注失败，有一个失败或全部执行完返回。（allSuccessOrFirstFail）
  {
    let promise_1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_1 reject");
        resolve("promise_1", "promise_1_1");
      }, 2000);
    });

    let promise_2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_2 resolve");
        resolve("promise_2");
      }, 3000);
    });

    // let promise_3 = new Promise();

    Promise.all([promise_1, promise_2])

      .then((values) => {
        // values 为 所有 resolved 时的传参 形成的数组
        console.log("Promise all resolve");
        console.log(values);
      })
      .catch((values) => {
        //values 为数组，多个 Promise resolve 时的参数集合，或者任意一个 promise reject时的值
        console.log("Promise all catch");
        console.log(values);
      })
      .finally((values) => {
        console.log("Promise all finally");
      });
  }

  // 2.3 promise race, 第一个promise触发 resolve 或者 reject时，结束。（fisrtResult）
  {
    let promise_1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_1 reject");
        reject("promise_1", "promise_1_1");
      }, 2000);
    });

    let promise_2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_2 resolve");
        resolve("promise_2");
      }, 3000);
    });

    // let promise_3 = new Promise();

    Promise.race([promise_1, promise_2])

      .then((value) => {
        //为 单个promise resolve 或 reject时的值
        console.log(value);
        console.log("Promise all resolve");
      })
      .catch((values) => {
        console.log("Promise all catch");
        console.log(values);
      })
      .finally((values) => {
        console.log("Promise all finally");
        console.log(values);
      });
  }

  // 2.4 promise any, 有第一个成功 或 全部失败 时触发回调，第一个成功触发 then，所有失败触发 catche。（anySuccess）
  {
    let promise_1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_1 reject");
        reject("promise_1", "promise_1_1");
      }, 2000);
    });

    let promise_2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("promise_2 resolve");
        resolve("promise_2");
      }, 3000);
    });

    // let promise_3 = new Promise();

    Promise.any([promise_1, promise_2])

      .then((value) => {
        //为 单个promise resolve 或 reject时的值
        console.log(value);
        console.log("Promise all resolve");
      })
      .catch((values) => {
        console.log("Promise all catch");
        console.log(values);
      })
      .finally((values) => {
        console.log("Promise all finally");
        console.log(values);
      });
  }
}
