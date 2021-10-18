import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '../pages/Home'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{
                        title: false,
                        headerShown: false
                    }}
                />
            </Stack.Navigator>


        </NavigationContainer>
    )
}

export default Routes
