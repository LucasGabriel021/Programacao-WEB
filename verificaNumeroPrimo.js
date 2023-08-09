function verificarNumeroPrimo(valor) {
  let qtdDiv = 0;
  if (valor < 0) {
    valor *= -1;
    console.log(valor);
  } else {
    if (valor === 1) {
      // 1 - se o número for primo;
      return console.log('Resposta = 1');
    } else {
      for (let count = 1; count <= valor; count++) {
        if (valor % count === 0) {
          qtdDiv++;
          if (qtdDiv > 2) {
            // 0 - se o número não for primo;
            console.log('Resposta = 0');
            break;
          }
        }
      }
    }
  }

  if (qtdDiv <= 2) {
    //1 - se o número for primo.
    console.log('Resposta = 1');
  }
}

// Execução da função
verificarNumeroPrimo(33);
