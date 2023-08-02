"use strict";
let numberTuple;
// only 1 number and 1 string in that exact order
numberTuple = [1, 'hello'];
const color = [255, 255, 0];
// Set of named constants that we can reuse
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const mystatus = OrderStatus.DELIVERED;
// CAN BE STRING, NUM, ANY VALUE, CAPS
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["EXIT"] = 0] = "EXIT";
})(ArrowKeys || (ArrowKeys = {}));
