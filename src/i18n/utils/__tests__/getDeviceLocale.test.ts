import { getLocales } from 'react-native-localize';
import { Platform } from 'react-native';
import { getDeviceLocale } from 'src/i18n/utils/getDeviceLocale';

jest.mock('react-native-localize', () => ({
  getLocales: jest.fn(),
}));

describe('getDeviceLocale', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  (getLocales as jest.Mock).mockImplementation(() => [
    {
      countryCode: 'FR',
      languageTag: 'fr-FR',
      languageCode: 'fr',
      isRTL: false,
    },
    {
      countryCode: 'GB',
      languageTag: 'en-GB',
      languageCode: 'en',
      isRTL: false,
    },
    {
      countryCode: 'US',
      languageTag: 'en-US',
      languageCode: 'en',
      isRTL: false,
    },
  ]);

  it('should get locale for ios', () => {
    Platform.OS = 'ios';

    expect(getDeviceLocale()).toBe('fr-FR');
  });

  it('should get locale for android', () => {
    Platform.OS = 'android';

    expect(getDeviceLocale()).toBe('fr-FR');
  });
});
