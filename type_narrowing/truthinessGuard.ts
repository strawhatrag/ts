

// ? makes it optional - means undefined
// const printLetters = (word: string | undefined) 
// const printLetters = (word: string | null) 
const printLetters = (word?: string) => {

  if (word) {
    for (let char of word) {
      console.log(char);
    }
  }

  console.log('no words found')

}


// equality check  ===

const checkForEquality = (x: string | number, y: string | boolean) => {

  if (x === y) {
    x.toLowerCase()
  }

}