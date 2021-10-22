import React from 'react'
import { Container, ImageItem, TitleCard } from './styles'

const TemplateCardSearchMovie = ({data, navigatePage}) => {

    const showMovie = () => {
        if (data.release_date === '') {
            alert('Filme ainda não lançado');
            return;
        }
        
        navigatePage(data);
    }

    return (
       <Container activeOpacity={.7} onPress={showMovie}>
            { data?.poster_path ? (
                <ImageItem
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}` }}
                />
            ) : (
                <ImageItem
                    resizeMethod="resize"
                    source={ require('../../assets/noData.png') }
                />
            ) }
           
           <TitleCard numberOfLines={1}>{data.title}</TitleCard>
       </Container>
    )
}

export default TemplateCardSearchMovie;
