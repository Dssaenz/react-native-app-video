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

function Suggestions() {
  const image =
    'https://i.pinimg.com/originals/37/46/b3/3746b33e879cca0e7c80611811f44318.jpg';
  return (
    <CardContainer>
      <MovieContainer>
        <MovieImage source={{uri: image}} />
        <GenreContent>
          <Genre>Genero</Genre>
        </GenreContent>
      </MovieContainer>
      <DescriptionContainer>
        <Text>Name</Text>
        <Text>2012</Text>
        <Text>5 estrellas</Text>
      </DescriptionContainer>
    </CardContainer>
  );
}

export default Suggestions;
