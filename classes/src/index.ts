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

class Player {
  protected score: number = 0;  // why protected?  

  constructor(public first: string, public last: string) {
    this.first = first;
    this.last = last;

  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  set setScore(newScore: number) {  // no return type anotation
    this.score = newScore;
  }


}

class superPlayer extends Player {

  public isAdmin: boolean = true;
  // note : public can only be accesed inside the class not even in child classes
  // so we can use protected modifier it allows child classes to access it

  maxScore() {
    this.score = 9999999;
  }
}

const mob = new Player("mob", "psycho")

console.log(mob.fullName)

mob.setScore = 50