import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import style from '../style/style';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState('');

  const resetData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <View style={style.view}>
        <Text style={style.text}>User Form</Text>
      </View>
      <View>
        <TextInput
          style={style.textInput}
          placeholder="Enter your name"
          onChangeText={val => setName(val)}
          value={name}
        />
        <TextInput
          style={style.textInput}
          placeholder="Enter your email"
          onChangeText={val => setEmail(val)}
          value={email}
        />
        <TextInput
          style={style.textInput}
          placeholder="Enter your password"
          onChangeText={val => setPassword(val)}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={style.view}>
        <Button color={'green'} title="get" onPress={() => setDisplay(true)} />
      </View>
      <View style={style.view}>
        <Button color={'red'} title="clear" onPress={resetData} />
      </View>
      <View>
        {display ? (
          <View style={style.view}>
            <View>
              <Text>Name is : {name}</Text>
            </View>
            <View>
              <Text>Email is : {email}</Text>
            </View>
            <View>
              <Text>Password is : {password}</Text>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default UserForm;
