const control = document.querySelectorAll('.controle-ajuste')
console.log(displayBraco)


function calculate(operation, controle) {
  const peca = controle.querySelector('.controle-contador')
  if (operation === "-"){
    peca.value = parseInt(peca.value, 10) -1
  }else {
    peca.value = parseInt(peca.value, 10) +1
  }
}

control.forEach((element) => {
  element.addEventListener('click', (e) => {
    let operation = e.target.textContent
    let controle = e.target.parentNode
    calculate(operation, controle)
  })
})



let lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];
let pos = lista.indexOf("Vermelho")
console.log(lista)
lista.splice(pos, 1)
console.log(lista)




