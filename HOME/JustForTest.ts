var msg = 'who is 1st here';


var countDigits = t => t
    .split('')                      // 將字串切割成一個一個字母，得到陣列
    .map(Number)                    // 用 map 把前一個陣列的元素都通過 Number() 轉換，文字則會變成 NaN
    .filter(isFinite)               // 用 filter 通過 isFinite() 把有限數字過濾出來
    .reduce(num => num++, 0);       // 第二個參數代表累積器的初始值為 0，第一個參數則是每次要累加計算的函式


    
console.log(countDigits(msg));