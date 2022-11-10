import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ReactNode } from 'react';
import { Color } from 'src/layout/colors';

export type Props = {
  onPress: () => void;
  children: ReactNode;
};

export const Button = ({ onPress, children }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 9999,
    backgroundColor: Color.BLUE,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
