import React from 'react'
import { Container, ButtonText } from './styled'

const Button = ({children, onPress}) => {
    return (
        <Container onPress={onPress}>
            <ButtonText>
                {children}
            </ButtonText>
        </Container>
    )
}

export default Button
