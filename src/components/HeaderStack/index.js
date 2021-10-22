import React from 'react';
import { Container, ContainerArrow, ContainerFavorite } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderStack = ({ color, navigateGoBack, handleFavorite, iconCondition }) => {
    return (
        <Container>
            <ContainerArrow onPress={navigateGoBack}>
                <Ionicons
                    name="arrow-back-sharp"
                    size={30}
                    color={color}
                />
            </ContainerArrow>

            <ContainerFavorite onPress={handleFavorite}>
                {iconCondition ? (
                    <MaterialIcons
                        name="favorite"
                        size={30}
                        color="#ff66cc"
                    />
                ) : (
                    <MaterialIcons
                        name="favorite-outline"
                        size={30}
                        color="#fff"
                    />
                )}
            </ContainerFavorite>
        </Container>
    )
}

export default HeaderStack
