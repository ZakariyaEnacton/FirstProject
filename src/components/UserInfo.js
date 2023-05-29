import {Text, View} from 'react-native';

let name = 'enacton';
let age = 10;
let email = 'enacton@test.com';

const UserInfo = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name : {name} </Text>
      <Text style={{fontSize: 20}}>Age : {age} </Text>
      <Text style={{fontSize: 20}}>Email : {email} </Text>
    </View>
  );
};

export default UserInfo;
