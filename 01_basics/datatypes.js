// Ways to store and access data from tha database can be catogarised in two types:-
                

//                 1)Primitve Data Type                                                                                                       2) Non Primitvie (Non Reference) Data Type
 
 
//                                                                                Primitive Data Type

//                                                   7 types:- String, Number, Boolean, Null, Undefined, Symbol, BigInt      



//                                                                             Non Reference Data Type:-  

//                                                                3 types:    Arrays, Objects, Functions

// Is Java dynamic or staically type language ?
//  Dynamically typed language because it does not require variable determination before execution

const id = Symbol('1234')
const anotherid = Symbol('1234')
//console.log(id, anotherid)

const heros = ["Shakitman", "Ironman"]
//console.log(typeof heros)

let myObj = {
            name: "Akash",
            age: 34,
}
//console.log(myObj)

const bigNumber = 67287468276472n
//console.log(typeof bigNumber)
const myFunctions = function(){

}
    //console.log(myFunctions)
    //console.log(typeof myFunctions)

            //       Array ka type of Object
            /// Function ka type of Function Object aata haai
            //  Objects ka type Object aata hai 

//                                                          --------------------------------MEMORIES-------------------------------------

//                                                            Two Types:-  1)Stack(Primitve)  2) Heap(Non Primitive)
//                                                 1) Stack mai saved info change nahi hota hai          2)Heap mai value original mai chmage hojata hai 

let myname = "Akash" 
let anothername = myname
anothername = "Verma"

//console.log(myname);
//console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    age: 35,
    upiid: "user@ybl"
}
let userTwo = userOne
userTwo.email = "akash@gamil.com"
//console.log(userTwo.email)
//console.log(userOne.email)


let identityOne = {
    name: "Rahul",
    age: 34,
    school: "dps@gmail,com"
}
let identityTwo = identityOne
identityTwo.name = "Makku"
//console.log(identityOne)
//console.log(identityTwo.name)
//console.log(typeof identityTwo)

let myName1 = "Mark"
myName2 = myName1;
myName2 = "Rahul"
console.log(myName2)




//===================================================================================Stack Example================================================================================================
let info = "Akash";
let anotherinfo = info
anotherinfo = "Mark";
console.log(anotherinfo)
console.log(info)

//=============================================================================================Heap Example=====================================================================================
let surname = {
    name: "akash",
    age: "12",
}
let anothersurname = surname
surname.age = "24"
surname.name = "Nightshade"
console.log(surname, anothersurname)
