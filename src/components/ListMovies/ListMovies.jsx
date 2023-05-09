import PropTypes from 'prop-types';
import { List } from './ListMovies.styled';
import { ItemMovie } from 'components/ItemMovie/ItemMovie';

export const ListMovie = ({ trendMovies }) => {
  return (
    <>
      <h3>Trending today</h3>
      <List>
        {trendMovies.map(movie => (
          <ItemMovie key={movie.id} item={movie} />
        ))}
      </List>
    </>
  );
};

ListMovie.propTypes = {
  trendMovies: PropTypes.array.isRequired,
};
