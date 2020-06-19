import styled from 'styled-components/native';

export const PressBack = styled.TouchableOpacity`
  position: absolute;
  bottom: 20;
  right: 10;
  z-index: 100;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  elevation: 10;
  background-color: #00cfac;
  shadow-color: #000;
  shadow-offset: {
    height: 10;
  }
  shadow-opacity: 0.3;
  shadow-radius: 10;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: stretch;
`;
