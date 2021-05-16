import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './controller/StartScreen'
import GameScreen from './controller/GameScreen'
import ScoreScreen from './controller/ScoreScreen'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="ScoreScreen" component={ScoreScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
