const juiz = require('./dojo');

test('validação das entradas', () => {
  const usuario1 = 'xpto'
  const usuario2 = 'papel'

  expect(() => juiz(usuario1, usuario2)).toThrow();
  expect(() => juiz(usuario2, usuario1)).toThrow();
});

test('validação do empate caso as jogadas sejam iguais', () => {
  expect(juiz('pedra', 'pedra')).toMatch(/empate/)
  expect(juiz('pApel', 'papel')).toMatch(/empate/)
  expect(juiz('Tesoura', 'tesoura')).toMatch(/empate/)
});

test ('validação se for pedra ganha de tesoura', ()=> {
  const usuario1 = 'Pedra';
  const usuario2 = 'Tesoura';

  expect (juiz(usuario1, usuario2)).toMatch(/pedra/)
  expect (juiz(usuario2, usuario1)).toMatch(/pedra/)
})

test ('validação se for tesoura ganha de papel', () => {
  const usuario1 = 'teSoura';
  const usuario2 = 'paPel';

  expect (juiz(usuario1, usuario2)).toMatch(/tesoura/)
  expect (juiz(usuario2, usuario1)).toMatch(/tesoura/)
})

test ('validação se for papel ganha de pedra', () => {
  const usuario1 = 'pApel';
  const usuario2 = 'Pedra';

  expect(juiz(usuario1, usuario2)).toMatch(/papel/)
  expect(juiz(usuario2, usuario1)).toMatch(/papel/)
})
