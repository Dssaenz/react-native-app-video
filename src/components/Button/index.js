import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

function Button({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
