'use strict'

// For loops use a counter - run until a condition is met

for(let i = 0; i < 10; i++) {
    console.log('i = ${i}');
}

/// For Loops work with booleans - while a condition is true


let condition = true;
let i = 0;

while(condition == true) {
    console.log('increment me!');
    i++;

    if( i >=3) {
        condition = false;
    }
}

// do-while loops - like a while loop always runs at least ONCE

let a = false;

do {
    console.log('run forest run');
}   while(a == true);


// switch-cases - run until a break or return - often more effective than large is-else statement (elif)

let num = 1;

switch(num) {
    case 0:
        console.log('number is zero');
        break;
    case 1:
        console.log('number is one');
    case 4:
        console.log('number is four');
    case 10:
        console.log('number is ten');
        break;
    default;
    console.log('something went badly wrong')
}


/// example in flow chart

let n =2;

while (n <=6){
    console.log(n+1);
    n+=2;
}

console.log("");

for(let n = 2; n <=6; i = i +2){
    console.log(i+1);
}
