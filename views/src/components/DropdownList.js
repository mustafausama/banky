import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

// Dummy JSON data for testing


const DropdownList = ({ title, data }) => {
  return (
    <section className="py-4 py-xl-5">
      <Container className="h-100">
        <Row className="h-100">
          <Col>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <Accordion id="accordion-1" className="accordion">
              {data.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DropdownList;
