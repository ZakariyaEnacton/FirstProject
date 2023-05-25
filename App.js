/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import Compo from './Layoutdesign/Compo';
// import SectList from './components/SectionList';
import StyleWithButton from './components/StyleWithButton';
import RadioButtonUI from './components/Radio';
import DynaRadio from './components/DynamicRadio';
import ActInd from './components/ActivityIndic';
import style from './style';
import DialogModal from './components/DialogModal';
import PressBtn from './components/ButtonPressable';
import Statusbar from './components/Statusbar';
import CheckPlatform from './components/CheckPlatformOs';

// function Info() {
//   console.warn('Hey! This is function call');
// }

const App = () => {
  // function updateName() {
  //   setCompany('EnactOn Technology');
  // }

  // let person = 'Jhon';
  // const [company, setCompany] = useState('EnactOn');
  // const [name, setName] = useState('Jhon');
  // const [age, setAge] = useState(20);
  // const [email, setEmail] = useState('jhon@test.com');
  // const [add, setAdd] = useState('Surat');
  const [selectRadio, setSelectRadio] = useState();

  return (
    <View>
      <CheckPlatform />
      {/* <Statusbar /> */}
      {/* <PressBtn /> */}
      {/* <DialogModal /> */}
      {/* <ActInd /> */}
      {/* <DynaRadio /> */}
      {/* <RadioButtonUI /> */}
      {/* <SectList /> */}
      {/* <Text style={{fontSize: 30}}>{company}</Text>
      <Button title="on Press" color={'red'} onPress={Info} />
    <Button title="Press" onPress={updateName} /> */}
      {/* <Button
        title="Update Name"
        onPress={() => {
          setName('Mike'),
          setAge(22),
          setEmail('mike@test.com'),
          setAdd('Mumbai');
        }}
        />
      <User myName={name} myAge={age} myEmail={email} myAddress={add} /> */}
      {/* <Text>Hello</Text> */}
      {/* <Compo /> */}
      {/* <StyleWithButton /> */}
    </View>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'Sam',
//     };
//   }

//   updateName(val) {
//     this.setState({
//       name: val,
//     });
//   }
//   greeting() {
//     console.warn('Hey! there,from App component class');
//   }
//   render() {
//     return (
//       <View>
//         <Text style={{fontSize: 24, color: 'green', margin: 5}}>
//           {this.state.name}
//         </Text>
//         <View>
//           <TextInput
//             style={{
//               borderWidth: 1,
//               margin: 10,
//               borderRadius: 10,
//             }}
//             onChangeText={text => this.updateName(text)}
//             placeholder="Enter Name"
//           />
//         </View>
//         <View style={{margin: 10}}>
//           <Button title="press" onPress={this.greeting} />
//         </View>
//         <Student name={this.state.name} />
//       </View>
//     );
//   }
// }
export default App;
