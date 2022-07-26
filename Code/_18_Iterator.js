/*
 * @Author: WaterFly
 * @Date: 2022-07-26 17:16:29
 * @Description:
 * Just enjoy code.
 */

// 1. 自定义实现 Iterator 接口，实现 for...of 遍历
{
  class testIterator {
    constructor() {
      this.one = [1, 3, 5, 7, 9];
      this.two = [2, 4, 6, 8, 10];
      this.tag = true;
      this.indexOne = 0;
      this.indexTwo = 0;
    }

    // 必须以  Symbol.iterator 为键
    [Symbol.iterator]() {
      return this;
    }

    // 必须实现 next 函数
    next() {
      let done =
        this.indexOne == this.one.length && this.indexTwo == this.two.length;
      let value = this.tag
        ? this.one[this.indexOne++]
        : this.two[this.indexTwo++];
      this.tag = !this.tag;

      // 返回的结构必须包含 value, done 两个节点
      return {
        value: value,
        done: done,
      };
    }

    // 当 for...of 内遇到 break语句或抛出异常时，触发 return 语句，做清理工作
    return() {
      // 最后必须返回 {done: true} 结构
      return {
        done: true,
      };
    }
  }

  const test = new testIterator();
  for (const item of test) {
    console.log(item);
  }
}
