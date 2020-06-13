import React from 'react';
import {ContainerHeader, HeaderLogo, View} from './styles';

const logo = '../../../resources/Movie_app_01.png';

function Header() {
  return (
    <View>
      <ContainerHeader>
        <HeaderLogo source={require(logo)} />
      </ContainerHeader>
    </View>
  );
}

export default Header;
