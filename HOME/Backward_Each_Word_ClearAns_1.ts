// 引入 assert 函式
const assert = require('assert');
// 擴張運算子 ... 可以一個一個取出字串的字母
// [...c] 可以直接把字串的字母變成矩陣
var backwardStringByWord = t => t.replace(/\w+/g, c => [...c].reverse().join(''));

// These "asserts" are used for self-checking
assert.equal(backwardStringByWord(''), '');
assert.equal(backwardStringByWord('world'), 'dlrow');
assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');

console.log("Coding complete? Click 'Check' to earn cool rewards!");