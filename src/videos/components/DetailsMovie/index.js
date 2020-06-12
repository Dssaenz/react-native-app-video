import React from 'react';
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
  Content,
  SimpleView,
} from './styles';

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
                <TitleStrong>Duracion</TitleStrong>
                <LitleText>{props.runtime} min</LitleText>
              </RuntimeContent>
              <Language>
                <TitleStrong>Lenguaje</TitleStrong>
                <LitleText>{props.language}</LitleText>
              </Language>
            </WrapperDetails>
          </WrapperLayout>
        </Wrapper>
        <Title>Sinopsis</Title>
        <Text>{props.synopsis}</Text>
        <Title>Generos</Title>
        <Text>{`${props.genres}`}</Text>
        <Content>
          <SimpleView>
            <Title>Rating</Title>
            <Text Text>{props.rating}</Text>
          </SimpleView>
          <SimpleView>
            <Title>Year</Title>
            <Text>{props.year}</Text>
          </SimpleView>
          <SimpleView>
            <Title>audience</Title>
            <Text>{props.mpa_rating}</Text>
          </SimpleView>
        </Content>
      </SectionDetails>
    </Container>
  );
}

export default DetailsMovie;
