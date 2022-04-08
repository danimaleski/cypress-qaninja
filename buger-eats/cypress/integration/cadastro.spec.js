import signup from "../pages/SignupPage";

describe("cadastro", function () {
  //()=>

  //var signup = new SignupPage(); criando uma instância da classe na variável, tendo acesso a todas as funções da mesma
  //da para implementar essa mesma instância importando diretamente da page.

  // before(function () {
  //   cy.log(
  //     "Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes"
  //   );
  // });

  // beforeEach(function () {
  //   cy.log("Tudo aqui é executado sempre ANTES de CADA caso de teste");
  // });

  // after(function () {
  //   cy.log(
  //     "Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes"
  //   );
  // });

  // afterEach(function () {
  //   cy.log("Tudo aqui é executado sempre DEPOIS de CADA caso de teste");
  // });

  it("Usuário deve ser tornar um deliver", () => {
    var deliver = {
      name: "Daniella Maleski",
      cpf: "00015787675",
      email: "daniella@teste.com",
      whatsapp: "47999999999",
      address: {
        postalcode: "89203460",
        street: "Rua Porto União",
        number: "231",
        details: "ap 208",
        district: "Anita Garibaldi",
        city_state: "Joinville/SC",
      },
      delivery_method: "Van/Carro",
      cnh: "cnh-digital.jpg",
    };

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShouldBe(expectedMessage);
  });

  it("CPF incorreto", () => {
    var deliver = {
      name: "Daniella Maleski",
      cpf: "000157876AA",
      email: "daniella@teste.com",
      whatsapp: "47999999999",
      address: {
        postalcode: "89203460",
        street: "Rua Porto União",
        number: "231",
        details: "ap 208",
        district: "Anita Garibaldi",
        city_state: "Joinville/SC",
      },
      delivery_method: "Van/Carro",
      cnh: "cnh-digital.jpg",
    };

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });
});
