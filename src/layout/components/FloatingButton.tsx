import { Button, Props as ButtonProps } from 'src/layout/components/Button';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const FloatingButton = ({ onPress, children }: ButtonProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: bottom + 16 }]}>
      <Button onPress={onPress}>{children}</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
    paddingHorizontal: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
