import { Row, Col, Card, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Statistics = () => {
  const [statistics, setStatistics] = useState({
    totalUsers: 0,
    totalTransactions: 0,
    totalAccounts: 0,
  });

  // Simulate fetching data from an API
  useEffect(() => {
    setStatistics({
      totalUsers: 100,
      totalTransactions: 200,
      totalAccounts: 150,
    });
  }, []);

  return (
    <Container>
      <Row className="mb-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>{statistics.totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Transactions</Card.Title>
              <Card.Text>{statistics.totalTransactions}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Accounts</Card.Title>
              <Card.Text>{statistics.totalAccounts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Statistics;
