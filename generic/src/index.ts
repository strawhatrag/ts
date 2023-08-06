// const numbs: number[] = []

// const nums: Array<number> = []

// queryselector is a generic function
let inputEl = document.querySelector<HTMLInputElement>("#username")
console.dir(inputEl);
inputEl.value = "Hacked!"


// T - short for Type
function getRandomElement<T>(list: T[]): T {

  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}


getRandomElement<string>(['a', 'b', 'c'])
getRandomElement<number>([5, 10, 20, 30, 40, 50])

// this is fine also
getRandomElement(['a', 'b', 'c'])
getRandomElement([5, 10, 20, 30, 40, 50])
console.log('')

// multiple generics

function merge<T extends object, U extends object>(object1: T, object2: U) {

  return {
    ...object1,
    ...object2
  }
}


const comboObj = merge({ name: 'rag' }, { skills: ['js', 'ts', 'fullstack'] })


// default type in generics =

function makeEmpty<T = number>(): T[] {
  return []
}


const num = makeEmpty()  // default to number[]
const bool = makeEmpty<boolean>()   // now returns boolean[]


// generic with class

interface Song {
  title: string,
  artist: string,
}

interface Video {
  title: string,
  creator: string,
  resolution: number,
}


class Playlist<T>{  // T is the generic type that can accept

  public playlist: T[] = [];

  add(content: T) {
    this.playlist.push(content);
  }
}

const song1 = new Playlist<Song>

const rapGod: Song = {
  title: 'rap god',
  artist: 'eminem',
}

song1.add(rapGod)
