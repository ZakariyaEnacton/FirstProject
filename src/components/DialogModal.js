import React, {useState} from 'react';
import {Button, Modal, Text, TouchableHighlight, View} from 'react-native';
import style from '../style/style';

const DialogModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Modal transparent={true} visible={open} animationType="fade">
        <View style={style.modalWrapper}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Hey! There I am here.</Text>
            <TouchableHighlight onPress={() => setOpen(false)}>
              <Text style={style.modalClose}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={() => setOpen(true)}>
        <Text style={style.modalOpen}>Press</Text>
      </TouchableHighlight>
      {/* <Button title="Press" /> */}
    </View>
  );
};

export default DialogModal;
