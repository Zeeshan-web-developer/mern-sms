
import React from "react";
import { Link } from "react-router-dom";
import { deleteStudent } from "../utils/index";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useAlert } from "react-alert";
function Students(props) {
  const alert = useAlert();
  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteStudent(id);
            alert.success("Deleted Sucessfully");
          },
        },
        {
          label: "No",
          onClick: () => {
            alert.error("Operation Cancelled");
          },
        },
      ],
    });
  };

  return (
    props.users &&
    props.users
      .slice(props.pageVisted, props.pageVisted + props.userPerPage)
      .map((users) => (
        <tr key={users.id}>
          <td className="text-upper">{users.name}</td>
          <td>{users.dob}</td>
          {users.age <= 10 ? (
            <td style={{ color: "red" }}>{users.age}</td>
          ) : (
            <td>{users.age}</td>
          )}
          <td className="text-upper">{users.gender}</td>
          <td>
            <Link style={{ marginRight: "2rem" }} to={`update/${users.id}`}>
              Edit
            </Link>
            <Link to="#" onClick={() => submit(users.id)}>
              Delete
            </Link>
          </td>
        </tr>
      ))
  );
}

export default Students;
