import React from 'react';
import Header from './sections/components/header';
import SuggestionsList from './videos/containers/suggestionList';
import MoviesList from './videos/containers/moviesList';
import FeaturedList from './videos/containers/featuredList';
import MovieDetail from './screens/container/MovieDetail';
import {connect} from 'react-redux';
import LayoutMovie from './screens/components/LayoutMovie';

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
