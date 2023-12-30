import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DropdownList from '../components/DropdownList';
import MyTable from '../components/Table';

const BankAccount = () => {
  const [sentTransactions, setSentTransactions] = useState([]);
  const [receivedTransactions, setReceivedTransactions] = useState([]);
  const [bankAccountDetails, setBankAccountDetails] = useState({});
  useEffect(() => {
    // replace with your API call
    fetch('/api/transactions')
      .then((response) => response.json())
      .then((data) => {
        const sent = data.filter((transaction) => transaction.type === 'sent');
        const received = data.filter(
          (transaction) => transaction.type === 'received'
        );
        setSentTransactions(sent);
        setReceivedTransactions(received);
        setBankAccountDetails(bankAccountDetails);
      })
      .catch((error) => console.error('Error:', error));
  }, [bankAccountDetails]);

  return (
    <Container>
      <MyTable data={bankAccountDetails} />
      <DropdownList title="Sended Transaction" data={sentTransactions} />
      <DropdownList title="Received Transaction" data={receivedTransactions} />
    </Container>
  );
};

export default BankAccount;
