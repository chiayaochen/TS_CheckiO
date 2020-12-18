// 引入 assert 函式
const assert = require('assert');

var firstWord = t => t.match(/[^, .]+/)[0];
// 這是用正規表達式篩選出不含逗點空白句號的

// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord(" a word "), "a")
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord("greetings, friends"), "greetings")
assert.equal(firstWord("... and so on ..."), "and")
assert.equal(firstWord("hi"), "hi")
console.log("Coding complete? Click 'Check' to earn cool rewards!");