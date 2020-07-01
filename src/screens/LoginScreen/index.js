import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {
  Input,
  Button,
  IndicatorLoading,
  Error,
  RoundedButton,
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
  ButtonSection,
  SectionButton,
  Option,
  Line,
  TextOr,
} from './styles';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

const font = require('../../../resources/blue.jpg');
const logo = require('../../../resources/logo.png');
const facebook = require('../../../resources/facebook.png');
const google = require('../../../resources/google.png');
const twitter = require('../../../resources/twitter.png');

function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  GoogleSignin.configure({
    webClientId:
      '811721080519-16iaht8argubt1lj43eu4h8oo8c559i2.apps.googleusercontent.com',
  });
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

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

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
          <Title>WELCOME!</Title>
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
          {/* <Button title={'with google'} onPress={onGoogleButtonPress} />
      <Button
        title={'Registrate'}

        /> */}
          <Option>
            <Line />
            <TextOr>Or</TextOr>
            <Line />
          </Option>
          <ButtonSection>
            <RoundedButton icon={facebook} />
            <RoundedButton icon={google} />
            <RoundedButton icon={twitter} />
          </ButtonSection>
          <Text>{error && <Error error={error} />}</Text>
        </ModalContainer>
      </PrincipalLayout>
    </Container>
  );
}

export default LoginScreen;
