import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const WebWindow = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        source={{uri: 'https://www.npmjs.com/package/react-native-webview'}}
      />
    </View>
  );
};

export default WebWindow;
