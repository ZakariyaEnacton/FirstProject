import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import contextStyle from '../style/ContextHookStyles';
import ComponentThree from './ComponentThree';
import {CompanyName, CompanyType} from '../Hook/ContextHook';
import style from '../style/style';

const ComponentTwo = () => {
  const cName = useContext(CompanyName);
  const cType = useContext(CompanyType);
  return (
    <View>
      <Text style={contextStyle.compText}>
        Welcome to {cName} for {cType}
      </Text>
    </View>
  );
};

export default ComponentTwo;
