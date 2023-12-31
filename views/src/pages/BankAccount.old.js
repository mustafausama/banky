import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DropdownList from '../components/DropdownList';
import MyTable from '../components/Table';
import axios from '../utils/api';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const BankAccount = () => {
  const [sentTransactions, setSentTransactions] = useState([]);
  const [receivedTransactions, setReceivedTransactions] = useState([]);
  const [cards, setCards] = useState([]);
  const [loans, setLoans] = useState([]);
  const [responseData, setResponseData] = useState(null);
  const [showResponse, setShowResponse] = useState(false);
  const [bankAccountDetails, setBankAccountDetails] = useState({});
  const { num } = useParams();

  const handleClose = () => setShowResponse(false);

  const handleCreate = () => {
    axios
      .post('/card') // create a new card
      .then((res) => {
        setResponseData(res.data);
        setShowResponse(true);
        handleClose();
      })
      .catch((err) => {
        // handle the error
      });
  };

  useEffect(() => {
    axios.get(`/bank-account/${num}`).then((res) => {
      setReceivedTransactions(res.data.receivingTransactions);
      setSentTransactions(res.data.sendingTransactions);
      let bankAccount = res.data;
      delete bankAccount.receivingTransactions;
      delete bankAccount.sendingTransactions;
      delete bankAccount.cards;
      delete bankAccount.loans;
      setBankAccountDetails(bankAccount);
      setCards(res.data.cards);
      setLoans(res.data.loans);
    });
  }, [num]);

  return (
    <Container>
      <MyTable data={bankAccountDetails} />
      <DropdownList title="Cards" data={cards} />
      <Button variant="primary" size="lg" active onClick={handleCreate}>
        + Create New
      </Button>
      <Modal show={showResponse} onHide={() => setShowResponse(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Response</Modal.Title>
        </Modal.Header>
        <Modal.Body>{JSON.stringify(responseData, null, 2)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowResponse(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <DropdownList title="Loans" data={loans} />
      <Link to="/create-loan">
        <Button variant="primary" size="lg" active>
          + Create New
        </Button>
      </Link>
      <DropdownList title="Sended Transaction" data={sentTransactions} />
      <DropdownList title="Received Transaction" data={receivedTransactions} />
      <Link to="/create-transaction">
        <Button
          variant="primary"
          size="lg"
          active
          style={{ marginBottom: '20px' }}
        >
          + Create New
        </Button>
      </Link>
    </Container>
  );
};

export default BankAccount;
