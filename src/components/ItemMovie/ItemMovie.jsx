import PropTypes from 'prop-types';
import { Item, Img } from './ItemMovie.styled';

export const ItemMovie = ({ item }) => {
  return (
    <>
      <Item>
        <p>{item.title}</p>
        <Img
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt={item.title}
        />
      </Item>
    </>
  );
};

ItemMovie.propTypes = {
  item: PropTypes.object.isRequired,
};
