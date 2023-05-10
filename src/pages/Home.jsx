import { fetchTrendMovie } from 'api/fetchData';
import { Button } from 'components/Button/Button';
import { ListMovie } from 'components/ListMovies/ListMovies';
import { Alert } from 'components/ListMovies/ListMovies.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchTrendMovie(pageNumber);
        console.log(response.data);
        setTrendMovies(prev => [...prev, ...response.data.results]);
        setTotalPage(response.data.total_pages);
      } catch (error) {
        setTotalPage(null);
        setTrendMovies([]);
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, [pageNumber]);

  const onLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };

  return (
    <>
      <ListMovie movies={trendMovies} title="Hit movies" />

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