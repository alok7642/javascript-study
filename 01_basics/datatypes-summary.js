// primitive 
// 7 types :String,Number,null,undefined,Boolean,Symbol,BigInt

const score=100
const scoreVal = 100.3 //there is not need to define the type of datatypes so js is dynamically typed language , but typeScript is statically typed we have to define first 
let outsideTemp = null;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id === anotherId);

const bigNum = 333333333333333333333333333333333923456789923456789n;
console.log(bigNum);

// Reference (Non primitive)
//Array , Object , Function

const heroes = ['shaktiman','naagraj' , 'doga'];
let myObj = {
    name:'alok',
    age:22,
 }
 const myFunction = function () {
    console.log('hello world')
 }

 console.log(typeof bigNum);
 console.log(typeof outsideTemp);
 console.log(typeof scoreVal);
 console.log(typeof myFunction);
 console.log(typeof anotherId);

//  =================== memory allocation ===========
// stak memory ( primitive )
// heap memory  ( non-primitive)

let name = 'alok';

let newName = name;
newName = 'aman'
console.log ( newName);
console.log(name )

let userOne = {
   email:'alok@google.com',
   city:'supaul'
}
let userTwo = userOne
userTwo.city = 'patna '

console.log(userOne);
console.log(userTwo);
