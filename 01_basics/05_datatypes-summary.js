//  Primitive


//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt(kahi mothya values ahet tya bibg int la use hotat )
//    : this all  are callByValue 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions   = data type is function  and only for funtion is object function 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// type of object 

// undefined = undefined 
// null = Object 
// Boolean = Boolean 
// Number = Number
// String = String 
// Object(does not implement call ) = Object
// Object(does  implement call ) = function 