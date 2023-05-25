import React from 'react';
import {Platform, View, Text} from 'react-native';
import style from '../style';

const CheckPlatform = () => {
  return (
    <View>
      <Text style={style.platformOsText}>Platform : {Platform.OS} </Text>
      <Text style={{fontSize: 18}}>
        {JSON.stringify(Platform.constants.reactNativeVersion)}
      </Text>
    </View>
  );
};

export default CheckPlatform;
