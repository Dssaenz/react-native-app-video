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
                <TitleStrong>Duración / Time</TitleStrong>
                <LitleText>{props.runtime || 0} min</LitleText>
              </RuntimeContent>
            </WrapperDetails>
          </WrapperLayout>
        </Wrapper>
        <Title>Sinopsis / Synopsis</Title>
        <Text>{props.overview}</Text>
        <Content>
          {props.genres && (
            <SimpleView>
              <Title>Generos / Genres</Title>
              {props.genres.map((item) => (
                <Text>{item.name}</Text>
              ))}
            </SimpleView>
          )}
        </Content>
        <Content>
          <SimpleView>
            <Title>Puntiación / Rating</Title>
            <Text>
              {props.vote_average}{' '}
              {props.vote_average > 6.0 ? (
                <Icon source={require(tomato)} />
              ) : (
                <Icon source={require(splash)} />
              )}
            </Text>
          </SimpleView>
        </Content>
        <Content>
          <SimpleView>
            <Title>Audiencia / Audience</Title>
            <Text>{props.mpa_rating || 'R'}</Text>
          </SimpleView>
        </Content>
        <Content>
          <SimpleView>
            <Title>Idioma / Language</Title>
            <Text>{props.original_language}</Text>
          </SimpleView>
        </Content>
        <Content>
          {props.production_companies.length !== 0 && (
            <SimpleView>
              <Title>Productora / Production</Title>
              <Text>{props.production_companies[0].name}</Text>
            </SimpleView>
          )}
        </Content>
        <Content>
          <SimpleView>
            <Title>Año / Year</Title>
            <Text>{props.release_date}</Text>
          </SimpleView>
        </Content>
        <Content />
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
