// this is a register page for new users for a banking website
import Form from 'react-bootstrap/Form';
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
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
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
            <Form.Control type="email" placeholder="Enter email" required />
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
            <Form.Control type="text" placeholder="Enter SSN" required />
          </Form.Group>

          <Form.Group id="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" required />
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
      </div>
    </Container>
  );
};

export default Register;
