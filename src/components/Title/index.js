import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, TextPrincipal } from './styled';
import { Nunito_700Bold, Nunito_400Regular, Nunito_200ExtraLight, useFonts } from '@expo-google-fonts/nunito';
import { AppLoading } from 'expo';

const Title = ({ name }) => {

    const fonts = useFonts({
        Nunito_700Bold,
        Nunito_400Regular,
        Nunito_200ExtraLight
    })

    if (!fonts) {
        return <AppLoading />
    }

    return (
        <Container>
            <TextPrincipal style={styles.titulo}>{name}</TextPrincipal>
        </Container>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontFamily: "Nunito_700Bold",
        fontSize: 35,
        width: 295,
        color: "#000000",
    },
})

export default Title;
