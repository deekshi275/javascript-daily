// ------------------------------string metheds in js---------------------//
let a = 'deekshith'
let b = 'Bh'
let c = '10'
let d = '20'
let n = 10
let e = true

console.log(a) //deekshith
console.log(a,b)//deekshith Bh
console.log(a+c) //deekshith10
console.log(a-d) //NaN
console.log(e+a)//truedeekshith
console.log(a.concat("b"))//deekshithb
console.log(c+n)//1010
console.log(c-n)//0
console.log(c*n)//100
console.log(c%2)//0
console.log(c**2)//100
console.log(a.charAt(3))//k
console.log(a.endsWith("h"))//true
console.log(a.includes("hi"))//true
console.log(a.indexOf('d'))//0
console.log(a.length)//10
console.log(d.padEnd(9,"x"))//20xxxxxxx
console.log(d.padStart(6,"0"))//000020
console.log(a.repeat(4))//deekshithdeekshithdeekshithdeekshith
console.log(a.replace("dee","ra"))//    raekshith
console.log(a.slice(3,9))//kshith
console.log(a.split(''))//['d', 'e', 'e', 'k', 's', 'h', 'i', 't', 'h']
console.log(a.substring(0,8))//deekshith
console.log(b.toLowerCase())//bh
console.log(a.toUpperCase())//DEEKSHITH
console.log("   deekshi".trim())//deekshi
console.log(a.trimStart())//deekshith
console.log(a.trimEnd())//deekshith


