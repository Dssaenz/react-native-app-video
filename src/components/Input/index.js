import React from 'react';
import {InputText} from './styles';

function Input({labelValue, placeholderText, ...rest}) {
  return (
    <InputText
      value={labelValue}
      placeholderTextColor="#90949e"
      placeholder={placeholderText}
      {...rest}
    />
  );
}

export default Input;
