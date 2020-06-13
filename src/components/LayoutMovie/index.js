import React from 'react';
import {SafeAreaView} from 'react-native';
import {PrincipalContainer} from './styles';

function LayoutMovie(props) {
  return (
    <SafeAreaView>
      <PrincipalContainer>{props.children}</PrincipalContainer>
    </SafeAreaView>
  );
}

export default LayoutMovie;
