import { RouteProp } from '@react-navigation/native';

export type RouteParamsList = {
  ExchangeRateTableScreen: undefined;
  ConverterScreen: { currency: string } | undefined;
  CurrencyPickerScreen: undefined;
};

export type RouteKeys = keyof RouteParamsList;

export type RoutesProps = {
  [key in RouteKeys]: RouteProp<RouteParamsList, key>;
};
