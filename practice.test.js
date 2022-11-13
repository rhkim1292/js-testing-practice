import {capitalize, reverseString, calculator} from './practice.js'

test('checks if a string has its first character capitalized', () => {
    expect(capitalize('string')).toBe('String');
});

test('reverses a given string', () => {
    expect(reverseString('string')).toBe('gnirts');
});

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divides 6 / 3 to equal 2', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test('multiplies 8 * 3 to equal 24', () => {
    expect(calculator.multiply(8, 3)).toBe(24);
});