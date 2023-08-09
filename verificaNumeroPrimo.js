function verificarNumeroPrimo(valor) {
    //1 - se o número for primo;
    let valorProvisorio = 1;
    for(let i = 2; i <= valor; i++) {
        if((valor % i) == 0) {
            //0 - se o número não for primo;
            valorProvisorio = 0;
        } 
    }

    if(valorProvisorio == 0) {
        console.log("O número não é primo, resultado:", valorProvisorio);
    } else {
        console.log("O número é primo, resultado:", valorProvisorio);
    }
}
verificarNumeroPrimo(7);