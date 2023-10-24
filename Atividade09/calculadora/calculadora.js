function somar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function subtrair(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function dividir(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}