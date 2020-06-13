import React from 'react';
import {View, StyleSheet} from 'react-native';

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
      <View style={styles.container}>
        <Header />
        <LayoutMovie>
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

export default connect(mapStateToProps)(AppLayout);
