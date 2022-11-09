import * as fs from 'fs';
import * as path from 'path';
import { dailyExpected } from 'src/utils/cnb/__tests__/fixtures/dailyExpected';
import { parseCnbResult } from 'src/utils/cnb/parseCNBResult';

describe('parseCNBResult', () => {
  const rawResult = fs.readFileSync(
    path.resolve(__dirname, 'fixtures', 'daily.txt'),
    'utf8',
  );

  it('should parse the cnb result to structured data', () => {
    expect(parseCnbResult(rawResult)).toStrictEqual(dailyExpected);
  });
});
