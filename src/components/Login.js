import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import InputVal from './InputTextValue';
import style from '../style/style';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Login = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View>
      <View style={style.loginFieldView}>
        <Text style={style.loginText}>Name :</Text>
        <TextInput
          style={style.loginInputText}
          placeholder="Enter Name"
          onChangeText={myname => setName(myname)}
          value={name}
        />
      </View>
      <View style={style.loginFieldView}>
        <Text style={style.loginText}>Email :</Text>
        <TextInput
          style={style.loginInputText}
          placeholder="Enter email"
          onChangeText={myemail => setEmail(myemail)}
          value={email}
        />
      </View>
      <View style={style.loginFieldView}>
        <TouchableHighlight
          underlayColor=""
          onPress={() =>
            props.navigation.navigate('Home', {
              getName: name,
              getEmail: email,
            })
          }>
          <Text style={style.loginBtn}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;
