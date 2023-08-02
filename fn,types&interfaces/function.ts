function greet(person: string = 'stranger'): string {
  return `hi ${person}`;
}

greet("luffy");


const addnums = (a: number, b: number): number => {
  return a + b
};


function rando(num: number) {

  if (num < 2) {
    return num.toString();

  } else {
    return num;
  }
}


function printSmng(msg: string): void {
  console.log(msg);
}

function makeError(msg: string): never {
  throw new Error(msg);
}