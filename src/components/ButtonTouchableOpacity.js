import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import touchableOpacityStyle from '../style/touchableOpacityStyle';

const ButtonTouchableOpacity = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} style={tochableStyle.touchButton}>
        <Text style={touchableOpacityStyle.touchText}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTouchableOpacity;
