 import React from 'react'
 import { Container, ImageItem, TitleCard } from './styled'
 
 const TemplateCard = () => {
     return (
        <Container activeOpacity={.7}>
            <ImageItem
                source={{ uri: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
            />
            
            <TitleCard numberOfLines={1}>Pablo Picasso</TitleCard>
        </Container>
     )
 }
 
 export default TemplateCard
 