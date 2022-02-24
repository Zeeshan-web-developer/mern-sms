import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_USERS } from './types';
import { getAllUsersSuccess, getAllUsersFailed } from './actions';
import { getAllUsers } from '../../ApiHelpers/api_helper';

function* fetchUsers({ payload: { history } }) {
  try {
    const response = yield call(getAllUsers);
    if (response) {
      yield put(getAllUsersSuccess(response));
      console.log('fetchUsers saga', response);
    }
  } catch (error) {
    yield put(getAllUsersFailed(error.response.data.message));
    console.log(error);
  }
}

function* LoginSaga() {
  yield takeEvery(GET_ALL_USERS, fetchUsers);
}

export default LoginSaga;
