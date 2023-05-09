import PropTypes from 'prop-types';
import { Item, Img } from './ItemMovie.styled';
import defaultImage from '../../images/no-poster.png';
import { Link } from 'react-router-dom';

export const ItemMovie = ({ item }) => {
  const posterPath = item.poster_path
    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
    : defaultImage;

  return (
    //  посилання на сторінку фільму
    <Link to={`/movies/${item.id}`}>
      <Item>
        <span>{item.title}</span> | <span>{item.release_date.slice(0, 4)}</span>
        <Img src={posterPath} alt={item.title} />
      </Item>
    </Link>
  );
};

ItemMovie.propTypes = {
  item: PropTypes.object.isRequired,
};
