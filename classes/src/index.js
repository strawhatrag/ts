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
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var mob = new Player("mob", "psycho");
