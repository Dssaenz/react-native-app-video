import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  padding-horizontal: 15;
`;

export const MovieContainer = styled.View`
  position: relative;
`;

export const GenreContent = styled.View`
  position: absolute;
  left: 15;
  background-color: ${(props) => props.theme.color.dark};
  padding-vertical: ${(props) => props.theme.padding.paddingStandard};
  padding-horizontal: ${(props) => props.theme.padding.paddingXL};
  border-bottom-right-radius: 10;
  border-top-left-radius: 5;
`;

export const Genre = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.color.white};
`;

export const MovieImage = styled.Image`
  width: 125;
  height: 175;
  border-radius: 5;
  margin-bottom: 10;
`;

export const DescriptionContainer = styled.View`
  width: 125;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.p};
  font-weight: bold;
`;

export const Year = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.p};
  margin-vertical: 10;
`;

export const ViewRating = styled.View`
  flex-direction: row;
`;

export const Rating = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: 15;
  padding-right: 10;
`;

export const Icon = styled.Image`
  width: 20;
  height: 20;
  resize-mode: contain;
`;
