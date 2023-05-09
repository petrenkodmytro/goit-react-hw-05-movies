import { fetchMovieById } from 'api/fetchData';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  // хук useParams() повертає об'єкт з усіма динамічними параметрами, які є в поточному URL
  const { movieId } = useParams();
  console.log(movieId);
  const [dataMovie, setDataMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchMovieById(movieId);
        console.log(response);
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

      {/* спінер */}
      <Loader isLoading={isLoading} />

      {/* помилка запиту */}
      {error && <Alert>{error}</Alert>}
    </>
  );
};

export default MovieDetails;
