/*
 * @Author: WaterFly
 * @Date: 2022-07-26 16:36:11
 * @Description:
 * Just enjoy code.
 */

class testIterator {
  constructor() {
    this.one = [1, 3, 5, 7, 9];
    this.two = [2, 4, 6, 8, 10];
    this.tag = true;
    this.indexOne = 0;
    this.indexTwo = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    let done =
      this.indexOne == this.one.length && this.indexTwo == this.two.length;
    let value = this.tag
      ? this.one[this.indexOne++]
      : this.two[this.indexTwo++];
    this.tag = !this.tag;

    return {
      value: value,
      done: done, 
    };
  }

  return() {
    return {
      done: true,
    };
  }
}

const test = new testIterator();
for (const item of test) {
  console.log(item);
}

console.log("---finish");
