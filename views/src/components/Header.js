import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import banking from '../images/banking.jpg';

const Header = () => {
  return (
    <section className="pb-5">
      <div
        className="border border-0 d-flex flex-column justify-content-center align-items-center p-4 py-5"
        style={{
          background: `linear-gradient(rgba(0,123,255,0.2), rgba(0,123,255,0.2) 100%), url(${banking}) center / cover, #ffffff`,
          height: '500px',
        }}
      >
        <Container>
          <Row style={{ color: 'rgb(255,255,255)' }}>
            <Col
              md={10}
              xl={8}
              className="text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center"
            >
              <div>
                <h1 className="text-uppercase fw-bold mb-3">
                  Welcome to Banky
                  <br />
                  fringi dictum, augue purus
                </h1>
                <p className="mb-4">
                  Etiam a rutrum, mauris lectus aptent convallis. Fusce
                  vulputate aliquam, sagittis odio metus. Nulla porttitor
                  vivamus viverra laoreet, aliquam netus.
                </p>
                <Button
                  variant="primary"
                  className="fs-5 me-2 py-2 px-4"
                  type="button"
                >
                  Join
                </Button>
                <Button
                  variant="light"
                  className="fs-5 py-2 px-4"
                  type="button"
                >
                  Dashboard
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Header;
