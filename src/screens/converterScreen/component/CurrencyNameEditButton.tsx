import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FormattedCurrencyName } from 'src/i18n/components/FormattedCurrencyName';
import { Color } from 'src/layout/colors';
import { verticalScale } from 'react-native-size-matters';

type Props = {
  currencyCode: string;
  onPress: () => void;
};

export const CurrencyNameEditButton = ({ currencyCode, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.currencyCodeButton}
      onPress={() => onPress()}
    >
      <Text style={styles.currencyCodeEdit}>
        <FormattedCurrencyName
          currencyCode={currencyCode}
          currencyDisplay="narrowSymbol"
        />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  currencyCodeEdit: {
    fontWeight: '600',
    fontSize: verticalScale(24),
    color: Color.WHITE,
  },
  currencyCodeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.BLUE,
    borderRadius: verticalScale(99),
    width: verticalScale(48),
    height: verticalScale(48),
  },
});
