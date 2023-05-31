import {View, Text, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';
import memoStyle from '../style/MemoStyle';

const MemoHook = () => {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(true);

  const getValue = () => {
    setValue(value + 1);
  };

  const countNumber = num => {
    console.log('number is :', num);
    for (let i = 0; i <= 10000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(value);
  }, [value]);

  return (
    <View>
      <View>
        <TouchableOpacity
          style={memoStyle.button}
          activeOpacity={0.8}
          onPress={getValue}>
          <Text style={memoStyle.buttonText}>Count</Text>
        </TouchableOpacity>
      </View>
      <Text style={memoStyle.text}>Value : {checkData}</Text>
      <View>
        <TouchableOpacity
          style={memoStyle.button}
          activeOpacity={0.8}
          onPress={() => setShow(!show)}>
          <Text style={memoStyle.buttonText}>
            {show ? 'You clicked me' : 'Please click me'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MemoHook;
