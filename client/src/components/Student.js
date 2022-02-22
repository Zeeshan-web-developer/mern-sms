import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../utils/index';
function Students(props) {
  const alert = useAlert();
  const submit = async (id) => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const response = deleteStudent(id);
            response
              .then((res) => {
                if (res.status === 200) {
                  alert.success('Student deleted successfully');
                }
              })
              .catch((err) => {
                alert.error('Cannot delete student');
              });
          },
        },
        {
          label: 'No',
          onClick: () => {
            alert.error('Operation Cancelled');
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
        <tr key={users._id}>
          <td className="text-upper">{users.name}</td>
          <td>{users.dob}</td>
          {users.age <= 10 ? (
            <td style={{ color: 'red' }}>{users.age}</td>
          ) : (
            <td>{users.age}</td>
          )}
          <td className="text-upper">{users.gender}</td>
          <td>
            <Link style={{ marginRight: '2rem' }} to={`update/${users._id}`}>
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
