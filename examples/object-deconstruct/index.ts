// without array type annotation
const myArray = ["first", 1234, "third"];
const [a, b, c] = myArray;
console.log(a, b, c);

// with array type annotation
const myArray2 = ["first", 1234, "third"] as [string, number, string];
const [d, e, f] = myArray2;
console.log(d, e, f);

// the spread operator can be used to deconstruct one level of an array. The items are spread
const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.min(...someNumbers));
// same as
console.log(Math.min.apply(Math, someNumbers));
// or
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));

// same goes for objects
const obj = {one: 1, two: () => 2, three: "3"};
const {one, two, three} = obj;
console.log(one, two(), Number.parseInt(three));

