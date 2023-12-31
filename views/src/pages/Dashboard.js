import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Modal,
  Form,
  FormLabel,
  FormSelect,
  FormControl,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../utils/api';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [branches, setBranches] = useState([]);
  const [reload, setReload] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (data) => {
    axios
      .post('/bank-account', data)
      .then((res) => {
        toast.success('Bank account created');
        setShow(false);
        setReload(!reload);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

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
        axios.get('/bank').then((res) => {
          setBranches(res.data);
        });

        const response = await axios.get('/user/user-info', {
          params: { includeAccounts: true },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [reload]);

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
              <div className="d-flex justify-content-between">
                <Link to="/profile">
                  <Button variant="outline-success" size="lg">
                    Edit Profile
                  </Button>
                </Link>
                <Button variant="primary" size="lg" onClick={handleShow}>
                  Create a bank account
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                      <FormLabel column>Account Type:</FormLabel>
                      <FormSelect
                        required
                        name="accountType"
                        {...register('accountType', {
                          required: 'Sender Account is required',
                        })}
                        isInvalid={!!errors.accountType}
                      >
                        <option value="">Select an account</option>
                        <option value="SAVINGS">Savings Account</option>
                        <option value="CURRENT">Current Account</option>
                      </FormSelect>
                      <FormControl.Feedback type="invalid">
                        {errors.accountType?.message}
                      </FormControl.Feedback>
                      <FormLabel column>Branch:</FormLabel>
                      <FormSelect
                        required
                        name="swiftcode"
                        {...register('swiftcode', {
                          required: 'Branch is required',
                        })}
                        isInvalid={!!errors.swiftcode}
                      >
                        <option value="">Select a branch</option>
                        {branches
                          ? branches.map((branch, index) => (
                              <option key={index} value={branch.swiftcode}>
                                {branch.branchName}
                              </option>
                            ))
                          : null}
                      </FormSelect>
                      <FormControl.Feedback type="invalid">
                        {errors.swiftcode?.message}
                      </FormControl.Feedback>
                      <FormLabel column>Initial Deposit:</FormLabel>
                      <FormControl
                        type="number"
                        placeholder="Initial Deposit"
                        required
                        name="balance"
                        {...register('balance', {
                          required: 'Initial deposit is required',
                        })}
                        isInvalid={!!errors.balance}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.balance?.message}
                      </FormControl.Feedback>

                      <Button
                        type="submit"
                        style={{
                          marginBottom: '20px',
                        }}
                      >
                        Create Account
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </div>
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
