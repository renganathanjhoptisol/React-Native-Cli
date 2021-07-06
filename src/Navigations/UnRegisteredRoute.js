import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginsScreen from '../Screens/LoginsScreen';


const Stack = createStackNavigator();

const UnRegisteredRoute = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginsScreen} options={{ headerShown : false }}/>
        </Stack.Navigator>
    );
}

export default UnRegisteredRoute;