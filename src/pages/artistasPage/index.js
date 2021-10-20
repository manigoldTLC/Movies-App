import React from 'react';
import { Container, ContainerCards } from './styled';

import Title from '../../components/Title';
import Header from '../../components/Header';
import TemplateCardArtistas from '../../components/TemplateCardArtistas';
import { ScrollView } from 'react-native';

const artistasPage = () => {
    return (
        <Container>
            <Header />
            <Title name="Artistas" />

            <ScrollView>
                <ContainerCards
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={({ item }) => <TemplateCardArtistas name="Pablo Picasso" />}
                    numColumns={2}
                    horizonal={false}
                />
            </ScrollView>
        </Container>
    )
}

export default artistasPage;
