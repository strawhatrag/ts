import Dog from "./Dog.js"
import ShelterDog from "./ShelterDog.js";
import { add, subtract, multiply } from "./utlis.js"
console.log("Index file")




const elton = new Dog("elton", "aussie", 0.5);

elton.bark()

console.log(add(4, 5))
console.log(subtract(40, 33))
console.log(multiply(12, 100))


const buffy = new ShelterDog("buffy", "pitbull", 5, "chennai");