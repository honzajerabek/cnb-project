import { StyleSheet, View } from 'react-native';
import { Color } from 'src/layout/colors';
import { memo } from 'react';

export const ItemSeparator = memo(() => {
  return <View style={styles.container} />;
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.GRAY,
    height: 1,
  },
});
