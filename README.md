# robozom
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

- como utilizar a propriedade parentNode;
- Definimos o que é Array e como manipular seus objetos;
- Como utilizar arrow functions;
- Como utilizar o método splice() para remover itens.
- diferenças entre função anônima e função;
- indexOf() tras a posicao do elemento
- push() adicionar um elemento ao final do array
- unshift() adicionar um elemento no início do array
- shift() remover um elemento do início de um array
- pop() remover um elemento do final de um array
- splice() remover um item a partir de seu índice
  No método splice() o primeiro parâmetro deve ser a posição a partir do qual queremos remover os elementos, e o segundo parâmetro é a quantidade que queremos remover.
. tratativas de erro com numeros negativos

- Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).


- trabalhando com data-attributes;
- elementos no DOM com data-attributes.
Data-attributes não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.
Sua estrutura é dividida em duas partes:
1. A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
2. A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma string.

exemplo
HTMl
  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li data-cor="laranja" data-tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li data-cor="vermelho" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li data-cor="branco" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li data-cor="amarelo" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li data-cor="rosa" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>
  No JavaScript, podemos criar uma função que recebe esses atributos, permitindo manipulá-los:
JS
function mudaCores(elementos){
    let cores = elementos.getAttribute("data-cor");
    let tipoElemento = elementos.getAttribute("data-tipo");
  }
O prefixo data- não é obrigatório para definir um data-attribute personalizado, podemos alterar o código para a seguinte forma:
  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li cor="laranja" tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li cor="vermelho" tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li cor="branco" tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li cor="amarelo" tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li cor="rosa" tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>
 function mudaCores(elementos){
    var cores = elementos.getAttribute("cor");
    var tipoElemento = elementos.getAttribute("tipo");
  }

  creditos
  esse estudo foi promovido pela escola Alura.


