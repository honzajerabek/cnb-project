export const scaleFontSize = (value: string) => {
  const valueLength = value.length;
  const fontSize = 40;

  if (valueLength > 7) {
    return fontSize - valueLength;
  }

  return fontSize;
};
