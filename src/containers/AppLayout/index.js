import React, {useContext} from 'react';
import {RefreshControl} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../../../themeColors';

import {AuthContext} from '../../navigator/AuthProvider';

// COMPONENTS //
import {LayoutMovie, Header, ButtonOptions, Button} from '../../components';

// CONTAINERS //
import {
  SuggestionsList,
  UpcomingList,
  FeaturedList,
  MovieDetail,
} from '../index';

// REDUX //
import {connect} from 'react-redux';
import * as suggestionsActions from '../../redux/actions/suggestionsActions';
import * as featuredActions from '../../redux/actions/featuredActions';
import * as UpcomingActions from '../../redux/actions/UpcomingActions';

const {getSuggestions: suggestion} = suggestionsActions;
const {getFeatured: featured} = featuredActions;
const {getUpcoming: upcoming} = UpcomingActions;
const {setLenguage: newLenguegeSuggestion} = suggestionsActions;
const {setLenguage: newLenguegeFeatured} = featuredActions;
const {setLenguage: newLenguegeUpcoming} = UpcomingActions;

class AppLayout extends React.Component {
  state = {
    colortheme: false,
  };
  componentDidMount = async () => {
    const {suggestion, featured, upcoming} = this.props;
    await suggestion('es-ES');
    await featured('es-ES');
    await upcoming('es-ES');
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
    await suggestion('es-ES');
    await featured('es-ES');
    await upcoming('es-ES');
    this.setState({refreshing: false});
  };

  handleSuggestionLenguage = (type) => {
    const {newLenguegeSuggestion, suggestion} = this.props;
    if (type === 'EN') {
      suggestion('es-ES');
    } else if (type === 'ES') {
      newLenguegeSuggestion('en-US');
    }
  };

  handleFeaturedLenguege = (type) => {
    const {newLenguegeFeatured, featured} = this.props;
    if (type === 'EN') {
      featured('es-ES');
    } else if (type === 'ES') {
      newLenguegeFeatured('en-US');
    }
  };

  handleUpcomingLenguege = (type) => {
    const {newLenguegeUpcoming, upcoming} = this.props;
    if (type === 'EN') {
      upcoming('es-ES');
    } else if (type === 'ES') {
      newLenguegeUpcoming('en-US');
    }
  };

  changeLenguage = () => {
    const {
      suggestionsReducers,
      featuredReducers,
      upcomingReducers,
    } = this.props;
    this.handleSuggestionLenguage(suggestionsReducers.type);
    this.handleFeaturedLenguege(featuredReducers.type);
    this.handleUpcomingLenguege(upcomingReducers.type);
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
          <ButtonOptions
            changeLanguage={() => this.changeLenguage()}
            changetheme={() => this.changetheme()}
          />
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
  newLenguegeSuggestion,
  newLenguegeFeatured,
  newLenguegeUpcoming,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
