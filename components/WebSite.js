import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const WebWindow = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView source={{uri: 'https://reactnative.dev/docs/libraries'}} />
    </View>
  );
};

export default WebWindow;
