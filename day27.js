let btn = document.getElementsByTagName('button')[0]
let pas = document.getElementsByTagName('h1')[0]
let inp = document.getElementById('pas')




// btn.addEventListener('click',()=>{
    // let small = 'abcdefghijklmnopqrstuvwxyz'
    // let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // let s1 = small[Math.floor(Math.random()*small.length)]
//     let  s2= small[Math.floor(Math.random()*small.length)]
//     let  s3= small[Math.floor(Math.random()*small.length)]
//     let  s4= small[Math.floor(Math.random()*small.length)]
    // let n1 = Math.floor(Math.random()*10)
//     let n2 = Math.floor(Math.random()*10)
//     let n3 = Math.floor(Math.random()*10)
//     let n4 = Math.floor(Math.random()*10)
    // let c1 = cap[Math.floor(Math.random()*cap.length)]
//     let c2 = cap[Math.floor(Math.random()*cap.length)]
//     let c3 = cap[Math.floor(Math.random()*cap.length)]
//     let c4 = cap[Math.floor(Math.random()*cap.length)]
    
//     sp.innerText = `${s1} ${n1} ${c1} ${s2} ${n2} ${c2} ${s3} ${c3} ${n3} ${s4} ${c4} ${n4} ${s1} ${n1}`})


let small = 'abcdefghijklmnopqrstuvwxyz'
let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let num = '1234567890'
let spcel = '!!@#$%^&*()_+'
let all = small + cap + num + spcel
const genrate = ()=>{
    let pass = ''
    pass += small[Math.floor(Math.random()*small.length)]
    pass += cap[Math.floor(Math.random()*cap.length)]
    pass += num[Math.floor(Math.random()*num.length)]
    pass += spcel[Math.floor(Math.random()*spcel.length)]
    for(let i=pass.length;i<14;i++){
        pass += all[Math.floor(Math.random()*all.length)]
    }
    if(pass>=14){
        alert('give len of password')
    }else{
        
        inp.value = pass
    }
}
let copy = () => {
        let con = confirm('Do you want to copy the password?')
        if(con === true){
            inp.select()
            document.execCommand('copy')
            alert('Password copied to clipboard')  
        }
}
    
