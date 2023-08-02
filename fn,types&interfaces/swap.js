"use strict";
function swap(a, b) {
    return [b, a];
}
// Test the swap function
let x = 5;
let y = 10;
[x, y] = swap(x, y);
console.log("x:", x); // Output: 10
console.log("y:", y); // Output: 5
let str1 = "Hello";
let str2 = "World";
[str1, str2] = swap(str1, str2);
console.log("str1:", str1); // Output: "World"
console.log("str2:", str2); // Output: "Hello"
