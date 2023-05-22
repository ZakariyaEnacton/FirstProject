/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

// import User from './components/User';
// import InputVal from './components/InputTextValue';
// import style from './style';
// import UserForm from './form/FormUI';
// import ListData from './list/ListWithFlatList';
// import ListWithMAp from './list/ListWithMap';
// import GridLayout from './list/Grid';
import CompWithloop from './components/ComponentInLoop';
import SectList from './components/SectionList';
import Student from './components/Student';
import UseEffect from './hooks/UseEffect';
import HideAndShow from './components/HIdeAndShow';
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

  return (
    <View>
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
      {/* <InputVal /> */}
      {/* <UserForm /> */}
      {/* <ListData /> */}
      {/* <ListWithMAp /> */}
      {/* <GridLayout /> */}
      {/* <CompWithloop /> */}
      {/* <SectList /> */}
      {/* <UseEffect /> */}
      <HideAndShow />
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
