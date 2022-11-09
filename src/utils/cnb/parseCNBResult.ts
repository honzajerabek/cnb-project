import { parseDateLine } from 'src/utils/cnb/parseDateLine';
import { parseRateLines } from 'src/utils/cnb/parseRateLines';

export const parseCnbResult = (cnbResult: string) => {
  const lines = cnbResult.trim().split('\n');

  const [dateLine, , ...rateLines] = lines;

  const updatedAt = parseDateLine(dateLine);
  const rates = parseRateLines(rateLines);

  return {
    updatedAt,
    rates,
  };
};
