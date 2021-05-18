const typeOfNumber = require('./typeOfNumber');
const { expect } = require('chai');

describe('Tipo de numero', () => {
  describe('Se o numero é maior do que zero', () => {
    it('a resposta é "positivo"', () => {
      const answer = typeOfNumber(3);
      expect(answer).to.be.a('string');
      expect(answer).to.be.equal("positivo");
    })
  })
  describe('Se o numero é menor do que zero', () => {
    it('a resposta é "negativo"', () => {
      const answer = typeOfNumber(-4);
      expect(answer).to.be.a('string');
      expect(answer).to.be.equal("negativo");
    })
  })
  describe('Se o numero é zero', () => {
    it('a resposta é neutro', () => {
      const answer = typeOfNumber(0);
      expect(answer).to.be.a('string');
      expect(answer).to.be.equal("neutro")
    })
  })
  describe('se o valor passado nao for um numero', () => {
    it('a resposta é "o valor deve ser um numero"', () => {
      const answer = typeOfNumber('eu sou um numero');
      expect(answer).to.be.a('string');
      expect(answer).to.be.equal('o valor deve ser um numero');
    })
  })
})