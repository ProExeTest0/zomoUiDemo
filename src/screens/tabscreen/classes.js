import {firebase} from '@react-native-firebase/firestore';
import React, {Component, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {colors} from '../../helpers/colors';
import {CommomCard} from '../../helpers/globleFunction';

const SecondRoute = () => {
  //   const list = [];
  const [listData, setListData] = useState([]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    firebase
      .firestore()
      .collection('user')
      .get()
      .then(snapshot => {
        let data = [];
        snapshot._docs.map(i => {
          let obj = {
            ...i,
            id: i.id,
          };
          data.push(obj);
          setListData(data);
        });
      })
      .catch(e => {
        console.log('eeeeee', e);
      });
  };

  const DeleteItem = id => {
    firebase
      .firestore()
      .collection('user')
      .doc(id)
      .delete()
      .then(() => {
        loadUserData();
      })
      .catch(error => {
        console.error('error==>> ', error);
      });
  };

  const UpdateItem = id => {
    firebase
      .firestore()
      .collection('user')
      .doc(id)
      .update({name: 'new user'})
      .then(() => {
        loadUserData();
      })
      .catch(error => {
        console.error('error==>> ', error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <FlatList
        data={listData}
        renderItem={({item}) => {
          return (
            <CommomCard
              visble={false}
              text={item._data.name}
              updatePress={() => UpdateItem(item.id)}
              deletePress={() => DeleteItem(item.id)}
            />
          );
        }}
      />
    </View>
  );
};
export default SecondRoute;
