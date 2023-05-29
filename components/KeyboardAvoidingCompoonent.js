import React from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const KeyboardAvoiding = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      style={styles.container}>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text>Header</Text>
          <TextInput placeholder="Enter Username" />
          <View>
            <Button title="Submit" />
          </View>
        </View>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {padding: 24, flex: 1, justifyContent: 'space-around'},
});

export default KeyboardAvoiding;
