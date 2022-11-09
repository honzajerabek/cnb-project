import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCallback, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

export const useAnimatedHeader = () => {
  const scrollY = useSharedValue(0);
  const { top: topInset } = useSafeAreaInsets();

  const [headerHeight, setHeaderHeight] = useState<number>(topInset);

  const handleScroll = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, headerHeight * 0.35],
      [1, 0],
    );

    const scale = interpolate(scrollY.value, [0, headerHeight], [1, 0.8]);

    return {
      opacity: opacity,
      transform: scrollY.value >= 0 ? [{ scale: scale }] : undefined,
    };
  }, [headerHeight, scrollY]);

  const handleHeaderLayout = useCallback(
    (event: LayoutChangeEvent) =>
      setHeaderHeight(event.nativeEvent.layout.height),
    [],
  );

  const headerSnapOffset = headerHeight - topInset;

  return {
    handleScroll,
    headerStyle,
    handleHeaderLayout,
    headerSnapOffset,
  };
};
