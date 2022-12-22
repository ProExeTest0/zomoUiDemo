//import liraries
import React, {Component, useEffect} from 'react';
import {Provider} from 'react-redux';
import Stacknav from './src/navigation/Stacknav';
import {store} from './src/reducer/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

let persistor = persistStore(store);

const App = () => {
  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('cxvxcvcxvcxvxcv', token);
      });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stacknav />
      </PersistGate>
    </Provider>
  );
};

export default App;
