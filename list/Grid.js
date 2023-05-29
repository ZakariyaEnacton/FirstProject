import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from '../src/style/style';

const GridLayout = () => {
  return (
    <View>
      <View>
        <Text style={style.text}>Grid Layout</Text>
      </View>
      <ScrollView style={{marginBottom: 80}}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
          <Text style={style.grid}>Grid</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default GridLayout;
