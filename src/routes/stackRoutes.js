import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/Home';
import ShowMovie from '../pages/ShowMovie';
import Search from '../pages/Search';

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

            <Stack.Screen
                name="DetalheArtista"
                component={ShowMovie}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Busca",
                    headerStyle: {
                        backgroundColor: "#000",
                    },
                    headerTintColor: "#FEFEFF"
                }}
            />
        </Stack.Navigator>
    )
}

export default stackRoutes
