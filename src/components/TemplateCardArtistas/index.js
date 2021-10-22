 import React from 'react'
 import { Container, ImageItem, TitleCard } from './styled'
 
 const TemplateCardArtistas= ({data}) => {

    

     return (
        <Container activeOpacity={.7}>
            <ImageItem
                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/1.png` }}
            />
            
            <TitleCard numberOfLines={1}>{data.name}</TitleCard>
        </Container>
     )
 }
 
 export default TemplateCardArtistas
 