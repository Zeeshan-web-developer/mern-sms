import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import Styles from './styles/SingleCourse.module.css';
import AddToCart from '../assets/icons/addtocart.png';
import Dollar from '../assets/icons/dollar.png';
function Courses() {
  let courses = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {courses.map((course, inde) => {
        return (
          <Col md="4">
            <Card>
              <CardBody>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Cardcap"
                  style={{ width: '100%' }}
                />
                <div className={Styles.flex__container}>
                  <span>1278 students</span>
                  <span>23h 50m</span>
                </div>
                <h6>Adobe Premiere Pro CC – Essentials Training Course</h6>
                <div className={Styles.flex__container}>
                  <span>
                    <img src={Dollar} alt="Dollar" />
                    3499
                  </span>
                  <span className={Styles.flex__container}>
                    <img src={AddToCart} alt="addtocart" />
                    Add To Cart
                  </span>
                </div>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default Courses;
