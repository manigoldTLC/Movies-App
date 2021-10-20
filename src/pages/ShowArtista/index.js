import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import {
    Container,
    ContainerText,
    WrapperTexts,
    TitleContainerText,
    DescriptionContainerText,
    ArtistaContainer,
    ImagemArtista,
    Subtitle,
    SliderArte,
    VerMaisContainer,
    VerMaisBotao,
    ContainerArtista,
    DescricaoArtista
} from './styled';

import { Nunito_700Bold, Nunito_400Regular, Nunito_200ExtraLight, useFonts, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'
import { AppLoading } from 'expo'

import SliderItem from '../../components/SliderItem';

const ShowArtista = () => {

    const fonts = useFonts({
        Nunito_700Bold,
        Nunito_400Regular,
        Nunito_200ExtraLight,
        Nunito_800ExtraBold
    })

    if (!fonts) {
        return <AppLoading />
    }

    return (
        <Container>
            <ArtistaContainer>
                <ImagemArtista
                    source={{ uri: 'https://source.unsplash.com/1920x1080/?girl-red' }}
                    alt="Imagem do Artista"
                />

                <ContainerText>
                    <WrapperTexts>
                        <TitleContainerText 
                            numberOfLines={1}
                            styles={ styles.fontNameArtist }    
                        >Loren Ipsun</TitleContainerText>

                        <DescriptionContainerText 
                            numberOfLines={2}
                            styles={styles.fontMiniDescription}
                        >Aqui jaz uma mini descrição</DescriptionContainerText>
                    </WrapperTexts>
                </ContainerText>

            </ArtistaContainer>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <Subtitle styles={styles.fontSubtitle}>Galeria de quadros</Subtitle>
                <SliderArte
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1, 2, 3, 4, 6, 7]}
                    renderItem={({ item }) => <SliderItem />}
                />

                <VerMaisContainer>
                    <VerMaisBotao activeOpacity={.7}>Ver mais</VerMaisBotao>
                </VerMaisContainer>

                <Subtitle styles={styles.fontSubtitle}>Um pouco sobre Loren Ipsun</Subtitle>
                <ContainerArtista>
                    <DescricaoArtista>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    </DescricaoArtista>
                </ContainerArtista>
            </ScrollView>

        </Container>
    )
}

const styles = StyleSheet.create({
    fontNameArtist: {
        fontFamily: "Nunito_800ExtraBold",
    },

    fontMiniDescription: {
        fontFamily: 'Nunito_400Regular'
    },

    fontSubtitle: {
        fontFamily: 'Nunito_700Bold'
    },

    fontDescription: {
        fontFamily: 'Nunito_400Regular'
    }
})

export default ShowArtista
