import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import touchableOpacityStyle from '../style/touchableOpacityStyle';

const ButtonTouchableOpacity = () => {
  const [count, setCount] = useState(0);

  const countNumber = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={countNumber}
        activeOpacity={0.5}
        style={tochableStyle.touchButton}>
        <Text style={touchableOpacityStyle.touchText}>Click Here</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', fontSize: 24}}>{count}</Text>
    </View>
  );
};

export default ButtonTouchableOpacity;
