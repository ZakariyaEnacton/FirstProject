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
import style from './style';

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
  const [selectRadio, setSelectRadio] = useState(1);

  return (
    <View style={style.radioMain}>
      <TouchableOpacity onPress={() => setSelectRadio(1)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 1 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectRadio(2)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 2 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectRadio(3)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 3 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectRadio(4)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 4 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 4</Text>
        </View>
      </TouchableOpacity>
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
