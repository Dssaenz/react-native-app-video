import styled from 'styled-components/native';

export const View = styled.SafeAreaView`
  position: relative;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.headerColor};
  height: 65px;
  align-items: center;
  justify-content: center;
  elevation: 10;
`;

export const HeaderLogo = styled.Image`
  width: 112px;
  height: 34px;
  resize-mode: stretch;
`;

export const SectionPress = styled.TouchableOpacity`
  position: absolute;
  top: 20;
  right: 10;
  z-index: 1;
`;

export const LogoutButton = styled.Image`
  width: 25px;
  height: 25px;
  resize-mode: contain;
`;
