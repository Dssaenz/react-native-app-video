import React, {useContext} from 'react';
import {
  ContainerHeader,
  HeaderLogo,
  View,
  SectionPress,
  LogoutButton,
} from './styles';
import {AuthContext} from '../../navigator/AuthProvider';

const logo = require('../../../resources/Movie_app_01.png');
const logoutIcon = require('../../../resources/logout.png');

function Header() {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <ContainerHeader>
        <HeaderLogo source={logo} />
        <SectionPress onPress={() => logout()}>
          <LogoutButton source={logoutIcon} />
        </SectionPress>
      </ContainerHeader>
    </View>
  );
}

export default Header;
