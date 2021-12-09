import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import TabNavigation from './src/Navigation/TabNavigation';

export default function App() {
  return (
    <NavigationContainer >
      <TabNavigation />
      </NavigationContainer>
  );
}



