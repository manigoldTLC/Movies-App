import React from 'react';
import { Container, ContainerArrow, Text } from './styles';
import { Ionicons } from '@expo/vector-icons';

const HeaderFavorite = ({ color, navigateGoBack }) => {
    return (
        <Container>
            <ContainerArrow onPress={navigateGoBack}>
                <Ionicons
                    name="arrow-back-sharp"
                    size={30}
                    color={color}
                />
            </ContainerArrow>

            <Text>Favoritos</Text>
        </Container>
    )
}

export default HeaderFavorite;
