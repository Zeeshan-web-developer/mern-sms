import { all } from 'redux-saga/effects';
import LoginSaga from './authentication/saga';

export default function* rootSaga() {
  yield all([LoginSaga()]);
}
