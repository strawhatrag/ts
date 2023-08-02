"use strict";
let a = "hello world"; // type is in smallcase
const movies = ['arraival', 'aliens', 'amadeus'];
let foundMovie; // it infers as any
for (let moive of movies) {
    if (moive == 'amadeus') {
        foundMovie = 'amadeus';
    }
}
console.log(foundMovie);
