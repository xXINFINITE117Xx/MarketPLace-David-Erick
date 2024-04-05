window.addEventListener("DOMContentLoaded", getAPI);

const electronics = document.querySelector(".Electronics");
const jewerely = document.querySelector(".Jewerely");
const mens = document.querySelector(".Mens");
const women = document.querySelector(".Women");
let category = " ";
let shoppingCart = localStorage.getItem("shoppingCart")
  ? JSON.parse(localStorage.getItem("shoppingCart"))
  : [];
function reloadWebsite() {
  location.reload();
}

function getAPI() {
  fetch("https://fakestoreapi.com/products" + category)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => createProductCard(product));
    })
    .catch((error) => console.error("Error fetching API:", error));
}

function createProductCard(productData) {
  const container = document.createElement("button");
  container.classList.add("container_product");

  const img = document.createElement("img");
  img.src = productData.image;
  img.alt = productData.title;
  container.appendChild(img);

  const container_tittle = document.createElement("div");
  container_tittle.classList.add("container_tittle");

  const title = document.createElement("h2");
  title.classList.add("titles");
  title.textContent = productData.title;
  container_tittle.appendChild(title);

  container.appendChild(container_tittle);

  const cardsContainer = document.querySelector(".container-cards");
  cardsContainer.appendChild(container);

  container.addEventListener("click", showModal);
  const modal = document.querySelector(".modal");

  function showModal() {
    modal.style.display = "flex";
    const close = document.querySelector(".close");
    close.addEventListener("click", closeModal);
    const tittle = document.querySelector(".title");
    tittle.textContent = productData.title;
    const img = document.querySelector(".image");
    img.src = productData.image;
    img.alt = productData.title;
    const description = document.querySelector(".description");
    description.textContent = productData.description;
    const category = document.querySelector(".category");
    category.textContent = productData.category;
    const price = document.querySelector(".price");
    price.textContent = "$" + productData.price;

    /*Add cart*/
    const btnAddCart = document.querySelector(".add_to_cart");
    btnAddCart.addEventListener("click", () => {
      const existingProduct = shoppingCart.findIndex(
        (item) => item.id === productData.id
      );

      if (existingProduct !== -1) {
        Swal.fire("This product has already been added to the cart");
        return;
      }

      const productwithQuality = { ...productData, number_amount: 0 };

      shoppingCart = [...shoppingCart, productwithQuality];

      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    });
  }

  function closeModal() {
    modal.style.display = "none";
  }

  console.log(shoppingCart);
}
getAPI();

//hamburguer menu
document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const menu = document.querySelector(".menu");

  menuHamburguer.addEventListener("click", function () {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});

function changePage(page) {
  alert(`Redirecting to ${page} page`);
  closeMenu();
}

function closeMenu() {
  const menu = document.querySelector(".menu");
  menu.style.display = "none";
}

electronics.addEventListener("click", () => {
  const cardsContainer = document.querySelector(".container-cards");
  cardsContainer.innerHTML = "";
  category = "/category/electronics";
  getAPI();
});

jewerely.addEventListener("click", () => {
  const cardsContainer = document.querySelector(".container-cards");
  cardsContainer.innerHTML = "";
  category = "/category/jewelery";
  getAPI();
});

mens.addEventListener("click", () => {
  const cardsContainer = document.querySelector(".container-cards");
  cardsContainer.innerHTML = "";
  category = "/category/men's clothing";
  getAPI();
});

women.addEventListener("click", () => {
  const cardsContainer = document.querySelector(".container-cards");
  cardsContainer.innerHTML = "";
  category = "/category/women's clothing";
  getAPI();
});

// Función para fijar el footer y la imagen .separator2 al hacer clic en el botón
document
  .getElementById("stopMoving")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    document.querySelector("footer").classList.add("fixed-footer");
    document.querySelector(".separator2").classList.add("fixed-footer");
  });
