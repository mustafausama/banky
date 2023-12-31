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
                  
                </h1>
                <h3 className="mb-4">
                  Banking in Your Palm: Your Finances, Your Way
                </h3>
                <p className="mb-4">
                  Empower your financial journey with cutting-edge banking
                  solutions. Experience seamless transactions, robust security,
                  and personalized services tailored to meet your unique needs.
                  Join us on a path to financial success and discover a world of
                  convenience, innovation, and trust with Banky.
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
