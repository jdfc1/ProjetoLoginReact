import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Screens/login';
import Redefinir from './src/Screens/redefinir';
import Cadastro from './src/Screens/cadastro';
import Home from './src/Screens/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
  
        <Stack.Screen options={{headerShown: false}}
                      name="Login" component={Login} />

        <Stack.Screen options={{headerShown: false}}
                      name="Redefinir" component={Redefinir} />
      
        <Stack.Screen options={{headerShown: false}}
                      name="Cadastro" component={Cadastro} />

        <Stack.Screen options={{headerShown: false}}
                      name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;