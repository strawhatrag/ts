// class Player {
//   public readonly first: string;   // readonly is optional okay!
//   // public, private modifier  means readbility outside the fn
//   public readonly last: string;    // public  is optional cuz everything is public by default 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;  // you need to instantiate the type before like above 
//     this.last = last;
//   }
//   private secretMethod(): void {  // only accessible inside the class
//     console.log("secret method!")
//   }
// }
// class Player {
//   protected score: number = 0;  // why protected?  
//   constructor(public first: string, public last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   get fullName(): string {
//     return `${this.first} ${this.last}`;
//   }
//   set setScore(newScore: number) {  // no return type anotation
//     this.score = newScore;
//   }
// }
// class superPlayer extends Player {
//   public isAdmin: boolean = true;
//   // note : public can only be accesed inside the class not even in child classes
//   // so we can use protected modifier it allows child classes to access it
//   maxScore() {
//     this.score = 9999999;
//   }
// }
// const mob = new Player("mob", "psycho")
// console.log(mob.fullName)
// mob.setScore = 50
// // interface 
// interface Colorful {
//   color: string;
// }
// class Bike implements Colorful {
//   constructor(public color: string) { }
// }
// Abstract class - TS exclusive
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    // Not mandatory for inheriting classes, thus no abstract keyword
    Employee.prototype.greet = function () {
        console.log("Hi, I'm ".concat(this.first));
    };
    return Employee;
}());
var PermanantEmployee = /** @class */ (function (_super) {
    __extends(PermanantEmployee, _super);
    function PermanantEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.first = first;
        _this.last = last;
        _this.salary = salary;
        return _this;
    }
    // since its abstract class it needs to be implemented
    PermanantEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return PermanantEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hoursWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.first = first;
        _this.last = last;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    // since its abstract class it needs to be implemented
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
var betty = new PermanantEmployee("betty", " pitty", 90000);
console.log(betty.getPay());
var petty = new PartTimeEmployee("petty", "witty", 100, 100);
console.log(petty.getPay());
