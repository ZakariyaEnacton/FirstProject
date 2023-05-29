import {StyleSheet, Text, View} from 'react-native';
import ExStyle from '../style/style';

const User = props => {
  // console.warn(props.name);
  {
    console.log('Value', props);
  }
  return (
    <View style={style.view}>
      <Text style={ExStyle.textView}>Name : {props.myName}</Text>
      <Text style={style.text}>Age : {props.myAge}</Text>
      <Text style={style.text}>Email : {props.myEmail}</Text>
      <Text style={[style.text, ExStyle.textView]}>
        Add : {props.myAddress}
      </Text>
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
