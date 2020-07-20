import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  padding-horizontal: 15px;
`;

export const MovieContainer = styled.View`
  position: relative;
`;

export const GenreContent = styled.View`
  position: absolute;
  left: 15px;
  background-color: ${(props) => props.theme.genreColor};
  padding-vertical: ${(props) => props.theme.padding.paddingStandard};
  padding-horizontal: ${(props) => props.theme.padding.paddingXL};
  border-bottom-right-radius: 10px;
  border-top-left-radius: 5px;
`;

export const Genre = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.color.white};
`;

export const MovieImage = styled.Image`
  width: 125px;
  height: 175px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.View`
  width: 125px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.litleTitleColor};
  font-size: ${(props) => props.theme.text.p};
  font-weight: bold;
`;

export const Year = styled.Text`
  color: ${(props) => props.theme.litleTitleColor};
  font-size: ${(props) => props.theme.text.p};
  margin-vertical: 10px;
`;

export const ViewRating = styled.View`
  flex-direction: row;
`;

export const Rating = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
  padding-right: 10px;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;
