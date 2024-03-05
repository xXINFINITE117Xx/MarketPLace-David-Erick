function toggleMenu() {
    const contentDiv = document.getElementById('content');
    const selectedOption = prompt('Elige una opción: categories, home o contact');

    switch (selectedOption.toLowerCase()) {
      case 'categories':
        contentDiv.innerHTML = '<h1>Contenido de Categories</h1>';
        break;
      case 'home':
        contentDiv.innerHTML = '<h1>Contenido de Home</h1>';
        break;
      case 'contact':
        contentDiv.innerHTML = '<h1>Contenido de Contact</h1>';
        break;
      default:
        alert('Opción no válida');
        break;
    }
  }