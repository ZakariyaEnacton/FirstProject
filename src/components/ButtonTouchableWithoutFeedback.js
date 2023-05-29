import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import btnWithoutFeedback from '../style/touchableWithoutFeedback';

const ButtonTouchWithoutFeedback = () => {
  const [count, setCount] = useState(0);

  const countNum = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>{count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={countNum}>
        <View style={[btnWithoutFeedback.button]}>
          <Text style={{color: 'white'}}>Click Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ButtonTouchWithoutFeedback;
