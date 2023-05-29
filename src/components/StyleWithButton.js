import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import style from '../../style';

const StyleWithButton = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text style={[style.button, style.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[style.button, style.error]}>Error</Text>
      </TouchableHighlight>
    </View>
  );
};
export default StyleWithButton;
