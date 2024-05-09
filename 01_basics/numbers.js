const score = 400
//console.log(score)

//const balance = new Number("100")

//console.log(balance)
//console.log(balance.toString().length)

// Humlog Number ko string mai badal skte hai use krke to.String use krke phir string ka property use kr kai 

//console.log(balance.toFixed(3))

// "To fix" use kiya jaata hai 2 ya 3 decimal places tk dikhane kai liye . Generally E commerce website pai use hota hai 

const oneNumber = 156.879
//console.log(oneNumber.toPrecision(3))

// precision use hota hai value ko round off karne kai liye

const hundreds = 100000000
//console.log(hundreds.toLocaleString("en-IN"))

// "toLocaleString" use hota hai value ko number system mai laagane mai Indian number system chiaye toh ("en-IN") input dena hoga




// --------------------------------------------MATHS----------------------------------------------------------------------------------------

//console.log(Math)

//console.log(Math.abs(-3))
// abs modulus hai -ve to +ve

//console.log(Math.ceil(3.1))
//console.log(Math.floor(3.9))

console.log((Math.random()* 10 ) + 1)

const min = 10
const max = 20
//console.log((Math.floor(Math.random() * (max - min + 1))) + min)



const anothermin = 0
const anothermax = 2000
console.log((Math.floor(Math.random() * (anothermax - anothermin + 1))) + anothermin)
