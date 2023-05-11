import defaultImage from '../../images/no-poster.png';
import {
  CardWrap,
  ImgMovie,
  Info,
  MovieInfo,
  Title,
  TitleInfo,
} from './CardMovie.styled';

export const CardMovie = ({ dataMovie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    dataMovie;

  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : defaultImage;

  // const releaseYear = new Date(release_date).getFullYear();

  return (
    <>
      <CardWrap>
        <ImgMovie src={posterPath} alt={title} />

        <MovieInfo>
          <Title>
            {title ?? 'Unknown'} (
            {new Date(release_date).getFullYear() ?? 'Unknown'})
          </Title>
          <p>
            <Info>Score: </Info> {(vote_average * 10).toFixed(0)}%
          </p>
          <p>
            <Info>Overview: </Info> {overview === '' ? 'unknown' : overview}
          </p>

          {genres && (
            <p>
              <Info>Genres: </Info>
              {genres.length === 0
                ? 'unknown'
                : genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </MovieInfo>
      </CardWrap>

      <div>
        <TitleInfo>Additional information</TitleInfo>
      </div>
    </>
  );
};
