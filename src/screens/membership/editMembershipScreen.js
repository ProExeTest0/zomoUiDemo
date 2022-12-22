//import liraries
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/firestore';

import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import ReactNativeModal from 'react-native-modal';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_USER} from '../../actions/type';

import {addUser, updateUser} from '../../actions/userAction';
import {CommonButton} from '../../components/common/button/commonButton';
import {colors} from '../../helpers/colors';
import {hp} from '../../helpers/constants';
import {icons} from '../../helpers/iconConstants';
import {goBack} from '../../helpers/navigationService';
import {styles} from './styles';

let addItem = item => {
  database.ref('/items').push({
    name: item,
  });
};

const EditMembership = ({route}) => {
  const {userName} = useSelector(state => state.user);
  const {cardData, index} = route.params;
  const [setcolor, setbgData] = useState(0);
  const [data, setData] = useState(true);
  const [inscrement, incrData] = useState(cardData.inscrement ?? 0);
  const [amountInscrement, incrAmountData] = useState(
    cardData.amountInscrement ?? 0,
  );
  const expData = [7, 14, 30, 45, 60, 75];
  const [isEnabled, setIsEnabled] = useState(cardData.isEnabled ?? false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState('');
  const [borderColor, setBorderColor] = useState(colors.grey92A7A9);
  const [borderColor1, setBorderColor1] = useState(colors.grey92A7A9);
  const [name, setName] = useState(cardData.name);
  const [description, setDescription] = useState(cardData.description);

  const setUserData = async () => {
    // dispatch({type: SIGNOUT_REQUEST});
    firebase
      .firestore()
      .collection('user')
      .doc()
      .set({name: name, description: description, classNo: inscrement})
      .then(ref => {
        console.log('ref', ref.name);
      })
      .catch(error => {
        console.error('error==>> ', error);
      });
  };

  const newTime = new Date().getTime() + 60 * 1000;

  const toggleModal = () => {
    let obj = {
      name: name,
      description: description,
      inscrement: inscrement,
      amountInscrement: amountInscrement,
      newTime: newTime,
    };

    setModalVisible(!isModalVisible);
    dispatch(addUser([...userName, obj]));
  };

  const updateData = () => {
    let updateObj = {
      name: name,
      description: description,
      inscrement: inscrement,
      amountInscrement: amountInscrement,
    };
    userName[index] = updateObj;
    dispatch({type: ADD_USER, payload: userName});
    goBack();
  };

  const onPress = () => {
    setData(!data);
    console.log(data);
  };

  const onbgPress = index => {
    setbgData(index);
  };

  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={goBack}>
          <Image style={styles.appIcon} source={icons.backIcon} />
        </TouchableOpacity>
        <Text style={styles.appBarHeader}>New Membershipe</Text>
      </View>
      <View style={{paddingHorizontal: hp(16)}}>
        <Text style={styles.memberInputText}>Membershipe name</Text>
        <TextInput
          placeholder="Enter name"
          onChangeText={t => {
            setName(t);
          }}
          value={name}
          placeholderTextColor={colors.grey92A7A9}
          style={{...styles.input, borderColor: borderColor1}}
          onFocus={() => setBorderColor1(colors.red)}
          onBlur={() => setBorderColor1(colors.grey92A7A9)}
        />
        <Text style={styles.memberInputText}>Description</Text>
        <TextInput
          value={description}
          multiline={true}
          onChangeText={t => {
            setDescription(t);
          }}
          // value={cardDat}
          numberOfLines={5}
          placeholder="Enter few lines about the membership"
          placeholderTextColor={colors.grey92A7A9}
          style={{...styles.input, borderColor: borderColor}}
          onFocus={() => setBorderColor(colors.red)}
          onBlur={() => setBorderColor(colors.grey92A7A9)}
        />
        <Text onPress={readUserData} style={styles.memberInputText}>
          Membership type
        </Text>
        <View style={styles.selctedBox}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.subSelectedBox,
                data && {backgroundColor: colors.green175245},
              ]}>
              <Text
                style={[
                  styles.subSelectedBoxText,
                  !data && {color: colors.white},
                ]}>
                One-time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.subSelectedBox,
                !data && {backgroundColor: colors.green175245},
              ]}>
              <Text
                style={[
                  styles.subSelectedBoxText,
                  data && {color: colors.white},
                ]}>
                Subscription
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text onPress={setUserData} style={styles.memberInputText}>
          No. of classes
        </Text>
        <View style={styles.noClassBox}>
          <Text style={{color: colors.grey92A7A9, marginLeft: 4}}>
            {inscrement}
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (0 <= inscrement) {
                  incrData(inscrement + 1);
                }
              }}>
              <Image style={styles.updowniconBox} source={icons.upIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (1 <= inscrement) {
                  incrData(inscrement - 1);
                }
              }}>
              <Image style={styles.updowniconBox} source={icons.downIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.memberInputText}>Expires in</Text>
        <View style={[styles.expiresMainBox]}>
          {expData.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onbgPress(index)}
                style={[
                  styles.expiresDataBox,

                  setcolor === index && {backgroundColor: colors.green},
                ]}>
                <Text
                  style={{
                    color: setcolor === index ? colors.black : colors.white,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.membershipBox}>
          <Text style={styles.memberInputText}>Price of membership</Text>
          <View style={styles.noMembershipBox}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.memberText,
                  {color: colors.green, marginRight: 5},
                ]}>
                $
              </Text>
              <Text style={styles.memberText}>{amountInscrement}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  if (0 <= amountInscrement) {
                    incrAmountData(amountInscrement + 1);
                  }
                }}>
                <Image style={styles.updowniconBox} source={icons.upIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (1 <= amountInscrement) {
                    incrAmountData(amountInscrement - 1);
                  }
                }}>
                <Image style={styles.updowniconBox} source={icons.downIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.memberInputText}>Enable 7-day Trial Period</Text>
          <Switch
            trackColor={{false: colors.grey92A7A9, true: colors.green}}
            thumbColor={colors.white}
            onValueChange={toggleSwitch}
            style={{marginTop: hp(10)}}
            value={isEnabled}
          />
        </View>
        <Text
          style={{
            color: colors.grey92A7A9,
            marginTop: hp(5),
            marginBottom: hp(25),
          }}>
          Free customer trial 7 days. Automatically charges afterwards.
        </Text>
      </View>
      <CommonButton
        onPress={
          route.params.flag == true
            ? updateData
            : name != null
            ? toggleModal
            : Snackbar.show({
                text: 'name field is empty',
                duration: Snackbar.LENGTH_SHORT,
              })
        }
        text={route.params.flag === true ? 'UPDATE' : 'CONFIRM & CREATE PASS'}
        marginBottom={hp(30)}
        fontSize={16}
        paddingHorizontal={55}
        paddingVertical={12}
        startColor={data === false ? colors.green47D2A0 : colors.greyC4C4C4}
        endColor={data === false ? colors.greenBCFE28 : colors.greyC4C4C4}
        disabled={data}
      />
      <ReactNativeModal
        isVisible={isModalVisible}
        style={{justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: '#1D2323',
            borderRadius: 20,
          }}>
          <Text style={styles.popIconBox}>🎉</Text>
          <Text style={[styles.memberInputText, {textAlign: 'center'}]}>
            Create successfully!
          </Text>
          <Text style={styles.popupHeaderText}>
            Now available for customers to purchase.
          </Text>
          <CommonButton
            onPress={goBack}
            text={'PERFACT, THANK YOU'}
            paddingHorizontal={10}
            paddingVertical={6}
            fontSize={12}
            marginBottom={20}
            startColor={colors.green47D2A0}
            endColor={colors.greenBCFE28}
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

//make this component available to the ap
export default EditMembership;
