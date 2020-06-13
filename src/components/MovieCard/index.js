import React from 'react';
import {
  CardContainer,
  GenreContent,
  Genre,
  MovieImage,
  DescriptionContainer,
  Title,
  Year,
} from './styles';

function MovieCard(props) {
  return (
    <CardContainer onPress={props.onPress}>
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
        <Year>Year: {props.year}</Year>
      </DescriptionContainer>
    </CardContainer>
  );
}

export default MovieCard;
