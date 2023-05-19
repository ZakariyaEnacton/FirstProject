import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import styles from '../style';

const InputVal = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={styles.lable}>Your Name : {name}</Text>
      <TextInput
        placeholder="Enter your name "
        style={styles.textInput}
        value={name}
        onChangeText={val => setName(val)}
      />
      <Button title="Clear" onPress={() => setName('')} />
    </View>
  );
};

export default InputVal;
