import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from '../style';

const ListWithMAp = () => {
  const dataList = [
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
      name: 'Glenn',
    },
    {
      id: 5,
      name: 'Phillip',
    },
    {
      id: 6,
      name: 'David',
    },
    {
      id: 7,
      name: 'Henry',
    },
    {
      id: 8,
      name: 'Adam',
    },
    {
      id: 9,
      name: 'Michel',
    },
    {
      id: 10,
      name: 'Shane',
    },
    {
      id: 11,
      name: 'Ambati',
    },
  ];

  return (
    <View>
      <Text style={style.text}>List with map</Text>
      <ScrollView style={{marginBottom: 110}}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {dataList.map(data => (
            <Text style={style.grid}>{data.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ListWithMAp;
