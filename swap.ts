function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

// Test the swap function
let x: number = 5;
let y: number = 10;
[x, y] = swap(x, y);
console.log("x:", x); // Output: 10
console.log("y:", y); // Output: 5

let str1: string = "Hello";
let str2: string = "World";
[str1, str2] = swap(str1, str2);
console.log("str1:", str1); // Output: "World"
console.log("str2:", str2); // Output: "Hello"
