import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'src/layout/components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FormattedMessage } from 'react-intl';

type Props = {
  onRetryPress: () => void;
};

export const FetchingError = ({ onRetryPress }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}
    >
      <View style={styles.messageContainer}>
        <Text style={styles.header}>Oops! 😟</Text>
        <Text style={styles.message}>
          <FormattedMessage id="error.fetching" />
        </Text>
      </View>
      <Button onPress={onRetryPress}>
        <FormattedMessage id="retry" />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 36,
  },
});
