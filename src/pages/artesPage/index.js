import React from 'react';
import { Container, ContainerCards } from './styled';

import Title from '../../components/Title';
import Header from '../../components/Header';
import TemplateCardObras from '../../components/TemplateCardObras';
import { ScrollView } from 'react-native';

const artesPage = () => {
    return (
        <Container>
            <Header />
            <Title name="Obras" />

            <ScrollView>
                <ContainerCards
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={({ item }) => <TemplateCardObras obra="Guernica (1937)" />}
                    numColumns={2}
                    horizonal={false}
                />
            </ScrollView>
        </Container>
    )
}

export default artesPage;
