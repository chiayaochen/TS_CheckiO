const arr = [
    {'name':'A', 'score': 90},
    {'name':'B', 'score': 78},
    {'name':'C', 'score': 34},
    {'name':'D', 'score': 12},
    {'name':'E', 'score': 56},
];

// sort 的用法是在其內擺一個排序函式
// 而這個排序函式預設的參數是 a 與 b
// 如果排序函式回傳的結果是 -1 則把 a 放在 b 前面的位置
// 如果排序函式回傳的結果是  1 則把 a 放在 b 後面的位置

arr.sort(
    (a, b) => a.score > b.score ? -1:1
);

// 設定要取出的元素數量
const n = 2;
// slice 方法 會回傳 但不會更改原本的陣列
// slice 的第一個參數是開始的 index
// slice 的第二個參數是結束的 index 但回傳不含這處
var arr2 = arr.slice(0, n);

console.log(arr2);