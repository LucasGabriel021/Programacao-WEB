# Function Arow:

As functions arows, ou função de seta, nos permitem escrever uma sintaxe de função mais curta. Sua sintaxe:

~~~javascript
- const funcao = (parametro) => {
     código
} 

// ou

- const funcao = (parametro) => {
     codigo
}
~~~

OBS: Nas funções anônimas quando temos apenas 1 (um) parâmetro, sua declaração pode haver uma variação, exemplo: 

~~~javascript
- const funcao = paraemtro => {
     codigo
}
~~~

OBS: Quando ela possuir apenas uma linha podemos omitir o colchetes e o return, exemplo:

~~~javascript
- const funcao = (parametro) => console.log("Olá, Mundo!");
~~~

### Exemplo em código:

~~~javascript
let valorA = 2;
let valorB = 6;

let soma = (valor1, valor2) => {
     return valor1 + valor2;
}

console.log(soma(valorA, valorB));
~~~