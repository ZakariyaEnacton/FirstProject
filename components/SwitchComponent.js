import React, {useState} from 'react';
import {Switch, View} from 'react-native';

const SwitchComponent = () => {
  const [enabled, setEnabled] = useState(false);
  const onChange = () => {
    return setEnabled(enabled => !enabled);
  };
  return (
    <View>
      <Switch
        value={enabled}
        onValueChange={onChange}
        thumbColor={'black'}
        trackColor={{true: 'green', false: 'red'}}
      />
    </View>
  );
};

export default SwitchComponent;
