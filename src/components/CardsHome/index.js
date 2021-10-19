import React from 'react';
import { Container } from './styled';
import { StyleSheet, Text } from 'react-native'
import { Nunito_400Regular, useFonts } from '@expo-google-fonts/nunito'
import { AppLoading } from 'expo'

const CardsHome = ({ name }) => {

    const fonts = useFonts({
        Nunito_400Regular,
    })

    if (!fonts) {
        return <AppLoading />
    }

    return (
        <Container>
            <Text style={styles.title}>{name}</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontStyle: 'normal',
        fontSize: 30,
        color: '#fff',
        fontFamily: "Nunito_400Regular"
    }
})

export default CardsHome
