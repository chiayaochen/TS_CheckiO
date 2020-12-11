// 引入 assert 函式
const assert = require('assert');

// 手工做一個相加的函式
var sum = (a, b) => a + b;
var sumNumbers = t => t
    .split(' ')        // 將字串按照空白去做切割，得到陣列
    .map(Number)       // 用 map 把前一個陣列的元素都通過 Number() 轉換，文字則會變成 NaN
    .filter(isFinite)  // 用 filter 通過 isFinite() 把有限數字過濾出來
    .reduce(sum, 0);   // 第二個參數代表累積器的初始值為 0，第一個參數則是每次要累加計算的函式

// These "asserts" are used for self-checking
assert.equal(sumNumbers('hi'), 0);
assert.equal(sumNumbers('who is 1st here'), 0);
assert.equal(sumNumbers('my numbers is 2'), 2);
assert.equal(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 3755);
assert.equal(sumNumbers('5 plus 6 is'), 11);
assert.equal(sumNumbers(''), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");