import React from 'react'
import { Container, ImageItem, TitleCard } from './styled'

const TemplateCardObras= ({obra}) => {
    return (
       <Container activeOpacity={.7}>
           <ImageItem
               source={{ uri: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80' }}
           />
           
           <TitleCard numberOfLines={1}>{obra}</TitleCard>
       </Container>
    )
}

export default TemplateCardObras
