import React from 'react';
import {ContentList, TitleSection, SectionList} from './styles';

function SectionListMovies(props) {
  return (
    <ContentList>
      <TitleSection>{props.title}</TitleSection>
      <SectionList>{props.children}</SectionList>
    </ContentList>
  );
}

export default SectionListMovies;
