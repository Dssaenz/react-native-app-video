import React from 'react';
import {PressBack, Icon} from './styles';

const icon = '../../../../resources/atras.png';

function BackButton(props) {
  return (
    <PressBack onPress={props.onPress}>
      <Icon source={require(icon)} />
    </PressBack>
  );
}

export default BackButton;
