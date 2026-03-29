// let arr =[1,2,3,4,5,6,7,8,9,10] 
// let even = arr.filter(d =>d%2===1)
// console.log(even)

const { use } = require("react")

// let odd = even.map(odd => odd+1)
// console.log(odd)

// let sum =  arr.reduce((s,c)=>{

//     console.log(s,c)
// })

// let even = arr.filter(d =>d%2===0)
// console.log(even)
// let sq = even.map(e=>e*2)
// console.log(sq)
// let sum = sq.reduce((s,c)=>{
//     return (s+c)
// })
// console.log(sum)

// let gt = arr.filter(num => num>5)
// let num = gt.map(num=>num*2)
// let sum = num.reduce((s,c)=>{
//     return s+c
// })
// console.log(gt)
// console.log(num )
// console.log(sum)

// const nums = [1,2,3,4,5,6]

// let a = nums.filter(num=>num>3)
// console.log(a)

// const nums = [1,2,3,4]
// let cube = nums.map(n=>n**3)
// console.log(cube)

// const nums = [1,2,3,4]
// let mul = nums.reduce((sttart,c)=>{
//     return sttart*c
// })
// console.log(mul)


// const nums = [2,5,8,11,14]

// let gt  = nums.filter(n=>n>5)
// let double=gt.map(num=>num+num)
// let sum = double.reduce((st,c)=>{
//     return st+c
// })
// console.log(sum)


// const num = [1,2,3,4,5,6]
// let odd = num.filter(n =>n%2==1)
// console.log(odd)
// let sq = odd.map(n =>n**2)
// console.log(sq)
// let gt = sq.filter(a=>a>10)
// console.log(gt)


// const num = [10,15,20,25,30]
// let result = Math.max(...num.filter(n=>n%5==0 && n%2==0).map(n=>n+10))
// console.log(result)


// const num = [3,7,2,9,4]

// let result = (num.filter(n =>n<8).map(n=>n*3).filter(n=>n%2==0).reduce((p,c)=>{return p+c}))
// console.log(result)


// const num = [5,12,7,20,3,18]

// let res = num.filter(n=>n>6).map(n=>n-2).filter(n=>n%4==0).reduce((p,c)=>{return p+c})
// console.log(res)


// const user =   [{name:'A',age:22},
//                 {name:'B',age:17},
//                 {name:'C',age:25},
//                 {name:'D',age:15},
    
// ]
// let x = user.map((d)=>{
//     if (d.age>=18){
//         return d.name
//     }
// }).filter(n=>n!=undefined)
// console.log(x)




// const cart = [
//     {item:'shirt',price:500},
//     {item:'shi',price:1500},
//     {item:'sssrt',price:200}
// ]

// let res = cart.map((d)=>{
//     if (d.price>300){
//         return d.price
//     }
// }).filter(n=>n!=undefined).reduce((p,c)=>{return p+c})
// console.log(res)




// const words = ['apple','banana','kiwi','grape']
// count = 0

// let l = words.map((d,i)=>{
//     if(words[i].length>4){
//         count+=1
//         return words[i].toUpperCase()
//     }
// }).filter(n=>n!=undefined)
// console.log(l)
// console.log(count)

// const num= [1,2,3,4,5,6]
// let ob = {}
// ob['even'] = num.filter(n=>n%2==0).reduce((p,c)=>{return p+c})
// ob['odd'] = num.filter(n=>n%2==1).reduce((p,c)=>{return p+c})
// console.log(ob)


console.log('hell')