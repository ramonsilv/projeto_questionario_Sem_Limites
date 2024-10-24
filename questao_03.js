// QUESTÃO 03: Problema da Mochila (Knapsack Problem).[NIVEL DIFICIL]
// Dado um conjunto de itens, onde cada item tem um peso e um valor, determine o valor máximo que pode ser obtido colocando itens em uma mochila com uma capacidade máxima de peso W. Cada item pode ser colocado na mochila apenas uma vez. Receba a capacidade da mochila (W), os valores e os pesos dos itens. Calcule o valor máximo que pode ser carregado na mochila sem exceder o limite de peso. Exiba o valor máximo possível.
//A capacidade máxima da mochila (W), que deve ser um número inteiro positivo. Uma lista de valores dos itens, onde cada valor deve ser um número inteiro positivo. Uma lista de pesos dos itens, onde cada peso deve ser um número inteiro positivo. Limitação da Mochila: O total dos pesos dos itens colocados na mochila não deve exceder a capacidade máxima W. Cálculo de Valor Máximo: O algoritmo deve calcular a combinação de itens que maximiza o valor total sem exceder a capacidade da mochila. Consistência dos Dados: O número de itens (valores) deve ser o mesmo que o número de pesos. Caso haja inconsistência (listas de tamanhos diferentes), o sistema deve exibir um erro. Resultado: O algoritmo deve retornar o valor máximo que pode ser carregado na mochila, respeitando a capacidade de peso. Tratamento de Exceções: Caso os valores ou pesos fornecidos não sejam números inteiros positivos ou as listas tenham tamanhos diferentes, o sistema deve exibir uma mensagem de erro.

const readline = require('readline');

// Cria interface de leitura no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mochila(W, valores, pesos) {
  // Valida entrada
  if (!Number.isInteger(W) || W <= 0) {
    return "Erro: A capacidade da mochila (W) deve ser um número inteiro positivo.";
  }

  if (valores.length !== pesos.length) {
    return "Erro: O número de valores deve ser igual ao número de pesos.";
  }

  for (let valor of valores) {
    if (!Number.isInteger(valor) || valor <= 0) {
      return "Erro: Todos os valores devem ser números inteiros positivos.";
    }
  }

  for (let peso of pesos) {
    if (!Number.isInteger(peso) || peso <= 0) {
      return "Erro: Todos os pesos devem ser números inteiros positivos.";
    }
  }

  let n = valores.length;

  // Inicialização da matriz de programação dinâmica
  let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  // Preenchendo a tabela de programação dinâmica
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (pesos[i - 1] <= w) {
        // Escolhemos o máximo entre pegar ou não pegar o item
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - pesos[i - 1]] + valores[i - 1]);
      } else {
        // Se o peso do item atual for maior que a capacidade, não pegamos o item
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // O valor máximo estará na célula dp[n][W]
  return dp[n][W];
}

// Função para obter dados do usuário usando readline
function obterDados() {
  rl.question('Digite a capacidade máxima da mochila (W): ', (capacidade) => {
    const W = parseInt(capacidade);

    rl.question('Digite os valores dos itens, separados por vírgulas (exemplo: 60,100,120): ', (valoresStr) => {
      const valores = valoresStr.split(',').map(Number);

      rl.question('Digite os pesos dos itens, separados por vírgulas (exemplo: 10,20,30): ', (pesosStr) => {
        const pesos = pesosStr.split(',').map(Number);

        const resultado = mochila(W, valores, pesos);
        console.log(`Valor máximo que pode ser carregado na mochila: ${resultado}`);

        // Fechando a interface readline
        rl.close();
      });
    });
  });
}

// Chama a função para iniciar o programa
obterDados();
