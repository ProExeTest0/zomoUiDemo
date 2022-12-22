import {Image, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {ADD_USER, CLEAR_DATA} from '../actions/type';
import appReducer from '../reducer';
import {persistStore} from 'redux-persist';

import {styles} from '../screens/dashboard/styles';
import {colors} from './colors';
import {hp, wp} from './constants';
import {icons, images} from './iconConstants';

export const CommonAppBar = ({}) => {
  dispatch = useDispatch();

  const clearAsyncStorage = async () => {
    dispatch({type: CLEAR_DATA});
  };

  return (
    <View style={styles.appBarBox}>
      <View style={styles.appItemRow}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
          style={styles.profileImg}
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.userNameText}>Arnab's studio</Text>
          <View style={styles.linkRow}>
            <View style={styles.linkBackground}>
              <Text style={styles.linkText}>zomo.fit/jevingondaliya</Text>
            </View>
            <Image style={styles.copyIcon} source={icons.copyIcon} />
          </View>
        </View>
        <Text
          onPress={clearAsyncStorage}
          style={{
            color: colors.white,
            alignSelf: 'flex-end',
            position: 'absolute',
            right: 5,
          }}>
          LogOut
        </Text>
      </View>
    </View>
  );
};

export const Common = ({marginRight, colorTop, colorBottom, icon}) => {
  return (
    <LinearGradient
      style={[styles.multiCardBox, {marginRight}]}
      start={{x: 0.12, y: 0.5}}
      end={{x: 0.6, y: 0}}
      colors={[colorTop, colorBottom]}>
      <Image style={styles.cardItemImage} source={icon} />

      <View
        style={[
          styles.rowFlex,
          {
            paddingBottom: hp(15),
            marginTop: hp(10),
          },
        ]}>
        <Text style={styles.cardText}>Start quick class</Text>
        <View style={styles.subIconBox}>
          <Image style={styles.cardItemSubImage} source={icons.rightIcon} />
        </View>
      </View>
    </LinearGradient>
  );
};

export const CommomCard = ({visble, text, deletePress, updatePress}) => {
  return (
    <>
      {visble && (
        <Text style={[styles.textBox, {fontSize: 12}]}>
          Start in next 60 mins
        </Text>
      )}
      <View style={styles.commonCardBox}>
        <LinearGradient
          start={{x: 0.12, y: 0.5}}
          end={{x: 0.6, y: 0}}
          style={styles.postAmountBox}
          colors={[colors.yellowF69A14, colors.yellow]}>
          <Text style={{fontSize: 14, fontWeight: '900', color: colors.black}}>
            $20
          </Text>
        </LinearGradient>

        <Image style={styles.postImage} source={images.postImage} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.postMainText}>{text}</Text>
          <View style={[styles.rowFlex, {marginTop: 5}]}>
            <Image
              style={{
                height: hp(16),
                width: wp(16),
                tintColor: colors.grey92A7A9,
              }}
              source={icons.calendarIcon}></Image>
            <Text style={styles.postSubText}>
              Dec 24 2021,14:00 - 16:00 | 👥 10
            </Text>
          </View>
        </View>

        <Text onPress={updatePress} style={{color: colors.red}}>
          Update
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onPress={deletePress}>
          <Image
            style={{tintColor: colors.white, height: hp(22), width: wp(22)}}
            source={icons.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
