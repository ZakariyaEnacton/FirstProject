import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Todos from '../components/Todos';

const CallbackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increament = () => {
    setCount(count + 1);
  };

  const addTodos = () => {
    setTodos(prev => [...prev, `New add`]);
  };
  return (
    <View>
      <Todos todos={todos} addTodos={addTodos} />
      <Text>
        Count : {count}
        <TouchableOpacity onPress={increament}>
          <Text> + </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default CallbackHook;
