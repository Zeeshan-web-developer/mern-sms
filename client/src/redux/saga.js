import { all } from 'redux-saga/effects';
import LoginSaga from './authentication/saga';
import UserSaga from './user/saga';

export default function* rootSaga() {
  yield all([LoginSaga(), UserSaga()]);
}
