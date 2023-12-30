import React, { useEffect, useState } from 'react';
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  FormGroup,
  Button,
} from 'react-bootstrap';

const CreateTransaction = () => {
  const [branches, setBranches] = useState([]);
  const [schedule, setSchedule] = useState('now');
  const [date, setDate] = useState('');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    fetch('/api/branches')
      .then((response) => response.json())
      .then((data) => setBranches(data));
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Container>
      <h1>Create Transaction</h1>
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <FormLabel column sm="2">
          Branch Name:
        </FormLabel>
        <FormSelect required>
          {branches.map((branch, index) => (
            <option key={index} value={branch.swiftCode}>
              {branch.name}
            </option>
          ))}
        </FormSelect>
        <FormLabel column sm="2">
          Account Number:
        </FormLabel>
        <FormControl type="text" placeholder="Account Number" required />
        <FormControl.Feedback type="invalid">
          Not a valid account number.
        </FormControl.Feedback>
        <FormLabel column sm="2">
          Amount:
        </FormLabel>
        <FormControl type="text" placeholder="Amount" />
        <FormControl.Feedback type="invalid" required>
          Not a valid amount.
        </FormControl.Feedback>
        <FormGroup>
          <FormLabel column sm="2">
            Schedule Transaction
          </FormLabel>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Now"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value="now"
                onChange={handleScheduleChange}
              />
              <Form.Check
                inline
                label="Later"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                value="later"
                onChange={handleScheduleChange}
              />
            </div>
          ))}
          {schedule === 'later' && (
            <FormControl type="date" value={date} onChange={handleDateChange} />
          )}
        </FormGroup>
        <FormLabel column sm="2">
          Reason:
        </FormLabel>
        <FormControl
          as="textarea"
          rows={3}
          required
          style={{ marginBottom: '20px' }}
        />
        <FormControl.Feedback type="invalid">
          Please provide a reason.
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
    </Container>
  );
};

export default CreateTransaction;
