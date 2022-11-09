import axios from 'axios';

const cnbForexApi = axios.create({
  baseURL: 'https://www.cnb.cz',
});

export const getExchangeRates = () => {
  return cnbForexApi.get<string>(
    'en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
    {
      headers: {
        'Cache-Control': 'no-cache',
      },
    },
  );
};
