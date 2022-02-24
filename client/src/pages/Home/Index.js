import React from 'react';
import Header from '../../components/Header';
import AddStudent from '../addStudent/AddStudent';
import Display from '../displaystudent/Display';
import Sidebar from '../../components/Sidebar';
import Styles from './Styles.css';
import { Card, CardBody, Col, Row } from 'reactstrap';
function Index() {
  return (
    <div className="container-fluid" style={{ overflow: 'hidden' }}>
      <Row className="g-0">
        <Col md={12}>
          <Header />
        </Col>
      </Row>
      <div className="row">
        <Row className="g-0">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-8" style={{ backgroundColor: '#F0EDE8' }}>
            <Card className="shadow border-0  text-white text-center p-0  bg-transparent">
              <CardBody>
                <Display />
              </CardBody>
            </Card>
          </div>
          <div className="col-2 " style={{ backgroundColor: '#F0EDE8' }}>
            <AddStudent />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Index;
