import {getRandomName} from "./src/random-name-generator";

const name = getRandomName();
console.log(`Hello ${name}`); // Template string
console.log("Hello " + name); // String concatenation
console.log(["Hello", name].join("")); // Array join
