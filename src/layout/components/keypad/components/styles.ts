import { StyleSheet } from 'react-native';
import { Color } from 'src/layout/colors';
import { verticalScale } from 'react-native-size-matters';

export const KEY_SIZE = verticalScale(64);
export const KEYS_PER_ROW = 3;
export const KEY_MARGIN = verticalScale(10);

export const KEY_ROW_WIDTH = Math.ceil(
  (KEY_SIZE + KEY_MARGIN * 2) * KEYS_PER_ROW,
);

export const keyStyles = StyleSheet.create({
  key: {
    width: KEY_SIZE,
    height: KEY_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    margin: KEY_MARGIN,
  },
  keyBorder: {
    borderRadius: 999,
    borderColor: Color.WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  keyText: {
    color: Color.WHITE,
    fontSize: verticalScale(24),
    fontWeight: '600',
  },
});
