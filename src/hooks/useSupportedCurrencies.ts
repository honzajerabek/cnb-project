import { useMemo } from 'react';
import { useExchangeRatesList } from 'src/hooks/queries/useExchangeRatesList';

export const useSupportedCurrencies = () => {
  const exchangeRates = useExchangeRatesList();

  return useMemo(() => {
    return exchangeRates.map(({ code }) => code) ?? [];
  }, [exchangeRates]);
};
