// --------------- Part 1: Fizz Buzz ---------------
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// for (let num = 1; num <= 100; num++) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log("Fizz Buzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
// }

// --------------- Part 2: Prime Time ---------------
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// let n = 181;
// while (n > 0) {
//   //   console.log(n);
//   n++;
//   if (n === 2 || n === 3) {
//     console.log(n);
//     break;
//   }
//   if ((n % 2 === 0) || (n % 3 === 0)) {
//     continue;
//   }
//   else if (n % 2 !== 0 || n % 3 !== 0) {
//     console.log(n);
//     break;
//   }
// }

// --------------- Part 3: Feeling Loopy ---------------
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26`;

// What do I need?
//Empty string variable

let cell = ``;
counter = 0;
const row = [];

for (let i = 0; i < 4; i++) {
  row[i] = "some stuff";
  console.log(row);
}

// for (let )

for (let c of csv) {
  if (c !== `,`) {
    cell += c;
    continue;
  } else {
    continue;
  }
}

// for (let c of csv) {
//   if (c !== `,`) {
//     cell += c;
//     continue;
//   } else if (c == `,`) {
//     counter += 1;
//     row[counter] += cell;
//     console.log(row, counter, c, cell);
//     continue;
//   }
//   console.log(c, cell, counter);
//   break;
// }

//   console.log(str[i]);
// }

// for (const c of str) {
//   if (c == "l") {
//     continue;
//   }

//   console.log(c);
// }

// while (c!==`,`) {
//     cell += c;
//     continue;
// }
// console.log(c)
