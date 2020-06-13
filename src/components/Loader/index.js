import React from 'react';
import {StyleSheet} from 'react-native';
import {Section} from './styles';
import LottieView from 'lottie-react-native';

const animation = require('../../../resources/loader.json');

function Loader() {
  return (
    <Section>
      <LottieView style={styles.lottie} source={animation} autoPlay loop />
    </Section>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 130,
  },
});

export default Loader;
