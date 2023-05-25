import React from 'react';
import {Text, View, SectionList} from 'react-native';
import style from '../style';

const SectList = () => {
  const users = [
    {
      id: 1,
      name: 'Sam',
      data: ['Bootstrap', 'Angular', 'React JS'],
    },
    {
      id: 2,
      name: 'Jhon',
      data: ['CSS', 'Vue JS', 'Next JS'],
    },
    {
      id: 3,
      name: 'Sam',
      data: ['Front-end', 'Python', '.Net'],
    },
    {
      id: 4,
      name: 'Sam',
      data: ['MongoDB', 'React Native'],
    },
  ];

  return (
    <View>
      <Text style={style.text}>Section List React Native</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={{marginLeft: 25}}>{item}</Text>}
        renderSectionHeader={({section: {id, name}}) => (
          <Text style={{marginLeft: 5, fontSize: 24, color: 'red'}}>
            {id} : {name}
          </Text>
        )}
      />
    </View>
  );
};

export default SectList;
