// --------------- Part 1: Fizz Buzz ---------------
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let num = 1; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("Fizz Buzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

// --------------- Part 2: Prime Time ---------------
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

let n = 4;
while (n > 0) {
  // negative numbers cannot be prime
  // immediately search for the next number
  n++;
  if (n === 2 || n === 3) {
    // 2 and 3 are prime
    console.log(n);
    break;
  } else if (n % 2 === 0 || n % 3 === 0) {
    // check for divisibles of 2 & 3
    continue;
  } else if (n % 2 !== 0 || n % 3 !== 0) {
    console.log(n);
    break;
  }
}

// --------------- Part 3: Feeling Loopy ---------------
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let test = `Index,Mass (kg),Spring 1 (m),Spring 2(m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
// What do I need?
// Empty string variable
// Empty array/list

let cell = ``;
let row = [];

let commaCounter = 0;
let escapeCounter = 0;
//---- First Solution Attempt: It works!---
for (let char of csv) {
  if (char !== `,` && char !== `\n`) {
    // Append characters to empty string variable until it reaches a comma or escape character
    cell += char;
  } else if (char == `,`) {
    // If there is a comma, add the string to an array, then empty the string variable
    row[commaCounter] = cell;
    commaCounter++;
    // cell[commaCounter] = cell
    // console.log(commaCounter, cell);
    cell = ``;
  } else if (char == `\n`) {
    // If there is an escape character, add the string to the array, print the row, then empty the array variable and string variable
    row[commaCounter] = cell;
    console.log(row);
    row = [];
    commaCounter = 0;
    cell = ``;
  }
}
//This appends the last cell in the string
row[commaCounter] = cell;
console.log(row);

// //---- Second Solution: It works too! ---
// for (let char of csv) {
//   if (char == `\n`) {
//     // If there is an escape character, add the string to the array, print the row, then empty the array variable and string variable
//     row[commaCounter] = cell;
//     console.log(row);
//     commaCounter = 0;
//     cell = ``;
//   } else if (char == `,`) {
//     // If there is a comma, add the string to an array, then empty the string variable
//     row[commaCounter] = cell;
//     commaCounter++;
//     cell = ``;
//   } else {
//     // Append characters to empty string variable
//     cell += char;
//   }
// }
// // This prints the last row
// console.log(row);

