/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 08:13:42
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 08:43:46
 */
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
