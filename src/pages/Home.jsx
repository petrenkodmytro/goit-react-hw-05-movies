import { fetchTrendMovie } from 'api/fetchData';
import { Button } from 'components/Button/Button';
import { ListMovie } from 'components/ListMovies/ListMovies';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  //Повертає об'єкт розташування, що представляє поточний URL, щоразу коли ми переходимо новим маршрутом або оновлюємо частину поточного URL.
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    // отмена запроса
    const controller = new AbortController();

    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);  
        const response = await fetchTrendMovie(pageNumber, controller);
        // console.log(response.data);
        setTrendMovies(prev => [...prev, ...response.data.results]);
        setTotalPage(response.data.total_pages);
      } catch (error) {
        setTotalPage(null);
        setTrendMovies([]);
        if (error.message === 'canceled') {
          return;
        } else {
          setError(error.message);
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
    //выполняется при размонтировании
    return () => {
      controller.abort();
    };
  }, [pageNumber]);

  const onLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };

  return (
    <>
      <ListMovie
        movies={trendMovies}
        title="Hit movies"
        // передаємо зворотню адресу HOME
        state={{ from: location }}
      />

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

export default Home;
