// 引入 assert 函式
const assert = require('assert');

// 利用 RegExpObject.test(string)
// 來檢查是否符合正規表達式的規則

var threeWords = t => /\b[a-z]+ [a-z]+ [a-z]+/i.test(t);

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");