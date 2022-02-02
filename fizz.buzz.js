'use strict'

/////Write a program that will console log integers 1 to 100 but print “Fizz” if an integer is divisible by 3



////Write a program that will print the song "99 bottles of beer on the wall", based on the lyrics:

function bottleTune() {  
    var Bottles;
    var BottlesLeft;
        for (b = 99; b >= 1; b--) {
          if (b == 1) {
            Bottles = "Bottle";
            BottlesLeft = "No More Bottles of beer on the wall - Go to the store and buy some more: 99 bottles of beer on the wall";
          } else {
            Bottles = "Bottles";
            BottlesLeft = b - 1 + "Bottles of beer on the wall";
          } console.log(b+ " " + Bottles + " of Beer on the wall -");
          console.log(b+ " " + Bottles + " of beer,");
          console.log("Take one down and pass it round,");
          console.log(BottlesLeft);
          } 
          
      }
      console.log(bottleTune());




////// another


