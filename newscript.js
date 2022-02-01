let a = 1;
const b = 2;

var c = 3;

// camelCase

let aBoolean = true;
console.log(aBoolean);

let aNumber = 6;
console.log(aNumber);

let aString = "text";
console.log(aString);

let aBrokenBigInt = 999999999999999n;
console.log(aBrokenBigInt);


let aSymbol = Symbol("description is here: ");
console.log(aSymbol);


let aNull = null;
console.log(aNull);

let anUndefined;
console.log(anUndefined);

let myObject = {
    key: "value",
    anotherKey : 12345
}

console.log(myObject);


//STRINGS

let string1 = "34 * 872 = ";
let result = 34*872;
console.log(string1 + result);

let string2 = "33 * 872 = ${33*872}";

console.log(string2);