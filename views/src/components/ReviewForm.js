// ReviewForm.js
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ReactStars from 'react-rating-stars-component';
import axios from '../utils/api';

export default function ReviewForm({ reload, setReload }) {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      toast.error('Please give a rating');
    } else if (!message) {
      toast.error('Please give a message');
    } else {
      const review = {
        rating: rating.toString(),
        message,
      };
      axios
        .post('/review', review)
        .then(() => {
          toast.success('Review added');
          setMessage('');
          setReload(!reload);
        })
        .catch((err) => {
          const { errors } = err.response.data;
          const { message } = errors[0];
          if (message) toast.error(message);
        });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          onChange={(nr) => setRating(nr)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <Button className="mt-3" variant="primary" type="submit">
        Add Review
      </Button>
    </Form>
  );
}
