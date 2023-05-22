import React, {Component, useState} from 'react';
import {Button, Text, View} from 'react-native';

class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 24, color: 'green', margin: 5}}>
          Student Component
        </Text>
      </View>
    );
  }
}

export default Student;
