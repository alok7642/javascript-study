const myArr = [0,13,4,5];
console.log(myArr);
console.log(myArr.toReversed());

const myarr2 = new Array(1,2,3,4)
console.log(myarr2);

//array methods

 myArr.push(6); //add 6 at last
console.log(myArr);

myArr.pop() //remove from last
console.log(myArr);

myArr.unshift(8) //add 8 at first
console.log(myArr);

myArr.shift() //remove 1 element from first
console.log(myArr);

console.log(myArr.includes(13));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr)


//slice and splice
const mynum = [0,1,2,3,4,5]
console.log('original',mynum);

const mynum1 =mynum.slice(1,3)
console.log('slice' , mynum1) 
console.log(mynum);

const mynum2 = mynum.splice(1,3)
console.log('splice',mynum2);
console.log(mynum);

