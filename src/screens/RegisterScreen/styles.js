import styled from 'styled-components/native';

export const PrincipalLayout = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.ImageBackground`
  flex: 1;
  position: relative;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 110px;
  resize-mode: contain;
  z-index: 2;
  border-radius: 30px;
  position: absolute;
  transform: rotate(310deg);
  elevation: 10;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;

export const TitleSub = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
  margin-bottom: 20px;
`;

export const Content = styled.View`
  top: -60;
  left: -20;
  width: 170px;
  height: 220px;
  elevation: 10;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 20px;
  transform: rotate(50deg);
  background-color: ${(props) => props.theme.color.whiteBlue};
`;

export const SectionButton = styled.View`
  width: 100%;
  margin-vertical: 15px;
  align-items: center;
`;

export const TextContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const TextAccount = styled.Text`
  color: ${(props) => (props.isPress ? '#02c39a' : '#FFF')};
  font-weight: ${(props) => (props.isPress ? 'bold' : 'normal')};
  font-size: 13px;
  margin-right: 7px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TextCreate = styled.TouchableOpacity``;
