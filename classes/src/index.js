class Player {
  static ablilites = "psychic abilities"; // only exists for the class , not for instance

  level = 80; // properties don't need let, const etc...
  #feelings = "lonely"; // #var is private cannot access it outside
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  incident() {
    this.level += 10; // this is needed to access properties
    this.#feelings = "angry";
  }

  // getter
  get fullname() {
    return `${this.first} ${this.last}`;
  }

  // setter
  set level(newLevel) {
    if (newLevel < 0 || newLevel > 100) {
      throw new Error("level range invalid");
    }
    this.level = newLevel;
  }
}

//inhertitance
class AdminPlayer extends Player {
  // super() - to override the default constructor but pass the default params
  constructor(first, last, powers) {
    super(first, last); // inside the constructor
    this.powers = powers;
  }

  isAdmin = true;
}

const eminem = new AdminPlayer("slim", "shady", [
  "super vision",
  "super human Strength",
]);

const mob = new Player("mob", "pyscho");
console.log(mob.level); // level is not private
mob.incident();
console.log(mob.level);

//getter
console.log(mob.fullname); //not fullname() since getter

// setter
mob.level = 50; // set you can assign level like a var
console.log(mob.level);
