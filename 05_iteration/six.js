// study about forEach loop and filter uses 

// const coding = ['java','python','javascript','ruby']

// let study = coding.forEach( (comp) => {
//     console.log(comp);
//     return comp;
// })
// console.log(study);


const mynum = [1,2,3,4,5,6,7,8,9]

// let whole = num.forEach( (print) => {
//     console.log(print);
// })
// console.log(whole);



// const whole = mynum.filter( (num) => num > 4)
// console.log(whole);



// we can do by function
// const whole = mynum.filter( (num) => {
//   return  num > 4   //by using arrow funcion in filter we must return if we r opening scope( {} )
// })
// console.log(whole);



// by using forEach 
// const newNum = []
// mynum.forEach ( ( num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const userbooks = books.filter( (bk) =>  bk.genre === 'History' )



   let userbooks = books.filter( (bk) => {

   return bk.publish > 2008 && bk.genre === 'Science'
  })
  console.log(userbooks);
