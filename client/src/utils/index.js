
import axios from "../api/index";
import store from "../redux/store";
import { positions } from "react-alert";
import { setStudents } from "../redux/actions";
export const fetchData = async () => {
  try {
    const reponse = await axios.get("/students");
    store.dispatch(setStudents(reponse.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteStudent = async (id) => {
  try {
    console.log("id", id);
    await axios.delete(`/students/${id}`);
    fetchData();
  } catch (err) {
    console.log("cannot delete", err);
  }
};

export const onSubmit = async (data) => {
  const selected = new Date(data.dob).getFullYear();
  const now = new Date().getFullYear();
  let age = now - selected;
  data["age"] = age;
  data["id"] = Math.round(Math.random() * 100);
  try {
    await axios.post("students", data);
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
