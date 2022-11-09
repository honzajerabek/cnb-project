import { useFormattedCurrencyCode } from 'src/i18n/hooks/useFormattedMoney';
import { memo } from 'react';
import { NumberFormatOptionsCurrencyDisplay } from '@formatjs/ecma402-abstract/types/number';

type Props = {
  currencyCode: string;
  currencyDisplay?: NumberFormatOptionsCurrencyDisplay;
};

export const FormattedCurrencyName = memo(
  ({ currencyCode, currencyDisplay = 'name' }: Props) => {
    const formatCurrencyName = useFormattedCurrencyCode({ currencyDisplay });

    return <>{formatCurrencyName(currencyCode)}</>;
  },
);
