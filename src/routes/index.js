import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRouter from './stackRoutes';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Favoritos from '../pages/Favoritos';

const Drawer = createDrawerNavigator();

const Routes = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    
                    paddingTop: 30,
                },

                
            }}
        >
            <Drawer.Screen 
                name="HomeDrawer"
                component={StackRouter}
                options={{
                    title: "Início",
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Favoritos"
                component={Favoritos}
                options={{
                    title: "Favoritos",
                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialIcons
                            name={focused ? 'favorite' : 'favorite-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes
