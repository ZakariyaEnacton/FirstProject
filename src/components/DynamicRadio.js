import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const DynaRadio = () => {
  const [selectRadio, setSelectRadio] = useState();

  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'Php',
    },
    {
      id: 3,
      name: 'Sql',
    },
    {
      id: 4,
      name: 'React',
    },
    {
      id: 5,
      name: 'Python',
    },
  ];
  return (
    <View>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectRadio(item.id)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {selectRadio === item.id ? (
                <View style={style.radioBg}></View>
              ) : null}
            </View>
            <Text style={style.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DynaRadio;
