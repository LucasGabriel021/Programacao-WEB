let produtos = [];

function criarProduto(id, nome, qtd) {
    let produto = {
        id: id,
        nome: nome,
        quantidade: qtd
    }
    return produto;
}

function adicionarProduto(produto) {
    produtos.push(produto);
}

function listarProdutos() {
    return produtos;
}

function editarProduto(id, qtdAtual) {
    let produtoEditado;
    produtos.forEach(p => {
        if(p.id == id) {
            p.quantidade = qtdAtual;
        }
        produtoEditado = p;
    });

    return produtoEditado;
}

function removerProduto(id) {
    let elemento = produtos.findIndex(id);
    console.log(elemento);
    produtos.splice(elemento, 1);
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    editarProduto,
    removerProduto
}