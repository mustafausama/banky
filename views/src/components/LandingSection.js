import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import banking from '../images/banking2.jpg';

// eslint jsx-a11y/anchor-is-valid: 0
const LandingSection = () => {
  return (
    <section>
      <div
        style={{
          height: '600px',
          background: `url(${banking}) center / cover no-repeat`,
        }}
      ></div>
      <Container className="h-100 position-relative" style={{ top: '-50px' }}>
        <Row className="gy-5 gy-lg-0 row-cols-1 row-cols-md-2 row-cols-lg-3">
          <Col>
            <Card>
              <Card.Body className="pt-5 p-4">
                <div
                  className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center position-absolute mb-3 bs-icon lg"
                  style={{ top: '-30px' }}
                >
                  <svg
                    className="bi bi-bell"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                  </svg>
                </div>
                <h4 className="card-title">Transactions</h4>
                <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                <p className="card-text">
                  Effortlessly manage your finances with swift payments,
                  seamless fund transfers, and real-time updates—all at your
                  fingertips.
                </p>
              </Card.Body>
              <Card.Footer className="p-4 py-3">
                <a href="/">
                  Learn more{' '}
                  <svg
                    className="bi bi-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="pt-5 p-4">
                <div
                  className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center position-absolute mb-3 bs-icon lg"
                  style={{ top: '-30px' }}
                >
                  <svg
                    className="bi bi-bezier"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                    ></path>
                    <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                  </svg>
                </div>
                <h4 className="card-title">Accounts</h4>
                <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                <p className="card-text">
                  Simplify your banking. Swift access, seamless transactions,
                  real-time updates—all at your fingertips for effortless
                  account management.
                </p>
              </Card.Body>
              <Card.Footer className="p-4 py-3">
                <a href="/">
                  Learn more{' '}
                  <svg
                    className="bi bi-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="pt-5 p-4">
                <div
                  className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center position-absolute mb-3 bs-icon lg"
                  style={{ top: '-30px' }}
                >
                  <svg
                    className="bi bi-flag"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.606-.229 2.415-.478A19.587 19.587 0 0 0 14 7.655V1.221z"></path>
                  </svg>
                </div>
                <h4 className="card-title">Cards</h4>
                <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                <p className="card-text">
                  Simplify your card management. Swift access, seamless
                  transactions, real-time updates—all at your fingertips for
                  effortless card control.
                </p>
              </Card.Body>
              <Card.Footer className="p-4 py-3">
                <a href="/">
                  Learn more{' '}
                  <svg
                    className="bi bi-arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingSection;
