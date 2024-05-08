const name = "akash"
const repoCount = 50
//console.log(name + repoCount + "Value")

const gameName = new String ("akashverma")
console.log(gameName.length)
//console.log(gameName[7])

//console.log("akashvermaa".__proto__)
console.log(gameName.toUpperCase())
//console.log(gameName.charAt('4'))

//console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 5)
//console.log(newString)
// Substring mai +ve value use hota hai 

// Substring use hota hai ek string ko todne mai help krta hai
// Slice bhi same thing hai lekin usme humlog -ve value bhi de skte hai 
// Exmaple given Below

const anotherString = gameName.slice(-10, 3)
console.log(anotherString)

// Yaha Slice use ho raha hai or result mai "aka" diya hai

const newStringOne = "     akash      "
console.log(newStringOne)
console.log(newStringOne.trim())
// Trim extra faltu space haata deta hai generally use hota hai website pai

const url = "https:/akaashvermaa.com/akash%10vermaa"
console.log(url.replace("%10", 24))

console.log(url.includes("akash"))
console.log(url.includes("mango"))

// Includes use hota word check karne kai liye ki url mai hai ki nahi 
//  replace to replace kai liye use hota hai

console.log(gameName.valueOf())
