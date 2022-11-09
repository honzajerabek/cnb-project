import { Color } from 'src/layout/colors';
import { StyleSheet, Text } from 'react-native';

export const Logo = () => {
  return <Text style={styles.logo}>CNB APP 🤑</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '900',
    paddingVertical: 10,
    color: Color.BLUE,
  },
});
