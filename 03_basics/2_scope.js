let a =30**2

if(true){
    let a = 20
    const b = 30 
    var c = 40

    console.log('inner',a)
}



console.log('global', a)
// console.log(b)
console.log(c)

// console.log(d);


function one(){
    const username = 'Alok'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    // two()
}
one()


if (true) {
    const username = 'Alok_yadav'

    if(username === 'Alok_yadav'){
        const website = ' youtube'
        console.log(username + website)
    }
    // console.log(website)

}
// console.log(username);


// =========== interesting ==========

console.log('prev',addone(13))
function addone(num){
    return num + 1
}

console.log('addone',addone(5))

console.log('prev two ' , addtwo)
const addtwo = function(num){
    return num + 2
}
console.log('addtwo',addtwo(7));
