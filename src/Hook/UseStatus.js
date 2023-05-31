import React, {useDebugValue, useState} from 'react';
import {} from 'react-native';

const useStatus = () => {
  const [pending, setPending] = useState(true);

  useDebugValue(pending ? 'Pending is true' : 'Pending is false');

  return [pending, setPending];
};

export default useStatus;
