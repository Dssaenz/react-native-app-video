import React from 'react';
import {ContentList, TitleSection} from './styles';

function SectionListMovies(props) {
  return (
    <ContentList>
      <TitleSection>{props.title}</TitleSection>
      {props.children}
    </ContentList>
  );
}

export default SectionListMovies;
