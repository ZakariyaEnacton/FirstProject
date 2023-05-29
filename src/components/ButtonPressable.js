import React from 'react';
import {Pressable, View, Text} from 'react-native';
import style from '../style/style';

const PressBtn = () => {
  return (
    <View>
      <Pressable
        onPress={() => console.warn('normal press')}
        onLongPress={() => console.warn('long press')}
        onPressIn={() => console.warn('press in')}
        onPressOut={() => console.warn('press out')}>
        <Text style={style.pressBtn}>Pressable Button</Text>
      </Pressable>
    </View>
  );
};

export default PressBtn;
