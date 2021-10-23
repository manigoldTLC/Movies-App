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
                        size={25}
                        color="#FE66CB"
                    />
                ) : (
                    <MaterialIcons
                        name="favorite-outline"
                        size={25}
                        color="#fff"
                    />
                )}
            </ContainerFavorite>
        </Container>
    )
}

export default HeaderStack
