function minimum (a, b) {

    return Math.min(a < b ? a : b);
}
console.log(minimum(0,10));
// => 0

console.log(minimum(0,-10));
// => -10


// const min = (...nums) => {
//     let num = Infinity
//     for (let i of nums) {
//         if (i < num) num = i;
//     }
//     return num
// }
// console.log(min(0,10));
//  => 0

console.log(min(0, -10, 81, -23));
// => -23