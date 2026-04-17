let breakfast = document.getElementById("breakfast")
let dinner = document.getElementById("dinner")
let card = document.getElementsByClassName('cards')[0]
let url = "https://dummyjson.com/recipes"
console.log(dinner)
console.log(breakfast)
// console.log(breakfast)
let data = fetch(url).then((res)=>{
    return(res.json())
}).then((d)=>{
    let recipe = (d.recipes)


    breakfast.addEventListener("click",()=>{
        recipe.filter((ele)=>{
            if (ele.mealType.includes('Breakfast')){

            let {id,name,image,ingredients,mealType} = ele
            card.innerHTML +=`
                <div class="card">
                <h1>${id}</h1>
                <span id="name">${name}</span>
                <img src=${image} alt="image looding...">
                <span id="instrc">${ingredients}</span>
                <span id="preper">${mealType}</span>
                  </div>
        `  
    }
    })
    })
    

})
















    // breakfast.addEventListener("click",()=>{

    //     recipe.filter((ele)=>{
    //         if(ele.mealType.includes('Breakfast')){
    //         let {id,name,image,ingredients,mealType} = ele
    //         card.innerHTML +=`
    //             <div class="card">
    //             <h1>${id}</h1>
    //             <span id="name">${name}</span>
    //             <img src=${image} alt="image looding...">
    //             <span id="instrc">${ingredients}</span>
    //             <span id="preper">${mealType}</span>
    //               </div>
    //     `  

    //         }
    //     })
    // })

            
  