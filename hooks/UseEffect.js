import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import style from '../style';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn('Hey! use of useEffect');
  }, []);

  return (
    <View>
      <Text style={{fontSize: 24, marginLeft: 5}}>useEffect Hook {count}</Text>
      <View style={{margin: 10}}>
        <Button title="press" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};

export default UseEffect;
