import { StyleSheet, Text } from 'react-native';
import { FormattedCurrencyName } from 'src/i18n/components/FormattedCurrencyName';
import { alpha } from 'src/utils/colors/alpha';
import { Color } from 'src/layout/colors';
import { verticalScale } from 'react-native-size-matters';

type Props = {
  currencyCode: string;
};

export const CurrencyNamePreview = ({ currencyCode }: Props) => {
  return (
    <Text style={styles.currencyCodePreview}>
      <FormattedCurrencyName
        currencyCode={currencyCode}
        currencyDisplay="symbol"
      />
    </Text>
  );
};

const styles = StyleSheet.create({
  currencyCodePreview: {
    fontWeight: '600',
    fontSize: verticalScale(32),
    paddingLeft: 8,
    color: alpha(Color.BLACK_OLIVE, 0.4),
  },
});
