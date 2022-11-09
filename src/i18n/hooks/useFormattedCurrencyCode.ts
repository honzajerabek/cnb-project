import { useIntl } from 'react-intl';

import { useCallback } from 'react';
import { capitalize } from 'src/utils/string/capitalize';
import { FormatNumberOptions } from '@formatjs/intl/src/types';

const DUMMY_AMOUNT = 1;

type Opts = Pick<FormatNumberOptions, 'currencyDisplay'>;

export const useFormattedCurrencyCode = (options: Opts) => {
  const intl = useIntl();

  const removeAmount = (amount: string) => {
    return amount.replace(DUMMY_AMOUNT.toString(), '').trim();
  };

  return useCallback(
    (currencyCode: string) => {
      const formattedCurrency = intl.formatNumber(DUMMY_AMOUNT, {
        currency: currencyCode,
        currencyDisplay: 'name',
        style: 'currency',
        maximumFractionDigits: 0,
        ...options,
      });

      const currencyName = removeAmount(formattedCurrency);

      return capitalize(currencyName);
    },
    [intl, options],
  );
};
