// array

const myArr = [0, 1, 2, 3, 4, 5] // the array in the JS is resizable and yat different 
const myHeors = ["shaktiman", "naagraj"]


// jr apan Array copy kela tr te Shallow Copy karate 
// Shallow copy means it gives a same referance point to the memory means ek change kelaa tr original pan chabge hote 
// Deep yet te referance same nahi thevat hte different copy wirh the different referance karate 

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()   //  call pop to empty Array it gives a undefined 

// myArr.unshift(9) // Unshift Add the at the Start of the Array  need to give the Argument 
// myArr.shift()  // remove the Value from the Start of the Array Like pop  

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));   // jar yet Asi value takali ki tyachi value exist nahi  karat tr te ans -1 dete 

// const newArr = myArr.join()  // yat apan join kela na arraya la tr tyat same value print hote pan tech type change hote 
// ani te type String hote 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


/* 1  Slice :
            in the Slice tyat na original Array same rahate ani range madhye last index la ghet nahi tyala sodate
   2  Splice ;
            int the Splice yat na original array cahange hote  manje ji range dila na te range te ghet last cha index 
            pan ghete ani te all changes copy madhye nahi Original arrar pan karata he main differance ahe 
*/ 