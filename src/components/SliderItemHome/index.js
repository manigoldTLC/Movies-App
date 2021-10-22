import React from 'react';
import {
    Container,
    ImageArte,
    TitleCard
} from './styled';

const SliderItemHome = ({ data, navigatePage }) => {
    return (
        <Container activeOpacity={.7} onPress={() => navigatePage(data)}>
            <ImageArte
                source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}
                alt="Banner arte"
            />

            <TitleCard numberOfLines={1}>{data.title}</TitleCard>
        </Container>
    );
}

export default SliderItemHome;
