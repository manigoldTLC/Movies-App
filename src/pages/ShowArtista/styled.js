import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #f8f8ff;
    padding: 14px;
`;

export const ArtistaContainer = styled.View`
    width: 371px;
    height: 382px;
    border-radius: 10px;
    position: relative;
    justify-content: center;
    align-items: center;
`;

export const ImagemArtista = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ContainerText = styled.View`
    position: absolute;
    background-color: #fff;
    padding: 8px;
    border-radius: 10px;
    bottom: 0;
    width: 359px;
    height: 85px;
    margin-bottom: 5px;
`;

export const WrapperTexts = styled.View`
    padding: 10px;
    justify-content: center;
`;

export const TitleContainerText = styled.Text`
    color: #000;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: -5px;
`;

export const DescriptionContainerText = styled.Text`
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    color: #000;
`;

export const Subtitle = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #000;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const SliderArte = styled.FlatList`
    height: 100px;
    padding: 10px;
`;

export const VerMaisContainer = styled.TouchableOpacity`
    align-items: flex-end;
    width: 100%;
`;

export const VerMaisBotao = styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #5785F4;
    margin-right: 5px;
`;

export const ContainerArtista = styled.View`

`;

export const DescricaoArtista = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: rgba(0, 0, 0, 0.8);
`;