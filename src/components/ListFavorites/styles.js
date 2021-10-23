import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: auto;
    margin-top: 20%;
`;

export const ContainerImage = styled.View`
    width: 100%;
    height: 400px;
    border-radius: 10px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ContainerTitle = styled.View`
    margin: 10px 0;
    background-color: #333333;
    border-radius: 10px;
    width: 100%;
    padding: 20px 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleBottom = styled.View`
    width: 72%;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FEFEFF;
`;

export const Rated = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const Avaliacao = styled.Text`
    margin-left: 5px;
    color: #FEFEFF;
`;

export const ContainerBottom = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const DetailContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px 8px;
    width: 80%;
    background-color: #2764CE;
    border-radius: 10px;
`;

export const Button = styled.Text`
    color: #FEFEFF;
`;

export const TrashContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 15%;
    padding: 10px 8px;
    background-color: #333333;
    border-radius: 10px;

`;