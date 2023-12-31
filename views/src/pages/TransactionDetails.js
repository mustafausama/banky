import { useState, useEffect } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import axios from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCheckCircle, FaClock, FaUser } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const TransactionDetails = () => {
  const { user } = useAuth();
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();

  const { num } = useParams();

  useEffect(() => {
    axios
      .get(`/transaction/${num}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        const { errors } = err.response.data;
        if (!errors || !Array.isArray(errors) || !errors.length)
          return console.log(err);
        const { message } = errors[0];
        if (message) toast.error(message);
        else toast.error('Unknown server error');
        navigate('/dashboard');
      });
  }, [num, navigate]);

  if (!transaction) {
    return <div>Loading...</div>;
  }

  const isCompleted = new Date(transaction.date) < new Date();
  const isSenderCurrentUser =
    String(transaction.senderBankAccount.SSN) === String(user);
  const isRecipientCurrentUser =
    String(transaction.recipientBankAccount.SSN) === String(user);
  return (
    <Container className="p-4">
      <Row>
        <Col md={6}>
          <Card className="shadow-lg mb-4">
            <Card.Body>
              <Card.Title className="display-4">
                Transaction Details
                {isCompleted ? (
                  <FaCheckCircle className="text-success ml-2" />
                ) : (
                  <FaClock className="text-warning ml-2" />
                )}
              </Card.Title>
              <Badge variant="secondary" className="mr-2">
                ID: {num}
              </Badge>
              <Badge variant={isCompleted ? 'success' : 'warning'}>
                Date: {new Date(transaction.date).toLocaleDateString()}
              </Badge>
              <div className="mt-4">
                <p className="lead">
                  <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
                </p>
                <p className="lead">
                  <strong>Note:</strong> {transaction.note}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg mb-4">
            <Card.Body>
              <Card.Title className="display-4">Participant Details</Card.Title>
              <div className="mt-4">
                <p className="lead">
                  <strong>Sender Account:</strong>{' '}
                  {transaction.senderAccountNumber}
                  {isSenderCurrentUser && (
                    <FaUser className="text-primary ml-2" />
                  )}
                  <br />
                  <strong>Sender Name:</strong>{' '}
                  {transaction.senderBankAccount.user.firstName}{' '}
                  {transaction.senderBankAccount.user.lastName}
                </p>
                <p className="lead">
                  <strong>Recipient Account:</strong>{' '}
                  {transaction.recipientAccountNumber}
                  {isRecipientCurrentUser && (
                    <FaUser className="text-primary ml-2" />
                  )}
                  <br />
                  <strong>Recipient Name:</strong>{' '}
                  {transaction.recipientBankAccount.user.firstName}{' '}
                  {transaction.recipientBankAccount.user.lastName}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionDetails;
