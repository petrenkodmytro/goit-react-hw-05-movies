import { fetchTrendMovie } from 'api/fetchData';
import { Button } from 'components/Button/Button';
import { ListMovie } from 'components/ListMovies/ListMovies';
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
        const response = await fetchTrendMovie(pageNumber);
        console.log(response.data);
        setTrendMovies(prev => [...prev, ...response.data.results]);
        setTotalPage(response.data.total_pages);
      } catch (error) {
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
      <ListMovie trendMovies={trendMovies} />

      {/* спінер */}
      <Loader isLoading={isLoading} />

      {/* кнопка завантажити ще */}
      {totalPage / 20 > pageNumber && <Button loadMore={onLoadMore} />}

      {/* помилка запиту */}
      {error && <div>{error}</div>}

      <ScrollToTop />
    </>
  );
};

export default Home;
