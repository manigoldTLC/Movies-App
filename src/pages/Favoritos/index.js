import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import {
    Container,
    ListMovies,
    Wrapper
} from './styles';

import ListFavorites from '../../components/ListFavorites';
import HeaderFavorite from '../../components/HeaderFavorite';

import { getMoviesSalve, deleteMovie } from '../../utils/storage';

const Favoritos= () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const [ showMovie, setShowMovie ] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getFavoriteMovie() {
            const response = await getMoviesSalve('gabriel-key')

            if (isActive) {
                setShowMovie(response);
            }
        }

        if (isActive) {
            getFavoriteMovie();
        }

        return () => {
            isActive = false;
        }

    }, [isFocused]);

    async function handleDeleteMovie(id) {
        const response = await deleteMovie(id);
        setShowMovie(response);
    }

    const naviagateToMovie = (item) => {
        navigation.navigate('DetalheArtista', { id: item.id });
    }

    return (
        <Container>
             <HeaderFavorite
                navigateGoBack={() => navigation.goBack()}
                color={"#000"} 
            />

            <Wrapper>
                <ListMovies 
                    data={showMovie}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <ListFavorites
                            data={item}
                            navigatePage={naviagateToMovie}
                            deletMovie={handleDeleteMovie}
                        />
                    )}
                />
            </Wrapper>
        </Container>
    )
}

export default Favoritos;
