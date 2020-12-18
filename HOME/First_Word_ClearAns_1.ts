// 引入 assert 函式
const assert = require('assert');

var firstWord = t => t.match(/\b[a-zA-Z']+\b/)[0];
// 這是用正規表達式篩選出有字母或'符號的
// 並且是前後是有文字邊界的

// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord(" a word "), "a")
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord("greetings, friends"), "greetings")
assert.equal(firstWord("... and so on ..."), "and")
assert.equal(firstWord("hi"), "hi")
console.log("Coding complete? Click 'Check' to earn cool rewards!");