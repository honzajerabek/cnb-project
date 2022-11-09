import { useQuery } from 'react-query';
import { getExchangeRates } from 'src/api/cnb';
import { parseCnbResult } from 'src/utils/cnb/parseCNBResult';

export const useExchangeRatesQuery = () => {
  return useQuery('exchangeRates', async () => {
    const { data } = await getExchangeRates();

    return parseCnbResult(data);
  });
};
