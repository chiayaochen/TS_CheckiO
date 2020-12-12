// 引入 assert 函式
const assert = require('assert');

function threeWords(t) {
    // 先把字串按照空白分隔，轉換成陣列
    t = t.split(' ');
    // 一個一個去檢查是否是數字
    for (var i = 0; i < t.length - 2; i++) {
        // 驗證是否三次都不是數字
        var ans = true;
        for (var j = 0; j < 3; j++) {
            ans = ans && (!(isFinite(Number(t[i + j]))))
        }
        if (ans === true) {
            return true;
        }
    }
    return false;
}

console.log('Example:')
console.log(threeWords("Hello World hello"))

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");