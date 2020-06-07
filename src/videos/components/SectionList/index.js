import React from 'react';
import {ContentList, TitleSection} from './styles';

function SectionList(props) {
  return (
    <ContentList>
      <TitleSection>{props.title}</TitleSection>
      {props.children}
    </ContentList>
  );
}

export default SectionList;
