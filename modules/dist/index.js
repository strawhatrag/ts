// currenlty everything is global scoped so every file can access other files vars, fns
import { add, sample } from './utils';
console.log("hi");
console.log(sample([1, 2, 3]));
console.log(add(1, 2));
