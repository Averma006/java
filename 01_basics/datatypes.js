// Ways to store and access data from tha database can be catogarised in two types:-
                

//  1)Primitve Data Type          2) Non Primitvie (Non Reference) Data Type
 
 
// Primitive Data Type

// 7 types:- String, Number, Boolean, Null, Undefined, Symbol, BigInt           

// Non Reference Data Type:-  

// Arrays, Objects, Functions

// Is Java dynamic or staically type language ?
//  Dynamically typed language because it does not require variable determination before execution

const id = Symbol('1234')
const anotherid = Symbol('1234')
//console.log(id, anotherid)

const heros = ["Shakitman", "Ironman"]
console.log(typeof heros)

let myObj = {
            name: "Akash",
            age: 34,
}
//console.log(myObj)

const bigNumber = 67287468276472n
console.log(typeof bigNumber)
const myFunctions = function(){

}
    console.log(myFunctions)
    console.log(typeof myFunctions)

            //       Array ka type of Object
            /// Function ka type of Function Object aata haai
            //  Objects ka type Object aata hai 