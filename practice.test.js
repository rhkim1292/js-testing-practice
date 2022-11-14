import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
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

describe('analyzeArray tests', () => {
    test('the average property correctly holds the average of the input array', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    });
    test('the min property correctly holds the minimum value of the input array', () => {
        expect(analyzeArray([6, 7, 3, 8, 79]).min).toBe(3);
    });
    test('the max property correctly holds the maximum value of the input array', () => {
        expect(analyzeArray([7, 2, 6, 10, 67, 1, 87]).max).toBe(87);
    });
    test('the length property correctly holds the length of the input array', () => {
        expect(analyzeArray([5, 10, 78, 123, 2, 1, 65]).length). toBe(7);
    })
});