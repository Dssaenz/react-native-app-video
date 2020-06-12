import React from 'react';
import {ContentList} from './styles';

function SectionList(props) {
  return <ContentList>{props.children}</ContentList>;
}

export default SectionList;
