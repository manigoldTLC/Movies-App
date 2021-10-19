import React from 'react'
import {
    ContainerPage,
    ContainerTextPrincipal,
    ContainerCardsHome,
    ContainerSubtitulo
} from './styled'
import { StyleSheet, Text } from 'react-native'
import { Nunito_700Bold, Nunito_400Regular, Nunito_200ExtraLight, useFonts } from '@expo-google-fonts/nunito'
import { AppLoading } from 'expo'
import CardsHome from '../../components/CardsHome'

import Header from '../../components/Header'
import Title from '../../components/Title'

const HomePage = () => {

    const fonts = useFonts({
        Nunito_700Bold,
        Nunito_400Regular,
        Nunito_200ExtraLight
    })

    if (!fonts) {
        return <AppLoading />
    }

    return (
        <ContainerPage>
            <Header />

            <Title name="Explore e Descubra Artistas" />

            <ContainerCardsHome>
                <CardsHome name="Artistas"/>
                <CardsHome name="Quadros"/>
            </ContainerCardsHome>

            <ContainerSubtitulo>
                <Text style={styles.subtitulo}>Descubra uma coleção de artistas e artes</Text>
            </ContainerSubtitulo>
        </ContainerPage>
    )
}

const styles = StyleSheet.create({

    subtitulo: {
        fontSize: 16,
        fontFamily: "Nunito_200ExtraLight",
        color: "#000",
    }
})

export default HomePage
