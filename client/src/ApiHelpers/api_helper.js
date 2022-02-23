import { post } from './axios_helper';
import * as url from './url_helper';

// Login Method
export const loginApi = (data) => post(url.LOGIN_USER, data);
