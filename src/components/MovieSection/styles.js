import styled from 'styled-components/native';

export const Section = styled.TouchableOpacity`
  width: 100%;
  height: 180;
  background-color: ${(props) => props.theme.color.dark};
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding-vertical: ${(props) => props.theme.padding.paddingSmall};
  padding-horizontal: ${(props) => props.theme.padding.paddingLarge};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.pd};
  margin-bottom: 3;
`;

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.h1};
  margin-bottom: 3;
  font-weight: bold;
`;

export const ContentDescription = styled.View`
  flex-direction: row;
`;

export const TextDetails = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.pd};
  margin-bottom: 10;
`;
