import React from 'react';
import {
    Container,
    ContainerImage,
    Image,
    ContainerTitle,
    Title,
    ContainerBottom,
    DetailContainer,
    Button,
    TrashContainer,
    Rated,
    Avaliacao,
    TitleBottom
} from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const ListFavorites = ({ data, navigatePage, deletMovie }) => {
    return (
        <Container>
            <ContainerImage>
                <Image
                    alt="Imagem filme favorito"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}` }}
                />
            </ContainerImage>

            <ContainerTitle>
                <TitleBottom>
                    <Title numberOfLines={1}>{data.title}</Title>
                </TitleBottom>

                <Rated>
                    <AntDesign name="star" size={24} color="#ffdb57" />
                    <Avaliacao>{data.vote_average}/10</Avaliacao>
                </Rated>
            </ContainerTitle>

            <ContainerBottom>
                <DetailContainer onPress={() => navigatePage(data)}>
                    <Button>Ver detalhes</Button>
                </DetailContainer>

                <TrashContainer onPress={() => deletMovie(data.id)}>
                    <MaterialCommunityIcons 
                        name="trash-can" 
                        size={30} 
                        color="#FEFEFF" />
                </TrashContainer>
            </ContainerBottom>
        </Container>
    )
}

export default ListFavorites
