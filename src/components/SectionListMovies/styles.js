import styled from 'styled-components/native';

export const ContentList = styled.View`
  margin-top: ${(props) => props.theme.margin.marginXL};
`;

export const TitleSection = styled.Text`
  font-weight: bold;
  margin-left: 15px;
  color: ${(props) => props.theme.titleColor};
  font-size: ${(props) => props.theme.text.h2};
  margin-bottom: ${(props) => props.theme.margin.marginLarge};
`;

export const SectionList = styled.View`
  width: 100%;
  align-items: center;
`;
