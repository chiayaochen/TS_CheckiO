// 引入 assert 函式
const assert = require('assert');

// 修改自前面的 Sum_Numbers
var countDigits = t => t
    .split('')                      // 將字串切割成一個一個字母，得到陣列
    .map(Number)                    // 用 map 把前一個陣列的元素都通過 Number() 轉換，文字則會變成 NaN
    .filter(isFinite)               // 用 filter 通過 isFinite() 把有限數字過濾出來
    .reduce(num => num++, 0);       // 第二個參數代表累積器的初始值為 0，第一個參數則是每次要累加計算的函式


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