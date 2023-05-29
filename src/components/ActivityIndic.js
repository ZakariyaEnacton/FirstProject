import React, {useState} from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';

const ActInd = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <View style={style.radioMain}>
      <ActivityIndicator size={50} animating={show} color="#558853" />
      <Button
        title="Show Indicator"
        onPress={displayLoader}
        accessibilityLabel="Hello"
      />
    </View>
  );
};
export default ActInd;
