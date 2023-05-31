import React, {createContext} from 'react';
import {Text, View} from 'react-native';
import ComponentOne from '../components/ComponentOne';

const CompanyName = createContext();
const CompanyType = createContext();

const ContextHookExample = () => {
  return (
    <View>
      <CompanyName.Provider value={'EnactOn Technology'}>
        <CompanyType.Provider value={'Software Develpoment'}>
          <ComponentOne />
        </CompanyType.Provider>
      </CompanyName.Provider>
      {/* <Text>useContext Hook Example</Text> */}
    </View>
  );
};

export default ContextHookExample;
export {CompanyName, CompanyType};
