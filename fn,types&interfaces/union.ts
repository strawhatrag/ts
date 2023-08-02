let age: number | string;
age = '24'
age = 25


type Point = { x: number; y: number }
type Loc = { lat: number; lng: number }
let cordinates: Point | Loc = { lat: 0, lng: 1 }

cordinates = { x: 0, y: 1 }


let array1: (number | string)[] = [1, 2, 'abb']

//literal type 
let zero: 0 = 0
let string1: 'hi' = 'hi'
//where to use it
function answerQuestion(answer: 'yes' | 'no'): string {
  return `your selected ${answer}`
}

// type can alos be a single literal
type year = 2023;
type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';