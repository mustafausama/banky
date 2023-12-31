import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  FormGroup,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../utils/api';
import { useForm } from 'react-hook-form';
import { BiTransfer } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateTransaction = () => {
  const [accounts, setAccounts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [date, setDate] = useState('now');

  const navigate = useNavigate();

  const state = useLocation().state;
  const accountNumber = state?.accountNumber;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    unregister,
    setValue,
  } = useForm();

  const nowRef = useRef();

  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  useEffect(() => {
    nowRef.current.checked = true;
    axios.get('/bank').then((res) => {
      setBranches(res.data);
    });
    axios
      .get('/user/user-info', {
        params: { includeAccounts: true },
      })
      .then((res) => {
        setAccounts(res.data.bankAccounts);
      });
  }, []);

  useEffect(() => {
    if (accountNumber) {
      setValue('senderAccountNumber', accountNumber);
    }
  }, [accounts, accountNumber, setValue]);

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) return;
    console.log(data);
    axios
      .post('/transaction', data)
      .then((res) => {
        toast.success('Transaction created successfully');
        const transactionId = res.data.transactionId;
        navigate(`/transaction-details/${transactionId}`);
      })
      .catch((err) => {
        const { errors } = err.response.data;
        const { message, fields } = errors[0];
        if (message) toast.error(message);
        if (fields) {
          fields.forEach(({ field, message }) => {
            if (!errors[field])
              setError(field, {
                message,
              });
          });
        }
      });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (e.target.value !== 'later') {
      unregister('date');
    }
  };

  return (
    <section className="position-relative py-4 py-xl-5">
      <Container>
        <Row className="mb-5">
          <Col md={8} xl={6} className="text-center mx-auto">
            <h2>Register with Us</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={8} xl={6} className="text-center mx-auto">
            <h3>Why Choose Our Bank?</h3>
            <p>
              We offer competitive rates, 24/7 customer service, and a
              state-of-the-art mobile banking app. Plus, when you open an
              account, you'll get a free checkbook and debit card. Join us today
              and experience banking at its best!
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={8} xl={8}>
            <Card className="mb-5">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                  <BiTransfer />
                </div>
                <Form
                  noValidate
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-50"
                >
                  <FormLabel column>From Account:</FormLabel>
                  <FormSelect
                    required
                    name="senderAccountNumber"
                    {...register('senderAccountNumber', {
                      required: 'Sender Account is required',
                    })}
                    isInvalid={!!errors.senderAccountNumber}
                  >
                    <option value="">Select an account</option>
                    {accounts.map((account, index) => (
                      <option key={index} value={account.accountNumber}>
                        {account.accountNumber} (${account.balance.toFixed(2)})
                      </option>
                    ))}
                  </FormSelect>
                  <FormControl.Feedback type="invalid">
                    {errors.senderAccountNumber?.message}
                  </FormControl.Feedback>
                  <FormLabel column>Destination Branch Name:</FormLabel>
                  <FormSelect
                    required
                    name="swiftcode"
                    {...register('swiftcode', {
                      required: 'Destination branch is required',
                    })}
                    isInvalid={!!errors.swiftcode}
                  >
                    <option value="">Select a branch</option>
                    {branches.map((branch, index) => (
                      <option key={index} value={branch.swiftcode}>
                        {branch.branchName}
                      </option>
                    ))}
                  </FormSelect>
                  <FormControl.Feedback type="invalid">
                    {errors.swiftcode?.message}
                  </FormControl.Feedback>

                  <FormLabel column>Account Number:</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Account Number"
                    required
                    name="recipientAccountNumber"
                    {...register('recipientAccountNumber', {
                      required: 'Account number is required',
                      pattern: {
                        value: /^\d+$/,
                        message: 'Account number must contain only numbers',
                      },
                    })}
                    isInvalid={!!errors.recipientAccountNumber}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.recipientAccountNumber?.message}
                  </FormControl.Feedback>
                  <FormLabel column>Amount:</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Amount"
                    required
                    name="amount"
                    {...register('amount', {
                      required: 'Amount is required',
                      pattern: {
                        value: /^\d+$/,
                        message: 'Amount must contain only numbers',
                      },
                    })}
                    isInvalid={!!errors.amount}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.amount?.message}
                  </FormControl.Feedback>
                  <FormGroup>
                    <FormLabel column>Schedule Transaction</FormLabel>
                    <div className="mb-3">
                      <Form.Check
                        inline
                        label="Now"
                        name="dateChoice"
                        type="radio"
                        id={`inline-radio-1`}
                        value="now"
                        onChange={handleDateChange}
                        required
                        ref={nowRef}
                      />
                      <Form.Check
                        inline
                        label="Later"
                        name="dateChoice"
                        type="radio"
                        id={`inline-radio-2`}
                        value="later"
                        onChange={handleDateChange}
                        required
                      />
                    </div>
                    {date === 'later' && (
                      <>
                        <FormControl
                          type="date"
                          name="dateString"
                          min={dateString}
                          required
                          {...register('date', {
                            required: 'Date is required',
                          })}
                          isInvalid={!!errors.date}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.date?.message}
                        </FormControl.Feedback>
                      </>
                    )}
                  </FormGroup>
                  <FormLabel column>Reason:</FormLabel>
                  <FormControl
                    as="textarea"
                    rows={3}
                    required
                    style={{ marginBottom: '20px' }}
                    name="note"
                    {...register('note', {
                      required: 'Reason is required',
                    })}
                    isInvalid={!!errors.note}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.note?.message}
                  </FormControl.Feedback>
                  <Button
                    type="submit"
                    style={{
                      marginBottom: '20px',
                    }}
                  >
                    Transfer
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreateTransaction;
