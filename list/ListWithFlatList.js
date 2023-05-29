import React from 'react';
import {FlatList, Text, View} from 'react-native';
import style from '../src/style/style';

const ListData = () => {
  const user = [
    {
      id: 1,
      name: 'Jhon',
    },
    {
      id: 2,
      name: 'Mike',
    },
    {
      id: 3,
      name: 'Bruce',
    },
    {
      id: 4,
      name: 'Phillip',
    },
    {
      id: 5,
      name: 'Glenn',
    },
  ];
  return (
    <View>
      <Text style={style.text}>User List</Text>
      <FlatList
        data={user}
        renderItem={({item}) => <Text style={style.list}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListData;
