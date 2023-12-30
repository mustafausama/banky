// this is a register page for new users for a banking website
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Register = () => {
  const [email] = useState('');
  const [password] = useState('');
  const [passwordConfirm] = useState(''); // added for password confirmation
  const [error, setError] = useState('');
  const [setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission
    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      history.push('/'); // redirect to home page
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
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
        {error && <Alert variant="danger">{error}</Alert>}
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
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group id="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter first name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group id="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter last name"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group id="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>

                  <Form.Group id="ssn">
                    <Form.Label>SSN</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter SSN"
                      required
                    />
                  </Form.Group>

                  <Form.Group id="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      required
                    />
                  </Form.Group>

                  <Form.Group id="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone number"
                      required
                    />
                  </Form.Group>

                  <Form.Group id="accountType">
                    <Form.Label>Account Type</Form.Label>
                    <Form.Control as="select" required>
                      <option value="">Select...</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Form.Control>
                  </Form.Group>

                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Register
                  </button>
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
