import {getRandomName} from "./src/random-name-generator";

/**
 * Say hello to the given name or a random name if no name is given.
 * @param name The name to say hello to.
 */
function sayHello(name = getRandomName()) {
  console.log(`Hello ${name}`); // Template string
  // or
  console.log("Hello " + name); // String concatenation
  // or
  console.log(["Hello", name].join(" ")); // Array join
}

sayHello("World");
sayHello();