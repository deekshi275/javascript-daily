//"https://fakestoreapiserver.reactbd.org/api/products"
let cards = document.getElementsByClassName('cards')[0]

let data = fetch('https://fakestoreapiserver.reactbd.org/api/products').then((d)=>{
    return (d.json())
}).then((fd)=>{
    let data = fd.data
    data.map((ele)=>{
        cards.innerHTML +=  `
        <div class="card">
                <span>${ele._id}</span>
                <h1>${ele.title}</h1>
                <img src=${ele.image} alt="image is looding">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error laboriosam atque corrupti recusandae facere velit voluptas quisquam totam, beatae minus similique. Quaerat omnis ut nostrum beatae labore maxime dicta. Eum?</p>
                <span id="cat">${ele.category}</span>
                <span id="price">${ele.price}</span>
            </div>`

    })
})

// brand
// : 
// "FashionTrend"
// category
// : 
// "women"
// description
// : 
// "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam."
// discountedPrice
// : 
// 135
// image
// : 
// "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
// isNew
// : 
// true
// oldPrice
// : 
// "200"
// price
// : 
// 150
// rating
// : 
// 4