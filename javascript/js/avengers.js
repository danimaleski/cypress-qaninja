var avengers = [
  "Tony Stark",
  "Clint Barton",
  "Natasha Romanoff",
  "Steve Rogers",
  "Brune Banner",
  "Scot Lang",
];

function listaVingadores() {
  var ul = document.getElementById("avengersID");
  ul.innerHTML = " ";

  avengers.forEach(function (a) {
    var li = document.createElement("li"); //cria o elemento li
    var text = document.createTextNode(a); //obtém o texto de cada vingador da lista, criando o texto que vai ser adicionado na li
    li.appendChild(text); //vinculamos a li com o texto, pegando o texto e adicionando dentro do elemento
    ul.appendChild(li); //adiciona cada li dentro da lista, por estar dentro do foreach, vai percorrer a lista que contem n valores
  });
}
