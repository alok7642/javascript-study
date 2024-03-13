// for each loop
// shortcut for dublicates : shift + alt + downarrow

const coding = ['java','python','ruby','dango','c']

// coding.forEach(function (val) {
//     console.log(val);
// })


// coding.forEach( (value) => {
//     console.log(value);
// })


// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item , index , arr ) => {
//     console.log(item , index , arr);
// })


const mycoding = [
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
})
