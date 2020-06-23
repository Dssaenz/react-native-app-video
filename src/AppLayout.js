import React from 'react';
import {RefreshControl} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../themeColors';

// COMPONENTS //
import {LayoutMovie, Header, Button} from './components';

// CONTAINERS //
import {
  SuggestionsList,
  UpcomingList,
  FeaturedList,
  MovieDetail,
} from './containers';

// REDUX //
import {connect} from 'react-redux';
import * as suggestionsActions from './redux/actions/suggestionsActions';
import * as featuredActions from './redux/actions/featuredActions';
import * as UpcomingActions from './redux/actions/UpcomingActions';

const {getSuggestions: suggestion} = suggestionsActions;
const {getFeatured: featured} = featuredActions;
const {getUpcoming: upcoming} = UpcomingActions;

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
    const {suggestion, featured, upcoming} = this.props;
    await suggestion();
    await featured();
    await upcoming();
    this.setState({refreshing: false});
  };

  render() {
    const {
      suggestionsReducers,
      featuredReducers,
      upcomingReducers,
    } = this.props;
    const {colorTheme, refreshing} = this.state;

    if (suggestionsReducers.movieSuggestion) {
      return (
        <ThemeProvider theme={colorTheme ? lightTheme : darkTheme}>
          <MovieDetail
            isActive
            changetheme={this.changetheme}
            list={suggestionsReducers.movieSuggestion}
          />
        </ThemeProvider>
      );
    }
    if (featuredReducers.movieFeatured) {
      return (
        <ThemeProvider theme={colorTheme ? lightTheme : darkTheme}>
          <MovieDetail
            changetheme={this.changetheme}
            list={featuredReducers.movieFeatured}
          />
        </ThemeProvider>
      );
    }
    if (upcomingReducers.movieUpcoming) {
      return (
        <ThemeProvider theme={colorTheme ? lightTheme : darkTheme}>
          <MovieDetail
            changetheme={this.changetheme}
            list={upcomingReducers.movieUpcoming}
          />
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={colorTheme ? lightTheme : darkTheme}>
        <Container>
          <Header />
          <LayoutMovie
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh}
                tintColor="#FFF"
              />
            }>
            <SuggestionsList />
            <FeaturedList />
            <UpcomingList />
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

const mapStateToProps = ({
  featuredReducers,
  suggestionsReducers,
  upcomingReducers,
}) => {
  return {featuredReducers, suggestionsReducers, upcomingReducers};
};

const mapDispatchToProps = {
  suggestion,
  featured,
  upcoming,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
