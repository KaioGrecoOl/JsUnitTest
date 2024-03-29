const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.

    expect(typeof productDetails).toEqual('function');
    
    // Teste se o retorno da função é um array.

    expect(typeof productDetails('Alcool gel', 'Máscara')).toEqual(typeof []);

    // Teste se o array retornado pela função contém dois itens dentro.

    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.

    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Consegui resolver após verificar conteúdo https://jestjs.io/pt-BR/docs/expect#not

    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Alcool gel', 'Máscara')[1]);

    // Teste se os dois productIds terminam com 123.

    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toEqual('Alcool gel123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toEqual('Máscara123');

  });
});
