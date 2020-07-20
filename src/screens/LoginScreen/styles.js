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
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;

export const Content = styled.View`
  top: -60px;
  left: -20px;
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

export const TextContent = styled.View`
  margin-top: 20px;
  flex-direction: row;
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

export const ButtonSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5%;
`;

export const SectionButton = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

export const Option = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  border-bottom-color: #90949e;
  width: 32%;
  margin-vertical: 5%;
  border-left-color: ${(props) => props.theme.color.darkBlue};
  border-right-color: ${(props) => props.theme.color.darkBlue};
  border-top-color: ${(props) => props.theme.color.darkBlue};
  border-width: 1px;
`;

export const TextOr = styled.Text`
  width: 20%;
  font-size: 20px;
  color: #90949e;
  text-align: center;
`;
