/*
 * @Author: WaterFly
 * @Date: 2022-06-16 14:53:41
 * @Description:
 * Just enjoy code.
 * @LastEditors: lyf1003852
 */

// 1. Set
// 1.1 Set的操作方法，size, add, delete, has, clear
{
  // Set的创建, size
  {
    const s = new Set();
    const s_2 = new Set([1, 2, 3, 4]); // Array 转化为 Set

    const a_1 = [...s_2]; // Set 转化为 Array

    console.log(s_2.size); // Set的长度
  }

  // Set的添加删除，add, delete, has, clear
  {
    const s = new Set();

    s.add(1); // 添加 1
    s.has(1); // true

    s.delete(1); // 删除 1
    s.has(1); // false

    s.add(2);
    s.add(3);
    s.clear(); // 清空s
  }

  // s的遍历，keys, values, entries, forEach, map,  for...of
  // 遍历一般用 for...of
  {
    // s的keys, values 内容相同都为key
    let set = new Set(["red", "green", "blue"]);

    for (let item of set.keys()) {
      console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.values()) {
      console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.entries()) {
      console.log(item);
    }
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]

    for (let item of set) {
      console.log(item);
    }
    // red
    // green
    // blue
  }
}

// 2. Map
// 2.1 Map 的操作方法，size, set, get, delete, has, clear
{
  // Map的创建
  {
    const m = new Map();

    // 二元数组可直接转化为Map
    const map = new Map([
      ["name", "张三"],
      ["title", "Author"],
    ]);

    map.size; // 2

    const a = [...map]; // map转化为数组 [["name", "张三"],["title", "Author"]]
  }

  // Map的添加删除, has, get, set, delete, clear
  {
    // 二元数组可直接转化为Map
    const map = new Map([
      ["name", "张三"],
      ["title", "Author"],
    ]);

    map.has("name"); // true
    map.get("name"); // "张三"

    map.set("a", 555);
    map.delete("a"); // 删除 "a"键值对

    map.clear(); // 清空map
  }

  // Map的遍历，keys, values, entries, forEach,  for...of
  {
    const map = new Map([
      ["F", "no"],
      ["T", "yes"],
    ]);

    for (let key of map.keys()) {
      console.log(key);
    }
    // "F"
    // "T"

    for (let value of map.values()) {
      console.log(value);
    }
    // "no"
    // "yes"

    for (let item of map.entries()) {
      console.log(item);
    }
    // ["F","no"]
    // ["T", "yes"]

    // 或者
    for (let [key, value] of map.entries()) {
      console.log(key, value);
    }
    // "F" "no"
    // "T" "yes"

    // 等同于使用map.entries()
    for (let [key, value] of map) {
      console.log(key, value);
    }
    // "F" "no"
    // "T" "yes"
  }
}
