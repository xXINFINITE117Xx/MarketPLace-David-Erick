showProducts()

function showProducts() {
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
    shoppingCart.forEach(product => createProductElement(product))
}


function createProductElement(product) {
    const productsContainer = document.querySelector(".container_products");
    //contenedor de los productos
    let quantityProduct = 0
    
    //contenedor del producto
    const container_card = document.createElement("div");
    container_card.classList.add("container_card");
    
    const img = document.createElement("img");
    img.src = product.image;
    
    const description = document.createElement("div");
    description.classList.add("description");
    

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = product.title;


    const price = document.createElement("h3");
    price.classList.add("price");
    price.textContent = "$" + product.price;
    
    description.appendChild(title);
    description.appendChild(price);
    
    
    const amount = document.createElement("div");
    amount.classList.add("amount");

    const increase = document.createElement("button");
    increase.classList.add("increase");
    increase.textContent = "+" ;


    const number_amount = document.createElement("h4");
    number_amount.classList.add("number_amount");
    number_amount.textContent = quantityProduct
    
    const decrease = document.createElement("button");
    decrease.classList.add("decrease");
    decrease.textContent = "-" ;

    amount.appendChild(increase);
    amount.appendChild(number_amount);
    amount.appendChild(decrease);


    container_card.appendChild(img);
    container_card.appendChild(description);
    container_card.appendChild(amount);

    productsContainer.appendChild(container_card);
    
    // boton decrement
    
    decrease.addEventListener('click', () => {

        if (product.number_amount > 0) {
            product.number_amount--
        }
        
        quantityProduct = product.number_amount >= 0 ? product.number_amount : 0
        number_amount.textContent = quantityProduct
        
    })
    
    increase.addEventListener('click', () => {
        
        product.number_amount++
        quantityProduct = product.number_amount
        number_amount.textContent = quantityProduct
    })
        
    
}
