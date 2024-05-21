// Two ways to declare objects 1) Literal 2)Constructive
// Literal mai singleton kabhi nahi banta hai
// Constructive mai hamesha singleton banta hai 



//  Oject Literals------------------------------------------
const mySym = Symbol("mykey1")
const jsUser  = {
    "full name": "Akash Verma",
    [mySym]: "mykey1",
    name: "Akash",
    age: 12,
    email: "akash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
jsUser.age = 23
//console.log(jsUser)
//console.log(jsUser)
Object.freeze(jsUser)
jsUser.email = "akashvermaa@yahoo.com"
//console.log(typeof mySym)

jsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting());

