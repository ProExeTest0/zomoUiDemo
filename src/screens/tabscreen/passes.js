//import liraries
import moment from 'moment';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SET_USER_DATA} from '../../actions/type';

import {CommonButton} from '../../components/common/button/commonButton';
import {colors} from '../../helpers/colors';
import {hp} from '../../helpers/constants';
import {images} from '../../helpers/iconConstants';
import {navigate, navigationRef} from '../../helpers/navigationService';
import {styles} from './styles';

const Passes = ({navigator}) => {
  const {userName} = useSelector(state => state.user);
  const [data, setData] = useState(true);

  dispatch = useDispatch();

  console.log('userName', userName);

  useEffect(() => {
    dispatch({type: SET_USER_DATA, payload: userName});
  }, []);

  const onPress = () => {
    setData(!data);
  };

  const getTime = new Date().getTime();

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <View style={styles.selctedBox}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={onPress}
            disabled={data}
            style={[
              styles.subSelectedBox,
              data && {backgroundColor: colors.green},
            ]}>
            <Text
              style={[
                styles.subSelectedBoxText,
                !data && {color: colors.white},
              ]}>
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPress}
            disabled={!data}
            style={[
              styles.subSelectedBox,
              !data && {backgroundColor: colors.green},
            ]}>
            <Text
              style={[
                styles.subSelectedBoxText,
                data && {color: colors.white},
              ]}>
              Inactive
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {data && (
        <FlatList
          data={userName}
          renderItem={({item, index}) => {
            if (item.newTime - getTime >= 0) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log('item', item);
                    navigate('EditMembership', {
                      cardData: item,
                      flag: true,
                      index: index,
                    });
                  }}>
                  <ImageBackground
                    style={styles.imageBox}
                    source={images.cardBakground}
                    resizeMode="contain">
                    <View style={styles.mainCardHeader}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={styles.text1}>{item.inscrement}</Text>
                        <Text style={styles.text2}>Classes</Text>
                      </View>
                      <View style={styles.columnDivider} />
                      <View style={{alignSelf: 'center'}}>
                        <Text style={styles.text2}>{item.description}</Text>
                        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
                          <View style={styles.amountBox}>
                            <Text style={styles.amountText}>
                              ${item.amountInscrement}
                            </Text>
                          </View>
                          <Text style={styles.subText}> 🔄 Recurring</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flex: 0.5}}>
                      <View style={styles.bottomHeader}>
                        <Text style={styles.text3}>Validity</Text>
                        <Text style={styles.text4}>30 Days</Text>
                        <View
                          style={[
                            styles.columnDivider,
                            {height: hp(18), marginRight: hp(10)},
                          ]}
                        />
                        <View style={styles.countBox}>
                          <Text style={styles.text5}>👥 3 Enrolled</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }
          }}
        />
      )}

      {!data && (
        <>
          {/* <Image
            resizeMode="contain"
            style={styles.emptyBox}
            source={images.creditCard}></Image>
          <Text style={styles.emptyText}>No Active passes available</Text> */}

          <FlatList
            data={userName}
            renderItem={({item, index}) => {
              if (item.newTime - getTime >= 0 === false) {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('item', item);
                      navigate('EditMembership', {
                        cardData: item,
                        flag: true,
                        index: index,
                      });
                    }}>
                    <ImageBackground
                      style={styles.imageBox}
                      source={images.cardBakground}
                      resizeMode="contain">
                      <View style={styles.mainCardHeader}>
                        <View style={{alignSelf: 'center'}}>
                          <Text style={styles.text1}>{item.inscrement}</Text>
                          <Text style={styles.text2}>Classes</Text>
                        </View>
                        <View style={styles.columnDivider} />
                        <View style={{alignSelf: 'center'}}>
                          <Text style={styles.text2}>{item.description}</Text>
                          <View
                            style={{flexDirection: 'row', marginTop: hp(2)}}>
                            <View style={styles.amountBox}>
                              <Text style={styles.amountText}>
                                ${item.amountInscrement}
                              </Text>
                            </View>
                            <Text style={styles.subText}> 🔄 Recurring</Text>
                          </View>
                        </View>
                      </View>
                      <View style={{flex: 0.5}}>
                        <View style={styles.bottomHeader}>
                          <Text style={styles.text3}>Validity</Text>
                          <Text style={styles.text4}>30 Days</Text>
                          <View
                            style={[
                              styles.columnDivider,
                              {height: hp(18), marginRight: hp(10)},
                            ]}
                          />
                          <View style={styles.countBox}>
                            <Text style={styles.text5}>👥 3 Enrolled</Text>
                          </View>
                        </View>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              }
            }}
          />
        </>
      )}

      <View style={{marginBottom: hp(20)}}>
        <CommonButton
          onPress={() =>
            navigate('EditMembership', {cardData: '', flag: false})
          }
          fontSize={16}
          paddingHorizontal={55}
          paddingVertical={12}
          text={'CREAT A NEW PASS'}
          startColor={colors.green47D2A0}
          endColor={colors.greenBCFE28}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default Passes;
