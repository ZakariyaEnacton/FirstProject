import React from 'react';
import {Button, Text, View} from 'react-native';

import useStatus from './UseStatus';

const UseDebugValueHook = () => {
  const [pending, setPending] = useStatus();
  console.log('pending : ', pending);

  return (
    <View>
      <Text style={{marginBottom: 10}}>Pending : {pending.toString()}</Text>

      <Button title="Change Status" onPress={() => setPending(!pending)} />
    </View>
  );
};

export default UseDebugValueHook;
