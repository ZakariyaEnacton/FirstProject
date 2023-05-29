import React from 'react';
import {Text, View, SectionList} from 'react-native';
import style from '../style/style';

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

  const SectionItem = props => {
    return (
      <View>
        <Text style={{marginLeft: 25}}>{props.item}</Text>
      </View>
    );
  };

  const SectionFooter = props => {
    return (
      <View>
        <Text>{props}</Text>
      </View>
    );
  };

  const SectionHeader = (props, props1) => {
    return (
      <View>
        {console.log('props:', props, 'props1:', props1)}
        <Text style={{marginLeft: 5, fontSize: 24, color: 'red'}}>
          {props} : {props1}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={style.text}>Section List React Native</Text>
      <SectionList
        renderSectionFooter={({section: {name}}) => SectionFooter(name)}
        sections={users}
        renderItem={item => SectionItem(item)}
        renderSectionHeader={({section: {id, name}}) => SectionHeader(id, name)}
      />
    </View>
  );
};

export default SectList;
