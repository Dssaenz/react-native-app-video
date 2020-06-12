import React from 'react';
import {ContainerHeader, HeaderLogo} from './styles';

const logo = '../../../resources/Movie_app_01.png';

function Header(props) {
  return (
    <ContainerHeader>
      {props.children && <HeaderLogo>{props.children}</HeaderLogo>}
      <HeaderLogo source={require(logo)} />
    </ContainerHeader>
  );
}

export default Header;
