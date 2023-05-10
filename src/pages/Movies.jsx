import { fetchMovieByName } from 'api/fetchData';
import { Button } from 'components/Button/Button';
import { ListMovie } from 'components/ListMovies/ListMovies';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { toast } from 'react-toastify';
import { notificationOptions } from '../components/Notification/Notification';

const Movies = () => {
  const [textQuery, setTextQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    if (!textQuery) {
      return;
    }
    const getMovieByName = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchMovieByName(textQuery, pageNumber);
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
    getMovieByName();
  }, [textQuery, pageNumber]);

  // записываем запрос поиска из Searchbar
  const handleSubmit = searchValue => {
    setTextQuery(searchValue);
    setPageNumber(1);
    setMovies([]);
    setTotalPage(null);
  };

  const onLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />

      <ListMovie movies={movies} />

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
