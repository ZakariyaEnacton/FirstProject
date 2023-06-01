import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import refStyle from '../style/useRefStyle';

const UseRefHook = () => {
  const refElem = useRef(0);

  const handleRef = () => {
    refElem.current = refElem.current + 1;
    console.log('Clicked me', refElem.current, 'time!');
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={handleRef}>
        <Text style={refStyle.refButtonText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefHook;
