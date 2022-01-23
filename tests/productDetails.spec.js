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
  const products = productDetails('Alcool gel', 'Máscara');
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(products).toEqual([
      { 
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123',
        },
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123',
        },
      },
    ]);
  });

  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(products)).toBeTruthy();
  });

  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(products).toHaveLength(2);
  });

  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof products[0]).toBe('object');
    expect(typeof products[1]).toBe('object');
  });

  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const sameProducts = productDetails('Máscara', 'Máscara');
    expect(sameProducts[0]).toEqual(sameProducts[1]);
    expect(products[0]).not.toEqual(products[1]);
  });

  it('Teste se os dois productIds terminam com 123.', () => {
    const expected = { productId: expect.stringMatching(/123$/) };
    expect(products[0].details).toEqual(expected);
    expect(products[1].details).toEqual(expected);
  });
});