import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {CLEAR_DATA} from '../actions/type';
import userReducers from './userReducers';

const appReducer = combineReducers({
  user: userReducers,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_DATA) {
    AsyncStorage.removeItem('root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;
