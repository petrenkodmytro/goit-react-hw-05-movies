import PropTypes from 'prop-types';
import { List } from './ListMovies.styled';
import { ItemMovie } from 'components/ItemMovie/ItemMovie';

export const ListMovie = ({ movies, title }) => {
  return (
    <List>
      {movies.map(movie => (
        <ItemMovie key={movie.id} item={movie} />
      ))}
    </List>
  );
};

ListMovie.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
