import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    Container,
    MenuContainer,
    Title
} from './styled';

import { MaterialCommunityIcons as MdMenu } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

const Header = () => {

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
            <Title>Gc<Text style={styles.p}>.</Text></Title>
        </Container>
    )
}

const styles = StyleSheet.create({
    p: {
        color: '#5785F4',
        fontWeight: 'bold',
        fontSize: 34,
    },
    
})

export default Header
