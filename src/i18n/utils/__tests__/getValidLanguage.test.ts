import { getValidLanguage } from 'src/i18n/utils/getValidLanguage';

describe('getValidLanguage', () => {
  const scenarios = [
    ['de-DE', undefined],
    ['EN', 'en'],
    ['en', 'en'],
    ['en-US', 'en'],
    ['en-US', 'en'],
    ['cs-CZ', 'cs'],
    ['cs-US', 'cs'],
  ];

  it.each(scenarios)(
    'should from value %s parse language %s',
    (value, expected) => {
      expect(getValidLanguage(value)).toBe(expected);
    },
  );
});
