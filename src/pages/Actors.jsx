import { fetchActors } from 'api/fetchData';
import { Button } from 'components/Button/Button';
// import { ListMovie } from 'components/ListMovies/ListMovies';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { toast } from 'react-toastify';
import { notificationOptions } from '../components/Notification/Notification';
import { useSearchParams } from 'react-router-dom';
import {
  CarecterActor,
  ImgActor,
  ItemActor,
  ListActors,
  NameActor,
} from './Actor.styled';
import actorImage from '../images/anonymous.jpg';

const Movies = () => {
  // const [textQuery, setTextQuery] = useState('');
  const [actors, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  //Він повертає масив із двох значень: об'єкт параметрів рядка запиту (примірник URLSearchParams) для поточного URL та функцію оновлення рядка запиту. Для отримання значень параметрів є метод URLSearchParams.get(key), який чекає на ім'я параметра і повертає його значення або null якщо у рядку запиту немає такого параметра.
  const [searchParams, setSearchParams] = useSearchParams();

  //Повертає об'єкт розташування, що представляє поточний URL, щоразу коли ми переходимо новим маршрутом або оновлюємо частину поточного URL.
  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    const textQuery = searchParams.get('query') ?? '';
    if (!textQuery) {
      return;
    }
    const getActors = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchActors(textQuery, pageNumber);

        console.log(response.data);

        if (response.data.results.length === 0) {
          toast.error(
            `Sorry, there are no find movie with this name. Please try again.`,
            notificationOptions
          );
          return;
        }
        setMovies(prev => [...prev, ...response.data.results]);
        setTotalPage(response.data.total_pages);
      } catch (error) {
        setTotalPage(null);
        setMovies([]);
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getActors();
  }, [searchParams, pageNumber]);

  // записываем запрос поиска из Searchbar
  const handleSubmit = query => {
    setSearchParams({ query });
    setPageNumber(1);
    setMovies([]);
    setTotalPage(null);
  };

  const onLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };
  console.log(pageNumber);
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ListActors>
        {actors.map(actor => (
          <ItemActor key={actor.id}>
            <ImgActor
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : actorImage
              }
              alt={`${actor.name}`}
            />
            <NameActor>{actor.name}</NameActor>
            <CarecterActor>{actor.character}</CarecterActor>
            <p>{actor.popularity.toFixed(1)}%</p>
          </ItemActor>
        ))}
      </ListActors>

      {/* спінер */}
      <Loader isLoading={isLoading} />

      {/* кнопка завантажити ще */}
      {totalPage > pageNumber && <Button loadMore={onLoadMore} />}

      {/* помилка запиту */}
      {error && <Alert>{error}</Alert>}

      <ScrollToTop />
    </>
  );
};

export default Movies;
