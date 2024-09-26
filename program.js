const r = 100;
const g = 40;
const b = 255;
const message = `The color is ${getColor()}`;
console.log(message);

function getColor()
{
    return '(${r}, ${g}, ${b})';
}

const multiply = (a, b) => {
    return a * b;
}

const add = (a, b) => a + b;

let result = multiply(20, 3);
console.log(result);

result = add(10, 3);
console.log(result);

const divide = (den, num) => {
    if (den === 0) {
        return undefined;
    }
    return num / den;
}

const printMe = msg => console.log(msg);

console.log(divide(5, 0));

printMe("Hello, from Node.js");

const snacks = ["Dounuts", "Cookies", "Pizza", "Pie", "Chips", "Watermelon"];

const list = snacks.map(snack => `I love ${snack}`);
console.log(list);

const instructor = "Tyler Schrock";
const number = "106";

const classroom = {
    instructor,
    number

};
console.log(classroom);