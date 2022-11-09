import { convertValue } from 'src/screens/converterScreen/utils/convertValue';
import { useExchangeRatesQuery } from 'src/hooks/queries/useExchangeRatesQuery';
import { useMemo } from 'react';

type Options = {
  toCurrency: string;
  value: string;
};

export const useConvertedValue = ({ toCurrency, value }: Options) => {
  const { data } = useExchangeRatesQuery();

  return useMemo(() => {
    const exchangeRate = data?.rates[toCurrency];

    if (!exchangeRate) {
      return 0;
    }

    const numericValue = Number(value.replace(',', '.')) || 1;

    return convertValue(exchangeRate, numericValue);
  }, [data?.rates, toCurrency, value]);
};
