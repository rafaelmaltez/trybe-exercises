const { test, expect } = require('@jest/globals');
const sum = require('./exercise1.js');

//Teste se o retorno de sum(4, 5) é 9
test('sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
});

// Teste se o retorno de sum(0, 0) é 0
test('sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
});

// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
test ('sum(4, "5") returns an error', () => {
    expect(() => {sum(4, "5") }).toThrow()
});

// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
test('sum(4, "5") throws error message: "parameters must be numbers"', () => {
    expect(() => {sum(4, "5") }).toThrowError( new Error('parameters must be numbers'));
});