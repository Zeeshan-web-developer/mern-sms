import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import DisplayHeader from '../../components/DisplayHeader';
import Students from '../../components/Student';
import { getAllUsers } from '../../redux/actions';
function Display() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const users = useSelector((state) => state.students);
  // const [pageNumber, setPageNumber] = useState(0);
  // const userPerPage = 7;
  // const pageVisted = pageNumber * userPerPage;
  // const pageCount = Math.ceil(users.length / userPerPage);

  useEffect(() => {
    dispatch(getAllUsers(history));
  }, []);
  // const PageChange = ({ selected }) => {
  //   setPageNumber(selected);
  // };
  // const displayStudents = () => (
  //   <Students users={users} pageVisted={pageVisted} userPerPage={userPerPage} />
  // );

  return (
    <>
      <div>
        <table className="table table-bordered">
          <DisplayHeader />
          {/* <tbody>{displayStudents()}</tbody> */}
        </table>
      </div>
      {/* <Pagination pageCount={pageCount} PageChange={PageChange} /> */}
    </>
  );
}

export default Display;
