import React, { useState } from 'react'
import api from '../../services/api'

import { Container, FormContainer, Title } from './styled'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginPage = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        if(email === ''){
            console.log('Email ausente!')
        }else if(password === ''){
            console.log('Senha ausente')
        }

        try {
            const user = await api.post('/login', {
                email,
                password
            })
            if (user) {
                console.log(user.data)
                alert('Login efetuado!')
            }
        } catch(e) {
            console.log('Um erro inesperado aconteceu!')
        }
    }

    return (
        <Container>
            <Title>Entre em sua conta</Title>
            <FormContainer>
                <Input
                    Icon={() => <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />}
                    type="input"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    Icon={() => <MaterialCommunityIcons name="lock-outline" size={24} color="black" />}
                    type="input"
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <Button onPress={handleSubmit} type='submit'>Entrar</Button>

                <Button onPress={() => navigation.navigate('SignUp')} style={{marginTop: 10}} type='submit'>Criar Cadastro</Button>
            </FormContainer>
        </Container>
    )
}

export default LoginPage
