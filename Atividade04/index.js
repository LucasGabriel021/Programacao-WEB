const calculadora = require("./util/calculadora"); // Importando o módulo que contém as equações
const express = require("express"); // Framework WEB

const app = express();

app.get("/soma/:a/:b", function(req, res) { // GET, POST, ETC
     let valorA = parseInt(req.params.a);
     let valorB = parseInt(req.params.b);

     res.send(`${valorA} + ${valorB} = ${calculadora.soma(valorA, valorB)}`);
});


app.get("/subtrair/:a/:b", function(req, res) {
     let valorA = parseInt(req.params.a);
     let valorB = parseInt(req.params.b);

     res.send(`${valorA} - ${valorB} = ${calculadora.subtrair(valorA, valorB)}`);
});


app.get("/dividir/:a/:b", function(req, res) {
     let valorA = parseInt(req.params.a);
     let valorB = parseInt(req.params.b);

     res.send(`${valorA} / ${valorB} = ${calculadora.dividir(valorA, valorB)}`);
});


app.get("/multiplicar/:a/:b", function(req, res) {
     let valorA = parseInt(req.params.a);
     let valorB = parseInt(req.params.b);

     res.send(`${valorA} * ${valorB} = ${calculadora.multiplicar(valorA, valorB)}`);
});

const PORTA = 8080;
app.listen(PORTA, function() {
     console.log("App rodando na porta: " + PORTA);
});



/**
 * Redução do código abaixo:
 */

// app.get("/:operacao/:a/:b", (req, res) => {
//      let operador = req.params.operacao;
//      console.log(operador);
//      let valorA = parseInt(req.params.a);
//      let valorB = parseInt(req.params.b);

//      switch(operador) {
//           case 'somar': 
//                res.send(`${valorA} + ${valorB} = ${calculadora.soma(valorA, valorB)}`);
//                break;
//           case 'subtracao': 
//                res.send(`${valorA} - ${valorB} = ${calculadora.subtrair(valorA, valorB)}`);
//                break;
//           case 'dividir': 
//                res.send(`${valorA} / ${valorB} = ${calculadora.dividir(valorA, valorB)}`);
//                break;
//           case 'multiplicar':
//                res.send(`${valorA} * ${valorB} = ${calculadora.multiplicar(valorA, valorB)}`);
//                break;
//      }
// });

// const PORTA = 8080;
// app.listen(PORTA, function() {
//      console.log("App rodando na porta: " + PORTA);
// });