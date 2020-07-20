import styled from 'styled-components/native';

export const ButtonPress = styled.TouchableOpacity`
  width: 85%;
  border-radius: 15px;
  elevation: 10;
  background-color: ${(props) => props.theme.color.whiteBlue};
  margin-vertical: 20px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding-vertical: 10px;
`;
