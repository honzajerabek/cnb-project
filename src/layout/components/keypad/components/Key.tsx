import { ReactNode } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { keyStyles } from './styles';
import { Color } from 'src/layout/colors';
import { alpha } from 'src/utils/colors/alpha';

type Props = {
  children: ReactNode;
  onPress: () => void;
};

export const Key = ({ children, onPress }: Props) => (
  <TouchableHighlight
    underlayColor={alpha(Color.WHITE, 0.8)}
    onPress={() => onPress()}
    style={[keyStyles.key, keyStyles.keyBorder]}
  >
    <Text style={keyStyles.keyText}>{children}</Text>
  </TouchableHighlight>
);
