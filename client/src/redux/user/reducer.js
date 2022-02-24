import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from './types';
const initialState = {
  error: null,
  loading: false,
  users: null,
};

const user_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case GET_ALL_USERS_SUCCESS:
      console.log('GET_ALL_USERS_SUCCESS', action.payload);
      state = {
        ...state,
        loading: false,
        users: action.payload,
      };
      break;
    case GET_ALL_USERS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default user_Reducer;
