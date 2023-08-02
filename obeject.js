"use strict";
function printName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
printName({ firstName: 'ragon', lastName: 'fambey' });
function printobj() {
    return { firstName: 'ragon', lastName: 'fambey' };
}
function weird(person) {
    return person.firstName;
}
weird({ firstName: 'ragon', lastName: 'fambey', age: '23' });
let variable = { firstName: 'ragon', lastName: 'fambey', age: '23' };
weird(variable);
