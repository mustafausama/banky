import { useEffect, useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import axios from '../utils/api';
import { toast } from 'react-toastify';
const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    axios
      .get('/review/all')
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        const { errors } = err.response.data;
        const { message } = errors[0];
        if (message) toast.error(message);
      });
  }, [reload]);

  return (
    <div className="container mt-5 mb-5">
      <h1>User Reviews</h1>
      <ReviewForm reload={reload} setReload={setReload} />
      <h2 className="mt-4">All Reviews</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default Review;
