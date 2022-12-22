import {Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = val => widthPercentageToDP(getWidthPr(val));

export const hp = val => heightPercentageToDP(getHightPr(val));

export const getHightPr = val => {
  const abc = val
    ? (val / Dimensions.get('screen').height) * 100
    : Dimensions.get('screen').height;
  return abc?.toFixed(2);
};

export const getWidthPr = val => {
  const abc = val
    ? (val / Dimensions.get('screen').width) * 100
    : Dimensions.get('screen').width;
  return abc?.toFixed(2);
};
