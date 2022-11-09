import { getDeviceLocale } from 'src/i18n/utils/getDeviceLocale';
import { resolveLanguage } from 'src/i18n/utils/resolveLanguage';

jest.mock('src/i18n/utils/getDeviceLocale', () => ({
  getDeviceLocale: jest.fn(),
}));

describe('resolveLanguage', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  const scenarios = [
    ['SOMETHING_WRONG', 'en'],
    ['de-DE', 'en'],
    ['en-US', 'en'],
    ['en-AU', 'en'],
    ['de-DE', 'en'],
  ];

  it.each(scenarios)(
    'should resolve device language %s to known valid language %s',
    (value, expected) => {
      (getDeviceLocale as jest.Mock).mockImplementation(() => value);

      expect(resolveLanguage()).toBe(expected);
    },
  );
});
