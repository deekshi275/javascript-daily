// let age = Number(prompt("Enter your age: "));

// if(age<120 || age<=0){
//     alert('pls priovide proper input')
// }
// else if(age>=18){
//     console.log('eligibel to vote')
//     let gender = prompt('enter your gender')
//     if (gender==='m' || gender==='male'){
//         console.log('stand in line')

//     }else if (gender==='f' || gender==='female'){
//         console.log('stand in femail line')
//     }else{
//         console.log('stand in other line')
//     }
// }




//write progrm to check dict first or pass or file by collectin 5 subject marks

let java = Number(prompt("Enter your marks java: "));
let python = Number(prompt("Enter your marks python: "));
let js = Number(prompt("Enter your marks js: "));
let html = Number(prompt("Enter your marks html: "));
let css = Number(prompt("Enter your marks css: "));

let total = java + python + js + html + css; 
let percentage = (total / 500) * 100;

if(isNaN(total) || java<0 || python<0 || js<0 || html<0 || css<0 || java>100 || python>100 || js>100 || html>100 || css>100){
    alert('invalid marks')
}
else if(java<35 || python<35 || js<35 || html<35 || css<35){
    console.log('fail')
}if(java<0 || python<0 || js<0 || html<0 || css<0){
    alert('invalid marks')
}else if(java>100 || python>100 || js>100 || html>100 || css>100){
    alert('invalid marks')
}else if(java>=80 || python>=80 || js>=80 || html>=80 || css>=80){
    console.log('distinction')
}else if(java>=60 || python>=60 || js>=60 || html>=60 || css>=60){
    console.log('first class')
}
else if(java>=35 || python>=35 || js>=35 || html>=35 || css>=35){
    console.log('pass')
}




