import React from 'react';

import {
  Section,
  Image,
  Text,
  TextTitle,
  ContentDescription,
  TextDetails,
} from './styles';

function MovieSection(props) {
  return (
    <Section>
      <Image source={{uri: props.background_image}}>
        <Text>Reproduce ahora!</Text>
        <TextTitle>{props.title}</TextTitle>
        <ContentDescription>
          <TextDetails>
            {props.runtime} min | {props.genres[0]}
          </TextDetails>
        </ContentDescription>
      </Image>
    </Section>
  );
}

export default MovieSection;
