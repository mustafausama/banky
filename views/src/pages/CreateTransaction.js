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
import { toast } from 'react-toastify';
import axios from '../utils/api';
import { useForm } from 'react-hook-form';
const CreateTransaction = () => {
  const [branches, setBranches] = useState([]);
  const [schedule, setSchedule] = useState('now');
  const [date, setDate] = useState('');

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();
  
  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  
  useEffect(() => {
    axios.get('/bank').then((res) => {
      setBranches(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) return;
    axios
      .post('/transaction', data)
      .then(() => {})
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
   
  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  return (
    <Container>
      <h1>Create Transaction</h1>
      <Form  noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormLabel column sm="2">
          Branch Name:
        </FormLabel>
        <FormSelect required name="swiftcode">
          {branches.map((branch, index) => (
            <option key={index} value={branch.swiftcode}>
              {branch.branchName}
            </option>
          ))}
        </FormSelect>
        
        <FormLabel column sm="2">
          Account Number:
        </FormLabel>
        <FormControl type="text" placeholder="Account Number" required name="recipientAccountNumber"
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
        <FormLabel column sm="2">
          Amount:
        </FormLabel>
        <FormControl type="text" placeholder="Amount" required name='amount'
          {...register('amount', {
            required: 'Amount is required',
            pattern: {
              value: /^\d+$/,
              message: 'Amount must contain only numbers',
            },
          })}
          isInvalid={!!errors.amount}
            />
        <FormControl.Feedback type="invalid" >
          {errors.amount?.message}
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
                name="dateChoice"
                type={type}
                id={`inline-${type}-1`}
                value={dateString}
                onChange={handleScheduleChange}
                required
              />
              <Form.Check
                inline
                label="Later"
                name="dateChoice"
                type={type}
                id={`inline-${type}-2`}
                value="later"
                onChange={handleScheduleChange}
                required
              />
            </div>
          ))}
          {schedule === 'later' && (
            <FormControl
              type="date"
              value={date}
              onChange={handleDateChange}
              name="dateString"
              min={dateString}
              required
            />
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
    </Container>
  );
};

export default CreateTransaction;
