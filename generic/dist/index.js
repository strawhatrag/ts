let inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Hacked!";
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
getRandomElement(['a', 'b', 'c']);
getRandomElement([5, 10, 20, 30, 40, 50]);
getRandomElement(['a', 'b', 'c']);
getRandomElement([5, 10, 20, 30, 40, 50]);
console.log('');
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'rag' }, { skills: ['js', 'ts', 'fullstack'] });
