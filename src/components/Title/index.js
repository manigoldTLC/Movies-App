import React from 'react';
import { Container, TextPrincipal } from './styled';

const Title = ({ name }) => {
    return (
        <Container>
            <TextPrincipal>{name}</TextPrincipal>
        </Container>
    )
}

export default Title;
