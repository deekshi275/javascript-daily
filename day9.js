// function add(a = 10,b=30){
//     console.log(a+b)

// }
// add()
// add(100,300)
// add()

// function one(){
//     let a  = 'one'

//     function two(){
//         let b = 'b'

//         function three(){
//             let c = 'c'
//             console.log(a)
//             console.log(b)
//             console.log(c)

//         }three()
//     }two()
// }
// one()


//------------------------calling globaly------------------

// function nam(){
//     let x = 'deekshi'
//     return(x)

// }

// let y = nam()
// console.log(nam())
// console.log(y)

// function hello(){
//     console.log(`hello iam ${y}`)
// }
// hello()

// function full(){
//     let x = 'deekshi'
//     let y = 'bh'
//     return(x+y)             //over write the value return only aces the one value

// }
// let a = full()
// console.log(a)

//----------------------------------------------------------------------------

// function first(){
//     let x = 10
//     return x
// }
// let a = first()
// console.log('a = ',a)

// function second(){
//     let y = 20
//     return y
// }
// let b = second()
// console.log('b = ',b)

// function add(){
//     let c = a + b
//     return c
// }
// let sum = add()
// console.log('sum of a+b = ',sum)

// function sub(){
//     return a-b
// }
// let su = sub()
// console.log('sub of a-b =',su)

// function mul(){
//     return a*b
// }
// let mu = mul()
// console.log("multiplication of a*b =",mu)

// function div(){
//     return a/b
// }
// let di = div()
// console.log("div of a/b =",di)

// function exp(){
//     return a**2
// }
// let ex = exp()
// console.log("exponetial of a**2 =",ex)

// function gret(){
//     return a>b
// }
// let gt = gret()
// console.log('a is greater than b',gt)

// function less(){
//     return a<b
// }
// let le = less()
// console.log('a is less than b',le)

// function eql(){
//     return a==b

// }
// let eq = eql()
// console.log("a is equl to b",eq)

// function notequl(){
//     return a!=b
// }
// let note = notequl()
// console.log('a not equl to b',note)

// function ass(){
//     return a+=b
// }
// let as = ass()
// console.log('a+=b = ',as)

// function subas(){
//     return a-=10
// }
// let sua = subas()
// console.log('a-=10 = ',sua)

let a =() => {
    let x = 10
    return x+10
}
l = a()
console.log(l)

