const fs = require('fs');
const sinon = require('sinon');
const typeOfNumber = require('./typeOfNumber');
const writeToFile = require('./writeToFile');
const { expect } = require('chai');

describe('Tipo de numero', () => {
  // describe('Se o numero é maior do que zero', () => {
  it('o numero é maior do que zero a resposta é "positivo"', () => {
    const answer = typeOfNumber(3);
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal("positivo");
  })
  // })
  // describe('Se o numero é menor do que zero', () => {
  it('o numero é menor do que zero a resposta é "negativo"', () => {
    const answer = typeOfNumber(-4);
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal("negativo");
  })
  // })
  // describe('Se o numero é zero', () => {
  it('Se o numero é zero a resposta é neutro', () => {
    const answer = typeOfNumber(0);
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal("neutro")
  })
  // })
  // describe('se o valor passado nao for um numero', () => {
  it('se o valor passado nao for um numero a resposta é "o valor deve ser um numero"', () => {
    const answer = typeOfNumber('eu sou um numero');
    expect(answer).to.be.a('string');
    expect(answer).to.be.equal('o valor deve ser um numero');
  })
  // })
})

// sinon.stub(fs, 'writeFileSync').returns("OK")

describe('Escreve em um arquivo', () => {
  describe('Quando a escrita é bem sucedida', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    })
    after(() => {
      fs.writeFileSync.restore();
    })
    it('a resposta é uma string', () => {
      const answer = writeToFile('testfile.txt', "Very creative content");
      expect(answer).to.be.a('string');
    })
    it('a resposta é "OK"', () => {
      const answer = writeToFile('testfile.txt', "Very creative content");
      expect(answer).to.be.eq('OK');
    })
  })
})