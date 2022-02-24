import { combineReducers } from 'redux';
import Login from './authentication/reducer';
import User from './user/reducer';
const rootReducer = combineReducers({
  Login,
  User,
});

export default rootReducer;
