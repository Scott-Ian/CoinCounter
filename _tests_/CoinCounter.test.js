import { CoinCounter } from './../src/CoinCounter'

describe('change', () => {

  test('should take in a decimal value and return a string', () => {
    expect(CoinCounter(499)).toBeDefined();
  });

  test('should return an error message if argument is not a number', () => {
    expect(CoinCounter("tree")).toEqual("invalid input");
  });

  test('should remove maximum amount of quarters possible', () => {
    expect(CoinCounter(200)).toEqual(expect.stringContaining("Quarters: 8"));
  });

  test('should remove maximum amount of dimes possible', () => {
    expect(CoinCounter(210)).toEqual(expect.stringContaining("Quarters: 8, Dimes: 1,"));
  });

  test('should remove maximum amount of nickels possible', () => {
    expect(CoinCounter(215)).toEqual(expect.stringContaining("Quarters: 8, Dimes: 1, Nickels: 1,"))
  });

  test('should return the total number of coins of each type', () => {
    expect(CoinCounter(217)).toEqual("Quarters: 8, Dimes: 1, Nickels: 1, Pennies: 2");
  });

});