import {View, Text, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import reducerStyle from '../style/reducerStyle';

const UseReducerHook = () => {
  const initialState = {count: 0};

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increament':
        return {count: state.count + 1};
      case 'decreament':
        return {count: state.count - 1};
      case 'reset':
        return initialState;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Text>UseReducerHook</Text>
      <View>
        <Text>{state.count}</Text>
      </View>
      <View style={reducerStyle.reducerBtnWrapper}>
        <TouchableOpacity onPress={() => dispatch({type: 'increament'})}>
          <Text style={reducerStyle.reducerBtnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({type: 'decreament'})}>
          <Text style={reducerStyle.reducerBtnText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => dispatch({type: 'reset'})}>
        <Text style={reducerStyle.reducerBtnText}>reset</Text>
      </TouchableOpacity>
    </>
  );
};

export default UseReducerHook;
