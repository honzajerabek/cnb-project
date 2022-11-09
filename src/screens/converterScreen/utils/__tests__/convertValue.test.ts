import { convertValue } from 'src/screens/converterScreen/utils/convertValue';
import { ExchangeRate } from 'src/types';

describe('convertValue', () => {
  const scenarios: [ExchangeRate, number, number][] = [
    [{ amount: 1, rate: 10, code: 'CZK' }, 1, 0.1],
    [{ amount: 100, rate: 10, code: 'CZK' }, 1, 10],
    [{ amount: 1, rate: 20, code: 'CZK' }, 1, 0.05],
    [{ amount: 100, rate: 6.25, code: 'CZK' }, 1, 16],
  ];

  it.each(scenarios)(
    'should convert %s with value %s to %s',
    (exchangeRate, value, expected) => {
      expect(convertValue(exchangeRate, value)).toBe(expected);
    },
  );
});
