// study how to use map linkage  and filter 

const num = [1,2,3,4,5,6,7,8,9,10]

let newNum1 = num.map( (inc) => inc + 10 )
                .map( (inc) => inc * 10)
                .map( (inc) => inc + 1)
console.log(newNum1);

let newNum2 = num.map( (inc) => inc + 10 )
                .map( (inc) => inc * 10)
                .filter( (inc) =>inc > 140)
console.log(newNum2);


// const newnum3 = num.map ( (inc ) => {
//   return  inc + 10  //by opening scope we have to return 
// })
// console.log(newnum3);