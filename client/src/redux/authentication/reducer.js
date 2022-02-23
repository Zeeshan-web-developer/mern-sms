import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './types';
const initialState = {
  error: null,
  loading: false,
  user: null,
};

const login_reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case LOGIN_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload,
      };
      break;
    case LOGIN_USER_FAILURE:
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

export default login_reducer;
