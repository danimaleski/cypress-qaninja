function verificarIdade() {
  var nome = document.querySelector("input[name=nome]");
  var idade = document.querySelector("input[name=idade]");

  if (idade.value.length == 0) {
    alert("Idade é um campo obrigatório.");
    return;
  }

  var idadeNum = parseInt(idade.value);

  if (idadeNum >= 18) {
    alert("Ok, você pode tirar sua CNH");
  } else if (idadeNum > 4) {
    alert("Você é menor de idade, por enquanto sugiro andar de bike");
  } else {
    alert("Melhor você tomar leite");
  }
}
//var nome = prompt("Qual o seu nome?");
//var recebeIdade = prompt("Informe a sua idade");

//var idade = parseInt(recebeIdade);

//console.log(nome);
//console.log(typeof nome);

//console.log(idade);
//console.log(typeof idade);

//document.gertElementById("nome").innerText = nome;
