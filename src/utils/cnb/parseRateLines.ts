import { ExchangeRate } from 'src/types';

export const parseRateLines = (rateLines: string[]) => {
  return rateLines
    .map(line => line.split('|'))
    .reduce<Record<string, ExchangeRate>>((acc, [, , amount, code, rate]) => {
      return {
        ...acc,
        [code]: {
          code,
          rate: Number(rate),
          amount: Number(amount),
        },
      };
    }, {});
};
