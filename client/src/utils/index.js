import axios from '../api/axios';
import store from '../redux/store';
import { positions } from 'react-alert';
import { setStudents } from '../redux/actions';
export const fetchData = async () => {
  try {
    console.log('fetching data');
    const reponse = await axios.get('/users');
    store.dispatch(setStudents(reponse.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteStudent = async (id) => {
  try {
    const response = await axios.delete(`/students/${id}`);
    console.log(response);
    fetchData();
    return response;
  } catch (err) {
    console.log('cannot delete', err);
    return err;
  }
};

export const onSubmit = async (data) => {
  const selected = new Date(data.dob).getFullYear();
  const now = new Date().getFullYear();
  let age = now - selected;
  data['age'] = age;
  data['id'] = Math.round(Math.random() * 100);
  try {
    await axios.post('students', data);
    fetchData();
  } catch (err) {
    console.log(err);
  }
};
export const UpdateStudent = async (data) => {
  await axios.put(`/students/${data.id}`, data);
  fetchData();
};

export const validateDate = (value) => {
  const selected = new Date(value).getFullYear();
  const now = new Date().getFullYear();
  return now - selected >= 8;
};

export const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};
