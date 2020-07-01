import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Input, Button, IndicatorLoading, Error} from '../components';
import {AuthContext} from '../navigator/AuthProvider';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

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
    <View>
      <Text>Login</Text>
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
      <Button title={'Login'} onPress={() => userLogin(email, password)} />
      <Button title={'with google'} onPress={onGoogleButtonPress} />
      <Button
        title={'Registrate'}
        onPress={() => navigation.navigate('Register')}
      />
      <Text>{error && <Error error={error} />}</Text>
    </View>
  );
}

export default LoginScreen;
