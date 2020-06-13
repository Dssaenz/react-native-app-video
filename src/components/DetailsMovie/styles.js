import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;
export const SectionFond = styled.Image`
  width: 100%;
  height: 160px;
  resize-mode: stretch;
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const SectionDetails = styled.View`
  padding-horizontal: ${(props) => props.theme.padding.paddingXL};
`;

export const Poster = styled.Image`
  width: 110px;
  height: 160px;
  margin-top: -90px;
`;

export const ContentPoster = styled.View`
  width: 35%;
`;

export const WrapperLayout = styled.View`
  width: 55%;
  justify-content: space-around;
`;
export const TitleName = styled.Text`
  margin-top: -90px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.h1};
  font-weight: bold;
`;

export const WrapperDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-horizontal: ${(props) => props.theme.margin.marginSmall};
  margin-top: 20px;
`;

export const RuntimeContent = styled.View``;

export const TitleStrong = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.h3};
  font-weight: bold;
`;
export const LitleText = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.p};
`;
export const Language = styled.View``;

export const Title = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.h3};
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;
export const Text = styled.Text`
  margin-right: 4px;
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.text.p};
`;

export const Icon = styled.Image`
  width: 20;
  height: 20;
  resize-mode: contain;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SimpleView = styled.View``;

export const ViewWeb = styled.View`
  height: 225px;
  margin-vertical: 6%;
`;
