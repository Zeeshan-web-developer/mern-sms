import {
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from './types';

export const getAllUsers = (history) => {
  return {
    type: GET_ALL_USERS,
    payload: { history },
  };
};

export const getAllUsersSuccess = (users) => {
  console.log('getAllUsersSuccess', users);
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload: users,
  };
};
export const getAllUsersFailed = (error) => {
  return {
    type: GET_ALL_USERS_FAILURE,
    payload: error,
  };
};
