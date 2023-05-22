import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import style from '../style';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  useEffect(() => {
    console.warn(`count is called ${count}`);
  }, [count]);

  useEffect(() => {
    console.warn(`data is called ${data}`);
  }, [data]);

  return (
    <View>
      <Text style={{fontSize: 24, marginLeft: 5}}>useEffect Hook</Text>

      <View style={{margin: 10}}>
        <Button title="count" onPress={() => setCount(count + 1)} />
      </View>
      <View style={{margin: 10}}>
        <Button title="data" onPress={() => setData(data + 1)} />
      </View>

      <Effect val={{data, count}} />
    </View>
  );
};

const Effect = props => {
  console.warn(props.val);
  useEffect(() => {
    console.warn(props.val.count);
  }, [props.val.count]);

  useEffect(() => {
    console.warn(props.val.data);
  }, [props.val.data]);
  return (
    <View style={{margin: 10}}>
      <Text style={{fontSize: 18, color: '#7F4C15', marginTop: 5}}>
        count : {props.val.count}
      </Text>

      <Text style={{fontSize: 18, color: '#7F4C15', marginTop: 5}}>
        data : {props.val.data}
      </Text>
    </View>
  );
};

export default UseEffect;
