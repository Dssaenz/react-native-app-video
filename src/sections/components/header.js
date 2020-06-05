import React from 'react';
import {ContainerHeader, HeaderLogo} from './styles';

function Header(props) {
  return (
    <ContainerHeader>
      <HeaderLogo />
      <HeaderLogo>{props.children}</HeaderLogo>
    </ContainerHeader>
  );
}

export default Header;
