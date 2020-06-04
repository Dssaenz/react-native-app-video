import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/sections/components/header';

function App() {
  return (
    <SafeAreaView>
      <Header />
      <Text>Body</Text>
      <Text>Footer</Text>
    </SafeAreaView>
  );
}

export default App;
