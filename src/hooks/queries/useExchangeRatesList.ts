import { useExchangeRatesQuery } from 'src/hooks/queries/useExchangeRatesQuery';
import { useMemo } from 'react';

export const useExchangeRatesList = () => {
  const { data } = useExchangeRatesQuery();

  return useMemo(
    () => (data?.rates ? Object.values(data.rates) : []),
    [data?.rates],
  );
};
