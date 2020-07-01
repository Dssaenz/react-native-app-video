import React from 'react';
import {Section} from './styles';

function ModalContainer(props) {
  return <Section>{props.children}</Section>;
}

export default ModalContainer;
