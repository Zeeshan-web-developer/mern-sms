/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 03:28:57
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 03:28:59
 */
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:3006",
});
export default instance;
