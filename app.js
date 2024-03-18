window.addEventListener("DOMContentLoaded", getAPI);

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

function getAPI() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then(data => {
      data.forEach(product => createProductCard(product));
    })
    .catch(error => console.error('Error fetching API:', error));
}

getAPI();

function createProductCard(productData) {
  const container = document.createElement('div');
  container.classList.add('container_product');

  const img = document.createElement('img');
  img.src = productData.image;
  img.alt = productData.title;
  container.appendChild(img);

  const container_tittle = document.createElement('div');
  container_tittle.classList.add('container_tittle');

  const title = document.createElement('h2');
  title.classList.add('titles');
  title.textContent = productData.title;
  container_tittle.appendChild(title);

  container.appendChild(container_tittle);

  const cardsContainer = document.querySelector('.container-cards');
  cardsContainer.appendChild(container);
}


getAPI();
