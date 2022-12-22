import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';

import appReducer from './index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
