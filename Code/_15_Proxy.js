/*
 * @Author: WaterFly
 * @Date: 2022-07-11 19:04:44
 * @Description:
 * Just enjoy code.
 */

// 1. Proxy的基本形式，const p = new Proxy(target, handler)
{
  let target = {
    name: "Jake",
  };

  var proxy = new Proxy(target, {
    get: function (target, propKey, receiver) {
      return target[propKey];
    },
    set: function (target, propKey, value, receiver) {
      target[propKey] = value;
    },
  });

  console.log(proxy.name);
}

// 2. Proxy 可继承，可作为其他对象的原型对象
{
  let proto = new Proxy(
    {},
    {
      get(target, propertyKey, receiver) {
        console.log("GET " + propertyKey);
        return target[propertyKey];
      },
    }
  );

  let obj = Object.create(proto);
  obj.foo; // "GET foo"

  // 注意点，如果 obj 的自身属性，则不会触发到 Proxy 里面，因为自身有了就不会去原型对象里面找
  obj.test = "test";
  console.log(obj.test); // 不会走到 Proxy 里面
}
