// const tinderUser = new Object()
const tinderUser = {} //we can also define object this way

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"alok@gmail.com",
    fullname:{
        username: {
            firstname:"alok",
            lastname:"yadav"
    }
}
}
console.log(regularUser.fullname.username.firstname)

            // ---------object assignment
const obj1 = { 1: " a" , 2: "b"}
const obj2 = {3: " a" , 4: "b"}
const obj3 = {5: " a" , 6: "b"}


const obj4 = {obj1 , obj2}
console.log(obj4);
const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5)

const obj6= {...obj1 , ...obj2}
 console.log(obj6);

const users = [
    {
        id:1,
        email:"a@gamil.com"
    },
    {
        id:2,
        email:"b@gamil.com"
    },
    {
        id:3,
        email:"c@gamil.com"
    }

]
console.log(users[1].email)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged')); //to check it has property or not

