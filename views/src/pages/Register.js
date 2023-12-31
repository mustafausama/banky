// this is a register page for new users for a banking website
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from '../utils/api';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const redirectToastId = useRef(null);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      navigate('/');
      if (!redirectToastId.current)
        redirectToastId.current = toast.info('You are already logged in');
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    const toastStatus = toast.loading('Registering...');

    if (Object.keys(errors).length > 0) return;
    axios
      .post('/auth/register', data)
      .then(() => {
        toast.update(toastStatus, {
          type: 'success',
          isLoading: false,
          autoClose: 2500,
          render: 'Registration successful!',
        });
        navigate('/login');
      })
      .catch((err) => {
        const { errors } = err.response.data;
        if (!errors || !Array.isArray(errors) || !errors.length)
          return console.log(err);
        const { message, fields } = errors[0];
        if (message)
          toast.update(toastStatus, {
            type: 'error',
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
            render: message,
          });
        else
          toast.update(toastStatus, {
            type: 'error',
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
            render: 'Unknown server error',
          });
        if (fields) {
          fields.forEach(({ field, message }) => {
            if (!errors[field])
              setError(field, {
                message,
                type: 'server',
              });
          });
        }
      });
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
          <Col md={6} xl={4}>
            <Card className="mb-5">
              <Card.Body className="d-flex flex-column align-items-center">
                <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                  <svg
                    className="bi bi-person"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                  </svg>
                </div>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <Form.Group className="mt-4">
                        <Form.Label htmlFor="firstName">First Name</Form.Label>
                        <Form.Control
                          id="firstName"
                          type="text"
                          placeholder="Enter first name"
                          name="firstName"
                          {...register('firstName', {
                            required: 'First name is required',
                          })}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName && errors.firstName.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mt-4">
                        <Form.Label htmlFor="lastName">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="lastName"
                          placeholder="Enter last name"
                          name="lastName"
                          {...register('lastName', {
                            required: 'Last name is required',
                          })}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName && errors.lastName.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      required
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Invalid email address',
                        },
                      })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email && errors.email.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Password and password confirmation */}
                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      required
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must have at least 8 characters',
                        },
                      })}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password && errors.password.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="passwordConfirmation">
                      Password Confirmation
                    </Form.Label>
                    <Form.Control
                      id="passwordConfirmation"
                      type="password"
                      placeholder="Confirm password"
                      required
                      {...register('passwordConfirmation', {
                        required: 'Password confirmation is required',
                        validate: (value) =>
                          value === watch('password') ||
                          'Passwords do not match',
                      })}
                      isInvalid={!!errors.passwordConfirmation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.passwordConfirmation &&
                        errors.passwordConfirmation.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="SSN">SSN</Form.Label>
                    <Form.Control
                      id="SSN"
                      type="text"
                      placeholder="Enter SSN"
                      required
                      {...register('SSN', {
                        required: 'SSN is required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Only numeric values are allowed',
                        },
                      })}
                      isInvalid={!!errors.SSN}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.SSN && errors.SSN.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control
                      id="address"
                      type="text"
                      placeholder="Enter address"
                      required
                      {...register('address', {
                        required: 'Address is required',
                      })}
                      isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address && errors.address.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                    <Form.Control
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter phone number"
                      required
                      {...register('phoneNumber', {
                        required: 'Phone number is required',
                      })}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber && errors.phoneNumber.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* <Form.Group className="mt-4">
                    <Form.Label htmlFor="accountType">Account Type</Form.Label>
                    <Form.Select
                      id="accountType"
                      as="select"
                      required
                      {...register('accountType', {
                        required: 'Account type is required',
                      })}
                      isInvalid={!!errors.accountType}
                    >
                      <option value="">Select...</option>
                      <option value="SAVINGS">Savings Account</option>
                      <option value="CURRENT">Current Account</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.accountType && errors.accountType.message}
                    </Form.Control.Feedback>
                  </Form.Group> */}

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-3 mb-3"
                  >
                    Register
                  </button>
                  <p className="text-muted">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
