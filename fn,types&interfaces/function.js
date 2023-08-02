"use strict";
function greet(person = 'stranger') {
    return `hi ${person}`;
}
greet("luffy");
const addnums = (a, b) => {
    return a + b;
};
function rando(num) {
    if (num < 2) {
        return num.toString();
    }
    else {
        return num;
    }
}
function printSmng(msg) {
    console.log(msg);
}
function makeError(msg) {
    throw new Error(msg);
}
