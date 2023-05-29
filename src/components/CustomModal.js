import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import style from '../style/style';

const CustMod = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={style.container}>
      {show ? (
        <View style={style.modal}>
          <View style={style.modalBody}>
            <Text style={style.modalT}>Hey! Custom Modal</Text>
            <TouchableHighlight onPress={() => setShow(false)}>
              <Text style={[style.openBtn, style.closeBtn]}>
                Press to close
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      ) : null}
      <TouchableHighlight onPress={() => setShow(true)}>
        <Text style={style.openBtn}>Press to open</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CustMod;
