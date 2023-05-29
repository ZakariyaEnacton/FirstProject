import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import touchableOpacityStyle from '../style/touchableOpacityStyle';

const ButtonTouchableOpacity = () => {
  return (
    <View>
      <TouchableOpacity style={{backgroundColor: 'green'}}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTouchableOpacity;
