import React from 'react';
import { Container } from './styles';
import { Ionicons } from '@expo/vector-icons';

const HeaderStack = ({ color, navigateGoBack }) => {
    return (
        <Container onPress={navigateGoBack}>
            <Ionicons
                name="arrow-back-sharp"
                size={30}
                color={color}
            />
        </Container>
    )
}

export default HeaderStack
