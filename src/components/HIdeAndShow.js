import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const HideAndShow = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{fontSize: 24, marginLeft: 5}}>Hide and Show Component</Text>
      <View style={{margin: 10}}>
        <Button title="press" onPress={() => setShow(!show)} />
      </View>
      {show ? <Compo /> : null}
    </View>
  );
};

const Compo = () => {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'green', marginLeft: 10}}>
        User Component
      </Text>
    </View>
  );
};

export default HideAndShow;
