// let apple = document.getElementsByTagName('button')[0]
// let orange = document.getElementsByTagName('button')[1]
// let mongo = document.getElementsByTagName('button')[2]
// let graps = document.getElementsByTagName('button')[3]
// let banana = document.getElementsByTagName('button')[4]
// let submit = document.getElementsByTagName('button')[0]


// apple.addEventListener('click',()=>{
//     console.log('this is apple')
// })

// orange.addEventListener('click',()=>{
//     console.log('this is orange')
// })

// mongo.addEventListener('click',()=>{
//     console.log('this is mongo')
// })

// graps.addEventListener('click',()=>{
//     console.log('this is graps')
// })

// banana.addEventListener('click',()=>{
//     console.log('this is banana')
// })


// submit.addEventListener('click',()=>{
//     alert('click any button')
// })

// let firsr = document.getElementsByTagName('input')[0]
// let last = document.getElementsByTagName('input')[1]
// let email = document.getElementsByTagName('input')[2]
// let submit = document.getElementsByTagName('button')[0]


// submit.addEventListener('click',()=>{
//     if(firsr.value.length==0 || last.value.length==0 || email.value.length==0 || firsr.value ){
//         alert('plese provide  all input')
//     }else{
//         alert(`${firsr.value.concat(last.value)}\n ${email.value}`)
//     }
// })


let firsr = document.getElementsByTagName('input')[0]
let last = document.getElementsByTagName('input')[1]
let email = document.getElementsByTagName('input')[2]
let phone = document.getElementsByTagName('input')[3]
let submit  = document.getElementsByTagName('button')[0]
let card = document.getElementsByClassName('card')[0]



ph = phone.value
console.log(ph)

submit.addEventListener('click',()=>{
    card.innerHTML = `<h1>${ph}</h1>`
})