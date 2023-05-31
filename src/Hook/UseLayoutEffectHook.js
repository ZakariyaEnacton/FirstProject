import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import layoutEffect from '../style/UseLayoutEffectStyle';

const UseLayoutEffectHook = () => {
  const [value, setValue] = useState();

  //   useEffect(() => {
  //     if (value === 0) {
  //       setValue(Math.random() * 100);
  //     }
  //     console.log('Effeect update', value);
  //   }, [value]);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 100);
    }
    console.log('use layout effect ', value);
  }, [value]);

  return (
    <View>
      <Text style={layoutEffect.effectTitle}>React Native</Text>
      <Text style={layoutEffect.effectTitle}>useLayoutEffect Hook</Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          fontWeight: 500,
        }}>
        value : {value}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={layoutEffect.effectButton}
        onPress={() => setValue(0)}>
        <Text style={layoutEffect.effectButtonText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseLayoutEffectHook;
