import React from 'react';
import {Text, View} from 'react-native';
import contextStyle from '../style/ContextHookStyles';
import {CompanyName, CompanyType} from '../Hook/ContextHook';

const ComponentThree = () => {
  return (
    <View>
      <CompanyName.Consumer>
        {cName => {
          return (
            <CompanyType.Consumer>
              {cType => {
                return (
                  <Text style={contextStyle.compText}>
                    Wecome to {cName} for {cType}
                  </Text>
                );
              }}
            </CompanyType.Consumer>
          );
        }}
      </CompanyName.Consumer>
    </View>
  );
};

export default ComponentThree;
