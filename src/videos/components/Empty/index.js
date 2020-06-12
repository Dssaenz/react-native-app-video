import React from 'react';
import {View} from './styles';
import LottieView from 'lottie-react-native';

const animation = require('../../../../resources/loader.json');

function Empty(props) {
  return (
    <View>
      <LottieView
        style={{
          width: 130,
        }}
        source={animation}
        autoPlay
        loop
      />
    </View>
  );
}

export default Empty;
