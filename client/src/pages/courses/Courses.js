import React from 'react';
import { Row } from 'reactstrap';
import SingleCours from '../../components/SingleCours';
function Courses() {
  return (
    <div>
      <h2 className="text-center mt-4">All Courses</h2>
      <Row className="mt-3">
        <SingleCours />
      </Row>
    </div>
  );
}

export default Courses;
