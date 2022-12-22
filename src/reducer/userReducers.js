import {ADD_USER, UPDATE_USER, ALL_DATA, SET_USER_DATA} from '../actions/type';

const INITIAL_STATE = {
  userName: [],
  userList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, userName: action.payload};
    case UPDATE_USER:
      console.log('Action.payload :: ', action?.payload);
      return {...state, data: action.payload};
    case ALL_DATA:
      console.log('Action.payload :: ', action?.payload);
      return {...state, userList: action.payload};
    case SET_USER_DATA:
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};
