// 引入 assert 函式
const assert = require('assert');

interface Stock {
    name: string,
    price: number,
};

// 這題考的是排序


function biggerPrice(limit: number, data: Stock[]): Stock[] {
    // your code here
    // sort 的用法是在其內擺一個排序函式
    // 而這個排序函式預設的參數是 a 與 b
    // 如果排序函式回傳的結果是 負數 則把 a 放在 b 前面的位置
    // 如果排序函式回傳的結果是 正數 則把 a 放在 b 後面的位置
    data.sort((a, b) => b['price'] - a['price'] );
    // slice 方法 會回傳 但不會更改原本的陣列
    // slice 的第一個參數是開始的 index
    // slice 的第二個參數是結束的 index 但回傳不含這處
    return data.slice(0, limit);
}

console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))

assert.deepEqual(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]), [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
])
assert.deepEqual(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}])
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
