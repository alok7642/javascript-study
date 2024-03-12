// for of loop

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting ='hello world'
// for (const greet of greeting) {
//     console.log(`The greetin is ${greet}`);
// }


        //    ----------
// map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United Staes of America")
map.set("FR",'france')

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for(const [key , value ] of map) {
    console.log(key , ':-' , value);
}
