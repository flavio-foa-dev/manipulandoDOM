const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

const control = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica')

function calculate(operation, controle) {
  const peca = controle.querySelector('[data-contador]')
  if (operation === "-"){
    if(peca.value >0){
      return peca.value = parseInt(peca.value, 10) -1
    }
  }else {
    return peca.value = parseInt(peca.value, 10) +1
  }
}

control.forEach((element) => {
  element.addEventListener('click', (e) => {
    let operation = e.target.dataset.controle
    let controle = e.target.parentNode
    let peca = e.target.dataset.peca
    const re = calculate(operation, controle)
    if (!re){
      return null
    }else {
      geraStatus(peca)
    }
  })
})

function geraStatus(peca){
  estatisticas.forEach( (element)=> {
    element.textContent = parseInt(element.textContent)
    + pecas[peca][element.dataset.estatistica]
  })
}

function trocaImagem(cor){
  const img = document.querySelector(".robo")
  img.src=`img/robotron-${cor}.png`;
}




