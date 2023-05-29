import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import style from '../src/style/style';

const Compo = () => {
  return (
    <View style={{flex: 1}}>
      <View style={style.box1}>
        <View style={style.innerBox1}>
          <View style={style.innerBox7}></View>
          <View style={style.innerBox8}></View>
          <View style={style.innerBox9}></View>
        </View>
        <View style={style.innerBox2}></View>
        <View style={style.innerBox3}></View>
      </View>
      <View style={style.box2}>
        <View style={style.innerBox4}></View>
        <View style={style.innerBox5}></View>
      </View>
      <View style={style.box3}>
        <View style={style.innerBox6}></View>
      </View>
    </View>
  );
};

export default Compo;
