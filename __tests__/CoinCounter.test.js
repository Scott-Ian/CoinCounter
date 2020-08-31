import { CoinCounter } from './../src/CoinCounter'

describe('change', () => {

  test('should take in a decimal value and return a string', () => {
    expect(CoinCounter(4.99)).toBeDefined();
  });

  test('should return an error message if argument is not a number', () => {
    expect(CoinCounter("tree")).toEqual("invalid input");
  });

  test('should remove maximum amount of quarters possible', () => {
    expect(CoinCounter(2.00)).toEqual(expect.stringContaining("Quarters: 8"));
  });

  test('should remove maximum amount of dimes possible', () => {
    expect(CoinCounter(2.10)).toEqual(expect.stringContaining("Quarters: 8, Dimes: 1,"));
  });




});



// Test logic!
// Probably want you import something you're using in the project-name.js