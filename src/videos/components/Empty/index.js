import React from 'react';
import {View, Text} from 'react-native';

function Empty(props) {
  return (
    <View>
      <Text style={{color: '#fff'}}>{props.text}</Text>
    </View>
  );
}

export default Empty;
