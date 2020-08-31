import { CoinCounterClosure } from '../src/CoinCounterClosure'

describe('closure', () => {

  test('should take in an integer and return a string', () => {
    expect(CoinCounterClosure(499)).toBeDefined();
  });
});
