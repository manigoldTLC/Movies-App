import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRouter from './stackRoutes';

import artistasPage from '../pages/artistasPage';
import artesPage from '../pages/artesPage';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Routes = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: "#000",
                    paddingTop: 30,
                },

                drawerActiveBackgroundColor: "#474A51",
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: '#fff'
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
                name="Página Artistas"
                component={artistasPage}
                options={{
                    title: "Ver Artistas",
                    drawerIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'md-brush': 'md-brush-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="Página de Artes"
                component={artesPage}
                options={{
                    title: "Ver Artes",
                    drawerIcon: ({focused, size, color}) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'image-filter-frames' : 'image-frame'}
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
