import { combineReducers } from 'redux';
import Login from './authentication/reducer';

const rootReducer = combineReducers({
  Login,
});

export default rootReducer;
