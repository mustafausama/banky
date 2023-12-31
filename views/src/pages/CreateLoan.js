
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../utils/api';
import { useForm } from 'react-hook-form';

const CreateLoan = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length > 0) return;
    axios
      .post('/loan', data)
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

  return (
    <Container>
      <h1>Create Loan</h1>
      <Form noValidate onSubmit={handleSubmit(onSubmit)} style={{marginBottom:'20px'}}>
        <FormLabel>Amount</FormLabel>
        <FormControl
          type="number"
          placeholder="Amount"
          name="amount"
                  {...register('amount', { required: 'Amount is required' })}
                  isInvalid={!!errors.amount}
              />
                <FormControl.Feedback type="invalid">
                  {errors.amount?.message}
              </FormControl.Feedback>
              <FormLabel>Start Date:</FormLabel>
                <FormControl
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    {...register('startDate', { required: 'Start Date is required' })}
                  isInvalid={!!errors.startDate}
                  min={new Date().toISOString().split('T')[0]}
              />
                <FormControl.Feedback type="invalid">
                  {errors.startDate?.message}
              </FormControl.Feedback>
                <FormLabel>End Date:</FormLabel>
                    <FormControl
                        type="date"
                        placeholder="End Date"
                        name="endDate"
                        {...register('endDate', { required: 'End Date is required' })}
                  isInvalid={!!errors.endDate}
              />
                <FormControl.Feedback type="invalid">
                  {errors.endDate?.message}
              </FormControl.Feedback>
              <Button variant="primary" size='lg' type="submit" style={{margin:'20px'}}>
                  Create
                </Button>
      </Form>
    </Container>
  );
};

export default CreateLoan;
