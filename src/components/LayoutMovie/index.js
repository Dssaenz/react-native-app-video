import React from 'react';
import {ScrollView} from 'react-native';
import {PrincipalContainer} from './styles';

function LayoutMovie(props) {
  return (
    <ScrollView refreshControl={props.refreshControl}>
      <PrincipalContainer>{props.children}</PrincipalContainer>
    </ScrollView>
  );
}

export default LayoutMovie;
