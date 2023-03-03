'use strict'
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
function factorial(n) {
    let result = 1;
    //TO DO このコメントを消して正しく実装してください。
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result
}