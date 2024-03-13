// for in loop

const myObj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObj) {
    // console.log(myObj[key]);
   // console.log(`${key} is shortcut for ${myObj[key]} `);
}


const lang = ['java','html','cpp','js']
for(const print in lang){
    // console.log(print);
    // console.log(lang[print]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United Staes of America")
map.set("FR",'france')


for(const print of map){
    console.log(print);
}