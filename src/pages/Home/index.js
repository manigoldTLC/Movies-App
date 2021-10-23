import React, { useState, useEffect } from 'react'
import {
    ContainerPage,
    SliderMovies,
    BannerBottom,
    Banner,
    Subtitle,
    SearchContainer,
    Input,
    SearchButton
} from './styles';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import Title from '../../components/Title';

import SliderItemHome from '../../components/SliderItemHome';
import { api, key } from '../../services/api';
import { getListMovies, randomMovie } from '../../utils/movies';

const HomePage = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);
    const [ topRatedMovies, setTopRatedMovies ] = useState([]);
    const [ upcomingMovies, setUpcomingMovies ] = useState([]);
    const [ bannerMovie, setBannerMovie ] = useState({});
    
    const [ loading, setLoading ] = useState(true);
    const [ input, setInput ] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        let isActive = true;
        const abort = new AbortController();

        async function getMovies() {
            const [ popularData, topData, upcomingData ] = await Promise.all([
                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),

                api.get('/movie/upcoming', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1,
                    }
                }),
            ])

            if (isActive) {
                const popularList = getListMovies(10, popularData.data.results);
                const topList = getListMovies(45, topData.data.results);
                const upcomingList = getListMovies(7, upcomingData.data.results);

                setBannerMovie(topData.data.results[randomMovie(topData.data.results)]);
    
                setPopularMovies(popularList);
                setTopRatedMovies(topList);
                setUpcomingMovies(upcomingList);
    
                setLoading(false);
            }

        }

        getMovies();

        return () => {
            isActive = false;
            abort.abort();
        }
        
    }, []);

    const navigateMovieShow = (item) => {
        navigation.navigate('DetalheArtista', { id: item.id });
    }

    const handleSearchMovie = () => {
        if (input === '') return;

        navigation.navigate('Search', { name: input });
        setInput('');
    }

    if (loading) {
        return (
            <ContainerPage style={style.loadContainer}>
                <ActivityIndicator size="large" color="#FEFEFF"/>
            </ContainerPage>
        )
    }

    return (
        <ContainerPage>
            <Header />

            <SearchContainer>
                <Input
                    placeholder="Pesquisar filme..."
                    placeholderTextColor="#717173"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <SearchButton onPress={handleSearchMovie}>
                    <Feather name="search" size={35} color="#FEFEFF" />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title name="Descubra filmes em destaque" />
                <SliderMovies
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies}
                    renderItem={({ item }) => <SliderItemHome data={item} navigatePage={() => navigateMovieShow(item)} />}
                    keyExtractor={(item) => String(item.id)}
                />

                <Subtitle>Filme recomendado</Subtitle>
                <BannerBottom activeOpacity={.7} onPress={() => navigateMovieShow(bannerMovie)}>
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
                        alt="Banner do filme"
                    />
                </BannerBottom>

                <Subtitle>Confira os próximos lançamentos</Subtitle>
                <SliderMovies
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={upcomingMovies}
                    renderItem={({ item }) => <SliderItemHome data={item} navigatePage={() => navigateMovieShow(item)} />}
                    keyExtractor={(item) => String(item.id)}
                />
            </ScrollView>

        </ContainerPage>
    );
}

const style = StyleSheet.create({
    loadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})

export default HomePage;
