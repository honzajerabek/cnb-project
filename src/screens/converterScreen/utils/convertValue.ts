import { ExchangeRate } from 'src/types';

export const convertValue = (exchangeRate: ExchangeRate, value: number) => {
  return ((exchangeRate.amount || 1) / (exchangeRate.rate || 1)) * value;
};
