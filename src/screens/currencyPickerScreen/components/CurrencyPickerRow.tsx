import { useNavigation } from '@react-navigation/native';
import { FormattedCurrencyName } from 'src/i18n/components/FormattedCurrencyName';
import { Item } from 'src/components/Item';

type Props = {
  currencyCode: string;
};

export const CurrencyPickerRow = ({ currencyCode }: Props) => {
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('ConverterScreen', { currency: currencyCode });
  };

  return (
    <Item
      onPress={handlePress}
      label={
        <FormattedCurrencyName
          currencyCode={currencyCode}
          currencyDisplay="name"
        />
      }
    />
  );
};
