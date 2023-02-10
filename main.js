const control = document.querySelectorAll('[data-controle]')

function calculate(operation, controle) {
  const peca = controle.querySelector('[data-contador]')
  if (operation === "-"){
    peca.value = parseInt(peca.value, 10) -1
  }else {
    peca.value = parseInt(peca.value, 10) +1
  }
}

control.forEach((element) => {
  element.addEventListener('click', (e) => {
    let operation = e.target.dataset.controle
    let controle = e.target.parentNode
    calculate(operation, controle)
  })
})








