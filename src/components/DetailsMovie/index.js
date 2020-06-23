import React from 'react';
import {SafeAreaView} from 'react-native';
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
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 90%;
      height: 100%;
      margin: auto;
      position: absolute;
    }
  </style>
  <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div>
  `;
};

function DetailsMovie(props) {
  const poster = props.poster_path;
  const backPoster = props.backdrop_path;
  return (
    <Container>
      <SafeAreaView>
        <SectionFond
          source={{uri: `https://image.tmdb.org/t/p/w300/${backPoster}`}}
        />
      </SafeAreaView>
      <SectionDetails>
        <Wrapper>
          <ContentPoster>
            <Poster
              source={{uri: `https://image.tmdb.org/t/p/w300/${poster}`}}
            />
          </ContentPoster>
          <WrapperLayout>
            <TitleName>{props.title}</TitleName>
            <WrapperDetails>
              <RuntimeContent>
                <TitleStrong>Time</TitleStrong>
                <LitleText>{props.runtime || 0} min</LitleText>
              </RuntimeContent>
              <Language>
                <TitleStrong>Language</TitleStrong>
                <LitleText>{props.original_language}</LitleText>
              </Language>
            </WrapperDetails>
          </WrapperLayout>
        </Wrapper>
        <Title>Synopsis</Title>
        <Text>{props.overview}</Text>
        {props.genres && (
          <SimpleView>
            <Title>Genres</Title>
            {props.genres.map((item) => (
              <Text>{item.name}</Text>
            ))}
          </SimpleView>
        )}
        <Content>
          <SimpleView>
            <Title>Rating</Title>
            <Text>
              {props.vote_average}{' '}
              {props.vote_average > 6.0 ? (
                <Icon source={require(tomato)} />
              ) : (
                <Icon source={require(splash)} />
              )}
            </Text>
          </SimpleView>
          <SimpleView>
            <Title>Year</Title>
            <Text>{props.release_date}</Text>
          </SimpleView>
          <SimpleView>
            <Title>Audience</Title>
            <Text>{props.mpa_rating || 'R'}</Text>
          </SimpleView>
        </Content>
        {props.production_companies && (
          <SimpleView>
            <Title>Production</Title>
            <Text>{props.production_companies[0].name}</Text>
          </SimpleView>
        )}
      </SectionDetails>
      <ViewWeb>
        <WebView
          source={{
            html: makeHTML(props.yt_trailer_code),
          }}
          style={
            props.colorTheme
              ? {backgroundColor: theme.color.darkBlue}
              : {backgroundColor: theme.color.snow}
          }
        />
      </ViewWeb>
    </Container>
  );
}

export default DetailsMovie;
