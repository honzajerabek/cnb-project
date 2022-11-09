import { parseInputNumericValue } from 'src/screens/converterScreen/utils/parseInputNumericValue';

describe('parseInputNumericValue', () => {
  const scenarios = [
    ['123', '123'],
    ['123.1234', '123.123'],
    ['123.123', '123.123'],
    ['123.123.', '123.123'],
    ['.123.', '.123'],
    ['..123.', '.'],
    ['123.', '123.'],
    ['hello', ''],
  ];

  it.each(scenarios)(
    'should from value %s parse numeric value %s',
    (value, expected) => {
      expect(parseInputNumericValue(value)).toBe(expected);
    },
  );
});
