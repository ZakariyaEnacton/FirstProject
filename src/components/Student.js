import React, {Component, useState} from 'react';
import {Button, Text, View} from 'react-native';

class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 24, color: 'red', margin: 5}}>
          Student Name : {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Student;
