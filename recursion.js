// Your code here.
function isEven(n) {
    return (n %2 == 0) ? true : (n-2 < 0) ? "??"  : false;
}
console.log(isEven(50));
// => true
console.log(isEven(75));
// => false
console.log(isEven(1));
// => ??
console.log(isEven(-2));
// => false
console.log(isEven(-1));
// => ??