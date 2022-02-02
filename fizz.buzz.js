'use strict'

/////Write a program that will console log integers 1 to 100 but print “Fizz” if an integer is divisible by 3



////Write a program that will print the song "99 bottles of beer on the wall", based on the lyrics:


function bottleTune() {  
  let b = 99
  var Bottles;
  var BottlesGone;
  for (b =99; b >= 1; b--) {
    if (b == 1) {
      Bottles = "Bottle";
      BottlesGone = "No Bottles of Beer on the wall";
    } 
    
    else {
      Bottles = "Bottles";
      BottlesGone = b - 1 + " Bottles of beer";
    } console.log(b+ " " + Bottles + " bottles of beer on the wall ");
    console.log(b+ " " + Bottles + " of beer,");
    console.log("take one down and pass it aroun,");

    } 
}
console.log(bottleTune());


////// another


