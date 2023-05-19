import {StyleSheet, Text, View} from 'react-native';
import ExStyle from '../style';

const User = val => {
  // console.warn(props.name);
  return (
    <View style={style.view}>
      <Text style={ExStyle.button}>Name : {val.myName}</Text>
      <Text style={style.text}>Age : {val.myAge}</Text>
      <Text style={style.text}>Email : {val.myEmail}</Text>
      <Text style={style.text}>Add : {val.myAddress}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    // backgroundColor: 'green',
    margin: 5,
    padding: 5,
  },
  text: {
    color: 'black',
    backgroundColor: 'lightgray',
    fontSize: 25,
    margin: 5,
    padding: 10,
    borderRadius: 20,
    height: 90,
    textAlignVertical: 'center',
  },
});

export default User;
