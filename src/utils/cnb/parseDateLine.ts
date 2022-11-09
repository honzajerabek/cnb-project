import { parse } from 'date-fns';

export const parseDateLine = (dateLine: string) => {
  const [day, month, year] = dateLine.split(' ');
  return parse(`${day}-${month}-${year}`, 'dd-MMM-yyyy', new Date());
};
