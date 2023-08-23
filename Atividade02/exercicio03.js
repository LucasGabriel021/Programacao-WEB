// Faça um algoritmo de multiplicação matrizes: AxB = C;

// É primordial que o número de colunas da primeira matriz seja igual
// ao número de linhas da segunda matriz. Se for diferente, o
// algoritmo deve informar “Não é possível calcular”;

function multiplicaMatriz(matrizA, matrizB) {
     const rowA = matrizA.length;
     const colA = matrizA[0].length;
     const rowB = matrizB.length;
     const colB = matrizB[0].length;

     // Condicional que faz verificação se os valores correspondem
     if(colA !== rowB) {
          return console.log("Não é possível calcular!"); 
     }

     const resultado = [];

     for(let i = 0; i < rowA; i++) {
          const newRow = [];
          for(let j = 0; j < colB; j++) {
               let soma = 0;
               for(let k = 0; k < colA; k++) {
                    soma += matrizA[i][k] * matrizB[k][j];
               }
               newRow.push(soma);
          }
          resultado.push(newRow);
     }

     return resultado;
}

// Definição da matriz
const matrizA = [[1, 3], [2, 5]];
const matrizB = [[2, 2], [0, 1]];

const resultadoMatriz = multiplicaMatriz(matrizA, matrizB);

if(resultadoMatriz) {
     console.log("Matriz Resultante: ");
     for(let i = 0; i < resultadoMatriz.length; i++) {
          console.log(resultadoMatriz[i].join("\t"));
     }
}