import React from 'react'
import { Container, FormContainer, Title } from './styled'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SignUpPage = ({...props}) => {
    return (
        <Container>
            <Title>Entre em sua conta</Title>
            <FormContainer>
                <Input
                    Icon={() => <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />}
                    type="input"
                    placeholder="Nome"
                />

                <Input
                    Icon={() => <MaterialCommunityIcons name="email-outline" size={24} color="black" />}
                    type="input"
                    placeholder="Email"
                />

                <Input
                    Icon={() => <MaterialCommunityIcons name="lock-outline" size={24} color="black" />}
                    type="input"
                    placeholder="Senha"
                    secureTextEntry={true}
                />

                <Input
                    Icon={() => <MaterialCommunityIcons name="lock-outline" size={24} color="black" />}
                    type="input"
                    placeholder="Confirme sua senha"
                    secureTextEntry={true}
                />

                <Button type='submit'>Cadastrar</Button>
            </FormContainer>
        </Container>
    )
}

export default SignUpPage
