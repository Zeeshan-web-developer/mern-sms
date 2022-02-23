import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../components/Pagination';
import DisplayHeader from '../../components/DisplayHeader';

import Students from '../../components/Student';
function Display() {
  // const users = useSelector((state) => state.students);
  // const [pageNumber, setPageNumber] = useState(0);
  // const userPerPage = 7;
  // const pageVisted = pageNumber * userPerPage;
  // const pageCount = Math.ceil(users.length / userPerPage);

  // useEffect(() => {
  //   fetchData();
  // }, []);
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
          <h2>display here</h2>
        </table>
      </div>
      {/* <Pagination pageCount={pageCount} PageChange={PageChange} /> */}
    </>
  );
}

export default Display;
