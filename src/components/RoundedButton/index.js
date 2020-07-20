import React from 'react';
import {ButtonPress, Icon} from './styles';

function RoundedButton(props) {
  return (
    <ButtonPress onPress={props.onPress}>
      <Icon source={props.icon} />
    </ButtonPress>
  );
}

export default RoundedButton;
