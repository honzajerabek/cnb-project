import { ExchangeRate } from 'src/types';
import { View, Text } from 'react-native';
import { FormattedMoney } from 'src/i18n/components/FormattedMoney';
import { CNB_DEFAULT_CURRENCY } from 'src/constants';
import { FormattedCurrencyName } from 'src/i18n/components/FormattedCurrencyName';
import { useNavigation } from '@react-navigation/native';
import { Item } from 'src/components/Item';

type Props = {
  exchangeRate: ExchangeRate;
};

export const ExchangeRateRow = ({ exchangeRate }: Props) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('ConverterScreen', { currency: exchangeRate.code });
  };

  return (
    <Item
      onPress={handlePress}
      label={<FormattedCurrencyName currencyCode={exchangeRate.code} />}
      rightContent={
        <View>
          <Text>
            <FormattedMoney
              value={exchangeRate.amount}
              currencyCode={exchangeRate.code}
              minimumFractionDigits={0}
            />{' '}
            -{' '}
            <FormattedMoney
              value={exchangeRate.rate}
              currencyCode={CNB_DEFAULT_CURRENCY}
            />
          </Text>
        </View>
      }
    />
  );
};
