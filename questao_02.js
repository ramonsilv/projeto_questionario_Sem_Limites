// QUESTÃO 02: Anagrama de Palíndromo [NIVEL MEDIO]
// Dada uma string, escreva uma função que verifique se ela pode ser reorganizada para formar um palíndromo. Um palíndromo é uma palavra que pode ser lida da mesma forma de trás para frente.
// Receba uma string.
// Verifique se é possível reorganizar os caracteres da string para formar um palíndromo.
// Retorne verdadeiro ou falso, dependendo se é possível ou não.
//Entrada Válida: O algoritmo deve receber uma string de tamanho ≥ 1. Strings vazias ou nulas não devem ser aceitas.
// Verificação de Palíndromo: Para que uma string possa ser reorganizada como um palíndromo, ela deve ter no máximo um caractere com quantidade ímpar. Todos os outros caracteres devem ter quantidade par.
// Resultado: Retornar true (verdadeiro) se a string puder ser reorganizada como palíndromo, caso contrário retornar false.
// Tratamento de Exceções: Se a entrada for inválida (nula, vazia ou com caracteres não alfabéticos), deve-se exibir uma mensagem de erro e solicitar uma string válida.


const readline = require('readline');

// Cria interface de leitura no terminal
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Captura a entrada do usuário
input.question("Digite a palavra: ", (resposta) => {
  let dadoString = resposta.toUpperCase().replace(/\s/g, "");
  //.toUpperCase() Converte para maiúsculas e .replace(/\s/g, "")remove espaços

  let dadoConvertido = "";
  let palidromo = "";

  for (let i = dadoString.length - 1; i >= 0; i--) {
    dadoConvertido += dadoString[i]
  };


  palidromo = (dadoString === dadoConvertido) ? "SIM" : "NÃO";
  //CONDIÇÃO IF(SE)[HARDCODIGO]=> se o dadoString for do mesmo tipo do que dadoConvertido ira retorna SIM senão retornará NÃO

  console.log(`A palavra invertida fica dessa maneira: ${dadoConvertido}`);
  console.log(`A palavra é Palidromo? ${palidromo}`);

  input.close(); // Fecha a interface de leitura REPLICE
});

// const input = require('readline-sync'); // NESE CASO: Rode esse comando no terminal da pasta do projeto => npm i install readline-sync [Ele server para criar  passar informações pelo terminal do projeto].