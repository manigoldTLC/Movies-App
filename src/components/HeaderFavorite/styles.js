import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: flex-start;
    width: 100%;
    position: absolute;
    z-index: 99;
    padding: 30px 15px;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
`;

export const ContainerArrow = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: rgba(220, 240, 239, 0.43);
    border-radius: 50px;
`;

export const Text = styled.Text`
    color: #000;
    font-weight: bold;
    font-size: 20px;
    margin-left: 15px;
`;