import axios from 'axios';
export const instance = axios.create({
  baseURL: 'http://localhost:3006',
});
export default instance;
