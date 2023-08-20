export default class Dog {
  constructor(public name: string, public breed: string, public age: number) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  bark() {
    console.log("Woof!")
  }
}