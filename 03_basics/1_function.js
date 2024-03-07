function sayMyname () {
    console.log('A');
    console.log('l');
    console.log('o');
    console.log('k');
}
sayMyname();
// sayMyname();

// function addTwoNumber(num1 , num2){ //here num1 & num2 is parameters 
//     console.log(num1+num2);
// }
// addTwoNumber(30,2) //30 and 2 is argument



function addTwoNumber(num1 , num2){ 
// let result = num1+num2;
// return result; 
return num1+num2; //we can also do like this
}
const result = addTwoNumber(3,5)
console.log('result :',result)


function loginUserMessage(username){
    if(username === undefined){
        console.log('pls enter a username')
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage('Alok'));
// console.log(loginUserMessage())


function loginUserMessage(username ='sam' ){ //if we want to give a default value 
    if(!username){
        console.log('pls enter a username')
        return;
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage('Alok')); //if we pass value then it will be updated else default value will generate
console.log(loginUserMessage())


function calCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calCartPrice(100,200,300,400));


const user = {
      username:'Alok',
      prices:800
}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and prices is ${anyobject.prices}`)
}
// handelObject(user)
handelObject({ //we can also do like this
    username:'Aman',
    prices:400
})



const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([900,800,700,600]))

