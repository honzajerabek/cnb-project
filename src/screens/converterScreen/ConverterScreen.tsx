import { StatusBar, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { parseInputNumericValue } from 'src/screens/converterScreen/utils/parseInputNumericValue';
import { Color } from 'src/layout/colors';
import { NumericKeypad } from 'src/layout/components/keypad/NumericKeypad';
import { ConverterInputSegment } from 'src/screens/converterScreen/component/ConverterInputSegment';

export const ConverterScreen = () => {
  const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    setValue(parseInputNumericValue(text));
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.converterContainer}>
          <ConverterInputSegment value={value} onChange={handleChange} />
        </View>
        <View style={styles.keypadContainer}>
          <NumericKeypad value={value} onChange={handleChange} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: Color.BLUE,
  },
  converterContainer: {
    padding: 10,
    backgroundColor: Color.WHITE,
    borderRadius: 10,
  },
  keypadContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
