import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from '../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateLoan = ({ accountNumber, setShowLoan }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (errors && Object.keys(errors).length > 0) return;

    const payload = {
      ...data,
      accountNumber,
    };

    axios
      .post('/loan', payload)
      .then(() => {
        toast.success('Loan created successfully');
        setShowLoan(false);
        navigate('/account-details/' + accountNumber);
      })
      .catch((err) => {
        const { errors } = err.response.data;
        if (!errors || !Array.isArray(errors) || !errors.length) {
          console.log(err);
          return;
        }
        const { message, fields } = errors[0];
        if (message) toast.error(message);
        else toast.error('Unknown server error');
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
    <>
      <Modal.Body>
        {' '}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              {...register('amount', {
                required: 'Amount is required',
                min: {
                  value: 1000,
                  message: 'Minimum amount is $100',
                },
              })}
              isInvalid={!!errors.amount}
            />
            <Form.Control.Feedback type="invalid">
              {errors.amount?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              {...register('startDate', { required: 'Start date is required' })}
              isInvalid={!!errors.startDate}
              min={new Date().toISOString().split('T')[0]}
            />
            <Form.Control.Feedback type="invalid">
              {errors.startDate?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              {...register('endDate', { required: 'End date is required' })}
              isInvalid={!!errors.endDate}
              min={new Date().toISOString().split('T')[0]}
            />
            <Form.Control.Feedback type="invalid">
              {errors.endDate?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Loan
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default CreateLoan;
