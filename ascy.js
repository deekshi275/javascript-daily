let card = document.getElementById("card")
console.log(card)

let task = async ()=>{
    let data = await fetch("https://dummyjson.com/carts")
    let res = await data.json()
    let cart = (res.carts)
    // console.log(cart)

    cart.map((cr)=>{
        console.log(cr)
        let {id, products, total, discountedTotal} = cr

        card.innerHTML += `
      
            <h2>Cart ID: ${id}</h2>
            <p>Total: ${total}</p>
            <p>Discount Total: ${discountedTotal}</p>
            <h3>Products:</h3>
            <div class="products">
                ${products.map((product)=>`
                    <div class="product">
                        <p>Product ID: ${product.id}</p>
                        <p id="pro">
                        <p>Title: ${product.title}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: ${product.quantity}</p>
                    
                `).join('')} 
                <p> 
            </div>
        `


    })
}

task()