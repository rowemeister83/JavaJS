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


/// exercise 5 -Looked at QA solution for help with 'getDay' issue - stuck a bit! - tried agian


let now = new Date(); 
let day = now.getDay();
switch (day) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Weekdays");
        break;
    case 5:
        console.log("sat");
        break;
    case 6:
        console.log("sun");
        break;
        default:
        console.log("well lookey here, it gone done broke");
        break;

    }

   