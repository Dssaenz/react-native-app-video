import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {
  Input,
  Button,
  Error,
  IndicatorLoading,
  Loader,
  ModalContainer,
} from '../../components';
import {AuthContext} from '../../navigator/AuthProvider';

import {
  Container,
  PrincipalLayout,
  Content,
  Logo,
  Title,
  TitleSub,
  SectionButton,
  TextContent,
  TextAccount,
  TextCreate,
} from './styles';

const font = require('../../../resources/blue.jpg');
const logo = require('../../../resources/logo.png');

function RegisterScreen({navigation}) {
  const {register} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const userRegister = async (paramEmail, paramPassword) => {
    setLoading(true);
    try {
      await register(paramEmail, paramPassword);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  if (loading) {
    return <IndicatorLoading loading={loading} />;
  }
  return (
    <Container source={font}>
      <PrincipalLayout>
        <Content>
          <Logo source={logo} />
        </Content>
        <ModalContainer>
          <Title>CREATE</Title>
          <TitleSub>ACOUNT</TitleSub>
          <Input
            placeholder={'Email'}
            keyboardType={'email-address'}
            value={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
          <Input
            placeholder={'Password'}
            secureTextEntry
            value={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
          />
          <SectionButton>
            <Button
              title={'Registrarse'}
              onPress={() => userRegister(email, password)}
            />
          </SectionButton>
          <TextContent>
            <TextAccount>Already have an account? </TextAccount>
            <TextCreate onPress={() => navigation.navigate('Login')}>
              <TextAccount isPress>Login here</TextAccount>
            </TextCreate>
          </TextContent>
        </ModalContainer>
      </PrincipalLayout>
    </Container>
  );
}

export default RegisterScreen;
