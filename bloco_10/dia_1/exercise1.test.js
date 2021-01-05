const { test, expect } = require('@jest/globals');
const sum = require('./exercise1.js');

test('sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
});


test('sum(0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
});
