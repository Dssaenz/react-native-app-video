import React from 'react';
import {connect} from 'react-redux';
import {
  CardContainer,
  MovieImage,
  DescriptionContainer,
  Title,
  Year,
} from './styles';

function MovieCard(props) {
  const image = props.poster_path;
  return (
    <CardContainer onPress={props.onPress}>
      <MovieImage source={{uri: `https://image.tmdb.org/t/p/w300/${image}`}} />
      <DescriptionContainer>
        <Title>
          {props.title.length > 12
            ? `${props.title.substring(0, 12)} ...`
            : props.title}
        </Title>
        <Year>
          {props.suggestionsReducers.type === 'EN' ? 'Year: ' : 'Año: '}
          {props.release_date}
        </Year>
      </DescriptionContainer>
    </CardContainer>
  );
}

const mapStateToProps = ({suggestionsReducers}) => {
  return {suggestionsReducers};
};

export default connect(mapStateToProps, null)(MovieCard);
