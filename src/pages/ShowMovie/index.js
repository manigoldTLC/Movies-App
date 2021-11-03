import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Modal, Text } from 'react-native'
import {
    Container,
    ContainerText,
    WrapperTexts,
    TitleContainerText,
    DescriptionContainerText,
    MovieContainer,
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
    LoadContainer,
    Infos,
    ReleaseDate
} from './styles';
import { AntDesign } from '@expo/vector-icons'; 

import Generos from '../../components/Generos';
import HeaderStack from '../../components/HeaderStack';
import ViewMore from '../../components/ViewMore';

import { useNavigation, useRoute } from '@react-navigation/native'

import {api, key } from '../../services/api';
import { hasMovie, saveMovie, deleteMovie } from '../../utils/storage';

const ShowMovie = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [ showMovie, setShowMovie ] = useState({});
    const [ handleFavoriteMovie, setHandleFavoriteMovie ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ openModal, setOpenModal ] = useState(false);
    const [ date, setDate ] = useState({});

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
                setDate(response.data.release_date);

                const isFavorite = await hasMovie(response.data);
                setHandleFavoriteMovie(isFavorite);

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

    async function favoriteMovie(movie) {

        if (handleFavoriteMovie) {
            await deleteMovie(movie.id);
            setHandleFavoriteMovie(false);

        } else {
            await saveMovie('gabriel-key', movie);
            setHandleFavoriteMovie(true);
            alert('Filme adicionado aos favoritos');
        }

    }

    const returnDate = (DATE) => {
        const date = String(DATE).split('-').reverse().join('/');
        return date;
    }

    if (loading) {
        return (
            <LoadContainer syles={ styles.loadContainer }>
                <ActivityIndicator size="large" color="#FEFEFF"/>
            </LoadContainer>
        )
    }

    return (
        <Container>
            <HeaderStack
                iconCondition={handleFavoriteMovie}
                navigateGoBack={() => navigation.goBack()}
                handleFavorite={() => favoriteMovie(showMovie)}
                color={"#fff"} 
            />
            
            <MovieContainer>
                <ImagemFilme
                    resizeMode="cover"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${showMovie.poster_path}` }}
                    alt="Imagem do filme"
                />

                <ContainerText>
                    <WrapperTexts>
                        <TitleContainerText numberOfLines={1}>
                            {showMovie.title}
                        </TitleContainerText>

                        <DescriptionContainerText>
                            <Infos>
                                <Lancamento>Duração: {showMovie.runtime} minutos</Lancamento>
                                <ReleaseDate>Lançamento: {returnDate(date)}</ReleaseDate>
                            </Infos>
                            <AvaliacaoContainer>
                                <AntDesign name="star" size={24} color="#ffdb58" />
                                <Avaliacao>{showMovie.vote_average}/10</Avaliacao>
                            </AvaliacaoContainer>
                        </DescriptionContainerText>
                    </WrapperTexts>
                </ContainerText>

            </MovieContainer>

            <ScrollView showsVerticalScrollIndicator={false}>

                <VerMaisContainer onPress={() => setOpenModal(true)}>
                    <VerMaisBotao activeOpacity={.7}>Ver mais</VerMaisBotao>
                </VerMaisContainer>

                <Subtitle styles={styles.fontSubtitle}>Gêneros</Subtitle>
                <ListaGeneros
                    data={showMovie?.genres}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Generos data={item} />}
                />

                <Subtitle numberOfLines={1}>Um pouco sobre {showMovie.title}</Subtitle>
                <ContainerArtista>
                    <DescricaoArtista>
                        {showMovie?.overview}
                    </DescricaoArtista>
                </ContainerArtista>
            </ScrollView>

            <Modal animationType="slide" transparent={false} visible={openModal}>
                <ViewMore
                    link={showMovie?.homepage}
                    title={showMovie?.title}
                    closeModal={() => setOpenModal(false)}
                />
            </Modal>

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
