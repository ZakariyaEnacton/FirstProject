import React from 'react';
import {Text, View} from 'react-native';
import contextStyle from '../style/ContextHookStyles';
import ComponentTwo from './ComponentTwo';

const ComponentOne = () => {
  return (
    <View>
      <ComponentTwo />
    </View>
  );
};

export default ComponentOne;
