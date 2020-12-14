var msg = 'who is 1st here';


var countDigits = t => t
    .split('')                      // 將字串切割成一個一個字母，得到陣列
    .filter(tt => /\d+/.test(tt))   // 將數字用正規表達式篩選出來
    .reduce(                        // 這邊的引數會傳入累加器與前面傳來的陣列
        function (sum, obj) {
            for (i in obj) {
                sum++;
            }
            return sum;
        }, 0);


console.log(countDigits(msg));