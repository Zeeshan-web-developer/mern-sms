import React from 'react';
import { Card, CardBody, Container, Col, Row, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/images/login.png';
import Styles from './login.module.css';
function Login() {
  const history = useHistory();
  const handleValidSubmit = (event, errors, values) => {
    console.log(values);
    history.push('/home');
  };
  return (
    <Container className={Styles.container}>
      <Card className={Styles.card}>
        <CardBody>
          <Row>
            <Col md="6" className="d-none d-md-block d-lg-block .d-xl-none">
              <div className={Styles.image}>
                <img src={logo} alt="logo" className={Styles.logo} />
                <span className={Styles.create__account}>Create Account</span>
              </div>
            </Col>
            <Col md="6" className={Styles.login__form}>
              <h4 className={`${Styles.login__header} mt-5 text-center`}>
                Log In
              </h4>
              <AvForm onValidSubmit={handleValidSubmit}>
                <Row className="mt-5">
                  <AvField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    errorMessage="Email is required"
                    validate={{
                      required: { value: true },
                      pattern: {
                        value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
                        errorMessage: 'Invalid email address',
                      },
                    }}
                  />
                </Row>
                <Row className="mt-3">
                  <AvField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </Row>
                <div className="mt-5">
                  <Button color="warning" type="submit">
                    Login
                  </Button>
                </div>
              </AvForm>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Login;
