import { useExchangeRatesQuery } from 'src/hooks/queries/useExchangeRatesQuery';
import {
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { ExchangeRate } from 'src/types';
import { useCallback } from 'react';
import { ExchangeRateRow } from 'src/screens/exchangeRateTableScreen/components/ExchangeRateRow';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FloatingButton } from 'src/layout/components/FloatingButton';
import Animated from 'react-native-reanimated';
import { ItemSeparator } from 'src/components/ItemSeparator';
import { Color } from 'src/layout/colors';
import { Header } from 'src/screens/exchangeRateTableScreen/components/Header';
import { useAnimatedHeader } from 'src/screens/exchangeRateTableScreen/hooks/useAnimatedHeader';
import { useExchangeRatesList } from 'src/hooks/queries/useExchangeRatesList';
import { FormattedMessage } from 'react-intl';
import { CenterLoader } from 'src/components/CenterLoader';

export const ExchangeRateTableScreen = () => {
  const { data, refetch, isLoading } = useExchangeRatesQuery();

  const { bottom: bottomInset } = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ExchangeRate>) => (
      <ExchangeRateRow exchangeRate={item} />
    ),
    [],
  );

  const { handleScroll, handleHeaderLayout, headerStyle, headerSnapOffset } =
    useAnimatedHeader();

  const { navigate } = useNavigation();

  const handleOpenConverter = useCallback(() => {
    navigate('ConverterScreen');
  }, [navigate]);

  const ratesList = useExchangeRatesList();

  if (!data?.rates && isLoading) {
    return <CenterLoader />;
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList<ExchangeRate>
        ListHeaderComponent={
          <Header
            onLayout={handleHeaderLayout}
            lastUpdateAt={data?.updatedAt}
            style={headerStyle}
          />
        }
        onScroll={handleScroll}
        data={ratesList}
        snapToOffsets={[0, headerSnapOffset]}
        snapToEnd={false}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        refreshControl={
          <RefreshControl
            progressViewOffset={20}
            refreshing={!!data?.rates && isLoading}
            onRefresh={refetch}
          />
        }
        contentContainerStyle={[
          styles.listContainer,
          {
            paddingBottom: bottomInset + 80,
          },
        ]}
      />
      <FloatingButton onPress={handleOpenConverter}>
        <FormattedMessage id="button.converter" defaultMessage="Converter" />
      </FloatingButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: Color.WHITE },
  listContainer: {
    paddingHorizontal: 10,
  },
});
