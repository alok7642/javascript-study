// for

// for (let i=0; i <= 10 ; i++){
// const element = i;

//      if(element == 5) {
//         console.log('5 is best number ');
//      }

//      console.log(element);
// }


// for (let i = 0; i < 10; i++) {
//    console.log(`outer loop value : ${i}`);
   
//    for (let j = 0 ; j <= 10 ; j++){
//     console.log(`           inner loop value : ${j}`);
//    }
// }

// break and continue

for(let i=0;i<=20;i++){
    if(i==5){
        console.log('5 is detetced ');
        break;
    }
    console.log(i);
}

for(let i=0;i<=20;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

