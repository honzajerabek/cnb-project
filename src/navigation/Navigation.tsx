import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RouteParamsList } from 'src/navigation/types';
import { ExchangeRateTableScreen } from 'src/screens/exchangeRateTableScreen/ExchangeRateTableScreen';
import { ConverterScreen } from 'src/screens/converterScreen/ConverterScreen';
import { CurrencyPickerScreen } from 'src/screens/currencyPickerScreen/CurrencyPickerScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteParamsList {}
  }
}

const Stack = createNativeStackNavigator<RouteParamsList>();

export const Navigation = () => {
  return (
    <NavigationContainer<RouteParamsList>>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ExchangeRateTableScreen"
      >
        <Stack.Screen
          name="ExchangeRateTableScreen"
          component={ExchangeRateTableScreen}
        />
        <Stack.Screen
          name="ConverterScreen"
          component={ConverterScreen}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="CurrencyPickerScreen"
          component={CurrencyPickerScreen}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
