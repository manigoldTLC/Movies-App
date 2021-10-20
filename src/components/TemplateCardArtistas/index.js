 import React from 'react'
 import { Container, ImageItem, TitleCard } from './styled'
 
 const TemplateCardArtistas= ({name}) => {
     return (
        <Container activeOpacity={.7}>
            <ImageItem
                source={{ uri: 'https://images.unsplash.com/photo-1622995201121-e9382f7342d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80' }}
            />
            
            <TitleCard numberOfLines={1}>{name}</TitleCard>
        </Container>
     )
 }
 
 export default TemplateCardArtistas
 