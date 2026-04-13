//set time
// setTimeout(() => {
//     console.log('deekshith')
// },2000);


//set intervel

// setInterval(() => {
//     console.log('hi iam deekshi')
// }, 2000);




// let sp = document.getElementsByTagName('span')[0]


// let nm = ['deekshi','rakshi','panda','jeeshan','san']
// setInterval(() => {
//     sp.innerText=(nm[Math.floor(Math.random()*nm.length)])
// }, 1000);


//seconds

let sp =document.getElementsByTagName('span')[0]



setInterval(() => {
    let date = new Date
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hour<12){
    sp.innerText = (`${hour}hour / ${min}min/ ${sec}sec`)
    }
}, 1000);