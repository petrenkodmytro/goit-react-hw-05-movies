import PropTypes from 'prop-types';
import { List } from './ListMovies.styled';
import { ItemMovie } from 'components/ItemMovie/ItemMovie';

export const ListMovie = ({ movies, state }) => {
  return (
    <List>
      {movies.map(movie => (
        <ItemMovie key={movie.id} item={movie} state={state} />
      ))}
    </List>
  );
};

ListMovie.propTypes = {
  movies: PropTypes.array.isRequired,
};
