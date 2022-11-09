import { FormattedNumber } from 'react-intl';
import { NumberFormatOptions } from '@formatjs/ecma402-abstract';

type Props = {
  value: number;
  currencyCode: string;
} & Pick<
  NumberFormatOptions,
  'minimumFractionDigits' | 'maximumFractionDigits'
>;

export const FormattedMoney = ({
  value,
  currencyCode,
  minimumFractionDigits = 2,
  maximumFractionDigits = 3,
}: Props) => {
  return (
    <FormattedNumber
      value={value}
      currency={currencyCode}
      style="currency"
      minimumFractionDigits={minimumFractionDigits}
      maximumFractionDigits={maximumFractionDigits}
    />
  );
};
