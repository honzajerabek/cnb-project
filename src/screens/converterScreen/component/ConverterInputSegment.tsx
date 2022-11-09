import { StyleSheet, Text, TextInput, View } from 'react-native';
import { CurrencyNamePreview } from 'src/screens/converterScreen/component/CurrencyNamePreview';
import { CNB_DEFAULT_CURRENCY } from 'src/constants';
import { scaleFontSize } from 'src/screens/converterScreen/utils/scaleFontSize';
import { ItemSeparator } from 'src/components/ItemSeparator';
import { CurrencyNameEditButton } from 'src/screens/converterScreen/component/CurrencyNameEditButton';
import { FormattedNumber } from 'react-intl';
import { Color } from 'src/layout/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RoutesProps } from 'src/navigation/types';
import { useConvertedValue } from 'src/screens/converterScreen/hooks/useConvertedValue';
import { verticalScale } from 'react-native-size-matters';

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export const ConverterInputSegment = ({ value, onChange }: Props) => {
  const { params } = useRoute<RoutesProps['ConverterScreen']>();
  const { navigate } = useNavigation();

  const handleChangeCurrency = () => {
    navigate('CurrencyPickerScreen');
  };

  const toCurrency = params?.currency || 'EUR';

  const convertedValue = useConvertedValue({ value, toCurrency });

  return (
    <>
      <View style={styles.row}>
        <CurrencyNamePreview currencyCode={CNB_DEFAULT_CURRENCY} />
        <TextInput
          placeholder="1"
          showSoftInputOnFocus={false}
          autoFocus
          style={[styles.input, { fontSize: scaleFontSize(value) }]}
          keyboardType="decimal-pad"
          value={value.toString()}
          onChangeText={onChange}
        />
      </View>
      <ItemSeparator />
      <View style={styles.row}>
        <CurrencyNameEditButton
          currencyCode={toCurrency}
          onPress={handleChangeCurrency}
        />
        <Text
          style={[styles.result, { fontSize: scaleFontSize(value) }]}
          adjustsFontSizeToFit
        >
          <FormattedNumber value={convertedValue} />
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(20),
    alignItems: 'center',
  },
  input: {
    fontSize: verticalScale(40),
    textAlign: 'right',
    color: Color.BLACK_OLIVE,
  },
  result: {
    fontSize: verticalScale(40),
    color: Color.BLACK_OLIVE,
  },
});
