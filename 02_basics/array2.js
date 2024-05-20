const heros = ["batman", "superman", "flash"]
const heros2 = ["thor", "ironman", 2, 3, 4, 5, 6, NaN]
 

//heros.push(heros2)
//console.log(heros.concat(heros2))
//console.log(heros)

//console.log(heros.concat(heros2))
const allheros = [...heros, ...heros2 ]

//console.log(allheros)

// Spread Operator mai ... use hota do array ko jodne mai
// Same kaam hai concat ka woh new array bana deta hai dono ko use krke \
// push mai dikkat hojata hai woh array mai dusra array baana deta jisme value nikalne mai hut dikat hota hai


const another_array = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12]]
const real_another_array = another_array.flat(1)
//console.log(real_another_array)

console.log(Array.isArray("Akash"))
console.log(Array.from("Akash"))

// agr array kai undar array hai toh usko remvove krne kai liye flat use kiya ja skta hai
