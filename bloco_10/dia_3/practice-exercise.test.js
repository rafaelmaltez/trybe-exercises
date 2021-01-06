const { test, expect } = require('@jest/globals');
const practice = require('./practice-exercise');

//Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true .
test('random number returns even and isDivisible receives 2, return is true', () => {
    practice.randomNumber = jest
        .fn()
        .mockReturnValue(50)
    
    expect(practice.isDivisible(2)).toBeTruthy;
});

//escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible() 
test('randomNumber is invoked when invoking isDivisible', () => {
    practice.isDivisible = jest.fn();

    practice.isDivisible();
    expect(practice.randomNumber).toHaveBeenCalled;
});