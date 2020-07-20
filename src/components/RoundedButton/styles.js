import styled from 'styled-components/native';

export const ButtonPress = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  elevation: 10;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: ${(props) => props.theme.color.darkSnow};
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;
