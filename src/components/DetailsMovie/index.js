import React from 'react';
import {WebView} from 'react-native-webview';
import {
  Container,
  SectionFond,
  SectionDetails,
  Wrapper,
  ContentPoster,
  Poster,
  WrapperLayout,
  TitleName,
  WrapperDetails,
  RuntimeContent,
  TitleStrong,
  LitleText,
  Language,
  Title,
  Text,
  Icon,
  Content,
  SimpleView,
  ViewWeb,
} from './styles';
import theme from '../../themes';
const tomato = '../../../resources/tomatoo.png';
const splash = '../../../resources/splash.png';

const makeHTML = (id) => {
  return `
  <style>
    .video {
      position: relative;
      padding-bottom: 56.25%;
    }
    iframe {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 90%;
      height: 100%;
      margin: auto;
    }
  </style>
  <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div>
  `;
};

function DetailsMovie(props) {
  return (
    <Container>
      <SectionFond source={{uri: props.background_image}} />
      <SectionDetails>
        <Wrapper>
          <ContentPoster>
            <Poster source={{uri: props.medium_cover_image}} />
          </ContentPoster>
          <WrapperLayout>
            <TitleName>{props.title}</TitleName>
            <WrapperDetails>
              <RuntimeContent>
                <TitleStrong>Time</TitleStrong>
                <LitleText>{props.runtime} min</LitleText>
              </RuntimeContent>
              <Language>
                <TitleStrong>Language</TitleStrong>
                <LitleText>{props.language}</LitleText>
              </Language>
            </WrapperDetails>
          </WrapperLayout>
        </Wrapper>
        <Title>Synopsis</Title>
        <Text>{props.synopsis}</Text>
        <Title>Genders</Title>
        <Text>{`${props.genres}`}</Text>
        <Content>
          <SimpleView>
            <Title>Rating</Title>
            <Text>
              {props.rating}{' '}
              {props.rating > 6.0 ? (
                <Icon source={require(tomato)} />
              ) : (
                <Icon source={require(splash)} />
              )}
            </Text>
          </SimpleView>
          <SimpleView>
            <Title>Year</Title>
            <Text>{props.year}</Text>
          </SimpleView>
          <SimpleView>
            <Title>Audience</Title>
            <Text>{props.mpa_rating}</Text>
          </SimpleView>
        </Content>
      </SectionDetails>
      <ViewWeb>
        <WebView
          source={{
            html: makeHTML(props.yt_trailer_code),
          }}
          style={{backgroundColor: theme.color.darkBlue}}
        />
      </ViewWeb>
    </Container>
  );
}

export default DetailsMovie;
