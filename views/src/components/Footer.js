import { Container, Row, Col } from 'react-bootstrap';
import Icon from './Icon';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer className="text-white bg-dark">
      <Container className="py-4 py-lg-5">
        <Row className="justify-content-center">
          <Col
            sm={4}
            md={3}
            className="text-center text-lg-start d-flex flex-column item"
          >
            <h3 className="fs-6 text-white">Services</h3>
            <ul className="list-unstyled">
              <li>
                <a className="link-light" href="#">
                  Web design
                </a>
              </li>
              <li>
                <a className="link-light" href="#">
                  Development
                </a>
              </li>
              <li>
                <a className="link-light" href="#">
                  Hosting
                </a>
              </li>
            </ul>
          </Col>
          <Col
            sm={4}
            md={3}
            className="text-center text-lg-start d-flex flex-column item"
          >
            <h3 className="fs-6 text-white">About</h3>
            <ul className="list-unstyled">
              <li>
                <a className="link-light" href="#">
                  Company
                </a>
              </li>
              <li>
                <a className="link-light" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="link-light" href="#">
                  Legacy
                </a>
              </li>
            </ul>
          </Col>
          <Col
            sm={4}
            md={3}
            className="text-center text-lg-start d-flex flex-column item"
          >
            <h3 className="fs-6 text-white">Careers</h3>
            <ul className="list-unstyled">
              <li>
                <a className="link-light" href="#">
                  Job openings
                </a>
              </li>
              <li>
                <a className="link-light" href="#">
                  Employee success
                </a>
              </li>
              <li>
                <a className="link-light" href="#">
                  Benefits
                </a>
              </li>
            </ul>
          </Col>
          <Col
            lg={3}
            className="text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social"
          >
            <div className="fw-bold d-flex align-items-center mb-2">
              <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                <Icon />
              </span>
              <span>Banky</span>
            </div>
            
          </Col>
        </Row>
        <hr />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0">Copyright © 2023 Banky</p>
          {/* Social media icons can be added here */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
