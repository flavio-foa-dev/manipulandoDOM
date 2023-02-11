const btnOpen = document.querySelector('[data-btn-open');;
const display = document.querySelector('[data-display]');
const btnClosed = document.querySelector('[data-btn-closed]');

console.log(btnOpen, btnClosed, display)

btnOpen.addEventListener('click', () => {
display.classList.remove('lista-display')
})

btnClosed.addEventListener('click', () => {
  display.classList.add('lista-display')
  })