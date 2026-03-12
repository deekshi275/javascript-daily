//-------------------loops---------------------------

// for(i=0;i<=10;i++){
//     console.log(i)
// }

// wp range from i to 10
//wp to print range from 1-100
//wp to print range from 50 -75

// let i = 0
// j = 75

// for (let i=0;i<=10;i++){
//     console.log(i)
// }
// for (let i=1;i<=100;i++){
//     console.log(i)
// }
// for (let i=50;i<=75;i++){
//     console.log(i)
// }


//wptp number whichis multipal of two 1-100

// for (let i=0;i<=100;i++){
//     console.log(i*2)
// }

//WPT PRINT THE NUMBER WHICH is mul of 5 range from 0-100
//wpt print  number mul of 10 range from 0-1000

// for (let i=0;i<=100;i+=2){
//     console.log(i)
// }
// for (let i=0;i<=100;i+=5){
//     console.log(i)
// }

//wpt range a and b
// let a = (prompt('enter a number a'))
// let b = (prompt('enter a number b'))
// if(isNaN(a) || isNaN(b)){
//     alert('provide proper input')
// }else if(a>b){
//     console.log('a must less than b')
// }
    
// for(a;a<=b;a++){
//     console.log(a)
// }

//multiplication table as per user choice

// let ch = Number(prompt('enter a num'))

    
    // for (let i=0;i<=10;i++){
    //     console.log(`${ch} * ${i} = ${ch*i}`)
    // }
// }

//wtp to print mul table of user choice range 
let ch = Number(prompt('enete a table number'))
let a = Number(prompt('start number'))
let b = Number(prompt('end range'))

if(ch<0 || isNaN(a && b && ch) || a<=0 || b<=0){
    alert('enter a proper number ')
}
else if (a>b){
    alert('a must be less than b')
}else{
for (a;a<=b;a++){
    console.log(`${ch} * ${a} = ${ch*a}`)
}
}