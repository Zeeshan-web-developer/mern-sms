/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 08:13:50
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 21:46:33
 */
import * as actionTypes from "./types";
export const setStudents = (payload) => ({
  type: actionTypes.SET_STUDENTS,
  payload,
});
export const updateId = (id) => ({
  type: actionTypes.UPDATEID,
  id,
});
