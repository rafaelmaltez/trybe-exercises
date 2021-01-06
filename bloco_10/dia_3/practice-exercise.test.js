const { test, expect } = require('@jest/globals');
const practice = require('./practice-exercise');

test('random number returns even and isDivisible receives 2, return is true', () => {
    practice.randomNumber = jest
        .fn()
        .mockReturnValue(50)
    
    expect(practice.isDivisible(2)).toBeTruthy;
});

test('randomNumber is invoked when invoking isDivisible', () => {
    practice.isDivisible = jest.fn();

    practice.isDivisible();
    expect(practice.randomNumber).toHaveBeenCalled;
});