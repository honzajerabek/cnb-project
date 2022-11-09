import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

type Props = {
  onPress: () => void;
  label: ReactNode;
  rightContent?: ReactNode;
};

export const Item = ({ onPress, label, rightContent }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {rightContent}
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
});
