import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/api';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const redirectToastId = useRef(null);
  const { user, statelessInit } = useAuth();
  useEffect(() => {
    if (user !== null) {
      if (user === '') {
        statelessInit();
        navigate('/login');
        if (!redirectToastId.current)
          redirectToastId.current = toast.info('You are not logged in');
      }
    }
  }, [user, statelessInit, navigate]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/user/user-info', {
          params: { includeAccounts: true },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="px-5">
      <Row className="my-5">
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Card.Title className="display-4">User Profile</Card.Title>
              <Card.Text className="lead">
                <strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}
                <br />
                <strong>Email:</strong> {userInfo.email}
                <br />
                <strong>Address:</strong> {userInfo.address}
                <br />
                <strong>Phone:</strong> {userInfo.phoneNumber}
              </Card.Text>
              <Link to="/profile">
                <Button variant="outline-success" size="lg">
                  Edit Profile
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h1 className="my-4">Bank Accounts</h1>
          <Table striped bordered hover responsive>
            <thead className="thead-light">
              <tr>
                <th>Account Number</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Branch</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.bankAccounts.map((account, index) => (
                <tr key={index}>
                  <td>{account.accountNumber}</td>
                  <td>{account.accountType}</td>
                  <td>${account.balance.toFixed(2)}</td>
                  <td>{account.bank.branchName}</td>
                  <td>
                    <Link to={`/account-details/${account.accountNumber}`}>
                      <Button variant="warning" size="md">
                        View Details
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
