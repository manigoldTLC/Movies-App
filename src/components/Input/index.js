import React from 'react'
import { Container, InputText } from './styled'

const Input = ({Icon, ...props}) => {
    return (
        <Container>
            <Icon />
            <InputText {...props}/>
        </Container>
    )
}

export default Input
