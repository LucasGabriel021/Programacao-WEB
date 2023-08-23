// Faça um algoritmo que imprime uma matriz A e sua transposta.

// Definição da matriz
const matrizA = [[1, 2], [3, 4], [5, 6]];
console.log("Matriz A: ");
imprimirMatriz(matrizA);

function imprimirMatriz(matriz) {
    // console.log(matriz.length);
    // console.log(matriz);
    for(let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t")); // join transforma um array em string
    }
}

function traspostaMatriz(matriz) {
    const rows = matriz[0].length;
    const cols = matriz.length;
    const matrizTransposta = [];
    // console.log("Linhas: ", rows);
    // console.log("Colunas: ", cols);

    for(let i = 0; i < rows; i++) {
        const newRow = [];
        for(let j = 0; j < cols; j++) {
            newRow.push(matriz[j][i]);
        }
        matrizTransposta.push(newRow);
    }
    
    return matrizTransposta;
}

const matrizTranspostaReal = traspostaMatriz(matrizA);
console.log("\n Matriz Trasnposta A: ");
imprimirMatriz(matrizTranspostaReal);