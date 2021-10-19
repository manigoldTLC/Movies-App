import styled from 'styled-components/native';

export const Container = styled.View`
    height: 70px;
    flex-direction: row;
    align-items: center;
    padding: 60px 14px;
    padding-bottom: 0;
    padding-right: 20px;
    justify-content: space-between;
`;

export const MenuContainer = styled.TouchableOpacity`
    height: 70px;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
`;