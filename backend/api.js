/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 02:54:00
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 03:01:44
 */
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:3006",
});
export default instance;
