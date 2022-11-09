export const parseInputNumericValue = (value: string) => {
  const numberPattern = new RegExp(
    /(?!0[0-9])(0|[1-9][0-9]{0,20})?([.,]([0-9]{1,3})?)?/,
  );

  const match = numberPattern.exec(value);

  return match?.[0] ? match[0] : '';
};
