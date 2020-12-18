// 引入 assert 函式
const assert = require('assert');

function backwardStringByWord(t) {
    // 按照空白把原來的字串分割成為陣列 arr1
    var arr1 = t.split(' ');
    var arr2 = [];
    var chars ='';
    for (var obj1 of arr1) {
        chars = '';
        for (var obj2 of obj1.split('').reverse()){
            // 這邊蒐集逆序後的字母再組合成逆序單字
            chars = chars + obj2;
        }
        // 已經逆序後的單字蒐集到 arr2
        arr2.push(chars);
    }
    // 再把原來的空白加回去
    var ans = arr2.join(' ');
    return ans;
}


// These "asserts" are used for self-checking
assert.equal(backwardStringByWord(''), '');
assert.equal(backwardStringByWord('world'), 'dlrow');
assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');

console.log("Coding complete? Click 'Check' to earn cool rewards!");