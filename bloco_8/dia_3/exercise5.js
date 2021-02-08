// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


function containsA() {
  return names.reduce((acc, name) => `${acc}${name}`)
  .split("")
  .filter((char) => char === 'A' || char === 'a').length
}

assert.deepEqual(containsA(), 20);