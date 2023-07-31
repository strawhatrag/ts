type Person = { firstName: string; lastName: string }

function printobj(person: Person): Person {
  return person;
}


type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};



function calculateCost(song: Song): number {

  return song.numStreams * 0.0033

}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
  }
};




type point = {
  x: number,
  y: number,
  z?: number
}

const point = { x: 1, y: 1 }


type User = {
  readonly id: number,
  name: string,
}



const newUser: User = {
  id: 1007,
  name: 'blondie'
}


console.log(newUser.id)



type Cat = {
  numOfLives: number
}

type Dog = {
  breed: String,
}


type CatDog = Cat & Dog


const samchi: CatDog = {
  numOfLives: 9,
  breed: 'finile'
}