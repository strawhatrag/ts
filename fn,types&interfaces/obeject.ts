function printName(person: { firstName: string; lastName: string }): void {

  console.log(`${person.firstName} ${person.lastName}`)
}

printName({ firstName: 'ragon', lastName: 'fambey' })

function printobj(): { firstName: string; lastName: string } {
  return { firstName: 'ragon', lastName: 'fambey' };
}


function weird(person: { firstName: string; lastName: string }) {
  return person.firstName;
}

weird({ firstName: 'ragon', lastName: 'fambey', age: '23' })

let variable = { firstName: 'ragon', lastName: 'fambey', age: '23' }

weird(variable)