const { application } = require("express");
const express = require("express");
const estoque = require("./estoque/estoque");
const app = express();

const PORTA = 8080;

app.get("/", (req, res) => {
    res.send("API Estoque");
}); 

app.get("/api/adicionar/:id/:nome/:qtd", (req, res) => {
    let id = req.params.id;
    let nome = req.params.nome;
    let quantidade = req.params.qtd;

    let produto = estoque.criarProduto(id, nome, quantidade);
    estoque.adicionarProduto(produto);
    res.json(produto);
})

app.get("/api/listar", (req, res) => {
    res.json(estoque.listarProdutos());
})

app.get("/api/editar/:id", (req, res) => {
    let id = req.params.id;
    res.json(estoque.removerProduto(id));
});


app.get("/api/remove/:id/:qtdAtual", (req, res) => {
    let id = req.params.id;
    let quantidade = req.params.qtdAtual;
    res.json(estoque.editarProduto(id, quantidade));
})

app.listen(PORTA, () => {
    console.log("App rodando na porta:" + PORTA);
});