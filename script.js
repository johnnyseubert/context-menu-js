window.addEventListener('contextmenu', (event) => {
   event.preventDefault();
   let contextElement = document.querySelector('#context-menu');

   contextElement.style.top = event.offsetY + 'px';
   contextElement.style.left = event.offsetX + 'px';

   contextElement.classList.add('active');
});
window.addEventListener('click', () => {
   console.log('clickou');
   document.querySelector('#context-menu').classList.remove('active');
});

// Açoes menu contexto
document.querySelector('#reload').addEventListener('click', () => {
   window.location.reload();
});
document.querySelector('#fechar').addEventListener('click', () => {
   window.close();
});
