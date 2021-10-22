import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, TextPrincipal } from './styled';

const Title = ({ name }) => {
    return (
        <Container>
            <TextPrincipal style={styles.titulo}>{name}</TextPrincipal>
        </Container>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontWeight: 'bold',
        fontSize: 35,
        width: 295,
        color: "#000000",
    },
})

export default Title;
