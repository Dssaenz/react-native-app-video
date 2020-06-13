import React from 'react';

import {
  SuggestionsList,
  MoviesList,
  FeaturedList,
  MovieDetail,
} from './containers';
import {connect} from 'react-redux';
import {LayoutMovie, Header} from './components';

class AppLayout extends React.Component {
  render() {
    if (this.props.suggestionsReducers.movieSuggestion) {
      return (
        <MovieDetail
          isActive
          list={this.props.suggestionsReducers.movieSuggestion}
        />
      );
    }
    if (this.props.featuredReducers.movieFeatured) {
      return <MovieDetail list={this.props.featuredReducers.movieFeatured} />;
    }
    return (
      <LayoutMovie>
        <Header />
        <MoviesList />
        <SuggestionsList />
        <FeaturedList />
      </LayoutMovie>
    );
  }
}

const mapStateToProps = ({featuredReducers, suggestionsReducers}) => {
  return {featuredReducers, suggestionsReducers};
};

export default connect(mapStateToProps)(AppLayout);
