import {Text, View} from 'react-native';
import style from '../../style';

const UserData = props => {
  const getData = props.data;
  return (
    <View style={style.box}>
      <Text style={style.item}>{getData.id}</Text>
      <Text style={style.item}>{getData.name}</Text>
      <Text style={style.item}>{getData.email}</Text>
    </View>
  );
};

export default UserData;
