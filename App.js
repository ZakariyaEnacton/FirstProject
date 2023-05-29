/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Compo from './Layoutdesign/Compo';
import CompWithloop from './src/components/ComponentInLoop';
import SectList from './src/components/SectionList';
import StyleWithButton from './src/components/StyleWithButton';
import RadioButtonUI from './src/components/Radio';
import DynaRadio from './src/components/DynamicRadio';
import ActInd from './src/components/ActivityIndic';
import style from './style';
import DialogModal from './src/components/DialogModal';
import PressBtn from './src/components/ButtonPressable';
import Statusbar from './src/components/Statusbar';
import CheckPlatform from './src/components/CheckPlatformOs';
import WebWindow from './src/components/WebSite';
import CustMod from './src/components/CustomModal';
import Login from './src/components/Login';
import Home from './src/components/Home';
import User from './src/components/User';
import FlatListExample from './src/components/FlatListExample';
import ImgExmp from './src/components/ImageExample';
import KeyboardAvoiding from './src/components/KeyboardAvoidingCompoonent';
import RefControlView from './src/components/RefControlView';
import ScrolViewCompo from './src/components/ScrolViewComponent';
import SwitchComponent from './src/components/SwitchComponent';
import ButtonTouchableOpacity from './src/components/ButtonTouchableOpacity';

// function Info() {
//   console.warn('Hey! This is function call');
// }

const Stack = createNativeStackNavigator();
const App = () => {
  // function updateName() {
  //   setCompany('EnactOn Technology');
  // }

  // let person = 'Jhon';
  const [company, setCompany] = useState('EnactOn');
  const [name, setName] = useState('Jhon');
  const [age, setAge] = useState(20);
  const [email, setEmail] = useState('jhon@test.com');
  const [add, setAdd] = useState('Surat');
  const [selectRadio, setSelectRadio] = useState();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <SectList /> */}
      {/* <SwitchComponent /> */}
      <ButtonTouchableOpacity />
      {/* <ImgExmp /> */}
      {/* <KeyboardAvoiding /> */}
      {/* <RefControlView /> */}
      {/* <ScrolViewCompo /> */}
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    //   {/* <FlatListExample /> */}
    //   {/* <ActInd /> */}
    // </NavigationContainer>
    // <View style={style.container}>
    //   <CustMod />
    //   {/* <WebWindow />
    //   <Text>Hello</Text> */}
    //   {/* <CheckPlatform /> */}
    //   {/* <Statusbar /> */}
    //   {/* <PressBtn /> */}
    //   {/* <DialogModal /> */}
    //   {/* <DynaRadio /> */}
    //   {/* <RadioButtonUI /> */}
    //   {/* <Text style={{fontSize: 30}}>{company}</Text>
    //   <Button title="on Press" color={'red'} onPress={Info} />
    // <Button title="Press" onPress={updateName} /> */}
    //   {/* <Button
    //     title="Update Name"
    //     onPress={() => {
    //       setName('Mike'),
    //       setAge(22),
    //       setEmail('mike@test.com'),
    //       setAdd('Mumbai');
    //     }}
    //     />*/
    // {/* <User myName={name} myAge={age} myEmail={email} myAddress={add} /> */}
    //   {/* <Text>Hello</Text> */}
    //   {/* <Compo /> */}
    //   {/* <StyleWithButton /> */}
    // </View>
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
