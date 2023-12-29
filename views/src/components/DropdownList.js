import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

// Dummy JSON data for testing
const dummyData = [
  {
    title: 'Accordion Item 1',
    content:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.',
  }
];

const DropdownList = () => {
  return (
    <section className="py-4 py-xl-5">
      <Container className="h-100">
        <Row className="h-100">
          <Col>
            <h1 style={{ textAlign: 'center' }}>Last Transactions</h1>
            <Accordion id="accordion-1" className="accordion">
              {dummyData.map((item, index) => (
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
