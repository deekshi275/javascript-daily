//wtp to uppercase 
// let arr = ['deekshi','manju','jeeshan','abhi','abhishek','suman','xyz','manoj']

// for (let i=0; i<arr.length; i++){
//     let first = arr[i].slice(0,1).toUpperCase()
//     let last = arr[i].slice(-1).toUpperCase()
//     let middle = arr[i].slice(1,arr[i].length-2)
//      console.log(first+last+middle)

// }

//wtp tp print 10 names arr each name in capital and return inside new array

let smallarr = ['deekshi','manju','jeeshan','abhi','abhishek','suman','xyz','manoj']
let rev = []

for  (let i=0; i<smallarr.length; i++){
//     rev.push(smallarr[i].split('').reverse().join(''))
     rev.unshift(smallarr[i])
   
}
console.log(rev)


