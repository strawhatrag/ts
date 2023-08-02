"use strict";
const pt = { x: 12, y: 12 };
const tom = { id: 1008, first: 'tom', last: 'hiddleton' };
const nikeShoe = {
    name: 'Air jordan',
    price: 2500,
    applyDiscount(discount) {
        return this.price * (1 - discount);
    }
};
console.log(nikeShoe.applyDiscount(.5));
const mycar = {
    tyre: 4,
    engine: '1100cc',
    color: 'red',
};
