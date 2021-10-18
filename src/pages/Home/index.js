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
            <ContainerTextPrincipal>
                <Text style={styles.titulo}>Explore e Descubra Artistas</Text>
            </ContainerTextPrincipal>

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
    titulo: {
        fontFamily: "Nunito_700Bold",
        fontSize: 35,
        width: 295,
        color: "#000000",
    },

    subtitulo: {
        fontSize: 16,
        fontFamily: "Nunito_200ExtraLight",
        color: "#000",
    }
})

export default HomePage
