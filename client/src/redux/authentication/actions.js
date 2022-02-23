import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from './types';

export const loginUser = (userData, history) => {
  console.log(userData);
  return {
    type: LOGIN_USER,
    payload: { userData, history },
  };
};

export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};
export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};
