// ------------------------------------Array---------------------------------------------

const myArr = [1, 2, 3, 4, 5, 6]

// Numbers or objects in array are called elements 
// can be string anything in array
// multiple item in single variable and are resizeable

//console.log(myArr[3]);

const myHeros = ["batman", "superman"]
//console.log(myHeros)
/// 
   // myArr.push(7)
    //myArr.pop()
  //  console.log(myArr)
// push is used to add number or object in array 
// pop is used to remove the last object or number in array
//myArr.unshift(4)
//console.log(myArr)
//console.log(myArr.indexOf(3))

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr)
//console.log(typeof newArr)
//console.log(newArr.includes(4))




//---------------------------------- Slice, Splice-----------------------------------------------------\
console.log("A", myArr);
const myn1 =  myArr.slice(1, 4);
//console.log(myn1)
//console.log("B", myArr)

const myn2 = myArr.splice(0, 2)
//console.log(myn2)


// Slice mai main array ko koi dikkat nahi hota
//splice mai array ka value change hojata hai
//Slice mai range value include nahi hota
// Splice mai value include hota hai 


