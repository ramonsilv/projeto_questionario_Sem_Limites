// QUESTÃO 01:Soma dos Números Pares [NIVEL FACIL]
//Escreva um algoritmo que receba um número inteiro positivo n e calcule a soma de todos os números pares de 1 até n.
// Receba o número inteiro n.
// Calcule a soma de todos os números pares no intervalo de 1 até n.
// Exiba o resultado.
// ENTRADA VÁLIDA: O número de entrada n deve ser um inteiro positivo. Se o número fornecido for menor ou igual a zero, o sistema deve solicitar um novo valor válido.
// INTERVALO DE CÁLCULO: O algoritmo deve somar apenas os números pares dentro do intervalo de 1 até n, inclusive.
// RESULTADO: A soma dos números pares deve ser exibida ao final.
// Tratamento de Exceções: Se o usuário fornecer um valor inválido (como letras ou símbolos), o sistema deve exibir uma mensagem de erro e solicitar um número válido.

const readline = require('readline');

// Interface para leitura do terminal
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSomaPares() {
  input.question("Digite um número [1 EM DIANTE]: ", function (n) {
    n = parseInt(n); // Converte a entrada para número inteiro

    // Verifica se o valor é um número inteiro positivo válido
    if (isNaN(n) || n <= 0) {
      console.log("ME AJUDA AE AMIGÃO!!!, insire um número inteiro positivo válido ae.");
      return calcularSomaPares(); // Solicita novamente o número
    }

    let soma = 0;

    // Percorre o intervalo de 1 até n e soma apenas os números pares
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        soma += i;
      }
    }

    console.log(`A soma dos números pares de 1 até ${n} é: ${soma}`);
    input.close(); // Fecha a interface de leitura
  });
}

calcularSomaPares();
