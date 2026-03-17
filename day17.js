
// for (let i = 100 ; i>0 ; i--){
//     console.log(i)
//

//wpt top print 15-25
// for(let i = 15; i<=25 ; i++){
//     console.log(i)
// }



// //wtp to print number which is multple of 5 range 100-0 
// for(let i = 20;i>=0 ;i-=5 ){
//     console.log(i)
// }


//wtp to print num mul of 10 range from 100-0
// for(let i = 10;i>=0 ;i-=10 ){
//     console.log(i*)
// }





//write  progrm to print num range from a to b

// let a = Number(prompt('enter a number'))
// let b = Number(prompt('enter b number'))

// if (a>b){
//     console.log('a should be less than b')
// }
// for (let i = a; i<=b ; i++){
//     console.log(i)
// }



//wtp to print num divsibal by 3 range from 100-0 and sum of thhis num
// for (let i = 100; i>=0 ; i--){
//     if (i%3==0){
//         console.log(i)
//     }
// }


// //wtp to print num which is divsibale by 10 range fronm a - b and sum of this num
// let a = Number(prompt('enter a number'))
// let b = Number(prompt('enter b number'))
// let sum = 0

// if (a>b){
//     console.log('a should be less than b')
// }else{
//     for (let i = a; i<=b ; i++){
//         if (i%10==0){
//             console.log(i)
//             sum += i
//         }
//     }
// }


// wtp to find the factorial of givin number using revers order number
// let num = Number(prompt('enter a number'))
// let fact = 1
// for (let i = num; i>0 ; i--){
//     fact *= i
// }
// console.log(fact)




// wtp to print the sum of factorial of given number

// let num = Number(prompt('enter a number'))
// let sum = 0

// for (let i = num; i>0 ; i--){
//     sum+= i
// }
// console.log(sum)



//wtp to print number which is divsable by 3 range from 100-0 and find the sum of even numbers

// let sum = 0
// for (let i = 100; i>=0 ; i--){
//     if (i%3==0){
//         console.log(i)
//         if (i%2==0){
//             sum += i
//         }
//     }
// }



// let a =Number(prompt('enter a  number'))

// let st = String(a)
// let sum = 0
// for (let i = 0; i<st.length ; i++){
//     sum += Number(st[i])
// }
// console.log(sum)


//wtp to revers the array 

// let arr = ['apple','mango','banana','grapes','pineapple','orange']
// let rev = []
// for (let i = 0; i<arr.length;i++){
//     rev.unshift(arr[i])
// }
// console.log(arr)
// console.log(rev)

//wtp to revers the eliment in the arr of ravi and shatry

// let arr = ['apple','mango','ravi','banana','grapes','shatry','pineapple','orange']

// let rev = []

// for (let i=arr.length-1;i>=0;i--){
//     if (arr[i]=='ravi' || arr[i]=='shatry'){
//         rev.push(arr[i].toUpperCase())

//     }else{
//         rev.push(arr[i])
//     }
// }
// console.log(arr)
// console.log(rev)




//revers ravi and shatry in revers arr with out revers

let arr = ['apple','mango','ravi','banana','grapes','shastry','pineapple','orange']
let rev= []

for (let i =arr.length-1;i>=0;i--){
        if (arr[i]=='ravi' || arr[i]=='shastry'){
            let name = arr[i]
            let revName = ''
            for (let j = name.length-1;j>=0;j--){
                revName += name[j]
            }
            rev.push(revName.toUpperCase())
        } else {
            rev.push(arr[i])

        }
    }
console.log(rev)




