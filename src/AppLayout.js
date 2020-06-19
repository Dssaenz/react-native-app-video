import React from 'react';
import {RefreshControl} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../themeColors';

// COMPONENTS //
import {LayoutMovie, Header, Button} from './components';

// CONTAINERS //
import {
  SuggestionsList,
  MoviesList,
  FeaturedList,
  MovieDetail,
} from './containers';

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
    colortheme: false,
  };

  changetheme = () => {
    const {colorTheme} = this.state;
    this.setState({
      colorTheme: !colorTheme,
    });
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
        <ThemeProvider theme={this.state.colorTheme ? lightTheme : darkTheme}>
          <MovieDetail
            isActive
            changetheme={this.changetheme}
            list={this.props.suggestionsReducers.movieSuggestion}
          />
        </ThemeProvider>
      );
    }
    if (this.props.featuredReducers.movieFeatured) {
      return (
        <ThemeProvider theme={this.state.colorTheme ? lightTheme : darkTheme}>
          <MovieDetail
            changetheme={this.changetheme}
            list={this.props.featuredReducers.movieFeatured}
          />
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={this.state.colorTheme ? lightTheme : darkTheme}>
        <Container>
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
          <Button onPress={() => this.changetheme()} />
        </Container>
      </ThemeProvider>
    );
  }
}

const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const mapStateToProps = ({featuredReducers, suggestionsReducers}) => {
  return {featuredReducers, suggestionsReducers};
};

const mapDispatchToProps = {
  suggestion,
  featured,
  movie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
