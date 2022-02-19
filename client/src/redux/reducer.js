/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 08:13:59
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 21:48:51
 */
import * as actionTypes from "./types";
const initialState = {
  students: [],
  updateid: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case actionTypes.UPDATEID:
      return {
        ...state,
        updateid: action.payload,
      };

    default:
      return state;
  }
};
export default rootReducer;
