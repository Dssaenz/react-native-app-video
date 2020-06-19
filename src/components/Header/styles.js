import styled from 'styled-components/native';

export const View = styled.SafeAreaView``;

export const ContainerHeader = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.headerColor};
  height: 65px;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogo = styled.Image`
  width: 112px;
  height: 34px;
  resize-mode: stretch;
`;
