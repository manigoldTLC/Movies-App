import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Nunito_400Regular, useFonts } from '@expo-google-fonts/nunito';
import {
    Container,
    MenuContainer,
    Title
} from './styled';

import { MaterialCommunityIcons as MdMenu } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const Header = () => {

    const fonts = useFonts({
        Nunito_400Regular,
    })

    if (!fonts) {
        return <AppLoading />
    }

    const navigation = useNavigation();

    return (
        <Container>
            <MenuContainer onPress={() => navigation.openDrawer()}>
                <MdMenu
                    name="menu"
                    size={30}
                    color="#000"
                />
            </MenuContainer>
            <Title style={styles.title}>Gc<Text style={styles.p}>.</Text></Title>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Nunito_400Regular",
    },

    p: {
        color: '#5785F4',
        fontWeight: 'bold',
        fontSize: 34,
    },
    
})

export default Header
