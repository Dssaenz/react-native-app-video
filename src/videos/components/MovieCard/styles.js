import styled from 'styled-components/native';

export const CardContainer = styled.View``;

export const MovieContainer = styled.View`
  position: relative;
`;

export const GenreContent = styled.View`
  position: absolute;
  background-color: #000000;
  padding-vertical: 3%;
  padding-horizontal: 4%;
  border-bottom-right-radius: 10;
`;

export const Genre = styled.Text`
  color: #ffffff;
`;

export const MovieImage = styled.Image`
  width: 125;
  height: 175;
  border-radius: 12;
  margin-bottom: 10;
`;

export const DescriptionContainer = styled.View`
  width: 125;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
`;

export const Year = styled.Text`
  color: #ffffff;
  font-size: 15;
  margin-vertical: 10;
`;

export const ViewRating = styled.View`
  flex-direction: row;
`;

export const Rating = styled.Text`
  color: #ffffff;
  font-size: 15;
  padding-right: 10;
`;

export const Icon = styled.Image`
  width: 20;
  height: 20;
  resize-mode: contain;
`;
