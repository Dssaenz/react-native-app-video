import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Input, Button, Error, IndicatorLoading, Loader} from '../components';
import {AuthContext} from '../navigator/AuthProvider';

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
    <View>
      <Text>Register</Text>
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
      <Button
        title={'Registrarse'}
        onPress={() => userRegister(email, password)}
      />
      <Text>{error && <Error error={error} />}</Text>
    </View>
  );
}

export default RegisterScreen;
