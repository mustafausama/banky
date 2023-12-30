import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function ReviewList({ reviews }) {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-secondary" />);
      }
    }
    return stars;
  };

  return (
    <ListGroup>
      {reviews.map((review, index) => (
        <ListGroup.Item key={index}>
          {renderStars(review.rating)}
          <br />
          <strong>Message:</strong> {review.message}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
