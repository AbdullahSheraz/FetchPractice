import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { LogBox } from 'react-native';

const AppNavigation = () => {

 
  const Stack = createNativeStackNavigator();
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
  ])

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation