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
import SuggestionsList from './src/videos/containers/suggestionList';
function App() {
  return (
    <SafeAreaView>
      <Header />
      <SuggestionsList />
    </SafeAreaView>
  );
}

export default App;
