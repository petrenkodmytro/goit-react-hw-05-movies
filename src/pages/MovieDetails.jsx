import { fetchMovieById } from 'api/fetchData';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  // хук useParams() повертає об'єкт з усіма динамічними параметрами, які є в поточному URL
  const { movieId } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchMovieById(movieId);
        console.log(response.data);
        setDataMovie(response.data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <>
      <CardMovie dataMovie={dataMovie} />

      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      
      <Outlet />
      {/* спінер */}
      <Loader isLoading={isLoading} />
      {/* помилка запиту */}
      {error && <Alert>{error}</Alert>}
    </>
  );
};

export default MovieDetails;
