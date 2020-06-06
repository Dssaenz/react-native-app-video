import React from 'react';
import {Text} from 'react-native';
import {
  CardContainer,
  MovieContainer,
  GenreContent,
  Genre,
  MovieImage,
  DescriptionContainer,
} from './styles';

function Suggestions(props) {
  return (
    <CardContainer>
      <MovieContainer>
        <MovieImage source={{uri: props.medium_cover_image}} />
        <GenreContent>
          <Genre>{props.genres[2]}</Genre>
        </GenreContent>
      </MovieContainer>
      <DescriptionContainer>
        <Text>{props.title}</Text>
        <Text>{props.year}</Text>
        <Text>{props.rating}</Text>
      </DescriptionContainer>
    </CardContainer>
  );
}

export default Suggestions;
