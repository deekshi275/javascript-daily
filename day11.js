// let num = Number(prompt("Enter a number: "));

// if(num%3==0){
//     console.log("The number is divisible by 3");
// }
// else{
//     console.log("The number is not divisible by 3");
// }




// let num = Number(prompt("Enter a number: "));

// if(num%5==0){
//     console.log("The number is divisible by 5");
// }
// else{
//     console.log("The number is not divisible by 5");
// }




// let num = Number(prompt("Enter a number: "));

// if(num%3==0 && num%5==0){
//     console.log("The number is divisible by both 3 and 5");
// }
// else{
//     console.log("The number is not divisible by both 3 and 5");
// }


// let date = new Date;
// console.log('to day dayt is',date.getDate())



// else if (date.getMonth() === 2) {
//     console.log('month is March');
// }


// let date = new Date;
// if (date.getDay() === 0) {
//     console.log('Today is Sunday');
// } else if (date.getDay() === 1) {
//     console.log('Today is Monday');
// }else if (date.getDay() === 2) {
//     console.log('Today is Tuesday');
// }else if (date.getDay() === 7) {
//     console.log('Today is saturday');
// }


// let date = new Date;
// if (date.getHours() < 12) {
//     console.log('pm');
// } else if (date.getHours() < 18) {
//     console.log('am');
// } else {
//     console.log('pm');
// }


// let java = Number(prompt("Enter your marks: "));
// let python = Number(prompt("Enter your marks: "));
// let c = Number(prompt("Enter your marks: "));
// let javascript = Number(prompt("Enter your marks: "));
// let html = Number(prompt("Enter your marks: "));

// let totalMarks = java + python + c + javascript + html;
// let percentage = (totalMarks / 500) * 100;
// if(java<0 || python<0 || c<0 || javascript<0 || html<0){
//     console.log("Invalid marks");
// }else if (java>100 || python>100 || c>100 || javascript>100 || html>100) {
//     console.log("Invalid marks");
// }else if (percentage >= 35) {
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }


let month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
let date = new Date;
if (date.getMonth() === 0) {
    console.log(month[0])
}
else if (date.getMonth() === 1) {
    console.log(month[1])
}
else if (date.getMonth() === 2) {
    console.log(month[2])
}
else if (date.getMonth() === 3) {
    console.log(month[3])
}
else if (date.getMonth() === 4) {
    console.log(month[4])
}
else if (date.getMonth() === 5) {
    console.log(month[5])
}