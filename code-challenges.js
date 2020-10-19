// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.
console.log("First Question: \n")

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee.
// Create a function that will take in the array of objects (key / value pairs)
const sentence = (object) => {
  // Map through the array
  return object.map(value => {
    // create a variable that pinpoints the correct key and split the name into two arrays (first / last name)
    let humans = value.name.split(" ")
    // Map through this new array and upper case each first letter of first and last name
    let properNames = humans.map((name) => {
      return name[0].toUpperCase().concat(name.slice(1))
      // join the arrays back into one and then return both values by calling their variable and key
    }).join(" ")
    return ` "${properNames} is a ${value.occupation}."\n `
  }).join(" ")
}

console.log(sentence(people));

// my attempts to condense the code, but it only produced the code like this: "FORD PREFECT is a hitchhiker." so almost but not quite.

// const sayMyName = (object) => {
//   return object.map(value => {
//     let yeeHaw = value.name.toUpperCase()
//     return `"${yeeHaw} is a ${value.occupation}."`
//   })
// }
// console.log(sayMyName(people));

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.
console.log("Second Question: \n")

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
const newLocal = 3
// Expected output: [ 2, 1, -1 ]

// create a function that takes in an array
const remainders = (arr) => {
  // use a filter to find only the numbers in that array
  return arr.filter(value =>
    typeof value === 'number')
    // attach another function (map) to grab the numbers and find the remainders of those (numbers % 3)
    .map(value =>
      value % 3)
}

console.log(remainders(testingArray1), "\n")
console.log(remainders(testingArray2), "\n")

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.
console.log("Third Question: \n")

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// create a function that takes in two arrays at the same time
const noDupies = (arr1, arr2) => {
  // create a variable that would put the two functions into a new larger function
  let welcomeBrother = arr1.concat(arr2);
  welcomeBrother.sort(); // sort through the array to find duplicates
  let twoBecomeOne = []; // creating an empty array to put the new no dupe array into
  for (let i = 0; i < welcomeBrother.length; i++) {
    // create an if / else statement that will look through each and remove them if they are the same
    if (!(welcomeBrother[i] === welcomeBrother[i + 1] || welcomeBrother[i] === [i - 1])) {
      twoBecomeOne.push(welcomeBrother[i])
    }
  }
  return twoBecomeOne;
}

console.log(noDupies(testingArray3, testingArray4))