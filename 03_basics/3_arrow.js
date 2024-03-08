const user = { //object
    username:'Alok',
    price:888,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = 'Aman'
// user.price = 12345
// user.welcomeMessage('annu')

// console.log(this);


function chai1 () { //function
    let username = "Alok"
    console.log(this.username);
    // console.log(this);
}
chai1()


const chai2 = function () {
    let username = 'Anish'
    console.log(this.username);
    // console.log(this);
}
chai2()

const chai3 = () => {
    let username = 'Anish'
    console.log(this.username);
    // console.log(this); //we can't use this in arrow
}
chai3()

// we can define function by these three ways (chai1,chai2,chai3)

            // ----
const add = (num1 , num2) => {
    return num1 + num2
}
console.log(add(22,22));

// we can also do same with curly braces & if we use curly braces then return is necessary else not
const add1 = (num1 , num2) => (num1 + num2)
console.log(add1(33,33));

const add2 = (num1,num2) => ({username:"LNCT"})
console.log(add2(3,4));

