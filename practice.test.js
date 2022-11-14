import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} from './practice.js';

test('checks if a string has its first character capitalized', () => {
  expect(capitalize('string')).toBe('String');
});

test('reverses a given string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

describe('the calculator object', () => {
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
});

describe('caesarCipher function', () => {
  test('caesar cipher of "caesar" should equal "dbftbs"', () => {
    expect(caesarCipher('caesar')).toBe('dbftbs');
  });

  test('strings with z wrap correctly back to a', () => {
    expect(caesarCipher('zebra')).toBe('afcsb');
  });

  test('keep the same case across entire string', () => {
    expect(caesarCipher('HeLlO WoRlD')).toBe('IfMmP XpSmE');
  });

  test("punctuation doesn't get shifted", () => {
    expect(caesarCipher("Hello world, isn't today great?")).toBe(
      "Ifmmp xpsme, jto'u upebz hsfbu?"
    );
  });
});