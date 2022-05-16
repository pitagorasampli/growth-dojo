const items = [
  'pedra',
  'papel',
  'tesoura'
];


function juiz(user1, user2) {
  const user1Minusculo = user1.toLowerCase();
  const user2Minusculo = user2.toLowerCase();

  if (!(items.includes(user1Minusculo) && items.includes(user2Minusculo)))
    throw new Error('item não encontrado');

  if (user1Minusculo === user2Minusculo)
    return 'empate';

  if (user1Minusculo !== 'papel' && user2Minusculo !== 'papel')
    return 'pedra'

  if (user1Minusculo !== 'tesoura' && user2Minusculo !== 'tesoura')
    return 'papel'

  if (user1Minusculo !== 'pedra' && user2Minusculo !== 'pedra')
    return 'tesoura'

}

module.exports = juiz;
