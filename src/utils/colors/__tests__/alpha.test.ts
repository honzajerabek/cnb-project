import { alpha } from 'src/utils/colors/alpha';
import { Color } from 'src/layout/colors';

describe('alpha', () => {
  const scenarios: [Color, number, string][] = [
    [Color.BLUE, 0.5, '#0066ff80'],
    [Color.BLUE, 0.35, '#0066ff59'],
    [Color.BLUE, 1, '#0066ffFF'],
    [Color.BLUE, 0, '#0066ff00'],
  ];

  it.each(scenarios)(
    'should convert color %s, alpha %s to %s',
    (color: Color, transparency: number, result: any) => {
      expect(alpha(color, transparency)).toBe(result);
    },
  );
});
