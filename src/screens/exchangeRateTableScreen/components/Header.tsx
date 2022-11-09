import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import { Color } from 'src/layout/colors';
import { Logo } from 'src/layout/components/Logo';
import { StyleSheet, Text, ViewProps, ViewStyle } from 'react-native';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  onLayout: ViewProps['onLayout'];
  lastUpdateAt: Date | undefined;
  style: AnimatedStyleProp<ViewStyle>;
};

export const Header = ({ lastUpdateAt, style, onLayout }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        styles.container,
        {
          paddingTop: top + 10,
        },
        style,
      ]}
    >
      <Logo />
      {!!lastUpdateAt && (
        <Text style={styles.lastUpdateLabel}>
          <FormattedMessage
            id="header.valid-for"
            defaultMessage="Valid for: {updatedAt}"
            values={{
              updatedAt: <FormattedDate value={lastUpdateAt} />,
            }}
          />
        </Text>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: Color.WHITE,
  },
  lastUpdateLabel: {
    textAlign: 'center',
  },
});
