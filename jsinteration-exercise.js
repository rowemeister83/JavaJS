// exercise one

'use strict';

let a = 100;

while (a <= 200) {
  a++;
  console.log(`a = ${a}`);

}


/// exercise 2

let a = 100;

while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }

  a++;
}


// exercise 3

for (let z = 0; z < 10; z++) {
    for (let t = 1; t <= 10; t++) {
      console.log(t);
    }

 }  

// exercise 4

/// could apply this to first exercise?

for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);

  }


/// exercise 5


let time = new Date(); 
let today = time.getToday();
switch (today) {
    case 0:
        console.log("sunday");
        break;
      case 6:
        console.log("saturday");
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        console.log("Weekdays");
        break;
      default:
        console.log("well lookey here, it gone done broke");
        break;

    }