'use strict'

let a = 2;

if(a == 0 ) {
    console.log("sunshine");
    } else if (a !=2) {
    console.log("moonlight");    
    } else {
    console.log('boogie')
    }
    let a = 2; 

    if( a == 0 ) {
      console.log(`sunshine`);
    } else if (a != 2) {
      console.log(`moonlight`);
    } else {
      console.log(`boogie`);
    }

    // TERNARY IF
    
    // shorthand version of an IF ELSE statement
   
    let x = 1;
    
    if (x == 2){
      console.log(`x is 2`);
    } else {
      console.log(`x is not 2`);
    }
    
    x == 2 ? console.log(`x is 2`) : console.log(`x is not 2`);
    
    1 == `1` ? console.log(`true`) : console.log(`false`);
    
    // strictly equal operator
    // ===
    // also checks data type
    
    1 === `1` ? console.log(`true`) : console.log(`false`);