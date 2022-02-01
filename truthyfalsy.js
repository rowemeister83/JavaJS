'use strict'

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);


//// 2nd attempt>

console.log(strictA != strictB);
console.log(strictA !== strictB);


///3rd

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("age in range");
} else if (age < 18) {
  console.log("underage");
} else {
  console.log("catch all");

}

/// final task

let age = 100;

let result = age >= 50 ? "50 and over" : "younger than 50";
console.log(result);
