import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsById } from 'api/fetchData';
import { Loader } from 'components/Loader/Loader';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import {
  AuthorReview,
  ItemReview,
  LinkDitails,
  ListReviews,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewstById = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchReviewsById(movieId);
        // console.log(response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewstById();
  }, [movieId]);

  if (!reviews.length) {
    return <p>Sorry. We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      <ListReviews>
        {reviews.map(review => (
          <ItemReview key={review.id}>
            <AuthorReview>{review.author}</AuthorReview>
            <p>{review.content}</p>
            <LinkDitails href={review.url}>Ditails</LinkDitails>
          </ItemReview>
        ))}
      </ListReviews>
      {/* спінер */}
      <Loader isLoading={isLoading} />
      {/* помилка запиту */}
      {error && <Alert>{error}</Alert>}
    </>
  );
};

export default Reviews;
