// 引入 assert 函式
const assert = require('assert');

// My answer
function sumNumbers(test) {
    // your code here
    // 先篩選出文字
    var total = 0
    var text = test.match(/\w+/g)
    for (var i in text) {
        // 篩選出有數字的
        var num = Number(text[i]);
        if (num){
            total += num;
        }
    }
    return total;
}

console.log('Example:');
console.log(sumNumbers('hi'));

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