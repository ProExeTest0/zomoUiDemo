import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../helpers/colors';

export const CommonButton = ({
  onPress,
  text,
  marginBottom,
  fontSize,
  paddingHorizontal,
  paddingVertical,
  startColor,
  endColor,
  disabled,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{marginBottom: marginBottom, marginTop: marginTop}}
      onPress={onPress}>
      <LinearGradient
        start={{x: 0.12, y: 0.5}}
        end={{x: 0.6, y: 0}}
        style={{
          borderRadius: 12,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        // colors={[colors.green47D2A0, colors.greenBCFE28]}
        colors={[startColor, endColor]}>
        <Text
          style={{color: colors.black, fontSize: fontSize, fontWeight: '600'}}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
