import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {configure} from 'mobx';

configure({
  enforceActions: 'never',
});

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
