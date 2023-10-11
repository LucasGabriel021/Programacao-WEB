const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const PORT = 8080;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express. urlencoded());

app.get("/formulario", (req, res) => {
     res.render("formulario.html");
});

app.post("/precessar_dados", (req, res) => {
     let usuario = {
          nome: req.body.nomeUser,
          cpf: req.body.cpfUser,
          dataNascimento: req.body.dataUser,
          endereco: req.body.enderecoUser,
          uf: req.body.ufUser,
          cep: req.body.cepUser,
          email: req.body.emailUser,
          telefone: req.body.telefoneUser,
     }
     let mensagensErro = [];

     const camposObrigatorios = {
          nome: "Campo de nome é obrigatório",
          cpf: "Campo de CPF é obrigatório",
          dataNascimento: "Campo de data de nascimento é obrigatório",
          endereco: "Campo de endereço é obrigatório",
          uf: "Campp de UF é obrigatório",
          cep: "Campo de CEP é orbigatório",
          email: "Campo de e-mail é obrigatório",
          telefone: "Campo de telefone é orbigatório",
     }

     for(const item in camposObrigatorios) {
          if(!usuario[item]) {
               mensagensErro.push(camposObrigatorios[item]);
          }
     }

     if(mensagensErro.length > 0) {
          res.render("formulario.html", {mensagensErro});
          console.log(mensagensErro);
     } else {
          res.render("dados.html");
     }
     
})

app.listen(PORT, function() {
     console.log("App rodando na porta: " + PORT);
});

