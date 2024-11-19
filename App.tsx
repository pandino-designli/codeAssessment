/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { AppStack } from '@navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </>
  );
}

export default App;
