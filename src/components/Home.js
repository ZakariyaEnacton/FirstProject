import React, {useState} from 'react';
import {Text, View} from 'react-native';
import style from '../../style';

const Home = ({route}) => {
  return (
    <View style={style.homeContainer}>
      <View>
        <Text style={style.homeHeading}>Welcome to Home Page </Text>
        {/* {console.log('Props', props)} */}
      </View>
      <View style={style.homeInfo}>
        <Text style={style.homeText}>Name : {route.params.getName}</Text>
        <Text style={style.homeText}>Email : {route.params.getEmail}</Text>
      </View>
    </View>
  );
};

export default Home;
