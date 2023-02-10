# robotron-2000O
- DOM (Document Object Model)
- E o JavaScript, juntos, possuem grande poder de modificar dinamicamente a estrutura de um documento HTML.
-  Sendo possível, por exemplo:

- Adicionar/modificar/remover tags, textos, imagens e qualquer elemento no HTML.
- Alterar estilos CSS da página.
- Criar novos eventos HTML.
-
   formas
### Métodos para selecionar elementos no HTML
document.getElementByID(id) - Selecionar um elemento pelo ID.
document.getElementsByTagName(name) - Selecionar um elemento pelo nome.
document.getElementsByClassName(name) - Selecionar um elemento pelo nome da classe.

### Propriedades e métodos para alterar elementos no HTML
element.innerHTML - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
element.innerText - Esta propriedade permite inserir textos no HTML.
element.attribute - Esta propriedade altera o valor de um elemento HTML
element.setAttribute(atributo, valor) - Este método altera o valor de um atributo de um elemento HTML.

### Adicionando e excluindo elementos
document.write() - Escreve no fluxo de saída do HTML.
document.appendChild() - Adiciona um elemento HTML.
document.removeChild() - Remove um elemento HTML.
document.replaceChild() - Substitui um elemento HTML.
document.createElement() - Cria um elemento HTML.



querySelector()/querySelectorAll();
addEventListener();
 diferenças entre função anônima e função;
  diferenças entre função anônima e função;

indexOf()
let listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
let pos = listaDeFrutas.indexOf('Bananas');
console.log(pos);

push() // adicionar um elemento ao final do array

let listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.push('Laranjas');
// ['Maçãs','Uvas','Bananas','Abacaxi','Morangos', 'Laranjas']

unshift()
adicionar um elemento no início do array
let listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.unshift('Laranjas');
// ['Laranjas','Maçãs','Uvas','Bananas','Abacaxi','Morangos]

shift()
remover um elemento do início de um array
let listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.shift();
// ['Uvas','Bananas','Abacaxi','Morangos']

pop()
remover um elemento do final de um array
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
listaDeFrutas.pop();
// ['Maçãs','Uvas','Bananas','Abacaxi']

splice()
remover um item a partir de seu índice
let listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
let pos = listaDeFrutas.indexOf('Abacaxi'); //pos = 3
listaDeFrutas.splice(pos, 1)
// ['Maçãs','Uvas','Bananas','Morangos']
No método splice() o primeiro parâmetro deve ser a posição a partir do qual queremos remover os elementos, e o segundo parâmetro é a quantidade que queremos remover.

Definimos o que é Array e como manipular seus objetos;
Como utilizar arrow functions;
Como utilizar o método splice() para remover itens.