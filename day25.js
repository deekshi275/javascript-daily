let inp = document.getElementsByTagName('input')[0]
//numbers
let one=document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let four = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')
let eight = document.getElementById('8')
let nine = document.getElementById('9')
let zero = document.getElementById('0')
let zero0 = document.getElementById('00')
//operators 
let plus = document.getElementById('+')
let minus = document.getElementById('-')
let multi = document.getElementById('*')
let div = document.getElementById('/')
let equal = document.getElementById('=')
let doubleEqual = document.getElementById('==')
let mod = document.getElementById('%')
let clear = document.getElementById('ac')
let del = document.getElementById('del')

del.addEventListener('click',()=>{
    inp.value = inp.value.slice(0,-1)
})
doubleEqual.addEventListener('click',()=>{
    inp.value += '==' 
})

clear.addEventListener('click',()=>{
    inp.value = ''
})
one.addEventListener('click',()=>{
    inp.value += 1
})
two.addEventListener('click',()=>{
    inp.value += 2
})
three.addEventListener('click',()=>{
    inp.value += 3
})
four.addEventListener('click',()=>{
    inp.value += 4
})  
five.addEventListener('click',()=>{
    inp.value += 5
})
six.addEventListener('click',()=>{
    inp.value += 6
})
seven.addEventListener('click',()=>{
    inp.value += 7
})
eight.addEventListener('click',()=>{
    inp.value += 8
})  
nine.addEventListener('click',()=>{
    inp.value += 9
})  
zero.addEventListener('click',()=>{
    inp.value += 0
})  
zero0.addEventListener('click',()=>{
    inp.value += '00'
})

minus.addEventListener('click',()=>{
    inp.value += '-'
})

multi.onmouseenter =()=>{
    multi.style.backgroundColor = 'black'
    multi.style.color = 'white'
    inp.value += '*'
    console.log('hello')
}

multi.addEventListener('click',()=>{
    inp.value += '*'
})
div.addEventListener('click',()=>{
    inp.value += '/'
})  
plus.addEventListener('click',()=>{
    inp.value += '+'
})
mod.addEventListener('click',()=>{
    inp.value += '%'
})
equal.onmouseover=()=>{
    inp.value = eval(inp.value)
    multi.style.backgroundColor = 'black'
    multi.style.color = 'white'
}


