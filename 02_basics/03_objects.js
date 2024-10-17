// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   // jr aplyala ek "Symbol" object mnadhye dyayacha sel tr ma aplyala "[]" dena compulsary ye 
    age: 18, 
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  
// nai apan normal "." laun pan karunshakato pan jr tithe asa a strig feila tr nahi deta  yet ma "[]" use karav lagela 


// console.log(JsUser["email"])

// console.log(JsUser["full name"])  
//yat na jeaplya la Access karayache asel object element tr ha new ahe "[""]" madhye name dyayacha jr te string declare asel tr 


// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// jr apan ekada jr object freez kelsa tr ma aplyala tyat kahi update or change nahi karat yet 

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());