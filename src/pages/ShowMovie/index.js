import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import {
    Container,
    ContainerText,
    WrapperTexts,
    TitleContainerText,
    DescriptionContainerText,
    FilmeContainer,
    ImagemFilme,
    Subtitle,
    VerMaisContainer,
    VerMaisBotao,
    ContainerArtista,
    DescricaoArtista,
    AvaliacaoContainer,
    Avaliacao,
    Lancamento,
    ListaGeneros,
    LoadContainer
} from './styles';
import { AntDesign } from '@expo/vector-icons'; 

import Generos from '../../components/Generos';
import HeaderStack from '../../components/HeaderStack';

import { useNavigation, useRoute } from '@react-navigation/native'

import {api, key } from '../../services/api';

const ShowMovie = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [ showMovie, setShowMovie ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        let isActive = true;

        async function getMovie() {
            const response = await api.get(`/movie/${route.params?.id}`, {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                }
            })
            .catch((error) => {
                console.log(error)
            })

            if (isActive) {
                setShowMovie(response.data);
                setLoading(false);
            }
        }

        if (isActive) {
            getMovie();
        }

        return () => {
            isActive = false;
        }

    }, [])

    if (loading) {
        return (
            <LoadContainer syles={ styles.loadContainer }>
                <ActivityIndicator size="large" color="#000"/>
            </LoadContainer>
        )
    }

    return (
        <Container>
            <HeaderStack color={"#fff"} navigateGoBack={() => navigation.goBack()}/>
            <FilmeContainer>
                <ImagemFilme
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${showMovie.poster_path}` }}
                    alt="Imagem do filme"
                />

                <ContainerText>
                    <WrapperTexts>
                        <TitleContainerText numberOfLines={1}>
                            {showMovie.title}
                        </TitleContainerText>

                        <DescriptionContainerText>
                            <Lancamento>Duração: {showMovie.runtime} minutos</Lancamento>
                            <AvaliacaoContainer>
                                <AntDesign name="star" size={24} color="#ffdb58" />
                                <Avaliacao>{showMovie.vote_average}/10</Avaliacao>
                            </AvaliacaoContainer>
                        </DescriptionContainerText>
                    </WrapperTexts>
                </ContainerText>

            </FilmeContainer>

            <ScrollView showsVerticalScrollIndicator={false}>

                <VerMaisContainer>
                    <VerMaisBotao activeOpacity={.7}>Ver mais</VerMaisBotao>
                </VerMaisContainer>

                <Subtitle styles={styles.fontSubtitle}>Gêneros</Subtitle>
                <ListaGeneros
                    data={showMovie?.genres}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtrator={(item) => String(item.id)}
                    renderItem={({ item }) => <Generos data={item} />}
                />

                <Subtitle numberOfLines={1}>Um pouco sobre {showMovie.title}</Subtitle>
                <ContainerArtista>
                    <DescricaoArtista>
                        {showMovie.overview}
                    </DescricaoArtista>
                </ContainerArtista>
            </ScrollView>

        </Container>
    )
}

const styles = StyleSheet.create({
    loadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }

})

export default ShowMovie;
