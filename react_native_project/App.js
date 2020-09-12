import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Single1 from './screen/Single1';
import Single2 from './screen/Single2';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaView />
        <Tab.Navigator>
          <Tab.Screen name="1週間前まで" component={Single1} />
          <Tab.Screen name="2週間前まで" component={Single2} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
