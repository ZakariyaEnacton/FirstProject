/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import User from './components/User';

// function Info() {
//   console.warn('Hey! This is function call');
// }

const App = () => {
  // function updateName() {
  //   setCompany('EnactOn Technology');
  // }

  // let person = 'Jhon';
  // const [company, setCompany] = useState('EnactOn');
  const [name, setName] = useState('Jhon');
  const [age, setAge] = useState(20);
  const [email, setEmail] = useState('jhon@test.com');
  const [add, setAdd] = useState('Surat');

  return (
    <View>
      {/* <Text style={{fontSize: 30}}>{company}</Text>
      <Button title="on Press" color={'red'} onPress={Info} />
      <Button title="Press" onPress={updateName} /> */}
      <Button
        title="Update Name"
        onPress={() => {
          setName('Mike'),
            setAge(22),
            setEmail('mike@test.com'),
            setAdd('Mumbai');
        }}
      />
      <User myName={name} myAge={age} myEmail={email} myAddress={add} />
    </View>
  );
};

export default App;
