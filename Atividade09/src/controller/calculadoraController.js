const calculadora = require("../../calculadora/calculadora");
let isAlert = false;
// Variável global não será redefinida várias vezes!
let dados = [];

function indexCalculadora(req, res) {
    res.render("index.html", {isAlert});
}

function calcular(req, res) {
    const {valor1, valor2, operador} = req.body;
    // console.log(operador);
    // console.log(valor1);
    // console.log(valor2);

    let resultado = 0;

    switch(operador) {
        case '+': 
            resultado = calculadora.somar(valor1, valor2);
            console.log(resultado);

            dados.push({valor1, valor2, operador, resultado});
            resultado = 0;
            break;
        case '-': 
            resultado = calculadora.subtrair(valor1, valor2);

            dados.push({valor1, valor2, operador, resultado});
            resultado = 0;
            break;
        case '*':
            resultado = calculadora.multiplicar(valor1, valor2);

            dados.push({valor1, valor2, operador, resultado});
            resultado = 0;
            break;
        case '/':
            resultado = calculadora.dividir(valor1, valor2);

            dados.push({valor1, valor2, operador, resultado});
            resultado = 0;
            break;
        case "Selecionar":
            isAlert = true; 
            // console.log(isAlert);
            res.render("index.html", {isAlert});
            isAlert = false; 
            break;
        default:
            console.log("Insira uma operação válida válida!");
            break;
    }

    console.log(dados);
    res.render("calcular.html", {dados});
}

module.exports = {
    indexCalculadora,
    calcular
};