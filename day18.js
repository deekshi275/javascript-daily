// let arr = ['apple', 'banana','ravi', 'cherry', 'date','shastry', 'elderberry'];
// let rev = []


// for (let i = 0 ; i<arr.length; i++){
//     if(arr[i]== 'ravi' || arr[i] == 'shastry'){
//         let x = ''
//         for(let j = arr[i].length-1; j>=0; j--){
//             if(j%2 == 0){
//                 x = x + arr[i][j]
//             }
// }


// let arr = ['apple', 'mongo','ravi', 'banana', 'grapes','shastry', 'pineapple'];
// // let rev = []
// // let revstr = []
// // console.log(arr)


// // for (let i = 0 ; i<arr.length; i++){
// //     rev.unshift(arr[i])
// // }
// // console.log(rev) 

// // for (let i = 0; i<rev.length; i++){
// //     revstr.unshift(rev[i].split('').reverse().join(''))
// // }
// // console.log(revstr)


// let rev = []
// let revstr = []
// let reveliment = []
// for(let i= arr.length-1; i>=0; i--){
//     rev.push(arr[i])
// }
// console.log(rev)

// function reverseString(str){
//     let revstr = ''
//     for(let i = str.length-1; i>=0; i--){
//         revstr = revstr + str[i]
//     }
//     return revstr
// }

// for(let i = 0; i<rev.length; i++){
//     revstr.unshift(reverseString(rev[i]))
// }
// console.log(revstr)

// for(let i = revstr.length-1; i>=0; i--){
//     reveliment.push(revstr[i])
// }
// console.log(reveliment)


let arr = ['ravi', 'shastry','murnal','thakur','a','b','c','d',1,2,3,4,'@','#','$','%'];
let alphabet = []
let str = []
let num = []
let spcl = []

for(let i = 0; i<arr.length; i++){
    if(isNaN(arr[i]) && arr[i].length > 1){
        str.push(arr[i])
    }
    else if('!@#$%^&*()_+{}|:"<>?`~'.includes(arr[i])){
        spcl.push(arr[i])
    }
    else if(isNaN(arr[i])){
        alphabet.push(arr[i])
    }
    else if(!isNaN(arr[i])){
        num.push(arr[i])
    }
    else{
        alphabet.push(arr[i])
    }
}
console.log(str)
console.log(spcl)
console.log(num)
console.log(alphabet)

console.log(typeof(typeof(2)))