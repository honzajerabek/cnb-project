import { getLocales } from 'react-native-localize';

export const getDeviceLocale = (): string => {
  const [userLocale] = getLocales();

  return userLocale.languageTag;
};
