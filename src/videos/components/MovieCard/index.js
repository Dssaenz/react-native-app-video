import React from 'react';
import {
  CardContainer,
  GenreContent,
  Genre,
  MovieImage,
  DescriptionContainer,
  Title,
  Year,
  Rating,
  Icon,
  ViewRating,
} from './styles';

const tomato = '../../../../resources/tomatoo.png';
const splash = '../../../../resources/splash.png';

function MovieCard(props) {
  return (
    <CardContainer>
      <MovieImage source={{uri: props.medium_cover_image}} />
      <GenreContent>
        <Genre>{props.genres[1]}</Genre>
      </GenreContent>
      <DescriptionContainer>
        <Title>
          {props.title.length > 12
            ? `${props.title.substring(0, 12)} ...`
            : props.title}
        </Title>
        <Year>Año: {props.year}</Year>
        <ViewRating>
          <Rating>Puntaje: {props.rating}</Rating>
          {props.rating > 5.0 ? (
            <Icon source={require(tomato)} />
          ) : (
            <Icon source={require(splash)} />
          )}
        </ViewRating>
      </DescriptionContainer>
    </CardContainer>
  );
}

export default MovieCard;
