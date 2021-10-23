import styled from 'styled-components/native';

export const ContainerPage = styled.View`
    flex: 1;
    background-color: #07070F;
    justify-content: flex-start;
`;

export const ContainerTextPrincipal = styled.View`
    width: 100%;
    padding: 8% 14px;
    margin-top: 8%;
`;

export const SliderMovies = styled.FlatList`
    height: 270px;
    padding: 0 14px;
`;

export const TextPrincipal = styled.Text`
    font-size: 35px;
    line-height: 48px;
    color: #000000;
    font-weight: bold;
    width: 184px;
`;

export const ContainerCardsHome = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

export const ContainerSubtitulo = styled.View`
    margin: 8% auto;
`;

export const BannerBottom = styled.TouchableOpacity`
    width: 100%;
    height: 200px;
    padding: 0 14px;
    padding-bottom: 20px;
    border-radius: 10px;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const Subtitle = styled.Text`
    padding: 0 14px;
    padding-bottom: 15px;
    font-size: 22px;
    font-weight: bold;
    color: #FEFEFF;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 0 14px;
    height: 40px;
    padding-top: 50px;
    justify-content: space-between;
    z-index: 99;
    margin-bottom: 25px;
`;

export const Input = styled.TextInput`
    background-color: #1A191E;
    border-radius: 50px;
    width: 85%;
    height: 40px;
    font-size: 15px;
    color: #FEFEFF;
    padding-left: 15px;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 40px;
    justify-content: center;
    align-items: center;
`;