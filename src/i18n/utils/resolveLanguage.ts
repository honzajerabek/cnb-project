import { getDeviceLocale } from 'src/i18n/utils/getDeviceLocale';
import { getValidLanguage } from 'src/i18n/utils/getValidLanguage';
import { DEFAULT_LANGUAGE } from 'src/i18n/utils/constants';
import { Language } from 'src/i18n/utils/enums';

export const resolveLanguage = (): Language => {
  const localeName = getDeviceLocale();

  return getValidLanguage(localeName) || DEFAULT_LANGUAGE;
};
