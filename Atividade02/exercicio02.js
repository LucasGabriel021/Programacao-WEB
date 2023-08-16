// Faça um algoritmo que imprime uma matriz A e sua transposta.

let matriz = [[1, 2], [3, 4], [5, 6]];

let matrizNormal = `
        |${matriz[0][0]} ${matriz[0][1]}|
        |${matriz[1][0]} ${matriz[1][1]}|
        |${matriz[2][0]} ${matriz[2][1]}|
`;

console.log(matrizNormal);

let matrizTransposta = `
    |${matriz[0][0]} ${matriz[1][0]} ${matriz[2][0]}|
    |${matriz[0][1]} ${matriz[1][1]} ${matriz[2][1]}|
`;

console.log(matrizTransposta);