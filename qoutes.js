let cards=document.getElementsByClassName("cards")[0]
let nav = document.getElementsByClassName("nav")[0]
let lunch = document.getElementById("lunch")
let breakfast = document.getElementById("breakfast")
let dinner = document.getElementById("dinner")
let dessert = document.getElementById("desert")
let snack = document.getElementById("snack")

let url = "https://dummyjson.com/recipes"
let data = fetch(url).then((d)=>{
    return d.json()
}).then((fd)=>{
    return fd.recipes

}).then((recipes)=>{
    recipes.map((Element)=>{
        // console.log(Element)
        

        let {id,ingredients,instructions,mealType,prepTimeMinutes,image}= Element
        cards.innerHTML+=` <div class="card">
                <h2>${id}</h2>
                <img src=${image} alt="">
                <h2>ingredients: ${ingredients}</h2>
                <p> instructions: ${instructions}</p>
                <h2>mealType: ${mealType}</h2>
                <h2>time: ${prepTimeMinutes}</h2>

            </div>`

        
    })
})