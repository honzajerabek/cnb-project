import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Color } from 'src/layout/colors';

export const CenterLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Color.BLACK_OLIVE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
