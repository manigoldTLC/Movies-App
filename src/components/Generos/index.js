import React from 'react';
import { Container, Text } from './styles';

const Generos = ({ data }) => {
    return (
        <Container>
            <Text>{data.name}</Text>
        </Container>
    )
}

export default Generos;
