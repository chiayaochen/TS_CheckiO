// 引入 assert 函式
const assert = require('assert');

var firstWord = t => t
    .split(/[\s,.]/)                      // 將字串以空白或逗點或句號切割成陣列
    .filter(tt => /^\w/.test(tt))[0];     // 將開頭為字母或數字的用正規表達式篩選出來


// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord(" a word "), "a")
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord("greetings, friends"), "greetings")
assert.equal(firstWord("... and so on ..."), "and")
assert.equal(firstWord("hi"), "hi")
console.log("Coding complete? Click 'Check' to earn cool rewards!");