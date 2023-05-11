import PropTypes from 'prop-types';
import { Item, Img, StyledLink } from './ItemMovie.styled';
import defaultImage from '../../images/no-poster.png';
// import { useLocation } from 'react-router-dom';

export const ItemMovie = ({ item, state }) => {
  // const location = useLocation();
  // console.log(location);

  const posterPath = item.poster_path
    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
    : defaultImage;

  return (
    //  посилання на сторінку фільму
    <StyledLink to={`/movies/${item.id}`} state={state}>
      <Item>
        <p>
          <span>{item.title.slice(0, 32)}</span> |
          <span>{item.release_date.slice(0, 4)}</span>
        </p>
        <Img src={posterPath} alt={item.title} />
      </Item>
    </StyledLink>
  );
};

ItemMovie.propTypes = {
  item: PropTypes.object.isRequired,
};
