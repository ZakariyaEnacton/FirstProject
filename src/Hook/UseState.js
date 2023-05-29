import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import hookUseStateStyle from '../style/hookUseStateStyle';

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={stateStyle.button}>
        <View>
          <Text style={stateStyle.text}>Click Here</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={stateStyle.countText}>{count}</Text>
      </View>
    </View>
  );
};

export default UseStateExample;
