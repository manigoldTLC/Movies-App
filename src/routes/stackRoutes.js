import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/Home';

const Stack = createNativeStackNavigator();

const stackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="HomePage"
                component={HomePage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default stackRoutes
