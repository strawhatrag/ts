interface Cordinates {
  x: number,
  y: number
}

const pt: Cordinates = { x: 12, y: 12 };


//Optional tag ? and readonly 
interface Guy {
  readonly id: number,
  first: string,
  last: string,
  nickname?: string
}

const tom: Guy = { id: 1008, first: 'tom', last: 'hiddleton' }

// METHOD
interface Product {
  name: string,
  price: number,
  applyDiscount(discount: number): number     // accepts number and returns number
}

const nikeShoe: Product = {
  name: 'Air jordan',
  price: 2500,
  applyDiscount(discount: number) {
    return this.price * (1 - discount)
  }
}

console.log(nikeShoe.applyDiscount(.5))



interface Vehicle {
  tyre: number
}

interface Car {
  engine: string
}

interface Polo extends Vehicle, Car {
  color: string
}


const mycar: Polo = {
  tyre: 4,
  engine: '1100cc',
  color: 'red',
}