import React from 'react';
import {ButtonPress, TextButton} from './styles';

function Button({title, onPress}) {
  return (
    <ButtonPress onPress={onPress}>
      <TextButton>{title}</TextButton>
    </ButtonPress>
  );
}

export default Button;
