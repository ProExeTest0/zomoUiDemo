import {ADD_USER, UPDATE_USER} from './type';

export const addUser = data => async dispatch => {
  console.log('Data at action :: ', data);
  dispatch({type: ADD_USER, payload: data});
};

export const updateUser = data => async dispatch => {
  dispatch({type: ADD_USER, payload: data});
};
