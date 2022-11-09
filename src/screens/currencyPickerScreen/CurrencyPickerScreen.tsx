import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { useSupportedCurrencies } from 'src/hooks/useSupportedCurrencies';
import { useCallback } from 'react';
import { CurrencyPickerRow } from 'src/screens/currencyPickerScreen/components/CurrencyPickerRow';
import { ItemSeparator } from 'src/components/ItemSeparator';

export const CurrencyPickerScreen = () => {
  const supportedCurrencies = useSupportedCurrencies();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<string>) => (
      <CurrencyPickerRow currencyCode={item} />
    ),
    [],
  );

  return (
    <FlatList<string>
      data={supportedCurrencies}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
});
