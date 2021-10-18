/*
 * @Author: WaterFly
 * @Date: 2021-10-05 20:09:33
 * @Description: 字符串的新增方法.
 * Just enjoy code.
 */

/*
字符串方法的扩展：
includes(), startsWith(), endsWith()
repeat()
padStart()，padEnd() 
trimStart()，trimEnd()
matchAll()
replaceAll()
*/
{
  //includes(), startsWith(), endsWith()
  {
    //之前只有 indexOf
    {
      let test = "Hello ES6!";
      let result = test.indexOf("ES");
      console.log(result); //6,返回第一次出现的索引，如果找不到则返回 -1
    }

    //includes(),结果为 boolean
    {
      let test = "Hello ES6!";
      let result = test.includes("ES");
      console.log(result); //true
    }

    //startsWith，判断是否以某字符串开头,结果为 boolean
    {
      let test = "Hello ES6!";
      let result = test.startsWith("He");
      console.log(result); //true
    }

    //endsWith,结果为 boolean
    {
      let test = "Hello ES6!";
      let result = test.endsWith("!");
      console.log(result); //true
    }
  }

  //repeat()
  {
    //repeat方法返回一个新字符串，表示将原字符串重复n次。
    let test = "Hello ES6!";
    let result = test.repeat(2);
    console.log(result); //Hello ES6!Hello ES6!
  }

  //padStart()，padEnd()
  {
    //padStart，用于头部补全，第一个参数为补全后的最大长度，第二个为用于补全的字符串，如果当前字符串长度 > 最大长度，则返回原字符串
    //str.padStart(targetLength [, padString])
    {
      let test = "Hello ES6!";
      let result = test.padStart(15, "ES!");
      console.log(result); //ES!ESHello ES6!

      let result_2 = test.padStart(8, "ES!");
      console.log(result_2); //Hello ES6!，最大长度小于当前长度，则无需补全
    }

    //padEnd，为 尾部补全
    {
      let test = "Hello ES6!";
      let result = test.padEnd(15, "ES!");
      console.log(result); //Hello ES6!ES!ES
    }
  }

  //trimStart()，trimEnd()
  {
    //trim，去掉两头的空白字符，返回新字符
    //空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）
    {
      const greeting = "   Hello world!   ";
      let result = greeting.trim();
      console.log(result); //Hello world!
    }

    //trimStart，去掉开头的空白字符，返回新字符
    //，trimEnd，去掉结尾的空白字符，返回新字符
  }

  //matchAll()
  {
    //返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器
    const regexp = /t(e)(st(\d?))/g;
    const str = "test1test2";

    const array = [...str.matchAll(regexp)];

    console.log(array[0]);
    // expected output: Array ["test1", "e", "st1", "1"]

    console.log(array[1]);
    // expected output: Array ["test2", "e", "st2", "2"]
  }

  //replaceAll()
  {
    //替换所有匹配到的字符
    {
      let test = "Hello Hello ES6!";
      let result = test.replaceAll("Hello","Hi");
      console.log(result); //Hi Hi ES6!
    }
  }
}
