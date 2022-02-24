import { post, get } from './axios_helper';
import * as url from './url_helper';

// Login Method
export const loginApi = (data) => post(url.LOGIN_USER, data);
export const getAllUsers = () => get(url.GET_ALL_USERS);
