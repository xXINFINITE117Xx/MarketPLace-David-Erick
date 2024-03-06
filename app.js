document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.menu');
  
    menuHamburguer.addEventListener('click', function () {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  });
  
  function changePage(page) {
    alert(`Redirecting to ${page} page`);
    // Puedes redirigir a la página correspondiente o realizar cualquier otra acción aquí
    closeMenu();
  }
  
  function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
  }
  
  