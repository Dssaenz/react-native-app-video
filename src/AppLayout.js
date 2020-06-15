import React from 'react';
import {View, StyleSheet, RefreshControl} from 'react-native';

// COMPONENTS //
import {LayoutMovie, Header} from './components';

// CONTAINERS //
import {
  SuggestionsList,
  MoviesList,
  FeaturedList,
  MovieDetail,
} from './containers';

// STYLES //
import theme from './themes';

// REDUX //
import {connect} from 'react-redux';
import * as suggestionsActions from './redux/actions/suggestionsActions';
import * as featuredActions from './redux/actions/featuredActions';
import * as moviesAction from './redux/actions/moviesAction';

const {getSuggestions: suggestion} = suggestionsActions;
const {getFeatured: featured} = featuredActions;
const {getMovies: movie} = moviesAction;

class AppLayout extends React.Component {
  state = {
    refreshing: false,
  };

  onRefresh = async () => {
    this.setState({refreshing: true});
    const {suggestion, featured, movie} = this.props;
    await suggestion();
    await featured();
    await movie();
    this.setState({refreshing: false});
  };

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
      <View style={styles.container}>
        <Header />
        <LayoutMovie
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              tintColor="#FFF"
            />
          }>
          <MoviesList />
          <SuggestionsList />
          <FeaturedList />
        </LayoutMovie>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.darkBlue,
  },
});

const mapStateToProps = ({featuredReducers, suggestionsReducers}) => {
  return {featuredReducers, suggestionsReducers};
};

const mapDispatchToProps = {
  suggestion,
  featured,
  movie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
