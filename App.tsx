import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import WelcomeScreen from './src/WelcomeScreen';
import LSelection from './src/OrgSelection';
enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false}} />
        <Stack.Screen name="LSelection" component={LSelection} options={{ title: "Command Selection"}} />
      </Stack.Navigator>
    </NavigationContainer>  );
}

export default App;
