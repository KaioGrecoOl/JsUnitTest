/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/ 
// Consegui resolver apos leitura do conteúdo do site : https://qastack.com.br/programming/10359907/how-to-compute-the-sum-and-average-of-elements-in-an-array */ 

const average = (number) => {
  if (number === null || number.length === 0) {
    return undefined;
  } 
  let sum = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (typeof number[index] !== 'number') {
      return undefined;
    }
    sum += number[index];
  }
  return Math.round(sum / number.length);
};

module.exports = average;
