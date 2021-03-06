// 引入 assert 函式
const assert = require('assert');

// 修改自前面的 Sum_Numbers
var countDigits = t => t
    .split('')                      // 將字串切割成一個一個字母，得到陣列
    .filter(tt => /\d+/.test(tt))   // 將數字用正規表達式篩選出來
    .reduce(                        // 這邊的引數會傳入累加器與前面傳來的陣列
        function (sum, obj) {
            for (var i in obj) {
                sum++;
            }
            return sum;
        }, 0);

// These "asserts" are used for self-checking
assert.equal(countDigits('hi'), 0);
assert.equal(countDigits('who is 1st here'), 1);
assert.equal(countDigits('my numbers is 2'), 1);
assert.equal(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
assert.equal(countDigits('5 plus 6 is'), 2);
assert.equal(countDigits(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");