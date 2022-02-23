import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_USER } from './types';
import { loginUserSuccess, loginUserFailure } from './actions';
import { loginApi } from '../../ApiHelpers/api_helper';

function* login({ payload: { userData, history } }) {
  try {
    const obj = {
      email: userData.email,
      password: userData.password,
    };
    const response = yield call(loginApi, obj);
    if (response) {
      yield put(loginUserSuccess(response.data));
      if (response?.user?.role === 'admin') {
        console.log(response.user.role);
        history.push('/home');
      } else {
        console.log(response.user.role, history);
        history.push('/courses');
      }
    }
  } catch (error) {
    yield put(loginUserFailure(error.response.data.message));
    console.log(error);
  }
}

function* LoginSaga() {
  yield takeEvery(LOGIN_USER, login);
}

export default LoginSaga;
