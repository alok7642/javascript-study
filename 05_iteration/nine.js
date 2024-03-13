// reduce study for total bill 

const mynum = [ 1,2,3,4,5]

// const total = mynum.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} , currval :${currval}`);
//     return acc + currval;
// },0)
// console.log(total);



// by arrow function
// const total = mynum.reduce((sum , currval) => {
//     console.log(`sum : ${sum} , currval : ${currval}`);
//     return sum + currval
// },0)
// console.log(total);


// const total = mynum.reduce(( acc , currval) => acc+currval , 0 )
// console.log(total);


var shopingCart = [
    {
        courseName : 'java course',
        price : 3000
    },
    {
        courseName : 'mobole dev course',
        price : 5000
    },
    {
        courseName : 'data scientist course',
        price : 8000
    },
]

const totalPrice =shopingCart.reduce( (acc , item) => acc + item.price , 0 ) 
console.log(totalPrice);