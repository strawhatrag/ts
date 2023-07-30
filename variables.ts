let a : string = "hello world"; // type is in smallcase


const movies = ['arraival', 'aliens','amadeus']

let foundMovie : any; // it infers as any

for(let moive of movies) {
  if(moive == 'amadeus') {
  foundMovie = 'amadeus';
  }
}

console.log(foundMovie)