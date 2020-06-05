import React from 'react';
import {View, Text} from 'react-native';

function SectionList(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      {props.children}
    </View>
  );
}

export default SectionList;
