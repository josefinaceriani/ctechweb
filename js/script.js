document.addEventListener('DOMContentLoaded', function () {
    const industrias = document.querySelector('.text-wrapper-87');
    const subMenu = document.querySelector('.drop-down');
  
    // Mostrar el submenú cuando el mouse entra en "Industrias"
    industrias.addEventListener('mouseenter', () => {
      subMenu.classList.add('visible');
    });
  
    // Mantener el submenú visible por 2 segundos después de salir de "Industrias"
    industrias.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!subMenu.matches(':hover')) {
          subMenu.classList.remove('visible');
        }
      }, 2000);
    });
  
    // Si el mouse entra en el submenú, mantenerlo visible
    subMenu.addEventListener('mouseenter', () => {
      subMenu.classList.add('visible');
    });
  
    // Si el mouse sale del submenú, esperar 2 segundos para ocultarlo
    subMenu.addEventListener('mouseleave', () => {
      setTimeout(() => {
        subMenu.classList.remove('visible');
      }, 2000);
    });
  });


  
