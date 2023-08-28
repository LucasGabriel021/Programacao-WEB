# PromiseFunction Arow:

Como o próprio nome sugere, ela é uma promessa, é um objeto qu erepresenta uma eventual conclusão ou falha de uma operação assincrona (callback). 

Uma Promise, pode ter 3 estados, sendo eles o pendente (em funcionando), realizado (sucesso) e rejeitado (erro).

OBS: O Estado de uma Promise, não pode ser acessado! 

OBS: Uma Promise quase nunca é criada, geralmente ela é vista ao fazer uma requisição há um servidor, e devemos tratar quando tivermos a resposta com os comandos catch ou try.

Promise.then() aceita dois argumentos, um retorno de chamada para sucesso e outro para falha.

Ambos são opcionais, portanto você pode adicionar um retorno de chamada apenas para sucesso ou falha.

Sintaxe:

~~~javascript
let promessa = new Promise(function(resolve, reject) {
     let x = 1;

     if(x == 0) {
          resolve("Ok");
     } else {
          reject("No");
     }
});

promessa.then(
     (valor) => {console.log("Sucesso: " + valor);},
     (error) => {console.log("Erro: " + error)}
)
~~~