import React from 'react';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Provider} from './src/context/BlogContext'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
<NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen  name = "IndexScreen" component={IndexScreen} options={{ headerShown: true }} />
          <Stack.Screen  name = "ShowScreen" component={ShowScreen} options={{ headerShown: true }} />
          <Stack.Screen  name = "CreateScreen" component={CreateScreen} options={{ headerShown: true }} />
          <Stack.Screen  name = "EditScreen" component={EditScreen} options={{ headerShown: true }} />
 
        </Stack.Navigator>
</NavigationContainer>
</Provider>
)};
