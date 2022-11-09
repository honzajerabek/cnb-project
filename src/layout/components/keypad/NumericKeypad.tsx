import { StyleSheet, View } from 'react-native';
import { Key } from 'src/layout/components/keypad/components/Key';
import {
  KEY_ROW_WIDTH,
  keyStyles,
} from 'src/layout/components/keypad/components/styles';
import { getNumberFormatSettings } from 'react-native-localize';
import { Fragment } from 'react';

const DECIMAL_SEPARATOR = getNumberFormatSettings().decimalSeparator;
const KEYPAD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const NumericKeypad = ({ value = '', onChange }: Props) => {
  const isValueEmpty = value.length === 0;
  const hasDecimalSeparator = value.includes(DECIMAL_SEPARATOR);

  const onKeyPress = (key: string) => () => {
    onChange(`${value}${key}`);
  };

  const onDelete = () => {
    const formattedValues = value.slice(0, -1);

    onChange(formattedValues);
  };

  const isLastKey = (keyIndex: number) => keyIndex === KEYPAD_KEYS.length - 1;

  return (
    <View style={styles.container}>
      {KEYPAD_KEYS.map((key, keyIndex) => (
        <Fragment key={key}>
          {isLastKey(keyIndex) && (
            <View>
              {!hasDecimalSeparator ? (
                <Key onPress={onKeyPress(DECIMAL_SEPARATOR)}>
                  {DECIMAL_SEPARATOR}
                </Key>
              ) : (
                <View style={keyStyles.key} />
              )}
            </View>
          )}
          <Key onPress={onKeyPress(key)}>{key}</Key>
          {isLastKey(keyIndex) && (
            <View>
              {!isValueEmpty ? (
                <Key onPress={onDelete}>{'<'}</Key>
              ) : (
                <View style={keyStyles.key} />
              )}
            </View>
          )}
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: KEY_ROW_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
