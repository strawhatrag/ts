// discriminated unions

interface Cow {
  name: string,
  weight: number,
  age: number,
  kind: 'cow'        // common or the discriminant that were discriminating on

}


interface Rooster {
  name: string,
  weight: number,
  age: number,
  kind: 'rooster'  // common
}

interface Pig {
  name: string,
  weight: number,
  age: number,
  kind: 'pig'      // common 
}



type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal): string {

  switch (animal.kind) {
    case ("cow"):
      return "moo";
    case ("rooster"):
      return "cockadadooo";
    case ("pig"):
      return "oink";
    default:
      // we should never get here
      const shouldNeverGetHere: never = animal
  }

}

const steve: Rooster = {
  name: "steve",
  weight: 1,
  age: 1.5,
  kind: 'rooster'  // common

}