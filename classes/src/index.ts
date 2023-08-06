// class Player {
//   public readonly first: string;   // readonly is optional okay!
//   // public, private modifier  means readbility outside the fn
//   public readonly last: string;    // public  is optional cuz everything is public by default 

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


abstract class Employee {
  constructor(public first: string, public last: string) { }

  // Mandatory implementation of the method due to the abstract keyword
  abstract getPay(): number;

  // Not mandatory for inheriting classes, thus no abstract keyword
  greet() {
    console.log(`Hi, I'm ${this.first}`);
  }
}

class PermanantEmployee extends Employee {

  constructor(public first: string, public last: string, private salary: number) {
    super(first, last)
  }

  // since its abstract class it needs to be implemented
  getPay(): number {
    return this.salary;
  }

}

class PartTimeEmployee extends Employee {

  constructor(public first: string, public last: string, private hourlyRate: number, private hoursWorked: number) {
    super(first, last)
  }
  // since its abstract class it needs to be implemented
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

}


const betty = new PermanantEmployee("betty", " pitty", 90000);
console.log(betty.getPay());

const petty = new PartTimeEmployee("petty", "witty", 100, 100);
console.log(petty.getPay());