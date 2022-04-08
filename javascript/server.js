const express = require("express"); //importaçao do express
const app = express(); //ativando o método express, instanciando o objeto

//método get que vai ser invocado atraves da / (pagina principal)
app.get("/", function (req, res) {
  //método app.get para rodar o código(abaixo) no backend e esse código vai refletir na chamada da api
  res.json({ message: "Hello Cypress Discovery" }); //resultado da chamada
});

app.get("/avengers", function (req, res) {
  //req = request
  var avengers = [
    "Tony Stark",
    "Clint Barton",
    "Natasha Romanoff",
    "Steve Rogers",
    "Brune Banner",
    "Scot Lang",
  ];
  return res.json({ data: avengers });
});

app.get("/cnh", function (req, res) {
  //res = response
  const idade = req.query.idade; //const é imutável, var é variável

  if (!idade) {
    return res.json({ message: "Idade é um campo obrigatório." });
  }

  var idadeNum = parseInt(idade);

  if (idadeNum >= 18) {
    return res.json({ message: "Ok, você pode tirar sua CNH" });
  } else if (idadeNum > 4) {
    return res.json({
      message: "Você é menor de idade, por enquanto sugiro andar de bike",
    });
  } else {
    return res.json({ message: "Melhor você tomar leite" });
  }
});

app.listen(3000); //aplicaçao vai ficar na porta que está entre ()
