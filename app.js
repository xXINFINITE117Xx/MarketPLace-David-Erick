document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const overlay = document.getElementById('overlay');
  
    menuHamburguer.addEventListener('click', function () {
      if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
      } else {
        overlay.style.display = 'block';
      }
    });
  });
  
  function changePage(page) {
    alert(`Redirecting to ${page} page`);
    // Puedes redirigir a la página correspondiente o realizar cualquier otra acción aquí
    closeMenu();
  }
  
  function closeMenu() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  
  