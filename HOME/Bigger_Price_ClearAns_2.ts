// 引入 assert 函式
const assert = require('assert');

interface Stock {
    name: string,
    price: number,
};

// 這題考的是排序

// 將前面的解答改寫成一行
var biggerPrice = (limit, data) => data.sort((a, b) => b['price'] - a['price']).slice(0, limit);


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
