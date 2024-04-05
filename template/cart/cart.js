showProducts()

function showProducts() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.forEach(productData => createProductElement(productData))
}


const productsContainer = document.querySelector(".container_products");
function createProductElement(productData) {
    //contenedor de los productos
    let quantityProduct = 0
    
    //contenedor del producto
    const container_card = document.querySelector(".container_card");
    
    const img = document.querySelector(".img");
    img.src = productData.image;
    
    const description = document.querySelector(".description");
    
    const title = document.querySelector(".title");
    title.textContent = productData.title;
    
    const price = document.querySelector(".price");
    price.textContent = "$" + productData.price;
    
    description.appendChild(title);
    description.appendChild(price);
    
    
    const amount = document.querySelector(".amount");
    const increase = document.querySelector(".increase");
    const number_amount = document.querySelector(".number_amount");
    number_amount.textContent = quantityProduct
    
    const decrease = document.querySelector(".decrease");
    
    amount.appendChild(increase);
    amount.appendChild(number_amount);
    amount.appendChild(decrease);
    
    
    // boton decrement
    
    decrease.addEventListener('click', () => {

        if (productData.number_amount > 0) {
            productData.number_amount--
        }
        
        quantityProduct = productData.number_amount >= 0 ? productData.number_amount : 0
        number_amount.textContent = quantityProduct
        
    })
    
    increase.addEventListener('click', () => {
        
        productData.number_amount++
        quantityProduct = productData.number_amount
        number_amount.textContent = quantityProduct
        
    })
    productsContainer.appendChild(container_card);
    
}