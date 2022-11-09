import { Color } from 'src/layout/colors';

export const alpha = (color: Color, alphaPercent: number): string => {
  if (alphaPercent < 0 || alphaPercent > 1) {
    return color;
  }

  const alphaValue = alphaPercent * 255;

  const aa = Math.round(alphaValue).toString(16).toUpperCase();

  if (aa === '0') {
    return `${color}${'00'}`;
  }
  return `${color}${aa}`;
};
