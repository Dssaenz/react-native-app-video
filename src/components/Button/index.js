import React from 'react';
import {PressBack, Icon} from './styles';

const moon = require('../../../resources/day-and-night.png');

function Button(props) {
  return (
    <PressBack onPress={props.onPress}>
      <Icon source={moon} />
    </PressBack>
  );
}

export default Button;
