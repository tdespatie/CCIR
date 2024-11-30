import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OrgSelection from './src/screens/OrgSelection';
import DateTimeGroup from './src/screens/DateTimeGroup';

enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrgSelectionRevised"
          component={OrgSelection}
          options={{title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="DateTimeGroup"
          component={DateTimeGroup}
          options={{title: '', headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
