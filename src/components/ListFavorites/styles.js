import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: auto;
    margin-top: 20%;
`;

export const ContainerImage = styled.View`
    width: 100%;
    height: 350px;
    border-radius: 10px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ContainerTitle = styled.View`
    margin: 10px 0;
    background-color: linear-gradient(115.95deg, rgba(239, 239, 239, 0.6) 10.92%, rgba(255, 255, 255, 0.08) 96.4%);
    border-radius: 10px;
    width: 100%;
    padding: 15px 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleBottom = styled.View`
    width: 80%;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Rated = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const Avaliacao = styled.Text`
    margin-left: 5px;
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
    width: 85%;
    background-color: #5785F4;
    border-radius: 10px;
`;

export const Button = styled.Text`
    color: #fff;
`;

export const TrashContainer = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 30px;
    margin-left: 5px;
`;