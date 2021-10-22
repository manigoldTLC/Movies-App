import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { Container, ContainerCards } from './styles';
import TemplateCardSearchMovie from '../../components/TemplateCardSearchMovie';

import { api, key } from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

const Search = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [ movie, setMovie ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        let isActive = true;

        async function getSearchMovie() {
            const response = await api.get('/search/movie', {
                params: {
                    api_key: key,
                    query: route?.params?.name,
                    language: 'pt-BR',
                    page: 1
                }
            });

            if (isActive) {
                setMovie(response.data.results);
                setLoading(false);
            }
        }

        if (isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }

    }, []);

    const navigateShowMoviePage = (item) => {
        navigation.navigate('DetalheArtista', { id: item.id });
    }

    if (loading) {
        return (
            <Container>
                <Text>Carregando...</Text>
            </Container>
        )
    }

    return (
        <Container>
            <ScrollView>
                <ContainerCards
                    data={movie}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <TemplateCardSearchMovie data={item} navigatePage={() => navigateShowMoviePage(item)} />}
                    keyExtrator={(item) => String(item.id)}
                    numColumns={2}
                    horizonal={false}
                />
            </ScrollView>
        </Container>
    )
}

const style = StyleSheet.create({
    loadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})

export default Search;
