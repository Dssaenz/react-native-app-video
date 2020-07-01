import React from 'react';
import {TextInput} from 'react-native';

function Input({labelValue, placeholderText, ...rest}) {
  return (
    <TextInput value={labelValue} placeholder={placeholderText} {...rest} />
  );
}

export default Input;
