//wtp to uppercase 
// let arr = ['deekshi','manju','jeeshan','abhi','abhishek','suman','xyz','manoj']

// const { lazy } = require("react")

// for (let i=0; i<arr.length; i++){
//     let first = arr[i].slice(0,1).toUpperCase()
//     let last = arr[i].slice(-1).toUpperCase()
//     let middle = arr[i].slice(1,arr[i].length-2)
//      console.log(first+last+middle)

// }

//wtp tp print 10 names arr each name in capital and return inside new array

// let smallarr = ['deekshi','manju','jeeshan','abhi','abhishek','suman','xyz','manoj']
// let rev = []

// for  (let i=0; i<smallarr.length; i++){
// //     rev.push(smallarr[i].split('').reverse().join(''))
//      rev.unshift(smallarr[i])
   
// }
// console.log(rev)


//wpt to print names in ravi and shastry return in capital and return inside new array

// let smallarr = ['deekshi','manju','jeeshan','abhi','ravi','abhishek','suman','shatry','xyz','manoj']
// let cap_arr = []
// for (let i=0; i<smallarr.length; i++){
//      if(smallarr[i] === 'ravi'){
//         cap_arr.push(smallarr[i].toUpperCase())
//      }else if(smallarr[i] === 'shatry'){
//         cap_arr.push(smallarr[i].toUpperCase())
//      }else{
//         cap_arr.push(smallarr[i])
//      }
// }
// console.log(cap_arr)


//wtp to calculet sum of even number range from 0 to 100

// let sum = 0
// for (let i=0; i<=100; i++){
//     if(i%2==0){
//         sum += i
//     }
// }
// console.log(sum)

//wtp to print odd number in range from 0 to 100
// let odd = 0
// for (i=0;i<100;i++){
//     if (i%2!=0){
//         odd+=i
//     }
// }
// console.log(odd)





// wtp to check given number is prime or not

// let prime = Number(prompt("Enter a number: "))
// let count = 0
// for (let i=1; i<=prime; i++){
//     if (prime%i==0){
//         count++
//     }
// }
// if (count==2){
//     console.log("Prime")
// }else{
//     console.log("Not Prime")
// }

// //wtp check given string is palindrome or not
// let str = prompt("Enter a string: ")
// let rev = str.split('').reverse().join('')
// if (str === rev){
//     console.log("Palindrome")
// }else{
//     console.log('not')
// }

// //wtp to check given number is palindrome or not

// let num = prompt("Enter a number: ")

// let rev = num.toString().split('').reverse().join('')

// if (num.toString() === rev){
//     console.log("Palindrome")
// }else{
//     console.log('not')
// }

//wtp to calculate factorial of a number

// let num = Number(prompt("Enter a number: "))
// let fact = 1
// for (let i=1; i<=num; i++){
//     fact *= i
// }
// console.log(fact)



// let a = 132
// let prim = true
// for (let i =2;i<=Math.floor(Math.sqrt(a));i++){
//     if (a%i==0){
//         prim = false
//         console.log(i)
//     }
// }if (prim){
//     console.log('prime number')

// }else{
//     console.log('not a prime number')
// }


