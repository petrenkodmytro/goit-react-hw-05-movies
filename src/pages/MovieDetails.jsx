import { fetchMovieById } from 'api/fetchData';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import {
  NavWrapper,
  StyledNavLink,
} from 'components/SharedLayout/SharedLayout.styled';
import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoIosPeople } from 'react-icons/io';
import { VscPreview } from 'react-icons/vsc';
import { TiArrowBackOutline } from 'react-icons/ti';
import { StyledNavLinkBack } from './MovieDitails.styled';

const MovieDetails = () => {
  // хук useParams() повертає об'єкт з усіма динамічними параметрами, які є в поточному URL
  const { movieId } = useParams();
  const location = useLocation();
  // console.log(location);
  const backLinkLocation = useRef(location?.state?.from ?? '/');

  const [dataMovie, setDataMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchMovieById(movieId);
        // console.log(response.data);
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
      <StyledNavLinkBack to={backLinkLocation.current}>
        
          <TiArrowBackOutline />
          Go to back
        
      </StyledNavLinkBack>

      <CardMovie dataMovie={dataMovie} />

      <NavWrapper>
        <StyledNavLink to="cast">
          <IoIosPeople size={22} />
          Cast
        </StyledNavLink>
        <StyledNavLink to="reviews">
          <VscPreview size={22} />
          Reviews
        </StyledNavLink>
      </NavWrapper>

      <Suspense fallback={<div>Loading...</div>}>
        {/* вказати де саме в компоненті батьківського маршруту ми хочемо рендерувати дочірні маршрути */}
        <Outlet />
      </Suspense>

      {/* спінер */}
      <Loader isLoading={isLoading} />
      {/* помилка запиту */}
      {error && <Alert>{error}</Alert>}
    </>
  );
};

export default MovieDetails;
