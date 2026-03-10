// let units = Number(prompt("Enter electric units consumed:"));

// if (isNaN(units) || units < 0) {
//     console.log("enter a valid number.");
// } else {
//     let totalCost = 0;

//     if (units <= 100) {
//         totalCost = units * 4;
//     } else if (units <= 200) {
//         totalCost = (100 * 4) + ((units - 100) * 6);
//     } else if (units <= 400) {
//         totalCost = (100 * 4) + (100 * 6) + ((units - 200) * 8);
//     } else {
//         totalCost = (100 * 4) + (100 * 6) + (200 * 8) + ((units - 400) * 10);
//     }

//     console.log(`Total Units: ${units}`);
//     console.log(`Total Cost: Rs ${totalCost}`);
// }



// let unit =prompt('enter a units')
// amount = 0

// if (unit>400){
//     amount+=(unit-400)*10
//     unit = 400
// }
// if (unit>200){
//     amount+=(unit-200)*8
//     unit = 200
// }
// if (unit>100){
//     amount+=(unit-100)*6
//     unit=100
// }
// if (unit>0){
//     amount+=(unit-0)*4
//     unit=0
// }
// else{
//     console.log('not valid')
// }
// console.log(amount)



let amount = prompt('enter a amount')

if(amount<0 || isNaN(amount)){
    alert('provid proper input')
}
else{
if (amount>=500){
    let notes = Math.floor(amount/500)
    console.log(notes,'=== 500')
    amount-=notes*500
}
if (amount>=200){
    let notes = Math.floor(amount/200)
    console.log(notes,'=== 200')
    amount-=notes*200
}
if (amount>=100){
    let notes = Math.floor(amount/100)
    console.log(notes,'=== 100')
    amount-=notes*100
}
if (amount>=50){
    let notes = Math.floor(amount/50)
    console.log(notes,'=== 50')
    amount-=notes*50
}
if (amount>=20){
    let notes = Math.floor(amount/20)
    console.log(notes,'=== 20')
    amount-=notes*20
}
if (amount>=10){
    let notes = Math.floor(amount/10)
    console.log(notes,'=== 10')
    amount-=notes*10
}
if (amount>=5){
    let notes = Math.floor(amount/5)
    console.log(notes,'=== 5')
    amount-=notes*5
}
if (amount>=2){
    let notes = Math.floor(amount/2)
    console.log(notes,'=== 2')
    amount-=notes*2
}
if (amount>=1){
    let notes = Math.floor(amount/1)
    console.log(notes,'=== 1')
    amount-=notes*1
}
}