import React from 'react';
import {
    Container,
    ImageArte
} from './styled';

const SliderItem = () => {
    return (
        <Container>
            <ImageArte
                source={{ uri: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80' }}
                alt="Banner arte"
            />
        </Container>
    )
}

export default SliderItem
