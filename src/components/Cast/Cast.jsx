import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastById } from 'api/fetchData';
import { Loader } from 'components/Loader/Loader';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import {
  CarecterActor,
  ImgActor,
  ItemActor,
  ListActors,
  NameActor,
} from './Cast.styled';
import actorImage from '../../images/anonymous.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastById = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchCastById(movieId);
        // console.log(response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastById();
  }, [movieId]);

  if (!cast.length) {
    return <p>Sorry. We don't have any information about the cast.</p>;
  }

  return (
    <>
      <ListActors>
        {cast.map(castItem => (
          <ItemActor key={castItem.id}>
            <ImgActor
              src={
                castItem.profile_path
                  ? `https://image.tmdb.org/t/p/w200${castItem.profile_path}`
                  : actorImage
              }
              alt={`${castItem.name}`}
            />
            <NameActor>{castItem.name}</NameActor>
            <CarecterActor>{castItem.character}</CarecterActor>
          </ItemActor>
        ))}
      </ListActors>
      {/* спінер */}
      <Loader isLoading={isLoading} />
      {/* помилка запиту */}
      {error && <Alert>{error}</Alert>}
    </>
  );
};
