import React from 'react';
import {FlatList, Text, View} from 'react-native';
import style from '../style';
import UserData from './UserData';

const CompWithloop = () => {
  const users = [
    {
      id: 1,
      name: 'Jhon',
      email: 'jhon@test.com',
    },
    {
      id: 2,
      name: 'Mike',
      email: 'mike@test.com',
    },
    {
      id: 3,
      name: 'Sam',
      email: 'sam@test.com',
    },
    {
      id: 4,
      name: 'Josh',
      email: 'josh@test.com',
    },
    {
      id: 5,
      name: 'David',
      email: 'david@test.com',
    },
  ];

  return (
    <View>
      <Text style={style.text}>FlatList Component With Loop</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData data={item} />}
        scrollEnabled
      />
    </View>
  );
};

export default CompWithloop;
