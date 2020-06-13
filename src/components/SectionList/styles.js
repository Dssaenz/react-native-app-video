import styled from 'styled-components/native';

export const ContentList = styled.View``;

export const TitleSection = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.h2};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.margin.marginLarge};
`;
