import styled from 'styled-components/native';

export const Section = styled.TouchableOpacity`
  width: 100%;
  height: 180;
  background-color: #000;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding-vertical: 2%;
  padding-horizontal: 5%;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 11;
  margin-bottom: 3;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 24;
  margin-bottom: 3;
  font-weight: bold;
`;

export const ContentDescription = styled.View`
  flex-direction: row;
`;

export const TextDetails = styled.Text`
  color: #fff;
  font-size: 11;
  margin-bottom: 10;
`;
