import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #07070F;
    padding: 14px;
    align-items: center;
    
`;

export const LoadContainer = styled.View`
    flex: 1;
    background-color: #07070F;
    align-items: center;
    justify-content: center;
`;

export const MovieContainer = styled.View`
    width: 371px;
    height: 475px;
    border-radius: 10px;
    position: relative;
    justify-content: center;
    align-items: center;
`;

export const ImagemFilme = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ContainerText = styled.View`
    position: absolute;
    background-color: #333333;
    padding: 8px;
    border-radius: 10px;
    bottom: 0;
    width: 359px;
    height: auto;
    margin-bottom: 5px;
`;

export const WrapperTexts = styled.View`
    padding: 10px;
    justify-content: center;
`;

export const TitleContainerText = styled.Text`
    color: #FEFEFF;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: -5px;
`;

export const DescriptionContainerText = styled.View`
    font-style: normal;
    font-size: 14px;
    color: #FEFEFF;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`;

export const Infos = styled.View`
    flex-direction: column;
    width: 80%;
    color: #FEFEFE;
    justify-content: center;
`;

export const ReleaseDate = styled.Text`
    color: #FEFEFE;
    margin-top: 4px;
`;

export const AvaliacaoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 20%;
`;

export const Avaliacao = styled.Text`
    color: #FEFEFF;
    margin-left: 8px;
`;

export const Lancamento = styled.Text`
    color: #FEFEFF;
`;

export const Subtitle = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FEFEFF;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const SliderArte = styled.FlatList`
    height: 100px;
    padding: 10px;
`;

export const VerMaisContainer = styled.TouchableOpacity`
    align-items: flex-end;
    margin-right: 5px;
    margin-top: 15px;
    width: 100%;
`;

export const VerMaisBotao = styled.Text`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #5B85E9;
`;

export const ContainerArtista = styled.View`

`;

export const DescricaoArtista = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9C9BA0;
    
`;

export const ListaGeneros = styled.FlatList`
    margin: 8px 0;
    max-height: 35px;
    min-height: 35px;
`;