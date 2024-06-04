//const tinderUser = new Object()
//console.log(typeof tinderUser)

const tinderUser = {}
//console.log(typeof tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Akash"
tinderUser.age = "12"
//console.log(tinderUser);

const regularUser = {
    email: "akashvermaa@gmail.com",
    name: "Akash",
    phonenumber: "1234567890",
    fullname: {
        userfullname: {
            Firstname: "Akash",
            Lastname: "Verma",
          }
    }
    }

console.log(regularUser)
const object1 = {1: "a", 2: "B"}
const object2 = {3: "A", 4: "b"}
const object4 = {5: "B", 6: "C"}
//const object3 = Object.assign({}, object1, object2)

const object3 = {...object1, ...object2, ...object4}
console.log(object3)