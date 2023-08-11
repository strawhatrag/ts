interface Cat {
  name: string,
  numLives: number
}

interface Dog {
  name: string,
  breed: string
}


// note:  'is' and 'as' is ts exclusive
function isCat(animal: Cat | Dog): animal is Cat {    // predicate : paramenterName is Type

  return (animal as Cat).numLives !== undefined    // true
}

function makeNoise(animal: Cat | Dog): string {

  if (isCat(animal)) {
    //  animal is of type cat here
    return 'meow'
  }

  return 'bow bow'

}