import {Text, View} from 'react-native';

const User = val => {
  // console.warn(props.name);
  return (
    <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
      <Text style={{fontSize: 25, color: 'white', margin: 5}}>
        Name : {val.myName}
      </Text>
      <Text style={{fontSize: 25, color: 'white', margin: 5}}>
        Age : {val.myAge}
      </Text>
      <Text style={{fontSize: 25, color: 'white', margin: 5}}>
        Email : {val.myEmail}
      </Text>
      <Text style={{fontSize: 25, color: 'white', margin: 5}}>
        Add : {val.myAddress}
      </Text>
    </View>
  );
};

export default User;
