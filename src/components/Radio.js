import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from '../../style';

const RadioButtonUI = () => {
  const [selectRadio, setSelectRadio] = useState(1);

  return (
    <View>
      <TouchableOpacity onPress={() => setSelectRadio(1)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 1 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectRadio(2)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 2 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectRadio(3)}>
        <View style={style.radioWrapper}>
          <View style={style.radio}>
            {selectRadio === 3 ? <View style={style.radioBg}></View> : null}
          </View>
          <Text style={style.radioText}>Radio Button 3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButtonUI;
