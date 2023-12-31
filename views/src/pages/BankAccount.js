import { useState, useEffect } from 'react';
import {
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';
import axios from '../utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaLock,
} from 'react-icons/fa';
import CreateLoan from '../components/CreateLoan';

const BankAccount = () => {
  const [accountDetails, setAccountDetails] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [showLoan, setShowLoan] = useState(false);

  const navigate = useNavigate();

  const { num } = useParams();

  useEffect(() => {
    axios
      .get(`/bank-account/${num}`)
      .then((res) => {
        setAccountDetails(res.data);
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

  const [createCardDetails, setCreateCardDetails] = useState();

  const createCardHandler = () => {
    const toastId = toast.loading('Creating card...');
    axios
      .post('/card', { accountNumber: num })
      .then((res) => {
        setCreateCardDetails(res.data);
        toast.update(toastId, {
          render: 'Card created successfully',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
        setShowCard(true);
      })
      .catch((err) => {
        const { errors } = err.response.data;
        if (!errors || !Array.isArray(errors) || !errors.length)
          return console.log(err);
        const { message } = errors[0];
        if (message) toast.error(message);
        else
          toast.update(toastId, {
            render: 'Unknown server error',
            type: 'error',
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
      });
  };

  if (!accountDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Modal show={showCard} onHide={() => setShowCard(false)}>
        <Modal.Header closeButton={() => setShowCard(false)}>
          <Modal.Title>Create Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showCard && (
            <Card className="text-center">
              <Card.Body>
                <FaCreditCard size="3em" className="text-primary mb-3" />
                <Card.Title className="mb-4">Your New Card Details</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <FaCreditCard className="text-secondary mr-2" />
                    <strong>Card Number:</strong> {createCardDetails.cardNumber}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FaLock className="text-secondary mr-2" />
                    <strong>CVV:</strong> {createCardDetails.cvv}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FaCalendarAlt className="text-secondary mr-2" />
                    <strong>Expires On:</strong>{' '}
                    {new Date(
                      createCardDetails.expiryDate
                    ).toLocaleDateString()}
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
      </Modal>
      <Modal show={showLoan} onHide={() => setShowLoan(false)}>
        <Modal.Header closeButton={() => setShowLoan(false)}>
          <Modal.Title>Create Loan</Modal.Title>
        </Modal.Header>
        <CreateLoan
          accountNumber={accountDetails.accountNumber.toString()}
          setShowLoan={setShowLoan}
        />
      </Modal>

      <Container className="p-4">
        <Row>
          <Col md={12}>
            <Card className="shadow-lg mb-4">
              <Card.Body>
                <Card.Title className="display-4">Account Details</Card.Title>
                <div className="mb-3">
                  <Badge variant="secondary">
                    Account Number: {accountDetails.accountNumber}
                  </Badge>
                  <Badge variant="secondary" className="ml-2">
                    Type: {accountDetails.accountType}
                  </Badge>
                  <Badge variant="secondary" className="ml-2">
                    Balance: ${accountDetails.balance.toFixed(2)}
                  </Badge>
                </div>
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() =>
                    navigate('/create-transaction', {
                      state: {
                        accountNumber: accountDetails.accountNumber,
                      },
                    })
                  }
                >
                  Create Transaction
                </Button>
                <Button
                  variant="success"
                  className="mr-2"
                  onClick={() => createCardHandler()}
                >
                  Create Card
                </Button>
                <Button variant="warning" onClick={() => setShowLoan(true)}>
                  Create Loan
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Transactions Section */}
        <Row>
          <Col md={6}>
            <Card className="shadow-lg mb-4">
              <Card.Body>
                <Card.Title>Sending Transactions</Card.Title>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Schedule</th>
                      <th>Amount</th>
                      <th>Recipient</th>
                      <th>Created At</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountDetails.sendingTransactions.map((transaction) => {
                      const isPast = new Date(transaction.date) < new Date();
                      return (
                        <tr
                          key={transaction.transactionId}
                          style={{ backgroundColor: isPast ? '#e9ffe9' : '' }}
                        >
                          <td>{transaction.transactionId}</td>
                          <td>
                            {new Date(transaction.date).toLocaleDateString()}
                            {isPast ? (
                              <FaCheckCircle className="text-success ml-2" />
                            ) : (
                              <FaClock className="text-warning ml-2" />
                            )}
                          </td>
                          <td>${transaction.amount.toFixed(2)}</td>
                          <td>
                            {transaction.recipientBankAccount.user.firstName}{' '}
                            {transaction.recipientBankAccount.user.lastName}
                            <br />
                            (SSN: {transaction.recipientBankAccount.user.SSN})
                          </td>
                          <td>
                            {new Date(transaction.createdAt).toLocaleString()}
                          </td>
                          <td>
                            <Link
                              to={`/transaction-details/${transaction.transactionId}`}
                            >
                              <Button variant="info" size="sm">
                                View
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-lg mb-4">
              <Card.Body>
                <Card.Title>Receiving Transactions</Card.Title>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Schedule</th>
                      <th>Amount</th>
                      <th>Sender</th>
                      <th>Created At</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountDetails.receivingTransactions.map((transaction) => {
                      const isPast = new Date(transaction.date) < new Date();

                      return (
                        <tr
                          key={transaction.transactionId}
                          style={{ backgroundColor: isPast ? '#e9ffe9' : '' }}
                        >
                          <td>{transaction.transactionId}</td>
                          <td>
                            {new Date(transaction.date).toLocaleDateString()}
                            {isPast ? (
                              <FaCheckCircle className="text-success ml-2" />
                            ) : (
                              <FaClock className="text-warning ml-2" />
                            )}
                          </td>
                          <td>${transaction.amount.toFixed(2)}</td>
                          <td>
                            {transaction.senderBankAccount.user.firstName}{' '}
                            {transaction.senderBankAccount.user.lastName}
                            <br />
                            (SSN: {transaction.senderBankAccount.user.SSN})
                          </td>
                          <td>
                            {new Date(transaction.createdAt).toLocaleString()}
                          </td>
                          <td>
                            <Link
                              to={`/transaction-details/${transaction.transactionId}`}
                            >
                              <Button variant="info" size="sm">
                                View
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row>
          <Col md={12}>
            <Card className="shadow-lg mb-4">
              <Card.Body>
                <Card.Title>
                  Cards{' '}
                  <Badge variant="secondary">
                    {accountDetails.cards.length}
                  </Badge>
                </Card.Title>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Card ID</th>
                      <th>Card Number</th>
                      <th>Expiry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountDetails.cards.map((card) => (
                      <tr key={card.cardId}>
                        <td>{card.cardId}</td>
                        <td>{card.cardNumber}</td>
                        <td>{card.expiryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Loans Section */}
        <Row>
          <Col md={12}>
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>
                  Loans{' '}
                  <Badge variant="secondary">
                    {accountDetails.loans.length}
                  </Badge>
                </Card.Title>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Loan ID</th>
                      <th>Amount</th>
                      <th>Interest Rate</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accountDetails.loans.map((loan) => (
                      <tr key={loan.loanId}>
                        <td>{loan.loanId}</td>
                        <td>{loan.amount}</td>
                        <td>{loan.interestRate}</td>
                        <td>{loan.startDate}</td>
                        <td>{loan.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BankAccount;
