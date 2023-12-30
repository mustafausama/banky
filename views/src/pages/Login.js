import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from '../utils/api';
import { toast } from 'react-toastify';

function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    if ( errors && Object.keys(errors).length > 0) return;
    axios
      .post('/auth/login', data)
      .then(() => {
        toast.success('Login success');
      })
      .catch((err) => {
        const { errors } = err.response.data;
        const { message, fields } = errors[0];
        if (message) toast.error(message);
        if (fields) {
          clearErrors();
          fields.forEach(({ field, message }) => {
            if (!errors[field])
              setError(field, {
                message,
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
            <h2>Join Us</h2>
            <p className="w-lg-50">
              Curae hendrerit donec commodo hendrerit egestas tempus, turpis
              facilisis nostra nunc. Vestibulum dui eget ultrices.
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
                <Form className="text-center" noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Email is invalid',
                        },
                      })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                      })}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="mb-3">
                    <Button
                      variant="primary"
                      className="d-block w-100"
                      type="submit"
                    >
                      Login
                    </Button>
                  </div>
                  <p className="text-muted">Forgot your password?</p>
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
