import React, {useState} from 'react';
import {View, StatusBar, Button} from 'react-native';

const Statusbar = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');
  return (
    <View>
      <StatusBar backgroundColor="#99caaa" barStyle={barStyle} hidden={hide} />
      <View style={{margin: 10}}>
        <Button title="toggle " onPress={() => setHide(!hide)} />
      </View>
      <View style={{margin: 10}}>
        <Button
          title="bar style "
          onPress={() => setBarStyle('dark-content')}
        />
      </View>
    </View>
  );
};

export default Statusbar;
