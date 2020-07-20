import React, {useState, useContext} from 'react';
import {Text} from 'react-native';
import {
  Input,
  Button,
  IndicatorLoading,
  Error,
  // RoundedButton,
  ModalContainer,
} from '../../components';
import {AuthContext} from '../../navigator/AuthProvider';
import {
  Container,
  Content,
  Title,
  TextContent,
  TextAccount,
  TextCreate,
  PrincipalLayout,
  Logo,
  // ButtonSection,
  SectionButton,
  // Option,
  // Line,
  // TextOr,
} from './styles';
import auth from '@react-native-firebase/auth';

const font = require('../../../resources/blue.jpg');
const logo = require('../../../resources/logo.png');
// const facebook = require('../../../resources/facebook.png');
// const google = require('../../../resources/google.png');
// const twitter = require('../../../resources/twitter.png');

function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const userLogin = async (paramEmail, paramPassword) => {
    setLoading(true);
    try {
      await login(paramEmail, paramPassword);
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
          <Title>WELCOME</Title>
          <Title>AGAIN!</Title>
          <TextContent>
            <TextAccount>Don´t have an account? </TextAccount>
            <TextCreate onPress={() => navigation.navigate('Register')}>
              <TextAccount isPress>Create your account</TextAccount>
            </TextCreate>
          </TextContent>
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
              title={'Login'}
              onPress={() => userLogin(email, password)}
            />
          </SectionButton>
          {/* <Option>
            <Line />
            <TextOr>Or</TextOr>
            <Line />
          </Option>
          <ButtonSection>
            <RoundedButton icon={facebook} />
            <RoundedButton icon={google} />
            <RoundedButton icon={twitter} />
          </ButtonSection> */}
          <Text>{error && <Error error={error} />}</Text>
        </ModalContainer>
      </PrincipalLayout>
    </Container>
  );
}

export default LoginScreen;
